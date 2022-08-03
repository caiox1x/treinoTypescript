class Data{
    constructor(public dia: number,public mes: number, public ano: number = 1970){ //o typescript me permite deixar valores default

    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1, 1)