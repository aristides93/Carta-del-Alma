
async function generarCarta(event) {
    event.preventDefault();
    let registroDatos = "";
    let cartaFinal = "";
    const nombreTexto = document.getElementById("input-nombre-texto").value;

    //INCLUIR NOMBRE
    if(incluirNombre){
        const nombres = document.getElementById("input-nombres").value;
        const apellido1 = document.getElementById("input-apellido-1").value;
        const apellido2 = document.getElementById("input-apellido-2").value;
        
        const idioma = document.getElementById("input-idioma").value;
        const genero = document.getElementById("input-genero").value;
        const valorNombres = calcularValorNombre(nombres);
        const valorApellido1 = calcularValorNombre(apellido1);
        const valorApellido2 = calcularValorNombre(apellido2);

        //verificar que se hayan capturado todos los datos
        if(nombres === "" || apellido1 === "" || apellido2 === "" || nombreTexto === "" || idioma === "" || genero === ""){
            alert("Completa todos los datos de Nombre");
            return;
        }

        registroDatos += `<br><br><h3>Nombre</h3>Nombres: ${nombres} - Valor: <b>${valorNombres}</b>` + `<br>Primer Apellido: ${apellido1} - Valor: <b>${valorApellido1}</b>` + `<br>Segundo Apellido: ${apellido2} - Valor: <b>${valorApellido2}</b>` + `<br>Nombre del Texto: ${nombreTexto}` + `<br>Idioma: ${idioma}` + `<br>Género: ${genero}`;
    }

    //INCLUIR PLANETAS
    if(incluirPlanetas){;
        const lunaCasa = document.getElementById("input-Luna-casa").value;
        const lunaSigno = document.getElementById("input-Luna-signo").value;
        const solCasa = document.getElementById("input-Sol-casa").value;
        const solSigno = document.getElementById("input-Sol-signo").value;
        const mercurioCasa = document.getElementById("input-Mercurio-casa").value;
        const mercurioSigno = document.getElementById("input-Mercurio-signo").value;
        const venusCasa = document.getElementById("input-Venus-casa").value;
        const venusSigno = document.getElementById("input-Venus-signo").value;
        const marteCasa = document.getElementById("input-Marte-casa").value;
        const marteSigno = document.getElementById("input-Marte-signo").value;
        const jupiterCasa = document.getElementById("input-Jupiter-casa").value;
        const jupiterSigno = document.getElementById("input-Jupiter-signo").value;
        const saturnoCasa = document.getElementById("input-Saturno-casa").value;
        const saturnoSigno = document.getElementById("input-Saturno-signo").value;
        const ketuCasa = document.getElementById("input-Ketu-casa").value;
        const ketuSigno = document.getElementById("input-Ketu-signo").value;
        const rahuCasa = document.getElementById("input-Rahu-casa").value;
        const rahuSigno = document.getElementById("input-Rahu-signo").value;

        //verificar que se hayan capturado todos los datos
        let todoPlanetas = [lunaCasa, lunaSigno, solCasa, solSigno, mercurioCasa, mercurioSigno, venusCasa, venusSigno, marteCasa, marteSigno, jupiterCasa, jupiterSigno, saturnoCasa, saturnoSigno, ketuCasa, ketuSigno, rahuCasa, rahuSigno];

        if(todoPlanetas.includes("")){
            alert("Completa todos los datos de Planetas");
            return;
        }

        registroDatos += `<br><br><h3>Planetas</h3>Luna: ${lunaCasa} ${lunaSigno}` +
            `<br>Sol: ${solCasa} ${solSigno}` +
            `<br>Mercurio: ${mercurioCasa} ${mercurioSigno}` +
            `<br>Venus: ${venusCasa} ${venusSigno}` +
            `<br>Marte: ${marteCasa} ${marteSigno}` +
            `<br>Júpiter: ${jupiterCasa} ${jupiterSigno}` +
            `<br>Saturno: ${saturnoCasa} ${saturnoSigno}` +
            `<br>Ketu: ${ketuCasa} ${ketuSigno}` +
            `<br>Rahu: ${rahuCasa} ${rahuSigno}`;
    }

    //INCLUIR JIVATMA
    if(incluirJivatma){
        const jivatma1Check = document.getElementById("input-jivatma1-check").checked;
        const jivatma1Planeta1 = document.getElementById("input-jivatma1-planeta1").value;
        const jivatma1Planeta2 = document.getElementById("input-jivatma1-planeta2").value;

        const jivatma2Check = document.getElementById("input-jivatma2-check").checked;
        const jivatma2Planeta1 = document.getElementById("input-jivatma2-planeta1").value;
        const jivatma2Planeta2 = document.getElementById("input-jivatma2-planeta2").value;

        const jivatma3Check = document.getElementById("input-jivatma3-check").checked;
        const jivatma3Planeta1 = document.getElementById("input-jivatma3-planeta1").value;
        const jivatma3Planeta2 = document.getElementById("input-jivatma3-planeta2").value;

        const jivatma4Check = document.getElementById("input-jivatma4-check").checked;
        const jivatma4Planeta1 = document.getElementById("input-jivatma4-planeta1").value;
        const jivatma4Planeta2 = document.getElementById("input-jivatma4-planeta2").value;

        let todoJivatma = "";


        if(jivatma1Check){
            //verificar que se hayan capturado todos los datos
            if(jivatma1Planeta1 === "" || jivatma1Planeta2 === ""){
                alert("Completa todos los datos de Jivatma");
                return;
            }
            todoJivatma += `<br>${jivatma1Planeta1} - ${jivatma1Planeta2}`;
        }
        if(jivatma2Check){
            //verificar que se hayan capturado todos los datos
            if(jivatma2Planeta1 === "" || jivatma2Planeta2 === ""){
                alert("Completa todos los datos de Jivatma");
                return;
            }
            todoJivatma += `<br>${jivatma2Planeta1} - ${jivatma2Planeta2}`;
        }
        if(jivatma3Check){
            //verificar que se hayan capturado todos los datos
            if(jivatma3Planeta1 === "" || jivatma3Planeta2 === ""){
                alert("Completa todos los datos de Jivatma");
                return;
            }
            todoJivatma += `<br>${jivatma3Planeta1} - ${jivatma3Planeta2}`;
        }
        if(jivatma4Check){
            //verificar que se hayan capturado todos los datos
            if(jivatma4Planeta1 === "" || jivatma4Planeta2 === ""){
                alert("Completa todos los datos de Jivatma");
                return;
            }
            todoJivatma += `<br>${jivatma4Planeta1} - ${jivatma4Planeta2}`;
        }

        registroDatos += `<br><br><h3>Jivatma</h3>${todoJivatma.substring(4)}`;

    }

    //INCLUIR NAKSHATRA
    if(incluirNakshatra){
        const nakshatra = document.getElementById("input-nakshatra").value;

        //verificar que se hayan capturado todos los datos
        if(nakshatra === ""){
            alert("Completa todos los datos de Nakshtra");
            return;
        }

        registroDatos += `<br><br><h3>Nakshatra</h3>Valor: ${nakshatra}`;
    }

    //INCLUIR FASES
    if(incluirFases){
        const fasesPlaneta = document.getElementById("input-fases-planeta").value;
        const fasesAños = document.getElementById("input-fases-años").value;

        //verificar que se hayan capturado todos los datos
        if(fasesPlaneta === "" || fasesAños ===""){
            alert("Completa todos los datos de Fases");
            return;
        }
        registroDatos += `<br><br><h3>Fases</h3>Planeta: ${fasesPlaneta}<br>Años: ${fasesAños}`;

        //agregar Fases a carta Final
        const docFases = await fetch("resumenes/Fases.json");
        const textoFases = await docFases.json();
        let textoFasesFinal = textoFases[fasesPlaneta].replace(/{{nombre}}/g, nombreTexto).replace(/\n/g, "<br>");

        let introduccionFases = textoFases["introduccion"].replace(/{{fasesAños}}/g, fasesAños).replace(/\n/g, "<br>");
        let contenidoFases = `<p>${textoFasesFinal}</p>`;

        cartaFinal += introduccionFases + contenidoFases + '<div class="page-break"></div>';

    }

    //EXTRAS
    if(incluirExtras){
        const introduccionCheck = document.getElementById("extras-introduccion-check").checked;
        const conclucionCheck = document.getElementById("extras-conclucion-check").checked;
    
        registroDatos += `<br><br><h3>Extras</h3>Introducción: ${introduccionCheck}<br>Conclución: ${conclucionCheck}`;

        //checar si se requiere introducción
        if (introduccionCheck){
            const docIntroduccion = await fetch("resumenes/introduccionCarta.html");
            const textoIntroduccion = await docIntroduccion.text();
            cartaFinal = textoIntroduccion + cartaFinal;
        }
    }

    //mas código final
    document.getElementById("registroDatos").innerHTML = registroDatos;
    document.getElementById("btn_registro_datos").style.opacity = "1";
    document.getElementById("btn_registro_datos").style.cursor = "pointer";
    document.getElementById("btn_registro_datos").disabled = false;
    document.getElementById("btn_copy").style.opacity = "1";
    document.getElementById("btn_copy").style.cursor = "pointer";
    document.getElementById("btn_copy").style.boxShadow = "0 4px 16px rgba(var(--color-main), .24)";
    document.getElementById("btn_copy").disabled = false;
    document.getElementById("btn_generar_pdf").style.opacity = "1";
    document.getElementById("btn_generar_pdf").style.cursor = "pointer";
    document.getElementById("btn_generar_pdf").style.boxShadow = "0 4px 16px rgba(var(--color-main), .24)";
    document.getElementById("btn_generar_pdf").disabled = false;

    if (window.innerWidth <= 1024) {
        if (window.innerWidth <= 1024) {
            toggleView();
        }
    }
    
    // Registrar fecha y hora de Creación de la Carta
    const ahora = new Date();
    let fechaCreacion = ahora.toLocaleString();
    document.getElementById("fechaCreacion").innerText = fechaCreacion; 

    // mostrar resultado de carta final en pantalla
    document.getElementById("resultado-carta").innerHTML = cartaFinal;
  

}
/* Registro de Datos */
function toggleRegistroDatos() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('registroDatos-container');
    overlay.classList.toggle('hidden');
    content.scrollTop = 0;    
}      
     
document.getElementById('overlay').classList.add('hidden');

// calcula el valor total del nombre completo
function calcularValorNombre(nombre) {
    let largo = nombre.length;
    let idioma = document.getElementById("input-idioma").value;
    let resultado = 0;

    if (idioma == "Otro") {
        for (i = 0; i < largo; i++) {
            let letraOtro = nombre.charAt(i);
            let valor = valorLetraOtro(letraOtro);
            resultado += valor;
        }
    } else {

        let letraAnterior = "a";
        for (i = 0; i < largo; i++) {
            var letra = nombre.charAt(i);
            switch (letra) {
                case "L":
                case "l":
                    if (letraAnterior == "l") {
                        letra = "ll";
                        resultado -= 4;
                    }
                    break;
                case "H":
                case "h":
                    if (letraAnterior == "c") {
                        letra = "ch";
                        resultado -= 3;
                    }
                    break;
            }
            resultado += valorLetraEsp(letra);
            if (letra == "ll") {
                letra = "l";
            }
            if (letra == "ch") {
                letra = "h";
            }
            letraAnterior = letra;
        }
}

    resultado = checarLimite(resultado);
    return resultado;
}

//Checar Límite
function checarLimite(x) {
    while(x>94){
        x -= 90;
    }

    if (x < 5) {
        x += 90;
    }
    return x;
}

// Obtener el valor de cada letra en Español
function valorLetraEsp(x) {
switch (x) {
    case "A":
    case "Á":
    case "a":
    case "á":
        return 1;
    case "B":
    case "b":
        return 2;
    case "C":
    case "c":
        return 3;
    case "ch":
        return 4;
    case "D":
    case "d":
        return 5;
    case "E":
    case "É":
    case "e":
    case "é":
        return 6;
    case "F":
    case "f":
        return 7;
    case "G":
    case "g":
        return 8;
    case "H":
    case "h":
        return 9;
    case "I":
    case "Í":
    case "i":
    case "í":
        return 1;
    case "J":
    case "j":
        return 2;
    case "K":
    case "k":
        return 3;
    case "L":
    case "l":
        return 4;
    case "ll":
        return 5;
    case "M":
    case "m":
        return 6;
    case "N":
    case "n":
        return 7;
    case "Ñ":
    case "ñ":
    case ".":
        return 8;
    case "O":
    case "Ó":
    case "o":
    case "ó":
        return 9;
    case "P":
    case "p":
        return 1;
    case "Q":
    case "q":
        return 2;
    case "R":
    case "r":
        return 3;
    case "S":
    case "s":
        return 4;
    case "T":
    case "t":
        return 5;
    case "U":
    case "Ú":
    case "u":
    case "ú":
        return 6;
    case "V":
    case "v":
        return 7;
    case "W":
    case "w":
        return 8;
    case "X":
    case "x":
        return 9;
    case "Y":
    case "y":
        return 1;
    case "Z":
    case "z":
        return 2;
    default:
        return 0;
    }
}

// Obtener el valor de cada letra en Español
function valorLetraOtro(x) {
    switch (x) {
        case "A":
        case "Á":
        case "a":
        case "á":
            return 1;
        case "B":
        case "b":
            return 2;
        case "C":
        case "c":
            return 3;
        case "D":
        case "d":
            return 4;
        case "E":
        case "É":
        case "e":
        case "é":
            return 5;
        case "F":
        case "f":
            return 6;
        case "G":
        case "g":
            return 7;
        case "H":
        case "h":
            return 8;
        case "I":
        case "Í":
        case "i":
        case "í":
            return 9;
        case "J":
        case "j":
            return 1;
        case "K":
        case "k":
            return 2;
        case "L":
        case "l":
            return 3;
        case "M":
        case "m":
            return 4;
        case "N":
        case "n":
            return 5;
        case "O":
        case "Ó":
        case "o":
        case "ó":
            return 6;
        case "P":
        case "p":
            return 7;
        case "Q":
        case "q":
            return 8;
        case "R":
        case "r":
            return 9;
        case "S":
        case "s":
            return 1;
        case "T":
        case "t":
            return 2;
        case "U":
        case "Ú":
        case "u":
        case "ú":
            return 3;
        case "V":
        case "v":
            return 4;
        case "W":
        case "w":
            return 5;
        case "X":
        case "x":
            return 6;
        case "Y":
        case "y":
            return 7;
        case "Z":
        case "z":
            return 8;
        default:
            return 0;
    }
}