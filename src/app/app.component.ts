import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public dialog: MatDialog) {}

  todoTasks: any[] = [
    { name: "Task Name", assignee: "George Ben" },
    { name: "Other Task", assignee: "No assignee" }
  ];

  openDialog() :void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "",
        description: "",
        priority: "",
        assignee: ""
      }
    })

    dialogRef.afterClosed().subscribe(newTask => {
      if (newTask) {
        this.todoTasks.push(newTask);
      }
    });
  }
  }

