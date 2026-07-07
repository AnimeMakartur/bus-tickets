import { Bus } from './BusClass';
import {City} from './CityClass';
import { DateTime } from './DateTimeClass';
export class Route {
    constructor(public id: number, 
        public name: string, 
        public bus: Bus, 
        public dateTime: DateTime,
        public price: number,
        public cityStationDeparture: City,
        public cityStationArrival: City) {
            this.id = id;
            this.name = name;
            this.bus = bus;
            this.dateTime = dateTime;
            this.price = price;
            this.cityStationDeparture = cityStationDeparture;
            this.cityStationArrival = cityStationArrival;
    }
}