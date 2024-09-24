import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, AfterViewInit {
  isChoosen: boolean = false;
  @ViewChild('oppType1') oppType1!: ElementRef;
  @ViewChild('oppType2') oppType2!: ElementRef;
  @ViewChild('oppType3') oppType3!: ElementRef;
  @ViewChild('nextBtn') nextBtn!: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.oppType1)
  }

  ngOnInit(): void {
  }
  chooseOpp1() {
    this.oppType1.nativeElement.classList.toggle('choosen');
    this.oppType2.nativeElement.classList.remove('choosen');
    this.oppType3.nativeElement.classList.remove('choosen');
    this.nextBtn.nativeElement.classList.remove('disabled');

  }
  chooseOpp2() {
    this.oppType2.nativeElement.classList.toggle('choosen');
    this.oppType1.nativeElement.classList.remove('choosen');
    this.oppType3.nativeElement.classList.remove('choosen');
    this.nextBtn.nativeElement.classList.remove('disabled');
  }
  chooseOpp3() {
    this.oppType3.nativeElement.classList.toggle('choosen');
    this.oppType2.nativeElement.classList.remove('choosen');
    this.oppType1.nativeElement.classList.remove('choosen');
    this.nextBtn.nativeElement.classList.remove('disabled');

  }

}
