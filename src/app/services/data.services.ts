import { Injectable } from '@angular/core';
import { AcercaDeMi } from '../interfaces/acerca-de-mi.interface';

@Injectable({
     providedIn: 'root'
})
export class DataService {

     constructor() { }

     getAcercaDeMiData(): AcercaDeMi {
          const data: AcercaDeMi = {
               titulo: 'Hola, soy [Tu Nombre Completo]',
               miFoto: 'https://placehold.co/400x400/0d213a/FFFFFF?text=Tu+Foto',
               descripcion: `Desarrollador Full-Stack con más de X años de experiencia creando soluciones web robustas y escalables. Apasionado por la tecnología, el código limpio y las buenas prácticas. Me especializo en el ecosistema de JavaScript, trabajando con frameworks como Angular para el frontend y Node.js para el backend.`,
               contactoRedes: [
                    {
                         nombre: 'LinkedIn',
                         pathIcono: 'linkedin',
                         link: 'https://www.linkedin.com/in/tu-usuario/'
                    },
                    {
                         nombre: 'GitHub',
                         pathIcono: 'github',
                         link: 'https://github.com/tu-usuario'
                    },
                    {
                         nombre: 'Email',
                         pathIcono: 'email',
                         link: 'mailto:tu-correo@example.com'
                    }
               ]
          };
          return data;
     }
}