import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockerTypePageRoutingModule } from './locker-type-routing.module';

import { LockerTypePage } from './locker-type.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockerTypePageRoutingModule
  ],
  declarations: [LockerTypePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LockerTypePageModule {}
