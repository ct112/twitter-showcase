from flask import Flask, request

app = Flask(__name__)


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
