import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.css'],
})
export class FullListComponent implements OnInit {
  data;
  modifiedData;
  constructor(private service: AppService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.modifiedData = this.router.getCurrentNavigation().extras.state;
    }
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getPosts().subscribe((res) => {
      this.data = res;
      if (this.modifiedData) {
        let findIndex = this.data.findIndex((ind) => {
          return ind.id == this.modifiedData.data.id;
        });
        this.data[findIndex].title = this.modifiedData.data.title;
        this.data[findIndex].body = this.modifiedData.data.body;
      }
    });
  }

  navigate(data) {
    this.router.navigateByUrl(`/details/${data.id}`, { state: { data: data } });
  }
}
