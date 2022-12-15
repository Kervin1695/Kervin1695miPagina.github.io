import { NodoPila } from "./NodoPila.js";

export class Pila{
    constructor(){
        this.cabeza = null;
    }

    push(nuevoNodo){
        let auxiliar = new NodoCola(nuevoNodo.usuario);

        if (this.cabeza == null){
            this.cabeza = auxiliar;
        } else {
            auxiliar.siguiente = this.cabeza;
            this.cabeza = auxiliar;
        }
    }

    pop(){
        if (this.cabeza == null){
            console.log("La cola esta vacia")
        } else {
            let temporal = this.cabeza;
            this.cabeza = this.cabeza.siguiente;
            return temporal;
        }
    }
}