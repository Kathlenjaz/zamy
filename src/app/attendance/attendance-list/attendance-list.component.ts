import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { AttendanceService } from '../../services/attendance.service';
import { Participant } from '../../models/participant.model';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit, OnDestroy {
  event: Event;
  eventId: string;
  participants: Participant[];
  routeSubscriber: any;
  participantsSubscriber: any;

  constructor(private attendanceService: AttendanceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.eventId = params['id']);
    this.participantsSubscriber = this.attendanceService.getParticipants(this.eventId)
    .subscribe(participants => this.participants = participants);
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
    this.participantsSubscriber.unsubscribe();
  }

}
