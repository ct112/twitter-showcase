from flask import Flask, request
import requests
import base64
import sys
app = Flask(__name__)

app_authentication_data = {
    "api_key": "kocbYqCzxvYXFMkfqnAekTlIu",
    "api_secret": "F2K5oMKTTXhbHWrrRabSXVvqTzsRYXESPKxdUvXvaW1ckKqMDK",
    "bearer_token_URL": "https://api.twitter.com/oauth2/token",
    "authorization_headers": {
        "Authorization": "",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    "authorization_data": {
    "grant_type": "client_credentials"
    },
    "bearer_token":""
}
def generate_base64_key():
    user_authorization = "{}:{}".format(app_authentication_data['api_key'], app_authentication_data['api_secret']).encode("ascii")
    base64_key = base64.standard_b64encode(user_authorization)
    base64_key = base64_key.decode("ascii")
    app_authentication_data["authorization_headers"]["Authorization"] = f"Basic {base64_key}"

def post_request_twitter_API():
    response = requests.post(
    app_authentication_data["bearer_token_URL"],
    headers=app_authentication_data["authorization_headers"],
    data=app_authentication_data["authorization_data"])
    app_authentication_data["bearer_token"] = response.json()["access_token"]

generate_base64_key()
post_request_twitter_API()
print(f"{app_authentication_data['bearer_token']}", file=sys.stderr)
print('This is error output', file=sys.stderr)

@app.route('/')
def home():
    return "home"

@app.route('/api')
def get():
    language = request.args.get("search")
    toggle = request.args.get("toggle")
    return f"{toggle}"



if __name__ == '__main__':
    app.run(debug=True)
