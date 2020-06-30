from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta
app = Flask(__name__)


@app.route("/")
def home():
    return render_template('index.html')


@app.route('/memo', methods=['POST'])
def saveScript():
    memo_comment = request.form['comment_give']
    memo_URL = request.form['url_give']

    doc = {
        'url': memo_URL,
        'comment': memo_comment
    }
    db.memo.insert_one(doc)
    return jsonify({'result': 'success'})


@app.route('/memo', methods=['GET'])
def read_memo():
    memos = list(db.memo.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'all_memos': memos})


@app.route('/memo2', methods=['POST'])
def memo_delete():
    # 1. 클라이언트가 전달한 name_give를 name_receive 변수에 넣습니다.
    comment_receive = request.form['comment_give']
    # 2. mystar 목록에서 delete_one으로 name이 name_receive와 일치하는 star를 제거합니다.
    memo = db.memo.delete_one({'comment': comment_receive})
    # 3. 성공하면 success 메시지를 반환합니다.
    return jsonify({'result': 'success'})


@app.route('/todo', methods=['POST'])
def saveTodo():
    todo_comment = request.form['todo_give']

    doc = {
        'todo': todo_comment
    }
    db.todo.insert_one(doc)
    return jsonify({'result': 'success'})


@app.route('/todo', methods=['GET'])
def read_todo():
    todos = list(db.todo.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'all_todos': todos})


@app.route('/finishtodo', methods=['POST'])
def saveFTodo():
    todo_comment = request.form['todo_give']

    doc = {
        'finishtodo': todo_comment
    }
    db.finishtodo.insert_one(doc)
    return jsonify({'result': 'success'})


@app.route('/todo3', methods=['POST'])
def passTodo():
    finish_comment = request.form['finishtodo_give']

    doc = {
        'todo': finish_comment
    }
    db.todo.insert_one(doc)
    return jsonify({'result': 'success'})


@app.route('/finishtodo', methods=['GET'])
def read_Ftodo():
    Ftodos = list(db.finishtodo.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'all_Ftodos': Ftodos})


@app.route('/todo2', methods=['POST'])
def todo_delete():
    # 1. 클라이언트가 전달한 name_give를 name_receive 변수에 넣습니다.
    todo_receive = request.form['todo_give']
    # 2. mystar 목록에서 delete_one으로 name이 name_receive와 일치하는 star를 제거합니다.
    todo = db.todo.delete_one({'todo': todo_receive})
    # 3. 성공하면 success 메시지를 반환합니다.
    return jsonify({'result': 'success'})


@app.route('/finishtodo2', methods=['POST'])
def Ftodo_delete():
    # 1. 클라이언트가 전달한 name_give를 name_receive 변수에 넣습니다.
    todo_receive = request.form['todo_give']
    print('todo', todo_receive)
    # 2. mystar 목록에서 delete_one으로 name이 name_receive와 일치하는 star를 제거합니다.
    todo = db.finishtodo.delete_one({'finishtodo': todo_receive})
    # 3. 성공하면 success 메시지를 반환합니다.
    return jsonify({'result': 'success'})


if __name__ == "__main__":
    app.run('0.0.0.0', port=5015, debug=True)
