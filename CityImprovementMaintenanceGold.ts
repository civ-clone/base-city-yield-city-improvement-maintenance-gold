import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Yield from '@civ-clone/core-yield/Yield';

export class CityImprovementMaintenanceGold extends Yield {
  #cityImprovement: CityImprovement;

  constructor(value: number, cityImprovement: CityImprovement) {
    super(value, cityImprovement.id());

    this.#cityImprovement = cityImprovement;

    this.addKey('cityImprovement');
  }

  cityImprovement(): CityImprovement {
    return this.#cityImprovement;
  }
}

export default CityImprovementMaintenanceGold;
