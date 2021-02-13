import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace silvester {
    // let server: Http.Server = Http.createServer();
    interface Bomb {
        [type: string]: string | string[] | undefined;
    }

    let bombs: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined) {
        port = 5002;
    }

    let databaseUrl: string = "mongodb+srv://MoStein:olympiamuenchen@cluster0.ywjph.mongodb.net/Fireworks?retryWrites=true&w=majority"

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
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            _response.write("hallo");
            // let jsonString: string = JSON.stringify(url.query);
            // _response.write(jsonString);
            let search = location.search.substring(1);
            JSON.parse('{"' + decodeURI(search).replace(/"/g,'\\"').replace(/&/g, '","').replace(/=/g, '":"')+ '"}');

            // if (url.query != undefined) {
                storeFireworks(url.query);
            // }
        }
        _response.end();

    }
    async function storeFireworks(_bomb: Bomb): Promise<void> {
        // console.log("storing now");
        await bombs.insertOne(_bomb);
    }


}