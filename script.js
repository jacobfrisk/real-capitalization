// Navnet defineres
const firstName = "peter";

// Første index sættes til upper case og lægges sammen med en substring der indeholder alt fra index 1 og resten af strengen.
const capitalized = firstName[0].toUpperCase() + firstName.substring(1);
console.log(capitalized);
