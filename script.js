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

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exbirOpcoes();
}
function exbirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var nome = document.getElementById('nomeCarta');
    var imagem=document.getElementById('imagemCarta');
    var opcoesTexto = '';
    for (var atributo in cartaUsuario.atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'>` + atributo
    }
    imagem.innerHTML=`<img src="${cartaUsuario.img}">`
    nome.innerHTML=`Sua carta é a ${cartaUsuario.nome}`
    opcoes.innerHTML = opcoesTexto
}
function atributoSelecionado() {
    var selecao = document.getElementsByName('atributo')
    for (let i = 0; i < selecao.length; i++) {
        if (selecao[i].checked) {
            return selecao[i].value
        }
    }
}
function jogar() {
    var selecionado=atributoSelecionado();
    var resultado=document.getElementById('resultado')
    if (cartaUsuario.atributos[selecionado]>cartaMaquina.atributos[selecionado]) {
        resultado.innerHTML=`Você ganhou. O poder do seu atributo foi ${cartaUsuario.atributos[selecionado]} e do seu oponente foi ${cartaMaquina.atributos[selecionado]}`
    }
    else if (cartaUsuario.atributos[selecionado]==cartaMaquina.atributos[selecionado]) {
        resultado.innerHTML=`Você empatou. O poder do seu atributo foi ${cartaUsuario.atributos[selecionado]}`
    }
    else{
        resultado.innerHTML=`Você perdeu. O poder do seu atributo foi ${cartaUsuario.atributos[selecionado]} e do seu oponente foi ${cartaMaquina.atributos[selecionado]}`
    }
}

