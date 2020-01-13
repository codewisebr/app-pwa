import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrausuarioPage } from './cadastrausuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrausuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrausuarioPage]
})
export class CadastrausuarioPageModule {}
