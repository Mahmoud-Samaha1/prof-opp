import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-work-shop-survay-questions',
  templateUrl: './work-shop-survay-questions.component.html',
  styleUrls: ['./work-shop-survay-questions.component.scss']
})
export class WorkShopSurvayQuestionsComponent implements OnInit {
  @Output() activeStepFive: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  survayQuestionsDataForm!: FormGroup;
  quistionsTypeList: string[] = [
    'الاختيار الواحد',
    'الاختيار المتعدد',
    'نصى',
    'إضافة مرفقات',
  ];
  constructor(private _formBuilder: FormBuilder) {
    this.survayQuestionsDataForm = this._formBuilder.group(
      {
        quistions: this._formBuilder.array([], [Validators.required])
      }
    )
  }
  get quistions() {
    return this.survayQuestionsDataForm.get('quistions') as FormArray;
  }

  get answerType() {
    return this.quistions?.at(0).get('answerType');
  }
  answerDetails(i: number): FormArray {
    return this.quistions.at(i).
      get("answerDetails") as FormArray;
  }

  addQuistion() {
    this.quistions.push(this._formBuilder.group({
      answerType: ['', [Validators.required]],
      TheQuistion: ['', [Validators.required]],
      answerDetails: this._formBuilder.array([])
    }));
  }
  addMultiAnswers(index: any) {
    if
      (this.answerType?.value == this.quistionsTypeList[0]
      || this.answerType?.value == this.quistionsTypeList[1]) {
      this.answerDetails(index).push(this._formBuilder.group({
        answerOne: ['', [Validators.required]],
        answerTwo: ['', [Validators.required]],
        answerThree: ['', [Validators.required]],
        answerFour: ['', [Validators.required]],
      }))
    } else {
      this.answerDetails(index).clear();
    }

  }
  removeQuestion(index: number): void {
    this.quistions.removeAt(index);
  }
  resetForm() {
    this.survayQuestionsDataForm.reset();
    this.quistions.clear();
  }
  ngOnInit(): void {
  }
  QuistionSubmit() {

  }
  printForm() {
    console.log(this.survayQuestionsDataForm.value);
  }
  nextStep() {
    this.activeStepFive.emit(5);
    console.log('fromChild-5')
  }
  prevStep() {
    this.activeStepFive.emit(3);
    this.backToPrevStep.emit();

  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild-5');
  }
  survayQuestionsDataSend() {

  }


}
