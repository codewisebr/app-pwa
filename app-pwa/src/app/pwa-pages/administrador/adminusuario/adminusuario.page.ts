import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppRoutingPreloaderService } from 'src/app/route-to-preload';

@Component({
  selector: 'app-adminusuario',
  templateUrl: './adminusuario.page.html',
  styleUrls: ['./adminusuario.page.scss'],
})
export class AdminusuarioPage implements OnInit {
  public user:any[]=[];
  public nome: any[]= [];
  public familia:any[]=[];
  public hidden:boolean;
  constructor(
    private authService: AuthService,
    private routingService: AppRoutingPreloaderService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('admin');
    await this.routingService.preloadRoute('cadastrafamilia');
    await this.routingService.preloadRoute('cadastrausuario');
  }
  ionViewWillEnter()
  {
    this.showUsuarios();
  }
  showUsuarios(){
    this.authService.getAllUser().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.user[i]=data[i];
        this.authService.getNome(data[i].id).subscribe(resul=>{
          this.nome[i] = resul;
        });
        this.authService.getFamilia(data[i].id).subscribe(resp=>{
          if(resp == 0)
            this.hidden = false;
          else{
            this.hidden = true;
            for(let i=0; i<resp.length; i++){
              this.familia[i] = resp[i];
            }
          }
        });
      }
    });
  }

  async adicionar(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/cadastrafamilia'], navigationExtras);
  }

  cadastrar(){
    this.navCtrl.navigateForward(['/cadastrausuario']);
  }

  verFamilia(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateForward(['/hisfamilia'], navigationExtras);
  }
}
