import { Injectable } from "@angular/core";
import { Curso } from "../interfaces/curso.interface";

@Injectable({
  providedIn: 'root'
})
export class CursosData {

  public cursosData: Curso[] = [
    {
      nombreCurso: 'AWS Certified Cloud Practitioner',
      pathIcono: 'assets/badges/aws-cp.png',
      estado: 'En Curso'
    },
    {
      nombreCurso: 'Angular: De Cero a Experto',
      pathIcono: 'assets/badges/angular-badge.png',
      estado: 'Certificado'
    },
    {
      nombreCurso: 'Arquitectura de Microservicios con .NET',
      pathIcono: 'assets/badges/dotnet-badge.png',
      estado: 'Certificado'
    }
  ];

}
