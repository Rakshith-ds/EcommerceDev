import connection

client = connection.client

def createuser(i):
    mydb = client.project
    collection = mydb.usersData
    query = collection.find_one({"email":i["email"]})
    if(query):
        return "email exists"
    else:
        collection.insert_one(i)
        return "inserted"
