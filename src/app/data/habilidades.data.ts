import { Injectable } from "@angular/core";
import { CategoriaHabilidad } from "../interfaces/categoria-habilidad.interface";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesData {

  public habilidadesData: CategoriaHabilidad[] = [
    {
      nombreCategoria: 'Frontend',
      tecnologias: [
        { nombre: 'Angular', pathIcono: 'ionLogoAngular' },
        { nombre: 'React', pathIcono: 'ionLogoReact' },
        { nombre: 'Bootstrap', pathIcono: 'tablerBrandBootstrap' },
      ]
    },
    {
      nombreCategoria: 'Backend',
      tecnologias: [
        { nombre: 'ASP.NET Core', pathIcono: 'simpleDotnet' },
        { nombre: 'Laravel', pathIcono: 'ionLogoLaravel' },
        { nombre: 'Node.js', pathIcono: 'ionLogoNodejs' },
      ]
    },
    {
      nombreCategoria: 'Bases de Datos',
      tecnologias: [
        { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
        { nombre: 'MySQL', pathIcono: 'simpleMysql' },
        { nombre: 'MongoDB', pathIcono: 'simpleMongodb' },
        { nombre: 'PostgreSQL', pathIcono: 'simplePostgresql' },
      ]
    },
    {
      nombreCategoria: 'Lenguajes',
      tecnologias: [
        { nombre: 'C#', pathIcono: 'tablerBrandCSharp' },
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
        { nombre: 'php', pathIcono: 'simplePhp' },
        { nombre: 'Typescript', pathIcono: 'simpleTypescript' },
        { nombre: 'Javascritpt', pathIcono: 'simpleJavascript' },
      ]
    },
    {
      nombreCategoria: 'Herramientas & Cloud',
      tecnologias: [
        { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
        { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
        { nombre: 'Postman', pathIcono: 'simplePostman' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
        { nombre: 'Linux', pathIcono: 'simpleLinux' },
      ]
    },
  ];

  public habilidadesDataEN: CategoriaHabilidad[] = [
    {
      nombreCategoria: 'Frontend',
      tecnologias: [
        { nombre: 'Angular', pathIcono: 'ionLogoAngular' },
        { nombre: 'React', pathIcono: 'ionLogoReact' },
        { nombre: 'Bootstrap', pathIcono: 'tablerBrandBootstrap' },
      ]
    },
    {
      nombreCategoria: 'Backend',
      tecnologias: [
        { nombre: 'ASP.NET Core', pathIcono: 'simpleDotnet' },
        { nombre: 'Laravel', pathIcono: 'ionLogoLaravel' },
        { nombre: 'Node.js', pathIcono: 'ionLogoNodejs' },
      ]
    },
    {
      nombreCategoria: 'Databases',
      tecnologias: [
        { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
        { nombre: 'MySQL', pathIcono: 'simpleMysql' },
        { nombre: 'MongoDB', pathIcono: 'simpleMongodb' },
        { nombre: 'PostgreSQL', pathIcono: 'simplePostgresql' },
      ]
    },
    {
      nombreCategoria: 'Languages',
      tecnologias: [
        { nombre: 'C#', pathIcono: 'tablerBrandCSharp' },
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
        { nombre: 'PHP', pathIcono: 'simplePhp' },
        { nombre: 'TypeScript', pathIcono: 'simpleTypescript' },
        { nombre: 'JavaScript', pathIcono: 'simpleJavascript' },
      ]
    },
    {
      nombreCategoria: 'Tools & Cloud',
      tecnologias: [
        { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
        { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
        { nombre: 'Postman', pathIcono: 'simplePostman' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
        { nombre: 'Linux', pathIcono: 'simpleLinux' },
      ]
    },
  ];
  public habilidadesDataDE: CategoriaHabilidad[] = [
    {
      nombreCategoria: 'Frontend',
      tecnologias: [
        { nombre: 'Angular', pathIcono: 'ionLogoAngular' },
        { nombre: 'React', pathIcono: 'ionLogoReact' },
        { nombre: 'Bootstrap', pathIcono: 'tablerBrandBootstrap' },
      ]
    },
    {
      nombreCategoria: 'Backend',
      tecnologias: [
        { nombre: 'ASP.NET Core', pathIcono: 'simpleDotnet' },
        { nombre: 'Laravel', pathIcono: 'ionLogoLaravel' },
        { nombre: 'Node.js', pathIcono: 'ionLogoNodejs' },
      ]
    },
    {
      nombreCategoria: 'Datenbanken',
      tecnologias: [
        { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
        { nombre: 'MySQL', pathIcono: 'simpleMysql' },
        { nombre: 'MongoDB', pathIcono: 'simpleMongodb' },
        { nombre: 'PostgreSQL', pathIcono: 'simplePostgresql' },
      ]
    },
    {
      nombreCategoria: 'Programmiersprachen',
      tecnologias: [
        { nombre: 'C#', pathIcono: 'tablerBrandCSharp' },
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
        { nombre: 'PHP', pathIcono: 'simplePhp' },
        { nombre: 'TypeScript', pathIcono: 'simpleTypescript' },
        { nombre: 'JavaScript', pathIcono: 'simpleJavascript' },
      ]
    },
    {
      nombreCategoria: 'Tools & Cloud',
      tecnologias: [
        { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
        { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
        { nombre: 'Postman', pathIcono: 'simplePostman' },
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
        { nombre: 'Linux', pathIcono: 'simpleLinux' },
      ]
    },
  ];

}
