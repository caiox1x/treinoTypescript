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

//Union Types, me deixa usar mais de um tipo para uma função

function exibirNota (nota: number | string) {
     console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: "Caio",
    sobrenome: "Silva",
    dataNascimento: new Date(),
},{
    nome: "Thainá",
    sobrenome: "Agostinho",
    dataNascimento: new Date(), 
}];
function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log(`Nome do funcionario: ${funcionario.nome}`);       
    }
} 


let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;    //O operador "?" serve paar tornar o campo opcional com o "null"
}

const contato: Contato = {
    nome: "Caio",
    telefone1: "12345678",
}

//Type Assertion
const minhaIdade: any= 23;
(minhaIdade as number).toString(); //o as serve para deixar claro o tipo que estou me referindo 

//const input = <HTMLInputElement>document.getElementById("numero1"); outra forma de fazer 
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

