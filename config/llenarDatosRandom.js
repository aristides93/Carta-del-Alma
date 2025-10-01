// NOMBRE
function llenarNombreRandom(){
    const nombres = document.getElementById("input-nombres");
    const apellido1 = document.getElementById("input-apellido-1");
    const apellido2 = document.getElementById("input-apellido-2");
    const nombreTexto = document.getElementById("input-nombre-texto");
    const idioma = document.getElementById("input-idioma");
    const genero = document.getElementById("input-genero");

    nombres.value = randString();
    apellido1.value = randString();
    apellido2.value = randString();
    nombreTexto.value = randString();
    idioma.selectedIndex = randomVal(idioma);
    genero.selectedIndex = randomVal(genero);
}

// PLANETAS
function llenarPlanetasRandom(){
    const lunaCasa = document.getElementById("input-Luna-casa");
    const lunaSigno = document.getElementById("input-Luna-signo");
    const solCasa = document.getElementById("input-Sol-casa");
    const solSigno = document.getElementById("input-Sol-signo");
    const mercurioCasa = document.getElementById("input-Mercurio-casa");
    const mercurioSigno = document.getElementById("input-Mercurio-signo");
    const venusCasa = document.getElementById("input-Venus-casa");
    const venusSigno = document.getElementById("input-Venus-signo");
    const marteCasa = document.getElementById("input-Marte-casa");
    const marteSigno = document.getElementById("input-Marte-signo");
    const jupiterCasa = document.getElementById("input-Jupiter-casa");
    const jupiterSigno = document.getElementById("input-Jupiter-signo");
    const saturnoCasa = document.getElementById("input-Saturno-casa");
    const saturnoSigno = document.getElementById("input-Saturno-signo");
    const ketuCasa = document.getElementById("input-Ketu-casa");
    const ketuSigno = document.getElementById("input-Ketu-signo");
    const rahuCasa = document.getElementById("input-Rahu-casa");
    const rahuSigno = document.getElementById("input-Rahu-signo");

    lunaCasa.selectedIndex = randomVal(lunaCasa);
    lunaSigno.selectedIndex = randomVal(lunaSigno);
    solCasa.selectedIndex = randomVal(solCasa);
    solSigno.selectedIndex = randomVal(solSigno);
    mercurioCasa.selectedIndex = randomVal(mercurioCasa);
    mercurioSigno.selectedIndex = randomVal(mercurioSigno);
    venusCasa.selectedIndex = randomVal(venusCasa);
    venusSigno.selectedIndex = randomVal(venusSigno);
    marteCasa.selectedIndex = randomVal(marteCasa);
    marteSigno.selectedIndex = randomVal(marteSigno);
    jupiterCasa.selectedIndex = randomVal(jupiterCasa);
    jupiterSigno.selectedIndex = randomVal(jupiterSigno);
    saturnoCasa.selectedIndex = randomVal(saturnoCasa);
    saturnoSigno.selectedIndex = randomVal(saturnoSigno);
    ketuCasa.selectedIndex = randomVal(ketuCasa);
    ketuSigno.selectedIndex = randomVal(ketuSigno);
    rahuCasa.selectedIndex = randomVal(rahuCasa);
    rahuSigno.selectedIndex = randomVal(rahuSigno);
}

// JIVATMA
function llenarJivatmaRandom(){
    const jivatma1Check = document.getElementById("input-jivatma1-check").checked;
    const jivatma1Planeta1 = document.getElementById("input-jivatma1-planeta1");
    const jivatma1Planeta2 = document.getElementById("input-jivatma1-planeta2");

    const jivatma2Check = document.getElementById("input-jivatma2-check").checked;
    const jivatma2Planeta1 = document.getElementById("input-jivatma2-planeta1");
    const jivatma2Planeta2 = document.getElementById("input-jivatma2-planeta2");

    const jivatma3Check = document.getElementById("input-jivatma3-check").checked;
    const jivatma3Planeta1 = document.getElementById("input-jivatma3-planeta1");
    const jivatma3Planeta2 = document.getElementById("input-jivatma3-planeta2");

    const jivatma4Check = document.getElementById("input-jivatma4-check").checked;
    const jivatma4Planeta1 = document.getElementById("input-jivatma4-planeta1");
    const jivatma4Planeta2 = document.getElementById("input-jivatma4-planeta2");

    if(jivatma1Check){
        jivatma1Planeta1.selectedIndex = randomVal(jivatma1Planeta1);
        jivatma1Planeta2.selectedIndex = randomVal(jivatma1Planeta2);
    }
    if(jivatma2Check){
        jivatma2Planeta1.selectedIndex = randomVal(jivatma2Planeta1);
        jivatma2Planeta2.selectedIndex = randomVal(jivatma2Planeta2);
    }
    if(jivatma3Check){
        jivatma3Planeta1.selectedIndex = randomVal(jivatma3Planeta1);
        jivatma3Planeta2.selectedIndex = randomVal(jivatma3Planeta2);
    }
    if(jivatma4Check){
        jivatma4Planeta1.selectedIndex = randomVal(jivatma4Planeta1);
        jivatma4Planeta2.selectedIndex = randomVal(jivatma4Planeta2);
    }
}

// NAKSHATRA
function llenarNakshatraRandom(){
    const nakshatra = document.getElementById("input-nakshatra");

    nakshatra.selectedIndex = randomVal(nakshatra);
}

// FASES
function llenarFasesRandom(){
    const fasesPlaneta = document.getElementById("input-fases-planeta");
    const fasesAños = document.getElementById("input-fases-años");

    fasesPlaneta.selectedIndex = randomVal(fasesPlaneta);
    fasesAños.value = randString();
}

// LLENAR TODO
function llenarTodoRandom(){
    llenarNombreRandom();
    llenarPlanetasRandom();
    llenarJivatmaRandom();
    llenarNakshatraRandom();
    llenarFasesRandom();
}

// generar valor random a selects
function randomVal(select){
    let val = Math.floor(Math.random() * (select.options.length - 1)) + 1;    
    return val;
}

// generar strings random
function randString(){
    let randString = Math.random().toString(36).replace(/[^a-z]/g, '').slice(0,10);
    return randString;
}