import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactProfileComponent } from './page-contact-profile.component';

describe('PageContactProfileComponent', () => {
  let component: PageContactProfileComponent;
  let fixture: ComponentFixture<PageContactProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
