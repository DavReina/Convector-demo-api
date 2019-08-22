import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Car extends ConvectorModel<Car> {
    readonly type: string;
    name: string;
    created: number;
    modified: number;
}
