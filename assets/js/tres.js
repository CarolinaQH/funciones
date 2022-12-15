// 3°

elemento = document.getElementById("ele1");

function pintar (colors ='green') {
elemento.style.backgroundColor = colors;
}
// } profe, no puedo poner el fondo verde :()


elemento.addEventListener("click", function() {
    pintar('yellow');
});

// 4°

// let color = 'white';

document.addEventListener('keydown', function(event) {    
    if (event.key === 'a') {
        color = 'red';
    } else if (event.key ==='s') {
        color = 'blue';
    } else if (event.key === 'd') {
        color = 'purple';
    }
})

document.addEventListener('click', function(event) {
    if (event.target.id != "ele1") {
        let currentDiv = document.querySelector("#" + event.target.id)
        currentDiv.style.backgroundColor = color;
    }    
})