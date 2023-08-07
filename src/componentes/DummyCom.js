function DummyCom() {

    let numeros = [1, 5, 7, 12, 89, 23];
 let dobleNumeros = numeros.map((estudiante)=> 
    estudiante *2
  )
  let strings = numeros.map((estudiante)=> 
  estudiante.toString()
);
let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];
let mayus = nombres.map((estudiante)=> 
estudiante.toUpperCase()
);
let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];
 let soloNombres= personas.map((estudiante)=> 
estudiante.nombre
);
let matrix = personas.map((estudiante)=> 
{if(estudiante.edad >= 60){
  return estudiante.nombre + " Puede entrar a la matrix"
}
else{
  return estudiante.nombre + " Es demasiado peque"
}}
);
let htmlMasBonito = personas.map((estudiante)=>
<div>
<h2> {estudiante.nombre} </h2> 
 <p> {estudiante.edad} </p>
 </div>
);
let numerosDos = [66, 3, 2, 5, 26, 101];
let cincoOMas = numerosDos.filter((estudiante)=> 
estudiante > 5
);
let pares = numerosDos.filter((estudiante)=> 
{if(estudiante % 2 == 0){
  return estudiante
}}
);
let words = ["dog", "wolf", "by", "family", "eaten", "camping"]
let menosDeCinco = words.filter((estudiante)=> 
{if(estudiante.length > 5){
  return estudiante
}}
);
let listPersonas = [{
  nombre: "Angelina Jolie",
  afiliado: true
},
{
  nombre: "Eric Jones",
  afiliado: false
},
{
  nombre: "Paris Hilton",
  afiliado: true
},
{
  nombre: "Kayne West",
  afiliado: false
},
{
  nombre: "Bob Ziroll",
  afiliado: true
}
];
let miembroIluminati = listPersonas.filter((estudiante)=> 
{if(estudiante.afiliado == true){
  return estudiante
}}
);
  return (
     
        <div className = "App">
         {dobleNumeros.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
         {strings.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {mayus.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {soloNombres.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {cincoOMas.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {pares.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {menosDeCinco.map((estudiante)=> 
        <p> {estudiante} </p>
         )}
          {miembroIluminati.map((estudiante)=> 
        <p> {estudiante.nombre} </p>
         )}
          {matrix.map((estudiante)=> 
        <p> {estudiante}</p>
         )}
         {htmlMasBonito.map((estudiante)=> 
        <p> {estudiante}</p>
         )}
        </div>
        
     
  );
};
export default DummyCom