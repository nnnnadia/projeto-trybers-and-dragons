import Race from './Race';

export default class Halfling extends Race {
  static raceInstances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.raceInstances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances(): number {
    return Halfling.raceInstances;
  }
}
