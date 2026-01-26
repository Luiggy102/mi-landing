import { Injectable } from "@angular/core";
import { Evento } from "../interfaces/evento.interface";

@Injectable({
  providedIn: 'root'
})
export class EventosData {

  public eventosData: Evento[] = [
    { nombreEvento: 'Conferencia Tech 2024', pathImagen: 'https://placehold.co/300x200/0d213a/FFFFFF?text=Tech+Conf' },
    { nombreEvento: 'Hackathon Global', pathImagen: 'https://placehold.co/300x200/1a1a1a/FFFFFF?text=Hackathon' },
    { nombreEvento: 'Angular Meetup', pathImagen: 'https://placehold.co/300x200/dd0031/FFFFFF?text=Angular' },
    { nombreEvento: 'DevOps Summit', pathImagen: 'https://placehold.co/300x200/00599c/FFFFFF?text=DevOps' },
    { nombreEvento: 'Web Design Workshop', pathImagen: 'https://placehold.co/300x200/f0db4f/000000?text=JS+Workshop' },
    { nombreEvento: 'Cloud Computing Expo', pathImagen: 'https://placehold.co/300x200/4285f4/FFFFFF?text=Cloud' },
  ];

}
