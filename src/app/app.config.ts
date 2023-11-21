import { ApplicationConfig } from "@angular/core";
import { Routes, provideRouter } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
    import { HomeComponent } from "./home/home.component";
const routes: Routes = [
    { path: '/', component: HomeComponent },
    { path: '/add-course', component: AddCourseComponent },
  ];
export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };