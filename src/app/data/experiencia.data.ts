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
          tecnologias: ['Angular', 'ASP.NET', 'Entity Framework', 'JWT', 'SQL Server']
        },
        {
          descripcion: 'Mantenimiento y Desarrollo frontend y backend para plataforma crypto MVP',
          tecnologias: ['React', 'Express.JS', 'MongoDB', 'APIs']
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
          descripcion: 'Mantenimiento y desarrollo de features a plataforma de gestión de torneos de Póker',
          tecnologias: ['Laravel', 'Blade Templates', 'Laravel Sanctum']
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
  public experienciasDataEN: Experiencia[] = [
    {
      nombreEmpresa: 'NetEvolution S.A.S',
      nombreCargo: 'Fullstack Developer',
      mesInicio: 'June',
      anoInicio: 2025,
      mesFin: 'Present',
      anoFin: null,
      actividadesRealizadas: [
        {
          descripcion: 'Frontend and backend development of a delivery guides platform',
          tecnologias: ['Angular', 'ASP.NET', 'Entity Framework', 'JWT', 'SQL Server']
        },
        {
          descripcion: 'Maintenance and fullstack development for a crypto MVP platform',
          tecnologias: ['React', 'Express.JS', 'MongoDB', 'APIs']
        },
        {
          descripcion: 'Fullstack development for accounting software',
          tecnologias: ['Laravel', 'PHP', 'MVC', 'Middlewares', 'MySQL']
        },
        {
          descripcion: 'Troubleshooting and server connections for production environment configurations',
          tecnologias: ['FTP', 'SFTP', 'WHM', 'SSH', 'SSH Tunnel', 'Bash']
        },
        {
          descripcion: 'Linux systems management for development',
          tecnologias: ['Fedora Workstation 42']
        },
        {
          descripcion: 'Version control management',
          tecnologias: ['Git']
        }
      ]
    },
    {
      nombreEmpresa: 'Grupo A&G',
      nombreCargo: 'Fullstack Developer',
      mesInicio: 'April',
      anoInicio: 2025,
      mesFin: 'June',
      anoFin: 2025,
      actividadesRealizadas: [
        {
          descripcion: 'Design, development, and maintenance of an internal events calendar platform',
          tecnologias: ['Angular']
        },
        {
          descripcion: 'Maintenance and feature development for a Poker tournament management platform',
          tecnologias: ['Laravel', 'Blade Templates', 'Laravel Sanctum']
        },
        {
          descripcion: 'Implementation of an AI-powered chatbot for web customer support',
          tecnologias: ['Tawk.to', 'JavaScript']
        },
        {
          descripcion: 'Database management across all projects',
          tecnologias: ['MySQL', 'phpMyAdmin']
        },
        {
          descripcion: 'Creation of project containers for easy deployment',
          tecnologias: ['Docker', 'Bash']
        },
        {
          descripcion: 'Linux systems management for development',
          tecnologias: ['Ubuntu Desktop']
        },
        {
          descripcion: 'Production deployment',
          tecnologias: ['CPanel']
        }
      ]
    }
  ];

  public experienciasDataDE: Experiencia[] = [
    {
      nombreEmpresa: 'NetEvolution S.A.S',
      nombreCargo: 'Fullstack-Entwickler',
      mesInicio: 'Juni',
      anoInicio: 2025,
      mesFin: 'Heute',
      anoFin: null,
      actividadesRealizadas: [
        {
          descripcion: 'Frontend- und Backend-Entwicklung einer Plattform für Lieferdokumente',
          tecnologias: ['Angular', 'ASP.NET', 'Entity Framework', 'JWT', 'SQL Server']
        },
        {
          descripcion: 'Wartung und Fullstack-Entwicklung einer Krypto-MVP-Plattform',
          tecnologias: ['React', 'Express.JS', 'MongoDB', 'APIs']
        },
        {
          descripcion: 'Fullstack-Entwicklung für Buchhaltungssoftware',
          tecnologias: ['Laravel', 'PHP', 'MVC', 'Middlewares', 'MySQL']
        },
        {
          descripcion: 'Fehlerbehebung und Serveranbindung für Konfigurationen in Produktionsumgebungen',
          tecnologias: ['FTP', 'SFTP', 'WHM', 'SSH', 'SSH-Tunnel', 'Bash']
        },
        {
          descripcion: 'Verwaltung von Linux-Systemen für die Entwicklung',
          tecnologias: ['Fedora Workstation 42']
        },
        {
          descripcion: 'Versionsverwaltung',
          tecnologias: ['Git']
        }
      ]
    },
    {
      nombreEmpresa: 'Grupo A&G',
      nombreCargo: 'Fullstack-Entwickler',
      mesInicio: 'April',
      anoInicio: 2025,
      mesFin: 'Juni',
      anoFin: 2025,
      actividadesRealizadas: [
        {
          descripcion: 'Design, Entwicklung und Wartung einer internen Event-Kalenderplattform',
          tecnologias: ['Angular']
        },
        {
          descripcion: 'Wartung und Feature-Entwicklung einer Poker-Turnierverwaltungsplattform',
          tecnologias: ['Laravel', 'Blade Templates', 'Laravel Sanctum']
        },
        {
          descripcion: 'Implementierung eines KI-Chatbots für den Web-Kundensupport',
          tecnologias: ['Tawk.to', 'JavaScript']
        },
        {
          descripcion: 'Datenbankverwaltung für alle Projekte',
          tecnologias: ['MySQL', 'phpMyAdmin']
        },
        {
          descripcion: 'Erstellung von Containern für eine einfache Bereitstellung',
          tecnologias: ['Docker', 'Bash']
        },
        {
          descripcion: 'Verwaltung von Linux-Systemen für die Entwicklung',
          tecnologias: ['Ubuntu Desktop']
        },
        {
          descripcion: 'Deployment in die Produktionsumgebung',
          tecnologias: ['CPanel']
        }
      ]
    }
  ];

}
