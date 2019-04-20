import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {LoanRequestComponent} from './loan-request/loan-request.component';
import {ConfirmAfterRequestComponent} from './confirm-after-request/confirm-after-request.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WalletComponent} from './dashboard/wallet/wallet.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {TamwelComponent} from './dashboard/tamwel/tamwel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'loanreq', component: LoanRequestComponent},
  {path: 'loanreqconfirm', component: ConfirmAfterRequestComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'tamwel', component: TamwelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
