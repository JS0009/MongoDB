
import http from 'http';
import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/mydatabase";

const server = http.createServer((req, res) => {
    // Получение базы данных
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err;

        const db = client.db("mydatabase");

        // Выбор коллекции
        const collection = db.collection("customers");

        // Вставка документа в коллекцию
        const mydoc = { name: "John", address: "Highway 37" };
        collection.insertOne(mydoc, function (err, result) {
            if (err) throw err;

            // Проверка, что документ был успешно добавлен
            if (result.insertedCount === 1) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write(`Document inserted with ID: ${result.insertedId}`);
                res.end();

                // Закрытие подключения
                client.close();
            }
        });
    });
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
});