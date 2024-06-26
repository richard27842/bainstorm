const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você é um artista de desenhos e após completar diversos cursos técnicos envolvendo artes visuais e finalizar a faculdade, tu tens 25 anos e ao ver que  a IA pode criar desenhos e outros tipos de artes você fica preocupado.",
        alternativas: [
            {
                texto: "concrteza não vou perder minhas chances de emprego",
                afirmacao: "após anos sem procurar saber sobre a ia "
            },
            {
                texto: "o meu futuro pode estar em risco",
                afirmacao: " a pós você aprender sobre a IA"
            }
        ]
    },
    {
        enunciado: "em um dia calmo aparece um video explicando sobre o funcionamento de uma IA",
        alternativas: [
            {
                texto: "meu emprego está garantido as pessoas não vão trocar pessoas por robos",
                afirmacao: "você perdeu sua vontade de fazer um simples desenho."
            },
            {
                texto: "ver o video",
                afirmacao: "você aprendeu a usala de uma forma eficiente eventualmente"
            }
        ]
    },
    {
        enunciado: "ao conversar com o seu grupo de amigos eles estão conversando sobre IA e como ela poderia afetar suas vidas qual é sua posição?",
        alternativas: [
            {
                texto: "ias não são tão importantes quanto um trabalho de uma pessoa que possui diversos diplomas",
                afirmacao: "e depois de um tempo você se sente miseravel"
            },
            {
                texto: "ias podem representar um grande avanço técnologico mas podem oferecer um certo risco mas se aprendemos sobre ela poderiamos usa-la como vantagem ",
                afirmacao: "logo conseguiu emergir financialmente e mentalmente e "
            }
        ]
    },
    {
        
        
        enunciado: "em 20 anos a ia poderá mudar completamente o mundo e as pessoas diz especialista, ao escultar isso o que há em sua mente",
    alternativas: [
        {
                texto: "isso é impossível mesmo que ela seja um pouco mais avançada não significa que iria mudar tudo!!! ainda possuo diversos cursos técnicos!!1!1!!",
                afirmacao: "vocÊ se sente incapaz de fazer qualquer coisa a não ser..."
            },
            {
                texto: "comentar com outras pessoas especializadas na área",
                afirmacao: ", você consegue dominar IA"
            }
        ]
    },
    {
        enunciado: "você checa que todos trabalhos que exigiam curos e faculdade perdem seu valor o que fazer",
        alternativas: [
            {
                texto: "procurar uma pós graduação",
                afirmacao: "você começa a pensar como seria um mundo se você tivesse tomado caminhos diferentes"
            },
            {
                texto: "se especializar na criação de IA",
                afirmacao: "  mas depois de todas dificuldades tu consegue aproveitar sua vida, deixando um legado após sua morte "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();