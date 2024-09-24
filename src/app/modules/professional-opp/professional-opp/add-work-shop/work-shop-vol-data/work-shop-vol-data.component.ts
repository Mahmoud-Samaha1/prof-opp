import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-shop-vol-data',
  templateUrl: './work-shop-vol-data.component.html',
  styleUrls: ['./work-shop-vol-data.component.scss']
})
export class WorkShopVolDataComponent implements OnInit {
  @Output() activeStepThree: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  selectedOption: string = 'option1';
  volDataForm!: FormGroup;
  genderList: string[] = ['ذكر', 'انثى', 'كلاهما'];
  volNameList: string[] = ['متطوع 1', 'متطوع 2', 'متطوع 3'];
  customizeOppForCustomSectorList: string[] = ['قسم 1', 'قسم 2', 'قسم 3'];


  constructor(private _formBuilder: FormBuilder) {
    this.volDataForm = this._formBuilder.group(
      {
        gender: ['', [Validators.required]],
        volName: ['', [Validators.required]],
        customizeOppForCustomSector: ['', [Validators.required]],
        numOfSeats: ['1']
      }
    );
  }
  get gender() {
    return this.volDataForm.get('gender');
  }
  get volName() {
    return this.volDataForm.get('volName');
  }
  get customizeOppForCustomSector() {
    return this.volDataForm.get('customizeOppForCustomSector');
  }
  get numOfSeats() {
    return this.volDataForm.get('numOfSeats');
  }
  ngOnInit(): void {
  }
  printForm() {
    console.log(this.volDataForm.value);
  }
  nextStep() {
    this.activeStepThree.emit(3);
    console.log('fromstep 2')
  }
  prevStep() {
    this.activeStepThree.emit(1);
    this.backToPrevStep.emit();

  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild-3');
  }
  volDataSend() {

  }
}
