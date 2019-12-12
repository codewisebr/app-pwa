import { HomePage } from './pwa-pages/home/home.page';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import { Platform, MenuController, NavController, IonSplitPane, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';
import {firebase} from '@firebase/app';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  rootPage = HomePage;
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
      title: 'Notificações',
      url: '/push',
      icon: 'notifications'
    },
    {
      title: 'Minha conta',
      url: '/account',
      icon: 'contact'
    }
  ];

  public disabled: boolean;
  public showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    private alertCtrl : AlertController,
    private push: Push,
  ){
    this.initializeApp();
  }
  async ionViewWillEnter() {
  }
  async ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
}
  
  permissao(){
    this.platform.ready().then(() => {
      if(this.platform.is('android')||this.platform.is('ios'))
      { 
        this.menu.enable(true, 'app');
        this.menu.enable(false, 'web');
        this.disabled = false;
        
      }
      else{        
        this.menu.enable(true, 'web');
        this.menu.enable(false, 'app');
        this.disabled = true;
      }
    });
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(300).subscribe(() => this.showSplash = false);
      this.initializeFirebase();
    });
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.permissao();
      }
      else{
        this.menu.enable(false, 'web');
        this.menu.enable(false, 'app');
      }
    });
  }
  private initializeFirebase() {
    const options: PushOptions = {
      android: {
        senderID: '378697952415',
        topics: ['all'],
      },
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    }
    this.platform.ready().then(() => {
      if(this.platform.is('android')){
        const pushObject: PushObject = this.push.init(options);

        pushObject.on('registration').subscribe(
          res => {
            //console.log(` ${res.registrationId}`);
            pushObject.subscribe('all').then((res:any) => {
              //console.log("subscribed to topic: ", res);
          });
          }
        );
    
        pushObject.on('notification').subscribe(
          res => {
            //console.log(`${res.message}`)
          }
        );
      }
      else{
      }
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
                this.navCtrl.navigateRoot('/home');
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
