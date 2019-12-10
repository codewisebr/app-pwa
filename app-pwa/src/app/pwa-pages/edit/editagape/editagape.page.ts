import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editagape',
  templateUrl: './editagape.page.html',
  styleUrls: ['./editagape.page.scss'],
})
export class EditagapePage implements OnInit{
  public agape: any;
  public data: any;
  public id:any;
  constructor(
    private authService: AuthService, 
    private alertService:AlertService,
    private navCtrl:NavController,
    private router:ActivatedRoute,
    private routingService:AppRoutingPreloaderService
  ) { }
    ngOnInit(){}
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminagape');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.showAgape();
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminagape');
  }

  showAgape() {
    this.authService.getAgape(0).subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          if(this.id == data[i].id){
            this.agape = data[i].agape;
            this.data = data[i].data;
            break;
          }
        }
    },
    error=>{
      // console.log(error);
    });
  }
  async editar(form:any){
    this.authService.getAgape(0).subscribe(
    data=>{
      for(let i=0; i<data.length;i++)
      {
        if(this.id == data[i].id)
        {
          this.authService.updateAgape(data[i].id, form.value.agape, 1, form.value.data).subscribe(
            resul=>{              
              this.dismiss();
              this.alertService.presentToast("Ágape editado com sucesso!");
            }
          );
          break;
        }
      }
    },
    error=>{
      // console.log(error);
    });
  }
}
