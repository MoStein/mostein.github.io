import * as Http from "http";
import * as Url from "url";

export namespace L04_hexenkessel{
    let server: Http.Server = Http.createServer();

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
    port = 5001;

    console.log("Server starting on port: " + port);

    server.listen(port);
    server.addListener("request", handleRequest);

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
        }
        _response.end();
    }
}