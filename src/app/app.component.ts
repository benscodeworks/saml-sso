import {Component, OnInit} from '@angular/core';
import {LoginComponent} from './login/login.component';

declare const document: Document;
@Component({
  selector: 'harbor-sso',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'mock-harbor-sso';

  ngOnInit(): void {
    setTimeout(() =>
      document?.body?.classList?.forEach(token => console.log(token)), 5000
    )
  }
}
