from flask import flask
from flask import jsonify
from flask_cors import CORS 
app = Flask(__name__)

CORS (app) 

@app.route("/")
def inicio():

    return "API funcionando!"

app.run(debug=True)