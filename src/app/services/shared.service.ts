// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private showAddCourseSubject = new BehaviorSubject<boolean>(false);
  showAddCourse$ = this.showAddCourseSubject.asObservable();

  toggleAddCourse(): void {
    this.showAddCourseSubject.next(!this.showAddCourseSubject.value);
  }
}
