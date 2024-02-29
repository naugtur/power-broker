/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./hardenpreact.js":
/*!*************************!*\
  !*** ./hardenpreact.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index.js */ "../../index.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


var domPowersBroker = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createBroker)({
  // mandates to use the power in specific ways
  // These are implemented as composable attenuations (need to return property descriptors that will be defined on an empty object)
  CSS: function CSS(domnode) {
    return {
      style: {
        get: function get() {
          return domnode.style;
        }
      }
    };
  },
  INPUTS: function INPUTS(domnode) {
    return {
      value: {
        get: function get() {
          return domnode.value;
        },
        set: function set(value) {
          return domnode.value = value;
        }
      }
    };
  }
});

// TODO: find a way to thread it into LavaMoat nicely
globalThis.domPowers = domPowersBroker;

// Store previous hook
var prevVnode = preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode,
  prevEvent = preact__WEBPACK_IMPORTED_MODULE_1__.options.event;
var debug = function debug() {};
var log = console.log;

// const debug = console.log;
// const log = console.log;

var knownWrapped = new WeakSet();
var wrapValueInBroker = function wrapValueInBroker(original, key, target) {
  if (knownWrapped.has(original)) {
    return original;
  }
  if (!target) {
    target = original;
  }
  var deal;
  Object.defineProperty(target, key, {
    configurable: false,
    get: function get() {
      log("getting", key);
      return deal;
    },
    set: function set(value) {
      log("setting", key, value);
      deal = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.broker)(value);
      if (original !== target) original[key] = deal;
    }
  });
  knownWrapped.add(target);
  return target;
};

// WARNING: this is not early enough.
// Would be better to contribute a hook/option to preact instead
// to capture the assignment here:
// https://github.com/preactjs/preact/blob/c3160cc9bbc988b88c876517db113360b4fb81f6/src/diff/index.js#L256
preact__WEBPACK_IMPORTED_MODULE_1__.options.diffed = function (vnode) {
  var _vnode$__;
  if (vnode !== null && vnode !== void 0 && (_vnode$__ = vnode.__) !== null && _vnode$__ !== void 0 && _vnode$__.__c) {
    wrapValueInBroker(vnode.__.__c, "base");
  }
};
// Set our own options hook
preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode = function (vnode) {
  // Call previously defined hook if there was any
  // I don't think I want that unless it's where react compatibility is built \_o_/
  if (prevVnode) {
    prevVnode(vnode);
  }
  if (vnode.props.dangerouslySetInnerHTML) {
    log("dangerouslySetInnerHTML", vnode.props.dangerouslySetInnerHTML);
    delete vnode.props.dangerouslySetInnerHTML;
  }
  debug("wrapVNode", vnode);
  if (vnode.ref) {
    log("vnode.ref", vnode.ref, _typeof(vnode.ref));
    // TODO: support function refs too
    vnode.ref = wrapValueInBroker(vnode.ref, "current", {});
  }
};
preact__WEBPACK_IMPORTED_MODULE_1__.options.event = function (e) {
  if (prevEvent) {
    e = prevEvent(e);
  }
  debug("wrapEvent", e);
  // TODO: figure out how to know what to wrap. There's plenty of work left here.
  return {
    type: e.type,
    target: (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.broker)(e.target)
  };
};
        };
      }
    }
    }
}).call(__webpack_require__._LM_("$root$", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var domponent1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! domponent1 */ "./node_modules/domponent1/DomWiggler.js");
/* harmony import */ var domponent2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domponent2 */ "./node_modules/domponent2/DomWiggler.js");
/* harmony import */ var domponent3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domponent3 */ "./node_modules/domponent3/DomWiggler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Misfeatures = /*#__PURE__*/function (_Component) {
  _inherits(Misfeatures, _Component);
  function Misfeatures(props) {
    _classCallCheck(this, Misfeatures);
    return _callSuper(this, Misfeatures, [props]);
  }
  _createClass(Misfeatures, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.base.innerHTML = 'stop me if you can';
    }
  }, {
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
        dangerouslySetInnerHTML: 'stop me if you can'
      }, "misfeatures blocked");
    }
  }]);
  return Misfeatures;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
var App = /*#__PURE__*/function (_Component2) {
  _inherits(App, _Component2);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _callSuper(this, App, [props]);
    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      _this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    });
    _this.state = {
      counter: 0
    };
    return _this;
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("section", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
        onClick: this.handleButtonClick
      }, "Rerender"), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("i", null, " rerenders: ", this.state.counter), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("hr", null), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(domponent1__WEBPACK_IMPORTED_MODULE_1__["default"], {
        id: "1"
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(domponent2__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "2"
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(domponent3__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "3"
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Misfeatures, null));
    }
  }]);
  return App;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
        };
      }
    }
    }
}).call(__webpack_require__._LM_("$root$", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./node_modules/domponent1/DomWiggler.js":
/*!***********************************************!*\
  !*** ./node_modules/domponent1/DomWiggler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");



const DomWiggler = ({ id }) => {
  const myElement = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const setColor = (color) => {
    const elm = domPowers.claim(domPowers, myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  };

  const handleBlur = (event) => {
    const target = domPowers.claim(domPowers, event.target);
    const color = target.value;
    setColor(color);
  };

  const handleColor = () => {
    setColor(['red', 'lightblue', 'green', 'yellow', 'orange', 'purple'][Math.floor(Math.random() * 6)]);
  };

  const handleFetch = (e) => {
    const target = domPowers.claim(domPowers, e.target);
    target.ownerDocument.ownerDocument.defaultView.fetch('https://example.com');
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { ref: myElement }, "Component ", id), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", onBlur: handleBlur, placeholder: "color" }), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleColor }, "random color"), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleFetch }, "attempt fetch")
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomWiggler);

        };
      }
    }
    }
}).call(__webpack_require__._LM_("domponent1", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./node_modules/domponent2/DomWiggler.js":
/*!***********************************************!*\
  !*** ./node_modules/domponent2/DomWiggler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");



const DomWiggler = ({ id }) => {
  const myElement = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const setColor = (color) => {
    const elm = domPowers.claim(domPowers, myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  };

  const handleBlur = (event) => {
    const target = domPowers.claim(domPowers, event.target);
    const color = target.value;
    setColor(color);
  };

  const handleColor = () => {
    setColor(['red', 'lightblue', 'green', 'yellow', 'orange', 'purple'][Math.floor(Math.random() * 6)]);
  };

  const handleFetch = (e) => {
    const target = domPowers.claim(domPowers, e.target);
    target.ownerDocument.ownerDocument.defaultView.fetch('https://example.com');
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { ref: myElement }, "Component ", id), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", onBlur: handleBlur, placeholder: "color" }), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleColor }, "random color"), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleFetch }, "attempt fetch")
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomWiggler);

        };
      }
    }
    }
}).call(__webpack_require__._LM_("domponent2", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./node_modules/domponent3/DomWiggler.js":
/*!***********************************************!*\
  !*** ./node_modules/domponent3/DomWiggler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");



const DomWiggler = ({ id }) => {
  const myElement = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const setColor = (color) => {
    const elm = domPowers.claim(domPowers, myElement.current);
    if (elm) {
      elm.style.color = color;
    }
  };

  const handleBlur = (event) => {
    const target = domPowers.claim(domPowers, event.target);
    const color = target.value;
    setColor(color);
  };

  const handleColor = () => {
    setColor(['red', 'lightblue', 'green', 'yellow', 'orange', 'purple'][Math.floor(Math.random() * 6)]);
  };

  const handleFetch = (e) => {
    const target = domPowers.claim(domPowers, e.target);
    target.ownerDocument.ownerDocument.defaultView.fetch('https://example.com');
  };

  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { ref: myElement }, "Component ", id), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", onBlur: handleBlur, placeholder: "color" }), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleColor }, "random color"), 
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: handleFetch }, "attempt fetch")
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomWiggler);

        };
      }
    }
    }
}).call(__webpack_require__._LM_("domponent3", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ b),
/* harmony export */   Fragment: () => (/* binding */ g),
/* harmony export */   cloneElement: () => (/* binding */ F),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ y),
/* harmony export */   createRef: () => (/* binding */ _),
/* harmony export */   h: () => (/* binding */ y),
/* harmony export */   hydrate: () => (/* binding */ E),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ B),
/* harmony export */   toChildArray: () => (/* binding */ H)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d(l,f,i,o,null)}function d(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function _(){return{current:null}}function g(n){return n.children}function b(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n,u,t){var i,o=n.__v,r=o.__e,f=n.__P;if(f)return(i=v({},o)).__v=o.__v+1,l.vnode&&l.vnode(i),M(f,i,o,n.__n,void 0!==f.ownerSVGElement,32&o.__u?[r]:null,u,null==r?m(o):r,!!(32&o.__u),t),i.__v=o.__v,i.__.__k[i.__i]=i,i.__d=void 0,i.__e!=r&&k(i),i}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function x(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!C.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(C)}function C(){var n,u,t,o=[],r=[];for(i.sort(f);n=i.shift();)n.__d&&(t=i.length,u=w(n,o,r)||u,0===t||i.length>t?(j(o,u,r),r.length=o.length=0,u=void 0,i.sort(f)):u&&l.__c&&l.__c(u,s));u&&j(o,u,r),C.__r=0}function P(n,l,u,t,i,o,r,f,e,a,h){var v,p,y,d,_,g=t&&t.__k||s,b=l.length;for(u.__d=e,S(u,l,g),e=u.__d,v=0;v<b;v++)null!=(y=u.__k[v])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?c:g[y.__i]||c,y.__i=v,M(n,y,p,i,o,r,f,e,a,h),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),h.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?e=$(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_}function S(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?d(null,i,null,null,null):h(i)?d(g,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?d(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=I(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m(o)),O(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=m(o)),O(o,o))}function $(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=$(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(h(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function I(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=Date.now(),n.addEventListener(l,o?L:D,o)):n.removeEventListener(l,o?L:D,o);else{if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&"role"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function D(n){if(this.l){var u=this.l[n.type+!1];if(n.t){if(n.t<=u.u)return}else n.t=Date.now();return u(l.event?l.event(n):n)}}function L(n){if(this.l)return this.l[n.type+!0](l.event?l.event(n):n)}function M(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,m,w,k,x,C,S,$,H,I,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof A)try{if(k=u.props,x=(a=A.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in A&&A.prototype.render?u.__c=p=new A(k,C):(u.__c=p=new b(k,C),p.constructor=A,p.render=q),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v({},p.__s)),v(p.__s,A.getDerivedStateFromProps(k,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&k!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=k,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u)}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,m)})}if(p.context=C,p.props=k,p.__P=n,p.__e=!1,$=l.__r,H=0,"prototype"in A&&A.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[]}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=v(v({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(d,_)),P(n,h(T=null!=a&&a.type===g&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__u&=-161,p.__h.length&&f.push(p),w&&(p.__E=p.__=null)}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(l,u,t,i,o,r,f,e,s){var a,v,y,d,_,g,b,w=t.props,k=u.props,x=u.type;if("svg"===x&&(o=!0),null!=r)for(a=0;a<r.length;a++)if((_=r[a])&&"setAttribute"in _==!!x&&(x?_.localName===x:3===_.nodeType)){l=_,r[a]=null;break}if(null==l){if(null===x)return document.createTextNode(k);l=o?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,k.is&&k),r=null,e=!1}if(null===x)w===k||e&&l.data===k||(l.data=k);else{if(r=r&&n.call(l.childNodes),w=t.props||c,!e&&null!=r)for(w={},a=0;a<l.attributes.length;a++)w[(_=l.attributes[a]).name]=_.value;for(a in w)_=w[a],"children"==a||("dangerouslySetInnerHTML"==a?y=_:"key"===a||a in k||A(l,a,null,_,o));for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?b=_:"key"===a||e&&"function"!=typeof _||w[a]===_||A(l,a,_,w[a],o);if(v)e||y&&(v.__html===y.__html||v.__html===l.innerHTML)||(l.innerHTML=v.__html),u.__k=[];else if(y&&(l.innerHTML=""),P(l,h(d)?d:[d],u,t,i,o&&"foreignObject"!==x,r,f,r?r[0]:t.__k&&m(t,0),e,s),null!=r)for(a=r.length;a--;)null!=r[a]&&p(r[a]);e||(a="value",void 0!==g&&(g!==l[a]||"progress"===x&&!g||"option"===x&&g!==w[a])&&A(l,a,g,w[a],!1),a="checked",void 0!==b&&b!==l[a]&&A(l,a,b,w[a],!1))}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,t)}}function O(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&O(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],M(t,u=(!o&&i||t).__k=y(g,null,[u]),r||c,c,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),u.__d=void 0,j(f,u,e)}function E(n,l){B(n,l,E)}function F(l,u,t){var i,o,r,f,e=v({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),d(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,x(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof n&&(n=n(v({},u),this.props)),n&&v(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),x(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),x(this))},b.prototype.render=g,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},C.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map

        };
      }
    }
    }
}).call(__webpack_require__._LM_("preact", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ x),
/* harmony export */   useContext: () => (/* binding */ P),
/* harmony export */   useDebugValue: () => (/* binding */ V),
/* harmony export */   useEffect: () => (/* binding */ _),
/* harmony export */   useErrorBoundary: () => (/* binding */ b),
/* harmony export */   useId: () => (/* binding */ g),
/* harmony export */   useImperativeHandle: () => (/* binding */ T),
/* harmony export */   useLayoutEffect: () => (/* binding */ A),
/* harmony export */   useMemo: () => (/* binding */ q),
/* harmony export */   useReducer: () => (/* binding */ y),
/* harmony export */   useRef: () => (/* binding */ F),
/* harmony export */   useState: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=[],e=preact__WEBPACK_IMPORTED_MODULE_0__.options,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i))}function A(n,u){var i=h(t++,4);!e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i))}function F(n){return o=5,q(function(){return{current:n}},[])}function T(n,t,r){o=6,A(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function q(n,r){var u=h(t++,7);return C(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function x(n,t){return o=8,q(function(){return n},t)}function P(n){var u=r.context[n.__c],i=h(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function V(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)}function b(n){var u=h(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=h(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],e.__e(t,n.__v)}}e.__b=function(n){r=null,a&&a(n)},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t)},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c})),u=r=null},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],e.__e(r,n.__v)}}),m&&m(n,t)},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&e.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

        };
      }
    }
    }
}).call(__webpack_require__._LM_("preact", { __webpack_require__,__webpack_exports__}))()

/***/ }),

/***/ "../../index.js":
/*!**********************!*\
  !*** ../../index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   broker: () => (/* binding */ broker),
/* harmony export */   claim: () => (/* binding */ claim),
/* harmony export */   createBroker: () => (/* binding */ createBroker)
/* harmony export */ });
// @ts-check
var defineProperty = Object.defineProperty,
  defineProperties = Object.defineProperties,
  create = Object.create,
  freeze = Object.freeze,
  assign = Object.assign,
  values = Object.values;
var Proxy = globalThis.Proxy;
var WeakMap = globalThis.WeakMap;
var _WeakMap$prototype = WeakMap.prototype,
  get = _WeakMap$prototype.get,
  set = _WeakMap$prototype.set;

// Only one weakmap is ever needed. Creating separate WeakMaps would not improve anything
var store = new WeakMap();
var storeSet = set.bind(store);
var storeGet = get.bind(store);
var broker = function broker(power) {
  var deal = createDeal();
  storeSet(deal, power);
  return deal;
};
// claim(broker, deal)
// also considered: uphold(broker, covenant) :)
var claim = function claim(broker, deal) {
  if (!broker) {
    return deal; //still no mandate
  }
  var mandateKeys = values(broker);
  var power = storeGet(deal);
  if (power === undefined) {
    // this should not happen. returning the same reference in case it's accidentally an actual useful object
    return deal;
  }
  var goods = create(null);
  for (var i = 0; i < mandateKeys.length; i++) {
    var attenuationFromMandate = storeGet(mandateKeys[i]);
    if (attenuationFromMandate === undefined) continue; // in case of stray keys
    assign(goods, attenuationFromMandate(power));
  }
  return freeze(defineProperties(create(null), goods));
};
var createBroker = function createBroker(availableMandates) {
  var broker = create(null);
  for (var mandate in availableMandates) {
    var key = create(null);
    storeSet(key, availableMandates[mandate]);
    broker[mandate] = key;
  }
  // Not sure if this convenience is needed
  defineProperty(broker, "claim", {
    enumerable: false,
    value: claim
  });
  return freeze(broker);
};

// An improvement over a null prototype object - at least you know when you try to misuse it.
function createDeal() {
  var refuse = function refuse() {
    throw Error("You do not have the mandate to claim this power.");
  };
  return new Proxy(create(null), {
    get: refuse,
    set: refuse,
    apply: refuse,
    construct: refuse
  });
}
        };
      }
    }
    }
}).call(__webpack_require__._LM_("external:../../index.js", { __webpack_require__,__webpack_exports__}))()

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
/******/ 	/* webpack/runtime/LavaMoat/runtime */
/******/ 	(() => {
/******/ 		const LAVAMOAT = Object.create(null);
/******/ 		;/*root*/;
/******/ 		LAVAMOAT['root'] = ("$root$");
/******/ 		;/*idmap*/;
/******/ 		LAVAMOAT['idmap'] = ([["$root$",["./src/index.js","./hardenpreact.js","./src/App.jsx"]],["external:../../index.js",["../../index.js"]],["preact",["./node_modules/preact/dist/preact.module.js","./node_modules/preact/hooks/dist/hooks.module.js"]],["domponent1",["./node_modules/domponent1/DomWiggler.js"]],["domponent2",["./node_modules/domponent2/DomWiggler.js"]],["domponent3",["./node_modules/domponent3/DomWiggler.js"]]]);
/******/ 		;/*unenforceable*/;
/******/ 		LAVAMOAT['unenforceable'] = ([]);
/******/ 		;/*options*/;
/******/ 		LAVAMOAT['options'] = ({"lockdown":{"errorTaming":"unsafe","stackFiltering":"verbose","overrideTaming":"severe"}});
/******/ 		;/*policy*/;
/******/ 		LAVAMOAT['policy'] = ({"resources":{"domponent1":{"packages":{"preact":true},"globals":{"domPowers.claim":true,"domPowers.CSS":true,"domPowers.INPUTS":true}},"domponent2":{"packages":{"preact":true},"globals":{"domPowers.claim":true,"domPowers.CSS":true}},"domponent3":{"packages":{"preact":true},"globals":{"domPowers.claim":true}},"preact":{"globals":{"cancelAnimationFrame":true,"clearTimeout":true,"document.createElement":true,"document.createElementNS":true,"document.createTextNode":true,"requestAnimationFrame":true,"setTimeout":true}}}});
/******/ 		;/*ENUM*/;
/******/ 		LAVAMOAT['ENUM'] = ({
/******/ 		  "NAME_globalThis": "G",
/******/ 		  "NAME_scopeTerminator": "ST",
/******/ 		  "NAME_runtimeHandler": "RH",
/******/ 		  "RUNTIME_KEY": "_LM_"
/******/ 		
/******/ 		});
/******/ 		;/*endowmentsToolkit*/;
/******/ 		;(()=>{
/******/ 		        const module = {exports: {}};
/******/ 		        const exports = module.exports;
/******/ 		          // @ts-check
/******/ 		
/******/ 		
/******/ 		
/******/ 		module.exports = endowmentsToolkit
/******/ 		
/******/ 		
/******/ 		function endowmentsToolkit({
/******/ 		  createFunctionWrapper = defaultCreateFunctionWrapper,
/******/ 		} = {}) {
/******/ 		  return {
/******/ 		    getEndowmentsForConfig,
/******/ 		    makeMinimalViewOfRef,
/******/ 		    copyValueAtPath,
/******/ 		    applyGetSetPropDescTransforms,
/******/ 		    applyEndowmentPropDescTransforms,
/******/ 		    copyWrappedGlobals,
/******/ 		    createFunctionWrapper,
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function getEndowmentsForConfig(
/******/ 		    sourceRef,
/******/ 		    packagePolicy,
/******/ 		    unwrapTo,
/******/ 		    unwrapFrom
/******/ 		  ) {
/******/ 		    if (!packagePolicy.globals) {
/******/ 		      return {}
/******/ 		    }
/******/ 		    // validate read access from packagePolicy
/******/ 		    
/******/ 		    const whitelistedReads = []
/******/ 		    
/******/ 		    const explicitlyBanned = []
/******/ 		    Object.entries(packagePolicy.globals).forEach(
/******/ 		      ([path, packagePolicyValue]) => {
/******/ 		        const pathParts = path.split('.')
/******/ 		        // disallow dunder proto in path
/******/ 		        const pathContainsDunderProto = pathParts.some(
/******/ 		          (pathPart) => pathPart === '__proto__'
/******/ 		        )
/******/ 		        if (pathContainsDunderProto) {
/******/ 		          throw new Error(
/******/ 		            `Lavamoat - "__proto__" disallowed when creating minimal view. saw "${path}"`
/******/ 		          )
/******/ 		        }
/******/ 		        // false means no access. It's necessary so that overrides can also be used to tighten the policy
/******/ 		        if (packagePolicyValue === false) {
/******/ 		          explicitlyBanned.push(path)
/******/ 		          return
/******/ 		        }
/******/ 		        // write access handled elsewhere
/******/ 		        if (packagePolicyValue === 'write') {
/******/ 		          return
/******/ 		        }
/******/ 		        if (packagePolicyValue !== true) {
/******/ 		          throw new Error(
/******/ 		            `LavaMoat - unrecognizable policy value (${typeof packagePolicyValue}) for path "${path}"`
/******/ 		          )
/******/ 		        }
/******/ 		        whitelistedReads.push(path)
/******/ 		      }
/******/ 		    )
/******/ 		    return makeMinimalViewOfRef(
/******/ 		      sourceRef,
/******/ 		      whitelistedReads,
/******/ 		      unwrapTo,
/******/ 		      unwrapFrom,
/******/ 		      explicitlyBanned
/******/ 		    )
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function makeMinimalViewOfRef(
/******/ 		    sourceRef,
/******/ 		    paths,
/******/ 		    unwrapTo,
/******/ 		    unwrapFrom,
/******/ 		    explicitlyBanned = []
/******/ 		  ) {
/******/ 		    
/******/ 		    const targetRef = {}
/******/ 		    paths.forEach((path) => {
/******/ 		      copyValueAtPath(
/******/ 		        '',
/******/ 		        path.split('.'),
/******/ 		        explicitlyBanned,
/******/ 		        sourceRef,
/******/ 		        targetRef,
/******/ 		        unwrapTo,
/******/ 		        unwrapFrom
/******/ 		      )
/******/ 		    })
/******/ 		    return targetRef
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function extendPath(visited, next) {
/******/ 		    // FIXME: second part of this conditional should be unnecessary
/******/ 		    if (!visited || visited.length === 0) {
/******/ 		      return next
/******/ 		    }
/******/ 		    return `${visited}.${next}`
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function isEmpty(value) {
/******/ 		    return !value
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function copyValueAtPath(
/******/ 		    visitedPath,
/******/ 		    pathParts,
/******/ 		    explicitlyBanned,
/******/ 		    sourceRef,
/******/ 		    targetRef,
/******/ 		    unwrapTo = sourceRef,
/******/ 		    unwrapFrom = targetRef
/******/ 		  ) {
/******/ 		    if (pathParts.length === 0) {
/******/ 		      throw new Error('unable to copy, must have pathParts, was empty')
/******/ 		    }
/******/ 		    const [nextPart, ...remainingParts] = pathParts
/******/ 		    const currentPath = extendPath(visitedPath, nextPart)
/******/ 		    // get the property from any depth in the property chain
/******/ 		    const { prop: sourcePropDesc } = getPropertyDescriptorDeep(
/******/ 		      sourceRef,
/******/ 		      nextPart
/******/ 		    )
/******/ 		
/******/ 		    // if source missing the value to copy, just skip it
/******/ 		    if (isEmpty(sourcePropDesc)) {
/******/ 		      return
/******/ 		    }
/******/ 		
/******/ 		    // if target already has a value, it must be extensible
/******/ 		    const targetPropDesc = Reflect.getOwnPropertyDescriptor(targetRef, nextPart)
/******/ 		    if (targetPropDesc) {
/******/ 		      // dont attempt to extend a getter or trigger a setter
/******/ 		      if (!('value' in targetPropDesc)) {
/******/ 		        throw new Error(
/******/ 		          `unable to copy on to targetRef, targetRef has a getter at "${nextPart}"`
/******/ 		        )
/******/ 		      }
/******/ 		      // value must be extensible (cant write properties onto it)
/******/ 		      const targetValue = targetPropDesc.value
/******/ 		      const valueType = typeof targetValue
/******/ 		      if (valueType !== 'object' && valueType !== 'function') {
/******/ 		        throw new Error(
/******/ 		          `unable to copy on to targetRef, targetRef value is not an obj or func "${nextPart}"`
/******/ 		        )
/******/ 		      }
/******/ 		    }
/******/ 		
/******/ 		    // if this is not the last path in the assignment, walk into the containing reference
/******/ 		    if (remainingParts.length > 0) {
/******/ 		      const { sourceValue, sourceWritable } = getSourceValue(sourcePropDesc)
/******/ 		      const nextSourceRef = sourceValue
/******/ 		      let nextTargetRef
/******/ 		      // check if value exists on target and does not need selective treatment
/******/ 		      if (targetPropDesc && !explicitlyBanned.includes(currentPath)) {
/******/ 		        // a value already exists, we should walk into it
/******/ 		        nextTargetRef = targetPropDesc.value
/******/ 		      } else {
/******/ 		        // its not populated so lets write to it
/******/ 		        // put an object to serve as a container
/******/ 		        const containerRef = {}
/******/ 		        const newPropDesc = {
/******/ 		          value: containerRef,
/******/ 		          writable: sourceWritable,
/******/ 		          enumerable: sourcePropDesc.enumerable,
/******/ 		          configurable: sourcePropDesc.configurable,
/******/ 		        }
/******/ 		        Reflect.defineProperty(targetRef, nextPart, newPropDesc)
/******/ 		        // the newly created container will be the next target
/******/ 		        nextTargetRef = containerRef
/******/ 		      }
/******/ 		      copyValueAtPath(
/******/ 		        currentPath,
/******/ 		        remainingParts,
/******/ 		        explicitlyBanned,
/******/ 		        nextSourceRef,
/******/ 		        nextTargetRef
/******/ 		      )
/******/ 		      return
/******/ 		    }
/******/ 		
/******/ 		    // If conflicting rules exist, opt for the negative one. This should never happen
/******/ 		    if (explicitlyBanned.includes(currentPath)) {
/******/ 		      console.warn(`LavaMoat - conflicting rules exist for "${currentPath}"`)
/******/ 		      return
/******/ 		    }
/******/ 		
/******/ 		    // this is the last part of the path, the value we're trying to actually copy
/******/ 		    // if has getter/setter - apply this-value unwrapping
/******/ 		    if (!('value' in sourcePropDesc)) {
/******/ 		      // wrapper setter/getter with correct receiver
/******/ 		      const wrapperPropDesc = applyGetSetPropDescTransforms(
/******/ 		        sourcePropDesc,
/******/ 		        unwrapFrom,
/******/ 		        unwrapTo
/******/ 		      )
/******/ 		      Reflect.defineProperty(targetRef, nextPart, wrapperPropDesc)
/******/ 		      return
/******/ 		    }
/******/ 		
/******/ 		    // need to determine the value type in order to copy it with
/******/ 		    // this-value unwrapping support
/******/ 		    const { sourceValue, sourceWritable } = getSourceValue(sourcePropDesc)
/******/ 		
/******/ 		    // not a function - copy as is
/******/ 		    if (typeof sourceValue !== 'function') {
/******/ 		      Reflect.defineProperty(targetRef, nextPart, sourcePropDesc)
/******/ 		      return
/******/ 		    }
/******/ 		    // otherwise add workaround for functions to swap back to the sourceal "this" reference
/******/ 		    
/******/ 		    const unwrapTest = (thisValue) => thisValue === unwrapFrom
/******/ 		    const newValue = createFunctionWrapper(sourceValue, unwrapTest, unwrapTo)
/******/ 		    const newPropDesc = {
/******/ 		      value: newValue,
/******/ 		      writable: sourceWritable,
/******/ 		      enumerable: sourcePropDesc.enumerable,
/******/ 		      configurable: sourcePropDesc.configurable,
/******/ 		    }
/******/ 		    Reflect.defineProperty(targetRef, nextPart, newPropDesc)
/******/ 		
/******/ 		    
/******/ 		    function getSourceValue(sourcePropDesc) {
/******/ 		      // determine the source value, this coerces getters to values
/******/ 		      // im deeply sorry, respecting getters was complicated and
/******/ 		      // my brain is not very good
/******/ 		      let sourceValue, sourceWritable
/******/ 		      if ('value' in sourcePropDesc) {
/******/ 		        sourceValue = sourcePropDesc.value
/******/ 		        sourceWritable = sourcePropDesc.writable
/******/ 		      } else if ('get' in sourcePropDesc && sourcePropDesc.get) {
/******/ 		        sourceValue = sourcePropDesc.get.call(unwrapTo)
/******/ 		        sourceWritable = 'set' in sourcePropDesc
/******/ 		      } else {
/******/ 		        throw new Error(
/******/ 		          'getEndowmentsForConfig - property descriptor missing a getter'
/******/ 		        )
/******/ 		      }
/******/ 		      return { sourceValue, sourceWritable }
/******/ 		    }
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function applyEndowmentPropDescTransforms(
/******/ 		    propDesc,
/******/ 		    unwrapFromCompartmentGlobalThis,
/******/ 		    unwrapToGlobalThis
/******/ 		  ) {
/******/ 		    let newPropDesc = propDesc
/******/ 		    newPropDesc = applyFunctionPropDescTransform(
/******/ 		      newPropDesc,
/******/ 		      unwrapFromCompartmentGlobalThis,
/******/ 		      unwrapToGlobalThis
/******/ 		    )
/******/ 		    newPropDesc = applyGetSetPropDescTransforms(
/******/ 		      newPropDesc,
/******/ 		      unwrapFromCompartmentGlobalThis,
/******/ 		      unwrapToGlobalThis
/******/ 		    )
/******/ 		    return newPropDesc
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function applyGetSetPropDescTransforms(
/******/ 		    sourcePropDesc,
/******/ 		    unwrapFromGlobalThis,
/******/ 		    unwrapToGlobalThis
/******/ 		  ) {
/******/ 		    const wrappedPropDesc = { ...sourcePropDesc }
/******/ 		    if (sourcePropDesc.get) {
/******/ 		      wrappedPropDesc.get = function () {
/******/ 		        // eslint-disable-next-line @typescript-eslint/no-this-alias
/******/ 		        const receiver = this
/******/ 		        // replace the "receiver" value if it points to fake parent
/******/ 		        const receiverRef =
/******/ 		          receiver === unwrapFromGlobalThis ? unwrapToGlobalThis : receiver
/******/ 		        // sometimes getters replace themselves with static properties, as seen wih the FireFox runtime
/******/ 		        const result = Reflect.apply(
/******/ 		           (
/******/ 		            sourcePropDesc.get
/******/ 		          ),
/******/ 		          receiverRef,
/******/ 		          []
/******/ 		        )
/******/ 		        if (typeof result === 'function') {
/******/ 		          // functions must be wrapped to ensure a good this-value.
/******/ 		          // lockdown causes some propDescs to go to value -> getter,
/******/ 		          // eg "Function.prototype.bind". we need to wrap getter results
/******/ 		          // as well in order to ensure they have their this-value wrapped correctly
/******/ 		          // if this ends up being problematic we can maybe take advantage of lockdown's
/******/ 		          // "getter.originalValue" property being available
/******/ 		          return createFunctionWrapper(
/******/ 		            result,
/******/ 		            
/******/ 		            (thisValue) => thisValue === unwrapFromGlobalThis,
/******/ 		            unwrapToGlobalThis
/******/ 		          )
/******/ 		        } else {
/******/ 		          return result
/******/ 		        }
/******/ 		      }
/******/ 		    }
/******/ 		    if (sourcePropDesc.set) {
/******/ 		      wrappedPropDesc.set = function (value) {
/******/ 		        // replace the "receiver" value if it points to fake parent
/******/ 		        // eslint-disable-next-line @typescript-eslint/no-this-alias
/******/ 		        const receiver = this
/******/ 		        const receiverRef =
/******/ 		          receiver === unwrapFromGlobalThis ? unwrapToGlobalThis : receiver
/******/ 		        return Reflect.apply(
/******/ 		           (sourcePropDesc.set),
/******/ 		          receiverRef,
/******/ 		          [value]
/******/ 		        )
/******/ 		      }
/******/ 		    }
/******/ 		    return wrappedPropDesc
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function applyFunctionPropDescTransform(
/******/ 		    propDesc,
/******/ 		    unwrapFromCompartmentGlobalThis,
/******/ 		    unwrapToGlobalThis
/******/ 		  ) {
/******/ 		    if (!('value' in propDesc && typeof propDesc.value === 'function')) {
/******/ 		      return propDesc
/******/ 		    }
/******/ 		    
/******/ 		    const unwrapTest = (thisValue) => {
/******/ 		      // unwrap function calls this-value to unwrapToGlobalThis when:
/******/ 		      // this value is globalThis ex. globalThis.abc()
/******/ 		      // scope proxy leak workaround ex. abc()
/******/ 		      return thisValue === unwrapFromCompartmentGlobalThis
/******/ 		    }
/******/ 		    const newFn = createFunctionWrapper(
/******/ 		      propDesc.value,
/******/ 		      unwrapTest,
/******/ 		      unwrapToGlobalThis
/******/ 		    )
/******/ 		    return { ...propDesc, value: newFn }
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function getPropertyDescriptorDeep(target, key) {
/******/ 		    
/******/ 		    let receiver = target
/******/ 		    // eslint-disable-next-line no-constant-condition
/******/ 		    while (true) {
/******/ 		      // abort if this is the end of the prototype chain.
/******/ 		      if (!receiver) {
/******/ 		        return { prop: null, receiver: null }
/******/ 		      }
/******/ 		      // support lookup on objects and primitives
/******/ 		      const typeofReceiver = typeof receiver
/******/ 		      if (typeofReceiver === 'object' || typeofReceiver === 'function') {
/******/ 		        const prop = Reflect.getOwnPropertyDescriptor(receiver, key)
/******/ 		        if (prop) {
/******/ 		          return { receiver, prop }
/******/ 		        }
/******/ 		        // try next in the prototype chain
/******/ 		        receiver = Reflect.getPrototypeOf(receiver)
/******/ 		      } else {
/******/ 		        // prototype lookup for primitives
/******/ 		        // eslint-disable-next-line no-proto
/******/ 		        receiver =  (receiver).__proto__
/******/ 		      }
/******/ 		    }
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function copyWrappedGlobals(
/******/ 		    globalRef,
/******/ 		    target,
/******/ 		    globalThisRefs = ['globalThis']
/******/ 		  ) {
/******/ 		    // find the relevant endowment sources
/******/ 		    const globalProtoChain = getPrototypeChain(globalRef)
/******/ 		    // the index for the common prototypal ancestor, Object.prototype
/******/ 		    // this should always be the last index, but we check just in case
/******/ 		    const commonPrototypeIndex = globalProtoChain.findIndex(
/******/ 		      (globalProtoChainEntry) => globalProtoChainEntry === Object.prototype
/******/ 		    )
/******/ 		    if (commonPrototypeIndex === -1) {
/******/ 		      // TODO: fix this error message
/******/ 		      throw new Error(
/******/ 		        'Lavamoat - unable to find common prototype between Compartment and globalRef'
/******/ 		      )
/******/ 		    }
/******/ 		    // we will copy endowments from all entries in the prototype chain, excluding Object.prototype
/******/ 		    const endowmentSources = globalProtoChain.slice(0, commonPrototypeIndex)
/******/ 		
/******/ 		    // call all getters, in case of behavior change (such as with FireFox lazy getters)
/******/ 		    // call on contents of endowmentsSources directly instead of in new array instances. If there is a lazy getter it only changes the original prop desc.
/******/ 		    endowmentSources.forEach((source) => {
/******/ 		      const descriptors = Object.getOwnPropertyDescriptors(source)
/******/ 		      Object.values(descriptors).forEach((desc) => {
/******/ 		        if ('get' in desc && desc.get) {
/******/ 		          try {
/******/ 		            // calling getters can potentially throw (e.g. localStorage inside a sandboxed iframe)
/******/ 		            Reflect.apply(desc.get, globalRef, [])
/******/ 		          } catch {}
/******/ 		        }
/******/ 		      })
/******/ 		    })
/******/ 		
/******/ 		    const endowmentSourceDescriptors = endowmentSources.map(
/******/ 		      (globalProtoChainEntry) =>
/******/ 		        Object.getOwnPropertyDescriptors(globalProtoChainEntry)
/******/ 		    )
/******/ 		    // flatten propDesc collections with precedence for globalThis-end of the prototype chain
/******/ 		    const endowmentDescriptorsFlat = Object.assign(
/******/ 		      Object.create(null),
/******/ 		      ...endowmentSourceDescriptors.reverse()
/******/ 		    )
/******/ 		    // expose all own properties of globalRef, including non-enumerable
/******/ 		    Object.entries(endowmentDescriptorsFlat)
/******/ 		      // ignore properties already defined on compartment global
/******/ 		      .filter(([key]) => !(key in target))
/******/ 		      // ignore circular globalThis refs
/******/ 		      .filter(([key]) => !globalThisRefs.includes(key))
/******/ 		      // define property on compartment global
/******/ 		      .forEach(([key, desc]) => {
/******/ 		        // unwrap functions, setters/getters & apply scope proxy workaround
/******/ 		        const wrappedPropDesc = applyEndowmentPropDescTransforms(
/******/ 		          desc,
/******/ 		          target,
/******/ 		          globalRef
/******/ 		        )
/******/ 		        Reflect.defineProperty(target, key, wrappedPropDesc)
/******/ 		      })
/******/ 		    // global circular references otherwise added by prepareCompartmentGlobalFromConfig
/******/ 		    // Add all circular refs to root package compartment globalThis
/******/ 		    for (const ref of globalThisRefs) {
/******/ 		      if (ref in target) {
/******/ 		        continue
/******/ 		      }
/******/ 		      target[ref] = target
/******/ 		    }
/******/ 		    return target
/******/ 		  }
/******/ 		
/******/ 		  
/******/ 		  function getPrototypeChain(value) {
/******/ 		    const protoChain = []
/******/ 		    let current = value
/******/ 		    while (
/******/ 		      current &&
/******/ 		      (typeof current === 'object' || typeof current === 'function')
/******/ 		    ) {
/******/ 		      protoChain.push(current)
/******/ 		      current = Reflect.getPrototypeOf(current)
/******/ 		    }
/******/ 		    return protoChain
/******/ 		  }
/******/ 		}
/******/ 		
/******/ 		
/******/ 		function defaultCreateFunctionWrapper(sourceValue, unwrapTest, unwrapTo) {
/******/ 		  
/******/ 		  const newValue = function (...args) {
/******/ 		    if (new.target) {
/******/ 		      // handle constructor calls
/******/ 		      return Reflect.construct(sourceValue, args, new.target)
/******/ 		    } else {
/******/ 		      // handle function calls
/******/ 		      // unwrap to target value if this value is the source package compartment's globalThis
/******/ 		      const thisRef = unwrapTest(this) ? unwrapTo : this
/******/ 		      return Reflect.apply(sourceValue, thisRef, args)
/******/ 		    }
/******/ 		  }
/******/ 		  Object.defineProperties(
/******/ 		    newValue,
/******/ 		    Object.getOwnPropertyDescriptors(sourceValue)
/******/ 		  )
/******/ 		  return newValue
/******/ 		}
/******/ 		
/******/ 		
/******/ 		
/******/ 		        ;
/******/ 		        LAVAMOAT['endowmentsToolkit'] = module.exports;
/******/ 		      })();
/******/ 		;/*runtime*/;
/******/ 		/// <reference path="./runtime.d.ts" />
/******/ 		
/******/ 		
/******/ 		
/******/ 		const {
/******/ 		  create,
/******/ 		  freeze,
/******/ 		  assign,
/******/ 		  defineProperty,
/******/ 		  defineProperties,
/******/ 		  getOwnPropertyDescriptors,
/******/ 		} = Object
/******/ 		const warn = typeof console === 'object' ? console.warn : () => {}
/******/ 		// Avoid running any wrapped code or using compartment if lockdown was not called.
/******/ 		// This is for when the bundle ends up running despite SES being missing.
/******/ 		// It was previously useful for sub-compilations running an incomplete bundle as part of the build, but currently that is being skipped. We might go back to it for the sake of build time security if it's deemed worthwihile in absence of lockdown.
/******/ 		const LOCKDOWN_ON = typeof lockdown !== 'undefined'
/******/ 		if (LOCKDOWN_ON) {
/******/ 		  lockdown(LAVAMOAT.options.lockdown)
/******/ 		} else {
/******/ 		  warn(
/******/ 		    'LavaMoat: runtime execution started without SES present, switching to no-op.'
/******/ 		  )
/******/ 		}
/******/ 		
/******/ 		const { getEndowmentsForConfig, copyWrappedGlobals } =
/******/ 		  LAVAMOAT.endowmentsToolkit()
/******/ 		
/******/ 		// These must match assumptions in the wrapper.js
/******/ 		// sharedKeys are included in the runtime
/******/ 		
/******/ 		const { NAME_globalThis, NAME_scopeTerminator, NAME_runtimeHandler } =
/******/ 		  LAVAMOAT.ENUM
/******/ 		
/******/ 		// strictScopeTerminator from SES is not strict enough - `has` would only return true for globals
/******/ 		// and here we want to prevent reaching into the scope where local variables from bundle runtime are available.
/******/ 		const stricterScopeTerminator = freeze(
/******/ 		  new Proxy(
/******/ 		    freeze(create(null)),
/******/ 		    freeze({
/******/ 		      // TODO: emulate a reference error in a getter.
/******/ 		      has: freeze(() => true),
/******/ 		    })
/******/ 		  )
/******/ 		)
/******/ 		
/******/ 		
/******/ 		const enforcePolicy = (requestedResourceId, referrerResourceId) => {
/******/ 		  if (typeof requestedResourceId === 'undefined') {
/******/ 		    throw Error(`Requested resource ID is undefined`)
/******/ 		  }
/******/ 		  requestedResourceId = '' + requestedResourceId
/******/ 		  referrerResourceId = '' + referrerResourceId
/******/ 		  // implicitly allow all for root and modules from the same package
/******/ 		  if (
/******/ 		    referrerResourceId === LAVAMOAT.root ||
/******/ 		    requestedResourceId === referrerResourceId
/******/ 		  ) {
/******/ 		    return
/******/ 		  }
/******/ 		  const myPolicy = LAVAMOAT.policy.resources[referrerResourceId] || {}
/******/ 		  // @ts-expect-error - missing details in policy type, see TODO in types.js
/******/ 		  if (myPolicy.packages && myPolicy.packages[requestedResourceId]) {
/******/ 		    return
/******/ 		  }
/******/ 		  throw Error(
/******/ 		    `Policy does not allow importing ${requestedResourceId} from ${referrerResourceId}`
/******/ 		  )
/******/ 		}
/******/ 		
/******/ 		const theRealGlobalThis = globalThis
/******/ 		
/******/ 		let rootCompartmentGlobalThis
/******/ 		
/******/ 		const installGlobalsForPolicy = (resourceId, packageCompartmentGlobal) => {
/******/ 		  if (resourceId === LAVAMOAT.root) {
/******/ 		    rootCompartmentGlobalThis = packageCompartmentGlobal
/******/ 		    copyWrappedGlobals(theRealGlobalThis, rootCompartmentGlobalThis, [
/******/ 		      'globalThis',
/******/ 		      'window',
/******/ 		      'self',
/******/ 		    ])
/******/ 		  } else {
/******/ 		    // TODO: getEndowmentsForConfig doesn't implement support for "write"
/******/ 		    const endowments = getEndowmentsForConfig(
/******/ 		      rootCompartmentGlobalThis,
/******/ 		      LAVAMOAT.policy.resources[resourceId] || {},
/******/ 		      globalThis,
/******/ 		      packageCompartmentGlobal
/******/ 		    )
/******/ 		
/******/ 		    defineProperties(
/******/ 		      packageCompartmentGlobal,
/******/ 		      getOwnPropertyDescriptors(endowments)
/******/ 		    )
/******/ 		  }
/******/ 		}
/******/ 		
/******/ 		const compartmentMap = new Map()
/******/ 		
/******/ 		const findResourceId = (moduleId) => {
/******/ 		  const found = LAVAMOAT.idmap.find(([, moduleIds]) =>
/******/ 		    moduleIds.includes(moduleId)
/******/ 		  )
/******/ 		  if (found) {
/******/ 		    return found[0]
/******/ 		  }
/******/ 		}
/******/ 		
/******/ 		
/******/ 		
/******/ 		
/******/ 		const wrapRequireWithPolicy = (__webpack_require__, referrerResourceId) =>
/******/ 		  function (specifier) {
/******/ 		    if (!LAVAMOAT.unenforceable.includes(specifier)) {
/******/ 		      const requestedResourceId = findResourceId(specifier)
/******/ 		      enforcePolicy(requestedResourceId, referrerResourceId)
/******/ 		    }
/******/ 		    // @ts-ignore - unknown this is the point here
/******/ 		    return __webpack_require__.apply(this, arguments)
/******/ 		  }
/******/ 		
/******/ 		
/******/ 		const lavamoatRuntimeWrapper = (resourceId, runtimeKit) => {
/******/ 		  if (!LOCKDOWN_ON) {
/******/ 		    // Scope Terminator not being present in the output causes the wrapper closure to run a no-op instaed of the module body
/******/ 		    return create(null)
/******/ 		  }
/******/ 		
/******/ 		  if (!compartmentMap.has(resourceId)) {
/******/ 		    // Endow original Math and Date, because SES tames them and we don't need that
/******/ 		    const c = new Compartment({ Math, Date })
/******/ 		    installGlobalsForPolicy(resourceId, c.globalThis)
/******/ 		    compartmentMap.set(resourceId, c)
/******/ 		  }
/******/ 		
/******/ 		  let overrides = create(null)
/******/ 		
/******/ 		  // modules may reference `require` dynamically, but that's something we don't want to allow
/******/ 		  const { __webpack_require__ } = runtimeKit
/******/ 		  let { module } = runtimeKit
/******/ 		
/******/ 		  if (__webpack_require__) {
/******/ 		    // wrap webpack runtime for policy check and hardening
/******/ 		    const policyRequire = wrapRequireWithPolicy(__webpack_require__, resourceId)
/******/ 		
/******/ 		    // TODO: figure out what to wrap and what to copy
/******/ 		    // TODO: most of the work here could be done once instead of for each wrapping
/******/ 		
/******/ 		    // Webpack has built-in plugins that add more runtime functions. We might need to support them eventually.
/******/ 		    // It's a case-by-case basis decision.
/******/ 		    // TODO: print a warning for other functions on the __webpack_require__ namespace that we're not supporting.
/******/ 		    //   It's probably best served at build time though - with runtimeRequirements or looking at the items in webpack runtime when adding lavamoat runtime.
/******/ 		
/******/ 		    // The following seem harmless and are used by default: ['O', 'n', 'd', 'o', 'r', 's']
/******/ 		    const supportedRuntimeItems = ['O', 'n', 'd', 'o', 'r', 's']
/******/ 		    for (const item of supportedRuntimeItems) {
/******/ 		      // @ts-expect-error - I'm not gonna do webppack's minified runtime typing
/******/ 		      policyRequire[item] = harden(__webpack_require__[item])
/******/ 		    }
/******/ 		
/******/ 		    // TODO: check if this is not breaking anything
/******/ 		    // @ts-expect-error - webpack runtime is not typed
/******/ 		    policyRequire.m = new Proxy(
/******/ 		      {},
/******/ 		      {
/******/ 		        has: (target, prop) => {
/******/ 		          warn(
/******/ 		            `A module attempted to read ${String(
/******/ 		              prop
/******/ 		            )} directly from webpack's module cache`
/******/ 		          )
/******/ 		          return false
/******/ 		        },
/******/ 		      }
/******/ 		    )
/******/ 		
/******/ 		    // webpack rewrites regerences to `global` to `__webpack_require__.g` in the bundle
/******/ 		    policyRequire.g = compartmentMap.get(resourceId).globalThis
/******/ 		
/******/ 		    // override nmd to limit what it can mutate
/******/ 		    // @ts-expect-error - webpack runtime is not typed
/******/ 		    policyRequire.nmd = (moduleReference) => {
/******/ 		      if (moduleReference === module) {
/******/ 		        module = __webpack_require__.nmd(module)
/******/ 		      }
/******/ 		    }
/******/ 		
/******/ 		    overrides.__webpack_require__ = policyRequire
/******/ 		  }
/******/ 		  const runtimeHandler = assign(create(null), runtimeKit, overrides)
/******/ 		
/******/ 		  // allow setting, but ignore value for  module = __webpack_require__.nmd(module)
/******/ 		  defineProperty(runtimeHandler, 'module', {
/******/ 		    get: () => module,
/******/ 		    set: () => {},
/******/ 		  })
/******/ 		  // Make it possible to overwrite `exports` locally despite runtimeHandler being frozen
/******/ 		  let exportsReference = runtimeHandler.exports
/******/ 		  defineProperty(runtimeHandler, 'exports', {
/******/ 		    get: () => exportsReference,
/******/ 		    set: (value) => {
/******/ 		      exportsReference = value
/******/ 		    },
/******/ 		  })
/******/ 		  freeze(runtimeHandler)
/******/ 		
/******/ 		  return {
/******/ 		    [NAME_scopeTerminator]: stricterScopeTerminator,
/******/ 		    [NAME_runtimeHandler]: runtimeHandler,
/******/ 		    [NAME_globalThis]: compartmentMap.get(resourceId).globalThis,
/******/ 		  }
/******/ 		}
/******/ 		
/******/ 		// defaultExport is getting assigned to __webpack_require__._LM_
/******/ 		LAVAMOAT.defaultExport = freeze(lavamoatRuntimeWrapper)
/******/ 		;
/******/ 		  __webpack_require__._LM_ = LAVAMOAT.defaultExport;
/******/ 		  (typeof harden !== 'undefined') && harden(__webpack_require__._LM_);
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(function(){
     if (!this.ST) return ()=>{};
     with (this.ST) {
      with (this.RH) {
      with (this.G) {
        return function() { 'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hardenpreact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hardenpreact.js */ "./hardenpreact.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
 // replace with noop to disable hardening
// import '../noop.js';




// Render the App component into the div with id 'app'
(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.h)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('app'));
        };
      }
    }
    }
}).call(__webpack_require__._LM_("$root$", { __webpack_require__,__webpack_exports__}))()
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map