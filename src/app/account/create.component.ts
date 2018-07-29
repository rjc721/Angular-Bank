import { Component, ViewChild } from '@angular/core'
import { Account } from './account.model'
import { AccountService } from './account.service'
import { AccountForm } from './account_form.component'

@Component({
  templateUrl: './create.component.html'
})

export class CreateComponent {
  private _accountService: AccountService

  constructor(accountService: AccountService) {
      this._accountService = accountService
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

  @ViewChild(AccountForm) form: AccountForm
}
