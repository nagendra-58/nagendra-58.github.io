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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var TrackPerformance = /** @class */ (function () {
    function TrackPerformance(_a) {
        var _this = this;
        var trackUrl = _a.trackUrl, jwt = _a.jwt, _b = _a.threshold, threshold = _b === void 0 ? 6000 : _b, _c = _a.batchSize, batchSize = _c === void 0 ? 50 : _c, _d = _a.excludeKeys, excludeKeys = _d === void 0 ? [] : _d, _e = _a.includeHosts, includeHosts = _e === void 0 ? [] : _e, applicationId = _a.applicationId;
        this.queuedEntries = [];
        this.locationInfo = {};
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
            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, TrackPerformance.getLocation()];
                        case 1:
                            _a.locationInfo = _b.sent();
                            this.handleEntries(performance.getEntriesByType("navigation"));
                            return [2 /*return*/];
                    }
                });
            }); }, 0);
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
        entry.firstContentFullPaint = TrackPerformance.getfirstContentFullPaint();
        entry.largestContentFullPaint = TrackPerformance.getlargestContentFullPaint([]);
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
        this.queuedEntries[0].city = this.locationInfo.city;
        this.queuedEntries[0].country = this.locationInfo.country;
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
    TrackPerformance.getfirstContentFullPaint = function () {
        var paintTimings = performance.getEntriesByType("paint");
        var firstContentFullPaint = paintTimings.find(function (_a) {
            var name = _a.name;
            return name === "first-contentful-paint";
        });
        return firstContentFullPaint ? firstContentFullPaint.startTime : 0;
    };
    TrackPerformance.getlargestContentFullPaint = function (largestContentFullPaint) {
        new PerformanceObserver(function (entryList) {
            var lcp = entryList.getEntries();
            if (lcp.length)
                largestContentFullPaint = lcp[lcp.length - 1];
        }).observe({ type: "largest-contentful-paint", buffered: true });
        return largestContentFullPaint ? largestContentFullPaint.startTime : 0;
    };
    TrackPerformance.getLocation = function () {
        return new Promise(function (resolve, reject) {
            fetch("http://ip-api.com/json", {
                method: "GET",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
                .then(function (res) { return res.json(); })
                .then(function (res) {
                return resolve(res);
            })
                .catch(function (error) {
                // tslint:disable-next-line
                return resolve();
            });
        });
    };
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtJQW1HRSwwQkFBWSxFQVFlO1FBUjNCLGlCQWdEQztZQS9DQyxzQkFBUSxFQUNSLFlBQUcsRUFDSCxpQkFBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLGlCQUFjLEVBQWQsbUNBQWMsRUFDZCxtQkFBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLG9CQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsZ0NBQWE7UUFFYixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFH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bkM7YUFDRixDQUFDO2lCQUNDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN6QixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNSLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLDJCQUEyQjtnQkFDM0IsT0FBTyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUVELDJDQUEyQztBQUMxQyxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsa0JBQWUsZ0JBQWdCLENBQUMiLCJmaWxlIjoicnVtLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMge1xuICB0cmFja1VybDogc3RyaW5nO1xuICBqd3Q6IHN0cmluZztcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXTtcbiAgaW5jbHVkZUhvc3RzOiBzdHJpbmdbXTtcbiAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xufVxuXG5jbGFzcyBUcmFja1BlcmZvcm1hbmNlIHtcbiAgc3RhdGljIGNvbXB1dGVNZXRyaWNzKFxuICAgIGVudHJ5OiBhbnksXG4gICAgdHlwZTogYW55LFxuICAgIGRvbTogYW55LFxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50OiBhbnkgPSBbXSxcbiAgICBjYXB0dXJlUmVxdWVzdHM6IGFueSA9IFtdXG4gICkge1xuICAgIC8vIFRMUyB0aW1lXG4gICAgaWYgKGVudHJ5LnNlY3VyZUNvbm5lY3Rpb25TdGFydCA+IDApIHtcbiAgICAgIGVudHJ5LnRsc1RpbWUgPSBlbnRyeS5jb25uZWN0RW5kIC0gZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8vIFRpbWUgdG8gRmlyc3QgQnl0ZSAoVFRGQilcbiAgICBlbnRyeS50dGZiID0gZW50cnkucmVzcG9uc2VTdGFydCAtIGVudHJ5LnJlcXVlc3RTdGFydDtcblxuICAgIC8qXG4gICAgICBUaGUgZmV0Y2hTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmVwcmVzZW50cyBhIHRpbWVzdGFtcCBpbW1lZGlhdGVseVxuICAgICAgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyB0byBmZXRjaCB0aGUgcmVzb3VyY2UuXG4gICAgKi9cbiAgICBlbnRyeS5mZXRjaFRpbWUgPSBlbnRyeS5yZXNwb25zZUVuZCAtIGVudHJ5LmZldGNoU3RhcnQ7XG4gICAgaWYgKGVudHJ5LndvcmtlclN0YXJ0ID4gMCkge1xuICAgICAgZW50cnkud29ya2VyVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkud29ya2VyU3RhcnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgIFRoZSByZXF1ZXN0U3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJldHVybnMgYSB0aW1lc3RhbXAgb2YgdGhlIHRpbWVcbiAgICAgIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UgZnJvbSB0aGVcbiAgICAgIHNlcnZlciwgY2FjaGUsIG9yIGxvY2FsIHJlc291cmNlXG4gICAgICBSZXF1ZXN0IHBsdXMgcmVzcG9uc2UgdGltZSAobmV0d29yayBvbmx5KVxuICAgICovXG4gICAgZW50cnkudG90YWxUaW1lID0gZW50cnkucmVzcG9uc2VFbmQgLSBlbnRyeS5yZXF1ZXN0U3RhcnQ7XG5cbiAgICAvLyBSZXNwb25zZSB0aW1lIG9ubHkgKGRvd25sb2FkKVxuICAgIGVudHJ5LmRvd25sb2FkVGltZSA9IGVudHJ5LnJlc3BvbnNlRW5kIC0gZW50cnkucmVzcG9uc2VTdGFydDtcblxuICAgIC8vIEhUVFAgaGVhZGVyIHNpemVcbiAgICBlbnRyeS5oZWFkZXJTaXplID0gZW50cnkudHJhbnNmZXJTaXplIC0gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gQ29tcHJlc3Npb24gcmF0aW9cbiAgICBlbnRyeS5jb21wcmVzc2lvblJhdGlvID0gZW50cnkuZGVjb2RlZEJvZHlTaXplIC8gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gUGFnZSBUaW1lXG4gICAgaWYgKGVudHJ5LmVudHJ5VHlwZSA9PT0gXCJuYXZpZ2F0aW9uXCIpIHtcbiAgICAgIGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgPSBlbnRyeS5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQgLSBlbnRyeS5zdGFydFRpbWU7XG4gICAgICBlbnRyeS5wYWdlTG9hZCA9IGVudHJ5LmxvYWRFdmVudEVuZCAtIGVudHJ5LnN0YXJ0VGltZTtcbiAgICB9XG4gICAgZW50cnkuc3RhcnRSZW5kZXIgPSBlbnRyeS5zdGFydFRpbWU7XG4gICAgZW50cnkuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gVHJhY2tQZXJmb3JtYW5jZS5nZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQoKTtcbiAgICBlbnRyeS5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0bGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQoXG4gICAgICBbXVxuICAgICk7XG4gICAgZW50cnkuZmlyc3RDUFVJZGxlID0gdHlwZS5oYXJkd2FyZUNvbmN1cnJlbmN5O1xuICAgIGRvbSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdO1xuICAgIHR5cGUgPSBuYXZpZ2F0b3I7XG4gICAgZW50cnkuYnJvd3NlciA9IGAke3dpbmRvdy5uYXZpZ2F0b3IuYXBwTmFtZX0ke3dpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbn1gO1xuICAgIGVudHJ5LnVzZXJhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgZW50cnkub3MgPSBUcmFja1BlcmZvcm1hbmNlLmdldE9TKCk7XG4gICAgZW50cnkuZGV2aWNldHlwZSA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0RGV2aWNlVHlwZSgpO1xuICAgIGVudHJ5LmNvbm5lY3Rpb250eXBlID0gdHlwZS5jb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGU7XG4gICAgKGVudHJ5LnJ1bVZlcnNpb24gPSBcIjEuMC4wXCIpLCAoZW50cnkuZG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICBlbnRyeS5wYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgZW50cnkudXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBlbnRyeS5wYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICBlbnRyeS5iYWNrZW5kID0gZW50cnkudHRmYjtcbiAgICBlbnRyeS5yZWRpcmVjdCA9IGVudHJ5LnJlZGlyZWN0RW5kIC0gZW50cnkucmVkaXJlY3RTdGFydDtcbiAgICBlbnRyeS5kbnNMb29rVXAgPSBlbnRyeS5kb21haW5Mb29rdXBFbmQgLSBlbnRyeS5kb21haW5Mb29rdXBTdGFydDtcbiAgICAvLyBUb3RhbCBDb25uZWN0aW9uIHRpbWVcbiAgICBlbnRyeS50Y3BDb25uZWN0ID0gZW50cnkuY29ubmVjdEVuZCAtIGVudHJ5LmNvbm5lY3RTdGFydDtcbiAgICBlbnRyeS5zc2xOZWdvdGlhdGlvbiA9IGVudHJ5LnRsc1RpbWU7XG4gICAgZW50cnkuZmxhZ3MgPSBkb2N1bWVudC50aXRsZTtcbiAgICBlbnRyeS5kb21FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG4gICAgZW50cnkuZG9tSW50ZXJhY3RpdmUgPSBkb20uZG9tSW50ZXJhY3RpdmU7XG4gICAgZW50cnkuYXZlcmFnZURPTURlcHRoID0gVHJhY2tQZXJmb3JtYW5jZS5hdmdET01EZXB0aChbXSk7XG4gICAgY2FwdHVyZVJlcXVlc3RzQ291bnQgPVxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5jYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZVJlcXVlc3RzKTtcbiAgICBlbnRyeS5pbWFnZVJlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9pbWdfcmVxdWVzdC5sZW5ndGg7XG4gICAgZW50cnkuY3NzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2Nzc19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5qc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9qc19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5odG1sU2l6ZSA9XG4gICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTC5sZW5ndGggLyAxMDI0KS50b0ZpeGVkKDApICsgXCIgS0JcIjtcbiAgICBlbnRyeS5wcm9qZWN0ID0gXCJQQUNFXCI7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGNodW5rKGFycmF5OiBhbnlbXSwgc2l6ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICUgc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXMucHVzaChbXSk7XG4gICAgICB9XG4gICAgICByZXNbcmVzLmxlbmd0aCAtIDFdLnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIFtdKTtcbiAgfVxuICBxdWV1ZWRFbnRyaWVzOiBhbnlbXTtcbiAgbG9jYXRpb25JbmZvOiBhbnk7XG4gIG9wdGlvbnM6IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucztcbiAgaW50ZXJ2YWxJZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0cmFja1VybCxcbiAgICBqd3QsXG4gICAgdGhyZXNob2xkID0gNjAwMCxcbiAgICBiYXRjaFNpemUgPSA1MCxcbiAgICBleGNsdWRlS2V5cyA9IFtdLFxuICAgIGluY2x1ZGVIb3N0cyA9IFtdLFxuICAgIGFwcGxpY2F0aW9uSWQsXG4gIH06IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucykge1xuICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xuICAgIHRoaXMubG9jYXRpb25JbmZvID0ge307XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdHJhY2tVcmwsXG4gICAgICBqd3QsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBiYXRjaFNpemUsXG4gICAgICBleGNsdWRlS2V5cyxcbiAgICAgIGluY2x1ZGVIb3N0cyxcbiAgICAgIGFwcGxpY2F0aW9uSWQsXG4gICAgfTtcblxuICAgIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93KSB7XG4gICAgICBpZiAoXCJQZXJmb3JtYW5jZU9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHBlcmZPYnNlcnZlciA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChsaXN0LCBvYmopID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMobGlzdC5nZXRFbnRyaWVzKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwZXJmT2JzZXJ2ZXIub2JzZXJ2ZSh7XG4gICAgICAgICAgZW50cnlUeXBlczogW1wicmVzb3VyY2VcIl0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG8tRG9cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvY2F0aW9uSW5mbyA9IGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpKTtcbiAgICAgIH0sIDApO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHVwIHNldEludGVydmFsIHRvIHB1c2ggdHJhY2sgZGF0YVwiKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZW5kVG9TZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XG4gICAgICB9XG4gICAgfSwgdGhyZXNob2xkKTtcbiAgfVxuXG4gIGhhbmRsZUVudHJpZXMoZW50cmllczogYW55W10pIHtcbiAgICBjb25zdCB7IHRyYWNrVXJsLCBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IGVudHJ5LnRvSlNPTigpKTtcbiAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoVHJhY2tQZXJmb3JtYW5jZS5jb21wdXRlTWV0cmljcyk7XG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xuICAgICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50cnkpLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IGVudHJ5W2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSB0aGlzLnF1ZXVlZEVudHJpZXMuY29uY2F0KGVudHJpZXMpO1xuICAgIHRoaXMucXVldWVkRW50cmllc1swXS5hcHBsaWNhdGlvbklkID0gYXBwbGljYXRpb25JZDtcbiAgICB0aGlzLnF1ZXVlZEVudHJpZXNbMF0uY2l0eSA9IHRoaXMubG9jYXRpb25JbmZvLmNpdHk7XG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzWzBdLmNvdW50cnkgPSB0aGlzLmxvY2F0aW9uSW5mby5jb3VudHJ5O1xuICB9XG5cbiAgc2VuZFRvU2VydmVyKCkge1xuICAgIGNvbnN0IHsgYmF0Y2hTaXplID0gNTAsIHRyYWNrVXJsLCBqd3QgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBlbnRyeUNodW5rcyA9IFRyYWNrUGVyZm9ybWFuY2UuY2h1bmsodGhpcy5xdWV1ZWRFbnRyaWVzLCBiYXRjaFNpemUpO1xuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgZW50cnlDaHVua3MuZm9yRWFjaCgoZW50cnlDaHVuazogYW55W10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGZldGNoKHRyYWNrVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgICAgICAgdG9rZW46IGp3dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRyeUNodW5rWzBdKSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSAwO1xuICB9XG5cbiAgLy8gR2V0IGRldmljZSB0eXBlXG4gIHN0YXRpYyBnZXREZXZpY2VUeXBlKCk6IGFueSB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGlmICgvKHRhYmxldHxpcGFkfHBsYXlib29rfHNpbGspfChhbmRyb2lkKD8hLiptb2JpKSkvaS50ZXN0KHVhKSkge1xuICAgICAgcmV0dXJuIFwidGFibGV0XCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIC9Nb2JpbGV8aVAoaG9uZXxvZCl8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlfEtpbmRsZXxTaWxrLUFjY2VsZXJhdGVkfChocHd8d2ViKU9TfE9wZXJhIE0ob2JpfGluaSkvLnRlc3QoXG4gICAgICAgIHVhXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gXCJtb2JpbGVcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGVza3RvcFwiO1xuICB9XG5cbiAgLy8gR2V0IE9TXG4gIHN0YXRpYyBnZXRPUygpOiBhbnkge1xuICAgIHZhciB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgICAgIG1hY29zUGxhdGZvcm1zID0gW1wiTWFjaW50b3NoXCIsIFwiTWFjSW50ZWxcIiwgXCJNYWNQUENcIiwgXCJNYWM2OEtcIl0sXG4gICAgICB3aW5kb3dzUGxhdGZvcm1zID0gW1wiV2luMzJcIiwgXCJXaW42NFwiLCBcIldpbmRvd3NcIiwgXCJXaW5DRVwiXSxcbiAgICAgIGlvc1BsYXRmb3JtcyA9IFtcImlQaG9uZVwiLCBcImlQYWRcIiwgXCJpUG9kXCJdLFxuICAgICAgb3MgPSBudWxsO1xuXG4gICAgaWYgKG1hY29zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcIk1hYyBPU1wiO1xuICAgIH0gZWxzZSBpZiAoaW9zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcImlPU1wiO1xuICAgIH0gZWxzZSBpZiAod2luZG93c1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcbiAgICAgIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgfSBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpKSB7XG4gICAgICBvcyA9IFwiQW5kcm9pZFwiO1xuICAgIH0gZWxzZSBpZiAoIW9zICYmIC9MaW51eC8udGVzdChwbGF0Zm9ybSkpIHtcbiAgICAgIG9zID0gXCJMaW51eFwiO1xuICAgIH1cblxuICAgIHJldHVybiBvcztcbiAgfVxuICBzdGF0aWMgY2FwdHVyZU5ldHdvcmtSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueVtdKTogYW55IHtcbiAgICB2YXIgY2FwdHVyZV9qc19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfY3NzX3JlcXVlc3QgPSBbXTtcbiAgICB2YXIgY2FwdHVyZV9pbWdfcmVxdWVzdCA9IFtdO1xuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwic2NyaXB0XCIpIHtcbiAgICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJjc3NcIikge1xuICAgICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJpbWdcIikge1xuICAgICAgICBjYXB0dXJlX2ltZ19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgY2FwdHVyZV9qc19yZXF1ZXN0LCBjYXB0dXJlX2Nzc19yZXF1ZXN0LCBjYXB0dXJlX2ltZ19yZXF1ZXN0IH07XG4gIH1cblxuICBzdGF0aWMgYXZnRE9NRGVwdGgodHJhY2tlcjogYW55KTogYW55IHtcbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwcmV2Tm9kZSA9IDA7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKSkuZm9yRWFjaCgobm9kZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXRyYWNrZXJbbm9kZS50YWdOYW1lXSkgdHJhY2tlcltub2RlLnRhZ05hbWVdID0gMTtcbiAgICAgIGVsc2UgdHJhY2tlcltub2RlLnRhZ05hbWVdKys7XG4gICAgICBpZiAobm9kZS5wYXJlbnROb2RlICE9IHByZXZOb2RlKSBkZXB0aCsrO1xuICAgICAgcHJldk5vZGUgPSBub2RlO1xuICAgIH0pO1xuICAgIHJldHVybiBkZXB0aCAvIDI7XG4gIH1cblxuICBzdGF0aWMgZ2V0Zmlyc3RDb250ZW50RnVsbFBhaW50KCk6IGFueSB7XG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xuICAgIGNvbnN0IGZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxuICAgICk7XG4gICAgcmV0dXJuIGZpcnN0Q29udGVudEZ1bGxQYWludCA/IGZpcnN0Q29udGVudEZ1bGxQYWludC5zdGFydFRpbWUgOiAwO1xuICB9XG5cbiAgc3RhdGljIGdldGxhcmdlc3RDb250ZW50RnVsbFBhaW50KGxhcmdlc3RDb250ZW50RnVsbFBhaW50OiBhbnkpOiBhbnkge1xuICAgIG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChlbnRyeUxpc3QpID0+IHtcbiAgICAgIHZhciBsY3AgPSBlbnRyeUxpc3QuZ2V0RW50cmllcygpO1xuICAgICAgaWYgKGxjcC5sZW5ndGgpIGxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gbGNwW2xjcC5sZW5ndGggLSAxXTtcbiAgICB9KS5vYnNlcnZlKHsgdHlwZTogXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIiwgYnVmZmVyZWQ6IHRydWUgfSk7XG4gICAgcmV0dXJuIGxhcmdlc3RDb250ZW50RnVsbFBhaW50ID8gbGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQuc3RhcnRUaW1lIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMb2NhdGlvbigpOiBhbnkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaChcImh0dHA6Ly9pcC1hcGkuY29tL2pzb25cIiwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qXCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGV4cG9ydCBhIGdsb2JhbCB2YXJpYWJsZSB0byBhY2Nlc3MgbGF0ZXJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcbmV4cG9ydCBkZWZhdWx0IFRyYWNrUGVyZm9ybWFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9