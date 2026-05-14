const botao = document.getElementById("btnBuscar");

const divUsuarios = document.getElementById("usuarios");

botao.addEventListener("click", buscarUsuarios);

function buscarUsuarios() {

    fetch("http://127.0.0.1:5000/usuarios")

        .then(response => response.json())

        .then(dados => {

            divUsuarios.innerHTML = "";

            dados.forEach(usuario => {

                const div = document.createElement("div");

                div.classList.add("usuario");

                div.innerHTML = `
                    <h3>${usuario.nome}</h3>
                    <p>Email: ${usuario.email}</p>
                    <p>Telefone: ${usuario.telefone}</p>
                `;

                divUsuarios.appendChild(div);

            });

        })

        .catch(error => {
            console.log(error);
        });
}