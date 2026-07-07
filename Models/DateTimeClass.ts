export class DateTime {
    constructor(public departureTime: Date, 
        public arrivalTime: Date, 
        public stopingTimeDeparture: Date,
        public stopingTimeArrival: Date){
            this.departureTime = departureTime;
            this.arrivalTime = arrivalTime;
            this.stopingTimeDeparture = stopingTimeDeparture;
            this.stopingTimeArrival = stopingTimeArrival;
    }
}