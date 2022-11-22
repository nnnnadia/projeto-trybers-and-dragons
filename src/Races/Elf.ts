import Race from './Race';

export default class Elf extends Race {
  static raceInstances = 0;
  private _maxLifePoints = 99;

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    Elf.raceInstances += 1;
    return Elf.raceInstances;
  }
}
