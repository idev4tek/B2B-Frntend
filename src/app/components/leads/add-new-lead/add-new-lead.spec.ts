import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLead } from './add-new-lead';

describe('AddNewLead', () => {
  let component: AddNewLead;
  let fixture: ComponentFixture<AddNewLead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewLead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewLead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
