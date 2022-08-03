// é recomendado na documentação sempre que puder utilizar interfaces ao invés de types

interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: "caio",
        email: "caio@gmail.com"
    }
}
function setUser(usuario: Usuario){
    //,,,
}