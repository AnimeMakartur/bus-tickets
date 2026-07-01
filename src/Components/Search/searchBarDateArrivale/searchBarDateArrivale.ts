import { Component, output } from "@angular/core";
import { routesArray } from "../../../../DataBase/RoutesExample";

@Component({
    selector: "app-search-bar-date-arrivale",
    templateUrl: "./searchBarDateArrivale.html",
    styleUrls: ["./searchBarDateArrivale.scss"]
})
export class SearchBarDateArrivale {
    searchArrivaleDate: Date = new Date();
    findedDates: Date[] = [];
    onDateSelected = output<Date[]>();
    search(date: Date) {
        for(const route of routesArray) {
            const arrivalDate = route.dateTime.arrivalTime;
            if (arrivalDate.toDateString() === date.toDateString()) {
                this.findedDates.push(date);
            }
        }
        this.onDateSelected.emit(this.findedDates);
    }
}