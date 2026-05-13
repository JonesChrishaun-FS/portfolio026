module.exports = [
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SLOT",
    ()=>$7230ffa83bc0c2cf$export$c62b8e45d58ddad9,
    "Provider",
    ()=>$7230ffa83bc0c2cf$export$2881499e37b75b9a,
    "composeRenderProps",
    ()=>$7230ffa83bc0c2cf$export$c245e6201fed2f75,
    "dom",
    ()=>$7230ffa83bc0c2cf$export$df3a06d6289f983e,
    "removeDataAttributes",
    ()=>$7230ffa83bc0c2cf$export$ef03459518577ad4,
    "useContextProps",
    ()=>$7230ffa83bc0c2cf$export$29f1550f4b0d4415,
    "useRenderProps",
    ()=>$7230ffa83bc0c2cf$export$4d86445c2cf5e3,
    "useSlot",
    ()=>$7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8,
    "useSlottedContext",
    ()=>$7230ffa83bc0c2cf$export$fabf2dc03a41866e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = Symbol('default');
function $7230ffa83bc0c2cf$export$2881499e37b75b9a({ values: values, children: children }) {
    for (let [Context, value] of values)children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values, render: render } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let computedClassName;
        let computedStyle;
        let computedChildren;
        if (typeof className === 'function') computedClassName = className({
            ...values,
            defaultClassName: defaultClassName
        });
        else computedClassName = className;
        if (typeof style === 'function') computedStyle = style({
            ...values,
            defaultStyle: defaultStyle || {}
        });
        else computedStyle = style;
        if (typeof children === 'function') computedChildren = children({
            ...values,
            defaultChildren: defaultChildren
        });
        else if (children == null) computedChildren = defaultChildren;
        else computedChildren = children;
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle || defaultStyle ? {
                ...defaultStyle,
                ...computedStyle
            } : undefined,
            children: computedChildren ?? defaultChildren,
            'data-rac': '',
            render: render ? (props)=>render(props, values) : undefined
        };
    }, [
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        defaultStyle,
        values,
        render
    ]);
}
function $7230ffa83bc0c2cf$export$c245e6201fed2f75(value, wrap) {
    return (renderProps)=>wrap(typeof value === 'function' ? value(renderProps) : value, renderProps);
}
function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(context);
    if (slot === null) return null;
    if (ctx && typeof ctx === 'object' && 'slots' in ctx && ctx.slots) {
        let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
        if (!ctx.slots[slotKey]) {
            let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p)=>`"${p}"`));
            let errorMessage = slot ? `Invalid slot "${slot}".` : 'A slot prop is required.';
            throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
        }
        return ctx.slots[slotKey];
    }
    // @ts-ignore
    return ctx;
}
function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
    let ctx = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
    let { ref: contextRef, ...contextProps } = ctx;
    let mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useObjectRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(contextProps, props);
    // mergeProps does not merge `style`. Adding this there might be a breaking change.
    if ('style' in contextProps && contextProps.style && 'style' in props && props.style) {
        if (typeof contextProps.style === 'function' || typeof props.style === 'function') mergedProps.style = (renderProps)=>{
            let contextStyle = typeof contextProps.style === 'function' ? contextProps.style(renderProps) : contextProps.style;
            let defaultStyle = {
                ...renderProps.defaultStyle,
                ...contextStyle
            };
            let style = typeof props.style === 'function' ? props.style({
                ...renderProps,
                defaultStyle: defaultStyle
            }) : props.style;
            return {
                ...defaultStyle,
                ...style
            };
        };
        else mergedProps.style = {
            ...contextProps.style,
            ...props.style
        };
    }
    return [
        mergedProps,
        mergedRef
    ];
}
function $7230ffa83bc0c2cf$export$9d4c57ee4c6ffdd8(initialState = true) {
    // Initial state is typically based on the parent having an aria-label or aria-labelledby.
    // If it does, this value should be false so that we don't update the state and cause a rerender when we go through the layoutEffect
    let [hasSlot, setHasSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    let hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!hasRun.current) setHasSlot(false);
    }, []);
    return [
        ref,
        hasSlot
    ];
}
function $7230ffa83bc0c2cf$export$ef03459518577ad4(props) {
    const prefix = /^(data-.*)$/;
    let filteredProps = {};
    for(const prop in props)if (!prefix.test(prop)) filteredProps[prop] = props[prop];
    return filteredProps;
}
function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
    let { render: render, ...otherProps } = props;
    let elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRefs"])(forwardedRef, elementRef), [
        forwardedRef,
        elementRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (("TURBOPACK compile-time value", "development") !== 'production' && render) {
            if (!elementRef.current) console.warn('Ref was not connected to DOM element returned by custom `render` function. Did you forget to pass through or merge the `ref`?');
            else if (elementRef.current.localName !== ElementType) console.warn(`Unexpected DOM element returned by custom \`render\` function. Expected <${ElementType}>, got <${elementRef.current.localName}>. This may break the component behavior and accessibility.`);
        }
    }, [
        ElementType,
        render
    ]);
    let domProps = {
        ...otherProps,
        ref: ref
    };
    if (render) return render(domProps, undefined);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, domProps);
}
const $7230ffa83bc0c2cf$var$domComponentCache = {};
const $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, {
    get (target, elementType) {
        if (typeof elementType !== 'string') return undefined;
        let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
        if (!res) {
            res = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
            $7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
        }
        return res;
    }
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>$43a3b93638fe5db9$export$b04be29aa201d4f5,
    "LabelContext",
    ()=>$43a3b93638fe5db9$export$75b6ee27786ba447
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $43a3b93638fe5db9$export$75b6ee27786ba447 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const $43a3b93638fe5db9$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHideableComponent"])(function Label(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $43a3b93638fe5db9$export$75b6ee27786ba447);
    let { elementType: elementType = 'label', ...labelProps } = props;
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"])[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ProgressBar.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressBar",
    ()=>$6c0095e7e99364f2$export$c17561cb55d4db30,
    "ProgressBarContext",
    ()=>$6c0095e7e99364f2$export$e9f3bf65a26ce129
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$progress$2f$useProgressBar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/progress/useProgressBar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/utils/number.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6c0095e7e99364f2$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $6c0095e7e99364f2$export$c17561cb55d4db30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ProgressBar(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $6c0095e7e99364f2$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$number$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(value, minValue, maxValue);
    let [labelRef, label] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlot"])(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$progress$2f$useProgressBar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgressBar"])({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = isIndeterminate ? undefined : (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage: percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate: isIndeterminate
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, progressBarProps),
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelContext"]).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: 'span'
        }
    }, renderProps.children));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Button.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>$7705c033048f6da7$export$353f5b6fc5456de1,
    "ButtonContext",
    ()=>$7705c033048f6da7$export$24d547caef80ccd1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$ProgressBar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ProgressBar.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/button/useButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useId.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $7705c033048f6da7$export$24d547caef80ccd1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const $7705c033048f6da7$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHideableComponent"])(function Button(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $7705c033048f6da7$export$24d547caef80ccd1);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useButton"])(props, ref);
    buttonProps = $7705c033048f6da7$var$useDisableInteractions(buttonProps, isPending);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusRing"])(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHover"])({
        ...props,
        isDisabled: props.isDisabled || isPending
    });
    let renderValues = {
        isHovered: isHovered,
        isPressed: (ctx.isPressed || isPressed) && !isPending,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        isDisabled: props.isDisabled || false,
        isPending: isPending ?? false
    };
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(buttonProps.id);
    let progressId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isPending);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["announce"])(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["announce"])(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).button, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
        // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
        // We do this by changing the button's type to button.
        type: buttonProps.type === 'submit' && isPending ? 'button' : buttonProps.type,
        id: buttonId,
        ref: ref,
        "aria-labelledby": ariaLabelledby,
        slot: props.slot || undefined,
        "aria-disabled": isPending ? 'true' : buttonProps['aria-disabled'],
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": renderValues.isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-pending": isPending || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$ProgressBar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressBarContext"]).Provider, {
        value: {
            id: progressId
        }
    }, renderProps.children));
});
// Events to preserve when isPending is true (for tooltips and other overlays)
const $7705c033048f6da7$var$PRESERVED_EVENT_PATTERN = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
function $7705c033048f6da7$var$useDisableInteractions(props, isPending) {
    if (isPending) {
        for(const key in props)if (key.startsWith('on') && !$7705c033048f6da7$var$PRESERVED_EVENT_PATTERN.test(key)) props[key] = undefined;
        props.href = undefined;
        props.target = undefined;
    }
    return props;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Group.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Group",
    ()=>$3a442827418ebe87$export$eb2fcfdbd7ba97d4,
    "GroupContext",
    ()=>$3a442827418ebe87$export$f9c6924e160136d1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $3a442827418ebe87$export$f9c6924e160136d1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const $3a442827418ebe87$export$eb2fcfdbd7ba97d4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Group(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $3a442827418ebe87$export$f9c6924e160136d1);
    let { isDisabled: isDisabled, isInvalid: isInvalid, isReadOnly: isReadOnly, onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    isDisabled ??= !!props['aria-disabled'] && props['aria-disabled'] !== 'false';
    isInvalid ??= !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHover"])({
        onHoverStart: onHoverStart,
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd,
        isDisabled: isDisabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusRing"])({
        within: true
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            isHovered: isHovered,
            isFocusWithin: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Group'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(otherProps, focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        role: props.role ?? 'group',
        slot: props.slot ?? undefined,
        "data-focus-within": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-invalid": isInvalid || undefined,
        "data-readonly": isReadOnly || undefined
    }, renderProps.children);
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedElement",
    ()=>$792f28e438b9ad5f$export$c34620ff8881d89f,
    "SharedElementTransition",
    ()=>$792f28e438b9ad5f$export$758399f318e6385a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
/*
 * Copyright 2025 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $792f28e438b9ad5f$var$SharedElementContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function $792f28e438b9ad5f$export$758399f318e6385a(props) {
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement($792f28e438b9ad5f$var$SharedElementContext.Provider, {
        value: ref
    }, props.children);
}
const $792f28e438b9ad5f$export$c34620ff8881d89f = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function SharedElement(props, ref) {
    let { name: name, isVisible: isVisible = true, children: children, className: className, style: style, render: render, ...divProps } = props;
    let [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isVisible ? 'visible' : 'hidden');
    let scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])($792f28e438b9ad5f$var$SharedElementContext);
    if (!scopeRef) throw new Error('<SharedElement> must be rendered inside a <SharedElementTransition>');
    if (isVisible && state === 'hidden') setState('visible');
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let element = ref.current;
        let scope = scopeRef.current;
        let prevSnapshot = scope[name];
        let frame = null;
        if (element && isVisible && prevSnapshot) {
            // Element is transitioning from a previous instance.
            setState('visible');
            let animations = element.getAnimations();
            // Set properties to animate from.
            let values = prevSnapshot.style.map(([property, prevValue])=>{
                let value = element.style[property];
                if (property === 'translate') {
                    let prevRect = prevSnapshot.rect;
                    let currentItem = element.getBoundingClientRect();
                    let deltaX = prevRect.left - currentItem?.left;
                    let deltaY = prevRect.top - currentItem?.top;
                    element.style.translate = `${deltaX}px ${deltaY}px`;
                } else element.style[property] = prevValue;
                return [
                    property,
                    value
                ];
            });
            // Cancel any new animations triggered by these properties.
            for (let a of element.getAnimations())if (!animations.includes(a)) a.cancel();
            // Remove overrides after one frame to animate to the current values.
            frame = requestAnimationFrame(()=>{
                frame = null;
                for (let [property, value] of values)element.style[property] = value;
            });
            delete scope[name];
        } else if (element && isVisible && !prevSnapshot) {
            // No previous instance exists, apply the entering state.
            queueMicrotask(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>setState('entering')));
            frame = requestAnimationFrame(()=>{
                frame = null;
                setState('visible');
            });
        } else if (element && !isVisible) // If so, no new SharedElement consumed it, so enter the exiting state.
        queueMicrotask(()=>{
            if (scope[name]) {
                delete scope[name];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>setState('exiting'));
                Promise.all(element.getAnimations().map((a)=>a.finished)).then(()=>setState('hidden')).catch(()=>{});
            } else setState('hidden');
        });
        return ()=>{
            if (frame != null) cancelAnimationFrame(frame);
            if (element && element.isConnected && !element.hasAttribute('data-exiting')) {
                // On unmount, store a snapshot of the rectangle and computed style for transitioning properties.
                let style = window.getComputedStyle(element);
                if (style.transitionProperty !== 'none') {
                    let transitionProperty = style.transitionProperty.split(/\s*,\s*/);
                    scope[name] = {
                        rect: element.getBoundingClientRect(),
                        style: transitionProperty.map((p)=>[
                                p,
                                style[p]
                            ])
                    };
                }
            }
        };
    }, [
        ref,
        scopeRef,
        name,
        isVisible
    ]);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        children: children,
        className: className,
        style: style,
        render: render,
        values: {
            isEntering: state === 'entering',
            isExiting: state === 'exiting'
        }
    });
    if (state === 'hidden') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...divProps,
        ...renderProps,
        ref: ref,
        "data-entering": state === 'entering' || undefined,
        "data-exiting": state === 'exiting' || undefined
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ToggleButtonGroup.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleButtonGroup",
    ()=>$bc25b811ec97a172$export$40258cc1d95ff477,
    "ToggleButtonGroupContext",
    ()=>$bc25b811ec97a172$export$298258635ae0dd97,
    "ToggleGroupStateContext",
    ()=>$bc25b811ec97a172$export$a8a71863db173133
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useToggleButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/button/useToggleButtonGroup.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$toggle$2f$useToggleGroupState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/toggle/useToggleGroupState.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $bc25b811ec97a172$export$298258635ae0dd97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const $bc25b811ec97a172$export$a8a71863db173133 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $bc25b811ec97a172$export$40258cc1d95ff477 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ToggleButtonGroup(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $bc25b811ec97a172$export$298258635ae0dd97);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$toggle$2f$useToggleGroupState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToggleGroupState"])(props);
    let { groupProps: groupProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useToggleButtonGroup$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToggleButtonGroup"])(props, state, ref);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            orientation: props.orientation || 'horizontal',
            isDisabled: state.isDisabled,
            state: state
        },
        defaultClassName: 'react-aria-ToggleButtonGroup'
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-orientation": props.orientation || 'horizontal',
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement($bc25b811ec97a172$export$a8a71863db173133.Provider, {
        value: state
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SharedElementTransition"]), null, renderProps.children)));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Link.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>$984a1fc08f87e4f3$export$a6c7ac8248d6e38a,
    "LinkContext",
    ()=>$984a1fc08f87e4f3$export$e2509388b49734e7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$link$2f$useLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/link/useLink.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $984a1fc08f87e4f3$export$e2509388b49734e7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $984a1fc08f87e4f3$export$a6c7ac8248d6e38a = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Link(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $984a1fc08f87e4f3$export$e2509388b49734e7);
    let elementType = props.href && !props.isDisabled ? 'a' : 'span';
    let { linkProps: linkProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$link$2f$useLink$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLink"])({
        ...props,
        elementType: elementType
    }, ref);
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"])[elementType];
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHover"])(props);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        defaultClassName: 'react-aria-Link',
        values: {
            isCurrent: !!props['aria-current'],
            isDisabled: props.isDisabled || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        ref: ref,
        slot: props.slot || undefined,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, linkProps, hoverProps, focusProps),
        "data-focused": isFocused || undefined,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-current": !!props['aria-current'] || undefined,
        "data-disabled": props.isDisabled || undefined
    }, renderProps.children);
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>$efe09c6d1c304b50$export$5f1af8db9871e1d6,
    "TextContext",
    ()=>$efe09c6d1c304b50$export$9afb8bc826b033ea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $efe09c6d1c304b50$export$9afb8bc826b033ea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const $efe09c6d1c304b50$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Text(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $efe09c6d1c304b50$export$9afb8bc826b033ea);
    let { elementType: elementType = 'span', ...domProps } = props;
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"])[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/FieldError.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>$1f3c3b1a70cec653$export$f551688fc98f2e09,
    "FieldErrorContext",
    ()=>$1f3c3b1a70cec653$export$ff05c3ac10437e03
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $1f3c3b1a70cec653$export$ff05c3ac10437e03 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $1f3c3b1a70cec653$export$f551688fc98f2e09 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function FieldError(props, ref) {
    let validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])($1f3c3b1a70cec653$export$ff05c3ac10437e03);
    if (!validation?.isInvalid) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement($1f3c3b1a70cec653$var$FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const $1f3c3b1a70cec653$var$FieldErrorInner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    let validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])($1f3c3b1a70cec653$export$ff05c3ac10437e03);
    let { elementType: elementType, ...restProps } = props;
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(restProps, {
        global: true
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...restProps,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]), {
        slot: "errorMessage",
        elementType: elementType,
        ...domProps,
        ...renderProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Autocomplete.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Autocomplete",
    ()=>$4b38b5b75ecc6208$export$2f2b9559550c7bbc,
    "AutocompleteContext",
    ()=>$4b38b5b75ecc6208$export$36e687af51cd0967,
    "AutocompleteStateContext",
    ()=>$4b38b5b75ecc6208$export$68ee3368b6d68148,
    "FieldInputContext",
    ()=>$4b38b5b75ecc6208$export$698f465ec27e93df,
    "SelectableCollectionContext",
    ()=>$4b38b5b75ecc6208$export$b0d3ecf7112093a7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$autocomplete$2f$useAutocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/autocomplete/useAutocomplete.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$autocomplete$2f$useAutocompleteState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/autocomplete/useAutocompleteState.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $4b38b5b75ecc6208$export$36e687af51cd0967 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$68ee3368b6d68148 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$b0d3ecf7112093a7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$698f465ec27e93df = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function $4b38b5b75ecc6208$export$2f2b9559550c7bbc(props) {
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlottedContext"])($4b38b5b75ecc6208$export$36e687af51cd0967, props.slot);
    props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(ctx, props);
    let { filter: filter, disableAutoFocusFirst: disableAutoFocusFirst } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$autocomplete$2f$useAutocompleteState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAutocompleteState"])(props);
    let inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let collectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { inputProps: inputProps, collectionProps: collectionProps, collectionRef: mergedCollectionRef, filter: filterFn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$autocomplete$2f$useAutocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAutocomplete"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDataAttributes"])(props),
        filter: filter,
        disableAutoFocusFirst: disableAutoFocusFirst,
        inputRef: inputRef,
        collectionRef: collectionRef
    }, state);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                $4b38b5b75ecc6208$export$68ee3368b6d68148,
                state
            ],
            [
                $4b38b5b75ecc6208$export$698f465ec27e93df,
                {
                    ...inputProps,
                    ref: inputRef
                }
            ],
            [
                $4b38b5b75ecc6208$export$b0d3ecf7112093a7,
                {
                    ...collectionProps,
                    filter: filterFn,
                    ref: mergedCollectionRef
                }
            ]
        ]
    }, props.children);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Form.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>$cdaed739b1139372$export$a7fed597f4b8afd8,
    "FormContext",
    ()=>$cdaed739b1139372$export$c24727297075ec6a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$form$2f$useFormValidationState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/form/useFormValidationState.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $cdaed739b1139372$export$c24727297075ec6a = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $cdaed739b1139372$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function Form(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $cdaed739b1139372$export$c24727297075ec6a);
    let { validationErrors: validationErrors, validationBehavior: validationBehavior = 'native', children: children, className: className, ...domProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).form, {
        noValidate: validationBehavior !== 'native',
        ...domProps,
        ref: ref,
        className: className || 'react-aria-Form'
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement($cdaed739b1139372$export$c24727297075ec6a.Provider, {
        value: {
            ...props,
            validationBehavior: validationBehavior
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$form$2f$useFormValidationState$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormValidationContext"]).Provider, {
        value: validationErrors ?? {}
    }, children)));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Input.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>$41fb335299a4a39e$export$f5b8910cec6cf069,
    "InputContext",
    ()=>$41fb335299a4a39e$export$37fb8590cf2c088c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $41fb335299a4a39e$export$37fb8590cf2c088c = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
let $41fb335299a4a39e$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $41fb335299a4a39e$export$f5b8910cec6cf069 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHideableComponent"])(function Input(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $41fb335299a4a39e$export$37fb8590cf2c088c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHover"])({
        ...props,
        isDisabled: props.disabled
    });
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusRing"])({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-Input'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).input, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])($41fb335299a4a39e$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TextArea.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextArea",
    ()=>$bd263d78e9bf3c56$export$f5c9f3c2c4054eec,
    "TextAreaContext",
    ()=>$bd263d78e9bf3c56$export$2dc6166a7e65358c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const $bd263d78e9bf3c56$export$2dc6166a7e65358c = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
let $bd263d78e9bf3c56$var$filterHoverProps = (props)=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, ...otherProps } = props;
    return otherProps;
};
const $bd263d78e9bf3c56$export$f5c9f3c2c4054eec = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function TextArea(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $bd263d78e9bf3c56$export$2dc6166a7e65358c);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHover"])(props);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusRing"])({
        isTextInput: true,
        autoFocus: props.autoFocus
    });
    let isInvalid = !!props['aria-invalid'] && props['aria-invalid'] !== 'false';
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: props.disabled || false,
            isInvalid: isInvalid
        },
        defaultClassName: 'react-aria-TextArea'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).textarea, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])($bd263d78e9bf3c56$var$filterHoverProps(props), focusProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-disabled": props.disabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-invalid": isInvalid || undefined
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TextField.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextField",
    ()=>$b8dcdc58eeae0d40$export$2c73285ae9390cec,
    "TextFieldContext",
    ()=>$b8dcdc58eeae0d40$export$2129e27b3ef0d483
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$FieldError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/FieldError.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Autocomplete.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Form$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Form.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Input.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$TextArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TextArea.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$textfield$2f$useTextField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/textfield/useTextField.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $b8dcdc58eeae0d40$export$2129e27b3ef0d483 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const $b8dcdc58eeae0d40$export$2c73285ae9390cec = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHideableComponent"])(function TextField(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $b8dcdc58eeae0d40$export$2129e27b3ef0d483);
    let { validationBehavior: formValidationBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlottedContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Form$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormContext"])) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    [props, inputRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContextProps"])(props, inputRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldInputContext"]));
    let [labelRef, label] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlot"])(!props['aria-label'] && !props['aria-labelledby']);
    let [inputElementType, setInputElementType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('input');
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$textfield$2f$useTextField$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTextField"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDataAttributes"])(props),
        inputElementType: inputElementType,
        label: label,
        validationBehavior: validationBehavior
    }, inputRef);
    // Intercept setting the input ref so we can determine what kind of element we have.
    // useTextField uses this to determine what props to include.
    let inputOrTextAreaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((el)=>{
        inputRef.current = el;
        if (el) setInputElementType(el instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, [
        inputRef
    ]);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            isDisabled: props.isDisabled || false,
            isInvalid: validation.isInvalid,
            isReadOnly: props.isReadOnly || false,
            isRequired: props.isRequired || false
        },
        defaultClassName: 'react-aria-TextField'
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...DOMProps,
        ...renderProps,
        ref: ref,
        slot: props.slot || undefined,
        "data-disabled": props.isDisabled || undefined,
        "data-invalid": validation.isInvalid || undefined,
        "data-readonly": props.isReadOnly || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelContext"]),
                {
                    ...labelProps,
                    ref: labelRef
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputContext"]),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$TextArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAreaContext"]),
                {
                    ...inputProps,
                    ref: inputOrTextAreaRef
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroupContext"]),
                {
                    role: 'presentation',
                    isInvalid: validation.isInvalid,
                    isDisabled: props.isDisabled || false
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextContext"]),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$FieldError$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FieldErrorContext"]),
                validation
            ]
        ]
    }, renderProps.children));
});
;
}),
];

//# sourceMappingURL=0ahy_react-aria-components_dist_private_0a2j~10._.js.map