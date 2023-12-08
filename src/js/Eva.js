document.addEventListener("DOMContentLoaded", function() {
    // Obtener los elementos necesarios
    const inputImporteCompra = document.getElementById("importeCompra");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoDiv = document.getElementById("resultado");

    // Asignar el evento al botón
    calcularBtn.addEventListener("click", function() {
        // Obtener el valor del importe de compra
        const importeCompra = parseFloat(inputImporteCompra.value);

        // Generar un número al azar entre 1 y 3
        const numeroAzar = Math.floor(Math.random() * 3) + 1;

        // Determinar el tipo de bolilla
        let bolilla = "";
        if (importeCompra <= 100) {
            bolilla = (numeroAzar === 1) ? "Blanca" : "Roja";
        } else {
            if (numeroAzar === 1) {
                bolilla = "Blanca";
            } else if (numeroAzar === 2) {
                bolilla = "Roja";
            } else {
                bolilla = "Rojiblanca";
            }
        }

        // Calcular el descuento según el tipo de bolilla
        let descuento = 0;
        if (importeCompra <= 100 && bolilla === "Roja") {
            descuento = importeCompra * 0.2;
        } else if (importeCompra > 100) {
            if (bolilla === "Blanca") {
                descuento = importeCompra * 0.1;
            } else if (bolilla === "Roja") {
                descuento = importeCompra * 0.3;
            } else if (bolilla === "Rojiblanca") {
                descuento = importeCompra * 0.5;
            }
        }

        // Calcular el monto a pagar
        const montoPagar = importeCompra - descuento;

        // Mostrar los resultados
        const resultado = `Importe de Compra: S/ ${importeCompra.toFixed(2)}<br>Descuento: S/ ${descuento.toFixed(2)}<br>Monto a Pagar: S/ ${montoPagar.toFixed(2)}`;
        resultadoDiv.innerHTML = resultado;
    });
});

