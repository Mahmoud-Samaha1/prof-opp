import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnlineSessionsService } from 'src/app/shared/services/online-sessions.service';

@Component({
  selector: 'app-work-shop-participation',
  templateUrl: './work-shop-participation.component.html',
  styleUrls: ['./work-shop-participation.component.scss']
})
export class WorkShopParticipationComponent implements OnInit, AfterContentInit {

  @Output() activeStepSix: EventEmitter<number> = new EventEmitter<number>();
  @Output() removeClasses: EventEmitter<void> = new EventEmitter<void>();
  @Output() backToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  participationDataForm!: FormGroup;
  participatoionTypeList: string[] = ['حضورى', 'عن بعد'];
  areaList: string[] = [
    'منطقة 1',
    'منطقة 2',
    'منطقة 3',
    'منطقة 4',
    'منطقة 5',
    'منطقة 6'
  ];
  cityList: string[] = [
    'مدينة 1',
    'مدينة 2',
    'مدينة 3',
    'مدينة 4',
    'مدينة 5',
    'مدينة 6'
  ];
  sessionNum!: string;
  sessionOne!: any;
  sessionTwo!: any;
  sessionThree!: any;


  constructor(private _formBuilder: FormBuilder,
    private _OnlineSessionsService: OnlineSessionsService

  ) {
    this.participationDataForm = this._formBuilder.group(
      {
        participatoionType: ['', [Validators.required]],
        offline: this._formBuilder.group(
          {
            area: ['', [Validators.required]],
            city: ['', [Validators.required]],
            locationUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?')]],
          }
        ),
        online: this._formBuilder.group({
          meetingOneUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?')]],
          meetingTwoUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?')]],
          meetingThreeUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?')]],
        })
      }
    );
    // this.recieveSessionNum();

  }

  get participatoionType() {
    return this.participationDataForm.get('participatoionType');
  }
  get offline(): FormGroup {
    return this.participationDataForm.get('offline') as FormGroup;
  }
  get area() {
    return this.offline.get('area');
  }
  get city() {
    return this.offline.get('city');
  }
  get locationUrl() {
    return this.offline.get('locationUrl');
  }
  get online(): FormGroup {
    return this.participationDataForm.get('online') as FormGroup;
  }
  get meetingOneUrl() {
    return this.online.get('meetingOneUrl');
  }
  get meetingTwoUrl() {
    return this.online.get('meetingTwoUrl');
  }
  get meetingThreeUrl() {
    return this.online.get('meetingThreeUrl');
  }
  ngAfterContentInit(): void {

    ;
  }
  ngOnInit(): void {
    this.recieveFromTime();
  }
  clearOfflineValue() {
    if (this.participatoionType?.value == this.participatoionTypeList[1] ||
      this.participatoionType?.value == ''
    ) {
      this.offline.reset()
    }
  }
  recieveFromTime() {
    this._OnlineSessionsService.sessionsNumber.subscribe(num => { this.sessionNum = num });
    this._OnlineSessionsService.sessionOneObservable.subscribe(session => this.sessionOne = session);
    this._OnlineSessionsService.sessionTwoObservable.subscribe(session => this.sessionTwo = session);
    this._OnlineSessionsService.sessionThreeObservable.subscribe(session => this.sessionThree = session);
    console.log(this.sessionNum + ' hello');
    console.log(this.sessionOne?.day + ' hello');

  }
  printForm() {
    console.log(this.participationDataForm.value);
    // this.recieveSessionNum()
  }
  nextStep() {
    this.activeStepSix.emit(6);
    console.log('fromChild-5')
  }
  prevStep() {
    this.activeStepSix.emit(5);
    this.backToPrevStep.emit();

  }
  removeClassesinParent() {
    this.removeClasses.emit();
    console.log('removed-fromChild-6');
  }
  participationDataSend() {

  }

}
