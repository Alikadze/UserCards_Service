import { Component, inject } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [JsonPipe, NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  UserInfo = inject(UserRegistrationService);

  get Users() {
    return this.UserInfo.Users.length;
  }

  get UserName() {
    if (this.UserInfo.Users.length > 0) {
      return this.UserInfo.Users[0].userName;
    }
    return '';
  }

  get Usermail() {
    if (this.UserInfo.Users.length > 0) {
      return this.UserInfo.Users[0].mail;
    }
    return '';
  }

  get Usernumber() {
    if (this.UserInfo.Users.length > 0) {
      return this.UserInfo.Users[0].number;
    }
    return '';
  }
}
