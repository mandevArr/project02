import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'proj02-client';
  ngOnInit(): void {
    fetch('/api/foo').then((d) => d.json()).then(console.log)
  }
}
