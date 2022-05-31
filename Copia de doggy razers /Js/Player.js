class Player{ //Clase para los jugadores
    constructor(){
        this.index = null;  //Identificador del nuevo jugador 
        this.distance = 0;  //Distancia recorrida en el juego
        this.name = null;   //Nombre del nuevo jugador
    }

    getCount(){//Función para obtener playerCount
        var playerCountRef = database.ref('playerCount');  //Obtiene la referencia a la ubicación del valor de la DB para playerCount
        playerCountRef.on("value",(data) => {playerCount = data.val();})    //Crea el "oyente" para los cambios en la DG de playerCount
    }//Fin getCount()

    updateCount(count){ //Función para actualizar playerCount en la DB
        database.ref("/").update({playerCount: count}); //playerCount fue creado en firebase
    }//Fin updateCount

    update(){  //Función para actualizar el nombre y la distancia del jugador
        console.log("PASO 3: player1.update() ");
        var playerIndex = "players/player" + this.index; //Obtiene el indice del jugador
        database.ref(playerIndex).set({name: this.name, distance: this.distance})
    }//Fin update

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=> {allplayers = data.val()});
    }//Fin getPlayerInfo

    
}

/*
class Players{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null  
    }

    getCount(){    
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",function(data){playerCount=data.val()})
    }

        updateCount(count){
            database.ref("/").update({playerCount: count})
        }

    update(){
        var playerIndex="jugador "+this.index
        database.ref(playerIndex).set({nombre:this.name})
    }

}*/


