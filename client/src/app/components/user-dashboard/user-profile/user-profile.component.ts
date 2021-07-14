import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  data = '';

  ngOnInit(): void {
    fetch('/api/foo')
      .then((d) => d.text())
      .then((d) => (this.data = d));
  }
}
