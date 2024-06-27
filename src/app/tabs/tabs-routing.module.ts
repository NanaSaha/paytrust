import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
         path: 'locker-type',
        loadChildren: () => import('../locker-type/locker-type.module').then( m => m.LockerTypePageModule)
 
      },
      {
        path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)   },
    {
      path: 'transaction',
      loadChildren: () => import('../transaction/transaction.module').then( m => m.TransactionPageModule)
    },
    {
      path: 'transhistory',
      loadChildren: () => import('../transhistory/transhistory.module').then( m => m.TranshistoryPageModule)
    },
    {
      path: 'qrcode',
      loadChildren: () => import('../qrcode/qrcode.module').then( m => m.QrcodePageModule)
    },
    {
      path: 'jointrans',
      loadChildren: () => import('../jointrans/jointrans.module').then( m => m.JointransPageModule)
    },
      {
        path: '',
        redirectTo: '/tabs/locker-type',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/locker-type',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
