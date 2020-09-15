from flask import Flask, request
import requests
import base64
import sys
from tweet_parser.tweet import Tweet
from tweet_parser.getter_methods.tweet_counts import get_favorite_count
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
search_URLs = {
    "tweets": "https://api.twitter.com/1.1/search/tweets.json"}

search_header = {
    "Authorization": f"Bearer {app_authentication_data['bearer_token']}"
}
search_parameters = {
    "q" :"obama",
    "result_type":"popular",
    "count": 2
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


def get_twitter_data():
    response = requests.get(search_URLs["tweets"], headers=search_header, params=search_parameters)
    tweets = response.json()
    return tweets


tweet_dict = get_twitter_data()
def filter_tweet(tweet_subdata):

    if (tweet_subdata in tweet_items):
        return True
    else:
        return False
new_dict = {}
array= []
tweet_items = ["id", "entities"]
for tweet in tweet_dict["statuses"]:
    for key, value in tweet.items():
        if (key in tweet_items):
            new_dict[key] = value
    array.append(new_dict)
print(f'{array[0]}', file=sys.stderr)




# print(f'{tweet_dict["statuses"][0]["id"]}', file= sys.stderr)

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
