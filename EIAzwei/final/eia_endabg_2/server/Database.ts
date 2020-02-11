

import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "DatenBankEia2";
let db: Mongo.Db;
let spieler: Mongo.Collection;

// funktioniert es auf Heroku
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    //databaseURL = "mongodb+srv://Sina:Si55Ha1s7i.@eia2-k3y7z.mongodb.net/Eia2";
   // databaseName = "Eia2";
    databaseURL = "mongodb+srv://FischFuss3:passwort@cluster0-plox3.mongodb.net/test?retryWrites=true&w=majority";
    databaseName = "Eia2";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        spieler = db.collection("ScoreList");
    }
}

export function insert(_doc: Spieler): void {
    // try insertion then activate callback "handleInsert"
    spieler.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    let cursor: Mongo.Cursor = spieler.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    console.log("Hi");

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, playerArray: Spieler[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(playerArray));
        console.log("Hallo");
    }
}

