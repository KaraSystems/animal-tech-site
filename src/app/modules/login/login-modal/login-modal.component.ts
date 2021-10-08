import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('modal', { static: false }) public modal!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }


  public open(): void {
    this.modal.nativeElement.style.display = 'flex';
  }

  public close(): void {
    this.modal.nativeElement.style.display = 'none';
  }

}
