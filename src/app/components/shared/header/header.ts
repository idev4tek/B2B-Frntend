import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { comma } from 'postcss/lib/list';
import { SidebarService } from '../services/sidebar.service';

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

   constructor(public sidebarService: SidebarService) {}

   toggleSidebar() {
    console.log('[Header] hamburger clicked');
    this.sidebarService.toggle();
  }
  languages: Language[] = [
    { code: 'en', name: 'English (US)', flag: 'images/united-states-of-america.png' },
    { code: 'ur', name: 'Urdu', flag: 'images/pakistan.png' },
    { code: 'ar', name: 'Arabic', flag: 'images/saudi-arabia.png' },
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

  isOpen = false;

}
