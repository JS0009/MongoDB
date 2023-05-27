import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/mydatabase";

MongoClient.connect(uri, function (err, client) {
    if (err) throw err;

    // Получение базы данных
    const db = client.db("mydatabase");
    console.log("Database created!");

    // Выбор коллекции
    const col = db.collection("customers");
    console.log("Collection created!");

    // Вставка документа в коллекцию
    const mydoc = { name: "John", address: "Highway 37" };
    col.insertOne(mydoc, function (err, res) {
        if (err) throw err;

        // Печать ID вставленного документа
        console.log("Document inserted with ID: " + res.insertedId);

        // Закрытие подключения
        client.close();
    });
});
// 51.195.31.187 / 32
// uY95hxkmfJtupZ8V
// mongodb://magadb:uY95hxkmfJtupZ8V@51.195.31.187:32/mydatabase