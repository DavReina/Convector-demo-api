import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Car } from './car.model';
export declare class CarController extends ConvectorController<ChaincodeTx> {
    create(car: Car): Promise<void>;
    get(id: string): Promise<Car>;
}
