import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AccountsList } from './account/accounts_list.component'
import { AccountForm } from './account/account_form.component'
import { AppRoutingModule } from './app.routes'
import { HomeComponent } from './home/home.component'
import { AccountComponent } from './account/account.component'
import { ListComponent } from './account/list.component'
import { CreateComponent } from './account/create.component'

@NgModule({
  declarations: [
    AppComponent, AccountsList, AccountForm, HomeComponent, AccountComponent, ListComponent, CreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
