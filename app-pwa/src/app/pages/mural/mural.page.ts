import { Storage } from '@ionic/storage';
import { GlobalService } from 'src/app/services/global.service';
import { AppRoutingPreloaderService } from './../../route-to-preload';
import { NavigationExtras } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { EditmuralPage } from './../../pwa-pages/edit/editmural/editmural.page';
import { CadastramuralPage } from './../../pwa-pages/cadastra/cadastramural/cadastramural.page';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.page.html',
  styleUrls: ['./mural.page.scss'],
})
export class MuralPage implements OnInit {
  public mural:any[]=[];
  public aux = " ";
  public disabled1=true;
  public id:any;
  constructor(
    private authService:AuthService, 
    private modalCtrl: ModalController,
    private alertService: AlertService,
    private navCtrl: NavController,
    private routingService: AppRoutingPreloaderService,
    private global: GlobalService,
    private storage: Storage
    ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('cadastramural');
  }
  ionViewWillEnter(){
    this.id = this.global.user_id;
    this.showmural();
  }
  async showmural(){
    this.authService.getMural().subscribe(
      data=>{
        for(let i=0; i<data.length;i++){
          this.mural[i] = data[i];

          //se o mural for da pessoa logada
            if(data[i].id_users == this.id)
              this.mural[i].ativo = 1;
            else
              this.mural[i].ativo = 0;

          //pega o nome
          this.authService.getNome(data[i].id_users).subscribe(resul=>{
             this.mural[i].nome = resul[0];
          });
        }
    });
    
  }

  async cadastrar(){
    this.navCtrl.navigateForward('/cadastramural');
  }

  async editar(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/editmural'], navigationExtras);
  }

  delete(id:any){
    this.authService.deletemural(id).subscribe(data=>{
      window.location.reload();
      this.alertService.presentToast("Postagem excluída com sucesso!");
    });
  }
}
