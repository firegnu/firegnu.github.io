function _defineProperty(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {value: a, enumerable: !0, configurable: !0, writable: !0}) : e[t] = a, e
}

function _objectWithoutProperties(e, t) {
  var a = {};
  for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
  return a
}

function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
    return a
  }
  return Array.from(e)
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function UtilLDMC() {
  function e(t, a) {
    if ("function" != typeof t || null != a && "function" != typeof a) throw new TypeError("Expected a function");
    var i = function e() {
      for (var i = arguments.length, n = Array(i), o = 0; o < i; o++) n[o] = arguments[o];
      var r = a ? a.apply(this, n) : n[0], s = e.cache;
      if (s.has(r)) return s.get(r);
      var d = t.apply(this, n);
      return e.cache = s.set(r, d) || s, d
    };
    return i.cache = new (e.Cache || Map), i
  }

  function t(e) {
    var t = Object.prototype.toString;
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : t.call(e)
  }

  function a(e) {
    var a = void 0 === e ? "undefined" : _typeof(e);
    return "symbol" == a || "object" == a && null != e && "[object Symbol]" == t(e)
  }

  function i(e, t) {
    var i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    if (Array.isArray(e)) return !1;
    var o = void 0 === e ? "undefined" : _typeof(e);
    return !("number" != o && "boolean" != o && null != e && !a(e)) || (n.test(e) || !i.test(e) || null != t && e in Object(t))
  }

  function n(e) {
    if ("string" == typeof e || a(e)) return e;
    var t = "" + e;
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
  }

  function o(e, t) {
    return Array.isArray(e) ? e : i(e, t) ? [e] : l(e)
  }

  function r(e, t) {
    t = o(t, e);
    for (var a = 0, i = t.length; null != e && a < i;) e = e[n(t[a++])];
    return a && a == i ? e : void 0
  }

  function s(e, t, a) {
    var i = null == e ? void 0 : r(e, t);
    return void 0 === i ? a : i
  }

  var d = 500, l = function (t) {
    var a = e(t, function (e) {
      var t = a.cache;
      return t.size === d && t.clear(), e
    });
    return a
  }(function (e) {
    var t = ".".charCodeAt(0), a = /\\(\\)?/g,
      i = RegExp("[^.[\\]]+|\\[(?:([^\"'].*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g"),
      n = [];
    return e.charCodeAt(0) === t && n.push(""), e.replace(i, function (e, t, i, o) {
      var r = e;
      i ? r = o.replace(a, "$1") : t && (r = t.trim()), n.push(r)
    }), n
  });
  return {get: s}
}

function UtilLDMX() {
  return new UtilLDMC
}

function UtilDate() {
  Date.prototype.addMinutes = function (e) {
    var t = new Date(this.getTime());
    return new Date(t.getTime() + 1e3 * e)
  }, Date.prototype.addMinutes = function (e) {
    var t = new Date(this.getTime());
    return new Date(t.getTime() + 6e4 * e)
  }, Date.prototype.addHours = function (e) {
    var t = new Date(this.getTime());
    return new Date(t.getTime() + 60 * e * 6e4)
  }, Date.prototype.addDays = function (e) {
    var t = new Date(this.getTime());
    return new Date(t.getTime() + 1440 * e * 6e4)
  }
}

function getLanguageFromMap(e) {
  _console.log("%c CONVERT => getLanguageFromMap - " + e, "background: #ccc; color: #333");
  var t = [];
  for (var a in lang_code_to_language) t[a.toUpperCase()] = lang_code_to_language[a];
  return t.hasOwnProperty((e + "").toUpperCase()) && t[(e + "").toUpperCase()] || e && t[(e + "").toUpperCase().replace("-", "_")] || null
}

function VmaxUserData() {
  this.setLoginId = function () {
    __vmax_data.lid = arguments && arguments[0]
  }, this.setAge = function () {
    __vmax_data.ag = arguments && arguments[0]
  }, this.setEmail = function () {
    __vmax_data.em = arguments && arguments[0]
  }, this.setCity = function () {
    __vmax_data.ci = arguments && arguments[0]
  }, this.setGender = function () {
    __vmax_data.gn = arguments && arguments[0]
  }, this.setPincode = function () {
    arguments && arguments[0] && "" != arguments[0].replace(/^\s+|\s+$/g, "") && (__vmax_data.pin = arguments[0].replace(/^\s+|\s+$/g, ""))
  }, this.fetchLocation = function () {
    var e = function (e) {
      var t = e.coords;
      __vmax_data.lat = t.latitude, __vmax_data.lon = t.longitude, __vmax_data.accu = t.accuracy, __vmax_data.gts = e.timestamp, t.latitude && t.latitude && t.accuracy && e.timestamp && (_console.log("Required information fetch using fetchLocation API"), navigator.geolocation.clearWatch(i));
      var a = {latitude: t.latitude, longitude: t.longitude, accuracy: t.accuracy, timestamp: e.timestamp};
      _console.log("locationInfo using fetchLocation API => " + JSON.stringify(a)), setStorage("locationInfo", a, "local")
    }, t = function (e) {
      _console.debug("Cannot access location. (" + e.code + "): " + e.message)
    }, a = {enableHighAccuracy: !0, timeout: 2e4, maximumAge: 0};
    navigator.geolocation.getCurrentPosition(e, t, a);
    var i = navigator.geolocation.watchPosition(e, t, a)
  }, this.setLocation = function () {
    arguments && "object" == _typeof(arguments[0]) && Object.keys(arguments[0]).length ? (setStorage("locationInfo", arguments[0], "local"), _console.log("locationInfo using setLocation API  => " + JSON.stringify(arguments[0]))) : _console.debug("Error while storing in localStorage")
  }, this.setCustomData = function () {
    var e = arguments && arguments[0];
    if (e && "object" == (void 0 === e ? "undefined" : _typeof(e))) for (var t in e) __vmax_data["ck_" + t] = e[t]
  }, this.setDefaultIDFA = function () {
    VMAX.deviceInfoDefaults.advid = arguments && arguments[0]
  }, this.setDefaultIMSI = function () {
    VMAX.deviceInfoDefaults.imsi = arguments && arguments[0]
  }, this.getIDFA = function () {
    return VMAX.deviceInfo.advid || VMAX.deviceInfoDefaults.advid || sStorage.getLocalAdID() || null
  }, this.setIDFA = function () {
    VMAX.deviceInfoDefaults.advid = arguments && arguments[0]
  }, this.getUID = function () {
    return VMAX.deviceInfo.uid || VMAX.deviceInfoDefaults.uid || sStorage.getLocalUID() || null
  }, this.setUID = function () {
    VMAX.deviceInfoDefaults.uid = arguments && arguments[0]
  }
}

function getXMLAd(e) {
  var t = getStorage(e);
  removeStorage(e);
  var a = t.ad, i = new DOMParser, n = i.parseFromString(a, "text/xml");
  return "VAST" == ("parsererror" != n.documentElement.nodeName && n.documentElement.nodeName) ? (_console.log(t.ad), t.ad) : null
}

function setStorage(e, t, a) {
  return !0 === VMAX.useDataStore ? initDataStore.set(e, t) : ("local" == a || sessionStorage.getItem(CONST.persistentKey) && "1" === sessionStorage.getItem(CONST.persistentKey) ? localStorage.setItem(e, JSON.stringify(t)) : sessionStorage.setItem(e, JSON.stringify(t)), VMAX.adRequestStatus = 4, !0)
}

function getStorage(e, t) {
  return !0 === VMAX.useDataStore ? initDataStore.get(e).then(function (e) {
    return resp = e, resp
  }) : "local" == t || sessionStorage.getItem(CONST.persistentKey) && "1" === sessionStorage.getItem(CONST.persistentKey) ? JSON.parse(localStorage.getItem(e)) || {} : JSON.parse(sessionStorage.getItem(e)) || {}
}

function removeStorage(e, t) {
  if (!0 === VMAX.useDataStore) {
    var a = new initDataStore;
    return JSON.parse(a.get(e)) || {}
  }
  return "local" == t || sessionStorage.getItem(CONST.persistentKey) && "1" === sessionStorage.getItem(CONST.persistentKey) ? localStorage.removeItem(e) : sessionStorage.removeItem(e)
}

function getBPIDFromUIMap() {
  _console.log("Getting getBPIDFromUIMap");
  var e = null, t = getStorage("uimap", "local");
  if (t && Object.keys(t).length > 0) {
    var a = Object.keys(t);
    try {
      e = atob(t.hasOwnProperty(a[0]) && t[a[0]].hasOwnProperty("uid") && t[a[0]].uid)
    } catch (e) {
      return null
    }
  }
  return e
}

function ellipsisText(e, t) {
  return e.length > t ? e.substring(0, t - 3) + "..." : e
}

function getURILocation(e) {
  var t = e.match(/^((app|https?)\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return t && {
    href: e,
    protocol: t[2],
    host: t[3],
    hostname: t[4],
    port: t[5] || "",
    pathname: t[6],
    search: t[7],
    hash: t[8]
  }
}

function initDeviceDetails() {
  isQwertyDevice(), getAppOrientation(), function () {
    function e() {
      try {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection, t = e.type;
        cType = "wifi" == t ? 1 : "cellular" == t && 2
      } catch (e) {
        cType = !1
      }
      return cType
    }

    !function () {
      var t = e();
      t && (__vmax_data.ap = t);
      navigator.connection = {
        type: 'wifi',
        ontypechange: () => {}
      };
      var a = "ontypechange" in navigator.connection ? "typechange" : "change";
      // navigator.connection.addEventListener(a, function (t) {
      //   var a = e();
      //   a && (__vmax_data.ap = a)
      // })
    }(), function () {
      __vmax_data.lc = navigator.language || "", "onlanguagechange" in window && (__vmax_data.lc = navigator.language || "")
    }(), function () {
      sStorage.setMCCMNC() || "mozMobileConnections" in navigator || _console.debug("API not supported for networks!")
    }()
  }()
}

function initAppDetails() {
  VMAX.deviceOrientation = getAppOrientation(), VMAX.fullScreenMode = "p" == VMAX.deviceOrientation && 240 == window.innerWidth && 320 == window.innerHeight || "l" == VMAX.deviceOrientation && 240 == window.innerHeight && 320 == window.innerWidth, _console.debug("App in FullScreen Mode: " + VMAX.fullScreenMode)
}

function initDeviceInfo() {
  CONST.cdnLogger = new CdnLogger("https://jioads.akamaized.net/beacon/kaib.gif?"), CONST.search = ["timestamp", "idfa", "mcc", "mnc"];
  var e = [];
  "function" == typeof navigator.getDataStores && (CONST.fetchMCCMNCTimeout = setTimeout(function () {
    CONST.cdnLogger.editLogDetails(VMAX.deviceInfo.imsi, VMAX.deviceInfo.advid), CONST.cdnLogger.isAllValuePresentInLog(CONST.search) && 0 === isMapValid(VMAX.deviceInfo.imsi) && CONST.cdnLogger.insertBeaconNode()
  }, 4e3), navigator.getDataStores("jio_service_store").then(function (t) {
    if (_console.debug("DataStore Values > ", t), !t.length) return CONST.search = ["timestamp"], void initIdentificationService();
    var a = sStorage.getLocalAdID();
    return t[0].onchange = function () {
      _console.debug("DataStore Changed --\x3e Event!")
    }, e[0] = t[0].get(8).then(function (e) {
      return _console.debug("TRACE: idfa > " + e), sStorage.setLocalAdID(e), {name: "advid", val: e}
    }), e[1] = t[0].get(9).then(function (e) {
      return _console.debug("TRACE: imsi > " + e), {name: "imsi", val: e}
    }), Promise.all(e.map(reflect)).then(function (e) {
      var t = e.filter(function (e) {
        return "resolved" === e.status && void 0 !== e.val
      });
      if (t.length > 0) {
        clearTimeout(CONST.fetchMCCMNCTimeout), CONST.fetchMCCMNCTimeout = null;
        var i = Object.assign.apply(Object, _toConsumableArray(t.map(function (e) {
          return _defineProperty({}, e.name, e.val)
        })));
        _console.log(i), VMAX.deviceInfo = _extends({}, i), _console.log("localStorage Values : " + a + "   :: DataStore Values " + i.advid);
        var n = a != i.advid;
        if (i.hasOwnProperty("imsi") && i.imsi && i.hasOwnProperty("advid") && i.advid && n) {
          VMAX.deviceInfo.hasOwnProperty("uid") && VMAX.deviceInfo.uid && setStorage("uimap", mapBPIDwithIMSI(i.imsi, VMAX.deviceInfo.uid, !1), "local")
        }
      }
      CONST.cdnLogger.editLogDetails(VMAX.deviceInfo.imsi, VMAX.deviceInfo.advid), CONST.cdnLogger.isAllValuePresentInLog(CONST.search) && CONST.cdnLogger.insertBeaconNode(), initIdentificationService(VMAX.deviceInfo.imsi)
    })
  }).catch(function (e) {
    return initIdentificationService(), console.info("Error! DataStores Failed to Initilize... ", e), null
  }))
}

function reflect(e) {
  return e.then(function (e) {
    return {name: e.name, val: e.val, status: "resolved"}
  }, function (e) {
    return {e: e, status: "rejected"}
  })
}

function createPOD(e, t, a) {
  var i = !1, n = !0;
  VMAX.rotateInstreamVideoList.hasOwnProperty(t) && (i = VMAX.rotateInstreamVideoList[t]), VMAX.videoTimerVisibilityList.hasOwnProperty(t) && (n = VMAX.videoTimerVisibilityList[t]);
  var o = {
    adbreakDuration: 1e3 * VMAX.adBreakDuration[t],
    customHandlerFunction: VMAX.customAdBreakFun,
    POD: e,
    placementId: t,
    show: a,
    isHorizontalMode: i,
    isTimerVisiable: n,
    videoContainer: vmaxVast.videoContainer,
    callback: {
      onAdClose: function (e, t, a) {
        removeStorage(e + "_Iscached"), "function" == typeof VMAX.onAdMediaEnd && VMAX.onAdMediaEnd(e, CONST.adUXType[3], t), "function" == typeof VMAX.onAdClose && VMAX.onAdClose(e, a), removeStorage(e), VMAX.show[e] = !1
      }, onAdReady: function (e) {
        "function" == typeof VMAX.onAdReady && (removeStorage(e + "_Iscached"), VMAX.show[e] = !0, VMAX.onAdReady(e, CONST.adUXType[3]))
      }, onAdMediaStart: function (e) {
        "function" == typeof VMAX.onAdMediaStart && VMAX.onAdMediaStart(e, CONST.adUXType[3])
      }, onAdClick: function (e) {
        "function" == typeof VMAX.onAdClick && (VMAX.onAdClick(e, CONST.adUXType[3]), removeStorage(e), VMAX.show[e] = !1)
      }, onAdError: function (e) {
        "function" == typeof VMAX.onAdError && (VMAX.onAdError(e, CONST.adUXType[3]), removeStorage(e))
      }
    }
  };
  VMAX.adBreak = new VmaxAdbreak(o), VMAX.adBreak.readySlot(0)
}

function createNativeMarkup(e, t, a, i, n) {
  _console.debug("createNativeMarkup Started...");
  var o = a.hasOwnProperty("ad_delay") ? a.ad_delay : 0, r = VMAX.parseNativeAdResponse(a, o);
  r.spotId = t, r.runningAdType = a.hasOwnProperty("runningAdType") && a.runningAdType, r["request-id"] = a.hasOwnProperty("request-id") && a["request-id"];
  var s = JSON.parse(e);
  if (s.ctaText = ellipsisText(s.ctaText, 15), setLabels(t, s.ctaText || VMAXICON.CTAicon, VMAXICON.Cancelicon), setTrustedAppAdParams(t, {
    imageIcon: s.imageIcon,
    clickLabel: s.ctaText,
    closeLabel: VMAXICON.Cancelicon
  }), vmaxVast.adObject = r, vmaxVast.hasOwnProperty(t) || (vmaxVast[t] = {}), vmaxVast[t].adObject = r, vmaxVast[t].adObject["adspot-format"] = a["adspot-format"], vmaxVast[t].adObject.isVideo = !(!s.video || "" === s.video || !1 !== VMAX.noVideoMode), a.hasOwnProperty("viewability") && (vmaxVast[t].adObject.viewability = a.viewability), s.video && "" !== s.video && !1 === VMAX.noVideoMode || s.audio && "" !== s.audio) {
    var d = vmaxHelper.parseXML(r.video || r.audio);
    _console.debug("videoXml=", d), vmaxVast.init(), vmaxVast.parseVastAd(d, VMAX.create_native_interstitial_Video, r, void 0, n)
  } else vmaxVast.videoClickUrls = [], VMAX.create_native_interstitial_AD(r, i, n);
  return 1 != i && removeStorage.apply(this, n ? [t, "local"] : [t]), a
}

function createVASTMarkup(e, t, a, i) {
  a.spotId = t;
  var n = vmaxHelper.parseXML(e);
  return vmaxVast.delay = parseInt(adJson.ad_delay), vmaxVast.init(), vmaxVast.hasOwnProperty(t) || (vmaxVast[t] = {}), vmaxVast[t].adObject = a, isRewared(t) ? (vmaxVast.parseVastAd(n, vmaxVast.parseInterstitialVideoAd, a, void 0, i, !0), removeStorage(t)) : "video" == adJson["adspot-format"] ? (VmaxConstant.isPreroll = !0, a.delay = a.hasOwnProperty("ad_delay") ? a.ad_delay : 0, vmaxVast.parseVastAd(n, vmaxVast.createBillboardVastAd, a, void 0, i), removeStorage(t)) : "audio" == adJson["adspot-format"] ? (setLabels(t, VMAXICON.CTAicon, VMAXICON.Cancelicon), a.delay = a.hasOwnProperty("ad_delay") ? a.ad_delay : 0, vmaxVast.parseVastAd(n, vmaxVast.parseInterstitialAudioAd, a, void 0, i), removeStorage(t)) : "daast" == adJson["adspot-format"] ? (setLabels(t, VMAXICON.CTAicon, VMAXICON.Cancelicon), a.delay = a.hasOwnProperty("ad_delay") ? a.ad_delay : 0, vmaxVast.parseVastAd(n, vmaxVast.parseInterstitialAudioAd, a, void 0, i), removeStorage(t)) : vmaxVast.parseVastAd(n, VMAX.create_native_interstitial_Video, a, void 0, i), a
}

function setAdRequestParams(e, t, a) {
  _console.debug("setAdRequestParams", e, t), VMAX.initDelConfig();
  var i = document.querySelector("ins#" + e);
  -1 == VMAX.adplacement.indexOf(e) && VMAX.adplacement.push(e);
  var n = i.getAttribute("data-adspot-key"), o = i.getAttribute("data-test-mode"), r = i.getAttribute("data-source"),
    s = (i.getAttribute("data-refresh-after"), i.getAttribute("id")), d = i.getAttribute("data-setSectionCategory"),
    l = i.getAttribute("data-setPageCategory"), c = i.getAttribute("data-setKeyword"),
    u = i.getAttribute("data-setLanguageOfArticle"), m = i.getAttribute("data-setBackgroundColor"),
    p = i.getAttribute("data-sim"), g = i.getAttribute("data-setCustomData");
  p = function () {
    return "frame" == p ? 3 : "noframe" == p && 4
  }(), i.setAttribute("data-loading", "loading"), getAdResponse(n, o, r, s, t, d, l, c, u, g, m, p, a), _console.debug("getVMAXAdRequest: " + n + "." + loadingScale())
}

function getInsTagParameters(e) {
  var t = document.querySelector("ins#" + e);
  -1 == VMAX.adplacement.indexOf(e) && VMAX.adplacement.push(e);
  var a = {
    adspot: t.getAttribute("data-adspot-key"),
    source: t.getAttribute("data-source"),
    tm: t.getAttribute("data-test-mode"),
    spotId: t.getAttribute("id"),
    ck_scat: t.getAttribute("data-setSectionCategory"),
    ck_pcat: t.getAttribute("data-setPageCategory"),
    sk: t.getAttribute("data-setKeyword"),
    ck_loa: t.getAttribute("data-setLanguageOfArticle"),
    CustomData: t.getAttribute("data-setCustomData"),
    sim: t.getAttribute("data-sim")
  };
  if (a.sim = function () {
    return "frame" == a.sim ? 3 : "noframe" == a.sim && 4
  }(), t.setAttribute("data-loading", "loading"), null !== a.CustomData && a.CustomData.length) {
    var i = JSON.parse(a.CustomData);
    for (var n in i) i.hasOwnProperty(n) && (a["ck_" + n] = i[n]);
    delete a.CustomData
  }
  return this.clean = function (e) {
    for (var t in e) null !== e[t] && void 0 !== e[t] && "" !== e[t] || delete e[t];
    return e
  }, this.clean(a)
}

function getAdResponse(e, t, a, i, n, o, r, s, d, l, c, u, m) {
  function p() {
    if (CONST.appConfig.get({type: "ADSPOT", value: e})) {
      getAdStatus(i, "STATE_AD_REQUESTED");
      var t = CONST.multiAdStorage.get({type: "VR", value: e, defaultValue: ""}),
        a = CONST.appConfig.get({type: "VR", value: e}), o = {};
      if (o[e] = 0, t === a) _console.log("%c" + e + " Vr is Same ", "background: #0F0; color: #000"), AD_PARSER.multiAd(e, !1, i, n, c, m); else {
        _console.log("%c" + e + " Vr is Different ", "background: #00F; color: #FFF"), _console.log("THROTTLE Index >>>> weightIndex Object " + (sessionStorage["throttle-level"] || JSON.stringify(o)));
        var r = CONST.throttle.getDeliveryURI();
        _console.log("%cSelected Domain " + (r || '""'), "background: #222; color: #bada55"), "" == r ? (CONST.throttle.nextWLIndex(), AD_PARSER.backUpAd(e, !1, i, n, c, m)) : (A = "https://" + r + "/getad" + A.split("getad")[1], g())
      }
    } else g()
  }

  function g() {
    if (y = Object.assign(v, B, f), _console.log(y), t && (y.tm = 1), b && (y.sh = b), S && (y.sw = S), V && (y.tz = V), x && (y.lat = x), k && (y.lon = k), T && (y.accu = T), I && (y.gts = I), O && (y.ap = O), M && (y.mn = M), E && (y.av = E), L && (y.ck_scat = L), N && (y.ck_pcat = N), X && (y.sk = X), R && (y.ck_loa = R), C && (y.cl = C), _ && (y.ma = _), u && (y.sim = u), vmaxHelper.isAdspotMultiAd(e) ? (_console.debug("%cMultiAd Enable", "background: #222; color: #bada55"), y.maa = 1, vmaxHelper.isCSTEnabled(e) && (y.te = 1), vmaxHelper.isAPEEnabled(e) && (y.ape = 1)) : _console.debug("%cMultiAd Disable", "background: #222; color: #bada55"), w) {
      var a = JSON.parse(w);
      for (var o in a) a.hasOwnProperty(o) && (y["ck_" + o] = a[o])
    }
    if (0 !== Object.keys(__vmax_data).length) for (var r in __vmax_data) __vmax_data.hasOwnProperty(r) && __vmax_data[r] && (y[r] = __vmax_data[r]);
    VMAX.TestMode = t ? "true" : "false", VMAX.setAdRequestParams = 2, m ? getAdStatus(i, "STATE_AD_REQUESTED", "local") : getAdStatus(i, "STATE_AD_REQUESTED"), resp = XMLHTTP.sendRequest(A, VMAX.rCallback, y, i, n, c, m), _console.debug(A, y), _console.debug(resp)
  }

  console.info("getAdResponse", arguments), _console.log("settings", navigator.mozSettings);
  var v = {adspot: e, source: a, ua: navigator.userAgent, vr: CONST.APIVersion, tpl: 1, ve: 2};
  if (VMAX.adBreakDuration[i] <= 2) {
    return void ("function" == typeof VMAX.onAdError && VMAX.onAdError(i, "Ad Request not initiated : invalid ad break set, should be grater than 2 seconds"))
  }
  var h = getStorage("locationInfo", "local");
  VMAX.deviceOrientation && (v.ao = getAppOrientation()), null !== VMAX.deviceType && VMAX.deviceType >= 0 && (v.qk = VMAX.deviceType);
  var f = {};
  CONST.hasOwnProperty("adNetworkMap") && Object.keys(CONST.adNetworkMap).length > 0 && (f.se = Object.values(CONST.adNetworkMap).join(","));
  var A = void 0, y = {};
  t = "undefined" !== t && "true" === t && t;
  window.location.hostname;
  a = void 0 !== VMAX.appBundleid && "" !== VMAX.appBundleid ? VMAX.appBundleid : a;
  var C = ("" !== VMAX.Langugae && VMAX.Langugae, "" !== getContentLanguage() && getContentLanguage()),
    V = (new Date).toString();
  _console.log("Timezone", V);
  var _ = !1, b = "" !== VMAX.ScreenHeight && VMAX.ScreenHeight, S = "" !== VMAX.ScreenWidth && VMAX.ScreenWidth,
    x = !(!h.hasOwnProperty("latitude") || "" === h.latitude) && h.latitude,
    k = !(!h.hasOwnProperty("longitude") || "" === h.longitude) && h.longitude,
    T = !(!h.hasOwnProperty("accuracy") || "" === h.accuracy) && h.accuracy,
    I = !(!h.hasOwnProperty("timestamp") || "" === h.timestamp) && h.timestamp, O = "" !== VMAX.cellAPN && VMAX.cellAPN,
    M = "" !== VMAX.appName && VMAX.appName, E = "" !== VMAX.appVersion && VMAX.appVersion,
    w = ("" !== VMAX.appBundleid && VMAX.appBundleid, "" !== l && l);
  if ("" !== o && null !== o) var P = patnerMatch(o, "section");
  if ("" !== r && null !== r) var D = patnerMatch(r, "page");
  var L = "" !== o && null !== o && (P.length > 0 && P), N = "" !== r && null !== r && (D.length > 0 && D),
    X = "" !== s && s, R = "" !== d && d, B = {}, U = sStorage.getLocalAdID(), j = sStorage.getLocalUID();
  for (var H in VMAX.deviceInfoDefaults) "advid" === H && _console.debug("Ad ID values => Data Storage >> " + VMAX.deviceInfo.advid + " | Local Storage >> " + U), "uid" === H && _console.debug("BP ID values => Data Storage >> " + VMAX.deviceInfo.uid + " | Local Storage >> " + j), (VMAX.deviceInfo.hasOwnProperty(H) && VMAX.deviceInfo[H] || "advid" === H && U) && "imsi" !== H ? B[H] = VMAX.deviceInfo[H] || U : (VMAX.deviceInfo.hasOwnProperty(H) && VMAX.deviceInfo[H] || "uid" === H && j) && "imsi" !== H ? B[H] = VMAX.deviceInfo[H] || j : VMAX.deviceInfoDefaults.hasOwnProperty(H) && VMAX.deviceInfoDefaults[H] && "imsi" !== H && (B[H] = VMAX.deviceInfoDefaults[H]);
  A = VMAX.DeliveryAPI.replace("<zoneid>", e), A = A.replace("<source>", encodeURIComponent(a));
  var F = {platform: "kai", app: VMAX.APP_NAME, vr: CONST.APIVersion, av: VMAX.APP_VERSION, osv: ""};
  sStorage.setMCCMNC(), CONST.throttle = new VmaxRequestThrottle(e), CONST.appConfig.init(F, p, g)
}

function getAdContent(e, t, a) {
  if ("" === e.responseText) return void AdError(a, "1001");
  try {
    var i = JSON.parse(e.responseText);
    return i.hasOwnProperty("vuid"), "000" == i.status || "001" == i.status ? (t && (i.adspotkey = t), i) : ""
  } catch (e) {
    return ""
  }
}

function getHeaderByName(e, t, a) {
  var i = "";
  try {
    i = e.getResponseHeader(t)
  } catch (e) {
    _console.log(e)
  }
  return i
}

function obj2urlencodedString(e) {
  var t = [];
  if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
    for (var a in e) e.hasOwnProperty(a) && t.push(a + "=" + e[a]);
    return encodeURI(t.join("&"))
  }
  return ""
}

function checkMode() {
  var e = !1, t = document.querySelector("var.adsbyvmax"), a = null !== t ? t.dataset : null;
  return a && a.hasOwnProperty("debugSet") && "true" === a.debugSet && a.hasOwnProperty("deliveryUri") && "" !== a.deliveryUri && (VMAX.DeliveryAPI = VMAX.DeliveryAPI.replace(reqDomain, a.deliveryUri), e = !0), !1 === VMAX.debugMode && (_console.debug = function () {
  }, _console.log = function () {
  }), e
}

function loadingScale() {
  return "undefined" == typeof timerStart && (timerStart = Date.now() || 0), t = Date.now() - timerStart, "\nLoaded in:\t" + (t / 1e3 || 0).toFixed(3) + "s."
}

function getReferenceNodeById(e) {
  return document.querySelector("#" + e)
}

function setActions(e) {
  e && setStorage(e + "_noActions", !0)
}

function getActions(e) {
  if (e) {
    var t = !0, a = getStorage(e + "_noActions");
    return (VMAX.hideVideoControls || isRewared(e)) && !0 === a && (t = !1), t
  }
}

function resetActions(e) {
  if (e) {
    removeStorage(e + "_noActions")
  }
}

function insertBefore(e, t) {
  t.parentNode.insertBefore(e, t)
}

function initMoatTracking(e, t, a, i, n) {
  _console.log("initMoat....", arguments);
  var o = document.createElement("script"), r = [];
  t = {
    adData: {ids: t, duration: a, url: n}, dispatchEvent: function (e) {
      _console.log("Inside dispatchEvent", e), this.sendEvent ? (r && (r.push(e), e = r, r = !1), this.sendEvent(e), _console.log("if of dispatch")) : r.push(e)
    }
  }, _console.debug("adData => ", t), a = "_moatApi" + Math.floor(1e8 * Math.random());
  var s, d;
  e = vmaxHelper.getAdSlotNode(vmaxHelper.getAdSlotId());
  try {
    s = e.ownerDocument, d = s.defaultView || s.parentWindow
  } catch (e) {
    s = document, d = window
  }
  d[a] = t, o.type = "text/javascript", e.parentNode.insertBefore(o, e.nextSibling || null);
  try {
    o.src = VMAX.Domain.Context + "/moatvideo.js#" + a
  } catch (e) {
    _console.debug("Caught MOAT Video => ", e)
  }
  return t
}

function getAdStatus(e, t, a) {
  var i = e + "_AdStatus", n = {};
  n[t] = VMAX.AdStatus[t], a ? setStorage(i, n, "local") : setStorage(i, n)
}

function resetTrustedAppCache(e) {
  var t = ["clickLabel", "closeLabel", "noActions", "tParams"], a = "pAppId_" + e;
  for (var i in t) t.hasOwnProperty(i) && removeStorage(e + "_" + t[i]);
  removeStorage(a), removeStorage(e + "_spl", "local")
}

function isAppTrusted(e) {
  return "1" == getStorage(e + "_spl", "local")
}

function isAdClickable(e) {
  if (vmaxAd.isAdOpen || vmaxAd.isVideoAdOpen()) {
    getLabel(e, "clickLabel");
    if (isAppTrusted(e) && vmaxVast.getClickURL(e)) return !0
  }
  return !1
}

function setLabels(e, t, a) {
  isAppTrusted(e) && (setStorage(e + "_clickLabel", t), setStorage(e + "_closeLabel", a))
}

function setTrustedAppAdParams(e, t) {
  isAppTrusted(e) && setStorage(e + "_tParams", t)
}

function getLabel(e, t) {
  var a = getStorage(e + "_" + t), i = /s[3,5,6]/;
  return isAppTrusted(e) && i.test(VMAX.getAdState(e)) && Object.keys(a).length ? a : null
}

function isHTML(e) {
  var t = (new DOMParser).parseFromString(e, "text/html");
  return Array.from(t.body.childNodes).some(function (e) {
    return 1 === e.nodeType
  })
}

function getCustomView(e) {
  isCustomView = !1;
  var t = "sView_" + e;
  return isAppTrusted(e) && (isCustomView = getStorage(t), isCustomView = 1 == isCustomView), isCustomView
}

function isPreroll(e) {
  var t = e + "_adspotType";
  return !(!e || "12" != getStorage(t, "local"))
}

function isRewared(e) {
  var t = e + "_adspotType";
  return !(!e || "5" != getStorage(t, "local"))
}

function getAdSpotType(e) {
  if (e) {
    return getStorage(e + "_adspotType", "local")
  }
}

function isSuperNativeExperience(e) {
  var t = !1;
  return "11" === getStorage(e + "_adspotType", "local") && (t = !0), t
}

function getTrustedAppAdParams(e, t) {
  var a = null, i = getStorage(e + "_tParams"), n = null;
  if (Object.keys(i).length <= 0) return a;
  var o = /s[3,5,6]/;
  return isSuperNativeExperience(e) && o.test(VMAX.getAdState(e)) ? (n = "string" == typeof i ? JSON.parse(i) : i, a = n && n.hasOwnProperty(t) && n[t] ? n[t] : null) : a
}

function getRequestedBitRate(e) {
  var t = e + "_Bitrate";
  return bitRateVal = getStorage(t), parseInt(bitRateVal) > 0 ? {bitrate: bitRateVal} : {}
}

function isScriptLoaded(e) {
  for (var t = document.getElementsByTagName("script"), a = t.length; a--;) if (t[a].src == e) return !0;
  return !1
}

function loadScript(e, t, a) {
  var i = document.createElement("script");
  i.type = "text/javascript", i.src = e;
  var n = document.body;
  a && a.hasOwnProperty("parentNode") && a.parentNode && (n = a.parentNode), a && a.hasOwnProperty("id") && a.id && (i.id = a.id), "function" == typeof t && (i.onload = t), _console.log(n), n.appendChild(i)
}

function handleVisibilityChange() {
  if (document[hidden]) {
    if (document.getElementById("my-ad-slot") && "none" != document.getElementById("my-ad-slot").style.display) try {
      VmaxConstant.dom.querySelector("#vmx-video") && VmaxConstant.dom.getElementById("vmx-video").pause()
    } catch (e) {
      VmaxConstant.dom.document.querySelector("#vmx-video") && VmaxConstant.dom.document.getElementById("vmx-video").pause()
    }
    handleInView(!1)
  } else {
    var e = null;
    if (document.getElementById("vmx-cover") && (e = "none" != document.getElementById("vmx-cover").style.display ? 1 : 0), document.getElementById("my-ad-slot") && "none" != document.getElementById("my-ad-slot").style.display && e) try {
      VmaxConstant.dom.querySelector("#vmx-video") && VmaxConstant.dom.getElementById("vmx-video").play()
    } catch (e) {
      VmaxConstant.dom.document.querySelector("#vmx-video") && VmaxConstant.dom.document.getElementById("vmx-video").play()
    }
    handleInView(!0)
  }
}

function handleInView(e) {
  if (_console.debug("Device Visibility State ::::::" + e), Timeout) {
    var t = document.querySelectorAll("ins[data-refresh-after]");
    if (t.length <= 0) return;
    for (var a = 0; a < t.length; a++) if (t[a].hasAttribute("data-rid") && t[a].getAttribute("data-refresh-after") > 0) {
      var i = t[a].getAttribute("data-rid"), n = 'ins[data-rId="' + i + '"]';
      inView.is(document.querySelector(n)) && (e ? Timeout.resume(n) : Timeout.pause(n))
    }
  }
}

function fibonacci(e) {
  var t = void 0, a = [0, 1];
  if ((e < 0 || e > 7) && (e = 7), 1 === e) return .5;
  for (t = 2; t <= e; t++) a[t] = a[t - 2] + a[t - 1];
  return a[a.length - 1]
}

function AdError(e, t) {
  removeStorage(e + "_Iscached"), getAdStatus(e, "STATE_AD_ERROR");
  var a = {placementId: e, ErrorCode: t, ErrorDescription: VMAX.Error[t]};
  VMAX.show[e] = !1;
  var i = vmaxHelper.getInsData(e), n = getStorage(e + "_attempt", "local"),
    o = i.hasOwnProperty("adspot") && i.adspot && vmaxHelper.isAdspotMultiAd(i.adspot) ? CONST.multiAdStorage.get(i.adspot + ".request-id") : n.hasOwnProperty("request-id") && n["request-id"] || getStorage(e + "_requestId");
  if (o && "object" != (void 0 === o ? "undefined" : _typeof(o))) {
    var r = {
      "request-id": o.replace("[ccb]", Date.now() || (new Date).getTime()),
      data: JSON.stringify(getCustomKeyValueByPId(e))
    };
    kvLogger.setLogLength(vmaxHelper.getChunkLength()), kvLogger.insertBeaconNode(r)
  }
  "function" == typeof VMAX.onAdError && VMAX.onAdError(e, a), "function" == typeof VMAX.onAdError_Listener2 && VMAX.onAdError_Listener2(e, a)
}

function getContentLanguage() {
  if (navigator.languages.length) {
    return document.documentElement.lang || navigator.languages[navigator.languages.length - 1]
  }
  return ""
}

function getConnectionType() {
  var e = null;
  try {
    var t = navigator.connection.type;
    e = "wifi" == t ? 1 : "cellular" == t ? 2 : 100
  } catch (e) {
  }
  return e
}

function isQwertyDevice() {
  try {
    navigator.hasFeature("device.capability.qwerty").then(function (e) {
      return VMAX.deviceType = 1 == e ? 1 : 0, _console.debug("VMAX-deviceType => " + VMAX.deviceType), VMAX.deviceType
    })
  } catch (e) {
  }
}

function getAppOrientation() {
  return VMAX.deviceOrientation = window.matchMedia("(orientation: portrait)").matches ? "p" : "l", _console.debug("window.location.origin=> " + window.location.origin), _console.debug("VMAX-orientation => " + VMAX.deviceOrientation), VMAX.deviceOrientation
}

function createEndCardWithMedia(e, t, a, i, n) {
  var o = "l" == getAppOrientation() ? "320x184" : "240x260",
    r = e.hasOwnProperty("video") && e.video.length ? "nativemain nativevideo" : "", s = "320x184" == o ? 135 : 170,
    d = {
      data: e,
      height: s,
      size: o,
      videoElement: a,
      vmaxpageClass: r,
      VideoAdObject: i,
      nativeInterstitialStaticFooter: t,
      nativeInterstitialMediaFooter: n
    };
  return e.hasOwnProperty("additionalCreatives") && 0 !== Object.keys(e.additionalCreatives).length && "string" == typeof e.additionalCreatives[o] ? endCard = createEndcardTemplate(_extends({}, d, {type: "image"})) : "" !== e.title && "" !== e.img_url && "" !== e.icon_url && "" !== e.tagLine ? endCard = createEndcardTemplate(_extends({}, d, {type: "html"})) : a ? (e.isEndCardAvailable = !1, endCard = createEndcardTemplate(_extends({}, d, {type: "withOutEndCard"}))) : !1 === a ? endCard = createEndcardTemplate(_extends({}, d, {type: "defaultAudioImage"})) : t && (endCard = ""), endCard
}

function createEndcardTemplate(e) {
  if (e) {
    var t = e.data, a = (e.height, e.type), i = e.size, n = e.nativeInterstitialMediaFooter, o = e.videoElement,
      r = e.vmaxpageClass, s = e.VideoAdObject, d = e.nativeInterstitialStaticFooter, l = "",
      c = o && 1 == o ? "display: none" : "", u = "", m = "", p = i.split("x");
    if (o && (m = '<div class="middle">\n            <video id="' + VmaxConstant.videoTagId + '" width="100%">\n                <source src="' + s.VideoUrl + '" />\n                Video Not Supported!\n            </video>\n        </div>'), !0 === n) u = '<div style="min-height:34px" class="vmax_footer">\n            <div class="actions left-action">' + VMAXICON.Loadingicon + '</div>\n            <div class="actions right-action" id="skipLabel"></div>\n        </div>'; else if (!0 === d) {
      var g = "" == t.clickUrl ? "" : "" == t.clickLabel ? VMAXICON.CTAicon : t.clickLabel;
      g = vmaxHelper.isCutomButtomBarSet(t.spotId) ? "" : g, u = '<div style="min-height:34px" class="vmax_footer">\n            <div class="actions left-action">' + g + '</div>\n            <div class="actions right-action" id="skipLabel"></div>\n        </div>'
    }
    if ("html" == a) l += '<div id="vmax_page" class="' + r + '">', "p" == getAppOrientation() ? l += '<div class="container" style="' + c + '">\n                        <div class="portrait_heading">\n                            <div class="portrait_icon">\n                                <img src="' + t.icon_url + '" width="44" height="44" alt="icon"/>\n                            </div>\n                            <div class="portrait_title">' + vmaxHelper.truncateString(t.title, 12) + '</div>\n                        </div>\n                        <div class="portrait_main-img">\n                            <img src="' + t.img_url + '" alt="main-img" />\n                        </div>\n                        <div class="portrait_description">\n                            ' + vmaxHelper.truncateString(t.tagLine, 45) + "\n                        </div>\n                    </div>" : l += '<div class="container landscape_container" style="' + c + '">\n                        <div class="landscape_main-img">\n                            <img src="' + t.img_url + '" alt="main-img" />\n                        </div>\n                        <div class="landscape_heading">\n                            <div class="landscape_icon">\n                                <img src="' + t.icon_url + '" width="44" height="44" alt="icon"/>\n                            </div>\n                            <div class="landscape_title">\n                                ' + vmaxHelper.truncateString(t.title, 12) + '\n                            </div>\n                            <div class="landscape_description">\n                                ' + vmaxHelper.truncateString(t.tagLine, 45) + "\n                            </div>\n                        </div>\n                    </div>", l += m, l += u, l += "</div>"; else if ("defaultAudioImage" == a) {
      var v = VMAX.Domain.Img + "/default_audio_" + i + ".png";
      l += '<div id="vmax_page" class="' + r + '">\n            <div class="lg-img" style="' + c + '">\n                <img src="' + v + '" width="' + p[0] + '" height="' + p[1] + '" />\n            </div>\n            ' + m + "\n            " + u + "\n        </div>"
    } else l += "image" == a ? '<div id="vmax_page" class="' + r + '">\n            <div class="lg-img" style="' + c + '">\n                <img src="' + t.additionalCreatives[i] + '" width="' + p[0] + '" height="' + p[1] + '" />\n            </div> \n            ' + m + "\n            " + u + "\n        </div>" : '<div id="vmax_page" class="' + r + '">\n            ' + m + "\n            " + u + "\n        </div>";
    return l
  }
}

function between(e, t, a) {
  return e >= t && e <= a
}

function dateChecker(e) {
  var t = new Date;
  return cmm = t.getMonth(), cdd = t.getDate(), cyy = t.getFullYear(), oldDate = new Date(e), omm = oldDate.getMonth(), odd = oldDate.getDate(), oyy = oldDate.getFullYear(), cdd > odd || cmm > omm || cyy > oyy
}

function patnerMatch(e, t) {
  for (var a = e.split(","), i = /^IAB[0-9]+$/i, n = /^IAB[0-9]+-[0-9]+$/i, o = [], r = 0; r < a.length; r++) "section" == t && null !== a[r].match(i) && o.push(a[r]), "page" == t && null !== a[r].match(n) && o.push(a[r]);
  return o
}

function getHTTPService(e, t, a, i) {
  var n = new XMLHttpRequest({mozSystem: !0}), o = ["GET", "POST", "PUT", "DELETE"],
    r = t && t.hasOwnProperty("data") ? t.data : {},
    s = t && t.hasOwnProperty("method") && -1 !== o.indexOf(t.method) ? t.method : "GET",
    d = t && t.hasOwnProperty("headers") ? t.headers : null, l = t && t.hasOwnProperty("timeout") ? t.timeout : 5e3,
    c = (t && t.hasOwnProperty("ontimeout") && "function" == typeof t.ontimeout && t.ontimeout, null);
  n.open(s, e, !0), t.hasOwnProperty("withCredentials") && (n.withCredentials = t.withCredentials), n.timeout = l;
  for (var u in d) d.hasOwnProperty(u) && n.setRequestHeader(u, d[u]);
  /GET/i.test(s) || (n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), c = obj2urlencodedString(r) || null), n.onreadystatechange = function () {
    if (4 == n.readyState) {
      var e = new Date;
      if (200 != n.status && 304 != n.status) return 500 == n.status ? _console.debug("HTTP Call Error!") : _console.debug("HTTP Calling Delayed"), _console.debug("HTTP Call Status: " + n.status + " | State: " + n.readyState), void ("function" == typeof i && i(n, e));
      "function" == typeof a && a(n, e)
    }
  };
  try {
    n.send(c)
  } catch (e) {
    _console.log("Error Occured!", e)
  }
}

function getBPId(e) {
  _console.log(e);
  var t = null;
  return e && e.hasOwnProperty("success") && !1 === e.success ? t : (e && e.hasOwnProperty("sessionAttributes") && e.sessionAttributes && e.sessionAttributes.hasOwnProperty("user") && e.sessionAttributes.user && e.sessionAttributes.user.hasOwnProperty("subscriberId") && e.sessionAttributes.user.subscriberId && (t = e.sessionAttributes.user.subscriberId), t)
}

function setBPId(e) {
  respObj = "string" == typeof e ? JSON.parse(e) : e;
  var t = getBPId(respObj);
  void 0 !== t && "undefined" != t && (VMAX.deviceInfo.uid = t, sStorage.setLocalUID(t), _console.debug(t))
}

function getMCCMNC(e, t) {
  if (!e) return null;
  var a = t && t.hasOwnProperty("dataLength") && !isNaN(t.dataLength) ? parseInt(t.dataLength) : 6;
  return e.substr(0, a)
}

function sendToAPro(e, t) {
  var a = {};
  if (VMAX.deviceInfo.advid && (a.idfa = VMAX.deviceInfo.advid), VMAX.deviceInfo.uid && (a.uid = VMAX.deviceInfo.uid), VMAX.APP_NAME && (a.ai = VMAX.APP_NAME), _console.debug("setAppName", VMAX.APP_NAME, a), a.vr = CONST.sdkVersion, a.ua = navigator.userAgent, VMAX.deviceInfo.imsi) {
    a.circleid = VMAX.deviceInfo.imsi.substr(0, 6);
    var i = a.circleid.match(/.{1,3}/g);
    a.mcc = i[0], a.mnc = i[1]
  }
  var n = {method: "POST", timeout: 2e3, data: a};
  _console.debug(JSON.stringify(n)), t = "function" == typeof t ? t : null, getHTTPService("https://ajdivotdelbloab24.jio.com/delivery/p.php", n, t)
}

function mapBPIDwithIMSI(e, t, a) {
  var i = btoa(e), n = btoa(t), o = {};
  new Date;
  return o[i] = {uid: n, isMapping: a}, o
}

function isMapValid(e) {
  var t = 0, a = btoa(e), i = getBPIDMap(a);
  return i && i.hasOwnProperty("isMapping") && (t = !0 === i.isMapping ? 1 : 2), t
}

function getBPIDMap(e) {
  var t = null, a = getStorage("uimap", "local");
  return a && -1 !== Object.keys(a).indexOf(e) && a[e].hasOwnProperty("uid") && a[e].uid && (t = a[e]), t
}

function initIdentificationService(e) {
  _console.debug("Initializing Identification Service...");
  var t = null, a = {};
  if (void 0 === e && (e = "def_imsi"), 1 === isMapValid(e)) _console.debug("Map valid cache exists."), a = getBPIDMap(btoa(e)), (t = atob(a.uid)) && (VMAX.deviceInfo.uid = t); else if (2 === isMapValid(e)) _console.debug("Map cache exists."), a = getBPIDMap(btoa(e)), (t = atob(a.uid)) && (VMAX.deviceInfo.uid = t, sendToAPro(null, function (t) {
    _console.debug("Initiating APro Callback..." + t), setStorage("uimap", mapBPIDwithIMSI(e, VMAX.deviceInfo.uid, !0), "local")
  })); else if (_console.debug("Map invalid!"), 2 === getConnectionType() && VMAX.enableUIDService) {
    _console.debug("Call getSubscriber...");
    var i = {method: "GET", timeout: 6e3};
    APP_GLOBAL.logParams = {
      imsi: VMAX.deviceInfo.imsi,
      idfa: VMAX.deviceInfo.advid,
      timestamp: new Date,
      ai: VMAX.APP_NAME,
      vr: CONST.sdkVersion,
      ua: navigator.userAgent,
      bst: "hit"
    }, CONST.cdnLogger.log(APP_GLOBAL.logParams), getHTTPService("http://api.jio.com/v2/users/me?app-name=RJIL_JioAds_KaiOS", i, function (a, i) {
      setBPId(a.response);
      var n = {};
      t = VMAX.deviceInfo.hasOwnProperty("uid") && VMAX.deviceInfo.uid, t ? (n = _extends({}, APP_GLOBAL.logParams, {
        timestamp: i,
        bst: "success"
      }), setStorage("uimap", mapBPIDwithIMSI(e, VMAX.deviceInfo.uid, !1), "local"), sendToAPro(null, function (t) {
        _console.debug("Initiating APro Callback..." + t), setStorage("uimap", mapBPIDwithIMSI(e, VMAX.deviceInfo.uid, !0), "local")
      })) : n = _extends({}, APP_GLOBAL.logParams, {
        timestamp: i,
        bst: "error",
        error: a.response
      }), CONST.cdnLogger.log(n), CONST.cdnLogger.editLogDetails(VMAX.deviceInfo.imsi, VMAX.deviceInfo.advid), CONST.cdnLogger.isAllValuePresentInLog(CONST.search) && CONST.cdnLogger.insertBeaconNode()
    }, function (e, t) {
      var a = _extends({}, APP_GLOBAL.logParams, {timestamp: t, bst: "error"});
      CONST.cdnLogger.log(a), CONST.cdnLogger.editLogDetails(VMAX.deviceInfo.imsi, VMAX.deviceInfo.advid), CONST.cdnLogger.isAllValuePresentInLog(CONST.search) && CONST.cdnLogger.insertBeaconNode()
    })
  }
}

function replaceMacros(e, t) {
  var a = getReferenceNodeById(t), i = a.getAttribute("data-adspot-key"), n = getStorage("maskingInfo", "local"), o = {
    ccb: Date.now() || (new Date).getTime(),
    advid: sStorage.getLocalAdID() || VMAX.deviceInfoDefaults.advid,
    ua: navigator.userAgent || "",
    uid: sStorage.getLocalUID() || VMAX.deviceInfoDefaults.uid,
    vr: CONST.APIVersion,
    mid: n.hasOwnProperty(i) && n[i].id || !1
  };
  return e = replaceCustomKeyMacros(e, t), e.replace(/\[ccb\]|\{ccb\}/gi, o.ccb ? encodeURIComponent(o.ccb) : "").replace(/\[advid\]|\[jjid\]|\{advid\}/gi, o.advid ? encodeURIComponent(o.advid) : "").replace(/\[ua\]|\{ua\}/gi, o.ua ? encodeURIComponent(o.ua) : "").replace(/\[uid\]|\{uid\}/gi, o.uid ? encodeURIComponent(o.uid) : "").replace(/\[vr\]|\{vr\}/gi, o.vr ? encodeURIComponent(o.vr) : "").replace(/\[ci\]|\{ci\}/gi, o.ci ? encodeURIComponent(o.ci) : "").replace(/\[co\]|\{co\}/gi, o.co ? encodeURIComponent(o.co) : "").replace(/\[st\]|\{st\}/gi, o.st ? encodeURIComponent(o.st) : "").replace(/\[mid\]/gi, o.mid ? encodeURIComponent(o.mid) : "").replace(/%7Bccb%7D|%5Bccb%5D/gi, o.ccb ? encodeURIComponent(o.ccb) : "").replace(/%7Badvid%7D|%7Bjjid%7D|%5Badvid%5D/gi, o.advid ? encodeURIComponent(o.advid) : "").replace(/%7Bua%7D|%5Bua%5D/gi, o.ua ? encodeURIComponent(o.ua) : "").replace(/%7Buid%7D|%5Buid%5D/gi, o.uid ? encodeURIComponent(o.uid) : "").replace(/%7Bvr%7D|%5Bvr%5D/gi, o.vr ? encodeURIComponent(o.vr) : "").replace(/%7Bci%7D|%5Bci%5D/gi, o.ci ? encodeURIComponent(o.ci) : "").replace(/%7Bco%7D|%5Bco%5D/gi, o.co ? encodeURIComponent(o.co) : "").replace(/%7Bst%7D|%5Bst%5D/gi, o.st ? encodeURIComponent(o.st) : "").replace(/%7Bmid%7D/gi, o.mid ? encodeURIComponent(o.mid) : "")
}

function replaceCustomKeyMacros(e, t) {
  var a = Object.assign({}, getCustomKeyValueByPId(t));
  -1 !== Object.keys(a).indexOf("ck_loa") && delete a.lc;
  for (var i in a) {
    var n = i.replace("ck_", "ck."), o = new RegExp("\\[" + n + "]|%5B" + n + "%5D", "gi");
    e = e.replace(o, a[i] ? encodeURIComponent(a[i]) : "")
  }
  return e.replace(/\[ck.*?]|%5Bck.*?%5D/gi, "")
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}, _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t];
    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
  }
  return e
}, _createClass = function () {
  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  return function (t, a, i) {
    return a && e(t.prototype, a), i && e(t, i), t
  }
}(), lang_code_to_language = {
  en_ZM: "English",
  eu: "Basque",
  ar_TD: "Arabic",
  ja_JP: "Japanese",
  mer_KE: "Meru",
  ast: "Asturian",
  ar: "Arabic",
  en_KE: "English",
  as: "Assamese",
  ln_CG: "Lingala",
  bm_ML: "Bambara",
  ar_IL: "Arabic",
  saq_KE: "Samburu",
  fur_IT: "Friulian",
  en_CY: "English",
  es_GT: "Spanish",
  ksb_TZ: "Shambala",
  lt_LT: "Lithuanian",
  es_UY: "Spanish",
  sw_UG: "Swahili",
  ar_SA: "Arabic",
  en_NR: "English",
  ar_LY: "Arabic",
  es_PE: "Spanish",
  az: "Azerbaijani",
  yue_HK: "Cantonese",
  shi_Tfng_MA: "Tachelhit",
  en_CZ: "English",
  vun_TZ: "Vunjo",
  gsw: "Swiss German",
  ii_CN: "Sichuan Yi",
  agq_CM: "Aghem",
  dyo: "Jola-Fonyi",
  vai_Latn_LR: "Vai",
  ee_TG: "Ewe",
  en_MO: "English",
  ca_IT: "Catalan",
  en_BW: "English",
  en_AS: "English",
  gsw_LI: "Swiss German",
  vai_Vaii_LR: "Vai",
  bas_CM: "Basaa",
  en_MP: "English",
  jgo_CM: "Ngomba",
  ar_KW: "Arabic",
  zu_ZA: "Zulu",
  am_ET: "Amharic",
  nyn: "Nyankole",
  en_AT: "English",
  fr_VU: "French",
  ee_GH: "Ewe",
  ta_IN: "Tamil",
  fr_RE: "French",
  ar_SD: "Arabic",
  tr_CY: "Turkish",
  en_NU: "English",
  vai_Vaii: "Vai",
  es_PH: "Spanish",
  en_KI: "English",
  en_JE: "English",
  en_AU: "English",
  be_BY: "Belarusian",
  fr_TN: "French",
  fa_AF: "Persian",
  ar_IQ: "Arabic",
  fr_GN: "French",
  sk_SK: "Slovak",
  dyo_SN: "Jola-Fonyi",
  zh_Hant_HK: "Chinese",
  ar_001: "Arabic",
  en_BZ: "English",
  ru_KZ: "Russian",
  en_VC: "English",
  asa_TZ: "Asu",
  nl_AW: "Dutch",
  gd_GB: "Scottish Gaelic",
  se_NO: "Northern Sami",
  es_SV: "Spanish",
  pt_PT: "Portuguese",
  en_MS: "English",
  ko_KP: "Korean",
  zh_Hans_CN: "Chinese",
  ta: "Tamil",
  ks_IN: "Kashmiri",
  te: "Telugu",
  en_MT: "English",
  fr_HT: "French",
  pa: "Punjabi",
  fr_GP: "French",
  kea: "Kabuverdianu",
  tg: "Tajik",
  th: "Thai",
  pa_Arab_PK: "Punjabi",
  ti: "Tigrinya",
  es_ES: "Spanish",
  nd_ZW: "North Ndebele",
  es_DO: "Spanish",
  tk: "Turkmen",
  zh_Hans_SG: "Chinese",
  yo_BJ: "Yoruba",
  en_MU: "English",
  ko_KR: "Korean",
  nus_SS: "Nuer",
  lb: "Luxembourgish",
  fr_GQ: "French",
  en_IE: "English",
  ta_SG: "Tamil",
  to: "Tongan",
  yo_NG: "Yoruba",
  fr_CA: "French",
  pt_CV: "Portuguese",
  kde_TZ: "Makonde",
  pt_BR: "Portuguese",
  es_CL: "Spanish",
  fr_SN: "French",
  ga_IE: "Irish",
  uz_Arab: "Uzbek",
  pl: "Polish",
  tr: "Turkish",
  bem: "Bemba",
  ha: "Hausa",
  ckb: "Sorani Kurdish",
  en_NZ: "English",
  en_MV: "English",
  lg: "Ganda",
  en_LR: "English",
  ar_QA: "Arabic",
  en_KN: "English",
  kw_GB: "Cornish",
  en_ZW: "English",
  sr_Cyrl_XK: "Serbian",
  he: "Hebrew",
  ff_GN: "Fulah",
  pt_AO: "Portuguese",
  en_VG: "English",
  lkt_US: "lkt",
  ar_TN: "Arabic",
  da: "Danish",
  ps: "Pashto",
  en_MW: "English",
  pt: "Portuguese",
  ckb_IQ: "Sorani Kurdish",
  ln: "Lingala",
  hi: "Hindi",
  lo: "Lao",
  ebu: "Embu",
  en_LS: "English",
  te_IN: "Telugu",
  de: "German",
  seh: "Sena",
  hu_HU: "Hungarian",
  shi_Latn: "Tachelhit",
  lt: "Lithuanian",
  sq_AL: "Albanian",
  de_LI: "German",
  lu: "Luba-Katanga",
  en_LT: "English",
  sr_Latn_XK: "Serbian",
  lv: "Latvian",
  kln_KE: "Kalenjin",
  ses_ML: "Koyraboro Senni",
  lrc_IQ: "lrc",
  gsw_FR: "Swiss German",
  ar_EG: "Arabic",
  fr_CD: "French",
  hr: "Croatian",
  sbp: "Sangu",
  en_VI: "English",
  es_CO: "Spanish",
  ne_NP: "Nepali",
  cs_CZ: "Czech",
  chr: "Cherokee",
  hu: "Hungarian",
  ckb_IR: "Sorani Kurdish",
  el_GR: "Greek",
  en_MY: "English",
  en_LU: "English",
  kab_DZ: "Kabyle",
  en_JM: "English",
  mer: "Meru",
  ms_MY: "Malay",
  shi: "Tachelhit",
  ca_FR: "Catalan",
  ar_EH: "Arabic",
  bez: "Bena",
  lo_LA: "Lao",
  kkj: "Kako",
  hy: "Armenian",
  en_001: "English",
  teo: "Teso",
  fr_PF: "French",
  bs_Latn: "Bosnian",
  is_IS: "Icelandic",
  khq: "Koyra Chiini",
  en_LV: "English",
  ff_SN: "Fulah",
  pt_MO: "Portuguese",
  en_KR: "English",
  es_NI: "Spanish",
  fr_FR: "French",
  ce_RU: "Chechen",
  lrc_IR: "lrc",
  en_GB: "English",
  fy_NL: "Western Frisian",
  af_NA: "Afrikaans",
  sq_MK: "Albanian",
  fr_DJ: "French",
  fr_CF: "French",
  shi_Tfng: "Tachelhit",
  dz: "Dzongkha",
  ses: "Koyraboro Senni",
  en_UG: "English",
  xog_UG: "Soga",
  en_TC: "English",
  yav_CM: "Yangben",
  ha_NE: "Hausa",
  nnh: "Ngiemboon",
  es_PR: "Spanish",
  de_AT: "German",
  gu_IN: "Gujarati",
  fr_CG: "French",
  es_CR: "Spanish",
  ur_PK: "Urdu",
  ar_SO: "Arabic",
  mr_IN: "Marathi",
  bs_Cyrl: "Bosnian",
  vi_VN: "Vietnamese",
  en_JP: "English",
  en_IL: "English",
  en_GD: "English",
  fr_CH: "French",
  lkt: "lkt",
  es_BO: "Spanish",
  so_SO: "Somali",
  ha_NG: "Hausa",
  hr_HR: "Croatian",
  bg_BG: "Bulgarian",
  en_IM: "English",
  ln_AO: "Lingala",
  si_LK: "Sinhala",
  sr_Latn: "Serbian",
  fr_CI: "French",
  fr_BE: "French",
  it_IT: "Italian",
  en_SB: "English",
  as_IN: "Assamese",
  teo_KE: "Teso",
  af_ZA: "Afrikaans",
  en_IN: "English",
  ca_ES: "Catalan",
  fr_BF: "French",
  en_WS: "English",
  es_CU: "Spanish",
  en_SC: "English",
  ak_GH: "Akan",
  sl_SI: "Slovenian",
  fr_NC: "French",
  brx_IN: "Bodo",
  en_IO: "English",
  en_HK: "English",
  en_GG: "English",
  teo_UG: "Teso",
  ar_DJ: "Arabic",
  ewo: "Ewondo",
  sg_CF: "Sango",
  ca_AD: "Catalan",
  sw_CD: "Swahili",
  ar_SS: "Arabic",
  en_SD: "English",
  nb_NO: "Norwegian Bokmål",
  rm_CH: "Romansh",
  mas_KE: "Masai",
  en_GH: "English",
  dav_KE: "Taita",
  en_150: "English",
  dsb_DE: "Lower Sorbian",
  so_DJ: "Somali",
  fr_SY: "French",
  en_UM: "English",
  rwk: "Rwa",
  kam_KE: "Kamba",
  en_SE: "English",
  fr_PM: "French",
  gl_ES: "Galician",
  bo_CN: "Tibetan",
  fr_NE: "French",
  fr_MA: "French",
  en_KY: "English",
  se: "Northern Sami",
  en_GI: "English",
  sg: "Sango",
  fr_CM: "French",
  fr_BI: "French",
  si: "Sinhala",
  km_KH: "Khmer",
  ast_ES: "Asturian",
  sq_XK: "Albanian",
  sk: "Slovak",
  es_PY: "Spanish",
  mzn: "mzn",
  it_SM: "Italian",
  sl: "Slovenian",
  ka: "Georgian",
  uz_Arab_AF: "Uzbek",
  sn: "Shona",
  fr_BJ: "French",
  kk_KZ: "Kazakh",
  qu_EC: "Quechua",
  so: "Somali",
  mas_TZ: "Masai",
  fr_RW: "French",
  en_TK: "English",
  dz_BT: "Dzongkha",
  en_SG: "English",
  twq: "Tasawaq",
  sq: "Albanian",
  mt_MT: "Maltese",
  kok_IN: "Konkani",
  fr_MC: "French",
  az_Latn: "Azerbaijani",
  sr: "Serbian",
  ms_SG: "Malay",
  ga: "Irish",
  lb_LU: "Luxembourgish",
  om: "Oromo",
  en_IS: "English",
  tzm: "Central Atlas Tamazight",
  ar_ER: "Arabic",
  ki: "Kikuyu",
  gd: "Scottish Gaelic",
  sv: "Swedish",
  es_AR: "Spanish",
  kk: "Kazakh",
  en_SH: "English",
  sw: "Swahili",
  mzn_IR: "mzn",
  kl: "Kalaallisut",
  de_LU: "German",
  or: "Oriya",
  ca: "Catalan",
  km: "Khmer",
  os: "Ossetic",
  mgo_CM: "Meta",
  en_IT: "English",
  kn: "Kannada",
  hr_BA: "Croatian",
  ki_KE: "Kikuyu",
  ko: "Korean",
  kkj_CM: "Kako",
  fr_BL: "French",
  ce: "Chechen",
  en_VU: "English",
  en_SI: "English",
  gl: "Galician",
  sw_TZ: "Swahili",
  ks: "Kashmiri",
  pt_MZ: "Portuguese",
  guz_KE: "Gusii",
  az_Cyrl: "Azerbaijani",
  ru_RU: "Russian",
  en_GM: "English",
  en_FI: "English",
  en_EE: "English",
  ar_BH: "Arabic",
  kw: "Cornish",
  shi_Latn_MA: "Tachelhit",
  pa_Guru_IN: "Punjabi",
  ar_SY: "Arabic",
  ff_CM: "Fulah",
  eu_ES: "Basque",
  ky: "Kirghiz",
  fr_MF: "French",
  ti_ER: "Tigrinya",
  ar_MA: "Arabic",
  ig_NG: "Igbo",
  gu: "Gujarati",
  en_HR: "English",
  gv: "Manx",
  en_FJ: "English",
  so_ET: "Somali",
  ar_AE: "Arabic",
  or_IN: "Oriya",
  en_US: "English",
  en_TO: "English",
  cs: "Czech",
  en_SK: "English",
  hy_AM: "Armenian",
  bs_Cyrl_BA: "Bosnian",
  fr_MG: "French",
  kl_GL: "Kalaallisut",
  en_FK: "English",
  nn_NO: "Norwegian Nynorsk",
  mfe: "Morisyen",
  om_ET: "Oromo",
  cy: "Welsh",
  es_BZ: "Spanish",
  dua_CM: "Duala",
  fil_PH: "Filipino",
  en_SL: "English",
  zh_Hans: "Chinese",
  ti_ET: "Tigrinya",
  uz_Latn: "Uzbek",
  os_GE: "Ossetic",
  ms_Arab_BN: "Malay",
  es_IC: "Spanish",
  ky_KG: "Kirghiz",
  se_SE: "Northern Sami",
  ru_MD: "Russian",
  da_GL: "Danish",
  gv_IM: "Manx",
  en_HU: "English",
  en_FM: "English",
  zgh_MA: "zgh",
  en_DE: "English",
  en_CA: "English",
  fil: "Filipino",
  en_TR: "English",
  it_CH: "Italian",
  es_VE: "Spanish",
  ar_OM: "Arabic",
  ewo_CM: "Ewondo",
  en_GR: "English",
  fr_DZ: "French",
  ne_IN: "Nepali",
  ar_LB: "Arabic",
  fo_FO: "Faroese",
  en_DG: "English",
  sr_Cyrl: "Serbian",
  en_CC: "English",
  zh_Hans_MO: "Chinese",
  en_TT: "English",
  zh_Hant: "Chinese",
  dua: "Duala",
  ar_PS: "Arabic",
  fr_ML: "French",
  ml_IN: "Malayalam",
  qu_PE: "Quechua",
  tg_TJ: "Tajik",
  kln: "Kalenjin",
  lrc: "lrc",
  lv_LV: "Latvian",
  rof: "Rombo",
  nl_SR: "Dutch",
  kok: "Konkani",
  sr_Cyrl_RS: "Serbian",
  se_FI: "Northern Sami",
  sv_AX: "Swedish",
  tr_TR: "Turkish",
  es_MX: "Spanish",
  zh: "Chinese",
  en_GU: "English",
  mua: "Mundang",
  ar_YE: "Arabic",
  en_BA: "English",
  en_TV: "English",
  sn_ZW: "Shona",
  rwk_TZ: "Rwa",
  bn_IN: "Bengali",
  vi: "Vietnamese",
  xog: "Soga",
  en_FR: "English",
  ksh_DE: "Colognian",
  en_BB: "English",
  en_TW: "English",
  nb: "Norwegian Bokmål",
  en_SS: "English",
  pt_TL: "Portuguese",
  ars: "ars",
  en_RO: "English",
  sr_Latn_RS: "Serbian",
  en_PG: "English",
  zu: "Zulu",
  nd: "North Ndebele",
  ksf_CM: "Bafia",
  naq_NA: "Nama",
  ne: "Nepali",
  ar_DZ: "Arabic",
  en_DK: "English",
  ro_RO: "Romanian",
  ja: "Japanese",
  fo_DK: "Faroese",
  rm: "Romansh",
  rn: "Rundi",
  ro: "Romanian",
  en_PH: "English",
  luo_KE: "Luo",
  seh_MZ: "Sena",
  el_CY: "Greek",
  nl: "Dutch",
  brx: "Bodo",
  fa: "Persian",
  en_CH: "English",
  nn: "Norwegian Nynorsk",
  az_Cyrl_AZ: "Azerbaijani",
  lu_CD: "Luba-Katanga",
  ru: "Russian",
  nl_BE: "Dutch",
  yue: "Cantonese",
  en_US_POSIX: "English",
  fur: "Friulian",
  fr_MQ: "French",
  en_NA: "English",
  rw: "Kinyarwanda",
  ff: "Fulah",
  luo: "Luo",
  my_MM: "Burmese",
  en_GY: "English",
  fa_IR: "Persian",
  en_DM: "English",
  iu_CA: "Inuktitut",
  en_BE: "English",
  fi: "Finnish",
  fr_WF: "French",
  en_TZ: "English",
  hsb_DE: "Upper Sorbian",
  be: "Belarusian",
  sr_Cyrl_BA: "Serbian",
  fr_MR: "French",
  bg: "Bulgarian",
  to_TO: "Tongan",
  ug_CN: "Uighur",
  cgg_UG: "Chiga",
  en_ER: "English",
  az_Latn_AZ: "Azerbaijani",
  rof_TZ: "Rombo",
  fo: "Faroese",
  nus: "Nuer",
  uz_Cyrl_UZ: "Uzbek",
  vun: "Vunjo",
  fr: "French",
  nl_SX: "Dutch",
  en_PK: "English",
  ps_AF: "Pashto",
  bm: "Bambara",
  tzm_MA: "Central Atlas Tamazight",
  bn: "Bengali",
  so_KE: "Somali",
  guz: "Gusii",
  bo: "Tibetan",
  en_ES: "English",
  ka_GE: "Georgian",
  en_CK: "English",
  rn_BI: "Rundi",
  ru_KG: "Russian",
  sr_Latn_BA: "Serbian",
  en_SX: "English",
  br: "Breton",
  da_DK: "Danish",
  luy: "Luyia",
  en_PL: "English",
  bs: "Bosnian",
  fy: "Western Frisian",
  es_419: "Spanish",
  haw_US: "Hawaiian",
  pa_Guru: "Punjabi",
  sw_KE: "Swahili",
  gsw_CH: "Swiss German",
  de_DE: "German",
  om_KE: "Oromo",
  uz_Latn_UZ: "Uzbek",
  bs_Latn_BA: "Bosnian",
  en_ZA: "English",
  en_AD: "English",
  sah_RU: "Sakha",
  en_RU: "English",
  ms_Arab: "Malay",
  nyn_UG: "Nyankole",
  fr_MU: "French",
  zh_Hans_HK: "Chinese",
  fr_KM: "French",
  mgh_MZ: "Makhuwa-Meetto",
  nmg_CM: "Kwasio",
  kab: "Kabyle",
  dje_NE: "Zarma",
  en_CM: "English",
  en_BI: "English",
  fi_FI: "Finnish",
  ta_LK: "Tamil",
  tk_TM: "Turkmen",
  en_SZ: "English",
  kea_CV: "Kabuverdianu",
  en_PN: "English",
  ru_BY: "Russian",
  wae_CH: "Walser",
  en_NF: "English",
  chr_US: "Cherokee",
  jmc_TZ: "Machame",
  ff_MR: "Fulah",
  uz_Cyrl: "Uzbek",
  en_CN: "English",
  es_EA: "Spanish",
  pa_Arab: "Punjabi",
  en_RW: "English",
  lag: "Langi",
  sbp_TZ: "Sangu",
  en_NG: "English",
  ar_MR: "Arabic",
  fr_YT: "French",
  es_HN: "Spanish",
  kde: "Makonde",
  en_AG: "English",
  cgg: "Chiga",
  lag_TZ: "Langi",
  bas: "Basaa",
  ms_Arab_MY: "Malay",
  kam: "Kamba",
  sah: "Sakha",
  khq_ML: "Koyra Chiini",
  wae: "Walser",
  rw_RW: "Kinyarwanda",
  es_EC: "Spanish",
  br_FR: "Breton",
  ro_MD: "Romanian",
  ebu_KE: "Embu",
  th_TH: "Thai",
  fr_LU: "French",
  en_ME: "English",
  dje: "Zarma",
  mn_MN: "Mongolian",
  hi_IN: "Hindi",
  ru_UA: "Russian",
  sr_Cyrl_ME: "Serbian",
  fr_GA: "French",
  sv_SE: "Swedish",
  vai: "Vai",
  dav: "Taita",
  en_BM: "English",
  en_AI: "English",
  en_PR: "English",
  naq: "Nama",
  lg_UG: "Ganda",
  mgh: "Makhuwa-Meetto",
  ar_KM: "Arabic",
  ha_GH: "Hausa",
  mas: "Masai",
  pt_GW: "Portuguese",
  agq: "Aghem",
  mfe_MU: "Morisyen",
  haw: "Hawaiian",
  yi: "Yiddish",
  smn_FI: "Inari Sami",
  qu_BO: "Quechua",
  nb_SJ: "Norwegian Bokmål",
  ms_BN: "Malay",
  saq: "Samburu",
  pt_ST: "Portuguese",
  ur_IN: "Urdu",
  ug: "Uighur",
  sr_Latn_ME: "Serbian",
  en_MG: "English",
  jmc: "Machame",
  en_LC: "English",
  twq_NE: "Tasawaq",
  nl_NL: "Dutch",
  nnh_CM: "Ngiemboon",
  yo: "Yoruba",
  zh_Hant_TW: "Chinese",
  de_CH: "German",
  jgo: "Ngomba",
  uk: "Ukrainian",
  fr_TD: "French",
  asa: "Asu",
  mua_CM: "Mundang",
  es_US: "Spanish",
  en_PT: "English",
  en_NL: "English",
  mgo: "Meta",
  en_MH: "English",
  bez_TZ: "Bena",
  de_BE: "German",
  zgh: "zgh",
  vai_Latn: "Vai",
  dsb: "Lower Sorbian",
  cy_GB: "Welsh",
  en_AL: "English",
  ur: "Urdu",
  he_IL: "Hebrew",
  bo_IN: "Tibetan",
  nl_BQ: "Dutch",
  mg: "Malagasy",
  zh_Hant_MO: "Chinese",
  nmg: "Kwasio",
  bem_ZM: "Bemba",
  id: "Indonesian",
  et_EE: "Estonian",
  hsb: "Upper Sorbian",
  yav: "Yangben",
  mk: "Macedonian",
  ml: "Malayalam",
  ig: "Igbo",
  yi_001: "Yiddish",
  mn: "Mongolian",
  ksb: "Shambala",
  uz: "Uzbek",
  sv_FI: "Swedish",
  ii: "Sichuan Yi",
  pl_PL: "Polish",
  qu: "Quechua",
  es_PA: "Spanish",
  ee: "Ewe",
  mk_MK: "Macedonian",
  ln_CD: "Lingala",
  fr_GF: "French",
  luy_KE: "Luyia",
  mr: "Marathi",
  es_GQ: "Spanish",
  en_BR: "English",
  ms: "Malay",
  kn_IN: "Kannada",
  nl_CW: "Dutch",
  mt: "Maltese",
  fr_TG: "French",
  fr_SC: "French",
  en_PW: "English",
  ksf: "Bafia",
  en_NO: "English",
  uk_UA: "Ukrainian",
  af: "Afrikaans",
  el: "Greek",
  is: "Icelandic",
  ksh: "Colognian",
  my: "Burmese",
  en_BS: "English",
  en: "English",
  it: "Italian",
  ta_MY: "Tamil",
  id_ID: "Indonesian",
  smn: "Inari Sami",
  iu: "Inuktitut",
  eo: "Esperanto",
  mg_MG: "Malagasy",
  os_RU: "Ossetic",
  ak: "Akan",
  ar_JO: "Arabic",
  ln_CF: "Lingala",
  am: "Amharic",
  es: "Spanish",
  bn_BD: "Bengali",
  et: "Estonian",
  en_CX: "English"
}, VmaxUtils = function () {
  function e() {
    _classCallCheck(this, e)
  }

  return _createClass(e, [{
    key: "pick", value: function (e, t) {
      return e = Object(e), t.reduce(function (t, a) {
        return a in e && (t[a] = e[a]), t
      }, {})
    }
  }, {
    key: "closestNumber", value: function (e, t) {
    }
  }, {
    key: "bestFit", value: function (e, t) {
    }
  }]), e
}(), UtilHTTPRequest = function () {
  function e() {
    _classCallCheck(this, e), this.cbSuccess = null, this.cbError = null
  }

  return _createClass(e, [{
    key: "sendRequest", value: function (e, t, a, i) {
      var n = this, o = new XMLHttpRequest, r = ["GET", "POST"], s = t && t.hasOwnProperty("data") ? t.data : {},
        d = t && t.hasOwnProperty("method") && -1 !== r.indexOf(t.method) ? t.method : "GET",
        l = t && t.hasOwnProperty("headers") ? t.headers : null, c = t && t.hasOwnProperty("timeout") ? t.timeout : 5e3,
        u = (t && t.hasOwnProperty("ontimeout") && "function" == typeof t.ontimeout && t.ontimeout, !(!t || !t.hasOwnProperty("withCredentials")) && t.withCredentials),
        m = !(!t || !t.hasOwnProperty("checkJSON")) && t.checkJSON,
        p = t && t.hasOwnProperty("returnPayload") ? t.returnPayload : {};
      p = _extends({}, p, s), "function" == typeof a && (this.cbSuccess = a), "function" == typeof i && (this.cbError = i);
      var g = null;
      o.open(d, e, !0), u && (o.withCredentials = !0), o.timeout = c;
      for (var v in l) l.hasOwnProperty(v) && (_console.debug(v + " => " + l[v]), o.setRequestHeader(v, l[v]));
      /GET/i.test(d) || (o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), g = this.obj2URLEncoded(s) || null), o.onreadystatechange = function () {
        if (4 == o.readyState) {
          if (200 != o.status && 304 != o.status) {
            var e = o.status;
            return _console.debug("HTTP Call Status: " + o.status + " | State: " + o.readyState), void ("function" == typeof n.cbError && n.cbError(e, p))
          }
          _console.debug("Execute Callback..." + o), "" !== o.responseText && m ? n.onSuccessValidation(o, p) : "function" == typeof n.cbSuccess && n.cbSuccess(o.response, p)
        }
      };
      try {
        o.send(g)
      } catch (e) {
        _console.log("Error Occured!" + e)
      }
    }
  }, {
    key: "obj2URLEncoded", value: function (e) {
      var t = [];
      if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
        for (var a in e) e.hasOwnProperty(a) && t.push(a + "=" + e[a]);
        return encodeURI(t.join("&"))
      }
      return ""
    }
  }, {
    key: "getHeaderByName", value: function (e, t) {
      var a = null;
      try {
        a = e.getResponseHeader(t)
      } catch (e) {
        _console.log(e)
      }
      return a
    }
  }, {
    key: "onSuccessValidation", value: function (e, t) {
      _console.debug("Execute Callback Prevalidations..." + e);
      try {
        resp = JSON.parse(e.responseText)
      } catch (e) {
        if ("function" == typeof this.cbError) return this.cbError("Parsing_Failed", t);
        _console.debug("No cbError defined!")
      }
      if ("function" == typeof this.cbSuccess) return this.cbSuccess(e.responseText, t)
    }
  }]), e
}(), UtilStorage = function () {
  function e() {
    _classCallCheck(this, e)
  }

  return _createClass(e, [{
    key: "setStorage", value: function (e, t, a) {
      "local" == a ? localStorage.setItem(e, JSON.stringify(t)) : sessionStorage.setItem(e, JSON.stringify(t))
    }
  }, {
    key: "getStorage", value: function (e, t) {
      return "local" == t ? JSON.parse(localStorage.getItem(e)) || {} : JSON.parse(sessionStorage.getItem(e)) || {}
    }
  }, {
    key: "removeStorage", value: function (e, t) {
      return "local" == t ? localStorage.removeItem(e) : sessionStorage.removeItem(e)
    }
  }]), e
}(), Timeout = function () {
  var e = {}, t = {}, a = {}, i = function (i) {
    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    clearTimeout(e[i]), delete e[i], n && (delete a[i], delete t[i])
  }, n = function () {
    for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) o[s] = arguments[s];
    var d = void 0, l = void 0, c = void 0, u = void 0;
    if (0 === o.length) throw Error("Timeout.set() requires at least one argument");
    if ("function" == typeof o[0] ? (l = o[0], c = o[1], u = o.slice(2), d = l.toString()) : (d = o[0], l = o[1], c = o[2], u = o.slice(3)), !l) throw Error("Timeout.set() requires a function parameter");
    i(d);
    var m = function () {
      return a[d] = !1, l.apply(void 0, _toConsumableArray(u))
    };
    return e[d] = setTimeout(m, c || 0), t[d] = t[d] || c, a[d] = {
      func: l,
      key: d,
      ms: c,
      params: u,
      paused: !1,
      startTime: (new Date).getTime(),
      timeSpentWaiting: 0
    }, function () {
      return r(d)
    }
  }, o = function (t) {
    return t in e || void 0 !== a[t]
  }, r = function (e) {
    return !1 === a[e]
  }, s = function (e) {
    return o(e) && !r(e)
  }, d = function (e) {
    return o(e) && a[e].paused
  }, l = function (e) {
    return !(!a[e] || d(e)) && (i(e, !1), a[e].paused = !0, a[e].timeSpentWaiting = (new Date).getTime() - a[e].startTime, a[e].timeSpentWaiting)
  }, c = function (e) {
    if (!a[e]) return !1;
    var t = a[e], i = t.func, o = t.ms, r = t.params, s = t.paused, d = t.timeSpentWaiting;
    return !!s && n.apply(void 0, [e, i, o - d].concat(_toConsumableArray(r)))
  };
  return {
    clear: i, executed: r, exists: o, pause: l, paused: d, pending: s, remaining: function (e) {
      if (!a[e]) return 0;
      var t = a[e], i = t.ms, n = t.startTime, o = t.timeSpentWaiting;
      return d(e) ? i - o : Math.max(0, n + i - (new Date).getTime())
    }, restart: function (e) {
      if (!a[e]) return !1;
      var o = a[e], r = o.func, s = o.params, d = o.paused;
      return i(e, !1), d && (a[e].paused = !1), n.apply(void 0, [e, r, t[e]].concat(_toConsumableArray(s)))
    }, resume: c, set: n
  }
}(), VmaxAdSelection = function () {
  function VmaxAdSelection() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "WEIGHT",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "RANDOM",
      a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    _classCallCheck(this, VmaxAdSelection), console.info("LOG >>> AD_SELECTION Module Loaded!"), this.httpRequest = new UtilHTTPRequest, this.algo = e, this.adAlgoType = t, this.storage = new UtilStorage, this._ = UtilLDMX(), this.macros = {
      ccb: !1,
      advid: !1
    }, this.ignoreCampaignList = [], this.adBreakIgnoreCampaignList = [], this.adBreakIgnoreAdList = [], this.adCappingCampaignIgnoreList = [], this.adCappingAdIgnoreList = [], this.matchedKVCount = 0, this.campaignCounter = 0, this.enabledCST = a
  }

  return _createClass(VmaxAdSelection, [{
    key: "getAd", value: function (e) {
      if (0 != Object.keys(e).length) {
        var t = {ccb: !1, advid: !1, mid: !1}, a = this, i = e.spotId, n = e.callback, o = e.campaignsList,
          r = e.isFcap, s = e.CustomeKeyList, d = void 0 === s ? {} : s, l = e.macros, c = void 0 === l ? {} : l,
          u = e.duration;
        if (c = c instanceof Object && c || {}, this.macros = _extends({}, t, c), this.duration = void 0 === u ? -1 : u, (new FCAP.cleanUp).storeAndReturn(), i) {
          var m = getReferenceNodeById(i);
          m.hasAttribute("data-fcap") && m.removeAttribute("data-fcap")
        }
        this.ignoreCampaignList = FCAP.getIgnoreCampaignList();
        if (0 === ("object" == (void 0 === o ? "undefined" : _typeof(o)) ? Object.keys(o) : []).length) return this.resetAdCappingIgnoreList(), void ("function" == typeof n && n({
          ad: {},
          modifiedData: o
        }));
        this.addCampaignIntoIgnoreList(o);
        var p = this.selectCampaign(o, this.algo);
        if ("" == p) return this.resetAdCappingIgnoreList(), void ("function" == typeof n && n({
          ad: {},
          modifiedData: o
        }));
        var g = o[p], v = this._.get(g, "mod.fcr", !1), h = this._.get(g, "mod.targeting.custom-data-expression", "");
        this.customKeyValues = getCustomKeyValueByPId(i);
        var f = new CampaignQualifier;
        f.setCustomKeys(this.customKeyValues);
        if (this.checkFrequencyCapForCampaign({campaignid: p, mod: v, spotId: i, isFcap: r})) this.getAd({
          spotId: i,
          callback: n,
          CustomeKeyList: d,
          campaignsList: o,
          isFcap: r,
          macros: this.macros,
          duration: this.duration
        }); else if (this.enabledCST && !f.isTargetingMatched(h)) _console.log("%c LOG >>> Ignored as No Targeting Matched for Campaign: " + p + "!", "background: #00F; color: #FFF"), this.adCappingCampaignIgnoreList.push(p), this.getAd({
          spotId: i,
          callback: n,
          CustomeKeyList: d,
          campaignsList: o,
          isFcap: r,
          macros: this.macros,
          duration: this.duration
        }); else {
          var A = this.selectAd(g.ads, p);
          if (0 == Object.keys(A).length) {
            var y = [].concat(_toConsumableArray(this.adBreakIgnoreCampaignList), _toConsumableArray(this.adCappingCampaignIgnoreList), _toConsumableArray(this.ignoreCampaignList)),
              C = Object.keys(o);
            return this.campaignCounter == Object.keys(o).length || this.arrayContainsArray(y, C) ? (this.resetAdCappingIgnoreList(), void ("function" == typeof n && n({
              ad: {},
              modifiedData: o
            }))) : (this.campaignCounter++, void this.getAd({
              spotId: i,
              callback: n,
              CustomeKeyList: d,
              campaignsList: o,
              isFcap: r,
              macros: this.macros,
              duration: this.duration
            }))
          }
          var V = A.adId, _ = this._.get(A, "mod.status-urls", []);
          _.length ? this._ajax(_[0], function (e) {
            if (304 === e.status || 200 === e.status) {
              _console.log("AD CAPPING >>> Success - " + e.status + " (Ad ID: " + V + ")");
              if (a.adCapping({
                campaignsList: o,
                randomCampaignKey: p,
                adId: V,
                instructions: e.response
              })) a.getAd({
                spotId: i,
                callback: n,
                CustomeKeyList: d,
                campaignsList: o,
                isFcap: r,
                macros: a.macros,
                duration: a.duration
              }); else {
                var t = {
                  ad: A.ad,
                  "video-duration": A.adparams["video-duration"],
                  adId: A.adId,
                  mod: g.mod || {},
                  adparams: A.adparams,
                  campaignId: p
                };
                A.adparams.hasOwnProperty("viewability") && A.adparams.viewability && Object.keys(A.adparams.viewability).length > 0 && (t.viewability = A.adparams.viewability), a.resetAdCappingIgnoreList(), "function" == typeof n && n({
                  ad: t,
                  modifiedData: o
                })
              }
            } else 404 === e.status ? (_console.log("AD CAPPING >>> 404 (Ad ID: " + V + "). skip Ad and getting another ad..."), a.adCappingAdIgnoreList.push(V), a.getAd({
              spotId: i,
              callback: n,
              CustomeKeyList: d,
              campaignsList: o,
              isFcap: r,
              macros: a.macros,
              duration: a.duration
            })) : (_console.log("AD CAPPING >>> Error other than 404 (Ad ID: " + V + "). Skipping to next ad..."), a.adCappingAdIgnoreList.push(V), a.getAd({
              spotId: i,
              callback: n,
              CustomeKeyList: d,
              campaignsList: o,
              isFcap: r,
              macros: a.macros,
              duration: a.duration
            }))
          }, !0) : (_console.log("AD CAPPING >>> No becaon URL found for ad so (ad id: " + V + ") skip"), this.adCappingAdIgnoreList.push(V), this.getAd({
            spotId: i,
            callback: n,
            CustomeKeyList: d,
            campaignsList: o,
            isFcap: r,
            macros: this.macros,
            duration: this.duration
          }))
        }
      }
    }
  }, {
    key: "checkFrequencyCapForCampaign", value: function (e) {
      var t = e.campaignid, a = e.mod, i = e.spotId, n = e.isFcap, o = CONST.utils.pick(a, ["i", "c"]);
      if (a && n) {
        if (i) {
          getReferenceNodeById(i).setAttribute("data-fcap", t)
        }
        return FCAP.addCampaign(t, o), FCAP.isFrequencyCapped({selectedCampaign: t, limit: a.limit})
      }
      return !1
    }
  }, {
    key: "selectAd", value: function (e, t) {
      switch (e = JSON.parse(this.replaceMacros(JSON.stringify(e))), this.adAlgoType) {
        case"DURATION":
          return this.selectAdDuration(e, t);
        case"DURATION-CLOSEST":
          return this.selectAdDurationClosest(e, t);
        case"DURATION-KV-PARITY":
          return this.selectAdDuration(e, t, 1);
        case"DURATION-CLOSEST-KV-PARITY":
          return this.selectAdDurationClosest(e, t, 1);
        case"KV-PARITY":
          return this.selectAdKVParity(e, t);
        default:
          return this.selectAdRandom(e, t)
      }
    }
  }, {
    key: "selectAdRandom", value: function (e, t) {
      var a = [], i = Date.parse(new Date);
      for (var n in e) e[n].adId = n, -1 == this.adCappingAdIgnoreList.indexOf(n) && (!e[n].hasOwnProperty("skipTime") || e[n].hasOwnProperty("skipTime") && i > e[n].skipTime) && a.push(e[n]);
      if (0 == a.length) return {};
      var o = this.getRndInteger(a.length);
      return _console.log("AD SELECTION >>> (Ads array length: " + a.length + ") (Random Value selected: " + o + ")"), a[o]
    }
  }, {
    key: "selectAdKVParity", value: function (e, t) {
      var a = this.matchedKVCount || 0, i = [], n = Date.parse(new Date);
      for (var o in e) if (e[o].adId = o, -1 == this.adBreakIgnoreAdList.indexOf(o) && -1 == this.adCappingAdIgnoreList.indexOf(o) && (!e[o].hasOwnProperty("skipTime") || e[o].hasOwnProperty("skipTime") && n > e[o].skipTime)) {
        var r = this.matchCustomKeyValues(e[o]);
        a == r ? (i.push(e[o]), a = r) : a < r && (i = [], i.push(e[o]), a = r)
      }
      var s = 0;
      return 0 == i.length ? (this.adBreakIgnoreCampaignList.push(t), {}) : (i.length > 1 && (s = this.getRndInteger(i.length)), this.adBreakIgnoreAdList.push(i[s].adId), _console.log("AD SELECTION by 'AD-PARITY' >>> (Ads array length: " + i.length + ") (Random Value selected: " + s + ")"), i[s])
    }
  }, {
    key: "selectAdDuration", value: function (e, t, a) {
      var i = 0, n = [];
      for (var o in e) if (e[o].adId = o, -1 == this.adBreakIgnoreAdList.indexOf(o) && -1 == this.adCappingAdIgnoreList.indexOf(o)) {
        var r = parseInt(e[o].adparams["video-duration"]);
        _console.log("Selected Ad Duration => " + r), void 0 !== r && 0 != r && (!e[o].hasOwnProperty("skipTime") || e[o].hasOwnProperty("skipTime") && currentTime > e[o].skipTime) && (r == i ? 1 == a && -1 == this.matchCustomKeyValues(e[o]) ? (_console.log("Ad Selection - KV Condition => ", a, o), this.adBreakIgnoreAdList.push(o)) : n.push(e[o]) : r > i && r <= this.duration && (1 == a && -1 == this.matchCustomKeyValues(e[o]) ? (_console.log("Ad Selection - KV Condition => ", a, o), this.adBreakIgnoreAdList.push(o)) : (n = [], n.push(e[o]), i = r)))
      }
      if (_console.log("Selected Ad by - " + (a ? "Duration + MatchCustomKeyValues" : "Duration") + " :: " + n), n.length > 1) {
        var s = this.getRndInteger(n.length);
        return this.adBreakIgnoreAdList.push(n[s].adId), n[s]
      }
      return 1 == n.length ? (this.adBreakIgnoreAdList.push(n[0].adId), n[0]) : (this.adBreakIgnoreCampaignList.push(t), {})
    }
  }, {
    key: "selectAdDurationClosest", value: function (e, t, a) {
      var i = void 0, n = [];
      for (var o in e) if (e[o].adId = o, -1 == this.adBreakIgnoreAdList.indexOf(o) && -1 == this.adCappingAdIgnoreList.indexOf(o)) {
        var r = parseInt(e[o].adparams["video-duration"]);
        if (_console.log("Selected Ad Duration" + r), void 0 !== r && 0 != r) {
          var s = this.duration - r;
          (!e[o].hasOwnProperty("skipTime") || e[o].hasOwnProperty("skipTime") && currentTime > e[o].skipTime) && (void 0 === i ? 1 == a && -1 == this.matchCustomKeyValues(e[o]) ? (_console.log("Ad Selection - KV Condition => ", a, o), this.adBreakIgnoreAdList.push(o)) : (n = [], n.push(e[o]), i = s) : s == i ? 1 == a && -1 == this.matchCustomKeyValues(e[o]) ? (_console.log("Ad Selection - KV Condition => ", a, o), this.adBreakIgnoreAdList.push(o)) : n.push(e[o]) : (i + s == 0 && s >= 0 || Math.abs(s) < Math.abs(i)) && (1 == a && -1 == this.matchCustomKeyValues(e[o]) ? (_console.log("Ad Selection - KV Condition => ", a, o), this.adBreakIgnoreAdList.push(o)) : (n = [], n.push(e[o]), i = s)))
        }
      }
      if (_console.log("Selected Ad by - " + (a ? "Duration + MatchCustomKeyValues" : "Duration") + " :: " + n),
      n.length > 1) {
        var d = this.getRndInteger(n.length);
        return this.adBreakIgnoreAdList.push(n[d].adId), n[d]
      }
      return 1 == n.length ? (this.adBreakIgnoreAdList.push(n[0].adId), n[0]) : (this.adBreakIgnoreCampaignList.push(t), {})
    }
  }, {
    key: "matchCustomKeyValues", value: function (e) {
      var t = this.customKeys || userCustomKeyValData(), a = {};
      for (var i in t) a[i.toLowerCase()] = t[i];
      _console.log("customKeys VAL => ", a);
      var n = 0, o = e.adparams["custom-keys"] || "{}", r = JSON.parse(o);
      for (var s in r) {
        var d = s.toLowerCase();
        if (Object.keys(a).includes(d)) {
          var l = a[d].split(","), c = a[d].toUpperCase(), u = r[s].toUpperCase();
          _console.log("CHECK COND => ", s, l, c, " => " + u), isValExistsInList(l, u) && n++
        }
      }
      var m = e.adparams.language, p = parseInt(e.adparams["is-fallback-ad"]) ? 1 : 0;
      m = (m || "").toUpperCase();
      var g = a.ck_loa, v = a.ck_lc, h = a.lc;
      return m && (m == (g + "").toUpperCase() || m == (getLanguageFromMap(g) + "").toUpperCase() || !g && m == (h + "").toUpperCase() || !g && m == (v + "").toUpperCase()) ? (_console.log("Language matched " + m), n++) : n = p ? 0 : -1, _console.log("%c APE: " + e.adId + " KeyMatch Counter " + n, "background: #000; color: #0F0"), n
    }
  }, {
    key: "compareCustomKeys", value: function compareCustomKeys(insCustomKeys, campaignCustomKeys) {
      function _EC_(e, t, a) {
        try {
          t = t.split(",").map(function (e) {
            return e.toUpperCase()
          });
          var i = 0, n = !1;
          if (!0 === flagInsCustomKeys) for (var o in insCustomKeys) if ("ck_" + o == e) {
            if ("!~" == a && -1 == t.indexOf(insCustomKeys[o].toUpperCase()) || "=~" == a && t.indexOf(insCustomKeys[o].toUpperCase()) > -1) return !0;
            n = !0
          } else "!~" == a ? i++ : n = !0; else if ("!~" == a) return !0;
          return !n && i > 0
        } catch (e) {
          return _console.debug("_EC_ function failed! " + e), !1
        }
      }

      var flagInsCustomKeys = Object.keys(insCustomKeys).length > 0;
      return eval(campaignCustomKeys)
    }
  }, {
    key: "selectCampaign", value: function (e) {
      var t = {}, a = Date.parse(new Date);
      if (!Object.keys(e).length) return null;
      for (var i in e) -1 == this.adCappingCampaignIgnoreList.indexOf(i) && -1 == this.ignoreCampaignList.indexOf(i) && -1 == this.adBreakIgnoreCampaignList.indexOf(i) && (!e[i].hasOwnProperty("skipTime") || e[i].hasOwnProperty("skipTime") && a > e[i].skipTime) && e[i].hasOwnProperty("weight") && e[i].weight > 0 && (t[i] = e[i].weight);
      if (!Object.keys(t).length) return "";
      switch (this.algo) {
        case"RANDOM":
          return this.randomLogic(t);
        default:
          return this.weightLogic(t)
      }
    }
  }, {
    key: "weightLogic", value: function (e) {
      _console.debug("CampaignWeight :  " + JSON.stringify(e));
      var t = this.getRndInteger(function (e) {
        return Object.values(e).reduce(function (e, t) {
          return e + t
        })
      }(e));
      _console.log("Random_Num  : " + t);
      for (var a in e) {
        if (t < e[a]) return _console.log("AD SELECTION >>> (Selected Campaign : " + a + ")"), a;
        t -= e[a]
      }
    }
  }, {
    key: "_ajax", value: function (e, t, a) {
      var i = new XMLHttpRequest;
      i.timeout = 5e3, i.onreadystatechange = function () {
        4 == this.readyState && t(a ? this : this.status)
      }, i.ontimeout = function () {
        _console.debug("Campaign beacon timeout!" + e), _console.log("errno=6&errDesc=Campaign beacon timeout!"), t("timeout")
      }, i.open("GET", e, !0), i.send()
    }
  }, {
    key: "isBeaconValid", value: function (e, t) {
      var a = this, i = 0, n = [];
      if (Array.isArray(e)) for (var o = 0; o < e.length; o++) !function (o) {
        var r = a.replaceMacros(e[o]);
        a._ajax(r, function (a) {
          if (i++, n.push(a), i === e.length) {
            for (var o = !0, s = 0; s < n.length; s++) {
              if (404 == n[s]) {
                _console.log("LOG >>> Campaign beacon 404: " + r), o = !1;
                break
              }
              if (!/200|304|404/gi.test(n[s])) {
                o = "others";
                break
              }
            }
            t(o)
          }
        })
      }(o)
    }
  }, {
    key: "replaceMacros", value: function (e) {
      return e = this.replaceCustomKeyMacros(e), e.replace(/\[ccb\]|\{ccb\}/gi, this.macros.ccb ? encodeURI(this.macros.ccb) : "").replace(/\[advid\]|\[jjid\]|\{jjid\}|\{advid\}/gi, this.macros.advid ? encodeURI(this.macros.advid) : "").replace(/\[ua\]|\{ua\}/gi, this.macros.ua ? encodeURI(this.macros.ua) : "").replace(/\[uid\]|\{uid\}/gi, this.macros.uid ? encodeURI(this.macros.uid) : "").replace(/\[vr\]|\{vr\}/gi, this.macros.vr ? encodeURI(this.macros.vr) : "").replace(/\[ci\]|\{ci\}/gi, this.macros.ci ? encodeURI(this.macros.ci) : "").replace(/\[co\]|\{co\}/gi, this.macros.co ? encodeURI(this.macros.co) : "").replace(/\[st\]|\{st\}/gi, this.macros.st ? encodeURI(this.macros.st) : "").replace(/\[mid\]|\{mid\}/gi, this.macros.mid ? encodeURIComponent(this.macros.mid) : "").replace(/%7Bccb%7D|%5Bccb%5D/gi, this.macros.ccb ? encodeURI(this.macros.ccb) : "").replace(/%7Badvid%7D|%5Bjjid%5D|%5Badvid%5D/gi, this.macros.advid ? encodeURI(this.macros.advid) : "").replace(/%7Bua%7D|%5Bua%5D/gi, this.macros.ua ? encodeURI(this.macros.ua) : "").replace(/%7Buid%7D|%5Buid%5D/gi, this.macros.uid ? encodeURI(this.macros.uid) : "").replace(/%7Bvr%7D|%5Bvr%5D/gi, this.macros.vr ? encodeURI(this.macros.vr) : "").replace(/%7Bci%7D|%5Bci%5D/gi, this.macros.ci ? encodeURI(this.macros.ci) : "").replace(/%7Bco%7D|%5Bco%5D/gi, this.macros.co ? encodeURI(this.macros.co) : "").replace(/%7Bst%7D|%5Bst%5D/gi, this.macros.st ? encodeURI(this.macros.st) : "").replace(/%5Bmid%5D/gi, this.macros.mid ? encodeURI(this.macros.mid) : "")
    }
  }, {
    key: "replaceCustomKeyMacros", value: function (e) {
      var t = Object.assign({}, this.customKeyValues);
      -1 !== Object.keys(t).indexOf("ck_loa") && delete t.lc;
      for (var a in t) {
        var i = a.replace("ck_", "ck."), n = new RegExp("\\[" + i + "]|%5B" + i + "%5D", "gi");
        e = e.replace(n, t[a] ? encodeURI(t[a]) : "")
      }
      return e
    }
  }, {
    key: "getRndInteger", value: function (e) {
      return Math.floor(Math.random() * e)
    }
  }, {
    key: "addAdToIgnoreList", value: function (e) {
      this.adBreakIgnoreAdList.push(e)
    }
  }, {
    key: "adCapping", value: function (e) {
      var t = e.campaignsList, a = e.randomCampaignKey, i = e.adId, n = e.instructions, o = Date.parse(new Date),
        r = t[a], s = t[a].ads[i];
      Object.keys(t[a].ads);
      if (!this.IsJsonValid(n)) return this.adCappingAdIgnoreList.push(i), _console.log("AD CAPPING >>> JSON Not Valid For (Ad id: " + i + ")"), !0;
      n = JSON.parse(n).instructions;
      for (var d = 0; d < n.length; d++) {
        if ("DC" == n[d].action) return delete t[a], !0;
        if ("DA" == n[d].action) return delete t[a].ads[i], 0 == Object.keys(t[a].ads).length && (_console.log("AD CAPPING >>> No ad found for Campaign so (Campaign id: " + a + "). Deleting campaign from storage "), delete t[a]), !0;
        if ("SC" == n[d].action) {
          if (n[d]["action-expiry"] > 0) {
            var l = n[d]["action-expiry"];
            l > o ? r.skipTime = l : this.adCappingCampaignIgnoreList.push(a)
          } else this.adCappingCampaignIgnoreList.push(a);
          return !0
        }
        if ("SA" == n[d].action) {
          var c = Object.keys(r.ads);
          if (n[d]["action-expiry"] > 0) {
            var u = n[d]["action-expiry"];
            u > o && (s.skipTime = u, this.isAllAdsAreSkip(r.ads) && (r.skipTime = u))
          }
          return this.adCappingAdIgnoreList.push(i), this.arrayContainsArray([].concat(_toConsumableArray(this.adCappingAdIgnoreList), _toConsumableArray(this.getSkipAdList(r.ads))), c) && this.adCappingCampaignIgnoreList.push(a), !0
        }
        return "noaction" == n[d].action ? (r.hasOwnProperty("skipTime") && delete r.skipTime, s.hasOwnProperty("skipTime") && delete s.skipTime, !1) : (this.adCappingAdIgnoreList.push(i), !0)
      }
    }
  }, {
    key: "IsJsonValid", value: function (e) {
      try {
        JSON.parse(e)
      } catch (e) {
        return !1
      }
      return !0
    }
  }, {
    key: "resetAdCappingIgnoreList", value: function () {
      this.campaignCounter = 0, "RANDOM" == this.adAlgoType && (this.adCappingAdIgnoreList = [], this.adCappingCampaignIgnoreList = [])
    }
  }, {
    key: "arrayContainsArray", value: function (e, t) {
      return 0 !== t.length && 0 !== e.length && t.every(function (t) {
        return e.indexOf(t) >= 0
      })
    }
  }, {
    key: "isAllAdsAreSkip", value: function (e) {
      var t = 0;
      for (var a in e) e[a].hasOwnProperty("skipTime") && t++;
      return Object.keys(e).length === t
    }
  }, {
    key: "getSkipAdList", value: function (e) {
      var t = [], a = Date.parse(new Date);
      for (var i in e) e[i].hasOwnProperty("skipTime") && a < e[i].skipTime && t.push(i);
      return t
    }
  }, {
    key: "addCampaignIntoIgnoreList", value: function (e) {
      var t = [].concat(_toConsumableArray(this.adBreakIgnoreAdList), _toConsumableArray(this.adCappingAdIgnoreList));
      for (var a in e) {
        var i = Object.keys(e[a].ads);
        this.arrayContainsArray(t, i) && -1 == this.adBreakIgnoreCampaignList.indexOf(a) && this.adBreakIgnoreCampaignList.push(a)
      }
    }
  }]), VmaxAdSelection
}(), CampaignQualifier_OLD = function () {
  function CampaignQualifier_OLD(e) {
    _classCallCheck(this, CampaignQualifier_OLD), window.customKeys = _extends({}, e)
  }

  return _createClass(CampaignQualifier_OLD, [{
    key: "isTargetingMatched",
    value: function isTargetingMatched(targeting) {
      var customKeyValExpression = targeting.hasOwnProperty("custom-data-expression") && targeting["custom-data-expression"];
      if (_console.log("CustomKeyValExpression => " + (customKeyValExpression || "NO_EXP")), customKeyValExpression) {
        var retVal = eval(customKeyValExpression);
        return console.info("EXP_VALUE => ", retVal), retVal
      }
      return !0
    }
  }, {
    key: "checkCKVT", value: function checkCKVT(str_exp) {
      return eval(str_exp)
    }
  }]), CampaignQualifier_OLD
}(), getCustomKeyValueByPId = function (e) {
  var t = {}, a = ["scat", "pcat", "loa", "lc"];
  for (var i in __vmax_data) (/^ck_/g.test(i) || a.indexOf(i) >= 0) && (t[i] = __vmax_data[i]);
  var n = getInsTagParameters(e);
  for (var o in n) (/^ck_/g.test(o) || a.indexOf(o) >= 0) && (t[o] = n[o]);
  return t
}, userCustomKeyValData = function () {
  var e = ["lc"], t = _extends({}, window.customKeys, __vmax_data);
  this.customKeys = {};
  for (var a in t) t[a] && (e.includes(a) ? this.customKeys[a] = getLanguageFromMap(t[a]) : this.customKeys[a] = t[a]);
  return this.customKeys
}, ADSEQUENCE = {
  storage: new UtilStorage, setConfig: function (e, t, a, i) {
    var n, o, r = "adseq_" + e, s = r + "_" + t;
    if (a.hasOwnProperty("show-ad-counter") && 0 == a["show-ad-counter"] && (a = {}), i.hasOwnProperty("show-ad-counter") && 0 == i["show-ad-counter"] && (i = {}), (0 != Object.keys(a).length || 0 != Object.keys(i).length) && (n = JSON.parse(localStorage.getItem(r)), o = JSON.parse(localStorage.getItem(s)), null === n || 0 === Object.keys(n).length)) {
      if (null !== n) return void (0 == Object.keys(a).length ? (ADSEQUENCE.storage.removeStorage(r, "local"), ADSEQUENCE.storage.setStorage(s, i, "local")) : (ADSEQUENCE.storage.removeStorage(s, "local"), ADSEQUENCE.storage.setStorage(r, a, "local")));
      if (null === o || 0 === Object.keys(o).length) return null !== o ? void (0 == Object.keys(a).length ? (ADSEQUENCE.storage.removeStorage(r, "local"), ADSEQUENCE.storage.setStorage(s, i, "local")) : (ADSEQUENCE.storage.removeStorage(s, "local"), ADSEQUENCE.storage.setStorage(r, a, "local"))) : void (0 == Object.keys(a).length ? ADSEQUENCE.storage.setStorage(s, i, "local") : ADSEQUENCE.storage.setStorage(r, a, "local"))
    }
  }, getConfig: function (e, t) {
    var a = "adseq_" + e, i = a + "_" + t, n = ADSEQUENCE.storage.getStorage(a, "local"),
      o = ADSEQUENCE.storage.getStorage(i, "local"),
      r = null === localStorage.getItem(a) && null === localStorage.getItem(i),
      s = 0 == Object.keys(o).length && 0 == Object.keys(n).length;
    return r || s ? {isKeyNull: r, isConfigEmpty: s} : 0 == Object.keys(n).length ? {key: i, config: o} : {
      key: a,
      config: n
    }
  }, getPermissionForAdRequest: function (e, t) {
    var a = this.getConfig(e, t), i = a.hasOwnProperty("isKeyNull") && a.isKeyNull,
      n = a.hasOwnProperty("isConfigEmpty") && a.isConfigEmpty,
      o = a.hasOwnProperty("config") && a.config.hasOwnProperty("show-ad-counter"), r = (new Date).getTime();
    return !!(i || n || o) || (a.config["sleep-time"] < r ? (ADSEQUENCE.storage.removeStorage(a.key, "local"), !0) : (a.config.hasOwnProperty("ad-request-skip-counter") && (a.config["ad-request-skip-counter"] -= 1, 0 === a.config["ad-request-skip-counter"] && (a.config = {}), ADSEQUENCE.storage.setStorage(a.key, a.config, "local")), !1))
  }, decrementShowAdCounter: function (e, t) {
    var a = this.getConfig(e, t);
    if (a.hasOwnProperty("isKeyNull") && a.isKeyNull) return !0;
    if (a.config.hasOwnProperty("show-ad-counter")) {
      if (a.config["show-ad-counter"] -= 1, a.config["show-ad-counter"] <= 0) {
        delete a.config["show-ad-counter"];
        var i = new Date;
        a.config["sleep-time"] = i.setMinutes(i.getMinutes() + a.config["ad-request-sleep-time"])
      }
      ADSEQUENCE.storage.setStorage(a.key, a.config, "local")
    }
  }
}, VmaxAdStorage = function (e) {
  function t(e) {
    _classCallCheck(this, t);
    var a = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return e ? (a.STORAGE_NAME = e, a.flagLocalStorageSupport = function () {
      try {
        return localStorage.setItem("VMAX_LOCALSTORAGE_TEST", "true"), localStorage.removeItem("VMAX_LOCALSTORAGE_TEST"), !0
      } catch (e) {
        return _console.log("LOG >>> localStorage is not supported!!!"), !1
      }
    }(), a) : _possibleConstructorReturn(a)
  }

  return _inherits(t, e), _createClass(t, [{
    key: "getAllData", value: function () {
      try {
        if (!this.flagLocalStorageSupport) return {};
        var e = localStorage.getItem(this.STORAGE_NAME);
        return JSON.parse(e) || {}
      } catch (e) {
        return {}
      }
    }
  }, {
    key: "getCampaigns", value: function (e) {
      try {
        var t = this.getAllData();
        return !!(t && Object.keys(t).length > 0 && t.hasOwnProperty(e)) && t[e].campaigns
      } catch (e) {
        return {}
      }
    }
  }, {
    key: "setCampaigns", value: function (e, t) {
      try {
        var a = this.getAllData();
        return !!(a && Object.keys(a).length > 0 && a.hasOwnProperty(e)) && (a[e].campaigns = t, localStorage.setItem(this.STORAGE_NAME, JSON.stringify(a)), !0)
      } catch (e) {
        return !1
      }
    }
  }, {
    key: "getAdSize", value: function (e) {
      try {
        var t = this.getAllData();
        return !!(t && Object.keys(t).length > 0 && t.hasOwnProperty(e)) && t[e].size
      } catch (e) {
        return !1
      }
    }
  }, {
    key: "get", value: function (e) {
      var t = UtilLDMX(), a = e.type, i = e.value, n = e.defaultValue, o = a && i ? "" : e, r = {
        EXPIRYDATE: "expiryDate",
        EXPIRY: "expiry",
        VR: "[adspotkey].vr",
        ADSPOT: "[adspotkey]",
        THROTTLE: "[adspotkey].throttle",
        MULTIADS: "[adspotkey].multiads",
        "BACKUP-ADS": "[adspots][adspotkey].backup-ads"
      };
      ["expiry", "expiryDate"].map(function (e) {
        return e.toUpperCase()
      }).indexOf(e) >= 0 ? o = r[e] : o || (o = r[a].replace("[adspotkey]", i));
      var s = this.getAllData();
      return t.get(s, o, n || "")
    }
  }, {
    key: "setData", value: function (e, t) {
      try {
        var a = this.getAllData();
        return a[e] = t, localStorage.setItem(this.STORAGE_NAME, JSON.stringify(a)), !0
      } catch (e) {
        return !1
      }
    }
  }, {
    key: "set", value: function (e) {
      try {
        return !(!this.flagLocalStorageSupport || !e) && (localStorage.setItem(this.STORAGE_NAME, JSON.stringify(e)), !0)
      } catch (e) {
        return !1
      }
    }
  }]), t
}(UtilStorage), VmaxAppConfg = function () {
  function e() {
    _classCallCheck(this, e), console.info("Invoking APP_CONFIG - constructor"), this.configKey = "app-config", this.sScope = "local", this.getHTTPService = new UtilHTTPRequest, this.masterConfigRequestStateKey = "app-cfg-rq-state", this.cbSuccess = [], this.cbError = [], this.extra = {}, this.storage = new UtilStorage
  }

  return _createClass(e, [{
    key: "fetch", value: function (e, t, a, i) {
      var n = this.getConfigPath();
      this.getHTTPService.sendRequest(n, {method: "GET", timeout: 5e3, checkJSON: !0}, a, i)
    }
  }, {
    key: "isExpired", value: function () {
      var e = this.storage.getStorage(this.configKey, this.sScope), t = this.get("expiryDate"),
        a = this.validateExpiry(t);
      return 0 == Object.keys(e).length || !a
    }
  }, {
    key: "validateExpiry", value: function (e) {
      return e > (Date.now ? Date.now() : (new Date).getTime())
    }
  }, {
    key: "setExpiryTime", value: function (e, t, a) {
      var i = UtilLDMX(), n = new Date;
      !e && Object.keys(t).length > 0 && (e = i.get(t, "expiry", 0));
      var o = n.addMinutes(e).getTime(), r = _extends({}, t, {expiryDate: o});
      return a ? (this.storage.setStorage(this.configKey, r, this.sScope), null) : r
    }
  }, {
    key: "init", value: function (e, t, a) {
      return this.config = e, this.cbSuccess.push(t), this.cbError.push(a), this.masterConfigState = sessionStorage.getItem(this.masterConfigRequestStateKey) || 0, this.isPlatformKaios = this.config.hasOwnProperty("platform") && "kai" == this.config.platform, this.isExpired() ? 0 != this.masterConfigState && this.isPlatformKaios ? 2 == this.masterConfigState ? this.executeCallback(this.cbError) : void 0 : (this.storage.setStorage(this.masterConfigRequestStateKey, 1), void this.download()) : this.executeCallback(this.cbSuccess)
    }
  }, {
    key: "download", value: function () {
      var e = this, t = function (t) {
        _console.debug(t);
        var a = JSON.parse(t);
        e.setExpiryTime("", a, 1), e.storage.setStorage(e.masterConfigRequestStateKey, 0), e.executeCallback(e.cbSuccess)
      }, a = function (t) {
        _console.debug(t), e.storage.setStorage(e.masterConfigRequestStateKey, 2), e.executeCallback(e.cbError)
      };
      this.fetch("", {}, t, a), console.info("Response from FETCH", "rs")
    }
  }, {
    key: "executeCallback", value: function (e) {
      if (e.length) {
        for (var t = 0; t < e.length; t++) "function" == typeof e[t] && e[t]();
        this.cbSuccess.length = 0, this.cbError.length = 0
      }
    }
  }, {
    key: "get", value: function (e) {
      var t = UtilLDMX(), a = e.type, i = e.value, n = e.defaultValue, o = a && i ? "" : e, r = {
        EXPIRYDATE: "expiryDate",
        EXPIRY: "expiry",
        VR: "adspots.[adspotkey].vr",
        ADSPOT: "adspots.[adspotkey]",
        THROTTLE: "adspots.[adspotkey].throttle",
        MULTIADS: "adspots.[adspotkey].multiads",
        "BACKUP-ADS": "adspots.[adspotkey].backup-ads",
        "OFFSET-LATENCY": "adspots.[adspotkey].latencyPerAd",
        TARGETING: "te",
        "AD-PARITY": "ape",
        "CHUNK-LENGTH": "cz"
      };
      ["expiry", "expiryDate", "te"].map(function (e) {
        return e.toUpperCase()
      }).indexOf(e) >= 0 ? o = r[e] : o || (o = r[a].replace("[adspotkey]", i));
      var s = this.storage.getStorage(this.configKey, this.sScope);
      return t.get(s, o, n || "")
    }
  }, {
    key: "reLoad", value: function () {
    }
  }, {
    key: "getAppName", value: function () {
    }
  }, {
    key: "getAppConfig", value: function () {
      return {app: "app-config-003", platform: "kai", vr: "KAI-3.x.x", av: "1.0", osv: "XXX"}
    }
  }, {
    key: "getConfigPath", value: function () {
      var e = this.config, t = e.platform, a = e.app, i = _objectWithoutProperties(e, ["platform", "app"]),
        n = "https://jioads.akamaized.net/gc/ap/" + t + "/" + a + ".json?t=" + (Date.now() || (new Date).getTime()) + "&" + this.obj2URLEncoded(i);
      return _console.log(n), n
    }
  }, {
    key: "obj2URLEncoded", value: function (e) {
      var t = [], a = ["extra"];
      if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
        for (var i in e) e.hasOwnProperty(i) && -1 == a.indexOf(i) && t.push(i + "=" + e[i]);
        return encodeURI(t.join("&"))
      }
      return ""
    }
  }]), e
}(), CampaignQualifier = function () {
  function e(t) {
    _classCallCheck(this, e), window.customKeys = "object" == (void 0 === t ? "undefined" : _typeof(t)) && Object.keys(t).length > 0 ? _extends({}, t) : {}, this.supportedParamsByClient = [1], this.isNativePlatform = !1, this.setPlatformIdentifier(), _console.log("Loading CampaignQualifier - 'v1.3.3'")
  }

  return _createClass(e, [{
    key: "setPlatformIdentifier", value: function () {
      this.isNativePlatform = "object" == ("undefined" == typeof cqJClass ? "undefined" : _typeof(cqJClass))
    }
  }, {
    key: "setCustomKeys", value: function (e) {
      window.customKeys = _extends({}, e)
    }
  }, {
    key: "isTargetingMatched", value: function (e) {
      var t = e;
      if (_console.log("CustomKeyValExpression => " + (t || "NO_EXP")), t) {
        var a = this.checkCKVT2(t);
        return console.info("%c Targeting - EXP_VALUE => " + a, "background: #222; color: #FF0"), a
      }
      return !0
    }
  }, {
    key: "checkCKVT2", value: function (e) {
      var t = ["checkCKVT", "_EC_"], a = e.split("&&"), i = a.map(function (e) {
        var a = !1, i = t.find(function (e) {
          return e.indexOf(t)
        }), n = [];
        if (i) {
          var o = new RegExp(/"|checkCKVT|\(|\)/, "g");
          n = e.replace(o, ""), a = fnRegistryBlock[i](n.split("'"))
        }
        return _console.log("Expression " + e + " evaluted to => " + a), a
      });
      return _console.log("Final return value => ", i), i.reduce(function (e, t) {
        return e && t
      }, [])
    }
  }, {
    key: "getSupportedTargeting", value: function (e) {
      var t = [], a = Array.isArray(e) ? e : e.split(",").map(function (e) {
        return parseInt(e)
      }), i = this.supportedParamsByClient;
      for (var n in i) a.includes(i[n]) && t.push(i[n]);
      if (t = t.toString(), !this.isNativePlatform) return t;
      this.onSupportedTargeting(t)
    }
  }, {
    key: "onSupportedTargeting", value: function (e) {
      try {
        _console.log("Dispatch in onSupportedTargeting: VAL => " + e), cqJClass.onSupportedTargeting(e)
      } catch (t) {
        _console.log("Caught in onSupportedTargeting: VAL => " + e + ", Error: " + t)
      }
    }
  }, {
    key: "matchTargetingExpression", value: function (e, t) {
      window.customKeys = _extends({}, t);
      var a = !0;
      if (a = this.isTargetingMatched(e), !this.isNativePlatform) return a;
      this.onMatchTargetingExpression(a)
    }
  }, {
    key: "onMatchTargetingExpression", value: function (e) {
      try {
        _console.log("Dispatch in onMatchTargetingExpression: VAL => " + e), cqJClass.onMatchTargetingExpression(e)
      } catch (t) {
        _console.log("Caught in onMatchTargetingExpression: VAL => " + e + ", Error: " + t)
      }
    }
  }]), e
}(), fnRegistryBlock = {
  checkCKVT: function (e) {
    var t = e.filter(function (e, t, a) {
      return !("" == e || " " == e || "," == e || ", " == e || " ," == e || " , " == e)
    });
    return _EC_(t[0], t[1], t[2])
  }
}, isValExistsInList = function (e, t, a) {
  for (var i in e) if (_console.log("isValExistsInList => ", t.toUpperCase(), e[i]), t = t.split(",").map(function (e) {
    return e.trim()
  }).join("|"), new RegExp("^" + t.toUpperCase() + "$", "i").test(e[i].trim())) return _console.log("isValExistsInList => Returns: TRUE"), !0;
  return _console.log("isValExistsInList => Returns: FALSE"), !1
}, _EC_ = function (e, t, a) {
  _console.log("Executing custom key-val expression", arguments);
  try {
    if (["pcat", "scat"].includes(e)) return _console.log("Evaluted to TRUE as key: ${key} found!"), !0;
    this.customKeys = "function" == typeof userCustomKeyValData ? userCustomKeyValData() : this.customKeys, t = t.split(",").map(function (e) {
      return e.toUpperCase()
    });
    var i = Object.keys(this.customKeys).length, n = 0, o = !1;
    if (i) for (var r in this.customKeys) if (new RegExp("^" + r + "$", "i").test(e)) {
      if ("!~" == a && !isValExistsInList(t, this.customKeys[r]) || "=~" == a && isValExistsInList(t, this.customKeys[r])) return !0;
      o = !0
    } else "!~" == a ? n++ : o = !0; else if ("!~" == a) return !0;
    return !o && n > 0
  } catch (e) {
    return _console.debug(e), !1
  }
}, FCAP = {
  storage: new UtilStorage, setValue: function (e, t, a) {
    var i = Array.isArray(e) ? e : e.split(".");
    return i.length > 1 ? (a.hasOwnProperty(i[0]) && "object" === _typeof(a[i[0]]) || (a[i[0]] = {}), this.setValue(i.slice(1), t, a[i[0]])) : (a[i[0]] = t, !0)
  }, addCampaign: function (e, t) {
    var a = FCAP.storage.getStorage("campaignList", "local"), i = FCAP.storage.getStorage("serverExpiryTime", "local"),
      n = new Date, o = t.i, r = t.c, s = parseInt(t.expiry) || 30, d = e;
    this.setCounter = function (e, t) {
      e && e.hasOwnProperty("m") && this.setValue(d + "." + t + ".m", null, a), e && e.hasOwnProperty("h") && this.setValue(d + "." + t + ".h", null, a), e && e.hasOwnProperty("d") && this.setValue(d + "." + t + ".d", null, a), e && e.hasOwnProperty("l") && this.setValue(d + "." + t + ".l", null, a)
    }, a.hasOwnProperty(d) ? (a[d].i.hash !== JSON.stringify(o) && (delete a[d].i, this.setCounter(o, "i"), i["c_" + d] = t), a[d].c.hash !== JSON.stringify(r) && (delete a[d].c, this.setCounter(r, "c"), i["c_" + d] = t)) : (this.setCounter(o, "i"), this.setCounter(r, "c")), i["c_" + d] = t, this.setValue(d + ".i.hash", JSON.stringify(o), a), this.setValue(d + ".c.hash", JSON.stringify(r), a), this.setValue(d + ".expireTime", n.setDate(n.getDate() + s) - (60 * n.getHours() * 60 * 1e3 + 60 * n.getMinutes() * 1e3 + 1e3 * n.getSeconds()), a), FCAP.storage.setStorage("campaignList", a, "local"), FCAP.storage.setStorage("serverExpiryTime", i, "local"), _console.log("FCAP Campaign Expiry Time :  " + new Date(a[d].expireTime))
  }, cleanUp: function (e) {
    this.id = e && e.id ? e.id : "", this.type = e && e.type ? e.type : "", this.campaignList = FCAP.storage.getStorage("campaignList", "local"), this.localStorageServerExpiryTime = FCAP.storage.getStorage("serverExpiryTime", "local"), this.get = function () {
      return this.validate("" !== this.type ? this.campaignList[this.id] : "" == this.id ? this.campaignList : CONST.utils.pick(this.campaignList, [this.id]))
    }, this.storeAndReturn = function () {
      return !this.id && !this.type && (this.campaignList = this.get(), FCAP.storage.setStorage("campaignList", this.campaignList, "local"), this.campaignList)
    }, this.validate = function (t) {
      var a = Date.hasOwnProperty("now") ? Date.now() : (new Date).getTime(), i = null,
        n = JSON.parse(sessionStorage.getItem("ignoreCampaignList")) || [],
        o = this.campaignList.hasOwnProperty(this.id) && this.campaignList[this.id].hasOwnProperty(this.type) && this.campaignList[this.id][this.type].hasOwnProperty("expireTime");
      if (campaign = t, e && this.id && this.type && !o) return campaign;
      if ("" !== this.type) for (var r in campaign[this.type]) a > campaign[this.type].expireTime[r] && (campaign[this.type][r] = 0, delete campaign[this.type].expireTime[r]); else for (var s in campaign) {
        for (var d in campaign[s]) if (d.match(/^(i|c)$/)) for (var l in campaign[s][d]) campaign[s][d].hasOwnProperty("expireTime") && l.match(/^(m|h|d)$/) && a > campaign[s][d].expireTime[l] && (campaign[s][d][l] = 0, n.splice(n.indexOf(campaign), 1), FCAP.storage.setStorage("ignoreCampaignList", n), delete campaign[s][d].expireTime[l]), l.match(/^(m|h|d|l)$/) && "number" == typeof campaign[s][d][l] && (i += campaign[s][d][l]);
        (a > campaign[s].expireTime || 0 === i) && (delete campaign[s], delete this.localStorageServerExpiryTime["c_" + s], FCAP.storage.setStorage("serverExpiryTime", this.localStorageServerExpiryTime, "local"))
      }
      return campaign
    }
  }, incrementCounter: function (e) {
    if (this.setExpiryTime = function (e) {
      if (e) {
        var t = e, a = {};
        if (t && t.hasOwnProperty("m")) {
          var i = new Date;
          a.m = i.setMinutes(i.getMinutes() + parseInt(t.m)) - 1e3 * i.getSeconds()
        }
        if (t && t.hasOwnProperty("h")) {
          var n = new Date;
          a.h = n.setHours(n.getHours() + parseInt(t.h)) - (60 * n.getMinutes() * 1e3 + 1e3 * n.getSeconds())
        }
        if (t && t.hasOwnProperty("d")) {
          var o = new Date;
          a.d = o.setDate(o.getDate() + parseInt(t.d)) - (60 * o.getHours() * 60 * 1e3 + 60 * o.getMinutes() * 1e3 + 1e3 * o.getSeconds())
        }
        return a
      }
    }, this.setExpiryTimeByType = function (e) {
      var o = i["c_" + n][t], r = _defineProperty({}, e, o[e]);
      if (void 0 != r[e] || null != r[e]) {
        var s = this.setExpiryTime(r)[e];
        this.setValue(n + "." + t + ".expireTime." + e, s, a)
      }
    }, this.print = function () {
      _console.log("FCAP Cuurent Time :  " + new Date);
      for (var e in a[n][t].expireTime) _console.debug("FCAP for " + t.repeat(3).toUpperCase() + " :=: " + e.toUpperCase() + " : " + new Date(a[n][t].expireTime[e]));
      _console.log("campaignList " + JSON.stringify(a))
    }, e) {
      var t = e.type, a = FCAP.storage.getStorage("campaignList", "local"),
        i = FCAP.storage.getStorage("serverExpiryTime", "local"), n = e.campaignId;
      if (a[n] = new this.cleanUp({id: n, type: t}).get(), a[n][t].hasOwnProperty("expireTime")) {
        var o = a[n][t].expireTime;
        o.hasOwnProperty("m") || this.setExpiryTimeByType("m"), o.hasOwnProperty("h") || this.setExpiryTimeByType("h"), o.hasOwnProperty("d") || this.setExpiryTimeByType("d")
      } else a[n][t].expireTime = this.setExpiryTime(i["c_" + n][t]);
      this.print();
      for (var r in a[n][t]) r.match(/^(m|h|d|l)$/) && (a[n][t][r] += 1);
      FCAP.storage.setStorage("campaignList", a, "local")
    }
  }, getCampaignList: function () {
    var e = (new this.cleanUp).storeAndReturn(), t = {i: {}, c: {}};
    for (var a in e) e[a].hasOwnProperty("i") && (e[a].i.hasOwnProperty("expireTime") && delete e[a].i.expireTime, e[a].i.hasOwnProperty("hash") && delete e[a].i.hash, t.i[a] = e[a].i), e[a].hasOwnProperty("c") && (e[a].c.hasOwnProperty("expireTime") && delete e[a].c.expireTime, e[a].c.hasOwnProperty("hash") && delete e[a].c.hash, t.c[a] = e[a].c);
    return 0 == Object.keys(t.i).length && delete t.i, 0 == Object.keys(t.c).length && delete t.c, t
  }, isFrequencyCapped: function (e) {
    var t = e.selectedCampaign, a = e.limit, i = new this.cleanUp({id: t}).get()[t],
      n = JSON.parse(sessionStorage.getItem("ignoreCampaignList")) || [], o = {limit: a, i: i.i || {}, c: i.c || {}},
      r = !1;
    for (var s in o.limit) {
      var d = o[s].hasOwnProperty("m") && o[s].m, l = o[s].hasOwnProperty("d") && o[s].d,
        c = o[s].hasOwnProperty("h") && o[s].h, u = o[s].hasOwnProperty("l") && o[s].l;
      if (o.limit[s].hasOwnProperty("l") && o.limit[s].l <= u) {
        r = !0, _console.log("Inside L");
        break
      }
      if (o.limit[s].hasOwnProperty("m") && o.limit[s].m <= d) {
        _console.log("Inside M"), r = !0;
        break
      }
      if (o.limit[s].hasOwnProperty("h") && o.limit[s].h <= c) {
        r = !0, _console.log("Inside H");
        break
      }
      if (o.limit[s].hasOwnProperty("d") && o.limit[s].d <= l) {
        r = !0, _console.log("Inside D");
        break
      }
    }
    return r && (n.push(t), FCAP.storage.setStorage("ignoreCampaignList", n)), r
  }, getIgnoreCampaignList: function () {
    return (new this.cleanUp).storeAndReturn(), JSON.parse(sessionStorage.getItem("ignoreCampaignList")) || []
  }, init: function (e) {
    if (e) {
      var t = e.pId, a = e.type, i = getReferenceNodeById(t);
      i.hasAttribute("data-fcap") && this.incrementCounter({campaignId: i.getAttribute("data-fcap"), type: a})
    }
  }
};
!function (e, t) {
  "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports.inView = t() : e.inView = t()
}(this, function () {
  return function (e) {
    function t(i) {
      if (a[i]) return a[i].exports;
      var n = a[i] = {exports: {}, id: i, loaded: !1};
      return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }

    var a = {};
    return t.m = e, t.c = a, t.p = "", t(0)
  }([function (e, t, a) {
    "use strict";
    var i = a(2), n = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(i);
    e.exports = n.default
  }, function (e, t) {
    function a(e) {
      var t = void 0 === e ? "undefined" : _typeof(e);
      return null != e && ("object" == t || "function" == t)
    }

    e.exports = a
  }, function (e, t, a) {
    "use strict";

    function i(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var n = a(9), o = i(n), r = a(3), s = i(r), d = a(4);
    t.default = function () {
      if ("undefined" != typeof window) {
        var e = ["scroll", "resize", "load"], t = {history: []}, a = {offset: {}, threshold: 0, test: d.inViewport},
          i = (0, o.default)(function () {
            t.history.forEach(function (e) {
              t[e].check()
            })
          }, 100);
        e.forEach(function (e) {
          return addEventListener(e, i)
        }), window.MutationObserver && addEventListener("DOMContentLoaded", function () {
          new MutationObserver(i).observe(document.body, {attributes: !0, childList: !0, subtree: !0})
        });
        var n = function (e) {
          if ("string" == typeof e) {
            var i = [].slice.call(document.querySelectorAll(e));
            return t.history.indexOf(e) > -1 ? t[e].elements = i : (t[e] = (0, s.default)(i, a), t.history.push(e)), t[e]
          }
        };
        return n.offset = function (e) {
          if (void 0 === e) return a.offset;
          var t = function (e) {
            return "number" == typeof e
          };
          return ["top", "right", "bottom", "left"].forEach(t(e) ? function (t) {
            return a.offset[t] = e
          } : function (i) {
            return t(e[i]) ? a.offset[i] = e[i] : null
          }), a.offset
        }, n.threshold = function (e) {
          return "number" == typeof e && e >= 0 && e <= 1 ? a.threshold = e : a.threshold
        }, n.test = function (e) {
          return "function" == typeof e ? a.test = e : a.test
        }, n.is = function (e) {
          return a.test(e, a)
        }, n.offset(0), n
      }
    }()
  }, function (e, t) {
    "use strict";

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      return function (t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t
      }
    }(), n = function () {
      function e(t, i) {
        a(this, e), this.options = i, this.elements = t, this.current = [], this.handlers = {
          enter: [],
          exit: []
        }, this.singles = {enter: [], exit: []}
      }

      return i(e, [{
        key: "check", value: function () {
          var e = this;
          return this.elements.forEach(function (t) {
            var a = e.options.test(t, e.options), i = e.current.indexOf(t), n = i > -1, o = a && !n, r = !a && n;
            o && (e.current.push(t), e.emit("enter", t)), r && (e.current.splice(i, 1), e.emit("exit", t))
          }), this
        }
      }, {
        key: "on", value: function (e, t) {
          return this.handlers[e].push(t), this
        }
      }, {
        key: "once", value: function (e, t) {
          return this.singles[e].unshift(t), this
        }
      }, {
        key: "emit", value: function (e, t) {
          for (; this.singles[e].length;) this.singles[e].pop()(t);
          for (var a = this.handlers[e].length; --a > -1;) this.handlers[e][a](t);
          return this
        }
      }]), e
    }();
    t.default = function (e, t) {
      return new n(e, t)
    }
  }, function (e, t) {
    "use strict";

    function a(e, t) {
      var a = e.getBoundingClientRect(), i = a.top, n = a.right, o = a.bottom, r = a.left, s = a.width, d = a.height,
        l = {t: o, r: window.innerWidth - r, b: window.innerHeight - i, l: n},
        c = {x: t.threshold * s, y: t.threshold * d};
      return l.t > t.offset.top + c.y && l.r > t.offset.right + c.x && l.b > t.offset.bottom + c.y && l.l > t.offset.left + c.x
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.inViewport = a
  }, function (e, t) {
    (function (t) {
      var a = "object" == (void 0 === t ? "undefined" : _typeof(t)) && t && t.Object === Object && t;
      e.exports = a
    }).call(t, function () {
      return this
    }())
  }, function (e, t, a) {
    var i = a(5),
      n = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = i || n || Function("return this")();
    e.exports = o
  }, function (e, t, a) {
    function i(e, t, a) {
      function i(t) {
        var a = A, i = y;
        return A = y = void 0, S = t, V = e.apply(i, a)
      }

      function c(e) {
        return S = e, _ = setTimeout(p, t), x ? i(e) : V
      }

      function u(e) {
        var a = e - b, i = e - S, n = t - a;
        return k ? l(n, C - i) : n
      }

      function m(e) {
        var a = e - b, i = e - S;
        return void 0 === b || a >= t || a < 0 || k && i >= C
      }

      function p() {
        var e = o();
        return m(e) ? g(e) : void (_ = setTimeout(p, u(e)))
      }

      function g(e) {
        return _ = void 0, T && A ? i(e) : (A = y = void 0, V)
      }

      function v() {
        void 0 !== _ && clearTimeout(_), S = 0, A = b = y = _ = void 0
      }

      function h() {
        return void 0 === _ ? V : g(o())
      }

      function f() {
        var e = o(), a = m(e);
        if (A = arguments, y = this, b = e, a) {
          if (void 0 === _) return c(b);
          if (k) return _ = setTimeout(p, t), i(b)
        }
        return void 0 === _ && (_ = setTimeout(p, t)), V
      }

      var A, y, C, V, _, b, S = 0, x = !1, k = !1, T = !0;
      if ("function" != typeof e) throw new TypeError(s);
      return t = r(t) || 0, n(a) && (x = !!a.leading, k = "maxWait" in a, C = k ? d(r(a.maxWait) || 0, t) : C, T = "trailing" in a ? !!a.trailing : T), f.cancel = v, f.flush = h, f
    }

    var n = a(1), o = a(8), r = a(10), s = "Expected a function", d = Math.max, l = Math.min;
    e.exports = i
  }, function (e, t, a) {
    var i = a(6), n = function () {
      return i.Date.now()
    };
    e.exports = n
  }, function (e, t, a) {
    function i(e, t, a) {
      var i = !0, s = !0;
      if ("function" != typeof e) throw new TypeError(r);
      return o(a) && (i = "leading" in a ? !!a.leading : i, s = "trailing" in a ? !!a.trailing : s), n(e, t, {
        leading: i,
        maxWait: t,
        trailing: s
      })
    }

    var n = a(7), o = a(1), r = "Expected a function";
    e.exports = i
  }, function (e, t) {
    function a(e) {
      return e
    }

    e.exports = a
  }])
});
var VmaxRequestThrottle = function () {
  function e(t) {
    _classCallCheck(this, e), _console.debug("Invoking REQ_THROTTLE - constructor"), this.adspotKey = t, this.appConfig = new VmaxAppConfg, cfg = this.getConfig(), _console.debug(cfg), this.init(this.adspotKey)
  }

  return _createClass(e, [{
    key: "getConfig", value: function () {
      var e = this.appConfig.get({type: "ADSPOT", value: this.adspotKey});
      return this.adspotKey, e
    }
  }, {
    key: "getAllocation", value: function (e) {
      var t = UtilLDMX(), a = [];
      e || (e = this.getConfig(), _console.debug("adspotConfig", e));
      var i = this.getThrottleConfig(e);
      _console.log("getWLIndex : " + this.getWLIndex(this.adspotKey, i))
      ;var n = this.getWLIndex(this.adspotKey, i) || 0, o = t.get(i, "allocation[" + n + "].weight", []);
      return a = this.getWeightsAlgo(o), _console.log("THROTTLE >>>> weights Index: " + o), a
    }
  }, {
    key: "getWeightsAlgo", value: function (e) {
      for (var t = e.length, a = 0, i = 0; i < t; i++) a += e[i];
      if (!a) return null;
      var n = this.getRandomInt(1, a);
      _console.log("THROTTLE >> (Random value Generated: " + n + ")");
      for (var o = 0; o < t; o++) {
        if (n <= e[o]) return _console.log("THROTTLE >> (Weights array: " + e + ") (Length of array: " + a + ")"), o;
        n -= e[o]
      }
      return _console.log("THROTTLE >>> (Weights array: " + e + ") (Length of array: " + a + ")"), e.length >= 2 && e[e.length - 1] <= 0 ? e.length - 2 : e.length - 1
    }
  }, {
    key: "getRandomInt", value: function (e, t) {
      return Math.min(t, Math.floor(Math.random() * (t - e + 1) + e))
    }
  }, {
    key: "getDeliveryURI", value: function () {
      var e = this.getAllocation(cfg);
      return _console.debug("getAllocation: ", e), this.selectDelivery(e)
    }
  }, {
    key: "selectDelivery", value: function (e) {
      if (null == e) return "";
      var t = this.appConfig.get({type: "THROTTLE", value: this.adspotKey}), a = t.domain || [];
      return e >= a.length ? "" : a[e]
    }
  }, {
    key: "setWeightLevel", value: function () {
    }
  }, {
    key: "getWeightHash", value: function () {
    }
  }, {
    key: "getThrottleConfig", value: function (e) {
      var t = UtilLDMX();
      return e ? t.get(e, "throttle") : this.appConfig.get({type: "THROTTLE", value: this.adspotKey})
    }
  }, {
    key: "init", value: function (e) {
      _console.debug("Invoking VmaxThrottleLevel - constructor"), this.configKey = "throttle-level", this.sScope = "session", this.storage = new UtilStorage;
      var t = UtilLDMX();
      this.weights = t.get(this.getThrottleConfig(), "allocation", []) || [], this.adspotKey = e
    }
  }, {
    key: "getWLIndex", value: function (e, t) {
      var a = UtilLDMX(), i = this.storage.getStorage(this.configKey, this.sScope);
      return a.get(i, this.adspotKey, 0)
    }
  }, {
    key: "setWLIndex", value: function (e) {
      _console.debug(arguments);
      var t = {};
      t[this.adspotKey] = e, this.storage.setStorage(this.configKey, _extends({}, this.getWLIndex(), t), this.sScope)
    }
  }, {
    key: "resetWLIndex", value: function (e) {
      _console.debug("Throttle >>> Resetting..."), this.setWLIndex(0)
    }
  }, {
    key: "nextWLIndex", value: function () {
      var e = UtilLDMX();
      _console.debug("Throttle >>> Incrementing weight...");
      var t = e.get(this.getThrottleConfig(), "allocation", []) || [], a = t.length - 1 <= 0 ? 0 : t.length - 1,
        i = this.getWLIndex();
      i = i >= a ? a : i + 1, _console.log("Sample weights", t, i), this.setWLIndex(i)
    }
  }]), e
}(), VmaxThrottleLevel = function () {
  function e(t) {
    _classCallCheck(this, e), _console.debug("Invoking VmaxThrottleLevel - constructor"), this.configKey = "throttle-level", this.sScope = "session", this.storage = new UtilStorage
  }

  return _createClass(e, [{
    key: "getIndex", value: function () {
      var e = this.storage.getStorage(this.configKey, this.sScope);
      return tIndex = e.adspotKey, tIndex
    }
  }, {
    key: "setIndex", value: function (e) {
      _console.debug(e);
      getIndex()
    }
  }, {
    key: "resetIndex", value: function () {
      return 0
    }
  }, {
    key: "nextIndex", value: function () {
      return getIndex() + 1
    }
  }]), e
}(), UtilDeviceDetails = function () {
  function e(t) {
    _classCallCheck(this, e), this.imsi = t
  }

  return _createClass(e, [{
    key: "getSubStr", value: function (e, t) {
      return (this.imsi && "string" != typeof this.imsi ? this.imsi.toString() : this.imsi).substr(e, t) || null
    }
  }, {
    key: "getMCC", value: function () {
      return this.getSubStr(0, 3)
    }
  }, {
    key: "getMNC", value: function () {
      return this.getSubStr(3, 3)
    }
  }, {
    key: "getMCCMNC", value: function (e) {
      var t = e && e.hasOwnProperty("dataLength") && !isNaN(e.dataLength) ? parseInt(e.dataLength) : 6;
      return this.getSubStr(0, t)
    }
  }]), e
}(), CdnLogger = function () {
  function e(t) {
    _classCallCheck(this, e), this.url = t, this.logs = []
  }

  return _createClass(e, [{
    key: "log", value: function (e) {
      var t = e.imsi, a = e.idfa, i = e.timestamp, n = e.ai, o = e.vr, r = e.ua, s = e.bst, d = {};
      if (t = t || this.imsi) {
        var l = t.substr(0, 6).match(/.{1,3}/g);
        d.mcc = l[0], d.mnc = l[1]
      }
      var c = {timestamp: i, bst: s, ai: n, vr: o, idfa: a || this.idfa, ua: r};
      c = _extends({}, c, d), this.logs.push(c)
    }
  }, {
    key: "editLogDetails", value: function (e, t) {
      if (this.imsi = e, this.idfa = t, _console.log("editLogDetails fun called"), this.imsi) var a = this.imsi.substr(0, 6).match(/.{1,3}/g),
        i = a[0], n = a[1];
      for (var o = 0; o < this.logs.length; o++) this.logs[o].mnc = n, this.logs[o].mcc = i, this.logs[o].idfa = this.idfa, this.logs[o].ai = VMAX.APP_NAME
    }
  }, {
    key: "createBeaconNode", value: function (e) {
      var t = document.createElement("span"), a = this.url, i = "";
      for (var n in e) e[n] && (a += "&" + n + "=" + encodeURIComponent(e[n]));
      return i += '<img src="' + a + '" height="1" width="1" style="display:none"/>', t.innerHTML = i, t
    }
  }, {
    key: "isAllValuePresentInLog", value: function (e) {
      if (!Array.isArray(e) || 0 == this.logs.length) return !1;
      for (var t = this, a = 0; a < this.logs.length; a++) {
        var i = function (a) {
          return {
            v: e.every(function (e, i) {
              return t.logs[a].hasOwnProperty(e) && t.logs[a][e]
            })
          }
        }(a);
        if ("object" === (void 0 === i ? "undefined" : _typeof(i))) return i.v
      }
    }
  }, {
    key: "insertBeaconNode", value: function () {
      for (var e = this.logs.length, t = 0; t < e; t++) {
        var a = this.createBeaconNode(this.logs[0]);
        this.logs.shift(), document.body.appendChild(a)
      }
    }
  }]), e
}(), CdnLogger2 = function () {
  function e(t) {
    _classCallCheck(this, e), this.url = t, this.logs = [], this.length = 1536
  }

  return _createClass(e, [{
    key: "setLogLength", value: function (e) {
      this.length = e, _console.log("Custom Key Logger - Chunk Length set to: " + e)
    }
  }, {
    key: "createBeaconNode", value: function (e) {
      var t = document.createElement("span"), a = this.url, i = "", n = {};
      n.advid = VmaxUserData.getIDFA(), n.uid = VmaxUserData.getUID();
      var o = _extends({}, e, n);
      for (var r in o) o[r] && (a += "&" + r + "=" + o[r]);
      return i += '<img src="' + a + '" height="1" width="1" style="display:none"/>', t.innerHTML = i, t
    }
  }, {
    key: "createChunks", value: function (e) {
      var t = this.length, a = encodeURIComponent(e.data);
      new RegExp(".{1," + t + "}", "g");
      if (a.length > t) {
        data = this.chunkString(a, t), _console.log("data", data);
        for (var i = 0; i < data.length; i++) dataNodes = {
          data: data[i],
          seq: i + 1,
          total: data.length
        }, this.logs.push(_extends({}, e, dataNodes)), _console.log("data => ", data[i], this.logs[i])
      } else this.logs.push(_extends({}, e, {data: a, seq: 1, total: 1}))
    }
  }, {
    key: "insertBeaconNode", value: function (e) {
      try {
        var t = Object.keys(JSON.parse(e.data)) || [];
        if (_console.log("Keys to Logger => " + t, e.data), -1 == t.toString().indexOf("ck_")) return
      } catch (e) {
        _console.log("Logging Parameters can't be parsed " + e + " sending anyways.")
      }
      this.createChunks(e);
      for (var a = this.logs.length, i = 0; i < a; i++) {
        var n = this.createBeaconNode(this.logs[0]);
        this.logs.shift(), document.body.appendChild(n)
      }
    }
  }, {
    key: "chunkString", value: function (e, t) {
      for (var a = Math.ceil(e.length / t), i = [], n = 0, o = 0; o < a; o++) i[o] = e.substr(n, t), n += t;
      return i
    }
  }]), e
}(), VmaxMoat = function () {
  function e(t) {
    _classCallCheck(this, e);
    var a = t.sectionId, i = t.adUXIndex, n = t.duration, o = t.viewability, r = t.videoId;
    this.viewability = o, this.sectionId = a, this.videoId = r, this.duration = n, this.adUXIndex = i, this.disableVideoMoatTag = !1, this.moatScriptTagId = "moatScriptId_" + Math.floor(1e8 * Math.random())
  }

  return _createClass(e, [{
    key: "init", value: function () {
      try {
        var e = this.viewability[2], t = function () {
          try {
            return {
              partnerId: e.id,
              mcl1: e.macros.moatClientLevel1,
              mcl2: e.macros.moatClientLevel2,
              mcl3: e.macros.moatClientLevel3,
              mcl4: e.macros.moatClientLevel4,
              mcs1: e.macros.moatClientSlicer1,
              mcs2: e.macros.moatClientSlicer2
            }
          } catch (e) {
            return !1
          }
        }();
        if (!t) return;
        var a = {
          level1: t.mcl1 || "",
          level2: t.mcl2 || "",
          level3: t.mcl3 || "",
          level4: t.mcl4 || "",
          slicer1: t.mcs1 || "",
          slicer2: t.mcs2 || ""
        };
        t.partnerId;
        if (_console.log("initMoat...."), -1 !== [0, 1].indexOf(this.adUXIndex)) {
          var i = getReferenceNodeById(this.sectionId), n = document.createElement("script");
          try {
            f = i.ownerDocument, h = f.defaultView || f.parentWindow
          } catch (e) {
            f = document, h = window
          }
          n.type = "text/javascript", i.parentNode.insertBefore(n, i.nextSibling || null);
          var o = encodeURI("moatClientLevel1=" + t.mcl1 + "&moatClientLevel2=" + t.mcl2 + "&moatClientLevel3=" + t.mcl3 + "&moatClientLevel4=" + t.mcl4 + "&moatClientSlicer1=" + t.mcs1 + "&moatClientSlicer2=" + t.mcs2);
          try {
            n.src = VMAX.Domain.Context + "/moatad.js#" + o
          } catch (e) {
            _console.debug("Caught MOAT Static => ", e)
          }
        } else {
          var r = getReferenceNodeById(this.videoId);
          this.mediaUrl = this.mediaUrl || r.currentSrc;
          var s = this.duration ? parseInt(this.duration) : Math.floor(r.duration) || 0;
          MoatApiReference = this.initMoatTracking(r, a, s, "reliancejiokaiosjsvideo46923592816", this.mediaUrl || "")
        }
        window.addEventListener("message", function (e) {
          if ("undefined" != typeof MoatApiReference && MoatApiReference instanceof Object) switch (e.data.type) {
            case"adimpression":
              MoatApiReference.dispatchEvent({type: "AdImpression", adVolume: e.data.volume});
              break;
            case"adstarted":
              MoatApiReference.dispatchEvent({type: "AdVideoStart", adVolume: e.data.volume});
              break;
            case"adfirstquartile":
              MoatApiReference.dispatchEvent({type: "AdVideoFirstQuartile", adVolume: e.data.volume});
              break;
            case"admidpoint":
              MoatApiReference.dispatchEvent({type: "AdVideoMidpoint", adVolume: e.data.volume});
              break;
            case"adthirdquartile":
              MoatApiReference.dispatchEvent({type: "AdVideoThirdQuartile", adVolume: e.data.volume}), addEventListener;
              break;
            case"adcomplete":
              MoatApiReference.dispatchEvent({type: "AdVideoComplete", adVolume: e.data.volume})
          }
        })
      } catch (e) {
        console.error("Cannot insert moat tag!", e)
      }
    }
  }, {
    key: "moatEvent", value: function (e) {
      try {
        _console.debug("Executing MOAT Tracking: " + e), "undefined" != typeof MoatApiReference && MoatApiReference instanceof Object ? MoatApiReference.dispatchEvent({
          type: e,
          adVolume: 1
        }) : window.frames[0].postMessage({volume: 1, id: this.sectionId, type: e}, "*")
      } catch (e) {
        _console.debug("Can't execute MOAT... " + e)
      }
    }
  }, {
    key: "initMoatTracking", value: function (e, t, a, i, n) {
      _console.log("initMoat....", arguments);
      var o = document.createElement("script"), r = [];
      t = {
        adData: {ids: t, duration: a, url: n}, dispatchEvent: function (e) {
          _console.log("Inside dispatchEvent", e), this.sendEvent ? (r && (r.push(e), e = r, r = !1), this.sendEvent(e), _console.log("if of dispatch")) : r.push(e)
        }
      }, _console.debug("adData => ", t), a = "_moatApi" + Math.floor(1e8 * Math.random());
      var s, d;
      e = getReferenceNodeById(this.sectionId);
      try {
        s = e.ownerDocument, d = s.defaultView || s.parentWindow
      } catch (e) {
        s = document, d = window
      }
      d[a] = t, o.type = "text/javascript", e.parentNode.insertBefore(o, e.nextSibling || null);
      try {
        o.src = VMAX.Domain.Context + "/moatvideo.js#" + a, o.id = this.moatScriptTagId
      } catch (e) {
        _console.debug("Caught MOAT Video => ", e)
      }
      return t
    }
  }, {
    key: "getMoatTag", value: function () {
      return VMAX.Domain.Context + "/moatvideo.js#_moatApi" + Math.floor(1e8 * Math.random())
    }
  }, {
    key: "removeScriptTag", value: function () {
      _console.log("Removed moat script called....");
      var e = document.getElementById(this.moatScriptTagId);
      _console.log(e), e && e.remove()
    }
  }, {
    key: "setMediaUrl", value: function (e) {
      this.mediaUrl = e
    }
  }]), e
}(), VmaxPodAdselection = function () {
  function e(t) {
    _classCallCheck(this, e), this.adBreakDuration = t.duration, this.productionAd = t.productionAd || {}, this.backUpAd = t.backUpAd || {}, this.callback = t.callback, this.adSpotKey = t.adSpotKey, this.finalPod = [], this.offsetLatency = t.offsetLatency, this.enabledCST = t.enabledCST || !1, this.isAPEEnabled = t.isAPEEnabled || !1, this.adselector = new VmaxAdSelection("WEIGHT", this.isAPEEnabled ? "DURATION-KV-PARITY" : "DURATION", this.enabledCST), this.spotId = t.spotId, this.maskingInfo = t.maskingInfo
  }

  return _createClass(e, [{
    key: "formPOD", value: function () {
      var e = this;
      this.getPod(e)
    }
  }, {
    key: "getPod", value: function (e) {
      function t(t) {
        _console.log("POD Enter onProdAdCallback ");
        var a = t.ad, i = t.modifiedData;
        t.selectedCampaign;
        if (CONST.multiAdStorage.setCampaigns(e.adSpotKey, i), !Object.keys(a).length) return e.adselector = new VmaxAdSelection("WEIGHT", e.isAPEEnabled ? "DURATION-CLOSEST-KV-PARITY" : "DURATION-CLOSEST", e.enabledCST), e.adBreakDuration += e.offsetLatency, void e.getPod(e, !0);
        _console.log("POD ------Production Ad -------"), _console.log(a), e.logger(a.adparams["request-id"]), e.finalPod.push(a), _console.log("POD Selected Ad Duration => " + a["video-duration"]), e.adBreakDuration -= parseInt(a["video-duration"]), e.getPod(e, !1)
      }

      function a(t) {
        _console.log("POD Enter onBackupAdCallback ");
        var a = t.ad, i = t.modifiedData, n = (t.selectedCampaign, CONST.backupAdStorage.getAllData());
        n.adspots[e.adSpotKey].hasOwnProperty("backup-ads") && (n.adspots[e.adSpotKey]["backup-ads"].campaigns = i, CONST.backupAdStorage.set(n)), 0 == Object.keys(a).length ? e.endPod() : (_console.log("POD ------Backup Ad -------"), _console.log(a), e.logger(a.adparams["request-id"]), e.finalPod.push(a), _console.log("POD Selected Ad Duration => " + a["video-duration"]), e.adBreakDuration -= parseInt(a["video-duration"]), e.getPod(e, !0))
      }

      var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (_console.log("AdBreakDuration => " + e.adBreakDuration), !1 === i && (_console.log("POD Latency is => " + e.offsetLatency), e.adBreakDuration -= e.offsetLatency, _console.log("POD after offsetLatency applied adBreakDuration is => " + e.adBreakDuration)), e.adBreakDuration <= 2) return void e.endPod();
      e.adselector.getAd({
        isFcap: !0,
        macros: {
          ccb: Date.now() || (new Date).getTime(),
          advid: sStorage.getLocalAdID() || VMAX.deviceInfoDefaults.advid,
          vr: CONST.APIVersion,
          uid: sStorage.getLocalUID() || VMAX.deviceInfoDefaults.uid,
          ua: navigator.userAgent || "",
          mid: e.maskingInfo.hasOwnProperty(e.adSpotKey) && e.maskingInfo[e.adSpotKey].id || !1
        },
        campaignsList: i ? e.backUpAd : e.productionAd,
        callback: i ? a : t,
        duration: e.adBreakDuration,
        spotId: this.spotId
      })
    }
  }, {
    key: "endPod", value: function () {
      this.reset(), _console.log("When POD Ends AdBreakDuration Is => " + this.adBreakDuration), "function" == typeof this.callback && this.callback({pod: this.finalPod})
    }
  }, {
    key: "reset", value: function () {
      this.adselector.adBreakIgnoreCampaignList = [], this.adselector.adBreakIgnoreAdList = []
    }
  }, {
    key: "logger", value: function (e) {
      if (void 0 !== e && "" != e) {
        var t = {"request-id": e, data: JSON.stringify(getCustomKeyValueByPId(this.spotId))};
        kvLogger.setLogLength(vmaxHelper.getChunkLength()), kvLogger.insertBeaconNode(t)
      }
    }
  }]), e
}(), VmaxAdbreak = function () {
  function e(t) {
    var a = this;
    _classCallCheck(this, e);
    var i = t.customHandlerFunction, n = t.adbreakDuration, o = t.POD, r = t.placementId, s = t.videoContainer,
      d = t.callback, l = t.show, c = t.moatCallbacks, u = t.isHorizontalMode, m = t.isTimerVisiable;
    this.adbreakDuration = n, this.POD = o, this.placementId = r, this.videoContainer = s, this.slotCounter = 0, this.customHandlerFunction = i, this.callback = d, this.moatCallbacks = c, this.show = l, this.currentRunningAd = 0, this.isPodClose = !1, this.isHorizontalMode = u, this.isTimerVisiable = m, this.isCustomPlay = !(!this.customHandlerFunction.hasOwnProperty(this.placementId) || "function" != typeof this.customHandlerFunction[this.placementId].callback), remaningDuration = n / 1e3, this.slots = this.POD.map(function (e, t) {
      return remaningDuration -= a.POD[t]["video-duration"], new VmaxSlot({
        videoContainer: a.videoContainer,
        adObject: a.POD[t],
        podId: t,
        placementId: a.placementId,
        eventHandler: a,
        isHorizontalMode: a.isHorizontalMode,
        isTimerVisiable: a.isTimerVisiable,
        isCustomPlay: a.isCustomPlay,
        isFcapEnable: !(!a.POD[t].hasOwnProperty("mod") || !a.POD[t].mod.hasOwnProperty("fcr")),
        viewability: !!e.hasOwnProperty("viewability") && e.viewability
      })
    }), remaningDuration >= 0 && remaningDuration <= 2 && this.slots[this.POD.length - 1].stayAlive(), 0 == this.isCustomPlay && this.createMainContainer()
  }

  return _createClass(e, [{
    key: "readySlot", value: function (e) {
      return !(this.slots.length <= e) && (this.slots[e].init(this.onSlotReady, this.onSlotError), !0)
    }
  }, {
    key: "createMainContainer", value: function () {
      var e = document.getElementById(this.videoContainer), t = "vmax_cover_inStream_" + this.placementId,
        a = document.getElementById(t), i = void 0, n = "";
      if (VMAX.useActionIcons) {
        var o = VMAX.Domain.Context + "/" + VMAXICON["type-1"].CTAicon,
          r = VMAX.Domain.Context + "/" + VMAXICON["type-1"].Skipicon;
        n += "<style> \n                .kai-fs-nav {margin: 0; background: none;} \n                .kai-fs-nav .mid-action {line-height: 1em; display: block;  margin: auto; width: 55px; border-radius: 50% 50% 0% 0%; background: #e6ded6; height: 40px; margin-top: 5px; border: 2px solid #fff; opacity: .4; } \n                .kai-fs-nav .mid-action img {width: 18px; height: 18px; margin-top: 2px;} \n                .kai-fs-nav .right-action.mid-action {text-align: left; margin-top: 5px; margin-right: -29px;} \n                .kai-fs-nav .right-action.mid-action img {width: 15px; height: 15px; margin-left: 8px; margin-top: 0px;} \n                .kai-fs-nav .right-action.mid-action div.counter {width: 50%; text-align: center; font-size: 13px; color: #666; text-shadow: 1px 1px 1px #999;} \n            </style>", n += '<div class="action kai-fs-nav" id="video-action"style="display:none; position: fixed;left: 0px;bottom: 0; width: 100%;height: 25px;text-align: center;background-color: #EAEBEC;padding: 5px;margin: 0px;z-index: 999; background: none;" id="video-action">\n\n                        <div class="left-action" style="float:left; font-family:Lato; padding: 0px;line-height: 1em;"></div>\n\n                        <div class="right-action mid-action tr-style" style="display:none; float:right;font-family: Lato;padding: 5px;line-height: 1em;">\n                            <img src="' + r + '" id="ad-skip-button"/>\n                        </div>\n\n                        <div class="mid-action tr-style" id="clickButton">\n                            <img src="' + o + '" />\n                        </div>\n                    </div>'
      } else n += '<div class="action" id="video-action" style="display:none; position: fixed;left: 0px;bottom: 0; width: 100%;height: 25px;text-align: center;background-color: #EAEBEC;padding: 5px;margin: 0px;z-index: 999;">\n                <div class="left-action" id="clickButton" style="float: left;font-family: Lato;height: 100%;margin: 0px;padding: 5px 0px 0px 0px;line-height: 1em;">' + VMAXICON.CTAicon + '</div>\n                <div class="right-action" style="display:none;float: right;font-family: Lato;height: 100%;margin: 0px;padding:5px;line-height: 1em;">' + VMAXICON.Cancelicon + "</div></div>";
      null == a && (i = document.createElement("div"), i.id = t, i.style.cssText = "overflow: hidden;", e.appendChild(i)), document.getElementById(t).innerHTML = n
    }
  }, {
    key: "onSlotReady", value: function (e) {
      "function" == typeof this.callback.onAdReady && 0 == e && (this.show ? this.start() : this.callback.onAdReady(this.placementId)), this.isCustomPlay && this.customHandlerFunction[this.placementId].callback({
        placementId: this.placementId,
        slot: this.slots[e],
        slotIndex: e
      })
    }
  }, {
    key: "onSlotError", value: function (e) {
      "function" == typeof this.callback.onAdError && this.callback.onAdError(this.placementId)
    }
  }, {
    key: "onSlotStart", value: function (e) {
      _console.log("onSlotStart called"), "object" == _typeof(this.slots[e + 1]) && this.readySlot(e + 1)
    }
  }, {
    key: "start", value: function () {
      this.slots[0].isReady && 0 == this.isCustomPlay && (this.bindBackButtonEvent(), this.timeOut = setTimeout(function (e) {
        e.podClose(!1, !0, !1)
      }, this.adbreakDuration, this), this.slots[0].play(this), this.currentRunningAd = 0, this.handleVisibilityChange())
    }
  }, {
    key: "handleVisibilityChange", value: function () {
      _console.log("visibilityHandler called"), document.addEventListener(visibilityChange, this.visibilityHandler.bind(this), !1)
    }
  }, {
    key: "visibilityHandler", value: function () {
      null != this.currentRunningAd && (document[hidden] ? this.slots[this.currentRunningAd].pause() : this.slots[this.currentRunningAd].resume())
    }
  }, {
    key: "forceSlotClose", value: function (e) {
      if (this.slots.length == e + 1) return void this.podClose(!1, !0, !1);
      "object" == _typeof(this.slots[e + 1]) && this.slots[e + 1].isReady ? (clearTimeout(this.delayTimeOut), this.currentRunningAd = e + 1, this.slots[e + 1].play(this)) : this.delayTimeOut = setTimeout(function (e, t) {
        e.forceSlotClose(t)
      }, 1e3, this, e)
    }
  }, {
    key: "onSlotImpression", value: function (e) {
      0 == e && "function" == typeof this.callback.onAdMediaStart && this.callback.onAdMediaStart(this.placementId), FCAP.init({
        pId: this.slots[e].sectionId,
        type: "i",
        campaignId: !!this.slots[e].isFcapEnable && this.slots[e].adObject.campaignId
      })
    }
  }, {
    key: "onSlotComplete", value: function (e) {
      if ("object" != _typeof(this.slots[e + 1]) || !this.slots[e + 1].isReady) return _console.log("POD Finish"), this.podClose(!0, !0, !1), !0;
      this.currentRunningAd = e + 1, 0 == this.isCustomPlay && this.slots[e + 1].play(this)
    }
  }, {
    key: "onSlotClick", value: function () {
      "function" == typeof this.callback.onAdClick && this.callback.onAdClick(this.placementId)
    }
  }, {
    key: "podClose", value: function (e, t, a) {
      var i = this;
      this.POD.map(function (e, t) {
        i.slots[t].destroy()
      }), this.isCustomPlay && "number" == typeof this.currentRunningAd && this.slots[this.currentRunningAd].removeMoatScriptTag(), this.unBindBackButtonEvent(), this.adbreakDuration = null, clearTimeout(this.timeOut);
      var n = document.getElementById("vmax_cover_inStream_" + this.placementId);
      null !== n && n.remove(), (null != this.timeOut || this.isCustomPlay && "number" == typeof this.currentRunningAd) && "function" == typeof this.callback.onAdClose && t && this.callback.onAdClose(this.placementId, e, a), this.currentRunningAd = null, this.timeOut = null
    }
  }, {
    key: "bindBackButtonEvent", value: function () {
      _console.log("bindBackButtonEvent called"), document.addEventListener("keydown", this.handleBackButtonAction.bind(this))
    }
  }, {
    key: "unBindBackButtonEvent", value: function () {
      _console.log("unBindBackButtonEvent called"), this.isPodClose = !0, document.removeEventListener("keydown", this.handleBackButtonAction.bind(this))
    }
  }, {
    key: "handleBackButtonAction", value: function (e) {
      _console.log("event" + e.key);
      var t = e.key;
      if ({close: ["Backspace"]}.close.indexOf(t) > -1 && VMAX.deviceType && (_console.log(" " + t + " called "), !this.isPodClose)) return void e.preventDefault()
    }
  }, {
    key: "updateAdbreakDuration", value: function (e) {
      this.adbreakDuration = e
    }
  }]), e
}(), VmaxSlot = function () {
  function e(t) {
    if (_classCallCheck(this, e), this.videoContainer = t.videoContainer, this.adObject = t.adObject, this.playerObject = null, this.podId = t.podId, this.placementId = t.placementId, this.eventHandler = t.eventHandler, this.isReady = !1, this.sectionId = "slot_" + this.podId, this.videoId = "video_" + this.podId, this.videoPlayerProgressTimer = "videoPlayerTimer_" + this.sectionId, this.viewability = t.viewability, this.isCustomPlay = t.isCustomPlay, this.isFcapEnable = t.isFcapEnable, this.isHorizontalMode = t.isHorizontalMode, this.isTimerVisiable = t.isTimerVisiable, this.intervalTimer = null, this.videoStayAlive = !1, this.quartThreshold = [25, 50, 75, 100], this.started = !1, this.firstQuartileReached = !1, this.midQuartileReached = !1, this.thirdQuartileReached = !1, this.viewability) {
      var a = {
        viewability: this.viewability,
        sectionId: this.isCustomPlay ? this.eventHandler.customHandlerFunction[this.placementId].container : this.sectionId,
        videoId: this.videoId,
        adUXIndex: 3,
        duration: this.adObject["video-duration"]
      };
      this.moat = new VmaxMoat(a)
    }
  }

  return _createClass(e, [{
    key: "getMediaURL", value: function () {
      return this.eventList.VideoUrl
    }
  }, {
    key: "getSlotDuration", value: function () {
      return this.adObject["video-duration"]
    }
  }, {
    key: "init", value: function (e, t) {
      var a = this;
      this.parseVastAd({
        xml: vmaxHelper.parseXML(this.adObject.ad),
        adObject: this.adObject,
        videoContainer: this.videoContainer,
        onSuccess: function (t, i) {
          a.eventList = t || [], 0 == a.isCustomPlay && a.createMediaContainer(t, a.sectionId), a.isReady = !0, _console.log("ready state " + a.podId + "  " + a.isReady + " "), "function" == typeof e && a.eventHandler.onSlotReady(a.podId)
        },
        onError: function () {
          a.isReady = !1, "function" == typeof t && a.eventHandler.onSlotError(a.podId)
        }
      })
    }
  }, {
    key: "stayAlive", value: function () {
      this.videoStayAlive = !0
    }
  }, {
    key: "createMediaContainer", value: function (e, t) {
      var a = document.getElementById(this.videoContainer),
        i = document.getElementById("vmax_cover_inStream_" + this.placementId);
      if (a) {
        var n = document.createElement("section"), o = "",
          r = 1 == VMAX.useActionIcons ? a.offsetHeight : a.offsetHeight > window.innerHeight - 35 ? window.innerHeight - 35 : a.offsetHeight;
        r = 0 == r ? 240 : r;
        var s = a.offsetWidth || 320, d = "text-align: center; display: none;";
        if (this.isHorizontalMode && (r = a.offsetWidth || 240, s = 1 == VMAX.useActionIcons ? a.offsetHeight : a.offsetHeight > window.innerHeight - 35 ? window.innerHeight - 35 : a.offsetHeight, s = 0 == s ? 320 : s, d = "text-align: center; display: none; height:320px", o = "-moz-transform:rotate(90deg); -webkit-transform:rotate(90deg); -o-transform:rotate(90deg); -ms-transform:rotate(90deg); transform:rotate(90deg);"), n.style.cssText = d, n.id = t, this.isFcapEnable) {
          var l = this.adObject.campaignId;
          n.setAttribute("data-fcap", l)
        }
        i.appendChild(n);
        var c = "";
        c = '<div class="nativemain nativevideo"><div class="top">\n                \t\t<div class="middle" style="' + o + " position:relative;height:" + r + 'px">', e.VideoUrl && (c += '<video style="position:relative;" id="' + this.videoId + '" width="' + s + '" height=' + r + '>\n                    \t\t\t<source src="' + e.VideoUrl + '">\n                    \t\t</video>', c += '<div class="right-action" style="color:#fff; float: left;font-family:Lato;position: absolute; bottom: 0;margin: 0 10px;" id="' + this.videoPlayerProgressTimer + '">' + VMAXICON.Loadingicon + "</div>"), c += "</div></div>", document.getElementById(t).innerHTML = c, this.playerObject = document.getElementById(this.videoId)
      }
    }
  }, {
    key: "play", value: function () {
      var e = document.getElementById(this.sectionId), t = "vmax_cover_inStream_" + this.placementId;
      document.getElementById(t).querySelector("#clickButton").style.display = this.eventList.videoClickUrls.length ? "block" : "none", e && (e.style.display = "block"), this.playerObject.addEventListener("ended", this.onVideoEnded.bind(this), !0), this.playerObject.addEventListener("error", this.onVideoError.bind(this), !0), this.playerObject.addEventListener("loadedmetadata", this.onVideoLoadedMetaData.bind(this), !0), this.playerObject.addEventListener("pause", this.onVideoPause.bind(this), !1), this.playerObject.addEventListener("play", this.onVideoPlay.bind(this), !0), this.playerObject.play()
    }
  }, {
    key: "pause", value: function () {
      0 == this.isCustomPlay && (_console.log("pause called"), this.playerObject.pause())
    }
  }, {
    key: "resume", value: function () {
      0 == this.isCustomPlay && (_console.log("resume called"), this.playerObject.play())
    }
  }, {
    key: "eventTraker", value: function () {
      var e, t, a, i, n = this, o = this.playerObject;
      _console.log("intervalTimer ::: " + this.intervalTimer), this.intervalTimer = setInterval(function () {
        a = o.duration, t = o.currentTime || 0, e = Math.floor(t / a * 100), i = void 0 !== e && (e % 10 == 0 || n.quartThreshold.includes(e)), !n.started && (e > 0 || t > 0) ? (n.impressionTracking(), n.start(), _console.log("Started... Playback", t), n.started = !0) : !n.firstQuartileReached && e >= n.quartThreshold[0] ? (n.onfirstQuartile(), _console.log("firstQuartileReached... Playback", t), n.firstQuartileReached = !0) : !n.midPointReached && e >= n.quartThreshold[1] ? (n.onmidPoint(), _console.log("midPointReached... Playback", t), n.midPointReached = !0) : !n.thirdQuartileReached && e >= n.quartThreshold[2] && (n.onthirdQuartile(), _console.log("thirdQuartileReached... Playback", t), n.thirdQuartileReached = !0);
        var r = t.toFixed(0), s = a - r, d = document.getElementById(n.sectionId);
        if (null != d) {
          var l = d.querySelector("#skipLabel");
          l && (l.style.display = "block");
          var c = d.querySelector("#" + n.videoPlayerProgressTimer);
          n.isTimerVisiable ? s > 0 ? (document.getElementById("video-action").style.display = "block", c.innerHTML = "Ad:(<span id=skipTime>" + s.toFixed(0) + "</span>)") : c.innerHTML = VMAXICON.Loadingicon : (document.getElementById("video-action").style.display = "block", c.innerHTML = "")
        }
      }, 100)
    }
  }, {
    key: "impressionTracking", value: function () {
      this.eventHandler.onSlotImpression(this.podId), 0 == this.isCustomPlay && (this.playerObject.focus(), this.bindClickEvent()), this.viewability && (this.moat.setMediaUrl(this.getMediaURL()), this.moat.init(), this.moat.moatEvent("AdImpression")), this.eventList.hasOwnProperty("Impression") && this.eventList.Impression.length > 0 && (this.handleTrackingEvent(this.eventList.Impression, this.podId, !1), this.eventList.Impression = [])
    }
  }, {
    key: "start", value: function () {
      this.isCustomPlay && this.impressionTracking(), _console.log("VmaxSlot onStart called"), this.eventList.TrackingEvents.hasOwnProperty("start") && this.eventList.TrackingEvents.start.length > 0 && this.handleTrackingEvent(this.eventList.TrackingEvents.start, this.podId, !1), this.viewability && this.moat.moatEvent("AdVideoStart"), this.eventHandler.onSlotStart(this.podId)
    }
  }, {
    key: "onfirstQuartile", value: function () {
      this.eventList.TrackingEvents.hasOwnProperty("firstQuartile") && this.eventList.TrackingEvents.firstQuartile.length > 0 && this.handleTrackingEvent(this.eventList.TrackingEvents.firstQuartile, this.podId, !1), this.viewability && this.moat.moatEvent("AdVideoFirstQuartile")
    }
  }, {
    key: "onmidPoint", value: function () {
      this.eventList.TrackingEvents.hasOwnProperty("midpoint") && this.eventList.TrackingEvents.midpoint.length > 0 && this.handleTrackingEvent(this.eventList.TrackingEvents.midpoint, this.podId, !1), this.viewability && this.moat.moatEvent("AdVideoMidpoint")
    }
  }, {
    key: "onthirdQuartile", value: function () {
      this.eventList.TrackingEvents.hasOwnProperty("thirdQuartile") && this.eventList.TrackingEvents.thirdQuartile.length > 0 && this.handleTrackingEvent(this.eventList.TrackingEvents.thirdQuartile, this.podId, !1), this.viewability && this.moat.moatEvent("AdVideoThirdQuartile")
    }
  }, {
    key: "onComplete", value: function () {
      _console.log("complete event Fire"), this.eventList.TrackingEvents.hasOwnProperty("complete") && this.eventList.TrackingEvents.complete.length > 0 && this.handleTrackingEvent(this.eventList.TrackingEvents.complete, this.podId, !0), this.viewability && this.moat.moatEvent("AdVideoComplete"), this.eventHandler.onSlotComplete(this.podId)
    }
  }, {
    key: "handleTrackingEvent", value: function (e, t, a) {
      var i = this.sectionId, n = document.getElementById(i) || document.body, o = document.createElement("iframe"),
        r = r = 1 == a ? i + "_" + 100 * Math.random(10) : 100 * Math.random(10);
      o.id = r, o.style = "width: 0px; height: 0px; border: 0;";
      var s = [];
      if (e.length > 0) {
        for (var d in e) s.push('<img src="' + e[d] + '" width="1" onload="loadImage(this)" onerror="onError(this)" height="1" border="0">');
        o.src = 'data:text/html,<script>function loadImage(e){ console.debug("Image Load Successfully URL => " + e.src);} function onError(e){_console.debug("Image Load Error URL => " + e.src)}<\/script>' + encodeURIComponent(s.join("")), 1 == a ? document.body.insertBefore(o, null) : n.insertBefore(o, null)
      }
    }
  }, {
    key: "onVideoPlay", value: function () {
      this.eventTraker(), "function" == typeof this.eventHandler.onStart && this.eventHandler.start(this.podId)
    }
  }, {
    key: "click", value: function () {
      if (this.isAdClickable()) {
        if (FCAP.init({
          pId: this.sectionId,
          type: "c",
          campaignId: !!this.isFcapEnable && this.adObject.campaignId
        }), _console.log("Open Popup Action Start!"), vmaxHelper.popup(this.eventList.videoClickUrls[0], "AdClickWindow"), _console.log("Open Popup Action Ends!"), this.eventList.videoClickTrackingUrls && this.eventList.videoClickTrackingUrls.length > 0) {
          _console.log("CK URL : " + this.eventList.videoClickTrackingUrls);
          for (var e in this.eventList.videoClickTrackingUrls) {
            var t = vmaxHelper.img_create(this.eventList.videoClickTrackingUrls[e]);
            document.body.appendChild(t)
          }
        }
        this.eventHandler.onSlotClick(this.podId), this.destroy(), this.eventHandler.forceSlotClose(this.podId)
      }
    }
  }, {
    key: "bindClickEvent", value: function () {
      _console.log("bindClickEvent called"), this.playerObject.addEventListener("keydown", this.handleUserAction.bind(this))
    }
  }, {
    key: "unbindClickEvent", value: function () {
      _console.log("unbindClickEvent called"), null != this.playerObject && this.playerObject.removeEventListener("keydown", this.handleUserAction.bind(this))
    }
  }, {
    key: "handleUserAction", value: function (e) {
      _console.log("event" + e.key);
      var t = e.key, a = {click: ["SoftLeft", "Enter"], close: ["Backspace"]};
      return a.close.indexOf(t) > -1 && VMAX.deviceType ? (_console.log("close called"), void e.preventDefault()) : a.click.indexOf(t) > -1 ? (_console.log("click called"), e.preventDefault(), this.click()) : void 0
    }
  }, {
    key: "onVideoPause", value: function (e) {
      _console.log("player pause")
    }
  }, {
    key: "getCDATASection", value: function (e, t) {
      var a = 0;
      t = t || "#cdata-section";
      for (var i = 0; i < e.childNodes.length; i++) if (e.childNodes[i].nodeName === t && "" !== e.childNodes[i].nodeValue) {
        a = i;
        break
      }
      return e.childNodes[a].nodeValue.trim()
    }
  }, {
    key: "getCDATASections", value: function (e, t) {
      for (var a = [], i = 0; i < e.length; i++) a.push(this.getCDATASection(e[i], t) || "");
      return a
    }
  }, {
    key: "loadXmlAd", value: function (e) {
      var t = e.VASTAdTagURI, a = e.onSuccess, i = e.onError, n = e.adObject, o = e.VideoObject,
        r = e.videoClickTrackingUrlsCallbackData, s = this, d = new XMLHttpRequest({mozSystem: !0});
      d.open("get", t, !0), d.addEventListener("error", function () {
        console.info("Error Loading Xml Url", t)
      }), d.addEventListener("load", function () {
        var e = d.response;
        s.parseVastAd({xml: e, onSuccess: a, onError: i, adObject: n, VideoObject: o, callbackData: r})
      }), d.send()
    }
  }, {
    key: "parseVastAd", value: function (e) {
      var t = e.xml, a = e.onSuccess, n = e.onError, o = e.adObject, r = e.VideoObject, s = e.callbackData, d = "";
      if ("string" == typeof t && (t = vmaxHelper.parseXML(t)), !(t instanceof XMLDocument && (t.getElementsByTagName("VASTAdTagURI").length || t.getElementsByTagName("MediaFile").length))) return void n(!1);
      vmaxHelper.isDefined(r) || (r = {
        Impression: [],
        TrackingEvents: {start: [], firstQuartile: [], midpoint: [], thirdQuartile: [], complete: [], creativeView: []},
        VideoUrl: "",
        videoClickTrackingUrls: [],
        videoClickUrls: [],
        Duration: 0,
        Error: []
      }),
        d = t.getElementsByTagName("Ad")[0].getElementsByTagName("Wrapper").length > 0 ? "W" : "L";
      var l = t.getElementsByTagName("Impression"), c = t.getElementsByTagName("Tracking"),
        u = t.getElementsByTagName("ClickTracking"), m = t.getElementsByTagName("ClickThrough"),
        p = t.getElementsByTagName("Error"), g = this.getCDATASections(l), v = this.getCDATASections(c),
        h = this.getCDATASections(u), f = this.getCDATASections(m), A = this.getCDATASections(p);
      for (i = 0; i < l.length; i++) r.Impression.push(g[i]);
      for (var y = 0; y < c.length; y++) {
        var C = c[y].getAttribute("event");
        r.TrackingEvents.hasOwnProperty(C) && r.TrackingEvents[C].push(v[y])
      }
      r.videoClickTrackingUrls = "object" == (void 0 === s ? "undefined" : _typeof(s)) && Array.isArray(s) ? [].concat(_toConsumableArray(s), _toConsumableArray(r.videoClickTrackingUrls)) : [];
      for (var V = 0; V < u.length; V++) r.videoClickTrackingUrls.push(h[0]);
      for (var _ = 0; _ < m.length; _++) "" !== f[_] && r.videoClickUrls.push(f[0]);
      for (var b = 0; b < p.length; b++) r.hasOwnProperty("Error") || (r.Error = []), r.Error.push(A[b]);
      var S = [], x = r.videoClickTrackingUrls;
      if ("L" == d) {
        r.Duration = t.getElementsByTagName("Duration")[0].childNodes[0].nodeValue;
        var k = t.getElementsByTagName("MediaFile");
        S.push.apply(S, _toConsumableArray(vmaxVast.getCDATASections(k))), S.length > 0 && (r.VideoUrl = S[0]), "function" == typeof a && a(r, o.adId)
      } else {
        var T = t.getElementsByTagName("VASTAdTagURI").length ? this.getCDATASections(t.getElementsByTagName("VASTAdTagURI")) : "";
        if ("" == T) {
          if (_console.debug("No media file available!"), r.hasOwnProperty("Error") && r.Error.length > 0) for (var I in r.Error) if ("" != r.Error) {
            var O = vmaxHelper.img_create(r.Error[I]);
            document.body.appendChild(O)
          }
          return
        }
        this.loadXmlAd({
          VASTAdTagURI: T,
          onSuccess: a,
          onError: n,
          adObject: o,
          VideoObject: r,
          videoClickTrackingUrlsCallbackData: x
        })
      }
    }
  }, {
    key: "onVideoError", value: function () {
      this.destroy(), this.eventHandler.onSlotComplete(this.podId)
    }
  }, {
    key: "onVideoLoadedMetaData", value: function () {
      _console.log("onVideoLoadedMetaData called")
    }
  }, {
    key: "onVideoEnded", value: function () {
      this.onComplete(), this.videoStayAlive || this.destroy()
    }
  }, {
    key: "destroy", value: function () {
      clearInterval(this.intervalTimer), this.intervalTimer = null;
      var e = document.getElementById("video-action");
      e && (e.style.display = "none"), this.unbindClickEvent();
      var t = document.getElementById(this.sectionId);
      t && t.remove(), this.isReady = !1
    }
  }, {
    key: "isAdClickable", value: function () {
      return !(!this.eventList.hasOwnProperty("videoClickUrls") || !this.eventList.videoClickUrls.length || "" === this.eventList.videoClickUrls[0])
    }
  }, {
    key: "isViewabilityEnabled", value: function () {
      return !!this.viewability
    }
  }, {
    key: "firstQuartile", value: function () {
      _console.debug("Accepted CustomEvent: firstQuartile"), this.onfirstQuartile()
    }
  }, {
    key: "midPoint", value: function () {
      _console.debug("Accepted CustomEvent: midPoint"), this.onmidPoint()
    }
  }, {
    key: "thirdQuartile", value: function () {
      _console.debug("Accepted CustomEvent: thirdQuartile"), this.onthirdQuartile()
    }
  }, {
    key: "complete", value: function () {
      _console.debug("Accepted CustomEvent: complete"), this.removeMoatScriptTag(), this.onComplete()
    }
  }, {
    key: "removeMoatScriptTag", value: function () {
      this.viewability && this.moat.removeScriptTag()
    }
  }]), e
}(), CONST = {}, APP_GLOBAL = {};
CONST.sdkVersion = "4.9.1", CONST.APIVersion = "S-KAI-" + CONST.sdkVersion;
var reqDomain = "ajdivotdelbloab24.jio.com", url = "https://" + reqDomain + "/getad.php?<zoneid>|" + CONST.APIVersion,
  VMAX = {};
VMAX.Event = {}, VMAX.AdParams = {}, VMAX.DeliveryAPI = url, VMAX.Domain = {}, VMAX.Domain.Name = "cdn.vmax.com", VMAX.Domain.Name = "mydev.vserv.com", VMAX.Domain.Context = "//" + VMAX.Domain.Name + "/KaiOSSDK", VMAX.Domain.Context = "//" + window.location.hostname + "/KaiOSSDK", VMAX.Domain.Lib = VMAX.Domain.Context + "/libs", VMAX.Domain.Style = VMAX.Domain.Context + "/css", VMAX.TestMode = "false", VMAX.closeAD = "null", VMAX.inviewjsloaded = "no", VMAX.adplacement = [], VMAX.platform = "KaiOS", VMAX.adRequestStatus = 0, VMAX.debugMode = !1, VMAX.useDataStore = !1, VMAX.deviceInfo = {}, VMAX.deviceInfoDefaults = {
  advid: "",
  imsi: "",
  uid: ""
}, VMAX.NativeBannerBillboardArray = {}, VMAX.onlyXML = !1, VMAX.useWebActivity = !1, VMAX.Timeout = {}, VMAX.Intervals = {}, VMAX.show = {}, VMAX.enableUIDService = !0, VMAX.enableMoatTag = !1, VMAX.adBreakDuration = {}, VMAX.adBreakRemaningDuration = {}, VMAX.customAdBreakFun = {}, VMAX.rotateInstreamVideoList = {}, VMAX.videoTimerVisibilityList = {}, CONST.defaultImgWidth = 240, CONST.defaultImgHeight = 320, CONST.clickTrackers = [], CONST.impTrackers = [], CONST.clickUrl = [], CONST.delay = 0, CONST.AudioImg = VMAX.Domain.Style + "/default_audio_img.png", CONST.adUXType = ["native", "native-image", "native-video", "video", "audio", "html", "image", "native-audio"], CONST.deeplinkingHostName = "dl.kaios.jioads.com", CONST.persistentKey = "no-expire", CONST.adSlotIdPrefix = "AdSlotId", CONST.adSlotTagName = "section", CONST.handleEndKey = !0, CONST.quartThreshold = [25, 50, 75, 100], CONST.adNetworkMap = {adx: 45}, VMAX.adMetaData = {isDeeplinking: null};
var _console = {};
_console.log = function (e) {
  console.log(e)
}, _console.debug = function (e) {
  console.debug(e)
}, CONST.CFG = {
  delConfig: {
    location: "https://jioads.akamaized.net/adservice/jiotv.txt",
    domains: ["ajdivotdelbloab24.jio.com", "ajdivotdelbloabaws24.jio.com"],
    updateTimer: -1,
    domainCursor: 0
  }
}, CONST.appConfig = new VmaxAppConfg, CONST.multiAdStorage = new VmaxAdStorage("sdk_multi_ad"), CONST.backupAdStorage = new VmaxAdStorage("app-config"), CONST.adSelection = new VmaxAdSelection, CONST.utils = new VmaxUtils, VMAX.EnableSessionCounter = !0, VMAX.Langugae = navigator.language, VMAX.ScreenWidth = screen.width, VMAX.ScreenHeight = screen.height, VMAX.fullScreenMode = !1, VMAX.useActionIcons = !1, VMAX.noVideoMode = !1, VMAX.useDeliveryConfig = !1, VMAX.videoDismissTimer = 5, VMAX.vfTimer = {}, VMAX.deviceOrientation = null, VMAX.deviceType = null, VMAX.hideVideoControls = !1, VMAX.requestCounter = {};
var VMAXICON = {};
VMAXICON.wantIcon = 0, 1 == VMAXICON.wantIcon ? (VMAXICON.Skipicon = "&#10060;", VMAXICON.Cancelicon = "&#10060;", VMAXICON.CTAicon = "&#10004;", VMAXICON.Loadingicon = "&#8987;") : (VMAXICON.Skipicon = "Skip", VMAXICON.Cancelicon = "Close", VMAXICON.CTAicon = "Click", VMAXICON.Loadingicon = "Loading..."), VMAXICON["type-1"] = {}, VMAXICON["type-1"].Skipicon = "assets/close-15x15.svg", VMAXICON["type-1"].Cancelicon = "assets/close-15x15.svg", VMAXICON["type-1"].CTAicon = "assets/cta-18x18.svg", VMAXICON["type-1"].Loadingicon = "Loading...";
var Event = {}, sStorage = {};
sStorage.deviceIDFAKey = btoa("advt_id"), sStorage.deviceUIDKey = btoa("u_id"), VMAX.Error = {
  1001: "No Fill",
  1002: "Ad request not allowed",
  1003: "Manifest entry missing",
  1004: "Request Timeout",
  1005: "Internal server error",
  1006: "SDK initialization error",
  1007: "Mismatch UX or markup",
  1008: "Network error",
  1009: "Mandatory params missing",
  1010: "Rendition error",
  1011: "Parsing error",
  1012: "Unknown error",
  1013: "Invalid request arguments",
  1014: "Invalid Ad request/Arguments",
  1015: "Error Loading Xml Url"
}, VMAX.AdStatus = {
  STATE_AD_NOT_REQUESTED: "s1",
  STATE_AD_REQUESTED: "s2",
  STATE_AD_READY: "s3",
  STATE_AD_ERROR: "s4",
  STATE_AD_STARTED: "s5",
  STATE_AD_END: "s6",
  STATE_AD_DISMISSED: "s7",
  STATE_AD_INTERACTED: "s8",
  STATE_AD_READY_NOCACHE: "s10"
};
var VmaxUserData = new VmaxUserData, __vmax_data = {};
VMAX.cacheAdCustom = function (e) {
  VMAX.useDataStore = !0, VMAX.cacheAd(e)
}, VMAX.cacheAdPS = function (e) {
  _console.debug("VMAX.cacheAdPS initiated...", e), VMAX.cacheAd2PS(e)
}, VMAX.showAdPS = function (e, t) {
  _console.debug("VMAX.showAdCP initiated...", e), VMAX.show[e] = !0, VMAX.cacheMediaPS(e, t)
}, VMAX.cacheAd2PS = function (e, t, a) {
  VMAX.show[e] = !!a;
  var i = getStorage("SessionCounter", "local"), n = getReferenceNodeById(e);
  adspot = n.getAttribute("data-adspot-key"), adspotType = n.getAttribute("data-adspot-Type");
  var o;
  if (!1 === VMAX.EnableSessionCounter && 0 !== Object.keys(i).length && i.counter > 0) return void AdError(e, "1002");
  if (!0 === VMAX.EnableSessionCounter && removeStorage("SessionCounter", "local"), !ADSEQUENCE.getPermissionForAdRequest(adspot, adspotType)) return void AdError(e, "1002");
  o = "VMAX.getAdMarkup" === t ? "VMAX.getAdMarkup" : "function" == typeof t;
  for (var r = document.querySelectorAll("ins.adsbyvmax") || [], s = 0; s < r.length; s++) r[s].style.display = "block", r[s].style.textAlign = "center", r[s].style.textDecoration = "none";
  return setStorage(e + "_Iscached", {placementId: "1"}, "local"), setAdRequestParams(e, o, !0), null
}, VMAX.cacheMediaPS = function (e, t, a) {
  adJson = getStorage(e, "local");
  var i = e + "_Iscached", n = getStorage(i, "local");
  if (0 !== Object.keys(n).length && (console.info("showAd PS: 1000...", e), setTimeout(function () {
    VMAX.cacheMediaPS(e, t)
  }, 1e3)), 0 === Object.keys(n).length) {
    var o = e + "_sequence", r = getStorage(o, "local");
    if (0 === Object.keys(adJson).length) return _console.debug("No ad cache available in the storage"), VMAX.cacheAd2PS(e, VMAX.cacheMediaPS, !0);
    if (Object.keys(r).length, !a && adJson.ad) return "display" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"] ? vmaxAd.createdisplayInterstitial(adJson.ad, e, adJson, !1, !0) : "native" == adJson["adspot-format"] && "interstitial" != adJson["adspot-size"] ? VMAX.create_native_banner_AD(adJson.ad, e, adJson) : "native" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"] ? createNativeMarkup(adJson.ad, e, adJson, !1, !0) : "video" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : "audio" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : "daast" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : (console.info("Display Ad Body: Remnant Advertisement"), void console.info("Currently not supported "));
    if (adJson.ad) {
      if (getAdStatus(e, "STATE_AD_READY_NOCACHE", "local"), "function" == typeof VMAX.onAdReadyPS) {
        _console.debug("Ad is readyPS...");
        var s = 0;
        if ("native" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"]) {
          _console.debug("On Ad REady to be fired....");
          var d = JSON.parse(adJson.ad), l = VMAX.getXAdCreative(d);
          s = d.video ? 2 : l.hasOwnProperty("uri") && l.uri ? 1 : 0
        }
        VMAX.onAdReadyPS(e, CONST.adUXType[s])
      }
    } else VMAX.noAdFound(e, adJson);
    vmaxAd && vmaxAd.hasOwnProperty("isAdOpen") && vmaxAd.isAdOpen && (_console.debug("Resetting focus"), VMAX.forceAdFocus())
  }
}, VMAX.isAdCachedPS = function (e) {
  var t = getStorage(e, "local"), a = e + "_Iscached";
  getStorage(a, "local");
  return Object.keys(t).length > 0 && "000" === t.status
}, VMAX.cacheAd = function (e, t, a) {
  VMAX.show[e] = !!a;
  var i = getStorage("SessionCounter", "local"), n = getReferenceNodeById(e);
  dataSource = n.getAttribute("data-source"), adspot = n.getAttribute("data-adspot-key"), rewarded = n.getAttribute("data-rewarded");
  var o, r = vmaxHelper.getInsData(e).adspotType;
  if ("true" == rewarded) {
    var s = adspot + "_" + dataSource + "_rewardPoint";
    TotalPointKey = dataSource + "_Total", appPointKey = dataSource + "_appPoint", appPointInLocal = getStorage(appPointKey, "local"), dateChecker(appPointInLocal.timesStamp) && (s && removeStorage(s, "local"), TotalPointKey && removeStorage(TotalPointKey, "local"), appPointKey && removeStorage(appPointKey, "local"));
    var d = getStorage(s, "local");
    if (TotalPoint = getStorage(TotalPointKey, "local"), appPoint = getStorage(appPointKey, "local"), TotalPoint.point >= appPoint.appPoint && 0 !== Object.keys(d).length && 0 != d["daily-max-point"]) return void AdError(dataSource, "You've exhausted your daily limit of rewarded video points")
  }
  if (!1 === VMAX.EnableSessionCounter && 0 !== Object.keys(i).length && i.counter > 0) return void AdError(e, "1002");
  !0 === VMAX.EnableSessionCounter && removeStorage("SessionCounter", "local");
  var l = e + "_attempt", c = getStorage(l, "local"), u = e + "_sequence", m = (getStorage(u, "local"), new Date);
  if (0 != Object.keys(c).length && c.hasOwnProperty("attemptNumber") && c.hasOwnProperty("attemptTime")) {
    if (new Date(c.attemptTime) > m) return void AdError(e, "1002")
  }
  if (!ADSEQUENCE.getPermissionForAdRequest(adspot, r)) return void AdError(e, "1002");
  o = "VMAX.getAdMarkup" === t ? "VMAX.getAdMarkup" : "function" == typeof t;
  for (var p = document.querySelectorAll("ins.adsbyvmax") || [], g = 0; g < p.length; g++) p[g].style.display = "block", p[g].style.textAlign = "center", p[g].style.textDecoration = "none";
  return setStorage(e + "_Iscached", {placementId: "1"}), setAdRequestParams(e, o), null
}, VMAX.showAdCustom = function (e) {
  !0 === VMAX.useDataStore && getStorage(e).then(function (t) {
    VMAX.useDataStore = !1, setStorage(e, t), VMAX.showAd(e, t)
  })
}, VMAX.showAd = function (e, t) {
  var a = vmaxHelper.setAdFrameId(e), i = document.querySelector("#vmax_cover_inStream_" + e),
    n = vmaxHelper.getInsData(e);
  if (isPreroll(e) && VMAX.show[e] && VMAX.adBreakDuration.hasOwnProperty(e) && vmaxHelper.isAdspotMultiAd(n.adspot)) return i && i.querySelector("section") ? void VMAX.adBreak.start() : void createPOD(getStorage(e), e, !0);
  if ("s3" === VMAX.getAdState(e)) {
    if (document.querySelector("#" + a)) return ADSEQUENCE.decrementShowAdCounter(n.adspot, n.adspotType), vmaxAd.showFrameOverlay(e);
    if (Object.keys(getStorage(e + "_preroll_obj")).length > 0) {
      var o = getStorage(e + "_preroll_obj");
      removeStorage(e + "_preroll_obj"), vmaxVast.showBillboardVastAd(o.a, o.q, n.adspot, n.adspotType)
    } else VMAX.show[e] = !0, VMAX.showAd2(e, t)
  } else VMAX.showAd2(e, t)
}, VMAX.showAd2 = function (e, t) {
  var a = (getReferenceNodeById(e), e + "_Iscached"), i = getStorage(a),
    n = (document.querySelector("#vmax_cover_inStream_" + e), vmaxHelper.getInsData(e));
  if (adJson = getStorage(e), VMAX.requestCounter[e] <= 2 && 0 !== Object.keys(i).length && (console.info("showAd: 1000...", e), setTimeout(function () {
    return VMAX.showAd(e, t)
  }, 1e3), VMAX.requestCounter[e] = VMAX.requestCounter[e] || 0, VMAX.requestCounter[e] += 1), 0 === Object.keys(i).length) {
    if (0 === Object.keys(adJson).length) return _console.debug("No ad cache available in the storage"), VMAX.cacheAd(e, VMAX.showAd, !0);
    if (isPreroll(e) && VMAX.adBreakDuration.hasOwnProperty(e) && vmaxHelper.isAdspotMultiAd(n.adspot)) return void createPOD(adJson, e, !1);
    if (adJson.ad) return "display" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"] ? vmaxAd.createdisplayInterstitial(adJson.ad, e, adJson) : isSuperNativeExperience(e) ? createNativeMarkup(adJson.ad, e, adJson) : "native" == adJson["adspot-format"] && "interstitial" != adJson["adspot-size"] ? VMAX.create_native_banner_AD(adJson.ad, e, adJson) : "native" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"] ? createNativeMarkup(adJson.ad, e, adJson) : "video" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : "display" == adJson["adspot-format"] && "interstitial" == adJson["adspot-size"] ? displayInterstitial(rBody, spotId, adparams) : "audio" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : "daast" == adJson["adspot-format"] ? createVASTMarkup(adJson.ad, e, adJson) : (console.info("Display Ad Body: Remnant Advertisement"), void console.info("Currently not supported "));
    VMAX.noAdFound(e, adJson, !0)
  }
}, VMAX.getAdMarkup = function (e) {
  var t = getStorage(e), a = e + "_Iscached", i = getStorage(a);
  if (0 !== Object.keys(i).length && setTimeout(function () {
    return VMAX.getAdMarkup(e)
  }, 1e3), 0 === Object.keys(i).length) {
    var n = e + "_sequence", o = getStorage(n, "local");
    if (0 !== Object.keys(t).length) {
      if (0 === Object.keys(o).length) t && t.hasOwnProperty("adspot-config") && setStorage(n, t["adspot-config"], "local"); else {
        var r = !!o.hasOwnProperty("show-ad-counter") && o["show-ad-counter"];
        if (r && r > 1) {
          if (r && (o["show-ad-counter"] = r - 1), 1 == o["show-ad-counter"] && o.hasOwnProperty("ad-request-sleep-time") && !o.hasOwnProperty("adRequestSleepTime")) {
            var s = new Date, d = s.addMinutes(o["ad-request-sleep-time"]);
            o.adRequestSleepTime = d
          }
          setStorage(n, o, "local")
        }
      }
      return getXMLAd(e)
    }
    _console.debug("No ad cache available in the storage"), VMAX.cacheAd(e, "VMAX.getAdMarkup")
  }
}, VMAX.getAdRequestStatus = function () {
  return 2 == VMAX.adRequestStatus
}, sStorage.setLocalAdID = function (e) {
  _console.debug("Setting AdID to Local >> ", e), setStorage(sStorage.deviceIDFAKey, btoa(e), "local")
}, sStorage.getLocalAdID = function () {
  var e = getStorage(sStorage.deviceIDFAKey, "local");
  return "string" == typeof e ? atob(e) : ""
}, sStorage.removeLocalAdID = function () {
  removeStorage(sStorage.deviceIDFAKey, "local")
}, sStorage.setLocalUID = function (e) {
  _console.debug("Setting UID to Local >> ", e), setStorage(sStorage.deviceUIDKey, btoa(e), "local")
}, sStorage.getLocalUID = function () {
  var e = getStorage(sStorage.deviceUIDKey, "local");
  return "string" == typeof e ? atob(e) : getBPIDFromUIMap()
}, sStorage.removeLocalUID = function () {
  removeStorage(sStorage.deviceUIDKey, "local")
}, sStorage.getLocalIMSI = function () {
  var e = VMAX.deviceInfo.imsi;
  if (e) return e;
  var t = getStorage("uimap", "local");
  return t && Object.keys(t)[0] ? (e = Object.keys(t)[0], atob(e)) : null
}, sStorage.setMCCMNC = function () {
  var e = sStorage.getLocalIMSI();
  if (_console.debug("setMCCMNC Called!"), !e) return !1;
  var t = new UtilDeviceDetails(e);
  return __vmax_data.mcc = t.getMCC(), __vmax_data.mnc = t.getMNC(), !0
};
var initDataStore = {
  adDataStore: null, init: function () {
    if (void 0 !== navigator.getDataStores) return adDataStore = navigator.getDataStores("vmax_service_store"), !0
  }, set: function (e, t) {
    if (void 0 !== navigator.getDataStores) return adDataStore = navigator.getDataStores("vmax_service_store"), _console.debug("set adDataStore", adDataStore), adDataStore.then(function (a) {
      return _console.debug(a), a[0].put(t, e).then(function (e) {
        return _console.debug("cacheAd success index is: ", e), !0
      })
    })
  }, get: function (e) {
    if (void 0 !== navigator.getDataStores) return adDataStore = navigator.getDataStores("vmax_service_store"), _console.debug("get adDataStore", adDataStore), adDataStore.then(function (t) {
      return _console.debug(t), t[0].get(e).then(function (a) {
        return void 0 === a ? (_console.debug("No Ad Cache Available!"), {}) : (_console.debug("Ad Cached Available: ", a), t[0].remove(e).then(function (e) {
          _console.debug("Ad Cache Flushed!", e)
        }), a)
      })
    })
  }
};
VMAX.initConfig = function (e) {
  _console.debug("Logging Current Script Uri...", e);
  var t = getURILocation(e), a = t.pathname.split("/"), i = a[a.length - 1];
  VMAX.Domain.Name = t.host, VMAX.Domain.Context = t.protocol + "://" + VMAX.Domain.Name + t.pathname.replace("/" + i, "") || "/KaiOSSDK", VMAX.Domain.Lib = VMAX.Domain.Context + "/libs", VMAX.Domain.Style = VMAX.Domain.Context + "/css", VMAX.Domain.Img = VMAX.Domain.Context + "/imgs", CONST.AudioImg = VMAX.Domain.Style + "/default_audio_img.png", VMAX.initDelConfig(), CONST.adStyle = '\x3c!-- inject:css --\x3e\n        <link rel="stylesheet" href="' + VMAX.Domain.Style + '/kaios_style.css" />\n    \x3c!-- endinject --\x3e'
}, VMAX.initDelConfig = function () {
  if (!0 === checkMode()) return void _console.debug("Ignore Additional Config Params; Use Debug Config!");
  if (!VMAX.useDeliveryConfig) return void _console.debug("Ignore Additional Config Params; Use Default Config!");
  _console.debug("Initilizing Additional Config Params...");
  var e = {}, t = void 0, a = "g_delCfg", i = getStorage(a, "local");
  if (Object.keys(i).length > 0 && i.hasOwnProperty("dUri") && i.dUri && i.hasOwnProperty("dExpiry") && i.dExpiry) {
    if (t = new Date, expiry = new Date(i.dExpiry), _console.debug(expiry > t + " | " + expiry + " > " + t), expiry > t) return void (VMAX.DeliveryAPI = url.replace(reqDomain, i.dUri));
    removeStorage(a, "local")
  }
  getHTTPService(CONST.CFG.delConfig.location, {method: "GET", timeout: 2e3}, function (i) {
    _console.debug(i.response);
    var n = JSON.parse(i.response);
    if (n.hasOwnProperty("ad") && n.ad && n.ad.hasOwnProperty("url") && n.ad.url) {
      CONST.CFG.delConfig.domainCursor = CONST.CFG.delConfig.domains.length < n.ad.url ? 0 : n.ad.url - 1, CONST.CFG.delConfig.updateTimer = n.updateTimeInhours, e.dDomain = CONST.CFG.delConfig.domains[CONST.CFG.delConfig.domainCursor], e.expiry = n.updateTimeInhours, VMAX.DeliveryAPI = url.replace(reqDomain, e.dDomain), t = new Date;
      var o = {dUri: e.dDomain, dExpiry: t.addHours(e.expiry)};
      0 !== n.ad.url && CONST.CFG.delConfig.domains.length >= n.ad.url && setStorage(a, o, "local")
    }
  })
}, function (e, t, a, i) {
  vMaxSDKL = window.vMaxSDKL || (window.vMaxSDKL = []);
  e.getElementsByTagName("script")[0];
  sq = e.currentScript.src || e.querySelector('script[src*="KaiOSSDK/vmaxsdk.js"]').src, RegExp("set-debug=true").test(sq) && (VMAX.debugMode = !0), checkMode(), VMAX.initConfig(sq), initDeviceInfo(), initDeviceDetails(), initAppDetails()
}(document);
var AD_PARSER = {
  backUpAd: function (e, t, a, i, n, o) {
    var r = CONST.appConfig.get({type: "BACKUP-ADS", value: e, defaultValue: {}}) || {}, s = 12 == r.type,
      d = getStorage("maskingInfo", "local");
    if (VMAX.adBreakDuration.hasOwnProperty(a) && s && vmaxHelper.isAdspotMultiAd(e)) {
      if (VMAX.adBreakDuration[a] > 2) {
        var l = VMAX.adBreakDuration[a], c = {
          productionAd: CONST.multiAdStorage.getCampaigns(e) || {},
          backUpAd: CONST.appConfig.get({type: "BACKUP-ADS", value: e, defaultValue: {}}).campaigns || {},
          duration: l,
          maskingInfo: d,
          adSpotKey: e,
          callback: function (t) {
            _console.log("---------Final POD When BackUpAd Called----------"), _console.log(t), AD_PARSER.adBreak(e, !1, a, i, t)
          },
          offsetLatency: CONST.appConfig.get({type: "OFFSET-LATENCY", value: e, defaultValue: 0}) || 0,
          enabledCST: vmaxHelper.isCSTEnabled(e),
          isAPEEnabled: vmaxHelper.isAPEEnabled(e),
          spotId: a
        };
        return void new VmaxPodAdselection(c).formPOD()
      }
      return void AdError(a, "1014")
    }
    var u = CONST.appConfig.get({type: "ADSPOT", value: e}), m = vmaxHelper.isCSTEnabled(e),
      p = vmaxHelper.isAPEEnabled(e);
    CONST.adSelection = p || m ? new VmaxAdSelection("WEIGHT", p ? "KV-PARITY" : "", m) : new VmaxAdSelection, CONST.adSelection.getAd({
      isFcap: !0,
      macros: {
        ccb: Date.now() || (new Date).getTime(),
        advid: sStorage.getLocalAdID() || VMAX.deviceInfoDefaults.advid,
        vr: CONST.APIVersion,
        uid: sStorage.getLocalUID() || VMAX.deviceInfoDefaults.uid,
        ua: navigator.userAgent || "",
        mid: d.hasOwnProperty(e) && d[e].id || !1
      },
      spotId: a,
      campaignsList: CONST.appConfig.get({type: "BACKUP-ADS", value: e, defaultValue: {}}).campaigns || {},
      callback: function (r) {
        var s = r.ad, d = r.modifiedData, l = CONST.backupAdStorage.getAllData();
        if (l.adspots[e].hasOwnProperty("backup-ads") && (l.adspots[e]["backup-ads"].campaigns = d, CONST.backupAdStorage.set(l)), 0 == Object.keys(s).length) return void AdError(a, "1001");
        var c = {
          ad: s.ad,
          status: "000",
          adspotkey: e,
          "adspot-size": u["adspot-size"],
          "adspot-format": u["adspot-format"],
          type: u.type,
          runningAdType: "backupAd"
        };
        u["backup-ads"].hasOwnProperty("config") && (c["allow-extraction"] = u["backup-ads"].config["allow-extraction"], u["backup-ads"].config.hasOwnProperty("refresh-rate") && (c["refresh-after"] = u["backup-ads"].config["refresh-rate"])), _console.debug("%c BackUp Ad Called ", "background: #222; color: #bada55"), Object.assign(c, c, s.adparams), VMAX.backUpAdrCallback(c, e, t, a, i, n, o)
      }
    })
  }, multiAd: function (e, t, a, i, n, o) {
    var r = CONST.multiAdStorage.get({type: "ADSPOT", value: e, defaultValue: {}}), s = 12 == r.type,
      d = VMAX.adBreakDuration.hasOwnProperty(a) && s && vmaxHelper.isAdspotMultiAd(e),
      l = getStorage("maskingInfo", "local");
    if (d) {
      if (VMAX.adBreakDuration[a] > 2) {
        var c = VMAX.adBreakDuration[a], u = {
          productionAd: CONST.multiAdStorage.getCampaigns(e) || {},
          backUpAd: CONST.appConfig.get({type: "BACKUP-ADS", value: e, defaultValue: {}}).campaigns || {},
          duration: c,
          maskingInfo: l,
          adSpotKey: e,
          callback: function (t) {
            _console.log("---------Final POD When MultiAd Called----------"), _console.log(t), AD_PARSER.adBreak(e, !1, a, i, t)
          },
          offsetLatency: CONST.appConfig.get({type: "OFFSET-LATENCY", value: e, defaultValue: 0}) || 0,
          enabledCST: vmaxHelper.isCSTEnabled(e),
          isAPEEnabled: vmaxHelper.isAPEEnabled(e),
          spotId: a
        };
        return void new VmaxPodAdselection(u).formPOD()
      }
      return void AdError(a, "1014")
    }
    var m = CONST.multiAdStorage.get({type: "ADSPOT", value: e, defaultValue: {}});
    if (m) {
      var p = vmaxHelper.isCSTEnabled(e), g = vmaxHelper.isAPEEnabled(e);
      CONST.adSelection = g || p ? new VmaxAdSelection("WEIGHT", g ? "KV-PARITY" : "", p) : new VmaxAdSelection, CONST.adSelection.getAd({
        isFcap: !0,
        macros: {
          ccb: Date.now() || (new Date).getTime(),
          advid: sStorage.getLocalAdID() || VMAX.deviceInfoDefaults.advid,
          vr: CONST.APIVersion,
          uid: sStorage.getLocalUID() || VMAX.deviceInfoDefaults.uid,
          ua: navigator.userAgent || ""
        },
        spotId: a,
        campaignsList: CONST.multiAdStorage.getCampaigns(e),
        callback: function (r) {
          var s = r.ad, d = r.modifiedData;
          if (CONST.multiAdStorage.setCampaigns(e, d), !Object.keys(s).length) return void AD_PARSER.backUpAd(e, !1, a, i, n, o);
          var l = {
            ad: s.ad,
            status: "000",
            adspotkey: e,
            "adspot-size": m.size,
            "adspot-format": s.adparams.format,
            type: m.type,
            runningAdType: "multiAd"
          };
          m.hasOwnProperty("config") && (l["allow-extraction"] = m.config["allow-extraction"], m.config.hasOwnProperty("refresh-rate") && (l["refresh-after"] = m.config["refresh-rate"])), Object.assign(l, l, s.adparams, {adId: s.adId}), VMAX.backUpAdrCallback(l, e, t, a, i, n, o)
        }
      })
    }
  }, adBreak: function (e, t, a, i, n) {
    if (!n.pod.length) return void AdError(a, "1001");
    VMAX.podrCallback(n.pod, a, i)
  }
};
VMAX.podrCallback = function (e, t, a) {
  removeStorage(t + "_Iscached"), !0 === a && (VMAX.show[t] = !0), setStorage(t, e), setStorage(t + "_adspotType", 12, "local"), VMAX.showAd(t, e)
}, VMAX.rCallback = function (e, t, a, i, n, o, r) {
  _console.debug("Starting callback...");
  var s = getAdContent(e, t, i), d = getReferenceNodeById(i), l = d.getAttribute("data-source"),
    c = d.getAttribute("data-adspot-key"),
    u = d.hasAttribute("data-refresh-after") && d.getAttribute("data-refresh-after") >= 0;
  if (s) {
    if (s.hasOwnProperty("mod") && s.mod.hasOwnProperty("aid")) {
      var m = getStorage("maskingInfo", "local");
      m[c] = s.mod.aid[c], setStorage("maskingInfo", m, "local")
    }
    var p = replaceMacros(JSON.stringify(s), i);
    s = JSON.parse(p);
    var g = JSON.parse(e.response);
    s.runningAdType = "multiAd";
    var v = "X-VSERV-STORE", h = "X-VSERV-CONTEXT", f = getHeaderByName(e, "X-VSERV-REQUEST-ID"),
      A = getHeaderByName(e, "X-VSERV-AD-REFRESH-RATE"), y = getHeaderByName(e, v), C = getHeaderByName(e, h),
      V = getHeaderByName(e, "X-VSERV-ALLOW-EXTRACTION"), _ = getHeaderByName(e, "X-VSERV-BODY"),
      b = getHeaderByName(e, "X-VSERV-ADSPOT-TYPE"), S = JSON.parse(getHeaderByName(e, "X-VSERV-REWARD")),
      x = CONST.utils.pick(g["adspot-config"], ["ad-request-sleep-time", "show-ad-counter", "ad-request-skip-counter"]) || {},
      k = CONST.utils.pick(g["app-config"], ["ad-request-sleep-time", "show-ad-counter", "ad-request-skip-counter"]) || {},
      T = i + "_Iscached", I = i + "_spl", O = i + "_xBodyCC", M = i + "_adspotType", E = l + "_Total",
      w = c + "_" + l + "_rewardPoint", P = l + "_appPoint", D = i + "_requestId", L = function () {
        try {
          return JSON.parse(getHeaderByName(e, "X-VSERV-VIEWABILITY-PARTNER"))
        } catch (e) {
          return !1
        }
      }();
    if (r ? removeStorage(T, "local") : removeStorage(T), C ? setStorage(h, C) : removeStorage(h), y ? setStorage(v, y, "local") : removeStorage(v, "local"), V ? setStorage(I, V, "local") : removeStorage(I, "local"), b ? setStorage(M, b, "local") : removeStorage(M, "local"), !u && A && d.setAttribute("data-refresh-after", A), isRewared(i)) {
      if (S) {
        setStorage(w, S, "local");
        var N = {};
        N.timesStamp = Date.parse(new Date), N.appPoint = getStorage(w, "local")["daily-max-point"], setStorage(P, N, "local")
      } else removeStorage(w, "local");
      0 === Object.keys(getStorage(E, "local")).length && setStorage(E, {point: 0}, "local")
    }
    d.hasAttribute("data-adspot-Type") && d.removeAttribute("data-adspot-Type"), d.setAttribute("data-adspot-Type", b), ADSEQUENCE.setConfig(c, b, x, k);
    var X = "", R = "click-control";
    if (_) try {
      X = JSON.parse(_)
    } catch (e) {
      _console.debug("xbody can't be parsed", e)
    }
    X && X.hasOwnProperty(R) && X[R] ? setStorage(O, X[R]) : removeStorage(O), f ? setStorage(D, f) : removeStorage(D);
    var B = X.adparams;
    if (d.hasAttribute("data-fcap") && d.removeAttribute("data-fcap"), B && B.hasOwnProperty("campaignid") && B.hasOwnProperty("mod") && B.mod.hasOwnProperty("fcr")) {
      var U = B.mod.fcr, j = B.campaignid;
      d.setAttribute("data-fcap", j), _console.debug("Response FCAP : " + JSON.stringify(U)), FCAP.addCampaign(j, U)
    }
    var H = getHeaderByName(e, "X-VSERV-DISABLE-MEDIACACHE") || 1, F = i + "_Refreshed", K = i + "_sequence",
      q = getStorage(F);
    if (s && "" !== s && ("" !== s.ad || s.hasOwnProperty("adnetwork") && s.adnetwork)) {
      L && (s.viewability = L), f && (s["request-id"] = f), s.AdColor = o, (rDelay = getHeaderByName(e, "X-VSERV-DELAY")) && (s.ad_delay = rDelay), s.hasOwnProperty("adspot-config") || removeStorage(K, "local");
      if (removeStorage(i + "_attempt", "local"), r ? setStorage(i, s, "local") : setStorage(i, s), !0 === n) VMAX.show[i] = !0; else if ("VMAX.getAdMarkup" == n) {
        if (!(rExtraction = getHeaderByName(e, "X-VSERV-ALLOW-EXTRACTION"))) return removeStorage(i), null;
        _console.debug(rExtraction), VMAX.getAdMarkup(i)
      }
      if (r) _console.debug("PS App Setting / Detection goes here..."), VMAX.cacheMediaPS(i, s, !n); else {
        if (1 != H) {
          _console.log("Creating cache for media/images.");
          var J = s.ad ? JSON.parse(s.ad) : s.ad;
          "native" == s["adspot-format"] && "interstitial" == s["adspot-size"] && "" == J.video ? createNativeMarkup(s.ad, i, s, 1) : "native" == s["adspot-format"] && "interstitial" != s["adspot-size"] && VMAX.create_native_banner_AD(s.ad, i, s, 1), VMAX.onAdReady
        } else q && q > 0 ? "function" == typeof VMAX.onAdRefresh && VMAX.onAdRefresh(i) : VMAX.onAdReady;
        VMAX.showAd(i, s)
      }
    } else q && q > 0 && "function" == typeof VMAX.onAdRefresh && VMAX.onAdRefresh(i), VMAX.noAdFound(i, s, n);
    _console.log("Ending callback...", arguments), _console.debug(loadingScale())
  }
}, VMAX.backUpAdrCallback = function (e, t, a, i, n, o, r) {
  _console.debug("Starting callback...");
  var s = e, d = getReferenceNodeById(i),
    l = (d.getAttribute("data-source"), d.getAttribute("data-adspot-key"), d.hasAttribute("data-refresh-after") && d.getAttribute("data-refresh-after") >= 0);
  if (s) {
    var c = e["allow-extraction"], u = e.type,
      m = (e.rewardPoint, e["adspot-config"], e["app-config"], i + "_Iscached"), p = i + "_spl", g = i + "_adspotType";
    r ? removeStorage(m, "local") : removeStorage(m), c ? setStorage(p, c, "local") : removeStorage(p, "local"), u ? setStorage(g, u, "local") : removeStorage(g, "local"), !l && e["refresh-after"] && d.setAttribute("data-refresh-after", e["refresh-after"]), e.hasOwnProperty("delay") && e.delay && (s.ad_delay = e.delay), d.hasAttribute("data-adspot-Type") && d.removeAttribute("data-adspot-Type");
    var v = e["disable-media-cache"] || 1, h = i + "_Refreshed", f = i + "_sequence", A = getStorage(h);
    if (s && "" !== s && ("" !== s.ad || s.hasOwnProperty("adnetwork") && s.adnetwork)) {
      s.hasOwnProperty("adspot-config") || removeStorage(f, "local");
      if (removeStorage(i + "_attempt", "local"), r ? setStorage(i, s, "local") : setStorage(i, s), !0 === n) VMAX.show[i] = !0; else if ("VMAX.getAdMarkup" == n) {
        if (!(rExtraction = getHeaderByName(rq, extraction))) return removeStorage(i), null;
        _console.debug(rExtraction), VMAX.getAdMarkup(i)
      }
      if (r) _console.debug("PS App Setting / Detection goes here..."), VMAX.cacheMediaPS(i, s, !n); else {
        if (1 != v) {
          _console.log("Creating cache for media/images.");
          var e = s.ad ? JSON.parse(s.ad) : s.ad;
          "native" == s["adspot-format"] && "interstitial" == s["adspot-size"] && "" == e.video ? createNativeMarkup(s.ad, i, s, 1) : "native" == s["adspot-format"] && "interstitial" != s["adspot-size"] && VMAX.create_native_banner_AD(s.ad, i, s, 1), VMAX.onAdReady
        } else A && A > 0 ? "function" == typeof VMAX.onAdRefresh && VMAX.onAdRefresh(i) : VMAX.onAdReady;
        VMAX.showAd(i, s)
      }
    } else A && A > 0 && "function" == typeof VMAX.onAdRefresh && VMAX.onAdRefresh(i), VMAX.noAdFound(i, s);
    _console.log("Ending callback...", arguments), _console.debug(loadingScale())
  }
}, VMAX.noAdFound = function (e, t, a) {
  _console.debug("BackupAd show when NO-FILL");
  var i = getReferenceNodeById(e), n = i.getAttribute("data-adspot-key");
  if (CONST.appConfig.get({type: "ADSPOT", value: n})) return void AD_PARSER.backUpAd(n, !1, e, a);
  var o = e + "_attempt", r = getStorage(o, "local");
  if (_console.log(r), 0 === Object.keys(r).length && t) t.attemptNumber = 0, t.attemptTime = new Date, setStorage(o, t, "local"); else if (r.hasOwnProperty("attemptNumber")) {
    var s = parseInt(r.attemptNumber) + 1;
    r.attemptNumber = s;
    var d = fibonacci(s);
    console.log("fibonacci time==>" + d);
    var l = new Date;
    r.attemptTime = l.addMinutes(d), setStorage(o, r, "local")
  }
  t && "native" == t["adspot-format"] && "interstitial" != t["adspot-size"] && "" == t.ad ? _console.log("do nothing") : (document.getElementById(e).getElementsByTagName("*").length && (document.getElementById(e).getAttribute("isBNBB") || (document.getElementById(e).innerHTML = "")), VMAX.adRequestStatus = 4), AdError(e, "1001")
}, VMAX.getXAdCreative = function (e) {
  var t = "l" == getAppOrientation() ? "320x184" : "240x260";
  return wxh = t.split("x"), e.hasOwnProperty("additionalCreatives") && e.additionalCreatives.hasOwnProperty(t) && "" !== e.additionalCreatives[t] ? {
    uri: e.additionalCreatives[t],
    width: parseInt(wxh[0]),
    height: parseInt(wxh[1])
  } : {}
};
var displayInterstitial = function (e, t, a) {
  var i = getReferenceNodeById(t), n = i.getAttribute("data-adspot-key"), o = VMAX[t].AdParams.image_width,
    r = VMAX[t].AdParams.image_height;
  if (null === document.getElementById("vmx-cover")) {
    var s = document.createElement("div");
    s.id = "vmx-cover", s.style.cssText = "position:fixed; top:0px; left:0; background:rgba(0,0,0,0.85); z-index:599; width:100%; height:100%; display:none;", document.getElementsByTagName("body")[0].appendChild(s);
    var d = document.createElement("span");
    d.className = "vmx-close";
    var l = VMAX.Domain.css + "close.png";
    d.style.cssText = "background:url(" + l + ") no-repeat;background-size: 25px; width: 30px; height: 30px; position: absolute; display:block";
    var c = document.createElement("div");
    c.id = "my-ad-slot", c.style.cssText = "text-align: center;vertical-align: middle;display: table-cell;", s.appendChild(c), c.appendChild(d)
  }
  if ("" !== i) {
    VMAX.isautocloseAfterSec = 3, VMAX.ishowFirstAdAfterSec = 0;
    var u = document.createElement("iframe"), m = "mF_" + n + "_" + t;
    u.style.cssText = "border:none", u.setAttribute("id", m), u.setAttribute("scrolling", "no"), u.setAttribute("height", r), u.setAttribute("width", o), document.getElementById("my-ad-slot").appendChild(u);
    var p = document.getElementById(m).contentWindow.document;
    p.open(), p.write('<head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>' + e + "</body>"), p.close(), interstitial_overlay()
  } else _console.debug("no corresponding ins tag")
}, XMLHTTP = {};
XMLHTTP.XMLHTTPFactories = [function () {
  return new XMLHttpRequest
}, function () {
  return new ActiveXObject("Msxml2.XMLHTTP")
}, function () {
  return new ActiveXObject("Msxml3.XMLHTTP")
}, function () {
  return new ActiveXObject("Microsoft.XMLHTTP")
}], XMLHTTP.createXMLHTTPObject = function () {
  var e = !1;
  for (var t in XMLHTTP.XMLHTTPFactories) {
    try {
      e = XMLHTTP.XMLHTTPFactories[t]()
    } catch (e) {
      continue
    }
    break
  }
  return e
}, XMLHTTP.sendRequest = function (e, t, a, i, n, o, r) {
  function s(e, t, a) {
    1 == a && clearInterval(VMAX.Intervals[e]), 1 == VMAX.Timeout[e] && (t = "1004"), AdError(e, t), VMAX.Timeout[e] = !1
  }

  var d = XMLHTTP.createXMLHTTPObject(), l = null;
  if (_console.debug("sendRequest Called", arguments), d) {
    var c = a ? "POST" : "GET";
    if (d.open(c, e, !0), d.timeout = 5e3, d.withCredentials = !0, d.ontimeout = function () {
      VMAX.Timeout[i] = !0, _console.debug("TIMEOUT VAR", i, VMAX.Timeout)
    }, a) {
      var u = FCAP.getCampaignList();
      _console.debug("Request FCAP Counter : " + JSON.stringify(u)), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      var m = getStorage("X-VSERV-CONTEXT"), p = getStorage("X-VSERV-STORE", "local"),
        g = getStorage("maskingInfo", "local");
      0 != Object.keys(m).length && d.setRequestHeader("X-VSERV-CONTEXT", m), 0 != Object.keys(p).length && d.setRequestHeader("X-VSERV-STORE", p), 0 != Object.keys(u).length && d.setRequestHeader("X-VSERV-FCAP", JSON.stringify(u)), g.hasOwnProperty(a.adspot) && d.setRequestHeader("X-AID", JSON.stringify(g[a.adspot])), l = a.hasOwnProperty("adspot") && a.adspot ? a.adspot : null
    }
    d.onreadystatechange = function () {
      var e = getReferenceNodeById(i), a = e.getAttribute("data-adspot-key");
      if (4 == d.readyState) {
        if (200 != d.status && 304 != d.status) return CONST.appConfig.get({
          type: "ADSPOT",
          value: a
        }) ? (_console.debug("BackupAd show Due to network"), void AD_PARSER.backUpAd(a, !1, i, n, o, r)) : void (500 == d.status ? s(i, "1005", 0) : (_console.debug("Calling Delayed and request status " + d.status + "  and ready state is: " + d.readyState), VMAX.Intervals[i] = setInterval(function () {
          s(i, "1008", 1)
        }, 300), _console.debug("Calling Done")));
        _console.debug("callback from ... sendRequest"), CONST.throttle.resetWLIndex(a);
        var c = d.response && JSON.parse(d.response);
        if (c && vmaxHelper.isAdspotMultiAd(a)) {
          if (c.hasOwnProperty("mod") && c.mod.hasOwnProperty("aid")) {
            var u = getStorage("maskingInfo", "local");
            u[a] = c.mod.aid[a], setStorage("maskingInfo", u, "local")
          }
          c.hasOwnProperty("campaigns") && Object.keys(c.campaigns).length ? (c.vr = CONST.appConfig.get({
            type: "VR",
            value: a,
            defaultValue: ""
          }), CONST.multiAdStorage.setData(a, c), AD_PARSER.multiAd(a, !1, i, n, o, r)) : VMAX.noAdFound(i, {}, n)
        } else t(d, l, !1, i, n, o, r)
      }
    }, d.onload = function () {
    }, payload = obj2urlencodedString(a), _console.debug(payload), d.send(payload)
  }
}, VMAX.parseNativeAdResponse = function (e, t) {
  var a = [];
  if (e && "000" == e.status) {
    var i = "l" == getAppOrientation() ? "320x184" : "240x260";
    e.ad = vmaxHelper.replaceMacros(e.ad, "\\[dimension\\]", i);
    var n = JSON.parse(e.ad);
    AdObject = {
      img_url: "",
      icon_url: "",
      clickLabel: "",
      title: "",
      type: "",
      tagLine: "",
      video: "",
      audio: "",
      height: CONST.defaultImgHeight,
      width: CONST.defaultImgWidth,
      campaignid: n.campaignid,
      clickTrackers: CONST.clickTrackers,
      impTrackers: CONST.impTrackers,
      clickUrl: CONST.clickUrl,
      delay: t || CONST.delay,
      additionalCreatives: {},
      customGroupCreatives: [],
      creativeViewTrackers: [],
      creativeClickTrackers: []
    }, n.clickTrackers.length > 0 && (AdObject.clickTrackers = n.clickTrackers), n.video && "" !== n.video && (AdObject.video = n.video), n.audio && "" !== n.audio && (AdObject.audio = n.audio), n.customGroupCreatives && n.customGroupCreatives.hasOwnProperty("KaiOS") && (AdObject.customGroupCreatives = n.customGroupCreatives), n.title && (n.title.length > 40 ? AdObject.title = ellipsisText(n.title, 40) : AdObject.title = n.title), n.desc && (AdObject.tagLine = n.desc), n.ctaText && (AdObject.clickLabel = ellipsisText(n.ctaText, 15)), n.linkUrl && "" !== n.linkUrl ? AdObject.clickUrl = n.linkUrl : n.linkFallback && "" !== n.linkFallback && (AdObject.clickUrl = n.linkFallback), n.impTrackers && "" !== n.impTrackers && (AdObject.impTrackers = n.impTrackers), n.imageIcon && "" !== n.imageIcon && (AdObject.icon_url = n.imageIcon), n.imageMain && "" !== n.imageMain ? (AdObject.img_url = n.imageMain, AdObject.type = "image") : n.imageMedium && "" !== n.imageMedium ? (AdObject.img_url = n.imageMedium, AdObject.type = "imageMedium") : n.imageIcon && n.imageIcon, n.additionalCreatives && (AdObject.additionalCreatives = n.additionalCreatives), n.hasOwnProperty("creativeViewTrackers") && n.creativeViewTrackers && n.creativeViewTrackers.length && (AdObject.creativeViewTrackers = n.creativeViewTrackers), n.hasOwnProperty("creativeClickTrackers") && n.creativeClickTrackers && n.creativeClickTrackers.length && (AdObject.creativeClickTrackers = n.creativeClickTrackers), a = AdObject
  }
  return a
}, VMAX.forceAdFocus = function () {
  var e = 0;
  VmaxConstant.dom.focus && VmaxConstant.dom.focus(), clearInterval(VmaxConstant.focusTimer), VmaxConstant.focusTimer = setInterval(function () {
    VmaxConstant.dom.focus && VmaxConstant.dom.focus(), e++, (!vmaxAd.isAdOpenAlready() || e > 1) && clearInterval(VmaxConstant.focusTimer)
  }, 100)
}, VMAX.listenClickClose = function (e) {
  var t = e.key;
  console.log(t);
  var a = vmaxHelper.getAdSlotId(), i = getActions(a), n = VmaxConstant.clickKeys.indexOf(t) > -1 && i,
    o = !VMAX.useActionIcons || 0 !== VmaxConstant.clickKeys.indexOf(t) || !isPreroll(a),
    r = vmaxHelper.isCutomButtomBarSet(a);
  if (!r && CONST.handleEndKey && "Backspace" == t || "EndCall" == t) return e.preventDefault(), vmaxAd.closeAd(1);
  (vmaxAd.isAdOpen || vmaxAd.isVideoAdOpen()) && !r && n && o ? (e.preventDefault(), vmaxAd.clickAd()) : (n = VmaxConstant.closeKeys.indexOf(t) > -1 && i, vmaxAd.isVideoAdOpen() && n && !r ? (e.preventDefault(), vmaxVast.skipAd()) : vmaxAd.isAdOpen && n && !r ? (e.preventDefault(), vmaxAd.closeAd(1)) : n && !r ? (e.preventDefault(), vmaxVast.skipAd()) : "*" != t && "#" != t || (e.preventDefault(), (vmaxAd.isVideoAdOpen() && vmaxVast.playerObject || vmaxAd.isAdOpen && vmaxVast.playerObject) && vmaxVast.videoVolume("#" == t)), e.stopImmediatePropagation())
}, VMAX.create_native_interstitial_AD = function (e, t, a, i) {
  _console.debug("create_native_interstitial_AD Started..."), _blockImpression = "undefined" != typeof _blockImpression && !0 === _blockImpression, vmaxAd.isVideoOpen = !1;
  !0 == !i && interstitialOverlay.create(e.spotId);
  var n = "", o = vmaxVast[e.spotId].videoClickTrackingUrls;
  if (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].clickUrls = [e.clickUrl, [].concat(_toConsumableArray(e.clickTrackers), _toConsumableArray(e.creativeClickTrackers))], vmaxAd[e.spotId].clickUrls.push(o), _console.debug(e.clickUrl), "" == (n = createEndCardWithMedia(e, !0))) {
    if ("backupAd" === e.runningAdType) return void AdError(e.spotId, "1001");
    var r = 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(e.spotId) && !0 === VMAX.show[e.spotId];
    return void VMAX.noAdFound(e.spotId, {}, r)
  }
  vmaxAd.createIframeAdOverLay(n, e.height, e.width, t, function (t, a) {
    var i = vmaxHelper.getAdSlotId() || e.spotId, o = vmaxHelper.setAdFrameId(i);
    document.getElementById(o);
    getCustomView(i) || (VmaxConstant.dom = document.getElementById(o).contentWindow, document.getElementById(o).contentDocument.body), t || (vmaxHelper.handleImpression([].concat(_toConsumableArray(e.impTrackers), _toConsumableArray(e.creativeViewTrackers)) || [], !1, e.spotId), FCAP.init({
      pId: i,
      type: "i"
    })), getAdStatus.apply(this, a ? [i, "STATE_AD_END", "local"] : [i, "STATE_AD_END"]), vmaxAd.isAdOpen = !0, setTimeout(function (a) {
      console.info("getAdSlotId: ", a);
      var i = vmaxHelper.getVmaxPage(a), o = (i.querySelector(".left-action"), i.querySelector("#skipLabel"));
      i && (i.addEventListener("keydown", VMAX.listenClickClose), i.focus());
      var r = e.hasOwnProperty("delay") && e.delay || 0;
      if (VMAX.manageBottomBar(e.spotId, r), t ? o && vmaxVast.skipAfter <= 0 && (o.innerHTML = VMAXICON.Cancelicon) : (vmaxVast.skipEnabled = !1, vmaxVast.skipProgress()), e.hasOwnProperty("viewability") && e.viewability && !t) {
        var s = {adContent: n, spotId: e.spotId, adUXIndex: 0, flag: t, viewability: e.viewability};
        vmaxAd.createMOATTag(s)
      }
    }, 100, i)
  }, {u: CONST.adUXType[0], i: e.spotId}, a)
}, VMAX.create_native_interstitial_Video = function (e, t, a, i) {
  interstitialOverlay.create(e.spotId);
  var n = (VMAX.fullScreenMode && e.hasOwnProperty("video") && e.video.length, e.hasOwnProperty("video") && e.video.length, ""),
    o = 0;
  vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {});
  var r = vmaxVast[e.spotId].videoClickUrls, s = vmaxVast[e.spotId].videoClickTrackingUrls;
  if (r.length && (e.clickUrl = r[0]), vmaxAd[e.spotId].clickUrls = [e.clickUrl, e.clickTrackers], vmaxAd[e.spotId].clickUrls.push(s), e.hasOwnProperty("video") && e.video.length && t.hasOwnProperty("VideoUrl") && t.VideoUrl) n += createEndCardWithMedia(e, !1, !0, t, !0), o = 2; else {
    var d = createEndCardWithMedia(e, !1, !1, {}, !0);
    e.AdColor && e.AdColor, vmaxAd[e.spotId].clickUrls = [e.clickUrl, [].concat(_toConsumableArray(e.clickTrackers), _toConsumableArray(e.creativeClickTrackers))], vmaxAd[e.spotId].clickUrls.push(s), n += d + '\n            <audio id="' + VmaxConstant.videoTagId + '" width="100%">\n                <source src="' + t.VideoUrl + '" />\n                Audio Not Supported!\n            </audio>', o = 7
  }
  e.hasOwnProperty("impTrackers") && e.impTrackers.length > 0 && (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].VideoImpressionTrackingUrls = e.impTrackers), t.hasOwnProperty("Impression") && t.Impression.length > 0 && (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].VideoImpressionUrls = t.Impression), vmaxAd.createIframeAdOverLay(n, e.height, e.width, 0, function () {
    setTimeout(function () {
      if (e.hasOwnProperty("audio") && e.audio.length && t.hasOwnProperty("VideoUrl") && t.VideoUrl && vmaxAd.createBeaconNode(e.spotId, e.creativeViewTrackers), !getCustomView(e.spotId)) {
        var a = vmaxHelper.setAdFrameId(e.spotId);
        VmaxConstant.dom = document.getElementById(a).contentWindow
      }
      var i = vmaxHelper.getVmaxPage(e.spotId), r = i.querySelector("#" + VmaxConstant.videoTagId);
      if (vmaxVast.initVideo(r, t.TrackingEvents, t.Duration), e.hasOwnProperty("video") && e.video.length && setActions(e.spotId), vmaxAd.bindClickClose(), VMAX.forceAdFocus(), e.hasOwnProperty("viewability") && e.viewability) {
        _console.debug("VideoAdObject.Duration => ", t.Duration);
        var s = {
          adContent: n,
          spotId: e.spotId,
          adUXIndex: o,
          flag: 0,
          viewability: e.viewability,
          duration: vmaxVast.getVideoDuration(t.Duration)
        };
        vmaxAd.createMOATTag(s)
      }
    }, 1e3)
  }, {u: CONST.adUXType[a ? 3 : o], i: e.spotId}, i)
}, VMAX.displayInterstitialAd = function (e, t, a) {
  _console.debug("displayInterstitialAd Started..."), _blockImpression = "undefined" != typeof _blockImpression && !0 === _blockImpression, vmaxAd.isVideoOpen = !1;
  interstitialOverlay.create(e.spotId);
  var i = e.markup;
  vmaxAd.createIframeAdOverLay(i, e.height, e.width, t, function (e, t) {
  }, {u: CONST.adUXType[0], i: e.spotId}, a)
};
var interstitial_overlay = function (e) {
  function t() {
    document.querySelector("#" + VmaxConstant.adDivId).style.display = "none", _console.debug("Overlay Closed....")
  }

  console.log("Open overlay for display ads"), function (e) {
    console.log("Open overlay for display ads1");
    var a = document.querySelector("#" + VmaxConstant.adDivId);
    if (!a) return !1;
    var i = document.querySelectorAll('[id^="' + CONST.adSlotIdPrefix + '"]');
    if (i.length > 1) for (var n in i) i.hasOwnProperty(n) && "table-cell" === i[n].style.display && i[n].remove();
    document.querySelector("#" + vmaxHelper.setAdSlotId(e)) && (document.querySelector("#" + vmaxHelper.setAdSlotId(e)).style.display = "table-cell"), setTimeout(function () {
      a.style.display = "table", VMAX.forceAdFocus(), setTimeout(function () {
        0 === VmaxConstant.closeAD && t()
      }, 1e3 * VmaxConstant.iautocloseAfterSec)
    }, 1e3 * VmaxConstant.ishowFirstAdAfterSec), VMAX.forceAdFocus()
  }(e)
}, interstitialOverlay = {
  create: function (e) {
    var t = document.getElementById(VmaxConstant.adDivId), a = void 0, i = vmaxHelper.setAdSlotId(e);
    null === t ? (a = document.createElement("div"), a.id = VmaxConstant.adDivId, a.style.cssText = "position:fixed; top:0px; left:0; background:rgb(255,255,255); z-index:599; width:100%; height:100%; display:none;", document.getElementsByTagName("body")[0].appendChild(a)) : (a = t, null != document.querySelector("#" + i) && document.querySelector("#" + i).remove());
    var n = document.createElement("span");
    n.className = VmaxConstant.closeAdButtonClass;
    var o = document.createElement(CONST.adSlotTagName);
    o.id = i, o.style.cssText = "text-align: center;vertical-align: middle;display: table-cell; display: none;", a.appendChild(o), o.appendChild(n)
  }
};
VMAX.create_native_banner_AD = function (e, t, a, i) {
  var n = document.querySelector("#" + t), o = n.querySelectorAll("[data-native-element"), r = o.length, s = 0,
    d = JSON.parse(e), l = "", c = "", u = getReferenceNodeById(t);
  if (u.setAttribute("isBNBB", "yes"), VMAX.adMetaData = {isDeeplinking: vmaxHelper.isDeeplinking(d.linkFallback || "") || !1}, r > 0) {
    n.firstElementChild.style.display = "none";
    var m = {
      title: " native_c_title",
      ctaText: " native_c_btn_txt",
      desc: " native_c_desc",
      desc2: " native_c_tagline",
      rating: " native_c_rating",
      downloads: " native_c_downloads",
      price: " native_c_price",
      imageIcon: " native_c_icon",
      imageMain: " native_c_imagemain",
      sponsored: " native_c_sponsored",
      likes: " native_c_like",
      phone: "native_c_phone",
      address: "native_c_address",
      customImage: "native_c_customimage",
      salePrice: " native_c_saleprice"
    };
    n.setAttribute("data-element", n.firstElementChild.outerHTML);
    for (var p = 0; p < r; p++) if (m.hasOwnProperty(o[p].getAttribute("data-native-element"))) {
      var g = o[p].getAttribute("data-native-element"), v = n.querySelector('[data-native-element="' + g + '"]'),
        h = -1 != v.className.search(/native_c_/) ? "" : m[g];
      v.className += h, "" != d[g] ? (-1 != g.search(/image/i) ? v.src = d[g] : (v.innerHTML = d[g], -1 == g.search(/desc/i) && -1 == g.search(/title/i) || (v.style.wordWrap = "break-word", v.innerHTML = ellipsisText(v.innerText, -1 != g.indexOf("desc") ? 90 : 40))), s++) : _console.debug("Empty Element is =>", g)
    }
    l = n.firstElementChild.outerHTML
  } else {
    d.desc2 ? d.desc2 : d.desc ? d.desc : "", d.title && (d.title.length > 50 && "banner" == a["adspot-size"] ? d.title = ellipsisText(d.title, 50) : d.title.length > 55 && "billboard" == a["adspot-size"] && (d.title = ellipsisText(d.title, 55)));
    var f = u.getAttribute("data-imp-tracker");
    f && d.hasOwnProperty("impTrackers") && d.impTrackers.push(f);
    var A = u.getAttribute("data-clk-tracker");
    A && d.hasOwnProperty("clickTrackers") && d.clickTrackers.push(A);
    var y = "", C = "", V = "";
    "" == d.imageIcon && (y = "noDisplay", V = 'style="width:100%"'), "" == d.ctaText && (C = "noDisplay"), "banner" == a["adspot-size"] && (l += '<div style="display:none" class="vmax_banner" >\n                    <div class="wrapper color1 ad-banner active">                        <img class="vmax_banner_icon ' + y + '" src="' + d.imageIcon + '"/>\n                        <div class="vmax_contentData"><div class="vmax_title ' + V + '">\n                        <div class="vmax_banner_title">' + d.title + "</div>", l += '</div><div class="' + C + ' vmax_banner_btn"><button><span class="vmax_custom_btn_txt">' + d.ctaText + "<span></button></div></div></div></div>"), "billboard" == a["adspot-size"] && (l += '<div  style="display:none" class="vmax_billboard">\n        <div class="wrapper color1 ad-banner1 active" id="hb-layout1">\n        <div class=variable_elements>', "" != d.imageMain ? l += '<div class="vmax_imagemain"><img class="vmax_custom_imagemain" src="' + d.imageMain + '"></div>' : "" != d.imageMedium && (l += '<div class="vmax_imagemain"><img  class="vmax_custom_imagemain" src="' + d.imageMedium + '"></div>'), l += '</div><div class="fixed_elements"><img  class="vmax_billboard_icon ' + y + '" src="' + d.imageIcon + '"><div class="vmax_billboard_title" ' + V + ">" + d.title + "</div>", l += '<div class="' + C + ' vmax_btn_billboard"><div class="vmax_custom_btn_billboard_text">' + d.ctaText + "</div></div></div>            </div></div>"), c = "default"
  }
  if ("" != u) {
    "" === u.innerHTML && (b = document.querySelector("body"), b.insertAdjacentHTML("beforeend", CONST.adStyle));
    var _ = document.createElement("a");
    _.href = "#", _.id = "VMAX_" + t, u.nextSibling && (u.parentNode.insertBefore(_, u.nextSibling), document.getElementById("VMAX_" + t).appendChild(u)), u.innerHTML = l, getAdStatus(t, "STATE_AD_READY"), 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(t) && !0 === VMAX.show[t] ? _console.debug("null") : ("function" == typeof VMAX.onAdReady && (_console.debug("Ad is ready...", " Flag Value: ", i), VMAX.onAdReady(t, CONST.adUXType[0], VMAX.adMetaData)), "function" == typeof VMAX.onAdReady_Listener2 && (_console.debug("onAdReady_Listener2..."), VMAX.onAdReady_Listener2(t, CONST.adUXType[0])));
    var S = {"request-id": e["request-id"], data: JSON.stringify(getCustomKeyValueByPId(t))};
    kvLogger.setLogLength(vmaxHelper.getChunkLength()), kvLogger.insertBeaconNode(S)
  }
  if (1 != i && (0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(t) && !0 === VMAX.show[t])) {
    if ("default" == c || s > 0) {
      u.children[0].style.display = "block";
      var x = vmaxHelper.getInsData(t);
      ADSEQUENCE.decrementShowAdCounter(x.adspot, x.adspotType), vmaxHelper.fireImpression({
        spotid: t,
        impTrackers: d.impTrackers,
        refreshTime: x.refreshTime
      }), FCAP.init({pId: t, type: "i"}), getAdStatus(t, "STATE_AD_END")
    }
    var k = "VMAX_" + t;
    VMAX.NativeBannerBillboardArray[k] = [d.linkFallback, d.clickTrackers], removeStorage(t)
  }
};
var VmaxConstantDefault = {
  sdkVersion: "" + CONST.sdkVersion,
  libpath: "vmaxsdk",
  ifa: "",
  imsi: "",
  ua: "",
  dataBaseName: "VmaxDB2",
  dataBaseStoreName: "Ads",
  package: "com.vmax.jio",
  version: "A-AN-3.6.0",
  uxType: "interstitial",
  url: "",
  domain: "",
  path: "",
  dom: window,
  dbName: "vmaxDb",
  dbObjectName: "AdQ",
  default_img_height: 298,
  default_img_width: 238,
  iautocloseAfterSec: 1,
  ishowFirstAdAfterSec: 0,
  closeAD: 1,
  adDivId: "vmx-cover",
  adIframeId: "vmx-frameInt",
  closeAdButtonClass: "vmx-close",
  videoTagId: "vmx-video",
  clickAdButtonId: "vmx_click_btn",
  clickKeys: ["SoftLeft", "Enter"],
  closeKeys: ["SoftRight"],
  clickTrackers: [],
  impTrackers: [],
  clickUrl: !1,
  printlog: !0,
  isPreroll: !1
}, VmaxConstant = VmaxConstantDefault;
_console.log("%c SDK Version: " + VmaxConstant.sdkVersion + " ", "background: #000; color: #FF0; text-decoration: blink; font-weight: bold;");
var vmaxAd = {
  keyWords: {}, result: {}, request: null, isAdOpen: !1, isVideoOpen: !1, clickUrls: [], bindClickClose: function () {
    if (vmaxVast.PrerollEventHandler) {
      var e = window[vmaxVast.PrerollEventHandler];
      "function" == typeof e && VmaxConstant.dom.removeEventListener("keydown", e, !1)
    }
    var t = vmaxHelper.getAdSlotId();
    VmaxConstant.dom.addEventListener("keydown", VMAX.listenClickClose), _console.debug("VmaxConstant.dom: ", VmaxConstant.dom, vmaxVast.adObject.spotId + " | " + t);
    var a = document.querySelector("#vmax_page");
    console.log("adPg===>" + a), isAppTrusted(vmaxVast.adObject.spotId) && a && /custom-draw/.test(a.classList) && VmaxConstant.dom.removeEventListener("keydown", VMAX.listenClickClose)
  }, closeAd: function (e) {
    var t = vmaxHelper.getAdSlotId();
    isPreroll(t) ? (vmaxVast.onPrerollComplete(e), vmaxAd.resetMemberValues(t), vmaxVast.resetDataMembers(t)) : setTimeout(function (t) {
      if (document.querySelector("#" + VmaxConstant.adDivId)) {
        _console.debug("vmaxAd.isVideoAdOpen() && vmaxVast.playerObject => ", vmaxAd.isVideoAdOpen() + " -- " + vmaxVast.playerObject), vmaxVast.clearMediaFallbackTimer(t), vmaxVast.playerObject && (vmaxVast.playerObject.remove(), vmaxVast.playerObject = null, vmaxVast.stopProgressTracking(), vmaxVast.skipEnabled = !1), "undefined" != typeof skipAdTimer && skipAdTimer && (clearInterval(skipAdTimer), _console.debug("Clearing Timeout - skipAdTimer => ", skipAdTimer));
        var a = document.getElementById(VmaxConstant.adDivId),
          i = a.querySelectorAll(CONST.adSlotTagName + "[id^=" + CONST.adSlotIdPrefix + "]");
        if (a && i.length > 1) {
          var n = document.querySelector("#" + vmaxHelper.setAdSlotId(t));
          a.removeChild(n), a.style.display = "none"
        } else a.parentNode.removeChild(a);
        "13" === getAdSpotType(t) && vmaxVast.resetDataMembers(t), vmaxAd.resetMemberValues(t), "function" == typeof VMAX.onAdClose && e && VMAX.onAdClose(t), "function" == typeof VMAX.onAdClose_Listener2 && e && VMAX.onAdClose_Listener2(t)
      }
    }, 100, t), resetTrustedAppCache(t), VmaxConstant.dom.removeEventListener("keydown", VMAX.listenClickClose, !1), vmaxAd.removeCvNode(t)
  }, resetMemberValues: function (e) {
    getAdStatus(e, "STATE_AD_DISMISSED"), vmaxVast.stopProgressTracking(), e && vmaxAd && vmaxAd.hasOwnProperty(e) && (vmaxAd[e].clickUrls = [], removeStorage(e + "_adspotType", "local"), removeStorage(e + "_spl", "local")), resetActions(e), vmaxAd.isAdOpen = !1, vmaxAd.isVideoOpen = !1, VmaxConstant.dom = window, VMAX.forceAdFocus()
  }, removeCvNode: function (e) {
    var t = document.querySelectorAll("[id^=" + e + "_]");
    t.length && Array.prototype.forEach.call(t, function (e) {
      e.parentNode.removeChild(e)
    })
  }, clickAd: function () {
    var e = vmaxHelper.getAdSlotId(), t = {};
    t[e] = !1;
    vmaxHelper.isCutomButtomBarSet(e);
    if ("" != vmaxHelper.getVmaxPage(e).querySelector(".left-action").innerText && !(vmaxAd.hasOwnProperty(e) && vmaxAd[e].hasOwnProperty("clickUrls") && vmaxAd[e].clickUrls.length > 0 && "" == vmaxAd[e].clickUrls[0] || vmaxVast.hasOwnProperty(e) && vmaxVast[e].hasOwnProperty("videoClickUrls") && vmaxVast[e].videoClickUrls.length && "" == vmaxVast[e].videoClickUrls[0])) {
      getAdStatus(e, "STATE_AD_INTERACTED");
      var a = !!(vmaxAd.hasOwnProperty(e) && vmaxAd[e].hasOwnProperty("clickUrls") && vmaxAd[e].clickUrls.length > 0);
      if (a && "" !== vmaxAd[e].clickUrls[0] && (vmaxAd._handleClick(vmaxAd[e].clickUrls), t[e] = !0), vmaxVast.hasOwnProperty(e) && vmaxVast[e].hasOwnProperty("videoClickUrls") && vmaxVast[e].videoClickUrls.length && "" !== vmaxVast[e].videoClickUrls[0] && !a) {
        if (_console.debug("Open Popup Action Start!"), vmaxHelper.popup(vmaxVast[e].videoClickUrls[0], "AdClickWindow"), _console.debug("Open Popup Action Ends!"), vmaxVast[e].videoClickTrackingUrls && vmaxVast[e].videoClickTrackingUrls.length > 0) for (var i in vmaxVast[e].videoClickTrackingUrls) oImg = vmaxHelper.img_create(vmaxVast[e].videoClickTrackingUrls[i]);
        _console.debug("Close Ad Action Start!"), vmaxAd.closeAd(), t[e] = !0, _console.debug("Close Ad Action Ends!")
      }
      FCAP.init({
        pId: e,
        type: "c"
      }), "function" == typeof VMAX.onAdClick && !0 === t[e] && VMAX.onAdClick(e, vmaxVast.completed), "function" == typeof VMAX.onAdClick_Listener2 && !0 === t[e] && VMAX.onAdClick_Listener2(e, vmaxVast.completed), t[e] = !1
    }
  }, isAdOpenAlready: function () {
    return vmaxAd.isAdOpen | vmaxAd.isVideoOpen
  }, isVideoAdOpen: function () {
    return vmaxAd.isVideoOpen, vmaxAd.isVideoOpen
  }, handleClick: function (e) {
    jClicks = JSON.parse(decodeURIComponent(e)), vmaxAd._handleClick(jClicks)
  }, _handleClick: function (e) {
    if (clickRedirectUrl = e[0], e.shift(), clickTrackers = e, clickTrackers.length > 0) for (i in clickTrackers) for (j in clickTrackers[i]) oImg = vmaxHelper.img_create(clickTrackers[i][j]);
    if (clickRedirectUrl.length > 0) {
      try {
        _console.debug("Open Popup Action Start - 2!"), vmaxHelper.popup(clickRedirectUrl, "AdClickWindow"), _console.debug("Open Popup Action Ends - 2!")
      } catch (e) {
        _console.log("Error opening popup", e)
      }
      _console.debug("Close Ad Action Start - 2!"), vmaxAd.closeAd(), _console.debug("Close Ad Action Ends - 2!")
    }
  }, createIframeAdOverLay: function (e, t, a, i, n, o, r) {
    console.info("FLAG Value: flag=" + i);
    var s = vmaxHelper.getInsData(o.i), d = getCustomView(o.i) || o.hasOwnProperty("mediation") && o.mediation,
      l = document.createElement(d ? "div" : "iframe"), c = vmaxHelper.setAdFrameId(o.i);
    null != document.getElementById(c) && document.getElementById(c).remove();
    var u = window.innerWidth + "x" + window.innerHeight;
    wxh = u.split("x"), t = wxh[1], a = wxh[0], l.style.cssText = "border: none; margin-top: 0px;", l.setAttribute("id", c), l.setAttribute("scrolling", "no"), l.setAttribute("height", t), l.setAttribute("width", a);
    var m = "<style> #vmax_page { margin-top: " + (VMAX.fullScreenMode ? 26 : 0) + "px; } </style>";
    if (document.getElementById(vmaxHelper.setAdSlotId(o.i)).appendChild(l), d) {
      var p = CONST.adUXType.indexOf(o.u),
        g = !VMAX.fullScreenMode || 0 != p && 1 != p ? "border: none;" : "border: 0px solid #333; border-width: 1px 0; box-sizing: border-box;";
      l.style = "width:" + a + "px; height:" + t + "px; margin: auto; " + g, l.innerHTML = CONST.adStyle + m + e, document.body.style.overflow = "hidden", l.focus()
    } else {
      VmaxConstant.dom = document.getElementById(c).contentWindow;
      var v = VmaxConstant.dom.document;
      v.open(), v.write('<head><meta name="viewport" content="width=device-width, initial-scale=1.0">' + CONST.adStyle + '</head><body style="margin:0px;">' + m + e + "</body>"), v.close()
    }
    VMAX.enableMoatTag && vmaxAd.addMoatTag(), 1 === i || (!0 !== i && getAdStatus(o.i, "STATE_AD_READY"), o.i ? (this.hasOwnProperty(o.i) || (this[o.i] = {}), this[o.i].callBack = n, _console.debug("callBack: " + o.i + " => " + n)) : this.callBack = n);
    var h = vmaxVast.getClickURL(o.i) || !1;
    _console.debug("%cclickURL: " + h, "color: #f00"), VMAX.adMetaData = {isDeeplinking: vmaxHelper.isDeeplinking(h) || !1}, _console.debug("VMAX.adMetaData", VMAX.adMetaData), !0 === i || 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(o.i) && !0 === VMAX.show[o.i] ? (this.showFrameOverlay(o.i, i, r), VMAX.show[o.i] = !1, ADSEQUENCE.decrementShowAdCounter(s.adspot, s.adspotType)) : ("function" != typeof VMAX.onAdReady || !0 === i || r || "1" === sessionStorage.getItem(CONST.persistentKey) || (_console.debug("Ad is ready...", " Flag Value: ", i), VMAX.onAdReady(o.i, o.u, VMAX.adMetaData)), "function" == typeof VMAX.onAdReady_Listener2 && VMAX.onAdReady_Listener2(o.i, o.u), vmaxAd.isAdOpen && (vmaxAd.bindClickClose(), VMAX.forceAdFocus()));
    var f = "undefined" != typeof AdObject && AdObject["request-id"] || vmaxVast[o.i].adObject["request-id"],
      A = {"request-id": f, data: JSON.stringify(getCustomKeyValueByPId(o.i))};
    kvLogger.setLogLength(vmaxHelper.getChunkLength()), kvLogger.insertBeaconNode(A)
  }, showFrameOverlay: function (e, t, a) {
    interstitial_overlay(e), e && "function" == typeof this[e].callBack && this[e].callBack(t, a), vmaxAd.bindClickClose(), VMAX.forceAdFocus()
  }, createBeaconNode: function (e, t) {
    var a = document.createElement("span");
    if ("string" != typeof t && t.length > 0) for (var i in t) t[i] && (a = vmaxHelper.img_create(t[i])); else a += vmaxHelper.img_create(t);
    return a
  }, addMoatTag: function (e) {
    e = "https://z.moatads.com/reliancejiokaiosdisplay599888742719/moatad.js#moatClientLevel1=[Advertiser-primary-user-Id]&moatClientLevel2=[Campaign-Id]&moatClientLevel3=[Ad-Id]&moatClientSlicer1=[Content-Id]&moatClientSlicer2=[Adspot-Id]", e = "", moatTag = document.createElement("script"), moatTag.type = "text/javascript", moatTag.src = e, document.body.appendChild(moatTag)
  }, createMOATTag: function (e, t) {
    try {
      kS = "reliancejiokaiosdisplay599888742719", kV = "reliancejiokaiosjsvideo46923592816";
      var a = e || vmaxVast.adObject;
      _console.log("Initialize Moat", a), viewability = a.viewability[2];
      var i = function () {
        try {
          return {
            partnerId: viewability.id,
            mcl1: viewability.macros.moatClientLevel1,
            mcl2: viewability.macros.moatClientLevel2,
            mcl3: viewability.macros.moatClientLevel3,
            mcl4: viewability.macros.moatClientLevel4,
            mcs1: viewability.macros.moatClientSlicer1,
            mcs2: viewability.macros.moatClientSlicer2
          }
        } catch (e) {
          return !1
        }
      }();
      if (!i) return;
      var n = {
        level1: i.mcl1 || "",
        level2: i.mcl2 || "",
        level3: i.mcl3 || "",
        level4: i.mcl4 || "",
        slicer1: i.mcs1 || "",
        slicer2: i.mcs2 || ""
      };
      i.partnerId;
      if (_console.log("initMoat...."), -1 !== [0, 1].indexOf(a.adUXIndex)) {
        c = vmaxHelper.getAdSlotNode(a.spotId);
        var o = document.createElement("script");
        try {
          f = c.ownerDocument, h = f.defaultView || f.parentWindow
        } catch (e) {
          f = document, h = window
        }
        o.type = "text/javascript", c.parentNode.insertBefore(o, c.nextSibling || null), script_moat_params = encodeURI("moatClientLevel1=" + i.mcl1 + "&moatClientLevel2=" + i.mcl2 + "&moatClientLevel3=" + i.mcl3 + "&moatClientLevel4=" + i.mcl4 + "&moatClientSlicer1=" + i.mcs1 + "&moatClientSlicer2=" + i.mcs2);
        try {
          o.src = VMAX.Domain.Context + "/moatad.js#" + script_moat_params
        } catch (e) {
          _console.debug("Caught MOAT Static => ", e)
        }
      } else {
        playerObjectNode = vmaxVast.playerObject;
        var r = a.hasOwnProperty("duration") && a.duration ? parseInt(a.duration) : Math.floor(playerObjectNode.duration) || 0;
        MoatApiReference = initMoatTracking(playerObjectNode, n, r, kV, playerObjectNode.currentSrc || "")
      }
      window.addEventListener("message", function (e) {
        if ("undefined" != typeof MoatApiReference && MoatApiReference instanceof Object) switch (e.data.type) {
          case"adimpression":
            MoatApiReference.dispatchEvent({type: "AdImpression", adVolume: e.data.volume});
            break;
          case"adstarted":
            MoatApiReference.dispatchEvent({type: "AdVideoStart", adVolume: e.data.volume});
            break;
          case"adfirstquartile":
            MoatApiReference.dispatchEvent({type: "AdVideoFirstQuartile", adVolume: e.data.volume});
            break;
          case"admidpoint":
            MoatApiReference.dispatchEvent({type: "AdVideoMidpoint", adVolume: e.data.volume});
            break;
          case"adthirdquartile":
            MoatApiReference.dispatchEvent({type: "AdVideoThirdQuartile", adVolume: e.data.volume}), addEventListener;
            break;
          case"adcomplete":
            MoatApiReference.dispatchEvent({type: "AdVideoComplete", adVolume: e.data.volume})
        }
      })
    } catch (e) {
      console.error("Cannot insert moat tag!", e)
    }
  }, createdisplayInterstitial: function (e, t, a, i, n) {
    _console.debug("displayInterstitialAd Started...");
    var o = e, r = vmaxHelper.getAdSlotId() || e.spotId, s = vmaxHelper.setAdFrameId(r);
    document.getElementById(s);
    if ("" == o || !o) {
      var d = 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(e.spotId) && !0 === VMAX.show[e.spotId];
      VMAX.noAdFound(e.spotId, {}, d)
    }
    if (1 != i && removeStorage.apply(this, n ? [t, "local"] : [t]), "s3" === VMAX.getAdState(t)) return vmaxAd.showDisplayInterstitial(o, t, {
      u: CONST.adUXType[0],
      i: t
    }, n);
    setStorage(t, a), vmaxAd.isVideoOpen = !1, interstitialOverlay.create(t);
    vmaxAd.displayFrameOverlay(o, e.height, e.width, i, function () {
      setTimeout(function (e) {
        "spatialNavigationEnabled" in navigator && (navigator.spatialNavigationEnabled = !0);
        var t = vmaxHelper.getVmaxPage(e);
        t && (t.addEventListener("keydown", VMAX.listenClickClose), t.focus())
      }, 500)
    }, {u: CONST.adUXType[0], i: t}, n)
  }, displayFrameOverlay: function (e, t, a, i, n, o, r) {
    console.info("FLAG Value: flag=" + i);
    vmaxHelper.getInsData(o.i);
    if (1 === i || (!0 !== i && getAdStatus(o.i, "STATE_AD_READY"), o.i ? (this.hasOwnProperty(o.i) || (this[o.i] = {}), this[o.i].callBack = n, _console.debug("callBack: " + o.i + " => " + n)) : this.callBack = n), !0 === i || 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(o.i) && !0 === VMAX.show[o.i]) {
      var s = o.i;
      vmaxAd.showDisplayInterstitial(e, s, o, r), VMAX.show[o.i] = !1
    } else "function" != typeof VMAX.onAdReady || !0 === i || r || "1" === sessionStorage.getItem(CONST.persistentKey) || (_console.debug("Ad is ready...", " Flag Value: ", i), VMAX.onAdReady(o.i, o.u, VMAX.adMetaData), VMAX.show[o.i]), "function" == typeof VMAX.onAdReady_Listener2 && VMAX.onAdReady_Listener2(o.i, o.u), vmaxAd.isAdOpen && (vmaxAd.bindClickClose(), VMAX.forceAdFocus())
  }, showDisplayInterstitial: function (e, t, a, i) {
    _console.log("Showing Display Ads");
    var n = (vmaxHelper.getInsData(a.i), getCustomView(a.i) || a.hasOwnProperty("mediation") && a.mediation),
      o = document.createElement(n ? "div" : "iframe"), r = vmaxHelper.setAdFrameId(a.i);
    null != document.getElementById(r) && document.getElementById(r).remove();
    var s = window.innerWidth + "x" + window.innerHeight;
    wxh = s.split("x"), height = wxh[1], width = wxh[0], o.style.cssText = "border: none; margin-top: 0px;", o.setAttribute("id", r), o.setAttribute("scrolling", "no"), o.setAttribute("height", height), o.setAttribute("width", width), null == document.getElementById(vmaxHelper.setAdSlotId(a.i)) && interstitialOverlay.create(t);
    var d = "";
    d = '<div style="min-height:34px" class="vmax_footer">\n        <div class="actions right-action" id="skipLabel">' + VMAXICON.Cancelicon + "</div>\n        </div>";
    var l = "";
    l = '<div id="vmax_page">', l += '<div class="top" id="dspAd" style="display: flex;">';
    var c = "<style> #vmax_page { margin-top: " + (VMAX.fullScreenMode ? 26 : 0) + "px; height:100%; } </style>";
    document.getElementById(vmaxHelper.setAdSlotId(a.i)).appendChild(o), VmaxConstant.dom = document.getElementById(r).contentWindow;
    var u = VmaxConstant.dom.document;
    u.open(), u.write('<head><meta name="viewport" content="width=device-width, initial-scale=1.0">' + CONST.adStyle + '</head><body style="margin:0px;">' + c + l + e + "</div>" + d + "</div></body>"), u.close();
    var m = vmaxHelper.setAdFrameId(t),
      p = "IFRAME" == document.getElementById(m).nodeName ? document.getElementById(m).contentWindow.document : document.getElementById(m);
    interstitial_overlay(t), ADSEQUENCE.decrementShowAdCounter(t, a.u), vmaxAd.bindClickClose(), VMAX.forceAdFocus(), getAdStatus.apply(this, i ? [t, "STATE_AD_END", "local"] : [t, "STATE_AD_END"]), vmaxAd.isAdOpen = !0, FCAP.init({
      pId: t,
      type: "i"
    }), vmaxAd.monitor("#vmax_page #dspAd iframe", p, t)
  }, monitor: function (e, t, a) {
    var i = {};
    i[a] = !1;
    var n = t.querySelector(e);
    o && (clearInterval(o), o = null);
    var o = setInterval(function () {
      n || (n = t.querySelector(e)), n && t.activeElement === n && (n.blur(), i[a] = !0, "function" == typeof VMAX.onAdClick && !0 === i[a] && VMAX.onAdClick(a, vmaxVast.completed), "function" == typeof VMAX.onAdClick_Listener2 && !0 === i[a] && VMAX.onAdClick_Listener2(a, vmaxVast.completed), vmaxAd.closeAd(1))
    }, 100)
  }
}, vmaxVast = {
  skipAfter: 0,
  skipEnabled: !1,
  progressTrackingTimer: null,
  playerObject: null,
  started: !1,
  isVideoLoaded: !1,
  firstQuartileReached: !1,
  midPointReached: !1,
  thirdQuartileReached: !1,
  completed: !1,
  adObject: {},
  events: {start: [], firstQuartile: [], midpoint: [], thirdQuartile: [], complete: [], creativeView: []},
  duration: 0,
  videoClickUrls: [],
  videoClickTrackingUrls: [],
  VideoImpressionUrls: [],
  VideoImpressionTrackingUrls: [],
  interVal: null,
  init: function () {
    vmaxVast.resetDataMembers()
  },
  parseVastAd: function (e, t, a, i, n, o, r) {
    var s, d = void 0, l = !1, c = {}
    ;
    if (!(e instanceof XMLDocument && (e.getElementsByTagName("VASTAdTagURI").length || e.getElementsByTagName("MediaFile").length))) return void AdError(a.spotId, "1011");
    if ("audio" !== a["adspot-format"] && "daast" !== a["adspot-format"] || (l = !0), "video" === a["adspot-format"] && (s = e.getElementsByTagName("VAST")[0].getAttribute("version")), vmaxVast.adObject = a, "3.0" != s || null != a.delay && 0 != a.delay) vmaxVast.skipAfter = a.delay; else {
      _console.debug("parseVastAd DELAY => vmaxVast.skipAfter ", vmaxVast.skipAfter);
      for (var u = e.getElementsByTagName("Linear") || [], m = 0; m < u.length; m++) if (u[m].hasAttribute("skipoffset")) {
        var p = u[m].getAttribute("skipoffset");
        if (p.indexOf("%") > 0) {
          var g = p.split("%")[0], v = e.getElementsByTagName("Duration")[0].childNodes[0].nodeValue.split("00:00:")[1];
          vmaxVast.skipAfter = Math.round(v / 100 * g)
        } else vmaxVast.skipAfter = Math.round(p.split("00:00:")[1]);
        break
      }
    }
    for ("string" == typeof e && (e = vmaxHelper.parseXML(e)), vmaxHelper.isDefined(i) || (i = {
      Impression: [],
      TrackingEvents: [],
      VideoUrl: "",
      Duration: 0,
      Error: [],
      EndCardImage: [],
      EndCardHTML: [],
      EndCardDimension: [],
      CompanionProps: []
    }), e.getElementsByTagName("Ad")[0].getElementsByTagName("Wrapper").length > 0 ? xmlType = "W" : xmlType = "L", Impression = i.Impression, ImpressionObject = e.getElementsByTagName("Impression"), ImpressionNodeValue = vmaxVast.getCDATASections(ImpressionObject), d = 0; d < ImpressionObject.length; d++) i.Impression.push(ImpressionNodeValue[d]);
    for (TrackingEvents = vmaxVast.events, TrackingEventsObject = e.getElementsByTagName("Tracking"), TrackingNodeValue = vmaxVast.getCDATASections(TrackingEventsObject), d = 0; d < TrackingEventsObject.length; d++) {
      var h = TrackingEventsObject[d].getAttribute("event");
      TrackingEvents.hasOwnProperty(h) && TrackingEvents[h].push(TrackingNodeValue[d])
    }
    var f = e.getElementsByTagName("ClickTracking");
    for (vmaxVast.hasOwnProperty(a.spotId) || (vmaxVast[a.spotId] = {}), vmaxVast[a.spotId].videoClickTrackingUrls = [], vmaxVast[a.spotId].videoClickUrls = [], vmaxVast[a.spotId].videoClickTrackingUrls = "object" == (void 0 === r ? "undefined" : _typeof(r)) && Array.isArray(r) ? [].concat(_toConsumableArray(r), _toConsumableArray(vmaxVast[a.spotId].videoClickTrackingUrls)) : [], ClickTrackingNodeValue = vmaxVast.getCDATASections(f), d = 0; d < f.length; d++) vmaxVast[a.spotId].videoClickTrackingUrls.push(ClickTrackingNodeValue[0]);
    var A = e.getElementsByTagName("ClickThrough");
    for (ClickEvetsNodeValue = vmaxVast.getCDATASections(A), d = 0; d < A.length; d++) "" !== ClickEvetsNodeValue[d] && vmaxVast[a.spotId].videoClickUrls.push(ClickEvetsNodeValue[0]);
    i.TrackingEvents = TrackingEvents, ErrorObject = e.getElementsByTagName("Error"), ErrorNodeValue = vmaxVast.getCDATASections(ErrorObject);
    for (var y = 0; y < ErrorObject.length; y++) vmaxVast[a.spotId].hasOwnProperty("Error") || (vmaxVast[a.spotId].Error = []), vmaxVast[a.spotId].Error.push(ErrorNodeValue[y]);
    var C = e.getElementsByTagName("Companion");
    if (1 == o) {
      for (var V = 0; V < C.length; V++) if (C[V].hasAttribute("width") && C[V].hasAttribute("height")) {
        var _ = {width: C[V].getAttribute("width"), height: C[V].getAttribute("height")};
        i.EndCardDimension.push(_)
      }
    } else {
      for (var b = 0; b < C.length; b++) if (C[b].hasAttribute("height") && C[b].hasAttribute("width")) {
        var S = {width: C[b].getAttribute("width"), height: C[b].getAttribute("height")};
        i.EndCardDimension.push(S)
      }
      for (var x = [], k = 0; k < C.length; k++) {
        for (var T = {creativeView: []}, I = C[k].getElementsByTagName("Tracking"), O = 0; O < I.length; O++) {
          var M = I[O].getAttribute("event");
          CTrackingNodeValue = vmaxVast.getCDATASection(I[O]), T.hasOwnProperty(M) && (T[M] = [].concat(_toConsumableArray(T[M]), [CTrackingNodeValue]))
        }
        x[k] = {
          ClickThrough: [].concat(_toConsumableArray(vmaxVast.getCDATASections(C[k].getElementsByTagName("CompanionClickThrough")))),
          ClickTracking: [].concat(_toConsumableArray(vmaxVast.getCDATASections(C[k].getElementsByTagName("CompanionClickTracking")))),
          TrackingEvents: _extends({}, T)
        }, T.creativeView = []
      }
      i.CompanionProps = [].concat(x)
    }
    var E = e.getElementsByTagName("StaticResource");
    i.EndCardImage = vmaxVast.getCDATASections(E);
    var w = e.getElementsByTagName("HTMLResource");
    i.EndCardHTML = vmaxVast.getCDATASections(w);
    var P = [], D = vmaxVast[a.spotId].videoClickTrackingUrls;
    if ("L" == xmlType) {
      i.Duration = e.getElementsByTagName("Duration")[0].childNodes[0].nodeValue;
      var L = e.getElementsByTagName("MediaFile");
      P.push.apply(P, _toConsumableArray(vmaxVast.getCDATASections(L))), P.length > 0 && (l && 1 !== P.length ? (c = _extends({}, getRequestedBitRate(a.spotId)), i.VideoUrl = vmaxVast.selectMediaFile(L, c)) : i.VideoUrl = P[0]), "function" == typeof t && t(a, i, n)
    } else {
      var N = e.getElementsByTagName("VASTAdTagURI").length ? vmaxVast.getCDATASections(e.getElementsByTagName("VASTAdTagURI")) : "";
      if ("" == N) {
        if (_console.debug("No media file available!"), vmaxVast[a.spotId].hasOwnProperty("Error") && vmaxVast[a.spotId].Error.length > 0) for (var X in vmaxVast[a.spotId].Error) if ("" != vmaxVast[a.spotId].Error) {
          vmaxHelper.img_create(vmaxVast[a.spotId].Error[X])
        }
        var R = "No media file available in the XML. 1010";
        return "function" == typeof VMAX.onAdError && VMAX.onAdError(a.spotId, R), void ("function" == typeof VMAX.onAdError_Listener2 && VMAX.onAdError_Listener2(a.spotId, R))
      }
      vmaxVast.loadXmlAd(N, t, a, i, n, o, D)
    }
  },
  selectMediaFile: function (e, t) {
    var a = {};
    if (!t || !t.hasOwnProperty("bitrate")) return e[0].childNodes[0].nodeValue;
    var i = t.bitrate;
    for (m in e) e.hasOwnProperty(m) && (a[e[m].getAttribute("bitrate")] = e[m].childNodes[0].nodeValue);
    return _console.log(a, t), a[vmaxVast.closestNumber(Object.keys(a), i)]
  },
  closestNumber: function (e, t) {
    var a = t.toString();
    if (-1 !== e.indexOf(a)) return t;
    e.push(a), e.sort(function (e, t) {
      return e - t
    });
    var i = e.indexOf(a);
    return 0 === i ? e[i + 1] : e[i - 1]
  },
  getCDATASection: function (e, t) {
    var a = 0;
    t = t || "#cdata-section";
    for (var i = 0; i < e.childNodes.length; i++) if (e.childNodes[i].nodeName === t && "" !== e.childNodes[i].nodeValue) {
      a = i;
      break
    }
    return e.childNodes[a].nodeValue.trim()
  },
  getCDATASections: function (e, t) {
    for (var a = [], i = 0; i < e.length; i++) a.push(this.getCDATASection(e[i], t) || "");
    return a
  },
  loadXmlAd: function (e, t, a, i, n, o, r) {
    var s = new XMLHttpRequest({mozSystem: !0});
    s.open("get", e, !0), s.responseType = "document", s.addEventListener("error", function () {
      console.info("Error Loading Xml Url", e), AdError(a.spotId, "1015")
    }), s.addEventListener("load", function () {
      var e = s.response;
      vmaxVast.parseVastAd(e, t, a, i, n, o, r)
    }), s.send()
  },
  resetDataMembers: function () {
    vmaxVast.skipAfter = 0, vmaxVast.isVideoLoaded = !1, vmaxVast.skipEnabled = !1, vmaxVast.playerObject = null, vmaxVast.started = !1, vmaxVast.firstQuartileReached = !1, vmaxVast.midPointReached = !1, vmaxVast.thirdQuartileReached = !1, vmaxVast.completed = !1, vmaxVast.adObject = !1, vmaxVast.events = {
      start: [],
      firstQuartile: [],
      midpoint: [],
      thirdQuartile: [],
      complete: [],
      creativeView: []
    }, vmaxVast.duration = 0, vmaxVast.interVal = null, vmaxVast.videoClickUrls = [], vmaxVast.videoClickTrackingUrls = [], vmaxVast.VideoImpressionUrls = [], vmaxVast.VideoImpressionTrackingUrls = [], VmaxConstant = VmaxConstantDefault
  },
  initVideo: function (e, t, a) {
    vmaxVast.playerObject = e, vmaxVast.events = t, vmaxVast.duration = e && e.hasOwnProperty("duration") && !isNaN(e.duration) ? e.duration : a, vmaxVast.play()
  },
  skipAd: function (e) {
    var t = vmaxHelper.getAdSlotId();
    vmaxVast.skipEnabled ? (vmaxVast.hasOwnProperty("playerObject") && vmaxVast.playerObject && vmaxVast.playerObject.pause(), vmaxVast.clearMediaFallbackTimer(t), vmaxAd.closeAd(1), "function" == typeof e && e(), vmaxVast.resetDataMembers(t)) : _console.debug("Ad cannot be skipped! Please wait...")
  },
  skipProgress: function () {
    _console.debug("skipProgress Called"), vmaxAd.isVideoOpen = !0;
    var e = vmaxHelper.getAdSlotId(), t = vmaxHelper.getVmaxPage(e);
    "undefined" != typeof skipAdTimer && skipAdTimer && (clearInterval(skipAdTimer), skipAdTimer = null), "function" == typeof VMAX.onAdSkippable && VMAX.onAdSkippable(e, vmaxVast.completed);
    var a = t.querySelector("#skipLabel");
    if (vmaxVast.skipEnabled) a && (a.innerHTML = VMAXICON.Skipicon); else if (!isRewared(e)) {
      vmaxVast.skipAfter = vmaxVast[e].hasOwnProperty("adObject") && vmaxVast[e].adObject.hasOwnProperty("delay") && parseInt(vmaxVast[e].adObject.delay) > 0 ? parseInt(vmaxVast[e].adObject.delay) : vmaxVast.skipAfter || 0, _console.log("skipDelay is:" + vmaxVast.skipAfter), _console.log("The vmaxVast[pId] is : " + vmaxVast[e]);
      var i = 0;
      i = vmaxVast.playerObject && vmaxVast.skipAfter >= vmaxVast.playerObject.duration.toFixed(0) ? -1 : vmaxVast.skipAfter;
      var n = i;
      if (_console.debug("skipProgress DELAY - skipAfter => ", i), i > 0) _console.log("Skip after value for >0 is:" + i), a && (a.innerHTML = "skip in <span id=skipTime>" + i + "</span> sec"); else if (-1 == i) i = vmaxVast.playerObject.duration.toFixed(0), _console.log("Skip in -1 condition:" + i), a && (a.innerHTML = ""); else if (0 == i) {
        if (a) {
          var o = vmaxVast.playerObject ? VMAXICON.Skipicon : VMAXICON.Cancelicon;
          a.innerHTML = o, _console.log("Skip in 0 conditiom:" + i)
        }
        vmaxVast.skipEnabled = !0
      }
      var r = t.querySelector("#skipTime");
      skipAdTimer = setInterval(function () {
        _console.debug("skipAdTimer DELAY - skipAfter => ", i + " skipAdTimer => " + skipAdTimer), i--, r && (r.innerHTML = i), i < 1 && (clearInterval(skipAdTimer), skipAdTimer = null, i >= 0 && !(vmaxVast.playerObject && vmaxVast.playerObject.duration - vmaxVast.skipAfter < 1) && a && (vmaxVast.playerObject ? parseInt(n) <= vmaxVast.playerObject.duration.toFixed(0) ? a.innerHTML = VMAXICON.Skipicon : a.innerHTML = "" : a.innerHTML = VMAXICON.Cancelicon), vmaxVast.skipEnabled = !0), _console.debug("skipAdTimer DELAY - skipAfter => ", i)
      }, 1e3)
    }
  },
  videoVolume: function (e) {
    var t;
    t = parseFloat(vmaxVast.playerObject.volume).toFixed(1), e && t < 1 ? t = parseFloat(parseFloat(t) + .1).toFixed(1) : !e && t > 0 && (t = parseFloat(t - .1).toFixed(1)), vmaxVast.playerObject.volume = t
  },
  play: function () {
    function e() {
      var e = vmaxHelper.getAdSlotId();
      vmaxVast.playerObject && vmaxVast.playerObject.currentTime >= VMAX.adBreakDuration[e] && vmaxVast.onPrerollComplete()
    }

    function t() {
      isNaN(vmaxVast.playerObject.duration) || vmaxVast.onloadedmetadata("onplay")
    }

    function a() {
      vmaxVast.onloadedmetadata(), vmaxVast.started && vmaxVast.startProgressTracking(vmaxVast.interVal)
    }

    function i(e) {
      var t = {message: "Unknown Error"}, a = vmaxHelper.getAdSlotId(),
        i = e.path && e.path[0] ? e.path[0].error ? e.path[0].error : t : e.originalTarget && e.originalTarget.hasOwnProperty("error") ? e.originalTarget.error : t;
      _console.log("Error while loading media file", i.message), vmaxHelper.handleImpression(vmaxVast[a].Error || []), vmaxVast.clearMediaFallbackTimer(a), isRewared(a) ? (resetActions(a), vmaxVast.showRewardEndcard(a)) : !isPreroll(a) && vmaxVast[a].adObject.hasOwnProperty("adspot-format") && "audio" !== vmaxVast[a].adObject["adspot-format"] && "daast" !== vmaxVast[a].adObject["adspot-format"] ? (resetActions(a), VMAX.show[a] = !0, 0 == vmaxVast.adObject.hasOwnProperty("isEndCardAvailable") ? vmaxHelper.setEndCard(a, vmaxVast.adObject) : vmaxAd.closeAd()) : vmaxVast.onPrerollComplete(), AdError(a, "1010")
    }

    function n(e) {
      if (_console.debug("videoOnEnded", e), pId = vmaxHelper.getAdSlotId(), vmaxVast.stopProgressTracking(), vmaxVast.clearMediaFallbackTimer(pId), vmaxVast.onComplete(), isRewared(pId)) resetActions(pId), vmaxVast.showRewardEndcard(pId); else if (!isPreroll(pId) && vmaxVast[pId].adObject.hasOwnProperty("adspot-format") && "audio" !== vmaxVast[pId].adObject["adspot-format"] && "daast" !== vmaxVast[pId].adObject["adspot-format"]) {
        console.info(pId);
        var t = pId && vmaxVast.hasOwnProperty(pId) && vmaxVast[pId].hasOwnProperty("adObject") ? vmaxVast[pId].adObject : vmaxVast.adObject;
        if (resetActions(pId), 0 == t.hasOwnProperty("isEndCardAvailable")) vmaxHelper.setEndCard(pId, t); else {
          vmaxVast.skipEnabled = !0;
          var a = vmaxHelper.getVmaxPage(pId), i = a.querySelector("#skipLabel");
          i && (i.innerHTML = VMAXICON.Cancelicon), document.body.focus()
        }
        t = {}
      } else vmaxVast.onPrerollComplete(1)
    }

    vmaxVast.playerObject.addEventListener("play", t, !0), vmaxVast.playerObject.addEventListener("loadedmetadata", a, !0), vmaxVast.playerObject.addEventListener("error", i, !0), vmaxVast.playerObject.addEventListener("ended", n, !0), vmaxVast.playerObject.addEventListener("timeupdate", e.bind(this), !0), vmaxVast.playerObject.addEventListener("canplay", function (e) {
      console.info("Can start playing media", e)
    }, !1), vmaxVast.playerObject.addEventListener("pause", function (e) {
      _console.debug("Media playback paused", e);
      var t = vmaxHelper.getAdSlotId();
      0 == vmaxVast.adObject.hasOwnProperty("isEndCardAvailable") && setTimeout(function () {
        e.target.remove()
      }, 1e3 * VMAX.adBreakRemaningDuration[t]), vmaxVast.stopProgressTracking()
    }, !1), vmaxVast.playerObject.play(), vmaxVast.videoNotLoadedFalback()
  },
  showRewardEndcard: function (e) {
    var t = vmaxHelper.setAdFrameId(e);
    VmaxConstant.dom = "IFRAME" == document.getElementById(t).nodeName ? document.getElementById(t).contentWindow.document : document.getElementById(t), VmaxConstant.dom.querySelector("#vmax_page").className = "nativeaudio", VmaxConstant.dom.querySelector(".vmax_footer").style.display = "inherit", VmaxConstant.dom.querySelector("#audioAdframeEC2").style.display = "block", vmaxAd.createBeaconNode(e, vmaxAd[e].creativeView), vmaxAd[e].creativeView = [], resetActions(e), adObject = {}, vmaxVast.skipEnabled = !0, vmaxAd.isAdOpen = !0
  },
  impressionTracking: function (e) {
    vmaxVast.moatEvent("AdImpression");
    var t = vmaxHelper.getAdSlotId();
    FCAP.init({
      pId: t,
      type: "i"
    }), vmaxAd.hasOwnProperty(t) && (vmaxAd[t].hasOwnProperty("VideoImpressionUrls") && vmaxAd[t].VideoImpressionUrls.length > 0 && (vmaxHelper.handleImpression(vmaxAd[t].VideoImpressionUrls), vmaxAd[t].VideoImpressionUrls = [], _console.debug("Fireup all VideoImpressionUrls...")), vmaxAd[t].hasOwnProperty("VideoImpressionTrackingUrls") && vmaxAd[t].VideoImpressionTrackingUrls.length > 0 && (vmaxHelper.handleImpression(vmaxAd[t].VideoImpressionTrackingUrls), vmaxAd[t].VideoImpressionTrackingUrls = [], _console.debug("Fireup all VideoImpressionTrackingUrls...")), e && "function" == typeof e && e())
  },
  onloadedmetadata: function (e) {
    vmaxVast.isVideoLoaded = !0;
    var t = vmaxHelper.getAdSlotId(), a = vmaxHelper.getVmaxPage(t);
    if (null != a) {
      var i = vmaxHelper.isCutomButtomBarSet(t);
      if (!isPreroll(t)) {
        var n = a.querySelector(".vmax_footer"),
          o = !!(vmaxVast[t].adObject && vmaxVast[t].adObject.hasOwnProperty("audio") && vmaxVast[t].adObject.audio);
        n && VMAX.hideVideoControls && !o && (n.style.display = "none");
        var r = a.querySelector(".left-action"), s = this.getClickURL(t),
          d = vmaxVast[t].hasOwnProperty("adObject") && vmaxVast[t].adObject.hasOwnProperty("clickLabel") && vmaxVast[t].adObject.clickLabel || VMAXICON.CTAicon;
        r && (r.innerHTML = s ? i ? "" : d : ""), (vmaxVast[t].adObject.hasOwnProperty("adspot-format") && "audio" === vmaxVast[t].adObject["adspot-format"] || "daast" === vmaxVast[t].adObject["adspot-format"]) && VmaxConstant.dom.document.querySelector(".audio_ad") && (VmaxConstant.dom.document.querySelector(".audio_ad").style.display = "flex");
        var l = vmaxVast[t].hasOwnProperty("adObject") && vmaxVast[t].adObject.hasOwnProperty("delay") && vmaxVast[t].adObject.delay || 0;
        VMAX.manageBottomBar(t, l)
      }
      "Close" != a.querySelector(".right-action").innerHTML && vmaxVast.skipProgress(), vmaxVast.trackEvents()
    }
  },
  getClickURL: function (e) {
    return e ? vmaxVast.hasOwnProperty(e) && vmaxVast[e].hasOwnProperty("adObject") && vmaxVast[e].adObject.hasOwnProperty("clickUrl") && vmaxVast[e].adObject.clickUrl.length && vmaxVast[e].adObject.clickUrl || vmaxVast[e].hasOwnProperty("adObject") && vmaxVast[e].adObject.hasOwnProperty("adspot-format") && "native" !== vmaxVast[e].adObject["adspot-format"] && vmaxVast[e].hasOwnProperty("videoClickUrls") && vmaxVast[e].videoClickUrls.length && vmaxVast[e].videoClickUrls[0] || "" : ""
  },
  stopProgressTracking: function () {
    clearInterval(vmaxVast.progressTrackingTimer), _console.log("stopProgressTracking")
  },
  trackEvents: function () {
    vmaxVast.trackProgress();
    var e = vmaxHelper.getAdSlotId();
    vmaxAd[e] && "function" == typeof vmaxAd[e].showImageForAudio && vmaxAd[e].showImageForAudio()
  },
  videoNotLoadedFalback: function () {
    var e = 1e3 * VMAX.videoDismissTimer;
    console.info("throwFallbackTimer > " + e);
    var t = vmaxHelper.getAdSlotId();
    VMAX.vfTimer[t] = setTimeout(function () {
      if (_console.debug("pId => " + t + " | VMAX.vfTimer => ", VMAX.vfTimer, vmaxVast.isVideoLoaded + " -- " + vmaxVast.skipEnabled), !vmaxVast.isVideoLoaded && !vmaxVast.skipEnabled) {
        var a = vmaxHelper.getAdSlotId();
        if (isRewared(a)) vmaxVast.hasOwnProperty("playerObject") && vmaxVast.playerObject && vmaxVast.playerObject.pause(), vmaxVast.showRewardEndcard(a), resetActions(a); else if (isPreroll(a) || ["daast", "audio"].indexOf(vmaxVast.adObject["adspot-format"]) >= 0) vmaxVast.onPrerollComplete(); else {
          var i = VmaxConstant.dom.document ? VmaxConstant.dom.document.getElementById("skipLabel") : "";
          vmaxVast.skipEnabled = !0, i && (i.innerHTML = VMAXICON.Skipicon), vmaxVast.hasOwnProperty("playerObject") && vmaxVast.playerObject && vmaxVast.playerObject.pause(), vmaxVast.stopProgressTracking(), _console.debug("vmaxVast[spotId]: " + vmaxVast[a]);
          var n = a && vmaxVast.hasOwnProperty(a) && vmaxVast[a].hasOwnProperty("adObject") ? vmaxVast[a].adObject : vmaxVast.adObject;
          resetActions(a), 0 == n.hasOwnProperty("isEndCardAvailable") ? a && vmaxHelper.setEndCard(a, n) : vmaxAd.closeAd(), n = {}
        }
        a && AdError(a, "1010"), _console.log("Media FB Executed. Media dismissed due to " + e + "ms timeout."), a && vmaxHelper.handleImpression(vmaxVast[a].Error || [])
      }
    }, e), _console.debug("pId => " + t + " | VMAX.vfTimer => ", VMAX.vfTimer)
  },
  clearMediaFallbackTimer: function (e) {
    e && (_console.debug("pId => " + e + " | clearMediaFallbackTimer => ", VMAX.vfTimer), VMAX.vfTimer.hasOwnProperty(e) && (clearTimeout(VMAX.vfTimer[e]), VMAX.vfTimer[e] = null, delete VMAX.vfTimer[e]))
  },
  trackProgress: function () {
    setTimeout(function () {
      if (null != vmaxVast.playerObject) {
        vmaxVast.duration = isNaN(vmaxVast.playerObject.duration) ? vmaxVast.duration : vmaxVast.playerObject.duration;
        var e = vmaxVast.duration, t = e < 16 ? 16 : 4, a = Math.floor(1e3 * e / t);
        vmaxVast.interVal = isNaN(a) ? 1e3 : a, vmaxVast.startProgressTracking(vmaxVast.interVal)
      }
    }, 100)
  },
  startProgressTracking: function (e) {
    console.info("startProgressTracking");
    var t = vmaxHelper.getAdSlotId();
    vmaxVast.delay = vmaxVast[t].hasOwnProperty("adObject") && vmaxVast[t].adObject.hasOwnProperty("delay") ? parseInt(vmaxVast[t].adObject.delay) : CONST.delay, _console.debug("startProgressTracking DELAY: ", vmaxVast.delay);
    var a = vmaxVast.adObject && vmaxVast.adObject.hasOwnProperty("clickUrl") && vmaxVast.adObject.clickUrl.length || vmaxVast.videoClickUrls.length || vmaxVast[t].hasOwnProperty("adObject") && vmaxVast[t].adObject.hasOwnProperty("clickUrl") && vmaxVast[t].adObject.clickUrl.length || vmaxVast[t].videoClickUrls.length;
    _console.debug("CTA Exists = ", a);
    var i = vmaxVast.playerObject.closest("#vmax_page") && vmaxVast.playerObject.closest("#vmax_page").querySelector(".vmax_footer");
    i && !vmaxVast.playerObject.closest("#vmax_page").querySelector("audio") && (!a && -1 == vmaxVast.delay || isRewared(t) || VMAX.hideVideoControls) ? i.style.display = "none" : i && (i.style.display = "inherit"), vmaxVast.clearMediaFallbackTimer(t);
    var n, o, r, s, d = vmaxHelper.setAdSlotId(t), l = document.getElementById(d), c = !0;
    VMAX.videoTimerVisibilityList.hasOwnProperty(t) && (c = VMAX.videoTimerVisibilityList[t]), clearInterval(vmaxVast.progressTrackingTimer), vmaxVast.progressTrackingTimer = setInterval(function (e) {
      vmaxVast.duration = vmaxVast.playerObject && !1 === vmaxVast.playerObject.hasOwnProperty("duration") || vmaxVast.playerObject && vmaxVast.playerObject.hasOwnProperty("duration") && isNaN(vmaxVast.playerObject.duration) ? parseFloat(vmaxVast.playerObject.duration) : vmaxVast.duration, _console.debug("vmaxVast.duration", vmaxVast.duration), r = vmaxVast.duration, o = vmaxVast.playerObject ? vmaxVast.playerObject.currentTime : 0, n = Math.floor(o / r * 100);
      var t = n !== s && (n % 10 == 0 || CONST.quartThreshold.includes(n));
      if (t && _console.debug("currentTime, duration, percentile", o, r, n), s = n, !vmaxVast.started && (n > 0 || o > 0) ? (vmaxVast.impressionTracking(), vmaxVast.onStart(), vmaxVast.started = !0) : !vmaxVast.firstQuartileReached && n >= CONST.quartThreshold[0] ? (vmaxVast.onfirstQuartile(), vmaxVast.firstQuartileReached = !0) : !vmaxVast.midPointReached && n >= CONST.quartThreshold[1] ? (vmaxVast.onmidPoint(), vmaxVast.midPointReached = !0) : !vmaxVast.thirdQuartileReached && n >= CONST.quartThreshold[2] && (vmaxVast.onthirdQuartile(), vmaxVast.thirdQuartileReached = !0), isPreroll(e) || isRewared(e)) {
        vmaxAd.isVideoOpen = !0;
        var a = vmaxVast.delay, i = o.toFixed(0);
        if (t && _console.debug("Delay, CurrentTime, PId", a, i, e), vmaxVast.hasOwnProperty(e) && vmaxVast[e].hasOwnProperty("videoClickUrls") && 0 == vmaxVast.videoClickUrls.length && -1 == a ? l.querySelector("#video-action") && (l.querySelector("#video-action").style.display = "none") : l.querySelector("#video-action") && (l.querySelector("#video-action").style.display = "block"), vmaxVast.hasOwnProperty(e) && vmaxVast[e].hasOwnProperty("videoClickUrls") && 0 == vmaxVast[e].videoClickUrls.length ? VMAX.useActionIcons ? l.querySelector("#e-button") && (l.querySelector("#e-button").style.display = "none") : l.querySelector("#video-action .left-action") && (l.querySelector("#video-action .left-action").style.display = "none") : VMAX.useActionIcons ? l.querySelector("#e-button") && (l.querySelector("#e-button").style.display = "block") : l.querySelector("#video-action .left-action") && (l.querySelector("#video-action .left-action").style.display = "block"), -1 == a) i >= r && (l.querySelector("#video-skip") && (l.querySelector("#video-skip").style.display = "block"), "function" == typeof VMAX.onAdSkippable && VMAX.onAdSkippable(e, vmaxVast.completed)); else if (i >= a) {
          vmaxVast.skipEnabled = !0;
          var d = l.querySelector("#video-skip");
          if (d && (d.style.display = "block"), d) {
            var u = d.querySelector("#ad-counter");
            VMAX.useActionIcons && u && (u.style.display = "none"), vsIcon = d.querySelector("#ad-skip-button"), VMAX.useActionIcons && vsIcon && (vsIcon.style.display = "block")
          }
          "function" == typeof VMAX.onAdSkippable && VMAX.onAdSkippable(e, vmaxVast.completed)
        } else if (VMAX.useActionIcons) {
          var m = l.querySelector("#video-skip");
          if (m && (m.style.display = "block"), m) {
            var p = m.querySelector("#ad-counter");
            p && (p.style.display = "block", p.innerHTML = a - i);
            var g = m.querySelector("#ad-skip-button");
            g && (g.style.display = "none"), _console.log("al value => " + i + " al till => " + a)
          }
        }
        var v;
        if (isPreroll(e)) {
          v = l.querySelector("#adProgressLabel");
          var h = l.querySelector("#skipLabel");
          h && (h.style.display = "block")
        } else isRewared(e) && (v = VmaxConstant.dom.document.getElementById("adProgressLabel"));
        var f = r - i;
        v.innerHTML = c ? f > 0 ? "Ad:(<span id=skipTime>" + f.toFixed(0) + "</span>)" : "Ad:(<span id=skipTime>0</span>)" : ""
      }
    }, 100, t)
  },
  getVolume: function () {
    return parseInt(vmaxVast.playerObject.volume)
  },
  moatEvent: function (e) {
    try {
      var t = vmaxHelper.getAdSlotId(), a = vmaxVast.getVolume();
      _console.debug("Executing MOAT Tracking: " + e + ", " + t + ", " + a), "undefined" != typeof MoatApiReference && MoatApiReference instanceof Object ? MoatApiReference.dispatchEvent({
        type: e,
        adVolume: a
      }) : window.frames[0].postMessage({volume: a, id: t, type: e}, "*")
    } catch (e) {
      _console.debug("Can't execute MOAT... " + e)
    }
  },
  onStart: function () {
    _console.debug("onStart Called"), vmaxVast.moatEvent("AdVideoStart");
    var e = vmaxHelper.getAdSlotId();
    getAdStatus(e, "STATE_AD_STARTED");
    var t = vmaxVast.events;
    vmaxVast.started = !0, t.start && t.start.length > 0 && vmaxHelper.handleImpression(t.start), "function" == typeof VMAX.onAdMediaStart && VMAX.onAdMediaStart(e, vmaxVast.completed)
  },
  onfirstQuartile: function () {
    _console.debug("onfirstQuartile Called"), vmaxVast.moatEvent("AdVideoFirstQuartile");
    var e = vmaxVast.events;
    vmaxVast.firstQuartileReached = !0, e.firstQuartile && e.firstQuartile.length > 0 && vmaxHelper.handleImpression(e.firstQuartile)
  },
  onmidPoint: function () {
    _console.debug("onmidPoint Called"), vmaxVast.moatEvent("AdVideoMidpoint");
    var e = vmaxVast.events;
    vmaxVast.midpointReached = !0, e.midpoint && e.midpoint.length > 0 && vmaxHelper.handleImpression(e.midpoint)
  },
  onthirdQuartile: function () {
    _console.debug("onthirdQuartile Called"), vmaxVast.moatEvent("AdVideoThirdQuartile");
    var e = vmaxVast.events;
    vmaxVast.thirdQuartileReached = !0, e.thirdQuartile && e.thirdQuartile.length > 0 && vmaxHelper.handleImpression(e.thirdQuartile)
  },
  onComplete: function () {
    var e = vmaxHelper.getAdSlotId();
    vmaxVast.moatEvent("AdVideoComplete"), getAdStatus(e, "STATE_AD_END"), _console.debug("onComplete Called");
    var t = vmaxVast.events, a = getReferenceNodeById(e);
    if (dataSource = a.getAttribute("data-source"), adspotName = a.getAttribute("data-adspot-key"), vmaxVast.completed = !0, t.complete && t.complete.length > 0 && (vmaxHelper.handleImpression(t.complete, !0), isRewared(e))) {
      var i = adspotName + "_" + dataSource + "_rewardPoint", n = dataSource + "_Total";
      rewardPoint = getStorage(i, "local"), TotalPoint = getStorage(n, "local"), current_timestamp = (new Date).getDate(), rewardPoint["completed-view-reward-point"] > 0 && rewardPoint["daily-max-point"] > 0 && (TotalPoint.point += rewardPoint["completed-view-reward-point"], setStorage(n, TotalPoint, "local")), _console.debug("Video point for " + i + " => " + rewardPoint["completed-view-reward-point"]), _console.debug("Total point : " + TotalPoint.point), rewardPoint.reward_url && (vmaxAd.createBeaconNode(e, rewardPoint.reward_url), _console.debug("rewardPoint => " + JSON.stringify(rewardPoint)))
    }
    "function" == typeof VMAX.onAdMediaEnd && VMAX.onAdMediaEnd.apply(this, isRewared(e) ? [e, vmaxVast.completed, rewardPoint["completed-view-reward-point"]] : [e, vmaxVast.completed]), vmaxVast.resetDataMembers(e)
  },
  parseBillboardVastAd: function (e, t) {
    if (vmaxVast.videoContainer) {
      var a = document.getElementById(vmaxVast.videoContainer);
      a && a.getElementsByTagName("video").length && a.getElementsByTagName("video")[0].pause();
      for (var i = a ? document.getElementById(vmaxVast.videoContainer).children : [], n = 0; n < i.length; n++) if (i[n].id == VmaxConstant.adDivId) {
        var o = document.getElementById(VmaxConstant.adDivId);
        o.parentNode.removeChild(o)
      } else i[n].style.display = "none";
      if (a) {
        if (null == document.getElementById(VmaxConstant.adDivId)) {
          var r = document.createElement("div");
          r.id = VmaxConstant.adDivId;
          var s = document.createElement("div");
          s.id = "my-ad-slot", s.style.cssText = "text-align: center;", a.appendChild(r), r.appendChild(s)
        } else document.getElementById("my-ad-slot").style.display = "table-cell";
        var d = "", n = 0;
        d = '<div class="nativemain nativevideo"><div class="top" >', d += '<div class="middle" style="position:relative">', t.VideoUrl && (d += '<video id="' + VmaxConstant.videoTagId + '" width="99%">', d += '<source src="' + t.VideoUrl + '" >', d += "</video>"), vmaxVast.hidePrerollControls, d += '<div class="right-action" style="color:#fff; float: left;font-family: Lato;position: absolute;bottom: 10px;margin: 0 10px;" id="adProgressLabel">' + VMAXICON.Loadingicon + "</div>", d += "</div>", d += '<div class="action" id="video-action"style="display:none; position: fixed;left: 0px;bottom: 0; width: 100%;height: 25px;text-align: center;background-color: #EAEBEC;padding: 5px;margin: 0px;z-index: 999;">\n                        <div class="left-action"  style="float: left;font-family: Lato;height: 100%;margin: 0px;padding: 5px 0px 0px 0px;line-height: 1em;">' + VMAXICON.CTAicon + '</div>\n                        <div class="right-action" id="video-skip" style="display:none;float: right;font-family: Lato;height: 100%;margin: 0px;padding: 5px 0px 0px 0px;line-height: 1em;">' + VMAXICON.Skipicon + "</div></div>", t.Impression.length > 0 && (vmaxVast.VideoImpressionUrls = t.Impression), document.getElementById("my-ad-slot").innerHTML = d, VmaxConstant.dom = document, setTimeout(function () {
          vmaxVast.initVideo(VmaxConstant.dom.getElementById(VmaxConstant.videoTagId), t.TrackingEvents, t.Duration)
        }, 1e3), vmaxAd.bindClickClose()
      }
    } else _console.log("Video Player details not set!")
  },
  createBillboardVastAd: function (e, t) {
    if (_console.debug("createBillboardVastAd"), VMAX.adBreakDuration.hasOwnProperty(e.spotId)) {
      var a = CONST.appConfig.get({type: "OFFSET-LATENCY", value: e.adspotkey, defaultValue: 0}) || 0;
      _console.log("offsetLatency for Single Ad : ", a);
      var i = VMAX.adBreakDuration[e.spotId] || 0;
      "multiAd" === e.runningAdType && (i = i > 0 ? i - a : 0);
      var n = t.Duration.split("00:00:")[1] || 0;
      if (VMAX.adBreakRemaningDuration[e.spotId] = 0, !vmaxHelper.isAdspotMultiAd(e.adspotkey) && "multiAd" === e.runningAdType && n > i) {
        console.warn("Discarding ad as ad break duration set is lesser than duration of the ad received");
        var o = 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(e.spotId) && !0 === VMAX.show[e.spotId];
        return void VMAX.noAdFound(e.spotId, {}, o)
      }
      var r = i - n;
      r >= 0 && r <= 2 && (VMAX.adBreakRemaningDuration[e.spotId] = r)
    }
    if (vmaxVast.videoContainer) {
      var s = document.getElementById(vmaxVast.videoContainer);
      if (s) {
        var d = document.getElementById(VmaxConstant.adDivId + "_inStream"), l = vmaxHelper.setAdSlotId(e.spotId),
          c = document.createElement(CONST.adSlotTagName), u = ("l" != getAppOrientation() || VMAX.useActionIcons, !1);
        VMAX.rotateInstreamVideoList.hasOwnProperty(e.spotId) && (u = VMAX.rotateInstreamVideoList[e.spotId]);
        var m = "",
          p = 1 == VMAX.useActionIcons ? s.offsetHeight : s.offsetHeight > window.innerHeight - 35 ? window.innerHeight - 35 : s.offsetHeight,
          g = s.offsetWidth;
        u && (p = s.offsetWidth, g = 1 == VMAX.useActionIcons ? s.offsetHeight : s.offsetHeight > window.innerHeight - 35 ? window.innerHeight - 35 : s.offsetHeight, m = "-moz-transform:rotate(90deg); -webkit-transform:rotate(90deg); -o-transform:rotate(90deg); -ms-transform:rotate(90deg); transform:rotate(90deg);");
        var v = void 0;
        c.style.cssText = "text-align: center; display: none;", c.id = l, null == d ? (v = document.createElement("div"), v.id = VmaxConstant.adDivId + "_inStream", s.appendChild(v), v.appendChild(c)) : (v = document.querySelector("#" + VmaxConstant.adDivId + "_inStream"), _console.debug("slotId", l), null != v.querySelector("#" + l) && v.querySelector("#" + l).remove(), v.appendChild(c));
        var h = "";
        h = '<div class="nativemain nativevideo"><div class="top" >', h += '<div class="middle" style="' + m + " position:relative;height:" + p + 'px">', t.VideoUrl && (h += '<video style="position:relative;" id="' + VmaxConstant.videoTagId + '" width="' + g + '" height=' + p + ">", h += '<source src="' + t.VideoUrl + '" >', h += "</video>"), vmaxVast.hidePrerollControls ? h += '<div class="right-action" style="color:#fff; float: left;font-family: Lato;position: absolute;bottom: 35px;margin: 0 10px;" id="adProgressLabel">' + VMAXICON.Loadingicon + "</div>" : h += '<div class="right-action" style="color:#fff; float: left;font-family: Lato;position: absolute; bottom: 0;margin: 0 10px;" id="adProgressLabel">' + VMAXICON.Loadingicon + "</div>", h += "</div>", VMAX.useActionIcons ? (cta = VMAX.Domain.Context + "/" + VMAXICON["type-1"].CTAicon, skip = VMAX.Domain.Context + "/" + VMAXICON["type-1"].Skipicon, h += "<style>                         .kai-fs-nav {margin: 0; background: none;}                         .kai-fs-nav {}                         .kai-fs-nav .mid-action {line-height: 1em; display: block;  margin: auto; width: 55px; border-radius: 50% 50% 0% 0%; background: #e6ded6; height: 40px; margin-top: 3px; border: 2px solid #fff; opacity: .4; }                         .kai-fs-nav .mid-action img {width: 18px; height: 18px; margin-top: 2px; margin-left:5px;}                         .kai-fs-nav .right-action.mid-action {text-align: left; margin-top: 3px; margin-right: -29px;}                         .kai-fs-nav .right-action.mid-action img {width: 15px; height: 15px; margin-left: 3px; margin-top: 1px;}                         .kai-fs-nav .right-action.mid-action div.counter {width: 50%; text-align: center; font-size: 13px; color: #666; text-shadow: 1px 1px 1px #999;}                         /* .kai-fs-nav .mid-action.tr-style img   { transform: rotate(90deg);}; */                     </style>", h += '<div class="action kai-fs-nav" id="video-action"style="display:none; position: fixed;left: 0px;bottom: 0; width: 100%;height: 25px;text-align: center;background-color: #EAEBEC;padding:0 5px;margin: 0px;z-index: 999; background: none;">\n                        <div class="left-action"  style="float: left;font-family: Lato; padding: 0px;line-height: 1em;">&nbsp; &nbsp; &nbsp; &nbsp;</div>\n                        <div class="right-action mid-action tr-style" id="video-skip" style="display:none;float: right;font-family: Lato;padding: 2px 7px;line-height: 1em;"><img src="' + skip + '" id="ad-skip-button" style="display: none;" /><div id="ad-counter" class="counter" style="display: none;">0</div></div>\n                        <div class="mid-action tr-style" id="e-button" style="display: none;"><img src="' + cta + '" /></div>\n                     </div>') : h += '<div class="action" id="video-action"style="display:none; position: fixed;left: 0px;bottom: 0; width: 100%;height: 25px;text-align: center;background-color: #EAEBEC;padding: 5px;margin: 0px;z-index: 999;">\n                        <div class="left-action"  style="float: left;font-family: Lato;height: 100%;margin: 0px;padding: 5px 0px 0px 0px;line-height: 1em;">' + VMAXICON.CTAicon + '</div>\n                         <div class="right-action" id="skipLabel" style="display:none;float: right;font-family: Lato;height: 100%;margin: 0px;padding:5px;line-height: 1em;">' + VMAXICON.Skipicon + "</div>                     </div>",
        t.hasOwnProperty("Impression") && t.Impression.length > 0 && (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].VideoImpressionUrls = t.Impression), document.getElementById(l).innerHTML = h, VmaxConstant.dom = document, getAdStatus(e.spotId, "STATE_AD_READY");
        var f = vmaxVast.getClickURL(e.spotId);
        if (_console.debug("%cclickURL: " + f, "color: #f00"), VMAX.adMetaData = {isDeeplinking: vmaxHelper.isDeeplinking(f) || !1}, _console.debug("VMAX.adMetaData", VMAX.adMetaData), setStorage(e.spotId + "_preroll_obj", {
          a: e,
          q: t
        }), 0 === Object.keys(VMAX.show).length || VMAX.show.hasOwnProperty(e.spotId) && !0 === VMAX.show[e.spotId]) {
          var A = vmaxHelper.getInsData(e.spotId);
          vmaxVast.showBillboardVastAd(e, t, A.adspot, A.adspotType), VMAX.show[e.spotId] = !1
        }
        "function" == typeof VMAX.onAdReady && (_console.debug("Ad is ready...", e.spotId), VMAX.onAdReady(e.spotId, CONST.adUXType[3], VMAX.adMetaData)), "function" == typeof VMAX.onAdReady_Listener2 && (_console.log("onAdReady_Listener2 is ready..."), VMAX.onAdReady_Listener2(e.spotId, CONST.adUXType[3]));
        var y = {"request-id": e["request-id"], data: JSON.stringify(getCustomKeyValueByPId(e.spotId))};
        kvLogger.setLogLength(vmaxHelper.getChunkLength()), kvLogger.insertBeaconNode(y)
      }
    } else _console.log("Video Player details not set!")
  },
  showBillboardVastAd: function (e, t, a, i) {
    _console.debug("showBillboardVastAd");
    var n = null;
    if (vmaxVast.videoContainer) {
      ADSEQUENCE.decrementShowAdCounter(a, i);
      var o = document.getElementById(vmaxVast.videoContainer);
      o && o.getElementsByTagName("video").length && o.getElementsByTagName("video")[0].pause();
      for (var r = o ? document.getElementById(vmaxVast.videoContainer).children : [], s = 0; s < r.length; s++) if (r[s].id == VmaxConstant.adDivId + "_inStream") {
        var d = document.getElementById(VmaxConstant.adDivId + "_inStream"), l = vmaxHelper.setAdSlotId(e.spotId);
        document.getElementById(l) && (d.style.display = "block", document.getElementById(l).style.display = "block")
      } else r[s].style.display = "none";
      var c = o.querySelector("#" + VmaxConstant.adDivId + "_inStream");
      c && (adSlots = c.querySelectorAll(CONST.adSlotTagName + "[id^=" + CONST.adSlotIdPrefix + "]")), c && adSlots.length && (n = document.querySelector("#" + vmaxHelper.setAdSlotId(e.spotId))), _console.debug("slotNode => ", n), o && (setTimeout(function (a) {
        var i = void 0;
        VmaxConstant.dom = document, i = a || VmaxConstant.dom, _console.debug("sNode => ", a), vmaxVast.initVideo(i.querySelector("#" + VmaxConstant.videoTagId), t.TrackingEvents, t.Duration), e.hasOwnProperty("viewability") && e.viewability && (_console.debug("VideoAdObject.Duration => ", t.Duration), cConfig = {
          adContent: "",
          spotId: e.spotId,
          adUXIndex: 3,
          flag: 0,
          viewability: e.viewability,
          duration: vmaxVast.getVideoDuration(t.Duration)
        }, vmaxAd.createMOATTag(cConfig))
      }, 1e3, n), vmaxAd.bindClickClose())
    }
  },
  onPrerollComplete: function (e) {
    var t = void 0, a = vmaxHelper.getAdSlotId();
    if (vmaxVast.videoContainer && isPreroll(a)) {
      if (setTimeout(function () {
        var i = document.getElementById(vmaxVast.videoContainer),
          n = i.querySelector("#" + VmaxConstant.adDivId + "_inStream");
        setTimeout(function () {
          if (n && (t = n.querySelectorAll(CONST.adSlotTagName + "[id^=" + CONST.adSlotIdPrefix + "]")), n && t.length > 1) {
            var e = document.querySelector("#" + vmaxHelper.setAdSlotId(a));
            n.removeChild(e), n.style.display = "none"
          } else n && n.parentNode && n.parentNode.removeChild(n)
        }, 1e3 * VMAX.adBreakRemaningDuration[a]);
        for (var o = i.children, r = 0; r < o.length; r++) o[r].style.display = "block";
        "function" == typeof VMAX.onAdClose && e && VMAX.onAdClose(a), "function" == typeof VMAX.onAdClose_Listener2 && e && VMAX.onAdClose_Listener2(a)
      }, 100), vmaxVast.hasOwnProperty("playerObject") && vmaxVast.playerObject && vmaxVast.playerObject.pause(), vmaxVast.stopProgressTracking(), VmaxConstant.dom.removeEventListener("keydown", VMAX.listenClickClose, !1), vmaxVast.PrerollEventHandler) {
        var i = window[vmaxVast.PrerollEventHandler];
        "function" == typeof i && VmaxConstant.dom.addEventListener("keydown", i)
      }
    } else setTimeout(function () {
      var t = document.getElementById("vmx-cover"), i = document.querySelector("#" + vmaxHelper.setAdSlotId(a));
      i.parentNode.removeChild(i), t && (t.style.display = "none"), "function" == typeof VMAX.onAdClose && e && VMAX.onAdClose(a), "function" == typeof VMAX.onAdClose_Listener2 && e && VMAX.onAdClose_Listener2(a)
    }, 100), vmaxVast.hasOwnProperty("playerObject") && vmaxVast.playerObject && vmaxVast.playerObject.pause(), vmaxVast.stopProgressTracking(), vmaxVast.resetDataMembers(a), resetTrustedAppCache(a);
    VmaxConstant.isPreroll = !1, setTimeout(function () {
      vmaxAd.removeCvNode(a)
    }, 2e3)
  },
  parseInterstitialAudioAd: function (e, t, a) {
    _console.debug(e), vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {});
    var i = "", n = "", o = getAppOrientation(), r = "l" == o ? "320" : "240", s = "l" == o ? "184" : "260",
      d = "daast" == e["adspot-format"] && t.EndCardImage.length > 0;
    if (d) {
      if (0 != t.EndCardDimension.length && (pos = t.EndCardDimension.map(function (e, t) {
        if (e.width == r && e.height == s) return t
      }).filter(function (e) {
        return void 0 !== e
      })), pos.length > 0) {
        i = t.EndCardImage[pos[0]].replace(/'/g, "");
        t.EndCardDimension[pos[0]];
        n = "l" == o ? "width: 100%; height: 184px;" : "width: 100%; height: 260px", t.TrackingEvents.creativeView = [], t.Impression = [].concat(_toConsumableArray(t.Impression), _toConsumableArray(t.CompanionProps[pos[0]].TrackingEvents.creativeView)), vmaxVast[e.spotId].videoClickUrls = [].concat(_toConsumableArray(t.CompanionProps[pos[0]].ClickThrough)), vmaxVast[e.spotId].videoClickTrackingUrls = [].concat(_toConsumableArray(t.CompanionProps[pos[0]].ClickTracking))
      }
    } else if (t.Impression = [].concat(_toConsumableArray(t.Impression), _toConsumableArray(t.TrackingEvents.creativeView)), t.hasOwnProperty("EndCardImage") && t.EndCardImage.length && !d) i = t.EndCardImage[0]; else if (t.hasOwnProperty("EndCardHTML") && t.EndCardHTML.length && !d) {
      i = t.EndCardHTML[0];
      var l = t.EndCardDimension;
      n = l.hasOwnProperty("width") && l.hasOwnProperty("height") && parseInt(l.width) > 0 && parseInt(l.height) > 0 ? "width: " + l.width + "px; height: " + l.height + "px;" : ""
    }
    if ("" == i && (i = VMAX.Domain.Img.concat("/", "l" == o ? "default_audio_320x184.png" : "default_audio_240x260.png"), "daast" == e["adspot-format"])) {
      var c = _extends({}, vmaxVast.getAdParams(e.spotId), {ccs: r + "x" + s, rid: e["request-id"]}), u = [];
      for (var m in c) c.hasOwnProperty(m) && c[m] && u.push(m + "=" + encodeURIComponent(c[m]));
      t.Impression = [].concat(_toConsumableArray(t.Impression), ["https://jioads.akamaized.net/beacon/di.gif?" + u.join("&")])
    }
    interstitialOverlay.create(e.spotId);
    var p = "";
    if (p = '<div id="vmax_page" class="native-audio"><div class="top"><div class="icon">', e.hasOwnProperty("icon_url") && e.icon_url, p += "</div>", p += "</div>", p += '<div class="middle" style="display: flex; justify-content: center;">', t.hasOwnProperty("VideoUrl") && t.VideoUrl) {
      var g = e.AdColor ? " background-color: " + e.AdColor + ";" : "";
      t.hasOwnProperty("EndCardHTML") && t.EndCardHTML.length && "daast" != e["adspot-format"] ? null !== getURILocation(t.EndCardHTML.toString()) ? p += '<iframe id="audioAdframeEC2" class="audio_ad" style="display:none; ' + g + '" src="' + i + '" frameborder="0"></iframe>' : p += '<iframe id="audioAdframeEC2" class="audio_ad ec-image" style="display:none; ' + (g + n) + '" data-src="' + escape(i) + '" data-type="html" frameborder="0"></iframe>' : p += '<iframe id="audioAdframeEC2" class="audio_ad ec-image" style="display:none; ' + g + '" data-src="' + i + '" data-type="' + (t.EndCardImage.length ? "image" : "html") + '" frameborder="0"></iframe>', p += '<audio id="' + VmaxConstant.videoTagId + '" width="99%">', p += '<source src="' + t.VideoUrl + '" >', p += "</audio>"
    }
    p += "</div>", p += '<div class="vmax_footer"><div class="actions left-action">' + VMAXICON.Loadingicon + '</div><div class="actions right-action" id="skipLabel"></div>', p += "</div>", e.hasOwnProperty("impTrackers") && e.impTrackers.length > 0 && (vmaxAd[e.spotId].VideoImpressionTrackingUrls = e.impTrackers), t.TrackingEvents.creativeView && t.TrackingEvents.creativeView.length, t.hasOwnProperty("Impression") && t.Impression.length > 0 && (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].VideoImpressionUrls = t.Impression), vmaxAd.createIframeAdOverLay(p, CONST.defaultImgHeight, CONST.defaultImgWidth, 0, function () {
      setTimeout(function () {
        if (!getCustomView(e.spotId)) {
          var a = vmaxHelper.setAdFrameId(e.spotId);
          VmaxConstant.dom = document.getElementById(a).contentWindow
        }
        vmaxVast.initVideo(VmaxConstant.dom.document.getElementById(VmaxConstant.videoTagId), t.TrackingEvents, t.Duration), vmaxVast.createEndCard(VmaxConstant.dom, "src", "#audioAdframeEC2"), vmaxAd.bindClickClose(), VMAX.forceAdFocus()
      }, 1e3)
    }, {u: CONST.adUXType[4], i: e.spotId}, a)
  },
  createEndCard: function (e, a, i) {
    var n = e.document.querySelector(i);
    if (null !== n) {
      var o = n.contentWindow.document;
      a = n.getAttribute("data-src"), t = n.getAttribute("data-type");
      var r = '<head>\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <style>\n                    html,\n                    body,\n                    .section-images {\n                    height: 100%;\n                    margin: 0;\n                    }\n                    .section-images {\n                    margin: auto auto;\n                    text-align: center;\n                    }\n                    img {\n                    display: block;\n                    width: auto;\n                    height: auto;\n                    max-width: 100%;\n                    max-height: 100%;\n                    margin: 0px auto;\n                    }\n                </style>\n            </head>\n            <body style="margin: 0;">\n            <div class="section-images">\n                ' + ("html" === t ? unescape(a) : "<img src=" + a + " />") + "\n            </div>\n            </body>\n        ";
      o.open(), o.write(r), o.close()
    }
  },
  resetEndCard: function (e, t) {
    var a = e.document.querySelector("." + t);
    _console.log(a)
  },
  parseInterstitialVideoAd: function (e, t, a) {
    _console.debug(e);
    var i = getAppOrientation();
    vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {});
    var n = "l" == i ? "320" : "240", o = "", r = "", s = [];
    if (0 != t.EndCardDimension.length && (s = t.EndCardDimension.map(function (e, t) {
      if (e.width == n) return t
    }).filter(function (e) {
      return void 0 !== e
    })), t.hasOwnProperty("EndCardImage") && t.EndCardImage.length && s.length > 0) {
      o = t.EndCardImage[s[0]].replace(/'/g, "");
      var d = t.EndCardDimension[s[0]], l = d.width, c = d.height;
      r = l && c ? c > l && "l" == i ? "width: 100%; height: 184px;" : "width: 100%; height: 260px" : ""
    } else if (t.hasOwnProperty("EndCardHTML") && t.EndCardHTML.length && s.length > 0) {
      o = t.EndCardHTML;
      var u = t.EndCardDimension[s[0]];
      r = u.hasOwnProperty("width") && u.hasOwnProperty("height") && parseInt(u.width) > 0 && parseInt(u.height) > 0 ? "width: " + u.width + "px; height: " + u.height + "px;" : ""
    } else o = VMAX.Domain.Img.concat("/", "l" == i ? "default_video_320x184.png" : "default_video_240x260.png"), r = "l" == i ? "width: 320px; height: 184px;" : "width: 240px; height: 260px;";
    interstitialOverlay.create(e.spotId);
    var m = "";
    if (m = '<div id="vmax_page" class="nativemain nativevideo"><div class="top"><div class="icon">', e.hasOwnProperty("icon_url") && e.icon_url, m += "</div>", m += "</div>", m += '<div class="right-action" style="color:#fff; float: left;font-family: Lato;position: absolute;bottom: 10px;margin: 0 10px;" id="adProgressLabel">' + VMAXICON.Loadingicon + "</div>", m += '<div class="middle" style="display: flex;">', t.hasOwnProperty("VideoUrl") && t.VideoUrl) {
      var p = e.AdColor ? " background-color: " + e.AdColor + ";" : "";
      m += '<iframe id="audioAdframeEC2" class="audio_ad ec-image" style="background: #fff; display:none; ' + (p + r) + '" data-src="' + o + '" data-type="image" frameborder="0"></iframe>', m += '<video id="' + VmaxConstant.videoTagId + '" width="100%">', m += '<source src="' + t.VideoUrl + '" >', m += "</video>", m += '<div class="myLoader loader" style="display: none;"></div>'
    }
    m += "</div>", m += '<div class="vmax_footer" style="display:none;"><div class="actions left-action">' + VMAXICON.CTAicon + '</div><div class="actions right-action" id="skipLabel">' + VMAXICON.Cancelicon + "</div>", m += "</div>", e.hasOwnProperty("impTrackers") && e.impTrackers.length > 0 && (vmaxAd[e.spotId].VideoImpressionTrackingUrls = e.impTrackers), t.TrackingEvents.creativeView && t.TrackingEvents.creativeView.length ? vmaxAd[e.spotId].creativeView = t.TrackingEvents.creativeView : vmaxAd[e.spotId].creativeView = [], t.hasOwnProperty("Impression") && t.Impression.length > 0 && (vmaxAd.hasOwnProperty(e.spotId) || (vmaxAd[e.spotId] = {}), vmaxAd[e.spotId].VideoImpressionUrls = t.Impression), vmaxAd.createIframeAdOverLay(m, CONST.defaultImgHeight, CONST.defaultImgWidth, 0, function () {
      setTimeout(function () {
        if (!getCustomView(e.spotId)) {
          var a = vmaxHelper.setAdFrameId(e.spotId);
          _console.debug("parseInterstitialVideoAd value" + e.spotId), VmaxConstant.dom = document.getElementById(a).contentWindow
        }
        if (vmaxVast.initVideo(VmaxConstant.dom.document.getElementById(VmaxConstant.videoTagId), t.TrackingEvents, t.Duration), vmaxVast.createEndCard(VmaxConstant.dom, "src", "#audioAdframeEC2"), vmaxAd.bindClickClose(), VMAX.forceAdFocus(), setActions(e.spotId), e.hasOwnProperty("viewability") && e.viewability) {
          _console.debug("VideoAdObject.Duration => ", t.Duration);
          var i = {
            adContent: m,
            spotId: e.spotId,
            adUXIndex: 3,
            flag: 0,
            viewability: e.viewability,
            duration: vmaxVast.getVideoDuration(t.Duration)
          };
          vmaxAd.createMOATTag(i)
        }
      }, 500)
    }, {u: CONST.adUXType[3], i: e.spotId}, a)
  },
  getVideoDuration: function (e) {
    var t = 0, a = e.split(":");
    return t = 3 === a.length ? 60 * a[0] * 60 + 60 * a[1] + a[2] : 60 * a[0] + a[1], Number(t) || 0
  },
  getAdParams: function (e) {
    var t = getInsTagParameters(e), a = t.adspot, i = t.source;
    return {
      mn: VMAX.APP_NAME,
      vr: CONST.APIVersion,
      ua: navigator.userAgent,
      ts: vmaxVast.setTimestampFormat(new Date),
      advid: VmaxUserData.getIDFA(),
      adspot: a,
      source: i
    }
  },
  setTimestampFormat: function (e) {
    var t = void 0;
    return dS = e.toISOString(), t = dS.replace(/-/g, ""), t = t.replace(/:/g, ""), t = t.replace(".", ""), t = t.replace(/T/g, ""), t = t.replace(/Z/g, "")
  }
}, vmaxHelper = {
  log: function (e) {
    VmaxConstant.printlog
  }, err: function (e) {
    console.error(e)
  }, img_create: function (e, t, a) {
    var i = document.createElement("img");
    return i.src = e, i.width = 1, i.height = 1, i.style.display = "none", vmaxHelper.isDefined(t) && null != t && (i.alt = t), vmaxHelper.isDefined(a) && null != a && (i.title = a), i
  }, isDefined: function (e) {
    return void 0 !== e
  }, popup: function (e, t, a) {
    var i = !1, n = !1;
    if (!window.focus) return !0;
    var o;
    if (o = "string" == typeof e ? e : e.href, -1 !== o.indexOf(CONST.deeplinkingHostName) && (i = !0), VMAX.useWebActivity || !0 !== vmaxHelper.clickControlEnabled(a) || (n = !0), !n || i) {
      var r = vmaxHelper.setOptions(o);
      _console.debug(r);
      var s = new MozActivity(r);
      s.onerror = function (e) {
        console.info("Failed to openURL activity!", e)
      }, s.onsuccess = function (e) {
        _console.debug("App Invocaked...", e)
      }
    } else window.open(o, t, "width=" + CONST.defaultImgWidth + ",height=" + CONST.defaultImgHeight + ",scrollbars=yes");
    return _console.debug("PopUp open called", o), !1
  }, setOptions: function (e) {
    var t = {name: "view", data: {type: "url", url: e}}, a = document.createElement("a"), i = "";
    a.style = "display: none;", a.href = decodeURI(e);
    var n = vmaxHelper.getUriParams(a, "__");
    e = n.hasOwnProperty("r") ? decodeURIComponent(n.r) : a.href, i = a.href.replace("__r=" + n.r, "");
    var o = document.createElement("a");
    if (o.href = e, o.hostname === CONST.deeplinkingHostName) {
      if (i && -1 === i.indexOf(CONST.deeplinkingHostName)) {
        var r = new Image;
        r.src = i, document.body.appendChild(r)
      }
      return {
        name: -1 !== o.pathname.indexOf("/") ? o.pathname.replace("/", "") : o.pathname,
        data: vmaxHelper.getUriParams(o)
      }
    }
    return t
  }, getUriParams: function (e, t) {
    var a = {}, i = void 0,
      n = e.search && 0 === e.search.indexOf("?") ? e.search.replace("?", "").split(t || "&") : e.search;
    for (var o in n) n.hasOwnProperty(o) && (i = n[o].split("="), a[i[0]] = i[1]);
    return a || null
  }, isDeeplinking: function (e) {
    var t = void 0, a = void 0;
    return "string" == typeof e ? (t = e, -1 !== t.indexOf(CONST.deeplinkingHostName)) : (t = e.href, a = document.createElement("a"), a.href = t, a.hostname === CONST.deeplinkingHostName)
  }, isEmpty: function (e) {
    for (var t in e) if (e.hasOwnProperty(t)) return !1;
    return !0
  }, cssFileObject: function (e) {
    var t = document.createElement("link");
    return t.href = e, t.rel = "stylesheet", t.type = "text/css", t
  }, handleImpression: function (e, t, a) {
    var n = vmaxHelper.getAdSlotId() || a,
      o = (document.getElementById(vmaxHelper.setAdSlotId(n)), document.createElement("iframe")),
      r = 1 == t ? n + "_" + 100 * Math.random(10) : 100 * Math.random(10);
    o.id = r;
    o.style = "width: 0px; height: 0px; border: 0;";
    if (e.length > 0) for (i in e) oImg = vmaxHelper.img_create(e[i])
  }, parseXML: function (e) {
    return (new DOMParser).parseFromString(e, "text/xml")
  }, setAdSlotId: function (e) {
    return CONST.adSlotIdPrefix + "_" + e
  }, getAdSlotNode: function (e) {
    return document.querySelector("#" + CONST.adSlotIdPrefix + "_" + e)
  }, setAdFrameId: function (e) {
    return VmaxConstant.adIframeId + "_f2_" + e
  }, setDisplayAdFrameId: function (e) {
    return VmaxConstant.adIframeId + "_d2_" + e
  }, getAdSlotId: function (e) {
    var t = null, a = null, i = null, n = document;
    if (n.getElementById(VmaxConstant.adDivId) && (i = n.getElementById(VmaxConstant.adDivId), a = "none" != i.style.display ? 1 : 0), null !== a && 0 !== a || !n.getElementById(VmaxConstant.adDivId + "_inStream") || (i = n.getElementById(VmaxConstant.adDivId + "_inStream"), a = "none" != i.style.display ? 1 : 0), a && i.querySelectorAll(CONST.adSlotTagName + "[id^=" + CONST.adSlotIdPrefix + "]")) try {
      var o = i.querySelectorAll(CONST.adSlotTagName + "[id^=" + CONST.adSlotIdPrefix + "]");
      for (var r in o) if (o.hasOwnProperty(r) && "none" != o[r].style.display) return t = o[r].getAttribute("id").replace(CONST.adSlotIdPrefix + "_", "")
    } catch (e) {
      console.info("Caught")
    }
    return t
  }, clickControlEnabled: function (e) {
    var t = !1, a = "";
    return e || (e = vmaxHelper.getAdSlotId()), a = e + "_xBodyCC", 1 == getStorage(a) && (t = !0), t
  }, getVmaxPage: function (e) {
    var t = document.getElementById(this.setAdFrameId(e)) || this.getAdSlotNode(e);
    if (null == t || void 0 == t) return null;
    return ["DIV", "SECTION"].indexOf(t.nodeName) >= 0 ? t : t.contentWindow.document.body
  }, getInsData: function (e) {
    var t = getReferenceNodeById(e);
    return {
      adspot: t.getAttribute("data-adspot-key"),
      adspotType: getStorage(e + "_adspotType", "local"),
      refreshTime: t.getAttribute("data-refresh-after")
    }
  }, isCutomButtomBarSet: function (e) {
    var t = "pAppId_" + e;
    return !!(isAppTrusted(e) && Object.keys(getStorage(t)).length > 0)
  }, setEndCard: function (e, t) {
    var a = vmaxHelper.getVmaxPage(e), i = a.querySelector("#skipLabel"), n = a.querySelector(".left-action");
    if (a.querySelector(".nativemain") && (a.querySelector(".nativemain").className = ""), a.querySelector(".middle") && (a.querySelector(".middle").style.display = "none"), n) {
      var o = t.hasOwnProperty("clickLabel") && t.clickLabel ? t.clickLabel : VMAXICON.CTAicon;
      t.clickUrl.length ? n.innerHTML = o : n.innerHTML = ""
    }
    a.focus(), vmaxAd.isAdOpen = !0, a.addEventListener("keydown", VMAX.listenClickClose), vmaxVast.skipEnabled = !0, i && (i.innerHTML = VMAXICON.Cancelicon), (a.querySelector(".container") || a.querySelector(".lg-img")).style.display = "block", t.hasOwnProperty("video") && t.video.length && (vmaxAd.createBeaconNode(t.spotId, t.creativeViewTrackers), vmaxAd[t.spotId].clickUrls = [t.clickUrl, [].concat(_toConsumableArray(t.clickTrackers), _toConsumableArray(t.creativeClickTrackers))])
  }, replaceMacros: function (e, t, a) {
    var i = new RegExp(t, "gi");
    return e.replace(i, a || t)
  }, isAdspotMultiAd: function (e) {
    return !!e && CONST.appConfig.get({type: "MULTIADS", value: e, defaultValue: !1})
  }, isCSTEnabled: function (e) {
    var t = 0, a = CONST.appConfig.get("adspots." + e + ".te");
    return t = "" === a ? CONST.appConfig.get("te") || 0 : a, _console.log("VALUE of cst - " + e + " => " + t), (new CampaignQualifier).getSupportedTargeting(t.toString())
  }, isAPEEnabled: function (e) {
    var t = 0, a = CONST.appConfig.get("adspots." + e + ".ape");
    return t = "" === a ? CONST.appConfig.get("ape") || 0 : a, _console.log("VALUE of ape - " + e + " => " + t), t
  }, getChunkLength: function () {
    var e = CONST.appConfig.get("cz") || 1536;
    return _console.log("VALUE of cz => " + e), e
  }, truncateString: function (e, t) {
    return void 0 === e ? "" : e.length <= t ? e : e.slice(0, t).trim() + "..."
  }, fireImpression: function (e) {
    var t = e.spotid, a = e.impTrackers, i = e.refreshTime, n = "#" + t;
    if (i = (0 == i || null == i ? 0 : 1e3 * (i < 30 ? 30 : i)) || 0, _console.debug(t + " Ad Refresh In " + i / 1e3 + " Sec"), Array.isArray(a) && a.length) {
      var o = (new Date).getTime();
      document.querySelector(n).firstChild.setAttribute("data-viewId", o);
      var r = 'div[data-viewId="' + o + '"]';
      getReferenceNodeById(t);
      inView.threshold(.5), inView(r).once("enter", function (e) {
        _console.log("Becaon Fire for : " + e.parentElement.id), vmaxAd.createBeaconNode(t, a)
      }), i <= 0 || (inView(r).on("enter", function (e) {
        _console.log("Ad: In View : " + e.parentElement.id), Timeout.exists(r) ? Timeout.resume(r) : Timeout.set(r, function () {
          Timeout.clear(r);
          var e = document.querySelector(r).parentElement.getAttribute("id");
          "function" == typeof VMAX.onAdRefresh && VMAX.onAdRefresh(e), VMAX.showAd(e)
        }, i)
      }), inView(r).on("exit", function (e) {
        null != e.parentElement && _console.log("Ad: Not In View : " + e.parentElement.id), Timeout.pause(r)
      }))
    }
  }
};
VMAX.setVideoPlayerDetails = function (e, t) {
  vmaxVast.videoContainer = e, vmaxVast.PrerollEventHandler = t
}, VMAX.enableAdsAfterSessions = function (e) {
  if (e > 0) {
    VMAX.EnableSessionCounter = !1;
    var t = getStorage("SessionCounter", "local"), a = {counter: 1};
    0 === Object.keys(t).length && t.constructor === Object ? setStorage("SessionCounter", a, "local") : (t.counter = t.counter + 1, t.counter > e ? removeStorage("SessionCounter", "local") : setStorage("SessionCounter", t, "local"))
  }
}, VMAX.getAdState = function (e) {
  var t = e + "_AdStatus", a = getStorage(t);
  if (0 === Object.keys(a).length) return "s1";
  for (var i in a) return _console.log(i), _console.log(a[i]), a[i]
}, VMAX.getAdStatePS = function (e) {
  var t = e + "_AdStatus", a = getStorage(t, "local");
  if (0 === Object.keys(a).length) return "s1";
  for (var i in a) return _console.log(i), _console.log(a[i]), a[i]
}, VMAX.getClickLabel = function (e) {
  return getLabel(e, "clickLabel")
}, VMAX.getCloseLabel = function (e) {
  return getLabel(e, "closeLabel")
}, VMAX.clickAd = function (e) {
  if (isAdClickable(e)) return vmaxAd.clickAd()
}, VMAX.getPPID = function (e) {
  try {
    var t = getStorage("maskingInfo", "local");
    return t && t.hasOwnProperty(e) && t[e].id ? t[e].id : "NO PPID found for given adspot."
  } catch (e) {
    console.warn(e)
  }
}, VMAX.closeAd = function (e) {
  return VMAX.adBreakDuration.hasOwnProperty(e) && VMAX.hasOwnProperty("adBreak") ? void VMAX.adBreak.podClose(!1, !0, !0) : (console.log(vmaxAd.isVideoAdOpen(), getAdSpotType(e), isAppTrusted(e)), "4" != getAdSpotType(e) && "12" != getAdSpotType(e) && !isAppTrusted(e) || !vmaxAd.isAdOpen && !vmaxAd.isVideoAdOpen() ? void 0 : vmaxAd.closeAd(1))
}, VMAX.setCustomView = function (e, t) {
  t = !!t;
  var a = "sView_" + e;
  return !!t && (setStorage(a, !0), !0)
}, VMAX.setAppName = function (e) {
  _console.log("setAppName => ", e), VMAX.APP_NAME = "string" == typeof e ? e : ""
}, VMAX.setAppVersion = function (e) {
  VMAX.APP_VERSION = "string" == typeof e ? e : ""
}, VMAX.isAdClickable = function (e) {
  return !(!isAppTrusted(e) || !vmaxVast.getClickURL(e))
}, VMAX.setFullScreenMode = function () {
  VMAX.fullScreenMode = !0
}, VMAX.enableActionIcons = function () {
  VMAX.useActionIcons = !0
}, VMAX.enableNoVideoMode = function () {
  VMAX.noVideoMode = !0
}, VMAX.enableDeliveryConfig = function () {
  VMAX.useDeliveryConfig = !0
}, VMAX.setNIVideoControlsVisibility = function (e) {
  VMAX.hideVideoControls = 1 != e
}, VMAX.fetchVMAPURL = function (e) {
  var t = document.querySelector("ins#" + e), a = VMAX.DeliveryAPI.split("delivery")[0] + "delivery/vmap.php?", i = {
    source: t.getAttribute("data-source"),
    vmapid: t.getAttribute("data-vmap-id"),
    vp: t.getAttribute("data-video-player"),
    vd: t.getAttribute("data-video-duration"),
    sw: VMAX.ScreenWidth,
    sh: VMAX.ScreenHeight,
    ua: navigator.userAgent,
    ao: getAppOrientation(),
    qk: VMAX.deviceType,
    vh: "jw",
    vhvr: 8,
    vr: CONST.APIVersion,
    tz: (new Date).toString(),
    cl: "" !== getContentLanguage() && getContentLanguage(),
    se: Object.values(CONST.adNetworkMap).join(","),
    tpl: 1
  };
  null !== i.qk && void 0 !== i.qk || delete i.qk;
  var n = getInsTagParameters(e);
  Object.assign(i, i, __vmax_data, n), _console.log("VMAP_Data => ", i);
  for (var o in i) (i[o] || 0 == i[o]) && (a += "&" + o + "=" + encodeURIComponent(i[o]));
  var r = {
    url: a, getVMAPURL: function () {
      return this.url
    }
  };
  "function" == typeof VMAX.onVMAPReady && VMAX.onVMAPReady(e, r)
}, VMAX.setRequestedAdDuration = function (e, t) {
  e && "string" == typeof e && t && "number" == typeof t && (VMAX.adBreakDuration[e] = t)
}, VMAX.updateAdbreakDuration = function (e, t) {
  e && "string" == typeof e && t && "number" == typeof t && VMAX.adBreak.updateAdbreakDuration(t)
}, VMAX.setCustomAdBreakRendition = function (e) {
  var t = e.placementId, a = e.container, i = e.callback;
  t && "string" == typeof t && a && "string" == typeof a && i && "function" == typeof i && (VMAX.customAdBreakFun[t] = {}, VMAX.customAdBreakFun[t].callback = i, VMAX.customAdBreakFun[t].container = a)
}, VMAX.rotateInstreamVideo = function (e, t) {
  e && "string" == typeof e && "boolean" == typeof t && (VMAX.rotateInstreamVideoList[e] = t)
}, VMAX.setTimerVisibility = function (e, t) {
  e && "string" == typeof e && "boolean" == typeof t && (VMAX.videoTimerVisibilityList[e] = t)
};
var setMediation = function (e, t) {
  var a = !(!t || 1 != t), i = e + "_Mediation";
  return a ? setStorage(i, a) : removeStorage(i), a
}, isMediationEnabled = function (e) {
  var t = !1;
  return !0 === getStorage(e + "_Mediation") && (t = !0), t
}, isMediation = function (e) {
  for (var t in e) if (e.hasOwnProperty(t) && e[t] && e[t].hasOwnProperty("adnetwork")) return !0;
  return !1
};
VMAX.getNativeIcon = function (e) {
  return isSuperNativeExperience(e) ? getTrustedAppAdParams(e, "imageIcon") : null
}, VMAX.drawNativeIcon = function (e) {
  if (isSuperNativeExperience(e)) return vmaxAd.closeAd(1)
}, VMAX.bindNativeIconEvents = function (e) {
  VMAX.clickAd(e)
}, VMAX.setBottomBar = function (e, t) {
  var a = isHTML(t), i = "pAppId_" + e;
  return isAppTrusted(e) && a && setStorage(i, {actPaneId: btoa(t)}), a
}, VMAX.setCustomBottomBar = function (e) {
  var t = "pAppId_" + e, a = getStorage(t), i = a && a.hasOwnProperty("actPaneId") ? atob(a.actPaneId) : "",
    n = document.querySelector("#vmax_page");
  n && "" !== i && (n.classList.add("custom-draw"), n.querySelector(".vmax_footer").remove(), n.insertAdjacentHTML("beforeend", i), n.querySelector(".left-action").innerText = ellipsisText(n.querySelector(".left-action").innerText, 15), n.querySelector(".right-action").innerText = ellipsisText(n.querySelector(".right-action").innerText, 15))
}, VMAX.manageBottomBar = function (e, t) {
  isAppTrusted(e) && (t > 0 ? setTimeout(function (t) {
    VMAX.setCustomBottomBar(e)
  }, 1e3 * t) : VMAX.setCustomBottomBar(e))
}, VMAX.setRequestedBitRate = function (e, t) {
  return setStorage(e + "_Bitrate", t), !1
};
var hidden, visibilityChange;
void 0 !== document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"), document.addEventListener(visibilityChange, handleVisibilityChange, !1), window.addEventListener("keydown", function (e) {
  if (console.log(e.key), console.log("entered window event listener"), !e.defaultPrevented) switch (e.key) {
    case"Enter":
      var t = document.activeElement;
      _console.log(t.id);
      var a = t.id.replace("VMAX_", "") || vmaxHelper.getAdSlotId();
      if (VMAX.NativeBannerBillboardArray && VMAX.NativeBannerBillboardArray.hasOwnProperty(t.id) && (FCAP.init({
        pId: a,
        type: "c"
      }), VMAX.NativeBannerBillboardArray[t.id].length > 0)) {
        var i = VMAX.NativeBannerBillboardArray[t.id][0], n = VMAX.NativeBannerBillboardArray[t.id][1];
        if (n.length > 0) for (var o in n) {
          vmaxHelper.img_create(n[o])
        }
        if (i && vmaxHelper.popup(i, "AdClickWindow", a), "function" == typeof VMAX.onAdClick) {
          vmaxVast.completed = !0;
          var r = t.id.substr(t.id.indexOf("_") + 1);
          VMAX.onAdClick(r, vmaxVast.completed)
        }
        if ("function" == typeof VMAX.onAdClick_Listener2) {
          vmaxVast.completed = !0;
          var r = t.id.substr(t.id.indexOf("_") + 1);
          VMAX.onAdClick_Listener2(r, vmaxVast.completed)
        }
      }
      break;
    default:
      return
  }
}, !0), Date.prototype.addMinutes = function (e) {
  var t = new Date(this.getTime());
  return new Date(t.getTime() + 6e4 * e)
}, Date.prototype.addHours = function (e) {
  var t = new Date(this.getTime());
  return new Date(t.getTime() + 60 * e * 6e4)
}, Date.prototype.addDays = function (e) {
  var t = new Date(this.getTime());
  return new Date(t.getTime() + 1440 * e * 6e4)
};
var kvBeaconURI = "https://jioads.akamaized.net/beacon/kv.gif?", kvLogger = new CdnLogger2(kvBeaconURI);
kvLogger.setLogLength(vmaxHelper.getChunkLength());
//# sourceMappingURL=../maps/KaiOSSDK/vmaxsdk.js.map
