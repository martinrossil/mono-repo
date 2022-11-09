import { Product } from '@martinrossil/domain';
import IComponent from './IComponent';

export default class Component extends HTMLElement implements IComponent {
    public product: Product = new Product();
}