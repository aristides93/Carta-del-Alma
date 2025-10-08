// Ejemplo de funcionalidad adicional
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar más funcionalidad JavaScript
    console.log('Layout cargado correctamente');
});

var incluirNombre = true;
var incluirPlanetas = true;
var incluirJivatma = true;
var incluirNakshatra = true;
var incluirFases = true;
var incluirExtras = true;

/* PLANETAS */

 // Selecciona todos los selects con la clase .signos
document.querySelectorAll(".signos").forEach(select => {
opcionesSignos.forEach(opcion => {
    const option = document.createElement("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
});
});

// Selecciona todos los selects con la clase .casas
document.querySelectorAll(".casas").forEach(select => {
opcionesCasas.forEach(opcion => {
    const option = document.createElement("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
});
});

// Selecciona todos los selects con la clase .planetas
document.querySelectorAll(".planetas").forEach(select => {
opcionesPlanetas.forEach(opcion => {
    const option = document.createElement("option");
    option.value = opcion;
    option.textContent = opcion;
    select.appendChild(option);
});
});

// Función para toggle Incluir o de Ocultar
function toggleContent(section) {
    let content = section + "-content";
    let toggleText = section + "-toggle-text";
    let toggleBtn = section + "-toggle-btn";
    content = document.getElementById(content);
    toggleText = document.getElementById(toggleText);
    toggleBtn = document.getElementById(toggleBtn);
    
    if (content.classList.contains('hidden')) {
        // Mostrar
        content.classList.remove('hidden');
        toggleText.textContent = 'X Quitar';
        toggleBtn.classList.remove('active');
    } else {
        // Ocultar
        content.classList.add('hidden');
        toggleText.textContent = '+ Incluir';
        toggleBtn.classList.add('active');
    }

    switch (section) {
        case "nombre":
            incluirNombre = !incluirNombre;
            break;
        case "planetas":
            incluirPlanetas = !incluirPlanetas;
            break;
        case "jivatma":
            incluirJivatma = !incluirJivatma;
            break;
        case "nakshatra":
            incluirNakshatra = !incluirNakshatra;
            break;
        case "fases":
            incluirFases = !incluirFases;
            break;
        case "extras":
            incluirExtras = !incluirExtras;
        
    }
}

// Función para manejar el estado de los selects
function toggleJivatma(num) {
    
    let checkboxId = "input-jivatma" + num + "-check";
    let planeta1Id = "input-jivatma" + num + "-planeta1";
    let planeta2Id = "input-jivatma" + num + "-planeta2";
    
    const checkbox = document.getElementById(checkboxId);
    const planeta1Select = document.getElementById(planeta1Id);
    const planeta2Select = document.getElementById(planeta2Id);
    
    if (checkbox.checked) {
        // Habilitar los selects
        planeta1Select.disabled = false;
        planeta2Select.disabled = false;
        
        // Restaurar los valores por defecto o los últimos valores válidos
        if (planeta1Select.value === 'disabled') {
            planeta1Select.selectedIndex = 1; // Seleccionar la primera opción válida
        }
        if (planeta2Select.value === 'disabled') {
            planeta2Select.selectedIndex = 1; // Seleccionar la primera opción válida
        }

        //cambiar diseño del select
        planeta1Select.style.opacity = "1";
        planeta1Select.style.color = "#444";
        planeta1Select.style.boxShadow = "0 2px 4px 1px rgba(79,175,90,0.24)";
        planeta1Select.style.cursor = "pointer";

        planeta2Select.style.opacity = "1";
        planeta2Select.style.color = "#444";
        planeta2Select.style.boxShadow = "0 2px 4px 1px rgba(79,175,90,0.24)";
        planeta2Select.style.cursor = "pointer";


    } else {
        // Deshabilitar los selects
        planeta1Select.disabled = true;
        planeta2Select.disabled = true;

        //cambiar diseño del select
        planeta1Select.style.opacity = ".64";
        planeta1Select.style.color = "rgba(68,68,68,.4)";
        planeta1Select.style.boxShadow = "none";
        planeta1Select.style.cursor = "default";

        planeta2Select.style.opacity = ".64";
        planeta2Select.style.color = "rgba(68,68,68,.4)";
        planeta2Select.style.boxShadow = "none";
        planeta2Select.style.cursor = "default";

    }
}

// Event listeners para cada checkbox
document.getElementById('input-jivatma1-check').addEventListener('change', function() {
    toggleJivatma('1');
});
document.getElementById('input-jivatma2-check').addEventListener('change', function() {
    toggleJivatma('2');
});
document.getElementById('input-jivatma3-check').addEventListener('change', function() {
    toggleJivatma('3');
});
document.getElementById('input-jivatma4-check').addEventListener('change', function() {
    toggleJivatma('4');
});


// SOLO PARA PANTALLAS < 1024px
function toggleView() {
    const mainContainer = document.querySelector('.main-container');
    const btnToggleView = document.getElementById('btn-toggle-view');

    if (mainContainer.classList.contains('show-result')) {
        // Mostrar datos
        mainContainer.classList.remove('show-result');
        btnToggleView.textContent = 'Ver Carta';
    } else {
        // Mostrar resultado
        mainContainer.classList.add('show-result');
        btnToggleView.textContent = 'Ver Formulario';
    }
}