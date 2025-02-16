import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'harbor-sso',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mock-harbor-sso';
}
