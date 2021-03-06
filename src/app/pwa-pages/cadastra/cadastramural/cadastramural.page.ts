import { GlobalService } from 'src/app/services/global.service';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastramural',
  templateUrl: './cadastramural.page.html',
  styleUrls: ['./cadastramural.page.scss'],
})
export class CadastramuralPage implements OnInit{
  public id:any;
  constructor(
    private authService: AuthService, 
    private alertService:AlertService,
    private navCtrl: NavController,
    private routingService: AppRoutingPreloaderService,
    private global: GlobalService
  ) { }

  ngOnInit(){

  }
  ionViewWillEnter(){
    this.id = this.global.user_id;
  }

  async ionViewDidEnter() {
    await this.routingService.preloadRoute('mural');
  }
  dismiss(){
    this.navCtrl.navigateForward('/mural');
  }
  cadastrar(form:any){
 
      this.authService.mural(this.id, form.value.texto).subscribe(
        resul=>{
        this.dismiss();
          this.alertService.presentToast("Mural criado com sucesso!");
        }, error => {
          this.alertService.presentToast("Preencha todos os campos!");
        }
      );
  }
}
