import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Account } from './account.model'
import { AccountService } from './account.service'
import { Transaction } from '../transaction/transaction.model'
import { TransactionService } from '../transaction/transaction.service'
import { SearchTransactionPipe } from '../transaction/search_transactions'

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit, OnDestroy {

    private _account: Promise<Account>
    private _error: String
    private _paramSub: any
    private _trans: Array<Transaction>

    constructor(private _route: ActivatedRoute,
                private _accountService: AccountService,
                private _transactionService: TransactionService) {


    }

    public ngOnInit() {

      this._paramSub = this._route.params.subscribe(params => {
        var id: number = +params['id']

        this._account = null
        this._error = ""

        this._account = this._accountService.getById(id)
        .catch(err => this._error = err)

        this._transactionService.getByAccount(id)
        .then(trans => this._trans = trans)
      })
    }

    public ngOnDestroy() {
      this._paramSub.unsubscribe()
    }

    private isObject(obj: any) {
      return typeof obj == 'object'
    }

    private _tagSearchQuery: string = ""

    private searchByTag(tagEl: any) {
      this._tagSearchQuery = tagEl.value
    }

}
