from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index(width=25, height=25):
    return render_template('index.html', width=width, height=height)


if __name__ == '__main__':
    app.run(
        debug=True
    )
