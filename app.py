from flask import Flask, render_template, redirect, url_for, request, send_file
import os
from werkzeug.utils import secure_filename
import io
import cv2

app = Flask(__name__)
imageFile = None
compressFile = None
fileName = None
fileExtension = None
compressRatio = None

@app.route('/')
def show():
    return render_template('index.html', imgIn = None, imgCom = None)

@app.route('/upload', methods = ['POST'])
def upload_image():
    global imageFile, compressFile, fileName, fileExtension, compressRatio

    try:
        image = request.files['insert-img']
        fileName, fileExtension = os.path.splitext(secure_filename(image.filename))
        keepImage = io.BytesIO()
        image.save(keepImage)
        imageFile = cv2.imdecode(image, cv2.IM_UNCHANGED)
    except:
        pass

    try:
        compressRatio = int(request.form['insert-ratio'])
    except: 
        compressRatio = 100

    return redirect('/compressing')

@app.route('/show', methods='GET')
def show_image():
    global imageFile, compressFile, fileName, fileExtension, compressRatio

@app.route('/save', methods='POST')
def save_image():
    global imageFile, compressFile, fileName, fileExtension, compressRatio

    byteCompress = cv2.imencode(fileExtension, compressFile)

    return send_file(io.BytesIO(byteCompress), saveAs=fileName+fileExtension)

