import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { NgxVortexComponent } from '@omnedia/ngx-vortex';

@Component({
     selector: 'app-proyectos',
     standalone: true,
     imports: [CommonModule, NgxFadeComponent, ProyectoCardComponent, NgxVortexComponent],
     templateUrl: './proyectos-component.html',
     styleUrl: './proyectos-component.css'
})
export class ProyectosComponent {
     public proyectos: Proyecto[] = [
          {
               nombreProyecto: 'My PDF Toolkit',
               imagenPreview: 'assets/projects/pdf-toolkit.png',
               descripcionProyecto: 'Aplicación web robusta para manipular archivos PDF: comprimir, extraer páginas y convertir a imágenes.',
               links: [
                    { pathIcono: 'bootstrapGlobe2', link: 'https://mypdftoolkit.com' },
                    { pathIcono: 'bootstrapGithub', link: 'https://github.com/tu-usuario/pdf-toolkit' }
               ],
               tecnologias: [
                    { nombre: 'Python', pathIcono: 'assets/icons/python.png' },
                    { nombre: 'Flask', pathIcono: 'assets/icons/flask.png' },
                    { nombre: 'AWS', pathIcono: 'assets/icons/aws.png' },
                    { nombre: 'Docker', pathIcono: 'assets/icons/docker.png' }
               ]
          },
          {
               nombreProyecto: 'Sistema WMS P4W',
               imagenPreview: 'assets/projects/wms-preview.png',
               descripcionProyecto: 'Warehouse Management System completo para la gestión de inventarios, bodegas y logística en tiempo real.',
               links: [
                    { pathIcono: 'bootstrapGithub', link: 'https://github.com/tu-usuario/wms-project' }
               ],
               tecnologias: [
                    { nombre: 'Angular', pathIcono: 'assets/icons/angular.png' },
                    { nombre: 'ASP.NET Core', pathIcono: 'assets/icons/dotnet.png' },
                    { nombre: 'SQL Server', pathIcono: 'assets/icons/sqlserver.png' }
               ]
          }
     ];
}