import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Yield from '@civ-clone/core-yield/Yield';
export declare class CityImprovementMaintenanceGold extends Yield {
  #private;
  constructor(value: number, cityImprovement: CityImprovement);
  cityImprovement(): CityImprovement;
}
export default CityImprovementMaintenanceGold;
