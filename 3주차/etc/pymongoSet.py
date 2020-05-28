from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta


# pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
# mongoDB는 27017 포트로 돌아갑니다.
# 'dbsparta'라는 이름의 db를 만듭니다.


# 바꾸기 예시
db.users.update_one({'name': 'bobby'}, {'$set': {'age': 19}})


# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
same_ages = list(db.users.find({'age': 21}, {'_id': False}))
