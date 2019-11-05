import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisfamilia',
  templateUrl: './hisfamilia.page.html',
  styleUrls: ['./hisfamilia.page.scss'],
})
export class HisfamiliaPage implements OnInit {
  public id: any;
  public familia:any[]=[];
  public hidden:boolean;
  public nome:any;
  constructor(
    private routingService: AppRoutingPreloaderService,
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthService,
    private dataPipe: DatePipe
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
    this.showfamilia();
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminagape');
  }

  showfamilia(){
    
    this.authService.getUsers(this.id).subscribe(data=>{
      this.nome = data[0].last_name;
    });
    this.authService.getFamilia(this.id).subscribe(resp=>{
      if(resp == 0)
        this.hidden = false;
      else{
        this.hidden = true;
        for(let i=0; i<resp.length; i++){
          this.familia[i] = resp[i];
          this.familia[i].data_nasc = (this.dataPipe.transform(resp[i].data_nasc, "dd/MM/yyyy"));
        }
      }
    });
  }
}
