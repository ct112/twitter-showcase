from flask import Flask
import time

app = Flask(__name__)


@app.route('/')
def home():
    return "home"

@app.route('/api')



if __name__ == '__main__':
    app.run(debug=True)
