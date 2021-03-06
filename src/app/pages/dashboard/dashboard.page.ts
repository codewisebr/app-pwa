import { Storage } from '@ionic/storage';
import { GlobalService } from './../../services/global.service';
import { Reuniao } from '../../model/reuniao.model';
import { EnvService } from './../../services/env.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, AlertController, ActionSheetController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { getLocaleDayNames, DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public id:any;
  public data_r:any;
  public opcao: Number;
  public p1="primary";
  public p2="danger";
  public disabled1;//desabilitado
  public disabled2;//desabilitado
  public disabled3;//desabilitado
  public reuniao:Reuniao = {id: null, data: '', ativo: 0};
  public motivo: any;
  public ordem: any[] = [];
  public info: any[] = [];
  public qtde=0;
  public agape: any[]=[];
  public financeiro: any[]=[];

  constructor(
    private navCtrl:NavController, 
    private authService: AuthService, 
    private alertService: AlertService,
    private http: HttpClient,
    private env: EnvService, 
    private route: ActivatedRoute,
    private alertCtrl: AlertController, 
    private global:GlobalService,
    private storage: Storage,
    private dataPipe: DatePipe,
    private menu: MenuController
  ) { 
    this.menu.enable(true, 'app');
  }
  ngOnInit() {
  }
  ionViewWillEnter()
  {
    this.id = this.global.user_id;
    
    this.showOrdem();
    this.showInfo();
    this.showFinanceiro();
    this.verifica();
    this.showData();
    this.presenca();
    this.showAgape();
    this.authService.reuniao().subscribe(data=>{ });
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

  async showData()
  {
    //mostra a data se tiver
    await this.authService.getReuniao()
    .subscribe(
    resul=>{ 
        this.data_r = (this.dataPipe.transform(resul[0].data, "dd/MM"));
        this.storage.set('reuniao', resul[0].id);
        this.disabled1=false;
        this.disabled2=false;
        this.verifica();
    }
    , error=>{ 
      // console.log("error: " + error);
    });
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

  async showOrdem()
  {
      //pega as info de acordo com o nivel do usuario
      this.authService.getNivelOrdem(this.global.avental, 1)
      .subscribe(
      data =>{
        for(let i=0; i<data.length;i++)
        {
         this.ordem[i] = data[i].ordem
        }
      });
  }
  
  async showInfo()
  {
    this.authService.getNivelInfo(this.global.avental, 1)
      .subscribe(
      data =>{
        for(let i=0; i<data.length;i++)
        {
          this.info[i] = data[i].info
        }
      });
  }

  presenca()
  {
    this.authService.getConfirmacao(0)
    .subscribe(
      data=>{
        this.qtde = data;
      }
    );
  }

  showAgape()
  {
    this.authService.getAgape(1).subscribe(
      data=>{
        for(let i=0; i<data.length;i++)
        {
          this.agape[i]=data[i].agape;
        }
    },
    error=>{
      // console.log(error);
    });
  }

  showFinanceiro(){
      this.authService.getFinanceiro(this.id).subscribe(resul=>{
          for(let i=0; i<resul.length; i++){
            this.financeiro[i] = resul[i];
            if(resul[i].data_pag == '0000-00-00' || resul[i].data_pag == null){
              this.financeiro[i].data_pag = "Aguardando"
            }
            else{
              this.financeiro[i].data_pag = this.dataPipe.transform(resul[i].data_pag, "dd/MM");
            }
          }
      });
  }
}