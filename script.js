var tabuaMadeira = {
    nome: "Tabuas de madeira",
    atributos: {
        dureza: 2,
        resistenciaAExplosoes: 3,
        estetica: 3,
    },
    img: "tabuas.png"
}
var madeiraBruta = {
    nome: "madeira bruta",
    atributos: {
        dureza: 2,
        resistenciaAExplosoes: 2,
        estetica: 5,
    },
    img: "Madeira_de_Carvalho.png"
}
var lajeDoEnd = {
    nome: "lajes de tijolo do end",
    atributos: {
        dureza: 5,
        resistenciaAExplosoes: 9,
        estetica: 6,
    },
    img: "End_Stone.png"
}
var Obsidiana = {
    nome: "Obsidiana",
    atributos: {
        dureza: 50,
        resistenciaAExplosoes: 10,
        estetica: 1,
    },
    img: "Obsidiana.png"
}
var Vidro = {
    nome: "Vidro",
    atributos: {
        dureza: 0.3,
        resistenciaAExplosoes: 0.3,
        estetica: 10,
    },
    img: "vidro.png"
}
var TijolosDoNether = {
    nome: "Tijolos do Nether",
    atributos: {
        dureza: 2,
        resistenciaAExplosoes: 6,
        estetica: 7,
    },
    img: "Tijolos do Nether.png"
}
var bedrock = {
    nome: "bedrock",
    atributos: {
        dureza: 3600000,
        resistenciaAExplosoes: 18000000,
        estetica: 1000000,
    },
    img: "Bedrock.png"
}
var cartasMaquina = [tabuaMadeira,madeiraBruta,lajeDoEnd,Obsidiana,Vidro,TijolosDoNether,bedrock]
var cartasUsuario = [tabuaMadeira,madeiraBruta,lajeDoEnd,Obsidiana,Vidro,TijolosDoNether,bedrock]
var cartaMaquina;
var cartaUsuario;
var resultado = document.getElementById('resultado');
var pontosUsuario=0;
var pontosMaquina=0;
var numMAXCartasM = cartasMaquina.length;
var numMAXCartasU = cartasUsuario.length;
var opcoes = document.getElementById('opcoes');
var nome = document.getElementById('nomeCarta');
var imagem = document.getElementById('imagemCarta');
atualizaPlacar()
function sortearCarta() {
    numMAXCartasM = cartasMaquina.length
    numMAXCartasU = cartasUsuario.length
    resultado.innerHTML=''
    var numCartaMaquina = Math.floor(Math.random() * numMAXCartasM);
    var numCartaUsuario = Math.floor(Math.random() * numMAXCartasU);
    var cont = 0;
    while (cartasUsuario[numCartaUsuario] == cartasMaquina[numCartaMaquina]) {
        if (cont==10) {
            if (cartasUsuario[numCartaUsuario]!=bedrock) {
                cartasUsuario.push(bedrock)
            }
            else{
                cartasUsuario.push(Vidro)
                numCartaUsuario=1;
            }
            
        }
        else{
            numCartaUsuario = Math.floor(Math.random() * numMAXCartasU);
            console.log(cont)
            cont++;
        }
        
    }
    cartaMaquina = cartasMaquina[numCartaMaquina];
    cartaUsuario = cartasUsuario[numCartaUsuario];
    cartasMaquina.splice(numCartaMaquina, 1);
    cartasUsuario.splice(numCartaUsuario, 1);
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exbirOpcoes();
    if (cartaUsuario == bedrock || cartaMaquina == bedrock) {
        venceu()
    }
}
function exbirOpcoes() {
    opcoes = document.getElementById('opcoes');
    nome = document.getElementById('nomeCarta');
    imagem = document.getElementById('imagemCarta');
    var opcoesTexto = '';
    for (var atributo in cartaUsuario.atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ${atributo}:${cartaUsuario.atributos[atributo]} <br>`
    }
    imagem.innerHTML = `<img src="${cartaUsuario.img}">`
    nome.innerHTML = `Sua carta é a ${cartaUsuario.nome}`
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
    var selecionado = atributoSelecionado();
    if (cartaUsuario.atributos[selecionado] > cartaMaquina.atributos[selecionado]) {
        resultado.innerHTML = `Você ganhou do seu oponente.Com ele usando ${cartaMaquina.nome} com ${cartaMaquina.atributos[selecionado]} de ${selecionado}`
        pontosUsuario++
    }
    else if (cartaUsuario.atributos[selecionado] == cartaMaquina.atributos[selecionado]) {
        resultado.innerHTML = `Você empatou o poder do seu atributo com seu oponente usando ${cartaMaquina.nome}`
    }
    else {
        resultado.innerHTML = `Você perdeu para o seu oponente.Com ele usando ${cartaMaquina.nome} com ${cartaMaquina.atributos[selecionado]} de ${selecionado}`
        pontosMaquina++
    }
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    atualizaPlacar()
    fimDaRodada()
}
function venceu() {
    if (cartaUsuario == bedrock) {
        resultado.innerHTML = `Você ganhou do seu oponente.Com ele usando ${cartaMaquina.nome}`
        pontosUsuario++
    }
    else {
        resultado.innerHTML = `Você perdeu para o seu oponente.Com ele usando ${cartaMaquina.nome}`
        pontosMaquina++
    }
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    atualizaPlacar()
    fimDaRodada()
}
function atualizaPlacar() {
    var divPlacar=document.getElementById('placar')
    var html=`Jogador ${pontosUsuario} | ${pontosMaquina} Oponente`
    divPlacar.innerHTML=html
    atualizaCartas()
}
function atualizaCartas() {
    var divCartas=document.getElementById('quantidade-cartas')
    var htmlCartas=`Cada jogador tem ${cartasUsuario.length} cartas sobrando`
    divCartas.innerHTML=htmlCartas
}
function proximaRodada() {
    pontosUsuario=0;
    pontosMaquina=0;
    cartasMaquina = [madeiraBruta, tabuaMadeira, lajeDoEnd, Vidro, Obsidiana, TijolosDoNether, bedrock]
    cartasUsuario = [madeiraBruta, tabuaMadeira, lajeDoEnd, Vidro, Obsidiana, TijolosDoNether, bedrock]
    imagem.innerHTML = ''
    nome.innerHTML = ''
    opcoes.innerHTML = ''
    resultado.innerHTML=''
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true
    atualizaPlacar()
}

function fimDaRodada() {
    if (cartasMaquina.length==0 || cartasUsuario.length==0) {
        document.getElementById("btnSortear").disabled = true
        document.getElementById("btnJogar").disabled = true
        document.getElementById("btnProximaRodada").disabled = false
    }
    
}
