import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from './../shared/training-service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: TrainingService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
   }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      name: [''],
      date: [''],
      notes: ['']
    })
    console.log(this.updateBookingForm.value)
  }
updateForm() {
  this.aptService.updateBooking(this.id, this.updateBookingForm.value)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
}
}
