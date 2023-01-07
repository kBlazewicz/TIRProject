import subprocess
subprocess.run(["docker", "build", "-t", "mysql-db", "."], cwd="db")
subprocess.run(["docker", "run", "--network", "iot-network", "--name", "db-container", "-e", "MYSQL_ROOT_PASSWORD=root", "-p", "9901:3306", "-p", "8080:8080", "-p", "9902:3308", "-d", "mysql-db"], cwd="db")
subprocess.run(["docker", "logs", "-f", "db-container"], cwd="db")