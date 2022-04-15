

// teste 1
function verificarPalindromo(String) {
    if(!String) return "String  inexistente";

    return String.split("").reverse().join("") === String;
}

console.log(verificarPalindromo(""));

// test 2 
function verificarPalindromo2(String){
    if(!String) return "string inexistente";

    for(let i = 0; i < String.length / 2; i++){
        if(String[i] !== String[String.length - 1 - i]){
            return false
        }
    }
    return true;
}

console.log(verificarPalindromo2("gato"));