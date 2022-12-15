import { ListaSimple } from './Estructuras/ListaSimple.js';
import { Usuario } from './Usuario.js';
import { ListaDoble } from './Estructuras/ListaDoble.js';
import { ArbolBinario } from './Estructuras/ArbolBinario.js';
import { MatrizDispersa } from './Estructuras/MatrizDispersa.js';


export let miLista = new ListaSimple();

let miAdmin = new Usuario(2654568452521, "Oscar Armin", "EDD", "123", "+502 (123) 123-4567", true);

miLista.agregarNodo(miAdmin);

export let miListaDoble = new ListaDoble();
export let miArbolBinario = new ArbolBinario();
export let miMatrizDispersa = new MatrizDispersa();

