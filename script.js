const botao = document.getElementById("btnBuscar");
const divUsuarios = document.getElementById("usuarios");

botao.addEventListener("click", buscarUsuarios);

function buscarUsuarios() {
    // A URL deve terminar com /usuarios para coincidir com a rota do Flask
    fetch("https://api-flask-2-lowk.onrender.com/usuarios")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na rede ou rota não encontrada");
            }
            return response.json();
        })
        .then(dados => {
            // Limpa a div antes de listar para não duplicar itens
            divUsuarios.innerHTML = "";

            dados.forEach(usuario => {
                const div = document.createElement("div");
                div.classList.add("usuario");

                div.innerHTML = `
                    <h3>${usuario.nome}</h3>
                    <p>Email: ${usuario.email}</p>
                    <p>Telefone: ${usuario.telefone}</p>
                    <hr>
                `;

                divUsuarios.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar usuários:", error);
            divUsuarios.innerHTML = "<p style='color:red'>Erro ao carregar dados da API.</p>";
        });
}