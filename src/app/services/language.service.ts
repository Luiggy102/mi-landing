import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en' | 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
     private currentLang = signal<Language>(this.detectLanguage());

     get language() {
          return this.currentLang.asReadonly();
     }

     setLanguage(lang: Language) {
          localStorage.setItem('user-lang', lang);
          this.currentLang.set(lang);
     }

     private detectLanguage(): Language {
          const saved = localStorage.getItem('user-lang') as Language;
          if (saved) return saved;

          const browserLang = window.navigator.language.split('-')[0];
          if (browserLang === 'es') return 'es';
          if (browserLang === 'de') return 'de';

          return 'en'; // Default
     }
}