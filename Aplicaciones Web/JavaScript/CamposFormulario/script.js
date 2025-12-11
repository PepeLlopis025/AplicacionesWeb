if (nombre === "") {
    nom = false;
}
if (nombre.length < 3) {
    nom = false;
}

if (edad < 18) {
    mayor = false;
}

const posArroba = email.indexOf("@");
const posPunto = email.lastIndexOf(".");
let correo = false;
if (posArroba !== -1 && posPunto !== -1 && posPunto > posArroba) {
    correo = true;
}


