import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {routesArray} from "../../../../DataBase/RoutesExample";

@Component({
    selector: "app-search-bar-date-departmnent",
    imports: [FormsModule],
    templateUrl: "./searchBarDateDepartmnent.html",
    styleUrls: ["./searchBarDateDepartmnent.scss"]
})

export class SearchBarDateDepartmnent {
    searchDepartmentDate: Date = new Date();
    findedDates: Date[] = [];
    onDateSelected = output<Date[]>();
    search(date: Date) {
        for(const route of routesArray) {
            const departureDate = route.dateTime.departureTime;
            if (departureDate.toDateString() === date.toDateString()) {
                this.findedDates.push(date);
            }
        }
        this.onDateSelected.emit(this.findedDates);
    }
}