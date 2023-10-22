import { Component } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  departure: string = '';
  destination: string = '';
  flights: any;

  constructor(private flightService: FlightService) {}

  searchFlights() {
    this.flightService.searchFlights(this.departure, this.destination).subscribe((data) => {
      this.flights = data;
    })
  }
  searchAllFlights() {
    this.flightService.searchAllFlights().subscribe((data) => {
      this.flights = data;
    })
  }
}
