import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponentComponent {

  taskTitle: string = '';
  taskDescription: string = '';
  taskPriority: string = '';
  taskAssignee: string = '';
  
  @Output() taskCreated = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<DialogComponentComponent>) { }

  
  createAssignment() :void {
    console.log('Create Assignment button clicked');
    const newTask = {
      title: this.taskTitle,
      description: this.taskDescription,
      priority: this.taskPriority,
      assignee: this.taskAssignee
    };

    this.taskCreated.emit(newTask);

    this.dialogRef.close(newTask);
  }
}
