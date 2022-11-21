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
            var env = _a.env, _b = _a.trackUrl, trackUrl = _b === void 0 ? env == "qa"
                ? "http://172.16.12.45:3001/rux/writePerfomanceMetrics"
                : "http://54.153.11.233:3001/rux/writePerfomanceMetrics" : _b, _c = _a.threshold, threshold = _c === void 0 ? 0 : _c, _d = _a.batchSize, batchSize = _d === void 0 ? 50 : _d, _e = _a.excludeKeys, excludeKeys = _e === void 0 ? ["nextHopProtocol", "initiatorType"] : _e, _f = _a.includeHosts, includeHosts = _f === void 0 ? [] : _f, applicationId = _a.applicationId;
            this.queuedEntries = [];
            this.locationInfo = {};
            this.blockingJSRequests = [];
            this.blockingCSSRequests = [];
            this.options = {
                trackUrl: trackUrl,
                env: env,
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
            entry.tlsTime = TrackPerformance.timestampToSec(window.performance.timing.requestStart, window.performance.timing.secureConnectionStart, false);
            // }
            // Time to First Byte (TTFB)
            entry.ttfb = TrackPerformance.timestampToSec(window.performance.timing.responseStart, window.performance.timing.navigationStart, false);
            /*
              The fetchStart read-only property represents a timestamp immediately
              before the browser starts to fetch the resource.
            */
            entry.fetchTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.fetchStart, false);
            if (entry.workerStart > 0) {
                entry.workerTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, entry.workerStart, false);
            }
            /*
              The requestStart read-only property returns a timestamp of the time
              immediately before the browser starts requesting the resource from the
              server, cache, or local resource
              Request plus response time (network only)
            */
            entry.totalTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.requestStart, false);
            // Response time only (download)
            entry.downloadTime = TrackPerformance.timestampToSec(window.performance.timing.responseEnd, window.performance.timing.responseStart, false);
            // HTTP header size
            entry.headerSize = entry.transferSize - entry.encodedBodySize;
            // Compression ratio
            entry.compressionRatio = entry.decodedBodySize / entry.encodedBodySize;
            // Page Time
            entry.domContentLoaded = TrackPerformance.timestampToMilliSec(window.performance.timing.domContentLoadedEventEnd, window.performance.timing.domContentLoadedEventStart);
            entry.pageLoad = TrackPerformance.timestampToSec(window.performance.timing.loadEventEnd, entry, true);
            entry.startRender = new Date(entry.startTime * 1000).getSeconds();
            console.log("entry time start----->", entry);
            // entry.firstCPUIdle = type.hardwareConcurrency;
            dom = performance.getEntriesByType("navigation")[0];
            type = navigator;
            entry.browser = TrackPerformance.browser();
            entry.userAgent = navigator.userAgent;
            entry.os = TrackPerformance.getOS();
            entry.deviceType = TrackPerformance.getDeviceType();
            entry.connectionType = type.connection
                ? type.connection.effectiveType
                : "4g";
            (entry.rumVersion = "1.0.0"), (entry.domain = window.location.hostname);
            entry.pageURL = window.location.href;
            entry.urlPath = window.location.pathname;
            entry.backend = entry.ttfb;
            entry.redirect = TrackPerformance.timestampToSec(entry.startTime, window.performance.timing.redirectStart, false);
            entry.dnsLookUp = TrackPerformance.timestampToSec(window.performance.timing.domainLookupEnd, window.performance.timing.domainLookupStart, false);
            // Total Connection time
            entry.tcpConnect = TrackPerformance.timestampToSec(window.performance.timing.connectEnd, window.performance.timing.connectStart, false);
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
                scope.queuedEntries[0].interactionTime = new Date(elapsedTime * 1000).getSeconds();
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
        TrackPerformance.timestampToSec = function (start, end, action) {
            return new Date((start - end) * 1000).getSeconds();
        };
        TrackPerformance.timestampToMilliSec = function (start, end) {
            return ((start - end) / 1000) * 1000;
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
        TrackPerformance.browser = function () {
            var test = function (regexp) {
                return regexp.test(window.navigator.userAgent);
            };
            switch (true) {
                case test(/edg/i):
                    return "Microsoft Edge";
                case test(/trident/i):
                    return "Microsoft Internet Explorer";
                case test(/firefox|fxios/i):
                    return "Mozilla Firefox";
                case test(/opr\//i):
                    return "Opera";
                case test(/ucbrowser/i):
                    return "UC Browser";
                case test(/samsungbrowser/i):
                    return "Samsung Browser";
                case test(/chrome|chromium|crios/i):
                    return "Google Chrome";
                case test(/safari/i):
                    return "Apple Safari";
                default:
                    return "Other";
            }
        };
        return TrackPerformance;
    }());
    // export a global variable to access later
    window.TrackPerformance = TrackPerformance;
    exports.default = TrackPerformance;
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtJQWdKRSwwQkFBWSxFQVVlO1FBVjNCLGlCQTBEQztZQXpEQyxZQUFHLEVBQ0gsZ0JBRTBELEVBRjFEOzt5RUFFMEQsRUFDMUQsaUJBQWEsRUFBYixrQ0FBYSxFQUNiLGlCQUFjLEVBQWQsbUNBQWMsRUFDZCxtQkFBa0QsRUFBbEQsdUVBQWtELEVBQ2xELG9CQUFpQixFQUFqQixzQ0FBaUIsRUFDakIsZ0NBQWE7UUFFYixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENB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QyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdCQUFPLEdBQWQ7UUFDRSxJQUFJLElBQUksR0FBRyxVQUFVLE1BQWM7WUFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2YsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLE9BQU8sNkJBQTZCLENBQUM7WUFDdkMsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3pCLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqQixPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3JCLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUMxQixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSSxDQUFDLHdCQUF3QixDQUFDO2dCQUNqQyxPQUFPLGVBQWUsQ0FBQztZQUN6QixLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xCLE9BQU8sY0FBYyxDQUFDO1lBQ3hCO2dCQUNFLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUVELDJDQUEyQztBQUMxQyxNQUFjLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDcEQsa0JBQWUsZ0JBQWdCLENBQUMiLCJmaWxlIjoicnVtLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJVHJhY2tQZXJmb3JtYW5jZU9wdGlvbnMge1xyXG4gIHRyYWNrVXJsOiBzdHJpbmc7XHJcbiAgZW52OiBzdHJpbmc7XHJcbiAgdGhyZXNob2xkPzogbnVtYmVyO1xyXG4gIGJhdGNoU2l6ZT86IG51bWJlcjtcclxuICBleGNsdWRlS2V5czogc3RyaW5nW107XHJcbiAgaW5jbHVkZUhvc3RzOiBzdHJpbmdbXTtcclxuICBhcHBsaWNhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFRyYWNrUGVyZm9ybWFuY2Uge1xyXG4gIHN0YXRpYyBjb21wdXRlTWV0cmljcyhcclxuICAgIGVudHJ5OiBhbnksXHJcbiAgICB0eXBlOiBhbnksXHJcbiAgICBkb206IGFueSxcclxuICAgIGNhcHR1cmVSZXF1ZXN0c0NvdW50OiBhbnkgPSBbXSxcclxuICAgIGNhcHR1cmVSZXF1ZXN0czogYW55ID0gW11cclxuICApIHtcclxuICAgIC8vIFRMUyB0aW1lXHJcbiAgICAvLyBpZiAoZW50cnkuc2VjdXJlQ29ubmVjdGlvblN0YXJ0ID4gMCkge1xyXG4gICAgZW50cnkudGxzVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVxdWVzdFN0YXJ0LFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnNlY3VyZUNvbm5lY3Rpb25TdGFydCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gVGltZSB0byBGaXJzdCBCeXRlIChUVEZCKVxyXG4gICAgZW50cnkudHRmYiA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCxcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIC8qXHJcbiAgICAgIFRoZSBmZXRjaFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXByZXNlbnRzIGEgdGltZXN0YW1wIGltbWVkaWF0ZWx5XHJcbiAgICAgIGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgdG8gZmV0Y2ggdGhlIHJlc291cmNlLlxyXG4gICAgKi9cclxuICAgIGVudHJ5LmZldGNoVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZmV0Y2hTdGFydCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICBpZiAoZW50cnkud29ya2VyU3RhcnQgPiAwKSB7XHJcbiAgICAgIGVudHJ5LndvcmtlclRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxyXG4gICAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXHJcbiAgICAgICAgZW50cnkud29ya2VyU3RhcnQsXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICBUaGUgcmVxdWVzdFN0YXJ0IHJlYWQtb25seSBwcm9wZXJ0eSByZXR1cm5zIGEgdGltZXN0YW1wIG9mIHRoZSB0aW1lXHJcbiAgICAgIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgYnJvd3NlciBzdGFydHMgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UgZnJvbSB0aGVcclxuICAgICAgc2VydmVyLCBjYWNoZSwgb3IgbG9jYWwgcmVzb3VyY2VcclxuICAgICAgUmVxdWVzdCBwbHVzIHJlc3BvbnNlIHRpbWUgKG5ldHdvcmsgb25seSlcclxuICAgICovXHJcbiAgICBlbnRyeS50b3RhbFRpbWUgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlc3BvbnNlRW5kLFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLnJlcXVlc3RTdGFydCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgLy8gUmVzcG9uc2UgdGltZSBvbmx5IChkb3dubG9hZClcclxuICAgIGVudHJ5LmRvd25sb2FkVGltZSA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VFbmQsXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcucmVzcG9uc2VTdGFydCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgLy8gSFRUUCBoZWFkZXIgc2l6ZVxyXG4gICAgZW50cnkuaGVhZGVyU2l6ZSA9IGVudHJ5LnRyYW5zZmVyU2l6ZSAtIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcclxuXHJcbiAgICAvLyBDb21wcmVzc2lvbiByYXRpb1xyXG4gICAgZW50cnkuY29tcHJlc3Npb25SYXRpbyA9IGVudHJ5LmRlY29kZWRCb2R5U2l6ZSAvIGVudHJ5LmVuY29kZWRCb2R5U2l6ZTtcclxuXHJcbiAgICAvLyBQYWdlIFRpbWVcclxuICAgIGVudHJ5LmRvbUNvbnRlbnRMb2FkZWQgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvTWlsbGlTZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuZG9tQ29udGVudExvYWRlZEV2ZW50RW5kLFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0LFxyXG4gICAgKTtcclxuXHJcbiAgICBlbnRyeS5wYWdlTG9hZCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubG9hZEV2ZW50RW5kLFxyXG4gICAgICBlbnRyeSwgdHJ1ZVxyXG4gICAgKTtcclxuICAgIGVudHJ5LnN0YXJ0UmVuZGVyID0gbmV3IERhdGUoZW50cnkuc3RhcnRUaW1lICogMTAwMCkuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZW50cnkgdGltZSBzdGFydC0tLS0tPlwiLGVudHJ5KVxyXG4gICAgLy8gZW50cnkuZmlyc3RDUFVJZGxlID0gdHlwZS5oYXJkd2FyZUNvbmN1cnJlbmN5O1xyXG4gICAgZG9tID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF07XHJcbiAgICB0eXBlID0gbmF2aWdhdG9yO1xyXG4gICAgZW50cnkuYnJvd3NlciA9IFRyYWNrUGVyZm9ybWFuY2UuYnJvd3NlcigpO1xyXG4gICAgZW50cnkudXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIGVudHJ5Lm9zID0gVHJhY2tQZXJmb3JtYW5jZS5nZXRPUygpO1xyXG4gICAgZW50cnkuZGV2aWNlVHlwZSA9IFRyYWNrUGVyZm9ybWFuY2UuZ2V0RGV2aWNlVHlwZSgpO1xyXG4gICAgZW50cnkuY29ubmVjdGlvblR5cGUgPSB0eXBlLmNvbm5lY3Rpb25cclxuICAgICAgPyB0eXBlLmNvbm5lY3Rpb24uZWZmZWN0aXZlVHlwZVxyXG4gICAgICA6IFwiNGdcIjtcclxuICAgIChlbnRyeS5ydW1WZXJzaW9uID0gXCIxLjAuMFwiKSwgKGVudHJ5LmRvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICBlbnRyeS5wYWdlVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBlbnRyeS51cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgZW50cnkuYmFja2VuZCA9IGVudHJ5LnR0ZmI7XHJcbiAgICBlbnRyeS5yZWRpcmVjdCA9IFRyYWNrUGVyZm9ybWFuY2UudGltZXN0YW1wVG9TZWMoXHJcbiAgICAgIGVudHJ5LnN0YXJ0VGltZSxcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5yZWRpcmVjdFN0YXJ0XHJcbiAgICAgICwgZmFsc2VcclxuICAgICk7XHJcbiAgICBlbnRyeS5kbnNMb29rVXAgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmRvbWFpbkxvb2t1cEVuZCxcclxuICAgICAgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5kb21haW5Mb29rdXBTdGFydCxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICAvLyBUb3RhbCBDb25uZWN0aW9uIHRpbWVcclxuICAgIGVudHJ5LnRjcENvbm5lY3QgPSBUcmFja1BlcmZvcm1hbmNlLnRpbWVzdGFtcFRvU2VjKFxyXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLmNvbm5lY3RFbmQsXHJcbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcuY29ubmVjdFN0YXJ0LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGVudHJ5LnNzbE5lZ290aWF0aW9uID0gZW50cnkudGxzVGltZTtcclxuICAgIGVudHJ5Lm5ldHdvcmsgPSBlbnRyeS50Y3BDb25uZWN0ICsgZW50cnkuc3NsTmVnb3RpYXRpb24gKyBlbnRyeS5kbnNMb29rVXA7XHJcbiAgICBlbnRyeS5kb21FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XHJcbiAgICBlbnRyeS5kb21JbnRlcmFjdGl2ZSA9IG5ldyBEYXRlKGRvbS5kb21JbnRlcmFjdGl2ZSAqIDEwMDApLmdldFNlY29uZHMoKTtcclxuICAgIGVudHJ5LmF2ZXJhZ2VET01EZXB0aCA9IFRyYWNrUGVyZm9ybWFuY2UuYXZnRE9NRGVwdGgoW10pO1xyXG4gICAgY2FwdHVyZVJlcXVlc3RzQ291bnQgPVxyXG4gICAgICBUcmFja1BlcmZvcm1hbmNlLmNhcHR1cmVOZXR3b3JrUmVxdWVzdChjYXB0dXJlUmVxdWVzdHMpO1xyXG4gICAgZW50cnkuaW1hZ2VSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfaW1nX3JlcXVlc3QubGVuZ3RoO1xyXG4gICAgZW50cnkuY3NzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2Nzc19yZXF1ZXN0Lmxlbmd0aDtcclxuICAgIGVudHJ5LmpzUmVxdWVzdHMgPSBjYXB0dXJlUmVxdWVzdHNDb3VudC5jYXB0dXJlX2pzX3JlcXVlc3QubGVuZ3RoO1xyXG4gICAgZW50cnkuaW1hZ2VBVEZSZXF1ZXN0cyA9IGNhcHR1cmVSZXF1ZXN0c0NvdW50LmNhcHR1cmVfaW1nYXRmX3JlcXVlc3QubGVuZ3RoO1xyXG4gICAgZW50cnkuaHRtbFNpemUgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTC5sZW5ndGggLyAxMDI0KS50b0ZpeGVkKFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgZW50cnkuaW5saW5lSlNTaXplID0gVHJhY2tQZXJmb3JtYW5jZS5KU1NpemUoKTtcclxuICAgIGVudHJ5LmlubGluZVN0eWxlU2l6ZSA9IFRyYWNrUGVyZm9ybWFuY2UuaW5saW5lU3R5bGVTaXplKFtdKTtcclxuICAgIGVudHJ5LnByb2plY3QgPSBcIlBBQ0VcIjtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaHVuayhhcnJheTogYW55W10sIHNpemU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzLCBpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggJSBzaXplID09PSAwKSB7XHJcbiAgICAgICAgcmVzLnB1c2goW10pO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc1tyZXMubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sIFtdKTtcclxuICB9XHJcbiAgcXVldWVkRW50cmllczogYW55W107XHJcbiAgbG9jYXRpb25JbmZvOiBhbnk7XHJcbiAgYmxvY2tpbmdKU1JlcXVlc3RzOiBhbnk7XHJcbiAgYmxvY2tpbmdDU1NSZXF1ZXN0czogYW55O1xyXG4gIG9wdGlvbnM6IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucztcclxuICBpbnRlcnZhbElkOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3Ioe1xyXG4gICAgZW52LFxyXG4gICAgdHJhY2tVcmwgPSBlbnYgPT0gXCJxYVwiXHJcbiAgICAgID8gXCJodHRwOi8vMTcyLjE2LjEyLjQ1OjMwMDEvcnV4L3dyaXRlUGVyZm9tYW5jZU1ldHJpY3NcIlxyXG4gICAgICA6IFwiaHR0cDovLzU0LjE1My4xMS4yMzM6MzAwMS9ydXgvd3JpdGVQZXJmb21hbmNlTWV0cmljc1wiLFxyXG4gICAgdGhyZXNob2xkID0gMCxcclxuICAgIGJhdGNoU2l6ZSA9IDUwLFxyXG4gICAgZXhjbHVkZUtleXMgPSBbXCJuZXh0SG9wUHJvdG9jb2xcIiwgXCJpbml0aWF0b3JUeXBlXCJdLFxyXG4gICAgaW5jbHVkZUhvc3RzID0gW10sXHJcbiAgICBhcHBsaWNhdGlvbklkLFxyXG4gIH06IElUcmFja1BlcmZvcm1hbmNlT3B0aW9ucykge1xyXG4gICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XHJcbiAgICB0aGlzLmxvY2F0aW9uSW5mbyA9IHt9O1xyXG4gICAgdGhpcy5ibG9ja2luZ0pTUmVxdWVzdHMgPSBbXTtcclxuICAgIHRoaXMuYmxvY2tpbmdDU1NSZXF1ZXN0cyA9IFtdO1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICB0cmFja1VybCxcclxuICAgICAgZW52LFxyXG4gICAgICB0aHJlc2hvbGQsXHJcbiAgICAgIGJhdGNoU2l6ZSxcclxuICAgICAgZXhjbHVkZUtleXMsXHJcbiAgICAgIGluY2x1ZGVIb3N0cyxcclxuICAgICAgYXBwbGljYXRpb25JZCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKFwicGVyZm9ybWFuY2VcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgaWYgKFwiUGVyZm9ybWFuY2VPYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgIGNvbnN0IHBlcmZPYnNlcnZlciA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChsaXN0LCBvYmopID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRW50cmllcyhsaXN0LmdldEVudHJpZXMoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBlcmZPYnNlcnZlci5vYnNlcnZlKHtcclxuICAgICAgICAgIGVudHJ5VHlwZXM6IFtcInJlc291cmNlXCJdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRvLURvXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5pbmFjdGl2aXR5VGltZSgwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uSW5mbyA9IGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICBhd2FpdCBUcmFja1BlcmZvcm1hbmNlLmJsb2NrZWRKU1JlcXVlc3QoW10sIHRoaXMpO1xyXG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuYmxvY2tlZENTU1JlcXVlc3QoW10sIHRoaXMpO1xyXG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0Zmlyc3RDb250ZW50RnVsbFBhaW50KHRoaXMpO1xyXG4gICAgICAgIGF3YWl0IFRyYWNrUGVyZm9ybWFuY2UuZ2V0bGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFbnRyaWVzKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpKTtcclxuICAgICAgICBUcmFja1BlcmZvcm1hbmNlLmludGVyYWN0aW9uTWV0cml4KHRoaXMpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyB1cCBzZXRJbnRlcnZhbCB0byBwdXNoIHRyYWNrIGRhdGFcIik7XHJcbiAgICB0aGlzLmludGVydmFsSWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnF1ZXVlZEVudHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5xdWV1ZWRFbnRyaWVzID0gW107XHJcbiAgICAgIH1cclxuICAgIH0sIHRocmVzaG9sZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbnRyaWVzKGVudHJpZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCB7IHRyYWNrVXJsLCBleGNsdWRlS2V5cywgYXBwbGljYXRpb25JZCB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKChlbnRyeSkgPT4gZW50cnkudG9KU09OKCkpO1xyXG4gICAgZW50cmllcyA9IGVudHJpZXMubWFwKFRyYWNrUGVyZm9ybWFuY2UuY29tcHV0ZU1ldHJpY3MpO1xyXG4gICAgaWYgKGV4Y2x1ZGVLZXlzLmxlbmd0aCkge1xyXG4gICAgICBlbnRyaWVzID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudHJ5KS5yZWR1Y2UoKGFjYzogYW55LCBrZXkpID0+IHtcclxuICAgICAgICAgIGlmIChleGNsdWRlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFjY1trZXldID0gZW50cnlba2V5XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucXVldWVkRW50cmllcyA9IHRoaXMucXVldWVkRW50cmllcy5jb25jYXQoZW50cmllcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2VuZFRvU2VydmVyKHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgeyBiYXRjaFNpemUgPSA1MCwgdHJhY2tVcmwsIGFwcGxpY2F0aW9uSWQgfSA9IHNjb3BlLm9wdGlvbnM7XHJcbiAgICBjb25zdCBlbnRyeUNodW5rcyA9IFRyYWNrUGVyZm9ybWFuY2UuY2h1bmsoc2NvcGUucXVldWVkRW50cmllcywgYmF0Y2hTaXplKTtcclxuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB2YXIgbWFpbkVudHJ5Q2h1bmsgPSBlbnRyeUNodW5rc1xyXG4gICAgICAuZmxhdCgpXHJcbiAgICAgIC5maW5kKCh7IG5hbWUgfTogYW55KSA9PiBuYW1lID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIG1haW5FbnRyeUNodW5rID0gbWFpbkVudHJ5Q2h1bmsgPyBtYWluRW50cnlDaHVuayA6IGVudHJ5Q2h1bmtzWzBdWzBdO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuYXBwbGljYXRpb25JZCA9IGFwcGxpY2F0aW9uSWQ7XHJcbiAgICBpZiAoc2NvcGUubG9jYXRpb25JbmZvKSB7XHJcbiAgICAgIG1haW5FbnRyeUNodW5rLmNpdHkgPSBzY29wZS5sb2NhdGlvbkluZm8uY2l0eTtcclxuICAgICAgbWFpbkVudHJ5Q2h1bmsuY291bnRyeSA9IHNjb3BlLmxvY2F0aW9uSW5mby5jb3VudHJ5O1xyXG4gICAgfVxyXG4gICAgbWFpbkVudHJ5Q2h1bmsuYmxvY2tpbmdKU1JlcXVlc3RzID0gc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzLmxlbmd0aDtcclxuICAgIG1haW5FbnRyeUNodW5rLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBzY29wZS5ibG9ja2luZ0NTU1JlcXVlc3RzLmxlbmd0aDtcclxuICAgIG1haW5FbnRyeUNodW5rLmludGVyYWN0aW9uVGltZSA9IHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UaW1lO1xyXG4gICAgbWFpbkVudHJ5Q2h1bmsuaW50ZXJhY3Rpb25UeXBlID0gc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblR5cGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5pbnRlcmFjdGlvbkVsZW1lbnQgPVxyXG4gICAgICBzY29wZS5xdWV1ZWRFbnRyaWVzWzBdLmludGVyYWN0aW9uRWxlbWVudDtcclxuICAgIG1haW5FbnRyeUNodW5rLmZpcnN0Q29udGVudEZ1bGxQYWludCA9IHNjb3BlLmZpcnN0Q29udGVudEZ1bGxQYWludDtcclxuICAgIG1haW5FbnRyeUNodW5rLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gc2NvcGUubGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQ7XHJcbiAgICBtYWluRW50cnlDaHVuay5wYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgIG1haW5FbnRyeUNodW5rLmZsYWdzID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICBtYWluRW50cnlDaHVuay5maXJzdENQVUlkbGUgPSBzY29wZS5maXJzdENQVUlkbGU7XHJcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmZXRjaCh0cmFja1VybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWFpbkVudHJ5Q2h1bmspLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgdGhpcy5pbnRlcnZhbElkID0gMDtcclxuICB9XHJcblxyXG4gIC8vIEdldCBkZXZpY2UgdHlwZVxyXG4gIHN0YXRpYyBnZXREZXZpY2VUeXBlKCk6IGFueSB7XHJcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBpZiAoLyh0YWJsZXR8aXBhZHxwbGF5Ym9va3xzaWxrKXwoYW5kcm9pZCg/IS4qbW9iaSkpL2kudGVzdCh1YSkpIHtcclxuICAgICAgcmV0dXJuIFwidGFibGV0XCI7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIC9Nb2JpbGV8aVAoaG9uZXxvZCl8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlfEtpbmRsZXxTaWxrLUFjY2VsZXJhdGVkfChocHd8d2ViKU9TfE9wZXJhIE0ob2JpfGluaSkvLnRlc3QoXHJcbiAgICAgICAgdWFcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBcIm1vYmlsZVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiZGVza3RvcFwiO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IE9TXHJcbiAgc3RhdGljIGdldE9TKCk6IGFueSB7XHJcbiAgICB2YXIgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQsXHJcbiAgICAgIHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSxcclxuICAgICAgbWFjb3NQbGF0Zm9ybXMgPSBbXCJNYWNpbnRvc2hcIiwgXCJNYWNJbnRlbFwiLCBcIk1hY1BQQ1wiLCBcIk1hYzY4S1wiXSxcclxuICAgICAgd2luZG93c1BsYXRmb3JtcyA9IFtcIldpbjMyXCIsIFwiV2luNjRcIiwgXCJXaW5kb3dzXCIsIFwiV2luQ0VcIl0sXHJcbiAgICAgIGlvc1BsYXRmb3JtcyA9IFtcImlQaG9uZVwiLCBcImlQYWRcIiwgXCJpUG9kXCJdLFxyXG4gICAgICBvcyA9IG51bGw7XHJcblxyXG4gICAgaWYgKG1hY29zUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xyXG4gICAgICBvcyA9IFwiTWFjIE9TXCI7XHJcbiAgICB9IGVsc2UgaWYgKGlvc1BsYXRmb3Jtcy5pbmRleE9mKHBsYXRmb3JtKSAhPT0gLTEpIHtcclxuICAgICAgb3MgPSBcImlPU1wiO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3dzUGxhdGZvcm1zLmluZGV4T2YocGxhdGZvcm0pICE9PSAtMSkge1xyXG4gICAgICBvcyA9IFwiV2luZG93c1wiO1xyXG4gICAgfSBlbHNlIGlmICgvQW5kcm9pZC8udGVzdCh1c2VyQWdlbnQpKSB7XHJcbiAgICAgIG9zID0gXCJBbmRyb2lkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCFvcyAmJiAvTGludXgvLnRlc3QocGxhdGZvcm0pKSB7XHJcbiAgICAgIG9zID0gXCJMaW51eFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvcztcclxuICB9XHJcbiAgc3RhdGljIGNhcHR1cmVOZXR3b3JrUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnlbXSk6IGFueSB7XHJcbiAgICB2YXIgY2FwdHVyZV9qc19yZXF1ZXN0ID0gW107XHJcbiAgICB2YXIgY2FwdHVyZV9jc3NfcmVxdWVzdCA9IFtdO1xyXG4gICAgdmFyIGNhcHR1cmVfaW1nX3JlcXVlc3QgPSBbXTtcclxuICAgIHZhciBjYXB0dXJlX2ltZ2F0Zl9yZXF1ZXN0ID0gW107XHJcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJzY3JpcHRcIikge1xyXG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcImNzc1wiKSB7XHJcbiAgICAgICAgY2FwdHVyZV9jc3NfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcImltZ1wiKSB7XHJcbiAgICAgICAgY2FwdHVyZV9pbWdfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY2FwdHVyZV9yZXNvdXJjZVtpXS5uYW1lLnNwbGl0KC9bIz9dLylbMF0uc3BsaXQoXCIuXCIpLnBvcCgpLnRyaW0oKSA9PVxyXG4gICAgICAgICAgXCJhdGZcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXB0dXJlX2pzX3JlcXVlc3QsXHJcbiAgICAgIGNhcHR1cmVfY3NzX3JlcXVlc3QsXHJcbiAgICAgIGNhcHR1cmVfaW1nX3JlcXVlc3QsXHJcbiAgICAgIGNhcHR1cmVfaW1nYXRmX3JlcXVlc3QsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGF2Z0RPTURlcHRoKHRyYWNrZXI6IGFueSk6IGFueSB7XHJcbiAgICB2YXIgZGVwdGggPSAwO1xyXG4gICAgdmFyIHByZXZOb2RlID0gMDtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIikpLmZvckVhY2goKG5vZGU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXRyYWNrZXJbbm9kZS50YWdOYW1lXSkgdHJhY2tlcltub2RlLnRhZ05hbWVdID0gMTtcclxuICAgICAgZWxzZSB0cmFja2VyW25vZGUudGFnTmFtZV0rKztcclxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPSBwcmV2Tm9kZSkgZGVwdGgrKztcclxuICAgICAgcHJldk5vZGUgPSBub2RlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGVwdGggLyAyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldGZpcnN0Q29udGVudEZ1bGxQYWludChzY29wZTogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHBhaW50VGltaW5ncyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJwYWludFwiKTtcclxuICAgIGNvbnN0IGZpcnN0Q29udGVudEZ1bGxQYWludCA9IHBhaW50VGltaW5ncy5maW5kKFxyXG4gICAgICAoeyBuYW1lIH0pID0+IG5hbWUgPT09IFwiZmlyc3QtY29udGVudGZ1bC1wYWludFwiXHJcbiAgICApO1xyXG4gICAgc2NvcGUuZmlyc3RDb250ZW50RnVsbFBhaW50ID0gZmlyc3RDb250ZW50RnVsbFBhaW50XHJcbiAgICAgID8gbmV3IERhdGUoZmlyc3RDb250ZW50RnVsbFBhaW50LnN0YXJ0VGltZSAqIDEwMDApLmdldFNlY29uZHMoKVxyXG4gICAgICA6IDA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0bGFyZ2VzdENvbnRlbnRGdWxsUGFpbnQoc2NvcGU6IGFueSk6IGFueSB7XHJcbiAgICBuZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZW50cnlMaXN0KSA9PiB7XHJcbiAgICAgIHZhciBsY3AgPSBlbnRyeUxpc3QuZ2V0RW50cmllcygpO1xyXG4gICAgICBpZiAobGNwLmxlbmd0aCkge1xyXG4gICAgICAgIHNjb3BlLmxhcmdlc3RDb250ZW50RnVsbFBhaW50ID0gbGNwW2xjcC5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgPyBuZXcgRGF0ZShsY3BbbGNwLmxlbmd0aCAtIDFdLnN0YXJ0VGltZSAqIDEwMDApLmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgOiAwO1xyXG4gICAgICB9XHJcbiAgICB9KS5vYnNlcnZlKHsgdHlwZTogXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIiwgYnVmZmVyZWQ6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0TG9jYXRpb24oKTogYW55IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnRlcmFjdGlvbk1ldHJpeChzY29wZTogYW55KTogYW55IHtcclxuICAgIGxldCBldmVudHMgPSBbXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgXCJzY3JvbGxcIixcclxuICAgICAgXCJrZXlwcmVzc1wiLFxyXG4gICAgICBcIktleWRvd25cIixcclxuICAgICAgLy8gXCJtb3VzZW92ZXJcIixcclxuICAgICAgLy8gXCJtb3VzZW91dFwiLFxyXG4gICAgICAvLyBcIm1vdXNlZG93blwiLFxyXG4gICAgICAvLyBcIm1vdXNldXBcIixcclxuICAgICAgXCJjaGFuZ2VcIixcclxuICAgICAgXCJibHVyXCIsXHJcbiAgICAgIFwic3VibWl0XCIsXHJcbiAgICAgIFwidW5sb2FkXCIsXHJcbiAgICAgIFwicmVzaXplXCIsXHJcbiAgICBdO1xyXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWUgPSAwO1xyXG4gICAgY29uc3QgZm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICBzdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGludGVyYWN0aW9uVGltZSA9IGZ1bmN0aW9uIChldmVudDogYW55KSB7XHJcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBzcGVudFRpbWUgPSBlbmREYXRlLmdldFRpbWUoKSAtIHN0YXJ0RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgIGVsYXBzZWRUaW1lICs9IHNwZW50VGltZTtcclxuICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5pbnRlcmFjdGlvblRpbWUgPSBuZXcgRGF0ZShcclxuICAgICAgICBlbGFwc2VkVGltZSAqIDEwMDBcclxuICAgICAgKS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25UeXBlID0gZXZlbnQudHlwZTtcclxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJjbGlja1wiKSB7XHJcbiAgICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS5wYWdlVVJMID1cclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgc2NvcGUucXVldWVkRW50cmllc1swXS51cmxQYXRoID1cclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHNjb3BlLnF1ZXVlZEVudHJpZXNbMF0uaW50ZXJhY3Rpb25FbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZTtcclxuICAgICAgVHJhY2tQZXJmb3JtYW5jZS5zZW5kVG9TZXJ2ZXIoc2NvcGUpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZvY3VzKTtcclxuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudFR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBpbnRlcmFjdGlvblRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgSlNTaXplKCk6IGFueSB7XHJcbiAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghc2NyaXB0c1tpXS5zcmMpIGNvbnRlbnQgKz0gc2NyaXB0c1tpXS5pbm5lckhUTUw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEJsb2IoW2NvbnRlbnRdKS5zaXplO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRpbWVzdGFtcFRvU2VjKHN0YXJ0OiBhbnksIGVuZDogYW55LCBhY3Rpb246IEJvb2xlYW4pOiBhbnkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKChzdGFydCAtIGVuZCkgKiAxMDAwKS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGltZXN0YW1wVG9NaWxsaVNlYyhzdGFydDogYW55LCBlbmQ6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gKChzdGFydCAtIGVuZCkgLyAxMDAwKSAqIDEwMDA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5saW5lU3R5bGVTaXplKGlubGluZVN0eWxlU2l6ZTogYW55KTogYW55IHtcclxuICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgIHZhciBzdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3N0eWxlXVwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlubGluZVN0eWxlU2l6ZSA9IHN0eWxlc1tpXS5hdHRyaWJ1dGVzO1xyXG4gICAgICBpZiAoaW5saW5lU3R5bGVTaXplLnN0eWxlKSBjb250ZW50ICs9IGlubGluZVN0eWxlU2l6ZS5zdHlsZS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQmxvYihbY29udGVudF0pLnNpemU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmxvY2tlZEpTUmVxdWVzdChjYXB0dXJlX3Jlc291cmNlOiBhbnksIHNjb3BlOiBhbnkpOiBhbnkge1xyXG4gICAgdmFyIGNhcHR1cmVfanNfcmVxdWVzdCA9IFtdO1xyXG4gICAgc2NvcGUuYmxvY2tpbmdKU1JlcXVlc3RzID0gW107XHJcbiAgICBjYXB0dXJlX3Jlc291cmNlID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcInJlc291cmNlXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXB0dXJlX3Jlc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChjYXB0dXJlX3Jlc291cmNlW2ldLmluaXRpYXRvclR5cGUgPT0gXCJzY3JpcHRcIilcclxuICAgICAgICBjYXB0dXJlX2pzX3JlcXVlc3QucHVzaChjYXB0dXJlX3Jlc291cmNlW2ldLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gbWFwIGV2ZXJ5IHVybCB0byB0aGUgcHJvbWlzZSBvZiB0aGUgZmV0Y2hcclxuICAgIGxldCByZXF1ZXN0cyA9IGNhcHR1cmVfanNfcmVxdWVzdC5tYXAoKHVybCkgPT4gZmV0Y2godXJsKSk7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIChQcm9taXNlIGFzIGFueSkuYWxsU2V0dGxlZChyZXF1ZXN0cykudGhlbigocmVzdWx0czogYW55KSA9PiB7XHJcbiAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0OiBhbnksIG51bTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gXCJyZWplY3RlZFwiKSB7XHJcbiAgICAgICAgICBzY29wZS5ibG9ja2luZ0pTUmVxdWVzdHMucHVzaChyZXF1ZXN0c1tudW1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmxvY2tlZENTU1JlcXVlc3QoY2FwdHVyZV9yZXNvdXJjZTogYW55LCBzY29wZTogYW55KTogYW55IHtcclxuICAgIHZhciBjYXB0dXJlX2pzX3JlcXVlc3QgPSBbXTtcclxuICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMgPSBbXTtcclxuICAgIGNhcHR1cmVfcmVzb3VyY2UgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwicmVzb3VyY2VcIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcHR1cmVfcmVzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGNhcHR1cmVfcmVzb3VyY2VbaV0uaW5pdGlhdG9yVHlwZSA9PSBcImNzc1wiKVxyXG4gICAgICAgIGNhcHR1cmVfanNfcmVxdWVzdC5wdXNoKGNhcHR1cmVfcmVzb3VyY2VbaV0ubmFtZSk7XHJcbiAgICB9XHJcbiAgICAvLyBtYXAgZXZlcnkgdXJsIHRvIHRoZSBwcm9taXNlIG9mIHRoZSBmZXRjaFxyXG4gICAgbGV0IHJlcXVlc3RzID0gY2FwdHVyZV9qc19yZXF1ZXN0Lm1hcCgodXJsKSA9PiBmZXRjaCh1cmwpKTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgKFByb21pc2UgYXMgYW55KS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzOiBhbnkpID0+IHtcclxuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQ6IGFueSwgbnVtOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSBcInJlamVjdGVkXCIpIHtcclxuICAgICAgICAgIHNjb3BlLmJsb2NraW5nQ1NTUmVxdWVzdHMucHVzaChyZXF1ZXN0c1tudW1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5hY3Rpdml0eVRpbWUodGltZTogYW55LCBzY29wZTogYW55KTogYW55IHtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSByZXNldFRpbWVyO1xyXG4gICAgLy8gRE9NIEV2ZW50c1xyXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSByZXNldFRpbWVyO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gcmVzZXRUaW1lcjtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZSk7XHJcbiAgICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHsgfSwgMzAwMCk7XHJcbiAgICAgIHNjb3BlLmZpcnN0Q1BVSWRsZSA9IG5ldyBEYXRlKHRpbWUgKiAxMDAwKS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIC8vIDEwMDAgbWlsbGlzZWNvbmRzID0gMSBzZWNvbmRcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgcmVzZXRUaW1lciwgdHJ1ZSk7XHJcbiAgICB2YXIgZXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2Vtb3ZlXCIsIFwia2V5cHJlc3NcIiwgXCJzY3JvbGxcIiwgXCJ0b3VjaHN0YXJ0XCJdO1xyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCByZXNldFRpbWVyLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJyb3dzZXIoKSB7XHJcbiAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChyZWdleHA6IFJlZ0V4cCkge1xyXG4gICAgICByZXR1cm4gcmVnZXhwLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfTtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICBjYXNlIHRlc3QoL2VkZy9pKTpcclxuICAgICAgICByZXR1cm4gXCJNaWNyb3NvZnQgRWRnZVwiO1xyXG4gICAgICBjYXNlIHRlc3QoL3RyaWRlbnQvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvZmlyZWZveHxmeGlvcy9pKTpcclxuICAgICAgICByZXR1cm4gXCJNb3ppbGxhIEZpcmVmb3hcIjtcclxuICAgICAgY2FzZSB0ZXN0KC9vcHJcXC8vaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiT3BlcmFcIjtcclxuICAgICAgY2FzZSB0ZXN0KC91Y2Jyb3dzZXIvaSk6XHJcbiAgICAgICAgcmV0dXJuIFwiVUMgQnJvd3NlclwiO1xyXG4gICAgICBjYXNlIHRlc3QoL3NhbXN1bmdicm93c2VyL2kpOlxyXG4gICAgICAgIHJldHVybiBcIlNhbXN1bmcgQnJvd3NlclwiO1xyXG4gICAgICBjYXNlIHRlc3QoL2Nocm9tZXxjaHJvbWl1bXxjcmlvcy9pKTpcclxuICAgICAgICByZXR1cm4gXCJHb29nbGUgQ2hyb21lXCI7XHJcbiAgICAgIGNhc2UgdGVzdCgvc2FmYXJpL2kpOlxyXG4gICAgICAgIHJldHVybiBcIkFwcGxlIFNhZmFyaVwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIk90aGVyXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgYSBnbG9iYWwgdmFyaWFibGUgdG8gYWNjZXNzIGxhdGVyXHJcbih3aW5kb3cgYXMgYW55KS5UcmFja1BlcmZvcm1hbmNlID0gVHJhY2tQZXJmb3JtYW5jZTtcclxuZXhwb3J0IGRlZmF1bHQgVHJhY2tQZXJmb3JtYW5jZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==