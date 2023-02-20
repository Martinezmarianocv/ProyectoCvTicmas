//MENU LATERAL
//var menu_visible = false;
//let menu = document.getElementById("nav");
//function mostrarOcultarMenu(){
    //if(menu_visible==false){
        //menu.style.display = "block";
      //  menu_visible = true;
    //}
    //else{
      //  menu.style.display ="none";
    //    menu_visible = false;
  //  }
//}

//OCULTAR MENU AUTOMATICO
//let links = document.querySelectorAll("nav a");
//for(var x = 0; x <links.length;x++){
 //   links[x].onclick = function(){
   //     menu.style.display = "none";
     //   menu_visible = false;
    //}
//}

//OCULTAR/MOSTRAR MENU
let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//CREACION DE BARRAS POR ID
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//SELECCION DE BARRAS
let html =document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);
let bootstrap =document.getElementById("boostrap");
crearBarra(bootstrap);
let react =document.getElementById("react");
crearBarra(react);
let php =document.getElementById("php");
crearBarra(php);
let mysql =document.getElementById("mysql");
crearBarra(mysql);
let mongodb =document.getElementById("mongodb");
crearBarra(mongodb);
let nodejs =document.getElementById("nodejs");
crearBarra(nodejs);

//CANTIDAD DE BARRAS AL INICIO
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1];
let entro = false;

//ANIMACION DE LAS BARRAS
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 16, 1, intervalJavascript);
        },100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 15, 2, intervalBootstrap);
        },100);
        const intervalMongoDB = setInterval(function(){
            pintarBarra(mongodb, 13, 3, intervalMongoDB);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 13, 4, intervalPhp);
        },100);
        const intervalReact = setInterval(function(){
            pintarBarra(react, 14, 5, intervalReact);
        },100);
        const intervalMySQL = setInterval(function(){
            pintarBarra(mysql, 12, 6, intervalMySQL);
        },100);
        const intervalNodeJs = setInterval(function(){
            pintarBarra(nodejs, 14, 7, intervalNodeJs);
        },100);
    }
}

//LLENAMOS LA BARRA CON LA CANTIDAD INDICADA
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#a52a2a";
    }else{
        clearInterval(interval)
    }
}

//DETECTAR SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA
window.onscroll = function(){
    efectoHabilidades();
}