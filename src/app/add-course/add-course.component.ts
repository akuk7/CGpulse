import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
let currentId=0;
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  name: FormControl<string | null> = new FormControl<string>('');
  grade: FormControl<string | null> = new FormControl<string | null>(null);

  credit: FormControl<number | null> = new FormControl<number>(0);
  type: FormControl<string | null> = new FormControl<string>('');
  isGraded: FormControl<boolean | null> = new FormControl<boolean>(false);
  semester: FormControl<string | null> = new FormControl<string>('');

  // Function to handle form submission
  getLetterGrade(numericGrade: string | null) {
      
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
        return 'N/A'; // Handle cases where the numeric grade is not in the mapping
    }
  }
  videoSource: string | undefined;

  onGradeChange() {
    // Handle the grade change event here
    const selectedGrade = this.getLetterGrade(this.grade.value);
    this.videoSource = `../../assets/grades/${selectedGrade}.mp4`;
    console.log(selectedGrade)
  }
  
  onSubmit() {
    // Check if numericGrade is not null before using it
currentId+=1
    const courseData = {
      id:currentId,
      courseName: this.name.value,
      grade: this.getLetterGrade(this.grade.value),
      credit: this.credit.value,
      type: this.type.value,
      semester: this.semester.value,
    };
    this.saveToLocalStorage(courseData);
    
  }

  private saveToLocalStorage(data: any) {
    const existingData = JSON.parse(localStorage.getItem('courseData') || '[]');
    existingData.push(data);
    localStorage.setItem('courseData', JSON.stringify(existingData));
  }
}
