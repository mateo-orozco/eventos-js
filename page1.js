const pedir = document.querySelector("#pedir")    
const lista = document.querySelector("#lista")
const modal = document.querySelector(".modal")
const seleccion = document.getElementById("seleccion")
const cancel = document.getElementById("cancel")
const accept = document.getElementById("accept")
pedir.addEventListener("click",()=>{
    if (lista.options[lista.selectedIndex].value==="") {
        alert("no selecciono un producto")
    }else{
        modal.style.top="0"
        seleccion.innerText = lista.options[lista.selectedIndex].text
    }
    
})
cancel.addEventListener("click",()=>{
    modal.style.top="-1750px";
    lista.selectedIndex=""
})