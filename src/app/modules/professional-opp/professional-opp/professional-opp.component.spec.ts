import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalOppComponent } from './professional-opp.component';

describe('ProfessionalOppComponent', () => {
  let component: ProfessionalOppComponent;
  let fixture: ComponentFixture<ProfessionalOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalOppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
