import { AppRoutingPreloaderService } from 'src/app/route-to-preload';
import { NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { GlobalService } from 'src/app/services/global.service';
import { AlertService } from './../../../services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cadastrausuario',
  templateUrl: './cadastrausuario.page.html',
  styleUrls: ['./cadastrausuario.page.scss'],
})
export class CadastrausuarioPage implements OnInit {
  public grau = [
    'Pai', 'Mãe', 'Filho', 'Irmão', 'Irmã', 'Filho', 'Filha', 'Avô', 'Avó', 'Neto', 'Neta',
    'Tio', 'Tia', 'Sobrinho', 'Sobrinha', 'Primo', 'Prima', 'Sogro', 'Sogra', 'Genro', 'Nora',
    'Padrasto','Madrasta','Enteado','Enteada','Cunhado','Cunhada','Madrinha','Padrinho'
  ];
  public ufs = 
  ['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 
   'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
  public hideme:boolean;
  public more:boolean;
  public more2:boolean;
  public cargos:any[]=[];
  public aventals:any[]=[];
  public auxtel:any;
  public auxdata:any;
  public daux:any;
  public id:any;
  public data_nasc:any;
  constructor(
    private authService: AuthService,
    private alertService:AlertService,
    private storage: Storage,
    private global: GlobalService,
    private dataPipe: DatePipe,
    private navCtrl: NavController,
    private routingService: AppRoutingPreloaderService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.show();
  }
  async ionViewDidEnter() {
    await this.routingService.preloadRoute('adminusuario');
  }
  hide(){
    this.hideme = !this.hideme;
  }
  plus(){
    this.more = !this.more;
  }
  plus2(){
    this.more2 = !this.more2;
  }
  dismiss(){
    this.navCtrl.navigateForward('/adminusuario');
  }
  show(){
    this.authService.getCargos().subscribe(
      data=>{ 
        for(let i=0; i<data.length; i++){
          this.cargos[i]=data[i].cargo;
        }
      }
      , error=>{ 
        console.log("error: " + error);
      });
      this.authService.getAvental().subscribe(
        data=>{ 
          for(let i=0; i<data.length; i++){
            this.aventals[i]=data[i].avental;
          }
        }
        , error=>{ 
          console.log("error: " + error);
        });
  }
  register(form:any){
    console.log(form.value);

    this.auxtel=form.value.telefone.replace(/\D+/g, '');
    this.auxdata=form.value.data_nasc;
    this.daux = this.auxdata.split('T')[0];

    this.authService.getAvental().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        if(data[i].avental == form.value.avental)
        {
          this.storage.set('avental', data[i].id);
        }
      }
    });
    this.authService.getCargos().subscribe(data=>{
      for(let i=0; i<data.length; i++){
        if(data[i].cargo == form.value.cargo)
        {
          this.storage.set('cargo', data[i].id);
        }
      }
    });

    
      //registra o usuário
      this.authService.register(form.value.fName, form.value.lName, form.value.email, "123456", 
        this.daux, this.global.cargo, this.global.avental, this.auxtel, form.value.endereco, 
        form.value.cidade, form.value.estado, form.value.nivel, form.value.profissao).subscribe(
        data => {
            this.id = data;
            if(form.value.grau1 && form.value.data1){
              this.data_nasc = this.dataPipe.transform(form.value.data1, 'yyyy-MM-dd');
              //adiciona membro da familia 1
              this.authService.familia(this.id, form.value.grau1, this.data_nasc).subscribe(resp=>{
              console.log('1 de 3 cadastrado');
              },
              error => {
              this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
              });
            }
            if(form.value.grau2 && form.value.data2){
              this.data_nasc = this.dataPipe.transform(form.value.data2, 'yyyy-MM-dd');
              //adiciona membro da familia 2
              this.authService.familia(this.id, form.value.grau2, this.data_nasc).subscribe(resp=>{
              console.log('2 de 3 cadastrado');
              },
              error => {
              this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
              });
            }
            if(form.value.grau3 && form.value.data3){
              this.data_nasc = this.dataPipe.transform(form.value.data3, 'yyyy-MM-dd');
              //adiciona membro da familia 3
              this.authService.familia(this.id, form.value.grau3, this.data_nasc).subscribe(resp=>{
              console.log('3 de 3 cadastrado');
              },
              error => {
              this.alertService.presentToast("Verifique os campos de cadastro de familiar!");
              });
            }
            this.alertService.presentToast("Usuário cadastrado!");
            this.dismiss();
            window.location.reload();
            
        },
        error => {
          this.alertService.presentToast("Preencha todos os campos corretamente!");
        });
  }
}
