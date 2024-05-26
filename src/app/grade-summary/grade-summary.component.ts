import { Component } from '@angular/core';
import { PieChartComponent } from '../ui-elements/pie-chart/pie-chart.component';
@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent {
  courseData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.refreshCourseData();
  }

  deleteCourseById(id: number): void {
    const index = this.courseData.findIndex((course) => course.id === id);

    if (index !== -1) {
      this.courseData.splice(index, 1);

      this.saveToLocalStorage(this.courseData);
    }
  }

  private refreshCourseData(): void {
    const storedData = localStorage.getItem('courseData');
    this.courseData = storedData ? JSON.parse(storedData) : [];
  }

  private saveToLocalStorage(data: any[]): void {
    localStorage.setItem('courseData', JSON.stringify(data));
  }
  getCreditByType() {
    const courseData = JSON.parse(localStorage.getItem('courseData') || '[]');
    const creditTotalsByType: { [key: string]: number } = {};

    courseData.forEach((course: any) => {
      const type = course.type;
      const credit = parseInt(course.credit, 10);

      if (!creditTotalsByType[type]) {
        creditTotalsByType[type] = 0;
      }

      creditTotalsByType[type] += credit;
    });

    const ChartData = Object.values(creditTotalsByType);
    const ChartLabels = Object.keys(creditTotalsByType);

    // Generate background colors dynamically
    const BackgroundColors = this.generateRandomColors(ChartData.length);

    return { ChartData, ChartLabels, BackgroundColors };
  }

  // Property to store chart data
  pieChartData: { ChartData: number[], ChartLabels: string[], BackgroundColors: string[] } = this.getCreditByType();

  // Function to generate random background colors
  private generateRandomColors(count: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colors.push(randomColor);
    }
    return colors;
  }
}
