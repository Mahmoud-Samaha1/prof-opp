import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-shop-vol-data',
  templateUrl: './work-shop-vol-data.component.html',
  styleUrls: ['./work-shop-vol-data.component.scss']
})
export class WorkShopVolDataComponent implements OnInit {
  @Output() activeStepThree: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();


  volDataForm!: FormGroup;

  genderList: string[] = ['ذكر', 'انثى', 'كلاهما'];
  volNameList: string[] = ['متطوع 1', 'متطوع 2', 'متطوع 3'];
  customizeOppForCustomSectorList: string[] = ['قسم 1', 'قسم 2', 'قسم 3'];


  constructor(private _formBuilder: FormBuilder) {
    this.volDataForm = this._formBuilder.group({
      volDataType: ['noSelection'],
      volDataArray: this._formBuilder.array([])
    });
    this.addUnspecifiedForm()
  }

  get volDataArray(): FormArray {
    return this.volDataForm?.get('volDataArray') as FormArray;
  }
  get volDataType() {
    return this.volDataForm?.get('volDataType');
  }


  ngOnInit(): void {
  }
  addUnspecifiedForm() {
    this.volDataArray.clear()
    this.volDataType?.reset();
    this.volDataType?.setValue('noSelection')
    this.volDataArray.push(this._formBuilder.group({
      numOfSeats: ['1'],
      gender: ['', [Validators.required]],
    }))
  }
  addInvitingVolforOpp() {
    this.volDataArray.clear()
    this.volDataType?.reset();
    this.volDataType?.setValue('volInvitation')
    this.volDataArray.push(this._formBuilder.group({
      numOfSeats: ['1'],
      volName: ['', [Validators.required]],
    }))
  }
  addCustomizeOppToDepartmentForm() {

    this.volDataArray.clear()
    this.volDataType?.reset();
    this.volDataType?.setValue('customizeOpp')
    this.volDataArray.push(this._formBuilder.group({
      numOfSeats: ['1'],
      gender: ['', [Validators.required]],
      customizeOppForCustomSector: ['', [Validators.required]],
    }))
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
