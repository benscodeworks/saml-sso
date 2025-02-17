import {ChangeDetectorRef, Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';

declare const document: Document;

@Component({
  selector: 'harbor-sso',
  standalone: true,
  imports: [LoginComponent, MatToolbarModule, MatSlideToggleModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = true;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  toggleDarkMode(event: MouseEvent): void {
    console.log(event);
    this.isChecked = !this.isChecked;
    console.log(document.body.classList.toggle('dark-mode'));
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }
}
