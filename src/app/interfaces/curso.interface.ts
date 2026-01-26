export interface Curso {
     nombreCurso: string;
     pathIcono: string;
     estado: 'Certificado' | 'En Curso';
     enlaceCertificacion?: string;
}