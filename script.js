

// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// CREO COCLO PER STAMPARE TUTTI I NUMERI DA 1 A 100

for ( var i = 1; i <= 100; i++ ){
    var per3 = false;

    var per5 = false;


    // CALCOLO SE IL NUMERO è DIVISIBILE PER 3
    if (i %3 == 0){

        per3 = true;
    }
    // CALCOLO SE IL NUMERO è DIVISIBILE PER 5

    if (i %5 == 0){

        per5 = true;
    }

    if(( per3 ) & ( per5 )) {
        console.log('Fizz Buzz');
    }else if ( per3 ){
        console.log('Fizz');
    }else if ( per5 ){
        console.log('Buzz');
    }else{
        console.log(i);
    }

}