from flask import Flask, request, jsonify
import gpt_text_parser

app = Flask(__name__)

@app.route('/schedule')
def index():
    return

@app.route("/schedule", methods=['POST'])
def getvalue():
    input = request.form['user-input']
    output = gpt_text_parser.create_meeting(input)
    print(output)
    return "Hello"

if __name__ =='__main__':
    app.run(debug=True)