
/*const age = prompt('Por favor ingrese su edad: ');
const cityFront = prompt('Vives en un municipio fronterizo al norte del país: ');

const ageAdult = age >= 18;
const yesCityFront = cityFront.toLocaleLowerCase() == 'si';

const gender = prompt('Eres hombre o mujer: ')
const womenGender = gender.toLocaleLowerCase() == 'mujer';
const isPregnant = prompt('¿Estas emabarazada? ');
const yesIsPregnant =isPregnant.toLocaleLowerCase() == 'si';
const weeksPregnant = prompt('Cuantas semanas de embarazo tienes?');
const yesWeeksPregnant = weeksPregnant > 9;

const thisYears = prompt ('Cumples 30 años o más en este año?...');
const yesThisYears = thisYears.toLocaleLowerCase() == 'si';


if (ageAdult && yesCityFront){
    document.write('Te puedes vacunar !')
}else if (yesIsPregnant && yesWeeksPregnant){
    document.write('Te puedes vacunar !')
}else if(yesThisYears){
    document.write('Te puedes vacunar !')
}else {
    document.write('No te puedes vacunar... jeje')
}*/

const age = prompt('Por favor ingrese su edad: ');
const cityFront = prompt('Vives en un municipio fronterizo al norte del país: ');

const ageAdult = age >= 18;
const yesCityFront = cityFront.toLocaleLowerCase() == 'si';


if (ageAdult && yesCityFront){
    document.write('Te puedes vacunar !');
}else if (yesCityFront != 'si'){
    const gender = prompt('Eres hombre o mujer: ');
    const womenGender = gender.toLocaleLowerCase() == 'mujer';
    const menGender = gender.toLocaleLowerCase() == 'hombre';
    if (womenGender){
        const isPregnant = prompt('¿Estas emabarazada? ');
        const yesIsPregnant =isPregnant.toLocaleLowerCase() == 'si';
        const weeksPregnant = prompt('Cuantas semanas de embarazo tienes?');
        const yesWeeksPregnant = weeksPregnant > 9;
        if (yesIsPregnant && weeksPregnant > 9){
            document.write('Te puedes vacunar !')
        }else if(weeksPregnant<=9){
            const thisYears = prompt ('Cumples 30 años o más en este año?...');
            const yesThisYears = thisYears.toLocaleLowerCase() == 'si';
            const ageAdultThirty = age >=30;
            if(yesThisYears && ageAdultThirty){
                document.write('Te puedes vacunar !')
            }else{
                document.write('No te puedes Vacunar jejeje....')
            }

        }
    }
    else if (menGender){
        const thisYears = prompt ('Cumples 30 años o más en este año?...');
        const yesThisYears = thisYears.toLocaleLowerCase() == 'si';
        const ageAdultThirty = age >=30;
        if(yesThisYears && ageAdultThirty){
            document.write('Te puedes vacunar !')
        }else{
            document.write('No te puedes Vacunar jejeje....')
        }
    }


} 
