import { NodoDoble } from "../Nodos/NodoDoble.js";

export class ListaDoble {

    constructor() {
        this.cabeza = null;
    }

    insertarArtista(artista) {
        let nodo = new NodoDoble(artista);
        if (this.cabeza == null) {
            this.cabeza = nodo;
        } else {
            let aux = this.cabeza;
            while (aux.getSiguiente() != null) {
                aux = aux.getSiguiente();
            }
            aux.setSiguiente(nodo);
            nodo.setAnterior(aux);
        }
    }

    insertarCancion(nombreArtista, cancion) {
        let aux = this.cabeza;

        let nuevoNodo = new NodoDoble(cancion);
        while (aux.getArtista().getName() != nombreArtista) {
            if (aux.getSiguiente() == null) {
                //alert("No se encontro el artista" + nombreArtista);
                console.log("No se encontro el artista " + nombreArtista);
                return 0;
            }
            aux = aux.getSiguiente();
        }

        if (aux.getCanciones() == null) {
            aux.setCanciones(nuevoNodo);
        } else {
            aux = aux.getCanciones();
            while (aux.getSiguiente() != null) {
                aux = aux.getSiguiente();
            }
            aux.setSiguiente(nuevoNodo);
        }
    }
}