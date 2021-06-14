from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def game():
    #rows = int(request.args.get('rows'))
    #cols = int(request.args.get('cols'))

    return render_template('index.html')#, rows=rows, cols=cols)


if __name__ == '__main__':
    app.run(
        debug=True
    )
