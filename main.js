let containerElement = document.getElementById("container");

for ( let i = 1; i <= 100; i++) {
    console.log( "ciclo:" + i);

    if ( i%3===0 && i%5===0) {
        containerElement.innerHTML +="<div class='box rosso'>fizzbuzz</div>";
        //stampa fizzbuzz
    }

     else if(i%3===0) {
        //qui stampa fizz//
        containerElement.innerHTML +="<div class='box verde'> fizz </div>";
    }

     else if ( i%5===0) {
        containerElement.innerHTML +="<div class='box giallo'> buzz </div>";
        //stampa buzz//
    }
    
    else {
        containerElement.innerHTML +="<div class='box'>"+i+"</div>";
        //stampa fizzbuzz//

    }
}
