import { Component } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
})
export class FlightListComponent {
  departure: string = '';
  destination: string = '';
  flights: any[] = [];

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flightService.searchFlights(this.departure, this.destination).subscribe((flights) => {
      this.flights = flights;
    });
  }
}
