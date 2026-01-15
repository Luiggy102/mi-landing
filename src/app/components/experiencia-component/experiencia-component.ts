import { CommonModule } from '@angular/common';
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { Component } from '@angular/core';

@Component({
     selector: 'app-experiencia',
     standalone: true,
     imports: [CommonModule, NgxTimelineComponent, NgxTimelineEntryComponent],
     templateUrl: './experiencia-component.html',
     styleUrl: './experiencia-component.css'
})
export class ExperienciaComponent {
     public experiencias: Experiencia[] = [
          {
               nombreEmpresa: 'Macrobills Solutions',
               nombreCargo: 'Fullstack Developer',
               mesInicio: 'Agosto',
               anoInicio: 2025,
               mesFin: 'Presente',
               anoFin: null,
               actividadesRealizadas: [
                    {
                         descripcion: 'Desarrollo de módulos de nómina y recursos humanos adaptados a la legislación ecuatoriana.',
                         tecnologias: ['Angular', 'Laravel', 'SQL Server']
                    },
                    {
                         descripcion: 'Integración de asientos contables automáticos para procesos de finiquitos.',
                         tecnologias: ['PHP', 'C#']
                    }
               ]
          },
          {
               nombreEmpresa: 'Logistics & WMS Corp',
               nombreCargo: 'Backend Developer',
               mesInicio: 'Enero',
               anoInicio: 2024,
               mesFin: 'Julio',
               anoFin: 2025,
               actividadesRealizadas: [
                    {
                         descripcion: 'Optimización de algoritmos de Cross-Docking para la gestión de almacenes.',
                         tecnologias: ['ASP.NET Core', 'Entity Framework']
                    },
                    {
                         descripcion: 'Diseño de arquitectura de base de datos para seguimiento de inventario en tiempo real.',
                         tecnologias: ['SQL Server']
                    }
               ]
          }
     ];
}