import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockerTypePage } from './locker-type.page';

const routes: Routes = [
  {
    path: '',
    component: LockerTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockerTypePageRoutingModule {}
