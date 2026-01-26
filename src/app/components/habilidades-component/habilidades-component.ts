
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapCodeSlash, bootstrapDatabase, bootstrapCloud } from '@ng-icons/bootstrap-icons';
import { ionGitBranch, ionGitCommit, ionLogoAngular, ionLogoDocker, ionLogoLaravel, ionLogoNodejs, ionLogoReact } from '@ng-icons/ionicons';
import { CategoriaHabilidad } from '../../interfaces/categoria-habilidad.interface';
import { Component, Input } from '@angular/core';
import { tablerBrandGolang } from '@ng-icons/tabler-icons';
import { simpleDotnet, simpleMongodb, simpleMysql, simplePostgresql, simplePostman } from '@ng-icons/simple-icons';

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
               simpleMongodb, simplePostgresql, simpleMysql
          })
     ]
})
export class HabilidadesComponent {

     @Input() habilidades: CategoriaHabilidad[] = [];
}