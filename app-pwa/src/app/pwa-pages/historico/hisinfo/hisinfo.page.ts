import { AlertService } from './../../../services/alert.service';
import { GlobalService } from './../../../services/global.service';
import { AlertController } from '@ionic/angular';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisinfo',
  templateUrl: './hisinfo.page.html',
  styleUrls: ['./hisinfo.page.scss'],
})
export class HisinfoPage implements OnInit {

  public info: any[]=[];
  public date: any[]=[];
  public ativo: any[]=[];

  constructor(
    public authService: AuthService, 
    private dataPipe: DatePipe,
    private routingService: AppRoutingPreloaderService,
    private alertCtrl: AlertController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('admininfo');
  }
  ionViewWillEnter()
  {
    this.showinfo();
  }
  async showinfo() {
    await this.authService.getAllInfo().subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          this.info[i]=data[i].info;
          this.date[i]=(this.dataPipe.transform(data[i].created_at, "dd/MM/yyyy"));
          if(data[i].ativo == 1)
            this.ativo[i] = "Sim";
          else  
            this.ativo[i] = "Não";
        }
    },
    error=>{
      console.log(error);
    });
  }

  async popup(){
    let alert = await this.alertCtrl.create({
      header: 'Ao apagar o histórico os registros serão apagados permanentemente. Deseja realmente excluir?',
      buttons: [
        {
          text: 'Cancelar',
          //role cancel deixa ele como segunda opcao
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Continuar',
          handler: ()=> {
            this.delete();
          }
        }
      ]
    });
    await alert.present();
  }

  delete(){
    this.authService.deleteHistInfo().subscribe(data=>{
      this.alertService.presentToast("Histórico apagado com sucesso!");
      window.location.reload();
    });
  }
}
