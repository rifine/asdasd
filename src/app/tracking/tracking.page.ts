import { Component, OnInit } from '@angular/core';
import { Training } from '../shared/Training';
import { TrainingService } from './../shared/training-service';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  Bookings = [];
  constructor(private aptService: TrainingService) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Training);
      });
    });
  }
  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }

  deleteBooking(id) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deleteBooking(id);
    }
  }
}
