import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { Component, OnInit } from '@angular/core';
import { compilePipeFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-hisrelatorio',
  templateUrl: './hisrelatorio.page.html',
  styleUrls: ['./hisrelatorio.page.scss'],
})
export class HisrelatorioPage implements OnInit {
  public nome:any[]=[];
  constructor(
    private routingService: AppRoutingPreloaderService,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('hisadminfinanceiro');
    await this.routingService.preloadRoute('adminfinanceiro');
  }
  ionViewWillEnter()
  {
    this.showlista();
  }
  showlista(){
    this.authService.getAllUser().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.authService.getNome(data[i].id).subscribe(resul=>{
          this.nome[i] = resul;
        });
      }
    });
  }

  historico(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/hisadminfinanceiro'], navigationExtras);
  }

}
