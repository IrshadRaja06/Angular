// mode.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private isLoginModeSubject = new BehaviorSubject<boolean>(true);
  isLoginMode$ = this.isLoginModeSubject.asObservable();

  toggleMode() {
    this.isLoginModeSubject.next(!this.isLoginModeSubject.value);
  }
}
