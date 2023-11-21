import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  name: FormControl<string | null> = new FormControl<string>('');
  grade: FormControl<string | null> = new FormControl<string>('');
  credit: FormControl<number | null> = new FormControl<number>(0);
  type: FormControl<string | null> = new FormControl<string>('');
  isGraded: FormControl<boolean | null> = new FormControl<boolean>(false);
  semester: FormControl<string | null> = new FormControl<string>('');

  // Function to handle form submission
  onSubmit() {
    const courseData = {
      courseName: this.name.value,
      grade: this.grade.value,
      credit: this.credit.value,
      type: this.credit.value,
      isGraded: this.isGraded.value,
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
