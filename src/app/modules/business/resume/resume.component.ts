import { Component } from '@angular/core';
import { LoginService } from 'app/modules/login/services/login.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  constructor(private loginService: LoginService) { }

  openLogin(): void {
    this.loginService.openLogin();
  }
}
