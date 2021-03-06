import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { ActivatedRoute } from '@angular/router';

import { ModalController, NavParams, NavController } from '@ionic/angular';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editmural',
  templateUrl: './editmural.page.html',
  styleUrls: ['./editmural.page.scss'],
})
export class EditmuralPage implements OnInit{
  public texto: string;
  public id:any;
  constructor(
    private authService: AuthService, 
    private alertService:AlertService, 
    private navCtrl: NavController,
    private router:ActivatedRoute,
    private routingService: AppRoutingPreloaderService
  ) { }
  ngOnInit(){}
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('mural');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.showMural();
  }
  dismiss(){
    this.navCtrl.navigateForward('/mural');
  }

  showMural(){
    this.authService.getMural().subscribe(data=>{
      for(let i=0; i<data.length;i++)
      {
        if(this.id == data[i].id){
          this.texto = data[i].texto;
          break;
        }
      }
    });
  }

  editar(form:any){
    this.authService.updateMural(this.id, form.value.texto).subscribe(resul=>{
      this.alertService.presentToast("Mural editado com sucesso!");
      this.dismiss();
    },error=>{
      this.alertService.presentToast('Preencha todos os campos!');
    });
  }

}
