import { Injectable } from "@angular/core";
import { Curso } from "../interfaces/curso.interface";

@Injectable({
  providedIn: 'root'
})
export class CursosData {

  public cursosData: Curso[] = [
    {
      nombreCurso: 'AWS Certified Cloud Practitioner',
      pathIcono: 'assets/img/cloudpractitioner.webp',
      estado: 'En Curso'
    },
    {
      nombreCurso: 'Curso de APIs con .NET',
      pathIcono: 'assets/img/diplomaapisnet.jpg',
      estado: 'Certificado'
    },
    {
      nombreCurso: 'Curso de PostgreSQL',
      pathIcono: 'assets/img/diplomapostgres.jpg',
      estado: 'Certificado'
    },
    {
      nombreCurso: 'Curso de Go Avanzado: Arquitectura de Eventos y CQRS',
      pathIcono: 'assets/img/diplomagoeventoscqrs.jpg',
      estado: 'Certificado'
    },
    {
      nombreCurso: 'Curso de Go Avanzado: Protobuffers y gRPC',
      pathIcono: 'assets/img/diplomagoprotobufgrpc.jpg',
      estado: 'Certificado'
    },
    {
      nombreCurso: 'Curso Profesional de Git y GitHub',
      pathIcono: 'assets/img/diplomagithub.jpg',
      estado: 'Certificado'
    },
  ];

}
