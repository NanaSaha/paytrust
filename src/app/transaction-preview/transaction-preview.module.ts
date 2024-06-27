import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionPreviewPageRoutingModule } from './transaction-preview-routing.module';

import { TransactionPreviewPage } from './transaction-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionPreviewPageRoutingModule
  ],
  declarations: [TransactionPreviewPage]
})
export class TransactionPreviewPageModule {}
