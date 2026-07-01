import { Component, Input } from "@angular/core";
import { citiesArray } from "../../../../DataBase/CitiesStations";

@Component({
  selector: "app-search-bar-department",
  templateUrl: "./searchBarCityDepartmnent.html",
  styleUrls: ["./searchBarCityDepartmnent.scss"],
})
export class SearchBarDepartment {
  searchResult: string = '';
  search(city: string) {
    for (let i = 0; i < citiesArray.length; i++) {
      if (citiesArray[i].name.toLowerCase() === city.toLowerCase()) {
        this.searchResult = `City found: ${citiesArray[i].name}`;
        return;
      }
      else {
        this.searchResult = 'City not found';
      }
    }
  }
}