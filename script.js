let hora = 11,
    mensagem = "";

if (hora < 12) {
    mensagem = "Bom dia";
} else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde";
} else {
    mensagem = "Boa noite";
}

console.log(mensagem);
