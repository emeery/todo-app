import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  tweetForm: FormGroup;

    constructor(
      public taskService: TasksService,
      private formBuilder: FormBuilder,
      private dlgRef: MatDialogRef<FormComponent>
      ) { }

    ngOnInit() {
      this.tweetForm = this.formBuilder.group({
        title: ['', Validators.required]
      });
    }
    onSubmit() {
      this.taskService.addTask(this.tweetForm.value)
      .subscribe(() => {
        this.dlgRef.close()
      })
    }

}
