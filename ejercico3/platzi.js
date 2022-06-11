var vp = document.getElementById("villaplatzi")
var papel = vp.getContext("2d");

var fondo ={
    url: "img/tile.png",
    cargaOK: false
}

var vaca ={

    url: "img/vaca.png",
    cargaOk: false 
};

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image()
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo ()
{
    fondo.cargaOK = true;
    dibujar();
}


 function cargarVacas()
{
   vaca.cargaOk = true;
    dibujar();
}

function dibujar ()
{
    
if (fondo.cargaOK == true )
    {
        papel.drawImage(fondo.imagen, 0,0)
        papel.drawImage(vaca.imagen, 0,0)
    }
}



/*function aleatorio(min, maxi)
{
var resultado;
resultado = Math.floor(Math.random() * (maxi - min +1))+ min;
return resultado;
}*/

