import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbstractclasspagePage } from './abstractclasspage.page';

const routes: Routes = [
  {
    path: '',
    component: AbstractclasspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbstractclasspagePageRoutingModule {}
