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
        var trackUrl = _a.trackUrl, jwt = _a.jwt, _b = _a.threshold, threshold = _b === void 0 ? 6000 : _b, _c = _a.batchSize, batchSize = _c === void 0 ? 50 : _c, _d = _a.excludeKeys, excludeKeys = _d === void 0 ? [] : _d, _e = _a.includeHosts, includeHosts = _e === void 0 ? [] : _e, applicationId = _a.applicationId;
        this.queuedEntries = [];
        this.options = {
            trackUrl: trackUrl,
            jwt: jwt,
            threshold: threshold,
            batchSize: batchSize,
            excludeKeys: excludeKeys,
            includeHosts: includeHosts,
            applicationId: applicationId,
        };
        if ("performance" in window) {
            if ("PerformanceObserver" in window) {
                var perfObserver = new PerformanceObserver(function (list, obj) {
                    _this.handleEntries(list.getEntries());
                });
                perfObserver.observe({
                    entryTypes: ["resource"],
                });
            }
            else {
                // To-Do
            }
        }
        // tslint:disable-next-line
        window.onload = function () {
            setTimeout(function () {
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
    TrackPerformance.computeMetrics = function (entry, type, dom, captureRequestsCount, captureRequests) {
        if (captureRequestsCount === void 0) { captureRequestsCount = []; }
        if (captureRequests === void 0) { captureRequests = []; }
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
            entry.domContentLoaded = entry.domContentLoadedEventEnd - entry.startTime;
            entry.pageLoad = entry.loadEventEnd - entry.startTime;
        }
        entry.startRender = entry.startTime;
        var paintTimings = performance.getEntriesByType("paint");
        entry.firstContentFullPaint = paintTimings.find(function (_a) {
            var name = _a.name;
            return name === "first-contentful-paint";
        });
        new PerformanceObserver(function (entryList) {
            var lcp = entryList.getEntries();
            if (lcp.length)
                entry.largestContentFullPaint = lcp[lcp.length - 1];
        }).observe({ type: "largest-contentful-paint", buffered: true });
        entry.firstCPUIdle = type.hardwareConcurrency;
        dom = performance.getEntriesByType("navigation")[0];
        type = navigator;
        entry.browser = "" + window.navigator.appName + window.navigator.appVersion;
        entry.useragent = navigator.userAgent;
        entry.os = TrackPerformance.getOS();
        entry.devicetype = TrackPerformance.getDeviceType();
        entry.connectiontype = type.connection.effectiveType;
        (entry.rumVersion = "1.0.0"), (entry.domain = window.location.hostname);
        entry.pageURL = window.location.href;
        entry.urlPath = window.location.pathname;
        entry.pageTitle = document.title;
        entry.backend = entry.ttfb;
        entry.redirect = entry.redirectEnd - entry.redirectStart;
        entry.dnsLookUp = entry.domainLookupEnd - entry.domainLookupStart;
        // Total Connection time
        entry.tcpConnect = entry.connectEnd - entry.connectStart;
        entry.sslNegotiation = entry.tlsTime;
        entry.flags = document.title;
        entry.domElements = document.getElementsByTagName("*").length;
        entry.domInteractive = dom.domInteractive;
        entry.averageDOMDepth = TrackPerformance.avgDOMDepth([]);
        captureRequestsCount =
            TrackPerformance.captureNetworkRequest(captureRequests);
        entry.imageRequests = captureRequestsCount.capture_img_request.length;
        entry.cssRequests = captureRequestsCount.capture_css_request.length;
        entry.jsRequests = captureRequestsCount.capture_js_request.length;
        entry.htmlSize =
            (document.documentElement.outerHTML.length / 1024).toFixed(0) + " KB";
        entry.project = "PACE";
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
        var _a = this.options, trackUrl = _a.trackUrl, excludeKeys = _a.excludeKeys, applicationId = _a.applicationId;
        entries = entries.map(function (entry) { return entry.toJSON(); });
        entries = entries.map(TrackPerformance.computeMetrics);
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
        this.queuedEntries[0].applicationId = applicationId;
    };
    TrackPerformance.prototype.sendToServer = function () {
        var _a = this.options, _b = _a.batchSize, batchSize = _b === void 0 ? 50 : _b, trackUrl = _a.trackUrl, jwt = _a.jwt;
        var entryChunks = TrackPerformance.chunk(this.queuedEntries, batchSize);
        var promise = Promise.resolve();
        entryChunks.forEach(function (entryChunk, index) {
            promise = promise.then(function () {
                return new Promise(function (resolve, reject) {
                    fetch(trackUrl, {
                        method: "post",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            token: jwt,
                        },
                        body: JSON.stringify(entryChunk[0]),
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (res) {
                        return resolve();
                    })
                        .catch(function (error) {
                        // tslint:disable-next-line
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
    // Get device type
    TrackPerformance.getDeviceType = function () {
        var ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    };
    // Get OS
    TrackPerformance.getOS = function () {
        var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"], iosPlatforms = ["iPhone", "iPad", "iPod"], os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = "Mac OS";
        }
        else if (iosPlatforms.indexOf(platform) !== -1) {
            os = "iOS";
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = "Windows";
        }
        else if (/Android/.test(userAgent)) {
            os = "Android";
        }
        else if (!os && /Linux/.test(platform)) {
            os = "Linux";
        }
        return os;
    };
    TrackPerformance.captureNetworkRequest = function (capture_resource) {
        var capture_js_request = [];
        var capture_css_request = [];
        var capture_img_request = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "script") {
                capture_js_request.push(capture_resource[i].name);
            }
            if (capture_resource[i].initiatorType == "css") {
                capture_css_request.push(capture_resource[i].name);
            }
            if (capture_resource[i].initiatorType == "img") {
                capture_img_request.push(capture_resource[i].name);
            }
        }
        return { capture_js_request: capture_js_request, capture_css_request: capture_css_request, capture_img_request: capture_img_request };
    };
    TrackPerformance.avgDOMDepth = function (tracker) {
        var depth = 0;
        var prevNode = 0;
        Array.from(document.querySelectorAll("*")).forEach(function (node) {
            if (!tracker[node.tagName])
                tracker[node.tagName] = 1;
            else
                tracker[node.tagName]++;
            if (node.parentNode != prevNode)
                depth++;
            prevNode = node;
        });
        return depth / 2;
    };
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtJQXNHRSwwQkFBWSxFQVFlO1FBUjNCLGlCQStDQztZQTlDQyxzQkFBUSxFQUNSLFlBQUcsRUFDSCxpQkFBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLGlCQUFjLEVBQWQsbUNBQWMsRUFDZCxtQkFBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLG9CQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsZ0NBQWE7UUFFYixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUTtZQUNSLEdBQUc7WUFDSCxTQUFTO1lBQ1QsU0FBUztZQUNULFdBQVc7WUFDWCxZQUFZO1lBQ1osYUFBYTtT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QUFDLENBQUM7UUFDSCxPQUFPLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUVELDJDQUEyQztBQUMxQyxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsa0JBQWUsZ0JBQWdCLENBQUMiLCJmaWxlIjoicnVtLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMge1xuICB0cmFja1VybDogc3RyaW5nO1xuICBqd3Q6IHN0cmluZztcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXTtcbiAgaW5jbHVkZUhvc3RzOiBzdHJpbmdbXTtcbiAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xufVxuXG5jbGFzcyBUcmFja1BlcmZvcm1hbmNlIHtcbiAgc3RhdGljIGNvbXB1dGVNZXRyaWNzKFxuICAgIGVudHJ5OiBhbnksXG4gICAgdHlwZTogYW55LFxuICAgIGRvbTogYW55LFxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50OiBhbnkgPSBbXSxcbiAgICBjYXB0dXJlUmVxdWVzdHM6IGFueSA9IFtdXG4gICkge1xuICAgIC8vIFRMUyB0aW1lXG4gICAgaWYgKGVudHJ5LnNlY3VyZUNvbm5lY3Rpb25TdGFydCA+IDApIHtcbiAgICAgIGVudHJ5LnRsc1RpbWUgPSBlbnRyeS5jb25uZWN0RW5kIC0gZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8vIFRpbWUgdG8gRmlyc3QgQnl0ZSAoVFRGQilcbiAgICBlbnRyeS50dGZiID0gZW50cnkucmVzcG9uc2VTdGFydCAtIGVudHJ5LnJlcXVlc3RTdGFydDtcblxuICAgIC8qXG4gICAgICBUaGUgZmV0Y2hTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmVwcmVzZW50cyBhIHRpbWVzdGFtcCBpbW1lZGlhdGVseVxuICAgICAgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyB0byBmZXRjaCB0aGUgcmVzb3VyY2UuXG4gICAgKi9cbiAgICBlbnRyeS5mZXRjaFRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LmZldGNoU3RhcnQ7XG4gICAgaWYgKGVudHJ5LndvcmtlclN0YXJ0ID4gMCkge1xuICAgICAgZW50cnkud29ya2VyVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkud29ya2VyU3RhcnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgIFRoZSByZXF1ZXN0U3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJldHVybnMgYSB0aW1lc3RhbXAgb2YgdGhlIHRpbWVcbiAgICAgIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UgZnJvbSB0aGVcbiAgICAgIHNlcnZlciwgY2FjaGUsIG9yIGxvY2FsIHJlc291cmNlXG4gICAgICBSZXF1ZXN0IHBsdXMgcmVzcG9uc2UgdGltZSAobmV0d29yayBvbmx5KVxuICAgICovXG4gICAgZW50cnkudG90YWxUaW1lID0gZW50cnkucmVzcG9uc2VFbmQgLSBlbnRyeS5yZXF1ZXN0U3RhcnQ7XG5cbiAgICAvLyBSZXNwb25zZSB0aW1lIG9ubHkgKGRvd25sb2FkKVxuICAgIGVudHJ5LmRvd25sb2FkVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkucmVzcG9uc2VTdGFydDtcblxuICAgIC8vIEhUVFAgaGVhZGVyIHNpemVcbiAgICBlbnRyeS5oZWFkZXJTaXplID0gZW50cnkudHJhbnNmZXJTaXplIC0gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gQ29tcHJlc3Npb24gcmF0aW9cbiAgICBlbnRyeS5jb21wcmVzc2lvblJhdGlvID0gZW50cnkuZGVjb2RlZEJvZHlTaXplIC8gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gUGFnZSBUaW1lXG4gICAgaWYgKGVudHJ5LmVudHJ5VHlwZSA9PT0gXCJuYXZpZ2F0aW9uXCIpIHtcbiAgICAgIGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgPSBlbnRyeS5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQgLSBlbnRyeS5zdGFydFRpbWU7XG4gICAgICBlbnRyeS5wYWdlTG9hZCA9IGVudHJ5LmxvYWRFdmVudEVuZCAtIGVudHJ5LnN0YXJ0VGltZTtcbiAgICB9XG4gICAgZW50cnkuc3RhcnRSZW5kZXIgPSBlbnRyeS5zdGFydFRpbWU7XG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xuICAgIGVudHJ5LmZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxuICAgICk7XG4gICAgbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGVudHJ5TGlzdCkgPT4ge1xuICAgICAgdmFyIGxjcCA9IGVudHJ5TGlzdC5nZXRFbnRyaWVzKCk7XG4gICAgICBpZiAobGNwLmxlbmd0aCkgZW50cnkubGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQgPSBsY3BbbGNwLmxlbmd0aCAtIDFdO1xuICAgIH0pLm9ic2VydmUoeyB0eXBlOiBcImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLCBidWZmZXJlZDogdHJ1ZSB9KTtcbiAgICBlbnRyeS5maXJzdENQVUlkbGUgPSB0eXBlLmhhcmR3YXJlQ29uY3VycmVuY3k7XG4gICAgZG9tID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF07XG4gICAgdHlwZSA9IG5hdmlnYXRvcjtcbiAgICBlbnRyeS5icm93c2VyID0gYCR7d2luZG93Lm5hdmlnYXRvci5hcHBOYW1lfSR7d2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9ufWA7XG4gICAgZW50cnkudXNlcmFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBlbnRyeS5vcyA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0T1MoKTtcbiAgICBlbnRyeS5kZXZpY2V0eXBlID0gVHJhY2tQZXJmb3JtYW5jZS5nZXREZXZpY2VUeXBlKCk7XG4gICAgZW50cnkuY29ubmVjdGlvbnR5cGUgPSB0eXBlLmNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZTtcbiAgICAoZW50cnkucnVtVmVyc2lvbiA9IFwiMS4wLjBcIiksIChlbnRyeS5kb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgIGVudHJ5LnBhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBlbnRyeS51cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGVudHJ5LnBhZ2VUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIGVudHJ5LmJhY2tlbmQgPSBlbnRyeS50dGZiO1xuICAgIGVudHJ5LnJlZGlyZWN0ID0gZW50cnkucmVkaXJlY3RFbmQgLSBlbnRyeS5yZWRpcmVjdFN0YXJ0O1xuICAgIGVudHJ5LmRuc0xvb2tVcCA9IGVudHJ5LmRvbWFpbkxvb2t1cEVuZCAtIGVudHJ5LmRvbWFpbkxvb2t1cFN0YXJ0O1xuICAgIC8vIFRvdGFsIENvbm5lY3Rpb24gdGltZVxuICAgIGVudHJ5LnRjcENvbm5lY3QgPSBlbnRyeS5jb25uZWN0RW5kIC0gZW50cnkuY29ubmVjdFN0YXJ0O1xuICAgIGVudHJ5LnNzbE5lZ290aWF0aW9uID0gZW50cnkudGxzVGltZTtcbiAgICBlbnRyeS5mbGFncyA9IGRvY3VtZW50LnRpdGxlO1xuICAgIGVudHJ5LmRvbUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcbiAgICBlbnRyeS5kb21JbnRlcmFjdGl2ZSA9IGRvbS5kb21JbnRlcmFjdGl2ZTtcbiAgICBlbnRyeS5hdmVyYWdlRE9NRGVwdGggPSBUcmFja1BlcmZvcm1hbmNlLmF2Z0RPTURlcHRoKFtdKTtcbiAgICBjYXB0dXJlUmVxdWVzdHNDb3VudCA9XG4gICAgICBUcmFja1BlcmZvcm1hbmNlLmNhcHR1cmVOZXR3b3JrUmVxdWVzdChjYXB0dXJlUmVxdWVzdHMpO1xuICAgIGVudHJ5LmltYWdlUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5jc3NSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfY3NzX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5LmpzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2pzX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5Lmh0bWxTaXplID1cbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLmxlbmd0aCAvIDEwMjQpLnRvRml4ZWQoMCkgKyBcIiBLQlwiO1xuICAgIGVudHJ5LnByb2plY3QgPSBcIlBBQ0VcIjtcbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgY2h1bmsoYXJyYXk6IGFueVtdLCBzaXplOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChyZXMsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggJSBzaXplID09PSAwKSB7XG4gICAgICAgIHJlcy5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIHJlc1tyZXMubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwgW10pO1xuICB9XG4gIHF1ZXVlZEVudHJpZXM6IGFueVtdO1xuICBvcHRpb25zOiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnM7XG4gIGludGVydmFsSWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHJhY2tVcmwsXG4gICAgand0LFxuICAgIHRocmVzaG9sZCA9IDYwMDAsXG4gICAgYmF0Y2hTaXplID0gNTAsXG4gICAgZXhjbHVkZUtleXMgPSBbXSxcbiAgICBpbmNsdWRlSG9zdHMgPSBbXSxcbiAgICBhcHBsaWNhdGlvbklkLFxuICB9OiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMpIHtcbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0cmFja1VybCxcbiAgICAgIGp3dCxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGJhdGNoU2l6ZSxcbiAgICAgIGV4Y2x1ZGVLZXlzLFxuICAgICAgaW5jbHVkZUhvc3RzLFxuICAgICAgYXBwbGljYXRpb25JZCxcbiAgICB9O1xuXG4gICAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cpIHtcbiAgICAgIGlmIChcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgcGVyZk9ic2VydmVyID0gbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGxpc3QsIG9iaikgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhsaXN0LmdldEVudHJpZXMoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBlcmZPYnNlcnZlci5vYnNlcnZlKHtcbiAgICAgICAgICBlbnRyeVR5cGVzOiBbXCJyZXNvdXJjZVwiXSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUby1Eb1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpKTtcbiAgICAgIH0sIDApO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHVwIHNldEludGVydmFsIHRvIHB1c2ggdHJhY2sgZGF0YVwiKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XG4gICAgICB9XG4gICAgfSwgdGhyZXNob2xkKTtcbiAgfVxuXG4gIGhhbmRsZUVudHJpZXMoZW50cmllczogYW55W10pIHtcbiAgICBjb25zdCB7IHRyYWNrVXJsLCBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IGVudHJ5LnRvSlNPTigpKTtcbiAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoVHJhY2tQZXJmb3JtYW5jZS5jb21wdXRlTWV0cmljcyk7XG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xuICAgICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50cnkpLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IGVudHJ5W2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSB0aGlzLnF1ZXVlZEVudHJpZXMuY29uY2F0KGVudHJpZXMpO1xuICAgIHRoaXMucXVldWVkRW50cmllc1swXS5hcHBsaWNhdGlvbklkID0gYXBwbGljYXRpb25JZDtcbiAgfVxuXG4gIHNlbmRUb1NlcnZlcigpIHtcbiAgICBjb25zdCB7IGJhdGNoU2l6ZSA9IDUwLCB0cmFja1VybCwgand0IH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgZW50cnlDaHVua3MgPSBUcmFja1BlcmZvcm1hbmNlLmNodW5rKHRoaXMucXVldWVkRW50cmllcywgYmF0Y2hTaXplKTtcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGVudHJ5Q2h1bmtzLmZvckVhY2goKGVudHJ5Q2h1bms6IGFueVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBmZXRjaCh0cmFja1VybCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgICAgIHRva2VuOiBqd3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50cnlDaHVua1swXSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gMDtcbiAgfVxuXG4gIC8vIEdldCBkZXZpY2UgdHlwZVxuICBzdGF0aWMgZ2V0RGV2aWNlVHlwZSgpOiBhbnkge1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBpZiAoLyh0YWJsZXR8aXBhZHxwbGF5Ym9va3xzaWxrKXwoYW5kcm9pZCg/IS4qbW9iaSkpL2kudGVzdCh1YSkpIHtcbiAgICAgIHJldHVybiBcInRhYmxldFwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAvTW9iaWxlfGlQKGhvbmV8b2QpfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZXxLaW5kbGV8U2lsay1BY2NlbGVyYXRlZHwoaHB3fHdlYilPU3xPcGVyYSBNKG9iaXxpbmkpLy50ZXN0KFxuICAgICAgICB1YVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIFwibW9iaWxlXCI7XG4gICAgfVxuICAgIHJldHVybiBcImRlc2t0b3BcIjtcbiAgfVxuXG4gIC8vIEdldCBPU1xuICBzdGF0aWMgZ2V0T1MoKTogYW55IHtcbiAgICB2YXIgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICBwbGF0Zm9ybSA9IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0sXG4gICAgICBtYWNvc1BsYXRmb3JtcyA9IFtcIk1hY2ludG9zaFwiLCBcIk1hY0ludGVsXCIsIFwiTWFjUFBDXCIsIFwiTWFjNjhLXCJdLFxuICAgICAgd2luZG93c1BsYXRmb3JtcyA9IFtcIldpbjMyXCIsIFwiV2luNjRcIiwgXCJXaW5kb3dzXCIsIFwiV2luQ0VcIl0sXG4gICAgICBpb3NQbGF0Zm9ybXMgPSBbXCJpUGhvbmVcIiwgXCJpUGFkXCIsIFwiaVBvZFwiXSxcbiAgICAgIG9zID0gbnVsbDtcblxuICAgIGlmIChtYWNvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICAgIG9zID0gXCJNYWMgT1NcIjtcbiAgICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICAgIG9zID0gXCJpT1NcIjtcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiV2luZG93c1wiO1xuICAgIH0gZWxzZSBpZiAoL0FuZHJvaWQvLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICB9IGVsc2UgaWYgKCFvcyAmJiAvTGludXgvLnRlc3QocGxhdGZvcm0pKSB7XG4gICAgICBvcyA9IFwiTGludXhcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3M7XG4gIH1cbiAgc3RhdGljIGNhcHR1cmVOZXR3b3JrUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnlbXSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHZhciBjYXB0dXJlX2Nzc19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfaW1nX3JlcXVlc3QgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNhcHR1cmVfanNfcmVxdWVzdCwgY2FwdHVyZV9jc3NfcmVxdWVzdCwgY2FwdHVyZV9pbWdfcmVxdWVzdCB9O1xuICB9XG5cbiAgc3RhdGljIGF2Z0RPTURlcHRoKHRyYWNrZXI6IGFueSk6IGFueSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgcHJldk5vZGUgPSAwO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikpLmZvckVhY2goKG5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF0cmFja2VyW25vZGUudGFnTmFtZV0pIHRyYWNrZXJbbm9kZS50YWdOYW1lXSA9IDE7XG4gICAgICBlbHNlIHRyYWNrZXJbbm9kZS50YWdOYW1lXSsrO1xuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPSBwcmV2Tm9kZSkgZGVwdGgrKztcbiAgICAgIHByZXZOb2RlID0gbm9kZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVwdGggLyAyO1xuICB9XG59XG5cbi8vIGV4cG9ydCBhIGdsb2JhbCB2YXJpYWJsZSB0byBhY2Nlc3MgbGF0ZXJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcbmV4cG9ydCBkZWZhdWx0IFRyYWNrUGVyZm9ybWFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9