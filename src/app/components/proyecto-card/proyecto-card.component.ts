import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapGlobe2 } from '@ng-icons/bootstrap-icons';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
     selector: 'app-proyecto-card',
     standalone: true,
     imports: [CommonModule, NgIconComponent],
     templateUrl: './proyecto-card.component.html',
     styleUrl: './proyecto-card.component.css',
     viewProviders: [provideIcons({ bootstrapGithub, bootstrapGlobe2 })]
})
export class ProyectoCardComponent {
     @Input() proyecto!: Proyecto;
}