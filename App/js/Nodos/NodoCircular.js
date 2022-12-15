export class NodoCircular{
    constructor(cancion){
        this.cancion = cancion;
        this.siguiente = null;
        this.anterior = null;
    }
}
