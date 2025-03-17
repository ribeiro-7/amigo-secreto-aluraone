let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value; // Correção aqui!
    
    if (nome.trim() !== "") {
        amigos.push(nome);
        document.getElementById("amigo").value = ""; // Limpa o campo após adicionar
        atualizarLista();
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "O amigo sorteado é: " + sorteado;
}
