import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../services/attendance.service';
import { AuthService } from '../../services/auth.service';
import { AppSettings } from '../../app.settings';
import { Participant } from '../../models/participant.model';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  event: Event;
  eventId: string;
  participantId: string;
  routeSubscriber: any;
  eventSubscriber: any;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute,
    private attendanceService: AttendanceService, private authService: AuthService) { }

  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.eventId = params['id']);
    this.eventSubscriber = this.eventService.getEventById(this.eventId).subscribe(event => this.event = event);
    this.authService.getAuth().forEach(authUser => {
      this.participantId = authUser.email.replace(AppSettings.emailDomain, '');
    });
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
    this.eventSubscriber.unsubscribe();
  }

  saveAttendance() {
    if (this.participantId) {
      this.attendanceService.saveAttendance(this.eventId, new Participant(this.participantId, new Date()));
      console.log('Attendance saved successfully');
    } else {
      console.log('No user');
    }

  }

}
