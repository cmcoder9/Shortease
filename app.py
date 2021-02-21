from dotenv import load_dotenv
from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import scrape_wsj
import sys

#load enviroment variables
load_dotenv

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/stock_data"
mongo = PyMongo(app)


# Route to render index.html template using data from Mongo
@app.route("/")
def index():

    # Find record of data from the mongo database
    wsj = mongo.db.wsj_data.find_one()
    return render_template("index.html", shortease_html= wsj)

#create routes for data
# @app.route("/GMEData")

# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
    wsj = mongo.db.wsj
    wsj_data = scrape_wsj.scrape_all()
    print(wsj)
    
    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update({}, wsj_data, upsert=True)

    # Redirect back to home page
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)