import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MailService } from 'app/shared/mail/mail.service';
import { of } from 'rxjs';

import { LoginModalComponent } from './login-modal.component';

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;
  let mailServiceStub: jasmine.SpyObj<MailService>;

  beforeEach(async () => {
    mailServiceStub = jasmine.createSpyObj('AuthService', [
      'sendEmailWithApi'
    ]);
    mailServiceStub.sendEmailWithApi.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [ LoginModalComponent ],
      imports: [ TranslateModule.forRoot()],
      providers: [
        TranslateService,
        {
          provide: MailService,
          useValue: mailServiceStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
