import { AlertService } from './../../../services/alert.service';
import { AlertController } from '@ionic/angular';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisordem',
  templateUrl: './hisordem.page.html',
  styleUrls: ['./hisordem.page.scss'],
})
export class HisordemPage implements OnInit {

  public ordem: any[]=[];
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
    await this.routingService.preloadRoute('adminordem');
  }
  ionViewWillEnter()
  {
    this.showordem();
  }
  async showordem() {
    await this.authService.getAllOrdem().subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          this.ordem[i]=data[i].ordem;
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
    this.authService.deleteHistOrdem().subscribe(data=>{
      window.location.reload();
      this.alertService.presentToast("Histórico apagado com sucesso!");
    });
  }
}
