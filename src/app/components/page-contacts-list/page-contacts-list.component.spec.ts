import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactsListComponent } from './page-contacts-list.component';

describe('PageContactsListComponent', () => {
  let component: PageContactsListComponent;
  let fixture: ComponentFixture<PageContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
