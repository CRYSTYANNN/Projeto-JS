//Criando uma TimeLine do GSAP com animacçoes com scroll

var tl = gsap.timeline({               // VAR= variavel
    scrollTrigger:{                    // scrolltriger= Nome da animação  
        trigger: '.two',               // .two = define onde começara a animação, puxando a tag da pagina desejada nesse site é a ".two"
        start: '0% 95%',               // start= define o inicio da animação: '0% 95%'= Quando aparecer 95% da segunda pagina, começara a animação de scroll
        end: '70% 50%',                // Define onde vai acabar a animação, '70% 50%' qunado chegar em 50% da segunda tela acaba a animação
        scrub: true,                   // Scrub: True= Sincroniza a nimação com o movimento de rolagem (scroll)
        //markers: true,               // DEPURAÇÃ 
    },
});

tl.to(
    '#fanta',
    {
        top:'120%',                     // Move o ID selecionado 120% do top
        left: '0%',
    },
    'orange'
)

tl.to(
    '#laranja-cortada',
    {
        top:'160%',                     // Move o ID selecionado 160% do top
        left: '23%',                    // Move o elemento ID 23% para a esquerda
    },
    'orange'
)
tl.to(
    '#laranja',
    {
        width: '15%',                   // reduz a largura do elemento ID em 15%
        top: '160%',                    // Move o ID selecionado 160% do top
        right: '10%',                   // Move o ID selecionado 10% para a direita
    },
    'orange'
)
tl.to(
    '#folha',
    {
        top:'110%',                     // Move o ID selecionado 160% do top
        rotate: '530deg',               // rotaciona o elemnto ID em 130 deg= (GRAUS)
        left: '70%',
    },
    'orange'
)

tl.to(
    '#folha2',
    {
        top:'110%',                     // Move o ID selecionado 160% do top
        rotate: '530deg',               // rotaciona o elemnto ID em 130 deg= (GRAUS)
        left: '0%',                     // Move o elemento ID 0% para a esquerda
    },
    'orange'
)

// Segunda timeline

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})


// Definindo as inimações da tl2
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',            // Inicia a timeline com a classe selecionada rotacionando -90 deg
        left: '-100%',               // (-100%) Inicia com o elemento fora da tela, a esquerda
        top: '110%',                 // Inicia com o elemento ligeiramente abaixo da 110% do topo
    },
    'ca'
)

tl2.from(
    '#cocacola',                     // Para puxar um ID utilizamos o #
    {
        rotate: '-90deg',            // Inicia a timeline com a classe selecionada rotacionando -90 deg
        left: '-100%',               // (-100%) Inicia com o elemento fora da tela, a esquerda
        top: '110%',                 // Inicia com o elemento ligeiramente abaixo da 110% do topo
    },
    'ca'
)

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',            // Inicia a timeline com a classe selecionada rotacionando -90 deg
        left: '100%',               // (-100%) Inicia com o elemento fora da tela, a esquerda
        top: '110%',                 // Inicia com o elemento ligeiramente abaixo da 110% do topo
    },
    'ca'
)


tl2.from(
    '#pepsi',
    {
        rotate: '90deg',            // Inicia a timeline com a classe selecionada rotacionando -90 deg
        left: '100%',               // (-100%) Inicia com o elemento fora da tela, a direita
        top: '110%',                 // Inicia com o elemento ligeiramente abaixo da 110% do topo
    },
    'ca'
)

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',            
        left: '42%',               
        top: '204%',                
    },
    'ca'
)

tl2.to(
    '#fanta',
    {
        width: '35%',            
        left: '33%',               
        top: '210%',                
    },
    'ca'
)

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
});