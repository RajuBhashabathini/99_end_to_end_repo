import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TableexampleComponent } from '../tableexample/tableexample.component';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {
  prodName: string = '';
  qParam: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramsData =>  this.prodName=paramsData['pid'] );
      
    this.activatedRoute.queryParams.subscribe(paramsData => this.qParam=paramsData);
    

  }
}
