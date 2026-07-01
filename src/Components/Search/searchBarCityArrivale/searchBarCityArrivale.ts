import { Component, output } from "@angular/core";
import { routesArray } from "../../../../DataBase/RoutesExample";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-search-bar-city-arrivale",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./searchBarCityArrivale.html",
  styleUrls: ["./searchBarCityArrivale.scss"],
})

export class SearchBarCityArrivale {
  searchResult: string = '';
  findedCities: string[] = [];
  onCitySelected= output<string[]>();
  search(city: string) {
    this.findedCities = [];
    for(const c of routesArray) {
      if(c.cityStationArrival?.name?.toLowerCase().includes(city.toLowerCase())) {
        this.findedCities.push(c.cityStationArrival.name);
      }
    }
    this.onCitySelected.emit(this.findedCities);
  }
}