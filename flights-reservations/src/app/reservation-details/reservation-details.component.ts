import { Component } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css'],
})
export class ReservationDetailsComponent {
  userDni!: number;
  reservation: any;

  constructor(private flightService: FlightService) {}

  buscarReserva() {
    this.flightService.getReservationDetails(this.userDni).subscribe((data) => {
      this.reservation = data;
    });
  }
}