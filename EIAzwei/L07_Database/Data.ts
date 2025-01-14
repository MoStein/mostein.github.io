namespace L04_hexenkessel {
   export interface item{
        name: string;
        priceG: number;
        priceS: number;
        priceK: number;
    }
    export interface Data {
        [category: string]: item [];
    }
    export let data: Data = {
        zutaten: [
            {name: "Schlangenzunge", priceG: 1, priceS: 30, priceK: 9},
            {name: "Pferdeauge", priceG: 0, priceS: 120, priceK: 13},
            {name: "Fischdarm", priceG: 4, priceS: 99, priceK: 3},
            {name: "Ganze Spinnen", priceG: 9, priceS: 0, priceK: 13}
        ]
    }
}