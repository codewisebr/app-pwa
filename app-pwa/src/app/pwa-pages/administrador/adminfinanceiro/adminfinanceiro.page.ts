import { AuthService } from './../../../services/auth.service';
import { CadastrafinanceiroPage } from './../../cadastra/cadastrafinanceiro/cadastrafinanceiro.page';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adminfinanceiro',
  templateUrl: './adminfinanceiro.page.html',
  styleUrls: ['./adminfinanceiro.page.scss'],
})
export class AdminfinanceiroPage implements OnInit {
  public disabled1=true;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.showsituacao();
    this.permissao();
  }
  permissao(){
    this.authService.user().subscribe(data=>{
      if(data.cargo_id == 1 || data.cargo_id == 3 || data.cargo_id == 4){
        this.disabled1 = false;
      }
    });
  }

  showsituacao(){

  }

  boleto()
  {

  }

  async cadastrar(){
    this.navCtrl.navigateRoot('/cadastrafinanceiro');
  }

  relatorio(){
    
  }
}
