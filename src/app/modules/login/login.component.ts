import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginModal', { static: false }) public loginModal!: LoginModalComponent

  private subs: Subject<any> = new Subject();

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.listenOpenLogin
      .pipe(takeUntil(this.subs))
      .subscribe(() => {
        this.loginModal.open();
    });
  }

  public ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
  }
}
