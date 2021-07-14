import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    private domSanitizer: DomSanitizer
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
}
