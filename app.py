from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
import urllib.request
import svd as compress
import time

app = Flask(__name__)
execute = None
compressedName = None
diff = None

UPLOAD_FOLDER = 'static/images'

app.config['ENV'] = 'development'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'png'])
def file_in(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def initial():
    return render_template('index.html', timetaken=0, ratio=0)

@app.route('/', methods = ['POST'])
def upload():
    global execute, compressedName, diff

    file = request.files['insert-img']
    if file and file_in(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        k = int(request.form['insert-ratio'])
        start = time.time()
        compressedName, diff = compress.compressImage(f'{UPLOAD_FOLDER}/{filename}', k)
        end = time.time()
        execute = round(end - start, 2)
        imgSave, imgExt = os.path.splitext(filename)
        imgSave = f'{imgSave}com{imgExt}'
        compressedName.save(os.path.join(app.config['UPLOAD_FOLDER'], imgSave))
        return render_template('index.html', filename=filename, timetaken=execute, ratio=diff)
    if 'file' not in request.files:
        print('bukan')
        return redirect(request.url)
    if 'file.filename' == '':
        print('kosong')
        return redirect(request.url)
    else:
        print('Error uploading')
        return redirect(request.url)

@app.route('/display/<filename>')
def display(filename):
    return redirect(url_for('static', filename='images/' + filename), code=301)

@app.route('/display/<filename>/com')
def display_com(filename):
    imgSave, imgExt = os.path.splitext(filename)
    imgSave = f'{imgSave}com{imgExt}'

    return redirect(url_for('static', filename='images/' + imgSave), code=301)


    

if __name__ == '__main__':
    app.run(debug=True)