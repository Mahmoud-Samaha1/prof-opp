import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkShopComponent } from './add-work-shop.component';

describe('AddWorkShopComponent', () => {
  let component: AddWorkShopComponent;
  let fixture: ComponentFixture<AddWorkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
