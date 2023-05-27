let string ='string'

function exemplo () {
    console.log("função de exemplo")
    console.log(arguments)         // Arguments é uma propriedade que só é valida para este tipo de função,
    console.log(arguments[0])      // ela retorna todos os valores que você colocar como parametro ao chamar a função, 
    console.log(arguments[1])      //mesmo que um parametro não tenha sido requirido. 
    console.log(arguments[2])
    console.log(arguments[3])
}
//exemplo('Javascript', 2, [1, 2, 3], string )

function soma () {
    let total = 0;
    for (let args of arguments){
        total += args;
    }
    return total
}
//console.log(soma(5, 3, 6))


// Passando um valor padrão para a variavel dentro do escopo do paramêtro
function multiplica (a , b = 4, c = 2) { 
    return a * b + c
}
//console.log(multiplica(2, 6))            // Código funciona perfeitamente com todos os dados devidamente atribuidos
//console.log(multiplica(2))               // Valor de b não enviado, assume o valor padrão atribuido dentro da variável b e c
//console.log(multiplica(2, undefined, 5)) // Passados apenas os valores da variável  a e c, pegando o valor padrão de b


//Object destructury
let objeto = {
    nome: "Tayane", 
    sobrenome: "Cristina",
    idade: 22,
}

function dados (obj) { //Jeito tradiional de acessar os valores dos objetos
    let frase = `${obj.nome} ${obj.sobrenome} tem ${obj.idade} anos de idade.`
    return frase;
}
//console.log(dados(objeto))

function dados2 ({nome, sobrenome, idade}) { //Pegando os valores via desestruturação do array
    let frase = `${nome} ${sobrenome} tem ${idade} anos de idade. `
    return frase;
}
//console.log(dados2(objeto))
//console.log(dados2({nome:"Márcia", sobrenome:"Figueiredo", idade:'55'}))


//Array destructury
let cores = ['verde', 'amerelo', 'azul', 'branco']

function bandeira ([cor1, cor2, cor3, cor4]) {
    let brasil = `As cores da bandeira do Brasil são ${cor1} ${cor2} ${cor3} e ${cor4}`
    return brasil;
}
//console.log(bandeira(cores))


function conta (operador, acumulador, ...numeros) { //rest operator
    for (let numero of numeros){
        if (operador === '+') acumulador += numero; 
        if (operador === '-') acumulador -= numero; 
        if (operador === '*') acumulador *= numero; 
        if (operador === '/') acumulador /= numero; 
    }
    return acumulador;
}
console.log(conta('*' , 2, 10, 20, 30, 40 ,50 ))




