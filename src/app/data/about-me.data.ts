import { Injectable } from "@angular/core";
import { AcercaDeMi } from "../interfaces/acerca-de-mi.interface";

@Injectable({
  providedIn: 'root'
})
export class AboutMeData {

  public userData: AcercaDeMi = {
    titulo: 'Desarrollador Fullstack & Arquitecto de Soluciones',
    descripcion: 'Hola, soy un apasionado por crear sistemas robustos y escalables. Me especializo en transformar ideas complejas en aplicaciones funcionales y atractivas, dominando tecnologías tanto en el Frontend como en el Backend.',
    miFoto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    contactoRedes: [
      { nombre: 'GitHub', pathIcono: 'bootstrapGithub', link: 'https://github.com/tu-usuario' },
      { nombre: 'LinkedIn', pathIcono: 'bootstrapLinkedin', link: 'https://linkedin.com/in/tu-usuario' },
      { nombre: 'Email', pathIcono: 'bootstrapEnvelopeAtFill', link: 'mailto:correo@ejemplo.com' }
    ]
  };

}
