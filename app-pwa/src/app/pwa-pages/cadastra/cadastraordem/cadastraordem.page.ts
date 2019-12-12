import { GlobalService } from 'src/app/services/global.service';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastraordem',
  templateUrl: './cadastraordem.page.html',
  styleUrls: ['./cadastraordem.page.scss'],
})
export class CadastraordemPage implements OnInit {
  public id:any;
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private routingService: AppRoutingPreloaderService,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.id = this.global.user_id;
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminordem');
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminordem');
  }

  cadastrar(form:any){
      this.authService.ordem(form.value.ordem,this.id,form.value.nivel).subscribe(
        resul=> {
          this.dismiss();
          this.alertService.presentToast("Ordem cadastrada com sucesso!");
        }, error => {
          this.alertService.presentToast('Preencha todos os campos!');
        }
      );
  }
}