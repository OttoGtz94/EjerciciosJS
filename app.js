/* ---------------------------------- */
/* Agregar o quitar elementos del DOM */
/* ---------------------------------- */
const btnAgregaLista = document.querySelector(".btnAgregaLista");
const btnLimpiarLista = document.querySelector(".btnLimpiarLista");
let contenedorLista = document.querySelector(".contenedorLista");
let txtAgregaLista = document.querySelector(".txtAgregaLista");

function agregarLista() {
  let elementoLi = document.createElement("li");
  elementoLi.classList.add("elementoLi");
  elementoLi.textContent = txtAgregaLista.value;
  contenedorLista.appendChild(elementoLi);
  txtAgregaLista.value = "";
}

function limpiarLista() {
  let elementoLi = document.querySelectorAll(".elementoLi");
  if (elementoLi.length > 0) {
    for (let elemento of elementoLi) {
      elemento.remove();
    }
  } else alert("La lista esta vacia");
}

btnAgregaLista.addEventListener("click", () => {
  txtAgregaLista.value !== ""
    ? agregarLista()
    : alert("No se introdujo elemento");
});
btnLimpiarLista.addEventListener("click", () => {
  limpiarLista();
});

/* -------------- */
/* Evento teclado */
/* -------------- */
let txtTeclado = document.querySelector(".txtTeclado");
let contenedorTeclado = document.querySelector(".eventoTeclado");

function leerInput() {
  let parrafo = document.querySelector(".parrafo");

  parrafo.textContent = txtTeclado.addEventListener(
    "input",
    (e) => (parrafo.textContent = e.target.value)
  );
  contenedorTeclado.appendChild(parrafo);
}
leerInput();

/* --------------- */
/* Ordenar numeros */
/* --------------- */
const btnAgregarNumero = document.querySelector(".btnAgregarNumero");
const btnOrdenaMayor = document.querySelector(".btnOrdenaMayor");
const btnOrdenaMenor = document.querySelector(".btnOrdenaMenor");
let txtNumeros = document.querySelector(".txtNumeros");
let btnLimpiarNumeros = document.querySelector(".btnLimpiarNumeros");
const numeros = [];

function agregarNumerosArreglo() {
  if (parseInt(txtNumeros.value)) {
    let repetido = numeros.includes(txtNumeros.value);
    if (repetido) {
      alert("Numero repetido");
      txtNumeros.value = "";
    } else {
      numeros.push(txtNumeros.value);
      console.log(numeros);
      console.log(repetido);
      txtNumeros.value = "";
    }
  } else {
    alert("Caracter incorrecto");
    txtNumeros.value = "";
  }
}

function agregarNumerosDOM() {
  let contenedorListaNumeros = document.querySelector(
    ".contenedorListaNumeros"
  );
  for (let numero of numeros) {
    let numeroLi = document.createElement("li");
    numeroLi.classList.add("numeroLi");
    numeroLi.textContent = numero;
    contenedorListaNumeros.appendChild(numeroLi);
  }
}

function ordenarMayor() {
  agregarNumerosDOM();
  let contenedorListaNumerosOrdenados = document.querySelector(
    ".contenedorListaNumerosOrdenados"
  );
  let numerosOrd = numeros.sort((a, b) => a - b);
  for (let numeroOrd of numerosOrd) {
    let numeroOrdLi = document.createElement("li");
    numeroOrdLi.classList.add("numeroLi");
    numeroOrdLi.textContent = numeroOrd;
    contenedorListaNumerosOrdenados.appendChild(numeroOrdLi);
  }
}

function ordenaMenor() {
  agregarNumerosDOM();
  let contenedorListaNumerosOrdenados = document.querySelector(
    ".contenedorListaNumerosOrdenados"
  );
  let numerosOrd = numeros.sort((a, b) => b - a);
  for (let numeroOrd of numerosOrd) {
    let numeroOrdLi = document.createElement("li");
    numeroOrdLi.classList.add("numeroLi");
    numeroOrdLi.textContent = numeroOrd;
    contenedorListaNumerosOrdenados.appendChild(numeroOrdLi);
  }
}

function limpiarNumeros() {
    let numeroOrdLi = document.querySelectorAll(".numeroLi");
    if (numeroOrdLi.length > 0) {
        for(let numeroOrdenado of numeroOrdLi) {
            numeroOrdenado.remove();
            numeros.pop();
        }
    } else {
        alert("Lista vacia");
    }
    console.clear();
}

btnAgregarNumero.addEventListener("click", agregarNumerosArreglo);
btnOrdenaMayor.addEventListener("click", ordenarMayor);
btnOrdenaMenor.addEventListener("click", ordenaMenor);
btnLimpiarNumeros.addEventListener("click", limpiarNumeros);
