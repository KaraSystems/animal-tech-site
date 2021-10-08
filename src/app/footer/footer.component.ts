import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/modules/login/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  openLogin(): void {
    this.loginService.openLogin();
  }

}
