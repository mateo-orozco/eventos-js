const boton = document.getElementById("enviar")
boton.addEventListener("click", e=>{
    e.preventDefault()
    const username=document.getElementById("username").value
    const password=document.getElementById("password").value
    if(username==="" || password==="") alert("no se indico el usuario o contraseña")

    if(username==="carlitos" && password==="carlitos123"){
        alert("Bienvenido")
        setTimeout(()=>{
            location="./page1.html"
        },1000)
    }else{
        document.querySelector("#mensaje").style.display="block"
    }
    
})
document.getElementById("password").addEventListener("mouseenter",mostrar)
function mostrar(){
    document.getElementById("password").type="text"
}
document.getElementById("password").addEventListener("mouseleave",ocultar)
function ocultar(){
    document.getElementById("password").type="password"
}

document.getElementById("recordar").addEventListener("change", function(e){
    if(e.target.checked==true)  alert("desea que recordemos sus datos")
   
}

)