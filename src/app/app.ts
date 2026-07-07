import { Component, signal } from '@angular/core';
import { SearchBarDepartment } from '../Components/Search/searchBarCityDepartmnent/searchBarCityDepartmnent';
import { SearchBarCityArrivale } from '../Components/Search/searchBarCityArrivale/searchBarCityArrivale';
import {SearchBarDateArrivale} from "../Components/Search/searchBarDateArrivale/searchBarDateArrivale";
import {SearchBarDateDepartmnent} from "../Components/Search/searchBarDateDepartmnent/searchBarDateDepartmnent";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [SearchBarDepartment, SearchBarCityArrivale, SearchBarDateArrivale, SearchBarDateDepartmnent, FormsModule],
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
    this.selectedArrivalCity.set(city);
  }

  selectedDepartmentDate = signal<Date[]>([]);
  selectedArrivalDate = signal<Date[]>([]);

  onDepartmentDateSelected(dates: Date[]) {
    this.selectedDepartmentDate.set(dates);
  }

  onArrivalDateSelected(dates: Date[]) {
    this.selectedArrivalDate.set(dates);
  }
}
