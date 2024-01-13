# import connection

# # client = connection.client

# def getuserdetails(i):
#     mydb = client.project
#     collection = mydb.usersData
#     query = collection.find_one({"email":i["email"],"password":i["password"]})
#     if(query):
#         return {"name":query["firstName"],"message":"login success"}
#     else:
#         return "login failed"  
    

# def logindata(i):
#     df = engine.connect().execute("SELECT * from test.userdetails").fetchall()
#     df = pd.DataFrame(df)
#     data = data = df[(df[0]==i["email"])&(df[1]==i["password"])]
#     emailcheck = len(data)
#     if(emailcheck==1):
#         return "Logged In" 
#     else:
#         return "check ur email and password"