import { Router } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  initialPage = HomeComponent;

  constructor(
    private router: Router
  ) { }
}
