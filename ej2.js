let entrada = prompt("Ingresa la temperatura en grados Celsius:");
celsius = Number(entrada);
if (entrada !== null && entrada.trim() !== "" && !isNaN(celsius)) {
    break;
} else {
    alert("Error: Ingresa un valor numérico válido.");
}