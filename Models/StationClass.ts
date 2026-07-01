export class Station {
    constructor(public id: number, public name: string, public stops: number[]) {
        this.id = id;
        this.name = name;
        this.stops = stops;
    }
}