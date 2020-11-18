namespace L04_hexenkessel {
    window.addEventListener("load", hanleLoad);

    async function hanleLoad(_event: Event): Promise<void>{
        console.log("Start");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        let buttonEins : HTMLElement = <HTMLElement>document.querySelector("button#saveOne");
        let buttonZwei : HTMLElement = <HTMLElement>document.querySelector("button#saveTwo");
        let submit : HTMLElement = <HTMLElement>document.querySelector("button#hexhex");
        
        buttonEins.addEventListener("click", handleChange);
        buttonZwei.addEventListener("click", handleAnotherChange);
        submit.addEventListener("click", submitTrank);
        
        
    }
    async function submitTrank(_event: MouseEvent): Promise<void> {
        console.log("Submit");
       let formData: FormData = new FormData;
       let query: URLSearchParams = new URLSearchParams (<any>formData);
       await fetch("hexenkessel.html?" + query.toString()); 
        alert("Danke für deinen Zaubertrank");
        
    }

    function handleChange(_event: MouseEvent): void{
        console.log("Change");
        let display: HTMLDivElement = <HTMLDivElement>document.querySelector("div#display");
        display.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData){
            if (entry[1] != ""){
                display.innerHTML += entry[1] + "<br>";

            }
        }

    }
    function handleAnotherChange(_event: MouseEvent): void {
        console.log("Anweisungen");
        let display: HTMLElement = <HTMLElement>document.querySelector("div#display");
        display.innerHTML = "";

        let formData: FormData = new FormData(document.forms[1]);
        for (let entry of formData){
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            if (item.getAttribute("priceG")){
            let GalleonenPrice: number = Number(item.getAttribute("priceG"));
            let SickelPrice: number = Number(item.getAttribute("priceS"));
            let KnutsPrice: number = Number(item.getAttribute("priceK"));
            display.innerHTML += "Preis: " + GalleonenPrice.value + SickelPrice.value + KnutsPrice.value +"<br>"
            }
        }
        


    }
    
    
    
    
    
}