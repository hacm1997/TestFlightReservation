import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchFormComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'reservation', component: ReservationDetailsComponent },
  { path: 'reservation/:flightId', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}