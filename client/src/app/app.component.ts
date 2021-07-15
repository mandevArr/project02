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
    let id_token: string | null = '';
    if ((id_token = localStorage.getItem('id_token'))) {
      const userObj = JSON.parse(id_token);
      this.setUsername(userObj.name);
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
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    this.setUsername('');
  }
}
