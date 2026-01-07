import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerms } from './add-terms';

describe('AddTerms', () => {
  let component: AddTerms;
  let fixture: ComponentFixture<AddTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTerms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
