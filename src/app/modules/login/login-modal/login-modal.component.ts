import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'app/shared/mail/mail.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('modal', { static: false }) public modal!: ElementRef

  userIdEmail: boolean = true;

  public formContact: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    comments: new FormControl(''),
  });

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.mailService.sendEmailWithApi().pipe(take(1)).subscribe();
  }


  public open(): void {
    this.modal.nativeElement.style.display = 'flex';
  }

  public close(): void {
    this.modal.nativeElement.style.display = 'none';
  }

  public send(): void {
    if (!this.formContact.valid) {
      return;
    }

    const name = this.formContact.controls.name.value;
    const email = this.formContact.controls.email.value;
    const phone = this.formContact.controls.phone.value;
    const comments = this.formContact.controls.comments.value;
    const message = `Telefone: ${phone} - Comentário: ${comments}`;

    this.mailService.sendEmail(name, email, message).pipe(take(1)).subscribe(res => {
      this.close();
    });
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
