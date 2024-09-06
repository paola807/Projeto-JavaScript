let campoIdade;
let campoFantasia;
let campAventura
function setup() {
  createCanvas(800, 400);
} creanteElement("h2", "recomendador de filmes");
createSpan("sua idade");
campoIdade=createInput("5");
campoFantasia=createCheckbox("gosta de fantasia?");
campoAventura=createCheckbox("gosta de aventura");
                            

function draw() {
  background(220);
  let idade=campoIdade.value();
  let gostaDeFantasia=campoFantasia.checked();
  let gostaDeAventura=campoAventura.checked();
  let recomendacao=geraRecomendacao(idade,gostaDeFantasia,gostaDeAventura);
  
  fill(color(76,0,115));
  textALign(CENTER,CENTER);
  textSize(38);
  text(recomendacao,width/2,height/2)
}
function geraRecomedacao(idade,gostaDeFantasia ,gostaDeAventura)   {
  if(idade>=10) {
    if(iddade>=14)    
       return"O menino que descobriu o vento";
  }else{
        if(idade>=12){
          if (gostaDeFantasia || gostaDeAventura)
            return "Homem aranha :no aranhaverso";
        }else{
      return "ladrões de bicicleta";
        }
  } else{
        if(gostaDeFantasia){
        return"As aventuras de pi";
      }else{
        return "Depois da chuva";
      }
  }else(
    if (gostaDeFantasia){
    return "A viagem de chihiro";
  }else{
    return "O feitiço do tempo";
  }
}
}


    
      }
