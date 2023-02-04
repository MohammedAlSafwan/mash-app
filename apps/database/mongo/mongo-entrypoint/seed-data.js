print("===============JAVASCRIPT===============")
print("Count of rows in mashed_app collection: " + db.mashed_app.count())

db.mashed_app.insert({ message: "Testing data is preserved on docker-compose down and docker-compose-up" })

print("===============AFTER JS INSERT==========")
print("Count of rows in mashed_app collection: " + db.mashed_app.count())

data = db.mashed_app.find()
while (data.hasNext()) {
  printjson(data.next())
}
