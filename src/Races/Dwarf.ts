import Race from './Race';

export default class Dwarf extends Race {
  static raceInstances = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.raceInstances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Dwarf.raceInstances;
  }
}
