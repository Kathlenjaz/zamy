import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  events: Event[];
  subscriber: any;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.subscriber = this.eventService.getAll().subscribe(eventList => this.events = eventList);
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['event', eventId]);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
