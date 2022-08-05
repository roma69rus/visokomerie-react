import { makeAutoObservable } from "mobx";


interface IUserStore {
  isAuth: boolean;
  user: any;
}

export default class UserStore implements IUserStore {
  private _isAuth: boolean;
  private _user: any;
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this)
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool
  }

  setUser(user: any) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }



}
