/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(1);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Arc = __webpack_require__(2);\n\nvar _Arc2 = _interopRequireDefault(_Arc);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.getElementById('canvas');\nvar c = canvas.getContext('2d');\nvar windWidth = void 0;\nvar windWHeight = void 0;\nfunction setCanvasSize() {\n    windWidth = window.innerWidth;\n    windWHeight = window.innerHeight;\n    canvas.width = windWidth;\n    canvas.height = windWHeight;\n}\n\nsetCanvasSize();\nwindow.onresize = setCanvasSize;\n\nvar length = 450;\n\nfor (var i = 0; i < length; i++) {\n    new _Arc2.default(_Arc2.default.getRandomParams(windWidth, windWHeight));\n}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n    c.clearRect(0, 0, windWidth, windWHeight);\n    _Arc2.default.arcArr.forEach(function (arc) {\n        arc.update(c, windWidth, windWHeight);\n    });\n}\n\nanimate();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Arc = function Arc(_ref) {\n    var x = _ref.x,\n        y = _ref.y,\n        dx = _ref.dx,\n        dy = _ref.dy,\n        radius = _ref.radius;\n\n    _classCallCheck(this, Arc);\n\n    _initialiseProps.call(this);\n\n    this.radius = radius;\n    this.x = x;\n    this.y = y;\n    this.dx = dx;\n    this.dy = dy;\n    Arc.arcArr.push(this);\n};\n\nArc.arcArr = [];\n\nArc.getRandomParams = function (windWidth, windWHeight) {\n    var radius = 30;\n    var getRandXY = function getRandXY(direction) {\n        return Math.random() * (direction - 2 * radius) + radius;\n    };\n    var randX = getRandXY(windWidth);\n    var randY = getRandXY(windWHeight);\n    var i = 0;\n    while (true) {\n        i++;\n        if (i > 200) {\n            console.log('слишком много шаров для данного экрана');\n            break;\n        }\n        var stumble = Arc.arcArr.some(function (arc) {\n            return Math.sqrt(Math.pow(arc.x - randX, 2) + Math.pow(arc.y - randY, 2)) < 2 * radius;\n        });\n        if (stumble) {\n            randX = getRandXY(windWidth);\n            randY = getRandXY(windWHeight);\n        } else break;\n    }\n    return {\n        x: randX,\n        y: randY,\n        radius: radius,\n        dx: Math.random(),\n        dy: Math.random()\n    };\n};\n\nvar _initialiseProps = function _initialiseProps() {\n    var _this = this;\n\n    this.draw = function (canvasContext) {\n        var color = 'yellow';\n        canvasContext.beginPath();\n        canvasContext.strokeStyle = color;\n        canvasContext.fillStyle = color;\n        canvasContext.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);\n        canvasContext.fill();\n        canvasContext.stroke();\n    };\n\n    this.update = function (canvasContext, windWidth, windWHeight) {\n        _this.draw(canvasContext);\n        var radius = _this.radius;\n        if (_this.x + radius > windWidth || _this.x - radius < 0) {\n            _this.dx *= -1;\n        }\n        if (_this.y + radius > windWHeight || _this.y - radius < 0) {\n            _this.dy *= -1;\n        }\n        Arc.arcArr.forEach(function (arc, index) {\n            if (arc !== _this) {\n                if (Math.sqrt(Math.pow(arc.x - _this.x, 2) + Math.pow(arc.y - _this.y, 2)) < 2 * radius) {\n                    _this.dx *= -1;\n                    _this.dy *= -1;\n                    Arc.arcArr.splice(index, 1);\n                }\n            }\n        });\n        _this.x += _this.dx;\n        _this.y += _this.dy;\n    };\n};\n\nexports.default = Arc;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Arc.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/Arc.js?");

/***/ })
/******/ ]);