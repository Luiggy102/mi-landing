import { Injectable } from "@angular/core";
import { Footer } from "../interfaces/footer.interface";
import { RedSocial } from "../interfaces/red-social.interface";

@Injectable({
     providedIn: 'root'
})
export class FooterData {
     redes: RedSocial[] = [
          { pathIcono: 'bootstrapEnvelopeAtFill', nombre: 'Email', link: 'mailto:work_luiggyn.h5d9a@slmail.me' },
          { pathIcono: 'bootstrapLinkedin', nombre: 'LinkedIn', link: 'https://www.linkedin.com/in/luidev/' },
     ];
     public footerData: Footer = {
          titulo: '¿Tienes un proyecto en mente?',
          descripcion: `
          Estoy disponible para nuevas oportunidades y colaboraciones.
          ¡Construyamos algo increíble juntos!
          `,
          redes: this.redes
     }
}