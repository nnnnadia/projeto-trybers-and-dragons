import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get strength() { return this._strength; }
  get dexterity() { return this._dexterity; }
  get defense() { return this._defense; }
  get lifePoints() { return this._lifePoints; }
  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints - this.defense;
    if (damage <= 0) damage = 1;
    let newLifePoints = this.lifePoints - damage;
    if (newLifePoints <= 0) newLifePoints = -1;
    this._lifePoints = newLifePoints;
    return this._lifePoints;
  }
}
