import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password).then(data => {
      console.log(data);
      this.goToMainPage();
    }
    ).catch(err => console.log('ERROR ' + err));
  }


  logout() {
    this.authService.logout().then(data => console.log(data)).catch(err => console.log('ERROR ' + err));
  }

  goToMainPage(): void {
    this.router.navigate(['event', 'all']);
  }

}
