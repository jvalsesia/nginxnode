'use strict';

const express = require('express');
const mysql = require('mysql2/promise')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const connectDb = async () => {
    const connection = await mysql.createConnection({
        "host": "db",
        "user": "root",
        "password": "root",
        "database": "nodedb"

    })
    console.info('Connected to database')
    return connection
}



async function insert(name) {
    const connection = await connectDb()
    console.info('name: ' + name)
    // query database
    const [rows, fields] = await connection.execute('insert into people(name) values(?)', [name])
    console.table(rows)
    return rows
}

async function list() {
    const connection = await connectDb()
    // query database
    const [rows, fields] = await connection.execute('select * from people')
    console.table(rows)
    return rows
}

app.post('/insert', async function (req, res) {
    var name = req.body.name
    var result = await insert(name)
    res.send(result)
});


app.get('/list', async (req, res) => {
    var people = await list()
    res.send(people)
});

app.get('/', async (req, res) => {
    var people = await list()
    const title = '<h1>Full Cycle Rocks!</h1>'
    const listStart = '<p>Lista de nomes cadastrada no banco de dados</p>'
    const tableStart = '<table style="width:20%"><tr><td><b>Id</b></td><td><b>Name</b></td></tr>'

    var peopleList = "";
    people.forEach(person => {
        peopleList += '<tr><td>' + person.id + '</td>' + '<td>' + person.name + '</td></tr>'
    });
    const tableEnd = '</table>'

    res.send(title + listStart + tableStart + peopleList + tableEnd)

});



app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)