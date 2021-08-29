import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nome: string
    public senha: string
    public usuario: string
    public postagem: Postagem[] // [] significa que um usuário pode ter várias postagens, pois o tipo de relacionamento é ManyToOne, por isso os colchetes indicam o array
    public foto: string
    public tipo: string
    public dataNascimento: Date
}