import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppSettings } from '../../app.settings';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  logout(): Promise<any> {
    return this.angularFireAuth.auth.signOut();
  }

  login(username: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(username + AppSettings.emailDomain, password);
  }

  getAuth() {
    return this.angularFireAuth.authState.pipe(auth => auth);
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('reset password - email sent'))
      .catch((error) => console.log(error));
  }

}
