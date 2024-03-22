import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private userRegistration: UserRegistrationService) {}

  RegistrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', Validators.required),
  });

  OnRegister() {
    this.userRegistration.onRegister(this.RegistrationForm.value);
  }
}
