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
  public proyectosDataEN: Proyecto[] = [
    {
      nombreProyecto: 'Cloud-Native Portfolio',
      imagenPreview: 'assets/img/imagenPortafolio.webp',
      descripcionProyecto: `
    High-performance professional landing page designed with a 100% cloud-based architecture. Built with Angular, the infrastructure leverages Amazon S3 for storage and CloudFront as a global CDN for low-latency delivery.
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
    CLI tool to monitor multiple Git and GitHub repositories simultaneously and pull changes concurrently when available.
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
    CLI web scraper to stay up to date with Ecuador’s LigaPro Serie A.
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
  public proyectosDataDE: Proyecto[] = [
    {
      nombreProyecto: 'Cloud-Native Portfolio',
      imagenPreview: 'assets/img/imagenPortafolio.webp',
      descripcionProyecto: `
    Leistungsstarke professionelle Landingpage mit einer vollständig cloudbasierten Architektur. Implementiert mit Angular, nutzt die Infrastruktur Amazon S3 für die Speicherung und CloudFront als globales CDN für geringe Latenz.
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
    CLI-Tool zur Überwachung mehrerer Git- und GitHub-Repositories sowie zum gleichzeitigen Abrufen von Änderungen.
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
    CLI-Web-Scraper zur Verfolgung der ecuadorianischen LigaPro Serie A.
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
