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
      this.prepareContactList();
    }
  }

  prepareContactList() {
    this.all.forEach(contact => {
      if (contact.firstName) {
        contact.firstName = contact.firstName.charAt(0).toUpperCase() + contact.firstName.slice(1);
        if (!this.sortedList[contact.firstName[0]]) {
          this.sortedList[contact.firstName[0]] = [contact];
        } else {
          this.sortedList[contact.firstName[0]].push(contact);
        }
      }
      contact.lastName = contact.lastName ? contact.lastName.charAt(0).toUpperCase() + contact.lastName.slice(1) : contact.lastName;
    });
  }

  scroll(e) {
    if (this.sortedList[e]) {
      const element = document.getElementById(e);
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  searchContacts(searchString) {
    this.searchString = searchString.toString();
  }

}
