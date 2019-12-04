import { Platform } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  public user:any[]=[];
  public nome:any[]=[];
  public plataforma:number;
  public url:any;
  constructor(
    private authService: AuthService,
    private routingService: AppRoutingPreloaderService,
    private platform: Platform,
  ) 
  { 
  }
  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('cadastrafamilia');
  }
  ionViewWillEnter()
  {
    this.platform.ready().then(() => {
      if(this.platform.is('cordova')||this.platform.is('android')||this.platform.is('ios'))
      {
        this.plataforma = 0;
        this.showcontatoapp();
      }
      else if(this.platform.is('pwa')||this.platform.is('capacitor')||this.platform.is('desktop'))
      {
        this.plataforma = 1;
        this.showcontato();
      }
    }); 
  }

  showcontato(){
    this.authService.getAllUser().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.user[i] = data[i];
        this.authService.getNome(data[i].id).subscribe(resul=>{
          this.nome[i] = resul[0];
        });
      }
    });
  }

  showcontatoapp(){
    this.authService.getAllUser().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.user[i] = data[i];
        this.authService.getNome(data[i].id).subscribe(resul=>{
          this.user[i].id = resul[0];
        });
      }
    });
  }

  whatsapp(){
  }
}
