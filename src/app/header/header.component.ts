import { Component, inject } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private userRegistration: UserRegistrationService) {}

  get NumberOfUsers() {
    return this.userRegistration.UserNumber;
  }
}
