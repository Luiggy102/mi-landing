import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { Curso } from '../../interfaces/curso.interface';
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';

@Component({
     selector: 'app-cursos',
     standalone: true,
     imports: [CommonModule, NgxFadeComponent],
     templateUrl: './cursos-component.html',
     styleUrl: './cursos-component.css'
})
export class CursosComponent {
     @Input() cursos: Curso[] = [];
}

// public cursos: Curso[] = [
//      {
//           nombreCurso: 'AWS Certified Cloud Practitioner',
//           pathIcono: 'assets/badges/aws-cp.png',
//           estado: 'En Curso'
//      },
//      {
//           nombreCurso: 'Angular: De Cero a Experto',
//           pathIcono: 'assets/badges/angular-badge.png',
//           estado: 'Certificado'
//      },
//      {
//           nombreCurso: 'Arquitectura de Microservicios con .NET',
//           pathIcono: 'assets/badges/dotnet-badge.png',
//           estado: 'Certificado'
//      }
// ];