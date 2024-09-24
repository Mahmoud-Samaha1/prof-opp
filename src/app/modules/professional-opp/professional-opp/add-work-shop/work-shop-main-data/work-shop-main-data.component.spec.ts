import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopMainDataComponent } from './work-shop-main-data.component';

describe('WorkShopMainDataComponent', () => {
  let component: WorkShopMainDataComponent;
  let fixture: ComponentFixture<WorkShopMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkShopMainDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
