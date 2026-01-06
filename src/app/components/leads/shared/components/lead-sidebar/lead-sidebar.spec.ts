import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSidebar } from './lead-sidebar';

describe('LeadSidebar', () => {
  let component: LeadSidebar;
  let fixture: ComponentFixture<LeadSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
