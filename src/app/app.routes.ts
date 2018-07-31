import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AccountComponent } from './account/account.component'
import { routes as AccountRoutes } from './account/account.routes'
import { routes as TransactionRoutes } from './transaction/transaction.routes'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  ...AccountRoutes,
  ...TransactionRoutes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
