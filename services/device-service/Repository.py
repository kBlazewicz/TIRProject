import mysql.connector

def get_connection():
    conn = mysql.connector.connect(host="localhost", database="IOT_PROJECT", user="root", password="root")
    return conn

def fetch():
    cursor = get_connection()
    cursor.execute("SELECT * FROM IOT_DEVICES")
    rows = cursor.fetchall()
    return rows


def insert(dev_name, mqtt_pod_id, floor):
    conn = get_connection()
    cursor = conn.cursor()
    sql = "INSERT INTO IOT_DEVICES (dev_name, mqtt_pod_id, floor) VALUES (%s, %s, %s)"
    val = (dev_name, mqtt_pod_id, floor)
    cursor.execute(sql, val)
    conn.commit()
