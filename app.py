from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import scrape_wsj
import sys


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/shortease")


# Route to render index.html template using data from Mongo
@app.route("/")
def index():

    # Find record of data from the mongo database
    wsj = mongo.db.wsj_data.find_one()
    return render_template("index.html", shortease_html= wsj)

# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
     = scrape_wsj.scrape_info()
    print(wsj)
    
    # Update the Mongo database using update and upsert=True
    mongo.db.collection.update({}, wsj_data, upsert=True)

    # Redirect back to home page
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)