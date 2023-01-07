from flask import Flask, request
from Serializer import convert_devices_to_json
from Repository import fetch
from Init import Register_Broker


app = Flask(__name__)

@app.route('/mqtt/brokers', methods=["GET"])
def get_dev_list():
    return convert_devices_to_json(fetch())

@app.route('/mqtt/register', methods=["POST"])
def add_new_dev():
    dev_data = request.form


if __name__ == '__main__':
    Register_Broker()
    app.run()