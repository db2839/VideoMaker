"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../css/DropZone.css");
var DropZone = /** @class */ (function (_super) {
    __extends(DropZone, _super);
    function DropZone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dragOver = function (e) {
            e.preventDefault();
        };
        _this.dragEnter = function (e) {
            e.preventDefault();
        };
        _this.dragLeave = function (e) {
            e.preventDefault();
        };
        _this.fileDrop = function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            console.log(files);
            if (files.length) {
                _this.handlefiles(files);
            }
        };
        _this.validateFile = function (file) {
            var validTypes = ['audio/mpeg', 'video/mp4', 'video/mpeg'];
            if (validTypes.indexOf(file.type) === -1) {
                return false;
            }
            return true;
        };
        _this.handlefiles = function (files) {
            for (var i = 0; i < files.length; i++) {
                if (_this.validateFile(files[i])) {
                    alert("Valid File Type");
                }
                else {
                    alert("Invalid File Type");
                }
            }
        };
        return _this;
    }
    DropZone.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "dropContainer", onDragOver: this.dragOver, onDragEnter: this.dragEnter, onDragLeave: this.dragLeave, onDrop: this.fileDrop },
                React.createElement("div", { className: "drop-message" },
                    React.createElement("div", { className: "upload-icon" }),
                    "Drag & Drop files here or click to upload"))));
    };
    return DropZone;
}(React.Component));
exports.default = DropZone;
//# sourceMappingURL=DropZone.js.map