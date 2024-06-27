import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'locker-type',
    loadChildren: () => import('./locker-type/locker-type.module').then( m => m.LockerTypePageModule)
  },
  {
    path: 'box',
    loadChildren: () => import('./box/box.module').then( m => m.BoxPageModule)
  },
  {
    path: 'recipient',
    loadChildren: () => import('./recipient/recipient.module').then( m => m.RecipientPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./barcode/barcode.module').then( m => m.BarcodePageModule)
  },
  {
    path: 'boxopened',
    loadChildren: () => import('./boxopened/boxopened.module').then( m => m.BoxopenedPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'resendcode',
    loadChildren: () => import('./resendcode/resendcode.module').then( m => m.ResendcodePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'seller-details',
    loadChildren: () => import('./seller-details/seller-details.module').then( m => m.SellerDetailsPageModule)
  },
  {
    path: 'transaction-preview',
    loadChildren: () => import('./transaction-preview/transaction-preview.module').then( m => m.TransactionPreviewPageModule)
  },
  {
    path: 'jointrans',
    loadChildren: () => import('./jointrans/jointrans.module').then( m => m.JointransPageModule)
  },
  {
    path: 'buyer-details',
    loadChildren: () => import('./buyer-details/buyer-details.module').then( m => m.BuyerDetailsPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'withdraw-success',
    loadChildren: () => import('./withdraw-success/withdraw-success.module').then( m => m.WithdrawSuccessPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'invite',
    loadChildren: () => import('./invite/invite.module').then( m => m.InvitePageModule)
  },
  // {
  //   path: 'transhistory',
  //   loadChildren: () => import('./transhistory/transhistory.module').then( m => m.TranshistoryPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
