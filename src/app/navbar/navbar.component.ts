import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'app/modules/login/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('selectedLang', { static: false })  selectedLang!: ElementRef<HTMLElement>;
  curretLanguage: string = '';

  openMenu: boolean = false;
  mobile: boolean = false;

  constructor (
    public translate: TranslateService,
    public loginService: LoginService
  ) {
    translate.addLangs(['en', 'pt']);
  }

  ngOnInit(): void {
    this.curretLanguage = this.translate.defaultLang;
    if (window.screen.availWidth < 800) {
        this.mobile = true;
    }
  }

  openLogin(): void {
    this.openMenu = false;
    this.loginService.openLogin();
  }

  switchLang(lang: string): void {
    this.curretLanguage = lang;
    this.translate.use(lang);
  }

  openLenguageOptions(value: boolean): void {
    if (value) {
      this.selectedLang.nativeElement.style.display = 'flex';
      return;
    }
    this.selectedLang.nativeElement.style.display = 'none';
  }
}
