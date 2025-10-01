const opcionesSignos = [
    "Aries",
    "Tauro",
    "Géminis",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Escorpio",
    "Sagitario",
    "Capricornio",
    "Acuario",
    "Piscis"
  ];

  /* Lista de Planetas */

  const opcionesPlanetas = [
    "Luna",
    "Sol",
    "Mercurio",
    "Venus",
    "Marte",
    "Jupiter",
    "Saturno",
    "Ketu",
    "Rahu"
  ];

  /* Lista de Casas */

  const opcionesCasas = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];

function inputsPlanetas() {
    for (let i = 0; i < opcionesPlanetas.length; i++) {
        document.write(`<div class="form-row"><p class="form-group">${opcionesPlanetas[i]}</p><div class="form-group" style="flex: 1;"><select class="casas" id="input-${opcionesPlanetas[i]}-casa" name="input-${opcionesPlanetas[i]}-casa"><option value="" disabled selected>- - - -</option></select></div><div class="form-group" style="flex: 2;"><select class="signos" id="input-${opcionesPlanetas[i]}-signo" name="input-${opcionesPlanetas[i]}-signo"><option value="" disabled selected>- - - -</option></select></div></div>`);
    }
}