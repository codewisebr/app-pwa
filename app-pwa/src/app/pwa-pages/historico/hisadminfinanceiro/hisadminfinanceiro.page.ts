import { DatePipe } from '@angular/common';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisadminfinanceiro',
  templateUrl: './hisadminfinanceiro.page.html',
  styleUrls: ['./hisadminfinanceiro.page.scss'],
})
export class HisadminfinanceiroPage implements OnInit {

  public financeiro:any[]=[];
  public id:any;
  constructor(
    private routingService: AppRoutingPreloaderService,
    private router: ActivatedRoute,
    private authService: AuthService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('hisrelatorio');
  }
  ionViewWillEnter(){
    this.router.queryParams.subscribe(params => {
      this.id = params["id"];
    });
    this.showFinanceiro();
  }
  showFinanceiro(){
    this.authService.getAllFinanceiro(this.id).subscribe(resul=>{
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
}
