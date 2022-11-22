import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;

  get maxLifePoints(): number { return this._maxLifePoints; }
}
