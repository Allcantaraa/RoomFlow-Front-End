import { Status } from "../Enums/Status.enum";
import { ISala } from "../Interfaces/Sala";


export const SalaList: ISala[] = [
    {
        id: 1,
        descricao: 'sala 1',
        status: Status.Disponivel
    },
    {
        id: 2,
        descricao: 'sala 2',
        status: Status.Indisponivel
    },
    {
        id: 3,
        descricao: 'sala 3',
        status: Status.Disponivel
    },
    {
        id: 4,
        descricao: 'sala 4',
        status: Status.Reservada
    },
    {
        id: 5,
        descricao: 'sala 5',
        status: Status.Disponivel
    },
    {
        id: 6,
        descricao: 'sala 6',
        status: Status.Disponivel
    },
    {
        id: 7,
        descricao: 'sala 7',
        status: Status.Reservada
    },
    {
        id: 8,
        descricao: 'sala 8',
        status: Status.Indisponivel
    },
    {
        id: 9,
        descricao: 'sala 9',
        status: Status.Indisponivel
    },
];