import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

export interface MatDialogData {
  setUsername: (name: string) => void;
  closeDialog: () => void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, MatDialogData {
  logginUser: any = {
    username: '',
  };

  matDialogref: MatDialogRef<LoginDialogComponent> | null = null;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let userInfo: string | null = '';
    if ((userInfo = localStorage.getItem('userInfo'))) {
      const userObj = JSON.parse(userInfo);
      const authType = localStorage.getItem('authType')
      if (authType === 'google') {
        this.setUsername(userObj.name);
      } else if (authType === 'github') {
        this.setUsername(userObj.login);
      }
    }
  }

  openDialog() {
    this.matDialogref = this.dialog.open<LoginDialogComponent, MatDialogData>(
      LoginDialogComponent,
      {
        autoFocus: false,
        data: {
          setUsername: this.setUsername,
          closeDialog: this.closeDialog,
        },
      }
    );
  }

  closeDialog = () => {
    this.matDialogref?.close();
  };

  setUsername = (name: string) => {
    this.logginUser.username = name;
  };

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('access_token');
    localStorage.removeItem('authType');
    this.setUsername('');
  }
}
