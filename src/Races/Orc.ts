import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;

  get maxLifePoints(): number { return this._maxLifePoints; }
}
