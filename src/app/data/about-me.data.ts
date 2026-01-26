import { Injectable } from "@angular/core";
import { AcercaDeMi } from "../interfaces/acerca-de-mi.interface";

@Injectable({
  providedIn: 'root'
})
export class AboutMeData {

  public userData: AcercaDeMi = {
    titulo: 'Desarrollador Fullstack & Arquitecto de Soluciones',
    descripcion: `
    Hola, soy un apasionado por crear sistemas robustos y escalables. Me especializo en transformar ideas complejas en aplicaciones funcionales y atractivas, dominando tecnologías tanto en el Frontend como en el Backend.
    `,
    miFoto: 'assets/img/pfpSinFondo.webp',
    contactoRedes: [
      { nombre: 'GitHub', pathIcono: 'bootstrapGithub', link: 'https://github.com/luiggy102/' },
      { nombre: 'LinkedIn', pathIcono: 'bootstrapLinkedin', link: 'https://www.linkedin.com/in/luidev/' },
      { nombre: 'Email', pathIcono: 'bootstrapEnvelopeAtFill', link: 'mailto:work_luiggyn.h5d9a@slmail.me' }
    ]
  };

}
