import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavComponent } from '@ionic/core';
@Component({
  selector: 'app-cadastrafinanceiro',
  templateUrl: './cadastrafinanceiro.page.html',
  styleUrls: ['./cadastrafinanceiro.page.scss'],
})
export class CadastrafinanceiroPage implements OnInit {

  constructor(
    private navCtrl: NavController) { 
  
  }

  ngOnInit() {
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminfinanceiro');
  }

  cadastrar(form:any){
    
  }
}
