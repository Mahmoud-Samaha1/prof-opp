import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddOppComponent } from './confirm-add-opp.component';

describe('ConfirmAddOppComponent', () => {
  let component: ConfirmAddOppComponent;
  let fixture: ComponentFixture<ConfirmAddOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmAddOppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
