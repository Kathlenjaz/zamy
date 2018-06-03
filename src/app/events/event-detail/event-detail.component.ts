import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  event: Event;
  eventId: string;
  subscriber: any;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscriber = this.activatedRoute.params.subscribe(params => this.eventId = params['id']);
    this.eventService.getEventById(this.eventId).subscribe(event => this.event = event);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
