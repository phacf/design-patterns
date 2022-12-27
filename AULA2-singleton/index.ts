export class Singleton {
  protected static _instance: Singleton | null = null;
  private constructor () {}
  static get instance () {
    if (this._instance === null) {
      this._instance = Singleton.instance;
    }
    return this._instance;
  }
}
