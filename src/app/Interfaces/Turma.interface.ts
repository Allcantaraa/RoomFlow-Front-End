import { ICurso } from "./Curso.interface";

export interface ITurma {
    Id?: number;
    Descricao: string;
    Curso: ICurso;
}