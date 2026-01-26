import { Injectable } from "@angular/core";
import { Evento } from "../interfaces/evento.interface";

@Injectable({
  providedIn: 'root'
})
export class EventosData {

  public eventosData: Evento[] = [
    { nombreEvento: 'Hacktober Fest 2024', pathImagen: 'assets/img/hactober2024.webp' },
    { nombreEvento: 'Google Dev Fest 2025', pathImagen: 'assets/img/googledevfest2025.webp' },
    { nombreEvento: 'Festival Latinoamericano de Instalación de Software Libre 2025', pathImagen: 'assets/img/flisol2025.webp' },
    { nombreEvento: 'Polkadot Web3 Meetup 2025', pathImagen: 'assets/img/polkadotmeetup2025.webp' },
  ];

}
