from flask import flask
from flask import jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS (app) 

usuarios = [
    {
        "nome": "Luka Sanches",
        "email": "luka@gmail.com",
        "telefone": "(14) 99999-0002"
    },

    {
        "nome": "Thiago Soares",
        "email": "thiago@gmail.com",
        "telefone": "(14) 99999-0001"
    },

    {
        "nome": "Maria Silva",
        "email": "maria@gmail.com",
        "telefone": "(14) 99999-0000"
    }
]


@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)