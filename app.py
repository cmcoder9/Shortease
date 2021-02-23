# from dotenv import load_dotenv
from flask import Flask, render_template, jsonify, request, redirect

import scrape_wsj
import sys

#load enviroment variables
# load_dotenv
##########################################
# Flask Setup
##########################################
app = Flask(__name__)

##########################################
#Database Setup
##########################################
from flask_pymongo import PyMongo
app.config["MONGO_URI"] = "mongodb://localhost:27017/stock_data"
mongo = PyMongo(app)

#Route to render index.html template using data from Mongo)
@app.route("/")
def home():

     # Open connection // flack-pymongo nannages connections 
    # mongo = PyMongo(app)
    
    # Find record of data from the mongo database
    wsj = mongo.db.wsj.find_one()
    
    # Construct array 
#    wsj = [x for x in wsj]
    
    # Get randon index
#     randon_select = np.random.randint( low=0, high=3)
    
    # Use random index to selct a doc
#    wsj = wsj[randon_select]
    return jsonify(wsj['0'])
    # Return template and data
   # return render_template("index.html", shortease_html= wsj)

#create routes for data
@app.route("/GMEData")
def my_data():
     
     # Open connection   
    # mongo = PyMongo(app)
    
    # Pull down doc from mongoDB
    #my_query = mongo.db.wsj_data.find()
    
    # Construct array
    #my_data = [x for x in my_query]
    
    # Return array
    #return jsonify(my_data)
    return ""

# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():

    # Run the scrape function
   # wsj = mongo.db.wsj
   # wsj_data = scrape_wsj.scrape_all()
   # print(wsj)
    
    # Update the Mongo database using update and upsert=True
   # mongo.db.collection.update({}, wsj_data, upsert=True)

    # Redirect back to home page
    #return redirect("/", code=302)
    return ""

if __name__ == "__main__":
    app.run(debug=True)