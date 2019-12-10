import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrainfo',
  templateUrl: './cadastrainfo.page.html',
  styleUrls: ['./cadastrainfo.page.scss'],
})
export class CadastrainfoPage implements OnInit {

  constructor(
    private authService: AuthService, 
    private navCtrl:NavController,
    private routingService: AppRoutingPreloaderService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('admininfo');
  }
  dismiss(){
    this.navCtrl.navigateForward('/admininfo');
  }
  async cadastrar(form:any){
    this.authService.user().subscribe(data=>{
      this.authService.informativo(form.value.info,data.id,form.value.nivel).subscribe(
        resul=> {
          this.dismiss();
          this.alertService.presentToast("Informativo cadastrada com sucesso!");
        }
      );
    });
  }
}
