import { Injectable } from "@angular/core";
import { Experiencia } from "../interfaces/experiencia.interface";

@Injectable({
  providedIn: 'root'
})
export class ExperienciaData {

  public experienciasData: Experiencia[] = [
    {
      nombreEmpresa: 'NetEvolution S.A.S',
      nombreCargo: 'Fullstack Developer',
      mesInicio: 'Junio',
      anoInicio: 2025,
      mesFin: 'Presente',
      anoFin: null,
      actividadesRealizadas: [
        {
          descripcion: 'Desarrollo a nivel de frontend y backend de plataforma de Guías de remisión',
          tecnologias: ['Angular', 'TypeScript', 'ASP.NET', 'Entity Framework', 'C#', 'JWT', 'Azure Data Studio', 'SQL Server']
        },
        {
          descripcion: 'Mantenimiento y Desarrollo frontend y backend para plataforma crypto MVP',
          tecnologias: ['React', 'Express.JS', 'MongoDB', 'JavaScript', 'APIs']
        },
        {
          descripcion: 'Desarrollo fullstack para software contable',
          tecnologias: ['Laravel', 'php', 'MVC', 'Middlewares', 'MySQL']
        },
        {
          descripcion: 'Solución de Problemas y Conexión a servidores para conﬁguraciones en entornos de producción',
          tecnologias: ['FTP', 'SFTP', 'WHM', 'SSH', 'SSH Tunel', 'Bash']
        },
        {
          descripcion: 'Manejo de sistemas Linux para desarrollo',
          tecnologias: ['Fedora Workstation 42']
        },
        {
          descripcion: 'Manejo de versiones',
          tecnologias: ['Git']
        }
      ]
    },
    {
      nombreEmpresa: 'Grupo A&G',
      nombreCargo: 'FullStack Developer',
      mesInicio: 'Abril',
      anoInicio: 2025,
      mesFin: 'Junio',
      anoFin: 2025,
      actividadesRealizadas: [
        {
          descripcion: 'Diseño, desarrollo y mantenimiento de plataforma de calendarios para eventos internos',
          tecnologias: ['Angular']
        },
        {
          descripcion: 'Mantenimiento y desarrollo de features a plataforma de gestión de torneos de Poker',
          tecnologias: ['Laravel', 'Blade Templates', 'Laravel sanctum']
        },
        {
          descripcion: 'Implementación de chatbot con IA en web para servicio al cliente',
          tecnologias: ['Tawk.to', 'JavaScript']
        },
        {
          descripcion: 'Gestión de bases de datos para todos los proyectos',
          tecnologias: ['MySQL', 'phpMyAdmin']
        },
        {
          descripcion: 'Creación de contenedores de los proyectos para fácil despliegue',
          tecnologias: ['Docker', 'Bash']
        },
        {
          descripcion: 'Manejo de sistemas Linux para desarrollo',
          tecnologias: ['Ubuntu Desktop']
        },
        {
          descripcion: 'Despliegue a producción',
          tecnologias: ['CPanel']
        }
      ]
    }
  ];

}
