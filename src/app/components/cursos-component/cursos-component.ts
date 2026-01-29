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
     @Input() tituloSeccion: string = '';
}