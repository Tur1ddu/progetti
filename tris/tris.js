// pulsanti per la scelta giocatore
function scelta(playerChoise){
    let sceltaGiocatore = document.getElementById("sceltaGiocatore");
    giocatore1 = playerChoise;
    if(playerChoise === "X"){
        giocatore2 = "O";
        sceltaGiocatore.remove();
    }else{
        giocatore2 = "X";  
        sceltaGiocatore.remove();
    }
    console.log(giocatore1,giocatore2);

}
//identificazione giocatore quando viene inserito X/O e blocco per la rovraiscrizione della casella piena
function casella(numero){
    let casella1 = document.getElementById(numero);
    if (casella1.innerHTML !== ' '){
        alert("CHI CAZZO FAI?");
    }else{
        if ( buleana === true ){
            casella1.innerHTML = giocatore1;
            buleana = false;
        }else{
            casella1.innerHTML = giocatore2;
            buleana = true;
        }
        checkvittoria();
    }
}

function reset(){
    /*---SCELTA GIOCATORE---*/
    let sceltaGiocatore2 = document.getElementById("sceltaGiocatore2");
    let sceltaGiocatore = document.createElement("div");
    sceltaGiocatore.setAttribute('id','sceltaGiocatore');
    /*---DIV---*/
    let titoloH2 = document.createElement("h2");
    titoloH2.textContent = "GIOCATORE 1 COSA SCHEGLI?";
    /*---BOTTONE X---*/
    let bottoneX = document.createElement("button");
    bottoneX.setAttribute("onclick","scelta('X')");
    bottoneX.textContent = "X";
    /*---BOTTONE o---*/
    let bottoneO = document.createElement("button");
    bottoneO.setAttribute("onclick","scelta('O')");
    bottoneO.textContent = "O";
    /*---ALL UPPEND CHILD---*/
    sceltaGiocatore2.appendChild(sceltaGiocatore);
    sceltaGiocatore.appendChild(titoloH2);
    sceltaGiocatore.appendChild(bottoneX);
    sceltaGiocatore.appendChild(bottoneO);
    /*---VAR GLOBALI---*/
    giocatore1 = "";
    giocatore2 = "";
    buleana = true;
    let bottoni = buttonArrey()
    for(let i = 0; i < bottoni.length; i++){
        bottoni[i].innerHTML = ' ';
        bottoni[i].removeAttribute('disabled');
    }

}
// per identificare chi vince
function checkvittoria(){
    playercasella(giocatore1)
    playercasella(giocatore2)
    
    
}


function playercasella(giocatore){ /* function per vedere le vittorie dei giocatori*/ 
 
    let countBottoni = 0;
    let h2 = document.getElementById("h2");
    let h3 = document.getElementById("h3");
    let bottoni = buttonArrey();
    /* utilizzare l'indice dell'arrey e  */
    if(bottoni[0].innerHTML === giocatore && bottoni[1].innerHTML === giocatore && bottoni[2].innerHTML === giocatore ){  /* caselle verticali */ 
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[3].innerHTML === giocatore && bottoni[4].innerHTML === giocatore && bottoni[5].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[6].innerHTML === giocatore && bottoni[7].innerHTML === giocatore && bottoni[8].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[0].innerHTML === giocatore && bottoni[3].innerHTML === giocatore && bottoni[6].innerHTML === giocatore){  /* caselle orizontali */
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[1].innerHTML === giocatore && bottoni[4].innerHTML === giocatore && bottoni[7].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[2].innerHTML === giocatore && bottoni[5].innerHTML === giocatore && bottoni[8].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[0].innerHTML === giocatore && bottoni[4].innerHTML === giocatore && bottoni[8].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }else if(bottoni[2].innerHTML === giocatore && bottoni[4].innerHTML === giocatore && bottoni[6].innerHTML === giocatore){
        h2.textContent = "IL VINCITORE E' " + giocatore;
        h3.textContent = "TURNO " + count++;
        afterVittoria()
    }
    //per pareggio
    for(let i = 0; i < bottoni.length; i++){
        if (bottoni[i].innerHTML !== ' '){
            countBottoni++;
        }
    }

    if (countBottoni === 9){
        h2.textContent = pareggio;
        count++
    }
}
//per i bottoni 
function buttonArrey(){
    let casella1 = document.getElementById("1");
    let casella2 = document.getElementById("2");
    let casella3 = document.getElementById("3");
    let casella4 = document.getElementById("4");
    let casella5 = document.getElementById("5");
    let casella6 = document.getElementById("6");
    let casella7 = document.getElementById("7");
    let casella8 = document.getElementById("8");
    let casella9 = document.getElementById("9");
    let bottoni = [casella1 ,casella2, casella3, casella4, casella5, casella6, casella7, casella8, casella9];
    return bottoni;
}
//disattivazione dei pulsanti dopo la vittoria
function afterVittoria(){
    let bottoni = buttonArrey();
    for(let i = 0; i < bottoni.length; i++){
        bottoni[i].setAttribute('disabled','true');
    }
}

//variabili globali
let giocatore1 = "";
let giocatore2 = "";
let pareggio = "PAREGGIO";
let buleana = true;
let count = 0;