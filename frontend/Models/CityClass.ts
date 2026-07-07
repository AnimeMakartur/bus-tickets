import { Station } from './StationClass';
export class City {
    constructor(public id: number, public name: string, public stopes: Station[]) {
        this.id = id;
        this.name = name;
        this.stopes = stopes;
    }
}
