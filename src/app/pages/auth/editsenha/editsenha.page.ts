import { GlobalService } from 'src/app/services/global.service';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from './../../../services/alert.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editsenha',
  templateUrl: './editsenha.page.html',
  styleUrls: ['./editsenha.page.scss'],
})
export class EditsenhaPage implements OnInit {

  public password: any;
  public id:any;
  constructor(
    private alertService: AlertService, 
    private authService: AuthService, 
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
    await this.routingService.preloadRoute('account');
  }
  dismiss(){
    this.navCtrl.navigateForward('/account');
  }

  editar(form: any)
  {
      //verifica a senha atraves da senha
      this.authService.checkPassword(this.id, form.value.password1).subscribe(
        resp => {
          if(resp == false){
            this.alertService.presentToast('Senha Incorreta!');
          }
          else if(resp == true){
            //atualiza a nova senha
            this.authService.updatePassword(this.id, form.value.password2).subscribe(
              resp => {
                this.alertService.presentToast('Senha atualizada!');
                this.navCtrl.navigateRoot('/account');
              },
              error => {
                this.alertService.presentToast('Erro ao tentar atualizar senha, tente mais tarde.');
              }
            );
          }
        },
        error => {
          this.alertService.presentToast('Preencha todos os campos!');
        }
      );
  }
}
