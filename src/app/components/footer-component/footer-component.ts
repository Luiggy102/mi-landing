import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill } from '@ng-icons/bootstrap-icons';

@Component({
     selector: 'app-footer',
     standalone: true,
     imports: [NgxThreeGlobeComponent, NgIconComponent],
     templateUrl: './footer-component.html',
     styleUrl: './footer-component.css',
     viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill })]
})
export class FooterComponent {
     private platformId = inject(PLATFORM_ID);
     showGlobe = isPlatformBrowser(this.platformId);
     // Reutilizamos tus redes sociales
     public redes = [
          { nombre: 'LinkedIn', icono: 'bootstrapLinkedin', link: 'https://www.linkedin.com/in/luidev/' },
          { nombre: 'GitHub', icono: 'bootstrapGithub', link: 'https://github.com/luiggy102/' },
          { nombre: 'Email', icono: 'bootstrapEnvelopeAtFill', link: 'mailto:work_luiggyn.h5d9a@slmail.me' }
     ];

     public currentYear = new Date().getFullYear();
}