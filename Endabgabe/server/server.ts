import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace silvester {
    interface firework {
        [type: string]: string | string[] | undefined;
    }

}