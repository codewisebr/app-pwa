import { NotificationsService } from './services/notifications.service';
import { Storage } from '@ionic/storage';
import { AppRoutingPreloaderService } from './route-to-preload';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';
import { Platform, MenuController, NavController, IonSplitPane, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
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
    private storage: Storage,
    private notificationsService: NotificationsService
  ) {
    this.initializeApp();
  }
  async ngOnInit() {
    AngularFireModule.initializeApp(environment.firebaseConfig);
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
      if(this.platform.is('cordova')||this.platform.is('android')||this.platform.is('ios'))
      { 
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.menu.enable(true, 'app');
        this.menu.enable(false, 'web');
        this.disabled = false;
      }
      else if(this.platform.is('pwa')||this.platform.is('capacitor')||this.platform.is('desktop')){
        
        this.menu.enable(true, 'web');
        this.menu.enable(false, 'app');
        this.disabled = true;
      }
  
    });
  }
  initializeApp() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        console.log('logado');
        this.permissao();
      }
      else{
        this.menu.enable(false, 'web');
        this.menu.enable(false, 'app');
      }
    });
    this.authService.reuniao().subscribe(data=>{
    });
    this.notificationsService.showMessages().subscribe();
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
