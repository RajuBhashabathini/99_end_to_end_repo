import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/Allservices/config.service';
import { UserService } from 'src/app/Allservices/user.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  cList: any;
  somee: any;

  constructor(private call: ConfigService, private prof: UserService) { }

  ngOnInit(): void {
    this.call.getCourseListCourse().subscribe((value) => {
      this.cList = value
    });

    this.prof.getProfile().subscribe( (data2) => {
      this.somee = data2
    });

  }

}
