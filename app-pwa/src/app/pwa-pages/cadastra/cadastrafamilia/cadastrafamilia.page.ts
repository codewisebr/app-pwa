import { DatePipe } from '@angular/common';
import { AlertService } from './../../../services/alert.service';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';

@Component({
  selector: 'app-cadastrafamilia',
  templateUrl: './cadastrafamilia.page.html',
  styleUrls: ['./cadastrafamilia.page.scss'],
})
export class CadastrafamiliaPage implements OnInit {
  public grau = [
    'Pai', 'Mãe', 'Filho', 'Irmão', 'Irmã', 'Filho', 'Filha', 'Avô', 'Avó', 'Neto', 'Neta',
    'Tio', 'Tia', 'Sobrinho', 'Sobrinha', 'Primo', 'Prima', 'Sogro', 'Sogra', 'Genro', 'Nora',
    'Padrasto','Madrasta','Enteado','Enteada','Cunhado','Cunhada','Madrinha','Padrinho'
  ];
  public id:any;
  public data:any;
  constructor(
    private routingService: AppRoutingPreloaderService,
    private router: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private dataPipe: DatePipe
  ) { }

  ngOnInit() {
  }
  
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminusuario');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminusuario');
  }
  cadastrar(form:any){
    this.data = this.dataPipe.transform(form.value.data, 'yyyy-MM-dd');
    this.authService.familia(this.id, form.value.grau, this.data).subscribe(
      resul=> {
        this.dismiss();
        window.location.reload();
        this.alertService.presentToast("Familiar cadastrado com sucesso!"); 
      }
    );
  }
}
