import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../../services/contacts.service';

@Component({
  selector: 'app-page-contacts-list',
  templateUrl: './page-contacts-list.component.html',
  styleUrls: ['./page-contacts-list.component.scss']
})
export class PageContactsListComponent implements OnInit {
  recent = [];
  all = [];
  sortedList = {};
  alphabets = [];
  searchString: string;

  constructor(private contactsService: ContactsService) {
    this.alphabets = Array.apply(null, { length: 26 }).map((x, i) => String.fromCharCode(65 + i));
  }

  ngOnInit() {
    this.recent = this.contactsService.recent;
    this.all = this.contactsService.all;
    if (this.all) {
      this.goupingList();
    }
  }

  goupingList() {
    this.all.forEach(contact => {
      if (contact.firstName) {
        contact.firstName = contact.firstName.charAt(0).toUpperCase() + contact.firstName.slice(1);
        // tslint:disable-next-line: max-line-length
        !this.sortedList[contact.firstName[0]] ? this.sortedList[contact.firstName[0]] = [contact] : this.sortedList[contact.firstName[0]].push(contact);
      }
    });
    this.sortingList();
  }

  sortingList() {
    for (const key in this.sortedList) {
      if (this.sortedList.hasOwnProperty(key)) {
        // tslint:disable-next-line: max-line-length
        this.sortedList[key].sort((a, b) => (a.firstName > b.firstName) ? 1 : (a.firstName === b.firstName) ? ((a.lastName > b.lastName) ? 1 : -1) : -1);
      }
    }
  }

  scroll(e) {
    if (this.sortedList[e]) {
      const element = document.getElementById(e);
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
