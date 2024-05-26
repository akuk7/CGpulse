import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnChanges {
  @Input() courseData: any[] = [];

  datasets: any[] = [];
  labels: string[] = [];

  chartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Course Name'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'CGPA'
        }
      }]
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.courseData) {
      this.updateChart();
    }
  }

  updateChart(): void {
    // Sorting the course data by semester before processing
    this.courseData.sort((a, b) => a.semester - b.semester);

    this.labels = this.courseData.map(course => course.name);
    this.datasets = [
      {
        data: this.courseData.map((course, index) => this.calculateCGPA(index)),
        label: 'CGPA'
      }
    ];
  }

  calculateCGPA(index: number): number {
    // Calculate CGPA dynamically for each course
    if (index === 0) {
      // For the first course, CGPA is the same as the gradePoints
      return this.courseData[index].gradePoints;
    } else {
      // For subsequent courses, CGPA is the average of all gradePoints till this course
      const previousCGPA = this.datasets[0].data[index - 1];
      const currentGradePoints = this.courseData[index].gradePoints;

      // Calculate the new CGPA by taking the average
      return (previousCGPA * index + currentGradePoints) / (index + 1);
    }
  }

  chartHovered(event: any): void {
    // Handle hover events
  }

  chartClicked(event: any): void {
    // Handle click events
  }
}
