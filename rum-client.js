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
        var trackUrl = _a.trackUrl, _b = _a.threshold, threshold = _b === void 0 ? 6000 : _b, _c = _a.batchSize, batchSize = _c === void 0 ? 50 : _c, _d = _a.excludeKeys, excludeKeys = _d === void 0 ? [] : _d, _e = _a.excludeHosts, excludeHosts = _e === void 0 ? [] : _e, _f = _a.includeHosts, includeHosts = _f === void 0 ? [] : _f, parserCb = _a.parserCb, filterCb = _a.filterCb;
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
    TrackPerformance.computeMetrics = function (entry, type, dom) {
        entry.dnsLookUp = entry.domainLookupEnd - entry.domainLookupStart;
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
            entry.domContentLoaded = entry.domContentLoadedEventEnd - entry.startTime;
            entry.pageLoad = entry.loadEventEnd - entry.startTime;
        }
        dom = performance.getEntriesByType("navigation")[0];
        type = navigator;
        entry.useragent = navigator.userAgent;
        entry.os = TrackPerformance.getOS();
        entry.browser = "" + window.navigator.appName + window.navigator.appVersion;
        entry.devicetype = TrackPerformance.getDeviceType();
        entry.pageURL = window.location.href;
        entry.urlPath = window.location.pathname;
        entry.domain = window.location.hostname;
        entry.pageTitle = document.title;
        entry.backend = entry.ttfb;
        entry.startRender = entry.startTime;
        entry.sslNegotiation = entry.tlsTime;
        entry.redirect = entry.redirectStart;
        entry.connectiontype = type.connection.effectiveType;
        entry.domInteractive = dom.domInteractive;
        entry.domElements = document.getElementsByTagName("*").length;
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
        entry.applicationId = "ClJHmSpiV6";
        // const { requestAPICount } = TrackPerformance.captureNetworkRequest;
        // entry.jsRequests = requestAPICount.capture_js_request;
        // entry.cssRequests = requestAPICount.capture_css_request;
        // entry.imageRequests = requestAPICount.capture_img_request;
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
        var _a = this.options, trackUrl = _a.trackUrl, excludeKeys = _a.excludeKeys, excludeHosts = _a.excludeHosts, includeHosts = _a.includeHosts, parserCb = _a.parserCb, filterCb = _a.filterCb;
        entries = entries.map(function (entry) { return entry.toJSON(); });
        // entries = entries.filter((entry) => {
        //   let flag = entry.name.indexOf(trackUrl) === -1;
        //   console.log(" entries.name------------>",entry.name);
        //   flag = includeHosts.length > 0 ?
        //     (flag && includeHosts.some((host) => entry.name.indexOf(host) > -1)) :
        //     (flag && !excludeHosts.some((host) => entry.name.indexOf(host) > -1));
        //   return flag;
        // });
        entries = entries.map(TrackPerformance.computeMetrics);
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
        var _a = this.options, _b = _a.batchSize, batchSize = _b === void 0 ? 50 : _b, trackUrl = _a.trackUrl;
        var entryChunks = TrackPerformance.chunk(this.queuedEntries, batchSize);
        var promise = Promise.resolve();
        entryChunks.forEach(function (entryChunk, index) {
            promise = promise.then(function () {
                return new Promise(function (resolve, reject) {
                    var body = {
                        data: entryChunk,
                    };
                    fetch(trackUrl, {
                        method: "post",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (res) {
                        return resolve();
                    })
                        .catch(function (error) {
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
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtJQThGRSwwQkFBWSxFQVNlO1FBVDNCLGlCQWtEQztZQWpEQyxzQkFBUSxFQUNSLGlCQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsaUJBQWMsRUFBZCxtQ0FBYyxFQUNkLG1CQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsb0JBQWlCLEVBQWpCLHNDQUFpQixFQUNqQixvQkFBaUIsRUFBakIsc0NBQWlCLEVBQ2pCLHNCQUFRLEVBQ1Isc0JBQVE7UUFFUixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUTtZQUNSLFNBQVM7WUFDVCxTQUFTO1lBQ1QsV0FBVztZQUNY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LENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxLQUFLLEVBQUU7Z0JBQzlDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwRDtZQUNELElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLEtBQUssRUFBRTtnQkFDOUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsa0JBQWtCLHNCQUFFLG1CQUFtQix1QkFBRSxtQkFBbUIsdUJBQUUsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDO0FBRUQsMkNBQTJDO0FBQzFDLE1BQWMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxrQkFBZSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJydW0tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucyB7XG4gIHRyYWNrVXJsOiBzdHJpbmc7XG4gIHRocmVzaG9sZD86IG51bWJlcjtcbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xuICBleGNsdWRlS2V5czogc3RyaW5nW107XG4gIGV4Y2x1ZGVIb3N0czogc3RyaW5nW107XG4gIGluY2x1ZGVIb3N0czogc3RyaW5nW107XG4gIHBhcnNlckNiOiBhbnk7XG4gIGZpbHRlckNiOiBhbnk7XG59XG5cbmNsYXNzIFRyYWNrUGVyZm9ybWFuY2Uge1xuICBzdGF0aWMgY29tcHV0ZU1ldHJpY3MoZW50cnk6IGFueSwgdHlwZTogYW55LCBkb206IGFueSkge1xuICAgIGVudHJ5LmRuc0xvb2tVcCA9IGVudHJ5LmRvbWFpbkxvb2t1cEVuZCAtIGVudHJ5LmRvbWFpbkxvb2t1cFN0YXJ0O1xuXG4gICAgLy8gVG90YWwgQ29ubmVjdGlvbiB0aW1lXG4gICAgZW50cnkuY29ubmVjdGlvblRpbWUgPSBlbnRyeS5jb25uZWN0RW5kIC0gZW50cnkuY29ubmVjdFN0YXJ0O1xuXG4gICAgLy8gVExTIHRpbWVcbiAgICBpZiAoZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0ID4gMCkge1xuICAgICAgZW50cnkudGxzVGltZSA9IGVudHJ5LmNvbm5lY3RFbmQgLSBlbnRyeS5zZWN1cmVDb25uZWN0aW9uU3RhcnQ7XG4gICAgfVxuXG4gICAgLy8gVGltZSB0byBGaXJzdCBCeXRlIChUVEZCKVxuICAgIGVudHJ5LnR0ZmIgPSBlbnRyeS5yZXNwb25zZVN0YXJ0IC0gZW50cnkucmVxdWVzdFN0YXJ0O1xuXG4gICAgLypcbiAgICAgIFRoZSBmZXRjaFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXByZXNlbnRzIGEgdGltZXN0YW1wIGltbWVkaWF0ZWx5XG4gICAgICBiZWZvcmUgdGhlIGJyb3dzZXIgc3RhcnRzIHRvIGZldGNoIHRoZSByZXNvdXJjZS5cbiAgICAqL1xuICAgIGVudHJ5LmZldGNoVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkuZmV0Y2hTdGFydDtcbiAgICBpZiAoZW50cnkud29ya2VyU3RhcnQgPiAwKSB7XG4gICAgICBlbnRyeS53b3JrZXJUaW1lID0gZW50cnkucmVzcG9uc2VFbmQgLSBlbnRyeS53b3JrZXJTdGFydDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgVGhlIHJlcXVlc3RTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmV0dXJucyBhIHRpbWVzdGFtcCBvZiB0aGUgdGltZVxuICAgICAgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZSBmcm9tIHRoZVxuICAgICAgc2VydmVyLCBjYWNoZSwgb3IgbG9jYWwgcmVzb3VyY2VcbiAgICAgIFJlcXVlc3QgcGx1cyByZXNwb25zZSB0aW1lIChuZXR3b3JrIG9ubHkpXG4gICAgKi9cbiAgICBlbnRyeS50b3RhbFRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LnJlcXVlc3RTdGFydDtcblxuICAgIC8vIFJlc3BvbnNlIHRpbWUgb25seSAoZG93bmxvYWQpXG4gICAgZW50cnkuZG93bmxvYWRUaW1lID0gZW50cnkucmVzcG9uc2VFbmQgLSBlbnRyeS5yZXNwb25zZVN0YXJ0O1xuXG4gICAgLy8gSFRUUCBoZWFkZXIgc2l6ZVxuICAgIGVudHJ5LmhlYWRlclNpemUgPSBlbnRyeS50cmFuc2ZlclNpemUgLSBlbnRyeS5lbmNvZGVkQm9keVNpemU7XG5cbiAgICAvLyBDb21wcmVzc2lvbiByYXRpb1xuICAgIGVudHJ5LmNvbXByZXNzaW9uUmF0aW8gPSBlbnRyeS5kZWNvZGVkQm9keVNpemUgLyBlbnRyeS5lbmNvZGVkQm9keVNpemU7XG5cbiAgICAvLyBQYWdlIFRpbWVcbiAgICBpZiAoZW50cnkuZW50cnlUeXBlID09PSBcIm5hdmlnYXRpb25cIikge1xuICAgICAgZW50cnkuZG9tQ29udGVudExvYWRlZCA9IGVudHJ5LmRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCAtIGVudHJ5LnN0YXJ0VGltZTtcbiAgICAgIGVudHJ5LnBhZ2VMb2FkID0gZW50cnkubG9hZEV2ZW50RW5kIC0gZW50cnkuc3RhcnRUaW1lO1xuICAgIH1cbiAgICBkb20gPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXTtcbiAgICB0eXBlID0gbmF2aWdhdG9yO1xuICAgIGVudHJ5LnVzZXJhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgZW50cnkub3MgPSBUcmFja1BlcmZvcm1hbmNlLmdldE9TKCk7XG4gICAgZW50cnkuYnJvd3NlciA9IGAke3dpbmRvdy5uYXZpZ2F0b3IuYXBwTmFtZX0ke3dpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbn1gO1xuICAgIGVudHJ5LmRldmljZXR5cGUgPSBUcmFja1BlcmZvcm1hbmNlLmdldERldmljZVR5cGUoKTtcbiAgICBlbnRyeS5wYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgZW50cnkudXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBlbnRyeS5kb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgZW50cnkucGFnZVRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgZW50cnkuYmFja2VuZCA9IGVudHJ5LnR0ZmI7XG4gICAgZW50cnkuc3RhcnRSZW5kZXIgPSBlbnRyeS5zdGFydFRpbWU7XG4gICAgZW50cnkuc3NsTmVnb3RpYXRpb24gPSBlbnRyeS50bHNUaW1lO1xuICAgIGVudHJ5LnJlZGlyZWN0ID0gZW50cnkucmVkaXJlY3RTdGFydDtcbiAgICBlbnRyeS5jb25uZWN0aW9udHlwZSA9IHR5cGUuY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xuICAgIGVudHJ5LmRvbUludGVyYWN0aXZlID0gZG9tLmRvbUludGVyYWN0aXZlO1xuICAgIGVudHJ5LmRvbUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcbiAgICBjb25zdCBwYWludFRpbWluZ3MgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicGFpbnRcIik7XG4gICAgZW50cnkuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gcGFpbnRUaW1pbmdzLmZpbmQoXG4gICAgICAoeyBuYW1lIH0pID0+IG5hbWUgPT09IFwiZmlyc3QtY29udGVudGZ1bC1wYWludFwiXG4gICAgKTtcbiAgICBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZW50cnlMaXN0KSA9PiB7XG4gICAgICB2YXIgbGNwID0gZW50cnlMaXN0LmdldEVudHJpZXMoKTtcbiAgICAgIGlmIChsY3AubGVuZ3RoKSBlbnRyeS5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IGxjcFtsY3AubGVuZ3RoIC0gMV07XG4gICAgfSkub2JzZXJ2ZSh7IHR5cGU6IFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIGJ1ZmZlcmVkOiB0cnVlIH0pO1xuICAgIGVudHJ5LmFwcGxpY2F0aW9uSWQgPSBcIkNsSkhtU3BpVjZcIjtcblxuICAgIC8vIGNvbnN0IHsgcmVxdWVzdEFQSUNvdW50IH0gPSBUcmFja1BlcmZvcm1hbmNlLmNhcHR1cmVOZXR3b3JrUmVxdWVzdDtcbiAgICAvLyBlbnRyeS5qc1JlcXVlc3RzID0gcmVxdWVzdEFQSUNvdW50LmNhcHR1cmVfanNfcmVxdWVzdDtcbiAgICAvLyBlbnRyeS5jc3NSZXF1ZXN0cyA9IHJlcXVlc3RBUElDb3VudC5jYXB0dXJlX2Nzc19yZXF1ZXN0O1xuICAgIC8vIGVudHJ5LmltYWdlUmVxdWVzdHMgPSByZXF1ZXN0QVBJQ291bnQuY2FwdHVyZV9pbWdfcmVxdWVzdDtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBjaHVuayhhcnJheTogYW55W10sIHNpemU6IG51bWJlcikge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHJlcywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAlIHNpemUgPT09IDApIHtcbiAgICAgICAgcmVzLnB1c2goW10pO1xuICAgICAgfVxuICAgICAgcmVzW3Jlcy5sZW5ndGggLSAxXS5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBbXSk7XG4gIH1cbiAgcXVldWVkRW50cmllczogYW55W107XG4gIG9wdGlvbnM6IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucztcbiAgaW50ZXJ2YWxJZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0cmFja1VybCxcbiAgICB0aHJlc2hvbGQgPSA2MDAwLFxuICAgIGJhdGNoU2l6ZSA9IDUwLFxuICAgIGV4Y2x1ZGVLZXlzID0gW10sXG4gICAgZXhjbHVkZUhvc3RzID0gW10sXG4gICAgaW5jbHVkZUhvc3RzID0gW10sXG4gICAgcGFyc2VyQ2IsXG4gICAgZmlsdGVyQ2IsXG4gIH06IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucykge1xuICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRyYWNrVXJsLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgYmF0Y2hTaXplLFxuICAgICAgZXhjbHVkZUtleXMsXG4gICAgICBleGNsdWRlSG9zdHMsXG4gICAgICBpbmNsdWRlSG9zdHMsXG4gICAgICBwYXJzZXJDYixcbiAgICAgIGZpbHRlckNiLFxuICAgIH07XG5cbiAgICBpZiAoXCJwZXJmb3JtYW5jZVwiIGluIHdpbmRvdykge1xuICAgICAgaWYgKFwiUGVyZm9ybWFuY2VPYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgICBjb25zdCBwZXJmT2JzZXJ2ZXIgPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigobGlzdCwgb2JqKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKGxpc3QuZ2V0RW50cmllcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGVyZk9ic2VydmVyLm9ic2VydmUoe1xuICAgICAgICAgIGVudHJ5VHlwZXM6IFtcInJlc291cmNlXCJdLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRvLURvXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5cbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKSk7XG4gICAgICB9LCAwKTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1cCBzZXRJbnRlcnZhbCB0byBwdXNoIHRyYWNrIGRhdGFcIik7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnF1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VuZFRvU2VydmVyKCk7XG4gICAgICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xuICAgICAgfVxuICAgIH0sIHRocmVzaG9sZCk7XG4gIH1cblxuICBoYW5kbGVFbnRyaWVzKGVudHJpZXM6IGFueVtdKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhY2tVcmwsXG4gICAgICBleGNsdWRlS2V5cyxcbiAgICAgIGV4Y2x1ZGVIb3N0cyxcbiAgICAgIGluY2x1ZGVIb3N0cyxcbiAgICAgIHBhcnNlckNiLFxuICAgICAgZmlsdGVyQ2IsXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBlbnRyeS50b0pTT04oKSk7XG5cbiAgICAvLyBlbnRyaWVzID0gZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiB7XG4gICAgLy8gICBsZXQgZmxhZyA9IGVudHJ5Lm5hbWUuaW5kZXhPZih0cmFja1VybCkgPT09IC0xO1xuICAgIC8vICAgY29uc29sZS5sb2coXCIgZW50cmllcy5uYW1lLS0tLS0tLS0tLS0tPlwiLGVudHJ5Lm5hbWUpO1xuICAgIC8vICAgZmxhZyA9IGluY2x1ZGVIb3N0cy5sZW5ndGggPiAwID9cbiAgICAvLyAgICAgKGZsYWcgJiYgaW5jbHVkZUhvc3RzLnNvbWUoKGhvc3QpID0+IGVudHJ5Lm5hbWUuaW5kZXhPZihob3N0KSA+IC0xKSkgOlxuICAgIC8vICAgICAoZmxhZyAmJiAhZXhjbHVkZUhvc3RzLnNvbWUoKGhvc3QpID0+IGVudHJ5Lm5hbWUuaW5kZXhPZihob3N0KSA+IC0xKSk7XG4gICAgLy8gICByZXR1cm4gZmxhZztcbiAgICAvLyB9KTtcblxuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcChUcmFja1BlcmZvcm1hbmNlLmNvbXB1dGVNZXRyaWNzKTtcblxuICAgIGlmIChwYXJzZXJDYiAmJiB0eXBlb2YgcGFyc2VyQ2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZW50cmllcyA9IGVudHJpZXMubWFwKHBhcnNlckNiKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlckNiICYmIHR5cGVvZiBmaWx0ZXJDYiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBlbnRyaWVzID0gZW50cmllcy5maWx0ZXIoZmlsdGVyQ2IpO1xuICAgIH1cblxuICAgIGlmIChleGNsdWRlS2V5cy5sZW5ndGgpIHtcbiAgICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudHJ5KS5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoZXhjbHVkZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBlbnRyeVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gdGhpcy5xdWV1ZWRFbnRyaWVzLmNvbmNhdChlbnRyaWVzKTtcbiAgICBjb25zb2xlLmxvZyhcInF1ZXVlZEVudHJpZXMtLS0tLS0tLS0tPlwiLCB0aGlzLnF1ZXVlZEVudHJpZXMpO1xuICB9XG5cbiAgc2VuZFRvU2VydmVyKCkge1xuICAgIGNvbnN0IHsgYmF0Y2hTaXplID0gNTAsIHRyYWNrVXJsIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgZW50cnlDaHVua3MgPSBUcmFja1BlcmZvcm1hbmNlLmNodW5rKHRoaXMucXVldWVkRW50cmllcywgYmF0Y2hTaXplKTtcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGVudHJ5Q2h1bmtzLmZvckVhY2goKGVudHJ5Q2h1bms6IGFueVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgZGF0YTogZW50cnlDaHVuayxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZmV0Y2godHJhY2tVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBzZW5kaW5nIGRhdGEgdG8gL3RyYWNrOiBcIiwgZXJyb3IsIGJvZHkpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSAwO1xuICB9XG5cbiAgLy8gR2V0IGRldmljZSB0eXBlXG4gIHN0YXRpYyBnZXREZXZpY2VUeXBlKCk6IGFueSB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGlmICgvKHRhYmxldHxpcGFkfHBsYXlib29rfHNpbGspfChhbmRyb2lkKD8hLiptb2JpKSkvaS50ZXN0KHVhKSkge1xuICAgICAgcmV0dXJuIFwidGFibGV0XCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIC9Nb2JpbGV8aVAoaG9uZXxvZCl8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlfEtpbmRsZXxTaWxrLUFjY2VsZXJhdGVkfChocHd8d2ViKU9TfE9wZXJhIE0ob2JpfGluaSkvLnRlc3QoXG4gICAgICAgIHVhXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJtb2JpbGVcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGVza3RvcFwiO1xuICB9XG5cbiAgLy8gR2V0IE9TXG4gIHN0YXRpYyBnZXRPUygpOiBhbnkge1xuICAgIHZhciB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgICAgIG1hY29zUGxhdGZvcm1zID0gW1wiTWFjaW50b3NoXCIsIFwiTWFjSW50ZWxcIiwgXCJNYWNQUENcIiwgXCJNYWM2OEtcIl0sXG4gICAgICB3aW5kb3dzUGxhdGZvcm1zID0gW1wiV2luMzJcIiwgXCJXaW42NFwiLCBcIldpbmRvd3NcIiwgXCJXaW5DRVwiXSxcbiAgICAgIGlvc1BsYXRmb3JtcyA9IFtcImlQaG9uZVwiLCBcImlQYWRcIiwgXCJpUG9kXCJdLFxuICAgICAgb3MgPSBudWxsO1xuXG4gICAgaWYgKG1hY29zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcIk1hYyBPU1wiO1xuICAgIH0gZWxzZSBpZiAoaW9zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcImlPU1wiO1xuICAgIH0gZWxzZSBpZiAod2luZG93c1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgfSBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICBvcyA9IFwiQW5kcm9pZFwiO1xuICAgIH0gZWxzZSBpZiAoIW9zICYmIC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgIG9zID0gXCJMaW51eFwiO1xuICAgIH1cblxuICAgIHJldHVybiBvcztcbiAgfVxuICBzdGF0aWMgY2FwdHVyZU5ldHdvcmtSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHZhciBjYXB0dXJlX2Nzc19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfaW1nX3JlcXVlc3QgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNhcHR1cmVfanNfcmVxdWVzdCwgY2FwdHVyZV9jc3NfcmVxdWVzdCwgY2FwdHVyZV9pbWdfcmVxdWVzdCB9O1xuICB9XG59XG5cbi8vIGV4cG9ydCBhIGdsb2JhbCB2YXJpYWJsZSB0byBhY2Nlc3MgbGF0ZXJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcbmV4cG9ydCBkZWZhdWx0IFRyYWNrUGVyZm9ybWFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9