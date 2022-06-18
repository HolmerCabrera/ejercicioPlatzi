var imagenes = [];
imagenes["cauchin"]= "vaca.png"
imagenes["pocacho"]= "pollo.png"
imagenes["tocinauro"]= "cerdo.png"

class Pakiman
{
    constructor(n, v, a, tipo)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";
    

        this.imagen.src = imagenes[this.nombre];

    }
    hablar()  
    {

    alert(this.nombre);
    }
    mostrar()
    {
        document.write("<p>")
        document.body.appendChild(this.imagen);
    }

}
var cauchin = new Pakiman("cauchin", 100, 30); 
var pocacho = new Pakiman("pocacho", 80, 50); 
var tocinauro = new Pakiman("pocacho", 120, 40); 
console.log(cauchin,pocacho,tocinauro);
