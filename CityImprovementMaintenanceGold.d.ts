import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Gold from '@civ-clone/base-city-yield-gold/Gold';
import Yield from '@civ-clone/core-yield/Yield';
export declare class CityImprovementMaintenanceGold extends Gold {
  #private;
  constructor(value?: Yield | number, cityImprovement?: CityImprovement | null);
  cityImprovement(): CityImprovement | null;
}
export default CityImprovementMaintenanceGold;
