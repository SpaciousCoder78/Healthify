from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to store calories burnt
@app.route('/store-calories-burnt', methods=['POST'])
def store_calories_burnt():
    date = datetime.now().date().isoformat()
    calories_burnt = request.form['caloriesBurnt']
    store_calories_burnt_in_database(date, calories_burnt)
    return 'Calories Burnt Stored'

# API endpoint to store calories consumed
@app.route('/store-calories-consumed', methods=['POST'])
def store_calories_consumed():
    date = datetime.now().date().isoformat()
    calories_consumed = request.form['caloriesConsumed']
    store_calories_consumed_in_database(date, calories_consumed)
    return 'Calories Consumed Stored'

# API endpoint to get total calories burnt for a given date
@app.route('/get-calories-burnt', methods=['GET'])
def get_calories_burnt():
    date = request.args.get('date')
    total_calories_burnt = get_total_calories_burnt(date)
    return jsonify({'totalCaloriesBurnt': total_calories_burnt})

# API endpoint to get total calories consumed for a given date
@app.route('/get-calories-consumed', methods=['GET'])
def get_calories_consumed():
    date = request.args.get('date')
    total_calories_consumed = get_total_calories_consumed(date)
    return jsonify({'totalCaloriesConsumed': total_calories_consumed})

# Function to store calories burnt in the database
def store_calories_burnt_in_database(date, calories_burnt):
    conn = sqlite3.connect('fitness.db')
    c = conn.cursor()
    c.execute('CREATE TABLE IF NOT EXISTS calories_burnt (date TEXT, calories_burnt REAL)')
    c.execute('INSERT INTO calories_burnt (date, calories_burnt) VALUES (?, ?)', (date, calories_burnt))
    conn.commit()
    conn.close()

# Function to store calories consumed in the database
def store_calories_consumed_in_database(date, calories_consumed):
    conn = sqlite3.connect('fitness.db')
    c = conn.cursor()
    c.execute('CREATE TABLE IF NOT EXISTS calories_consumed (date TEXT, calories_consumed REAL)')
    c.execute('INSERT INTO calories_consumed (date, calories_consumed) VALUES (?, ?)', (date, calories_consumed))
    conn.commit()
    conn.close()

# Function to get total calories burnt for a given date
def get_total_calories_burnt(date):
    conn = sqlite3.connect('fitness.db')
    c = conn.cursor()
    c.execute('SELECT SUM(calories_burnt) FROM calories_burnt WHERE date = ?', (date,))
    total_calories_burnt = c.fetchone()[0]
    conn.close()
    return total_calories_burnt

# Function to get total calories consumed for a given date
def get_total_calories_consumed(date):
    conn = sqlite3.connect('fitness.db')
    c = conn.cursor()
    c.execute('SELECT SUM(calories_consumed) FROM calories_consumed WHERE date = ?', (date,))
    total_calories_consumed = c.fetchone()[0]
    conn.close()
    return total_calories_consumed

if __name__ == '__main__':
    app.run(debug=True)