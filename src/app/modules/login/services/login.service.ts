import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public openLoginEvent$: Subject<any> = new Subject();

  constructor() { }

  get listenOpenLogin(): Observable<any> {
    return this.openLoginEvent$.asObservable();
  }

  openLogin(): void{
    this.openLoginEvent$.next();
  }
}
