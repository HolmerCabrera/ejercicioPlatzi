var teclas = {
    UP:38,
    DOWN: 40,
    LEFT:37,
    RIGTH: 39
};

console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xiniciar, yiniciar, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xiniciar, yiniciar);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado (evento)
{   
    var movimiento = 5
    var colocito = "blue"
    switch (evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea( colocito, x, y, x, y - movimiento, papel)
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea( colocito, x, y, x, y + movimiento, papel)
            y = y + movimiento;

        break;
        case teclas.LEFT:
            dibujarLinea( colocito, x, y, x, y - movimiento, papel)
            x = x - movimiento;
        break;
        case teclas.RIGTH:
            dibujarLinea( colocito, x, y, x, y + movimiento ,papel)
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla");
        break;
    }

   



} 