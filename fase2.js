let arrayFase2 = {data:[]};

arrayFase1.data.forEach(
    function (ele)
    {
        if (ele.TEMPERATURA_MAX != null)
        {
            let pos = arrayFase2.data.findIndex(e => e.CODIGO_ESTACION == ele.CODIGO_ESTACION);
            if (pos == -1)
            {
                let nou = {};
                nou[Object.keys(ele)[0]] = ele[Object.keys(ele)[0]];
                nou["NOMBRE_ESTACION"] = ele["NOMBRE_ESTACION"];
                nou.observacions = [];

                let novaObservacio = {};
                novaObservacio.FECHA = ele.FECHA;
                novaObservacio.TEMPERATURA_MAX = ele.TEMPERATURA_MAX;
                novaObservacio.TEMPERATURA_MED = ele.TEMPERATURA_MED;
                novaObservacio.TEMPERATURA_MIN = ele.TEMPERATURA_MIN;
                novaObservacio.RADIACION_SOLAR_MAX = ele.RADIACION_SOLAR_MAX;
                novaObservacio.RADIACION_SOLAR_MED = ele.RADIACION_SOLAR_MED;
                novaObservacio.PRECIPITACION_ACUM = ele.PRECIPITACION_ACUM;
                novaObservacio.VELOCIDAD_VIENTO_KMH_MAX = ele.VELOCIDAD_VIENTO_KMH_MAX;

                nou.observacions.push(novaObservacio);
                arrayFase2.data.push(nou);
            } else
            {
                let novaObservacio = {};
                novaObservacio.FECHA = ele.FECHA;
                novaObservacio.TEMPERATURA_MAX = ele.TEMPERATURA_MAX;
                novaObservacio.TEMPERATURA_MED = ele.TEMPERATURA_MED;
                novaObservacio.TEMPERATURA_MIN = ele.TEMPERATURA_MIN;
                novaObservacio.RADIACION_SOLAR_MAX = ele.RADIACION_SOLAR_MAX;
                novaObservacio.RADIACION_SOLAR_MED = ele.RADIACION_SOLAR_MED;
                novaObservacio.PRECIPITACION_ACUM = ele.PRECIPITACION_ACUM;
                novaObservacio.VELOCIDAD_VIENTO_KMH_MAX = ele.VELOCIDAD_VIENTO_KMH_MAX;

                arrayFase2.data[pos].observacions.push(novaObservacio);
            }
        } else
        {
            let pos = arrayFase2.data.findIndex(e => e.CODIGO_ESTACION == ele.CODIGO_ESTACION);
            if (pos==-1)
            {
                let nou = {};
                nou[Object.keys(ele)[0]] = ele[Object.keys(ele)[0]];
                nou["NOMBRE_ESTACION"] = ele["NOMBRE_ESTACION"];
                nou.observacions = [];
                arrayFase2.data.push(nou);
            }
        }
    }
);

console.log(arrayFase2.data.length);

arrayFase2.data.forEach(function (ele)
{
    console.log(ele.CODIGO_ESTACION,' ',ele.NOMBRE_ESTACION,' ',ele.observacions.length);
})