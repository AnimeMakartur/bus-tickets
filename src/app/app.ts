import { Component, signal } from '@angular/core';
import { SearchBarDepartment } from '../Components/Search/searchBarCityDepartmnent/searchBarCityDepartmnent';
@Component({
  selector: 'app-root',
  imports: [SearchBarDepartment],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('bus-tickets');
}
