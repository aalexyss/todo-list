import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class DialogComponent {
  taskTitle: string = '';
  taskDescription: string = '';
  taskPriority: string = '';
  taskAssignee: string = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  createAssignment(): void {
    const newTask = {
      title: this.taskTitle,
      description: this.taskDescription,
      priority: this.taskPriority,
      assignee: this.taskAssignee,
    };

    this.dialogRef.close(newTask);
  }
}
