import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResendcodePage } from './resendcode.page';

const routes: Routes = [
  {
    path: '',
    component: ResendcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResendcodePageRoutingModule {}
