import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxopenedPage } from './boxopened.page';

const routes: Routes = [
  {
    path: '',
    component: BoxopenedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxopenedPageRoutingModule {}
