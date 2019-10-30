import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from './../../../services/auth.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastraordem',
  templateUrl: './cadastraordem.page.html',
  styleUrls: ['./cadastraordem.page.scss'],
})
export class CadastraordemPage implements OnInit {
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminordem');
  }

  cadastrar(form:any){
    this.authService.user().subscribe(data=>{
      this.authService.ordem(form.value.ordem,data.id,form.value.nivel).subscribe(
        resul=> {
          this.dismiss();
          window.location.reload();
        }
      )
    });
  }
}