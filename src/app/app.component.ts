import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./cards/cards.component";
import { HeaderComponent } from "./header/header.component";
import { RegistrationComponent } from "./registration/registration.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CardsComponent, HeaderComponent, RegistrationComponent]
})
export class AppComponent {
  title = 'userCard';
}
