import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
})
export class ReservationComponent {
  flightId: number;
  passengerName: string = '';
  seatNumber: string = '';
  passengerDni: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private flightService: FlightService) {
    this.flightId = +this.route.snapshot.params['flightId'];
  }

  makeReservation(): void {
    this.flightService.makeReservation(this.flightId, this.passengerName, this.passengerDni, this.seatNumber).subscribe((res) => {
      // Return to reservation page
      this.flightService.updateFlightSeats(res.id).subscribe((response) => {
        console.log(response);
        Swal.fire(
          {
              title: 'Reservación hecha',
              text: `Se ha craedo la reserva a nombre de: ${this.passengerName.toUpperCase()}`,
              icon: 'success',
              confirmButtonText: 'OK'
          })
          .then((result:any) => {
            
            this.router.navigate(['/reservation']);

        })
      });
    });
  }
}
