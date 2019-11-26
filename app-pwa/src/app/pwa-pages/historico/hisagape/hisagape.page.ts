import { AlertController } from '@ionic/angular';
import { AlertService } from './../../../services/alert.service';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisagape',
  templateUrl: './hisagape.page.html',
  styleUrls: ['./hisagape.page.scss'],
})
export class HisagapePage implements OnInit {
  public agape: any[]=[];
  public date: any[]=[];
  public ativo: any[]=[];
  constructor(
    public authService: AuthService, 
    private dataPipe: DatePipe,
    private routingService:AppRoutingPreloaderService,
    private alertService: AlertService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminagape');
  }
  ionViewWillEnter()
  {
    this.showagape();
  }
  async showagape() {
    await this.authService.getAllAgape().subscribe(
      data=>{
        
        for(let i=0; i<data.length;i++)
        {
          this.agape[i]=data[i].agape;
          this.date[i]=(this.dataPipe.transform(data[i].data, "dd/MM/yyyy"));
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
    this.authService.deleteHistAgape().subscribe(data=>{
      this.alertService.presentToast("Histórico apagado com sucesso!");
      window.location.reload();
    });
  }
}
