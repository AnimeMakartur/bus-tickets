import { Component, signal } from '@angular/core';
import { citiesArray } from '../../DataBase/CitiesStations';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
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
  protected readonly title = signal('bus-tickets');
}
