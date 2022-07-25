/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _images_200_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/200.png */ "./src/images/200.png");
/* harmony import */ var _images_300_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/300.png */ "./src/images/300.png");
/* harmony import */ var _images_500_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/500.png */ "./src/images/500.png");
/* harmony import */ var _images_600_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/600.png */ "./src/images/600.png");
/* harmony import */ var _images_700_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/700.png */ "./src/images/700.png");
/* harmony import */ var _images_800_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/800.png */ "./src/images/800.png");
/* harmony import */ var _images_801_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/801.png */ "./src/images/801.png");
/* harmony import */ var _images_feels_like_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/feels_like.png */ "./src/images/feels_like.png");
/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/humidity.png */ "./src/images/humidity.png");










class UI {
  static renderWeatherContainer(data) {
    const main = document.querySelector('main');
    const location = document.querySelector('#location');
    const temperature = document.querySelector('#temperature');
    const description = document.querySelector('#description');
    const feelsIcon = document.querySelector('#feels-like-icon');
    const feelsText = document.querySelector('#feels-like');
    const humidityIcon = document.querySelector('#humidity-icon');
    const humidityText = document.querySelector('#humidity');

    location.textContent = data.name;
    description.textContent = data.description;
    humidityText.textContent = `${data.humidity}%`;
    temperature.textContent = `${data.temp}°F`;
    feelsText.textContent = `${data.feels_like}°F`;

    UI.setWeatherIcon(data.id);
    feelsIcon.src = _images_feels_like_png__WEBPACK_IMPORTED_MODULE_7__;
    humidityIcon.src = _images_humidity_png__WEBPACK_IMPORTED_MODULE_8__;

    if (main.classList.contains('hidden')) {
      main.classList.toggle('hidden');
    }
  }

  static celsiusToFahrenheit() {
    const temperature = document.querySelector('#temperature');
    const feelsText = document.querySelector('#feels-like');

    const fahrenheitTemp = Math.round(
      (+temperature.textContent.split('°')[0] * 9) / 5 + 32
    );
    const fahrenheitFeels = Math.round(
      (+feelsText.textContent.split('°')[0] * 9) / 5 + 32
    );

    temperature.textContent = `${fahrenheitTemp}°F`;
    feelsText.textContent = `${fahrenheitFeels}°F`;
  }

  static fahrenheitToCelsius() {
    const temperature = document.querySelector('#temperature');
    const feelsText = document.querySelector('#feels-like');

    const celsiusTemp = Math.round(
      ((+temperature.textContent.split('°')[0] - 32) * 5) / 9
    );
    const celsiusFeels = Math.round(
      ((+feelsText.textContent.split('°')[0] - 32) * 5) / 9
    );

    temperature.textContent = `${celsiusTemp}°C`;
    feelsText.textContent = `${celsiusFeels}°C`;
  }

  static setWeatherIcon(id) {
    const weatherIcon = document.querySelector('#temperature-icon');
    if (id < 300) {
      weatherIcon.src = _images_200_png__WEBPACK_IMPORTED_MODULE_0__;
    } else if (id < 500) {
      weatherIcon.src = _images_300_png__WEBPACK_IMPORTED_MODULE_1__;
    } else if (id < 600) {
      weatherIcon.src = _images_500_png__WEBPACK_IMPORTED_MODULE_2__;
    } else if (id < 700) {
      weatherIcon.src = _images_600_png__WEBPACK_IMPORTED_MODULE_3__;
    } else if (id < 800) {
      weatherIcon.src = _images_700_png__WEBPACK_IMPORTED_MODULE_4__;
    } else if (id < 801) {
      weatherIcon.src = _images_800_png__WEBPACK_IMPORTED_MODULE_5__;
    } else {
      weatherIcon.src = _images_801_png__WEBPACK_IMPORTED_MODULE_6__;
    }
  }
}


/***/ }),

/***/ "./src/modules/Weather.js":
/*!********************************!*\
  !*** ./src/modules/Weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
class Weather {
  static async getData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=17c08553eeb63939b321ceef5b107ab0`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Location:${location} not found`);
      return Weather.processData(await response.json());
    } catch (error) {
      console.log(error);
    }
  }

  static processData(data) {
    const name = data.name;
    const id = data.weather[0].id;
    const description = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const feels_like = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;

    return {
      name,
      id,
      description,
      temp,
      feels_like,
      humidity,
    };
  }
}


/***/ }),

/***/ "./src/images/200.png":
/*!****************************!*\
  !*** ./src/images/200.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1669446038d50647e7ba.png";

/***/ }),

/***/ "./src/images/300.png":
/*!****************************!*\
  !*** ./src/images/300.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd580750838c3b13cc25.png";

/***/ }),

/***/ "./src/images/500.png":
/*!****************************!*\
  !*** ./src/images/500.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4fff74ad26b150d091b.png";

/***/ }),

/***/ "./src/images/600.png":
/*!****************************!*\
  !*** ./src/images/600.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbbb523d69a4ae47670e.png";

/***/ }),

/***/ "./src/images/700.png":
/*!****************************!*\
  !*** ./src/images/700.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30f28953e2c5f9ab6d29.png";

/***/ }),

/***/ "./src/images/800.png":
/*!****************************!*\
  !*** ./src/images/800.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a935485c4696c94c61a.png";

/***/ }),

/***/ "./src/images/801.png":
/*!****************************!*\
  !*** ./src/images/801.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7bf6907fea49412726e.png";

/***/ }),

/***/ "./src/images/feels_like.png":
/*!***********************************!*\
  !*** ./src/images/feels_like.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfeddc3d23d6f6416329.png";

/***/ }),

/***/ "./src/images/humidity.png":
/*!*********************************!*\
  !*** ./src/images/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc190dbffcc42cda0403.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Weather */ "./src/modules/Weather.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");





const locationSearch = document.querySelector('#location-search');
const btn = document.querySelector('button');
const checkbox = document.querySelector('#myToggle');

checkbox.addEventListener('click', (e) => {
  if (e.target.checked) {
    _modules_UI__WEBPACK_IMPORTED_MODULE_3__["default"].fahrenheitToCelsius();
  } else {
    _modules_UI__WEBPACK_IMPORTED_MODULE_3__["default"].celsiusToFahrenheit();
  }
});

btn.addEventListener('click', async () => {
  const location = locationSearch.value;
  if (location) {
    const weatherData = await _modules_Weather__WEBPACK_IMPORTED_MODULE_2__["default"].getData(location);
    locationSearch.value = '';
    if (weatherData) {
      checkbox.checked = false;
      _modules_UI__WEBPACK_IMPORTED_MODULE_3__["default"].renderWeatherContainer(weatherData);
    }
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ0E7QUFDSDtBQUNBO0FBQ0M7QUFDQTtBQUNDO0FBQ007QUFDQzs7QUFFL0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELGlDQUFpQyxVQUFVO0FBQzNDLCtCQUErQixnQkFBZ0I7O0FBRS9DO0FBQ0Esb0JBQW9CLG1EQUFLO0FBQ3pCLHVCQUF1QixpREFBUTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsZUFBZTtBQUNoRCwrQkFBK0IsZ0JBQWdCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLFlBQVk7QUFDN0MsK0JBQStCLGFBQWE7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFPO0FBQy9CLE1BQU07QUFDTix3QkFBd0IsNENBQU87QUFDL0IsTUFBTTtBQUNOLHdCQUF3Qiw0Q0FBSTtBQUM1QixNQUFNO0FBQ04sd0JBQXdCLDRDQUFJO0FBQzVCLE1BQU07QUFDTix3QkFBd0IsNENBQUs7QUFDN0IsTUFBTTtBQUNOLHdCQUF3Qiw0Q0FBSztBQUM3QixNQUFNO0FBQ04sd0JBQXdCLDRDQUFNO0FBQzlCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEZlO0FBQ2Y7QUFDQSxxRUFBcUUsU0FBUztBQUM5RTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUI7QUFDRjtBQUNtQjtBQUNWOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQXNCO0FBQzFCLElBQUk7QUFDSixJQUFJLHVFQUFzQjtBQUMxQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdFQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQXlCO0FBQy9CO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzP2ZiNTciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB0aHVuZGVyIGZyb20gJy4uL2ltYWdlcy8yMDAucG5nJztcbmltcG9ydCBkcml6emxlIGZyb20gJy4uL2ltYWdlcy8zMDAucG5nJztcbmltcG9ydCByYWluIGZyb20gJy4uL2ltYWdlcy81MDAucG5nJztcbmltcG9ydCBzbm93IGZyb20gJy4uL2ltYWdlcy82MDAucG5nJztcbmltcG9ydCBhdG1vcyBmcm9tICcuLi9pbWFnZXMvNzAwLnBuZyc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi4vaW1hZ2VzLzgwMC5wbmcnO1xuaW1wb3J0IGNsb3VkcyBmcm9tICcuLi9pbWFnZXMvODAxLnBuZyc7XG5pbXBvcnQgZmVlbHMgZnJvbSAnLi4vaW1hZ2VzL2ZlZWxzX2xpa2UucG5nJztcbmltcG9ydCBodW1pZGl0eSBmcm9tICcuLi9pbWFnZXMvaHVtaWRpdHkucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgcmVuZGVyV2VhdGhlckNvbnRhaW5lcihkYXRhKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBmZWVsc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZS1pY29uJyk7XG4gICAgY29uc3QgZmVlbHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbiAgICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHktaWNvbicpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIGh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9JWA7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9wrBGYDtcbiAgICBmZWVsc1RleHQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzX2xpa2V9wrBGYDtcblxuICAgIFVJLnNldFdlYXRoZXJJY29uKGRhdGEuaWQpO1xuICAgIGZlZWxzSWNvbi5zcmMgPSBmZWVscztcbiAgICBodW1pZGl0eUljb24uc3JjID0gaHVtaWRpdHk7XG5cbiAgICBpZiAobWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjZWxzaXVzVG9GYWhyZW5oZWl0KCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgZmVlbHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcblxuICAgIGNvbnN0IGZhaHJlbmhlaXRUZW1wID0gTWF0aC5yb3VuZChcbiAgICAgICgrdGVtcGVyYXR1cmUudGV4dENvbnRlbnQuc3BsaXQoJ8KwJylbMF0gKiA5KSAvIDUgKyAzMlxuICAgICk7XG4gICAgY29uc3QgZmFocmVuaGVpdEZlZWxzID0gTWF0aC5yb3VuZChcbiAgICAgICgrZmVlbHNUZXh0LnRleHRDb250ZW50LnNwbGl0KCfCsCcpWzBdICogOSkgLyA1ICsgMzJcbiAgICApO1xuXG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0VGVtcH3CsEZgO1xuICAgIGZlZWxzVGV4dC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXRGZWVsc33CsEZgO1xuICB9XG5cbiAgc3RhdGljIGZhaHJlbmhlaXRUb0NlbHNpdXMoKSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICBjb25zdCBmZWVsc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xuXG4gICAgY29uc3QgY2Vsc2l1c1RlbXAgPSBNYXRoLnJvdW5kKFxuICAgICAgKCgrdGVtcGVyYXR1cmUudGV4dENvbnRlbnQuc3BsaXQoJ8KwJylbMF0gLSAzMikgKiA1KSAvIDlcbiAgICApO1xuICAgIGNvbnN0IGNlbHNpdXNGZWVscyA9IE1hdGgucm91bmQoXG4gICAgICAoKCtmZWVsc1RleHQudGV4dENvbnRlbnQuc3BsaXQoJ8KwJylbMF0gLSAzMikgKiA1KSAvIDlcbiAgICApO1xuXG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtjZWxzaXVzVGVtcH3CsENgO1xuICAgIGZlZWxzVGV4dC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXNGZWVsc33CsENgO1xuICB9XG5cbiAgc3RhdGljIHNldFdlYXRoZXJJY29uKGlkKSB7XG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUtaWNvbicpO1xuICAgIGlmIChpZCA8IDMwMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gdGh1bmRlcjtcbiAgICB9IGVsc2UgaWYgKGlkIDwgNTAwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBkcml6emxlO1xuICAgIH0gZWxzZSBpZiAoaWQgPCA2MDApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IHJhaW47XG4gICAgfSBlbHNlIGlmIChpZCA8IDcwMCkge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gc25vdztcbiAgICB9IGVsc2UgaWYgKGlkIDwgODAwKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBhdG1vcztcbiAgICB9IGVsc2UgaWYgKGlkIDwgODAxKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBjbGVhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2VhdGhlckljb24uc3JjID0gY2xvdWRzO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciB7XG4gIHN0YXRpYyBhc3luYyBnZXREYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9MTdjMDg1NTNlZWI2MzkzOWIzMjFjZWVmNWIxMDdhYjBgO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYExvY2F0aW9uOiR7bG9jYXRpb259IG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuIFdlYXRoZXIucHJvY2Vzc0RhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgY29uc3QgbmFtZSA9IGRhdGEubmFtZTtcbiAgICBjb25zdCBpZCA9IGRhdGEud2VhdGhlclswXS5pZDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCB0ZW1wID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XG4gICAgY29uc3QgZmVlbHNfbGlrZSA9IE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWUsXG4gICAgICBpZCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGVtcCxcbiAgICAgIGZlZWxzX2xpa2UsXG4gICAgICBodW1pZGl0eSxcbiAgICB9O1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL21vZHVsZXMvV2VhdGhlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcblxuY29uc3QgbG9jYXRpb25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tc2VhcmNoJyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215VG9nZ2xlJyk7XG5cbmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICBVSS5mYWhyZW5oZWl0VG9DZWxzaXVzKCk7XG4gIH0gZWxzZSB7XG4gICAgVUkuY2Vsc2l1c1RvRmFocmVuaGVpdCgpO1xuICB9XG59KTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VhcmNoLnZhbHVlO1xuICBpZiAobG9jYXRpb24pIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFdlYXRoZXIuZ2V0RGF0YShsb2NhdGlvbik7XG4gICAgbG9jYXRpb25TZWFyY2gudmFsdWUgPSAnJztcbiAgICBpZiAod2VhdGhlckRhdGEpIHtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIFVJLnJlbmRlcldlYXRoZXJDb250YWluZXIod2VhdGhlckRhdGEpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=