import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Yield from '@civ-clone/core-yield/Yield';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class CityImprovementMaintenanceGold extends Gold {
  #cityImprovement: CityImprovement | null;

  constructor(
    value: Yield | number = 0,
    cityImprovement: CityImprovement | null = null
  ) {
    super(value, cityImprovement ? cityImprovement.id() : 'none');

    this.#cityImprovement = cityImprovement;

    this.addKey('cityImprovement');
  }

  cityImprovement(): CityImprovement | null {
    return this.#cityImprovement;
  }
}

makeNegative(CityImprovementMaintenanceGold);

export default CityImprovementMaintenanceGold;
