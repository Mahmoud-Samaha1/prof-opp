import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { OnlineSessionsService } from 'src/app/shared/services/online-sessions.service';

@Component({
  selector: 'app-work-shop-time',
  templateUrl: './work-shop-time.component.html',
  styleUrls: ['./work-shop-time.component.scss']
})
export class WorkShopTimeComponent implements OnInit {

  @Output() activeStepSix: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  timeDataForm!: FormGroup;
  totalSessionOneHours!: number;
  totalSessionTwoHours!: number;
  totalSessionThreeHours!: number;
  isSessionOneMoreThreeHours!: boolean;
  isSessionTwoMoreThreeHours!: boolean;
  isSessionThreeMoreThreeHours!: boolean;
  oppDaysNumberList: number[] = [
    1,
    2,
    3,
  ];
  amOrPmList: string[] = [
    'AM',
    'PM'
  ]
  timeList: string[] = [
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
  ];
  constructor(private _formBuilder: FormBuilder,
    private _OnlineSessionsService: OnlineSessionsService
  ) {
    this.timeDataForm = this._formBuilder.group(
      {
        oppDaysNumber: ['', [Validators.required]],
        sessions: this._formBuilder.array(
          [this._formBuilder.group(
            {
              sessionOne: this._formBuilder.group({
                day: ['', [Validators.required]],
                timeFrom: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                ),
                timeTo: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                )
              }),
              sessionTwo: this._formBuilder.group({
                day: ['', [Validators.required]],
                timeFrom: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                ),
                timeTo: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                )
              }),
              sessionThree: this._formBuilder.group({
                day: ['', [Validators.required]],
                timeFrom: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                ),
                timeTo: this._formBuilder.group(
                  {
                    AmOrPm: ['', [Validators.required]],
                    time: ['', [Validators.required]],
                  }
                )
              }),
            }
          )
          ]
        ),

      }


    );
  }

  // Getters

  get oppDaysNumber() {
    return this.timeDataForm.get('oppDaysNumber');
  }
  get sessions() {
    return this.timeDataForm.get('sessions') as FormArray;
  }
  get sessionOne(): FormGroup {
    return this.sessions.at(0).get('sessionOne') as FormGroup;
  }

  get sessionTwo(): FormGroup {
    return this.sessions.at(0).get('sessionTwo') as FormGroup;
  }

  get sessionThree(): FormGroup {
    return this.sessions.at(0).get('sessionThree') as FormGroup;
  }

  // Getters for the day controls

  get sessionOneDay(): any {
    return this.sessionOne.get('day');
  }

  get sessionTwoDay(): any {
    return this.sessionTwo.get('day');
  }

  get sessionThreeDay(): any {
    return this.sessionThree.get('day');
  }
  //===========================================//
  // Getters of sessionOne

  // Getters for timeFrom controls in sessionOne

  get sessionOneTimeFrom(): FormGroup {
    return this.sessionOne.get('timeFrom') as FormGroup;
  }

  get sessionOneTimeFromAmOrPm(): any {
    return this.sessionOneTimeFrom.get('AmOrPm');
  }

  get sessionOneTimeFromTime(): any {
    return this.sessionOneTimeFrom.get('time');
  }

  // Getters for timeTo controls in sessionOne

  get sessionOneTimeTo(): FormGroup {
    return this.sessionOne.get('timeTo') as FormGroup;
  }

  get sessionOneTimeToAmOrPm(): any {
    return this.sessionOneTimeTo.get('AmOrPm');
  }

  get sessionOneTimeToTime(): any {
    return this.sessionOneTimeTo.get('time');
  }
  //===========================================//
  // Getters of sessionTwo

  // Getters for timeFrom controls in sessionTwo

  get sessionTwoTimeFrom(): FormGroup {
    return this.sessionTwo.get('timeFrom') as FormGroup;
  }

  get sessionTwoTimeFromAmOrPm(): any {
    return this.sessionTwoTimeFrom.get('AmOrPm');
  }

  get sessionTwoTimeFromTime(): any {
    return this.sessionTwoTimeFrom.get('time');
  }

  // Getters for timeTo controls in sessionTwo

  get sessionTwoTimeTo(): FormGroup {
    return this.sessionTwo.get('timeTo') as FormGroup;
  }

  get sessionTwoTimeToAmOrPm(): any {
    return this.sessionTwoTimeTo.get('AmOrPm');
  }

  get sessionTwoTimeToTime(): any {
    return this.sessionTwoTimeTo.get('time');
  }
  //===========================================//
  // Getters of sessionThree

  // Getters for timeFrom controls in sessionThree

  get sessionThreeTimeFrom(): FormGroup {
    return this.sessionThree.get('timeFrom') as FormGroup;
  }

  get sessionThreeTimeFromAmOrPm(): any {
    return this.sessionThreeTimeFrom.get('AmOrPm');
  }

  get sessionThreeTimeFromTime(): any {
    return this.sessionThreeTimeFrom.get('time');
  }

  // Getters for timeTo controls in sessionThree

  get sessionThreeTimeTo(): FormGroup {
    return this.sessionThree.get('timeTo') as FormGroup;
  }

  get sessionThreeTimeToAmOrPm(): any {
    return this.sessionThreeTimeTo.get('AmOrPm');
  }

  get sessionThreeTimeToTime(): any {
    return this.sessionThreeTimeTo.get('time');
  }

  ngOnInit(): void {
  }
  sendDataToParticipation() {
    this._OnlineSessionsService.sendSessionsNumber(this.oppDaysNumber?.value)
    this._OnlineSessionsService.sendSessionOne(this.sessionOne.value)
    this._OnlineSessionsService.sendSessionTwo(this.sessionTwo.value)
    this._OnlineSessionsService.sendSessionThree(this.sessionThree.value)
    console.log(this.sessionOne.value)
    console.log(this.sessionTwo.value)
    console.log(this.sessionThree.value)
  }
  sessionOneHours() {

    let sessionOneTimeFromTime = Number(this.sessionOneTimeFromTime.value.replace(':', '.').replace('30', '50'))
    let sessionOneTimeToTime = Number(this.sessionOneTimeToTime.value.replace(':', '.').replace('30', '50'));
    let hours: number = 0;

    if (this.sessionOneTimeFromAmOrPm.value == this.amOrPmList[1] &&
      this.sessionOneTimeToAmOrPm.value == this.amOrPmList[0]
    ) {
      sessionOneTimeFromTime += 12;

      hours = Number((sessionOneTimeToTime + sessionOneTimeFromTime).toFixed(2));
      console.log('sessionOneTimeFromTime = ' + sessionOneTimeFromTime);
      console.log('sessionOneTimeToTime = ' + sessionOneTimeToTime);
      this.totalSessionOneHours = hours - 2;
      console.log(hours);
      console.log(this.totalSessionOneHours);

    } else if (this.sessionOneTimeFromAmOrPm.value == this.amOrPmList[0] &&
      this.sessionOneTimeToAmOrPm.value == this.amOrPmList[1]) {
      sessionOneTimeToTime += 12;
      hours = Number((sessionOneTimeToTime - sessionOneTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionOneHours = hours;
      console.log(this.totalSessionOneHours + 'from else if');
    } else {
      hours = +Number((sessionOneTimeToTime - sessionOneTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionOneHours = hours;
      console.log(this.totalSessionOneHours + 'from else');
    }
    // this.totalSessionOneHours = hours;
    if (this.totalSessionOneHours > 3) {
      this.isSessionOneMoreThreeHours = true
    } else {
      this.isSessionOneMoreThreeHours = false
    }
  }
  sessionTwoHours() {

    let sessionTwoTimeFromTime = Number(this.sessionTwoTimeFromTime.value.replace(':', '.').replace('30', '50'))
    let sessionTwoTimeToTime = Number(this.sessionTwoTimeToTime.value.replace(':', '.').replace('30', '50'));
    let hours: number = 0;

    if (this.sessionTwoTimeFromAmOrPm.value == this.amOrPmList[1] &&
      this.sessionTwoTimeToAmOrPm.value == this.amOrPmList[0]
    ) {
      sessionTwoTimeFromTime += 12;
      hours = Number((sessionTwoTimeToTime + sessionTwoTimeFromTime).toFixed(2));
      console.log('sessionTwoTimeFromTime = ' + sessionTwoTimeFromTime);
      console.log('sessionTwoTimeToTime = ' + sessionTwoTimeToTime);
      this.totalSessionTwoHours = hours - 2;
      console.log(hours);
      console.log(this.totalSessionTwoHours);

    } else if (this.sessionTwoTimeFromAmOrPm.value == this.amOrPmList[0] &&
      this.sessionTwoTimeToAmOrPm.value == this.amOrPmList[1]) {
      sessionTwoTimeToTime += 12;
      hours = Number((sessionTwoTimeToTime - sessionTwoTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionTwoHours = hours;
      console.log(this.totalSessionTwoHours + 'from else if');
    } else {
      hours = +Number((sessionTwoTimeToTime - sessionTwoTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionTwoHours = hours;
      console.log(this.totalSessionTwoHours + 'from else');
    }
    // this.totalSessionTwoHours = hours;
    if (this.totalSessionTwoHours > 3) {
      this.isSessionTwoMoreThreeHours = true
    } else {
      this.isSessionTwoMoreThreeHours = false
    }
  }
  sessionThreeHours() {

    let sessionThreeTimeFromTime = Number(this.sessionThreeTimeFromTime.value.replace(':', '.').replace('30', '50'))
    let sessionThreeTimeToTime = Number(this.sessionThreeTimeToTime.value.replace(':', '.').replace('30', '50'));
    let hours: number = 0;

    if (this.sessionThreeTimeFromAmOrPm.value == this.amOrPmList[1] &&
      this.sessionThreeTimeToAmOrPm.value == this.amOrPmList[0]
    ) {
      sessionThreeTimeFromTime += 12;
      hours = Number((sessionThreeTimeToTime + sessionThreeTimeFromTime).toFixed(2));
      console.log('sessionThreeTimeFromTime = ' + sessionThreeTimeFromTime);
      console.log('sessionThreeTimeToTime = ' + sessionThreeTimeToTime);
      this.totalSessionThreeHours = hours - 2;
      console.log(hours);
      console.log(this.totalSessionThreeHours);

    } else if (this.sessionThreeTimeFromAmOrPm.value == this.amOrPmList[0] &&
      this.sessionThreeTimeToAmOrPm.value == this.amOrPmList[1]) {
      sessionThreeTimeToTime += 12;
      hours = Number((sessionThreeTimeToTime - sessionThreeTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionThreeHours = hours;
      console.log(this.totalSessionThreeHours + 'from else if');
    } else {
      hours = +Number((sessionThreeTimeToTime - sessionThreeTimeFromTime).toFixed(2));
      console.log(hours);
      this.totalSessionThreeHours = hours;
      console.log(this.totalSessionThreeHours + 'from else');
    }
    // this.totalSessionThreeHours = hours;
    if (this.totalSessionThreeHours > 3) {
      this.isSessionThreeMoreThreeHours = true
    } else {
      this.isSessionThreeMoreThreeHours = false
    }
  }

  printForm() {
    console.log(this.timeDataForm.value);
  }
  nextStep() {
    this.activeStepSix.emit(6);
    console.log('fromChild-5')
  }
  prevStep() {
    this.activeStepSix.emit(4);
    this.backToPrevStep.emit();

  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild-5');
  }
  timeDataSend() {

  }


}
