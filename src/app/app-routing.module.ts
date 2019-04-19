import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactProfileComponent } from './components/page-contact-profile/page-contact-profile.component';
import { PageContactsListComponent } from './components/page-contacts-list/page-contacts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: PageContactsListComponent },
  { path: 'contacts/add', component: PageContactProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
