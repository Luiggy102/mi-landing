import { Component, Input } from '@angular/core';

import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { NgxVortexComponent } from '@omnedia/ngx-vortex';

@Component({
     selector: 'app-proyectos',
     standalone: true,
     imports: [ProyectoCardComponent, NgxFadeComponent, NgxVortexComponent],
     templateUrl: './proyectos-component.html',
     styleUrl: './proyectos-component.css'
})
export class ProyectosComponent {
     @Input() proyectos: Proyecto[] = [];
}