import { RouterModule, Routes } from '@angular/router'
import { AccountComponent } from './account.component'
import { CreateComponent } from './create.component'
import { ListComponent } from './list.component'
import { DetailsComponent } from './details.component'

export const routes: Routes = [
  {
    path: 'accounts',
    component: AccountComponent,

    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: ':id', component: DetailsComponent }
    ]
  }
]
