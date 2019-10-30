import { CadastrafinanceiroPage } from './../../cadastra/cadastrafinanceiro/cadastrafinanceiro.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminfinanceiroPage } from './adminfinanceiro.page';

const routes: Routes = [
  {
    path: '',
    component: AdminfinanceiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  //declarations: [AdminfinanceiroPage, CadastrafinanceiroPage],
  declarations: [AdminfinanceiroPage]
})
export class AdminfinanceiroPageModule {}
