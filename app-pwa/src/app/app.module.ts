import { HomePage } from './pwa-pages/home/home.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NgModule, ɵLocaleDataIndex } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import {DatePipe, registerLocaleData} from '@angular/common';
import { Push } from '@ionic-native/push/ngx';
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    IonicStorageModule.forRoot({
      name: 'new',
      driverOrder: ['localstorage', 'websql', 'sqlite' ]
    }),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    Push,
    SocialSharing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
