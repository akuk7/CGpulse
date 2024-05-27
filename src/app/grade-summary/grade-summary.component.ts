import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service'; // Adjust the path as necessary

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  courseData: any[] = [];
  pieChartData: { ChartData: number[], ChartLabels: string[], BackgroundColors: string[] } = { ChartData: [], ChartLabels: [], BackgroundColors: [] };

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.refreshCourseData();
  }

  deleteCourseById(id: number): void {
    this.gradeService.deleteCourse(id).subscribe(
      () => {
        this.courseData = this.courseData.filter(course => course.id !== id);
        this.refreshChartData();
        console.log(id)
       
      },
      (error:any) => {
        console.error('Error deleting course:', error);
      }
    );
  }

  private refreshCourseData(): void {
    this.gradeService.getCourses().subscribe(
      (data: any[]) => {
        this.courseData = data;
        this.refreshChartData();
      },
      (error:any) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  private refreshChartData(): void {
    const creditTotalsByType: { [key: string]: number } = {};

    this.courseData.forEach((course: any) => {
      const type = course.type;
      const credit = parseInt(course.credit, 10);

      if (!creditTotalsByType[type]) {
        creditTotalsByType[type] = 0;
      }

      creditTotalsByType[type] += credit;
    });

    const ChartData = Object.values(creditTotalsByType);
    const ChartLabels = Object.keys(creditTotalsByType);
    const BackgroundColors = this.generateRandomColors(ChartData.length);

    this.pieChartData = { ChartData, ChartLabels, BackgroundColors };
  }

  private generateRandomColors(count: number): string[] {
    const colors: string[] = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
      colors.push(randomColor);
    }
    return colors;
  }
}
