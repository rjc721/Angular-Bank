import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AccountsList } from './account/accounts_list.component'
import { AccountForm } from './account/account_form.component'

@NgModule({
  declarations: [
    AppComponent, AccountsList, AccountForm
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
