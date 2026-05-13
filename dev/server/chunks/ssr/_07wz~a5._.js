module.exports = [
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = ("TURBOPACK compile-time value", "undefined") == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/node_modules/react-router/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Await",
    ()=>Await,
    "MemoryRouter",
    ()=>MemoryRouter,
    "Navigate",
    ()=>Navigate,
    "Outlet",
    ()=>Outlet,
    "Route",
    ()=>Route,
    "Router",
    ()=>Router,
    "RouterProvider",
    ()=>RouterProvider,
    "Routes",
    ()=>Routes,
    "UNSAFE_DataRouterContext",
    ()=>DataRouterContext,
    "UNSAFE_DataRouterStateContext",
    ()=>DataRouterStateContext,
    "UNSAFE_LocationContext",
    ()=>LocationContext,
    "UNSAFE_NavigationContext",
    ()=>NavigationContext,
    "UNSAFE_RouteContext",
    ()=>RouteContext,
    "UNSAFE_mapRouteProperties",
    ()=>mapRouteProperties,
    "UNSAFE_useRouteId",
    ()=>useRouteId,
    "UNSAFE_useRoutesImpl",
    ()=>useRoutesImpl,
    "createMemoryRouter",
    ()=>createMemoryRouter,
    "createRoutesFromChildren",
    ()=>createRoutesFromChildren,
    "createRoutesFromElements",
    ()=>createRoutesFromChildren,
    "renderMatches",
    ()=>renderMatches,
    "useActionData",
    ()=>useActionData,
    "useAsyncError",
    ()=>useAsyncError,
    "useAsyncValue",
    ()=>useAsyncValue,
    "useBlocker",
    ()=>useBlocker,
    "useHref",
    ()=>useHref,
    "useInRouterContext",
    ()=>useInRouterContext,
    "useLoaderData",
    ()=>useLoaderData,
    "useLocation",
    ()=>useLocation,
    "useMatch",
    ()=>useMatch,
    "useMatches",
    ()=>useMatches,
    "useNavigate",
    ()=>useNavigate,
    "useNavigation",
    ()=>useNavigation,
    "useNavigationType",
    ()=>useNavigationType,
    "useOutlet",
    ()=>useOutlet,
    "useOutletContext",
    ()=>useOutletContext,
    "useParams",
    ()=>useParams,
    "useResolvedPath",
    ()=>useResolvedPath,
    "useRevalidator",
    ()=>useRevalidator,
    "useRouteError",
    ()=>useRouteError,
    "useRouteLoaderData",
    ()=>useRouteLoaderData,
    "useRoutes",
    ()=>useRoutes
]);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@remix-run/router/dist/router.js [app-ssr] (ecmascript)");
;
;
;
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable";
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    AwaitContext.displayName = "Await";
}
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const NavigationContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
if ("TURBOPACK compile-time truthy", 1) {
    RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouteErrorContext.displayName = "RouteError";
}
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    let { relative } = _temp === void 0 ? {} : _temp;
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    let { basename, navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, {
        relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinPaths"])([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    let { pathname } = useLocation();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchPath"])(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    let isStatic = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext).static;
    if (!isStatic) {
        // We should be able to get rid of this once react 18.3 is released
        // See: https://github.com/facebook/react/pull/26395
        // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect(cb);
    }
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    let { isDataRoute } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(DataRouterContext);
    let { basename, future, navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext);
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_getResolveToMatches"])(matches, future.v7_relativeSplatPath));
    let activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(activeRef.current, navigateEffectWarning) : "TURBOPACK unreachable";
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTo"])(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinPaths"])([
                basename,
                path.pathname
            ]);
        }
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
const OutletContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    let outlet = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext).outlet;
    if (outlet) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(OutletContext.Provider, {
            value: context
        }, outlet);
    }
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    let { relative } = _temp2 === void 0 ? {} : _temp2;
    let { future } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext);
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_getResolveToMatches"])(matches, future.v7_relativeSplatPath));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTo"])(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    let { navigator } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext);
    let { matches: parentMatches } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if ("TURBOPACK compile-time truthy", 1) {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        let parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePath"])(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : "TURBOPACK unreachable" : void 0;
        location = parsedLocationArg;
    } else {
        location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchRoutes"])(routes, {
        pathname: remainingPathname
    });
    if ("TURBOPACK compile-time truthy", 1) {
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : "TURBOPACK unreachable";
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : "TURBOPACK unreachable";
    }
    let renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinPaths"])([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinPaths"])([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(LocationContext.Provider, {
            value: {
                location: _extends({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, location),
                navigationType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].Pop
            }
        }, renderedMatches);
    }
    return renderedMatches;
}
function DefaultErrorComponent() {
    let error = useRouteError();
    let message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRouteErrorResponse"])(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    if ("TURBOPACK compile-time truthy", 1) {
        console.error("Error handled by React Router default ErrorBoundary:", error);
        devInfo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("code", {
            style: codeStyles
        }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("code", {
            style: codeStyles
        }, "errorElement"), " prop on your route."));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
            return {
                error: props.error,
                location: props.location,
                revalidation: props.revalidation
            };
        }
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(RouteContext.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function RenderedRoute(_ref) {
    let { routeContext, match, children } = _ref;
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState2;
    if (parentMatches === void 0) {
        parentMatches = [];
    }
    if (dataRouterState === void 0) {
        dataRouterState = null;
    }
    if (future === void 0) {
        future = null;
    }
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
            // Don't bail if we have data router errors so we can render them in the
            // boundary.  Use the pre-matched (or shimmed) matches
            matches = dataRouterState.matches;
        } else {
            return null;
        }
    }
    let renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
        !(errorIndex >= 0) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : "TURBOPACK unreachable" : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) {
        for(let i = 0; i < renderedMatches.length; i++){
            let match = renderedMatches[i];
            // Track the deepest fallback up until the first route without data
            if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                fallbackIndex = i;
            }
            if (match.route.id) {
                let { loaderData, errors } = dataRouterState;
                let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
                if (match.route.lazy || needsToRunLoader) {
                    // We found the first route that's not ready to render (waiting on
                    // lazy, or has a loader that hasn't run yet).  Flag that we need to
                    // render a fallback and render up until the appropriate fallback
                    renderFallback = true;
                    if (fallbackIndex >= 0) {
                        renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                    } else {
                        renderedMatches = [
                            renderedMatches[0]
                        ];
                    }
                    break;
                }
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) {
                children = errorElement;
            } else if (shouldRenderHydrateFallback) {
                children = hydrateFallbackElement;
            } else if (match.route.Component) {
                // Note: This is a de-optimized path since React won't re-use the
                // ReactElement since it's identity changes with each new
                // React.createElement call.  We keep this so folks can use
                // `<Route Component={...}>` in `<Routes>` but generally `Component`
                // usage is only advised in `RouterProvider` when we can convert it to
                // `element` ahead of time.
                children = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(match.route.Component, null);
            } else if (match.route.element) {
                children = match.route.element;
            } else {
                children = outlet;
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet,
                    matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    let ctx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(DataRouterContext);
    !ctx ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, getDataRouterConsoleError(hookName)) : "TURBOPACK unreachable" : void 0;
    return ctx;
}
function useDataRouterState(hookName) {
    let state = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(DataRouterStateContext);
    !state ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, getDataRouterConsoleError(hookName)) : "TURBOPACK unreachable" : void 0;
    return state;
}
function useRouteContext(hookName) {
    let route = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    !route ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, getDataRouterConsoleError(hookName)) : "TURBOPACK unreachable" : void 0;
    return route;
}
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, hookName + " can only be used on routes that contain a unique \"id\"") : "TURBOPACK unreachable" : void 0;
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    let state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    let { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>matches.map((m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_convertRouteMatchToUiMatch"])(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    let state = useDataRouterState(DataRouterStateHook.UseActionData);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    var _state$errors;
    let error = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) {
        return error;
    }
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function useAsyncValue() {
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function useAsyncError() {
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    let { router, basename } = useDataRouterContext(DataRouterHook.UseBlocker);
    let state = useDataRouterState(DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState("");
    let blockerFunction = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") {
            return !!shouldBlock;
        }
        if (basename === "/") {
            return shouldBlock(arg);
        }
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation, nextLocation, historyAction } = arg;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripBasename"])(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripBasename"])(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        let key = String(++blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (blockerKey !== "") {
            router.getBlocker(blockerKey, blockerFunction);
        }
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IDLE_BLOCKER"];
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    let { router } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    let activeRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(activeRef.current, navigateEffectWarning) : "TURBOPACK unreachable";
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            router.navigate(to);
        } else {
            router.navigate(to, _extends({
                fromRouteId: id
            }, options));
        }
    }, [
        router,
        id
    ]);
    return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(false, message) : "TURBOPACK unreachable";
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const START_TRANSITION = "startTransition";
const startTransitionImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    let { fallbackElement, router, future } = _ref;
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(router.state);
    let { v7_startTransition } = future || {};
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((newState)=>{
        if (v7_startTransition && startTransitionImpl) {
            startTransitionImpl(()=>setStateImpl(newState));
        } else {
            setStateImpl(newState);
        }
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : "TURBOPACK unreachable";
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
    let { routes, future, state } = _ref2;
    return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    let { basename, children, initialEntries, initialIndex, future } = _ref3;
    let historyRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    if (historyRef.current == null) {
        historyRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMemoryHistory"])({
            initialEntries,
            initialIndex,
            v5Compat: true
        });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition } = future || {};
    let setState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    let { to, replace, state, relative } = _ref4;
    !useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.") : "TURBOPACK unreachable" : void 0;
    let { future, static: isStatic } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(NavigationContext);
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : "TURBOPACK unreachable";
    let { matches } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTo"])(to, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_getResolveToMatches"])(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace,
            state,
            relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : "TURBOPACK unreachable";
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    let { basename: basenameProp = "/", children = null, location: locationProp, navigationType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].Pop, navigator, static: staticProp = false, future } = _ref5;
    !!useInRouterContext() ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : "TURBOPACK unreachable" : void 0;
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>({
            basename,
            navigator,
            static: staticProp,
            future: _extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") {
        locationProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePath"])(locationProp);
    }
    let { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
    let locationContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        let trailingPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripBasename"])(pathname, basename);
        if (trailingPathname == null) {
            return null;
        }
        return {
            location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
            },
            navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : "TURBOPACK unreachable";
    if (locationContext == null) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    let { children, location } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    let { children, errorElement, resolve } = _ref7;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(()=>{});
class AwaitErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children, errorElement, resolve } = this.props;
        let promise = null;
        let status = AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === AwaitRenderStatus.error && promise._error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbortedDeferredError"]) {
            // Freeze the UI by throwing a never resolved promise
            throw neverSettledPromise;
        }
        if (status === AwaitRenderStatus.error && !errorElement) {
            // No errorElement, throw to the nearest route-level error boundary
            throw promise._error;
        }
        if (status === AwaitRenderStatus.error) {
            // Render via our errorElement
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(AwaitContext.Provider, {
                value: promise,
                children: errorElement
            });
        }
        if (status === AwaitRenderStatus.success) {
            // Render children with resolved value
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(AwaitContext.Provider, {
                value: promise,
                children: children
            });
        }
        // Throw to the suspense boundary
        throw promise;
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function ResolveAwait(_ref8) {
    let { children } = _ref8;
    let data = useAsyncValue();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
        parentPath = [];
    }
    let routes = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(element)) {
            // Ignore non-elements. This allows people to more easily inline
            // conditionals in their route config.
            return;
        }
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : "TURBOPACK unreachable" : void 0;
        !(!element.props.index || !element.props.children) ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_invariant"])(false, "An index route cannot have child routes.") : "TURBOPACK unreachable" : void 0;
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.element) {
                ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : "TURBOPACK unreachable";
            }
        }
        Object.assign(updates, {
            element: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.HydrateFallback) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.hydrateFallbackElement) {
                ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : "TURBOPACK unreachable";
            }
        }
        Object.assign(updates, {
            hydrateFallbackElement: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(route.HydrateFallback),
            HydrateFallback: undefined
        });
    }
    if (route.ErrorBoundary) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (route.errorElement) {
                ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_warning"])(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : "TURBOPACK unreachable";
            }
        }
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRouter"])({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$remix$2d$run$2f$router$2f$dist$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMemoryHistory"])({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes,
        mapRouteProperties,
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy
    }).initialize();
}
;
}),
];

//# sourceMappingURL=_07wz~a5._.js.map