import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn: Boolean;

  constructor(private authService: AuthService) {
    this.authService.isLoggedInObs()
      .subscribe(flag => {
        this.loggedIn = flag;
        if (!flag) {
          this.authService.startSigninMainWindow();
        }
      });
  }

  login() {
    this.authService.startSigninMainWindow();
  }

  logout() {
    this.authService.startSignoutMainWindow();
  }
}
