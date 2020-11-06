namespace L04_hexenkessel {
    interface item{
        name: string;
        price: number;
    }
    export interface Data {
        [category: string]: item [];
    }
    export let data: Data = {
        zutaten: [
            {name: "Schlangenzunge", price: 1.30},
            {name: "Pferdeauge", price: 0.120},
            {name: "Fischdarm", price: 4.99},
            {name: "Ganze Spinnen", price: 9.00}
        ]
    }
}