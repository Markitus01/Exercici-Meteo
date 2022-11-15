let arrayFase1 = { data:[]};
let perQuinFase1 = 0;
let un = {};
let pos = 0;

data.data.forEach(function (ele)
{
    un[Object.keys(ele)[0]] = ele[Object.keys(ele)[0]];
    pos++;
    if (pos == 22)
    {
        arrayFase1.data.push(un);
        un = {};
        pos = 0;
    }
})
console.info(arrayFase1.data.length);

document.addEventListener('DOMContentLoaded',f_main);

function f_main()
{
    document.getElementById('anterior').addEventListener('click',f_moure);
    document.getElementById('seguent').addEventListener('click',f_moure);
    f_moure();
}

function f_moure(ev)
{
    if (arguments.length!=0) {
        if (ev.target.id == 'seguent')
        {
            //Si arribem al final del json donem la volta i tornem al principi JOSNNNNNN ROBLOOOOXXX
            if (perQuinFase1 != (arrayFase1.data.length-1))
            {
                perQuinFase1++;
            } else
            {
                perQuinFase1 = 0;
            }
        }
        else
        {
            //Si tirant cap enrere arribem al principi i tornem a donar, anem al final
            if (perQuinFase1!=0)
            {
                perQuinFase1--;
            } else
            {
                perQuinFase1 = arrayFase1.data.length-1;
            }
        }
    }

    document.getElementById('pos').textContent = perQuinFase1;
    document.getElementById('CODIGO_ESTACION').textContent = arrayFase1.data[perQuinFase1].CODIGO_ESTACION;
    document.getElementById('NOMBRE_ESTACION').textContent = arrayFase1.data[perQuinFase1].NOMBRE_ESTACION;
    document.getElementById('FECHA').textContent = arrayFase1.data[perQuinFase1].FECHA;
    document.getElementById('TEMPERATURA_UNIDAD').textContent = arrayFase1.data[perQuinFase1].TEMPERATURA_UNIDAD;
    document.getElementById('TEMPERATURA_MAX').textContent = arrayFase1.data[perQuinFase1].TEMPERATURA_MAX;
    document.getElementById('TEMPERATURA_MED').textContent = arrayFase1.data[perQuinFase1].TEMPERATURA_MED;
    document.getElementById('TEMPERATURA_MIN').textContent = arrayFase1.data[perQuinFase1].TEMPERATURA_MIN;
    document.getElementById('RADIACION_SOLAR_UNIDAD').textContent = arrayFase1.data[perQuinFase1].RADIACION_SOLAR_UNIDAD;
    document.getElementById('RADIACION_SOLAR_MAX').textContent = arrayFase1.data[perQuinFase1].RADIACION_SOLAR_MAX;
    document.getElementById('RADIACION_SOLAR_MED').textContent = arrayFase1.data[perQuinFase1].RADIACION_SOLAR_MED;
    document.getElementById('PRECIPITACION_UNIDAD').textContent = arrayFase1.data[perQuinFase1].PRECIPITACION_UNIDAD;
    document.getElementById('PRECIPITACION_ACUM').textContent = arrayFase1.data[perQuinFase1].PRECIPITACION_ACUM;
    document.getElementById('HUMEDAD_RELATIVA_UNIDAD').textContent = arrayFase1.data[perQuinFase1].HUMEDAD_RELATIVA_UNIDAD;
    document.getElementById('HUMEDAD_RELATIVA_MED').textContent = arrayFase1.data[perQuinFase1].HUMEDAD_RELATIVA_MED;
    document.getElementById('PRESION_ATMOSFERICA_UNIDAD').textContent = arrayFase1.data[perQuinFase1].PRESION_ATMOSFERICA_UNIDAD;
    document.getElementById('PRESION_ATMOSFERICA_MED').textContent = arrayFase1.data[perQuinFase1].PRESION_ATMOSFERICA_MED;
    document.getElementById('VELOCIDAD_VIENTO_UNIDAD').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_UNIDAD;
    document.getElementById('VELOCIDAD_VIENTO_MAX').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_MAX;
    document.getElementById('VELOCIDAD_VIENTO_MED').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_MED;
    document.getElementById('VELOCIDAD_VIENTO_UNIDAD_KMMH').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_UNIDAD_KMMH;
    document.getElementById('VELOCIDAD_VIENTO_KMH_MAX').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_KMH_MAX;
    document.getElementById('VELOCIDAD_VIENTO_KMH_MED').textContent = arrayFase1.data[perQuinFase1].VELOCIDAD_VIENTO_KMH_MED;
}