export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiryDate: Date
  ) {}
  get token() {
    if (!this._expiryDate || new Date() > this._expiryDate) {
      return null;
    }
    return this._token;
  }
}
