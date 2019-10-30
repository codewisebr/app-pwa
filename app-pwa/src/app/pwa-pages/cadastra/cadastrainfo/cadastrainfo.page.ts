import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrainfo',
  templateUrl: './cadastrainfo.page.html',
  styleUrls: ['./cadastrainfo.page.scss'],
})
export class CadastrainfoPage implements OnInit {

  constructor(
    private authService: AuthService, 
    private navCtrl:NavController) { }

  ngOnInit() {
  }
  dismiss(){
    this.navCtrl.navigateForward('/admininfo');
  }
  async cadastrar(form:any){
    this.authService.user().subscribe(data=>{
      this.authService.informativo(form.value.info,data.id,form.value.nivel).subscribe(
        resul=> {
          this.dismiss();
          window.location.reload();
        }
      );
    });
  }
}
