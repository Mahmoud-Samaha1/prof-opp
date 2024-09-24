import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineSessionsService {
  private sessionsNumbers = new Subject<string>();
  private sessionOne = new Subject<any>();
  private sessionTwo = new Subject<any>();
  private sessionThree = new Subject<any>();

  constructor() { }

  // Observable that other components can subscribe to
  sessionsNumber = this.sessionsNumbers.asObservable();
  sessionOneObservable = this.sessionOne.asObservable();
  sessionTwoObservable = this.sessionTwo.asObservable();
  sessionThreeObservable = this.sessionThree.asObservable();

  // Method to send Data
  sendSessionsNumber(number: string) {
    this.sessionsNumbers.next(number);
  }
  sendSessionOne(sessionOne: any) {
    this.sessionOne.next(sessionOne);
  }
  sendSessionTwo(sessionTwo: any) {
    this.sessionTwo.next(sessionTwo);
  }
  sendSessionThree(sessionThree: any) {
    this.sessionThree.next(sessionThree);
  }


  // Method to clear Data
  clearMessage() {
    this.sessionsNumbers.next('');
  }
}
