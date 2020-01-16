import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HisadminfinanceiroPage } from './hisadminfinanceiro.page';

const routes: Routes = [
  {
    path: '',
    component: HisadminfinanceiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HisadminfinanceiroPage]
})
export class HisadminfinanceiroPageModule {}
