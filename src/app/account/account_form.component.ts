import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core'
import { Account } from './account.model'

@Component({
  selector: 'account-form',
  templateUrl: './account_form.component.html',
  styleUrls: ['./account_form.component.css']
})

export class AccountForm {

  @Output('created') created = new EventEmitter<Account>()

  private createAcc(titleEl: any, descEl: any, balEl: any) {
    var newAccount: Account = new Account(0, titleEl.value, descEl.value, balEl.value)
    this.created.emit(newAccount)
  }

  @Input('error') error: string

  @ViewChild('form') form: ElementRef

  public resetForm() {
    this.form.nativeElement.reset()
  }
}
