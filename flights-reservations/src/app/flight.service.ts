import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './models/flight.model';
import { Reservation } from './models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  searchAllFlights(): Observable<any> {
    return this.http.get<Flight>(`${this.apiUrl}/flights`);
  }

  searchFlights(departure: string, destination: string): Observable<any> {
    const params = { departure, destination };
    return this.http.get<Flight>(`${this.apiUrl}/flights/search`, { params });
  }

  makeReservation(flightId: number, passengerName: string, passengerDni: string, seatNumber: string): Observable<any> {
    const reservationData = { flightId, passengerName, passengerDni, seatNumber };
    return this.http.post<Reservation>(`${this.apiUrl}/reservation`, reservationData);
  }

  getReservationDetails(userDni: number): Observable<any> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${userDni}`);
  }

  updateFlightSeats(reservationId: number) {
    console.log('reservationId => ', reservationId)
    const url = `${this.apiUrl}/update-flight/${reservationId}`;
    return this.http.put(url, null);
  }
}
