import {Route} from "../Models/RouteClass";
import {busesArray} from "./Buses";
import {DateTime} from "../Models/DateTimeClass";
import {citiesArray} from "./CitiesStations";

export const routesArray: Route[] = [
    new Route(1, "Route 1", busesArray[0], new DateTime(new Date("2024-06-01T08:00:00"), new Date("2024-06-01T12:00:00"), new Date("2024-06-01T10:00:00"), new Date("2024-06-01T10:30:00")), 50, citiesArray[0], citiesArray[1]),
    new Route(2, "Route 2", busesArray[1], new DateTime(new Date("2024-06-02T09:00:00"), new Date("2024-06-02T13:00:00"), new Date("2024-06-02T11:00:00"), new Date("2024-06-02T11:30:00")), 60, citiesArray[1], citiesArray[2]),
    new Route(3, "Route 3", busesArray[2], new DateTime(new Date("2024-06-03T10:00:00"), new Date("2024-06-03T14:00:00"), new Date("2024-06-03T12:00:00"), new Date("2024-06-03T12:30:00")), 70, citiesArray[2], citiesArray[3]),
    new Route(4, "Route 4", busesArray[3], new DateTime(new Date("2024-06-04T11:00:00"), new Date("2024-06-04T15:00:00"), new Date("2024-06-04T13:00:00"), new Date("2024-06-04T13:30:00")), 80, citiesArray[3], citiesArray[4]),
    new Route(5, "Route 5", busesArray[0], new DateTime(new Date("2024-06-05T12:00:00"), new Date("2024-06-05T16:00:00"), new Date("2024-06-05T14:00:00"), new Date("2024-06-05T14:30:00")), 90, citiesArray[4], citiesArray[5])
];