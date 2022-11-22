import Race from './Race';

export default class Halfling extends Race {
  static raceInstances = 0;
  private _maxLifePoints = 60;

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Halfling.raceInstances += 1;
    return Halfling.raceInstances;
  }
}
