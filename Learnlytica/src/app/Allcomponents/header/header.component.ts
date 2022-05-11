import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myDialogue: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.myDialogue
      .open( ContactComponent,
        {
          height: '300px',
          width: '800px',
          disableClose: true
        }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
