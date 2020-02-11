namespace aufgabe13 {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia22228.herokuapp.com/";

    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + spielerName + "&punkte=" + highscore;
        sendRequest(query, handleInsertResponse);
        console.log(query);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    //parsen des JSON in ein Array und dann dieses Array sortieren und in HTML darstellen
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleSpieler: Spieler[] = JSON.parse(xhr.response);

            for (let i: number = 0; i < alleSpieler.length; i++) {
                // let nameS: string = AlleSpieler[i].name;
                // let scoreS: number = AlleSpieler[i].punktzahl;
                alleSpieler.sort(compareNumbers);
            }
            console.log(alleSpieler);
            for (let i: number = 0; i < 6; i++) {
                let prodElement: HTMLDivElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${alleSpieler[i].name} : ${alleSpieler[i].punktzahl} Punkte</div>`;
                document.getElementById("scoresBeste").appendChild(prodElement);
            }
        }
    }

    //Highscore Vergleich und danach wird das Array sortiert
    function compareNumbers(a: Spieler, b: Spieler): number {
        let scoreA: number = a.punktzahl;
        let scoreB: number = b.punktzahl;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
}