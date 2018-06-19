import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { FileName } from '../../enums/file-name';
import { FolderName } from '../../enums/folder-name';
import { AppSettings } from '../../app.settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  event: Event;
  uploadEvent: any;
  eventForm: NgForm;
  imageUrl = '../assets/upload image.png';
  fileToUpload: File = null;
  date1: any;
  date2: any;

  constructor(private eventService: EventService, private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
    this.event = new Event('', '', '', new Date(), 0, new Date(), '');
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension, uploadEvent).then(() => this.saveImageURL());
  }

  saveImageURL() {
    this.firebaseStorageService.getFileURL(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension).subscribe(url => {
        console.log('url : ' + url);
        this.event.imageURL = url;
        console.log('event == ' + JSON.stringify(this.event));
        this.eventService.update(this.event.id, this.event);
      });
  }


  onSubmit() {
    this.formatDate();
    console.log(this.event.date.getDate());
    console.log('event == ' + JSON.stringify(this.event));
    console.log('guardando');
    this.eventService.save(this.event).then(event => {
      this.event.id = event.id;
      console.log('id = ' + event.id);
      this.uploadImage(this.uploadEvent);
      this.resetForm();
    });
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
    console.log(this.uploadEvent);
    this.fileToUpload = this.uploadEvent.target.files[0];
    const reader = new FileReader();
    reader.onload = (_event: any) => {
      this.imageUrl = _event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  resetForm() {
    if (this.eventForm != null) {
      this.eventForm.reset();
    }
  }
  formatDate() {
    // this.event.date = new Date(this.date1);
    // this.event.date = new Date(this.date2);
  }
}
