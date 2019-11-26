import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { ActivatedRoute } from '@angular/router';

import { NavParams, ModalController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.page.html',
  styleUrls: ['./editinfo.page.scss'],
})
export class EditinfoPage implements OnInit {

  public checked1 = "false";
  public checked2 = "false";
  public checked3 = "false";
  public inform:string;
  public nivel:any;
  public id:any;
  constructor(
    private authService: AuthService, 
    private alertService: AlertService, 
    private navCtrl: NavController,
    private router:ActivatedRoute,
    private routingService: AppRoutingPreloaderService
    ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('admininfo');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.showinfo();
  }

  showinfo() {
    this.authService.getInfo().subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          if(this.id == data[i].id){
            this.inform = data[i].info;
            this.nivel = data[i].nivel;
            switch (this.nivel)
            {
              case 1: 
                this.checked1 = "true";
                break;
              case 2:
                this.checked2 = "true";
                break;
              case 3:
                this.checked3 = "true";
                break;
            }
            break;
          }
        }
    },
    error=>{
      console.log(error);
    });
  }

  dismiss(){
    this.navCtrl.navigateRoot('/admininfo');
  }

  async editar(form:any){
    this.authService.getInfo().subscribe(
    data=>{
      for(let i=0; i<data.length;i++)
      {
        if(this.id == data[i].id)
        {
          this.authService.updateInfo(data[i].id, form.value.novo, 1, form.value.nivel).subscribe(
            data=>{
              this.dismiss();
              this.alertService.presentToast("Informativo editado com sucesso!");
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

}
