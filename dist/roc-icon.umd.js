/**
 * roc-icon v1.0.6
 * (c) 2020-2024 rocyuan
 * Email: rocyuan666@163.com
 * Released under the MIT License.
 */
(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f(require('vue')):typeof define==='function'&&define.amd?define(['vue'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.RocIcon=f(g.Vue));})(this,(function(vue){'use strict';/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var __default__ = {
    name: 'RocIcon',
};
var script = /*#__PURE__*/ vue.defineComponent(__assign(__assign({}, __default__), { props: {
        name: { type: String, required: true },
        size: { type: [Number, String], required: false, default: 16 },
        color: { type: String, required: false, default: '#606266' },
        rotate: { type: [Number, String], required: false, default: 0 },
        animationType: { type: String, required: false, default: '' }
    }, setup: function (__props) {
        var _a;
        var props = __props;
        var classOptions = (_a = {},
            _a["fa4-".concat(props.name)] = true,
            _a["fa4-rotate-".concat(props.rotate)] = !!props.rotate,
            _a["fa4-".concat(props.animationType)] = !!props.animationType,
            _a);
        var styleOptions = {
            fontSize: String(props.size).includes('px') ? props.size : "".concat(props.size, "px"),
            color: props.color,
        };
        return function (_ctx, _cache) {
            return (vue.openBlock(), vue.createElementBlock("span", {
                class: vue.normalizeClass(["roc-icon fa4", classOptions]),
                style: styleOptions
            }));
        };
    } }));script.__scopeId = "data-v-a6fac1e2";
script.__file = "src/components/RocIcon/RocIcon.vue";var RocIconPlugin = {
    install: function (app) {
        app.component(script.name || '', script);
    },
};return RocIconPlugin;}));