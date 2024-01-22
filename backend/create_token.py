import jwt

key = "secret"

def get_token(data):
    encoded = jwt.encode(data, key, algorithm="HS256")
    return encoded