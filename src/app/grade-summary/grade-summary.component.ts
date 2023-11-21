import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent {
  courseData: any[] = []; // Initialize with an empty array

  constructor() { }

  ngOnInit(): void {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('courseData');
    this.courseData = storedData ? JSON.parse(storedData) : [];
  }
}
