import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapGlobe2 } from '@ng-icons/bootstrap-icons';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ionGitBranch, ionLogoAngular } from '@ng-icons/ionicons';
import { tablerBrandAws, tablerBrandGolang } from '@ng-icons/tabler-icons';

@Component({
     selector: 'app-proyecto-card',
     standalone: true,
     imports: [NgIconComponent],
     templateUrl: './proyecto-card.component.html',
     styleUrl: './proyecto-card.component.css',
     viewProviders: [provideIcons({
          bootstrapGithub, bootstrapGlobe2, ionLogoAngular,
          tablerBrandAws, ionGitBranch, tablerBrandGolang
     })]
})
export class ProyectoCardComponent {
     @Input() proyecto!: Proyecto;
}