import { Injectable } from '@angular/core'
import { Transaction } from './transaction.model'
import { Account } from '../account/account.model'

@Injectable()
export class TransactionService {

  private _transactions: Array<Transaction> = [
    {
      id: "1",
      value: 50,
      description: "Something",
      date: new Date(2018, 6, 21, 8, 32, 0),
      tags: ["something"],
      accountId: 1
    },
    {
      id: "2",
      value: 121.31,
      description: "Something else",
      date: new Date(1999, 8, 24, 8, 33, 0),
      tags: ["something"],
      accountId: 1
    },
    {
      id: "12",
      value: -507.348,
      description: "Something further",
      date: new Date(),
      tags: ["bills", "electricity"],
      accountId: 1
    }
  ]

  public getByAccount(accountId: number): Promise<Array<Transaction>> {
    return new Promise((resolve, reject) => {
      resolve(this._transactions.filter(trans => trans.accountId == accountId))
    })
  }
}

export const TRANSACTION_SERVICE_PROVIDERS: Array<any> = [TransactionService]
