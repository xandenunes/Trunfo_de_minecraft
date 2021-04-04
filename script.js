var tabuaMadeira = {
    nome: "Tabuas de madeira",
    atributos: {
        dureza: 2,
        resistenciaAExplosoes: 3,
        estetica: 3,
    },
    img:"tabuas.png"
}
var madeiraBruta = {
    nome: "madeira bruta",
    atributos: {
        dureza: 2,
        resistenciaAExplosoes: 2,
        estetica: 5,
    },
    img:"Madeira_de_Carvalho.png"
}
var lajeDoEnd = {
    nome: "lajes de tijolo do end",
    atributos: {
        dureza: 5,
        resistenciaAExplosoes: 9,
        estetica: 6,
    },
    img:"End_Stone.png"
}
var cartas = [madeiraBruta, tabuaMadeira, lajeDoEnd]
var cartaMaquina;
var cartaUsuario;
function sortearCarta() {
    let numCartas = cartas.length
    var numCartaMaquina = Math.floor(Math.random() * numCartas);
    var numCartaUsuario = Math.floor(Math.random() * numCartas);
    while (numCartaUsuario == numCartaMaquina) {
        numCartaUsuario = Math.floor(Math.random() * numCartas);
    }
    cartaMaquina = cartas[numCartaMaquina];
    cartaUsuario = cartas[numCartaUsuario];
    console.log(cartaMaquina);
    console.log(cartaUsuario);

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exbirOpcoes();
}
