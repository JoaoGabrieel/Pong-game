let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raio = diametroBolinha/ 2 ;
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

let xRaqueteDoOponente = 585;
let yRaqueteDoOponente = 150;
let velocidadeYOponente;

let colidiu = false

let meusPontos = 0;
let pontosDoOponente = 0;

let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;

function preload(){
  trilha= loadSound("trilha.mp3")
  raquetada= loadSound("raquetada.mp3")
  ponto= loadSound("ponto.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}



function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  verificaColisaoBolinha ();
  mostrarRaquete(xRaquete, yRaquete);
  movimenteMinhaRaquete ()
  //verificaColisaoRaquete ()
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteDoOponente,yRaqueteDoOponente);
  movimentaRaqueteOponete();
  verificaColisaoRaquete(xRaqueteDoOponente, yRaqueteDoOponente);
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();

  
}

function mostraBolinha (){
circle (xBolinha,yBolinha,diametroBolinha);

}

function movimentoBolinha (){
  xBolinha+=velocidadeXBolinha;
  yBolinha+=velocidadeYBolinha;
  
}

function verificaColisaoBolinha (){
    if (xBolinha + raio > width ||xBolinha - raio <0){
    velocidadeXBolinha *= -1;}
  
  if (yBolinha + raio > height || yBolinha - raio <0 ) {
    velocidadeYBolinha *= -1;}
}

function verificaColisaoRaquete (x,y){
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
  velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function mostrarRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura)
  
}

function movimenteMinhaRaquete (){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -=10;
  }
    if (keyIsDown(DOWN_ARROW)) {
    yRaquete +=10;
  }
}


function movimentaRaqueteOponete(){
  velocidadeYOponente = yBolinha -yRaqueteDoOponente-raqueteComprimento /2-30;
  yRaqueteDoOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()
  
    //if (keyIsDown(87)){
       // yRaqueteDoOponente -= 10;
    //}
   // if (keyIsDown(83)){
      //  yRaqueteDoOponente += 10;
//}
  
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    XBolinha = 23
    }
}
 
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
      ponto.play();
    }
}



