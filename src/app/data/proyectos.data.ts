import { Injectable } from "@angular/core";
import { Proyecto } from "../interfaces/proyecto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProyectosData {

  public proyectosData: Proyecto[] = [
    {
      nombreProyecto: 'Portafolio Cloud-Native',
      imagenPreview: 'assets/img/imagenPortafolio.webp',
      descripcionProyecto: `
      Landing page profesional de alto rendimiento diseñada bajo una arquitectura 100% en la nube. Implementada en Angular, la infraestructura utiliza Amazon S3 para almacenamiento, CloudFront como CDN global para baja latencia.
      `,
      links: [
        { pathIcono: 'bootstrapGlobe2', link: 'https://luitamayo.com' },
        { pathIcono: 'bootstrapGithub', link: 'https://github.com/Luiggy102/mi-landing/' }
      ],
      tecnologias: [
        { nombre: 'Angular', pathIcono: 'ionLogoAngular' },
        { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
      ]
    },
    {
      nombreProyecto: 'Upgit',
      imagenPreview: 'assets/img/imagenUpgit.webp',
      descripcionProyecto: `
      Herramienta CLI para estar al tanto de multiples repositorios Git y Github en conjunto asi como trae cambios concurrientemente si existe
      `,
      links: [
        { pathIcono: 'bootstrapGithub', link: 'https://github.com/Luiggy102/upgit' }
      ],
      tecnologias: [
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
      ]
    },
    {
      nombreProyecto: 'Ligapro-cli',
      imagenPreview: 'assets/img/imagenLigaProCli.webp',
      descripcionProyecto: `
        CLI web-scrapper para estar al tanto de la serie A de Ecuador LigaPro
      `,
      links: [
        { pathIcono: 'bootstrapGithub', link: 'https://github.com/Luiggy102/ligapro-cli' }
      ],
      tecnologias: [
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
      ]
    },

  ];

}
