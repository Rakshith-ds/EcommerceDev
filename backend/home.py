from flask import Flask
from flask import request,jsonify
from flask_cors import CORS
# from getProducts import products
import connection
from create_token import get_token


app = Flask(__name__)

CORS(app)

@app.route('/signup',methods=['POST'])
def SignUp():
	jsonData = request.get_json()
	print(jsonData)
	datainsert = connection.insertdata(jsonData)
	return datainsert


@app.route('/signin',methods=["POST"])
def login():
	dbjson = request.get_json()
	dbdata = connection.logindata(dbjson)
	return dbdata


@app.route('/token',methods=['POST'])
def create_token():
	dbjson = request.get_json()
	result = get_token(dbjson)
	return result

if __name__ == '__main__':
	app.run(debug=True,host='0.0.0.0')