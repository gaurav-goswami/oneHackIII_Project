from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "home"

@app.get("/userData", methods=['GET'])
def get_user_data():
    return(
        {"topic": "Banana Meeting",
                  "type": 2,
                  "start_time": "2019-06-14T10: 00: 57",
                  "duration": "45",
                  "timezone": "Pacific",
                  "agenda": "None",
 
                  "recurrence": {"type": 1,
                                 "repeat_interval": 1
                                 },
                  "settings": {"host_video": "true","participant_video": "False",
                               "join_before_host": "False",
                               "mute_upon_entry": "False",
                               "watermark": "true",
                               "audio": "voip",
                               "auto_recording": "cloud"
                               }
                  }
    )

if __name__ == "__main__":
    app.run(debug=True)