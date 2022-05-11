import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/Allservices/config.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // Box1 = [
  // {
  //   title: 'git ass devops tool',
  //   text1: 'Learnlytica',
  //   text2: '₹1599 ₹1499',
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa18860cf26833c8eca46c/61aa18860cf26833c8eca46c_scaled_cover.jpg?v=1'
  // },
  // {
  //   title: 'devops automation',
  //   text1: 'Learnlytica',
  //   text2: '₹1599 ₹1499',
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aa193f0cf272b4d2eef49a/61aa193f0cf272b4d2eef49a_scaled_cover.jpg?v=1'

  // },
  // {
  //   title: 'chef as a devops tool',
  //   text1: 'Learnlytica',
  //   text2: '₹1599 ₹1499',
  //   imagelink: 'https://dz8fbjd9gwp2s.cloudfront.net/courses/61aaffed0cf2a71c5139fc7c/61aaffed0cf2a71c5139fc7c_scaled_cover.jpg?v=1'
  // },
  // {
  //   title: 'using jenkins for devops',
  //   text1: 'Learnlytica',
  //   text2: '₹1599 ₹1499', 

  // }
  // ];

  @Input() imgid: any;
  @Input() configs: any;

  imgUrl: any;

  constructor(private myconfig: ConfigService) { }

  ngOnInit(): void {

    this.imgUrl = `https://dz8fbjd9gwp2s.cloudfront.net/courses/${this.imgid}/${this.imgid}_scaled_cover.jpg?v=1`;

    // this.myconfig.getCourseConfiguration().subscribe(

    //   (data) => {

    //     console.log(data)

    //   }
    // );
  }

}
