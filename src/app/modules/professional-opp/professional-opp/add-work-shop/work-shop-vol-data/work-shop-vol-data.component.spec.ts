import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopVolDataComponent } from './work-shop-vol-data.component';

describe('WorkShopVolDataComponent', () => {
  let component: WorkShopVolDataComponent;
  let fixture: ComponentFixture<WorkShopVolDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShopVolDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopVolDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
