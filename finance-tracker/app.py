from flask import Flask, render_template
import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

def get_data():
    # Connect to DB and fetch sample data
    conn = psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST")
    )
    cur = conn.cursor()
    
    # Dummy query (adjust later for real data)
    cur.execute("SELECT 'Income' AS type, 1000 AS amount UNION SELECT 'Expense', 500;")
    data = cur.fetchall()
    cur.close()
    conn.close()
    return data

@app.route('/')
def index():
    data = get_data()
    labels = [row[0] for row in data]
    values = [row[1] for row in data]
    return render_template("index.html", labels=labels, values=values)

if __name__ == '__main__':
    app.run(debug=True)
