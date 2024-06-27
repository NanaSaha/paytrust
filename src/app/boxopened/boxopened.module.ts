import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxopenedPageRoutingModule } from './boxopened-routing.module';

import { BoxopenedPage } from './boxopened.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxopenedPageRoutingModule
  ],
  declarations: [BoxopenedPage]
})
export class BoxopenedPageModule {}
