import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('selectedLang', { static: false })  selectedLang!: ElementRef<HTMLElement>;
  curretLanguage: string = '';

  constructor (public translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
  }

  ngOnInit(): void {
    this.curretLanguage = this.translate.defaultLang;
  }

  switchLang(lang: string): void {
    this.curretLanguage = lang;
    this.translate.use(lang);
  }

  openLenguageOptions(): void {
    if (this.selectedLang.nativeElement.style.display == 'flex') {
      this.selectedLang.nativeElement.style.display = 'none';
      return;
    }
    this.selectedLang.nativeElement.style.display = 'flex';
  }
}
