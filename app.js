const menu = document.querySelector(".menu");
let listaPadre = document.createElement("ul");
menu.appendChild(listaPadre);
listaPadre.classList.add("listaPadre");
for (let i = 0; i < 4; i++) {
    let lista = "";
    lista = document.createElement("li");
    lista.innerText="Menú " + (i + 1);
    listaPadre.appendChild(lista);
    lista.classList.add("listaHijo");
}