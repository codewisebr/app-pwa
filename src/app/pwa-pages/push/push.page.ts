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
        'Authorization': 'key=AAAAYt2fEOU:APA91bHA3KYq96a5MHCet0DAWgpwxjF6QVu1YTATVgoVUgxU8U9oZ-xz6r2AHoqMvcyMMDj1TjBB6hPYwivTVmln3ry_uKitsv1nW-SZ16ptjwneFKS2u-O5fU_SHv9gZVadzUubRy3O'
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
