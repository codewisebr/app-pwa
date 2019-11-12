import { GlobalService } from 'src/app/services/global.service';
import { NavigationExtras } from '@angular/router';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {
  public financeiro:any[]=[];
  public id:any;
  constructor(
    private authService: AuthService, 
    private datePipe: DatePipe, 
    private navCtrl: NavController,
    private routingService: AppRoutingPreloaderService,
    private global:GlobalService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.id = this.global.user_id;
    this.showfinanceiro();
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('hisfinanceiro');
  }

  showfinanceiro(){
      this.authService.getFinanceiro(this.id).subscribe(resul=>{
        for(let i=0; i<resul.length; i++){
          this.financeiro[i] = resul[i];
          if(resul[i].data_pag == '0000-00-00' || resul[i].data_pag == null){
            this.financeiro[i].data_pag = "Aguardando"
          }
          else{
            this.financeiro[i].data_pag = this.datePipe.transform(resul[i].data_pag, "dd/MM");
          }
        }
      });
  }

  historico(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: this.id
      }
    };
    this.navCtrl.navigateForward(['/hisfinanceiro'], navigationExtras);
  }
}
