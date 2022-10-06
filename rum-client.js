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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TrackPerformance = /** @class */ (function () {
    function TrackPerformance(_a) {
        var _this = this;
        var trackUrl = _a.trackUrl, _b = _a.threshold, threshold = _b === void 0 ? 6000 : _b, _c = _a.batchSize, batchSize = _c === void 0 ? 50 : _c, _d = _a.excludeKeys, excludeKeys = _d === void 0 ? [] : _d, _e = _a.excludeHosts, excludeHosts = _e === void 0 ? [] : _e, _f = _a.includeHosts, includeHosts = _f === void 0 ? [] : _f, parserCb = _a.parserCb, filterCb = _a.filterCb, addAdditionalData = _a.addAdditionalData;
        this.queuedEntries = [];
        this.options = {
            trackUrl: trackUrl,
            threshold: threshold,
            batchSize: batchSize,
            excludeKeys: excludeKeys,
            excludeHosts: excludeHosts,
            includeHosts: includeHosts,
            parserCb: parserCb,
            filterCb: filterCb,
            addAdditionalData: addAdditionalData
        };
        if ("performance" in window) {
            if ("PerformanceObserver" in window) {
                var perfObserver = new PerformanceObserver(function (list, obj) {
                    _this.handleEntries(list.getEntries());
                });
                perfObserver.observe({
                    entryTypes: ["resource"]
                });
            }
            else {
                // To-Do
            }
        }
        // tslint:disable-next-line
        window.onload = function () {
            setTimeout(function () {
                console.log("onload------------>");
                _this.handleEntries(performance.getEntriesByType("navigation"));
            }, 0);
        };
        console.log("Setting up setInterval to push track data");
        this.intervalId = window.setInterval(function () {
            if (_this.queuedEntries.length) {
                _this.sendToServer();
                _this.queuedEntries = [];
            }
        }, threshold);
    }
    TrackPerformance.computeMetrics = function (entry) {
        entry.dnsTime = entry.domainLookupEnd - entry.domainLookupStart;
        // Total Connection time
        entry.connectionTime = entry.connectEnd - entry.connectStart;
        // TLS time
        if (entry.secureConnectionStart > 0) {
            entry.tlsTime = entry.connectEnd - entry.secureConnectionStart;
        }
        // Time to First Byte (TTFB)
        entry.ttfb = entry.responseStart - entry.requestStart;
        /*
          The fetchStart read-only property represents a timestamp immediately
          before the browser starts to fetch the resource.
        */
        entry.fetchTime = entry.responseEnd - entry.fetchStart;
        if (entry.workerStart > 0) {
            entry.workerTime = entry.responseEnd - entry.workerStart;
        }
        /*
          The requestStart read-only property returns a timestamp of the time
          immediately before the browser starts requesting the resource from the
          server, cache, or local resource
          Request plus response time (network only)
        */
        entry.totalTime = entry.responseEnd - entry.requestStart;
        // Response time only (download)
        entry.downloadTime = entry.responseEnd - entry.responseStart;
        // HTTP header size
        entry.headerSize = entry.transferSize - entry.encodedBodySize;
        // Compression ratio
        entry.compressionRatio = entry.decodedBodySize / entry.encodedBodySize;
        // Page Time
        if (entry.entryType === "navigation") {
            entry.DOMContentLoadTime = entry.domContentLoadedEventEnd - entry.startTime;
            entry.pageLoadTime = entry.loadEventEnd - entry.startTime;
        }
        return entry;
    };
    TrackPerformance.chunk = function (array, size) {
        return array.reduce(function (res, item, index) {
            if (index % size === 0) {
                res.push([]);
            }
            res[res.length - 1].push(item);
            return res;
        }, []);
    };
    TrackPerformance.prototype.handleEntries = function (entries) {
        console.log("handleEntries------------>");
        var _a = this.options, trackUrl = _a.trackUrl, excludeKeys = _a.excludeKeys, excludeHosts = _a.excludeHosts, includeHosts = _a.includeHosts, parserCb = _a.parserCb, filterCb = _a.filterCb;
        entries = entries.map(function (entry) { return entry.toJSON(); });
        console.log(" entries.map------------>", entries);
        // entries = entries.filter((entry) => {
        //   let flag = entry.name.indexOf(trackUrl) === -1;
        //   console.log(" entries.name------------>",entry.name);
        //   flag = includeHosts.length > 0 ?
        //     (flag && includeHosts.some((host) => entry.name.indexOf(host) > -1)) :
        //     (flag && !excludeHosts.some((host) => entry.name.indexOf(host) > -1));
        //   return flag;
        // });
        console.log("TrackPerformance----------->", TrackPerformance);
        entries = entries.map(TrackPerformance.computeMetrics);
        console.log("entries----------->", entries);
        if (parserCb && typeof parserCb === "function") {
            entries = entries.map(parserCb);
        }
        if (filterCb && typeof filterCb === "function") {
            entries = entries.filter(filterCb);
        }
        if (excludeKeys.length) {
            entries = entries.map(function (entry) {
                return Object.keys(entry).reduce(function (acc, key) {
                    if (excludeKeys.indexOf(key) === -1) {
                        acc[key] = entry[key];
                    }
                    return acc;
                }, {});
            });
        }
        this.queuedEntries = this.queuedEntries.concat(entries);
        console.log("queuedEntries---------->", this.queuedEntries);
    };
    TrackPerformance.prototype.sendToServer = function () {
        var _a = this.options, _b = _a.batchSize, batchSize = _b === void 0 ? 50 : _b, trackUrl = _a.trackUrl, addAdditionalData = _a.addAdditionalData;
        var entryChunks = TrackPerformance.chunk(this.queuedEntries, batchSize);
        var promise = Promise.resolve();
        entryChunks.forEach(function (entryChunk, index) {
            promise = promise.then(function () {
                return new Promise(function (resolve, reject) {
                    var body = {
                        data: entryChunk,
                        additionalData: addAdditionalData()
                    };
                    fetch(trackUrl, {
                        method: "post",
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    }).then(function (res) { return res.json(); })
                        .then(function (res) {
                        return resolve();
                    }).catch(function (error) {
                        // tslint:disable-next-line
                        console.log("Error while sending data to /track: ", error, body);
                        return resolve();
                    });
                });
            });
        });
    };
    TrackPerformance.prototype.stop = function () {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    };
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtJQWdFRSwwQkFBWSxFQVVlO1FBVjNCLGlCQXNEQztZQXJEQyxzQkFBUSxFQUNSLGlCQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsaUJBQWMsRUFBZCxtQ0FBYyxFQUNkLG1CQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsb0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixvQkFBaUIsRUFBakIsc0NBQWlCLEVBQ2pCLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUix3Q0FBaUI7UUFFakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVE7WUFDUixTQUFTO1lBQ1QsU0FBUztZ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QUFKO1FBQ0UsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDO0FBRUQsMkNBQTJDO0FBQzFDLE1BQWMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxrQkFBZSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJydW0tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucyB7XHJcbiAgdHJhY2tVcmw6IHN0cmluZztcclxuICB0aHJlc2hvbGQ/OiBudW1iZXI7XHJcbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xyXG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXTtcclxuICBleGNsdWRlSG9zdHM6IHN0cmluZ1tdO1xyXG4gIGluY2x1ZGVIb3N0czogc3RyaW5nW107XHJcbiAgcGFyc2VyQ2I6IGFueTtcclxuICBmaWx0ZXJDYjogYW55O1xyXG4gIGFkZEFkZGl0aW9uYWxEYXRhOiBhbnk7XHJcbn1cclxuXHJcbmNsYXNzIFRyYWNrUGVyZm9ybWFuY2Uge1xyXG5cclxuICBzdGF0aWMgY29tcHV0ZU1ldHJpY3MoZW50cnk6IGFueSkge1xyXG4gICAgZW50cnkuZG5zVGltZSA9IGVudHJ5LmRvbWFpbkxvb2t1cEVuZCAtIGVudHJ5LmRvbWFpbkxvb2t1cFN0YXJ0O1xyXG5cclxuICAgIC8vIFRvdGFsIENvbm5lY3Rpb24gdGltZVxyXG4gICAgZW50cnkuY29ubmVjdGlvblRpbWUgPSBlbnRyeS5jb25uZWN0RW5kIC0gZW50cnkuY29ubmVjdFN0YXJ0O1xyXG5cclxuICAgIC8vIFRMUyB0aW1lXHJcbiAgICBpZiAoZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0ID4gMCkge1xyXG4gICAgICBlbnRyeS50bHNUaW1lID0gZW50cnkuY29ubmVjdEVuZCAtIGVudHJ5LnNlY3VyZUNvbm5lY3Rpb25TdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lIHRvIEZpcnN0IEJ5dGUgKFRURkIpXHJcbiAgICBlbnRyeS50dGZiID0gZW50cnkucmVzcG9uc2VTdGFydCAtIGVudHJ5LnJlcXVlc3RTdGFydDtcclxuXHJcbiAgICAvKlxyXG4gICAgICBUaGUgZmV0Y2hTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmVwcmVzZW50cyBhIHRpbWVzdGFtcCBpbW1lZGlhdGVseVxyXG4gICAgICBiZWZvcmUgdGhlIGJyb3dzZXIgc3RhcnRzIHRvIGZldGNoIHRoZSByZXNvdXJjZS5cclxuICAgICovXHJcbiAgICBlbnRyeS5mZXRjaFRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LmZldGNoU3RhcnQ7XHJcbiAgICBpZiAoZW50cnkud29ya2VyU3RhcnQgPiAwKSB7XHJcbiAgICAgIGVudHJ5LndvcmtlclRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LndvcmtlclN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgIFRoZSByZXF1ZXN0U3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJldHVybnMgYSB0aW1lc3RhbXAgb2YgdGhlIHRpbWVcclxuICAgICAgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZSBmcm9tIHRoZVxyXG4gICAgICBzZXJ2ZXIsIGNhY2hlLCBvciBsb2NhbCByZXNvdXJjZVxyXG4gICAgICBSZXF1ZXN0IHBsdXMgcmVzcG9uc2UgdGltZSAobmV0d29yayBvbmx5KVxyXG4gICAgKi9cclxuICAgIGVudHJ5LnRvdGFsVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkucmVxdWVzdFN0YXJ0O1xyXG5cclxuICAgIC8vIFJlc3BvbnNlIHRpbWUgb25seSAoZG93bmxvYWQpXHJcbiAgICBlbnRyeS5kb3dubG9hZFRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LnJlc3BvbnNlU3RhcnQ7XHJcblxyXG4gICAgLy8gSFRUUCBoZWFkZXIgc2l6ZVxyXG4gICAgZW50cnkuaGVhZGVyU2l6ZSA9IGVudHJ5LnRyYW5zZmVyU2l6ZSAtIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcclxuXHJcbiAgICAvLyBDb21wcmVzc2lvbiByYXRpb1xyXG4gICAgZW50cnkuY29tcHJlc3Npb25SYXRpbyA9IGVudHJ5LmRlY29kZWRCb2R5U2l6ZSAvIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcclxuXHJcbiAgICAvLyBQYWdlIFRpbWVcclxuICAgIGlmIChlbnRyeS5lbnRyeVR5cGUgPT09IFwibmF2aWdhdGlvblwiKSB7XHJcbiAgICAgIGVudHJ5LkRPTUNvbnRlbnRMb2FkVGltZSA9IGVudHJ5LmRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCAtIGVudHJ5LnN0YXJ0VGltZTtcclxuICAgICAgZW50cnkucGFnZUxvYWRUaW1lID0gZW50cnkubG9hZEV2ZW50RW5kIC0gZW50cnkuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaHVuayhhcnJheTogYW55W10sIHNpemU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzLCBpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggJSBzaXplID09PSAwKSB7XHJcbiAgICAgICAgcmVzLnB1c2goW10pO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc1tyZXMubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcbiAgcXVldWVkRW50cmllczogYW55W107XHJcbiAgb3B0aW9uczogSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zO1xyXG4gIGludGVydmFsSWQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgdHJhY2tVcmwsXHJcbiAgICB0aHJlc2hvbGQgPSA2MDAwLFxyXG4gICAgYmF0Y2hTaXplID0gNTAsXHJcbiAgICBleGNsdWRlS2V5cyA9IFtdLFxyXG4gICAgZXhjbHVkZUhvc3RzID0gW10sXHJcbiAgICBpbmNsdWRlSG9zdHMgPSBbXSxcclxuICAgIHBhcnNlckNiLFxyXG4gICAgZmlsdGVyQ2IsXHJcbiAgICBhZGRBZGRpdGlvbmFsRGF0YVxyXG4gIH06IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucykge1xyXG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIHRyYWNrVXJsLFxyXG4gICAgICB0aHJlc2hvbGQsXHJcbiAgICAgIGJhdGNoU2l6ZSxcclxuICAgICAgZXhjbHVkZUtleXMsXHJcbiAgICAgIGV4Y2x1ZGVIb3N0cyxcclxuICAgICAgaW5jbHVkZUhvc3RzLFxyXG4gICAgICBwYXJzZXJDYixcclxuICAgICAgZmlsdGVyQ2IsXHJcbiAgICAgIGFkZEFkZGl0aW9uYWxEYXRhXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGlmIChcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICBjb25zdCBwZXJmT2JzZXJ2ZXIgPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigobGlzdCwgb2JqKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMobGlzdC5nZXRFbnRyaWVzKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwZXJmT2JzZXJ2ZXIub2JzZXJ2ZSh7XHJcbiAgICAgICAgICBlbnRyeVR5cGVzOiBbXCJyZXNvdXJjZVwiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRvLURvXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgXHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbmxvYWQtLS0tLS0tLS0tLS0+XCIpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHVwIHNldEludGVydmFsIHRvIHB1c2ggdHJhY2sgZGF0YVwiKTtcclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoKTtcclxuICAgICAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhyZXNob2xkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVudHJpZXMoZW50cmllczogYW55W10pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlRW50cmllcy0tLS0tLS0tLS0tLT5cIik7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRyYWNrVXJsLFxyXG4gICAgICBleGNsdWRlS2V5cyxcclxuICAgICAgZXhjbHVkZUhvc3RzLFxyXG4gICAgICBpbmNsdWRlSG9zdHMsXHJcbiAgICAgIHBhcnNlckNiLFxyXG4gICAgICBmaWx0ZXJDYlxyXG4gICAgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IGVudHJ5LnRvSlNPTigpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiIGVudHJpZXMubWFwLS0tLS0tLS0tLS0tPlwiLGVudHJpZXMpO1xyXG5cclxuICAgIC8vIGVudHJpZXMgPSBlbnRyaWVzLmZpbHRlcigoZW50cnkpID0+IHtcclxuICAgIC8vICAgbGV0IGZsYWcgPSBlbnRyeS5uYW1lLmluZGV4T2YodHJhY2tVcmwpID09PSAtMTtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCIgZW50cmllcy5uYW1lLS0tLS0tLS0tLS0tPlwiLGVudHJ5Lm5hbWUpO1xyXG4gICAgLy8gICBmbGFnID0gaW5jbHVkZUhvc3RzLmxlbmd0aCA+IDAgP1xyXG4gICAgLy8gICAgIChmbGFnICYmIGluY2x1ZGVIb3N0cy5zb21lKChob3N0KSA9PiBlbnRyeS5uYW1lLmluZGV4T2YoaG9zdCkgPiAtMSkpIDpcclxuICAgIC8vICAgICAoZmxhZyAmJiAhZXhjbHVkZUhvc3RzLnNvbWUoKGhvc3QpID0+IGVudHJ5Lm5hbWUuaW5kZXhPZihob3N0KSA+IC0xKSk7XHJcbiAgICAvLyAgIHJldHVybiBmbGFnO1xyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRyYWNrUGVyZm9ybWFuY2UtLS0tLS0tLS0tLT5cIiAsIFRyYWNrUGVyZm9ybWFuY2UpO1xyXG5cclxuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcChUcmFja1BlcmZvcm1hbmNlLmNvbXB1dGVNZXRyaWNzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW50cmllcy0tLS0tLS0tLS0tPlwiICwgZW50cmllcyk7XHJcblxyXG4gICAgaWYgKHBhcnNlckNiICYmIHR5cGVvZiBwYXJzZXJDYiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcChwYXJzZXJDYik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyQ2IgJiYgdHlwZW9mIGZpbHRlckNiID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgZW50cmllcyA9IGVudHJpZXMuZmlsdGVyKGZpbHRlckNiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhjbHVkZUtleXMubGVuZ3RoKSB7XHJcbiAgICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50cnkpLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV4Y2x1ZGVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgYWNjW2tleV0gPSBlbnRyeVtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gdGhpcy5xdWV1ZWRFbnRyaWVzLmNvbmNhdChlbnRyaWVzKTtcclxuICAgIGNvbnNvbGUubG9nKFwicXVldWVkRW50cmllcy0tLS0tLS0tLS0+XCIgLHRoaXMucXVldWVkRW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzZW5kVG9TZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCB7IGJhdGNoU2l6ZSA9IDUwLCB0cmFja1VybCwgYWRkQWRkaXRpb25hbERhdGEgfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGVudHJ5Q2h1bmtzID0gVHJhY2tQZXJmb3JtYW5jZS5jaHVuayh0aGlzLnF1ZXVlZEVudHJpZXMsIGJhdGNoU2l6ZSk7XHJcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgZW50cnlDaHVua3MuZm9yRWFjaCgoZW50cnlDaHVuazogYW55W10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IGVudHJ5Q2h1bmssXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBhZGRBZGRpdGlvbmFsRGF0YSgpXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGZldGNoKHRyYWNrVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIHNlbmRpbmcgZGF0YSB0byAvdHJhY2s6IFwiLCBlcnJvciwgYm9keSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhIGdsb2JhbCB2YXJpYWJsZSB0byBhY2Nlc3MgbGF0ZXJcclxuKHdpbmRvdyBhcyBhbnkpLlRyYWNrUGVyZm9ybWFuY2UgPSBUcmFja1BlcmZvcm1hbmNlO1xyXG5leHBvcnQgZGVmYXVsdCBUcmFja1BlcmZvcm1hbmNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9