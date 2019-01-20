import { Config } from './Config';
import { Product } from './Product';

export interface Props {
    config: Config;
}

export interface State extends Props {
    products: Product[];
}
