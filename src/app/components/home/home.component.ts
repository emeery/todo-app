import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../model/task';
import { MatDialog } from '@angular/material';
import { FormComponent } from '../form/form.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { EditformComponent } from '../editform/editform.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  tskSub: Subscription;
  date: string;
  constructor(
    public taskService: TasksService,
    public dlg: MatDialog) { }

  ngOnInit(): void {
    this.getTasks()
  }
  getTasks() {
    this.taskService.getTasks().subscribe((tsk: Task[]) => {
      this.tasks = tsk;
    })
    this.tskSub = this.taskService.getUserListener()
    .subscribe((tsk) => {
      this.tasks = tsk;
    });
  }
  createTask() {
    this.dlg.open(FormComponent)
    .beforeClose()
    .subscribe(()=> {
      this.getTasks()
    })
  }
  onEdit(tskid: string) {
    this.dlg.open(EditformComponent, {data: {id: tskid }})
    .beforeClose()
    .subscribe(()=> {
      this.getTasks()
    })
  }
  onDelete(id: string) {
   this.taskService.deleteTask(id).subscribe(() => {
     this.getTasks()
   });
 }
}
