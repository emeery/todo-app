import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  private tskId: String;
  taskForm: FormGroup;
  constructor(
    public taskService: TasksService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditformComponent>) {}

  ngOnInit() {
    this.initForma();
    this.taskService.getTask(this.data.id)
    .subscribe((dta) => {
      this.tskId = dta._id
      this.taskForm.setValue({title:dta.title})
    });
  }
  private initForma() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }
}
