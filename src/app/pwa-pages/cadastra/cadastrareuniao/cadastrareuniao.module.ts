import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrareuniaoPage } from './cadastrareuniao.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrareuniaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrareuniaoPage]
})
export class CadastrareuniaoPageModule {}
