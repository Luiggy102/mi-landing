import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMeComponent } from '../about-me-component/about-me-component';
import { EventosComponent } from "../eventos-component/eventos-component";
import { ExperienciaComponent } from "../experiencia-component/experiencia-component";

@Component({
  selector: 'app-home-component',
  imports: [AboutMeComponent, EventosComponent, ExperienciaComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
