import json


def convert_devices_to_json(records):
    json_data = []
    for record in records:
        json_data.append({"id": record[0], "pod_id": record[1], "endpoint": record[2]})
    return json.dumps(json_data)
