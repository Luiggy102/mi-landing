import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';
import { flagDe, flagEs, flagUs } from "@ng-icons/flag-icons";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [NgIconComponent, CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideIcons({ flagEs, flagUs, flagDe })]
})
export class NavbarComponent {
  public langService = inject(LanguageService);
  isMenuOpen = false;
  isLangOpen = false;

  private labels = {
    es: {
      about: 'Acerca de mí',
      events: 'Eventos',
      exp: 'Experiencia',
      skills: 'Habilidades',
      courses: 'Cursos',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    en: {
      about: 'About Me',
      events: 'Events',
      exp: 'Experience',
      skills: 'Skills',
      courses: 'Courses',
      projects: 'Projects',
      contact: 'Contact'
    },
    de: {
      about: 'Über mich',
      events: 'Veranstaltungen',
      exp: 'Erfahrung',
      skills: 'Fähigkeiten',
      courses: 'Kurse',
      projects: 'Projekte',
      contact: 'Kontakt'
    }
  };
  get currentLabels() {
    return this.labels[this.langService.language()];
  }

  changeLang(lang: Language) {
    this.langService.setLanguage(lang);
    window.location.reload();
  }

  toggleLang() {
    this.isLangOpen = !this.isLangOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  downloadCV() {
    const lang = this.langService.language();

    const cvMap: Record<Language, string> = {
      es: 'assets/pdf/cv-es.pdf',
      en: 'assets/pdf/cv-en.pdf',
      de: 'assets/pdf/cv-de.pdf'
    };

    const fileUrl = cvMap[lang];

    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
