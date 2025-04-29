from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/enviar-sms', methods=['POST'])
def enviar_sms():
    dados = request.get_json()
    numero = dados.get("numero")


    return jsonify({"mensagem": f"Ligação iniciada para {numero}"}), 200

