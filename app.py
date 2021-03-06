
from flask import Flask
app = Flask(__name__, static_folder='./ui/build', static_url_path='/') # where static files are stored
# static_url_path is seen in front end, static_folder seen in backend 

@app.route('/')
def index():
    return app.send_static_file('index.html') 

if __name__ == "__main__":
    app.run() 