import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace silvester {
    interface Bomb {
        [type: string]: string | string[];
    }

    let bombs: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined) {
        port = 5002;
    }

    let databaseUrl: string = "mongodb+srv://MoStein:N3w-Media@cluster0.j3hzj.mongodb.net/DatenBankEIA2?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + port);
        server.listen(port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bombs = mongoClient.db("Silvester").collection("Fireworks");
        
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Server here, what's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            if (url.query["command"]=="retrieve"){
                let jsonString = JSON.stringify(await bombs.find().toArray());
                _response.write(jsonString);
            }
            else {
            _response.write("hallo");
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            storeFireworks(<Bomb>url.query);
            }
            
        } 
        _response.end();
    }
    async function storeFireworks(_bomb: Bomb): Promise<void> {
        await bombs.insertOne(_bomb);
    }


}