// grade.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private apiUrl = 'http://localhost:5000/api/grades'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  // Add a new grade
  addCourse(courseData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, courseData);
  }

  // Fetch all grades
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Delete a grade by ID
  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Update a grade by ID
  updateCourse(id: number, courseData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, courseData);
  }
}
