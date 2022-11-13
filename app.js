function moverPosicionRandom(element){
    element.style.position = 'absolute';
    element.style.top = Math.random() * (window.innerHeight - element.offsetHeight) + 'px';
    element.style.left = Math.random() * (window.innerWidth - element.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(element) {
    moverPosicionRandom(element.target);
});

btnSi.addEventListener('click', function(element) {
    alert("Sabía que dirias que si. Te amo!!! ❤");

    divModoSexo.style.display = "block";
    const cancion = new Audio('img\\cancion.mp3');

    cancion.play();
});