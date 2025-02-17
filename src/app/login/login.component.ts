import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType, MatFormFieldAppearance, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ThemePalette} from '@angular/material/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'harbor-sso-login',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly consumerUrlFc = new FormControl('');
  readonly targetUrlFc = new FormControl('');
  readonly emailFc = new FormControl('');
  readonly firstNameFc = new FormControl('');
  readonly lastNameFc = new FormControl('');

  readonly ssoForm: FormGroup = new FormGroup({
    consumerUrl: this.consumerUrlFc,
    targetUrl: this.targetUrlFc,
    email: this.emailFc,
    firstName: this.firstNameFc,
    lastName: this.lastNameFc,
  });

  readonly appearance: MatFormFieldAppearance = 'outline';
  readonly color: ThemePalette = 'primary';
  readonly floatLabel: FloatLabelType = 'always';
}
