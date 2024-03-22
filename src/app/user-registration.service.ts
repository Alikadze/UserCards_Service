import { Injectable } from '@angular/core';

type User = {
  userName: string;
  mail: string;
  number: number;
};

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  Users: User[] = [];

  UserNumber = 0;

  onRegister(user: any) {
    console.log('User is registered', this.Users);
    this.Users.push(user);

    this.UserNumber = this.Users.length;
    console.log('UserNumber:', this.UserNumber);
  }
}
