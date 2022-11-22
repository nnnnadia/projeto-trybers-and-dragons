import Race from './Race';

export default class Dwarf extends Race {
  static raceInstances = 0;

  private _maxLifePoints = 80;

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Dwarf.raceInstances += 1;
    return Dwarf.raceInstances;
  }
}
