import { Perfil } from "../Enums/Perfil.enum";

export interface IUsuario {
    Id?: number;
    Nome: string;
    Login: string;
    Senha: string;
    Perfil: Perfil;
}