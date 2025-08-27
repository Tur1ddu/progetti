function tasto(n){
    let inp = document.getElementById("inp");
    inp.value = inp.value + n;
    
}

function operator(key){
    let oper = document.getElementById("oper");
    let numer = document.getElementById("numer");
    let inp = document.getElementById("inp");
    oper.value = key;
    numer.value = inp.value;
    inp.value = "";
}

function uguale(){
    let oper = document.getElementById("oper");
    let numer = document.getElementById("numer");
    let inp = document.getElementById("inp")
    if (oper.value === "-"){
        inp.value = numer.value - inp.value;
    }else if (oper.value === "+"){
        inp.value = numer.value + inp.value; /*il + è sminchiato perchè unisce i numeri ad esempio fa 9 + 2 = 92 al posto di fare 11*/
    }else if (oper.value === "*"){
        inp.value = numer.value * inp.value;
    }else if (oper.value === "/") {
        inp.value = numer.value / inp.value;
    }
}

function reset(){
    let oper = document.getElementById("oper");
    let numer = document.getElementById("numer");
    let inp = document.getElementById("inp");
    inp.value = "";           
    oper.value = "";          
    numer.value = "";        
}