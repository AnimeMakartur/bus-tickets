import { Component, output } from "@angular/core";
import {routesArray} from "../../../../DataBase/RoutesExample";
import {FormsModule} from "@angular/forms";
@Component({
  selector: "app-search-bar-department",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./searchBarCityDepartmnent.html",
  styleUrls: ["./searchBarCityDepartmnent.scss"],
})
export class SearchBarDepartment {
  searchResult: string = '';
  findedCities: string[] = [];
  onCitySelected= output<string[]>();
  search(city: string) {
    this.findedCities = [];
    for(const c of routesArray) {
      if(c.cityStationDeparture.name.toLowerCase().includes(city.toLowerCase())) {
        this.findedCities.push(c.cityStationDeparture.name);
      }
    }
    this.onCitySelected.emit(this.findedCities);
  }
}