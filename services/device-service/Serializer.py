import json


def convert_devices_to_json(records):
    json_data = []
    for record in records:
        json_data.append({"id": record[0], "title": record[1], "author": record[2]})
    return json.dumps(json_data)
