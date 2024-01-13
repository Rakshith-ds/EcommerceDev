from flask import Flask
from flask import request,jsonify
from flask_cors import CORS
# from getProducts import products
import connection



app = Flask(__name__)

CORS(app)

@app.route('/',methods=['POST'])
def hello():

	return "hello"


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

# @app.route('/products',methods=['GET'])
# def getProducts():
# 	productslist = products()
# 	return jsonify(productslist)


if __name__ == '__main__':
	app.run(debug=True,host='0.0.0.0')