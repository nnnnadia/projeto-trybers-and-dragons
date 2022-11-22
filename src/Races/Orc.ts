import Race from './Race';

export default class Orc extends Race {
  static raceInstances = 0;
  private _maxLifePoints = 74;

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Orc.raceInstances += 1;
    return Orc.raceInstances;
  }
}
