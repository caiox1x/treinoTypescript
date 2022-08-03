//boolean
const contaPaga: boolean = true;

//number
const idade: number = 22; // number serve pra qualquer tipo de numero, nn preciso usar int ou float
const avaliacao: number = 4.5;

//string
const nome: string = "Caio do Carmo";

//array
const idades: number[] = [22, 24, 30];
const idades2: Array<number> = [22, 23, 30]

//tuple
let jogadores: [string, string, string];
jogadores = ["Caio", "Vitor", "Thainá"];

//enum
enum StatusAprovacao{
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = [123, "Caio", true];
const retornoDaAPI2: any[] = [24, "Thainá", true];

//void
function printarNaTela(msg: string): void{
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//object
function criar(objecto: object){

}
criar({
    nome: "caio",
    idade: 22,
})

//never
function loopInfinito():never {
    while (true) { }
}

function error(msg: string): never {
    throw new Error(msg);
}

function falha() {
    return error("deu ruim");
}