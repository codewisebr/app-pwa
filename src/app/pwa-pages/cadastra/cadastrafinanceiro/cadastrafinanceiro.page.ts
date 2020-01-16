import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
@Component({
  selector: 'app-cadastrafinanceiro',
  templateUrl: './cadastrafinanceiro.page.html',
  styleUrls: ['./cadastrafinanceiro.page.scss'],
})
export class CadastrafinanceiroPage implements OnInit {

  public valor:string;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    private routingService: AppRoutingPreloaderService
  ) { 
  
  }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminfinanceiro');
  }
  dismiss(){
    this.navCtrl.navigateRoot('/adminfinanceiro');
  }

  cadastrar(form:any){
      this.valor = JSON.stringify(form.value.valor);
      this.authService.financeiro(this.valor, form.value.mes).subscribe(data=>{
        this.alertService.presentToast("Financeiro criado com sucesso!");          
        this.dismiss();
      }, error => {
        this.alertService.presentToast("Preencha todos os campos!");
      }
      );
  }
}
