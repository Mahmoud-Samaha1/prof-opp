import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopSurvayQuestionsComponent } from './work-shop-survay-questions.component';

describe('WorkShopSurvayQuestionsComponent', () => {
  let component: WorkShopSurvayQuestionsComponent;
  let fixture: ComponentFixture<WorkShopSurvayQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShopSurvayQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopSurvayQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
