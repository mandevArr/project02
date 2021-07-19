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
        `${env.googleAuthEndPoint}&redirect_uri=${window.location.origin}${env.googleRedirectUri}&client_id=${env.googleClientID}&${env.googleScope}`,
        '_blank'
      );
      let flag: string | null = '';
      const intervalID = setInterval(() => {
        if ((flag = window.localStorage.getItem('__flag'))) {
          clearInterval(intervalID);
          window.localStorage.removeItem('__flag');
          if (flag === 'true') {
            this.parentData.closeDialog();
            const userInfo = window.localStorage.getItem('userInfo');
            const userObj: any = JSON.parse(userInfo || '{}');
            this.parentData.setUsername(userObj['name']);
          } else {
            // TODO: use dialog
            console.error('Google Error')
          }
        }
      }, 500);
    } else if (type === 'github') {
      window.open(
        `${env.githubAuthEndPoint}&redirect_uri=${window.location.origin}${env.githubRedirectUri}&client_id=${env.githubClientID}&${env.githubScope}&state="foobar"`,
        '_blank'
      );
      let flag: string | null = '';
      const intervalID = setInterval(() => {
        if ((flag = window.localStorage.getItem('__flag'))) {
          clearInterval(intervalID);
          window.localStorage.removeItem('__flag');
          if (flag === 'true') {
            this.parentData.closeDialog();
            const userInfo = window.localStorage.getItem('userInfo');
            const userObj: any = JSON.parse(userInfo || '{}');
            this.parentData.setUsername(userObj['login']);
          } else {
            // TODO: use dialog
            console.error('Github Error')
          }
        }
      }, 500);
    }
  }
}
