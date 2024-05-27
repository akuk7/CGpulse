import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradeService } from '../grade.service'; // Adjust path as per your project structure
import { v4 as uuidv4 } from 'uuid'; 
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  grades = [
    { value: 10, label: 'S' },
    { value: 9, label: 'A' },
    { value: 8, label: 'B' },
    { value: 7, label: 'C' },
    { value: 6, label: 'D' },
    { value: 4, label: 'E' },
    { value: 0, label: 'U' }
  ];

  types = [
    { value: 'Science', label: 'Science' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Humanities', label: 'Humanities' },
    { value: 'Professional', label: 'Professional' },
    { value: 'Others', label: 'Others' }
  ];

  semesters = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
  ];

  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService
  ) {
    this.courseForm = this.fb.group({
      
      course: ['', Validators.required],
      grade: [null, Validators.required],
      credit: ['', Validators.required],
      type: ['', Validators.required],
      semester: ['', Validators.required]
    });
  }

  // Function to convert numeric grade to letter grade
  getLetterGrade(numericGrade: string | null): string {
    switch (numericGrade) {
      case '0':
        return 'U';
      case '4':
        return 'E';
      case '6':
        return 'D';
      case '7':
        return 'C';
      case '8':
        return 'B';
      case '9':
        return 'A';
      case '10':
        return 'S';
      default:
        return 'N/A';
    }
  }

  // Function to handle grade change event
  onGradeChange() {
    const selectedGrade = this.getLetterGrade(this.courseForm.value.grade);
    // Check if videoPlayer is defined before accessing nativeElement
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.src = `../../assets/grades/${selectedGrade}.mp4`;
    } else {
      console.error('videoPlayer is undefined.');
    }
  }

  // Function to handle form submission
  onSubmit() {
    console.log("Form submitted");
    if (this.courseForm.valid) {
      console.log("Form valid");
      const courseData = {
        id: uuidv4(),
        course: this.courseForm.value.course,
        grade: this.courseForm.value.grade,
        credit: this.courseForm.value.credit,
        type: this.courseForm.value.type,
        semester: this.courseForm.value.semester
      };

      console.log("Course Data:", courseData); // Log the data being sent

      this.gradeService.addCourse(courseData).subscribe(
        (response: any) => {
          console.log('Grade added successfully:', response);
          this.courseForm.reset();
        },
        (error: any) => {
          console.error('Error adding grade:', error);
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }
}
