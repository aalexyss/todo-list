import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() :void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {

      data: {
        title: "",
        description: "",
        priority: "",
        assignee: ""
      }
    })
  }
}
