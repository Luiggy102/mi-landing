
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud } from '@ng-icons/bootstrap-icons';
import { ionGitBranch, ionGitCommit, ionLogoAngular, ionLogoDocker, ionLogoLaravel, ionLogoNodejs, ionLogoReact } from '@ng-icons/ionicons';
import { CategoriaHabilidad } from '../../interfaces/categoria-habilidad.interface';
import { Component } from '@angular/core';
import { tablerBrandGolang } from '@ng-icons/tabler-icons';
import { simpleDotnet, simpleMongodb, simpleMysql, simplePostgresql, simplePostman } from '@ng-icons/simple-icons';

@Component({
     selector: 'app-habilidades',
     standalone: true,
     imports: [NgxFadeComponent, NgIconComponent],
     templateUrl: './habilidades-component.html',
     styleUrl: './habilidades-component.css',
     viewProviders: [
          provideIcons({
               bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud,
               ionLogoAngular, ionLogoReact, ionLogoLaravel,
               ionLogoDocker, ionLogoNodejs, ionGitBranch,
               tablerBrandGolang, simplePostman, simpleDotnet,
               simpleMongodb, simplePostgresql, simpleMysql
          })
     ]
})
export class HabilidadesComponent {
     // Datos basados en tu stack real: Angular, ASP.NET, Laravel y SQL Server
     public habilidades: CategoriaHabilidad[] = [
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