import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawSuccessPage } from './withdraw-success.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawSuccessPageRoutingModule {}
