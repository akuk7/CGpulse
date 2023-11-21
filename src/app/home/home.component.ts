import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'home',
  // standalone: true,
  templateUrl: './home.component.html',
  
  // imports: [CommonModule],
  template: `
    <p>
      home works!
    </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
