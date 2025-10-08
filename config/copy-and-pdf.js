// BCOPIAR TODO EL CONTENIDO DE CARTA

function copiarResultado() {
    let div = document.getElementById("resultado-carta");

    // Hacemos que sea editable temporalmente
    div.contentEditable = true;
    div.focus();

    // Seleccionamos todo el contenido
    let range = document.createRange();
    range.selectNodeContents(div);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    // Ejecutamos comando copiar
    document.execCommand("copy");

    // Limpiamos selección y editabilidad
    sel.removeAllRanges();
    div.contentEditable = false;

    //mostrar toast con mensaje de copy
    const toastCopy = document.getElementById("toast-copy");
    toastCopy.classList.add("show");

    document.getElementById("btn_copy").className = "btn_copy_main btn_copy_used";
    document.getElementById("resultado-carta").style.boxShadow = "0 0 0 3px rgba(79,175,90,1)";

    // Ocultar después de cierto tiempo
    setTimeout(
        function() {
            //default button content
            document.getElementById("btn_copy").className = "btn_copy_main btn_copy_default";
            document.getElementById("resultado-carta").style.boxShadow = "0 4px 8px rgba(118,128,119,0.24)";
            toastCopy.classList.remove("show");

        }, 1200);
}





// GENERAR ARCHIVO PDF

document.getElementById("btn_generar_pdf").style.boxShadow = "none";

function generarPDF() {
    const elemento = document.getElementById('resultado-carta');
    const boton = document.getElementById('btn_generar_pdf');
    const textoOriginalBoton = boton.innerHTML;
    
    try {
        boton.innerHTML = '⏳ Generando ...';
        boton.disabled = true;
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        let y = 20; // Posición Y inicial
        const margenIzq = 20;
        const margenDer = 20;
        const anchoUtil = pdf.internal.pageSize.getWidth() - margenIzq - margenDer;
        const altoUtil = pdf.internal.pageSize.getHeight() - 40;
        
        // Función para agregar nueva página si es necesario
        function checkNuevaPagina(incremento) {
            if (y + incremento > altoUtil + 20) {
                pdf.addPage();
                y = 20;
                return true;
            }
            return false;
        }
        
        // Procesar cada elemento del contenido
        const elementos = elemento.querySelectorAll('h1, h2, p, ul, ol, hr, .page-break, .info-box, .italica-centrado');
        
        elementos.forEach((el) => {
            const tagName = el.tagName.toLowerCase();

            if (el.classList.contains('page-break')) {
                        pdf.addPage();
                        y = 20;
                        return;
                    }
            
            if (tagName === 'h1') {
                checkNuevaPagina(15);
                pdf.setFontSize(22);
                pdf.setFont("Helvetica", 'bold');
                pdf.setTextColor(69, 78, 82);
                pdf.text(el.innerText, margenIzq, y);
                y += 8;
                
                // Línea decorativa
                pdf.setDrawColor(4, 148, 103);
                pdf.setLineWidth(1);
                pdf.line(margenIzq, y, margenIzq + 50, y);
                y += 8;
                
            } else if (tagName === 'h2') {
                checkNuevaPagina(12);
                y += 5;
                pdf.setFontSize(16);
                pdf.setFont(undefined, 'bold');
                pdf.setTextColor(69, 78, 82);
                pdf.text(el.innerText, margenIzq, y);
                y += 10;
                
            } else if (tagName === 'p') {
                checkNuevaPagina(10);
                pdf.setFontSize(12);
                pdf.setFont(undefined, 'normal');
                pdf.setTextColor(69, 78, 82);
                
                const lineas = pdf.splitTextToSize(el.innerText, anchoUtil);
                lineas.forEach(linea => {
                    checkNuevaPagina(7);
                    pdf.text(linea, margenIzq, y);
                    y += 7;
                });
                y += 3;
                
            } else if (tagName === 'ul' || tagName === 'ol') {
                const items = el.querySelectorAll('li');
                pdf.setFontSize(11);
                pdf.setFont(undefined, 'normal');
                pdf.setTextColor(69, 78, 82);
                
                items.forEach((item, index) => {
                    checkNuevaPagina(10);
                    const bullet = tagName === 'ul' ? '•' : `${index + 1}.`;
                    const texto = item.innerText;
                    const lineas = pdf.splitTextToSize(texto, anchoUtil - 10);
                    
                    pdf.text(bullet, margenIzq, y);
                    lineas.forEach((linea, i) => {
                        if (i > 0) checkNuevaPagina(7);
                        pdf.text(linea, margenIzq + 5, y);
                        y += 7;
                    });
                });
                y += 3;
            } else if (el.classList.contains('info-box')) {
                checkNuevaPagina(15);
                
                // Calcular altura del cuadro
                pdf.setFontSize(12);
                pdf.setFont(undefined, 'bold');
                const lineas = pdf.splitTextToSize(el.innerText, anchoUtil - 10);
                const altoCuadro = (lineas.length * 7) + 6;
                
                checkNuevaPagina(altoCuadro);
                
                // Fondo del cuadro
                pdf.setFillColor(223, 242, 237);
                pdf.rect(margenIzq, y, anchoUtil, altoCuadro - 2, 'F');
                
                // Borde izquierdo
                pdf.setFillColor(4, 148, 103);
                pdf.rect(margenIzq, y, 1, altoCuadro -2, 'F');
                
                // Texto
                pdf.setTextColor(69, 78, 82);
                y += 7;
                lineas.forEach(linea => {
                    pdf.text(linea, margenIzq + 8, y);
                    y += 7;
                });
                y += 10;
            } else if (tagName === 'hr') {
                checkNuevaPagina(10);
                y += 5;
                pdf.setDrawColor(221, 221, 221);
                pdf.setLineWidth(0.5);
                pdf.line(margenIzq, y, margenIzq + anchoUtil, y);
                y += 8;
                return;
            } else if (el.classList.contains('italica-centrado')) {
                checkNuevaPagina(10);
                pdf.setFontSize(12);
                pdf.setFont(undefined, 'italic');
                pdf.setTextColor(69, 78, 82);
                y += 3;
                
                const lineas = pdf.splitTextToSize(el.innerText, anchoUtil);
                lineas.forEach(linea => {
                    checkNuevaPagina(7);
                    let textWidth = pdf.getTextWidth(linea);
                    let x = (anchoUtil - textWidth) / 2 + margenIzq;
                    pdf.text(linea, x, y);
                    y += 7;
                });
                y += 6;
                
            }
        });
        
        // Guardar el PDF
        const nombreTexto = document.getElementById("input-nombre-texto").value;
        pdf.save(`Carta ${nombreTexto}.pdf`);
        
        boton.innerHTML = '✅ ¡PDF Generado!';
        setTimeout(() => {
            boton.innerHTML = textoOriginalBoton;
            boton.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Error al generar PDF:', error);
        boton.innerHTML = '❌ Error al generar';
        setTimeout(() => {
            boton.innerHTML = textoOriginalBoton;
            boton.disabled = false;
        }, 2000);
    }
}