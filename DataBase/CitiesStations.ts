import { City } from '../Models/CityClass';
import { Station } from '../Models/StationClass';

export const citiesArray: City[] = [
    new City(1, 'New York', [
      new Station(1, 'Union Station', [1, 2, 3]),
      new Station(2, 'Grand Central Terminal', [4, 5, 6])
    ]),
    new City(2, 'Los Angeles', [
      new Station(3, 'Union Station', [7, 8, 9]),
      new Station(4, 'Hollywood/Vine', [10, 11, 12])
    ]),
    new City(3, 'Chicago', [
      new Station(5, 'Union Station', [13, 14, 15]),
      new Station(6, 'Ogilvie Transportation Center', [16, 17, 18])
    ]),
    new City(4, 'Houston', [
      new Station(7, 'Downtown Transit Center', [19, 20, 21]),
      new Station(8, 'Greyhound Bus Station', [22, 23, 24])
    ]),
    new City(5, 'Phoenix', [
      new Station(9, 'Downtown Phoenix', [25, 26, 27]),
      new Station(10, 'Metrocenter Mall', [28, 29, 30])
    ]),
    new City(6, 'New Orleans', [
      new Station(11, 'Union Station', [31, 32, 33]),
      new Station(12, 'Central Station', [34, 35, 36])
    ])
];
