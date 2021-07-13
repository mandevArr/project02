import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    for (const tab of this.tabs) {
      iconRegistry.addSvgIcon(
        tab['icon'],
        domSanitizer.bypassSecurityTrustResourceUrl(`assets/${tab['icon']}.svg`)
      );
    }
  }
  tabs: any[] = [
    { link: 'Settings', icon: 'setting_icon' },
    {
      link: 'Profile',
      icon: 'user_profile_icon',
    },
  ];
  ngOnInit() {}
}
