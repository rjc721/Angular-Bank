import { Routes } from '@angular/router'
import { TransactionComponent } from './transaction.component'
import { CreateComponent } from './create.component'

export const routes: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      { path: 'create', component: CreateComponent }
    ]
  }
]
