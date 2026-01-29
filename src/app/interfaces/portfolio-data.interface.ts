import { AcercaDeMi } from "./acerca-de-mi.interface";
import { CategoriaHabilidad } from "./categoria-habilidad.interface";
import { Curso } from "./curso.interface";
import { Evento } from "./evento.interface";
import { Experiencia } from "./experiencia.interface";
import { Proyecto } from "./proyecto.interface";

export interface PortfolioData {
  ABOUT_ME: AcercaDeMi;
  EXPERIENCE: { tituloSeccion?: string, lista: Experiencia[] };
  SKILLS: { tituloSeccion?: string, lista: CategoriaHabilidad[] };
  PROJECTS: { tituloSeccion?: string, lista: Proyecto[] };
  COURSES: { tituloSeccion?: string, lista: Curso[] };
  EVENTS: { tituloSeccion?: string, lista: Evento[] };
}