import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, shareReplay } from 'rxjs';
import { PortfolioData } from '../interfaces/portfolio-data.interface';
import { AboutMeData } from '../data/about-me.data';
import { ExperienciaData } from '../data/experiencia.data';
import { HabilidadesData } from '../data/habilidades.data';
import { ProyectosData } from '../data/proyectos.data';
import { CursosData } from '../data/cursos.data';
import { EventosData } from '../data/eventos.data';
import { FooterData } from '../data/footer.data';
import { LanguageService } from './language.service';


@Injectable({ providedIn: 'root' })
export class DataService {
     private langService = inject(LanguageService);
     aboutMe = inject(AboutMeData);
     experiencia = inject(ExperienciaData);
     habilidades = inject(HabilidadesData)
     proyectos = inject(ProyectosData)
     cursos = inject(CursosData)
     eventos = inject(EventosData)
     footer = inject(FooterData);

     getPortfolioData(): Observable<PortfolioData> {
          const lang = this.langService.language();
          const data: PortfolioData = {
               ABOUT_ME: this.getAboutData(lang),
               EXPERIENCE: {
                    tituloSeccion: this.getTitle(lang, {
                         es: 'Mi Experiencia',
                         en: 'My Experience',
                         de: 'Meine Erfahrung'
                    }),
                    lista: this.getExpData(lang)
               },
               EVENTS: {
                    tituloSeccion: this.getTitle(lang, {
                         es: 'Eventos y Comunidad',
                         en: 'Events & Community',
                         de: 'Events und Community'
                    }),
                    lista: this.getEventsData(lang)
               },

               SKILLS: {
                    tituloSeccion: this.getTitle(lang, {
                         es: 'Habilidades Técnicas',
                         en: 'Technical Skills',
                         de: 'Technische Fähigkeiten'
                    }),
                    lista: this.getSkillsData(lang)
               },

               PROJECTS: {
                    tituloSeccion: this.getTitle(lang, {
                         es: 'Proyectos Destacados',
                         en: 'Featured Projects',
                         de: 'Ausgewählte Projekte'
                    }),
                    lista: this.getProjectsData(lang)
               },

               COURSES: {
                    tituloSeccion: this.getTitle(lang, {
                         es: 'Cursos y Certificaciones',
                         en: 'Courses & Certifications',
                         de: 'Kurse und Zertifikate'
                    }),
                    lista: this.getCoursesData(lang)
               },

               FOOTER: this.getFooterData(lang)
          };

          return of(data);
     }
     private getAboutData(lang: string) {
          if (lang === 'es') return this.aboutMe.userData;
          if (lang === 'en') return this.aboutMe.userDataEN;
          if (lang === 'de') return this.aboutMe.userDataDE;
          return this.aboutMe.userDataEN;
     }

     private getExpData(lang: string) {
          if (lang === 'es') return this.experiencia.experienciasData;
          if (lang === 'en') return this.experiencia.experienciasDataEN;
          if (lang === 'de') return this.experiencia.experienciasDataDE;
          return this.experiencia.experienciasDataEN;
     }


     private getEventsData(lang: string) {
          if (lang === 'es') return this.eventos.eventosData;
          if (lang === 'en') return this.eventos.eventosDataEN;
          if (lang === 'de') return this.eventos.eventosDataDE;
          return this.eventos.eventosDataEN;
     }

     private getSkillsData(lang: string) {
          if (lang === 'es') return this.habilidades.habilidadesData;
          if (lang === 'en') return this.habilidades.habilidadesDataEN;
          if (lang === 'de') return this.habilidades.habilidadesDataDE;
          return this.habilidades.habilidadesDataEN;
     }

     private getProjectsData(lang: string) {
          if (lang === 'es') return this.proyectos.proyectosData;
          if (lang === 'en') return this.proyectos.proyectosDataEN;
          if (lang === 'de') return this.proyectos.proyectosDataDE;
          return this.proyectos.proyectosDataEN;
     }

     private getCoursesData(lang: string) {
          if (lang === 'es') return this.cursos.cursosData;
          if (lang === 'en') return this.cursos.cursosDataEN;
          if (lang === 'de') return this.cursos.cursosDataDE;
          return this.cursos.cursosDataEN;
     }

     private getFooterData(lang: string) {
          if (lang === 'es') return this.footer.footerData;
          if (lang === 'en') return this.footer.footerDataEN;
          if (lang === 'de') return this.footer.footerDataDE;
          return this.footer.footerDataEN;
     }

     private getTitle(
          lang: string,
          titles: { es: string; en: string; de: string }
     ): string {
          return titles[lang as 'es' | 'en' | 'de'] ?? titles.en;
     }


}