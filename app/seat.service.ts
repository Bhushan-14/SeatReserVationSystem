import { Injectable } from '@angular/core';
import { Seat } from './seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private seats: Seat[] = Array.from({ length: 80 }, (_, i) => ({ id: i + 1, reserved: false }));

  getSeats(): Seat[] {
    return this.seats;
  }

  reserveSeats(requestedSeats: number): number[] {
    let reservedSeats: number[] = [];

    for (let i = 0; i < this.seats.length && reservedSeats.length < requestedSeats; i++) {
      if (!this.seats[i].reserved) {
        reservedSeats.push(this.seats[i].id);
        this.seats[i].reserved = true;
      }
    }

    return reservedSeats;
  }

  getAvailableSeats(): number {
    return this.seats.filter(seat => !seat.reserved).length;
  }
}
