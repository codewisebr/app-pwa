import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastrareuniao',
  templateUrl: './cadastrareuniao.page.html',
  styleUrls: ['./cadastrareuniao.page.scss'],
})
export class CadastrareuniaoPage implements OnInit {
  public auxdata:any;
  public data:any;
  constructor
  (
    private authService: AuthService,
    private alertService: AlertService,\
    private routingService: AppRoutingPreloaderService,
  ) 
  { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminpresenca');
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminpresenca');
  }

  cadastrar(form:any){
    this.auxdata=form.value.data;
    this.data = this.auxdata.split('T')[0];
    this.authService.createReuniao(this.data).subscribe(data=>{
      this.alertService.presentToast(data);
      this.dismiss();
    });
  }
}
