from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/preorder")
@app.route("/preorder.html")
def preorder():
    return render_template("preorder.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=True)
