
import { NgxTimelineComponent, NgxTimelineEntryComponent } from '@omnedia/ngx-timeline';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { Component, Input } from '@angular/core';

@Component({
     selector: 'app-experiencia',
     standalone: true,
     imports: [NgxTimelineComponent, NgxTimelineEntryComponent],
     templateUrl: './experiencia-component.html',
     styleUrl: './experiencia-component.css'
})
export class ExperienciaComponent {
     @Input() experiencias: Experiencia[] = [];
}