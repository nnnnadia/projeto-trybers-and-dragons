import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;

  get maxLifePoints(): number { return this._maxLifePoints; }
}
