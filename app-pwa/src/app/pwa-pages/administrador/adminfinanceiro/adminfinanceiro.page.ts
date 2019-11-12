
import { AppRoutingPreloaderService } from './../../../route-to-preload';
import { AlertService } from './../../../services/alert.service';
import { DatePipe } from '@angular/common';
import { AuthService } from './../../../services/auth.service';
import { CadastrafinanceiroPage } from './../../cadastra/cadastrafinanceiro/cadastrafinanceiro.page';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adminfinanceiro',
  templateUrl: './adminfinanceiro.page.html',
  styleUrls: ['./adminfinanceiro.page.scss'],
})
export class AdminfinanceiroPage implements OnInit {
  public disabled1=true;
  public financeiro:any[]=[];
  public mes:string;
  public data = new Date();
  public atual:any;
  public pagamento:any;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController, 
    private datePipe: DatePipe,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private routingService: AppRoutingPreloaderService
  ) { }
  ngOnInit() {
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('hisrelatorio');
    await this.routingService.preloadRoute('cadastrafinanceiro');
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
  showmes(mes:any){
    if(mes == 1)
    this.atual = "Janeiro";
    else if(mes == 2)
    this.atual = "Fevereiro";
    else if(mes == 3)
    this.atual = "Março";
    else if(mes == 4)
    this.atual = "Abril";
    else if(mes == 5)
    this.atual = "Maio";
    else if(mes == 6)
    this.atual = "Junho";
    else if(mes == 7)
    this.atual = "Julho";
    else if(mes == 8)
    this.atual = "Agosto";
    else if(mes == 9)
    this.atual = "Setembro";
    else if(mes == 10)
    this.atual = "Outubro";
    else if(mes == 11)
    this.atual = "Novembro";
    else if(mes == 12)
    this.atual = "Dezembro";
  }

  showsituacao(){
    this.mes = this.datePipe.transform(this.data, 'MM');
    this.showmes(this.mes);
    this.authService.getAdminFinanceiro().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        this.financeiro[i] = data[i];
        this.authService.getNome(data[i].id_user).subscribe(resul=>{
          this.financeiro[i].nome = resul[0];
        });
        if(data[i].data_pag == null)
          this.financeiro[i].data_pag = "Aguardando";
        else
          this.financeiro[i].data_pag = "Pago";
      }
    });
  }


  async cadastrar(){
    this.navCtrl.navigateForward('/cadastrafinanceiro');
  }

  relatorio(){
    this.navCtrl.navigateForward('/hisrelatorio');
  }

  async editar(id:any){
    let alertTeste = await this.alertCtrl.create({
      header: 'Editar situação',
      inputs: [
        {
          name: 'pg',
          type: 'radio',
          label: 'Pago',
          value: '1',
          checked: true
        },
        {
          name: 'pg',
          type: 'radio',
          label: 'Aguardando',
          value: '0'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          //role cancel deixa ele como segunda opcao
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Ok',
          handler: (form)=> {
            this.edit(form, id);
          }
        }
      ]
    });
    await alertTeste.present();
  }

  edit(form:any, id:number){
    this.pagamento = this.datePipe.transform(this.data, 'yyyy-MM-dd');
    this.authService.updatefinanceiro(id,form).subscribe(data=>{
      this.alertService.presentToast("Financeiro editado com sucesso!");
      window.location.reload();
    });
  }
}
