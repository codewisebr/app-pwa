import { NavigationExtras } from '@angular/router';

import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { EditpresencaPage } from './../../edit/editpresenca/editpresenca.page';
import { DatePipe } from '@angular/common';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpresenca',
  templateUrl: './adminpresenca.page.html',
  styleUrls: ['./adminpresenca.page.scss'],
})
export class AdminpresencaPage implements OnInit {
  public data:any;
  public confirm:boolean;
  public lista: any[] = [];
  public motivo: any[] = [];
  public name: any[]=[];
  public presenca: any[] = [];
  public aux = " ";

  constructor(
    private authService: AuthService, 
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private dataPipe: DatePipe, 
    private routingService: AppRoutingPreloaderService
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('editpresenca');
    await this.routingService.preloadRoute('hispresenca');
  }
  ionViewWillEnter()
  {
    this.showData();
    this.showLista();
  }
  async showData()
  {
    //mostra a data se tiver
    await this.authService.getReuniao()
    .subscribe(
    data=>{ 
      this.data = (this.dataPipe.transform(data[0].data, "dd/MM"));
    }
    , error=>{ 
      // console.log("error: " + error);
    });
  }

  async showLista() {

    await this.authService.getLista().subscribe(
      data=>{
        if(JSON.stringify(data) == "{}")
        {
          this.confirm = false;
        } 
        else 
        {    
          this.confirm = true;
          for(let i=0; i<data.length;i++)
          {
            this.lista[i]=data[i];
            if(data[i].presenca == 0)
            {
              this.lista[i].presenca = "Não estará presente";
            }
            else{
              this.lista[i].presenca = "Estará presente";
            }
            this.authService.getNome(data[i].id_user).subscribe(resul=>{
              this.name[i] = resul[0];
            });
          }
        }
    },
    error=>{
      // console.log(error);
    });
  }

  historico()
  {
    this.navCtrl.navigateForward('/hispresenca');
  }

  async editar(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/editpresenca'], navigationExtras);
  }
}