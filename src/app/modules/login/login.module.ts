import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LoginComponent } from './login.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoginService } from './services/login.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginModalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ LoginComponent ],
  providers: [ LoginService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
