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
        { nombre: 'ASP.NET Core (C#)', pathIcono: 'simpleDotnet' },
        { nombre: 'Laravel (PHP)', pathIcono: 'ionLogoLaravel' },
        { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
      ]
    },
    {
      nombreCategoria: 'Base de Datos',
      tecnologias: [
        { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
        { nombre: 'MySQL', pathIcono: 'simpleMysql' },
        { nombre: 'PostgreSQL', pathIcono: 'simplePostgresql' },
        { nombre: 'MongoDB', pathIcono: 'simpleMongodb' }
      ]
    },
    {
      nombreCategoria: 'Herramientas & Cloud',
      tecnologias: [
        { nombre: 'Git', pathIcono: 'ionGitBranch' },
        { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
        { nombre: 'Postman', pathIcono: 'simplePostman' },
      ]
    }
  ];

}
