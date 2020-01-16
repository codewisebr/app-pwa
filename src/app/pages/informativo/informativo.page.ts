
import { Response } from 'selenium-webdriver/http';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.page.html',
  styleUrls: ['./informativo.page.scss'],
})
export class InformativoPage implements OnInit {
  constructor(
    public authService: AuthService,
    public global: GlobalService,
    ) { }

  ngOnInit() {}
  ionViewWillEnter(){
    
    this.showInfo();
  }
  public info: any[] = [];
  async showInfo() {
    //pega o nivel do usuario, e assim mostra apenas as info de determinado nivel
    this.authService.getNivelInfo(this.global.avental, 0)
    .subscribe(
    data =>{
      for(let i=0; i<data.length;i++)
      {
        this.info[i] = data[i].info
      }
    });
  }
}
