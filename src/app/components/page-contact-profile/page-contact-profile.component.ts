import { Component, OnInit } from '@angular/core';
import { ContactsService } from './../../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contact-profile',
  templateUrl: './page-contact-profile.component.html',
  styleUrls: ['./page-contact-profile.component.scss']
})
export class PageContactProfileComponent implements OnInit {

  image;

  constructor(
    private contactsSevice: ContactsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  uploadPhoto(e) {
    const FR = new FileReader();
    FR.readAsDataURL(e.target.files[0]);
    FR.onload = () => {
      this.image = FR.result;
    };
  }

  addContact(form) {
    const newContact = {
      email: form.controls.email.value,
      firstName: form.controls.firstName.value,
      lastName: form.controls.lastName.value,
      mobileNumber: form.controls.mobileNumber.value,
      image: this.image ? this.image : ''
    };
    this.contactsSevice.recent.unshift(newContact);
    this.contactsSevice.all.push(this.contactsSevice.recent.pop());
    this.router.navigate(['/contacts']);
  }
}
