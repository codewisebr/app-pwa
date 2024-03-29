import { AppRoutingPreloaderService } from './../../../route-to-preload';

import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { AuthService } from './../../../services/auth.service';
import { AlertService } from './../../../services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editordem',
  templateUrl: './editordem.page.html',
  styleUrls: ['./editordem.page.scss'],
})
export class EditordemPage implements OnInit {

  public ordem:string;
  public nivel:any;
  public checked1 = "false";
  public checked2 = "false";
  public checked3 = "false";
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
    await this.routingService.preloadRoute('adminagape');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.showOrdem();
  }
  showOrdem() {
    
    this.authService.getOrdem().subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          if(this.id == data[i].id){
            this.nivel = data[i].nivel;
            this.ordem = data[i].ordem;
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
      // console.log(error);
    });
  }
  
  dismiss(){
    this.navCtrl.navigateForward('/adminordem');
  }

  editar(form:any){
    this.authService.getOrdem().subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          //informação tem que estar ativa
          if(this.id == data[i].id)
          {
            this.authService.updateOrdem(data[i].id, form.value.novo, 1, form.value.nivel).subscribe(
              data=>{
                this.dismiss();
                this.alertService.presentToast("Ordem editado com sucesso!");
              }, error=>{
                this.alertService.presentToast('Preencha todos os campos!');
              }
            );
            break;
          }
        }
    });
  }
}
