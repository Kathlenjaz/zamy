import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../enums/collection-name';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {

  constructor(private firebaseService: FirebaseService) { }

  getAll(): Observable<Event[]> {
    return this.firebaseService.getCollection(CollectionName.event);
  }

  save(event: Event): void {
    this.firebaseService.addDocumentNoId(CollectionName.event, event);
  }

  getEventById(id: string): Observable<Event> {
    return this.firebaseService.getDocumentById(CollectionName.event, id);
  }
}
