import { LinkProyecto } from "./link-proyecto.interface";
import { TecnologiaProyecto } from "./tecnologia-proyecto.interface";

export interface Proyecto {
     imagenPreview: string;
     nombreProyecto: string;
     descripcionProyecto: string;
     links: LinkProyecto[];
     tecnologias: TecnologiaProyecto[];
}