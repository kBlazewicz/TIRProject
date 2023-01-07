import os
from Repository import insert


mqtt_port = 1883

def Register_Broker():
    pod_id = os.getenv('HOSTNAME')
    pod_ip = os.getenv("POD_IP")
    endpoint = f"{pod_ip}:{mqtt_port}"
    insert(pod_id, endpoint)
