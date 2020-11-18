var L04_hexenkessel;
(function (L04_hexenkessel) {
    function generateContent(_data) {
        let group = new HTMLDivElement;
        for (let category in _data) {
            let items = _data[category];
            group.appendChild(createMultiple(items, category));
        }
        let fieldset = document.querySelector("fieldset#zutaten");
        if (fieldset && group) {
            fieldset.appendChild(group);
        }
    }
    L04_hexenkessel.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("G", item.priceG.toFixed(2));
            checkbox.setAttribute("S", item.priceS.toFixed(2));
            checkbox.setAttribute("K", item.priceK.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L04_hexenkessel || (L04_hexenkessel = {}));
//# sourceMappingURL=generateContent.js.map