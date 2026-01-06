import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { comma } from 'postcss/lib/list';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  languages: Language[] = [
    { code: 'en', name: 'English (US)', flag: 'public/flags/us.svg' },
    { code: 'ur', name: 'Urdu', flag: 'public/flags/pk.svg' },
    { code: 'ar', name: 'Arabic', flag: 'public/flags/sa.svg' },
  ];

  selectedLanguage: Language = this.languages[0];
  isLangOpen = false;

  toggleLang() {
    this.isLangOpen = !this.isLangOpen;
  }

  selectLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.isLangOpen = false;

    // future use (i18n / ngx-translate)
    console.log('Language changed to:', lang.code);
  }
}
