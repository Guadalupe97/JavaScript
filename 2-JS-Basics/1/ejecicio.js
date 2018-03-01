/*var john = 20;
var luis = 20;
var hugo = 20;
var john2 = 170;
var luis2= 170;
var hugo2 = 170;     ;


var a = john2 + (john * 5);

var b = luis2 + (luis * 5);

var c = hugo2 + (hugo * 5);


if(a > b && a > c){
    console.log('Gana John' + ' su puntuación es: ' + a);
}

else if (a < b && b > c){
    console.log('Gana Luis' + ' su puntuación es: ' + b);
}

else if( a < c && b < c){
    console.log('Gana Hugo' + ' su puntuación es:' + c);
}

else if(a == b && a > c){
    console.log('Empate entre John' + ' ' + a + ' ' + 'y Luis' + ' ' + b);
}
else if(a == c && a > b){
    console.log('Empate entre John' + ' ' + a + ' ' + 'y Hugo' + ' ' + c);
        }
else
    {
    console.log('Todos Ganan');
}
*/

//Ejercicio 2

    var años =[1990,1997,2005,2017];
    var vacio = [];
    
    for (i = 0; i < 4; i++){
        vacio[i] = 2018 - años[i];
    }

    for (i = 0; i < 4; i++){
        if (vacio[i] >=18){
            console.log('Su edad es ' + vacio[i] + ',' + ' es mayor de edad');
        }
        else{
            console.log('Su edad es ' + vacio[i] + ',' + ' es menor de edad');
        }
    }


