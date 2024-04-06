import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() taskName?: string;
  @Input() taskDescription?: string;
  @Input() taskPriority?: string;
  @Input() taskAssignee?: string;
}
