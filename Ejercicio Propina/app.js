/*function one
----------------------------------
function cuadrado(number){              primera función normal donde se declara el argumento directamente
    return number*number;
}

----------------------------------

//function two
----------------------------------
function myFunc(theObject) {
    //theObject.make = 'Toyota';    en esta opción me escoge la marca y solo arroja toyota
    return theObject;
}

const mycar = {
make: "Honda",
model: "Accord",
year: 1998,
};

console.log(mycar.make); // está llamando directamenta el atributo de la variable
console.log(mycar.model);

myFunc(mycar);
console.log(mycar); // arroja todos atributos de la variable
console.log(mycar.year); //llama exacta el año de la variable 


--------------------------------
*/