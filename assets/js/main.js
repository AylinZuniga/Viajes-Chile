const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// funcion enviar

$(function(){

   
   $('#enviarCorreo').click(function(){
    alert( "El correo fue enviado correctamente...")
   })

   $('h4').on("dblclick",function(){
    $(this).css("color","red")
   })
})
