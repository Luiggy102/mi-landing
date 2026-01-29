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

  public userDataEN: AcercaDeMi = {
    titulo: 'Fullstack Developer & Solutions Architect',
    descripcion: `
  Hi, I’m passionate about building robust and scalable systems. I specialize in transforming complex ideas into functional and engaging applications, mastering technologies across both Frontend and Backend.
  `,
    miFoto: 'assets/img/pfpSinFondo.webp',
    contactoRedes: [
      { nombre: 'GitHub', pathIcono: 'bootstrapGithub', link: 'https://github.com/luiggy102/' },
      { nombre: 'LinkedIn', pathIcono: 'bootstrapLinkedin', link: 'https://www.linkedin.com/in/luidev/' },
      { nombre: 'Email', pathIcono: 'bootstrapEnvelopeAtFill', link: 'mailto:work_luiggyn.h5d9a@slmail.me' }
    ]
  };

  public userDataDE: AcercaDeMi = {
    titulo: 'Fullstack-Entwickler & Lösungsarchitekt',
    descripcion: `
  Hallo, ich brenne dafür, robuste und skalierbare Systeme zu entwickeln. Ich spezialisiere mich darauf, komplexe Ideen in funktionale und ansprechende Anwendungen zu verwandeln und beherrsche Technologien sowohl im Frontend als auch im Backend.
  `,
    miFoto: 'assets/img/pfpSinFondo.webp',
    contactoRedes: [
      { nombre: 'GitHub', pathIcono: 'bootstrapGithub', link: 'https://github.com/luiggy102/' },
      { nombre: 'LinkedIn', pathIcono: 'bootstrapLinkedin', link: 'https://www.linkedin.com/in/luidev/' },
      { nombre: 'Email', pathIcono: 'bootstrapEnvelopeAtFill', link: 'mailto:work_luiggyn.h5d9a@slmail.me' }
    ]
  };

}
