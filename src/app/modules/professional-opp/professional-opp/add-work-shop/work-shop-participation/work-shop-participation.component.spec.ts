import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopParticipationComponent } from './work-shop-participation.component';

describe('WorkShopParticipationComponent', () => {
  let component: WorkShopParticipationComponent;
  let fixture: ComponentFixture<WorkShopParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShopParticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
