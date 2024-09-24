import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-work-shop-main-data',
  templateUrl: './work-shop-main-data.component.html',
  styleUrls: ['./work-shop-main-data.component.scss']
})
export class WorkShopMainDataComponent implements OnInit {
  wsMainDataForm!: FormGroup;
  oppFieldsList: string[] = ['فني', 'مالي', 'قانوني', 'بيئي', 'تدريبي'];
  eventIdList: string[] = [
    'فعاليات 1',
    'فعاليات 2',
    'فعاليات 3',
    'فعاليات 4',
    'فعاليات 5',
  ];
  initiativeIdList: string[] = [
    'مبادرات 1',
    'مبادرات 2',
    'مبادرات 3',
    'مبادرات 4',
    'مبادرات 5',
  ];
  @Output() activeStepTwo: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _formBuilder: FormBuilder,
    private _crudService: CrudService,
    private _location: Location) {
    this.wsMainDataForm = this._formBuilder.group(
      {

        oppName: ['', [Validators.required]],
        oppField: ['', [Validators.required]],
        monthlyEconomicValue: ['', [Validators.required]],
        isEnglishRequired: ['', [Validators.required]],
        eventId: ['', [Validators.required]],
        initiativeId: ['', [Validators.required]],
        opportunityResult: ['', [Validators.required]],
      }
    );

  }
  get oppName() {
    return this.wsMainDataForm.get('oppName');
  }
  get oppField() {
    return this.wsMainDataForm.get('oppField');
  }
  get monthlyEconomicValue() {
    return this.wsMainDataForm.get('monthlyEconomicValue');
  }
  get isEnglishRequired() {
    return this.wsMainDataForm.get('isEnglishRequired');
  }
  get eventId() {
    return this.wsMainDataForm.get('eventId');
  }
  get initiativeId() {
    return this.wsMainDataForm.get('initiativeId');
  }
  get opportunityResult() {
    return this.wsMainDataForm.get('opportunityResult');
  }
  ngOnInit(): void {

  }
  wsMainDataSend() {

  }
  printForm() {
    console.log(this.wsMainDataForm.value);
  }
  nextStep() {
    this.activeStepTwo.emit(2);
    console.log('fromChild2')
  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild');
  }
  prevStep() {
    this._location.back();

    this.activeStepTwo.emit(1);
  }
  // [disabled] = "wsMainDataForm.invalid"
}
