import { AlertService } from 'src/app/services/alert.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';
import { Component, OnInit } from '@angular/core';
import {firebase} from '@firebase/app';
@Component({
  selector: 'app-push',
  templateUrl: './push.page.html',
  styleUrls: ['./push.page.scss'],
})
export class PushPage implements OnInit {

  constructor(
    private routingService: AppRoutingPreloaderService,
    private http: HttpClient,
    private alertService: AlertService,
  ) 
  { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.routingService.preloadRoute('admin');
  }

  ionViewWillEnter()
  {

  }
  
  URL = 'https://fcm.googleapis.com/fcm/send';
  showPush(form:any){
    if(form.value.titulo == '' || form.value.corpo == ''){
        this.alertService.presentToast('Preencha todos os campos!');
    }
    else{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAWCwoLJ8:APA91bFg4SlPUGbXFDz7kYKQpXNvGchFwV-VHD53ACgTYRz5SZHJnTZbRTJdejtJ2VTG8GPjliEfKx4EsjEjqoJYlAS6LSCTITPk7CG1WNpBSryK4TD3Xf37sYWUjIpBmWMIS1j7P2s8'
      });
      return this.http.post(this.URL,
        {
        "notification": {
            "title": form.value.titulo,
            "body": form.value.corpo,
        },
        "to": "/topics/all"
        }, { headers: headers }
      ).subscribe(
        data => {
          this.alertService.presentToast('Notificação enviada com sucesso!');
        },error => {
          this.alertService.presentToast('Erro ao tentar enviar notificação, tente mais tarde.');
        }
      );
    }
  }
}
