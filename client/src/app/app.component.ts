import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // logginUser = {
  //   username: 'Lucy'
  // }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent, {
      autoFocus: false
    });
  }
  logginUser: any = null;
  ngOnInit(): void {}
}
