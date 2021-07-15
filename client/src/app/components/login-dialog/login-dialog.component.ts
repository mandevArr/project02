import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogData } from 'src/app/app.component';
import { environment as env } from 'src/environments/environment';

const googleLogoURL =
  'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

const gitHubLogoURL = 'assets/github.svg';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA)
    private parentData: MatDialogData
  ) {
    this.matIconRegistry.addSvgIcon(
      'google-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL)
    );
    this.matIconRegistry.addSvgIcon(
      'github-logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(gitHubLogoURL)
    );
  }

  ngOnInit(): void {}

  login(type: 'google' | 'github') {
    if (type === 'google') {
      window.open(
        `${env.googleAuthEndPoint}&redirect_uri=${env.redirectUri}&client_id=${env.googleClientID}&${env.googleScope}`,
        '_blank'
      );
      const intervalID = setInterval(() => {
        if (window.localStorage.getItem('__flag')) {
          clearInterval(intervalID);
          window.localStorage.removeItem('__flag');
          this.parentData.closeDialog();
          const id_token = window.localStorage.getItem('id_token');
          const userObj: any = JSON.parse(id_token || '{}');
          this.parentData.setUsername(userObj['name']);
        }
      }, 500);
    }
  }
}
