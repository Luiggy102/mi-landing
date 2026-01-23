import { AcercaDeMi } from "./acerca-de-mi.interface";
import { CategoriaHabilidad } from "./categoria-habilidad.interface";
import { Curso } from "./curso.interface";
import { Evento } from "./evento.interface";
import { Experiencia } from "./experiencia.interface";
import { Proyecto } from "./proyecto.interface";

export interface PortfolioData {
  ABOUT_ME: AcercaDeMi;
  EXPERIENCE: { lista: Experiencia[] };
  SKILLS: { lista: CategoriaHabilidad[] };
  PROJECTS: { lista: Proyecto[] };
  COURSES: { lista: Curso[] };
  EVENTS: { lista: Evento[] };
}