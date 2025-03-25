import { Status } from "../Enums/Status.enum";

export interface ISala {
    Id?: number;
    Descricao: string;
    Status : Status;
}