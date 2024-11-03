import { Component } from '@angular/core';
import { SeatService } from './seat.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent {
  requestedSeats: number = 1;
  reservedSeatIds: number[] = [];
  allSeats = this.seatService.getSeats();

  constructor(private seatService: SeatService) {}

  onReserveSeats() {
    if (this.requestedSeats <= 0 || this.requestedSeats > 7) {
      alert('Please request between 1 and 7 seats');
      return;
    }

    if (this.requestedSeats > this.seatService.getAvailableSeats()) {
      alert('Not enough seats available');
      return;
    }

    this.reservedSeatIds = this.seatService.reserveSeats(this.requestedSeats);
  }
}
