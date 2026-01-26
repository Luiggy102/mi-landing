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
      ]
    },
    {
      nombreCategoria: 'Backend',
      tecnologias: [
        { nombre: 'ASP.NET Core', pathIcono: 'simpleDotnet' },
        { nombre: 'Laravel', pathIcono: 'ionLogoLaravel' },
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
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
        { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
        { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
        { nombre: 'Postman', pathIcono: 'simplePostman' },
        { nombre: 'Linux', pathIcono: 'simpleLinux' },
      ]
    },
  ];

}
