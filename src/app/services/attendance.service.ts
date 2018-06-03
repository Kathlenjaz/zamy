import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../enums/collection-name';
import { Participant } from '../models/participant.model';

@Injectable()
export class AttendanceService {

  constructor(private firebaseService: FirebaseService) { }

  getParticipants(eventId: string): Observable<Participant[]> {
    return this.firebaseService.getCollection(CollectionName.attendance);
  }
}
