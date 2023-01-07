import mysql.connector

def get_connection():
    conn = mysql.connector.connect(host="db-container", port=3306, database="IOT_PROJECT", user="root", password="root")
    return conn

def fetch():
    cursor = get_connection()
    cursor.execute("SELECT * FROM MQTT_BROKERS")    
    rows = cursor.fetchall()
    return rows


def insert(pod_id, endpoint):
    conn = get_connection()
    cursor = conn.cursor()
    sql = "INSERT INTO MQTT_BROKERS (pod_id, endpoint) VALUES (%s, %s)"
    val = (pod_id, endpoint)
    cursor.execute(sql, val)
    conn.commit()
