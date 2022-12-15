export class NodoSimple{
    constructor(usuario){
        this.usuario = usuario;
        this.siguiente = null;
    }

    getUsuario(){
        return this.usuario;
    }

    getSiguiente(){
        return this.siguiente;
    }

    setSiguiente(siguiente){
        this.siguiente = siguiente;
    }

    setUsuario(usuario){
        this.usuario = usuario;
    }
}