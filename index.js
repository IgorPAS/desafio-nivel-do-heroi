
//declarando variáveis
let hero_name = "Rurik";
let hero_xp = 10000;
let hero_lvl = "";

//verificando nível do herói
if (hero_xp <= 1000) {
    hero_lvl = "Ferro";
}else if ( hero_xp >= 1001 && hero_xp <= 2000) {
    hero_lvl = "Bronze"; 
}else if ( hero_xp >= 2001 && hero_xp <= 5000) {
    hero_lvl = "Prata";
}else if ( hero_xp >= 5001 && hero_xp <= 7000) {
    hero_lvl = "Ouro";
}else if ( hero_xp >= 7001 && hero_xp <= 8000) {
    hero_lvl = "Platina";
}else if ( hero_xp >= 8001 && hero_xp <= 9000) {
    hero_lvl = "Ascendente"; 
}else if (  hero_xp >= 9001 && hero_xp <= 10000) {
    hero_lvl = "Imortal"; 
}else if ( hero_xp >= 10001) {
    hero_lvl = "Radiante";
}  

//saida com nivel do herói
console.log("O Herói de nome " + hero_name + " está no nível de " + hero_lvl)