namespace L03_hexenkessel {
    window.addEventListener("load", hanleLoad);

    function hanleLoad(_event: Event): void{
        console.log("Start");

        let form = HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let button =HTMLDivElement = <HTMLDivElement>document.querySelector("div'button");
        
        form.addEventListener("change", handleChange);
        button.addEventListener("click", submitTrank);
        
        
    }
    function handleChange(){
        console.log("Change");
        let display: HTMLDivElement = <HTMLDivElement>document.querySelector("div#display");
        display.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData){
            let trank: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(trank.getAttribute("price"));

            display.innerHTML += trank.name + "  Galleone" + price;
        }
    }
    function submitTrank(){
        console.log("Submit");
       let reset: HTMLElement = <HTMLElement>document.querySelector("form#myForm");
       reset.innerHTML = "";
        alert("Danke für deinen Zaubertrank");
        
    }
    
    
    
    
}