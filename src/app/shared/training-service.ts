

import { Injectable } from '@angular/core';
import { Training } from '../shared/Training';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class TrainingService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Training) {
    return this.bookingListRef.push({
      name: apt.name,
      date: apt.date,
      notes: apt.notes
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Training) {
    return this.bookingRef.update({
        name: apt.name,
        date: apt.date,
        notes: apt.notes
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}