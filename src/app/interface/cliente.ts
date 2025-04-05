export interface Cliente {
    id?: number,
    nome_usuario: string,
    email: string,
    senha_hash: string,
    token: string;
}