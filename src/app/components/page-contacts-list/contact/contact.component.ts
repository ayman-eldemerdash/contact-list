import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  url = environment.url;

  @Input() contact;

  constructor() { }

  ngOnInit() {
  }

  replaceMissedPhoto(e) {
    e.target.src = `${this.url}user.svg`;
  }
}
