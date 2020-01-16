import { Storage } from '@ionic/storage';
import { GlobalService } from './../../services/global.service';
import { AppRoutingPreloaderService } from './../../route-to-preload';
import { DatePipe } from '@angular/common';
import { AlertService } from './../../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, Platform, IonSplitPane, NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public data:any;
  public confirm:boolean;
  public id:any;
  public motivo: any;
  public name: any[]=[];
  public presenca: any[] = [];
  public presente: Number;
  public ausente: Number;

  public p1="primary";
  public p2="danger";
  public disabled1;//desabilitado
  public disabled2;//desabilitado
  public disabled3;//desabilitado
  public opcao: Number;
  public ordem: any[] = [];
  public info:any[] = [];
  public agape: any[] = [];
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private alertCtrl:AlertController,
    private dataPipe: DatePipe, 
    private routingService: AppRoutingPreloaderService,
    private global:GlobalService,
    private storage: Storage
  ) { 
      this.menu.enable(true, 'web');
  }
  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.id = this.global.user_id;
    this.showLista();
    this.showData();
    this.showDados();
    this.verifica();
    this.authService.reuniao().subscribe(data=>{ });
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('mural');
    await this.routingService.preloadRoute('adminagape');
    await this.routingService.preloadRoute('adminfinanceiro');
    await this.routingService.preloadRoute('admininfo');
    await this.routingService.preloadRoute('adminordem');
    await this.routingService.preloadRoute('adminpresenca');
  }

  verifica(){ 
    //verifica se o usuario ja respondeu
    this.authService.getLista().subscribe(
      resp => {
        //verifica se esta vazio, se tiver permite q o usuario escolha a opcao
        if(resp.length == 0)
        {
          this.disabled1 = false;
          this.disabled2 = false;
          this.disabled3 = true;
        }
        else
        {
          this.disabled1 = true;
          this.disabled2 = true;
          for(let i=0; i<resp.length;i++)
          {
            if(resp[i].presenca == 1)
            {
              this.p1 = "success";
              this.p2 = "primary";
              this.disabled3 = true;
            }
            else if(resp[i].presenca == 0)
            {
              this.p2 = "success";
              this.p1 = "primary";
              this.disabled3 = false;
            }
          }
        }
      },
      error => {
        //se nao possui o id no banco de dados, deixa habilitado para o usuario
        //console.log('erro na verificação');
        this.disabled1=false;
        this.disabled2=false;
      }
    );
  }
  
  resposta(resp: Number)
  {
    this.opcao = resp;
    if(this.opcao == 0)
    {
      this.disabled3 = false;
      this.bmotivo(this.opcao);
    }
    else{
      this.motivo = "-";
      this.lista(this.opcao, this.motivo);
    }
  }

  async bmotivo(opcao: Number)
  {
    //abre um pop
    let alertPrompt = await this.alertCtrl.create({
      header: 'Informe o motivo',
      inputs: [
        {
          name: 'motivo',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role:'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Enviar',
          handler: (data)=> {
            if(data.motivo == "")
              this.motivo = "Sem justificativa";
            else
              this.motivo = data.motivo;
            this.lista(this.opcao,this.motivo);
          }
        }
      ]
    });
    await alertPrompt.present();
  }

  async lista(opcao: Number, motivo: String)
  {
      //manda pra funcão o id do usuario e a resposta, se ja tiver no bd ele atualiza para uma nova resposta
      this.authService.confirmaPresenca(this.id, this.opcao ,this.motivo,this.global.reuniao).subscribe(
        data => {},
        error => {
          // console.log(error);
        },
        () => {
          this.alertService.presentToast('Confirmação enviada!');
          window.location.reload();
        }
      );
  }
  editar()
  {
    this.disabled1 = !this.disabled1;
    this.disabled2 = !this.disabled2;
  }

  async showData()
  {
    //mostra a data se tiver
    await this.authService.getReuniao()
    .subscribe(
    data=>{ 
      this.data = (this.dataPipe.transform(data[0].data, "dd/MM"));
      this.storage.set('reuniao', data[0].id);
        this.disabled1=false;
        this.disabled2=false;
        this.verifica();
    }
    , error=>{ 
      // console.log("error: " + error);
    });
  }

  async showLista() {
    this.authService.getConfirmacao(1).subscribe(presente =>{
      this.presente = presente;
    });
    this.authService.getConfirmacao(2).subscribe(ausente =>{
      this.ausente = ausente;
    })
  }
  
  showDados(){
    this.authService.getNivelOrdem(3, 1)
    .subscribe(
    data =>{
      for(let i=0; i<data.length;i++)
      {
          this.ordem[i] = data[i].ordem;
      }
    });
    this.authService.getNivelInfo(3, 1)
    .subscribe(
    data =>{
      for(let i=0; i<data.length;i++)
      {
        this.info[i] = data[i].info;
      }
    });
    this.authService.getAgape(1)
    .subscribe(
      data =>{
        for(let i=0; i<data.length; i++){
          this.agape[i]=data[i].agape;
        }
      });
  }
  
}
