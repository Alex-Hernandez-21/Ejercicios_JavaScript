// nombrar variables peso y altura

let weight = prompt('Por favor digite su peso en kilogramos');

let height =prompt('Ahora digite su altura por favor en metros');

//document para mostrar los datos en pantalla

document.write(`Señor usuario su peso actual es: ${weight} kilogramos <br>`);

document.write(`Su altura es la siguiente ${height} metros <br>`);

//almacenar la altura al cuadrado

const heightForTwo =(height**2);   //variable que almacena la altura al cuadrado

let imc = (weight/heightForTwo); 

document.write(`Su IMC es de ${imc}`)


