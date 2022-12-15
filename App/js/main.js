import { Usuario } from './Usuario.js';
import { miLista } from './Prueba.js';


let login_btn = document.getElementById("btn_login");
let register_btn = document.getElementById("btn_registro");

let nombreUsuario;
let password;
let admin;

if (login_btn){
    login_btn.addEventListener('click', () => {
        nombreUsuario = document.getElementById("usuario_login").value;
        password = document.getElementById("password_login").value;
        admin = document.getElementById("admin_login").checked;
        
        if (miLista.revisarLista(nombreUsuario, password, admin)) {
            console.log("Usuario correcto");
            if (admin) {
                window.location.href = "./Vistas/admin.html";
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        console.log(miLista);
    });

}

if (register_btn){
    register_btn.addEventListener('click', () => {
        nombreUsuario = document.getElementById("usuario_registro").value;
        password = document.getElementById("password_registro").value;
        admin = false;
        let dpi = document.getElementById("DPI_registro").value;
        let nombre = document.getElementById("nombre_registro").value;
        let telefono = document.getElementById("telefono_registro").value;
        let miUsuario = new Usuario(dpi, nombre, nombreUsuario, password, telefono, admin);
        miLista.agregarNodo(miUsuario);
        console.log(miLista);
    });
}


