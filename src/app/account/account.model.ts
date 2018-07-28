export class Account {

  public id: Number

  public title: String

  public description: String

  public balance: Number

  public constructor(id: Number, title: String, description: String, balance: Number) {
    this.id = id
    this.title = title
    this.description = description
    this.balance = balance
  }
}
