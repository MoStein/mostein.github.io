var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var L04_hexenkessel;
(function (L04_hexenkessel) {
    window.addEventListener("load", hanleLoad);
    function hanleLoad(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var response, offer, data, buttonEins, buttonZwei, submit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Start");
                        return [4 /*yield*/, fetch("Data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        offer = _a.sent();
                        data = JSON.parse(offer);
                        generateContent(data);
                        buttonEins = document.querySelector("button#safeOne");
                        buttonZwei = document.querySelector("button#safeTwo");
                        submit = document.querySelector("button#hexhex");
                        buttonEins.addEventListener("click", handleChange);
                        buttonZwei.addEventListener("click", handleAnotherChange);
                        submit.addEventListener("click", submitTrank);
                        return [2 /*return*/];
                }
            });
        });
    }
    function submitTrank(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Submit");
                        formData = new FormData;
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch("hexenkessel.html?" + query.toString())];
                    case 1:
                        _a.sent();
                        alert("Danke für deinen Zaubertrank");
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleChange(_event) {
        console.log("Change");
        var display = document.querySelector("div#display");
        display.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            if (entry[0] != "") {
                display.innerHTML += entry[1] + "<br>";
            }
        }
    }
    function handleAnotherChange(_event) {
        console.log("Anweisungen");
        var display = document.querySelector("div#display");
        display.innerHTML = "";
        var formData = new FormData(document.forms[1]);
        for (var _i = 0, formData_2 = formData; _i < formData_2.length; _i++) {
            var entry = formData_2[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var itemPrice = Number(item.getAttribute("price"));
            display.innerHTML += "Preis: " + itemPrice.value + "<br>";
        }
    }
})(L04_hexenkessel || (L04_hexenkessel = {}));
