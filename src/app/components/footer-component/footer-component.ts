import { Component, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill } from '@ng-icons/bootstrap-icons';
import { RedSocial } from '../../interfaces/red-social.interface';
import { Footer } from '../../interfaces/footer.interface';

@Component({
     selector: 'app-footer',
     standalone: true,
     imports: [NgxThreeGlobeComponent, NgIconComponent],
     templateUrl: './footer-component.html',
     styleUrl: './footer-component.css',
     viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill })]
})
export class FooterComponent {
     @Input() datosFooter?: Footer;
     private platformId = inject(PLATFORM_ID);
     showGlobe = isPlatformBrowser(this.platformId);
     public currentYear = new Date().getFullYear();
}