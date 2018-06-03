import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './events/event-registration/event-registration.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AppRoutingModule } from './/app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseService } from './services/firebase.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCOu0Lwpp5d_eRnIyJHcVypT2E-UD9HF8A',
  authDomain: 'zamy-d9d98.firebaseapp.com',
  databaseURL: 'https://zamy-d9d98.firebaseio.com',
  projectId: 'zamy-d9d98',
  storageBucket: 'zamy-d9d98.appspot.com',
  messagingSenderId: '859727227209'
};

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EventListComponent,
    EventDetailComponent,
    AttendanceListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    FirebaseService,
    UserService,
    EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
