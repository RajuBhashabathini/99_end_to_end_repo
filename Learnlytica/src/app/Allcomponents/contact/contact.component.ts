import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/Allservices/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  myform: FormGroup = new FormGroup({

    FName: new FormControl(),
    LName: new FormControl(),
    UName: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl()

  });

  constructor(private usrService: UserService) { }


  getValues() {
    console.log(this.myform);
    this.usrService.submitContactDetails(this.myform.value)
      .subscribe((data) => {
        console.log(data)
      })
  }
  ngOnInit(): void {

  }

}
