let averageBroncos = 0;
let averagePatriots = 0;



function average1(date1, date2, date3){
    let averageTeam = (date1 + date2 + date3)/3;
    averageBroncos = averageTeam;
    document.write(averageTeam ,'<br>');
}

function average2(date1, date2, date3){
    let averageTeam = (date1 + date2 + date3)/3;
    averagePatriots = averageTeam;
    document.write(averageTeam);
}

average1(15,7,10);
average2(5,12,24);

function compareAverage(averageBroncos, averagePatriots){

    
    if (averageBroncos > averagePatriots){
        document.write('Broncos ganan ( ' + averageBroncos + 'vs' + averagePatriots +')' )
    }

}




