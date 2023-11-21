import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

// const appRoutes:Routes=[
//   {path:'',component:HomeComponent},
//   {path:'add-course',component:AddCourseComponent}
  
// ]
@Component({
  // imports:[HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone:true,
  
})
export class AppComponent {
  title = 'my-angular-app';
  
}
