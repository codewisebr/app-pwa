import { GlobalService } from 'src/app/services/global.service';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { NavController } from '@ionic/angular';

import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-cadastraagape',
  templateUrl: './cadastraagape.page.html',
  styleUrls: ['./cadastraagape.page.scss'],
})
export class CadastraagapePage implements OnInit{
  
  public id:any;
  
  constructor(
    private authService: AuthService, 
    private alertService:AlertService,
    private navCtrl: NavController, 
    private routingService: AppRoutingPreloaderService,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminagape');
  }
  ionViewWillEnter(){
    this.id = this.global.user_id;
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminagape');
  }
  cadastrar(form: any){
      this.authService.agape(form.value.agape, this.id, form.value.data).subscribe(
        resul=> {
          this.alertService.presentToast("Ágape criada com sucesso!");          
          this.dismiss();
        }, error => {
          this.alertService.presentToast('Preencha todos os campos!');
        }
      );
  }
}
