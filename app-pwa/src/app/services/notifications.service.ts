import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFireModule, FirebaseFunctions } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import * as app from 'firebase';
import { Observable, of, throwError, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public token:any;
  constructor(
    private afMessaging: AngularFireMessaging,
    private firebase: AngularFireFunctions,
    private toastCtrl: ToastController
  )
  {
    try {
      const _messaging = app.messaging();
      _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    } catch(e){}
  }
  
  async makeToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  }

  getPermission(): Observable<any>  {
    return this.afMessaging.requestToken.pipe(
      tap(token => (this.token = token))
    )
  }
  
  showMessages(): Observable<any> {
    return this.afMessaging.messages.pipe(
      tap(msg => {
        const body: any = (msg as any).notification.body;
        this.makeToast(body);
      })
    );
  }

  sub(topic) {
    this.firebase
      .httpsCallable('subscribeToTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.makeToast(`subscribed to ${topic}`)))
      .subscribe();
  }
  
  unsub(topic) {
    this.firebase
      .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.makeToast(`unsubscribed from ${topic}`)))
      .subscribe();
  }

    
}