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
  constructor(
    private authService: AuthService, 
    private datePipe: DatePipe, 
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.showfinanceiro();
  }

  showfinanceiro(){
    this.authService.user().subscribe(data=>{
      this.authService.getFinanceiro(data.id).subscribe(resul=>{
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
    });
  }

  historico(){
    this.navCtrl.navigateForward('/hisfinanceiro');
  }
}
