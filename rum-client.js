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
        var _b = _a.trackUrl, trackUrl = _b === void 0 ? "http://54.151.120.250:3001/rux/writePerfomanceMetrics" : _b, _c = _a.threshold, threshold = _c === void 0 ? 0 : _c, _d = _a.batchSize, batchSize = _d === void 0 ? 50 : _d, _e = _a.excludeKeys, excludeKeys = _e === void 0 ? ["nextHopProtocol", "initiatorType"] : _e, _f = _a.includeHosts, includeHosts = _f === void 0 ? [] : _f, applicationId = _a.applicationId;
        this.queuedEntries = [];
        this.locationInfo = {};
        this.blockingJSRequests = [];
        this.blockingCSSRequests = [];
        this.options = {
            trackUrl: trackUrl,
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
                            TrackPerformance.inactivityTime(0, this);
                            _a = this;
                            return [4 /*yield*/, TrackPerformance.getLocation()];
                        case 1:
                            _a.locationInfo = _b.sent();
                            return [4 /*yield*/, TrackPerformance.blockedJSRequest([], this)];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.blockedCSSRequest([], this)];
                        case 3:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.getfirstContentFullPaint(this)];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, TrackPerformance.getlargestContentFullPaint(this)];
                        case 5:
                            _b.sent();
                            this.handleEntries(performance.getEntriesByType("navigation"));
                            TrackPerformance.interactionMetrix(this);
                            return [2 /*return*/];
                    }
                });
            }); }, 500);
        };
        console.log("Setting up setInterval to push track data");
        this.intervalId = window.setTimeout(function () {
            if (_this.queuedEntries.length) {
                TrackPerformance.sendToServer(_this);
                _this.queuedEntries = [];
            }
        }, threshold);
    }
    TrackPerformance.computeMetrics = function (entry, type, dom, captureRequestsCount, captureRequests) {
        if (captureRequestsCount === void 0) { captureRequestsCount = []; }
        if (captureRequests === void 0) { captureRequests = []; }
        // TLS time
        // if (entry.secureConnectionStart > 0) {
        entry.tlsTime = TrackPerformance.timestampToSec(window.performance.timing.requestStart, window.performance.timing.secureConnectionStart);
        // }
        // Time to First Byte (TTFB)
        entry.ttfb = TrackPerformance.timestampToSec(window.performance.timing.responseStart, window.performance.timing.navigationStart);
        /*
          The fetchStart read-only property represents a timestamp immediately
          before the browser starts to fetch the resource.
        */
        entry.fetchTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.fetchStart);
        if (entry.workerStart > 0) {
            entry.workerTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, entry.workerStart);
        }
        /*
          The requestStart read-only property returns a timestamp of the time
          immediately before the browser starts requesting the resource from the
          server, cache, or local resource
          Request plus response time (network only)
        */
        entry.totalTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.requestStart);
        // Response time only (download)
        entry.downloadTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.responseStart);
        // HTTP header size
        entry.headerSize = entry.transferSize - entry.encodedBodySize;
        // Compression ratio
        entry.compressionRatio = entry.decodedBodySize / entry.encodedBodySize;
        // Page Time
        entry.domContentLoaded = TrackPerformance.timestampToSec(window.performance.timing.domContentLoadedEventEnd, window.performance.timing.domContentLoadedEventStart);
        entry.pageLoad = TrackPerformance.timestampToSec(window.performance.timing.loadEventEnd, entry.startTime);
        entry.startRender = new Date(entry.startTime * 1000).getSeconds();
        // entry.firstCPUIdle = type.hardwareConcurrency;
        dom = performance.getEntriesByType("navigation")[0];
        type = navigator;
        entry.browser = "" + window.navigator.appName + window.navigator.appVersion;
        entry.userAgent = navigator.userAgent;
        entry.os = TrackPerformance.getOS();
        entry.deviceType = TrackPerformance.getDeviceType();
        entry.connectionType = type.connection.effectiveType;
        (entry.rumVersion = "1.0.0"), (entry.domain = window.location.hostname);
        entry.pageURL = window.location.href;
        entry.urlPath = window.location.pathname;
        entry.backend = entry.ttfb;
        entry.redirect = TrackPerformance.timestampToSec(entry.startTime, window.performance.timing.redirectStart);
        entry.dnsLookUp = TrackPerformance.timestampToSec(window.performance.timing.domainLookupEnd, window.performance.timing.domainLookupStart);
        // Total Connection time
        entry.tcpConnect = TrackPerformance.timestampToSec(window.performance.timing.connectEnd, window.performance.timing.connectStart);
        entry.sslNegotiation = entry.tlsTime;
        entry.network = entry.tcpConnect + entry.sslNegotiation + entry.dnsLookUp;
        entry.domElements = document.getElementsByTagName("*").length;
        entry.domInteractive = new Date(dom.domInteractive * 1000).getSeconds();
        entry.averageDOMDepth = TrackPerformance.avgDOMDepth([]);
        captureRequestsCount =
            TrackPerformance.captureNetworkRequest(captureRequests);
        entry.imageRequests = captureRequestsCount.capture_img_request.length;
        entry.cssRequests = captureRequestsCount.capture_css_request.length;
        entry.jsRequests = captureRequestsCount.capture_js_request.length;
        entry.imageATFRequests = captureRequestsCount.capture_imgatf_request.length;
        entry.htmlSize = (document.documentElement.outerHTML.length / 1024).toFixed(0);
        entry.inlineJSSize = TrackPerformance.JSSize();
        entry.inlineStyleSize = TrackPerformance.inlineStyleSize([]);
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
    };
    TrackPerformance.sendToServer = function (scope) {
        var _a = scope.options, _b = _a.batchSize, batchSize = _b === void 0 ? 50 : _b, trackUrl = _a.trackUrl, applicationId = _a.applicationId;
        var entryChunks = TrackPerformance.chunk(scope.queuedEntries, batchSize);
        var promise = Promise.resolve();
        var mainEntryChunk = entryChunks
            .flat()
            .find(function (_a) {
            var name = _a.name;
            return name == window.location.href;
        });
        mainEntryChunk = mainEntryChunk ? mainEntryChunk : entryChunks[0][0];
        mainEntryChunk.applicationId = applicationId;
        if (scope.locationInfo) {
            mainEntryChunk.city = scope.locationInfo.city;
            mainEntryChunk.country = scope.locationInfo.country;
        }
        mainEntryChunk.blockingJSRequests = scope.blockingJSRequests.length;
        mainEntryChunk.blockingCSSRequests = scope.blockingCSSRequests.length;
        mainEntryChunk.interactionTime = scope.queuedEntries[0].interactionTime;
        mainEntryChunk.interactionType = scope.queuedEntries[0].interactionType;
        mainEntryChunk.interactionElement =
            scope.queuedEntries[0].interactionElement;
        mainEntryChunk.firstContentFullPaint = scope.firstContentFullPaint;
        mainEntryChunk.largestContentFullPaint = scope.largestContentFullPaint;
        mainEntryChunk.pageTitle = document.title;
        mainEntryChunk.flags = document.title;
        mainEntryChunk.firstCPUIdle = scope.firstCPUIdle;
        promise = promise.then(function () {
            return new Promise(function (resolve, reject) {
                fetch(trackUrl, {
                    method: "post",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify(mainEntryChunk),
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
    };
    TrackPerformance.prototype.stop = function () {
        clearTimeout(this.intervalId);
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
        var capture_imgatf_request = [];
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
                if (capture_resource[i].name.split(/[#?]/)[0].split(".").pop().trim() ==
                    "atf")
                    capture_imgatf_request.push(capture_resource[i].name);
            }
        }
        return {
            capture_js_request: capture_js_request,
            capture_css_request: capture_css_request,
            capture_img_request: capture_img_request,
            capture_imgatf_request: capture_imgatf_request,
        };
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
    TrackPerformance.getfirstContentFullPaint = function (scope) {
        var paintTimings = performance.getEntriesByType("paint");
        var firstContentFullPaint = paintTimings.find(function (_a) {
            var name = _a.name;
            return name === "first-contentful-paint";
        });
        scope.firstContentFullPaint = firstContentFullPaint
            ? new Date(firstContentFullPaint.startTime * 1000).getSeconds()
            : 0;
    };
    TrackPerformance.getlargestContentFullPaint = function (scope) {
        new PerformanceObserver(function (entryList) {
            var lcp = entryList.getEntries();
            if (lcp.length) {
                scope.largestContentFullPaint = lcp[lcp.length - 1]
                    ? new Date(lcp[lcp.length - 1].startTime * 1000).getSeconds()
                    : 0;
            }
        }).observe({ type: "largest-contentful-paint", buffered: true });
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
    TrackPerformance.interactionMetrix = function (scope) {
        var events = [
            "click",
            "scroll",
            "keypress",
            "Keydown",
            // "mouseover",
            // "mouseout",
            // "mousedown",
            // "mouseup",
            "change",
            "blur",
            "submit",
            "unload",
            "resize",
        ];
        var startDate = new Date();
        var elapsedTime = 0;
        var focus = function (event) {
            startDate = new Date();
        };
        var interactionTime = function (event) {
            var endDate = new Date();
            var spentTime = endDate.getTime() - startDate.getTime();
            elapsedTime += spentTime;
            scope.queuedEntries[0].interactionTime = elapsedTime;
            scope.queuedEntries[0].interactionType = event.type;
            if (event.type == "click") {
                scope.queuedEntries[0].pageURL =
                    event.target.ownerDocument.location.href;
                scope.queuedEntries[0].urlPath =
                    event.target.ownerDocument.location.pathname;
            }
            scope.queuedEntries[0].interactionElement = event.target.className;
            TrackPerformance.sendToServer(scope);
        };
        document.body.addEventListener("focus", focus);
        events.forEach(function (eventType) {
            document.body.addEventListener(eventType, interactionTime);
        });
    };
    TrackPerformance.JSSize = function () {
        var content = "";
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (!scripts[i].src)
                content += scripts[i].innerHTML;
        }
        return new Blob([content]).size;
    };
    TrackPerformance.timestampToSec = function (start, end) {
        return new Date((start - end) * 1000).getSeconds();
    };
    TrackPerformance.inlineStyleSize = function (inlineStyleSize) {
        var content = "";
        var styles = document.querySelectorAll("[style]");
        for (var i = 0; i < styles.length; i++) {
            inlineStyleSize = styles[i].attributes;
            if (inlineStyleSize.style)
                content += inlineStyleSize.style.value;
        }
        return new Blob([content]).size;
    };
    TrackPerformance.blockedJSRequest = function (capture_resource, scope) {
        var capture_js_request = [];
        scope.blockingJSRequests = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "script")
                capture_js_request.push(capture_resource[i].name);
        }
        // map every url to the promise of the fetch
        var requests = capture_js_request.map(function (url) { return fetch(url); });
        // tslint:disable-next-line
        Promise.allSettled(requests).then(function (results) {
            results.forEach(function (result, num) {
                if (result.status == "rejected") {
                    scope.blockingJSRequests.push(requests[num]);
                }
            });
        });
    };
    TrackPerformance.blockedCSSRequest = function (capture_resource, scope) {
        var capture_js_request = [];
        scope.blockingCSSRequests = [];
        capture_resource = performance.getEntriesByType("resource");
        for (var i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == "css")
                capture_js_request.push(capture_resource[i].name);
        }
        // map every url to the promise of the fetch
        var requests = capture_js_request.map(function (url) { return fetch(url); });
        // tslint:disable-next-line
        Promise.allSettled(requests).then(function (results) {
            results.forEach(function (result, num) {
                if (result.status == "rejected") {
                    scope.blockingCSSRequests.push(requests[num]);
                }
            });
        });
    };
    TrackPerformance.inactivityTime = function (time, scope) {
        window.onload = resetTimer;
        // DOM Events
        document.onmousemove = resetTimer;
        document.onkeydown = resetTimer;
        function resetTimer() {
            clearTimeout(time);
            time = setTimeout(function () { }, 3000);
            scope.firstCPUIdle = new Date(time * 1000).getSeconds();
            // 1000 milliseconds = 1 second
        }
        window.addEventListener("load", resetTimer, true);
        var events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
        events.forEach(function (name) {
            document.addEventListener(name, resetTimer, true);
        });
    };
    return TrackPerformance;
}());
// export a global variable to access later
window.TrackPerformance = TrackPerformance;
exports.default = TrackPerformance;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtJQWtJRSwwQkFBWSxFQU9lO1FBUDNCLGlCQXNEQztZQXJEQyxnQkFBa0UsRUFBbEUsdUZBQWtFLEVBQ2xFLGlCQUFhLEVBQWIsa0NBQWEsRUFDYixpQkFBYyxFQUFkLG1DQUFjLEVBQ2QsbUJBQWtELEVBQWxELHVFQUFrRCxFQUNsRCxvQkFBaUIsRUFBakIsc0NBQWlCLEVBQ2pCLGdDQUFhO1FBRWIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixH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R0FBRyxVQUFVLENBQUM7UUFDM0IsYUFBYTtRQUNiLFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBRWhDLFNBQVMsVUFBVTtZQUNqQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxjQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4RCwrQkFBK0I7UUFDakMsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQzNCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUVELDJDQUEyQztBQUMxQyxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsa0JBQWUsZ0JBQWdCLENBQUMiLCJmaWxlIjoicnVtLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMge1xuICB0cmFja1VybDogc3RyaW5nO1xuICB0aHJlc2hvbGQ/OiBudW1iZXI7XG4gIGJhdGNoU2l6ZT86IG51bWJlcjtcbiAgZXhjbHVkZUtleXM6IHN0cmluZ1tdO1xuICBpbmNsdWRlSG9zdHM6IHN0cmluZ1tdO1xuICBhcHBsaWNhdGlvbklkOiBzdHJpbmc7XG59XG5cbmNsYXNzIFRyYWNrUGVyZm9ybWFuY2Uge1xuICBzdGF0aWMgY29tcHV0ZU1ldHJpY3MoXG4gICAgZW50cnk6IGFueSxcbiAgICB0eXBlOiBhbnksXG4gICAgZG9tOiBhbnksXG4gICAgY2FwdHVyZVJlcXVlc3RzQ291bnQ6IGFueSA9IFtdLFxuICAgIGNhcHR1cmVSZXF1ZXN0czogYW55ID0gW11cbiAgKSB7XG4gICAgLy8gVExTIHRpbWVcbiAgICAvLyBpZiAoZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0ID4gMCkge1xuICAgIGVudHJ5LnRsc1RpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXF1ZXN0U3RhcnQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnNlY3VyZUNvbm5lY3Rpb25TdGFydFxuICAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gVGltZSB0byBGaXJzdCBCeXRlIChUVEZCKVxuICAgIGVudHJ5LnR0ZmIgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZVN0YXJ0LFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnRcbiAgICApO1xuXG4gICAgLypcbiAgICAgIFRoZSBmZXRjaFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXByZXNlbnRzIGEgdGltZXN0YW1wIGltbWVkaWF0ZWx5XG4gICAgICBiZWZvcmUgdGhlIGJyb3dzZXIgc3RhcnRzIHRvIGZldGNoIHRoZSByZXNvdXJjZS5cbiAgICAqL1xuICAgIGVudHJ5LmZldGNoVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5mZXRjaFN0YXJ0XG4gICAgKTtcbiAgICBpZiAoZW50cnkud29ya2VyU3RhcnQgPiAwKSB7XG4gICAgICBlbnRyeS53b3JrZXJUaW1lID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCxcbiAgICAgICAgZW50cnkud29ya2VyU3RhcnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgIFRoZSByZXF1ZXN0U3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJldHVybnMgYSB0aW1lc3RhbXAgb2YgdGhlIHRpbWVcbiAgICAgIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UgZnJvbSB0aGVcbiAgICAgIHNlcnZlciwgY2FjaGUsIG9yIGxvY2FsIHJlc291cmNlXG4gICAgICBSZXF1ZXN0IHBsdXMgcmVzcG9uc2UgdGltZSAobmV0d29yayBvbmx5KVxuICAgICovXG4gICAgZW50cnkudG90YWxUaW1lID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlcXVlc3RTdGFydFxuICAgICk7XG5cbiAgICAvLyBSZXNwb25zZSB0aW1lIG9ubHkgKGRvd25sb2FkKVxuICAgIGVudHJ5LmRvd25sb2FkVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZVN0YXJ0XG4gICAgKTtcblxuICAgIC8vIEhUVFAgaGVhZGVyIHNpemVcbiAgICBlbnRyeS5oZWFkZXJTaXplID0gZW50cnkudHJhbnNmZXJTaXplIC0gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gQ29tcHJlc3Npb24gcmF0aW9cbiAgICBlbnRyeS5jb21wcmVzc2lvblJhdGlvID0gZW50cnkuZGVjb2RlZEJvZHlTaXplIC8gZW50cnkuZW5jb2RlZEJvZHlTaXplO1xuXG4gICAgLy8gUGFnZSBUaW1lXG4gICAgZW50cnkuZG9tQ29udGVudExvYWRlZCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tQ29udGVudExvYWRlZEV2ZW50U3RhcnRcbiAgICApO1xuICAgIGVudHJ5LnBhZ2VMb2FkID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubG9hZEV2ZW50RW5kLFxuICAgICAgZW50cnkuc3RhcnRUaW1lXG4gICAgKTtcbiAgICBlbnRyeS5zdGFydFJlbmRlciA9IG5ldyBEYXRlKGVudHJ5LnN0YXJ0VGltZSAqIDEwMDApLmdldFNlY29uZHMoKTtcbiAgICAvLyBlbnRyeS5maXJzdENQVUlkbGUgPSB0eXBlLmhhcmR3YXJlQ29uY3VycmVuY3k7XG4gICAgZG9tID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF07XG4gICAgdHlwZSA9IG5hdmlnYXRvcjtcbiAgICBlbnRyeS5icm93c2VyID0gYCR7d2luZG93Lm5hdmlnYXRvci5hcHBOYW1lfSR7d2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9ufWA7XG4gICAgZW50cnkudXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBlbnRyeS5vcyA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0T1MoKTtcbiAgICBlbnRyeS5kZXZpY2VUeXBlID0gVHJhY2tQZXJmb3JtYW5jZS5nZXREZXZpY2VUeXBlKCk7XG4gICAgZW50cnkuY29ubmVjdGlvblR5cGUgPSB0eXBlLmNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZTtcbiAgICAoZW50cnkucnVtVmVyc2lvbiA9IFwiMS4wLjBcIiksIChlbnRyeS5kb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgIGVudHJ5LnBhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBlbnRyeS51cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGVudHJ5LmJhY2tlbmQgPSBlbnRyeS50dGZiO1xuICAgIGVudHJ5LnJlZGlyZWN0ID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIGVudHJ5LnN0YXJ0VGltZSxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVkaXJlY3RTdGFydFxuICAgICk7XG4gICAgZW50cnkuZG5zTG9va1VwID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tYWluTG9va3VwRW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21haW5Mb29rdXBTdGFydFxuICAgICk7XG4gICAgLy8gVG90YWwgQ29ubmVjdGlvbiB0aW1lXG4gICAgZW50cnkudGNwQ29ubmVjdCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RTdGFydFxuICAgICk7XG4gICAgZW50cnkuc3NsTmVnb3RpYXRpb24gPSBlbnRyeS50bHNUaW1lO1xuICAgIGVudHJ5Lm5ldHdvcmsgPSBlbnRyeS50Y3BDb25uZWN0ICsgZW50cnkuc3NsTmVnb3RpYXRpb24gKyBlbnRyeS5kbnNMb29rVXA7XG4gICAgZW50cnkuZG9tRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuICAgIGVudHJ5LmRvbUludGVyYWN0aXZlID0gbmV3IERhdGUoZG9tLmRvbUludGVyYWN0aXZlICogMTAwMCkuZ2V0U2Vjb25kcygpO1xuICAgIGVudHJ5LmF2ZXJhZ2VET01EZXB0aCA9IFRyYWNrUGVyZm9ybWFuY2UuYXZnRE9NRGVwdGgoW10pO1xuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50ID1cbiAgICAgIFRyYWNrUGVyZm9ybWFuY2UuY2FwdHVyZU5ldHdvcmtSZXF1ZXN0KGNhcHR1cmVSZXF1ZXN0cyk7XG4gICAgZW50cnkuaW1hZ2VSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfaW1nX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5LmNzc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9jc3NfcmVxdWVzdC5sZW5ndGg7XG4gICAgZW50cnkuanNSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfanNfcmVxdWVzdC5sZW5ndGg7XG4gICAgZW50cnkuaW1hZ2VBVEZSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfaW1nYXRmX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5Lmh0bWxTaXplID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwubGVuZ3RoIC8gMTAyNCkudG9GaXhlZChcbiAgICAgIDBcbiAgICApO1xuICAgIGVudHJ5LmlubGluZUpTU2l6ZSA9IFRyYWNrUGVyZm9ybWFuY2UuSlNTaXplKCk7XG4gICAgZW50cnkuaW5saW5lU3R5bGVTaXplID0gVHJhY2tQZXJmb3JtYW5jZS5pbmxpbmVTdHlsZVNpemUoW10pO1xuICAgIGVudHJ5LnByb2plY3QgPSBcIlBBQ0VcIjtcbiAgICByZXR1cm4gZW50cnk7XG4gIH1cblxuICBzdGF0aWMgY2h1bmsoYXJyYXk6IGFueVtdLCBzaXplOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChyZXMsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXggJSBzaXplID09PSAwKSB7XG4gICAgICAgIHJlcy5wdXNoKFtdKTtcbiAgICAgIH1cbiAgICAgIHJlc1tyZXMubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSwgW10pO1xuICB9XG4gIHF1ZXVlZEVudHJpZXM6IGFueVtdO1xuICBsb2NhdGlvbkluZm86IGFueTtcbiAgYmxvY2tpbmdKU1JlcXVlc3RzOiBhbnk7XG4gIGJsb2NraW5nQ1NTUmVxdWVzdHM6IGFueTtcbiAgb3B0aW9uczogSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zO1xuICBpbnRlcnZhbElkOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0cmFja1VybCA9IFwiaHR0cDovLzU0LjE1MS4xMjAuMjUwOjMwMDEvcnV4L3dyaXRlUGVyZm9tYW5jZU1ldHJpY3NcIixcbiAgICB0aHJlc2hvbGQgPSAwLFxuICAgIGJhdGNoU2l6ZSA9IDUwLFxuICAgIGV4Y2x1ZGVLZXlzID0gW1wibmV4dEhvcFByb3RvY29sXCIsIFwiaW5pdGlhdG9yVHlwZVwiXSxcbiAgICBpbmNsdWRlSG9zdHMgPSBbXSxcbiAgICBhcHBsaWNhdGlvbklkLFxuICB9OiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMpIHtcbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcbiAgICB0aGlzLmxvY2F0aW9uSW5mbyA9IHt9O1xuICAgIHRoaXMuYmxvY2tpbmdKU1JlcXVlc3RzID0gW107XG4gICAgdGhpcy5ibG9ja2luZ0NTU1JlcXVlc3RzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdHJhY2tVcmwsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBiYXRjaFNpemUsXG4gICAgICBleGNsdWRlS2V5cyxcbiAgICAgIGluY2x1ZGVIb3N0cyxcbiAgICAgIGFwcGxpY2F0aW9uSWQsXG4gICAgfTtcblxuICAgIGlmIChcInBlcmZvcm1hbmNlXCIgaW4gd2luZG93KSB7XG4gICAgICBpZiAoXCJQZXJmb3JtYW5jZU9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgICAgIGNvbnN0IHBlcmZPYnNlcnZlciA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChsaXN0LCBvYmopID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMobGlzdC5nZXRFbnRyaWVzKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwZXJmT2JzZXJ2ZXIub2JzZXJ2ZSh7XG4gICAgICAgICAgZW50cnlUeXBlczogW1wicmVzb3VyY2VcIl0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG8tRG9cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLmluYWN0aXZpdHlUaW1lKDAsIHRoaXMpO1xuICAgICAgICB0aGlzLmxvY2F0aW9uSW5mbyA9IGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5ibG9ja2VkSlNSZXF1ZXN0KFtdLCB0aGlzKTtcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5ibG9ja2VkQ1NTUmVxdWVzdChbXSwgdGhpcyk7XG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0Zmlyc3RDb250ZW50RnVsbFBhaW50KHRoaXMpO1xuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGxhcmdlc3RDb250ZW50RnVsbFBhaW50KHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUVudHJpZXMocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIikpO1xuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLmludGVyYWN0aW9uTWV0cml4KHRoaXMpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1cCBzZXRJbnRlcnZhbCB0byBwdXNoIHRyYWNrIGRhdGFcIik7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIodGhpcyk7XG4gICAgICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xuICAgICAgfVxuICAgIH0sIHRocmVzaG9sZCk7XG4gIH1cblxuICBoYW5kbGVFbnRyaWVzKGVudHJpZXM6IGFueVtdKSB7XG4gICAgY29uc3QgeyB0cmFja1VybCwgZXhjbHVkZUtleXMsIGFwcGxpY2F0aW9uSWQgfSA9IHRoaXMub3B0aW9ucztcbiAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiBlbnRyeS50b0pTT04oKSk7XG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKFRyYWNrUGVyZm9ybWFuY2UuY29tcHV0ZU1ldHJpY3MpO1xuICAgIGlmIChleGNsdWRlS2V5cy5sZW5ndGgpIHtcbiAgICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudHJ5KS5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoZXhjbHVkZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBlbnRyeVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gdGhpcy5xdWV1ZWRFbnRyaWVzLmNvbmNhdChlbnRyaWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBzZW5kVG9TZXJ2ZXIoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgY29uc3QgeyBiYXRjaFNpemUgPSA1MCwgdHJhY2tVcmwsIGFwcGxpY2F0aW9uSWQgfSA9IHNjb3BlLm9wdGlvbnM7XG4gICAgY29uc3QgZW50cnlDaHVua3MgPSBUcmFja1BlcmZvcm1hbmNlLmNodW5rKHNjb3BlLnF1ZXVlZEVudHJpZXMsIGJhdGNoU2l6ZSk7XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgbWFpbkVudHJ5Q2h1bmsgPSBlbnRyeUNodW5rc1xuICAgICAgLmZsYXQoKVxuICAgICAgLmZpbmQoKHsgbmFtZSB9OiBhbnkpID0+IG5hbWUgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIG1haW5FbnRyeUNodW5rID0gbWFpbkVudHJ5Q2h1bmsgPyBtYWluRW50cnlDaHVuayA6IGVudHJ5Q2h1bmtzWzBdWzBdO1xuICAgIG1haW5FbnRyeUNodW5rLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xuICAgIGlmIChzY29wZS5sb2NhdGlvbkluZm8pIHtcbiAgICAgIG1haW5FbnRyeUNodW5rLmNpdHkgPSBzY29wZS5sb2NhdGlvbkluZm8uY2l0eTtcbiAgICAgIG1haW5FbnRyeUNodW5rLmNvdW50cnkgPSBzY29wZS5sb2NhdGlvbkluZm8uY291bnRyeTtcbiAgICB9XG4gICAgbWFpbkVudHJ5Q2h1bmsuYmxvY2tpbmdKU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLmxlbmd0aDtcbiAgICBtYWluRW50cnlDaHVuay5ibG9ja2luZ0NTU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cy5sZW5ndGg7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UaW1lID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblRpbWU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UeXBlID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25FbGVtZW50ID1cbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25FbGVtZW50O1xuICAgIG1haW5FbnRyeUNodW5rLmZpcnN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmZpcnN0Q29udGVudEZ1bGxQYWludDtcbiAgICBtYWluRW50cnlDaHVuay5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50O1xuICAgIG1haW5FbnRyeUNodW5rLnBhZ2VUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIG1haW5FbnRyeUNodW5rLmZsYWdzID0gZG9jdW1lbnQudGl0bGU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuZmlyc3RDUFVJZGxlID0gc2NvcGUuZmlyc3RDUFVJZGxlO1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2godHJhY2tVcmwsIHtcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtYWluRW50cnlDaHVuayksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IDA7XG4gIH1cblxuICAvLyBHZXQgZGV2aWNlIHR5cGVcbiAgc3RhdGljIGdldERldmljZVR5cGUoKTogYW55IHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmkpKS9pLnRlc3QodWEpKSB7XG4gICAgICByZXR1cm4gXCJ0YWJsZXRcIjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcbiAgICAgICAgdWFcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBcIm1vYmlsZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJkZXNrdG9wXCI7XG4gIH1cblxuICAvLyBHZXQgT1NcbiAgc3RhdGljIGdldE9TKCk6IGFueSB7XG4gICAgdmFyIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLFxuICAgICAgbWFjb3NQbGF0Zm9ybXMgPSBbXCJNYWNpbnRvc2hcIiwgXCJNYWNJbnRlbFwiLCBcIk1hY1BQQ1wiLCBcIk1hYzY4S1wiXSxcbiAgICAgIHdpbmRvd3NQbGF0Zm9ybXMgPSBbXCJXaW4zMlwiLCBcIldpbjY0XCIsIFwiV2luZG93c1wiLCBcIldpbkNFXCJdLFxuICAgICAgaW9zUGxhdGZvcm1zID0gW1wiaVBob25lXCIsIFwiaVBhZFwiLCBcImlQb2RcIl0sXG4gICAgICBvcyA9IG51bGw7XG5cbiAgICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiTWFjIE9TXCI7XG4gICAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiaU9TXCI7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dzUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcIldpbmRvd3NcIjtcbiAgICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgfSBlbHNlIGlmICghb3MgJiYgL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgb3MgPSBcIkxpbnV4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9zO1xuICB9XG4gIHN0YXRpYyBjYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55W10pOiBhbnkge1xuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcbiAgICB2YXIgY2FwdHVyZV9jc3NfcmVxdWVzdCA9IFtdO1xuICAgIHZhciBjYXB0dXJlX2ltZ19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUuc3BsaXQoL1sjP10vKVswXS5zcGxpdChcIi5cIikucG9wKCkudHJpbSgpID09XG4gICAgICAgICAgXCJhdGZcIlxuICAgICAgICApXG4gICAgICAgICAgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjYXB0dXJlX2pzX3JlcXVlc3QsXG4gICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LFxuICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdCxcbiAgICAgIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhdmdET01EZXB0aCh0cmFja2VyOiBhbnkpOiBhbnkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHByZXZOb2RlID0gMDtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKChub2RlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdHJhY2tlcltub2RlLnRhZ05hbWVdKSB0cmFja2VyW25vZGUudGFnTmFtZV0gPSAxO1xuICAgICAgZWxzZSB0cmFja2VyW25vZGUudGFnTmFtZV0rKztcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT0gcHJldk5vZGUpIGRlcHRoKys7XG4gICAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlcHRoIC8gMjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xuICAgIGNvbnN0IGZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxuICAgICk7XG4gICAgc2NvcGUuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gZmlyc3RDb250ZW50RnVsbFBhaW50XG4gICAgICA/IG5ldyBEYXRlKGZpcnN0Q29udGVudEZ1bGxQYWludC5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRsYXJnZXN0Q29udGVudEZ1bGxQYWludChzY29wZTogYW55KTogYW55IHtcbiAgICBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZW50cnlMaXN0KSA9PiB7XG4gICAgICB2YXIgbGNwID0gZW50cnlMaXN0LmdldEVudHJpZXMoKTtcbiAgICAgIGlmIChsY3AubGVuZ3RoKSB7XG4gICAgICAgIHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gbGNwW2xjcC5sZW5ndGggLSAxXVxuICAgICAgICAgID8gbmV3IERhdGUobGNwW2xjcC5sZW5ndGggLSAxXS5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgICAgICA6IDA7XG4gICAgICB9XG4gICAgfSkub2JzZXJ2ZSh7IHR5cGU6IFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIGJ1ZmZlcmVkOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldExvY2F0aW9uKCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJhY3Rpb25NZXRyaXgoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgbGV0IGV2ZW50cyA9IFtcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICBcImtleXByZXNzXCIsXG4gICAgICBcIktleWRvd25cIixcbiAgICAgIC8vIFwibW91c2VvdmVyXCIsXG4gICAgICAvLyBcIm1vdXNlb3V0XCIsXG4gICAgICAvLyBcIm1vdXNlZG93blwiLFxuICAgICAgLy8gXCJtb3VzZXVwXCIsXG4gICAgICBcImNoYW5nZVwiLFxuICAgICAgXCJibHVyXCIsXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgXCJ1bmxvYWRcIixcbiAgICAgIFwicmVzaXplXCIsXG4gICAgXTtcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xuICAgIGNvbnN0IGZvY3VzID0gZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBjb25zdCBpbnRlcmFjdGlvblRpbWUgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBzcGVudFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICBlbGFwc2VkVGltZSArPSBzcGVudFRpbWU7XG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uVGltZSA9IGVsYXBzZWRUaW1lO1xuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGUgPSBldmVudC50eXBlO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJjbGlja1wiKSB7XG4gICAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0ucGFnZVVSTCA9XG4gICAgICAgICAgZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS51cmxQYXRoID1cbiAgICAgICAgICBldmVudC50YXJnZXQub3duZXJEb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgIH1cbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25FbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZTtcbiAgICAgIFRyYWNrUGVyZm9ybWFuY2Uuc2VuZFRvU2VydmVyKHNjb3BlKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzKTtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnRUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGludGVyYWN0aW9uVGltZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgSlNTaXplKCk6IGFueSB7XG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXNjcmlwdHNbaV0uc3JjKSBjb250ZW50ICs9IHNjcmlwdHNbaV0uaW5uZXJIVE1MO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdKS5zaXplO1xuICB9XG5cbiAgc3RhdGljIHRpbWVzdGFtcFRvU2VjKHN0YXJ0OiBhbnksIGVuZDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbmV3IERhdGUoKHN0YXJ0IC0gZW5kKSAqIDEwMDApLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbmxpbmVTdHlsZVNpemUoaW5saW5lU3R5bGVTaXplOiBhbnkpOiBhbnkge1xuICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICB2YXIgc3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltzdHlsZV1cIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlubGluZVN0eWxlU2l6ZSA9IHN0eWxlc1tpXS5hdHRyaWJ1dGVzO1xuICAgICAgaWYgKGlubGluZVN0eWxlU2l6ZS5zdHlsZSkgY29udGVudCArPSBpbmxpbmVTdHlsZVNpemUuc3R5bGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbY29udGVudF0pLnNpemU7XG4gIH1cblxuICBzdGF0aWMgYmxvY2tlZEpTUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnksIHNjb3BlOiBhbnkpOiBhbnkge1xuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcbiAgICBzY29wZS5ibG9ja2luZ0pTUmVxdWVzdHMgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKVxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xuICAgIH1cbiAgICAvLyBtYXAgZXZlcnkgdXJsIHRvIHRoZSBwcm9taXNlIG9mIHRoZSBmZXRjaFxuICAgIGxldCByZXF1ZXN0cyA9IGNhcHR1cmVfanNfcmVxdWVzdC5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgKFByb21pc2UgYXMgYW55KS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnksIG51bTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgIHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cy5wdXNoKHJlcXVlc3RzW251bV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBibG9ja2VkQ1NTUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnksIHNjb3BlOiBhbnkpOiBhbnkge1xuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcbiAgICBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzID0gW107XG4gICAgY2FwdHVyZV9yZXNvdXJjZSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcHR1cmVfcmVzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJjc3NcIilcbiAgICAgICAgY2FwdHVyZV9qc19yZXF1ZXN0LnB1c2goY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lKTtcbiAgICB9XG4gICAgLy8gbWFwIGV2ZXJ5IHVybCB0byB0aGUgcHJvbWlzZSBvZiB0aGUgZmV0Y2hcbiAgICBsZXQgcmVxdWVzdHMgPSBjYXB0dXJlX2pzX3JlcXVlc3QubWFwKCh1cmwpID0+IGZldGNoKHVybCkpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIChQcm9taXNlIGFzIGFueSkuYWxsU2V0dGxlZChyZXF1ZXN0cykudGhlbigocmVzdWx0czogYW55KSA9PiB7XG4gICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdDogYW55LCBudW06IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInJlamVjdGVkXCIpIHtcbiAgICAgICAgICBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzLnB1c2gocmVxdWVzdHNbbnVtXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluYWN0aXZpdHlUaW1lKHRpbWU6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XG4gICAgd2luZG93Lm9ubG9hZCA9IHJlc2V0VGltZXI7XG4gICAgLy8gRE9NIEV2ZW50c1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gcmVzZXRUaW1lcjtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSByZXNldFRpbWVyO1xuXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lKTtcbiAgICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHt9LCAzMDAwKTtcbiAgICAgIHNjb3BlLmZpcnN0Q1BVSWRsZSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKCk7XG4gICAgICAvLyAxMDAwIG1pbGxpc2Vjb25kcyA9IDEgc2Vjb25kXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHJlc2V0VGltZXIsIHRydWUpO1xuICAgIHZhciBldmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZW1vdmVcIiwgXCJrZXlwcmVzc1wiLCBcInNjcm9sbFwiLCBcInRvdWNoc3RhcnRcIl07XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgcmVzZXRUaW1lciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGEgZ2xvYmFsIHZhcmlhYmxlIHRvIGFjY2VzcyBsYXRlclxuKHdpbmRvdyBhcyBhbnkpLlRyYWNrUGVyZm9ybWFuY2UgPSBUcmFja1BlcmZvcm1hbmNlO1xuZXhwb3J0IGRlZmF1bHQgVHJhY2tQZXJmb3JtYW5jZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=