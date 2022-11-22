import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archetypeInstances = 0;

  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.archetypeInstances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeInstances;
  }
}
