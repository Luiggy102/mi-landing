import { CommonModule } from '@angular/common';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud } from '@ng-icons/bootstrap-icons';
import { ionGitCommit, ionLogoAngular, ionLogoDocker, ionLogoLaravel, ionLogoNodejs, ionLogoReact } from '@ng-icons/ionicons';
import { CategoriaHabilidad } from '../../interfaces/categoria-habilidad.interface';
import { Component } from '@angular/core';

@Component({
     selector: 'app-habilidades',
     standalone: true,
     imports: [CommonModule, NgxFadeComponent, NgIconComponent],
     templateUrl: './habilidades-component.html',
     styleUrl: './habilidades-component.css',
     viewProviders: [
          provideIcons({
               bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud,
               ionLogoAngular, ionLogoReact, ionLogoLaravel,
               ionLogoDocker, ionLogoNodejs, ionGitCommit,
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
                    { nombre: 'ASP.NET Core (C#)', pathIcono: 'bootstrapCodeSlash' },
                    { nombre: 'Laravel (PHP)', pathIcono: 'ionLogoLaravel' },
                    { nombre: 'Node.js', pathIcono: 'ionLogoNodejs' }
               ]
          },
          {
               nombreCategoria: 'Base de Datos',
               tecnologias: [
                    { nombre: 'SQL Server', pathIcono: 'bootstrapDatabase' },
                    { nombre: 'MySQL', pathIcono: 'bootstrapDatabase' },
                    { nombre: 'PostgreSQL', pathIcono: 'bootstrapDatabase' }
               ]
          },
          {
               nombreCategoria: 'Herramientas & Cloud',
               tecnologias: [
                    { nombre: 'Git', pathIcono: 'ionGitCommit' },
                    { nombre: 'Docker', pathIcono: 'ionLogoDocker' },
                    { nombre: 'cPanel / DNS', pathIcono: 'bootstrapCloud' }
               ]
          }
     ];
}