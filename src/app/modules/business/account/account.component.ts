import { Component } from '@angular/core';
import { LoginService } from 'app/modules/login/services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent{

  constructor(private loginService: LoginService) { }

  openLogin(): void {
    this.loginService.openLogin();
  }
}
