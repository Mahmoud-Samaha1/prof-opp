import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShopBeneficiaryDataComponent } from './work-shop-beneficiary-data.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WorkShopBeneficiaryDataComponent', () => {
  let component: WorkShopBeneficiaryDataComponent;
  let fixture: ComponentFixture<WorkShopBeneficiaryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkShopBeneficiaryDataComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShopBeneficiaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
