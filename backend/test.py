import pandas as pd
import sqlalchemy as sq
import datetime as dt

dbDetails = {
    "username": "root",
    "password":"Rakshithds1",
    "host": "localhost",
    "port":"3306",
    "dbname":"test"
}

engine = sq.create_engine("mysql+pymysql://{user}:{password}@{ip}/{dbname}".format(user=dbDetails["username"],password=dbDetails["password"],ip=dbDetails["host"],dbname=dbDetails["dbname"]))


def insertdata(i):
    df = engine.connect().execute("SELECT * from test.userdetails").fetchall()
    df = pd.DataFrame(df)
    data = df[df[0]==i["email"]]
    emailcheck = len(data)
    if(emailcheck>0):
        return "Email already exists"      
    else:
        query = '''INSERT INTO test.userdetails (username, password) VALUES ('{username}','{password}')'''.format(username=i["email"],password=i["password"])
        conn = engine.connect().execute(query)
        return "Thank u for signing up"
        
def logindata(i):
    df = engine.connect().execute("SELECT * from test.userdetails").fetchall()
    df = pd.DataFrame(df)
    data = data = df[(df[0]==i["email"])&(df[1]==i["password"])]
    emailcheck = len(data)
    if(emailcheck==1):
        return "Logged In" 
    else:
        return "check ur email and password"