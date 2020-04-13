import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from '../shared/training-service';
@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: TrainingService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      date: [''],
      notes: ['']
    })   
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/tracking']);
      })
        .catch(error => console.log(error));
    }
  }

}
