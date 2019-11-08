let objetos = [];
let vetorCores = [];
let formaAtualId = Math.floor(Math.random()*12);
let formaAnteriorId = -1;
let pontuacao = 0;
let acertos = 0;
let erros = 0;


/*===================================================================================================*/
/* FUNÇÃO QUE CRIA RANDOMICAMENTE AS CORES DOS OBJETOS GEOMÉTRICOS */

function criaCores(size = 12){

    let cores = [];
    for(let i = 0; i<size; i++){
        cores.push({red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)})
    }

    vetorCores = cores;

    populaPalco();
    
}

/*===================================================================================================*/
/* FUNÇÃO QUE CRIA AS FORMAS GEOMÉTRICAS NO PALCO */

function populaPalco(){

    let vetorObjetosQuadrados = [];
    let vetorObjetosTriangulo = [];
    let vetorObjetosCirculo = [];
    let vetorObjetosLosango = [];

    let idDivs = 0;


    vetorObjetosQuadrados[0] = vetorCores[0];
    vetorObjetosQuadrados[1] = vetorCores[1];
    vetorObjetosQuadrados[2] = vetorCores[2];

    vetorObjetosTriangulo[0] = vetorCores[3];
    vetorObjetosTriangulo[1] = vetorCores[4];
    vetorObjetosTriangulo[2] = vetorCores[5];

    vetorObjetosCirculo[0] = vetorCores[6];
    vetorObjetosCirculo[1] = vetorCores[7];
    vetorObjetosCirculo[2] = vetorCores[8];

    vetorObjetosLosango[0] = vetorCores[9];
    vetorObjetosLosango[1] = vetorCores[10];
    vetorObjetosLosango[2] = vetorCores[11];

    const tagsDosObjetosQuadrado = vetorObjetosQuadrados.map(obj => '<div class="quadrado" id="'+ idDivs++ +'" style="background-color: rgb('+obj.red+','+obj.green+','+obj.blue+')" onclick="selecionaForma('+ idDivs +')" ></div>');
    document.getElementById("palco1").innerHTML = tagsDosObjetosQuadrado.join('');

    const tagsDosObjetosTriangulo = vetorObjetosTriangulo.map(obj => '<div class="triangulo" id="'+ idDivs++ +'" style="border-bottom: solid 50px rgb('+obj.red+','+obj.green+','+obj.blue+')" onclick="selecionaForma('+ idDivs +')"></div>');
    document.getElementById("palco2").innerHTML = tagsDosObjetosTriangulo.join('');

    const tagsDosObjetosCirculo = vetorObjetosCirculo.map(obj => '<div class="circulo" id="'+ idDivs++ +'" style="background-color: rgb('+obj.red+','+obj.green+','+obj.blue+')" onclick="selecionaForma('+ idDivs +')"></div>');
    document.getElementById("palco3").innerHTML = tagsDosObjetosCirculo.join('');

    const tagsDosObjetosLosango = vetorObjetosLosango.map(obj => '<div class="losango" id="'+ idDivs++ +'" style="background-color: rgb('+obj.red+','+obj.green+','+obj.blue+')" onclick="selecionaForma('+ idDivs +')"></div>');
    document.getElementById("palco4").innerHTML = tagsDosObjetosLosango.join('');

	objetos.push(tagsDosObjetosQuadrado[0]);
    objetos.push(tagsDosObjetosQuadrado[1]);
    objetos.push(tagsDosObjetosQuadrado[2]);

    objetos.push(tagsDosObjetosTriangulo[0]);
    objetos.push(tagsDosObjetosTriangulo[1]);
    objetos.push(tagsDosObjetosTriangulo[2]);
	
    objetos.push(tagsDosObjetosCirculo[0]);
    objetos.push(tagsDosObjetosCirculo[1]);
    objetos.push(tagsDosObjetosCirculo[2]);

    objetos.push(tagsDosObjetosLosango[0]);
    objetos.push(tagsDosObjetosLosango[1]);
    objetos.push(tagsDosObjetosLosango[2]);

}


/*===================================================================================================*/
/* FUNÇÃO DO BOTÃO QUE MUDA A FORMA GEOMÉTRICA DO OBJETO */

function mudaForma(){
    do {
        formaAnteriorId = formaAtualId;
        formaAtualId = Math.floor(Math.random()*12);
    }while(formaAnteriorId == formaAtualId);

    document.getElementById("forma").innerHTML = objetos[formaAtualId];
}

/*===================================================================================================*/
/* FUNÇÃO QUE MOSTRA SE ESCOLHEU A FORMA GEOMÉTRICA IGUAL */

function selecionaForma(id){
    id--;
    if(formaAtualId == id){

        // INCREMENTA A PONTUAÇÃO E OS ACERTOS E MOSTRA O RESULTADO NA DIV DO HTML
        pontuacao += 5;
        acertos += 1;
        document.getElementById('pontos').innerHTML = pontuacao;


        alert('Acertou! Você ganhou 5 pontos! :)');
        mudaForma();
    }else{
        pontuacao -= 10;
        erros += 1;
        document.getElementById('pontos').innerHTML = pontuacao;
        alert('Errou! Você perdeu 10 pontos! :(');
    }
    
}