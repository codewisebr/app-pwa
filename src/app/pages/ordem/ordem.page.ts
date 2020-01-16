import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit {
  public ordem: any[] = [];
  constructor(
    public authService: AuthService,
    public global: GlobalService,
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){this.showOrdem();}
  async showOrdem() {
      //pega o nivel do usuario, assim so mostra as ordens do nivel
    this.authService.getNivelOrdem(this.global.avental, 0)
    .subscribe(
    data =>{
      for(let i=0; i<data.length;i++)
      {
        this.ordem[i] = data[i].ordem
      }
    });
  }
}
