import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static archetypeInstances = 0;

  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.archetypeInstances += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeInstances;
  }
}
