
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud } from '@ng-icons/bootstrap-icons';
import { ionGitBranch, ionLogoAngular, ionLogoDocker, ionLogoJavascript, ionLogoLaravel, ionLogoNodejs, ionLogoReact } from '@ng-icons/ionicons';
import { CategoriaHabilidad } from '../../interfaces/categoria-habilidad.interface';
import { Component, Input } from '@angular/core';
import { tablerBrandAws, tablerBrandCSharp, tablerBrandGolang, tablerBrandPhp } from '@ng-icons/tabler-icons';
import { simpleDotnet, simpleJavascript, simpleLinux, simpleMongodb, simpleMysql, simplePhp, simplePostgresql, simplePostman, simpleTypescript } from '@ng-icons/simple-icons';

@Component({
     selector: 'app-habilidades',
     standalone: true,
     imports: [NgxFadeComponent, NgIconComponent],
     templateUrl: './habilidades-component.html',
     styleUrl: './habilidades-component.css',
     viewProviders: [
          provideIcons({
               bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud,
               ionLogoAngular, ionLogoReact, ionLogoLaravel,
               ionLogoDocker, ionLogoNodejs, ionGitBranch,
               tablerBrandGolang, simplePostman, simpleDotnet,
               simpleMongodb, simplePostgresql, simpleMysql,
               tablerBrandAws, simpleJavascript, simpleTypescript,
               simplePhp, tablerBrandCSharp, simpleLinux
          })
     ]
})
export class HabilidadesComponent {

     @Input() habilidades: CategoriaHabilidad[] = [];
}