import { Component, signal } from '@angular/core';
import { SearchBarDepartment } from '../Components/Search/searchBarCityDepartmnent/searchBarCityDepartmnent';
import { SearchBarCityArrivale } from '../Components/Search/searchBarCityArrivale/searchBarCityArrivale';
@Component({
  selector: 'app-root',
  imports: [SearchBarDepartment, SearchBarCityArrivale],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('bus-tickets');

  selectedDepartmentCity = signal<string[]>([]);
  selectedArrivalCity = signal<string[]>([]);

  onDepartmentCitySelected(city: string[]) {
    this.selectedDepartmentCity.set(city);
  }
  onArrivalCitySelected(city: string[]) {
    const posibleCities: string[] = [];
    for (const c of city) {
      if (!this.selectedDepartmentCity().includes(c)) {
        posibleCities.push(c);
      }
    }
    this.selectedArrivalCity.set(posibleCities);
  }
}
