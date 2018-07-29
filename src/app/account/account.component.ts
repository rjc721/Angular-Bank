import { Component, ViewChildren, QueryList, Injector, ViewChild } from '@angular/core'
import { Account } from './account.model'
import { AccountForm } from './account_form.component'
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account.service'

@Component({
  selector: 'accounts',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS]
})

export class AccountComponent {

  private _accounts: Array<Account> = []

  private _accountService: AccountService

  constructor(accountService: AccountService) {
      this._accountService = accountService

      var promise = this._accountService.getAll()
      promise.then(accounts => this._accounts = accounts)
  }

  private createAccError: string = ""
  private accLimit: number = 3

  private createAcc(newAccount: Account) {
    this._accountService.create(newAccount)
    .then(account => {
      console.log(account)
      this.createAccError = ""
      this.form.resetForm()
    })
    .catch(err => { this.createAccError = err })
  }

  private removeAcc(index: number) {
    this._accounts.splice(index, 1)
  }

  @ViewChild(AccountForm) form: AccountForm

}