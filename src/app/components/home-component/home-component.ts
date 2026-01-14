import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutMeComponent } from '../about-me-component/about-me-component';

@Component({
  selector: 'app-home-component',
  imports: [AboutMeComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
