import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/modules/login/services/login.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    this.loginService.openLogin();
  }

}
