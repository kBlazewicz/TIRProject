from flask import Flask, request
from Serializer import convert_devices_to_json
from Repository import fetch


app = Flask(__name__)

@app.route('/devices/get', methods=["GET"])
def get_dev_list():
    return convert_devices_to_json(fetch())

@app.route('/devices/add', methods=["POST"])
def add_new_dev():
    dev_data = request.form



if __name__ == '__main__':
    app.run()