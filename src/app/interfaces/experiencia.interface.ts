import { Actividad } from "./actividad.interface";

export interface Experiencia {
     nombreEmpresa: string;
     nombreCargo: string;
     mesInicio: string;
     anoInicio: number;
     mesFin: string;
     anoFin: number | null;
     actividadesRealizadas: Actividad[];
}