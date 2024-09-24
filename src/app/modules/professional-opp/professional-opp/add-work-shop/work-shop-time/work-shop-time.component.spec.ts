import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopTimeComponent } from './work-shop-time.component';

describe('WorkShopTimeComponent', () => {
  let component: WorkShopTimeComponent;
  let fixture: ComponentFixture<WorkShopTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShopTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
