import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GradeSummaryComponent } from './grade-summary/grade-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PieChartComponent } from './ui-elements/pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'grade-summary', component: GradeSummaryComponent },
  {path:'pie',component:PieChartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCourseComponent,
    GradeSummaryComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
