import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../enums/collection-name';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {

  constructor(private firebaseService: FirebaseService) { }

  getAll(): Observable<Event[]> {
    return this.firebaseService.getCollection(CollectionName.events);
  }

  save(event: Event): void {
    this.firebaseService.addDocumentNoId(CollectionName.events, event);
  }

  getEventById(id: string): Observable<Event> {
    return this.firebaseService.getDocumentById(CollectionName.events, id);
  }
}
