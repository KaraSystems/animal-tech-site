import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('modal', { static: false }) public modal!: ElementRef

  userIdEmail: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


  public open(): void {
    this.modal.nativeElement.style.display = 'flex';
  }

  public close(): void {
    this.modal.nativeElement.style.display = 'none';
  }

  forgot(forgot: string): void {
    if(forgot === 'user') {
      //Forgot user
    }

    if(forgot === 'password') {
      //Forgot password
    }

    if(forgot === 'phone') {
      //Forgot phone
    }
  }

}
