import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  constructor(
    // private dlg: MatDialog,

  ) { }
  onLogin(){
    // this.dlg.open(AddtweetComponent);
  }
}
