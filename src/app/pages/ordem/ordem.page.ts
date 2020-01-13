import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.page.html',
  styleUrls: ['./ordem.page.scss'],
})
export class OrdemPage implements OnInit {
  public ordem: any[] = [];
  constructor(public authService: AuthService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){this.showOrdem();}
  async showOrdem() {
    this.authService.user().subscribe(resul=>{
      //pega o nivel do usuario, assim so mostra as ordens do nivel
      this.authService.getNivelOrdem(resul.nivel, 0)
      .subscribe(
      data =>{
        for(let i=0; i<data.length;i++)
        {
         this.ordem[i] = data[i].ordem
        }
      });
    });
  }
}
