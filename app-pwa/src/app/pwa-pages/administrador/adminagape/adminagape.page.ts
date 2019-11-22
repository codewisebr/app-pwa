import { NavigationExtras } from '@angular/router';

import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { CadastraagapePage } from './../../cadastra/cadastraagape/cadastraagape.page';
import { EditagapePage } from './../../edit/editagape/editagape.page';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminagape',
  templateUrl: './adminagape.page.html',
  styleUrls: ['./adminagape.page.scss'],
})
export class AdminagapePage implements OnInit {
  public agape: any[]=[];
  public disabled1=true;
  constructor(
    private authService: AuthService,
    private alertService: AlertService, 
    private alertCtrl:AlertController, 
    private navCtrl: NavController, 
    private routingService: AppRoutingPreloaderService
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('editagape');
    await this.routingService.preloadRoute('cadastraagape');
    await this.routingService.preloadRoute('hisagape');
  }
  ionViewWillEnter(){
    this.showagape();
    this.permissao();
  }
  permissao(){
    //permissao para cadastrar
    this.authService.user().subscribe(data=>{
      if(data.cargo_id == 11 || data.cargo_id == 8 || data.cargo_id ==4){
        this.disabled1 = false;
      }
    });
  }
  async showagape()
  {
    await this.authService.getAgape(1).subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          this.agape[i]=data[i];
        }
    },
    error=>{
      console.log(error);
    });
  }

  async cadastrar(){
    this.navCtrl.navigateForward('/cadastraagape');
  }

  async editar(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/editagape'], navigationExtras);
  }

  async delete(id: any){
    await this.authService.getAgape(0).subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          if(id== data[i].id)
          {
            //muda o ativo para zero
            this.authService.updateagape(data[i].id, data[i].agape, 0, data[i].data).subscribe(
              data=>{
                this.alertService.presentToast("Ordem excluido com sucesso!");
                window.location.reload();
              }
            );
            break;
          }
        }
    },
    error=>{
      console.log(error);
    });
  }

  historico(){
    this.navCtrl.navigateForward('/hisagape');
  }
}
