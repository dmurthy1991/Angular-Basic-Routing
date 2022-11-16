import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  detail;
  detailForm: FormGroup;

  constructor(private router: Router) {
    this.detail = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    this.detailForm = new FormGroup({
      title: new FormControl(this.detail.data.title),
      body: new FormControl(this.detail.data.body),
      id: new FormControl(this.detail.data.id),
    });
  }

  onSave() {
    console.log('this is form', this.detailForm);
    this.router.navigateByUrl('/home', {
      state: { data: this.detailForm.value },
    });
  }
}
