import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
    console.log('STARTED COURSES');
  }

  onClick() {
    console.log('CLICKED');
  }
}
