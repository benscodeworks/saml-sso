import {Component, OnInit} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';

declare const document: Document;
@Component({
  selector: 'harbor-sso',
  standalone: true,
  imports: [LoginComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mock-harbor-sso';

  ngOnInit(): void {
    setTimeout(() =>
      document?.body?.classList?.forEach(token => console.log(token)), 5000
    )
  }
}
