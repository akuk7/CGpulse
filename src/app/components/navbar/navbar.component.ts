import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private sharedService: SharedService) {}

  onAddCourseButtonClick(): void {
    this.sharedService.toggleAddCourse();
  }
  
}
