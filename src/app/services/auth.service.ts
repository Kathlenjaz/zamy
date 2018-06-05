import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const emailDomain = '@bcp.com.pe';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  registerUser(username: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(username + emailDomain, password);
  }

  logout(): Promise<any> {
    return this.angularFireAuth.auth.signOut();
  }

  login(username: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(username + emailDomain, password);
  }

  getAuth() {
    return this.angularFireAuth.authState.pipe(auth => auth);
  }
}
