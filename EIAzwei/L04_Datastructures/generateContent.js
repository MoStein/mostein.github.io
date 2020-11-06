var L04_hexenkessel;
(function (L04_hexenkessel) {
    function generateContent(_data) {
        for (var category in _data) {
            var items = _data[category];
            var group = null;
            group = createMultiple(items, category);
        }
        var fieldset = document.querySelector("fieldset#zutaten");
        if (fieldset && group)
            fieldset.appendChild(group);
    }
    L04_hexenkessel.generateContent = generateContent;
    function createMultiple(_items, _category) {
        var group = document.createElement("div");
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var item = _items_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L04_hexenkessel || (L04_hexenkessel = {}));
