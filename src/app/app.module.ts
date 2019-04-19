import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageContactsListComponent } from './components/page-contacts-list/page-contacts-list.component';
import { PageContactProfileComponent } from './components/page-contact-profile/page-contact-profile.component';
import { ContactComponent } from './components/page-contacts-list/contact/contact.component';
import { SearchComponent } from './components/page-contacts-list/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    PageContactsListComponent,
    PageContactProfileComponent,
    ContactComponent,
    SearchPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
