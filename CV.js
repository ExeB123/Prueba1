
//botones abrir y cerrar

document.getElementById("contactame").addEventListener('click', function(){

        
        console.log("click en Contactame");
        document.getElementById("atras").style.display= "Block";
        
})


document.getElementById("cerrar").addEventListener('click', function(){

        
        console.log("click en Cerrar");
        document.getElementById("atras").style.display= "none";
})




//scroll para la seccion



window.addEventListener('scroll', function(i){
        for (var i=2 ; i < 6 ; i++){
                let animacion = this.document.getElementById(i);
                let posicionTitu1 = animacion.getBoundingClientRect().top;
                // console.log(posicionTitu1); Borrar comentario si se desea ver la posicion de los objetos
                let tamañoDePantalla = window.innerHeight/1.5;

                if(posicionTitu1 < tamañoDePantalla){
                        animacion.style.animation = 'mover 1s ease-out'
                        animacion.style.opacity = '1'
                }
        };

        
})



