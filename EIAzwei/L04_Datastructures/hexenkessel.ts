namespace L04_hexenkessel {
    window.addEventListener("load", hanleLoad);

    function hanleLoad(_event: Event): void{
        console.log("Start");

        generateContent(data);

        let buttonEins : HTMLElement = <HTMLElement>document.querySelector("button#safeOne");
        let buttonZwei : HTMLElement = <HTMLElement>document.querySelector("button#safeTwo");
        let button : HTMLElement = <HTMLElement>document.querySelector("button#hexhex");
        
        buttonEins.addEventListener("click", handleChange);
        buttonZwei.addEventListener("click", handleAnotherChange);
        button.addEventListener("click", submitTrank);
        
        
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
            let itemPrice: number = Number(item.getAttribute("price"));
            display.innerHTML += "Preis: " + itemPrice.value + "<br>"
        }
        


    }
    function submitTrank(_event: MouseEvent): void {
        console.log("Submit");
       let reset: HTMLElement = <HTMLElement>document.querySelector("form#formEins");
       reset.innerHTML = "";
        document.write("Danke für deinen Zaubertrank");
        
    }
    
    
    
    
}