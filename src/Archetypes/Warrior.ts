import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archetypeInstances = 0;

  private _energyType: EnergyType = 'stamina';

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    Warrior.archetypeInstances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeInstances;
  }
}
