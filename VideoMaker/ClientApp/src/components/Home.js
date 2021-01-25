"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var DropZone_1 = require("./DropZone");
require("../css/Home.css");
var Home = function () { return (React.createElement("div", null,
    React.createElement("h1", null, "Welcome to Video Maker"),
    React.createElement("div", { className: "content" },
        React.createElement(DropZone_1.default, null)))); };
exports.default = react_redux_1.connect()(Home);
//# sourceMappingURL=Home.js.map