import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeComponent } from './resume/resume.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    BusinessComponent,
    ResumeComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    BusinessRoutingModule,
    TranslateModule
  ]
})
export class BusinessModule { }
