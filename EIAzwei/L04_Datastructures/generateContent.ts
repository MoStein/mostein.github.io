namespace L04_hexenkessel {
    export function generateContent(_data: Data): void {
        for (let category in _data){
            let items: item [] = _data[category];
            let group: HTMLElement | null = null;
            group = createMultiple(items, category);
        }
        let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#zutaten");
        if (fieldset && group)
            fieldset.appendChild(group);

    }
    function createMultiple(_items: item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
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