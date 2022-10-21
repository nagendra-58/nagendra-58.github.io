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
            entryChunks.forEach(function (entryChunk, index) {
                var mainEntryChunk = entryChunk.filter(function (entryInfo) {
                    return entryInfo.name == window.location.href;
                })[0];
                mainEntryChunk = mainEntryChunk ? mainEntryChunk : entryChunk[0];
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
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtJQWtJRSwwQkFBWSxFQU9lO1FBUDNCLGlCQXNEQztZQXJEQyxnQkFBa0UsRUFBbEUsdUZBQWtFLEVBQ2xFLGlCQUFhLEVBQWIsa0NBQWEsRUFDYixpQkFBYyxFQUFkLG1DQUFjLEVBQ2QsbUJBQWtELEVBQWxELHVFQUFrRCxFQUNsRCxvQkFBaUIsRUFBakIsc0NBQWlCLEVBQ2pCLGdDQUFhO1FBRWIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixH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QyxDQUFDO1lBQ25CLElBQUksR0FBRyxVQUFVLENBQUMsY0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDeEQsK0JBQStCO1FBQ2pDLENBQUM7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSTtZQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUM7QUFFRCwyQ0FBMkM7QUFDMUMsTUFBYyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3BELGtCQUFlLGdCQUFnQixDQUFDIiwiZmlsZSI6InJ1bS1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zIHtcbiAgdHJhY2tVcmw6IHN0cmluZztcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xuICBiYXRjaFNpemU/OiBudW1iZXI7XG4gIGV4Y2x1ZGVLZXlzOiBzdHJpbmdbXTtcbiAgaW5jbHVkZUhvc3RzOiBzdHJpbmdbXTtcbiAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xufVxuXG5jbGFzcyBUcmFja1BlcmZvcm1hbmNlIHtcbiAgc3RhdGljIGNvbXB1dGVNZXRyaWNzKFxuICAgIGVudHJ5OiBhbnksXG4gICAgdHlwZTogYW55LFxuICAgIGRvbTogYW55LFxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50OiBhbnkgPSBbXSxcbiAgICBjYXB0dXJlUmVxdWVzdHM6IGFueSA9IFtdXG4gICkge1xuICAgIC8vIFRMUyB0aW1lXG4gICAgLy8gaWYgKGVudHJ5LnNlY3VyZUNvbm5lY3Rpb25TdGFydCA+IDApIHtcbiAgICBlbnRyeS50bHNUaW1lID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVxdWVzdFN0YXJ0LFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5zZWN1cmVDb25uZWN0aW9uU3RhcnRcbiAgICApO1xuICAgIC8vIH1cblxuICAgIC8vIFRpbWUgdG8gRmlyc3QgQnl0ZSAoVFRGQilcbiAgICBlbnRyeS50dGZiID0gVHJhY2tQZXJmb3JtYW5jZS50aW1lc3RhbXBUb1NlYyhcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XG4gICAgKTtcblxuICAgIC8qXG4gICAgICBUaGUgZmV0Y2hTdGFydCByZWFkLW9ubHkgcHJvcGVydHkgcmVwcmVzZW50cyBhIHRpbWVzdGFtcCBpbW1lZGlhdGVseVxuICAgICAgYmVmb3JlIHRoZSBicm93c2VyIHN0YXJ0cyB0byBmZXRjaCB0aGUgcmVzb3VyY2UuXG4gICAgKi9cbiAgICBlbnRyeS5mZXRjaFRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZmV0Y2hTdGFydFxuICAgICk7XG4gICAgaWYgKGVudHJ5LndvcmtlclN0YXJ0ID4gMCkge1xuICAgICAgZW50cnkud29ya2VyVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXG4gICAgICAgIGVudHJ5LndvcmtlclN0YXJ0XG4gICAgICApO1xuICAgIH1cblxuICAgIC8qXG4gICAgICBUaGUgcmVxdWVzdFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXR1cm5zIGEgdGltZXN0YW1wIG9mIHRoZSB0aW1lXG4gICAgICBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGJyb3dzZXIgc3RhcnRzIHJlcXVlc3RpbmcgdGhlIHJlc291cmNlIGZyb20gdGhlXG4gICAgICBzZXJ2ZXIsIGNhY2hlLCBvciBsb2NhbCByZXNvdXJjZVxuICAgICAgUmVxdWVzdCBwbHVzIHJlc3BvbnNlIHRpbWUgKG5ldHdvcmsgb25seSlcbiAgICAqL1xuICAgIGVudHJ5LnRvdGFsVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXF1ZXN0U3RhcnRcbiAgICApO1xuXG4gICAgLy8gUmVzcG9uc2UgdGltZSBvbmx5IChkb3dubG9hZClcbiAgICBlbnRyeS5kb3dubG9hZFRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZXNwb25zZUVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydFxuICAgICk7XG5cbiAgICAvLyBIVFRQIGhlYWRlciBzaXplXG4gICAgZW50cnkuaGVhZGVyU2l6ZSA9IGVudHJ5LnRyYW5zZmVyU2l6ZSAtIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcblxuICAgIC8vIENvbXByZXNzaW9uIHJhdGlvXG4gICAgZW50cnkuY29tcHJlc3Npb25SYXRpbyA9IGVudHJ5LmRlY29kZWRCb2R5U2l6ZSAvIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcblxuICAgIC8vIFBhZ2UgVGltZVxuICAgIGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0XG4gICAgKTtcbiAgICBlbnRyeS5wYWdlTG9hZCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmxvYWRFdmVudEVuZCxcbiAgICAgIGVudHJ5LnN0YXJ0VGltZVxuICAgICk7XG4gICAgZW50cnkuc3RhcnRSZW5kZXIgPSBuZXcgRGF0ZShlbnRyeS5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKCk7XG4gICAgLy8gZW50cnkuZmlyc3RDUFVJZGxlID0gdHlwZS5oYXJkd2FyZUNvbmN1cnJlbmN5O1xuICAgIGRvbSA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpWzBdO1xuICAgIHR5cGUgPSBuYXZpZ2F0b3I7XG4gICAgZW50cnkuYnJvd3NlciA9IGAke3dpbmRvdy5uYXZpZ2F0b3IuYXBwTmFtZX0ke3dpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbn1gO1xuICAgIGVudHJ5LnVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgZW50cnkub3MgPSBUcmFja1BlcmZvcm1hbmNlLmdldE9TKCk7XG4gICAgZW50cnkuZGV2aWNlVHlwZSA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0RGV2aWNlVHlwZSgpO1xuICAgIGVudHJ5LmNvbm5lY3Rpb25UeXBlID0gdHlwZS5jb25uZWN0aW9uLmVmZmVjdGl2ZVR5cGU7XG4gICAgKGVudHJ5LnJ1bVZlcnNpb24gPSBcIjEuMC4wXCIpLCAoZW50cnkuZG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICBlbnRyeS5wYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgZW50cnkudXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBlbnRyeS5iYWNrZW5kID0gZW50cnkudHRmYjtcbiAgICBlbnRyeS5yZWRpcmVjdCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICBlbnRyeS5zdGFydFRpbWUsXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlZGlyZWN0U3RhcnRcbiAgICApO1xuICAgIGVudHJ5LmRuc0xvb2tVcCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbWFpbkxvb2t1cEVuZCxcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tYWluTG9va3VwU3RhcnRcbiAgICApO1xuICAgIC8vIFRvdGFsIENvbm5lY3Rpb24gdGltZVxuICAgIGVudHJ5LnRjcENvbm5lY3QgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5jb25uZWN0RW5kLFxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5jb25uZWN0U3RhcnRcbiAgICApO1xuICAgIGVudHJ5LnNzbE5lZ290aWF0aW9uID0gZW50cnkudGxzVGltZTtcbiAgICBlbnRyeS5uZXR3b3JrID0gZW50cnkudGNwQ29ubmVjdCArIGVudHJ5LnNzbE5lZ290aWF0aW9uICsgZW50cnkuZG5zTG9va1VwO1xuICAgIGVudHJ5LmRvbUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcbiAgICBlbnRyeS5kb21JbnRlcmFjdGl2ZSA9IG5ldyBEYXRlKGRvbS5kb21JbnRlcmFjdGl2ZSAqIDEwMDApLmdldFNlY29uZHMoKTtcbiAgICBlbnRyeS5hdmVyYWdlRE9NRGVwdGggPSBUcmFja1BlcmZvcm1hbmNlLmF2Z0RPTURlcHRoKFtdKTtcbiAgICBjYXB0dXJlUmVxdWVzdHNDb3VudCA9XG4gICAgICBUcmFja1BlcmZvcm1hbmNlLmNhcHR1cmVOZXR3b3JrUmVxdWVzdChjYXB0dXJlUmVxdWVzdHMpO1xuICAgIGVudHJ5LmltYWdlUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ19yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5jc3NSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfY3NzX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5LmpzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2pzX3JlcXVlc3QubGVuZ3RoO1xuICAgIGVudHJ5LmltYWdlQVRGUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0Lmxlbmd0aDtcbiAgICBlbnRyeS5odG1sU2l6ZSA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLmxlbmd0aCAvIDEwMjQpLnRvRml4ZWQoXG4gICAgICAwXG4gICAgKTtcbiAgICBlbnRyeS5pbmxpbmVKU1NpemUgPSBUcmFja1BlcmZvcm1hbmNlLkpTU2l6ZSgpO1xuICAgIGVudHJ5LmlubGluZVN0eWxlU2l6ZSA9IFRyYWNrUGVyZm9ybWFuY2UuaW5saW5lU3R5bGVTaXplKFtdKTtcbiAgICBlbnRyeS5wcm9qZWN0ID0gXCJQQUNFXCI7XG4gICAgcmV0dXJuIGVudHJ5O1xuICB9XG5cbiAgc3RhdGljIGNodW5rKGFycmF5OiBhbnlbXSwgc2l6ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ICUgc2l6ZSA9PT0gMCkge1xuICAgICAgICByZXMucHVzaChbXSk7XG4gICAgICB9XG4gICAgICByZXNbcmVzLmxlbmd0aCAtIDFdLnB1c2goaXRlbSk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0sIFtdKTtcbiAgfVxuICBxdWV1ZWRFbnRyaWVzOiBhbnlbXTtcbiAgbG9jYXRpb25JbmZvOiBhbnk7XG4gIGJsb2NraW5nSlNSZXF1ZXN0czogYW55O1xuICBibG9ja2luZ0NTU1JlcXVlc3RzOiBhbnk7XG4gIG9wdGlvbnM6IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucztcbiAgaW50ZXJ2YWxJZDogbnVtYmVyO1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHJhY2tVcmwgPSBcImh0dHA6Ly81NC4xNTEuMTIwLjI1MDozMDAxL3J1eC93cml0ZVBlcmZvbWFuY2VNZXRyaWNzXCIsXG4gICAgdGhyZXNob2xkID0gMCxcbiAgICBiYXRjaFNpemUgPSA1MCxcbiAgICBleGNsdWRlS2V5cyA9IFtcIm5leHRIb3BQcm90b2NvbFwiLCBcImluaXRpYXRvclR5cGVcIl0sXG4gICAgaW5jbHVkZUhvc3RzID0gW10sXG4gICAgYXBwbGljYXRpb25JZCxcbiAgfTogSVRyYWNrUGVyZm9ybWFuY2VPcHRpb25zKSB7XG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XG4gICAgdGhpcy5sb2NhdGlvbkluZm8gPSB7fTtcbiAgICB0aGlzLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xuICAgIHRoaXMuYmxvY2tpbmdDU1NSZXF1ZXN0cyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRyYWNrVXJsLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgYmF0Y2hTaXplLFxuICAgICAgZXhjbHVkZUtleXMsXG4gICAgICBpbmNsdWRlSG9zdHMsXG4gICAgICBhcHBsaWNhdGlvbklkLFxuICAgIH07XG5cbiAgICBpZiAoXCJwZXJmb3JtYW5jZVwiIGluIHdpbmRvdykge1xuICAgICAgaWYgKFwiUGVyZm9ybWFuY2VPYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgICBjb25zdCBwZXJmT2JzZXJ2ZXIgPSBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigobGlzdCwgb2JqKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKGxpc3QuZ2V0RW50cmllcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGVyZk9ic2VydmVyLm9ic2VydmUoe1xuICAgICAgICAgIGVudHJ5VHlwZXM6IFtcInJlc291cmNlXCJdLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRvLURvXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbmFjdGl2aXR5VGltZSgwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbkluZm8gPSBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuYmxvY2tlZEpTUmVxdWVzdChbXSwgdGhpcyk7XG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuYmxvY2tlZENTU1JlcXVlc3QoW10sIHRoaXMpO1xuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmdldGZpcnN0Q29udGVudEZ1bGxQYWludCh0aGlzKTtcbiAgICAgICAgYXdhaXQgVHJhY2tQZXJmb3JtYW5jZS5nZXRsYXJnZXN0Q29udGVudEZ1bGxQYWludCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpKTtcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbnRlcmFjdGlvbk1ldHJpeCh0aGlzKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdXAgc2V0SW50ZXJ2YWwgdG8gcHVzaCB0cmFjayBkYXRhXCIpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnF1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgIFRyYWNrUGVyZm9ybWFuY2Uuc2VuZFRvU2VydmVyKHRoaXMpO1xuICAgICAgICB0aGlzLnF1ZXVlZEVudHJpZXMgPSBbXTtcbiAgICAgIH1cbiAgICB9LCB0aHJlc2hvbGQpO1xuICB9XG5cbiAgaGFuZGxlRW50cmllcyhlbnRyaWVzOiBhbnlbXSkge1xuICAgIGNvbnN0IHsgdHJhY2tVcmwsIGV4Y2x1ZGVLZXlzLCBhcHBsaWNhdGlvbklkIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gZW50cnkudG9KU09OKCkpO1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLm1hcChUcmFja1BlcmZvcm1hbmNlLmNvbXB1dGVNZXRyaWNzKTtcbiAgICBpZiAoZXhjbHVkZUtleXMubGVuZ3RoKSB7XG4gICAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnRyeSkucmVkdWNlKChhY2M6IGFueSwga2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFjY1trZXldID0gZW50cnlba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucXVldWVkRW50cmllcyA9IHRoaXMucXVldWVkRW50cmllcy5jb25jYXQoZW50cmllcyk7XG4gIH1cblxuICBzdGF0aWMgc2VuZFRvU2VydmVyKHNjb3BlOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgYmF0Y2hTaXplID0gNTAsIHRyYWNrVXJsLCBhcHBsaWNhdGlvbklkIH0gPSBzY29wZS5vcHRpb25zO1xuICAgIGNvbnN0IGVudHJ5Q2h1bmtzID0gVHJhY2tQZXJmb3JtYW5jZS5jaHVuayhzY29wZS5xdWV1ZWRFbnRyaWVzLCBiYXRjaFNpemUpO1xuICAgIGNvbnNvbGUubG9nKFwiZW50cnlDaHVua3MtLS0tLS0+XCIsIGVudHJ5Q2h1bmtzKTtcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGVudHJ5Q2h1bmtzLmZvckVhY2goKGVudHJ5Q2h1bms6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdmFyIG1haW5FbnRyeUNodW5rID0gZW50cnlDaHVuay5maWx0ZXIoKGVudHJ5SW5mbzogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBlbnRyeUluZm8ubmFtZSA9PSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIH0pWzBdO1xuICAgICAgbWFpbkVudHJ5Q2h1bmsgPSBtYWluRW50cnlDaHVuayA/IG1haW5FbnRyeUNodW5rIDogZW50cnlDaHVua1swXTtcbiAgICAgIG1haW5FbnRyeUNodW5rLmFwcGxpY2F0aW9uSWQgPSBhcHBsaWNhdGlvbklkO1xuICAgICAgaWYgKHNjb3BlLmxvY2F0aW9uSW5mbykge1xuICAgICAgICBtYWluRW50cnlDaHVuay5jaXR5ID0gc2NvcGUubG9jYXRpb25JbmZvLmNpdHk7XG4gICAgICAgIG1haW5FbnRyeUNodW5rLmNvdW50cnkgPSBzY29wZS5sb2NhdGlvbkluZm8uY291bnRyeTtcbiAgICAgIH1cbiAgICAgIG1haW5FbnRyeUNodW5rLmJsb2NraW5nSlNSZXF1ZXN0cyA9IHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cy5sZW5ndGg7XG4gICAgICBtYWluRW50cnlDaHVuay5ibG9ja2luZ0NTU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdDU1NSZXF1ZXN0cy5sZW5ndGg7XG4gICAgICBtYWluRW50cnlDaHVuay5pbnRlcmFjdGlvblRpbWUgPSBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uVGltZTtcbiAgICAgIG1haW5FbnRyeUNodW5rLmludGVyYWN0aW9uVHlwZSA9IHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UeXBlO1xuICAgICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25FbGVtZW50ID1cbiAgICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvbkVsZW1lbnQ7XG4gICAgICBtYWluRW50cnlDaHVuay5maXJzdENvbnRlbnRGdWxsUGFpbnQgPSBzY29wZS5maXJzdENvbnRlbnRGdWxsUGFpbnQ7XG4gICAgICBtYWluRW50cnlDaHVuay5sYXJnZXN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50O1xuICAgICAgbWFpbkVudHJ5Q2h1bmsucGFnZVRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgICBtYWluRW50cnlDaHVuay5mbGFncyA9IGRvY3VtZW50LnRpdGxlO1xuICAgICAgbWFpbkVudHJ5Q2h1bmsuZmlyc3RDUFVJZGxlID0gc2NvcGUuZmlyc3RDUFVJZGxlO1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgZmV0Y2godHJhY2tVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1haW5FbnRyeUNodW5rKSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IDA7XG4gIH1cblxuICAvLyBHZXQgZGV2aWNlIHR5cGVcbiAgc3RhdGljIGdldERldmljZVR5cGUoKTogYW55IHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKC8odGFibGV0fGlwYWR8cGxheWJvb2t8c2lsayl8KGFuZHJvaWQoPyEuKm1vYmkpKS9pLnRlc3QodWEpKSB7XG4gICAgICByZXR1cm4gXCJ0YWJsZXRcIjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgL01vYmlsZXxpUChob25lfG9kKXxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGV8S2luZGxlfFNpbGstQWNjZWxlcmF0ZWR8KGhwd3x3ZWIpT1N8T3BlcmEgTShvYml8aW5pKS8udGVzdChcbiAgICAgICAgdWFcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBcIm1vYmlsZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJkZXNrdG9wXCI7XG4gIH1cblxuICAvLyBHZXQgT1NcbiAgc3RhdGljIGdldE9TKCk6IGFueSB7XG4gICAgdmFyIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLFxuICAgICAgbWFjb3NQbGF0Zm9ybXMgPSBbXCJNYWNpbnRvc2hcIiwgXCJNYWNJbnRlbFwiLCBcIk1hY1BQQ1wiLCBcIk1hYzY4S1wiXSxcbiAgICAgIHdpbmRvd3NQbGF0Zm9ybXMgPSBbXCJXaW4zMlwiLCBcIldpbjY0XCIsIFwiV2luZG93c1wiLCBcIldpbkNFXCJdLFxuICAgICAgaW9zUGxhdGZvcm1zID0gW1wiaVBob25lXCIsIFwiaVBhZFwiLCBcImlQb2RcIl0sXG4gICAgICBvcyA9IG51bGw7XG5cbiAgICBpZiAobWFjb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiTWFjIE9TXCI7XG4gICAgfSBlbHNlIGlmIChpb3NQbGF0Zm9ybXMuaW5kZXhPZihwbGF0Zm9ybSkgIT09IC0xKSB7XG4gICAgICBvcyA9IFwiaU9TXCI7XG4gICAgfSBlbHNlIGlmICh3aW5kb3dzUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xuICAgICAgb3MgPSBcIldpbmRvd3NcIjtcbiAgICB9IGVsc2UgaWYgKC9BbmRyb2lkLy50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgfSBlbHNlIGlmICghb3MgJiYgL0xpbnV4Ly50ZXN0KHBsYXRmb3JtKSkge1xuICAgICAgb3MgPSBcIkxpbnV4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9zO1xuICB9XG4gIHN0YXRpYyBjYXB0dXJlTmV0d29ya1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55W10pOiBhbnkge1xuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcbiAgICB2YXIgY2FwdHVyZV9jc3NfcmVxdWVzdCA9IFtdO1xuICAgIHZhciBjYXB0dXJlX2ltZ19yZXF1ZXN0ID0gW107XG4gICAgdmFyIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcInNjcmlwdFwiKSB7XG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiY3NzXCIpIHtcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwiaW1nXCIpIHtcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUuc3BsaXQoL1sjP10vKVswXS5zcGxpdChcIi5cIikucG9wKCkudHJpbSgpID09XG4gICAgICAgICAgXCJhdGZcIlxuICAgICAgICApXG4gICAgICAgICAgY2FwdHVyZV9pbWdhdGZfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjYXB0dXJlX2pzX3JlcXVlc3QsXG4gICAgICBjYXB0dXJlX2Nzc19yZXF1ZXN0LFxuICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdCxcbiAgICAgIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBhdmdET01EZXB0aCh0cmFja2VyOiBhbnkpOiBhbnkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHByZXZOb2RlID0gMDtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpKS5mb3JFYWNoKChub2RlOiBhbnkpID0+IHtcbiAgICAgIGlmICghdHJhY2tlcltub2RlLnRhZ05hbWVdKSB0cmFja2VyW25vZGUudGFnTmFtZV0gPSAxO1xuICAgICAgZWxzZSB0cmFja2VyW25vZGUudGFnTmFtZV0rKztcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT0gcHJldk5vZGUpIGRlcHRoKys7XG4gICAgICBwcmV2Tm9kZSA9IG5vZGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlcHRoIC8gMjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRmaXJzdENvbnRlbnRGdWxsUGFpbnQoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcGFpbnRUaW1pbmdzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInBhaW50XCIpO1xuICAgIGNvbnN0IGZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxuICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lID09PSBcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIlxuICAgICk7XG4gICAgc2NvcGUuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gZmlyc3RDb250ZW50RnVsbFBhaW50XG4gICAgICA/IG5ldyBEYXRlKGZpcnN0Q29udGVudEZ1bGxQYWludC5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRsYXJnZXN0Q29udGVudEZ1bGxQYWludChzY29wZTogYW55KTogYW55IHtcbiAgICBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZW50cnlMaXN0KSA9PiB7XG4gICAgICB2YXIgbGNwID0gZW50cnlMaXN0LmdldEVudHJpZXMoKTtcbiAgICAgIGlmIChsY3AubGVuZ3RoKSB7XG4gICAgICAgIHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gbGNwW2xjcC5sZW5ndGggLSAxXVxuICAgICAgICAgID8gbmV3IERhdGUobGNwW2xjcC5sZW5ndGggLSAxXS5zdGFydFRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKClcbiAgICAgICAgICA6IDA7XG4gICAgICB9XG4gICAgfSkub2JzZXJ2ZSh7IHR5cGU6IFwibGFyZ2VzdC1jb250ZW50ZnVsLXBhaW50XCIsIGJ1ZmZlcmVkOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldExvY2F0aW9uKCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW50ZXJhY3Rpb25NZXRyaXgoc2NvcGU6IGFueSk6IGFueSB7XG4gICAgbGV0IGV2ZW50cyA9IFtcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICBcImtleXByZXNzXCIsXG4gICAgICBcIktleWRvd25cIixcbiAgICAgIC8vIFwibW91c2VvdmVyXCIsXG4gICAgICAvLyBcIm1vdXNlb3V0XCIsXG4gICAgICAvLyBcIm1vdXNlZG93blwiLFxuICAgICAgLy8gXCJtb3VzZXVwXCIsXG4gICAgICBcImNoYW5nZVwiLFxuICAgICAgXCJibHVyXCIsXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgXCJ1bmxvYWRcIixcbiAgICAgIFwicmVzaXplXCIsXG4gICAgXTtcbiAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xuICAgIGNvbnN0IGZvY3VzID0gZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBjb25zdCBpbnRlcmFjdGlvblRpbWUgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBzcGVudFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XG4gICAgICBlbGFwc2VkVGltZSArPSBzcGVudFRpbWU7XG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uVGltZSA9IGVsYXBzZWRUaW1lO1xuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGUgPSBldmVudC50eXBlO1xuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvbkVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xhc3NOYW1lO1xuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIoc2NvcGUpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZm9jdXMpO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudFR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaW50ZXJhY3Rpb25UaW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBKU1NpemUoKTogYW55IHtcbiAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghc2NyaXB0c1tpXS5zcmMpIGNvbnRlbnQgKz0gc2NyaXB0c1tpXS5pbm5lckhUTUw7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbY29udGVudF0pLnNpemU7XG4gIH1cblxuICBzdGF0aWMgdGltZXN0YW1wVG9TZWMoc3RhcnQ6IGFueSwgZW5kOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgoc3RhcnQgLSBlbmQpICogMTAwMCkuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgc3RhdGljIGlubGluZVN0eWxlU2l6ZShpbmxpbmVTdHlsZVNpemU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgIHZhciBzdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3N0eWxlXVwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5saW5lU3R5bGVTaXplID0gc3R5bGVzW2ldLmF0dHJpYnV0ZXM7XG4gICAgICBpZiAoaW5saW5lU3R5bGVTaXplLnN0eWxlKSBjb250ZW50ICs9IGlubGluZVN0eWxlU2l6ZS5zdHlsZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtjb250ZW50XSkuc2l6ZTtcbiAgfVxuXG4gIHN0YXRpYyBibG9ja2VkSlNSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHNjb3BlLmJsb2NraW5nSlNSZXF1ZXN0cyA9IFtdO1xuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FwdHVyZV9yZXNvdXJjZVtpXS5pbml0aWF0b3JUeXBlID09IFwic2NyaXB0XCIpXG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XG4gICAgfVxuICAgIC8vIG1hcCBldmVyeSB1cmwgdG8gdGhlIHByb21pc2Ugb2YgdGhlIGZldGNoXG4gICAgbGV0IHJlcXVlc3RzID0gY2FwdHVyZV9qc19yZXF1ZXN0Lm1hcCgodXJsKSA9PiBmZXRjaCh1cmwpKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAoUHJvbWlzZSBhcyBhbnkpLmFsbFNldHRsZWQocmVxdWVzdHMpLnRoZW4oKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQ6IGFueSwgbnVtOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJyZWplY3RlZFwiKSB7XG4gICAgICAgICAgc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLnB1c2gocmVxdWVzdHNbbnVtXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGJsb2NrZWRDU1NSZXF1ZXN0KGNhcHR1cmVfcmVzb3VyY2U6IGFueSwgc2NvcGU6IGFueSk6IGFueSB7XG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xuICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBbXTtcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FwdHVyZV9yZXNvdXJjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcImNzc1wiKVxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xuICAgIH1cbiAgICAvLyBtYXAgZXZlcnkgdXJsIHRvIHRoZSBwcm9taXNlIG9mIHRoZSBmZXRjaFxuICAgIGxldCByZXF1ZXN0cyA9IGNhcHR1cmVfanNfcmVxdWVzdC5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgKFByb21pc2UgYXMgYW55KS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnksIG51bTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMucHVzaChyZXF1ZXN0c1tudW1dKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5hY3Rpdml0eVRpbWUodGltZTogYW55LCBzY29wZTogYW55KTogYW55IHtcbiAgICB3aW5kb3cub25sb2FkID0gcmVzZXRUaW1lcjtcbiAgICAvLyBET00gRXZlbnRzXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSByZXNldFRpbWVyO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IHJlc2V0VGltZXI7XG5cbiAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICAgICAgdGltZSA9IHNldFRpbWVvdXQoKCkgPT4ge30sIDMwMDApO1xuICAgICAgc2NvcGUuZmlyc3RDUFVJZGxlID0gbmV3IERhdGUodGltZSAqIDEwMDApLmdldFNlY29uZHMoKTtcbiAgICAgIC8vIDEwMDAgbWlsbGlzZWNvbmRzID0gMSBzZWNvbmRcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVzZXRUaW1lciwgdHJ1ZSk7XG4gICAgdmFyIGV2ZW50cyA9IFtcIm1vdXNlZG93blwiLCBcIm1vdXNlbW92ZVwiLCBcImtleXByZXNzXCIsIFwic2Nyb2xsXCIsIFwidG91Y2hzdGFydFwiXTtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCByZXNldFRpbWVyLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBleHBvcnQgYSBnbG9iYWwgdmFyaWFibGUgdG8gYWNjZXNzIGxhdGVyXG4od2luZG93IGFzIGFueSkuVHJhY2tQZXJmb3JtYW5jZSA9IFRyYWNrUGVyZm9ybWFuY2U7XG5leHBvcnQgZGVmYXVsdCBUcmFja1BlcmZvcm1hbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==