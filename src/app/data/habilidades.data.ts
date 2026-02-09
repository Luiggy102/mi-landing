import { Injectable } from "@angular/core";
import { CategoriaHabilidad } from "../interfaces/categoria-habilidad.interface";
import { TecnologiaHabilidad } from "../interfaces/tecnologia-habilidad.interface";

@Injectable({
  providedIn: 'root'
})
export class HabilidadesData {
  tecnologiasFront: TecnologiaHabilidad[] = [
    { nombre: 'Angular', pathIcono: 'ionLogoAngular' },
    { nombre: 'React', pathIcono: 'ionLogoReact' },
    { nombre: 'Bootstrap', pathIcono: 'tablerBrandBootstrap' },
  ]
  tecnologiasBack: TecnologiaHabilidad[] = [
    { nombre: 'ASP.NET Core', pathIcono: 'simpleDotnet' },
    { nombre: 'Laravel', pathIcono: 'ionLogoLaravel' },
    { nombre: 'Node.js', pathIcono: 'ionLogoNodejs' },
  ]
  tecnologiasDB: TecnologiaHabilidad[] = [
    { nombre: 'MySQL', pathIcono: 'simpleMysql' },
    { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
    { nombre: 'PostgreSQL', pathIcono: 'simplePostgresql' },
    { nombre: 'MongoDB', pathIcono: 'simpleMongodb' },
    { nombre: 'DynamoDB', pathIcono: 'bootstrapDatabase' },
  ]
  tecnologiaLenguajes: TecnologiaHabilidad[] = [
    { nombre: 'C#', pathIcono: 'tablerBrandCSharp' },
    { nombre: 'Golang', pathIcono: 'tablerBrandGolang' },
    { nombre: 'php', pathIcono: 'simplePhp' },
    { nombre: 'Typescript', pathIcono: 'simpleTypescript' },
    { nombre: 'Javascritpt', pathIcono: 'simpleJavascript' },
  ]
  tecnoliasHerramientas: TecnologiaHabilidad[] = [
    { nombre: 'AWS', pathIcono: 'tablerBrandAws' },
    { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
    { nombre: 'Postman', pathIcono: 'simplePostman' },
    { nombre: 'Git', pathIcono: 'ionGitBranch' },
    { nombre: 'Linux', pathIcono: 'simpleLinux' },
  ]

  public habilidadesData: CategoriaHabilidad[] = [
    { nombreCategoria: 'Frontend', tecnologias: this.tecnologiasFront },
    { nombreCategoria: 'Backend', tecnologias: this.tecnologiasBack },
    { nombreCategoria: 'Bases de Datos', tecnologias: this.tecnologiasDB },
    { nombreCategoria: 'Lenguajes', tecnologias: this.tecnologiaLenguajes },
    { nombreCategoria: 'Herramientas & Cloud', tecnologias: this.tecnoliasHerramientas },
  ];

  public habilidadesDataEN: CategoriaHabilidad[] = [
    { nombreCategoria: 'Frontend', tecnologias: this.tecnologiasFront },
    { nombreCategoria: 'Backend', tecnologias: this.tecnologiasBack },
    { nombreCategoria: 'Databases', tecnologias: this.tecnologiasDB },
    { nombreCategoria: 'Languages', tecnologias: this.tecnologiaLenguajes },
    { nombreCategoria: 'Tools & Cloud', tecnologias: this.tecnoliasHerramientas },
  ];
  public habilidadesDataDE: CategoriaHabilidad[] = [
    { nombreCategoria: 'Frontend', tecnologias: this.tecnologiasFront },
    { nombreCategoria: 'Backend', tecnologias: this.tecnologiasBack },
    { nombreCategoria: 'Datenbanken', tecnologias: this.tecnologiasDB },
    { nombreCategoria: 'Programmiersprachen', tecnologias: this.tecnologiaLenguajes },
    { nombreCategoria: 'Tools & Cloud', tecnologias: this.tecnoliasHerramientas },
  ];

}
