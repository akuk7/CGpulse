import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from '../add-course/add-course.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showAddCourse = false;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.showAddCourse$.subscribe((showAddCourse) => {
      this.showAddCourse = showAddCourse;
    });
}}
