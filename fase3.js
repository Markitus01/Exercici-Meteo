document.addEventListener('DOMContentLoaded',f_main);

let observacions = arrayFase2.data[0].observacions;

function f_main()
{
    f_pintarTaula();
}

function f_pintarTaula()
{
   

    let txt = "<table border='1'>";

    let cap = Object.keys(observacions[0]);

    let titol ="<tr>";

    cap.forEach( function (ele){
        titol += '<th onClick="f_ordenar(\''+ele+'\')">'+ele+'</th>';
    });
    titol += '</tr>';

    txt += titol;

    observacions.forEach((e,pos) => {
        if (pos %20 ==0 && pos!=0)
        {
            txt+= titol;
        }
        txt+= '<tr><td>'+e.FECHA+'</td><td>'+e.TEMPERATURA_MAX+'</td><td>'+e.TEMPERATURA_MED+'</td><td>'+e.TEMPERATURA_MIN+'</td><td>'+
        e.RADIACION_SOLAR_MAX+'</td><td>'+e.RADIACION_SOLAR_MED+'</td><td>'+e.PRECIPITACION_ACUM+'</td><td>'+e.VELOCIDAD_VIENTO_KMH_MAX+'</td></tr>';
    });

    txt+='</table>';
    document.getElementById('estacio1').innerHTML = txt;
   
}

function f_ordenar(camp)
{
    observacions.sort( function (a,b){
        if (a[camp] < b[camp])
            return -1;
        else if (a[camp] > b[camp])
            return 1;
        return 0;
       });
    f_pintarTaula();
}