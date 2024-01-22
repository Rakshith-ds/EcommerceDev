import pandas as pd
import sqlalchemy as sq
import datetime as dt
from sqlalchemy import text


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
    data = df[df[2]==i["email"]]
    emailcheck = len(data)
    if(emailcheck>0):
        return "Email already exists"      
    else:
        query = '''INSERT INTO test.userdetails (firstName, lastName, email, password, repassword) VALUES ('{firstname}','{lastname}','{email}','{password}','{repassword}')'''.format(firstname=i["firstName"],lastname=i["lastName"],email=i["email"],password=i["password"],repassword=i["repassword"])
        conn = engine.connect().execute(text(query))
        return "Thank u for signing up"
        
def logindata(i):
    query = '''SELECT * from test.userdetails where email = '{email}' and password = '{password}' '''.format(email=i["email"], password=i["password"])
    conn = engine.connect().execute(text(query)).fetchall()
    result = [i[0] for i in conn]
    details = list(conn[0])
    emailcheck = len(result)
    if(emailcheck==1):
        return {"message": "Logged In","name":details[0],"email":details[2]}
    else:
        return "check id"  
    
