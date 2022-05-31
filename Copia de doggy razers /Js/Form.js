class Form{ //Clase para el formulario de registro de los jugadores
    constructor(){

        this.input = createInput("Nombre"); //Variable para crear una entrada de datos para nombre
        this.button = createButton("Play"); //Boton para inicar juego
        this.title = createElement("h1");   //Tìtulo de la página
        this.greeting = createElement("h1"); //Bienvenida
    }

    hide(){ //Función para ocultar el mensaje de bienvenida, buton Play y cuadro de texto para Nombre
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        //var title = createElement("h1");//Cabecera del título
        this.title.html("doggyRacerz");
        this.title.position(displayWidth-190,0);      //Ajusta posición automática del Título del juego        

        this.input.position(displayWidth/2,displayHeight/2); //Posición del la variable input (entrada del nombre) en pantalla
        this.button.position(displayWidth/2+70, displayHeight/2+70);

        this.button.mousePressed(()=>{ //Función para el clic sobre el botón
            this.input.hide(); //Oculta el nombre
            this.button.hide();  //Oculta el botón
            player1.name = this.input.value();   //Obtiene el valor de la entrada 
            playerCount+=1; //Actualiza el número de jugadores
            player1.index = playerCount;
            player1.update(); //Actualiza en la DB el nombre del jugador -- LLAMADA PASO 3
            player1.updateCount(playerCount); //Actualiza en la DB el número de jugadores -- LAMADA PASO4
            this.greeting.html("estas listo ? " + player1.name); //Saluda al jugador nuevo
            this.greeting.position(displayWidth/2,displayHeight/2); //Posición del mensaje de bienvenida en pantalla
        }); 
        //imagen(perritoEsperaImg, 200,200,50,50)

    }//Fin display
}//Fin Form.js

/*class Formulario{
constructor(){
    this.input=createInput("nombre de el jugador ")
    this.Button =createButton("correr")
    this.Title=createElement("h1")
    this.esperar=createElement("h2")
}

hide(){
    this.input.hide()
    this.Button.hide()
    this.Title.hide()
    this.esperar.hide()

}
display(){
    this.Title.html("Doggy Razers")
    this.Title.position(300,20)
    this.input.position(200,20)
    this.Button.position(100,10)

    this.Button.mousePressed(()=>{
        this.input.hide()
        this.Button.hide()
        
        player1.name=this.input.value()
        playerCount+=1
        player1.index=playerCount
        player1.update()
        player1.updateCount(playerCount)
        this.esperar.html("esperando a que otros jugadores se unan" )
        this.esperar.position(100,200)
        
    })

    imagen(perritoEsperaImg, 200,200,50,50)



}





}
*/