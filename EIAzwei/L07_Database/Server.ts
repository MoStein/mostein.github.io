import * as Http from "http";
import * as Url from "url";

export namespace L04_hexenkessel{

    interface Recipe {
        [type: string]: string | string[];
    }
    let recipes: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
    port = 5001;

    let databaseUrl: string = "mongodb://localhost:27017";

    startServer(port);
    connectToDatabase(databaseUrl);

    

    function startServer (_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port: " + port);
        server.listen(port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        recipes = mongoClient.db("Hexenkessel").collection("Recipes");
        console.log("Database connection ", recipes != undefined);
    }


    function handleRequest(_request: Http.incomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _request.setHeader("conten-type", "type/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if(_request.url){
            let url: Url.UrlWithPardedQuery = Url.parse(_request.url, true);
            for (let key in url.query){
                _response.write(key + ":" + url.query[key] + "<br/>");

            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeRecipe(url.query);
        }
        _response.end();
    }
    async function handleRetrieveRecipes(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void>{
        let allRecipes: Mongo.Curser = recipes.find();
        let allRecipesString: string [] = await allRecipes.toArray();
        for (let recipe of allRecipesString){
            for (let key of allRecipesString){
                _response.write(key + ": " + Object(recipe)[key] + "\n");
            }
        }
    }
    }
    function storeRecipe(_recipe: Recipe): void {
        recipes.insert(_recipe);
    }
}