import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  event: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event('Evento1', 'Lima,Chorrillos', new Date('February 4, 2016 14:00:00')
    , 30.69, new Date('February 4, 2016 23:59:00'), 'urlurl');
    this.eventService.save(this.event);
    console.log('saved');
  }

}
