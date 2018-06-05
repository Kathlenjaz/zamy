import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { FirebaseService } from './firebase.service';
import { CollectionName } from '../enums/collection-name';

@Injectable()
export class UserService {

  constructor(private firebaseService: FirebaseService) {
  }

  getUserById(id: string): Observable<User> {
    return this.firebaseService.getDocumentById(CollectionName.users, id);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.firebaseService.getDocumentWhere(CollectionName.users, 'username', '==', username);
  }

}
