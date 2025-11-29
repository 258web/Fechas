const fechaEl = document.getElementById("fecha");
const festivoEl = document.getElementById("festivo");


const hoy = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
fechaEl.textContent = hoy.toLocaleDateString('es-ES', opciones);


// Lista básica de días festivos / conmemorativos
const festividades = {
"1-1": "Año Nuevo",
"6-1": "Día de Reyes",
"14-2": "Día del Amor y la Amistad",
"8-3": "Día Internacional de la Mujer",
"1-5": "Día del Trabajo",
"24-12": "Nochebuena",
"25-12": "Navidad",
"31-12": "Nochevieja"
};


const clave = `${hoy.getDate()}-${hoy.getMonth() + 1}`;
const festivo = festividades[clave];


if (festivo) {
festivoEl.textContent = `Hoy se celebra: ${festivo}`;
} else {
festivoEl.textContent = "Hoy no es un día festivo registrado.";
}