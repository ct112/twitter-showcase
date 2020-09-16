from flask import Flask, request, jsonify
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


def generate_base64_key():
    user_authorization = "{}:{}".format(app_authentication_data['api_key'], app_authentication_data['api_secret']).encode("ascii")
    base64_key = base64.standard_b64encode(user_authorization)
    base64_key = base64_key.decode("ascii")
    app_authentication_data["authorization_headers"]["Authorization"] = f"Basic {base64_key}"

def post_request_token():
    response = requests.post(
    app_authentication_data["bearer_token_URL"],
    headers=app_authentication_data["authorization_headers"],
    data=app_authentication_data["authorization_data"])
    app_authentication_data["bearer_token"] = response.json()["access_token"]


print(f"{app_authentication_data['bearer_token']}", file=sys.stderr)

def set_search_params(search_string, search_return_count):
    search_parameters = {}
    search_parameters["q"] = search_string
    search_parameters["result_type"] = "popular"
    search_parameters["count"] = search_return_count
    # print(search_parameters, file=sys.stderr)
    return search_parameters


def set_search_header():
    search_header = {}
    search_header["authorization"]= f"Bearer {app_authentication_data['bearer_token']}"
    return search_header


def get_twitter_data(search_header, search_parameters):
    response = requests.get(search_URLs["tweets"], headers=search_header, params=search_parameters)
    tweets = response.json()
    return tweets

def request_Authorization():
    generate_base64_key()
    post_request_token()

request_Authorization()

# print(f'{tweet_dict["statuses"][0]["id"]}', file= sys.stderr)

@app.route('/')
def home():
    return "home"

@app.route('/api')
def get():
    search_string = request.args.get("search")
    search_type = request.args.get("type")
    search_return_count = request.args.get("count")
    print(search_return_count, file=sys.stderr)
    search_params = set_search_params(search_string, search_return_count)
    search_header = set_search_header()
    tweets = get_twitter_data(search_header, search_params)
    return jsonify(tweets)



if __name__ == '__main__':
    app.run(debug=True)
# def filter_tweet(tweet_subdata):
#
#     if (tweet_subdata in tweet_items):
#         return True
#     else:
#         return False

# tweet_dict = get_twitter_data()
# new_dict = {}
# array= []
# tweet_items = ["id","text","user","entities","urls"]
#
# for tweet in tweet_dict["statuses"]:
#     for key, value in tweet.items():
#         if (key in tweet_items):
#             new_dict[key] = value
#     array.append(new_dict)
# print(f'{array[0]}', file=sys.stderr)


