import { Storage } from '@ionic/storage';
import { AppRoutingPreloaderService } from './route-to-preload';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform, MenuController, NavController, IonSplitPane, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Mural',
      url: '/mural',
      icon: 'chatbubbles'
    },
    {
      title: 'Informativos',
      url: '/informativo',
      icon: 'paper'
    },
    {
      title: 'Ágape',
      url: '/agape',
      icon: 'list'
    },
    {
      title: 'Ordem do dia',
      url: '/ordem',
      icon: 'today'
    },
    {
      title: 'Financeiro',
      url: '/financeiro',
      icon: 'cash'
    },
    {
      title: 'Work to do',
      url: '/work',
      icon: 'bookmark'
    },
    {
      title: 'Contatos',
      url: '/contatos',
      icon: 'contacts'
    },
    {
      title: 'My account',
      url: '/account',
      icon: 'contact'
    }
  ];
  public appPage = [
    {
      title: 'Home',
      url: '/admin',
      icon: 'home'
    },
    {
      title: 'Mural',
      url: '/mural',
      icon: 'chatbubbles'
    },
    {
      title: 'Lista de presença',
      url: '/adminpresenca',
      icon: 'list-box'
    },
    {
      title: 'Informativos',
      url: '/admininfo',
      icon: 'paper'
    },
    {
      title: 'Ágape',
      url: '/adminagape',
      icon: 'list'
    },
    {
      title: 'Ordem do dia',
      url: '/adminordem',
      icon: 'today'
    },
    {
      title: 'Financeiro',
      url: '/adminfinanceiro',
      icon: 'cash'
    },
    {
      title: 'Contatos',
      url: '/contatos',
      icon: 'contacts'
    },
    {
      title: 'Usuários',
      url: '/adminusuario',
      icon: 'person-add'
    },
    {
      title: 'Minha conta',
      url: '/account',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    private alertCtrl : AlertController,
    private routingService: AppRoutingPreloaderService,
    private storage: Storage
  ) {
    this.initializeApp();
  }
  async ionViewWillEnter() {
    await this.routingService.preloadRoute('dashboard');
    await this.routingService.preloadRoute('admin');
    await this.routingService.preloadRoute('mural');
    await this.routingService.preloadRoute('account');
  }
  public disabled: boolean;
  permissao(){
    this.platform.ready().then(() => {
      this.storage.get('user_id').then(data=>{
        this.authService.getUserCargo(data).subscribe(resp=>{
          //para acessar o admin tem que estar logado com cargos especificos
          if(resp<12 || resp == 18 )
          {
            this.navCtrl.navigateRoot('/admin');
            this.menu.enable(true, 'web');
            this.menu.enable(false, 'app');
            this.disabled = true;
          }
          else{
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.navCtrl.navigateRoot('/dashboard');
            this.menu.enable(true, 'app');
            this.menu.enable(false, 'web');
            this.disabled = false;
          }
        });
      });
    });
  }
  initializeApp() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.permissao();
      }
    });
    this.authService.reuniao().subscribe(data=>{
    });
  }

  async logout() {
    let alert = await this.alertCtrl.create({
      header: 'Deseja mesmo sair?',
      buttons: [
        {
          text: 'Não',
          role:'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Sim',
          handler: ()=>{
            this.authService.logout().subscribe(
              data => {
                this.alertService.presentToast(data['message']); 
                window.location.reload();      
              },
              error => {
                console.log(error);
              },
              () => {
                this.navCtrl.navigateRoot('/home');
              }
            );
          } 
        }
      ]
    });
    await alert.present();
  }
  
}
