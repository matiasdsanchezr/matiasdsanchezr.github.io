const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const validateForm = (e) => {
  if (userInput.value.length < 1) {
    e.preventDefault();
    return alert("El campo usuario esta vacio");
  }
  if (!hasAtSign(userInput.value)) {
    e.preventDefault();
    return alert("El usuario requiere un @");
  }
  if (passwordInput.value.length < 7) {
    e.preventDefault();
    return alert("La contraseña debe contener al menos 7 caracteres");
  }
  alert("Los datos ingresados son validos");
};

submitButton.addEventListener("click", validateForm);

// Verificar si un string contiene arroba usando String.prototype.includes()
// Es el metodo mas eficiente en algunos navegadores, y el mas indicado para la tarea
function hasAtSign(str) {
  return str.includes("@");
}

// Verificar si un string contiene arroba usando String.prototype.indexOf()
// Es el metodo mas eficiente en algunos navegadores
function hasAtSign2(str) {
  return str.indexOf("@") != -1;
}

// Verificar si un string contiene arroba usando RegExp.prototype.test()
// Validar si hay coincidencia entre el string y una expresion regular
function hasAtSign3(str) {
  const regex = /@/;
  return regex.test(str);
}

// Verificar si un string contiene arroba usando String.prototype.search()
// Es menos eficiente que test()
function hasAtSign4(str) {
  return str.search(/@/) !== -1;
}

// Verificar si un string contiene arroba usando un ciclo for
function hasAtSign5(str) {
  for (let i = 0; i < str.length; i++) if (str[i] === "@") return true;
  return false;
}

// Verificar si un string contiene arroba usando Array.prototype.some()
// No es eficiente ya que se necesita convertir el string en un array
function hasAtSign6(str) {
  str.split("").some((char) => char === "@");
}
