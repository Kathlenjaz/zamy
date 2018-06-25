import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-restoration',
  templateUrl: './password-restoration.component.html',
  styleUrls: ['./password-restoration.component.css']
})
export class PasswordRestorationComponent implements OnInit {
  username: string;
  warningMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  sendRestorationEmail(): void {
    if (this.username !== undefined) {
      this.authService.resetPassword(this.username + AppSettings.emailDomain).catch(err => console.log('error: ' + err));
    } else {
      this.warningMessage = 'Ingrese username';
      console.log('no username');
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
