(function(){
    'use strict';


    var $txtMsg = document.getElementById('msg');
    var $restaContainer = document.getElementById('restaContainer'); //progressive enhancement
    var $resta = document.getElementById('resta');
    var maxima = $txtMsg.maxLength;
     
    function mostrarContainerResta(){ //progressive enhancement
        $restaContainer.style.display = 'block'; 
    }
    
    mostrarContainerResta();
    mostrarCaracteresRestantes(maxima);
    $txtMsg.addEventListener('input', checkLength);


    function checkLength(e){
        var numeroLetrasDigitadas = this.value.length;
        var caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
        mostrarCaracteresRestantes(caracteresRestantes);
    }
    
    function mostrarCaracteresRestantes(n){
        $resta.textContent = n;
    }

})()