import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-work-shop',
  templateUrl: './add-work-shop.component.html',
  styleUrls: ['./add-work-shop.component.scss']
})
export class AddWorkShopComponent implements OnInit, AfterViewInit {
  activeStep: number = 0;
  // steps
  @ViewChild('stepOne') stepOne!: ElementRef;
  @ViewChild('stepTwo') stepTwo!: ElementRef;
  @ViewChild('stepThree') stepThree!: ElementRef;
  @ViewChild('stepFour') stepFour!: ElementRef;
  @ViewChild('stepFive') stepFive!: ElementRef;
  @ViewChild('stepSix') stepSix!: ElementRef;
  // header steps
  @ViewChild('headerStepOne') headerStepOne!: ElementRef;
  @ViewChild('headerStepTwo') headerStepTwo!: ElementRef;
  @ViewChild('headerStepThree') headerStepThree!: ElementRef;
  @ViewChild('headerStepFour') headerStepFour!: ElementRef;
  @ViewChild('headerStepFive') headerStepFive!: ElementRef;
  @ViewChild('headerStepSix') headerStepSix!: ElementRef;
  constructor(private _renderer: Renderer2) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }
  putActiveClass(event: any) {
    this.activeStep = event;
  }
  removeClasses() {
    console.log(this.activeStep + 'inside removeClasses');
    switch (this.activeStep) {
      case 2:
        this._renderer.removeClass(this.stepOne.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepTwo.nativeElement, 'next-step');
        this._renderer.addClass(this.stepTwo.nativeElement, 'active-step');
        this._renderer.addClass(this.stepOne.nativeElement, 'prev-step');
        this._renderer.addClass(this.headerStepOne.nativeElement, 'prev-header-step');
        this._renderer.addClass(this.headerStepTwo.nativeElement, 'active-header-step');
        console.log('removed inside switch 1')
        break;
      case 3:
        this._renderer.removeClass(this.stepTwo.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepThree.nativeElement, 'next-step');
        this._renderer.addClass(this.stepThree.nativeElement, 'active-step');
        this._renderer.addClass(this.stepTwo.nativeElement, 'prev-step');
        this._renderer.addClass(this.headerStepTwo.nativeElement, 'prev-header-step');
        this._renderer.addClass(this.headerStepThree.nativeElement, 'active-header-step');
        console.log('removed inside switch 3')
        break;
      case 4:
        this._renderer.removeClass(this.stepThree.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepFour.nativeElement, 'next-step');
        this._renderer.addClass(this.stepFour.nativeElement, 'active-step');
        this._renderer.addClass(this.stepThree.nativeElement, 'prev-step');
        this._renderer.addClass(this.headerStepThree.nativeElement, 'prev-header-step');
        this._renderer.addClass(this.headerStepFour.nativeElement, 'active-header-step');
        console.log('removed inside switch 4')
        break;
      case 5:
        this._renderer.removeClass(this.stepFour.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepFive.nativeElement, 'next-step');
        this._renderer.addClass(this.stepFive.nativeElement, 'active-step');
        this._renderer.addClass(this.stepFour.nativeElement, 'prev-step');
        this._renderer.addClass(this.headerStepFour.nativeElement, 'prev-header-step');
        this._renderer.addClass(this.headerStepFive.nativeElement, 'active-header-step');
        console.log('removed inside switch 5')
        break;
      case 6:
        this._renderer.removeClass(this.stepFive.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepSix.nativeElement, 'next-step');
        this._renderer.addClass(this.stepSix.nativeElement, 'active-step');
        this._renderer.addClass(this.stepFive.nativeElement, 'prev-step');
        this._renderer.addClass(this.headerStepFive.nativeElement, 'prev-header-step');
        this._renderer.addClass(this.headerStepSix.nativeElement, 'active-header-step');
        console.log('removed inside switch 6')
        break;

      default:

    }

  }
  goBack() {
    // this.activeStep -= this.activeStep;
    console.log(this.activeStep);
    switch (this.activeStep) {
      case 1:
        this._renderer.addClass(this.stepOne.nativeElement, 'active-step');
        this._renderer.addClass(this.stepTwo.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepTwo.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepOne.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepOne.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepTwo.nativeElement, 'active-header-step');
        console.log('removed')
        break;
      case 2:
        this._renderer.addClass(this.stepTwo.nativeElement, 'active-step');
        this._renderer.addClass(this.stepThree.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepThree.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepTwo.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepTwo.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepThree.nativeElement, 'active-header-step');
        console.log('removed')
        break;

      case 3:
        this._renderer.addClass(this.stepThree.nativeElement, 'active-step');
        this._renderer.addClass(this.stepFour.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepFour.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepThree.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepThree.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepFour.nativeElement, 'active-header-step');
        console.log('removed - 3')
        break;
      case 4:
        this._renderer.addClass(this.stepFour.nativeElement, 'active-step');
        this._renderer.addClass(this.stepFive.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepFive.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepFour.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepFour.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepFive.nativeElement, 'active-header-step');
        console.log('removed inside switch 4')
        break;
      case 5:
        this._renderer.addClass(this.stepFour.nativeElement, 'active-step');
        this._renderer.addClass(this.stepFive.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepFive.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepFour.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepFour.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepFive.nativeElement, 'active-header-step');
        console.log('removed inside switch 5')
        break;
      case 6:
        this._renderer.addClass(this.stepFive.nativeElement, 'active-step');
        this._renderer.addClass(this.stepSix.nativeElement, 'next-step');
        this._renderer.removeClass(this.stepSix.nativeElement, 'active-step');
        this._renderer.removeClass(this.stepFive.nativeElement, 'prev-step');
        this._renderer.removeClass(this.headerStepFive.nativeElement, 'prev-header-step');
        this._renderer.removeClass(this.headerStepSix.nativeElement, 'active-header-step');
        console.log('removed inside switch 6')
        break;

      default:

    }
  }
}
