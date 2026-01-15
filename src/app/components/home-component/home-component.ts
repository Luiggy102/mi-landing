import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMeComponent } from '../about-me-component/about-me-component';
import { EventosComponent } from "../eventos-component/eventos-component";
import { ExperienciaComponent } from "../experiencia-component/experiencia-component";
import { HabilidadesComponent } from "../habilidades-component/habilidades-component";
import { CursosComponent } from "../cursos-component/cursos-component";

@Component({
  selector: 'app-home-component',
  imports: [AboutMeComponent, EventosComponent, ExperienciaComponent, HabilidadesComponent, CursosComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
