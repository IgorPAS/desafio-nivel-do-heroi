//Dados de entrada
let heros = [
    {nome:"Rurik", vitorias:150, derrotas:25},
    {nome:"Tordek", vitorias:75, derrotas:70},
    {nome:"Feanor", vitorias:120, derrotas:35},
    {nome:"Trall", vitorias:80, derrotas:20},
]
//função para saber o ranking do personagem
function getRanking(vitorias, derrotas){
    let scoreRanking = vitorias - derrotas;
    let ranking;
    
    //verificando ranking do herói
    if (scoreRanking <= 10) {
        ranking = "Ferro";
    }else if ( scoreRanking >= 11 && scoreRanking <= 20) {
        ranking = "Bronze"; 
    }else if ( scoreRanking >= 21 && scoreRanking <= 50) {
        ranking = "Prata";
    }else if ( scoreRanking >= 51 && scoreRanking <= 80) {
        ranking = "Ouro";
    }else if ( scoreRanking >= 81 && scoreRanking <= 90) {
        ranking = "Diamante";
    }else if ( scoreRanking >= 91 && scoreRanking <= 100) {
        ranking = "Lendário"; 
    }else if (  scoreRanking >= 101) {
        ranking = "Imortal"; 
    }  
    return ranking;
}

for (const [i,hero] of Object.entries(heros)){
   let ranking = getRanking(hero.vitorias, hero.derrotas);
   console.log("O Herói " + hero.nome + " tem de saldo de " + hero.vitorias +" vitórias e está no nível de " + ranking);   
}