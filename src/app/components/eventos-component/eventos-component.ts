import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxMarqueeComponent, OmMarqueeItemDirective } from '@omnedia/ngx-marquee';
import { Evento } from '../../interfaces/evento.interface';
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';

@Component({
  selector: 'app-eventos-component',
  imports: [NgxMarqueeComponent, OmMarqueeItemDirective],
  templateUrl: './eventos-component.html',
  styleUrl: './eventos-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventosComponent {
  public eventosFila1: Evento[] = [];
  public eventosFila2: Evento[] = [];

  @Input() set eventos(value: Evento[] | undefined) {
    if (value) {
      this.eventosFila1 = value;
      this.eventosFila2 = [...value].reverse();
    }
  }
}