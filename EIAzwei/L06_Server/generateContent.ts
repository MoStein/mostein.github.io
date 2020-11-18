namespace L04_hexenkessel {
    export function generateContent(_data: Data): void {
        let group: HTMLDivElement = new HTMLDivElement();
        for (let category in _data){
            let items: item [] = _data[category];
            group.appendChild(createMultiple(items, category));

        }
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#zutaten");
        if (fieldset && group){
            fieldset.appendChild(group);
        }

    }
    function createMultiple(_items: item[], _category: string): HTMLDivElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("G", item.priceG.toFixed(2));
            checkbox.setAttribute("S", item.priceS.toFixed(2));
            checkbox.setAttribute("K", item.priceK.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
}