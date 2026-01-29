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


@Injectable({ providedIn: 'root' })
export class DataService {
     // Caso datos quemados
     aboutMe = inject(AboutMeData);
     experiencia = inject(ExperienciaData);
     habilidades = inject(HabilidadesData)
     proyectos = inject(ProyectosData)
     cursos = inject(CursosData)
     eventos = inject(EventosData)
     footer = inject(FooterData);

     getPortfolioData(): Observable<PortfolioData> {
          const data: PortfolioData = {
               ABOUT_ME: this.aboutMe.userData,
               EXPERIENCE: {
                    lista: this.experiencia.experienciasData
               },
               SKILLS: {
                    lista: this.habilidades.habilidadesData
               },
               PROJECTS: {
                    lista: this.proyectos.proyectosData
               },
               COURSES: {
                    lista: this.cursos.cursosData
               },
               EVENTS: {
                    lista: this.eventos.eventosData
               },
               FOOTER: this.footer.footerData
          };

          return of(data);
     }

     // Caso AWS
     // private readonly API_URL = '';
     // private data$?: Observable<PortfolioData>;

     // constructor(private http: HttpClient) { }

     // getPortfolioData(): Observable<PortfolioData> {
     //      if (!this.data$) {
     //           this.data$ = this.http.get<PortfolioData>(this.API_URL).pipe(
     //                shareReplay(1)
     //           );
     //      }
     //      return this.data$;
     // }

}