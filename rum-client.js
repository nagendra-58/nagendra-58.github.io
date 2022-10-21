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
            console.log("entryChunks------>", entryChunks);
            var promise = Promise.resolve();
            var mainEntryChunk = entryChunks
                .flat()
                .find(function (_a) {
                var name = _a.name;
                return name == window.location.href;
            });
            // entryChunks.forEach((entryChunk: any, index: number) => {
            // var mainEntryChunk = entryChunk.filter((entryInfo: any) => {
            //   return entryInfo.name == window.location.href;
            // })[0];
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
            // });
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtJQWtJRSwwQkFBWSxFQU9lO1FBUDNCLGlCQXNEQztZQXJEQyxnQkFBa0UsRUFBbEUsdUZBQWtFLEVBQ2xFLGlCQUFhLEVBQWIsa0NBQWEsRUFDYixpQkFBYyxFQUFkLG1DQUFjLEVBQ2QsbUJBQWtELEVBQWxELHVFQUFrRCxFQUNsRCxvQkFBaUIsRUFBakIsc0NBQWlCLEVBQ2pCLGdDQUFhO1FBRWIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixH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QztZQUNuQixJQUFJLEdBQUcsVUFBVSxDQUFDLGNBQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3hELCtCQUErQjtRQUNqQyxDQUFDO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDNUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7WUFDM0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDO0FBRUQsMkNBQTJDO0FBQzFDLE1BQWMsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxrQkFBZSxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJydW0tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucyB7XG4gIHRyYWNrVXJsOiBzdHJpbmc7XG4gIHRocmVzaG9sZD86IG51bWJlcjtcbiAgYmF0Y2hTaXplPzogbnVtYmVyO1xuICBleGNsdWRlS2V5czogc3RyaW5nW107XG4gIGluY2x1ZGVIb3N0czogc3RyaW5nW107XG4gIGFwcGxpY2F0aW9uSWQ6IHN0cmluZztcbn1cblxuY2xhc3MgVHJhY2tQZXJmb3JtYW5jZSB7XG4gIHN0YXRpYyBjb21wdXRlTWV0cmljcyhcbiAgICBlbnRyeTogYW55LFxuICAgIHR5cGU6IGFueSxcbiAgICBkb206IGFueSxcbiAgICBjYXB0dXJlUmVxdWVzdHNDb3VudDogYW55ID0gW10sXG4gICAgY2FwdHVyZVJlcXVlc3RzOiBhbnkgPSBbXVxuICApIHtcbiAgICAvLyBUTFMgdGltZVxuICAgIC8vIGlmIChlbnRyeS5zZWN1cmVDb25uZWN0aW9uU3RhcnQgPiAwKSB7XG4gICAgZW50cnkudGxzVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlcXVlc3RTdGFydCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuc2VjdXJlQ29ubmVjdGlvblN0YXJ0XG4gICAgKTtcbiAgICAvLyB9XG5cbiAgICAvLyBUaW1lIHRvIEZpcnN0IEJ5dGUgKFRURkIpXG4gICAgZW50cnkudHRmYiA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlU3RhcnQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxuICAgICk7XG5cbiAgICAvKlxuICAgICAgVGhlIGZldGNoU3RhcnQgcmVhZC1vbmx5IHByb3BlcnR5IHJlcHJlc2VudHMgYSB0aW1lc3RhbXAgaW1tZWRpYXRlbHlcbiAgICAgIGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgdG8gZmV0Y2ggdGhlIHJlc291cmNlLlxuICAgICovXG4gICAgZW50cnkuZmV0Y2hUaW1lID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmZldGNoU3RhcnRcbiAgICApO1xuICAgIGlmIChlbnRyeS53b3JrZXJTdGFydCA+IDApIHtcbiAgICAgIGVudHJ5LndvcmtlclRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kLFxuICAgICAgICBlbnRyeS53b3JrZXJTdGFydFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgVGhlIHJlcXVlc3RTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmV0dXJucyBhIHRpbWVzdGFtcCBvZiB0aGUgdGltZVxuICAgICAgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZSBmcm9tIHRoZVxuICAgICAgc2VydmVyLCBjYWNoZSwgb3IgbG9jYWwgcmVzb3VyY2VcbiAgICAgIFJlcXVlc3QgcGx1cyByZXNwb25zZSB0aW1lIChuZXR3b3JrIG9ubHkpXG4gICAgKi9cbiAgICBlbnRyeS50b3RhbFRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVxdWVzdFN0YXJ0XG4gICAgKTtcblxuICAgIC8vIFJlc3BvbnNlIHRpbWUgb25seSAoZG93bmxvYWQpXG4gICAgZW50cnkuZG93bmxvYWRUaW1lID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlU3RhcnRcbiAgICApO1xuXG4gICAgLy8gSFRUUCBoZWFkZXIgc2l6ZVxuICAgIGVudHJ5LmhlYWRlclNpemUgPSBlbnRyeS50cmFuc2ZlclNpemUgLSBlbnRyeS5lbmNvZGVkQm9keVNpemU7XG5cbiAgICAvLyBDb21wcmVzc2lvbiByYXRpb1xuICAgIGVudHJ5LmNvbXByZXNzaW9uUmF0aW8gPSBlbnRyeS5kZWNvZGVkQm9keVNpemUgLyBlbnRyeS5lbmNvZGVkQm9keVNpemU7XG5cbiAgICAvLyBQYWdlIFRpbWVcbiAgICBlbnRyeS5kb21Db250ZW50TG9hZGVkID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tQ29udGVudExvYWRlZEV2ZW50RW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21Db250ZW50TG9hZGVkRXZlbnRTdGFydFxuICAgICk7XG4gICAgZW50cnkucGFnZUxvYWQgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5sb2FkRXZlbnRFbmQsXG4gICAgICBlbnRyeS5zdGFydFRpbWVcbiAgICApO1xuICAgIGVudHJ5LnN0YXJ0UmVuZGVyID0gbmV3IERhdGUoZW50cnkuc3RhcnRUaW1lICogMTAwMCkuZ2V0U2Vjb25kcygpO1xuICAgIC8vIGVudHJ5LmZpcnN0Q1BVSWRsZSA9IHR5cGUuaGFyZHdhcmVDb25jdXJyZW5jeTtcbiAgICBkb20gPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXTtcbiAgICB0eXBlID0gbmF2aWdhdG9yO1xuICAgIGVudHJ5LmJyb3dzZXIgPSBgJHt3aW5kb3cubmF2aWdhdG9yLmFwcE5hbWV9JHt3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb259YDtcbiAgICBlbnRyeS51c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGVudHJ5Lm9zID0gVHJhY2tQZXJmb3JtYW5jZS5nZXRPUygpO1xuICAgIGVudHJ5LmRldmljZVR5cGUgPSBUcmFja1BlcmZvcm1hbmNlLmdldERldmljZVR5cGUoKTtcbiAgICBlbnRyeS5jb25uZWN0aW9uVHlwZSA9IHR5cGUuY29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlO1xuICAgIChlbnRyeS5ydW1WZXJzaW9uID0gXCIxLjAuMFwiKSwgKGVudHJ5LmRvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgZW50cnkucGFnZVVSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGVudHJ5LnVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgZW50cnkuYmFja2VuZCA9IGVudHJ5LnR0ZmI7XG4gICAgZW50cnkucmVkaXJlY3QgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgZW50cnkuc3RhcnRUaW1lLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZWRpcmVjdFN0YXJ0XG4gICAgKTtcbiAgICBlbnRyeS5kbnNMb29rVXAgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21haW5Mb29rdXBFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbWFpbkxvb2t1cFN0YXJ0XG4gICAgKTtcbiAgICAvLyBUb3RhbCBDb25uZWN0aW9uIHRpbWVcbiAgICBlbnRyeS50Y3BDb25uZWN0ID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuY29ubmVjdEVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuY29ubmVjdFN0YXJ0XG4gICAgKTtcbiAgICBlbnRyeS5zc2xOZWdvdGlhdGlvbiA9IGVudHJ5LnRsc1RpbWU7XG4gICAgZW50cnkubmV0d29yayA9IGVudHJ5LnRjcENvbm5lY3QgKyBlbnRyeS5zc2xOZWdvdGlhdGlvbiArIGVudHJ5LmRuc0xvb2tVcDtcbiAgICBlbnRyeS5kb21FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG4gICAgZW50cnkuZG9tSW50ZXJhY3RpdmUgPSBuZXcgRGF0ZShkb20uZG9tSW50ZXJhY3RpdmUgKiAxMDAwKS5nZXRTZWNvbmRzKCk7XG4gICAgZW50cnkuYXZlcmFnZURPTURlcHRoID0gVHJhY2tQZXJmb3JtYW5jZS5hdmdET01EZXB0aChbXSk7XG4gICAgY2FwdHVyZVJlcXVlc3RzQ291bnQgPVxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5jYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZVJlcXVlc3RzKTtcbiAgICBlbnRyeS5pbWFnZVJlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9pbWdfcmVxdWVzdC5sZW5ndGg7XG4gICAgZW50cnkuY3NzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2Nzc19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5qc1JlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9qc19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5pbWFnZUFURlJlcXVlc3RzID0gY2FwdHVyZVJlcXVlc3RzQ291bnQuY2FwdHVyZV9pbWdhdGZfcmVxdWVzdC5sZW5ndGg7XG4gICAgZW50cnkuaHRtbFNpemUgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTC5sZW5ndGggLyAxMDI0KS50b0ZpeGVkKFxuICAgICAgMFxuICAgICk7XG4gICAgZW50cnkuaW5saW5lSlNTaXplID0gVHJhY2tQZXJmb3JtYW5jZS5KU1NpemUoKTtcbiAgICBlbnRyeS5pbmxpbmVTdHlsZVNpemUgPSBUcmFja1BlcmZvcm1hbmNlLmlubGluZVN0eWxlU2l6ZShbXSk7XG4gICAgZW50cnkucHJvamVjdCA9IFwiUEFDRVwiO1xuICAgIHJldHVybiBlbnRyeTtcbiAgfVxuXG4gIHN0YXRpYyBjaHVuayhhcnJheTogYW55W10sIHNpemU6IG51bWJlcikge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHJlcywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCAlIHNpemUgPT09IDApIHtcbiAgICAgICAgcmVzLnB1c2goW10pO1xuICAgICAgfVxuICAgICAgcmVzW3Jlcy5sZW5ndGggLSAxXS5wdXNoKGl0ZW0pO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCBbXSk7XG4gIH1cbiAgcXVldWVkRW50cmllczogYW55W107XG4gIGxvY2F0aW9uSW5mbzogYW55O1xuICBibG9ja2luZ0pTUmVxdWVzdHM6IGFueTtcbiAgYmxvY2tpbmdDU1NSZXF1ZXN0czogYW55O1xuICBvcHRpb25zOiBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnM7XG4gIGludGVydmFsSWQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3Ioe1xuICAgIHRyYWNrVXJsID0gXCJodHRwOi8vNTQuMTUxLjEyMC4yNTA6MzAwMS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiLFxuICAgIHRocmVzaG9sZCA9IDAsXG4gICAgYmF0Y2hTaXplID0gNTAsXG4gICAgZXhjbHVkZUtleXMgPSBbXCJuZXh0SG9wUHJvdG9jb2xcIiwgXCJpbml0aWF0b3JUeXBlXCJdLFxuICAgIGluY2x1ZGVIb3N0cyA9IFtdLFxuICAgIGFwcGxpY2F0aW9uSWQsXG4gIH06IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucykge1xuICAgIHRoaXMucXVldWVkRW50cmllcyA9IFtdO1xuICAgIHRoaXMubG9jYXRpb25JbmZvID0ge307XG4gICAgdGhpcy5ibG9ja2luZ0pTUmVxdWVzdHMgPSBbXTtcbiAgICB0aGlzLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0cmFja1VybCxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGJhdGNoU2l6ZSxcbiAgICAgIGV4Y2x1ZGVLZXlzLFxuICAgICAgaW5jbHVkZUhvc3RzLFxuICAgICAgYXBwbGljYXRpb25JZCxcbiAgICB9O1xuXG4gICAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cpIHtcbiAgICAgIGlmIChcIlBlcmZvcm1hbmNlT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgcGVyZk9ic2VydmVyID0gbmV3IFBlcmZvcm1hbmNlT2JzZXJ2ZXIoKGxpc3QsIG9iaikgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhsaXN0LmdldEVudHJpZXMoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBlcmZPYnNlcnZlci5vYnNlcnZlKHtcbiAgICAgICAgICBlbnRyeVR5cGVzOiBbXCJyZXNvdXJjZVwiXSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUby1Eb1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2UuaW5hY3Rpdml0eVRpbWUoMCwgdGhpcyk7XG4gICAgICAgIHRoaXMubG9jYXRpb25JbmZvID0gYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5nZXRMb2NhdGlvbigpO1xuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmJsb2NrZWRKU1JlcXVlc3QoW10sIHRoaXMpO1xuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmJsb2NrZWRDU1NSZXF1ZXN0KFtdLCB0aGlzKTtcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5nZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQodGhpcyk7XG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0bGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKSk7XG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2UuaW50ZXJhY3Rpb25NZXRyaXgodGhpcyk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJTZXR0aW5nIHVwIHNldEludGVydmFsIHRvIHB1c2ggdHJhY2sgZGF0YVwiKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLnNlbmRUb1NlcnZlcih0aGlzKTtcbiAgICAgICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XG4gICAgICB9XG4gICAgfSwgdGhyZXNob2xkKTtcbiAgfVxuXG4gIGhhbmRsZUVudHJpZXMoZW50cmllczogYW55W10pIHtcbiAgICBjb25zdCB7IHRyYWNrVXJsLCBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IGVudHJ5LnRvSlNPTigpKTtcbiAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoVHJhY2tQZXJmb3JtYW5jZS5jb21wdXRlTWV0cmljcyk7XG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xuICAgICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZW50cnkpLnJlZHVjZSgoYWNjOiBhbnksIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IGVudHJ5W2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSB0aGlzLnF1ZXVlZEVudHJpZXMuY29uY2F0KGVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHNlbmRUb1NlcnZlcihzY29wZTogYW55KTogYW55IHtcbiAgICBjb25zdCB7IGJhdGNoU2l6ZSA9IDUwLCB0cmFja1VybCwgYXBwbGljYXRpb25JZCB9ID0gc2NvcGUub3B0aW9ucztcbiAgICBjb25zdCBlbnRyeUNodW5rcyA9IFRyYWNrUGVyZm9ybWFuY2UuY2h1bmsoc2NvcGUucXVldWVkRW50cmllcywgYmF0Y2hTaXplKTtcbiAgICBjb25zb2xlLmxvZyhcImVudHJ5Q2h1bmtzLS0tLS0tPlwiLCBlbnRyeUNodW5rcyk7XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB2YXIgbWFpbkVudHJ5Q2h1bmsgPSBlbnRyeUNodW5rc1xuICAgICAgLmZsYXQoKVxuICAgICAgLmZpbmQoKHsgbmFtZSB9OiBhbnkpID0+IG5hbWUgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIC8vIGVudHJ5Q2h1bmtzLmZvckVhY2goKGVudHJ5Q2h1bms6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIC8vIHZhciBtYWluRW50cnlDaHVuayA9IGVudHJ5Q2h1bmsuZmlsdGVyKChlbnRyeUluZm86IGFueSkgPT4ge1xuICAgIC8vICAgcmV0dXJuIGVudHJ5SW5mby5uYW1lID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIC8vIH0pWzBdO1xuICAgIG1haW5FbnRyeUNodW5rID0gbWFpbkVudHJ5Q2h1bmsgPyBtYWluRW50cnlDaHVuayA6IGVudHJ5Q2h1bmtzWzBdWzBdO1xuICAgIG1haW5FbnRyeUNodW5rLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xuICAgIGlmIChzY29wZS5sb2NhdGlvbkluZm8pIHtcbiAgICAgIG1haW5FbnRyeUNodW5rLmNpdHkgPSBzY29wZS5sb2NhdGlvbkluZm8uY2l0eTtcbiAgICAgIG1haW5FbnRyeUNodW5rLmNvdW50cnkgPSBzY29wZS5sb2NhdGlvbkluZm8uY291bnRyeTtcbiAgICB9XG4gICAgbWFpbkVudHJ5Q2h1bmsuYmxvY2tpbmdKU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLmxlbmd0aDtcbiAgICBtYWluRW50cnlDaHVuay5ibG9ja2luZ0NTU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cy5sZW5ndGg7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UaW1lID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblRpbWU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UeXBlID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25FbGVtZW50ID1cbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25FbGVtZW50O1xuICAgIG1haW5FbnRyeUNodW5rLmZpcnN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmZpcnN0Q29udGVudEZ1bGxQYWludDtcbiAgICBtYWluRW50cnlDaHVuay5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50O1xuICAgIG1haW5FbnRyeUNodW5rLnBhZ2VUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuICAgIG1haW5FbnRyeUNodW5rLmZsYWdzID0gZG9jdW1lbnQudGl0bGU7XG4gICAgbWFpbkVudHJ5Q2h1bmsuZmlyc3RDUFVJZGxlID0gc2NvcGUuZmlyc3RDUFVJZGxlO1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZmV0Y2godHJhY2tVcmwsIHtcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtYWluRW50cnlDaHVuayksXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IDA7XG4gIH1cblxuICAvLyBHZXQgZGV2aWNlIHR5cGVcbiAgc3RhdGljIGdldERldmljZVR5cGUoKTogYW55IHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmkpKS9pLnRlc3QodWEpKSB7XG4gICAgICByZXR1cm4gXCJ0YWJsZXRcIjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcbiAgICAgICAgdWFcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBcIm1vYmlsZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJkZXNrdG9wXCI7XG4gIH1cblxuICAvLyBHZXQgT1NcbiAgc3RhdGljIGdldE9TKCk6IGFueSB7XG4gICAgdmFyIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLFxuICAgICAgbWFjb3NQbGF0Zm9ybXMgPSBbXCJNYWNpbnRvc2hcIiwgXCJNYWNJbnRlbFwiLCBcIk1hY1BQQ1wiLCBcIk1hYzY4S1wiXSxcbiAgICAgIHdpbmRvd3NQbGF0Zm9ybXMgPSBbXCJXaW4zMlwiLCBcIldpbjY0XCIsIFwiV2luZG93c1wiLCBcIldpbkNFXCJdLFxuICAgICAgaW9zUGxhdGZvcm1zID0gW1wiaVBob25lXCIsIFwiaVBhZFwiLCBcImlQb2RcIl0sXG4gICAgICBvcyA9IG51bGw7XG5cbiAgICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiTWFjIE9TXCI7XG4gICAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiaU9TXCI7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dzUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcIldpbmRvd3NcIjtcbiAgICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgfSBlbHNlIGlmICghb3MgJiYgL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgb3MgPSBcIkxpbnV4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9zO1xuICB9XG4gIHN0YXRpYyBjYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55W10pOiBhbnkge1xuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcbiAgICB2YXIgY2FwdHVyZV9jc3NfcmVxdWVzdCA9IFtdO1xuICAgIHZhciBjYXB0dXJlX2ltZ19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUuc3BsaXQoL1sjP10vKVswXS5zcGxpdChcIi5cIikucG9wKCkudHJpbSgpID09XG4gICAgICAgICAgXCJhdGZcIlxuICAgICAgICApXG4gICAgICAgICAgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjYXB0dXJlX2pzX3JlcXVlc3QsXG4gICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LFxuICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdCxcbiAgICAgIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhdmdET01EZXB0aCh0cmFja2VyOiBhbnkpOiBhbnkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHByZXZOb2RlID0gMDtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKChub2RlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdHJhY2tlcltub2RlLnRhZ05hbWVdKSB0cmFja2VyW25vZGUudGFnTmFtZV0gPSAxO1xuICAgICAgZWxzZSB0cmFja2VyW25vZGUudGFnTmFtZV0rKztcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT0gcHJldk5vZGUpIGRlcHRoKys7XG4gICAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlcHRoIC8gMjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xuICAgIGNvbnN0IGZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxuICAgICk7XG4gICAgc2NvcGUuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gZmlyc3RDb250ZW50RnVsbFBhaW50XG4gICAgICA/IG5ldyBEYXRlKGZpcnN0Q29udGVudEZ1bGxQYWludC5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRsYXJnZXN0Q29udGVudEZ1bGxQYWludChzY29wZTogYW55KTogYW55IHtcbiAgICBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZW50cnlMaXN0KSA9PiB7XG4gICAgICB2YXIgbGNwID0gZW50cnlMaXN0LmdldEVudHJpZXMoKTtcbiAgICAgIGlmIChsY3AubGVuZ3RoKSB7XG4gICAgICAgIHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gbGNwW2xjcC5sZW5ndGggLSAxXVxuICAgICAgICAgID8gbmV3IERhdGUobGNwW2xjcC5sZW5ndGggLSAxXS5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgICAgICA6IDA7XG4gICAgICB9XG4gICAgfSkub2JzZXJ2ZSh7IHR5cGU6IFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIGJ1ZmZlcmVkOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldExvY2F0aW9uKCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJhY3Rpb25NZXRyaXgoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgbGV0IGV2ZW50cyA9IFtcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICBcImtleXByZXNzXCIsXG4gICAgICBcIktleWRvd25cIixcbiAgICAgIC8vIFwibW91c2VvdmVyXCIsXG4gICAgICAvLyBcIm1vdXNlb3V0XCIsXG4gICAgICAvLyBcIm1vdXNlZG93blwiLFxuICAgICAgLy8gXCJtb3VzZXVwXCIsXG4gICAgICBcImNoYW5nZVwiLFxuICAgICAgXCJibHVyXCIsXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgXCJ1bmxvYWRcIixcbiAgICAgIFwicmVzaXplXCIsXG4gICAgXTtcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xuICAgIGNvbnN0IGZvY3VzID0gZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBjb25zdCBpbnRlcmFjdGlvblRpbWUgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBzcGVudFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICBlbGFwc2VkVGltZSArPSBzcGVudFRpbWU7XG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uVGltZSA9IGVsYXBzZWRUaW1lO1xuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGUgPSBldmVudC50eXBlO1xuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvbkVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xhc3NOYW1lO1xuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIoc2NvcGUpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXMpO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudFR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaW50ZXJhY3Rpb25UaW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBKU1NpemUoKTogYW55IHtcbiAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghc2NyaXB0c1tpXS5zcmMpIGNvbnRlbnQgKz0gc2NyaXB0c1tpXS5pbm5lckhUTUw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbY29udGVudF0pLnNpemU7XG4gIH1cblxuICBzdGF0aWMgdGltZXN0YW1wVG9TZWMoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgoc3RhcnQgLSBlbmQpICogMTAwMCkuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgc3RhdGljIGlubGluZVN0eWxlU2l6ZShpbmxpbmVTdHlsZVNpemU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgIHZhciBzdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3N0eWxlXVwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5saW5lU3R5bGVTaXplID0gc3R5bGVzW2ldLmF0dHJpYnV0ZXM7XG4gICAgICBpZiAoaW5saW5lU3R5bGVTaXplLnN0eWxlKSBjb250ZW50ICs9IGlubGluZVN0eWxlU2l6ZS5zdHlsZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSkuc2l6ZTtcbiAgfVxuXG4gIHN0YXRpYyBibG9ja2VkSlNSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwic2NyaXB0XCIpXG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgfVxuICAgIC8vIG1hcCBldmVyeSB1cmwgdG8gdGhlIHByb21pc2Ugb2YgdGhlIGZldGNoXG4gICAgbGV0IHJlcXVlc3RzID0gY2FwdHVyZV9qc19yZXF1ZXN0Lm1hcCgodXJsKSA9PiBmZXRjaCh1cmwpKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAoUHJvbWlzZSBhcyBhbnkpLmFsbFNldHRsZWQocmVxdWVzdHMpLnRoZW4oKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQ6IGFueSwgbnVtOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJyZWplY3RlZFwiKSB7XG4gICAgICAgICAgc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLnB1c2gocmVxdWVzdHNbbnVtXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGJsb2NrZWRDU1NSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcImNzc1wiKVxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xuICAgIH1cbiAgICAvLyBtYXAgZXZlcnkgdXJsIHRvIHRoZSBwcm9taXNlIG9mIHRoZSBmZXRjaFxuICAgIGxldCByZXF1ZXN0cyA9IGNhcHR1cmVfanNfcmVxdWVzdC5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgKFByb21pc2UgYXMgYW55KS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnksIG51bTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMucHVzaChyZXF1ZXN0c1tudW1dKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5hY3Rpdml0eVRpbWUodGltZTogYW55LCBzY29wZTogYW55KTogYW55IHtcbiAgICB3aW5kb3cub25sb2FkID0gcmVzZXRUaW1lcjtcbiAgICAvLyBET00gRXZlbnRzXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSByZXNldFRpbWVyO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHJlc2V0VGltZXI7XG5cbiAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge30sIDMwMDApO1xuICAgICAgc2NvcGUuZmlyc3RDUFVJZGxlID0gbmV3IERhdGUodGltZSAqIDEwMDApLmdldFNlY29uZHMoKTtcbiAgICAgIC8vIDEwMDAgbWlsbGlzZWNvbmRzID0gMSBzZWNvbmRcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVzZXRUaW1lciwgdHJ1ZSk7XG4gICAgdmFyIGV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcImtleXByZXNzXCIsIFwic2Nyb2xsXCIsIFwidG91Y2hzdGFydFwiXTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCByZXNldFRpbWVyLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBleHBvcnQgYSBnbG9iYWwgdmFyaWFibGUgdG8gYWNjZXNzIGxhdGVyXG4od2luZG93IGFzIGFueSkuVHJhY2tQZXJmb3JtYW5jZSA9IFRyYWNrUGVyZm9ybWFuY2U7XG5leHBvcnQgZGVmYXVsdCBUcmFja1BlcmZvcm1hbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==