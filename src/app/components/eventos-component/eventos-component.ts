import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxMarqueeComponent, OmMarqueeItemDirective } from '@omnedia/ngx-marquee';
import { Evento } from '../../interfaces/evento.interface';

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

  get eventos(): Evento[] {
    return this.eventosFila1;
  }

  @Input() set eventos(value: Evento[] | undefined) {
    if (value) {
      this.eventosFila1 = value;
      this.eventosFila2 = [...value].reverse();
    }
  }
}