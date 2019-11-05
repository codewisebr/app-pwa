import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { EditsenhaPage } from './../editsenha/editsenha.page';
import { EditdadosPage } from './../editdados/editdados.page';
import { AuthService } from '../../../services/auth.service';
import { ToastController, MenuController, AlertController, ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public fname: any;
  public lname: any;
  public email: any;
  public endereco: any;
  public cidade: any;
  public estado: any
  public telefone: any;
  public data_nasc: any;
  public id: any;
  public nivel:any;
  public cargo: any;
  public profissao: any;
  constructor(
    private authService : AuthService,  
    private routingService: AppRoutingPreloaderService,
    private navCtrl:NavController
  ) {}

  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.showuser();
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('editsenha');
    await this.routingService.preloadRoute('editdados');
  }
  showuser()
  {
    this.authService.user()
    .subscribe(
    data=>{ 
      this.fname = data.first_name.replace("\"", "");
      this.lname = data.last_name.replace("\"", "");
      this.email = data.email.replace("\"", "");
      this.endereco = data.endereco.replace("\"", "");
      this.cidade = data.cidade.replace("\"", "");
      this.estado = data.estado.replace("\"", "");
      this.telefone = data.telefone.replace("\"", "");
      this.data_nasc = data.data_nasc.replace("\"", "");
      this.profissao = data.profissao.replace("\"", "");
      this.authService.getIdCargos(data.cargo_id).subscribe(resul =>{
        this.cargo = resul;
      });
      if(data.nivel == 1)
        this.nivel = "Aprendiz";
      else if(data.nivel == 2)
        this.nivel = "Companheiro";
      else if(data.nivel == 3)
        this.nivel = "Mestre"
    }
    , error=>{ 
      console.log("error: " + error);
    });
  }

  async editardados(){
    this.navCtrl.navigateForward('/editdados');
  }

  async editarsenha(){
    this.navCtrl.navigateForward('/editsenha');
  }
  

}
