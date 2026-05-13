module.exports = [
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-rsc] (ecmascript)");
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
    for (let [Context, value] of values)children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(Context.Provider, {
        value: value
    }, children);
    return children;
}
function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
    let { className: className, style: style, children: children, defaultClassName: defaultClassName, defaultChildren: defaultChildren, defaultStyle: defaultStyle, values: values, render: render } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])(context);
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
    let mergedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRefs"])(ref, contextRef), [
        ref,
        contextRef
    ]));
    let mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(contextProps, props);
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
    let [hasSlot, setHasSlot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(initialState);
    let hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(false);
    // A callback ref which will run when the slotted element mounts.
    // This should happen before the useLayoutEffect below.
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((el)=>{
        hasRun.current = true;
        setHasSlot(!!el);
    }, []);
    // If the callback hasn't been called, then reset to false.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
    let elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRefs"])(forwardedRef, elementRef), [
        forwardedRef,
        elementRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, domProps);
}
const $7230ffa83bc0c2cf$var$domComponentCache = {};
const $7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, {
    get (target, elementType) {
        if (typeof elementType !== 'string') return undefined;
        let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
        if (!res) {
            res = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
            $7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
        }
        return res;
    }
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Collection.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionRendererContext",
    ()=>$263ab7fc0f95ccdb$export$4feb769f8ddf26c5,
    "DefaultCollectionRenderer",
    ()=>$263ab7fc0f95ccdb$export$a164736487e3f0ae,
    "Section",
    ()=>$263ab7fc0f95ccdb$export$6e2c8f0811a474ce,
    "SectionContext",
    ()=>$263ab7fc0f95ccdb$export$d40e14dec8b060a8,
    "renderAfterDropIndicators",
    ()=>$263ab7fc0f95ccdb$export$2dbbd341daed716d,
    "usePersistedKeys",
    ()=>$263ab7fc0f95ccdb$export$90e00781bc59d8f9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$useCachedChildren$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/useCachedChildren.mjs [app-rsc] (ecmascript)");
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
 */ const $263ab7fc0f95ccdb$export$d40e14dec8b060a8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $263ab7fc0f95ccdb$export$6e2c8f0811a474ce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranchComponent"])('section', (props, ref, section)=>{
    let { name: name, render: render } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($263ab7fc0f95ccdb$export$d40e14dec8b060a8);
    if ("TURBOPACK compile-time truthy", 1) console.warn(`<Section> is deprecated. Please use <${name}> instead.`);
    return render(props, ref, section, 'react-aria-Section');
});
const $263ab7fc0f95ccdb$export$a164736487e3f0ae = {
    CollectionRoot ({ collection: collection, renderDropIndicator: renderDropIndicator }) {
        return $263ab7fc0f95ccdb$var$useCollectionRender(collection, null, renderDropIndicator);
    },
    CollectionBranch ({ collection: collection, parent: parent, renderDropIndicator: renderDropIndicator }) {
        return $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator);
    }
};
function $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$useCachedChildren$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCachedChildren"])({
        items: parent ? collection.getChildren(parent.key) : collection,
        dependencies: [
            renderDropIndicator
        ],
        children (node) {
            // Return a empty fragment since we don't want to render the content twice
            // If we don't skip the content node here, we end up rendering them twice in a Tree since we also render the content node in TreeItem
            if (node.type === 'content') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null);
            let rendered = node.render(node);
            if (!renderDropIndicator || node.type !== 'item') return rendered;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null, renderDropIndicator({
                type: 'item',
                key: node.key,
                dropPosition: 'before'
            }), rendered, $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator));
        }
    });
}
function $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator) {
    let key = node.key;
    let keyAfter = collection.getKeyAfter(key);
    let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    while(nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== 'item'){
        keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
        nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
    }
    let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
    while(nextItemInSameLevel != null && nextItemInSameLevel.type !== 'item')nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
    // Render one or more "after" drop indicators when the next item in the flattened collection
    // has a smaller level, is not an item, or there are no more items in the collection.
    // Otherwise, the "after" position is equivalent to the next item's "before" position.
    let afterIndicators = [];
    if (nextItemInSameLevel == null) {
        let current = node;
        while(current?.type === 'item' && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)){
            let indicator = renderDropIndicator({
                type: 'item',
                key: current.key,
                dropPosition: 'after'
            });
            if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidElement"])(indicator)) afterIndicators.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(indicator, {
                key: `${current.key}-after`
            }));
            current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
        }
    }
    return afterIndicators;
}
const $263ab7fc0f95ccdb$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])($263ab7fc0f95ccdb$export$a164736487e3f0ae);
function $263ab7fc0f95ccdb$export$90e00781bc59d8f9(focusedKey) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>focusedKey != null ? new Set([
            focusedKey
        ]) : null, [
        focusedKey
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/DragAndDrop.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragAndDropContext",
    ()=>$f9554a667e4f0374$export$d188a835a7bc5783,
    "DropIndicator",
    ()=>$f9554a667e4f0374$export$62ed72bc21f6b8a6,
    "DropIndicatorContext",
    ()=>$f9554a667e4f0374$export$f55761759794cf55,
    "useDndPersistedKeys",
    ()=>$f9554a667e4f0374$export$d1e8e3fbb7461f6,
    "useRenderDropIndicator",
    ()=>$f9554a667e4f0374$export$971707d8a129a1f7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $f9554a667e4f0374$export$d188a835a7bc5783 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
const $f9554a667e4f0374$export$f55761759794cf55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $f9554a667e4f0374$export$62ed72bc21f6b8a6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function DropIndicator(props, ref) {
    let { render: render } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($f9554a667e4f0374$export$f55761759794cf55);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null, render(props, ref));
});
function $f9554a667e4f0374$export$971707d8a129a1f7(dragAndDropHooks, dropState) {
    let renderDropIndicator = dragAndDropHooks?.renderDropIndicator;
    let isVirtualDragging = dragAndDropHooks?.isVirtualDragging?.();
    let fn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((target)=>{
        // Only show drop indicators when virtual dragging or this is the current drop target.
        if (isVirtualDragging || dropState?.isDropTarget(target)) return renderDropIndicator ? renderDropIndicator(target) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($f9554a667e4f0374$export$62ed72bc21f6b8a6, {
            target: target
        });
    // We invalidate whenever the target changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        dropState?.target,
        isVirtualDragging,
        renderDropIndicator
    ]);
    return dragAndDropHooks?.useDropIndicator ? fn : undefined;
}
function $f9554a667e4f0374$export$d1e8e3fbb7461f6(selectionManager, dragAndDropHooks, dropState) {
    // Persist the focused key and the drop target key.
    let focusedKey = selectionManager.focusedKey;
    let dropTargetKey = null;
    if (dragAndDropHooks?.isVirtualDragging?.() && dropState?.target?.type === 'item') {
        dropTargetKey = dropState.target.key;
        if (dropState.target.dropPosition === 'after') {
            // Normalize to the "before" drop position since we only render those to the DOM.
            let nextKey = dropState.collection.getKeyAfter(dropTargetKey);
            let lastDescendantKey = null;
            if (nextKey != null) {
                let targetLevel = dropState.collection.getItem(dropTargetKey)?.level ?? 0;
                // Skip over any rows that are descendants of the target ("after" position should be after all children)
                while(nextKey){
                    let node = dropState.collection.getItem(nextKey);
                    // eslint-disable-next-line max-depth
                    if (!node) break;
                    // Skip over non-item nodes (e.g., loaders) since they can't be drop targets.
                    // eslint-disable-next-line max-depth
                    if (node.type !== 'item') {
                        nextKey = dropState.collection.getKeyAfter(nextKey);
                        continue;
                    }
                    // Stop once we find an item at the same level or higher
                    // eslint-disable-next-line max-depth
                    if ((node.level ?? 0) <= targetLevel) break;
                    lastDescendantKey = nextKey;
                    nextKey = dropState.collection.getKeyAfter(nextKey);
                }
            }
            // If nextKey is null (end of collection), use the last descendant
            dropTargetKey = nextKey ?? lastDescendantKey ?? dropTargetKey;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new Set([
            focusedKey,
            dropTargetKey
        ].filter((k)=>k != null));
    }, [
        focusedKey,
        dropTargetKey
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Header.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>$53e61d82d8b8611d$export$8b251419efc915eb,
    "HeaderContext",
    ()=>$53e61d82d8b8611d$export$e0e4026c12a8bdbb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/BaseCollection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $53e61d82d8b8611d$export$e0e4026c12a8bdbb = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
const $53e61d82d8b8611d$export$8b251419efc915eb = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeaderNode"]), function Header(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $53e61d82d8b8611d$export$e0e4026c12a8bdbb);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).header, {
        className: "react-aria-Header",
        ...props,
        ref: ref
    }, props.children);
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Autocomplete.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$autocomplete$2f$useAutocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/autocomplete/useAutocomplete.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$autocomplete$2f$useAutocompleteState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/autocomplete/useAutocompleteState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $4b38b5b75ecc6208$export$36e687af51cd0967 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$68ee3368b6d68148 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$b0d3ecf7112093a7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $4b38b5b75ecc6208$export$698f465ec27e93df = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
function $4b38b5b75ecc6208$export$2f2b9559550c7bbc(props) {
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlottedContext"])($4b38b5b75ecc6208$export$36e687af51cd0967, props.slot);
    props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(ctx, props);
    let { filter: filter, disableAutoFocusFirst: disableAutoFocusFirst } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$autocomplete$2f$useAutocompleteState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAutocompleteState"])(props);
    let inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let collectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { inputProps: inputProps, collectionProps: collectionProps, collectionRef: mergedCollectionRef, filter: filterFn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$autocomplete$2f$useAutocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useAutocomplete"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeDataAttributes"])(props),
        filter: filter,
        disableAutoFocusFirst: disableAutoFocusFirst,
        inputRef: inputRef,
        collectionRef: collectionRef
    }, state);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
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
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedElement",
    ()=>$792f28e438b9ad5f$export$c34620ff8881d89f,
    "SharedElementTransition",
    ()=>$792f28e438b9ad5f$export$758399f318e6385a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-rsc] (ecmascript)");
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
 */ const $792f28e438b9ad5f$var$SharedElementContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
function $792f28e438b9ad5f$export$758399f318e6385a(props) {
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])({});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($792f28e438b9ad5f$var$SharedElementContext.Provider, {
        value: ref
    }, props.children);
}
const $792f28e438b9ad5f$export$c34620ff8881d89f = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function SharedElement(props, ref) {
    let { name: name, isVisible: isVisible = true, children: children, className: className, style: style, render: render, ...divProps } = props;
    let [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(isVisible ? 'visible' : 'hidden');
    let scopeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($792f28e438b9ad5f$var$SharedElementContext);
    if (!scopeRef) throw new Error('<SharedElement> must be rendered inside a <SharedElementTransition>');
    if (isVisible && state === 'hidden') setState('visible');
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
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
            queueMicrotask(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flushSync"])(()=>setState('entering')));
            frame = requestAnimationFrame(()=>{
                frame = null;
                setState('visible');
            });
        } else if (element && !isVisible) // If so, no new SharedElement consumed it, so enter the exiting state.
        queueMicrotask(()=>{
            if (scope[name]) {
                delete scope[name];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flushSync"])(()=>setState('exiting'));
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
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...divProps,
        ...renderProps,
        ref: ref,
        "data-entering": state === 'entering' || undefined,
        "data-exiting": state === 'exiting' || undefined
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SelectionIndicator.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectionIndicator",
    ()=>$91fe5e721c7f36c1$export$17f80983afe4e444,
    "SelectionIndicatorContext",
    ()=>$91fe5e721c7f36c1$export$c9549807523555e0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $91fe5e721c7f36c1$export$c9549807523555e0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({
    isSelected: false
});
const $91fe5e721c7f36c1$export$17f80983afe4e444 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function SelectionIndicator(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $91fe5e721c7f36c1$export$c9549807523555e0);
    let { isSelected: isSelected, ...otherProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SharedElement"]), {
        ...otherProps,
        ref: ref,
        className: props.className || 'react-aria-SelectionIndicator',
        name: "SelectionIndicator",
        isVisible: isSelected
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Separator.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>$e28ab3efe3e87743$export$1ff3c3f08ae963c0,
    "SeparatorContext",
    ()=>$e28ab3efe3e87743$export$6615d83f6de245ce,
    "SeparatorNode",
    ()=>$e28ab3efe3e87743$export$7750289ca694c0b5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$separator$2f$useSeparator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/separator/useSeparator.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/BaseCollection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $e28ab3efe3e87743$export$6615d83f6de245ce = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
class $e28ab3efe3e87743$export$7750289ca694c0b5 extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionNode"]) {
    static{
        this.type = 'separator';
    }
    filter(collection, newCollection) {
        let prevItem = newCollection.getItem(this.prevKey);
        if (prevItem && prevItem.type !== 'separator') {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
const $e28ab3efe3e87743$export$1ff3c3f08ae963c0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])($e28ab3efe3e87743$export$7750289ca694c0b5, function Separator(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $e28ab3efe3e87743$export$6615d83f6de245ce);
    let { elementType: elementType, orientation: orientation, style: style, className: className, slot: slot, ...otherProps } = props;
    let Element = elementType || 'hr';
    if (Element === 'hr' && orientation === 'vertical') Element = 'div';
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"])[Element];
    let { separatorProps: separatorProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$separator$2f$useSeparator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSeparator"])({
        ...otherProps,
        elementType: elementType,
        orientation: orientation
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        render: props.render,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, separatorProps),
        style: style,
        className: className ?? 'react-aria-Separator',
        ref: ref,
        slot: slot || undefined
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>$efe09c6d1c304b50$export$5f1af8db9871e1d6,
    "TextContext",
    ()=>$efe09c6d1c304b50$export$9afb8bc826b033ea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $efe09c6d1c304b50$export$9afb8bc826b033ea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
const $efe09c6d1c304b50$export$5f1af8db9871e1d6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function Text(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $efe09c6d1c304b50$export$9afb8bc826b033ea);
    let { elementType: elementType = 'span', ...domProps } = props;
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"])[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        className: "react-aria-Text",
        ...domProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ListBox.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListBox",
    ()=>$928221da08ecbc62$export$41f133550aa26f48,
    "ListBoxContext",
    ()=>$928221da08ecbc62$export$7ff8f37d2d81a48d,
    "ListBoxItem",
    ()=>$928221da08ecbc62$export$a11e76429ed99b4,
    "ListBoxLoadMoreItem",
    ()=>$928221da08ecbc62$export$8e6d031a08cf56a1,
    "ListBoxSection",
    ()=>$928221da08ecbc62$export$dca12b0bb56e4fc,
    "ListStateContext",
    ()=>$928221da08ecbc62$export$7c5906fe4f1f2af2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Collection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/DragAndDrop.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Header$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Header.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Autocomplete.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SelectionIndicator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SelectionIndicator.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Separator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Separator.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useListBox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/listbox/useListBox.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useListBoxSection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/listbox/useListBoxSection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useOption$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/listbox/useOption.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$FocusScope$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/FocusScope.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$inertValue$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/inertValue.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/BaseCollection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$selection$2f$ListKeyboardDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$list$2f$useListState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/list/useListState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLoadMoreSentinel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$useCollator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/i18n/useCollator.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useFocus$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useFocus.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useKeyboard$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useKeyboard.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$I18nProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/i18n/I18nProvider.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-rsc] (ecmascript)");
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
 */ const $928221da08ecbc62$export$7ff8f37d2d81a48d = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $928221da08ecbc62$export$7c5906fe4f1f2af2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $928221da08ecbc62$export$41f133550aa26f48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function ListBox(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $928221da08ecbc62$export$7ff8f37d2d81a48d);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($928221da08ecbc62$export$7c5906fe4f1f2af2);
    // The structure of ListBox is a bit strange because it needs to work inside other components like ComboBox and Select.
    // Those components render two copies of their children so that the collection can be built even when the popover is closed.
    // The first copy sends a collection document via context which we render the collection portal into.
    // The second copy sends a ListState object via context which we use to render the ListBox without rebuilding the state.
    // Otherwise, we have a standalone ListBox, so we need to create a collection and state ourselves.
    if (state) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($928221da08ecbc62$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionBuilder"]), {
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collection"]), props)
    }, (collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($928221da08ecbc62$var$StandaloneListBox, {
            props: props,
            listBoxRef: ref,
            collection: collection
        }));
});
function $928221da08ecbc62$var$StandaloneListBox({ props: props, listBoxRef: listBoxRef, collection: collection }) {
    props = {
        ...props,
        collection: collection,
        children: null,
        items: null
    };
    let { layoutDelegate: layoutDelegate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$list$2f$useListState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useListState"])({
        ...props,
        layoutDelegate: layoutDelegate
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($928221da08ecbc62$var$ListBoxInner, {
        state: state,
        props: props,
        listBoxRef: listBoxRef
    });
}
function $928221da08ecbc62$var$ListBoxInner({ state: inputState, props: props, listBoxRef: listBoxRef }) {
    [props, listBoxRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, listBoxRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectableCollectionContext"]));
    let { dragAndDropHooks: dragAndDropHooks, layout: layout = 'stack', orientation: orientation = 'vertical', filter: filter } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$list$2f$useListState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSTABLE_useFilteredListState"])(inputState, filter);
    let { collection: collection, selectionManager: selectionManager } = state;
    let isListDraggable = !!dragAndDropHooks?.useDraggableCollectionState;
    let isListDroppable = !!dragAndDropHooks?.useDroppableCollectionState;
    let { direction: direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$I18nProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLocale"])();
    let { disabledBehavior: disabledBehavior, disabledKeys: disabledKeys } = selectionManager;
    let collator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$useCollator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCollator"])({
        usage: 'search',
        sensitivity: 'base'
    });
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let keyboardDelegate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>props.keyboardDelegate || new (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$selection$2f$ListKeyboardDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListKeyboardDelegate"])({
            collection: collection,
            collator: collator,
            ref: listBoxRef,
            disabledKeys: disabledKeys,
            disabledBehavior: disabledBehavior,
            layout: layout,
            orientation: orientation,
            direction: direction,
            layoutDelegate: layoutDelegate
        }), [
        collection,
        collator,
        listBoxRef,
        disabledBehavior,
        disabledKeys,
        orientation,
        direction,
        props.keyboardDelegate,
        layout,
        layoutDelegate
    ]);
    let { listBoxProps: listBoxProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useListBox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useListBox"])({
        ...props,
        shouldSelectOnPressUp: isListDraggable || props.shouldSelectOnPressUp,
        keyboardDelegate: keyboardDelegate,
        isVirtualized: isVirtualized
    }, state, listBoxRef);
    let dragHooksProvided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(isListDraggable);
    let dropHooksProvided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(isListDroppable);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (dragHooksProvided.current !== isListDraggable) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== isListDroppable) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        isListDraggable,
        isListDroppable
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (isListDraggable && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, listBoxRef);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (isListDroppable && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: collection,
            selectionManager: selectionManager
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection, listBoxRef, {
            orientation: orientation,
            layout: layout,
            direction: direction
        });
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: dropTargetDelegate
        }, dropState, listBoxRef);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let isEmpty = state.collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: isEmpty,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        layout: props.layout || 'stack',
        orientation: orientation,
        state: state
    };
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-ListBox',
        values: renderValues
    });
    let emptyState = null;
    if (isEmpty && props.renderEmptyState) emptyState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        // eslint-disable-next-line
        role: "option",
        style: {
            display: 'contents'
        }
    }, props.renderEmptyState(renderValues));
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$FocusScope$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FocusScope"]), null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, listBoxProps, focusProps, droppableCollection?.collectionProps),
        ref: listBoxRef,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-drop-target": isRootDropTarget || undefined,
        "data-empty": isEmpty || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-layout": props.layout || 'stack',
        "data-orientation": orientation
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                $928221da08ecbc62$export$7ff8f37d2d81a48d,
                props
            ],
            [
                $928221da08ecbc62$export$7c5906fe4f1f2af2,
                state
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Separator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SeparatorContext"]),
                {
                    elementType: 'div'
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DropIndicatorContext"]),
                {
                    render: $928221da08ecbc62$var$ListBoxDropIndicatorWrapper
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionContext"]),
                {
                    name: 'ListBoxSection',
                    render: $928221da08ecbc62$var$ListBoxSectionInner
                }
            ]
        ]
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SharedElementTransition"]), null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionRoot, {
        collection: collection,
        scrollRef: listBoxRef,
        persistedKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDndPersistedKeys"])(selectionManager, dragAndDropHooks, dropState),
        renderDropIndicator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderDropIndicator"])(dragAndDropHooks, dropState)
    }))), emptyState, dragPreview));
}
function $928221da08ecbc62$var$ListBoxSectionInner(props, ref, section, className = 'react-aria-ListBoxSection') {
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let { CollectionBranch: CollectionBranch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let [headingRef, heading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlot"])();
    let { headingProps: headingProps, groupProps: groupProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useListBoxSection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useListBoxSection"])({
        heading: heading,
        'aria-label': props['aria-label'] ?? undefined
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: className,
        values: undefined
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).section, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, groupProps),
        ref: ref
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Header$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeaderContext"]).Provider, {
        value: {
            ...headingProps,
            ref: headingRef
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionBranch, {
        collection: state.collection,
        parent: section,
        renderDropIndicator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderDropIndicator"])(dragAndDropHooks, dropState)
    })));
}
const $928221da08ecbc62$export$dca12b0bb56e4fc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranchComponent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionNode"]), $928221da08ecbc62$var$ListBoxSectionInner);
const $928221da08ecbc62$export$a11e76429ed99b4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ItemNode"]), function ListBoxItem(props, forwardedRef, item) {
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(forwardedRef);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let { optionProps: optionProps, labelProps: labelProps, descriptionProps: descriptionProps, ...states } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$listbox$2f$useOption$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useOption"])({
        key: item.key,
        'aria-label': props?.['aria-label']
    }, state, ref);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: item.props.onHoverStart,
        onHoverChange: item.props.onHoverChange,
        onHoverEnd: item.props.onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useKeyboard$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useKeyboard"])(props);
    let { focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useFocus$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocus"])(props);
    let draggableItem = null;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasAction: states.hasAction
    }, dragState);
    let droppableItem = null;
    if (dropState && dragAndDropHooks) droppableItem = dragAndDropHooks.useDroppableItem({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, ref);
    let isDragging = dragState && dragState.isDragging(item.key);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        id: undefined,
        children: props.children,
        defaultClassName: 'react-aria-ListBoxItem',
        values: {
            ...states,
            isHovered: isHovered,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            allowsDragging: !!dragState,
            isDragging: isDragging,
            isDropTarget: droppableItem?.isDropTarget
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!item.textValue && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.');
    }, [
        item.textValue
    ]);
    let ElementType = props.href ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div;
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    if (props.href && optionProps.tabIndex == null) optionProps.tabIndex = -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, optionProps, hoverProps, keyboardProps, focusProps, draggableItem?.dragProps, droppableItem?.dropProps),
        ref: ref,
        "data-allows-dragging": !!dragState || undefined,
        "data-selected": states.isSelected || undefined,
        "data-disabled": states.isDisabled || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": states.isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": droppableItem?.isDropTarget || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextContext"]),
                {
                    slots: {
                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SLOT"])]: labelProps,
                        label: labelProps,
                        description: descriptionProps
                    }
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SelectionIndicator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectionIndicatorContext"]),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, renderProps.children));
});
function $928221da08ecbc62$var$ListBoxDropIndicatorWrapper(props, ref) {
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, ref);
    if (isHidden) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($928221da08ecbc62$var$ListBoxDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        ref: ref
    });
}
function $928221da08ecbc62$var$ListBoxDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, ...otherProps } = props;
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...dropIndicatorProps,
        ...renderProps,
        role: "option",
        ref: ref,
        "data-drop-target": isDropTarget || undefined
    });
}
const $928221da08ecbc62$var$ListBoxDropIndicatorForwardRef = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])($928221da08ecbc62$var$ListBoxDropIndicator);
const $928221da08ecbc62$export$8e6d031a08cf56a1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoaderNode"]), function ListBoxLoadingIndicator(props, ref, item) {
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($928221da08ecbc62$export$7c5906fe4f1f2af2);
    let { isLoading: isLoading, onLoadMore: onLoadMore, scrollOffset: scrollOffset, ...otherProps } = props;
    let sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let memoedLoadMoreProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            onLoadMore: onLoadMore,
            collection: state?.collection,
            sentinelRef: sentinelRef,
            scrollOffset: scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state?.collection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLoadMoreSentinel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLoadMoreSentinel"])(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-ListBoxLoadingIndicator',
        values: undefined
    });
    let optionProps = {
        // For Android talkback
        tabIndex: -1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        style: {
            position: 'relative',
            width: 0,
            height: 0
        },
        inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$inertValue$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inertValue"])(true)
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        "data-testid": "loadMoreSentinel",
        ref: sentinelRef,
        style: {
            position: 'absolute',
            height: 1,
            width: 1
        }
    })), isLoading && renderProps.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
            global: true
        }), optionProps),
        ...renderProps,
        // aria-selected isn't needed here since this option is not selectable.
        role: "option",
        ref: ref
    }, renderProps.children));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>$43a3b93638fe5db9$export$b04be29aa201d4f5,
    "LabelContext",
    ()=>$43a3b93638fe5db9$export$75b6ee27786ba447
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $43a3b93638fe5db9$export$75b6ee27786ba447 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
const $43a3b93638fe5db9$export$b04be29aa201d4f5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHideableComponent"])(function Label(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $43a3b93638fe5db9$export$75b6ee27786ba447);
    let { elementType: elementType = 'label', ...labelProps } = props;
    let ElementType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"])[elementType];
    // @ts-ignore
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(ElementType, {
        className: "react-aria-Label",
        ...labelProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ProgressBar.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressBar",
    ()=>$6c0095e7e99364f2$export$c17561cb55d4db30,
    "ProgressBarContext",
    ()=>$6c0095e7e99364f2$export$e9f3bf65a26ce129
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$progress$2f$useProgressBar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/progress/useProgressBar.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$number$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/utils/number.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $6c0095e7e99364f2$export$e9f3bf65a26ce129 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $6c0095e7e99364f2$export$c17561cb55d4db30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function ProgressBar(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $6c0095e7e99364f2$export$e9f3bf65a26ce129);
    let { value: value = 0, minValue: minValue = 0, maxValue: maxValue = 100, isIndeterminate: isIndeterminate = false } = props;
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$number$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clamp"])(value, minValue, maxValue);
    let [labelRef, label] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlot"])(!props['aria-label'] && !props['aria-labelledby']);
    let { progressBarProps: progressBarProps, labelProps: labelProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$progress$2f$useProgressBar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useProgressBar"])({
        ...props,
        label: label
    });
    // Calculate the width of the progress bar as a percentage
    let percentage = isIndeterminate ? undefined : (value - minValue) / (maxValue - minValue) * 100;
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        defaultClassName: 'react-aria-ProgressBar',
        values: {
            percentage: percentage,
            valueText: progressBarProps['aria-valuetext'],
            isIndeterminate: isIndeterminate
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, progressBarProps),
        ref: ref,
        slot: props.slot || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabelContext"]).Provider, {
        value: {
            ...labelProps,
            ref: labelRef,
            elementType: 'span'
        }
    }, renderProps.children));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Button.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>$7705c033048f6da7$export$353f5b6fc5456de1,
    "ButtonContext",
    ()=>$7705c033048f6da7$export$24d547caef80ccd1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$ProgressBar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/ProgressBar.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useButton$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/button/useButton.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/Hidden.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useId.mjs [app-rsc] (ecmascript)");
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
 */ const $7705c033048f6da7$export$24d547caef80ccd1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])({});
const $7705c033048f6da7$export$353f5b6fc5456de1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$Hidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHideableComponent"])(function Button(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $7705c033048f6da7$export$24d547caef80ccd1);
    let ctx = props;
    let { isPending: isPending } = ctx;
    let { buttonProps: buttonProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$button$2f$useButton$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useButton"])(props, ref);
    buttonProps = $7705c033048f6da7$var$useDisableInteractions(buttonProps, isPending);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])(props);
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
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
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: renderValues,
        defaultClassName: 'react-aria-Button'
    });
    let buttonId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useId"])(buttonProps.id);
    let progressId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useId"])();
    let ariaLabelledby = buttonProps['aria-labelledby'];
    if (isPending) {
        // aria-labelledby wins over aria-label
        // https://www.w3.org/TR/accname-1.2/#computation-steps
        if (ariaLabelledby) ariaLabelledby = `${ariaLabelledby} ${progressId}`;
        else if (buttonProps['aria-label']) ariaLabelledby = `${buttonId} ${progressId}`;
    }
    let wasPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(isPending);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let message = {
            'aria-labelledby': ariaLabelledby || buttonId
        };
        if (!wasPending.current && isFocused && isPending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["announce"])(message, 'assertive');
        else if (wasPending.current && isFocused && !isPending) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$live$2d$announcer$2f$LiveAnnouncer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["announce"])(message, 'assertive');
        wasPending.current = isPending;
    }, [
        isPending,
        isFocused,
        ariaLabelledby,
        buttonId
    ]);
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).button, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, buttonProps, focusProps, hoverProps),
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
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$ProgressBar$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProgressBarContext"]).Provider, {
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
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/FieldError.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldError",
    ()=>$1f3c3b1a70cec653$export$f551688fc98f2e09,
    "FieldErrorContext",
    ()=>$1f3c3b1a70cec653$export$ff05c3ac10437e03
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $1f3c3b1a70cec653$export$ff05c3ac10437e03 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $1f3c3b1a70cec653$export$f551688fc98f2e09 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function FieldError(props, ref) {
    let validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($1f3c3b1a70cec653$export$ff05c3ac10437e03);
    if (!validation?.isInvalid) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($1f3c3b1a70cec653$var$FieldErrorInner, {
        ...props,
        ref: ref
    });
});
const $1f3c3b1a70cec653$var$FieldErrorInner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    let validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($1f3c3b1a70cec653$export$ff05c3ac10437e03);
    let { elementType: elementType, ...restProps } = props;
    let domProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(restProps, {
        global: true
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...restProps,
        defaultClassName: 'react-aria-FieldError',
        defaultChildren: validation.validationErrors.length === 0 ? undefined : validation.validationErrors.join(' '),
        values: validation
    });
    if (renderProps.children == null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"]), {
        slot: "errorMessage",
        elementType: elementType,
        ...domProps,
        ...renderProps,
        ref: ref
    });
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Form.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>$cdaed739b1139372$export$a7fed597f4b8afd8,
    "FormContext",
    ()=>$cdaed739b1139372$export$c24727297075ec6a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$form$2f$useFormValidationState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/form/useFormValidationState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ const $cdaed739b1139372$export$c24727297075ec6a = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $cdaed739b1139372$export$a7fed597f4b8afd8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function Form(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $cdaed739b1139372$export$c24727297075ec6a);
    let { validationErrors: validationErrors, validationBehavior: validationBehavior = 'native', children: children, className: className, ...domProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).form, {
        noValidate: validationBehavior !== 'native',
        ...domProps,
        ref: ref,
        className: className || 'react-aria-Form'
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($cdaed739b1139372$export$c24727297075ec6a.Provider, {
        value: {
            ...props,
            validationBehavior: validationBehavior
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$form$2f$useFormValidationState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormValidationContext"]).Provider, {
        value: validationErrors ?? {}
    }, children)));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Checkbox.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>$ed8ccb2e23e76301$export$48513f6b9f8ce62d,
    "CheckboxContext",
    ()=>$ed8ccb2e23e76301$export$b085522c77523c51,
    "CheckboxGroup",
    ()=>$ed8ccb2e23e76301$export$4aa08d5625cb8ead,
    "CheckboxGroupContext",
    ()=>$ed8ccb2e23e76301$export$baf37c4be89255b8,
    "CheckboxGroupStateContext",
    ()=>$ed8ccb2e23e76301$export$139c5b8563afc1fc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$FieldError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/FieldError.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Form$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Form.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Label.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Text.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroup$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/checkbox/useCheckboxGroup.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroupItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/checkbox/useCheckboxGroupItem.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/checkbox/useCheckbox.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroupState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/checkbox/useCheckboxGroupState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$toggle$2f$useToggleState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/toggle/useToggleState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs [app-rsc] (ecmascript)");
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
 */ const $ed8ccb2e23e76301$export$b085522c77523c51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $ed8ccb2e23e76301$export$baf37c4be89255b8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $ed8ccb2e23e76301$export$139c5b8563afc1fc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $ed8ccb2e23e76301$export$4aa08d5625cb8ead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function CheckboxGroup(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $ed8ccb2e23e76301$export$baf37c4be89255b8);
    let { validationBehavior: formValidationBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlottedContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Form$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormContext"])) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroupState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCheckboxGroupState"])({
        ...props,
        validationBehavior: validationBehavior
    });
    let [labelRef, label] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlot"])(!props['aria-label'] && !props['aria-labelledby']);
    let { groupProps: groupProps, labelProps: labelProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroup$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCheckboxGroup"])({
        ...props,
        label: label,
        validationBehavior: validationBehavior
    }, state);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        values: {
            isDisabled: state.isDisabled,
            isReadOnly: state.isReadOnly,
            isRequired: props.isRequired || false,
            isInvalid: state.isInvalid,
            state: state
        },
        defaultClassName: 'react-aria-CheckboxGroup'
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, groupProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-readonly": state.isReadOnly || undefined,
        "data-required": props.isRequired || undefined,
        "data-invalid": state.isInvalid || undefined,
        "data-disabled": props.isDisabled || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                $ed8ccb2e23e76301$export$139c5b8563afc1fc,
                state
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Label$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabelContext"]),
                {
                    ...labelProps,
                    ref: labelRef,
                    elementType: 'span'
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Text$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextContext"]),
                {
                    slots: {
                        description: descriptionProps,
                        errorMessage: errorMessageProps
                    }
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$FieldError$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldErrorContext"]),
                validation
            ]
        ]
    }, renderProps.children));
});
const $ed8ccb2e23e76301$export$48513f6b9f8ce62d = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function Checkbox(props, ref) {
    let { inputRef: userProvidedInputRef = null, ...otherProps } = props;
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(otherProps, ref, $ed8ccb2e23e76301$export$b085522c77523c51);
    let { validationBehavior: formValidationBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSlottedContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Form$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormContext"])) || {};
    let validationBehavior = props.validationBehavior ?? formValidationBehavior ?? 'native';
    let groupState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($ed8ccb2e23e76301$export$139c5b8563afc1fc);
    let inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRefs"])(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null), [
        userProvidedInputRef,
        props.inputRef
    ]));
    let { labelProps: labelProps, inputProps: inputProps, isSelected: isSelected, isDisabled: isDisabled, isReadOnly: isReadOnly, isPressed: isPressed, isInvalid: isInvalid } = groupState ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckboxGroupItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCheckboxGroupItem"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeDataAttributes"])(props),
        // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
        // it's passed explicitly here to avoid typescript error (requires ignore).
        // @ts-ignore
        value: props.value,
        // ReactNode type doesn't allow function children.
        children: typeof props.children === 'function' ? true : props.children
    }, groupState, inputRef) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$checkbox$2f$useCheckbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCheckbox"])({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeDataAttributes"])(props),
        children: typeof props.children === 'function' ? true : props.children,
        validationBehavior: validationBehavior
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$toggle$2f$useToggleState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useToggleState"])(props), inputRef);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let isInteractionDisabled = isDisabled || isReadOnly;
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
        ...props,
        isDisabled: isInteractionDisabled
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        defaultClassName: 'react-aria-Checkbox',
        values: {
            isSelected: isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isPressed: isPressed,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isDisabled: isDisabled,
            isReadOnly: isReadOnly,
            isInvalid: isInvalid,
            isRequired: props.isRequired || false
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).label, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, labelProps, hoverProps, renderProps),
        ref: ref,
        slot: props.slot || undefined,
        "data-selected": isSelected || undefined,
        "data-indeterminate": props.isIndeterminate || undefined,
        "data-pressed": isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-disabled": isDisabled || undefined,
        "data-readonly": isReadOnly || undefined,
        "data-invalid": isInvalid || undefined,
        "data-required": props.isRequired || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VisuallyHidden"]), {
        elementType: "span"
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("input", {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(inputProps, focusProps),
        ref: inputRef
    })), renderProps.children);
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ar-AE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8700ca6f74b7a3bb$exports
]);
var $8700ca6f74b7a3bb$exports = {};
$8700ca6f74b7a3bb$exports = {
    "colorSwatchPicker": `\u{62A}\u{63A}\u{64A}\u{64A}\u{631}\u{627}\u{62A} \u{627}\u{644}\u{623}\u{644}\u{648}\u{627}\u{646}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{62D}\u{62F}\u{62F} \u{639}\u{646}\u{635}\u{631}\u{64B}\u{627}`,
    "tableResizer": `\u{623}\u{62F}\u{627}\u{629} \u{62A}\u{63A}\u{64A}\u{64A}\u{631} \u{627}\u{644}\u{62D}\u{62C}\u{645}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/bg-BG.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$0c7dfa0e49fba847$exports
]);
var $0c7dfa0e49fba847$exports = {};
$0c7dfa0e49fba847$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{438} \u{43C}\u{43E}\u{441}\u{442}\u{440}\u{438}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{418}\u{437}\u{431}\u{435}\u{440}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{435}\u{434}\u{43C}\u{435}\u{442}`,
    "tableResizer": `\u{41F}\u{440}\u{435}\u{43E}\u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{438}\u{442}\u{435}\u{43B}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/cs-CZ.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$0c58c085e8473442$exports
]);
var $0c58c085e8473442$exports = {};
$0c58c085e8473442$exports = {
    "colorSwatchPicker": `Vzorky barev`,
    "dropzoneLabel": `M\xedsto pro p\u{159}eta\u{17E}en\xed`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `Zm\u{11B}na velikosti`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/da-DK.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$6b7d29a94eebcc3f$exports
]);
var $6b7d29a94eebcc3f$exports = {};
$6b7d29a94eebcc3f$exports = {
    "colorSwatchPicker": `Farvepr\xf8ver`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe6lg et element`,
    "tableResizer": `St\xf8rrelses\xe6ndring`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/de-DE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$74fbc8121aba83f1$exports
]);
var $74fbc8121aba83f1$exports = {};
$74fbc8121aba83f1$exports = {
    "colorSwatchPicker": `Farbfelder`,
    "dropzoneLabel": `Ablegebereich`,
    "selectPlaceholder": `Element w\xe4hlen`,
    "tableResizer": `Gr\xf6\xdfenanpassung`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/el-GR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$87d5d863f4752089$exports
]);
var $87d5d863f4752089$exports = {};
$87d5d863f4752089$exports = {
    "colorSwatchPicker": `\u{3A7}\u{3C1}\u{3C9}\u{3BC}\u{3B1}\u{3C4}\u{3B9}\u{3BA}\u{3AC} \u{3B4}\u{3B5}\u{3AF}\u{3B3}\u{3BC}\u{3B1}\u{3C4}\u{3B1}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3BE}\u{3C4}\u{3B5} \u{3AD}\u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3C4}\u{3B9}\u{3BA}\u{3B5}\u{3AF}\u{3BC}\u{3B5}\u{3BD}\u{3BF}`,
    "tableResizer": `\u{391}\u{3BB}\u{3BB}\u{3B1}\u{3B3}\u{3AE} \u{3BC}\u{3B5}\u{3B3}\u{3AD}\u{3B8}\u{3BF}\u{3C5}\u{3C2}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/en-US.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$8977cb565542571b$exports
]);
var $8977cb565542571b$exports = {};
$8977cb565542571b$exports = {
    "selectPlaceholder": `Select an item`,
    "tableResizer": `Resizer`,
    "dropzoneLabel": `DropZone`,
    "colorSwatchPicker": `Color swatches`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/es-ES.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$83d09a059cc4fa14$exports
]);
var $83d09a059cc4fa14$exports = {};
$83d09a059cc4fa14$exports = {
    "colorSwatchPicker": `Muestras de colores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Seleccionar un art\xedculo`,
    "tableResizer": `Cambiador de tama\xf1o`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/et-EE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$21e1d1ca29e01129$exports
]);
var $21e1d1ca29e01129$exports = {};
$21e1d1ca29e01129$exports = {
    "colorSwatchPicker": `V\xe4rvin\xe4idised`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valige \xfcksus`,
    "tableResizer": `Suuruse muutja`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/fi-FI.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c3b6531c27488f67$exports
]);
var $c3b6531c27488f67$exports = {};
$c3b6531c27488f67$exports = {
    "colorSwatchPicker": `V\xe4rimallit`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Valitse kohde`,
    "tableResizer": `Koon muuttaja`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/fr-FR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$83a095cffcc42806$exports
]);
var $83a095cffcc42806$exports = {};
$83a095cffcc42806$exports = {
    "colorSwatchPicker": `\xc9chantillons de couleurs`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `S\xe9lectionner un \xe9l\xe9ment`,
    "tableResizer": `Redimensionneur`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/he-IL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$1af82e4746ec171d$exports
]);
var $1af82e4746ec171d$exports = {};
$1af82e4746ec171d$exports = {
    "colorSwatchPicker": `\u{5D3}\u{5D5}\u{5D2}\u{5DE}\u{5D9}\u{5D5}\u{5EA} \u{5E6}\u{5D1}\u{5E2}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{5D1}\u{5D7}\u{5E8} \u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
    "tableResizer": `\u{5E9}\u{5D9}\u{5E0}\u{5D5}\u{5D9} \u{5D2}\u{5D5}\u{5D3}\u{5DC}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/hr-HR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$632db85e92394c25$exports
]);
var $632db85e92394c25$exports = {};
$632db85e92394c25$exports = {
    "colorSwatchPicker": `Uzorci boja`,
    "dropzoneLabel": `Zona spu\u{161}tanja`,
    "selectPlaceholder": `Odaberite stavku`,
    "tableResizer": `Promjena veli\u{10D}ine`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/hu-HU.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a60efb3893829878$exports
]);
var $a60efb3893829878$exports = {};
$a60efb3893829878$exports = {
    "colorSwatchPicker": `Sz\xednt\xe1rak`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe1lasszon ki egy elemet`,
    "tableResizer": `\xc1tm\xe9retez\u{151}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/it-IT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$2a9c939f662747b6$exports
]);
var $2a9c939f662747b6$exports = {};
$2a9c939f662747b6$exports = {
    "colorSwatchPicker": `Campioni di colore`,
    "dropzoneLabel": `Zona di rilascio`,
    "selectPlaceholder": `Seleziona un elemento`,
    "tableResizer": `Ridimensionamento`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ja-JP.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$33c4d792722c8e8f$exports
]);
var $33c4d792722c8e8f$exports = {};
$33c4d792722c8e8f$exports = {
    "colorSwatchPicker": `\u{30AB}\u{30E9}\u{30FC}\u{30B9}\u{30A6}\u{30A9}\u{30C3}\u{30C1}`,
    "dropzoneLabel": `\u{30C9}\u{30ED}\u{30C3}\u{30D7}\u{30BE}\u{30FC}\u{30F3}`,
    "selectPlaceholder": `\u{9805}\u{76EE}\u{3092}\u{9078}\u{629E}`,
    "tableResizer": `\u{30B5}\u{30A4}\u{30BA}\u{5909}\u{66F4}\u{30C4}\u{30FC}\u{30EB}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ko-KR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$6c1efa3447442005$exports
]);
var $6c1efa3447442005$exports = {};
$6c1efa3447442005$exports = {
    "colorSwatchPicker": `\u{C0C9}\u{C0C1} \u{ACAC}\u{BCF8}`,
    "dropzoneLabel": `\u{B4DC}\u{B86D} \u{C601}\u{C5ED}`,
    "selectPlaceholder": `\u{D56D}\u{BAA9} \u{C120}\u{D0DD}`,
    "tableResizer": `\u{D06C}\u{AE30} \u{C870}\u{C815}\u{AE30}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/lt-LT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$fb9cd4429353d32d$exports
]);
var $fb9cd4429353d32d$exports = {};
$fb9cd4429353d32d$exports = {
    "colorSwatchPicker": `Spalv\u{173} pavyzd\u{17E}iai`,
    "dropzoneLabel": `\u{201E}DropZone\u{201C}`,
    "selectPlaceholder": `Pasirinkite element\u{105}`,
    "tableResizer": `Dyd\u{17E}io keitiklis`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/lv-LV.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$1a04cd004166540e$exports
]);
var $1a04cd004166540e$exports = {};
$1a04cd004166540e$exports = {
    "colorSwatchPicker": `Kr\u{101}su paraugi`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izv\u{113}l\u{113}ties vienumu`,
    "tableResizer": `Izm\u{113}ra main\u{12B}t\u{101}js`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/nb-NO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$b93cf9c16a1d6016$exports
]);
var $b93cf9c16a1d6016$exports = {};
$b93cf9c16a1d6016$exports = {
    "colorSwatchPicker": `Fargekart`,
    "dropzoneLabel": `Droppsone`,
    "selectPlaceholder": `Velg et element`,
    "tableResizer": `St\xf8rrelsesendrer`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/nl-NL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$4e47f19ffc9065c1$exports
]);
var $4e47f19ffc9065c1$exports = {};
$4e47f19ffc9065c1$exports = {
    "colorSwatchPicker": `kleurstalen`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecteer een item`,
    "tableResizer": `Resizer`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pl-PL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$33fe3b0f0884fb7c$exports
]);
var $33fe3b0f0884fb7c$exports = {};
$33fe3b0f0884fb7c$exports = {
    "colorSwatchPicker": `Pr\xf3bki kolor\xf3w`,
    "dropzoneLabel": `Strefa upuszczania`,
    "selectPlaceholder": `Wybierz element`,
    "tableResizer": `Zmiana rozmiaru`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pt-BR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$7dfe84ba28f38545$exports
]);
var $7dfe84ba28f38545$exports = {};
$7dfe84ba28f38545$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pt-PT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$c68983ae60668f02$exports
]);
var $c68983ae60668f02$exports = {};
$c68983ae60668f02$exports = {
    "colorSwatchPicker": `Amostras de cores`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Selecione um item`,
    "tableResizer": `Redimensionador`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ro-RO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$dc4e2c1a20dc1244$exports
]);
var $dc4e2c1a20dc1244$exports = {};
$dc4e2c1a20dc1244$exports = {
    "colorSwatchPicker": `Specimene de culoare`,
    "dropzoneLabel": `Zon\u{103} de plasare`,
    "selectPlaceholder": `Selecta\u{21B}i un element`,
    "tableResizer": `Instrument de redimensionare`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ru-RU.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$0723508d266e49c2$exports
]);
var $0723508d266e49c2$exports = {};
$0723508d266e49c2$exports = {
    "colorSwatchPicker": `\u{426}\u{432}\u{435}\u{442}\u{43E}\u{432}\u{44B}\u{435} \u{43E}\u{431}\u{440}\u{430}\u{437}\u{446}\u{44B}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{44D}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{421}\u{440}\u{435}\u{434}\u{441}\u{442}\u{432}\u{43E} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{44F} \u{440}\u{430}\u{437}\u{43C}\u{435}\u{440}\u{430}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sk-SK.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a4cd257e892b5fbb$exports
]);
var $a4cd257e892b5fbb$exports = {};
$a4cd257e892b5fbb$exports = {
    "colorSwatchPicker": `Vzorkovn\xedky farieb`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Vyberte polo\u{17E}ku`,
    "tableResizer": `N\xe1stroj na zmenu ve\u{13E}kosti`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sl-SI.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$7c88c76899171bad$exports
]);
var $7c88c76899171bad$exports = {};
$7c88c76899171bad$exports = {
    "colorSwatchPicker": `Barvne palete`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izberite element`,
    "tableResizer": `Spreminjanje velikosti`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sr-SP.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$47dfaaac60bb350f$exports
]);
var $47dfaaac60bb350f$exports = {};
$47dfaaac60bb350f$exports = {
    "colorSwatchPicker": `Uzorci boje`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `Izaberite stavku`,
    "tableResizer": `Promena veli\u{10D}ine`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sv-SE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$123a3e7569e58719$exports
]);
var $123a3e7569e58719$exports = {};
$123a3e7569e58719$exports = {
    "colorSwatchPicker": `F\xe4rgrutor`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `V\xe4lj en artikel`,
    "tableResizer": `Storleks\xe4ndrare`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/tr-TR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$a6bf4586076d348a$exports
]);
var $a6bf4586076d348a$exports = {};
$a6bf4586076d348a$exports = {
    "colorSwatchPicker": `Renk \xf6rnekleri`,
    "dropzoneLabel": `B\u{131}rakma B\xf6lgesi`,
    "selectPlaceholder": `Bir \xf6\u{11F}e se\xe7in`,
    "tableResizer": `Yeniden boyutland\u{131}r\u{131}c\u{131}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/uk-UA.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$454d713aa4bcd4e3$exports
]);
var $454d713aa4bcd4e3$exports = {};
$454d713aa4bcd4e3$exports = {
    "colorSwatchPicker": `\u{417}\u{440}\u{430}\u{437}\u{43A}\u{438} \u{43A}\u{43E}\u{43B}\u{44C}\u{43E}\u{440}\u{456}\u{432}`,
    "dropzoneLabel": `DropZone`,
    "selectPlaceholder": `\u{412}\u{438}\u{431}\u{435}\u{440}\u{456}\u{442}\u{44C} \u{435}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442}`,
    "tableResizer": `\u{417}\u{430}\u{441}\u{456}\u{431} \u{437}\u{43C}\u{456}\u{43D}\u{435}\u{43D}\u{43D}\u{44F} \u{440}\u{43E}\u{437}\u{43C}\u{456}\u{440}\u{443}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/zh-CN.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$ea015b633d0158b0$exports
]);
var $ea015b633d0158b0$exports = {};
$ea015b633d0158b0$exports = {
    "colorSwatchPicker": `\u{989C}\u{8272}\u{8272}\u{677F}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{533A}\u{57DF}`,
    "selectPlaceholder": `\u{9009}\u{62E9}\u{4E00}\u{4E2A}\u{9879}\u{76EE}`,
    "tableResizer": `\u{5C3A}\u{5BF8}\u{8C03}\u{6574}\u{5668}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/zh-TW.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$069eb2e0b73d269e$exports
]);
var $069eb2e0b73d269e$exports = {};
$069eb2e0b73d269e$exports = {
    "colorSwatchPicker": `\u{8272}\u{7968}`,
    "dropzoneLabel": `\u{653E}\u{7F6E}\u{5340}`,
    "selectPlaceholder": `\u{9078}\u{53D6}\u{9805}\u{76EE}`,
    "tableResizer": `\u{5927}\u{5C0F}\u{8ABF}\u{6574}\u{5668}`
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intlStrings.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>$aa5f63badbfee5df$exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ar$2d$AE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ar-AE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$bg$2d$BG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/bg-BG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$cs$2d$CZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/cs-CZ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$da$2d$DK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/da-DK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$de$2d$DE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/de-DE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$el$2d$GR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/el-GR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$en$2d$US$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/en-US.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$es$2d$ES$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/es-ES.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$et$2d$EE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/et-EE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$fi$2d$FI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/fi-FI.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$fr$2d$FR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/fr-FR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$he$2d$IL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/he-IL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$hr$2d$HR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/hr-HR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$hu$2d$HU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/hu-HU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$it$2d$IT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/it-IT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ja$2d$JP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ja-JP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ko$2d$KR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ko-KR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$lt$2d$LT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/lt-LT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$lv$2d$LV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/lv-LV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$nb$2d$NO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/nb-NO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$nl$2d$NL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/nl-NL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pl$2d$PL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pl-PL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pt$2d$BR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pt-BR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pt$2d$PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/pt-PT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ro$2d$RO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ro-RO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ru$2d$RU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/ru-RU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sk$2d$SK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sk-SK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sl$2d$SI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sl-SI.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sr$2d$SP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sr-SP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sv$2d$SE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/sv-SE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$tr$2d$TR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/tr-TR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$uk$2d$UA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/uk-UA.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/zh-CN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$zh$2d$TW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intl/zh-TW.mjs [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
;
;
var $aa5f63badbfee5df$exports = {};
$aa5f63badbfee5df$exports = {
    "ar-AE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ar$2d$AE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "bg-BG": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$bg$2d$BG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "cs-CZ": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$cs$2d$CZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "da-DK": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$da$2d$DK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "de-DE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$de$2d$DE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "el-GR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$el$2d$GR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$en$2d$US$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "es-ES": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$es$2d$ES$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "et-EE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$et$2d$EE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "fi-FI": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$fi$2d$FI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "fr-FR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$fr$2d$FR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "he-IL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$he$2d$IL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "hr-HR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$hr$2d$HR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "hu-HU": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$hu$2d$HU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "it-IT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$it$2d$IT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ja-JP": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ja$2d$JP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ko-KR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ko$2d$KR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "lt-LT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$lt$2d$LT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "lv-LV": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$lv$2d$LV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "nb-NO": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$nb$2d$NO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "nl-NL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$nl$2d$NL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pl-PL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pl$2d$PL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pt-BR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pt$2d$BR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pt-PT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$pt$2d$PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ro-RO": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ro$2d$RO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ru-RU": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$ru$2d$RU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sk-SK": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sk$2d$SK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sl-SI": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sl$2d$SI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sr-SP": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sr$2d$SP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sv-SE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$sv$2d$SE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "tr-TR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$tr$2d$TR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "uk-UA": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$uk$2d$UA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "zh-CN": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "zh-TW": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intl$2f$zh$2d$TW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TreeDropTargetDelegate.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TreeDropTargetDelegate",
    ()=>$808d92ba0ee34db1$export$82c13862611c034e
]);
const $808d92ba0ee34db1$var$X_SWITCH_THRESHOLD = 10;
const $808d92ba0ee34db1$var$Y_SWITCH_THRESHOLD = 5;
class $808d92ba0ee34db1$export$82c13862611c034e {
    setup(delegate, state, direction) {
        this.delegate = delegate;
        this.state = state;
        this.direction = direction;
    }
    getDropTargetFromPoint(x, y, isValidDropTarget) {
        let baseTarget = this.delegate.getDropTargetFromPoint(x, y, isValidDropTarget);
        if (!baseTarget || baseTarget.type === 'root') return baseTarget;
        return this.resolveDropTarget(baseTarget, x, y, isValidDropTarget);
    }
    resolveDropTarget(target, x, y, isValidDropTarget) {
        let tracking = this.pointerTracking;
        // Calculate movement directions
        let deltaY = y - tracking.lastY;
        let deltaX = x - tracking.lastX;
        let currentYMovement = tracking.yDirection;
        let currentXMovement = tracking.xDirection;
        if (Math.abs(deltaY) > $808d92ba0ee34db1$var$Y_SWITCH_THRESHOLD) {
            currentYMovement = deltaY > 0 ? 'down' : 'up';
            tracking.yDirection = currentYMovement;
            tracking.lastY = y;
        }
        if (Math.abs(deltaX) > $808d92ba0ee34db1$var$X_SWITCH_THRESHOLD) {
            currentXMovement = deltaX > 0 ? 'right' : 'left';
            tracking.xDirection = currentXMovement;
            tracking.lastX = x;
        }
        // Normalize to 'after'
        if (target.dropPosition === 'before') {
            let keyBefore = this.state.collection.getKeyBefore(target.key);
            if (keyBefore != null) {
                let convertedTarget = {
                    type: 'item',
                    key: keyBefore,
                    dropPosition: 'after'
                };
                if (isValidDropTarget(convertedTarget)) target = convertedTarget;
            }
        }
        let potentialTargets = this.getPotentialTargets(target, isValidDropTarget);
        if (potentialTargets.length === 0) return {
            type: 'root'
        };
        let resolvedItemTarget;
        if (potentialTargets.length > 1) resolvedItemTarget = this.selectTarget(potentialTargets, target, x, y, currentYMovement, currentXMovement);
        else {
            resolvedItemTarget = potentialTargets[0];
            // Reset boundary context since we're not in a boundary case
            tracking.boundaryContext = null;
        }
        return resolvedItemTarget;
    }
    // Returns potential targets for an ambiguous drop position (e.g. after the last child of a parent, or after the parent itself)
    // Ordered by level, from innermost to outermost.
    getPotentialTargets(originalTarget, isValidDropTarget) {
        if (originalTarget.dropPosition === 'on') return [
            originalTarget
        ];
        let target = originalTarget;
        let collection = this.state.collection;
        let currentItem = collection.getItem(target.key);
        while(currentItem && currentItem?.type !== 'item' && currentItem.nextKey != null){
            target.key = currentItem.nextKey;
            currentItem = collection.getItem(currentItem.nextKey);
        }
        let potentialTargets = [
            target
        ];
        // If target has children and is expanded, use "before first child"
        if (currentItem && currentItem.hasChildNodes && this.state.expandedKeys.has(currentItem.key) && collection.getChildren && target.dropPosition === 'after') {
            // Find the first item child (traverse keys directly instead of using collection.getChildren, which may only include cells).
            let firstChildItemNode = currentItem.firstChildKey != null ? collection.getItem(currentItem.firstChildKey) : null;
            while(firstChildItemNode && firstChildItemNode.type !== 'item')firstChildItemNode = firstChildItemNode.nextKey != null ? collection.getItem(firstChildItemNode.nextKey) : null;
            if (firstChildItemNode?.type === 'item') {
                const beforeFirstChildTarget = {
                    type: 'item',
                    key: firstChildItemNode.key,
                    dropPosition: 'before'
                };
                if (isValidDropTarget(beforeFirstChildTarget)) return [
                    beforeFirstChildTarget
                ];
                else return [];
            }
        }
        if (currentItem?.nextKey != null) return [
            originalTarget
        ];
        // Walk up the parent chain to find ancestors that are the last child at their level
        let parentKey = currentItem?.parentKey;
        let ancestorTargets = [];
        while(parentKey){
            let parentItem = collection.getItem(parentKey);
            let nextItem = parentItem?.nextKey ? collection.getItem(parentItem.nextKey) : null;
            let isLastChildAtLevel = !nextItem || nextItem.parentKey !== parentKey;
            if (isLastChildAtLevel) {
                let afterParentTarget = {
                    type: 'item',
                    key: parentKey,
                    dropPosition: 'after'
                };
                if (isValidDropTarget(afterParentTarget)) ancestorTargets.push(afterParentTarget);
                if (nextItem) break;
            }
            parentKey = parentItem?.parentKey;
        }
        if (ancestorTargets.length > 0) potentialTargets.push(...ancestorTargets);
        // Handle converting "after" to "before next" for non-ambiguous cases
        if (potentialTargets.length === 1) {
            let nextKey = collection.getKeyAfter(target.key);
            let nextNode = nextKey ? collection.getItem(nextKey) : null;
            if (nextKey != null && nextNode && currentItem && nextNode.level != null && currentItem.level != null && nextNode.level > currentItem.level) {
                let beforeTarget = {
                    type: 'item',
                    key: nextKey,
                    dropPosition: 'before'
                };
                if (isValidDropTarget(beforeTarget)) return [
                    beforeTarget
                ];
            }
        }
        return potentialTargets.filter(isValidDropTarget);
    }
    selectTarget(potentialTargets, originalTarget, x, y, currentYMovement, currentXMovement) {
        if (potentialTargets.length < 2) return potentialTargets[0];
        let tracking = this.pointerTracking;
        let currentItem = this.state.collection.getItem(originalTarget.key);
        let parentKey = currentItem?.parentKey;
        if (!parentKey) return potentialTargets[0];
        // More than 1 potential target - use Y for initial target, then X for switching levels
        // Initialize boundary context if needed
        if (!tracking.boundaryContext || tracking.boundaryContext.parentKey !== parentKey) {
            // If entering from below, start with outer-most
            let initialTargetIndex = tracking.yDirection === 'up' ? potentialTargets.length - 1 : 0;
            tracking.boundaryContext = {
                parentKey: parentKey,
                preferredTargetIndex: initialTargetIndex,
                lastSwitchY: y,
                lastSwitchX: x
            };
        }
        let boundaryContext = tracking.boundaryContext;
        let distanceFromLastXSwitch = Math.abs(x - boundaryContext.lastSwitchX);
        let distanceFromLastYSwitch = Math.abs(y - boundaryContext.lastSwitchY);
        // Switch between targets based on Y movement
        if (distanceFromLastYSwitch > $808d92ba0ee34db1$var$Y_SWITCH_THRESHOLD && currentYMovement) {
            let currentIndex = boundaryContext.preferredTargetIndex || 0;
            if (currentYMovement === 'down' && currentIndex === 0) boundaryContext.preferredTargetIndex = potentialTargets.length - 1;
            else if (currentYMovement === 'up' && currentIndex === potentialTargets.length - 1) boundaryContext.preferredTargetIndex = 0;
            // Reset x tracking so that moving diagonally doesn't cause flickering.
            tracking.xDirection = null;
        }
        // X movement controls level selection
        if (distanceFromLastXSwitch > $808d92ba0ee34db1$var$X_SWITCH_THRESHOLD && currentXMovement) {
            let currentTargetIndex = boundaryContext.preferredTargetIndex || 0;
            if (currentXMovement === 'left') {
                if (this.direction === 'ltr') {
                    if (currentTargetIndex < potentialTargets.length - 1) {
                        boundaryContext.preferredTargetIndex = currentTargetIndex + 1;
                        boundaryContext.lastSwitchX = x;
                    }
                } else if (currentTargetIndex > 0) {
                    boundaryContext.preferredTargetIndex = currentTargetIndex - 1;
                    boundaryContext.lastSwitchX = x;
                }
            } else if (currentXMovement === 'right') {
                if (this.direction === 'ltr') {
                    if (currentTargetIndex > 0) {
                        boundaryContext.preferredTargetIndex = currentTargetIndex - 1;
                        boundaryContext.lastSwitchX = x;
                    }
                } else if (currentTargetIndex < potentialTargets.length - 1) {
                    boundaryContext.preferredTargetIndex = currentTargetIndex + 1;
                    boundaryContext.lastSwitchX = x;
                }
            }
            // Reset y tracking so that moving diagonally doesn't cause flickering.
            tracking.yDirection = null;
        }
        let targetIndex = Math.max(0, Math.min(boundaryContext.preferredTargetIndex || 0, potentialTargets.length - 1));
        return potentialTargets[targetIndex];
    }
    constructor(){
        this.delegate = null;
        this.state = null;
        this.direction = 'ltr';
        this.pointerTracking = {
            lastY: 0,
            lastX: 0,
            yDirection: null,
            xDirection: null,
            boundaryContext: null
        };
    }
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Table.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cell",
    ()=>$76d00c5a4edb230a$export$f6f0c3fe4ec306ea,
    "Column",
    ()=>$76d00c5a4edb230a$export$816b5d811295e6bc,
    "ColumnResizer",
    ()=>$76d00c5a4edb230a$export$ee689e97a7664bfd,
    "ResizableTableContainer",
    ()=>$76d00c5a4edb230a$export$7063e69b8a954175,
    "Row",
    ()=>$76d00c5a4edb230a$export$b59bdbef9ce70de2,
    "Table",
    ()=>$76d00c5a4edb230a$export$54ec01a60f47d33d,
    "TableBody",
    ()=>$76d00c5a4edb230a$export$76ccd210b9029917,
    "TableColumnResizeStateContext",
    ()=>$76d00c5a4edb230a$export$a2680a798823803c,
    "TableContext",
    ()=>$76d00c5a4edb230a$export$93e4b0b2cc49b648,
    "TableHeader",
    ()=>$76d00c5a4edb230a$export$f850895b287ef28e,
    "TableLoadMoreItem",
    ()=>$76d00c5a4edb230a$export$8f5bea0338ed243c,
    "TableStateContext",
    ()=>$76d00c5a4edb230a$export$38de1cb0526c21fb,
    "useTableOptions",
    ()=>$76d00c5a4edb230a$export$fddc468cd8cb4db9
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Button.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Checkbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Checkbox.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Collection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/DragAndDrop.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Autocomplete.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intlStrings$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/intlStrings.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SelectionIndicator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SelectionIndicator.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/SharedElementTransition.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$TreeDropTargetDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TreeDropTargetDelegate.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$TableLayout$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TableLayout.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/BaseCollection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$TableCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/table/TableCollection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$FocusScope$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/FocusScope.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$inertValue$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/inertValue.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isScrollable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$selection$2f$ListKeyboardDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/selection/ListKeyboardDelegate.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLoadMoreSentinel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-dom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$useTableColumnResizeState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/table/useTableColumnResizeState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$useTableState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/table/useTableState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$useCachedChildren$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/collections/useCachedChildren.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$useControlledState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/utils/useControlledState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/focus/useFocusRing.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/interactions/useHover.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$I18nProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/i18n/I18nProvider.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$useLocalizedStringFormatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$selection$2f$useMultipleSelectionState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useResizeObserver$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useResizeObserver.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTable.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableRowGroup$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableRowGroup.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableHeaderRow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableHeaderRow.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableSelectionCheckbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableSelectionCheckbox.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableColumnHeader$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableColumnHeader.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableColumnResize$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableColumnResize.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableRow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableRow.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableCell$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/table/useTableCell.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/visually-hidden/VisuallyHidden.mjs [app-rsc] (ecmascript)");
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
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
class $76d00c5a4edb230a$var$TableCollection extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseCollection"]) {
    withExpandedKeys(expandedKeys) {
        let collection = this.clone();
        collection.expandedKeys = expandedKeys;
        collection.frozen = this.frozen;
        collection.rows = Array.from(collection.getChildren(collection.body.key));
        return collection;
    }
    addNode(node) {
        super.addNode(node);
        this.columnsDirty ||= node.type === 'column';
        if (node.type === 'tableheader') this.head = node;
        if (node.type === 'tablebody') this.body = node;
    }
    commit(firstKey, lastKey, isSSR = false) {
        this.updateColumns(isSSR);
        this.rows = [];
        for (let row of this.getChildren(this.body.key)){
            let lastChildKey = row.lastChildKey;
            if (lastChildKey != null) {
                let lastCell = this.getItem(lastChildKey);
                while(lastCell && lastCell.type !== 'cell')lastCell = lastCell.prevKey ? this.getItem(lastCell.prevKey) : null;
                if (lastCell) {
                    let numberOfCellsInRow = (lastCell.colIndex ?? lastCell.index) + (lastCell.colSpan ?? 1);
                    if (numberOfCellsInRow !== this.columns.length && !isSSR) throw new Error(`Cell count must match column count. Found ${numberOfCellsInRow} cells and ${this.columns.length} columns.`);
                }
            }
            this.rows.push(row);
        }
        super.commit(firstKey, lastKey, isSSR);
    }
    updateColumns(isSSR) {
        if (!this.columnsDirty) return;
        this.rowHeaderColumnKeys = new Set();
        this.columns = [];
        let columnKeyMap = new Map();
        let visit = (node)=>{
            switch(node.type){
                case 'column':
                    columnKeyMap.set(node.key, node);
                    if (!node.hasChildNodes) {
                        node.index = this.columns.length;
                        this.columns.push(node);
                        if (node.props.isRowHeader) this.rowHeaderColumnKeys.add(node.key);
                    }
                    break;
            }
            for (let child of this.getChildren(node.key))visit(child);
        };
        for (let node of this.getChildren(this.head.key))visit(node);
        this.headerRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$TableCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildHeaderRows"])(columnKeyMap, this.columns);
        this.columnsDirty = false;
        if (this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !isSSR) throw new Error('A table must have at least one Column with the isRowHeader prop set to true');
    }
    get columnCount() {
        return this.columns.length;
    }
    *[Symbol.iterator]() {
        // Wait until the collection is initialized.
        if (this.head.key === -1) return;
        yield this.head;
        yield this.body;
    }
    getFirstKey() {
        return this.body.firstChildKey;
    }
    getLastKey() {
        let key = this.body.lastChildKey;
        if (key == null) return null;
        let node = this.getItem(key);
        while(node?.lastChildKey != null && (node.type !== 'item' || this.expandedKeys.has(node.key)))node = this.getItem(node.lastChildKey);
        return node?.key;
    }
    getKeyAfter(key) {
        let node = this.getItem(key);
        if (node?.type === 'column') return node.nextKey ?? null;
        if (!node) return null;
        // If this is an expanded item, return the first child item if any.
        if (node.type === 'item' && node.firstChildKey != null && this.expandedKeys.has(node.key)) {
            let child = this.getItem(node.firstChildKey);
            while(child){
                if (child.type === 'item') return child.key;
                child = child.nextKey != null ? this.getItem(child.nextKey) : null;
            }
        }
        return super.getKeyAfter(key);
    }
    getKeyBefore(key) {
        let node = this.getItem(key);
        if (node?.type === 'column') return node.prevKey ?? null;
        if (!node) return null;
        let k = null;
        if (node.prevKey != null) {
            node = this.getItem(node.prevKey);
            // Traverse to the deepest expanded child.
            while(node && (node.type !== 'item' || this.expandedKeys.has(node.key)) && node.lastChildKey != null)node = this.getItem(node.lastChildKey);
            k = node?.key ?? null;
        }
        if (k == null) k = node.parentKey;
        if (k != null && this.getItem(k)?.type === 'tablebody') return null;
        return k;
    }
    getChildren(key) {
        if (!this.getItem(key)) for (let row of this.headerRows){
            if (row.key === key) return row.childNodes;
        }
        // Flatten all rows into the body.
        let self = this;
        if (key === this.body.key) return {
            *[Symbol.iterator] () {
                let firstKey = self.getFirstKey();
                let node = firstKey != null ? self.getItem(firstKey) : null;
                while(node){
                    yield node;
                    let key = self.getKeyAfter(node.key);
                    node = key ? self.getItem(key) : null;
                }
            }
        };
        return {
            *[Symbol.iterator] () {
                let parent = self.getItem(key);
                let node = parent?.firstChildKey != null ? self.getItem(parent.firstChildKey) : null;
                while(node){
                    yield node;
                    node = node.nextKey != null ? self.getItem(node.nextKey) : null;
                    // Return only cells as children of rows (nested rows are flattened into the body).
                    if (parent?.type === 'item' && node?.type !== 'cell') break;
                }
            }
        };
    }
    clone() {
        let collection = super.clone();
        collection.headerRows = this.headerRows;
        collection.columns = this.columns;
        collection.rows = this.rows;
        collection.rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        collection.head = this.head;
        collection.body = this.body;
        return collection;
    }
    getTextValue(key) {
        let row = this.getItem(key);
        if (!row) return '';
        // If the row has a textValue, use that.
        if (row.textValue) return row.textValue;
        // Otherwise combine the text of each of the row header columns.
        let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
        let text = [];
        for (let cell of this.getChildren(key)){
            let column = this.columns[cell.index];
            if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
            if (text.length === rowHeaderColumnKeys.size) break;
        }
        return text.join(' ');
    }
    constructor(...args){
        super(...args), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = new Set(), this.head = new $76d00c5a4edb230a$var$TableHeaderNode(-1), this.body = new $76d00c5a4edb230a$var$TableBodyNode(-2), this.columnsDirty = true, this.expandedKeys = new Set();
    }
}
const $76d00c5a4edb230a$var$ResizableTableContainerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $76d00c5a4edb230a$export$7063e69b8a954175 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function ResizableTableContainer(props, ref) {
    let containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    let tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // Walk up the DOM from the Table to the ResizableTableContainer and stop
        // when we reach the first scrollable element. This is what we'll measure
        // to determine column widths (important due to width of scrollbars).
        // This will usually be the ResizableTableContainer for native tables, and
        // the Table itself for virtualized tables.
        let table = tableRef.current;
        while(table && table !== containerRef.current && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isScrollable"])(table))table = table.parentElement;
        scrollRef.current = table;
    }, [
        containerRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useResizeObserver$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useResizeObserver"])({
        ref: scrollRef,
        box: 'border-box',
        onResize () {
            setWidth(scrollRef.current?.clientWidth ?? 0);
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        setWidth(scrollRef.current?.clientWidth ?? 0);
    }, []);
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            tableRef: tableRef,
            scrollRef: scrollRef,
            tableWidth: width,
            useTableColumnResizeState: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$useTableColumnResizeState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableColumnResizeState"],
            onResizeStart: props.onResizeStart,
            onResize: props.onResize,
            onResizeEnd: props.onResizeEnd
        }), [
        tableRef,
        width,
        props.onResizeStart,
        props.onResize,
        props.onResizeEnd
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        render: props.render,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
            global: true
        }),
        ref: containerRef,
        className: props.className || 'react-aria-ResizableTableContainer',
        style: props.style,
        onScroll: props.onScroll
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$ResizableTableContainerContext.Provider, {
        value: ctx
    }, props.children));
});
const $76d00c5a4edb230a$export$93e4b0b2cc49b648 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $76d00c5a4edb230a$export$38de1cb0526c21fb = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $76d00c5a4edb230a$export$a2680a798823803c = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $76d00c5a4edb230a$export$54ec01a60f47d33d = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function Table(props, ref) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, $76d00c5a4edb230a$export$93e4b0b2cc49b648);
    // Separate selection state so we have access to it from collection components via useTableOptions.
    let selectionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$selection$2f$useMultipleSelectionState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMultipleSelectionState"])(props);
    let { selectionBehavior: selectionBehavior, selectionMode: selectionMode, disallowEmptySelection: disallowEmptySelection } = selectionState;
    let hasDragHooks = !!props.dragAndDropHooks?.useDraggableCollectionState;
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectionBehavior: selectionMode === 'none' ? null : selectionBehavior,
            selectionMode: selectionMode,
            disallowEmptySelection: disallowEmptySelection,
            allowsDragging: hasDragHooks
        }), [
        selectionBehavior,
        selectionMode,
        disallowEmptySelection,
        hasDragHooks
    ]);
    let content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableOptionsContext.Provider, {
        value: ctx
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collection"]), props));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionBuilder"]), {
        content: content,
        createCollection: ()=>new $76d00c5a4edb230a$var$TableCollection()
    }, (collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableInner, {
            props: props,
            forwardedRef: ref,
            selectionState: selectionState,
            collection: collection
        }));
});
let $76d00c5a4edb230a$var$TableElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).table, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$var$EXPANSION_KEYS = {
    'expand': {
        ltr: 'ArrowRight',
        rtl: 'ArrowLeft'
    },
    'collapse': {
        ltr: 'ArrowLeft',
        rtl: 'ArrowRight'
    }
};
function $76d00c5a4edb230a$var$TableInner({ props: props, forwardedRef: ref, selectionState: selectionState, collection: collection }) {
    [props, ref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContextProps"])(props, ref, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectableCollectionContext"]));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { shouldUseVirtualFocus: shouldUseVirtualFocus, disallowTypeAhead: disallowTypeAhead, filter: filter, ...DOMCollectionProps } = props;
    let tableContainerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$var$ResizableTableContainerContext);
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeRefs"])(ref, tableContainerContext?.tableRef), [
        ref,
        tableContainerContext?.tableRef
    ]));
    let [expandedKeys, setExpandedKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$utils$2f$useControlledState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useControlledState"])(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    collection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>collection.withExpandedKeys(expandedKeys), [
        collection,
        expandedKeys
    ]);
    let tableState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$useTableState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableState"])({
        ...DOMCollectionProps,
        collection: collection,
        children: undefined,
        UNSAFE_selectionState: selectionState,
        expandedKeys: expandedKeys,
        onExpandedChange: setExpandedKeys
    });
    let filteredState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$table$2f$useTableState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UNSTABLE_useFilteredTableState"])(tableState, filter);
    let { isVirtualized: isVirtualized, layoutDelegate: layoutDelegate, dropTargetDelegate: ctxDropTargetDelegate, CollectionRoot: CollectionRoot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { dragAndDropHooks: dragAndDropHooks } = props;
    let { gridProps: gridProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTable$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTable"])({
        ...DOMCollectionProps,
        layoutDelegate: layoutDelegate,
        isVirtualized: isVirtualized
    }, filteredState, ref);
    let selectionManager = filteredState.selectionManager;
    let hasDragHooks = !!dragAndDropHooks?.useDraggableCollectionState;
    let hasDropHooks = !!dragAndDropHooks?.useDroppableCollectionState;
    let dragHooksProvided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(hasDragHooks);
    let dropHooksProvided = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(hasDropHooks);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (dragHooksProvided.current !== hasDragHooks) console.warn('Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
        if (dropHooksProvided.current !== hasDropHooks) console.warn('Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.');
    }, [
        hasDragHooks,
        hasDropHooks
    ]);
    let dragState = undefined;
    let dropState = undefined;
    let droppableCollection = undefined;
    let isRootDropTarget = false;
    let dragPreview = null;
    let preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { direction: direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$I18nProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLocale"])();
    let [treeDropTargetDelegate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(()=>new (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$TreeDropTargetDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TreeDropTargetDelegate"])());
    if (hasDragHooks && dragAndDropHooks) {
        dragState = dragAndDropHooks.useDraggableCollectionState({
            collection: filteredState.collection,
            selectionManager: selectionManager,
            preview: dragAndDropHooks.renderDragPreview ? preview : undefined
        });
        dragAndDropHooks.useDraggableCollection({}, dragState, ref);
        let DragPreview = dragAndDropHooks.DragPreview;
        dragPreview = dragAndDropHooks.renderDragPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(DragPreview, {
            ref: preview
        }, dragAndDropHooks.renderDragPreview) : null;
    }
    if (hasDropHooks && dragAndDropHooks) {
        dropState = dragAndDropHooks.useDroppableCollectionState({
            collection: filteredState.collection,
            selectionManager: selectionManager
        });
        let keyboardDelegate = new (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$selection$2f$ListKeyboardDelegate$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListKeyboardDelegate"])({
            collection: filteredState.collection,
            disabledKeys: selectionManager.disabledKeys,
            disabledBehavior: selectionManager.disabledBehavior,
            ref: ref,
            layoutDelegate: layoutDelegate
        });
        let dropTargetDelegate = dragAndDropHooks.dropTargetDelegate || ctxDropTargetDelegate || new dragAndDropHooks.ListDropTargetDelegate(collection.rows, ref);
        treeDropTargetDelegate.setup(dropTargetDelegate, tableState, direction);
        droppableCollection = dragAndDropHooks.useDroppableCollection({
            keyboardDelegate: keyboardDelegate,
            dropTargetDelegate: treeDropTargetDelegate,
            onDropActivate: (e)=>{
                // Expand collapsed item when dragging over. For keyboard, allow collapsing.
                if (e.target.type === 'item') {
                    let key = e.target.key;
                    let item = tableState.collection.getItem(key);
                    let isExpanded = expandedKeys.has(key);
                    if (item && item.hasChildNodes && (!isExpanded || dragAndDropHooks?.isVirtualDragging?.())) tableState.toggleKey(key);
                }
            },
            onKeyDown: (e)=>{
                let target = dropState?.target;
                if (target && target.type === 'item' && target.dropPosition === 'on') {
                    let item = tableState.collection.getItem(target.key);
                    if (e.key === $76d00c5a4edb230a$var$EXPANSION_KEYS['expand'][direction] && item?.hasChildNodes && !tableState.expandedKeys.has(target.key)) tableState.toggleKey(target.key);
                    else if (e.key === $76d00c5a4edb230a$var$EXPANSION_KEYS['collapse'][direction] && item?.hasChildNodes && tableState.expandedKeys.has(target.key)) tableState.toggleKey(target.key);
                }
            }
        }, dropState, ref);
        isRootDropTarget = dropState.isDropTarget({
            type: 'root'
        });
    }
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-Table',
        values: {
            isDropTarget: isRootDropTarget,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            state: filteredState
        }
    });
    let isListDraggable = !!(hasDragHooks && !dragState?.isDisabled);
    let style = renderProps.style;
    let layoutState = null;
    if (tableContainerContext) {
        layoutState = tableContainerContext.useTableColumnResizeState({
            tableWidth: tableContainerContext.tableWidth
        }, filteredState);
        if (!isVirtualized) style = {
            ...style,
            tableLayout: 'fixed',
            // due to https://bugzilla.mozilla.org/show_bug.cgi?id=1959353, we can't use "fit-content".
            // Causes the table columns to grow to fill the available space in Firefox, ignoring user set column widths
            width: 'min-content'
        };
    }
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                $76d00c5a4edb230a$export$38de1cb0526c21fb,
                filteredState
            ],
            [
                $76d00c5a4edb230a$export$a2680a798823803c,
                layoutState
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]),
                {
                    dragAndDropHooks: dragAndDropHooks,
                    dragState: dragState,
                    dropState: dropState
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DropIndicatorContext"]),
                {
                    render: $76d00c5a4edb230a$var$TableDropIndicatorWrapper
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectableCollectionContext"]),
                null
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Autocomplete$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldInputContext"]),
                null
            ]
        ]
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$FocusScope$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FocusScope"]), null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, gridProps, focusProps, droppableCollection?.collectionProps),
        style: style,
        ref: ref,
        slot: props.slot || undefined,
        onScroll: props.onScroll,
        "data-allows-dragging": isListDraggable || undefined,
        "data-drop-target": isRootDropTarget || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SharedElementTransition$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SharedElementTransition"]), null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionRoot, {
        collection: filteredState.collection,
        scrollRef: tableContainerContext?.scrollRef ?? ref,
        persistedKeys: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDndPersistedKeys"])(selectionManager, dragAndDropHooks, dropState)
    })))), dragPreview);
}
const $76d00c5a4edb230a$var$TableOptionsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
function $76d00c5a4edb230a$export$fddc468cd8cb4db9() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$var$TableOptionsContext);
}
class $76d00c5a4edb230a$var$TableHeaderNode extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionNode"]) {
    static{
        this.type = 'tableheader';
    }
}
let $76d00c5a4edb230a$var$THeadElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function THeadElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).thead, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$export$f850895b287ef28e = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranchComponent"])($76d00c5a4edb230a$var$TableHeaderNode, (props, ref)=>{
    let collection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb).collection;
    let headerRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$useCachedChildren$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCachedChildren"])({
        items: collection.headerRows,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
            switch(item.type){
                case 'headerrow':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableHeaderRow, {
                        item: item
                    });
                default:
                    throw new Error('Unsupported node type in TableHeader: ' + item.type);
            }
        }, [])
    });
    let { rowGroupProps: rowGroupProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableRowGroup$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableRowGroup"])();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
        onHoverStart: props.onHoverStart,
        onHoverChange: props.onHoverChange,
        onHoverEnd: props.onHoverEnd
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        children: undefined,
        defaultClassName: 'react-aria-TableHeader',
        values: {
            isHovered: isHovered
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$THeadElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
            global: true
        }), rowGroupProps, hoverProps),
        ...renderProps,
        ref: ref,
        "data-hovered": isHovered || undefined
    }, headerRows);
}, (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collection"]), {
        dependencies: props.dependencies,
        items: props.columns
    }, props.children));
let $76d00c5a4edb230a$var$TableHeaderRowElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableHeaderRowElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("tr", {
        ...props,
        ref: ref
    });
});
function $76d00c5a4edb230a$var$TableHeaderRow({ item: item }) {
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { isVirtualized: isVirtualized, CollectionBranch: CollectionBranch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { rowProps: rowProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableHeaderRow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableHeaderRow"])({
        node: item,
        isVirtualized: isVirtualized
    }, state, ref);
    let { checkboxProps: checkboxProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableSelectionCheckbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableSelectAllCheckbox"])(state);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableHeaderRowElementType, {
        ...rowProps,
        ref: ref
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Checkbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CheckboxContext"]),
                {
                    slots: {
                        selection: checkboxProps
                    }
                }
            ]
        ]
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    })));
}
class $76d00c5a4edb230a$var$TableColumnNode extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionNode"]) {
    static{
        this.type = 'column';
    }
}
let $76d00c5a4edb230a$var$ColumnElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function ColumnElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).th, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$export$816b5d811295e6bc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])($76d00c5a4edb230a$var$TableColumnNode, (props, forwardedRef, column)=>{
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(forwardedRef);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { columnHeaderProps: columnHeaderProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableColumnHeader$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableColumnHeader"])({
        node: column,
        isVirtualized: isVirtualized
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let layoutState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$a2680a798823803c);
    let isResizing = false;
    if (layoutState) isResizing = layoutState.resizingColumn === column.key;
    else if ("TURBOPACK compile-time truthy", 1) {
        for(let prop in [
            'width',
            'defaultWidth',
            'minWidth',
            'maxWidth'
        ])if (prop in column.props) console.warn(`The ${prop} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
    }
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !props.allowsSorting
    });
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        id: undefined,
        children: column.rendered,
        defaultClassName: 'react-aria-Column',
        values: {
            isHovered: isHovered,
            isPressed: isPressed,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            allowsSorting: column.props.allowsSorting,
            sortDirection: state.sortDescriptor?.column === column.key ? state.sortDescriptor.direction : undefined,
            isResizing: isResizing,
            startResize: ()=>{
                if (layoutState) {
                    layoutState.startResize(column.key);
                    state.setKeyboardNavigationDisabled(true);
                } else throw new Error('Wrap your <Table> in a <ResizableTableContainer> to enable column resizing');
            },
            sort: (direction)=>{
                state.sort(column.key, direction);
            }
        }
    });
    let style = renderProps.style;
    if (layoutState) style = {
        ...style,
        width: layoutState.getColumnWidth(column.key)
    };
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$ColumnElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, columnHeaderProps, focusProps, hoverProps),
        ...renderProps,
        style: style,
        ref: ref,
        "data-hovered": isHovered || undefined,
        "data-pressed": isPressed || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-allows-sorting": column.props.allowsSorting || undefined,
        "data-sort-direction": state.sortDescriptor?.column === column.key ? state.sortDescriptor.direction : undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                $76d00c5a4edb230a$var$ColumnResizerContext,
                {
                    column: column,
                    triggerRef: ref
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultCollectionRenderer"])
            ]
        ]
    }, renderProps.children));
});
const $76d00c5a4edb230a$var$ColumnResizerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $76d00c5a4edb230a$export$ee689e97a7664bfd = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function ColumnResizer(props, ref) {
    let layoutState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$a2680a798823803c);
    if (!layoutState) throw new Error('Wrap your <Table> in a <ResizableTableContainer> to enable column resizing');
    let stringFormatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$useLocalizedStringFormatter$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLocalizedStringFormatter"])((0, $parcel$interopDefault(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$intlStrings$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])), 'react-aria-components');
    let { onResizeStart: onResizeStart, onResize: onResize, onResizeEnd: onResizeEnd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$var$ResizableTableContainerContext);
    let { column: column, triggerRef: triggerRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$var$ColumnResizerContext);
    let inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { resizerProps: resizerProps, inputProps: inputProps, isResizing: isResizing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableColumnResize$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableColumnResize"])({
        column: column,
        'aria-label': props['aria-label'] || stringFormatter.format('tableResizer'),
        onResizeStart: onResizeStart,
        onResize: onResize,
        onResizeEnd: onResizeEnd,
        triggerRef: triggerRef
    }, layoutState, inputRef);
    let { focusProps: focusProps, isFocused: isFocused, isFocusVisible: isFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])(props);
    let isEResizable = layoutState.getColumnMinWidth(column.key) >= layoutState.getColumnWidth(column.key);
    let isWResizable = layoutState.getColumnMaxWidth(column.key) <= layoutState.getColumnWidth(column.key);
    let { direction: direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$I18nProvider$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLocale"])();
    let resizableDirection = 'both';
    if (isEResizable) resizableDirection = direction === 'rtl' ? 'right' : 'left';
    else if (isWResizable) resizableDirection = direction === 'rtl' ? 'left' : 'right';
    else resizableDirection = 'both';
    let objectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    let [cursor, setCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!objectRef.current) return;
        let style = window.getComputedStyle(objectRef.current);
        setCursor(style.cursor);
    }, [
        objectRef,
        resizableDirection
    ]);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        defaultClassName: 'react-aria-ColumnResizer',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isResizing: isResizing,
            isHovered: isHovered,
            resizableDirection: resizableDirection
        }
    });
    let [isMouseDown, setMouseDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    let onPointerDown = (e)=>{
        if (e.pointerType === 'mouse') setMouseDown(true);
    };
    if (!isResizing && isMouseDown) setMouseDown(false);
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ref: objectRef,
        role: "presentation",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, resizerProps, {
            onPointerDown: onPointerDown
        }, hoverProps),
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-resizing": isResizing || undefined,
        "data-resizable-direction": resizableDirection
    }, renderProps.children, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("input", {
        ref: inputRef,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(inputProps, focusProps)
    }), isResizing && isMouseDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$dom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            cursor: cursor
        }
    }), document.body));
});
class $76d00c5a4edb230a$var$TableBodyNode extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FilterableNode"]) {
    static{
        this.type = 'tablebody';
    }
}
let $76d00c5a4edb230a$var$TableBodyElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableBodyElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).tbody, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$export$76ccd210b9029917 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranchComponent"])($76d00c5a4edb230a$var$TableBodyNode, (props, ref)=>{
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let collection = state.collection;
    let { CollectionBranch: CollectionBranch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let isDroppable = !!dragAndDropHooks?.useDroppableCollectionState && !dropState?.isDisabled;
    let isRootDropTarget = isDroppable && !!dropState && (dropState.isDropTarget({
        type: 'root'
    }) ?? false);
    let isEmpty = collection.size === 0;
    let renderValues = {
        isDropTarget: isRootDropTarget,
        isEmpty: isEmpty
    };
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        id: undefined,
        children: undefined,
        defaultClassName: 'react-aria-TableBody',
        values: renderValues
    });
    let emptyState;
    let numColumns = collection.columnCount;
    if (isEmpty && props.renderEmptyState && state) {
        let rowProps = {};
        let rowHeaderProps = {};
        let style = {};
        if (isVirtualized) {
            rowHeaderProps['aria-colspan'] = numColumns;
            style = {
                display: 'contents'
            };
        } else rowHeaderProps['colSpan'] = numColumns;
        emptyState = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
            role: "row",
            ...rowProps,
            style: style
        }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
            role: "rowheader",
            ...rowHeaderProps,
            style: style
        }, props.renderEmptyState(renderValues)));
    }
    let { rowGroupProps: rowGroupProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableRowGroup$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableRowGroup"])();
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    // TODO: TableBody doesn't support being the scrollable body of the table yet, to revisit if needed. Would need to
    // call useLoadMore here and walk up the DOM to the nearest scrollable element to set scrollRef
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableBodyElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, rowGroupProps),
        ref: ref,
        "data-empty": isEmpty || undefined
    }, isDroppable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$RootDropIndicator, null), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionBranch, {
        collection: collection,
        parent: collection.body,
        renderDropIndicator: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderDropIndicator"])(dragAndDropHooks, dropState)
    }), emptyState);
});
class $76d00c5a4edb230a$var$TableRowNode extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionNode"]) {
    static{
        this.type = 'item';
    }
    filter(collection, newCollection, filterFn) {
        let cells = collection.getChildren(this.key);
        for (let cell of cells)if (filterFn(cell.textValue, cell)) {
            let clone = this.clone();
            newCollection.addDescendants(clone, collection);
            return clone;
        }
        return null;
    }
}
let $76d00c5a4edb230a$var$TableRowElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableRowElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).tr, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$export$b59bdbef9ce70de2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBranchComponent"])($76d00c5a4edb230a$var$TableRowNode, (props, forwardedRef, item)=>{
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(forwardedRef);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { dragAndDropHooks: dragAndDropHooks, dragState: dragState, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let { isVirtualized: isVirtualized, CollectionBranch: CollectionBranch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { rowProps: rowProps, expandButtonProps: expandButtonProps, ...states } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableRow$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableRow"])({
        node: item,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized: isVirtualized
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let { isFocusVisible: isFocusVisibleWithin, focusProps: focusWithinProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])({
        within: true
    });
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !states.allowsSelection && !states.hasAction,
        onHoverStart: props.onHoverStart,
        onHoverChange: props.onHoverChange,
        onHoverEnd: props.onHoverEnd
    });
    let { checkboxProps: checkboxProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableSelectionCheckbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableSelectionCheckbox"])({
        key: item.key
    }, state);
    let draggableItem = undefined;
    if (dragState && dragAndDropHooks) draggableItem = dragAndDropHooks.useDraggableItem({
        key: item.key,
        hasDragButton: true
    }, dragState);
    let dropIndicator = undefined;
    let dropIndicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useVisuallyHidden"])();
    if (dropState && dragAndDropHooks) dropIndicator = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'item',
            key: item.key,
            dropPosition: 'on'
        }
    }, dropState, dropIndicatorRef);
    let dragButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dragState && !dragButtonRef.current && ("TURBOPACK compile-time value", "development") !== 'production') console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
    // eslint-disable-next-line
    }, []);
    let isDragging = dragState && dragState.isDragging(item.key);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: _, ...restProps } = props;
    let hasChildItems = props.hasChildItems || state.collection.getItem(item.lastChildKey)?.type !== 'cell';
    let isExpanded = hasChildItems && state.expandedKeys.has(item.key);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...restProps,
        id: undefined,
        defaultClassName: 'react-aria-Row',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': item.level + 1
        },
        values: {
            ...states,
            isHovered: isHovered,
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            selectionMode: state.selectionManager.selectionMode,
            selectionBehavior: state.selectionManager.selectionBehavior,
            isDragging: isDragging,
            isDropTarget: dropIndicator?.isDropTarget,
            isFocusVisibleWithin: isFocusVisibleWithin,
            id: item.key,
            hasChildItems: hasChildItems,
            isExpanded: isExpanded,
            level: item.level + 1
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    delete DOMProps.onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null, dropIndicator && !dropIndicator.isHidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
        role: "row",
        style: {
            height: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicator.dropIndicatorProps,
        ref: dropIndicatorRef
    }))), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, rowProps, focusProps, hoverProps, draggableItem?.dragProps, focusWithinProps),
        ref: ref,
        "data-disabled": states.isDisabled || undefined,
        "data-selected": states.isSelected || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": states.isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": states.isPressed || undefined,
        "data-dragging": isDragging || undefined,
        "data-drop-target": dropIndicator?.isDropTarget || undefined,
        "data-selection-mode": state.selectionManager.selectionMode === 'none' ? undefined : state.selectionManager.selectionMode,
        "data-focus-visible-within": isFocusVisibleWithin || undefined,
        "data-expanded": isExpanded || undefined,
        "data-has-child-items": hasChildItems || undefined,
        "data-level": item.level + 1
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"]), {
        values: [
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Checkbox$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CheckboxContext"]),
                {
                    slots: {
                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SLOT"])]: {},
                        selection: checkboxProps
                    }
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Button$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonContext"]),
                {
                    slots: {
                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SLOT"])]: {},
                        chevron: expandButtonProps,
                        drag: {
                            ...draggableItem?.dragButtonProps,
                            ref: dragButtonRef,
                            style: {
                                pointerEvents: 'none'
                            }
                        }
                    }
                }
            ],
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$SelectionIndicator$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectionIndicatorContext"]),
                {
                    isSelected: states.isSelected
                }
            ]
        ]
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement(CollectionBranch, {
        collection: state.collection,
        parent: item
    }))));
}, (props)=>{
    if (props.id == null && typeof props.children === 'function') throw new Error('No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.');
    let dependencies = [
        props.value
    ].concat(props.dependencies);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collection"]), {
        dependencies: dependencies,
        items: props.columns,
        idScope: props.id
    }, props.children);
});
class $76d00c5a4edb230a$var$TableCellNode extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionNode"]) {
    static{
        this.type = 'cell';
    }
}
let $76d00c5a4edb230a$var$TableCellElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableCellElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).td, {
        ...props,
        ref: ref
    });
});
const $76d00c5a4edb230a$export$f6f0c3fe4ec306ea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])($76d00c5a4edb230a$var$TableCellNode, (props, forwardedRef, cell)=>{
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(forwardedRef);
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { dragState: dragState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    cell.column = state.collection.columns[cell.index];
    let { gridCellProps: gridCellProps, isPressed: isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$table$2f$useTableCell$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useTableCell"])({
        node: cell,
        shouldSelectOnPressUp: !!dragState,
        isVirtualized: isVirtualized
    }, state, ref);
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$focus$2f$useFocusRing$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useFocusRing"])();
    let { hoverProps: hoverProps, isHovered: isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$interactions$2f$useHover$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useHover"])({});
    let isSelected = cell.parentKey != null ? state.selectionManager.isSelected(cell.parentKey) : false;
    // colIndex is null, when there is so span, falling back to using the index
    let columnIndex = cell.colIndex || cell.index;
    let row = state.collection.getItem(cell.parentKey);
    let hasChildItems = row.props.hasChildItems || state.collection.getItem(row.lastChildKey)?.type !== 'cell';
    let isExpanded = hasChildItems && state.expandedKeys.has(cell.parentKey);
    let isDisabled = state.selectionManager.isDisabled(cell.parentKey);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...props,
        id: undefined,
        defaultClassName: 'react-aria-Cell',
        values: {
            isFocused: isFocused,
            isFocusVisible: isFocusVisible,
            isPressed: isPressed,
            isHovered: isHovered,
            isSelected: isSelected,
            id: cell.key,
            columnIndex: columnIndex,
            hasChildItems: hasChildItems,
            isExpanded: isExpanded,
            isDisabled: isDisabled,
            level: row.level + 1,
            isTreeColumn: cell.column.key === state.treeColumn
        }
    });
    let DOMProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
        global: true
    });
    delete DOMProps.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(DOMProps, renderProps, gridCellProps, focusProps, hoverProps),
        ref: ref,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-pressed": isPressed || undefined,
        "data-selected": isSelected || undefined,
        "data-column-index": columnIndex,
        "data-expanded": isExpanded || undefined,
        "data-has-child-items": hasChildItems || undefined,
        "data-level": row.level + 1,
        "data-tree-column": cell.column.key === state.treeColumn || undefined,
        "data-disabled": isDisabled || undefined
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]).Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultCollectionRenderer"])
    }, renderProps.children));
});
function $76d00c5a4edb230a$var$TableDropIndicatorWrapper(props, ref) {
    ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useObjectRef$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useObjectRef"])(ref);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { dropIndicatorProps: dropIndicatorProps, isHidden: isHidden, isDropTarget: isDropTarget } = dragAndDropHooks.useDropIndicator(props, dropState, buttonRef);
    if (isHidden) return null;
    let level = dropState && props.target.type === 'item' ? (dropState.collection.getItem(props.target.key)?.level || 0) + 1 : 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableDropIndicatorForwardRef, {
        ...props,
        dropIndicatorProps: dropIndicatorProps,
        isDropTarget: isDropTarget,
        buttonRef: buttonRef,
        level: level,
        ref: ref
    });
}
let $76d00c5a4edb230a$var$TableDropIndicatorRowElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableDropIndicatorRowElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).tr, {
        ...props,
        ref: ref
    });
});
let $76d00c5a4edb230a$var$TableDropIndicatorTDElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function TableDropIndicatorTDElementType(props, ref) {
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    if (isVirtualized) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).div, {
        ...props,
        ref: ref
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dom"]).td, {
        ...props,
        ref: ref
    });
});
function $76d00c5a4edb230a$var$TableDropIndicator(props, ref) {
    let { dropIndicatorProps: dropIndicatorProps, isDropTarget: isDropTarget, buttonRef: buttonRef, level: level, ...otherProps } = props;
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useVisuallyHidden"])();
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...otherProps,
        defaultClassName: 'react-aria-DropIndicator',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': level + 1
        },
        values: {
            isDropTarget: isDropTarget
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableDropIndicatorRowElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
            global: true
        }),
        ...renderProps,
        role: "row",
        ref: ref,
        "data-drop-target": isDropTarget || undefined,
        "aria-level": level
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableDropIndicatorTDElementType, {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        ...visuallyHiddenProps,
        role: "button",
        ...dropIndicatorProps,
        ref: buttonRef
    }), renderProps.children));
}
const $76d00c5a4edb230a$var$TableDropIndicatorForwardRef = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])($76d00c5a4edb230a$var$TableDropIndicator);
function $76d00c5a4edb230a$var$RootDropIndicator() {
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { dragAndDropHooks: dragAndDropHooks, dropState: dropState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$DragAndDrop$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DragAndDropContext"]));
    let ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let { dropIndicatorProps: dropIndicatorProps } = dragAndDropHooks.useDropIndicator({
        target: {
            type: 'root'
        }
    }, dropState, ref);
    let isDropTarget = dropState.isDropTarget({
        type: 'root'
    });
    let { visuallyHiddenProps: visuallyHiddenProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$visually$2d$hidden$2f$VisuallyHidden$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useVisuallyHidden"])();
    if (!isDropTarget && dropIndicatorProps['aria-hidden']) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
        role: "row",
        "aria-hidden": dropIndicatorProps['aria-hidden'],
        style: {
            height: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
        role: "gridcell",
        colSpan: state.collection.columnCount,
        style: {
            padding: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        role: "button",
        ...visuallyHiddenProps,
        ...dropIndicatorProps,
        ref: ref
    })));
}
const $76d00c5a4edb230a$export$8f5bea0338ed243c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$CollectionBuilder$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLeafComponent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$collections$2f$BaseCollection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoaderNode"]), function TableLoadingIndicator(props, ref, item) {
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($76d00c5a4edb230a$export$38de1cb0526c21fb);
    let { isVirtualized: isVirtualized } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]));
    let { isLoading: isLoading, onLoadMore: onLoadMore, scrollOffset: scrollOffset, ...otherProps } = props;
    let numColumns = state.collection.columns.length;
    let sentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    let memoedLoadMoreProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            onLoadMore: onLoadMore,
            collection: state?.collection,
            sentinelRef: sentinelRef,
            scrollOffset: scrollOffset
        }), [
        onLoadMore,
        scrollOffset,
        state?.collection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLoadMoreSentinel$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useLoadMoreSentinel"])(memoedLoadMoreProps, sentinelRef);
    let renderProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRenderProps"])({
        ...otherProps,
        id: undefined,
        children: item.rendered,
        defaultClassName: 'react-aria-TableLoadingIndicator',
        defaultStyle: {
            // @ts-ignore
            '--table-row-level': item.level + 1
        },
        values: undefined
    });
    let rowProps = {};
    let rowHeaderProps = {};
    let style = {};
    if (isVirtualized) {
        // For now don't include aria-rowindex on loader since they aren't keyboard focusable
        // Arguably shouldn't include them ever since it might be confusing to the user to include the loaders as part of the
        // row count
        rowHeaderProps['aria-colspan'] = numColumns;
        style = {
            display: 'contents'
        };
    } else rowHeaderProps['colSpan'] = numColumns;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
        style: {
            height: 0
        },
        inert: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$inertValue$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inertValue"])(true)
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
        style: {
            padding: 0,
            border: 0
        }
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", {
        "data-testid": "loadMoreSentinel",
        ref: sentinelRef,
        style: {
            position: 'relative',
            height: 1,
            width: 1
        }
    }))), isLoading && renderProps.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableRowElementType, {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$filterDOMProps$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterDOMProps"])(props, {
            global: true
        }), rowProps),
        ...renderProps,
        role: "row",
        ref: ref,
        "aria-level": item.level + 1,
        "data-level": item.level + 1
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($76d00c5a4edb230a$var$TableCellElementType, {
        role: "rowheader",
        ...rowHeaderProps,
        style: style
    }, renderProps.children)));
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/TableLayout.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableLayout",
    ()=>$117bf84ed4596724$export$62444c3c724b1b20
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Table$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Table.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$layout$2f$TableLayout$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/layout/TableLayout.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
 */ class $117bf84ed4596724$export$62444c3c724b1b20 extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$layout$2f$TableLayout$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TableLayout"]) {
    // Invalidate the layout whenever the column widths change.
    useLayoutOptions() {
        // This is not a React class component, just a regular class.
        /* eslint-disable react-hooks/rules-of-hooks */ let colResizeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Table$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TableColumnResizeStateContext"]));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
                columnWidths: colResizeState?.columnWidths
            }), [
            colResizeState?.columnWidths
        ]);
    }
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Virtualizer.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Virtualizer",
    ()=>$143fb904d86051ce$export$89be5a243e59c4b2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/dist/private/Collection.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$virtualizer$2f$useVirtualizerState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/virtualizer/useVirtualizerState.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$virtualizer$2f$ScrollView$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/virtualizer/ScrollView.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$virtualizer$2f$VirtualizerItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/virtualizer/VirtualizerItem.mjs [app-rsc] (ecmascript)");
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
 */ const $143fb904d86051ce$var$VirtualizerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
const $143fb904d86051ce$var$LayoutContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createContext"])(null);
function $143fb904d86051ce$export$89be5a243e59c4b2(props) {
    let { children: children, layout: layoutProp, layoutOptions: layoutOptions } = props;
    let layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>typeof layoutProp === 'function' ? new layoutProp() : layoutProp, [
        layoutProp
    ]);
    let renderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isVirtualized: true,
            layoutDelegate: layout,
            dropTargetDelegate: layout.getDropTargetFromPoint ? layout : undefined,
            CollectionRoot: $143fb904d86051ce$var$CollectionRoot,
            CollectionBranch: $143fb904d86051ce$var$CollectionBranch
        }), [
        layout
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionRendererContext"]).Provider, {
        value: renderer
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($143fb904d86051ce$var$LayoutContext.Provider, {
        value: {
            layout: layout,
            layoutOptions: layoutOptions
        }
    }, children));
}
function $143fb904d86051ce$var$CollectionRoot({ collection: collection, persistedKeys: persistedKeys, scrollRef: scrollRef, renderDropIndicator: renderDropIndicator }) {
    let { layout: layout, layoutOptions: layoutOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($143fb904d86051ce$var$LayoutContext);
    let layoutOptions2 = layout.useLayoutOptions?.();
    let state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$virtualizer$2f$useVirtualizerState$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useVirtualizerState"])({
        allowsWindowScrolling: true,
        layout: layout,
        collection: collection,
        renderView: (type, item)=>{
            return item?.render?.(item);
        },
        onVisibleRectChange (rect) {
            let element = scrollRef?.current;
            if (element) {
                element.scrollLeft = rect.x;
                element.scrollTop = rect.y;
            }
        },
        persistedKeys: persistedKeys,
        layoutOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
            if (layoutOptions && layoutOptions2) return {
                ...layoutOptions,
                ...layoutOptions2
            };
            return layoutOptions || layoutOptions2;
        }, [
            layoutOptions,
            layoutOptions2
        ])
    });
    let { contentProps: contentProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$virtualizer$2f$ScrollView$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useScrollView"])({
        onVisibleRectChange: state.setVisibleRect,
        onSizeChange: state.setSize,
        contentSize: state.contentSize,
        onScrollStart: state.startScrolling,
        onScrollEnd: state.endScrolling,
        allowsWindowScrolling: true
    }, scrollRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement("div", contentProps, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement($143fb904d86051ce$var$VirtualizerContext.Provider, {
        value: state
    }, $143fb904d86051ce$var$renderChildren(null, state.visibleViews, renderDropIndicator)));
}
function $143fb904d86051ce$var$CollectionBranch({ parent: parent, renderDropIndicator: renderDropIndicator }) {
    let virtualizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useContext"])($143fb904d86051ce$var$VirtualizerContext);
    let parentView = virtualizer.virtualizer.getVisibleView(parent.key);
    return $143fb904d86051ce$var$renderChildren(parentView, Array.from(parentView.children), renderDropIndicator);
}
function $143fb904d86051ce$var$renderChildren(parent, children, renderDropIndicator) {
    return children.map((view)=>$143fb904d86051ce$var$renderWrapper(parent, view, renderDropIndicator));
}
function $143fb904d86051ce$var$renderWrapper(parent, reusableView, renderDropIndicator) {
    let rendered = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$virtualizer$2f$VirtualizerItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VirtualizerItem"]), {
        key: reusableView.key,
        layoutInfo: reusableView.layoutInfo,
        virtualizer: reusableView.virtualizer,
        parent: parent?.layoutInfo
    }, reusableView.rendered);
    let { collection: collection, layout: layout } = reusableView.virtualizer;
    let node = reusableView.content;
    if (node?.type === 'item' && renderDropIndicator && layout.getDropTargetLayoutInfo) rendered = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).Fragment, {
        key: reusableView.key
    }, $143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, {
        type: 'item',
        key: reusableView.content.key,
        dropPosition: 'before'
    }, renderDropIndicator), rendered, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$private$2f$Collection$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderAfterDropIndicators"])(collection, node, (target)=>$143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator)));
    return rendered;
}
function $143fb904d86051ce$var$renderDropIndicatorWrapper(parent, reusableView, target, renderDropIndicator) {
    let indicator = renderDropIndicator(target);
    if (indicator) {
        let layoutInfo = reusableView.virtualizer.layout.getDropTargetLayoutInfo(target);
        indicator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]).createElement((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$virtualizer$2f$VirtualizerItem$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VirtualizerItem"]), {
            layoutInfo: layoutInfo,
            virtualizer: reusableView.virtualizer,
            parent: parent?.layoutInfo
        }, indicator);
    }
    return indicator;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/zh-TW.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `收合`,
        expand: `展開`
    },
    "@react-aria/toast": {
        close: `關閉`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個通知`,
                other: ()=>`${t.number(e.count)} 個通知`
            })}。`
    },
    "@react-aria/tag": {
        removeButtonLabel: `移除`,
        removeDescription: `按 Delete 鍵以移除標記。`
    },
    "@react-aria/table": {
        ascending: `遞增`,
        ascendingSort: (e)=>`已依據「${e.columnName}」欄遞增排序`,
        columnSize: (e)=>`${e.value} 像素`,
        descending: `遞減`,
        descendingSort: (e)=>`已依據「${e.columnName}」欄遞減排序`,
        resizerDescription: `按 Enter 鍵以開始調整大小`,
        select: `選取`,
        selectAll: `全選`,
        sortable: `可排序的欄`,
        collapse: `收合`,
        expand: `展開`
    },
    "@react-aria/steplist": {
        steplist: `步驟清單`
    },
    "@react-aria/spinbutton": {
        Empty: `空白`
    },
    "@react-aria/searchfield": {
        "Clear search": `清除搜尋條件`
    },
    "@react-aria/overlays": {
        dismiss: `關閉`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`縮小 ${e.fieldLabel}`,
        increase: (e)=>`放大 ${e.fieldLabel}`,
        numberField: `數字欄位`
    },
    "@react-aria/menu": {
        longPressMessage: `長按或按 Alt+向下鍵以開啟功能表`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `列有動作`,
        hasLinkAnnouncement: (e)=>`列有連結：${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`未選取「${e.item}」。`,
        longPressToSelect: `長按以進入選擇模式。`,
        select: `選取`,
        selectedAll: `已選取所有項目。`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `未選取任何項目`,
                one: ()=>`已選取 ${t.number(e.count)} 個項目`,
                other: ()=>`已選取 ${t.number(e.count)} 個項目`
            })}。`,
        selectedItem: (e)=>`已選取「${e.item}」。`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `按 Enter 鍵以開始拖曳。`,
        dragDescriptionKeyboardAlt: `按 Alt+Enter 鍵以開始拖曳。`,
        dragDescriptionLongPress: `長按以開始拖曳。`,
        dragDescriptionTouch: `輕點兩下以開始拖曳。`,
        dragDescriptionVirtual: `按一下滑鼠以開始拖曳。`,
        dragItem: (e)=>`拖曳「${e.itemText}」`,
        dragSelectedItems: (e, t)=>`拖曳 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個選定項目`,
                other: ()=>`${t.number(e.count)} 個選定項目`
            })}`,
        dragSelectedKeyboard: (e, t)=>`按 Enter 鍵以拖曳 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個選定項目`,
                other: ()=>`${t.number(e.count)} 個選定項目`
            })}。`,
        dragSelectedKeyboardAlt: (e, t)=>`按 Alt+Enter 鍵以拖曳 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個選定項目`,
                other: ()=>`${t.number(e.count)} 個選定項目`
            })}。`,
        dragSelectedLongPress: (e, t)=>`長按以拖曳 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個選定項目`,
                other: ()=>`${t.number(e.count)} 個選定項目`
            })}。`,
        dragStartedKeyboard: `已開始拖曳。按 Tab 鍵以瀏覽至放置目標，然後按 Enter 鍵以放置，或按 Escape 鍵以取消。`,
        dragStartedTouch: `已開始拖曳。瀏覽至放置目標，然後輕點兩下以放置。`,
        dragStartedVirtual: `已開始拖曳。瀏覽至放置目標，然後按一下滑鼠或按 Enter 鍵以放置。`,
        dropCanceled: `放置已取消。`,
        dropComplete: `放置已完成。`,
        dropDescriptionKeyboard: `按 Enter 鍵以放置。按 Escape 鍵以取消拖曳。`,
        dropDescriptionTouch: `輕點兩下以放置。`,
        dropDescriptionVirtual: `按一下滑鼠以放置。`,
        dropIndicator: `放置指示器`,
        dropOnItem: (e)=>`放置在「${e.itemText}」上`,
        dropOnRoot: `放置在`,
        endDragKeyboard: `拖曳中。按 Enter 鍵以取消拖曳。`,
        endDragTouch: `拖曳中。輕點兩下以取消拖曳。`,
        endDragVirtual: `拖曳中。按一下滑鼠以取消拖曳。`,
        insertAfter: (e)=>`插入至「${e.itemText}」之後`,
        insertBefore: (e)=>`插入至「${e.itemText}」之前`,
        insertBetween: (e)=>`插入至「${e.beforeItemText}」和「${e.afterItemText}」之間`
    },
    "@react-aria/datepicker": {
        calendar: `日曆`,
        day: `日`,
        dayPeriod: `上午/下午`,
        endDate: `結束日期`,
        era: `纪元`,
        hour: `小时`,
        minute: `分钟`,
        month: `月`,
        second: `秒`,
        selectedDateDescription: (e)=>`選定的日期：${e.date}`,
        selectedRangeDescription: (e)=>`選定的範圍：${e.startDate} 至 ${e.endDate}`,
        selectedTimeDescription: (e)=>`選定的時間：${e.time}`,
        startDate: `開始日期`,
        timeZoneName: `时区`,
        weekday: `工作日`,
        year: `年`
    },
    "@react-aria/combobox": {
        buttonLabel: `顯示建議`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} 選項`,
                other: ()=>`${t.number(e.optionCount)} 選項`
            })} 可用。`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`輸入的群組 ${e.groupTitle}, 有 ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} 選項`,
                        other: ()=>`${t.number(e.groupCount)} 選項`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, 已選取`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `建議`,
        selectedAnnouncement: (e)=>`${e.optionText}, 已選取`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}，${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}：${e.value}`,
        colorPicker: `檢色器`,
        colorSwatch: `色票`,
        transparent: `透明`,
        twoDimensionalSlider: `2D 滑桿`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} 至 ${e.endDate}`,
        dateSelected: (e)=>`已選取 ${e.date}`,
        finishRangeSelectionPrompt: `按一下以完成選取日期範圍`,
        maximumDate: `最後一個可用日期`,
        minimumDate: `第一個可用日期`,
        next: `下一頁`,
        previous: `上一頁`,
        selectedDateDescription: (e)=>`選定的日期：${e.date}`,
        selectedRangeDescription: (e)=>`選定的範圍：${e.dateRange}`,
        startRangeSelectionPrompt: `按一下以開始選取日期範圍`,
        todayDate: (e)=>`今天，${e.date}`,
        todayDateSelected: (e)=>`已選取今天，${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `導覽列`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `建議`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`值必須是 ${e.maxValue} 或更早。`,
        rangeReversed: `開始日期必須在結束日期之前。`,
        rangeUnderflow: (e)=>`值必須是 ${e.minValue} 或更晚。`,
        unavailableDate: `所選日期無法使用。`
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: `黑`,
        blue: `藍色`,
        "blue purple": `藍紫`,
        brightness: `亮度`,
        brown: `棕`,
        "brown yellow": `棕黃`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `青`,
        "cyan blue": `青藍`,
        dark: `暗`,
        gray: `灰`,
        grayish: `偏灰`,
        green: `綠色`,
        "green cyan": `青綠`,
        hue: `色相`,
        light: `淺`,
        lightness: `明亮`,
        magenta: `洋紅`,
        "magenta pink": `淺洋紅`,
        orange: `橙`,
        "orange yellow": `橙黃`,
        pale: `淡`,
        pink: `粉紅`,
        "pink red": `粉紅`,
        purple: `紫`,
        "purple magenta": `紫洋紅`,
        red: `紅色`,
        "red orange": `橙紅`,
        saturation: `飽和度`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} 透明`,
        "very dark": `很暗`,
        "very light": `很淺`,
        vibrant: `鮮豔`,
        white: `白`,
        yellow: `黃`,
        "yellow green": `黃綠`
    },
    "react-aria-components": {
        colorSwatchPicker: `色票`,
        dropzoneLabel: `放置區`,
        selectPlaceholder: `選取項目`,
        tableResizer: `大小調整器`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/zh-CN.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `折叠`,
        expand: `扩展`
    },
    "@react-aria/toast": {
        close: `关闭`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 个通知`,
                other: ()=>`${t.number(e.count)} 个通知`
            })}。`
    },
    "@react-aria/tag": {
        removeButtonLabel: `删除`,
        removeDescription: `按下“删除”以删除标记。`
    },
    "@react-aria/table": {
        ascending: `升序`,
        ascendingSort: (e)=>`按列 ${e.columnName} 升序排序`,
        columnSize: (e)=>`${e.value} 像素`,
        descending: `降序`,
        descendingSort: (e)=>`按列 ${e.columnName} 降序排序`,
        resizerDescription: `按“输入”键开始调整大小。`,
        select: `选择`,
        selectAll: `全选`,
        sortable: `可排序的列`,
        collapse: `折叠`,
        expand: `扩展`
    },
    "@react-aria/steplist": {
        steplist: `步骤列表`
    },
    "@react-aria/spinbutton": {
        Empty: `空`
    },
    "@react-aria/searchfield": {
        "Clear search": `清除搜索`
    },
    "@react-aria/overlays": {
        dismiss: `取消`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`降低 ${e.fieldLabel}`,
        increase: (e)=>`提高 ${e.fieldLabel}`,
        numberField: `数字字段`
    },
    "@react-aria/menu": {
        longPressMessage: `长按或按 Alt + 向下方向键以打开菜单`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `行有操作`,
        hasLinkAnnouncement: (e)=>`行有链接：${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`未选择 ${e.item}。`,
        longPressToSelect: `长按以进入选择模式。`,
        select: `选择`,
        selectedAll: `已选择所有项目。`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `未选择项目`,
                one: ()=>`已选择 ${t.number(e.count)} 个项目`,
                other: ()=>`已选择 ${t.number(e.count)} 个项目`
            })}。`,
        selectedItem: (e)=>`已选择 ${e.item}。`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `按 Enter 开始拖动。`,
        dragDescriptionKeyboardAlt: `按 Alt + Enter 开始拖动。`,
        dragDescriptionLongPress: `长按以开始拖动。`,
        dragDescriptionTouch: `双击开始拖动。`,
        dragDescriptionVirtual: `单击开始拖动。`,
        dragItem: (e)=>`拖动 ${e.itemText}`,
        dragSelectedItems: (e, t)=>`拖动 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 选中项目`,
                other: ()=>`${t.number(e.count)} 选中项目`
            })}`,
        dragSelectedKeyboard: (e, t)=>`按 Enter 以拖动 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 个选定项`,
                other: ()=>`${t.number(e.count)} 个选定项`
            })}。`,
        dragSelectedKeyboardAlt: (e, t)=>`按 Alt + Enter 以拖动 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 个选定项`,
                other: ()=>`${t.number(e.count)} 个选定项`
            })}。`,
        dragSelectedLongPress: (e, t)=>`长按以拖动 ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 个选定项`,
                other: ()=>`${t.number(e.count)} 个选定项`
            })}。`,
        dragStartedKeyboard: `已开始拖动。按 Tab 导航到放置目标，然后按 Enter 放置或按 Escape 取消。`,
        dragStartedTouch: `已开始拖动。导航到放置目标，然后双击放置。`,
        dragStartedVirtual: `已开始拖动。导航到放置目标，然后单击或按 Enter 放置。`,
        dropCanceled: `放置已取消。`,
        dropComplete: `放置已完成。`,
        dropDescriptionKeyboard: `按 Enter 放置。按 Escape 取消拖动。`,
        dropDescriptionTouch: `双击放置。`,
        dropDescriptionVirtual: `单击放置。`,
        dropIndicator: `放置标记`,
        dropOnItem: (e)=>`放置于 ${e.itemText}`,
        dropOnRoot: `放置于`,
        endDragKeyboard: `正在拖动。按 Enter 取消拖动。`,
        endDragTouch: `正在拖动。双击取消拖动。`,
        endDragVirtual: `正在拖动。单击取消拖动。`,
        insertAfter: (e)=>`插入到 ${e.itemText} 之后`,
        insertBefore: (e)=>`插入到 ${e.itemText} 之前`,
        insertBetween: (e)=>`插入到 ${e.beforeItemText} 和 ${e.afterItemText} 之间`
    },
    "@react-aria/datepicker": {
        calendar: `日历`,
        day: `日`,
        dayPeriod: `上午/下午`,
        endDate: `结束日期`,
        era: `纪元`,
        hour: `小时`,
        minute: `分钟`,
        month: `月`,
        second: `秒`,
        selectedDateDescription: (e)=>`选定的日期：${e.date}`,
        selectedRangeDescription: (e)=>`选定的范围：${e.startDate} 至 ${e.endDate}`,
        selectedTimeDescription: (e)=>`选定的时间：${e.time}`,
        startDate: `开始日期`,
        timeZoneName: `时区`,
        weekday: `工作日`,
        year: `年`
    },
    "@react-aria/combobox": {
        buttonLabel: `显示建议`,
        countAnnouncement: (e, t)=>`有 ${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} 个选项`,
                other: ()=>`${t.number(e.optionCount)} 个选项`
            })}可用。`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`进入了 ${e.groupTitle} 组，其中有 ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} 个选项`,
                        other: ()=>`${t.number(e.groupCount)} 个选项`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, 已选择`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `建议`,
        selectedAnnouncement: (e)=>`${e.optionText}, 已选择`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}、${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}：${e.value}`,
        colorPicker: `拾色器`,
        colorSwatch: `颜色色板`,
        transparent: `透明`,
        twoDimensionalSlider: `2D 滑块`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} 至 ${e.endDate}`,
        dateSelected: (e)=>`已选择 ${e.date}`,
        finishRangeSelectionPrompt: `单击以完成选择日期范围`,
        maximumDate: `最后一个可用日期`,
        minimumDate: `第一个可用日期`,
        next: `下一页`,
        previous: `上一页`,
        selectedDateDescription: (e)=>`选定的日期：${e.date}`,
        selectedRangeDescription: (e)=>`选定的范围：${e.dateRange}`,
        startRangeSelectionPrompt: `单击以开始选择日期范围`,
        todayDate: (e)=>`今天，即 ${e.date}`,
        todayDateSelected: (e)=>`已选择今天，即 ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `导航栏`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `建议`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`值必须是 ${e.maxValue} 或更早日期。`,
        rangeReversed: `开始日期必须早于结束日期。`,
        rangeUnderflow: (e)=>`值必须是 ${e.minValue} 或更晚日期。`,
        unavailableDate: `所选日期不可用。`
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: `黑色`,
        blue: `蓝色`,
        "blue purple": `蓝紫色`,
        brightness: `亮度`,
        brown: `棕色的`,
        "brown yellow": `棕黄色`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `蓝绿色`,
        "cyan blue": `青蓝色`,
        dark: `深色`,
        gray: `灰色`,
        grayish: `浅灰色的`,
        green: `绿色`,
        "green cyan": `绿青色`,
        hue: `色相`,
        light: `浅色`,
        lightness: `明亮度`,
        magenta: `紫红色`,
        "magenta pink": `紫粉色`,
        orange: `橙色`,
        "orange yellow": `橙黄色`,
        pale: `苍白的`,
        pink: `粉色`,
        "pink red": `粉红色`,
        purple: `紫色`,
        "purple magenta": `紫洋红色`,
        red: `红色`,
        "red orange": `红橙色`,
        saturation: `饱和度`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} 透明`,
        "very dark": `很暗`,
        "very light": `很浅`,
        vibrant: `生机勃勃`,
        white: `白色`,
        yellow: `黄色`,
        "yellow green": `黄色/绿色`
    },
    "react-aria-components": {
        colorSwatchPicker: `颜色色板`,
        dropzoneLabel: `放置区域`,
        selectPlaceholder: `选择一个项目`,
        tableResizer: `尺寸调整器`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/uk-UA.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Згорнути`,
        expand: `Розгорнути`
    },
    "@react-aria/toast": {
        close: `Закрити`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} сповіщення`,
                other: ()=>`${t.number(e.count)} сповіщення`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Вилучити`,
        removeDescription: `Натисніть Delete, щоб вилучити тег.`
    },
    "@react-aria/table": {
        ascending: `висхідний`,
        ascendingSort: (e)=>`відсортовано за стовпцем ${e.columnName} у висхідному порядку`,
        columnSize: (e)=>`${e.value} пікс.`,
        descending: `низхідний`,
        descendingSort: (e)=>`відсортовано за стовпцем ${e.columnName} у низхідному порядку`,
        resizerDescription: `Натисніть Enter, щоб почати зміну розміру`,
        select: `Вибрати`,
        selectAll: `Вибрати все`,
        sortable: `сортувальний стовпець`,
        collapse: `Згорнути`,
        expand: `Розгорнути`
    },
    "@react-aria/steplist": {
        steplist: `Список кроків`
    },
    "@react-aria/spinbutton": {
        Empty: `Пусто`
    },
    "@react-aria/searchfield": {
        "Clear search": `Очистити пошук`
    },
    "@react-aria/overlays": {
        dismiss: `Скасувати`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Зменшити ${e.fieldLabel}`,
        increase: (e)=>`Збільшити ${e.fieldLabel}`,
        numberField: `Поле номера`
    },
    "@react-aria/menu": {
        longPressMessage: `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `рядок містить дію`,
        hasLinkAnnouncement: (e)=>`рядок містить посилання: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} не вибрано.`,
        longPressToSelect: `Виконайте довге натиснення, щоб перейти в режим вибору.`,
        select: `Вибрати`,
        selectedAll: `Усі елементи вибрано.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `Жодних елементів не вибрано`,
                one: ()=>`${t.number(e.count)} елемент вибрано`,
                other: ()=>`Вибрано елементів: ${t.number(e.count)}`
            })}.`,
        selectedItem: (e)=>`${e.item} вибрано.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Натисніть Enter, щоб почати перетягування.`,
        dragDescriptionKeyboardAlt: `Натисніть Alt + Enter, щоб почати перетягування.`,
        dragDescriptionLongPress: `Натисніть і утримуйте, щоб почати перетягування.`,
        dragDescriptionTouch: `Натисніть двічі, щоб почати перетягування.`,
        dragDescriptionVirtual: `Натисніть, щоб почати перетягування.`,
        dragItem: (e)=>`Перетягнути ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Перетягніть ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} вибраний елемент`,
                other: ()=>`${t.number(e.count)} вибраних елем`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Натисніть Enter, щоб перетягнути ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} вибраний елемент`,
                other: ()=>`${t.number(e.count)} вибраних елементи(-ів)`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Натисніть Alt + Enter, щоб перетягнути ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} вибраний елемент`,
                other: ()=>`${t.number(e.count)} вибраних елементи(-ів)`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Утримуйте, щоб перетягнути ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} вибраний елемент`,
                other: ()=>`${t.number(e.count)} вибраних елементи(-ів)`
            })}.`,
        dragStartedKeyboard: `Перетягування почалося. Натисніть Tab, щоб перейти до цілі перетягування, потім натисніть Enter, щоб перетягнути, або Escape, щоб скасувати.`,
        dragStartedTouch: `Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть двічі, щоб перетягнути.`,
        dragStartedVirtual: `Перетягування почалося. Перейдіть до цілі перетягування, потім натисніть Enter, щоб перетягнути.`,
        dropCanceled: `Перетягування скасовано.`,
        dropComplete: `Перетягування завершено.`,
        dropDescriptionKeyboard: `Натисніть Enter, щоб перетягнути. Натисніть Escape, щоб скасувати перетягування.`,
        dropDescriptionTouch: `Натисніть двічі, щоб перетягнути.`,
        dropDescriptionVirtual: `Натисніть, щоб перетягнути.`,
        dropIndicator: `індикатор перетягування`,
        dropOnItem: (e)=>`Перетягнути на ${e.itemText}`,
        dropOnRoot: `Перетягнути на`,
        endDragKeyboard: `Триває перетягування. Натисніть Enter, щоб скасувати перетягування.`,
        endDragTouch: `Триває перетягування. Натисніть двічі, щоб скасувати перетягування.`,
        endDragVirtual: `Триває перетягування. Натисніть, щоб скасувати перетягування.`,
        insertAfter: (e)=>`Вставити після ${e.itemText}`,
        insertBefore: (e)=>`Вставити перед ${e.itemText}`,
        insertBetween: (e)=>`Вставити між ${e.beforeItemText} і ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Календар`,
        day: `день`,
        dayPeriod: `дп/пп`,
        endDate: `Дата завершення`,
        era: `ера`,
        hour: `година`,
        minute: `хвилина`,
        month: `місяць`,
        second: `секунда`,
        selectedDateDescription: (e)=>`Вибрана дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Вибраний діапазон: ${e.startDate} — ${e.endDate}`,
        selectedTimeDescription: (e)=>`Вибраний час: ${e.time}`,
        startDate: `Дата початку`,
        timeZoneName: `часовий пояс`,
        weekday: `день тижня`,
        year: `рік`
    },
    "@react-aria/combobox": {
        buttonLabel: `Показати пропозиції`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} параметр`,
                other: ()=>`${t.number(e.optionCount)} параметри(-ів)`
            })} доступно.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Введена група ${e.groupTitle}, з ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} параметр`,
                        other: ()=>`${t.number(e.groupCount)} параметри(-ів)`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, вибрано`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Пропозиції`,
        selectedAnnouncement: (e)=>`${e.optionText}, вибрано`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Палітра кольорів`,
        colorSwatch: `зразок кольору`,
        transparent: `прозорий`,
        twoDimensionalSlider: `Повзунок 2D`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} — ${e.endDate}`,
        dateSelected: (e)=>`Вибрано ${e.date}`,
        finishRangeSelectionPrompt: `Натисніть, щоб завершити вибір діапазону дат`,
        maximumDate: `Остання доступна дата`,
        minimumDate: `Перша доступна дата`,
        next: `Наступний`,
        previous: `Попередній`,
        selectedDateDescription: (e)=>`Вибрана дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Вибраний діапазон: ${e.dateRange}`,
        startRangeSelectionPrompt: `Натисніть, щоб почати вибір діапазону дат`,
        todayDate: (e)=>`Сьогодні, ${e.date}`,
        todayDateSelected: (e)=>`Сьогодні, вибрано ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Навігаційна стежка`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Пропозиції`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Значення має бути не пізніше ${e.maxValue}.`,
        rangeReversed: `Дата початку має передувати даті завершення.`,
        rangeUnderflow: (e)=>`Значення має бути не раніше ${e.minValue}.`,
        unavailableDate: `Вибрана дата недоступна.`
    },
    "@react-stately/color": {
        alpha: `Альфа`,
        black: `чорний`,
        blue: `Синій`,
        "blue purple": `синьо-фіолетовий`,
        brightness: `Яскравість`,
        brown: `коричневий`,
        "brown yellow": `коричнево-жовтий`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `блакитний`,
        "cyan blue": `синьо-блакитний`,
        dark: `темний`,
        gray: `сірий`,
        grayish: `сіруватий`,
        green: `Зелений`,
        "green cyan": `зелено-блакитний`,
        hue: `Тон`,
        light: `світлий`,
        lightness: `Освітленість`,
        magenta: `пурпуровий`,
        "magenta pink": `пурпурово-рожевий`,
        orange: `помаранчевий`,
        "orange yellow": `помаранчево-жовтий`,
        pale: `блідий`,
        pink: `рожевий`,
        "pink red": `рожево-червоний`,
        purple: `фіолетовий`,
        "purple magenta": `фіолетово-пурпуровий`,
        red: `Червоний`,
        "red orange": `червоно-помаранчевий`,
        saturation: `Насиченість`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, прозорий на ${e.percentTransparent}`,
        "very dark": `дуже темний`,
        "very light": `дуже світлий`,
        vibrant: `яскравий`,
        white: `білий`,
        yellow: `жовтий`,
        "yellow green": `жовто-зелений`
    },
    "react-aria-components": {
        colorSwatchPicker: `Зразки кольорів`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Виберіть елемент`,
        tableResizer: `Засіб змінення розміру`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/tr-TR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Daralt",
        expand: `Genişlet`
    },
    "@react-aria/toast": {
        close: "Kapat",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} bildirim`,
                other: ()=>`${a.number(e.count)} bildirim`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Kaldır`,
        removeDescription: `Etiketi kaldırmak i\xe7in Sil tuşuna basın.`
    },
    "@react-aria/table": {
        ascending: `artan sırada`,
        ascendingSort: (e)=>`${e.columnName} s\xfctuna g\xf6re artan d\xfczende sırala`,
        columnSize: (e)=>`${e.value} piksel`,
        descending: `azalan sırada`,
        descendingSort: (e)=>`${e.columnName} s\xfctuna g\xf6re azalan d\xfczende sırala`,
        resizerDescription: `Yeniden boyutlandırmak i\xe7in Enter'a basın`,
        select: `Se\xe7`,
        selectAll: `T\xfcm\xfcn\xfc Se\xe7`,
        sortable: `Sıralanabilir s\xfctun`,
        collapse: "Daralt",
        expand: `Genişlet`
    },
    "@react-aria/steplist": {
        steplist: `Adım Listesi`
    },
    "@react-aria/spinbutton": {
        Empty: `Boş`
    },
    "@react-aria/searchfield": {
        "Clear search": `Aramayı temizle`
    },
    "@react-aria/overlays": {
        dismiss: "Kapat"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel} azalt`,
        increase: (e)=>`${e.fieldLabel} arttır`,
        numberField: `Sayı alanı`
    },
    "@react-aria/menu": {
        longPressMessage: `Men\xfcy\xfc a\xe7mak i\xe7in uzun basın veya Alt + Aşağı Ok tuşuna basın`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `satırdaki işlem`,
        hasLinkAnnouncement: (e)=>`satırdaki bağlantı: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} se\xe7ilmedi.`,
        longPressToSelect: `Se\xe7im moduna girmek i\xe7in uzun basın.`,
        select: `Se\xe7`,
        selectedAll: `T\xfcm \xf6geler se\xe7ildi.`,
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Hi\xe7bir \xf6ge se\xe7ilmedi`,
                one: ()=>`${a.number(e.count)} \xf6ge se\xe7ildi`,
                other: ()=>`${a.number(e.count)} \xf6ge se\xe7ildi`
            })}.`,
        selectedItem: (e)=>`${e.item} se\xe7ildi.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `S\xfcr\xfcklemeyi başlatmak i\xe7in Enter'a basın.`,
        dragDescriptionKeyboardAlt: `S\xfcr\xfcklemeyi başlatmak i\xe7in Alt + Enter'a basın.`,
        dragDescriptionLongPress: `S\xfcr\xfcklemeye başlamak i\xe7in uzun basın.`,
        dragDescriptionTouch: `S\xfcr\xfcklemeyi başlatmak i\xe7in \xe7ift tıklayın.`,
        dragDescriptionVirtual: `S\xfcr\xfcklemeyi başlatmak i\xe7in tıklayın.`,
        dragItem: (e)=>`${e.itemText}’i s\xfcr\xfckle`,
        dragSelectedItems: (e, a)=>`S\xfcr\xfckle ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} se\xe7ili \xf6ge`,
                other: ()=>`${a.number(e.count)} se\xe7ili \xf6ge`
            })}`,
        dragSelectedKeyboard: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`,
                other: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`
            })} \xf6ğesini s\xfcr\xfcklemek i\xe7in Enter'a basın.`,
        dragSelectedKeyboardAlt: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`,
                other: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`
            })} \xf6ğesini s\xfcr\xfcklemek i\xe7in Alt + Enter tuşuna basın.`,
        dragSelectedLongPress: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`,
                other: ()=>`${a.number(e.count)} se\xe7ilmiş \xf6ğe`
            })} \xf6ğesini s\xfcr\xfcklemek i\xe7in uzun basın.`,
        dragStartedKeyboard: `S\xfcr\xfckleme başlatıldı. Bir bırakma hedefine gitmek i\xe7in Tab’a basın, ardından bırakmak i\xe7in Enter’a basın veya iptal etmek i\xe7in Escape’e basın.`,
        dragStartedTouch: `S\xfcr\xfckleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak i\xe7in \xe7ift tıklayın.`,
        dragStartedVirtual: `S\xfcr\xfckleme başlatıldı. Bir bırakma hedefine gidin, ardından bırakmak i\xe7in Enter’a tıklayın veya basın.`,
        dropCanceled: `Bırakma iptal edildi.`,
        dropComplete: `Bırakma tamamlandı.`,
        dropDescriptionKeyboard: `Bırakmak i\xe7in Enter'a basın. S\xfcr\xfcklemeyi iptal etmek i\xe7in Escape'e basın.`,
        dropDescriptionTouch: `Bırakmak i\xe7in \xe7ift tıklayın.`,
        dropDescriptionVirtual: `Bırakmak i\xe7in tıklayın.`,
        dropIndicator: `bırakma g\xf6stergesi`,
        dropOnItem: (e)=>`${e.itemText} \xfczerine bırak`,
        dropOnRoot: `Bırakın`,
        endDragKeyboard: `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in Enter'a basın.`,
        endDragTouch: `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in \xe7ift tıklayın.`,
        endDragVirtual: `S\xfcr\xfckleme. S\xfcr\xfcklemeyi iptal etmek i\xe7in tıklayın.`,
        insertAfter: (e)=>`${e.itemText}’den sonra gir`,
        insertBefore: (e)=>`${e.itemText}’den \xf6nce gir`,
        insertBetween: (e)=>`${e.beforeItemText} ve ${e.afterItemText} arasına gir`
    },
    "@react-aria/datepicker": {
        calendar: "Takvim",
        day: `g\xfcn`,
        dayPeriod: `\xd6\xd6/\xd6S`,
        endDate: `Bitiş Tarihi`,
        era: `\xe7ağ`,
        hour: "saat",
        minute: "dakika",
        month: "ay",
        second: "saniye",
        selectedDateDescription: (e)=>`Se\xe7ilen Tarih: ${e.date}`,
        selectedRangeDescription: (e)=>`Se\xe7ilen Aralık: ${e.startDate} - ${e.endDate}`,
        selectedTimeDescription: (e)=>`Se\xe7ilen Zaman: ${e.time}`,
        startDate: `Başlangı\xe7 Tarihi`,
        timeZoneName: "saat dilimi",
        weekday: `haftanın g\xfcn\xfc`,
        year: `yıl`
    },
    "@react-aria/combobox": {
        buttonLabel: `\xd6nerileri g\xf6ster`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} se\xe7enek`,
                other: ()=>`${a.number(e.optionCount)} se\xe7enekler`
            })} kullanılabilir.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Girilen grup ${e.groupTitle}, ile ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} se\xe7enek`,
                        other: ()=>`${a.number(e.groupCount)} se\xe7enekler`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: `, se\xe7ildi`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `\xd6neriler`,
        selectedAnnouncement: (e)=>`${e.optionText}, se\xe7ildi`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Renk Se\xe7ici`,
        colorSwatch: `renk \xf6rneği`,
        transparent: "saydam",
        twoDimensionalSlider: `2D s\xfcrg\xfc`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} - ${e.endDate}`,
        dateSelected: (e)=>`${e.date} se\xe7ildi`,
        finishRangeSelectionPrompt: `Tarih aralığı se\xe7imini tamamlamak i\xe7in tıklayın`,
        maximumDate: `Son m\xfcsait tarih`,
        minimumDate: `İlk m\xfcsait tarih`,
        next: "Sonraki",
        previous: `\xd6nceki`,
        selectedDateDescription: (e)=>`Se\xe7ilen Tarih: ${e.date}`,
        selectedRangeDescription: (e)=>`Se\xe7ilen Aralık: ${e.dateRange}`,
        startRangeSelectionPrompt: `Tarih aralığı se\xe7imini başlatmak i\xe7in tıklayın`,
        todayDate: (e)=>`Bug\xfcn, ${e.date}`,
        todayDateSelected: (e)=>`Bug\xfcn, ${e.date} se\xe7ildi`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `İ\xe7erik haritaları`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `\xd6neriler`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Değer, ${e.maxValue} veya \xf6ncesi olmalıdır.`,
        rangeReversed: `Başlangı\xe7 tarihi bitiş tarihinden \xf6nce olmalıdır.`,
        rangeUnderflow: (e)=>`Değer, ${e.minValue} veya sonrası olmalıdır.`,
        unavailableDate: `Se\xe7ilen tarih kullanılamıyor.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "siyah",
        blue: "Mavi",
        "blue purple": "mavi mor",
        brightness: `Parlaklık`,
        brown: "kahverengi",
        "brown yellow": `kahverengi sarı`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `camg\xf6beği`,
        "cyan blue": `camg\xf6beği mavi`,
        dark: "koyu",
        gray: "gri",
        grayish: "grimsi",
        green: `Yeşil`,
        "green cyan": `yeşil camg\xf6beği`,
        hue: "Ton",
        light: `a\xe7ık`,
        lightness: `Canlılık`,
        magenta: "eflatun",
        "magenta pink": "eflatun pembe",
        orange: "turuncu",
        "orange yellow": `turuncu sarı`,
        pale: "solgun",
        pink: "pembe",
        "pink red": `pembe kırmızı`,
        purple: "mor",
        "purple magenta": "mor eflatun",
        red: `Kırmızı`,
        "red orange": `kırmızı portakal`,
        saturation: "Doygunluk",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} saydam`,
        "very dark": `\xe7ok koyu`,
        "very light": `\xe7ok a\xe7ık`,
        vibrant: `canlı`,
        white: "beyaz",
        yellow: `sarı`,
        "yellow green": `sarı yeşil`
    },
    "react-aria-components": {
        colorSwatchPicker: `Renk \xf6rnekleri`,
        dropzoneLabel: `Bırakma B\xf6lgesi`,
        selectPlaceholder: `Bir \xf6ğe se\xe7in`,
        tableResizer: `Yeniden boyutlandırıcı`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sv-SE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `D\xf6lj`,
        expand: "Expandera"
    },
    "@react-aria/toast": {
        close: `St\xe4ng`,
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} meddelande`,
                other: ()=>`${a.number(e.count)} meddelanden`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Ta bort",
        removeDescription: `Tryck p\xe5 Radera f\xf6r att ta bort taggen.`
    },
    "@react-aria/table": {
        ascending: "stigande",
        ascendingSort: (e)=>`sorterat p\xe5 kolumn ${e.columnName} i stigande ordning`,
        columnSize: (e)=>`${e.value} pixlar`,
        descending: "fallande",
        descendingSort: (e)=>`sorterat p\xe5 kolumn ${e.columnName} i fallande ordning`,
        resizerDescription: `Tryck p\xe5 Retur f\xf6r att b\xf6rja \xe4ndra storlek`,
        select: "Markera",
        selectAll: "Markera allt",
        sortable: "sorterbar kolumn",
        collapse: `D\xf6lj`,
        expand: "Expandera"
    },
    "@react-aria/steplist": {
        steplist: "Steglista"
    },
    "@react-aria/spinbutton": {
        Empty: "Tomt"
    },
    "@react-aria/searchfield": {
        "Clear search": `Rensa s\xf6kning`
    },
    "@react-aria/overlays": {
        dismiss: "Avvisa"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Minska ${e.fieldLabel}`,
        increase: (e)=>`\xd6ka ${e.fieldLabel}`,
        numberField: `Nummerf\xe4lt`
    },
    "@react-aria/menu": {
        longPressMessage: `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `rad har \xe5tg\xe4rd`,
        hasLinkAnnouncement: (e)=>`rad har l\xe4nk: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} ej markerat.`,
        longPressToSelect: `Tryck l\xe4nge n\xe4r du vill \xf6ppna v\xe4ljarl\xe4ge.`,
        select: "Markera",
        selectedAll: "Alla markerade objekt.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Inga markerade objekt",
                one: ()=>`${a.number(e.count)} markerat objekt`,
                other: ()=>`${a.number(e.count)} markerade objekt`
            })}.`,
        selectedItem: (e)=>`${e.item} markerat.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Tryck p\xe5 enter f\xf6r att b\xf6rja dra.`,
        dragDescriptionKeyboardAlt: `Tryck p\xe5 Alt + Retur f\xf6r att b\xf6rja dra.`,
        dragDescriptionLongPress: `Tryck l\xe4nge f\xf6r att b\xf6rja dra.`,
        dragDescriptionTouch: `Dubbeltryck f\xf6r att b\xf6rja dra.`,
        dragDescriptionVirtual: `Klicka f\xf6r att b\xf6rja dra.`,
        dragItem: (e)=>`Dra ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Dra ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valt objekt`,
                other: ()=>`${a.number(e.count)} valda objekt`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Tryck p\xe5 Retur f\xf6r att dra ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} markerat objekt`,
                other: ()=>`${a.number(e.count)} markerade objekt`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Tryck p\xe5 Alt + Retur f\xf6r att dra ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} markerat objekt`,
                other: ()=>`${a.number(e.count)} markerade objekt`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Tryck l\xe4nge f\xf6r att dra ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} markerat objekt`,
                other: ()=>`${a.number(e.count)} markerade objekt`
            })}.`,
        dragStartedKeyboard: `B\xf6rja dra. Tryck p\xe5 tabb f\xf6r att navigera till m\xe5let, tryck p\xe5 enter f\xf6r att sl\xe4ppa eller p\xe5 escape f\xf6r att avbryta.`,
        dragStartedTouch: `B\xf6rja dra. Navigera till ett m\xe5l och dubbeltryck f\xf6r att sl\xe4ppa.`,
        dragStartedVirtual: `B\xf6rja dra. Navigera till ett m\xe5l och klicka eller tryck p\xe5 enter f\xf6r att sl\xe4ppa.`,
        dropCanceled: `Sl\xe4pp\xe5tg\xe4rd avbr\xf6ts.`,
        dropComplete: `Sl\xe4pp\xe5tg\xe4rd klar.`,
        dropDescriptionKeyboard: `Tryck p\xe5 enter f\xf6r att sl\xe4ppa. Tryck p\xe5 escape f\xf6r att avbryta drag\xe5tg\xe4rd.`,
        dropDescriptionTouch: `Dubbeltryck f\xf6r att sl\xe4ppa.`,
        dropDescriptionVirtual: `Klicka f\xf6r att sl\xe4ppa.`,
        dropIndicator: `sl\xe4ppindikator`,
        dropOnItem: (e)=>`Sl\xe4pp p\xe5 ${e.itemText}`,
        dropOnRoot: `Sl\xe4pp p\xe5`,
        endDragKeyboard: `Drar. Tryck p\xe5 enter f\xf6r att avbryta drag\xe5tg\xe4rd.`,
        endDragTouch: `Drar. Dubbeltryck f\xf6r att avbryta drag\xe5tg\xe4rd.`,
        endDragVirtual: `Drar. Klicka f\xf6r att avbryta drag\xe5tg\xe4rd.`,
        insertAfter: (e)=>`Infoga efter ${e.itemText}`,
        insertBefore: (e)=>`Infoga f\xf6re ${e.itemText}`,
        insertBetween: (e)=>`Infoga mellan ${e.beforeItemText} och ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: "dag",
        dayPeriod: "fm/em",
        endDate: "Slutdatum",
        era: "era",
        hour: "timme",
        minute: "minut",
        month: `m\xe5nad`,
        second: "sekund",
        selectedDateDescription: (e)=>`Valt datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Valt intervall: ${e.startDate} till ${e.endDate}`,
        selectedTimeDescription: (e)=>`Vald tid: ${e.time}`,
        startDate: "Startdatum",
        timeZoneName: "tidszon",
        weekday: "veckodag",
        year: `\xe5r`
    },
    "@react-aria/combobox": {
        buttonLabel: `Visa f\xf6rslag`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} alternativ`,
                other: ()=>`${a.number(e.optionCount)} alternativ`
            })} tillg\xe4ngliga.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Ingick i gruppen ${e.groupTitle} med ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} alternativ`,
                        other: ()=>`${a.number(e.groupCount)} alternativ`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", valda",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `F\xf6rslag`,
        selectedAnnouncement: (e)=>`${e.optionText}, valda`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `F\xe4rgv\xe4ljaren`,
        colorSwatch: `f\xe4rgruta`,
        transparent: "genomskinlig",
        twoDimensionalSlider: "2D-reglage"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} till ${e.endDate}`,
        dateSelected: (e)=>`${e.date} har valts`,
        finishRangeSelectionPrompt: `Klicka f\xf6r att avsluta val av datumintervall`,
        maximumDate: `Sista tillg\xe4ngliga datum`,
        minimumDate: `F\xf6rsta tillg\xe4ngliga datum`,
        next: `N\xe4sta`,
        previous: `F\xf6reg\xe5ende`,
        selectedDateDescription: (e)=>`Valt datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Valt intervall: ${e.dateRange}`,
        startRangeSelectionPrompt: `Klicka f\xf6r att v\xe4lja datumintervall`,
        todayDate: (e)=>`Idag, ${e.date}`,
        todayDateSelected: (e)=>`Idag, ${e.date} har valts`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `S\xf6kv\xe4gar`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `F\xf6rslag`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,
        rangeReversed: `Startdatumet m\xe5ste vara f\xf6re slutdatumet.`,
        rangeUnderflow: (e)=>`V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,
        unavailableDate: `Det valda datumet \xe4r inte tillg\xe4ngligt.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "svart",
        blue: `Bl\xe5tt`,
        "blue purple": `bl\xe5lila`,
        brightness: "Ljusstyrka",
        brown: "brun",
        "brown yellow": "brungul",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cyan",
        "cyan blue": `cyanbl\xe5`,
        dark: `m\xf6rk`,
        gray: `gr\xe5`,
        grayish: `gr\xe5aktig`,
        green: `Gr\xf6nt`,
        "green cyan": `gr\xf6n cyan`,
        hue: "Nyans",
        light: "ljus",
        lightness: "Ljushet",
        magenta: "magenta",
        "magenta pink": "magentarosa",
        orange: "orange",
        "orange yellow": "orangegul",
        pale: "blek",
        pink: "rosa",
        "pink red": `rosar\xf6d`,
        purple: "lila",
        "purple magenta": "lila magenta",
        red: `R\xf6tt`,
        "red orange": `r\xf6dorange`,
        saturation: `M\xe4ttnad`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} genomskinlig`,
        "very dark": `mycket m\xf6rk`,
        "very light": "mycket ljus",
        vibrant: "livfull",
        white: "vit",
        yellow: "gul",
        "yellow green": `gulgr\xf6n`
    },
    "react-aria-components": {
        colorSwatchPicker: `F\xe4rgrutor`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe4lj en artikel`,
        tableResizer: `Storleks\xe4ndrare`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sr-SP.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: " Skupi",
        expand: `Proširi`
    },
    "@react-aria/toast": {
        close: "Zatvori",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} obaveštenje`,
                other: ()=>`${a.number(e.count)} obaveštenja`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Ukloni",
        removeDescription: `Pritisnite Obriši da biste uklonili oznaku.`
    },
    "@react-aria/table": {
        ascending: `rastući`,
        ascendingSort: (e)=>`sortirano po kolonama ${e.columnName} rastućim redosledom`,
        columnSize: (e)=>`${e.value} piksela`,
        descending: `padajući`,
        descendingSort: (e)=>`sortirano po kolonama ${e.columnName} padajućim redosledom`,
        resizerDescription: `Pritisnite Enter da biste započeli promenu veličine`,
        select: "Izaberite",
        selectAll: "Izaberite sve",
        sortable: `kolona koja se može sortirati`,
        collapse: " Skupi",
        expand: `Proširi`
    },
    "@react-aria/steplist": {
        steplist: "Lista koraka"
    },
    "@react-aria/spinbutton": {
        Empty: "Prazno"
    },
    "@react-aria/searchfield": {
        "Clear search": `Obriši pretragu`
    },
    "@react-aria/overlays": {
        dismiss: "Odbaci"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Smanji ${e.fieldLabel}`,
        increase: (e)=>`Povećaj ${e.fieldLabel}`,
        numberField: "Polje broja"
    },
    "@react-aria/menu": {
        longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "red ima radnju",
        hasLinkAnnouncement: (e)=>`red ima vezu: ${e.veza}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} nije izabrano.`,
        longPressToSelect: `Dugo pritisnite za ulazak u režim biranja.`,
        select: "Izaberite",
        selectedAll: "Izabrane su sve stavke.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Nije izabrana nijedna stavka",
                one: ()=>`Izabrana je ${a.number(e.count)} stavka`,
                other: ()=>`Izabrano je ${a.number(e.count)} stavki`
            })}.`,
        selectedItem: (e)=>`${e.item} je izabrano.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Pritisnite Enter da biste započeli prevlačenje.`,
        dragDescriptionKeyboardAlt: `Pritisnite Alt + Enter da biste započeli prevlačenje.`,
        dragDescriptionLongPress: `Pritisnite dugo da biste započeli prevlačenje.`,
        dragDescriptionTouch: `Dvaput dodirnite da biste započeli prevlačenje.`,
        dragDescriptionVirtual: `Kliknite da biste započeli prevlačenje.`,
        dragItem: (e)=>`Prevucite ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Prevucite ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izabranu stavku`,
                other: ()=>`${a.number(e.count)} izabrane stavke`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Pritisnite Enter da biste prevukli ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izabranu stavku`,
                other: ()=>`${a.number(e.count)} izabranih stavki`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Pritisnite Alt + Enter da biste prevukli ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izabranu stavku`,
                other: ()=>`${a.number(e.count)} izabranih stavki`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Pritisnite dugo da biste prevukli ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izabranu stavku`,
                other: ()=>`${a.number(e.count)} izabranih stavki`
            })}.`,
        dragStartedKeyboard: `Prevlačenje je započeto. Pritisnite Tab da biste otišli do cilja za otpuštanje, zatim pritisnite Enter za ispuštanje ili pritisnite Escape za otkazivanje.`,
        dragStartedTouch: `Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim dvaput dodirnite za otpuštanje.`,
        dragStartedVirtual: `Prevlačenje je započeto. Idite do cilja za otpuštanje, a zatim kliknite ili pritinite Enter za otpuštanje.`,
        dropCanceled: `Otpuštanje je otkazano.`,
        dropComplete: `Prevlačenje je završeno.`,
        dropDescriptionKeyboard: `Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevlačenje.`,
        dropDescriptionTouch: `Dvaput dodirnite za otpuštanje.`,
        dropDescriptionVirtual: `Kliknite za otpuštanje.`,
        dropIndicator: `Indikator otpuštanja`,
        dropOnItem: (e)=>`Otpusti na ${e.itemText}`,
        dropOnRoot: "Otpusti na",
        endDragKeyboard: `Prevlačenje u toku. Pritisnite Enter da biste otkazali prevlačenje.`,
        endDragTouch: `Prevlačenje u toku. Dvaput dodirnite da biste otkazali prevlačenje.`,
        endDragVirtual: `Prevlačenje u toku. Kliknite da biste otkazali prevlačenje.`,
        insertAfter: (e)=>`Umetnite posle ${e.itemText}`,
        insertBefore: (e)=>`Umetnite ispred ${e.itemText}`,
        insertBetween: (e)=>`Umetnite između ${e.beforeItemText} i ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalendar",
        day: `дан`,
        dayPeriod: `пре подне/по подне`,
        endDate: `Datum završetka`,
        era: `ера`,
        hour: `сат`,
        minute: `минут`,
        month: `месец`,
        second: `секунд`,
        selectedDateDescription: (e)=>`Izabrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,
        selectedTimeDescription: (e)=>`Izabrano vreme: ${e.time}`,
        startDate: `Datum početka`,
        timeZoneName: `временска зона`,
        weekday: `дан у недељи`,
        year: `година`
    },
    "@react-aria/combobox": {
        buttonLabel: `Prikaži predloge`,
        countAnnouncement: (e, a)=>`Dostupno još: ${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opcija`,
                other: ()=>`${a.number(e.optionCount)} opcije/a`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Unesena grupa ${e.groupTitle}, s ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opcijom`,
                        other: ()=>`${a.number(e.groupCount)} optione/a`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", izabranih",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Predlozi",
        selectedAnnouncement: (e)=>`${e.optionText}, izabrano`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Birač boja`,
        colorSwatch: "Uzorak boje",
        transparent: "providno",
        twoDimensionalSlider: `2D klizač`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} do ${e.endDate}`,
        dateSelected: (e)=>`${e.date} izabran`,
        finishRangeSelectionPrompt: `Kliknite da dovršite opseg izabranih datuma`,
        maximumDate: `Zadnji raspoloživi datum`,
        minimumDate: `Prvi raspoloživi datum`,
        next: `Sledeći`,
        previous: "Prethodni",
        selectedDateDescription: (e)=>`Izabrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Izabrani period: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknite da započnete opseg izabranih datuma`,
        todayDate: (e)=>`Danas, ${e.date}`,
        todayDateSelected: (e)=>`Danas, izabran ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Putanje navigacije"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Predlozi"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Vrednost mora da bude ${e.maxValue} ili starija.`,
        rangeReversed: `Datum početka mora biti pre datuma završetka.`,
        rangeUnderflow: (e)=>`Vrednost mora da bude ${e.minValue} ili novija.`,
        unavailableDate: "Izabrani datum nije dostupan."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "crno",
        blue: "Plava",
        "blue purple": `plavoljubičasta`,
        brightness: "Osvetljenost",
        brown: `smeđa`,
        "brown yellow": `smeđežuta`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cijan",
        "cyan blue": "cijan plava",
        dark: "tamno",
        gray: "siva",
        grayish: "sivkasta",
        green: "Zelena",
        "green cyan": "zeleno cijan",
        hue: "Nijansa",
        light: "svetla",
        lightness: "Osvetljenje",
        magenta: "purpurnocrvena",
        "magenta pink": `magenta ružičasta`,
        orange: `narandžasta`,
        "orange yellow": `narandžastožuta`,
        pale: "bledo",
        pink: `ružičasta`,
        "pink red": `ružičastocrvena`,
        purple: `ljubičasta`,
        "purple magenta": `ljubičasta magenta`,
        red: "Crvena",
        "red orange": `crvenonarandžasta`,
        saturation: `Zasićenje`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozirna`,
        "very dark": "veoma tamno",
        "very light": "vrlo svetlo",
        vibrant: `živopisna`,
        white: "bela",
        yellow: `žuto`,
        "yellow green": `žutozelena`
    },
    "react-aria-components": {
        colorSwatchPicker: "Uzorci boje",
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Izaberite stavku",
        tableResizer: `Promena veličine`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sl-SI.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Strni",
        expand: `Razširi`
    },
    "@react-aria/toast": {
        close: "Zapri",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} obvestilo`,
                two: ()=>`${a.number(e.count)} obvestili`,
                few: ()=>`${a.number(e.count)} obvestila`,
                other: ()=>`${a.number(e.count)} obvestil`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Odstrani",
        removeDescription: "Pritisnite Delete, da odstranite oznako."
    },
    "@react-aria/table": {
        ascending: `naraščajoče`,
        ascendingSort: (e)=>`razvrščeno po stolpcu ${e.columnName} v naraščajočem vrstnem redu`,
        columnSize: (e)=>`${e.value} slikovnih pik`,
        descending: `padajoče`,
        descendingSort: (e)=>`razvrščeno po stolpcu ${e.columnName} v padajočem vrstnem redu`,
        resizerDescription: `Pritisnite tipko Enter da začnete spreminjati velikost`,
        select: "Izberite",
        selectAll: "Izberite vse",
        sortable: "razvrstljivi stolpec",
        collapse: "Strni",
        expand: `Razširi`
    },
    "@react-aria/steplist": {
        steplist: "Seznam korakov"
    },
    "@react-aria/spinbutton": {
        Empty: "Prazen"
    },
    "@react-aria/searchfield": {
        "Clear search": `Počisti iskanje`
    },
    "@react-aria/overlays": {
        dismiss: "Opusti"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Upadati ${e.fieldLabel}`,
        increase: (e)=>`Povečajte ${e.fieldLabel}`,
        numberField: `Številčno polje`
    },
    "@react-aria/menu": {
        longPressMessage: `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "vrstica ima dejanje",
        hasLinkAnnouncement: (e)=>`vrstica ima povezavo: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Element ${e.item} ni izbran.`,
        longPressToSelect: `Za izbirni način pritisnite in dlje časa držite.`,
        select: "Izberite",
        selectedAll: "Vsi elementi so izbrani.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Noben element ni izbran",
                one: ()=>`${a.number(e.count)} element je izbran`,
                other: ()=>`${a.number(e.count)} elementov je izbranih`
            })}.`,
        selectedItem: (e)=>`Element ${e.item} je izbran.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Pritisnite tipko Enter za začetek vlečenja.`,
        dragDescriptionKeyboardAlt: `Pritisnite tipki Alt + Enter za začetek vlečenja.`,
        dragDescriptionLongPress: `Pritisnite in zadržite za začetek vlečenja.`,
        dragDescriptionTouch: `Dvotapnite za začetek vlečenja.`,
        dragDescriptionVirtual: `Kliknite za začetek vlečenja.`,
        dragItem: (e)=>`Povleci ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Povlecite ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izbran element`,
                other: ()=>`izbrane elemente (${a.number(e.count)})`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Pritisnite tipko Enter, da povlečete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izbrani element`,
                other: ()=>`${a.number(e.count)} izbranih elementov`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Pritisnite tipki Alt + Enter, da povlečete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izbrani element`,
                other: ()=>`${a.number(e.count)} izbranih elementov`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Pritisnite in zadržite, da povlečete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} izbrani element`,
                other: ()=>`${a.number(e.count)} izbranih elementov`
            })}.`,
        dragStartedKeyboard: `Vlečenje se je začelo. Pritisnite tipko Tab za pomik na mesto, kamor želite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekličete postopek.`,
        dragStartedTouch: `Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in dvotapnite, da jih spustite.`,
        dragStartedVirtual: `Vlečenje se je začelo. Pomaknite se na mesto, kamor želite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.`,
        dropCanceled: "Spust je preklican.",
        dropComplete: `Spust je končan.`,
        dropDescriptionKeyboard: `Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekličete vlečenje.`,
        dropDescriptionTouch: "Dvotapnite, da spustite.",
        dropDescriptionVirtual: "Kliknite, da spustite.",
        dropIndicator: "indikator spusta",
        dropOnItem: (e)=>`Spusti na mesto ${e.itemText}`,
        dropOnRoot: "Spusti na mesto",
        endDragKeyboard: `Vlečenje. Pritisnite tipko Enter za preklic vlečenja.`,
        endDragTouch: `Vlečenje. Dvotapnite za preklic vlečenja.`,
        endDragVirtual: `Vlečenje. Kliknite, da prekličete vlečenje.`,
        insertAfter: (e)=>`Vstavi za ${e.itemText}`,
        insertBefore: (e)=>`Vstavi pred ${e.itemText}`,
        insertBetween: (e)=>`Vstavi med ${e.beforeItemText} in ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Koledar",
        day: "dan",
        dayPeriod: "dop/pop",
        endDate: "Datum konca",
        era: "doba",
        hour: "ura",
        minute: "minuta",
        month: "mesec",
        second: "sekunda",
        selectedDateDescription: (e)=>`Izbrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Izbrano območje: ${e.startDate} do ${e.endDate}`,
        selectedTimeDescription: (e)=>`Izbrani čas: ${e.time}`,
        startDate: `Datum začetka`,
        timeZoneName: `časovni pas`,
        weekday: "dan v tednu",
        year: "leto"
    },
    "@react-aria/combobox": {
        buttonLabel: `Prikaži predloge`,
        countAnnouncement: (e, a)=>`Na voljo je ${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opcija`,
                other: ()=>`${a.number(e.optionCount)} opcije`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Vnesena skupina ${e.groupTitle}, z ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opcija`,
                        other: ()=>`${a.number(e.groupCount)} opcije`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", izbrano",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Predlogi",
        selectedAnnouncement: (e)=>`${e.optionText}, izbrano`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Izbirnik barv",
        colorSwatch: "barvna paleta",
        transparent: "prozorno",
        twoDimensionalSlider: "2D drsnik"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} do ${e.endDate}`,
        dateSelected: (e)=>`${e.date} izbrano`,
        finishRangeSelectionPrompt: `Kliknite za dokončanje izbire datumskega obsega`,
        maximumDate: `Zadnji razpoložljivi datum`,
        minimumDate: `Prvi razpoložljivi datum`,
        next: "Naprej",
        previous: "Nazaj",
        selectedDateDescription: (e)=>`Izbrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Izbrano območje: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknite za začetek izbire datumskega obsega`,
        todayDate: (e)=>`Danes, ${e.date}`,
        todayDateSelected: (e)=>`Danes, ${e.date} izbrano`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Drobtine"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Predlogi"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Vrednost mora biti ${e.maxValue} ali starejša.`,
        rangeReversed: `Začetni datum mora biti pred končnim datumom.`,
        rangeUnderflow: (e)=>`Vrednost mora biti ${e.minValue} ali novejša.`,
        unavailableDate: "Izbrani datum ni na voljo."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: `črna`,
        blue: "Modra",
        "blue purple": `modro vijolična`,
        brightness: "Svetlost",
        brown: "rjava",
        "brown yellow": "rjavo rumena",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cian",
        "cyan blue": "cian modra",
        dark: "temna",
        gray: "siva",
        grayish: "sivkasta",
        green: "Zelena",
        "green cyan": "zelena cian",
        hue: "Barva",
        light: "svetla",
        lightness: "Lahkost",
        magenta: `škrlatna`,
        "magenta pink": `škrlatno roza`,
        orange: `oranžna`,
        "orange yellow": `oranžno rumena`,
        pale: "bleda",
        pink: "roza",
        "pink red": `roza rdeča`,
        purple: `vijolična`,
        "purple magenta": `vijolično škrlatna`,
        red: `Rdeča`,
        "red orange": `rdeče oranžna`,
        saturation: `Nasičenost`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozorna`,
        "very dark": "zelo temna",
        "very light": "zelo svetla",
        vibrant: `živahna`,
        white: "bela",
        yellow: "rumena",
        "yellow green": "rumeno zelena"
    },
    "react-aria-components": {
        colorSwatchPicker: "Barvne palete",
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Izberite element",
        tableResizer: "Spreminjanje velikosti"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sk-SK.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Zbaliť`,
        expand: `Rozbaliť`
    },
    "@react-aria/toast": {
        close: `Zatvoriť`,
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} ozn\xe1menie`,
                few: ()=>`${a.number(e.count)} ozn\xe1menia`,
                other: ()=>`${a.number(e.count)} ozn\xe1men\xed`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Odstr\xe1niť`,
        removeDescription: `Ak chcete odstr\xe1niť značku, stlačte kl\xe1ves Delete.`
    },
    "@react-aria/table": {
        ascending: "vzostupne",
        ascendingSort: (e)=>`zoraden\xe9 zostupne podľa stĺpca ${e.columnName}`,
        columnSize: (e)=>`Počet pixelov: ${e.value}`,
        descending: "zostupne",
        descendingSort: (e)=>`zoraden\xe9 zostupne podľa stĺpca ${e.columnName}`,
        resizerDescription: `Stlačen\xedm kl\xe1vesu Enter začnete zmenu veľkosti`,
        select: `Vybrať`,
        selectAll: `Vybrať všetko`,
        sortable: `zoraditeľn\xfd stĺpec`,
        collapse: `Zbaliť`,
        expand: `Rozbaliť`
    },
    "@react-aria/steplist": {
        steplist: "Zoznam krokov"
    },
    "@react-aria/spinbutton": {
        Empty: `Pr\xe1zdne`
    },
    "@react-aria/searchfield": {
        "Clear search": `Vymazať vyhľad\xe1vanie`
    },
    "@react-aria/overlays": {
        dismiss: `Zrušiť`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Zn\xedžiť ${e.fieldLabel}`,
        increase: (e)=>`Zv\xfdšiť ${e.fieldLabel}`,
        numberField: `Č\xedseln\xe9 pole`
    },
    "@react-aria/menu": {
        longPressMessage: `Ponuku otvor\xedte dlh\xfdm stlačen\xedm alebo stlačen\xedm kl\xe1vesu Alt + kl\xe1vesu so š\xedpkou nadol`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "riadok obsahuje akciu",
        hasLinkAnnouncement: (e)=>`riadok obsahuje odkaz: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Nevybrat\xe9 položky: ${e.item}.`,
        longPressToSelect: `Dlhš\xedm stlačen\xedm prejdite do režimu v\xfdberu.`,
        select: `Vybrať`,
        selectedAll: `Všetky vybrat\xe9 položky.`,
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Žiadne vybrat\xe9 položky`,
                one: ()=>`${a.number(e.count)} vybrat\xe1 položka`,
                other: ()=>`Počet vybrat\xfdch položiek:${a.number(e.count)}`
            })}.`,
        selectedItem: (e)=>`Vybrat\xe9 položky: ${e.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Stlačen\xedm kl\xe1vesu Enter začnete pres\xfavanie.`,
        dragDescriptionKeyboardAlt: `Stlačen\xedm kl\xe1vesov Alt + Enter začnete pres\xfavanie.`,
        dragDescriptionLongPress: `Dlh\xfdm stlačen\xedm začnete pres\xfavanie.`,
        dragDescriptionTouch: `Dvojit\xfdm kliknut\xedm začnete pres\xfavanie.`,
        dragDescriptionVirtual: `Kliknut\xedm začnete pres\xfavanie.`,
        dragItem: (e)=>`Presun\xfať položku ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Presun\xfať ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} vybrat\xfa položku`,
                other: ()=>`${a.number(e.count)} vybrat\xe9 položky`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Stlačen\xedm kl\xe1vesu Enter presuniete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} vybrat\xfa položku`,
                other: ()=>`${a.number(e.count)} vybrat\xfdch položiek`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Stlačen\xedm kl\xe1vesov Alt + Enter presuniete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} vybrat\xfa položku`,
                other: ()=>`${a.number(e.count)} vybrat\xfdch položiek`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Dlh\xfdm stlačen\xedm presuniete ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} vybrat\xfa položku`,
                other: ()=>`${a.number(e.count)} vybrat\xfdch položiek`
            })}.`,
        dragStartedKeyboard: `Pres\xfavanie sa začalo. Do cieľov\xe9ho umiestnenia prejdete stlačen\xedm kl\xe1vesu Tab. Ak chcete položku umiestniť, stlačte kl\xe1ves Enter alebo stlačte kl\xe1ves Esc, ak chcete pres\xfavanie zrušiť.`,
        dragStartedTouch: `Pres\xfavanie sa začalo. Prejdite na cieľov\xe9 umiestnenie a dvojit\xfdm kliknut\xedm umiestnite položku.`,
        dragStartedVirtual: `Pres\xfavanie sa začalo. Prejdite na cieľov\xe9 umiestnenie a kliknut\xedm alebo stlačen\xedm kl\xe1vesu Enter umiestnite položku.`,
        dropCanceled: `Umiestnenie zrušen\xe9.`,
        dropComplete: `Umiestnenie dokončen\xe9.`,
        dropDescriptionKeyboard: `Stlačen\xedm kl\xe1vesu Enter umiestnite položku. Stlačen\xedm kl\xe1vesu Esc zruš\xedte pres\xfavanie.`,
        dropDescriptionTouch: `Dvojit\xfdm kliknut\xedm umiestnite položku.`,
        dropDescriptionVirtual: `Kliknut\xedm umiestnite položku.`,
        dropIndicator: `indik\xe1tor umiestnenia`,
        dropOnItem: (e)=>`Umiestniť na položku ${e.itemText}`,
        dropOnRoot: `Umiestniť na`,
        endDragKeyboard: `Prebieha pres\xfavanie. Ak ho chcete zrušiť, stlačte kl\xe1ves Enter.`,
        endDragTouch: `Prebieha pres\xfavanie. Dvojit\xfdm kliknut\xedm ho m\xf4žete zrušiť.`,
        endDragVirtual: `Prebieha pres\xfavanie.`,
        insertAfter: (e)=>`Vložiť za položku ${e.itemText}`,
        insertBefore: (e)=>`Vložiť pred položku ${e.itemText}`,
        insertBetween: (e)=>`Vložiť medzi položky ${e.beforeItemText} a ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Kalend\xe1r`,
        day: `deň`,
        dayPeriod: "AM/PM",
        endDate: `D\xe1tum ukončenia`,
        era: `letopočet`,
        hour: "hodina",
        minute: `min\xfata`,
        month: "mesiac",
        second: "sekunda",
        selectedDateDescription: (e)=>`Vybrat\xfd d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e)=>`Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,
        selectedTimeDescription: (e)=>`Vybrat\xfd čas: ${e.time}`,
        startDate: `D\xe1tum začatia`,
        timeZoneName: `časov\xe9 p\xe1smo`,
        weekday: `deň t\xfdždňa`,
        year: "rok"
    },
    "@react-aria/combobox": {
        buttonLabel: `Zobraziť n\xe1vrhy`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} možnosť`,
                other: ()=>`${a.number(e.optionCount)} možnosti/-\xed`
            })} k dispoz\xedcii.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} možnosťou`,
                        other: ()=>`${a.number(e.groupCount)} možnosťami`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: `, vybrat\xe9`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `N\xe1vrhy`,
        selectedAnnouncement: (e)=>`${e.optionText}, vybrat\xe9`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `V\xfdber farieb`,
        colorSwatch: `vzorkovn\xedk farieb`,
        transparent: `transparentn\xfd`,
        twoDimensionalSlider: "2D jazdec"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`Od ${e.startDate} do ${e.endDate}`,
        dateSelected: (e)=>`Vybrat\xfd d\xe1tum ${e.date}`,
        finishRangeSelectionPrompt: `Kliknut\xedm dokonč\xedte v\xfdber rozsahu d\xe1tumov`,
        maximumDate: `Posledn\xfd dostupn\xfd d\xe1tum`,
        minimumDate: `Prv\xfd dostupn\xfd d\xe1tum`,
        next: `Nasleduj\xface`,
        previous: `Predch\xe1dzaj\xface`,
        selectedDateDescription: (e)=>`Vybrat\xfd d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e)=>`Vybrat\xfd rozsah: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknut\xedm spust\xedte v\xfdber rozsahu d\xe1tumov`,
        todayDate: (e)=>`Dnes ${e.date}`,
        todayDateSelected: (e)=>`Vybrat\xfd dnešn\xfd d\xe1tum ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Navigačn\xe9 prvky Breadcrumbs`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `N\xe1vrhy`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Hodnota mus\xed byť ${e.maxValue} alebo skoršia.`,
        rangeReversed: `D\xe1tum začiatku mus\xed byť skorš\xed ako d\xe1tum konca.`,
        rangeUnderflow: (e)=>`Hodnota mus\xed byť ${e.minValue} alebo neskoršia.`,
        unavailableDate: `Vybrat\xfd d\xe1tum je nedostupn\xfd.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: `čierna`,
        blue: `Modr\xe1`,
        "blue purple": `modrofialov\xe1`,
        brightness: "Jas",
        brown: `hned\xe1`,
        "brown yellow": `hnedožlt\xe1`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `az\xfarov\xe1`,
        "cyan blue": `az\xfarov\xe1 modr\xe1`,
        dark: `tmav\xe1`,
        gray: `siv\xe1`,
        grayish: `sivast\xe1`,
        green: `Zelen\xe1`,
        "green cyan": `zelen\xe1 az\xfarov\xe1`,
        hue: `Odtieň`,
        light: `svetl\xe1`,
        lightness: `Svetlosť`,
        magenta: `purpurov\xe1`,
        "magenta pink": `ružov\xe1 purpurov\xe1`,
        orange: `oranžov\xe1`,
        "orange yellow": `oranžovožlt\xe1`,
        pale: `bled\xe1`,
        pink: `ružov\xe1`,
        "pink red": `ružovočerven\xe1`,
        purple: `fialov\xe1`,
        "purple magenta": `fialov\xe1 purpurov\xe1`,
        red: `Červen\xe1`,
        "red orange": `červenooranžov\xe1`,
        saturation: `S\xfdtosť`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} priehľadn\xe1`,
        "very dark": `veľmi tmav\xe1`,
        "very light": `veľmi svetl\xe1`,
        vibrant: `energick\xe1`,
        white: "biela",
        yellow: `žlt\xe1`,
        "yellow green": `žltozelen\xe1`
    },
    "react-aria-components": {
        colorSwatchPicker: `Vzorkovn\xedky farieb`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Vyberte položku`,
        tableResizer: `N\xe1stroj na zmenu veľkosti`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ru-RU.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Свернуть`,
        expand: `Развернуть`
    },
    "@react-aria/toast": {
        close: `Закрыть`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} уведомление`,
                other: ()=>`${t.number(e.count)} уведомления`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Удалить`,
        removeDescription: `Нажмите DELETE, чтобы удалить тег.`
    },
    "@react-aria/table": {
        ascending: `возрастание`,
        ascendingSort: (e)=>`сортировать столбец ${e.columnName} в порядке возрастания`,
        columnSize: (e)=>`${e.value} пикс.`,
        descending: `убывание`,
        descendingSort: (e)=>`сортировать столбец ${e.columnName} в порядке убывания`,
        resizerDescription: `Нажмите клавишу Enter для начала изменения размеров`,
        select: `Выбрать`,
        selectAll: `Выбрать все`,
        sortable: `сортируемый столбец`,
        collapse: `Свернуть`,
        expand: `Развернуть`
    },
    "@react-aria/steplist": {
        steplist: `Список шагов`
    },
    "@react-aria/spinbutton": {
        Empty: `Не заполнено`
    },
    "@react-aria/searchfield": {
        "Clear search": `Очистить поиск`
    },
    "@react-aria/overlays": {
        dismiss: `Пропустить`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Уменьшение ${e.fieldLabel}`,
        increase: (e)=>`Увеличение ${e.fieldLabel}`,
        numberField: `Числовое поле`
    },
    "@react-aria/menu": {
        longPressMessage: `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `в строке есть действие`,
        hasLinkAnnouncement: (e)=>`в строке есть ссылка: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} не выбрано.`,
        longPressToSelect: `Нажмите и удерживайте для входа в режим выбора.`,
        select: `Выбрать`,
        selectedAll: `Выбраны все элементы.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `Нет выбранных элементов`,
                one: ()=>`${t.number(e.count)} элемент выбран`,
                other: ()=>`${t.number(e.count)} элементов выбрано`
            })}.`,
        selectedItem: (e)=>`${e.item} выбрано.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Нажмите клавишу Enter для начала перетаскивания.`,
        dragDescriptionKeyboardAlt: `Нажмите Alt + Enter, чтобы начать перетаскивать.`,
        dragDescriptionLongPress: `Нажмите и удерживайте, чтобы начать перетаскивать.`,
        dragDescriptionTouch: `Дважды нажмите для начала перетаскивания.`,
        dragDescriptionVirtual: `Щелкните для начала перетаскивания.`,
        dragItem: (e)=>`Перетащить ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Перетащить ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} выбранный элемент`,
                other: ()=>`${t.number(e.count)} выбранных элем`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Нажмите Enter для перетаскивания ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} выбранного элемента`,
                other: ()=>`${t.number(e.count)} выбранных элементов`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Нажмите Alt + Enter для перетаскивания ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} выбранного элемента`,
                other: ()=>`${t.number(e.count)} выбранных элементов`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Нажмите и удерживайте для перетаскивания ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} выбранного элемента`,
                other: ()=>`${t.number(e.count)} выбранных элементов`
            })}.`,
        dragStartedKeyboard: `Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание, или клавишу Escape для отмены действия.`,
        dragStartedTouch: `Начато перетаскивание. Выберите цель, затем дважды нажмите, чтобы применить перетаскивание.`,
        dragStartedVirtual: `Начато перетаскивание. Нажмите клавишу Tab для выбора цели, затем нажмите клавишу Enter, чтобы применить перетаскивание.`,
        dropCanceled: `Перетаскивание отменено.`,
        dropComplete: `Перетаскивание завершено.`,
        dropDescriptionKeyboard: `Нажмите клавишу Enter, чтобы применить перетаскивание. Нажмите клавишу Escape для отмены.`,
        dropDescriptionTouch: `Дважды нажмите, чтобы применить перетаскивание.`,
        dropDescriptionVirtual: `Щелкните, чтобы применить перетаскивание.`,
        dropIndicator: `индикатор перетаскивания`,
        dropOnItem: (e)=>`Перетащить на ${e.itemText}`,
        dropOnRoot: `Перетащить на`,
        endDragKeyboard: `Перетаскивание. Нажмите клавишу Enter для отмены.`,
        endDragTouch: `Перетаскивание. Дважды нажмите для отмены.`,
        endDragVirtual: `Перетаскивание. Щелкните для отмены.`,
        insertAfter: (e)=>`Вставить после ${e.itemText}`,
        insertBefore: (e)=>`Вставить перед ${e.itemText}`,
        insertBetween: (e)=>`Вставить между ${e.beforeItemText} и ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Календарь`,
        day: `день`,
        dayPeriod: "AM/PM",
        endDate: `Дата окончания`,
        era: `эра`,
        hour: `час`,
        minute: `минута`,
        month: `месяц`,
        second: `секунда`,
        selectedDateDescription: (e)=>`Выбранная дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,
        selectedTimeDescription: (e)=>`Выбранное время: ${e.time}`,
        startDate: `Дата начала`,
        timeZoneName: `часовой пояс`,
        weekday: `день недели`,
        year: `год`
    },
    "@react-aria/combobox": {
        buttonLabel: `Показать предложения`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} параметр`,
                other: ()=>`${t.number(e.optionCount)} параметров`
            })} доступно.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Введенная группа ${e.groupTitle}, с ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} параметром`,
                        other: ()=>`${t.number(e.groupCount)} параметрами`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, выбранными`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Предложения`,
        selectedAnnouncement: (e)=>`${e.optionText}, выбрано`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Палитра цветов`,
        colorSwatch: `цветовой образец`,
        transparent: `прозрачный`,
        twoDimensionalSlider: `Ползунок 2D`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`С ${e.startDate} по ${e.endDate}`,
        dateSelected: (e)=>`Выбрано ${e.date}`,
        finishRangeSelectionPrompt: `Щелкните, чтобы завершить выбор диапазона дат`,
        maximumDate: `Последняя доступная дата`,
        minimumDate: `Первая доступная дата`,
        next: `Далее`,
        previous: `Назад`,
        selectedDateDescription: (e)=>`Выбранная дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Выбранный диапазон: ${e.dateRange}`,
        startRangeSelectionPrompt: `Щелкните, чтобы начать выбор диапазона дат`,
        todayDate: (e)=>`Сегодня, ${e.date}`,
        todayDateSelected: (e)=>`Сегодня, выбрано ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Навигация`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Предложения`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Значение должно быть не позже ${e.maxValue}.`,
        rangeReversed: `Дата начала должна предшествовать дате окончания.`,
        rangeUnderflow: (e)=>`Значение должно быть не раньше ${e.minValue}.`,
        unavailableDate: `Выбранная дата недоступна.`
    },
    "@react-stately/color": {
        alpha: `Альфа`,
        black: `черный`,
        blue: `Синий`,
        "blue purple": `сине-фиолетовый`,
        brightness: `Яркость`,
        brown: `коричневый`,
        "brown yellow": `коричнево-желтый`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `голубой`,
        "cyan blue": `цвет морской волны`,
        dark: `темный`,
        gray: `серый`,
        grayish: `сероватый`,
        green: `Зеленый`,
        "green cyan": `сине-зеленый`,
        hue: `Оттенок`,
        light: `светлый`,
        lightness: `Освещенность`,
        magenta: `пурпурный`,
        "magenta pink": `пурпурно-розовый`,
        orange: `оранжевый`,
        "orange yellow": `оранжево-желтый`,
        pale: `бледный`,
        pink: `розовый`,
        "pink red": `розово-красный`,
        purple: `фиолетовый`,
        "purple magenta": `фиолетово-пурпурный`,
        red: `Красный`,
        "red orange": `красно-оранжевый`,
        saturation: `Насыщенность`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, прозрачный на ${e.percentTransparent}`,
        "very dark": `очень темный`,
        "very light": `очень светлый`,
        vibrant: `яркий`,
        white: `белый`,
        yellow: `желтый`,
        "yellow green": `желто-зеленый`
    },
    "react-aria-components": {
        colorSwatchPicker: `Цветовые образцы`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Выберите элемент`,
        tableResizer: `Средство изменения размера`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ro-RO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Restr\xe2ngeți`,
        expand: `Extindeți`
    },
    "@react-aria/toast": {
        close: `\xcenchideţi`,
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} notificare`,
                other: ()=>`${a.number(e.count)} notificări`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `\xcendepărtaţi`,
        removeDescription: `Apăsați pe Delete (Ștergere) pentru a elimina eticheta.`
    },
    "@react-aria/table": {
        ascending: `crescătoare`,
        ascendingSort: (e)=>`sortate după coloana ${e.columnName} \xeen ordine crescătoare`,
        columnSize: (e)=>`${e.value} pixeli`,
        descending: `descrescătoare`,
        descendingSort: (e)=>`sortate după coloana ${e.columnName} \xeen ordine descrescătoare`,
        resizerDescription: `Apăsați pe Enter pentru a \xeencepe redimensionarea`,
        select: "Selectare",
        selectAll: `Selectare totală`,
        sortable: `coloană sortabilă`,
        collapse: `Restr\xe2ngeți`,
        expand: `Extindeți`
    },
    "@react-aria/steplist": {
        steplist: `Lista de pași`
    },
    "@react-aria/spinbutton": {
        Empty: "Gol"
    },
    "@react-aria/searchfield": {
        "Clear search": `Ştergeţi căutarea`
    },
    "@react-aria/overlays": {
        dismiss: "Revocare"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Scădere ${e.fieldLabel}`,
        increase: (e)=>`Creștere ${e.fieldLabel}`,
        numberField: `C\xe2mp numeric`
    },
    "@react-aria/menu": {
        longPressMessage: `Apăsați lung sau apăsați pe Alt + săgeată \xeen jos pentru a deschide meniul`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `r\xe2ndul are acțiune`,
        hasLinkAnnouncement: (e)=>`r\xe2ndul are link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} neselectat.`,
        longPressToSelect: `Apăsați lung pentru a intra \xeen modul de selectare.`,
        select: "Selectare",
        selectedAll: "Toate elementele selectate.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Niciun element selectat",
                one: ()=>`${a.number(e.count)} element selectat`,
                other: ()=>`${a.number(e.count)} elemente selectate`
            })}.`,
        selectedItem: (e)=>`${e.item} selectat.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Apăsați pe Enter pentru a \xeencepe glisarea.`,
        dragDescriptionKeyboardAlt: `Apăsați pe Alt + Enter pentru a \xeencepe glisarea.`,
        dragDescriptionLongPress: `Apăsați lung pentru a \xeencepe glisarea.`,
        dragDescriptionTouch: `Atingeți de două ori pentru a \xeencepe să glisați.`,
        dragDescriptionVirtual: `Faceți clic pentru a \xeencepe glisarea.`,
        dragItem: (e)=>`Glisați ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Glisați ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} element selectat`,
                other: ()=>`${a.number(e.count)} elemente selectate`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Apăsați pe Enter pentru a glisa ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} element selectat`,
                other: ()=>`${a.number(e.count)} elemente selectate`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Apăsați pe Alt + Enter pentru a glisa ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} element selectat`,
                other: ()=>`${a.number(e.count)} elemente selectate`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Apăsați lung pentru a glisa ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} element selectat`,
                other: ()=>`${a.number(e.count)} elemente selectate`
            })}.`,
        dragStartedKeyboard: `A \xeenceput glisarea. Apăsați pe Tab pentru a naviga la o țintă de fixare, apoi apăsați pe Enter pentru a fixa sau apăsați pe Escape pentru a anula glisarea.`,
        dragStartedTouch: `A \xeenceput glisarea. Navigați la o țintă de fixare, apoi atingeți de două ori pentru a fixa.`,
        dragStartedVirtual: `A \xeenceput glisarea. Navigați la o țintă de fixare, apoi faceți clic sau apăsați pe Enter pentru a fixa.`,
        dropCanceled: `Fixare anulată.`,
        dropComplete: `Fixare finalizată.`,
        dropDescriptionKeyboard: `Apăsați pe Enter pentru a fixa. Apăsați pe Escape pentru a anula glisarea.`,
        dropDescriptionTouch: `Atingeți de două ori pentru a fixa.`,
        dropDescriptionVirtual: `Faceți clic pentru a fixa.`,
        dropIndicator: "indicator de fixare",
        dropOnItem: (e)=>`Fixați pe ${e.itemText}`,
        dropOnRoot: "Fixare pe",
        endDragKeyboard: `Se glisează. Apăsați pe Enter pentru a anula glisarea.`,
        endDragTouch: `Se glisează. Atingeți de două ori pentru a anula glisarea.`,
        endDragVirtual: `Se glisează. Faceți clic pentru a anula glisarea.`,
        insertAfter: (e)=>`Inserați după ${e.itemText}`,
        insertBefore: (e)=>`Inserați \xeenainte de ${e.itemText}`,
        insertBetween: (e)=>`Inserați \xeentre ${e.beforeItemText} și ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Calendar",
        day: "zi",
        dayPeriod: "a.m/p.m.",
        endDate: `Dată final`,
        era: `eră`,
        hour: `oră`,
        minute: "minut",
        month: `lună`,
        second: `secundă`,
        selectedDateDescription: (e)=>`Dată selectată: ${e.date}`,
        selectedRangeDescription: (e)=>`Interval selectat: de la ${e.startDate} p\xe2nă la ${e.endDate}`,
        selectedTimeDescription: (e)=>`Ora selectată: ${e.time}`,
        startDate: `Dată \xeenceput`,
        timeZoneName: "fus orar",
        weekday: `ziua din săptăm\xe2nă`,
        year: "an"
    },
    "@react-aria/combobox": {
        buttonLabel: `Afișare sugestii`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opțiune`,
                other: ()=>`${a.number(e.optionCount)} opțiuni`
            })} disponibile.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Grup ${e.groupTitle} introdus, cu ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opțiune`,
                        other: ()=>`${a.number(e.groupCount)} opțiuni`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", selectat",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Sugestii",
        selectedAnnouncement: (e)=>`${e.optionText}, selectat`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Selector de culori",
        colorSwatch: "specimen de culoare",
        transparent: "transparent",
        twoDimensionalSlider: "Glisor 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`De la ${e.startDate} p\xe2nă la ${e.endDate}`,
        dateSelected: (e)=>`${e.date} selectată`,
        finishRangeSelectionPrompt: `Apăsaţi pentru a finaliza selecţia razei pentru dată`,
        maximumDate: `Ultima dată disponibilă`,
        minimumDate: `Prima dată disponibilă`,
        next: `Următorul`,
        previous: `\xcenainte`,
        selectedDateDescription: (e)=>`Dată selectată: ${e.date}`,
        selectedRangeDescription: (e)=>`Interval selectat: ${e.dateRange}`,
        startRangeSelectionPrompt: `Apăsaţi pentru a \xeencepe selecţia razei pentru dată`,
        todayDate: (e)=>`Astăzi, ${e.date}`,
        todayDateSelected: (e)=>`Azi, ${e.date} selectată`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Miez de p\xe2ine`
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Sugestii"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,
        rangeReversed: `Data de \xeenceput trebuie să fie anterioară datei de sf\xe2rșit.`,
        rangeUnderflow: (e)=>`Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,
        unavailableDate: `Data selectată nu este disponibilă.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "negru",
        blue: "Albastru",
        "blue purple": "albastru-violet",
        brightness: "Luminozitate",
        brown: "maro",
        "brown yellow": "galben maro",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "bleu",
        "cyan blue": "albastru-bleu",
        dark: `\xeenchis`,
        gray: "gri",
        grayish: `cenușiu`,
        green: "Verde",
        "green cyan": "verde bleu",
        hue: `Nuanță`,
        light: "deschis",
        lightness: "Luminozitate",
        magenta: "fucsia",
        "magenta pink": "roz-fucsia",
        orange: "portocaliu",
        "orange yellow": "galben-portocaliu",
        pale: "pal",
        pink: "roz",
        "pink red": `roz-roșu`,
        purple: "violet",
        "purple magenta": "violet-fucsia",
        red: `Roșu`,
        "red orange": `portocaliu-roșu`,
        saturation: `Saturație`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
        "very dark": `foarte \xeenchis`,
        "very light": "foarte deschis",
        vibrant: `plin de viață`,
        white: "alb",
        yellow: "galben",
        "yellow green": "galben-verde"
    },
    "react-aria-components": {
        colorSwatchPicker: "Specimene de culoare",
        dropzoneLabel: `Zonă de plasare`,
        selectPlaceholder: `Selectați un element`,
        tableResizer: "Instrument de redimensionare"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pt-PT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Colapsar",
        expand: "Expandir"
    },
    "@react-aria/toast": {
        close: "Fechar",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} notifica\xe7\xe3o`,
                other: ()=>`${a.number(e.count)} notifica\xe7\xf5es`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Eliminar",
        removeDescription: "Prima Delete para eliminar a tag."
    },
    "@react-aria/table": {
        ascending: "ascendente",
        ascendingSort: (e)=>`Ordenar por coluna ${e.columnName} em ordem ascendente`,
        columnSize: (e)=>`${e.value} pixels`,
        descending: "descendente",
        descendingSort: (e)=>`Ordenar por coluna ${e.columnName} em ordem descendente`,
        resizerDescription: "Prima Enter para iniciar o redimensionamento",
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: `Coluna orden\xe1vel`,
        collapse: "Colapsar",
        expand: "Expandir"
    },
    "@react-aria/steplist": {
        steplist: "Lista de passos"
    },
    "@react-aria/spinbutton": {
        Empty: "Vazio"
    },
    "@react-aria/searchfield": {
        "Clear search": "Limpar pesquisa"
    },
    "@react-aria/overlays": {
        dismiss: "Dispensar"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Diminuir ${e.fieldLabel}`,
        increase: (e)=>`Aumentar ${e.fieldLabel}`,
        numberField: `Campo num\xe9rico`
    },
    "@react-aria/menu": {
        longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `linha com a\xe7\xe3o`,
        hasLinkAnnouncement: (e)=>`linha com liga\xe7\xe3o: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} n\xe3o selecionado.`,
        longPressToSelect: `Prima continuamente para entrar no modo de sele\xe7\xe3o.`,
        select: "Selecionar",
        selectedAll: "Todos os itens selecionados.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Nenhum item selecionado",
                one: ()=>`${a.number(e.count)} item selecionado`,
                other: ()=>`${a.number(e.count)} itens selecionados`
            })}.`,
        selectedItem: (e)=>`${e.item} selecionado.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: "Prima Enter para iniciar o arrasto.",
        dragDescriptionKeyboardAlt: "Prima Alt + Enter para iniciar o arrasto.",
        dragDescriptionLongPress: `Prima longamente para come\xe7ar a arrastar.`,
        dragDescriptionTouch: `Fa\xe7a duplo toque para come\xe7ar a arrastar.`,
        dragDescriptionVirtual: "Clique para iniciar o arrasto.",
        dragItem: (e)=>`Arrastar ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} item selecionado`,
                other: ()=>`${a.number(e.count)} itens selecionados`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Prima Enter para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Prima Alt + Enter para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Prima longamente para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragStartedKeyboard: `Arrasto iniciado. Prima a tecla de tabula\xe7\xe3o para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.`,
        dragStartedTouch: `Arrasto iniciado. Navegue para um destino para largar, e em seguida fa\xe7a duplo toque para largar.`,
        dragStartedVirtual: "Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.",
        dropCanceled: "Largar cancelado.",
        dropComplete: "Largar completo.",
        dropDescriptionKeyboard: "Prima Enter para largar. Prima Escape para cancelar o arrasto.",
        dropDescriptionTouch: `Fa\xe7a duplo toque para largar.`,
        dropDescriptionVirtual: "Clique para largar.",
        dropIndicator: "Indicador de largar",
        dropOnItem: (e)=>`Largar em ${e.itemText}`,
        dropOnRoot: "Largar em",
        endDragKeyboard: "A arrastar. Prima Enter para cancelar o arrasto.",
        endDragTouch: `A arrastar. Fa\xe7a duplo toque para cancelar o arrasto.`,
        endDragVirtual: "A arrastar. Clique para cancelar o arrasto.",
        insertAfter: (e)=>`Inserir depois de ${e.itemText}`,
        insertBefore: (e)=>`Inserir antes de ${e.itemText}`,
        insertBetween: (e)=>`Inserir entre ${e.beforeItemText} e ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Calend\xe1rio`,
        day: "dia",
        dayPeriod: "am/pm",
        endDate: `Data de T\xe9rmino`,
        era: "era",
        hour: "hora",
        minute: "minuto",
        month: `m\xeas`,
        second: "segundo",
        selectedDateDescription: (e)=>`Data selecionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
        selectedTimeDescription: (e)=>`Hora selecionada: ${e.time}`,
        startDate: `Data de In\xedcio`,
        timeZoneName: `fuso hor\xe1rio`,
        weekday: "dia da semana",
        year: "ano"
    },
    "@react-aria/combobox": {
        buttonLabel: `Apresentar sugest\xf5es`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} op\xe7\xe3o`,
                other: ()=>`${a.number(e.optionCount)} op\xe7\xf5es`
            })} dispon\xedvel.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Grupo introduzido ${e.groupTitle}, com ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} op\xe7\xe3o`,
                        other: ()=>`${a.number(e.groupCount)} op\xe7\xf5es`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", selecionado",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Sugest\xf5es`,
        selectedAnnouncement: (e)=>`${e.optionText}, selecionado`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Seletor de cores",
        colorSwatch: "amostra de cor",
        transparent: "transparente",
        twoDimensionalSlider: "Controle deslizante 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} a ${e.endDate}`,
        dateSelected: (e)=>`${e.date} selecionado`,
        finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
        maximumDate: `\xdaltima data dispon\xedvel`,
        minimumDate: `Primeira data dispon\xedvel`,
        next: `Pr\xf3ximo`,
        previous: "Anterior",
        selectedDateDescription: (e)=>`Data selecionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervalo selecionado: ${e.dateRange}`,
        startRangeSelectionPrompt: `Clique para come\xe7ar a selecionar o intervalo de datas`,
        todayDate: (e)=>`Hoje, ${e.date}`,
        todayDateSelected: (e)=>`Hoje, ${e.date} selecionado`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Categorias"
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Sugest\xf5es`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`O valor tem de ser ${e.maxValue} ou anterior.`,
        rangeReversed: `A data de in\xedcio deve ser anterior \xe0 data de fim.`,
        rangeUnderflow: (e)=>`O valor tem de ser ${e.minValue} ou posterior.`,
        unavailableDate: `Data selecionada indispon\xedvel.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "preto",
        blue: "Azul",
        "blue purple": `azul-p\xfarpura`,
        brightness: "Luminosidade",
        brown: "castanho",
        "brown yellow": "amarelo-castanho",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "ciano",
        "cyan blue": "azul-ciano",
        dark: "escuro",
        gray: "cinzento",
        grayish: "acinzentado",
        green: "Verde",
        "green cyan": "verde-ciano",
        hue: "Tonalidade",
        light: "claro",
        lightness: "Claridade",
        magenta: "magenta",
        "magenta pink": "rosa-magenta",
        orange: "laranja",
        "orange yellow": "amarelo-laranja",
        pale: `p\xe1lido`,
        pink: "cor-de-rosa",
        "pink red": "vermelho-rosa",
        purple: `p\xfarpura`,
        "purple magenta": `p\xfarpura-magenta`,
        red: "Vermelho",
        "red orange": "laranja-vermelho",
        saturation: `Satura\xe7\xe3o`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
        "very dark": "muito escuro",
        "very light": "muito claro",
        vibrant: "vibrante",
        white: "branco",
        yellow: "amarelo",
        "yellow green": "verde-amarelo"
    },
    "react-aria-components": {
        colorSwatchPicker: "Amostras de cores",
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecione um item",
        tableResizer: "Redimensionador"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pt-BR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Recolher",
        expand: "Expandir"
    },
    "@react-aria/toast": {
        close: "Fechar",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} notifica\xe7\xe3o`,
                other: ()=>`${a.number(e.count)} notifica\xe7\xf5es`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Remover",
        removeDescription: "Pressione Delete para remover a tag."
    },
    "@react-aria/table": {
        ascending: "crescente",
        ascendingSort: (e)=>`classificado pela coluna ${e.columnName} em ordem crescente`,
        columnSize: (e)=>`${e.value} pixels`,
        descending: "decrescente",
        descendingSort: (e)=>`classificado pela coluna ${e.columnName} em ordem decrescente`,
        resizerDescription: `Pressione Enter para come\xe7ar a redimensionar`,
        select: "Selecionar",
        selectAll: "Selecionar tudo",
        sortable: `coluna classific\xe1vel`,
        collapse: "Recolher",
        expand: "Expandir"
    },
    "@react-aria/steplist": {
        steplist: "Lista de etapas"
    },
    "@react-aria/spinbutton": {
        Empty: "Vazio"
    },
    "@react-aria/searchfield": {
        "Clear search": "Limpar pesquisa"
    },
    "@react-aria/overlays": {
        dismiss: "Descartar"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Diminuir ${e.fieldLabel}`,
        increase: (e)=>`Aumentar ${e.fieldLabel}`,
        numberField: `Campo de n\xfamero`
    },
    "@react-aria/menu": {
        longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `linha tem uma a\xe7\xe3o`,
        hasLinkAnnouncement: (e)=>`linha tem o link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} n\xe3o selecionado.`,
        longPressToSelect: `Mantenha pressionado para entrar no modo de sele\xe7\xe3o.`,
        select: "Selecionar",
        selectedAll: "Todos os itens selecionados.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Nenhum item selecionado",
                one: ()=>`${a.number(e.count)} item selecionado`,
                other: ()=>`${a.number(e.count)} itens selecionados`
            })}.`,
        selectedItem: (e)=>`${e.item} selecionado.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Pressione Enter para come\xe7ar a arrastar.`,
        dragDescriptionKeyboardAlt: `Pressione Alt + Enter para come\xe7ar a arrastar.`,
        dragDescriptionLongPress: `Pressione e segure para come\xe7ar a arrastar.`,
        dragDescriptionTouch: `Toque duas vezes para come\xe7ar a arrastar.`,
        dragDescriptionVirtual: `Clique para come\xe7ar a arrastar.`,
        dragItem: (e)=>`Arrastar ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} item selecionado`,
                other: ()=>`${a.number(e.count)} itens selecionados`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Pressione Enter para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Pressione Alt + Enter para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Pressione e segure para arrastar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} o item selecionado`,
                other: ()=>`${a.number(e.count)} os itens selecionados`
            })}.`,
        dragStartedKeyboard: `Comece a arrastar. Pressione Tab para navegar at\xe9 um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.`,
        dragStartedTouch: `Comece a arrastar. Navegue at\xe9 um alvo e toque duas vezes para soltar.`,
        dragStartedVirtual: `Comece a arrastar. Navegue at\xe9 um alvo e clique ou pressione Enter para soltar.`,
        dropCanceled: `Libera\xe7\xe3o cancelada.`,
        dropComplete: `Libera\xe7\xe3o conclu\xedda.`,
        dropDescriptionKeyboard: "Pressione Enter para soltar. Pressione Escape para cancelar.",
        dropDescriptionTouch: "Toque duas vezes para soltar.",
        dropDescriptionVirtual: "Clique para soltar.",
        dropIndicator: `indicador de libera\xe7\xe3o`,
        dropOnItem: (e)=>`Soltar em ${e.itemText}`,
        dropOnRoot: "Soltar",
        endDragKeyboard: "Arrastando. Pressione Enter para cancelar.",
        endDragTouch: "Arrastando. Toque duas vezes para cancelar.",
        endDragVirtual: "Arrastando. Clique para cancelar.",
        insertAfter: (e)=>`Inserir ap\xf3s ${e.itemText}`,
        insertBefore: (e)=>`Inserir antes de ${e.itemText}`,
        insertBetween: (e)=>`Inserir entre ${e.beforeItemText} e ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Calend\xe1rio`,
        day: "dia",
        dayPeriod: "AM/PM",
        endDate: "Data final",
        era: "era",
        hour: "hora",
        minute: "minuto",
        month: `m\xeas`,
        second: "segundo",
        selectedDateDescription: (e)=>`Data selecionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,
        selectedTimeDescription: (e)=>`Hora selecionada: ${e.time}`,
        startDate: "Data inicial",
        timeZoneName: `fuso hor\xe1rio`,
        weekday: "dia da semana",
        year: "ano"
    },
    "@react-aria/combobox": {
        buttonLabel: `Mostrar sugest\xf5es`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} op\xe7\xe3o`,
                other: ()=>`${a.number(e.optionCount)} op\xe7\xf5es`
            })} dispon\xedvel.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Grupo inserido ${e.groupTitle}, com ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} op\xe7\xe3o`,
                        other: ()=>`${a.number(e.groupCount)} op\xe7\xf5es`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", selecionado",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Sugest\xf5es`,
        selectedAnnouncement: (e)=>`${e.optionText}, selecionado`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Seletor de cores",
        colorSwatch: "amostra de cores",
        transparent: "transparente",
        twoDimensionalSlider: "Controle deslizante 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} a ${e.endDate}`,
        dateSelected: (e)=>`${e.date} selecionado`,
        finishRangeSelectionPrompt: `Clique para concluir a sele\xe7\xe3o do intervalo de datas`,
        maximumDate: `\xdaltima data dispon\xedvel`,
        minimumDate: `Primeira data dispon\xedvel`,
        next: `Pr\xf3ximo`,
        previous: "Anterior",
        selectedDateDescription: (e)=>`Data selecionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervalo selecionado: ${e.dateRange}`,
        startRangeSelectionPrompt: `Clique para iniciar a sele\xe7\xe3o do intervalo de datas`,
        todayDate: (e)=>`Hoje, ${e.date}`,
        todayDateSelected: (e)=>`Hoje, ${e.date} selecionado`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Caminho detalhado"
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Sugest\xf5es`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`O valor deve ser ${e.maxValue} ou anterior.`,
        rangeReversed: `A data inicial deve ser anterior \xe0 data final.`,
        rangeUnderflow: (e)=>`O valor deve ser ${e.minValue} ou posterior.`,
        unavailableDate: `Data selecionada indispon\xedvel.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "preto",
        blue: "Azul",
        "blue purple": "roxo azulado",
        brightness: "Brilho",
        brown: "marrom",
        "brown yellow": "marrom amarelado",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "ciano",
        "cyan blue": "azul-ciano",
        dark: "escuro",
        gray: "cinza",
        grayish: "acinzentado",
        green: "Verde",
        "green cyan": "verde-ciano",
        hue: "Matiz",
        light: "claro",
        lightness: "Luminosidade",
        magenta: "magenta",
        "magenta pink": "rosa-magenta",
        orange: "laranja",
        "orange yellow": "amarelo alaranjado",
        pale: `p\xe1lido`,
        pink: "rosa",
        "pink red": "rosa avermelhado",
        purple: "roxo",
        "purple magenta": "roxo-magenta",
        red: "Vermelho",
        "red orange": "laranja avermelhado",
        saturation: `Satura\xe7\xe3o`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
        "very dark": "muito escuro",
        "very light": "muito claro",
        vibrant: "vibrante",
        white: "branco",
        yellow: "amarelo",
        "yellow green": "verde amarelado"
    },
    "react-aria-components": {
        colorSwatchPicker: "Amostras de cores",
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecione um item",
        tableResizer: "Redimensionador"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pl-PL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Zwiń`,
        expand: `Rozwiń`
    },
    "@react-aria/toast": {
        close: "Zamknij",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} powiadomienie`,
                few: ()=>`${a.number(e.count)} powiadomienia`,
                many: ()=>`${a.number(e.count)} powiadomień`,
                other: ()=>`${a.number(e.count)} powiadomienia`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Usuń`,
        removeDescription: `Naciśnij Usuń, aby usunąć znacznik.`
    },
    "@react-aria/table": {
        ascending: `rosnąco`,
        ascendingSort: (e)=>`posortowano według kolumny ${e.columnName} w porządku rosnącym`,
        columnSize: (e)=>`Liczba pikseli: ${e.value}`,
        descending: `malejąco`,
        descendingSort: (e)=>`posortowano według kolumny ${e.columnName} w porządku malejącym`,
        resizerDescription: `Naciśnij Enter, aby rozpocząć zmienianie rozmiaru`,
        select: "Zaznacz",
        selectAll: "Zaznacz wszystko",
        sortable: `kolumna z możliwością sortowania`,
        collapse: `Zwiń`,
        expand: `Rozwiń`
    },
    "@react-aria/steplist": {
        steplist: `Lista krok\xf3w`
    },
    "@react-aria/spinbutton": {
        Empty: "Pusty"
    },
    "@react-aria/searchfield": {
        "Clear search": `Wyczyść zawartość wyszukiwania`
    },
    "@react-aria/overlays": {
        dismiss: "Zignoruj"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Zmniejsz ${e.fieldLabel}`,
        increase: (e)=>`Zwiększ ${e.fieldLabel}`,
        numberField: "Pole numeru"
    },
    "@react-aria/menu": {
        longPressMessage: `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w d\xf3ł, aby otworzyć menu`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `wiersz zawiera działanie`,
        hasLinkAnnouncement: (e)=>`wiersz zawiera link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Nie zaznaczono ${e.item}.`,
        longPressToSelect: `Naciśnij i przytrzymaj, aby wejść do trybu wyboru.`,
        select: "Zaznacz",
        selectedAll: "Wszystkie zaznaczone elementy.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Nie zaznaczono żadnych element\xf3w`,
                one: ()=>`${a.number(e.count)} zaznaczony element`,
                other: ()=>`${a.number(e.count)} zaznaczonych element\xf3w`
            })}.`,
        selectedItem: (e)=>`Zaznaczono ${e.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Naciśnij Enter, aby rozpocząć przeciąganie.`,
        dragDescriptionKeyboardAlt: `Naciśnij Alt + Enter, aby rozpocząć przeciąganie.`,
        dragDescriptionLongPress: `Naciśnij i przytrzymaj, aby rozpocząć przeciąganie.`,
        dragDescriptionTouch: `Dotknij dwukrotnie, aby rozpocząć przeciąganie.`,
        dragDescriptionVirtual: `Kliknij, aby rozpocząć przeciąganie.`,
        dragItem: (e)=>`Przeciągnij ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Przeciągnij ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} wybrany element`,
                other: ()=>`${a.number(e.count)} wybranych element\xf3w`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Naciśnij Enter, aby przeciągnąć ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} wybrany element`,
                other: ()=>`${a.number(e.count)} wybrane(-ych) elementy(-\xf3w)`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Naciśnij Alt + Enter, aby przeciągnąć ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} wybrany element`,
                other: ()=>`${a.number(e.count)} wybrane(-ych) elementy(-\xf3w)`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Naciśnij i przytrzymaj, aby przeciągnąć ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} wybrany element`,
                other: ()=>`${a.number(e.count)} wybrane(-ych) elementy(-\xf3w)`
            })}.`,
        dragStartedKeyboard: `Rozpoczęto przeciąganie. Naciśnij Tab, aby wybrać miejsce docelowe, a następnie naciśnij Enter, aby upuścić, lub Escape, aby anulować.`,
        dragStartedTouch: `Rozpoczęto przeciąganie. Wybierz miejsce, w kt\xf3rym chcesz upuścić element, a następnie dotknij dwukrotnie, aby upuścić.F`,
        dragStartedVirtual: `Rozpoczęto przeciąganie. Wybierz miejsce, w kt\xf3rym chcesz upuścić element, a następnie kliknij lub naciśnij Enter, aby upuścić.`,
        dropCanceled: "Anulowano upuszczenie.",
        dropComplete: `Zakończono upuszczanie.`,
        dropDescriptionKeyboard: `Naciśnij Enter, aby upuścić. Naciśnij Escape, aby anulować przeciągnięcie.`,
        dropDescriptionTouch: `Dotknij dwukrotnie, aby upuścić.`,
        dropDescriptionVirtual: `Kliknij, aby upuścić.`,
        dropIndicator: `wskaźnik upuszczenia`,
        dropOnItem: (e)=>`Upuść na ${e.itemText}`,
        dropOnRoot: `Upuść`,
        endDragKeyboard: `Przeciąganie. Naciśnij Enter, aby anulować przeciągnięcie.`,
        endDragTouch: `Przeciąganie. Kliknij dwukrotnie, aby anulować przeciągnięcie.`,
        endDragVirtual: `Przeciąganie. Kliknij, aby anulować przeciąganie.`,
        insertAfter: (e)=>`Umieść za ${e.itemText}`,
        insertBefore: (e)=>`Umieść przed ${e.itemText}`,
        insertBetween: (e)=>`Umieść między ${e.beforeItemText} i ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalendarz",
        day: `dzień`,
        dayPeriod: `rano / po południu / wieczorem`,
        endDate: `Data końcowa`,
        era: "era",
        hour: "godzina",
        minute: "minuta",
        month: `miesiąc`,
        second: "sekunda",
        selectedDateDescription: (e)=>`Wybrana data: ${e.date}`,
        selectedRangeDescription: (e)=>`Wybrany zakres: ${e.startDate} do ${e.endDate}`,
        selectedTimeDescription: (e)=>`Wybrany czas: ${e.time}`,
        startDate: `Data początkowa`,
        timeZoneName: "strefa czasowa",
        weekday: `dzień tygodnia`,
        year: "rok"
    },
    "@react-aria/combobox": {
        buttonLabel: `Wyświetlaj sugestie`,
        countAnnouncement: (e, a)=>`dostępna/dostępne(-nych) ${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opcja`,
                other: ()=>`${a.number(e.optionCount)} opcje(-i)`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Dołączono do grupy ${e.groupTitle}, z ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opcją`,
                        other: ()=>`${a.number(e.groupCount)} opcjami`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", wybrano",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Sugestie",
        selectedAnnouncement: (e)=>`${e.optionText}, wybrano`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Pr\xf3bnik kolor\xf3w`,
        colorSwatch: `pr\xf3bka koloru`,
        transparent: "przezroczysty",
        twoDimensionalSlider: "Suwak 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} do ${e.endDate}`,
        dateSelected: (e)=>`Wybrano ${e.date}`,
        finishRangeSelectionPrompt: `Kliknij, aby zakończyć wyb\xf3r zakresu dat`,
        maximumDate: `Ostatnia dostępna data`,
        minimumDate: `Pierwsza dostępna data`,
        next: "Dalej",
        previous: "Wstecz",
        selectedDateDescription: (e)=>`Wybrana data: ${e.date}`,
        selectedRangeDescription: (e)=>`Wybrany zakres: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknij, aby rozpocząć wyb\xf3r zakresu dat`,
        todayDate: (e)=>`Dzisiaj, ${e.date}`,
        todayDateSelected: (e)=>`Dzisiaj wybrano ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Struktura nawigacyjna"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Sugestie"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,
        rangeReversed: `Data rozpoczęcia musi być wcześniejsza niż data zakończenia.`,
        rangeUnderflow: (e)=>`Wartość musi mieć wartość ${e.minValue} lub p\xf3źniejszą.`,
        unavailableDate: `Wybrana data jest niedostępna.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "czarny",
        blue: "Niebieski",
        "blue purple": "niebiesko-fioletowy",
        brightness: `Jasność`,
        brown: `brązowy`,
        "brown yellow": `brązowo-ż\xf3łty`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cyjanowy",
        "cyan blue": "cyjanowo-niebieski",
        dark: "ciemny",
        gray: "szary",
        grayish: "szarawy",
        green: "Zielony",
        "green cyan": "zielono-cyjanowy",
        hue: `Odcień`,
        light: "jasny",
        lightness: `Jaskrawość`,
        magenta: "purpurowy",
        "magenta pink": `purpurowo-r\xf3żowy`,
        orange: `pomarańczowy`,
        "orange yellow": `pomarańczowo-ż\xf3łty`,
        pale: "blady",
        pink: `r\xf3żowy`,
        "pink red": `r\xf3żowo-czerwony`,
        purple: "fioletowy",
        "purple magenta": "fioletowo-purpurowy",
        red: "Czerwony",
        "red orange": `czerwono-pomarańczowy`,
        saturation: "Nasycenie",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} przezroczystości`,
        "very dark": "bardzo ciemny",
        "very light": "bardzo jasny",
        vibrant: "intensywny",
        white: `biały`,
        yellow: `ż\xf3łty`,
        "yellow green": `ż\xf3łto-zielony`
    },
    "react-aria-components": {
        colorSwatchPicker: `Pr\xf3bki kolor\xf3w`,
        dropzoneLabel: "Strefa upuszczania",
        selectPlaceholder: "Wybierz element",
        tableResizer: "Zmiana rozmiaru"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/nl-NL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Samenvouwen",
        expand: "Uitvouwen"
    },
    "@react-aria/toast": {
        close: "Sluiten",
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} melding`,
                other: ()=>`${t.number(e.count)} meldingen`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Verwijderen",
        removeDescription: "Druk op Verwijderen om de tag te verwijderen."
    },
    "@react-aria/table": {
        ascending: "oplopend",
        ascendingSort: (e)=>`gesorteerd in oplopende volgorde in kolom ${e.columnName}`,
        columnSize: (e)=>`${e.value} pixels`,
        descending: "aflopend",
        descendingSort: (e)=>`gesorteerd in aflopende volgorde in kolom ${e.columnName}`,
        resizerDescription: "Druk op Enter om het formaat te wijzigen",
        select: "Selecteren",
        selectAll: "Alles selecteren",
        sortable: "sorteerbare kolom",
        collapse: "Samenvouwen",
        expand: "Uitvouwen"
    },
    "@react-aria/steplist": {
        steplist: "Stappenlijst"
    },
    "@react-aria/spinbutton": {
        Empty: "Leeg"
    },
    "@react-aria/searchfield": {
        "Clear search": "Zoekactie wissen"
    },
    "@react-aria/overlays": {
        dismiss: "Negeren"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel} verlagen`,
        increase: (e)=>`${e.fieldLabel} verhogen`,
        numberField: "Getalveld"
    },
    "@react-aria/menu": {
        longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "rij heeft actie",
        hasLinkAnnouncement: (e)=>`rij heeft koppeling: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} niet geselecteerd.`,
        longPressToSelect: "Druk lang om de selectiemodus te openen.",
        select: "Selecteren",
        selectedAll: "Alle items geselecteerd.",
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": "Geen items geselecteerd",
                one: ()=>`${t.number(e.count)} item geselecteerd`,
                other: ()=>`${t.number(e.count)} items geselecteerd`
            })}.`,
        selectedItem: (e)=>`${e.item} geselecteerd.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: "Druk op Enter om te slepen.",
        dragDescriptionKeyboardAlt: "Druk op Alt + Enter om te slepen.",
        dragDescriptionLongPress: "Houd lang ingedrukt om te slepen.",
        dragDescriptionTouch: "Dubbeltik om te slepen.",
        dragDescriptionVirtual: "Klik om met slepen te starten.",
        dragItem: (e)=>`${e.itemText} slepen`,
        dragSelectedItems: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} geselecteerd item`,
                other: ()=>`${t.number(e.count)} geselecteerde items`
            })} slepen`,
        dragSelectedKeyboard: (e, t)=>`Druk op Enter om ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} geselecteerd item`,
                other: ()=>`${t.number(e.count)} geselecteerde items`
            })} te slepen.`,
        dragSelectedKeyboardAlt: (e, t)=>`Druk op Alt + Enter om ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} geselecteerd item`,
                other: ()=>`${t.number(e.count)} geselecteerde items`
            })} te slepen.`,
        dragSelectedLongPress: (e, t)=>`Houd lang ingedrukt om ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} geselecteerd item`,
                other: ()=>`${t.number(e.count)} geselecteerde items`
            })} te slepen.`,
        dragStartedKeyboard: "Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.",
        dragStartedTouch: "Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.",
        dragStartedVirtual: "Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.",
        dropCanceled: "Neerzetten geannuleerd.",
        dropComplete: "Neerzetten voltooid.",
        dropDescriptionKeyboard: "Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.",
        dropDescriptionTouch: "Dubbeltik om neer te zetten.",
        dropDescriptionVirtual: "Klik om neer te zetten.",
        dropIndicator: "aanwijzer voor neerzetten",
        dropOnItem: (e)=>`Neerzetten op ${e.itemText}`,
        dropOnRoot: "Neerzetten op",
        endDragKeyboard: "Bezig met slepen. Druk op Enter om te annuleren.",
        endDragTouch: "Bezig met slepen. Dubbeltik om te annuleren.",
        endDragVirtual: "Bezig met slepen. Klik om te annuleren.",
        insertAfter: (e)=>`Plaatsen na ${e.itemText}`,
        insertBefore: (e)=>`Plaatsen v\xf3\xf3r ${e.itemText}`,
        insertBetween: (e)=>`Plaatsen tussen ${e.beforeItemText} en ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: "dag",
        dayPeriod: "a.m./p.m.",
        endDate: "Einddatum",
        era: "tijdperk",
        hour: "uur",
        minute: "minuut",
        month: "maand",
        second: "seconde",
        selectedDateDescription: (e)=>`Geselecteerde datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,
        selectedTimeDescription: (e)=>`Geselecteerde tijd: ${e.time}`,
        startDate: "Startdatum",
        timeZoneName: "tijdzone",
        weekday: "dag van de week",
        year: "jaar"
    },
    "@react-aria/combobox": {
        buttonLabel: "Suggesties weergeven",
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} optie`,
                other: ()=>`${t.number(e.optionCount)} opties`
            })} beschikbaar.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} optie`,
                        other: ()=>`${t.number(e.groupCount)} opties`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: ", geselecteerd",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Suggesties",
        selectedAnnouncement: (e)=>`${e.optionText}, geselecteerd`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Kleurkiezer",
        colorSwatch: "kleurstaal",
        transparent: "transparant",
        twoDimensionalSlider: "2D-schuifregelaar"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} tot ${e.endDate}`,
        dateSelected: (e)=>`${e.date} geselecteerd`,
        finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
        maximumDate: "Laatste beschikbare datum",
        minimumDate: "Eerste beschikbare datum",
        next: "Volgende",
        previous: "Vorige",
        selectedDateDescription: (e)=>`Geselecteerde datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Geselecteerd bereik: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
        todayDate: (e)=>`Vandaag, ${e.date}`,
        todayDateSelected: (e)=>`Vandaag, ${e.date} geselecteerd`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Broodkruimels"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Suggesties"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Waarde moet ${e.maxValue} of eerder zijn.`,
        rangeReversed: "De startdatum moet voor de einddatum liggen.",
        rangeUnderflow: (e)=>`Waarde moet ${e.minValue} of later zijn.`,
        unavailableDate: "Geselecteerde datum niet beschikbaar."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "zwart",
        blue: "Blauw",
        "blue purple": "paarsblauw",
        brightness: "Helderheid",
        brown: "bruin",
        "brown yellow": "bruingeel",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cyaan",
        "cyan blue": "cyaanblauw",
        dark: "donker",
        gray: "grijs",
        grayish: "grijsachtig",
        green: "Groen",
        "green cyan": "cyaangroen",
        hue: "Kleurtoon",
        light: "licht",
        lightness: "Lichtsterkte",
        magenta: "magenta",
        "magenta pink": "magentaroze",
        orange: "oranje",
        "orange yellow": "oranjegeel",
        pale: "bleek",
        pink: "roze",
        "pink red": "rozerood",
        purple: "paars",
        "purple magenta": "magentapaars",
        red: "Rood",
        "red orange": "roodoranje",
        saturation: "Verzadiging",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparant`,
        "very dark": "heel donker",
        "very light": "heel licht",
        vibrant: "levendig",
        white: "wit",
        yellow: "geel",
        "yellow green": "geelgroen"
    },
    "react-aria-components": {
        colorSwatchPicker: "kleurstalen",
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Selecteer een item",
        tableResizer: "Resizer"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/nb-NO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Skjul",
        expand: "Utvid"
    },
    "@react-aria/toast": {
        close: "Lukk",
        notifications: (e, r)=>`${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} varsling`,
                other: ()=>`${r.number(e.count)} varsler`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Fjern",
        removeDescription: `Trykk p\xe5 Slett for \xe5 fjerne taggen.`
    },
    "@react-aria/table": {
        ascending: "stigende",
        ascendingSort: (e)=>`sortert etter kolonne ${e.columnName} i stigende rekkef\xf8lge`,
        columnSize: (e)=>`${e.value} piksler`,
        descending: "synkende",
        descendingSort: (e)=>`sortert etter kolonne ${e.columnName} i synkende rekkef\xf8lge`,
        resizerDescription: `Trykk p\xe5 Enter for \xe5 starte st\xf8rrelsesendring`,
        select: "Velg",
        selectAll: "Velg alle",
        sortable: "kolonne som kan sorteres",
        collapse: "Skjul",
        expand: "Utvid"
    },
    "@react-aria/steplist": {
        steplist: "Trinnliste"
    },
    "@react-aria/spinbutton": {
        Empty: "Tom"
    },
    "@react-aria/searchfield": {
        "Clear search": `T\xf8m s\xf8k`
    },
    "@react-aria/overlays": {
        dismiss: "Lukk"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Reduser ${e.fieldLabel}`,
        increase: (e)=>`\xd8k ${e.fieldLabel}`,
        numberField: "Tallfelt"
    },
    "@react-aria/menu": {
        longPressMessage: `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "rad har handling",
        hasLinkAnnouncement: (e)=>`rad har kobling: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} er ikke valgt.`,
        longPressToSelect: `Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.`,
        select: "Velg",
        selectedAll: "Alle elementer er valgt.",
        selectedCount: (e, r)=>`${r.plural(e.count, {
                "=0": "Ingen elementer er valgt",
                one: ()=>`${r.number(e.count)} element er valgt`,
                other: ()=>`${r.number(e.count)} elementer er valgt`
            })}.`,
        selectedItem: (e)=>`${e.item} er valgt.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Trykk p\xe5 Enter for \xe5 begynne \xe5 dra.`,
        dragDescriptionKeyboardAlt: `Trykk p\xe5 Alt + Enter for \xe5 begynne \xe5 dra.`,
        dragDescriptionLongPress: `Trykk lenge for \xe5 begynne \xe5 dra.`,
        dragDescriptionTouch: `Dobbelttrykk for \xe5 begynne \xe5 dra.`,
        dragDescriptionVirtual: `Klikk for \xe5 begynne \xe5 dra.`,
        dragItem: (e)=>`Dra ${e.itemText}`,
        dragSelectedItems: (e, r)=>`Dra ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} merket element`,
                other: ()=>`${r.number(e.count)} merkede elementer`
            })}`,
        dragSelectedKeyboard: (e, r)=>`Trykk Enter for \xe5 dra ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} valgt element`,
                other: ()=>`${r.number(e.count)} valgte elementer`
            })}.`,
        dragSelectedKeyboardAlt: (e, r)=>`Trykk p\xe5 Alt + Enter for \xe5 dra ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} valgt element`,
                other: ()=>`${r.number(e.count)} valgte elementer`
            })}.`,
        dragSelectedLongPress: (e, r)=>`Trykk lenge for \xe5 dra ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} valgt element`,
                other: ()=>`${r.number(e.count)} valgte elementer`
            })}.`,
        dragStartedKeyboard: `Begynte \xe5 dra. Trykk p\xe5 Tab for \xe5 navigere til et m\xe5l, og trykk deretter p\xe5 Enter for \xe5 slippe eller p\xe5 Esc for \xe5 avbryte.`,
        dragStartedTouch: `Begynte \xe5 dra. Naviger til et m\xe5l, og dobbelttrykk for \xe5 slippe.`,
        dragStartedVirtual: `Begynte \xe5 dra. Naviger til et m\xe5l, og klikk eller trykk p\xe5 Enter for \xe5 slippe.`,
        dropCanceled: `Avbr\xf8t slipping.`,
        dropComplete: `Slippingen er fullf\xf8rt.`,
        dropDescriptionKeyboard: `Trykk p\xe5 Enter for \xe5 slippe. Trykk p\xe5 Esc hvis du vil avbryte draingen.`,
        dropDescriptionTouch: `Dobbelttrykk for \xe5 slippe.`,
        dropDescriptionVirtual: `Klikk for \xe5 slippe.`,
        dropIndicator: "slippeindikator",
        dropOnItem: (e)=>`Slipp p\xe5 ${e.itemText}`,
        dropOnRoot: `Slipp p\xe5`,
        endDragKeyboard: `Drar. Trykk p\xe5 Enter hvis du vil avbryte.`,
        endDragTouch: "Drar. Dobbelttrykk hvis du vil avbryte.",
        endDragVirtual: "Drar. Klikk hvis du vil avbryte.",
        insertAfter: (e)=>`Sett inn etter ${e.itemText}`,
        insertBefore: (e)=>`Sett inn f\xf8r ${e.itemText}`,
        insertBetween: (e)=>`Sett inn mellom ${e.beforeItemText} og ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: "dag",
        dayPeriod: "a.m./p.m.",
        endDate: "Sluttdato",
        era: "tidsalder",
        hour: "time",
        minute: "minutt",
        month: `m\xe5ned`,
        second: "sekund",
        selectedDateDescription: (e)=>`Valgt dato: ${e.date}`,
        selectedRangeDescription: (e)=>`Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,
        selectedTimeDescription: (e)=>`Valgt tid: ${e.time}`,
        startDate: "Startdato",
        timeZoneName: "tidssone",
        weekday: "ukedag",
        year: `\xe5r`
    },
    "@react-aria/combobox": {
        buttonLabel: "Vis forslag",
        countAnnouncement: (e, r)=>`${r.plural(e.optionCount, {
                one: ()=>`${r.number(e.optionCount)} alternativ`,
                other: ()=>`${r.number(e.optionCount)} alternativer`
            })} finnes.`,
        focusAnnouncement: (e, r)=>`${r.select({
                true: ()=>`Angitt gruppe ${e.groupTitle}, med ${r.plural(e.groupCount, {
                        one: ()=>`${r.number(e.groupCount)} alternativ`,
                        other: ()=>`${r.number(e.groupCount)} alternativer`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${r.select({
                true: ", valgt",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Forslag",
        selectedAnnouncement: (e)=>`${e.optionText}, valgt`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Fargevelger",
        colorSwatch: "fargekart",
        transparent: "gjennomsiktig",
        twoDimensionalSlider: "2D-glidebryter"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} til ${e.endDate}`,
        dateSelected: (e)=>`${e.date} valgt`,
        finishRangeSelectionPrompt: `Klikk for \xe5 fullf\xf8re valg av datoomr\xe5de`,
        maximumDate: "Siste tilgjengelige dato",
        minimumDate: `F\xf8rste tilgjengelige dato`,
        next: "Neste",
        previous: "Forrige",
        selectedDateDescription: (e)=>`Valgt dato: ${e.date}`,
        selectedRangeDescription: (e)=>`Valgt omr\xe5de: ${e.dateRange}`,
        startRangeSelectionPrompt: `Klikk for \xe5 starte valg av datoomr\xe5de`,
        todayDate: (e)=>`I dag, ${e.date}`,
        todayDateSelected: (e)=>`I dag, ${e.date} valgt`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Navigasjonsstier"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Forslag"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,
        rangeReversed: `Startdatoen m\xe5 v\xe6re f\xf8r sluttdatoen.`,
        rangeUnderflow: (e)=>`Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,
        unavailableDate: "Valgt dato utilgjengelig."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "svart",
        blue: `Bl\xe5`,
        "blue purple": `bl\xe5lilla`,
        brightness: "Lysstyrke",
        brown: "brun",
        "brown yellow": "brungul",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cyan",
        "cyan blue": `cyanbl\xe5`,
        dark: `m\xf8rk`,
        gray: `gr\xe5`,
        grayish: `gr\xe5aktig`,
        green: `Gr\xf8nn`,
        "green cyan": `gr\xf8nncyan`,
        hue: "Fargetone",
        light: "lys",
        lightness: "Lyshet",
        magenta: "magenta",
        "magenta pink": "magentarosa",
        orange: "oransje",
        "orange yellow": "oransjegul",
        pale: "blek",
        pink: "rosa",
        "pink red": `rosar\xf8d`,
        purple: "lilla",
        "purple magenta": "lillamagenta",
        red: `R\xf8d`,
        "red orange": `r\xf8doransje`,
        saturation: "Metning",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} gjennomsiktig`,
        "very dark": `sv\xe6rt m\xf8rk`,
        "very light": `sv\xe6rt lys`,
        vibrant: "levende",
        white: "hvit",
        yellow: "gul",
        "yellow green": `gulgr\xf8nn`
    },
    "react-aria-components": {
        colorSwatchPicker: "Fargekart",
        dropzoneLabel: "Droppsone",
        selectPlaceholder: "Velg et element",
        tableResizer: `St\xf8rrelsesendrer`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/lv-LV.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Sakļaut`,
        expand: `Izvērst`
    },
    "@react-aria/toast": {
        close: `Aizvērt`,
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} paziņojums`,
                other: ()=>`${a.number(e.count)} paziņojumi`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Noņemt`,
        removeDescription: `Nospiediet Delete [Dzēst], lai noņemtu tagu.`
    },
    "@react-aria/table": {
        ascending: `augošā secībā`,
        ascendingSort: (e)=>`kārtots pēc kolonnas ${e.columnName} augošā secībā`,
        columnSize: (e)=>`${e.value} pikseļi`,
        descending: `dilstošā secībā`,
        descendingSort: (e)=>`kārtots pēc kolonnas ${e.columnName} dilstošā secībā`,
        resizerDescription: `Nospiediet Enter, lai sāktu izmēru mainīšanu`,
        select: `Atlasīt`,
        selectAll: `Atlasīt visu`,
        sortable: `kārtojamā kolonna`,
        collapse: `Sakļaut`,
        expand: `Izvērst`
    },
    "@react-aria/steplist": {
        steplist: `Darbību saraksts`
    },
    "@react-aria/spinbutton": {
        Empty: `Tukšs`
    },
    "@react-aria/searchfield": {
        "Clear search": `Notīrīt meklēšanu`
    },
    "@react-aria/overlays": {
        dismiss: `Nerādīt`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Samazināšana ${e.fieldLabel}`,
        increase: (e)=>`Palielināšana ${e.fieldLabel}`,
        numberField: `Skaitļu lauks`
    },
    "@react-aria/menu": {
        longPressMessage: `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `rindai ir darbība`,
        hasLinkAnnouncement: (e)=>`rindai ir saite: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Vienums ${e.item} nav atlasīts.`,
        longPressToSelect: `Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.`,
        select: `Atlasīt`,
        selectedAll: `Atlasīti visi vienumi.`,
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Nav atlasīts neviens vienums`,
                one: ()=>`Atlasīto vienumu skaits: ${a.number(e.count)}`,
                other: ()=>`Atlasīto vienumu skaits: ${a.number(e.count)}`
            })}.`,
        selectedItem: (e)=>`Atlasīts vienums ${e.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Nospiediet Enter, lai sāktu vilkšanu.`,
        dragDescriptionKeyboardAlt: `Nospiediet taustiņu kombināciju Alt+Enter, lai sāktu vilkšanu.`,
        dragDescriptionLongPress: `Turiet nospiestu, lai sāktu vilkšanu.`,
        dragDescriptionTouch: `Veiciet dubultskārienu, lai sāktu vilkšanu.`,
        dragDescriptionVirtual: `Noklikšķiniet, lai sāktu vilkšanu.`,
        dragItem: (e)=>`Velciet ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Velciet ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} atlasīto vienumu`,
                other: ()=>`${a.number(e.count)} atlasītos vienumus`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Nospiediet taustiņu Enter, lai vilktu ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} atlasīto vienumu`,
                other: ()=>`${a.number(e.count)} atlasītos vienumus`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Nospiediet taustiņu kombināciju Alt+Enter, lai vilktu ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} atlasīto vienumu`,
                other: ()=>`${a.number(e.count)} atlasītos vienumus`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Turiet nospiestu, lai vilktu ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} atlasīto vienumu`,
                other: ()=>`${a.number(e.count)} atlasītos vienumus`
            })}.`,
        dragStartedKeyboard: `Uzsākta vilkšana. Nospiediet taustiņu Tab, lai pārietu uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.`,
        dragStartedTouch: `Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam veiciet dubultskārienu, lai nomestu.`,
        dragStartedVirtual: `Uzsākta vilkšana. Pārejiet uz nomešanas mērķi, pēc tam nospiediet Enter, lai nomestu.`,
        dropCanceled: `Nomešana atcelta.`,
        dropComplete: `Nomešana pabeigta.`,
        dropDescriptionKeyboard: `Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilkšanu.`,
        dropDescriptionTouch: `Veiciet dubultskārienu, lai nomestu.`,
        dropDescriptionVirtual: `Noklikšķiniet, lai nomestu.`,
        dropIndicator: `nomešanas indikators`,
        dropOnItem: (e)=>`Nometiet uz ${e.itemText}`,
        dropOnRoot: "Nometiet uz",
        endDragKeyboard: `Notiek vilkšana. Nospiediet Enter, lai atceltu vilkšanu.`,
        endDragTouch: `Notiek vilkšana. Veiciet dubultskārienu, lai atceltu vilkšanu.`,
        endDragVirtual: `Notiek vilkšana. Noklikšķiniet, lai atceltu vilkšanu.`,
        insertAfter: (e)=>`Ievietojiet pēc ${e.itemText}`,
        insertBefore: (e)=>`Ievietojiet pirms ${e.itemText}`,
        insertBetween: (e)=>`Ievietojiet starp ${e.beforeItemText} un ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Kalendārs`,
        day: "diena",
        dayPeriod: `priekšpusdienā/pēcpusdienā`,
        endDate: "Beigu datums",
        era: `ēra`,
        hour: "stundas",
        minute: `minūtes`,
        month: `mēnesis`,
        second: "sekundes",
        selectedDateDescription: (e)=>`Atlasītais datums: ${e.date}`,
        selectedRangeDescription: (e)=>`Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,
        selectedTimeDescription: (e)=>`Atlasītais laiks: ${e.time}`,
        startDate: `Sākuma datums`,
        timeZoneName: "laika josla",
        weekday: `nedēļas diena`,
        year: "gads"
    },
    "@react-aria/combobox": {
        buttonLabel: `Rādīt ieteikumus`,
        countAnnouncement: (e, a)=>`Pieejamo opciju skaits: ${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opcija`,
                other: ()=>`${a.number(e.optionCount)} opcijas`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Ievadīta grupa ${e.groupTitle}, ar ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opciju`,
                        other: ()=>`${a.number(e.groupCount)} opcijām`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: `, atlasīta`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Ieteikumi",
        selectedAnnouncement: (e)=>`${e.optionText}, atlasīta`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Krāsu atlasītājs`,
        colorSwatch: `krāsu paraugs`,
        transparent: `caurspīdīgs`,
        twoDimensionalSlider: `2D slīdnis`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`No ${e.startDate} līdz ${e.endDate}`,
        dateSelected: (e)=>`Atlasīts: ${e.date}`,
        finishRangeSelectionPrompt: `Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,
        maximumDate: `Pēdējais pieejamais datums`,
        minimumDate: "Pirmais pieejamais datums",
        next: `Tālāk`,
        previous: `Atpakaļ`,
        selectedDateDescription: (e)=>`Atlasītais datums: ${e.date}`,
        selectedRangeDescription: (e)=>`Atlasītais diapazons: ${e.dateRange}`,
        startRangeSelectionPrompt: `Noklikšķiniet, lai sāktu datumu diapazona atlasi`,
        todayDate: (e)=>`Šodien, ${e.date}`,
        todayDateSelected: (e)=>`Atlasīta šodiena, ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Atpakaļceļi`
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Ieteikumi"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,
        rangeReversed: `Sākuma datumam ir jābūt pirms beigu datuma.`,
        rangeUnderflow: (e)=>`Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,
        unavailableDate: `Atlasītais datums nav pieejams.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "melns",
        blue: "Zila",
        "blue purple": "zili violets",
        brightness: "Spilgtums",
        brown: `brūns`,
        "brown yellow": `brūni dzeltens`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `ciāns`,
        "cyan blue": `ciāna zils`,
        dark: `tumšs`,
        gray: `pelēks`,
        grayish: `pelēcīgs`,
        green: `Zaļa`,
        "green cyan": `zaļš ciāns`,
        hue: `Nokrāsa`,
        light: `gaišs`,
        lightness: `Gaišums`,
        magenta: "fuksiju",
        "magenta pink": `fuksiju rozā`,
        orange: `oranžs`,
        "orange yellow": `oranži dzeltens`,
        pale: `bāls`,
        pink: `rozā`,
        "pink red": `rozīgi sarkans`,
        purple: "violets",
        "purple magenta": "violets fuksiju",
        red: "Sarkana",
        "red orange": `sarkanīgi oranžs`,
        saturation: `Piesātinājums`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} caurspīdīgs`,
        "very dark": `ļoti tumšs`,
        "very light": `ļoti gaišs`,
        vibrant: `košs`,
        white: "balts",
        yellow: "dzeltens",
        "yellow green": `dzelteni zaļš`
    },
    "react-aria-components": {
        colorSwatchPicker: `Krāsu paraugi`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Izvēlēties vienumu`,
        tableResizer: `Izmēra mainītājs`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/lt-LT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Sutraukti",
        expand: `Išskleisti`
    },
    "@react-aria/toast": {
        close: `Uždaryti`,
        notifications: (a, e)=>`${e.plural(a.count, {
                one: ()=>`${e.number(a.count)} pranešimas`,
                other: ()=>`${e.number(a.count)} pranešimai`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Pašalinti`,
        removeDescription: `Norėdami pašalinti žymą, paspauskite „Delete“ klavišą.`
    },
    "@react-aria/table": {
        ascending: `didėjančia tvarka`,
        ascendingSort: (a)=>`surikiuota pagal stulpelį ${a.columnName} didėjančia tvarka`,
        columnSize: (a)=>`${a.value} piks.`,
        descending: `mažėjančia tvarka`,
        descendingSort: (a)=>`surikiuota pagal stulpelį ${a.columnName} mažėjančia tvarka`,
        resizerDescription: `Paspauskite „Enter“, kad pradėtumėte keisti dydį`,
        select: "Pasirinkti",
        selectAll: `Pasirinkti viską`,
        sortable: "rikiuojamas stulpelis",
        collapse: "Sutraukti",
        expand: `Išskleisti`
    },
    "@react-aria/steplist": {
        steplist: `Žingsnių sąrašas`
    },
    "@react-aria/spinbutton": {
        Empty: `Tuščias`
    },
    "@react-aria/searchfield": {
        "Clear search": `Išvalyti iešką`
    },
    "@react-aria/overlays": {
        dismiss: "Atmesti"
    },
    "@react-aria/numberfield": {
        decrease: (a)=>`Sumažinti ${a.fieldLabel}`,
        increase: (a)=>`Padidinti ${a.fieldLabel}`,
        numberField: "Numerio laukas"
    },
    "@react-aria/menu": {
        longPressMessage: `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `eilutėje yra veiksmas`,
        hasLinkAnnouncement: (a)=>`eilutėje yra nuoroda: ${a.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (a)=>`${a.item} nepasirinkta.`,
        longPressToSelect: `Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.`,
        select: "Pasirinkti",
        selectedAll: "Pasirinkti visi elementai.",
        selectedCount: (a, e)=>`${e.plural(a.count, {
                "=0": `Nepasirinktas nė vienas elementas`,
                one: ()=>`Pasirinktas ${e.number(a.count)} elementas`,
                other: ()=>`Pasirinkta elementų: ${e.number(a.count)}`
            })}.`,
        selectedItem: (a)=>`Pasirinkta: ${a.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Paspauskite „Enter“, kad pradėtumėte vilkti.`,
        dragDescriptionKeyboardAlt: `Paspauskite „Alt + Enter“, kad pradėtumėte vilkti.`,
        dragDescriptionLongPress: `Palaikykite nuspaudę, kad pradėtumėte vilkti.`,
        dragDescriptionTouch: `Palieskite dukart, kad pradėtumėte vilkti.`,
        dragDescriptionVirtual: `Spustelėkite, kad pradėtumėte vilkti.`,
        dragItem: (a)=>`Vilkti ${a.itemText}`,
        dragSelectedItems: (a, e)=>`Vilkti ${e.plural(a.count, {
                one: ()=>`${e.number(a.count)} pasirinktą elementą`,
                other: ()=>`${e.number(a.count)} pasirinktus elementus`
            })}`,
        dragSelectedKeyboard: (a, e)=>`Paspauskite „Enter“, jei norite nuvilkti ${e.plural(a.count, {
                one: ()=>`${e.number(a.count)} pasirinktą elementą`,
                other: ()=>`${e.number(a.count)} pasirinktus elementus`
            })}.`,
        dragSelectedKeyboardAlt: (a, e)=>`Paspauskite „Alt + Enter“, kad nuvilktumėte ${e.plural(a.count, {
                one: ()=>`${e.number(a.count)} pasirinktą elementą`,
                other: ()=>`${e.number(a.count)} pasirinktus elementus`
            })}.`,
        dragSelectedLongPress: (a, e)=>`Nuspaudę palaikykite, kad nuvilktumėte ${e.plural(a.count, {
                one: ()=>`${e.number(a.count)} pasirinktą elementą`,
                other: ()=>`${e.number(a.count)} pasirinktus elementus`
            })}.`,
        dragStartedKeyboard: `Pradėta vilkti. Paspauskite „Tab“, kad pereitumėte į tiesioginę paskirties vietą, tada paspauskite „Enter“, kad numestumėte, arba „Escape“, kad atšauktumėte.`,
        dragStartedTouch: `Pradėta vilkti. Eikite į tiesioginę paskirties vietą, tada palieskite dukart, kad numestumėte.`,
        dragStartedVirtual: `Pradėta vilkti. Eikite į tiesioginę paskirties vietą ir spustelėkite arba paspauskite „Enter“, kad numestumėte.`,
        dropCanceled: `Numetimas atšauktas.`,
        dropComplete: "Numesta.",
        dropDescriptionKeyboard: `Paspauskite „Enter“, kad numestumėte. Paspauskite „Escape“, kad atšauktumėte vilkimą.`,
        dropDescriptionTouch: `Palieskite dukart, kad numestumėte.`,
        dropDescriptionVirtual: `Spustelėkite, kad numestumėte.`,
        dropIndicator: "numetimo indikatorius",
        dropOnItem: (a)=>`Numesti ant ${a.itemText}`,
        dropOnRoot: "Numesti ant",
        endDragKeyboard: `Velkama. Paspauskite „Enter“, kad atšauktumėte vilkimą.`,
        endDragTouch: `Velkama. Spustelėkite dukart, kad atšauktumėte vilkimą.`,
        endDragVirtual: `Velkama. Spustelėkite, kad atšauktumėte vilkimą.`,
        insertAfter: (a)=>`Įterpti po ${a.itemText}`,
        insertBefore: (a)=>`Įterpti prieš ${a.itemText}`,
        insertBetween: (a)=>`Įterpti tarp ${a.beforeItemText} ir ${a.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalendorius",
        day: "diena",
        dayPeriod: `iki pietų / po pietų`,
        endDate: "Pabaigos data",
        era: "era",
        hour: "valanda",
        minute: `minutė`,
        month: `mėnuo`,
        second: `sekundė`,
        selectedDateDescription: (a)=>`Pasirinkta data: ${a.date}`,
        selectedRangeDescription: (a)=>`Pasirinktas intervalas: nuo ${a.startDate} iki ${a.endDate}`,
        selectedTimeDescription: (a)=>`Pasirinktas laikas: ${a.time}`,
        startDate: `Pradžios data`,
        timeZoneName: "laiko juosta",
        weekday: `savaitės diena`,
        year: "metai"
    },
    "@react-aria/combobox": {
        buttonLabel: `Rodyti pasiūlymus`,
        countAnnouncement: (a, e)=>`Yra ${e.plural(a.optionCount, {
                one: ()=>`${e.number(a.optionCount)} parinktis`,
                other: ()=>`${e.number(a.optionCount)} parinktys (-ių)`
            })}.`,
        focusAnnouncement: (a, e)=>`${e.select({
                true: ()=>`Įvesta grupė ${a.groupTitle}, su ${e.plural(a.groupCount, {
                        one: ()=>`${e.number(a.groupCount)} parinktimi`,
                        other: ()=>`${e.number(a.groupCount)} parinktimis (-ių)`
                    })}. `,
                other: ""
            }, a.isGroupChange)}${a.optionText}${e.select({
                true: ", pasirinkta",
                other: ""
            }, a.isSelected)}`,
        listboxLabel: `Pasiūlymai`,
        selectedAnnouncement: (a)=>`${a.optionText}, pasirinkta`
    },
    "@react-aria/color": {
        colorInputLabel: (a)=>`${a.label}, ${a.channelLabel}`,
        colorNameAndValue: (a)=>`${a.name}: ${a.value}`,
        colorPicker: `Spalvų parinkiklis`,
        colorSwatch: `spalvų pavyzdys`,
        transparent: "skaidrus",
        twoDimensionalSlider: "2D slankiklis"
    },
    "@react-aria/calendar": {
        dateRange: (a)=>`Nuo ${a.startDate} iki ${a.endDate}`,
        dateSelected: (a)=>`Pasirinkta ${a.date}`,
        finishRangeSelectionPrompt: `Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,
        maximumDate: `Paskutinė galima data`,
        minimumDate: "Pirmoji galima data",
        next: "Paskesnis",
        previous: "Ankstesnis",
        selectedDateDescription: (a)=>`Pasirinkta data: ${a.date}`,
        selectedRangeDescription: (a)=>`Pasirinktas intervalas: ${a.dateRange}`,
        startRangeSelectionPrompt: `Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,
        todayDate: (a)=>`Šiandien, ${a.date}`,
        todayDateSelected: (a)=>`Šiandien, pasirinkta ${a.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Naršymo kelias`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Pasiūlymai`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (a)=>`Reikšmė turi būti ${a.maxValue} arba ankstesnė.`,
        rangeReversed: `Pradžios data turi būti ankstesnė nei pabaigos data.`,
        rangeUnderflow: (a)=>`Reikšmė turi būti ${a.minValue} arba naujesnė.`,
        unavailableDate: "Pasirinkta data nepasiekiama."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "juoda",
        blue: `Mėlyna`,
        "blue purple": `melsvai violetinė`,
        brightness: `Ryškumas`,
        brown: "ruda",
        "brown yellow": "rusvai geltona",
        colorName: (a)=>`${a.lightness} ${a.chroma} ${a.hue}`,
        cyan: `žalsvai mėlyna`,
        "cyan blue": `žalsvai mėlyna`,
        dark: "tamsi",
        gray: "pilka",
        grayish: `pilkšva`,
        green: `Žalia`,
        "green cyan": `žalsvai mėlyna`,
        hue: "Atspalvis",
        light: `šviesi`,
        lightness: `Šviesumas`,
        magenta: "rausvai raudona",
        "magenta pink": `purpurinė`,
        orange: `oranžinė`,
        "orange yellow": `oranžinio atspalvio geltona`,
        pale: `blyški`,
        pink: `rožinė`,
        "pink red": `rožinė raudona`,
        purple: `violetinė`,
        "purple magenta": `purpurinė rausvai raudona`,
        red: "Raudona",
        "red orange": `rausvai oranžinė`,
        saturation: `Įsotinimas`,
        transparentColorName: (a)=>`${a.lightness} ${a.chroma} ${a.hue}, ${a.percentTransparent} skaidri`,
        "very dark": "labai tamsi",
        "very light": `labai šviesi`,
        vibrant: `ryški`,
        white: "balta",
        yellow: "geltona",
        "yellow green": `gelsvai žalia`
    },
    "react-aria-components": {
        colorSwatchPicker: `Spalvų pavyzdžiai`,
        dropzoneLabel: `„DropZone“`,
        selectPlaceholder: `Pasirinkite elementą`,
        tableResizer: `Dydžio keitiklis`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ko-KR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `접기`,
        expand: `펼치기`
    },
    "@react-aria/toast": {
        close: `닫기`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)}개 알림`,
                other: ()=>`${t.number(e.count)}개 알림`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `제거`,
        removeDescription: `태그를 제거하려면 Delete 키를 누르십시오.`
    },
    "@react-aria/table": {
        ascending: `오름차순`,
        ascendingSort: (e)=>`${e.columnName} 열을 기준으로 오름차순으로 정렬됨`,
        columnSize: (e)=>`${e.value} 픽셀`,
        descending: `내림차순`,
        descendingSort: (e)=>`${e.columnName} 열을 기준으로 내림차순으로 정렬됨`,
        resizerDescription: `크기 조정을 시작하려면 Enter를 누르세요.`,
        select: `선택`,
        selectAll: `모두 선택`,
        sortable: `정렬 가능한 열`,
        collapse: `접기`,
        expand: `펼치기`
    },
    "@react-aria/steplist": {
        steplist: `단계 목록`
    },
    "@react-aria/spinbutton": {
        Empty: `비어 있음`
    },
    "@react-aria/searchfield": {
        "Clear search": `검색 지우기`
    },
    "@react-aria/overlays": {
        dismiss: `무시`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel} 감소`,
        increase: (e)=>`${e.fieldLabel} 증가`,
        numberField: `번호 필드`
    },
    "@react-aria/menu": {
        longPressMessage: `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `행에 액션이 있음`,
        hasLinkAnnouncement: (e)=>`행에 링크가 있음: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item}이(가) 선택되지 않았습니다.`,
        longPressToSelect: `선택 모드로 들어가려면 길게 누르십시오.`,
        select: `선택`,
        selectedAll: `모든 항목이 선택되었습니다.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `선택된 항목이 없습니다`,
                one: ()=>`${t.number(e.count)}개 항목이 선택되었습니다`,
                other: ()=>`${t.number(e.count)}개 항목이 선택되었습니다`
            })}.`,
        selectedItem: (e)=>`${e.item}이(가) 선택되었습니다.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `드래그를 시작하려면 Enter를 누르세요.`,
        dragDescriptionKeyboardAlt: `드래그를 시작하려면 Alt + Enter를 누르십시오.`,
        dragDescriptionLongPress: `드래그를 시작하려면 길게 누르십시오.`,
        dragDescriptionTouch: `드래그를 시작하려면 더블 탭하세요.`,
        dragDescriptionVirtual: `드래그를 시작하려면 클릭하세요.`,
        dragItem: (e)=>`${e.itemText} 드래그`,
        dragSelectedItems: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)}개 선택 항목`,
                other: ()=>`${t.number(e.count)}개 선택 항목`
            })} 드래그`,
        dragSelectedKeyboard: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)}개 선택 항목`,
                other: ()=>`${t.number(e.count)}개 선택 항목`
            })}을 드래그하려면 Enter를 누르십시오.`,
        dragSelectedKeyboardAlt: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)}개 선택 항목`,
                other: ()=>`${t.number(e.count)}개 선택 항목`
            })}을 드래그하려면 Alt + Enter를 누르십시오.`,
        dragSelectedLongPress: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)}개 선택 항목`,
                other: ()=>`${t.number(e.count)}개 선택 항목`
            })}을 드래그하려면 길게 누르십시오.`,
        dragStartedKeyboard: `드래그가 시작되었습니다. Tab을 눌러 드롭 대상으로 이동한 다음 Enter를 눌러 드롭하거나 Esc를 눌러 취소하세요.`,
        dragStartedTouch: `드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 더블 탭하여 드롭하세요.`,
        dragStartedVirtual: `드래그가 시작되었습니다. 드롭 대상으로 이동한 다음 클릭하거나 Enter를 눌러 드롭하세요.`,
        dropCanceled: `드롭이 취소되었습니다.`,
        dropComplete: `드롭이 완료되었습니다.`,
        dropDescriptionKeyboard: `드롭하려면 Enter를 누르세요. 드래그를 취소하려면 Esc를 누르세요.`,
        dropDescriptionTouch: `더블 탭하여 드롭하세요.`,
        dropDescriptionVirtual: `드롭하려면 클릭하세요.`,
        dropIndicator: `드롭 표시기`,
        dropOnItem: (e)=>`${e.itemText}에 드롭`,
        dropOnRoot: `드롭 대상`,
        endDragKeyboard: `드래그 중입니다. 드래그를 취소하려면 Enter를 누르세요.`,
        endDragTouch: `드래그 중입니다. 드래그를 취소하려면 더블 탭하세요.`,
        endDragVirtual: `드래그 중입니다. 드래그를 취소하려면 클릭하세요.`,
        insertAfter: (e)=>`${e.itemText} 이후에 삽입`,
        insertBefore: (e)=>`${e.itemText} 이전에 삽입`,
        insertBetween: (e)=>`${e.beforeItemText} 및 ${e.afterItemText} 사이에 삽입`
    },
    "@react-aria/datepicker": {
        calendar: `달력`,
        day: `일`,
        dayPeriod: `오전/오후`,
        endDate: `종료일`,
        era: `연호`,
        hour: `시`,
        minute: `분`,
        month: `월`,
        second: `초`,
        selectedDateDescription: (e)=>`선택 일자: ${e.date}`,
        selectedRangeDescription: (e)=>`선택 범위: ${e.startDate} ~ ${e.endDate}`,
        selectedTimeDescription: (e)=>`선택 시간: ${e.time}`,
        startDate: `시작일`,
        timeZoneName: `시간대`,
        weekday: `요일`,
        year: `년`
    },
    "@react-aria/combobox": {
        buttonLabel: `제안 사항 표시`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)}개 옵션`,
                other: ()=>`${t.number(e.optionCount)}개 옵션`
            })}을 사용할 수 있습니다.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`입력한 그룹 ${e.groupTitle}, ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)}개 옵션`,
                        other: ()=>`${t.number(e.groupCount)}개 옵션`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, 선택됨`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `제안`,
        selectedAnnouncement: (e)=>`${e.optionText}, 선택됨`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `색상 피커`,
        colorSwatch: `색상 견본`,
        transparent: `투명도`,
        twoDimensionalSlider: `2D 슬라이더`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} ~ ${e.endDate}`,
        dateSelected: (e)=>`${e.date} 선택됨`,
        finishRangeSelectionPrompt: `날짜 범위 선택을 완료하려면 클릭하십시오.`,
        maximumDate: `마지막으로 사용 가능한 일자`,
        minimumDate: `처음으로 사용 가능한 일자`,
        next: `다음`,
        previous: `이전`,
        selectedDateDescription: (e)=>`선택 일자: ${e.date}`,
        selectedRangeDescription: (e)=>`선택 범위: ${e.dateRange}`,
        startRangeSelectionPrompt: `날짜 범위 선택을 시작하려면 클릭하십시오.`,
        todayDate: (e)=>`오늘, ${e.date}`,
        todayDateSelected: (e)=>`오늘, ${e.date} 선택됨`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `탐색 표시`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `제안`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`값은 ${e.maxValue} 이전이어야 합니다.`,
        rangeReversed: `시작일은 종료일 이전이어야 합니다.`,
        rangeUnderflow: (e)=>`값은 ${e.minValue} 이후여야 합니다.`,
        unavailableDate: `선택한 날짜를 사용할 수 없습니다.`
    },
    "@react-stately/color": {
        alpha: `알파`,
        black: `검은색`,
        blue: `파랑`,
        "blue purple": `청자색`,
        brightness: `명도`,
        brown: `갈색`,
        "brown yellow": `황갈색`,
        colorName: (e)=>`${e.lightness}, ${e.chroma}, ${e.hue}`,
        cyan: `청록색`,
        "cyan blue": `청록색`,
        dark: `다크`,
        gray: `회색`,
        grayish: `회갈색`,
        green: `초록`,
        "green cyan": `청록색`,
        hue: `색조`,
        light: `라이트`,
        lightness: `밝기`,
        magenta: `자홍색`,
        "magenta pink": `마젠타 핑크`,
        orange: `주황색`,
        "orange yellow": `불그스름한 노랑`,
        pale: `흙색`,
        pink: `분홍색`,
        "pink red": `핑크 레드`,
        purple: `자주색`,
        "purple magenta": `보라빛 자홍색`,
        red: `빨강`,
        "red orange": `붉은 주황색`,
        saturation: `채도`,
        transparentColorName: (e)=>`${e.lightness}, ${e.chroma}, ${e.hue}, ${e.percentTransparent} 투명도`,
        "very dark": `매우 어두운`,
        "very light": `매우 연함`,
        vibrant: `강렬한`,
        white: `흰색`,
        yellow: `노란색`,
        "yellow green": `연두색`
    },
    "react-aria-components": {
        colorSwatchPicker: `색상 견본`,
        dropzoneLabel: `드롭 영역`,
        selectPlaceholder: `항목 선택`,
        tableResizer: `크기 조정기`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ja-JP.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `折りたたむ`,
        expand: `展開`
    },
    "@react-aria/toast": {
        close: `閉じる`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個の通知`,
                other: ()=>`${t.number(e.count)} 個の通知`
            })}。`
    },
    "@react-aria/tag": {
        removeButtonLabel: `削除`,
        removeDescription: `タグを削除するには、Delete キーを押します。`
    },
    "@react-aria/table": {
        ascending: `昇順`,
        ascendingSort: (e)=>`列 ${e.columnName} を昇順で並べ替え`,
        columnSize: (e)=>`${e.value} ピクセル`,
        descending: `降順`,
        descendingSort: (e)=>`列 ${e.columnName} を降順で並べ替え`,
        resizerDescription: `Enter キーを押してサイズ変更を開始`,
        select: `選択`,
        selectAll: `すべて選択`,
        sortable: `並べ替え可能な列`,
        collapse: `折りたたむ`,
        expand: `展開`
    },
    "@react-aria/steplist": {
        steplist: `手順リスト`
    },
    "@react-aria/spinbutton": {
        Empty: `空`
    },
    "@react-aria/searchfield": {
        "Clear search": `検索をクリア`
    },
    "@react-aria/overlays": {
        dismiss: `閉じる`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel}を縮小`,
        increase: (e)=>`${e.fieldLabel}を拡大`,
        numberField: `数値フィールド`
    },
    "@react-aria/menu": {
        longPressMessage: `長押しまたは Alt+下矢印キーでメニューを開く`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `行にはアクションがあります`,
        hasLinkAnnouncement: (e)=>`行にリンクがあります : ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} が選択されていません。`,
        longPressToSelect: `長押しして選択モードを開きます。`,
        select: `選択`,
        selectedAll: `すべての項目を選択しました。`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `項目が選択されていません`,
                one: ()=>`${t.number(e.count)} 項目を選択しました`,
                other: ()=>`${t.number(e.count)} 項目を選択しました`
            })}。`,
        selectedItem: (e)=>`${e.item} を選択しました。`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Enter キーを押してドラッグを開始してください。`,
        dragDescriptionKeyboardAlt: `Alt+Enter キーを押してドラッグを開始します。`,
        dragDescriptionLongPress: `長押ししてドラッグを開始します。`,
        dragDescriptionTouch: `ダブルタップしてドラッグを開始します。`,
        dragDescriptionVirtual: `クリックしてドラッグを開始します。`,
        dragItem: (e)=>`${e.itemText} をドラッグ`,
        dragSelectedItems: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 個の選択項目`,
                other: ()=>`${t.number(e.count)} 個の選択項目`
            })} をドラッグ`,
        dragSelectedKeyboard: (e, t)=>`Enter キーを押して、${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 選択した項目`,
                other: ()=>`${t.number(e.count)} 選択した項目`
            })}をドラッグします。`,
        dragSelectedKeyboardAlt: (e, t)=>`Alt+Enter キーを押して、${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 選択した項目`,
                other: ()=>`${t.number(e.count)} 選択した項目`
            })}をドラッグします。`,
        dragSelectedLongPress: (e, t)=>`長押しして、${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} 選択した項目`,
                other: ()=>`${t.number(e.count)} 選択した項目`
            })}をドラッグします。`,
        dragStartedKeyboard: `ドラッグを開始します。Tab キーを押してドロップターゲットにいどうし、Enter キーを押してドロップするか、Esc キーを押してキャンセルします。`,
        dragStartedTouch: `ドラッグを開始しました。ドロップのターゲットに移動し、ダブルタップしてドロップします。`,
        dragStartedVirtual: `ドラッグを開始しました。ドロップのターゲットに移動し、クリックまたは Enter キーを押してドロップします。`,
        dropCanceled: `ドロップがキャンセルされました。`,
        dropComplete: `ドロップが完了しました。`,
        dropDescriptionKeyboard: `Enter キーを押してドロップします。Esc キーを押してドラッグをキャンセルします。`,
        dropDescriptionTouch: `ダブルタップしてドロップします。`,
        dropDescriptionVirtual: `クリックしてドロップします。`,
        dropIndicator: `ドロップインジケーター`,
        dropOnItem: (e)=>`${e.itemText} にドロップ`,
        dropOnRoot: `ドロップ場所`,
        endDragKeyboard: `ドラッグしています。Enter キーを押してドラッグをキャンセルします。`,
        endDragTouch: `ドラッグしています。ダブルタップしてドラッグをキャンセルします。`,
        endDragVirtual: `ドラッグしています。クリックしてドラッグをキャンセルします。`,
        insertAfter: (e)=>`${e.itemText} の後に挿入`,
        insertBefore: (e)=>`${e.itemText} の前に挿入`,
        insertBetween: (e)=>`${e.beforeItemText} と ${e.afterItemText} の間に挿入`
    },
    "@react-aria/datepicker": {
        calendar: `カレンダー`,
        day: `日`,
        dayPeriod: `午前/午後`,
        endDate: `終了日`,
        era: `時代`,
        hour: `時`,
        minute: `分`,
        month: `月`,
        second: `秒`,
        selectedDateDescription: (e)=>`選択した日付 : ${e.date}`,
        selectedRangeDescription: (e)=>`選択範囲 : ${e.startDate} から ${e.endDate}`,
        selectedTimeDescription: (e)=>`選択した時間 : ${e.time}`,
        startDate: `開始日`,
        timeZoneName: `タイムゾーン`,
        weekday: `曜日`,
        year: `年`
    },
    "@react-aria/combobox": {
        buttonLabel: `候補を表示`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} 個のオプション`,
                other: ()=>`${t.number(e.optionCount)} 個のオプション`
            })}を利用できます。`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`入力されたグループ ${e.groupTitle}、${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} 個のオプション`,
                        other: ()=>`${t.number(e.groupCount)} 個のオプション`
                    })}を含む。`,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `、選択済み`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `候補`,
        selectedAnnouncement: (e)=>`${e.optionText}、選択済み`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}、${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name} : ${e.value}`,
        colorPicker: `カラーピッカー`,
        colorSwatch: `カラースウォッチ`,
        transparent: `透明`,
        twoDimensionalSlider: `2D スライダー`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} から ${e.endDate}`,
        dateSelected: (e)=>`${e.date} を選択`,
        finishRangeSelectionPrompt: `クリックして日付範囲の選択を終了`,
        maximumDate: `最終利用可能日`,
        minimumDate: `最初の利用可能日`,
        next: `次へ`,
        previous: `前へ`,
        selectedDateDescription: (e)=>`選択した日付 : ${e.date}`,
        selectedRangeDescription: (e)=>`選択範囲 : ${e.dateRange}`,
        startRangeSelectionPrompt: `クリックして日付範囲の選択を開始`,
        todayDate: (e)=>`本日、${e.date}`,
        todayDateSelected: (e)=>`本日、${e.date} を選択`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `パンくずリスト`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `候補`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`値は ${e.maxValue} 以下にする必要があります。`,
        rangeReversed: `開始日は終了日より前にする必要があります。`,
        rangeUnderflow: (e)=>`値は ${e.minValue} 以上にする必要があります。`,
        unavailableDate: `選択した日付は使用できません。`
    },
    "@react-stately/color": {
        alpha: `アルファ`,
        black: `ブラック`,
        blue: `青`,
        "blue purple": `ブルーパープル`,
        brightness: `明るさ`,
        brown: `ブラウン`,
        "brown yellow": `ブラウンイエロー`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `シアン`,
        "cyan blue": `シアンブルー`,
        dark: `ダーク`,
        gray: `グレー`,
        grayish: `グレイッシュ`,
        green: `緑`,
        "green cyan": `グリーンシアン`,
        hue: `色相`,
        light: `ライト`,
        lightness: `明度`,
        magenta: `マゼンタ`,
        "magenta pink": `マゼンタピンク`,
        orange: `オレンジ`,
        "orange yellow": `オレンジイエロー`,
        pale: `ペール`,
        pink: `ピンク`,
        "pink red": `ピンクレッド`,
        purple: `パープル`,
        "purple magenta": `パープルマゼンタ`,
        red: `赤`,
        "red orange": `レッドオレンジ`,
        saturation: `彩度`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} 透明`,
        "very dark": `最も暗い`,
        "very light": `ベリーライト`,
        vibrant: `鮮やか`,
        white: `ホワイト`,
        yellow: `イエロー`,
        "yellow green": `イエローグリーン`
    },
    "react-aria-components": {
        colorSwatchPicker: `カラースウォッチ`,
        dropzoneLabel: `ドロップゾーン`,
        selectPlaceholder: `項目を選択`,
        tableResizer: `サイズ変更ツール`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/it-IT.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Comprimi",
        expand: "Espandi"
    },
    "@react-aria/toast": {
        close: "Chiudi",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} notifica`,
                other: ()=>`${a.number(e.count)} notifiche`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Rimuovi",
        removeDescription: "Premi Elimina per rimuovere il tag."
    },
    "@react-aria/table": {
        ascending: "crescente",
        ascendingSort: (e)=>`in ordine crescente in base alla colonna ${e.columnName}`,
        columnSize: (e)=>`${e.value} pixel`,
        descending: "decrescente",
        descendingSort: (e)=>`in ordine decrescente in base alla colonna ${e.columnName}`,
        resizerDescription: "Premi Invio per iniziare a ridimensionare",
        select: "Seleziona",
        selectAll: "Seleziona tutto",
        sortable: "colonna ordinabile",
        collapse: "Comprimi",
        expand: "Espandi"
    },
    "@react-aria/steplist": {
        steplist: "Elenco dei passaggi"
    },
    "@react-aria/spinbutton": {
        Empty: "Vuoto"
    },
    "@react-aria/searchfield": {
        "Clear search": "Cancella ricerca"
    },
    "@react-aria/overlays": {
        dismiss: "Ignora"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Riduci ${e.fieldLabel}`,
        increase: (e)=>`Aumenta ${e.fieldLabel}`,
        numberField: "Campo numero"
    },
    "@react-aria/menu": {
        longPressMessage: `Premi a lungo o premi Alt + Freccia gi\xf9 per aprire il menu`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `la riga ha un’azione`,
        hasLinkAnnouncement: (e)=>`la riga ha un collegamento: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} non selezionato.`,
        longPressToSelect: `Premi a lungo per passare alla modalit\xe0 di selezione.`,
        select: "Seleziona",
        selectedAll: "Tutti gli elementi selezionati.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Nessun elemento selezionato",
                one: ()=>`${a.number(e.count)} elemento selezionato`,
                other: ()=>`${a.number(e.count)} elementi selezionati`
            })}.`,
        selectedItem: (e)=>`${e.item} selezionato.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: "Premi Invio per iniziare a trascinare.",
        dragDescriptionKeyboardAlt: "Premi Alt + Invio per iniziare a trascinare.",
        dragDescriptionLongPress: "Premi a lungo per iniziare a trascinare.",
        dragDescriptionTouch: "Tocca due volte per iniziare a trascinare.",
        dragDescriptionVirtual: "Fai clic per iniziare a trascinare.",
        dragItem: (e)=>`Trascina ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Trascina ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} altro elemento selezionato`,
                other: ()=>`${a.number(e.count)} altri elementi selezionati`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Premi Invio per trascinare ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento selezionato`,
                other: ()=>`${a.number(e.count)} elementi selezionati`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Premi Alt + Invio per trascinare ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento selezionato`,
                other: ()=>`${a.number(e.count)} elementi selezionati`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Premi a lungo per trascinare ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento selezionato`,
                other: ()=>`${a.number(e.count)} elementi selezionati`
            })}.`,
        dragStartedKeyboard: `Hai iniziato a trascinare. Premi Tab per arrivare sull’area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.`,
        dragStartedTouch: `Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi tocca due volte per rilasciare.`,
        dragStartedVirtual: `Hai iniziato a trascinare. Arriva sull’area di destinazione, quindi fai clic o premi Invio per rilasciare.`,
        dropCanceled: "Rilascio annullato.",
        dropComplete: "Rilascio completato.",
        dropDescriptionKeyboard: "Premi Invio per rilasciare. Premi Esc per annullare.",
        dropDescriptionTouch: "Tocca due volte per rilasciare.",
        dropDescriptionVirtual: "Fai clic per rilasciare.",
        dropIndicator: "indicatore di rilascio",
        dropOnItem: (e)=>`Rilascia su ${e.itemText}`,
        dropOnRoot: "Rilascia su",
        endDragKeyboard: "Trascinamento. Premi Invio per annullare.",
        endDragTouch: "Trascinamento. Tocca due volte per annullare.",
        endDragVirtual: "Trascinamento. Fai clic per annullare.",
        insertAfter: (e)=>`Inserisci dopo ${e.itemText}`,
        insertBefore: (e)=>`Inserisci prima di ${e.itemText}`,
        insertBetween: (e)=>`Inserisci tra ${e.beforeItemText} e ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Calendario",
        day: "giorno",
        dayPeriod: "AM/PM",
        endDate: "Data finale",
        era: "era",
        hour: "ora",
        minute: "minuto",
        month: "mese",
        second: "secondo",
        selectedDateDescription: (e)=>`Data selezionata: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,
        selectedTimeDescription: (e)=>`Ora selezionata: ${e.time}`,
        startDate: "Data iniziale",
        timeZoneName: "fuso orario",
        weekday: "giorno della settimana",
        year: "anno"
    },
    "@react-aria/combobox": {
        buttonLabel: "Mostra suggerimenti",
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opzione disponibile`,
                other: ()=>`${a.number(e.optionCount)} opzioni disponibili`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Ingresso nel gruppo ${e.groupTitle}, con ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opzione`,
                        other: ()=>`${a.number(e.groupCount)} opzioni`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", selezionato",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Suggerimenti",
        selectedAnnouncement: (e)=>`${e.optionText}, selezionato`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Selettore colore",
        colorSwatch: "campione di colore",
        transparent: "trasparente",
        twoDimensionalSlider: "Cursore 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`Da ${e.startDate} a ${e.endDate}`,
        dateSelected: (e)=>`${e.date} selezionata`,
        finishRangeSelectionPrompt: `Fai clic per completare la selezione dell’intervallo di date`,
        maximumDate: "Ultima data disponibile",
        minimumDate: "Prima data disponibile",
        next: "Successivo",
        previous: "Precedente",
        selectedDateDescription: (e)=>`Data selezionata: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervallo selezionato: ${e.dateRange}`,
        startRangeSelectionPrompt: `Fai clic per selezionare l’intervallo di date`,
        todayDate: (e)=>`Oggi, ${e.date}`,
        todayDateSelected: (e)=>`Oggi, ${e.date} selezionata`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Breadcrumb"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Suggerimenti"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Il valore deve essere ${e.maxValue} o precedente.`,
        rangeReversed: "La data di inizio deve essere antecedente alla data di fine.",
        rangeUnderflow: (e)=>`Il valore deve essere ${e.minValue} o successivo.`,
        unavailableDate: "Data selezionata non disponibile."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "nero",
        blue: "Blu",
        "blue purple": "blu viola",
        brightness: `Luminosit\xe0`,
        brown: "marrone",
        "brown yellow": "giallo bruno",
        colorName: (e)=>`${e.hue} ${e.chroma} ${e.lightness}`,
        cyan: "ciano",
        "cyan blue": "blu ciano",
        dark: "scuro",
        gray: "grigio",
        grayish: "grigiastro",
        green: "Verde",
        "green cyan": "verde ciano",
        hue: `Tonalit\xe0`,
        light: "chiaro",
        lightness: `Luminosit\xe0`,
        magenta: "magenta",
        "magenta pink": "rosa magenta",
        orange: "arancio",
        "orange yellow": "giallo arancio",
        pale: "tenue",
        pink: "rosa",
        "pink red": "rosa rosso",
        purple: "viola",
        "purple magenta": "viola magenta",
        red: "Rosso",
        "red orange": "rosso arancio",
        saturation: "Saturazione",
        transparentColorName: (e)=>`${e.hue} ${e.chroma} ${e.lightness}, trasparenza ${e.percentTransparent}`,
        "very dark": "molto scuro",
        "very light": "molto chiaro",
        vibrant: "vivace",
        white: "bianco",
        yellow: "giallo",
        "yellow green": "giallo verde"
    },
    "react-aria-components": {
        colorSwatchPicker: "Campioni di colore",
        dropzoneLabel: "Zona di rilascio",
        selectPlaceholder: "Seleziona un elemento",
        tableResizer: "Ridimensionamento"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/hu-HU.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `\xd6sszecsuk\xe1s`,
        expand: `Kibont\xe1s`
    },
    "@react-aria/toast": {
        close: `Bez\xe1r\xe1s`,
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} \xe9rtes\xedt\xe9s`,
                other: ()=>`${a.number(e.count)} \xe9rtes\xedt\xe9s`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Elt\xe1vol\xedt\xe1s`,
        removeDescription: `Nyomja meg a Delete billentyűt a c\xedmke elt\xe1vol\xedt\xe1s\xe1hoz.`
    },
    "@react-aria/table": {
        ascending: `n\xf6vekvő`,
        ascendingSort: (e)=>`rendezve a(z) ${e.columnName} oszlop szerint, n\xf6vekvő sorrendben`,
        columnSize: (e)=>`${e.value} k\xe9ppont`,
        descending: `cs\xf6kkenő`,
        descendingSort: (e)=>`rendezve a(z) ${e.columnName} oszlop szerint, cs\xf6kkenő sorrendben`,
        resizerDescription: `Nyomja le az Enter billentyűt az \xe1tm\xe9retez\xe9s megkezd\xe9s\xe9hez`,
        select: `Kijel\xf6l\xe9s`,
        selectAll: `\xd6sszes kijel\xf6l\xe9se`,
        sortable: `rendezendő oszlop`,
        collapse: `\xd6sszecsuk\xe1s`,
        expand: `Kibont\xe1s`
    },
    "@react-aria/steplist": {
        steplist: `L\xe9p\xe9sek list\xe1ja`
    },
    "@react-aria/spinbutton": {
        Empty: `\xdcres`
    },
    "@react-aria/searchfield": {
        "Clear search": `Keres\xe9s t\xf6rl\xe9se`
    },
    "@react-aria/overlays": {
        dismiss: `Elutas\xedt\xe1s`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel} cs\xf6kkent\xe9se`,
        increase: (e)=>`${e.fieldLabel} n\xf6vel\xe9se`,
        numberField: `Sz\xe1mmező`
    },
    "@react-aria/menu": {
        longPressMessage: `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `a sorban művelet tal\xe1lhat\xf3`,
        hasLinkAnnouncement: (e)=>`a sorban link tal\xe1lhat\xf3: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} nincs kijel\xf6lve.`,
        longPressToSelect: `Nyomja hosszan a kijel\xf6l\xe9shez.`,
        select: `Kijel\xf6l\xe9s`,
        selectedAll: `Az \xf6sszes elem kijel\xf6lve.`,
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Egy elem sincs kijel\xf6lve`,
                one: ()=>`${a.number(e.count)} elem kijel\xf6lve`,
                other: ()=>`${a.number(e.count)} elem kijel\xf6lve`
            })}.`,
        selectedItem: (e)=>`${e.item} kijel\xf6lve.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Nyomja le az Enter billentyűt a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
        dragDescriptionKeyboardAlt: `Nyomja le az Alt + Enter billentyűket a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
        dragDescriptionLongPress: `Hosszan nyomja meg a h\xfaz\xe1s elind\xedt\xe1s\xe1hoz.`,
        dragDescriptionTouch: `Koppintson dupl\xe1n a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
        dragDescriptionVirtual: `Kattintson a h\xfaz\xe1s megkezd\xe9s\xe9hez.`,
        dragItem: (e)=>`${e.itemText} h\xfaz\xe1sa`,
        dragSelectedItems: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} kijel\xf6lt elem`,
                other: ()=>`${a.number(e.count)} kijel\xf6lt elem`
            })} h\xfaz\xe1sa`,
        dragSelectedKeyboard: (e, a)=>`Nyomja meg az Entert ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} kijel\xf6lt elem`,
                other: ()=>`${a.number(e.count)} kijel\xf6lt elem`
            })} h\xfaz\xe1s\xe1hoz.`,
        dragSelectedKeyboardAlt: (e, a)=>`Nyomja meg az Alt + Enter billentyűket ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} kijel\xf6lt elem`,
                other: ()=>`${a.number(e.count)} kijel\xf6lt elem`
            })} h\xfaz\xe1s\xe1hoz.`,
        dragSelectedLongPress: (e, a)=>`Tartsa lenyomva hosszan ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} kijel\xf6lt elem`,
                other: ()=>`${a.number(e.count)} kijel\xf6lt elem`
            })} h\xfaz\xe1s\xe1hoz.`,
        dragStartedKeyboard: `H\xfaz\xe1s megkezdve. Nyomja le a Tab billentyűt az elenged\xe9si c\xe9lhoz navig\xe1l\xe1s\xe1hoz, majd nyomja le az Enter billentyűt az elenged\xe9shez, vagy nyomja le az Escape billentyűt a megszak\xedt\xe1shoz.`,
        dragStartedTouch: `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd koppintson dupl\xe1n az elenged\xe9shez.`,
        dragStartedVirtual: `H\xfaz\xe1s megkezdve. Navig\xe1ljon egy elenged\xe9si c\xe9lhoz, majd kattintson vagy nyomja le az Enter billentyűt az elenged\xe9shez.`,
        dropCanceled: `Elenged\xe9s megszak\xedtva.`,
        dropComplete: `Elenged\xe9s teljes\xedtve.`,
        dropDescriptionKeyboard: `Nyomja le az Enter billentyűt az elenged\xe9shez. Nyomja le az Escape billentyűt a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
        dropDescriptionTouch: `Koppintson dupl\xe1n az elenged\xe9shez.`,
        dropDescriptionVirtual: `Kattintson az elenged\xe9shez.`,
        dropIndicator: `elenged\xe9sjelző`,
        dropOnItem: (e)=>`Elenged\xe9s erre: ${e.itemText}`,
        dropOnRoot: `Elenged\xe9s erre:`,
        endDragKeyboard: `H\xfaz\xe1s folyamatban. Nyomja le az Enter billentyűt a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
        endDragTouch: `H\xfaz\xe1s folyamatban. Koppintson dupl\xe1n a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
        endDragVirtual: `H\xfaz\xe1s folyamatban. Kattintson a h\xfaz\xe1s megszak\xedt\xe1s\xe1hoz.`,
        insertAfter: (e)=>`Besz\xfar\xe1s ${e.itemText} ut\xe1n`,
        insertBefore: (e)=>`Besz\xfar\xe1s ${e.itemText} el\xe9`,
        insertBetween: (e)=>`Besz\xfar\xe1s ${e.beforeItemText} \xe9s ${e.afterItemText} k\xf6z\xe9`
    },
    "@react-aria/datepicker": {
        calendar: `Napt\xe1r`,
        day: "nap",
        dayPeriod: "napszak",
        endDate: `Befejező d\xe1tum`,
        era: `\xe9ra`,
        hour: `\xf3ra`,
        minute: "perc",
        month: `h\xf3nap`,
        second: `m\xe1sodperc`,
        selectedDateDescription: (e)=>`Kijel\xf6lt d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e)=>`Kijel\xf6lt tartom\xe1ny: ${e.startDate}–${e.endDate}`,
        selectedTimeDescription: (e)=>`Kijel\xf6lt idő: ${e.time}`,
        startDate: `Kezdő d\xe1tum`,
        timeZoneName: `időz\xf3na`,
        weekday: `h\xe9t napja`,
        year: `\xe9v`
    },
    "@react-aria/combobox": {
        buttonLabel: `Javaslatok megjelen\xedt\xe9se`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} lehetős\xe9g`,
                other: ()=>`${a.number(e.optionCount)} lehetős\xe9g`
            })} \xe1ll rendelkez\xe9sre.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} lehetős\xe9get`,
                        other: ()=>`${a.number(e.groupCount)} lehetős\xe9get`
                    })} tartalmaz. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: `, kijel\xf6lve`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Javaslatok",
        selectedAnnouncement: (e)=>`${e.optionText}, kijel\xf6lve`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Sz\xednv\xe1laszt\xf3`,
        colorSwatch: `sz\xednt\xe1r`,
        transparent: `\xe1tl\xe1tsz\xf3`,
        twoDimensionalSlider: `2D-cs\xfaszka`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate}–${e.endDate}`,
        dateSelected: (e)=>`${e.date} kiv\xe1lasztva`,
        finishRangeSelectionPrompt: `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek befejez\xe9s\xe9hez`,
        maximumDate: `Utols\xf3 el\xe9rhető d\xe1tum`,
        minimumDate: `Az első el\xe9rhető d\xe1tum`,
        next: `K\xf6vetkező`,
        previous: `Előző`,
        selectedDateDescription: (e)=>`Kijel\xf6lt d\xe1tum: ${e.date}`,
        selectedRangeDescription: (e)=>`Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kattintson a d\xe1tumtartom\xe1ny kijel\xf6l\xe9s\xe9nek ind\xedt\xe1s\xe1hoz`,
        todayDate: (e)=>`Ma, ${e.date}`,
        todayDateSelected: (e)=>`Ma, ${e.date} kijel\xf6lve`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Morzsamen\xfc`
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Javaslatok"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,
        rangeReversed: `A kezdő d\xe1tumnak a befejező d\xe1tumn\xe1l kor\xe1bbinak kell lennie.`,
        rangeUnderflow: (e)=>`Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9sőbbinek kell lennie.`,
        unavailableDate: `A kiv\xe1lasztott d\xe1tum nem \xe9rhető el.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "fekete",
        blue: `K\xe9k`,
        "blue purple": `k\xe9k lila`,
        brightness: `F\xe9nyess\xe9g`,
        brown: "barna",
        "brown yellow": `barna s\xe1rga`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `ci\xe1nk\xe9k`,
        "cyan blue": `ci\xe1nk\xe9k`,
        dark: `s\xf6t\xe9t`,
        gray: `sz\xfcrke`,
        grayish: `sz\xfcrk\xe9s`,
        green: `Z\xf6ld`,
        "green cyan": `z\xf6ld ci\xe1nk\xe9k`,
        hue: `Sz\xedn\xe1rnyalat`,
        light: `vil\xe1gos`,
        lightness: `Vil\xe1goss\xe1g`,
        magenta: `b\xedbor`,
        "magenta pink": `b\xedbor r\xf3zsasz\xedn`,
        orange: "narancs",
        "orange yellow": `narancss\xe1rga`,
        pale: `halv\xe1ny`,
        pink: `r\xf3zsasz\xedn`,
        "pink red": `r\xf3zsasz\xedn piros`,
        purple: "lila",
        "purple magenta": `lila b\xedbor`,
        red: "Piros",
        "red orange": "piros narancs",
        saturation: `Tel\xedtetts\xe9g`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} \xe1tl\xe1tsz\xf3`,
        "very dark": `nagyon s\xf6t\xe9t`,
        "very light": `nagyon vil\xe1gos`,
        vibrant: `\xe9l\xe9nk`,
        white: `feh\xe9r`,
        yellow: `s\xe1rga`,
        "yellow green": `s\xe1rga z\xf6ld`
    },
    "react-aria-components": {
        colorSwatchPicker: `Sz\xednt\xe1rak`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe1lasszon ki egy elemet`,
        tableResizer: `\xc1tm\xe9retező`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/hr-HR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Sažmi`,
        expand: `Proširi`
    },
    "@react-aria/toast": {
        close: "Zatvori",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} obavijest`,
                other: ()=>`${a.number(e.count)} obavijesti`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Ukloni",
        removeDescription: "Pritisnite Delete za uklanjanje oznake."
    },
    "@react-aria/table": {
        ascending: `rastući`,
        ascendingSort: (e)=>`razvrstano po stupcima ${e.columnName} rastućem redoslijedom`,
        columnSize: (e)=>`${e.value} piksela`,
        descending: `padajući`,
        descendingSort: (e)=>`razvrstano po stupcima ${e.columnName} padajućim redoslijedom`,
        resizerDescription: `Pritisnite Enter da biste započeli promenu veličine`,
        select: "Odaberite",
        selectAll: "Odaberite sve",
        sortable: `stupac koji se može razvrstati`,
        collapse: `Sažmi`,
        expand: `Proširi`
    },
    "@react-aria/steplist": {
        steplist: "Lista koraka"
    },
    "@react-aria/spinbutton": {
        Empty: "Prazno"
    },
    "@react-aria/searchfield": {
        "Clear search": `Obriši pretragu`
    },
    "@react-aria/overlays": {
        dismiss: "Odbaci"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Smanji ${e.fieldLabel}`,
        increase: (e)=>`Povećaj ${e.fieldLabel}`,
        numberField: "Polje broja"
    },
    "@react-aria/menu": {
        longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "zadatak u redu",
        hasLinkAnnouncement: (e)=>`veza u redu: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Stavka ${e.item} nije odabrana.`,
        longPressToSelect: `Dugo pritisnite za ulazak u način odabira.`,
        select: "Odaberite",
        selectedAll: "Odabrane su sve stavke.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": "Nije odabrana nijedna stavka",
                one: ()=>`Odabrana je ${a.number(e.count)} stavka`,
                other: ()=>`Odabrano je ${a.number(e.count)} stavki`
            })}.`,
        selectedItem: (e)=>`Stavka ${e.item} je odabrana.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Pritisnite Enter da biste počeli povlačiti.`,
        dragDescriptionKeyboardAlt: `Pritisnite Alt + Enter za početak povlačenja.`,
        dragDescriptionLongPress: `Dugo pritisnite za početak povlačenja.`,
        dragDescriptionTouch: `Dvaput dodirnite da biste počeli povlačiti.`,
        dragDescriptionVirtual: `Kliknite da biste počeli povlačiti.`,
        dragItem: (e)=>`Povucite stavku ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Povucite ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} odabranu stavku`,
                other: ()=>`ovoliko odabranih stavki: ${a.number(e.count)}`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Pritisnite Enter za povlačenje ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} odabrana stavka`,
                other: ()=>`${a.number(e.count)} odabrane stavke`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Pritisnite Alt + Enter za povlačenje ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} odabrana stavka`,
                other: ()=>`${a.number(e.count)} odabrane stavke`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Dugo pritisnite za povlačenje ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} odabrana stavka`,
                other: ()=>`${a.number(e.count)} odabrane stavke`
            })}.`,
        dragStartedKeyboard: `Počeli ste povlačiti. Pritisnite tipku tabulatora da biste došli do cilja ispuštanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povlačenje.`,
        dragStartedTouch: `Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim dvaput dodirnite da biste ispustili stavku.`,
        dragStartedVirtual: `Počeli ste povlačiti. Dođite do cilja ispuštanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.`,
        dropCanceled: `Povlačenje je prekinuto.`,
        dropComplete: `Ispuštanje je dovršeno.`,
        dropDescriptionKeyboard: `Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povlačenje.`,
        dropDescriptionTouch: "Dvaput dodirnite da biste ispustili stavku.",
        dropDescriptionVirtual: "Kliknite da biste ispustili stavku.",
        dropIndicator: `pokazatelj ispuštanja`,
        dropOnItem: (e)=>`Ispustite na stavku ${e.itemText}`,
        dropOnRoot: "Ispustite na",
        endDragKeyboard: `Povlačenje. Pritisnite Enter da biste prekinuli povlačenje.`,
        endDragTouch: `Povlačenje. Dvaput dodirnite da biste prekinuli povlačenje.`,
        endDragVirtual: `Povlačenje. Kliknite da biste prekinuli povlačenje.`,
        insertAfter: (e)=>`Umetnite iza stavke ${e.itemText}`,
        insertBefore: (e)=>`Ispustite ispred stavke ${e.itemText}`,
        insertBetween: (e)=>`Umetnite između stavki ${e.beforeItemText} i ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalendar",
        day: "dan",
        dayPeriod: "AM/PM",
        endDate: `Datum završetka`,
        era: "era",
        hour: "sat",
        minute: "minuta",
        month: "mjesec",
        second: "sekunda",
        selectedDateDescription: (e)=>`Odabrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Odabrani raspon: ${e.startDate} do ${e.endDate}`,
        selectedTimeDescription: (e)=>`Odabrano vrijeme: ${e.time}`,
        startDate: `Datum početka`,
        timeZoneName: "vremenska zona",
        weekday: "dan u tjednu",
        year: "godina"
    },
    "@react-aria/combobox": {
        buttonLabel: `Prikaži prijedloge`,
        countAnnouncement: (e, a)=>`Dostupno još: ${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opcija`,
                other: ()=>`${a.number(e.optionCount)} opcije/a`
            })}.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Unesena skupina ${e.groupTitle}, s ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opcijom`,
                        other: ()=>`${a.number(e.groupCount)} opcije/a`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", odabranih",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Prijedlozi",
        selectedAnnouncement: (e)=>`${e.optionText}, odabrano`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Odabir boje",
        colorSwatch: "uzorak boje",
        transparent: "transparentno",
        twoDimensionalSlider: `2D klizač`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} do ${e.endDate}`,
        dateSelected: (e)=>`${e.date} odabran`,
        finishRangeSelectionPrompt: `Kliknite da dovršite raspon odabranih datuma`,
        maximumDate: `Posljednji raspoloživi datum`,
        minimumDate: `Prvi raspoloživi datum`,
        next: `Sljedeći`,
        previous: "Prethodni",
        selectedDateDescription: (e)=>`Odabrani datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Odabrani raspon: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknite da započnete raspon odabranih datuma`,
        todayDate: (e)=>`Danas, ${e.date}`,
        todayDateSelected: (e)=>`Danas, odabran ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Navigacijski putovi"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Prijedlozi"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Vrijednost mora biti ${e.maxValue} ili ranije.`,
        rangeReversed: `Datum početka mora biti prije datuma završetka.`,
        rangeUnderflow: (e)=>`Vrijednost mora biti ${e.minValue} ili kasnije.`,
        unavailableDate: "Odabrani datum nije dostupan."
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "crno",
        blue: "Plava",
        "blue purple": `plavo ljubičasta`,
        brightness: "Svjetlina",
        brown: `smeđa`,
        "brown yellow": `smeđe žuta`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cijan",
        "cyan blue": "cijan plava",
        dark: "tamno",
        gray: "siva",
        grayish: "sivkasto",
        green: "Zelena",
        "green cyan": "zelena cijan",
        hue: "Nijansa",
        light: "svjetlo",
        lightness: "Osvijetljenost",
        magenta: "magenta",
        "magenta pink": `magentno ružičasta`,
        orange: `narančasta`,
        "orange yellow": `narančasto žuta`,
        pale: "blijeda",
        pink: `ružičasta`,
        "pink red": `ružičasto crvena`,
        purple: `ljubičasta`,
        "purple magenta": `ljubičasta magenta`,
        red: "Crvena",
        "red orange": `crveno narančasta`,
        saturation: `Zasićenost`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} prozirnosti`,
        "very dark": "jako tamna",
        "very light": "vrlo svijetlo",
        vibrant: "vibrantna",
        white: "bijela",
        yellow: `žuto`,
        "yellow green": `žuto zelena`
    },
    "react-aria-components": {
        colorSwatchPicker: "Uzorci boja",
        dropzoneLabel: `Zona spuštanja`,
        selectPlaceholder: "Odaberite stavku",
        tableResizer: `Promjena veličine`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/he-IL.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `כווץ`,
        expand: `הרחב`
    },
    "@react-aria/toast": {
        close: `סגור`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} התראה`,
                other: ()=>`${t.number(e.count)} התראות`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `הסר`,
        removeDescription: `לחץ על מחק כדי להסיר תג.`
    },
    "@react-aria/table": {
        ascending: `עולה`,
        ascendingSort: (e)=>`מוין לפי עמודה ${e.columnName} בסדר עולה`,
        columnSize: (e)=>`${e.value} פיקסלים`,
        descending: `יורד`,
        descendingSort: (e)=>`מוין לפי עמודה ${e.columnName} בסדר יורד`,
        resizerDescription: `הקש Enter כדי לשנות את הגודל`,
        select: `בחר`,
        selectAll: `בחר הכול`,
        sortable: `עמודה שניתן למיין`,
        collapse: `כווץ`,
        expand: `הרחב`
    },
    "@react-aria/steplist": {
        steplist: `רשימת צעדים`
    },
    "@react-aria/spinbutton": {
        Empty: `ריק`
    },
    "@react-aria/searchfield": {
        "Clear search": `נקה חיפוש`
    },
    "@react-aria/overlays": {
        dismiss: `התעלם`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`הקטן ${e.fieldLabel}`,
        increase: (e)=>`הגדל ${e.fieldLabel}`,
        numberField: `שדה מספר`
    },
    "@react-aria/menu": {
        longPressMessage: `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `בשורה יש פעולה`,
        hasLinkAnnouncement: (e)=>`לשורה יש קישור: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} לא נבחר.`,
        longPressToSelect: `הקשה ארוכה לכניסה למצב בחירה.`,
        select: `בחר`,
        selectedAll: `כל הפריטים נבחרו.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `לא נבחרו פריטים`,
                one: ()=>`פריט ${t.number(e.count)} נבחר`,
                other: ()=>`${t.number(e.count)} פריטים נבחרו`
            })}.`,
        selectedItem: (e)=>`${e.item} נבחר.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `הקש על Enter כדי להתחיל לגרור.`,
        dragDescriptionKeyboardAlt: `הקש Alt + Enter כדי להתחיל לגרור.`,
        dragDescriptionLongPress: `לחץ לחיצה ארוכה כדי להתחיל לגרור.`,
        dragDescriptionTouch: `הקש פעמיים כדי להתחיל בגרירה.`,
        dragDescriptionVirtual: `לחץ כדי להתחיל לגרור.`,
        dragItem: (e)=>`גרור את ${e.itemText}`,
        dragSelectedItems: (e, t)=>`גרור ${t.plural(e.count, {
                one: ()=>`פריט נבחר ${t.number(e.count)}`,
                other: ()=>`${t.number(e.count)} פריטים שנבחרו`
            })}`,
        dragSelectedKeyboard: (e, t)=>`הקש על Enter כדי לגרור ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} פריט שנבחר`,
                other: ()=>`${t.number(e.count)} פריטים שנבחרו`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`הקש Alt + Enter כדי לגרור ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} פריט שנבחר`,
                other: ()=>`${t.number(e.count)} פריטים שנבחרו`
            })}.`,
        dragSelectedLongPress: (e, t)=>`לחץ לחיצה ארוכה כדי לגרור ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} פריט שנבחר`,
                other: ()=>`${t.number(e.count)} פריטים שנבחרו`
            })}.`,
        dragStartedKeyboard: `התחלת לגרור. הקש על Tab כדי לנווט לנקודת הגרירה ולאחר מכן הקש על Enter כדי לשחרר או על Escape כדי לבטל.`,
        dragStartedTouch: `התחלת לגרור. נווט לנקודת השחרור ולאחר מכן הקש פעמיים כדי לשחרר.`,
        dragStartedVirtual: `התחלת לגרור. נווט לנקודת השחרור ולאחר מכן לחץ או הקש על Enter כדי לשחרר.`,
        dropCanceled: `השחרור בוטל.`,
        dropComplete: `השחרור הושלם.`,
        dropDescriptionKeyboard: `הקש על Enter כדי לשחרר. הקש על Escape כדי לבטל את הגרירה.`,
        dropDescriptionTouch: `הקש פעמיים כדי לשחרר.`,
        dropDescriptionVirtual: `לחץ כדי לשחרר.`,
        dropIndicator: `מחוון שחרור`,
        dropOnItem: (e)=>`שחרר על ${e.itemText}`,
        dropOnRoot: `שחרר על`,
        endDragKeyboard: `גורר. הקש על Enter כדי לבטל את הגרירה.`,
        endDragTouch: `גורר. הקש פעמיים כדי לבטל את הגרירה.`,
        endDragVirtual: `גורר. לחץ כדי לבטל את הגרירה.`,
        insertAfter: (e)=>`הוסף אחרי ${e.itemText}`,
        insertBefore: (e)=>`הוסף לפני ${e.itemText}`,
        insertBetween: (e)=>`הוסף בין ${e.beforeItemText} לבין ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `לוח שנה`,
        day: `יום`,
        dayPeriod: `לפנה״צ/אחה״צ`,
        endDate: `תאריך סיום`,
        era: `תקופה`,
        hour: `שעה`,
        minute: `דקה`,
        month: `חודש`,
        second: `שנייה`,
        selectedDateDescription: (e)=>`תאריך נבחר: ${e.date}`,
        selectedRangeDescription: (e)=>`טווח נבחר: ${e.startDate} עד ${e.endDate}`,
        selectedTimeDescription: (e)=>`זמן נבחר: ${e.time}`,
        startDate: `תאריך התחלה`,
        timeZoneName: `אזור זמן`,
        weekday: `יום בשבוע`,
        year: `שנה`
    },
    "@react-aria/combobox": {
        buttonLabel: `הצג הצעות`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`אפשרות ${t.number(e.optionCount)}`,
                other: ()=>`${t.number(e.optionCount)} אפשרויות`
            })} במצב זמין.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`נכנס לקבוצה ${e.groupTitle}, עם ${t.plural(e.groupCount, {
                        one: ()=>`אפשרות ${t.number(e.groupCount)}`,
                        other: ()=>`${t.number(e.groupCount)} אפשרויות`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, נבחר`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `הצעות`,
        selectedAnnouncement: (e)=>`${e.optionText}, נבחר`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `בוחר הצבעים`,
        colorSwatch: `דוגמית צבע`,
        transparent: `שקוף`,
        twoDimensionalSlider: `מחוון דו מימדי`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} עד ${e.endDate}`,
        dateSelected: (e)=>`${e.date} נבחר`,
        finishRangeSelectionPrompt: `חץ כדי לסיים את בחירת טווח התאריכים`,
        maximumDate: `תאריך פנוי אחרון`,
        minimumDate: `תאריך פנוי ראשון`,
        next: `הבא`,
        previous: `הקודם`,
        selectedDateDescription: (e)=>`תאריך נבחר: ${e.date}`,
        selectedRangeDescription: (e)=>`טווח נבחר: ${e.dateRange}`,
        startRangeSelectionPrompt: `לחץ כדי להתחיל בבחירת טווח התאריכים`,
        todayDate: (e)=>`היום, ${e.date}`,
        todayDateSelected: (e)=>`היום, ${e.date} נבחר`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `שבילי ניווט`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `הצעות`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,
        rangeReversed: `תאריך ההתחלה חייב להיות לפני תאריך הסיום.`,
        rangeUnderflow: (e)=>`הערך חייב להיות ${e.minValue} או מאוחר יותר.`,
        unavailableDate: `התאריך הנבחר אינו זמין.`
    },
    "@react-stately/color": {
        alpha: `אלפא`,
        black: `שחור`,
        blue: `כחול`,
        "blue purple": `כחול סגול`,
        brightness: `בהירות`,
        brown: `חום`,
        "brown yellow": `חום צהוב`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `טורקיז`,
        "cyan blue": `כחול ציאן`,
        dark: `כהה`,
        gray: `אפור`,
        grayish: `אפרפר`,
        green: `ירוק`,
        "green cyan": `ציאן ירוק`,
        hue: `גוון`,
        light: `אור`,
        lightness: `כמות אור`,
        magenta: `מג'נטה`,
        "magenta pink": `ורוד מג'נטה`,
        orange: `כתום`,
        "orange yellow": `כתום צהוב`,
        pale: `חיוור`,
        pink: `ורוד`,
        "pink red": `ורוד אדום`,
        purple: `סגול`,
        "purple magenta": `מג'נטה סגול`,
        red: `אדום`,
        "red orange": `כתום אדום`,
        saturation: `רוויה`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} שקוף`,
        "very dark": `כהה מאוד`,
        "very light": `בהיר מאוד`,
        vibrant: `תוסס`,
        white: `לבן`,
        yellow: `צהוב`,
        "yellow green": `צהוב ירוק`
    },
    "react-aria-components": {
        colorSwatchPicker: `דוגמיות צבע`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `בחר פריט`,
        tableResizer: `שינוי גודל`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/fr-FR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `R\xe9duire`,
        expand: `D\xe9velopper`
    },
    "@react-aria/toast": {
        close: "Fermer",
        notifications: (e, r)=>`${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} notification`,
                other: ()=>`${r.number(e.count)} notifications`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Supprimer",
        removeDescription: `Appuyez sur Supprimer pour supprimer l’\xe9tiquette.`
    },
    "@react-aria/table": {
        ascending: "croissant",
        ascendingSort: (e)=>`tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre croissant`,
        columnSize: (e)=>`${e.value}\xa0pixels`,
        descending: `d\xe9croissant`,
        descendingSort: (e)=>`tri\xe9 en fonction de la colonne\xa0${e.columnName} par ordre d\xe9croissant`,
        resizerDescription: `Appuyez sur Entr\xe9e pour commencer le redimensionnement.`,
        select: `S\xe9lectionner`,
        selectAll: `S\xe9lectionner tout`,
        sortable: "colonne triable",
        collapse: `R\xe9duire`,
        expand: `D\xe9velopper`
    },
    "@react-aria/steplist": {
        steplist: `Liste des \xe9tapes`
    },
    "@react-aria/spinbutton": {
        Empty: "Vide"
    },
    "@react-aria/searchfield": {
        "Clear search": "Effacer la recherche"
    },
    "@react-aria/overlays": {
        dismiss: "Rejeter"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Diminuer ${e.fieldLabel}`,
        increase: (e)=>`Augmenter ${e.fieldLabel}`,
        numberField: "Champ de nombre"
    },
    "@react-aria/menu": {
        longPressMessage: `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "La ligne a une action.",
        hasLinkAnnouncement: (e)=>`La ligne a un lien\xa0: ${e.link}.`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} non s\xe9lectionn\xe9.`,
        longPressToSelect: `Appuyez de mani\xe8re prolong\xe9e pour passer en mode de s\xe9lection.`,
        select: `S\xe9lectionner`,
        selectedAll: `Tous les \xe9l\xe9ments s\xe9lectionn\xe9s.`,
        selectedCount: (e, r)=>`${r.plural(e.count, {
                "=0": `Aucun \xe9l\xe9ment s\xe9lectionn\xe9`,
                one: ()=>`${r.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
                other: ()=>`${r.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
            })}.`,
        selectedItem: (e)=>`${e.item} s\xe9lectionn\xe9.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Appuyez sur Entr\xe9e pour commencer le d\xe9placement.`,
        dragDescriptionKeyboardAlt: `Appuyez sur Alt\xa0+\xa0Entr\xe9e pour commencer \xe0 faire glisser.`,
        dragDescriptionLongPress: `Appuyez de mani\xe8re prolong\xe9e pour commencer \xe0 faire glisser.`,
        dragDescriptionTouch: `Touchez deux fois pour commencer le d\xe9placement.`,
        dragDescriptionVirtual: `Cliquez pour commencer le d\xe9placement.`,
        dragItem: (e)=>`D\xe9placer ${e.itemText}`,
        dragSelectedItems: (e, r)=>`D\xe9placer ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
                other: ()=>`${r.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
            })}`,
        dragSelectedKeyboard: (e, r)=>`Appuyez sur Entr\xe9e pour faire glisser ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
                other: ()=>`${r.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
            })}.`,
        dragSelectedKeyboardAlt: (e, r)=>`Appuyez sur Alt\xa0+\xa0Entr\xe9e pour faire glisser ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
                other: ()=>`${r.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
            })}.`,
        dragSelectedLongPress: (e, r)=>`Appuyez de mani\xe8re prolong\xe9e pour faire glisser ${r.plural(e.count, {
                one: ()=>`${r.number(e.count)} \xe9l\xe9ment s\xe9lectionn\xe9`,
                other: ()=>`${r.number(e.count)} \xe9l\xe9ments s\xe9lectionn\xe9s`
            })}.`,
        dragStartedKeyboard: `D\xe9placement commenc\xe9. Appuyez sur Tabulation pour acc\xe9der \xe0 une cible de d\xe9p\xf4t, puis appuyez sur Entr\xe9e pour d\xe9poser, ou appuyez sur \xc9chap pour annuler.`,
        dragStartedTouch: `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis touchez deux fois pour d\xe9poser.`,
        dragStartedVirtual: `D\xe9placement commenc\xe9. Acc\xe9dez \xe0 une cible de d\xe9p\xf4t, puis cliquez ou appuyez sur Entr\xe9e pour d\xe9poser.`,
        dropCanceled: `D\xe9p\xf4t annul\xe9.`,
        dropComplete: `D\xe9p\xf4t termin\xe9.`,
        dropDescriptionKeyboard: `Appuyez sur Entr\xe9e pour d\xe9poser. Appuyez sur \xc9chap pour annuler le d\xe9placement.`,
        dropDescriptionTouch: `Touchez deux fois pour d\xe9poser.`,
        dropDescriptionVirtual: `Cliquez pour d\xe9poser.`,
        dropIndicator: `indicateur de d\xe9p\xf4t`,
        dropOnItem: (e)=>`D\xe9poser sur ${e.itemText}`,
        dropOnRoot: `D\xe9poser sur`,
        endDragKeyboard: `D\xe9placement. Appuyez sur Entr\xe9e pour annuler le d\xe9placement.`,
        endDragTouch: `D\xe9placement. Touchez deux fois pour annuler le d\xe9placement.`,
        endDragVirtual: `D\xe9placement. Cliquez pour annuler le d\xe9placement.`,
        insertAfter: (e)=>`Ins\xe9rer apr\xe8s ${e.itemText}`,
        insertBefore: (e)=>`Ins\xe9rer avant ${e.itemText}`,
        insertBetween: (e)=>`Ins\xe9rer entre ${e.beforeItemText} et ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Calendrier",
        day: "jour",
        dayPeriod: "cadran",
        endDate: "Date de fin",
        era: `\xe8re`,
        hour: "heure",
        minute: "minute",
        month: "mois",
        second: "seconde",
        selectedDateDescription: (e)=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
        selectedRangeDescription: (e)=>`Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,
        selectedTimeDescription: (e)=>`Heure choisie\xa0: ${e.time}`,
        startDate: `Date de d\xe9but`,
        timeZoneName: "fuseau horaire",
        weekday: "jour de la semaine",
        year: `ann\xe9e`
    },
    "@react-aria/combobox": {
        buttonLabel: "Afficher les suggestions",
        countAnnouncement: (e, r)=>`${r.plural(e.optionCount, {
                one: ()=>`${r.number(e.optionCount)} option`,
                other: ()=>`${r.number(e.optionCount)} options`
            })} disponible(s).`,
        focusAnnouncement: (e, r)=>`${r.select({
                true: ()=>`Groupe ${e.groupTitle} rejoint, avec ${r.plural(e.groupCount, {
                        one: ()=>`${r.number(e.groupCount)} option`,
                        other: ()=>`${r.number(e.groupCount)} options`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${r.select({
                true: `, s\xe9lectionn\xe9(s)`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Suggestions",
        selectedAnnouncement: (e)=>`${e.optionText}, s\xe9lectionn\xe9`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}\xa0: ${e.value}`,
        colorPicker: `S\xe9lecteur de couleurs`,
        colorSwatch: `\xc9chantillon de couleurs`,
        transparent: "Transparent",
        twoDimensionalSlider: `Curseur\xa02D`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} \xe0 ${e.endDate}`,
        dateSelected: (e)=>`${e.date} s\xe9lectionn\xe9`,
        finishRangeSelectionPrompt: `Cliquer pour finir de s\xe9lectionner la plage de dates`,
        maximumDate: `Derni\xe8re date disponible`,
        minimumDate: `Premi\xe8re date disponible`,
        next: "Suivant",
        previous: `Pr\xe9c\xe9dent`,
        selectedDateDescription: (e)=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,
        selectedRangeDescription: (e)=>`Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,
        startRangeSelectionPrompt: `Cliquer pour commencer \xe0 s\xe9lectionner la plage de dates`,
        todayDate: (e)=>`Aujourd'hui, ${e.date}`,
        todayDateSelected: (e)=>`Aujourd’hui, ${e.date} s\xe9lectionn\xe9`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Chemin de navigation"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Suggestions"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,
        rangeReversed: `La date de d\xe9but doit \xeatre ant\xe9rieure \xe0 la date de fin.`,
        rangeUnderflow: (e)=>`La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,
        unavailableDate: `La date s\xe9lectionn\xe9e n’est pas disponible.`
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: "Noir",
        blue: "Bleu",
        "blue purple": "Violet bleu",
        brightness: `Luminosit\xe9`,
        brown: "Brun",
        "brown yellow": "Jaune brun",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "Cyan",
        "cyan blue": "Bleu cyan",
        dark: "Sombre",
        gray: "Gris",
        grayish: `Gris\xe2tre`,
        green: "Vert",
        "green cyan": "Cyan vert",
        hue: "Teinte",
        light: "Clair",
        lightness: `Luminosit\xe9`,
        magenta: "Magenta",
        "magenta pink": "Rose magenta",
        orange: "Orange",
        "orange yellow": `Jaune orang\xe9`,
        pale: `P\xe2le`,
        pink: "Rose",
        "pink red": `Rouge ros\xe9`,
        purple: "Violet",
        "purple magenta": "Magenta violet",
        red: "Rouge",
        "red orange": "Orange rouge",
        saturation: "Saturation",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
        "very dark": `Tr\xe8s sombre`,
        "very light": `Tr\xe8s clair`,
        vibrant: "Vif",
        white: "Blanc",
        yellow: "Jaune",
        "yellow green": "Vert jaune"
    },
    "react-aria-components": {
        colorSwatchPicker: `\xc9chantillons de couleurs`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `S\xe9lectionner un \xe9l\xe9ment`,
        tableResizer: "Redimensionneur"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/fi-FI.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Pienenn\xe4`,
        expand: "Laajenna"
    },
    "@react-aria/toast": {
        close: "Sulje",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} ilmoitus`,
                other: ()=>`${a.number(e.count)} ilmoitusta`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Poista",
        removeDescription: "Poista tunniste painamalla Poista-painiketta."
    },
    "@react-aria/table": {
        ascending: "nouseva",
        ascendingSort: (e)=>`lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
        columnSize: (e)=>`${e.value} pikseli\xe4`,
        descending: "laskeva",
        descendingSort: (e)=>`lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
        resizerDescription: `Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4`,
        select: "Valitse",
        selectAll: "Valitse kaikki",
        sortable: "lajiteltava sarake",
        collapse: `Pienenn\xe4`,
        expand: "Laajenna"
    },
    "@react-aria/steplist": {
        steplist: "Vaiheluettelo"
    },
    "@react-aria/spinbutton": {
        Empty: `Tyhj\xe4`
    },
    "@react-aria/searchfield": {
        "Clear search": `Tyhjenn\xe4 haku`
    },
    "@react-aria/overlays": {
        dismiss: `Hylk\xe4\xe4`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`V\xe4henn\xe4 ${e.fieldLabel}`,
        increase: (e)=>`Lis\xe4\xe4 ${e.fieldLabel}`,
        numberField: `Numerokentt\xe4`
    },
    "@react-aria/menu": {
        longPressMessage: `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `rivill\xe4 on toimintaa`,
        hasLinkAnnouncement: (e)=>`rivill\xe4 on linkki: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Kohdetta ${e.item} ei valittu.`,
        longPressToSelect: `Siirry valintatilaan painamalla pitk\xe4\xe4n.`,
        select: "Valitse",
        selectedAll: "Kaikki kohteet valittu.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Ei yht\xe4\xe4n kohdetta valittu`,
                one: ()=>`${a.number(e.count)} kohde valittu`,
                other: ()=>`${a.number(e.count)} kohdetta valittu`
            })}.`,
        selectedItem: (e)=>`${e.item} valittu.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Aloita vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
        dragDescriptionKeyboardAlt: `Aloita vet\xe4minen painamalla Alt + Enter -n\xe4pp\xe4inyhdistelm\xe4\xe4.`,
        dragDescriptionLongPress: `Aloita vet\xe4minen pit\xe4m\xe4ll\xe4 painettuna.`,
        dragDescriptionTouch: `Aloita vet\xe4minen kaksoisnapauttamalla.`,
        dragDescriptionVirtual: `Aloita vet\xe4minen napsauttamalla.`,
        dragItem: (e)=>`Ved\xe4 kohdetta ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Ved\xe4 ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valittua kohdetta`,
                other: ()=>`${a.number(e.count)} valittua kohdetta`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Ved\xe4 painamalla Enter ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valittu kohde`,
                other: ()=>`${a.number(e.count)} valittua kohdetta`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Ved\xe4 painamalla Alt + Enter ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valittu kohde`,
                other: ()=>`${a.number(e.count)} valittua kohdetta`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Ved\xe4 pit\xe4m\xe4ll\xe4 painettuna ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valittu kohde`,
                other: ()=>`${a.number(e.count)} valittua kohdetta`
            })}.`,
        dragStartedKeyboard: `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen painamalla sarkainn\xe4pp\xe4int\xe4 ja sitten pudota painamalla Enter-n\xe4pp\xe4int\xe4 tai peruuta painamalla Escape-n\xe4pp\xe4int\xe4.`,
        dragStartedTouch: `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.`,
        dragStartedVirtual: `Vet\xe4minen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-n\xe4pp\xe4int\xe4.`,
        dropCanceled: "Pudotus peruutettu.",
        dropComplete: "Pudotus suoritettu.",
        dropDescriptionKeyboard: `Pudota painamalla Enter-n\xe4pp\xe4int\xe4. Peruuta vet\xe4minen painamalla Escape-n\xe4pp\xe4int\xe4.`,
        dropDescriptionTouch: "Pudota kaksoisnapauttamalla.",
        dropDescriptionVirtual: "Pudota napsauttamalla.",
        dropIndicator: "pudotuksen ilmaisin",
        dropOnItem: (e)=>`Pudota kohteeseen ${e.itemText}`,
        dropOnRoot: "Pudota kohteeseen",
        endDragKeyboard: `Vedet\xe4\xe4n. Peruuta vet\xe4minen painamalla Enter-n\xe4pp\xe4int\xe4.`,
        endDragTouch: `Vedet\xe4\xe4n. Peruuta vet\xe4minen kaksoisnapauttamalla.`,
        endDragVirtual: `Vedet\xe4\xe4n. Peruuta vet\xe4minen napsauttamalla.`,
        insertAfter: (e)=>`Lis\xe4\xe4 kohteen ${e.itemText} j\xe4lkeen`,
        insertBefore: (e)=>`Lis\xe4\xe4 ennen kohdetta ${e.itemText}`,
        insertBetween: (e)=>`Lis\xe4\xe4 kohteiden ${e.beforeItemText} ja ${e.afterItemText} v\xe4liin`
    },
    "@react-aria/datepicker": {
        calendar: "Kalenteri",
        day: `p\xe4iv\xe4`,
        dayPeriod: "vuorokaudenaika",
        endDate: `P\xe4\xe4ttymisp\xe4iv\xe4`,
        era: "aikakausi",
        hour: "tunti",
        minute: "minuutti",
        month: "kuukausi",
        second: "sekunti",
        selectedDateDescription: (e)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
        selectedRangeDescription: (e)=>`Valittu aikav\xe4li: ${e.startDate} – ${e.endDate}`,
        selectedTimeDescription: (e)=>`Valittu aika: ${e.time}`,
        startDate: `Alkamisp\xe4iv\xe4`,
        timeZoneName: `aikavy\xf6hyke`,
        weekday: `viikonp\xe4iv\xe4`,
        year: "vuosi"
    },
    "@react-aria/combobox": {
        buttonLabel: `N\xe4yt\xe4 ehdotukset`,
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} vaihtoehto`,
                other: ()=>`${a.number(e.optionCount)} vaihtoehdot`
            })} saatavilla.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Mentiin ryhm\xe4\xe4n ${e.groupTitle}, ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} vaihtoehdon`,
                        other: ()=>`${a.number(e.groupCount)} vaihtoehdon`
                    })} kanssa.`,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", valittu",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Ehdotukset",
        selectedAnnouncement: (e)=>`${e.optionText}, valittu`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `V\xe4rimuokkain`,
        colorSwatch: `v\xe4rimalli`,
        transparent: `l\xe4pin\xe4kyv\xe4`,
        twoDimensionalSlider: `2D-liukus\xe4\xe4din`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} – ${e.endDate}`,
        dateSelected: (e)=>`${e.date} valittu`,
        finishRangeSelectionPrompt: `Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
        maximumDate: `Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
        minimumDate: `Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4`,
        next: "Seuraava",
        previous: "Edellinen",
        selectedDateDescription: (e)=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
        selectedRangeDescription: (e)=>`Valittu aikav\xe4li: ${e.dateRange}`,
        startRangeSelectionPrompt: `Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.`,
        todayDate: (e)=>`T\xe4n\xe4\xe4n, ${e.date}`,
        todayDateSelected: (e)=>`T\xe4n\xe4\xe4n, ${e.date} valittu`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Navigointilinkit"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Ehdotukset"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,
        rangeReversed: `Aloitusp\xe4iv\xe4n on oltava ennen lopetusp\xe4iv\xe4\xe4.`,
        rangeUnderflow: (e)=>`Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,
        unavailableDate: `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4 ei ole k\xe4ytett\xe4viss\xe4.`
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: "musta",
        blue: "Sininen",
        "blue purple": "sinivioletti",
        brightness: "Kirkkaus",
        brown: "ruskea",
        "brown yellow": "ruskeankeltainen",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "syaani",
        "cyan blue": "syaaninsininen",
        dark: "tumma",
        gray: "harmaa",
        grayish: "harmahtava",
        green: `Vihre\xe4`,
        "green cyan": `vihre\xe4nsyaani`,
        hue: `S\xe4vy`,
        light: "vaalea",
        lightness: `Valom\xe4\xe4r\xe4`,
        magenta: "magenta",
        "magenta pink": "magentapinkki",
        orange: "oranssi",
        "orange yellow": "oranssinkeltainen",
        pale: "vaalea",
        pink: "pinkki",
        "pink red": "vaaleanpunainen",
        purple: "violetti",
        "purple magenta": "violettimagenta",
        red: "Punainen",
        "red orange": "punaoranssi",
        saturation: `V\xe4rikyll\xe4isyys`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} l\xe4pin\xe4kyv\xe4`,
        "very dark": "hyvin tumma",
        "very light": `eritt\xe4in vaalea`,
        vibrant: "eloisa",
        white: "valkea",
        yellow: "keltainen",
        "yellow green": `keltavihre\xe4`
    },
    "react-aria-components": {
        colorSwatchPicker: `V\xe4rimallit`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: "Valitse kohde",
        tableResizer: "Koon muuttaja"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/et-EE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Ahenda",
        expand: "Laienda"
    },
    "@react-aria/toast": {
        close: "Sule",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} teatis`,
                other: ()=>`${a.number(e.count)} teatist`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Eemalda",
        removeDescription: "Sildi eemaldamiseks vajutage kustutusklahvi Delete."
    },
    "@react-aria/table": {
        ascending: `t\xf5usev j\xe4rjestus`,
        ascendingSort: (e)=>`sorditud veeru j\xe4rgi ${e.columnName} t\xf5usvas j\xe4rjestuses`,
        columnSize: (e)=>`${e.value} pikslit`,
        descending: `laskuv j\xe4rjestus`,
        descendingSort: (e)=>`sorditud veeru j\xe4rgi ${e.columnName} laskuvas j\xe4rjestuses`,
        resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
        select: "Vali",
        selectAll: `Vali k\xf5ik`,
        sortable: "sorditav veerg",
        collapse: "Ahenda",
        expand: "Laienda"
    },
    "@react-aria/steplist": {
        steplist: "Sammude loend"
    },
    "@react-aria/spinbutton": {
        Empty: `T\xfchjenda`
    },
    "@react-aria/searchfield": {
        "Clear search": `T\xfchjenda otsing`
    },
    "@react-aria/overlays": {
        dismiss: `L\xf5peta`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`V\xe4henda ${e.fieldLabel}`,
        increase: (e)=>`Suurenda ${e.fieldLabel}`,
        numberField: `Numbri v\xe4li`
    },
    "@react-aria/menu": {
        longPressMessage: `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "real on tegevus",
        hasLinkAnnouncement: (e)=>`real on link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} pole valitud.`,
        longPressToSelect: `Valikurežiimi sisenemiseks vajutage pikalt.`,
        select: "Vali",
        selectedAll: `K\xf5ik \xfcksused valitud.`,
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `\xdcksusi pole valitud`,
                one: ()=>`${a.number(e.count)} \xfcksus valitud`,
                other: ()=>`${a.number(e.count)} \xfcksust valitud`
            })}.`,
        selectedItem: (e)=>`${e.item} valitud.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: "Lohistamise alustamiseks vajutage klahvi Enter.",
        dragDescriptionKeyboardAlt: "Lohistamise alustamiseks vajutage klahvikombinatsiooni Alt + Enter.",
        dragDescriptionLongPress: "Vajutage pikalt lohistamise alustamiseks.",
        dragDescriptionTouch: "Topeltpuudutage lohistamise alustamiseks.",
        dragDescriptionVirtual: `Kl\xf5psake lohistamise alustamiseks.`,
        dragItem: (e)=>`Lohista ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Lohista ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valitud \xfcksust`,
                other: ()=>`${a.number(e.count)} valitud \xfcksust`
            })}`,
        dragSelectedKeyboard: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valitud \xfcksuse`,
                other: ()=>`${a.number(e.count)} valitud \xfcksuse`
            })} lohistamiseks vajutage sisestusklahvi Enter.`,
        dragSelectedKeyboardAlt: (e, a)=>`Lohistamiseks vajutage klahvikombinatsiooni Alt + Enter ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valitud \xfcksuse`,
                other: ()=>`${a.number(e.count)} valitud \xfcksuse`
            })} jaoks.`,
        dragSelectedLongPress: (e, a)=>`Pikk vajutus ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} valitud \xfcksuse`,
                other: ()=>`${a.number(e.count)} valitud \xfcksuse`
            })} lohistamiseks.`,
        dragStartedKeyboard: `Alustati lohistamist. Kukutamise sihtm\xe4rgi juurde navigeerimiseks vajutage klahvi Tab, seej\xe4rel vajutage kukutamiseks klahvi Enter v\xf5i loobumiseks klahvi Escape.`,
        dragStartedTouch: `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja topeltpuudutage kukutamiseks.`,
        dragStartedVirtual: `Alustati lohistamist. Navigeerige kukutamise sihtm\xe4rgi juurde ja kukutamiseks kl\xf5psake v\xf5i vajutage klahvi Enter.`,
        dropCanceled: "Lohistamisest loobuti.",
        dropComplete: "Lohistamine on tehtud.",
        dropDescriptionKeyboard: "Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.",
        dropDescriptionTouch: "Kukutamiseks topeltpuudutage.",
        dropDescriptionVirtual: `Kukutamiseks kl\xf5psake.`,
        dropIndicator: "lohistamise indikaator",
        dropOnItem: (e)=>`Kukuta asukohta ${e.itemText}`,
        dropOnRoot: "Kukuta asukohta",
        endDragKeyboard: "Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.",
        endDragTouch: "Lohistamine. Lohistamisest loobumiseks topeltpuudutage.",
        endDragVirtual: `Lohistamine. Lohistamisest loobumiseks kl\xf5psake.`,
        insertAfter: (e)=>`Sisesta ${e.itemText} j\xe4rele`,
        insertBefore: (e)=>`Sisesta ${e.itemText} ette`,
        insertBetween: (e)=>`Sisesta ${e.beforeItemText} ja ${e.afterItemText} vahele`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: `p\xe4ev`,
        dayPeriod: `enne/p\xe4rast l\xf5unat`,
        endDate: `L\xf5ppkuup\xe4ev`,
        era: "ajastu",
        hour: "tund",
        minute: "minut",
        month: "kuu",
        second: "sekund",
        selectedDateDescription: (e)=>`Valitud kuup\xe4ev: ${e.date}`,
        selectedRangeDescription: (e)=>`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,
        selectedTimeDescription: (e)=>`Valitud aeg: ${e.time}`,
        startDate: `Alguskuup\xe4ev`,
        timeZoneName: `ajav\xf6\xf6nd`,
        weekday: `n\xe4dalap\xe4ev`,
        year: "aasta"
    },
    "@react-aria/combobox": {
        buttonLabel: "Kuva soovitused",
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} valik`,
                other: ()=>`${a.number(e.optionCount)} valikud`
            })} saadaval.`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} valik`,
                        other: ()=>`${a.number(e.groupCount)} valikud`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", valitud",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Soovitused",
        selectedAnnouncement: (e)=>`${e.optionText}, valitud`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `V\xe4rvivalija`,
        colorSwatch: `v\xe4rvin\xe4idis`,
        transparent: `l\xe4bipaistev`,
        twoDimensionalSlider: "2D-liugur"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} kuni ${e.endDate}`,
        dateSelected: (e)=>`${e.date} valitud`,
        finishRangeSelectionPrompt: `Kl\xf5psake kuup\xe4evavahemiku valimise l\xf5petamiseks`,
        maximumDate: `Viimane saadaolev kuup\xe4ev`,
        minimumDate: `Esimene saadaolev kuup\xe4ev`,
        next: `J\xe4rgmine`,
        previous: "Eelmine",
        selectedDateDescription: (e)=>`Valitud kuup\xe4ev: ${e.date}`,
        selectedRangeDescription: (e)=>`Valitud vahemik: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kl\xf5psake kuup\xe4evavahemiku valimiseks`,
        todayDate: (e)=>`T\xe4na, ${e.date}`,
        todayDateSelected: (e)=>`T\xe4na, ${e.date} valitud`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Lingiread"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Soovitused"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,
        rangeReversed: `Alguskuup\xe4ev peab olema enne l\xf5ppkuup\xe4eva.`,
        rangeUnderflow: (e)=>`V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,
        unavailableDate: `Valitud kuup\xe4ev pole saadaval.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "must",
        blue: "Sinine",
        "blue purple": "sinakaslilla",
        brightness: "Heledus",
        brown: "pruun",
        "brown yellow": "pruunikaskollane",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `ts\xfcaan`,
        "cyan blue": `ts\xfcaansinine`,
        dark: "tume",
        gray: "hall",
        grayish: "hallikas",
        green: "Roheline",
        "green cyan": `ts\xfcaanroheline`,
        hue: `V\xe4rv`,
        light: "valgus",
        lightness: "Valgus",
        magenta: "magentapunane",
        "magenta pink": "magentaroosa",
        orange: `oranž`,
        "orange yellow": `oranžikaskollane`,
        pale: "kahvatu",
        pink: "roosa",
        "pink red": "vaarikapunane",
        purple: "lilla",
        "purple magenta": "purpurne magenta",
        red: "Punane",
        "red orange": `punakasoranž`,
        saturation: `K\xfcllastus`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} l\xe4bipaistev`,
        "very dark": `v\xe4ga tume`,
        "very light": `v\xe4ga hele`,
        vibrant: "ere",
        white: "valge",
        yellow: "kollane",
        "yellow green": "kollakasroheline"
    },
    "react-aria-components": {
        colorSwatchPicker: `V\xe4rvin\xe4idised`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Valige \xfcksus`,
        tableResizer: "Suuruse muutja"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/es-ES.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Contraer",
        expand: "Ampliar"
    },
    "@react-aria/toast": {
        close: "Cerrar",
        notifications: (e, a)=>`${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} notificaci\xf3n`,
                other: ()=>`${a.number(e.count)} notificaciones`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Quitar",
        removeDescription: "Pulse Eliminar para quitar la etiqueta."
    },
    "@react-aria/table": {
        ascending: "ascendente",
        ascendingSort: (e)=>`ordenado por columna ${e.columnName} en sentido ascendente`,
        columnSize: (e)=>`${e.value} p\xedxeles`,
        descending: "descendente",
        descendingSort: (e)=>`ordenado por columna ${e.columnName} en orden descendente`,
        resizerDescription: "Pulse Intro para empezar a redimensionar",
        select: "Seleccionar",
        selectAll: "Seleccionar todos",
        sortable: "columna ordenable",
        collapse: "Contraer",
        expand: "Ampliar"
    },
    "@react-aria/steplist": {
        steplist: "Lista de pasos"
    },
    "@react-aria/spinbutton": {
        Empty: `Vac\xedo`
    },
    "@react-aria/searchfield": {
        "Clear search": `Borrar b\xfasqueda`
    },
    "@react-aria/overlays": {
        dismiss: "Descartar"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Reducir ${e.fieldLabel}`,
        increase: (e)=>`Aumentar ${e.fieldLabel}`,
        numberField: `Campo de n\xfamero`
    },
    "@react-aria/menu": {
        longPressMessage: `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `la fila tiene acci\xf3n`,
        hasLinkAnnouncement: (e)=>`la fila tiene un v\xednculo: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} no seleccionado.`,
        longPressToSelect: `Mantenga pulsado para abrir el modo de selecci\xf3n.`,
        select: "Seleccionar",
        selectedAll: "Todos los elementos seleccionados.",
        selectedCount: (e, a)=>`${a.plural(e.count, {
                "=0": `Ning\xfan elemento seleccionado`,
                one: ()=>`${a.number(e.count)} elemento seleccionado`,
                other: ()=>`${a.number(e.count)} elementos seleccionados`
            })}.`,
        selectedItem: (e)=>`${e.item} seleccionado.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: "Pulse Intro para empezar a arrastrar.",
        dragDescriptionKeyboardAlt: "Pulse Intro para empezar a arrastrar.",
        dragDescriptionLongPress: "Mantenga pulsado para comenzar a arrastrar.",
        dragDescriptionTouch: "Pulse dos veces para iniciar el arrastre.",
        dragDescriptionVirtual: "Haga clic para iniciar el arrastre.",
        dragItem: (e)=>`Arrastrar ${e.itemText}`,
        dragSelectedItems: (e, a)=>`Arrastrar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento seleccionado`,
                other: ()=>`${a.number(e.count)} elementos seleccionados`
            })}`,
        dragSelectedKeyboard: (e, a)=>`Pulse Intro para arrastrar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento seleccionado`,
                other: ()=>`${a.number(e.count)} elementos seleccionados`
            })}.`,
        dragSelectedKeyboardAlt: (e, a)=>`Pulse Alt + Intro para arrastrar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento seleccionado`,
                other: ()=>`${a.number(e.count)} elementos seleccionados`
            })}.`,
        dragSelectedLongPress: (e, a)=>`Mantenga pulsado para arrastrar ${a.plural(e.count, {
                one: ()=>`${a.number(e.count)} elemento seleccionado`,
                other: ()=>`${a.number(e.count)} elementos seleccionados`
            })}.`,
        dragStartedKeyboard: `Se ha empezado a arrastrar. Pulse el tabulador para ir al destino donde se vaya a colocar y, a continuaci\xf3n, pulse Intro para soltar, o pulse Escape para cancelar.`,
        dragStartedTouch: `Se ha empezado a arrastrar. Vaya al destino donde se vaya a colocar y, a continuaci\xf3n, pulse dos veces para soltar.`,
        dragStartedVirtual: `Se ha empezado a arrastrar. Vaya al destino donde se vaya a colocar y, a continuaci\xf3n, haga clic o pulse Intro para soltar.`,
        dropCanceled: `Se ha cancelado la colocaci\xf3n.`,
        dropComplete: `Colocaci\xf3n finalizada.`,
        dropDescriptionKeyboard: "Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.",
        dropDescriptionTouch: "Pulse dos veces para soltar.",
        dropDescriptionVirtual: "Haga clic para soltar.",
        dropIndicator: `indicador de colocaci\xf3n`,
        dropOnItem: (e)=>`Soltar en ${e.itemText}`,
        dropOnRoot: "Soltar en",
        endDragKeyboard: "Arrastrando. Pulse Intro para cancelar el arrastre.",
        endDragTouch: "Arrastrando. Pulse dos veces para cancelar el arrastre.",
        endDragVirtual: "Arrastrando. Haga clic para cancelar el arrastre.",
        insertAfter: (e)=>`Insertar despu\xe9s de ${e.itemText}`,
        insertBefore: (e)=>`Insertar antes de ${e.itemText}`,
        insertBetween: (e)=>`Insertar entre ${e.beforeItemText} y ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Calendario",
        day: `d\xeda`,
        dayPeriod: `a.\xa0m./p.\xa0m.`,
        endDate: "Fecha final",
        era: "era",
        hour: "hora",
        minute: "minuto",
        month: "mes",
        second: "segundo",
        selectedDateDescription: (e)=>`Fecha seleccionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Rango seleccionado: ${e.startDate} a ${e.endDate}`,
        selectedTimeDescription: (e)=>`Hora seleccionada: ${e.time}`,
        startDate: "Fecha de inicio",
        timeZoneName: "zona horaria",
        weekday: `d\xeda de la semana`,
        year: `a\xf1o`
    },
    "@react-aria/combobox": {
        buttonLabel: "Mostrar sugerencias",
        countAnnouncement: (e, a)=>`${a.plural(e.optionCount, {
                one: ()=>`${a.number(e.optionCount)} opci\xf3n`,
                other: ()=>`${a.number(e.optionCount)} opciones`
            })} disponible(s).`,
        focusAnnouncement: (e, a)=>`${a.select({
                true: ()=>`Se ha unido al grupo ${e.groupTitle}, con ${a.plural(e.groupCount, {
                        one: ()=>`${a.number(e.groupCount)} opci\xf3n`,
                        other: ()=>`${a.number(e.groupCount)} opciones`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${a.select({
                true: ", seleccionado",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Sugerencias",
        selectedAnnouncement: (e)=>`${e.optionText}, seleccionado`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: "Selector de color",
        colorSwatch: "muestra de color",
        transparent: "transparente",
        twoDimensionalSlider: "Regulador 2D"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} a ${e.endDate}`,
        dateSelected: (e)=>`${e.date} seleccionado`,
        finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
        maximumDate: `\xdaltima fecha disponible`,
        minimumDate: "Primera fecha disponible",
        next: "Siguiente",
        previous: "Anterior",
        selectedDateDescription: (e)=>`Fecha seleccionada: ${e.date}`,
        selectedRangeDescription: (e)=>`Intervalo seleccionado: ${e.dateRange}`,
        startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
        todayDate: (e)=>`Hoy, ${e.date}`,
        todayDateSelected: (e)=>`Hoy, ${e.date} seleccionado`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Migas de pan"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Sugerencias"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`El valor debe ser ${e.maxValue} o anterior.`,
        rangeReversed: `La fecha de inicio debe ser anterior a la fecha de finalizaci\xf3n.`,
        rangeUnderflow: (e)=>`El valor debe ser ${e.minValue} o posterior.`,
        unavailableDate: "Fecha seleccionada no disponible."
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: "negro",
        blue: "Azul",
        "blue purple": `p\xfarpura azulado`,
        brightness: "Brillo",
        brown: `marr\xf3n`,
        "brown yellow": "amarillo amarronado",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cian",
        "cyan blue": "azul cian",
        dark: "oscuro",
        gray: "gris",
        grayish: `gris\xe1ceo`,
        green: "Verde",
        "green cyan": "cian verdoso",
        hue: "Tono",
        light: "claro",
        lightness: "Luminosidad",
        magenta: "magenta",
        "magenta pink": "rosa magenta",
        orange: "naranja",
        "orange yellow": "amarillo anaranjado",
        pale: `p\xe1lido`,
        pink: "rosa",
        "pink red": "rojo rosado",
        purple: "morado",
        "purple magenta": `magenta viol\xe1ceo`,
        red: "Rojo",
        "red orange": "naranja rojizo",
        saturation: `Saturaci\xf3n`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparente`,
        "very dark": "muy oscuro",
        "very light": "muy claro",
        vibrant: "intenso",
        white: "blanco",
        yellow: "amarillo",
        "yellow green": "verde amarillento"
    },
    "react-aria-components": {
        colorSwatchPicker: "Muestras de colores",
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Seleccionar un art\xedculo`,
        tableResizer: `Cambiador de tama\xf1o`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/en-US.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        expand: "Expand",
        collapse: "Collapse"
    },
    "@react-aria/toast": {
        close: "Close",
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} notification`,
                other: ()=>`${t.number(e.count)} notifications`
            })}.`
    },
    "@react-aria/tag": {
        removeDescription: "Press Delete to remove tag.",
        removeButtonLabel: "Remove"
    },
    "@react-aria/table": {
        select: "Select",
        selectAll: "Select All",
        sortable: "sortable column",
        ascending: "ascending",
        descending: "descending",
        ascendingSort: (e)=>`sorted by column ${e.columnName} in ascending order`,
        descendingSort: (e)=>`sorted by column ${e.columnName} in descending order`,
        columnSize: (e)=>`${e.value} pixels`,
        resizerDescription: "Press Enter to start resizing",
        expand: "Expand",
        collapse: "Collapse"
    },
    "@react-aria/steplist": {
        steplist: "Step List"
    },
    "@react-aria/spinbutton": {
        Empty: "Empty"
    },
    "@react-aria/searchfield": {
        "Clear search": "Clear search"
    },
    "@react-aria/overlays": {
        dismiss: "Dismiss"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Decrease ${e.fieldLabel}`,
        increase: (e)=>`Increase ${e.fieldLabel}`,
        numberField: "Number field"
    },
    "@react-aria/menu": {
        longPressMessage: "Long press or press Alt + ArrowDown to open menu"
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "row has action",
        hasLinkAnnouncement: (e)=>`row has link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} not selected.`,
        select: "Select",
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": "No items selected",
                one: ()=>`${t.number(e.count)} item selected`,
                other: ()=>`${t.number(e.count)} items selected`
            })}.`,
        selectedAll: "All items selected.",
        selectedItem: (e)=>`${e.item} selected.`,
        longPressToSelect: "Long press to enter selection mode."
    },
    "@react-aria/dnd": {
        dragItem: (e)=>`Drag ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Drag ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} selected item`,
                other: ()=>`${t.number(e.count)} selected items`
            })}`,
        dragDescriptionKeyboard: "Press Enter to start dragging.",
        dragDescriptionKeyboardAlt: "Press Alt + Enter to start dragging.",
        dragDescriptionTouch: "Double tap to start dragging.",
        dragDescriptionVirtual: "Click to start dragging.",
        dragDescriptionLongPress: "Long press to start dragging.",
        dragSelectedKeyboard: (e, t)=>`Press Enter to drag ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} selected item`,
                other: ()=>`${t.number(e.count)} selected items`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Press Alt + Enter to drag ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} selected item`,
                other: ()=>`${t.number(e.count)} selected items`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Long press to drag ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} selected item`,
                other: ()=>`${t.number(e.count)} selected items`
            })}.`,
        dragStartedKeyboard: "Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.",
        dragStartedTouch: "Started dragging. Navigate to a drop target, then double tap to drop.",
        dragStartedVirtual: "Started dragging. Navigate to a drop target, then click or press Enter to drop.",
        endDragKeyboard: "Dragging. Press Enter to cancel drag.",
        endDragTouch: "Dragging. Double tap to cancel drag.",
        endDragVirtual: "Dragging. Click to cancel drag.",
        dropDescriptionKeyboard: "Press Enter to drop. Press Escape to cancel drag.",
        dropDescriptionTouch: "Double tap to drop.",
        dropDescriptionVirtual: "Click to drop.",
        dropCanceled: "Drop canceled.",
        dropComplete: "Drop complete.",
        dropIndicator: "drop indicator",
        dropOnRoot: "Drop on",
        dropOnItem: (e)=>`Drop on ${e.itemText}`,
        insertBefore: (e)=>`Insert before ${e.itemText}`,
        insertBetween: (e)=>`Insert between ${e.beforeItemText} and ${e.afterItemText}`,
        insertAfter: (e)=>`Insert after ${e.itemText}`
    },
    "@react-aria/datepicker": {
        era: "era",
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        dayPeriod: "AM/PM",
        calendar: "Calendar",
        startDate: "Start Date",
        endDate: "End Date",
        weekday: "day of the week",
        timeZoneName: "time zone",
        selectedDateDescription: (e)=>`Selected Date: ${e.date}`,
        selectedRangeDescription: (e)=>`Selected Range: ${e.startDate} to ${e.endDate}`,
        selectedTimeDescription: (e)=>`Selected Time: ${e.time}`
    },
    "@react-aria/combobox": {
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} option`,
                        other: ()=>`${t.number(e.groupCount)} options`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: ", selected",
                other: ""
            }, e.isSelected)}`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} option`,
                other: ()=>`${t.number(e.optionCount)} options`
            })} available.`,
        selectedAnnouncement: (e)=>`${e.optionText}, selected`,
        buttonLabel: "Show suggestions",
        listboxLabel: "Suggestions"
    },
    "@react-aria/color": {
        colorPicker: "Color picker",
        twoDimensionalSlider: "2D slider",
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorSwatch: "color swatch",
        transparent: "transparent"
    },
    "@react-aria/calendar": {
        previous: "Previous",
        next: "Next",
        selectedDateDescription: (e)=>`Selected Date: ${e.date}`,
        selectedRangeDescription: (e)=>`Selected Range: ${e.dateRange}`,
        todayDate: (e)=>`Today, ${e.date}`,
        todayDateSelected: (e)=>`Today, ${e.date} selected`,
        dateSelected: (e)=>`${e.date} selected`,
        startRangeSelectionPrompt: "Click to start selecting date range",
        finishRangeSelectionPrompt: "Click to finish selecting date range",
        minimumDate: "First available date",
        maximumDate: "Last available date",
        dateRange: (e)=>`${e.startDate} to ${e.endDate}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Breadcrumbs"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Suggestions"
    },
    "@react-stately/datepicker": {
        rangeUnderflow: (e)=>`Value must be ${e.minValue} or later.`,
        rangeOverflow: (e)=>`Value must be ${e.maxValue} or earlier.`,
        rangeReversed: "Start date must be before end date.",
        unavailableDate: "Selected date unavailable."
    },
    "@react-stately/color": {
        hue: "Hue",
        saturation: "Saturation",
        lightness: "Lightness",
        brightness: "Brightness",
        red: "Red",
        green: "Green",
        blue: "Blue",
        alpha: "Alpha",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} transparent`,
        "very dark": "very dark",
        dark: "dark",
        light: "light",
        "very light": "very light",
        pale: "pale",
        grayish: "grayish",
        vibrant: "vibrant",
        black: "black",
        white: "white",
        gray: "gray",
        pink: "pink",
        "pink red": "pink red",
        "red orange": "red orange",
        brown: "brown",
        orange: "orange",
        "orange yellow": "orange yellow",
        "brown yellow": "brown yellow",
        yellow: "yellow",
        "yellow green": "yellow green",
        "green cyan": "green cyan",
        cyan: "cyan",
        "cyan blue": "cyan blue",
        "blue purple": "blue purple",
        purple: "purple",
        "purple magenta": "purple magenta",
        magenta: "magenta",
        "magenta pink": "magenta pink"
    },
    "react-aria-components": {
        selectPlaceholder: "Select an item",
        tableResizer: "Resizer",
        dropzoneLabel: "DropZone",
        colorSwatchPicker: "Color swatches"
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/el-GR.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Σύμπτυξη`,
        expand: `Ανάπτυξη`
    },
    "@react-aria/toast": {
        close: `Κλείσιμο`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} ειδοποίηση`,
                other: ()=>`${t.number(e.count)} ειδοποιήσεις`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Κατάργηση`,
        removeDescription: `Πατήστε Διαγραφή για να καταργήσετε την ετικέτα.`
    },
    "@react-aria/table": {
        ascending: `αύξουσα`,
        ascendingSort: (e)=>`διαλογή ανά στήλη ${e.columnName} σε αύξουσα σειρά`,
        columnSize: (e)=>`${e.value} pixel`,
        descending: `φθίνουσα`,
        descendingSort: (e)=>`διαλογή ανά στήλη ${e.columnName} σε φθίνουσα σειρά`,
        resizerDescription: `Πατήστε Enter για έναρξη της αλλαγής μεγέθους`,
        select: `Επιλογή`,
        selectAll: `Επιλογή όλων`,
        sortable: `Στήλη διαλογής`,
        collapse: `Σύμπτυξη`,
        expand: `Ανάπτυξη`
    },
    "@react-aria/steplist": {
        steplist: `Λίστα βημάτων`
    },
    "@react-aria/spinbutton": {
        Empty: `Άδειο`
    },
    "@react-aria/searchfield": {
        "Clear search": `Απαλοιφή αναζήτησης`
    },
    "@react-aria/overlays": {
        dismiss: `Απόρριψη`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Μείωση ${e.fieldLabel}`,
        increase: (e)=>`Αύξηση ${e.fieldLabel}`,
        numberField: `Πεδίο αριθμού`
    },
    "@react-aria/menu": {
        longPressMessage: `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `η σειρά έχει δράση`,
        hasLinkAnnouncement: (e)=>`η σειρά έχει σύνδεσμο: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Δεν επιλέχθηκε το στοιχείο ${e.item}.`,
        longPressToSelect: `Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.`,
        select: `Επιλογή`,
        selectedAll: `Επιλέχθηκαν όλα τα στοιχεία.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `Δεν επιλέχθηκαν στοιχεία`,
                one: ()=>`Επιλέχθηκε ${t.number(e.count)} στοιχείο`,
                other: ()=>`Επιλέχθηκαν ${t.number(e.count)} στοιχεία`
            })}.`,
        selectedItem: (e)=>`Επιλέχθηκε το στοιχείο ${e.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Πατήστε Enter για έναρξη της μεταφοράς.`,
        dragDescriptionKeyboardAlt: `Πατήστε Alt + Enter για έναρξη της μεταφοράς.`,
        dragDescriptionLongPress: `Πατήστε παρατεταμένα για να ξεκινήσετε τη μεταφορά.`,
        dragDescriptionTouch: `Πατήστε δύο φορές για έναρξη της μεταφοράς.`,
        dragDescriptionVirtual: `Κάντε κλικ για να ξεκινήσετε τη μεταφορά.`,
        dragItem: (e)=>`Μεταφορά ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Μεταφορά σε ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} επιλεγμένο στοιχείο`,
                other: ()=>`${t.number(e.count)} επιλεγμένα στοιχεία`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Πατήστε Enter για να σύρετε ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} επιλεγμένο στοιχείο`,
                other: ()=>`${t.number(e.count)} επιλεγμένα στοιχεία`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Πατήστε Alt + Enter για να σύρετε ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} επιλεγμένο στοιχείο`,
                other: ()=>`${t.number(e.count)} επιλεγμένα στοιχεία`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Πατήστε παρατεταμένα για να σύρετε ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} επιλεγμένο στοιχείο`,
                other: ()=>`${t.number(e.count)} επιλεγμένα στοιχεία`
            })}.`,
        dragStartedKeyboard: `Η μεταφορά ξεκίνησε. Πατήστε το πλήκτρο Tab για να μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε Enter για απόθεση ή πατήστε Escape για ακύρωση.`,
        dragStartedTouch: `Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, πατήστε δύο φορές για απόθεση.`,
        dragStartedVirtual: `Η μεταφορά ξεκίνησε. Μεταβείτε σε έναν προορισμό απόθεσης και, στη συνέχεια, κάντε κλικ ή πατήστε Enter για απόθεση.`,
        dropCanceled: `Η απόθεση ακυρώθηκε.`,
        dropComplete: `Η απόθεση ολοκληρώθηκε.`,
        dropDescriptionKeyboard: `Πατήστε Enter για απόθεση. Πατήστε Escape για ακύρωση της μεταφοράς.`,
        dropDescriptionTouch: `Πατήστε δύο φορές για απόθεση.`,
        dropDescriptionVirtual: `Κάντε κλικ για απόθεση.`,
        dropIndicator: `δείκτης απόθεσης`,
        dropOnItem: (e)=>`Απόθεση σε ${e.itemText}`,
        dropOnRoot: `Απόθεση σε`,
        endDragKeyboard: `Μεταφορά σε εξέλιξη. Πατήστε Enter για ακύρωση της μεταφοράς.`,
        endDragTouch: `Μεταφορά σε εξέλιξη. Πατήστε δύο φορές για ακύρωση της μεταφοράς.`,
        endDragVirtual: `Μεταφορά σε εξέλιξη. Κάντε κλικ για ακύρωση της μεταφοράς.`,
        insertAfter: (e)=>`Εισαγωγή μετά από ${e.itemText}`,
        insertBefore: (e)=>`Εισαγωγή πριν από ${e.itemText}`,
        insertBetween: (e)=>`Εισαγωγή μεταξύ ${e.beforeItemText} και ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Ημερολόγιο`,
        day: `ημέρα`,
        dayPeriod: `π.μ./μ.μ.`,
        endDate: `Ημερομηνία λήξης`,
        era: `περίοδος`,
        hour: `ώρα`,
        minute: `λεπτό`,
        month: `μήνας`,
        second: `δευτερόλεπτο`,
        selectedDateDescription: (e)=>`Επιλεγμένη ημερομηνία: ${e.date}`,
        selectedRangeDescription: (e)=>`Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,
        selectedTimeDescription: (e)=>`Επιλεγμένη ώρα: ${e.time}`,
        startDate: `Ημερομηνία έναρξης`,
        timeZoneName: `ζώνη ώρας`,
        weekday: `καθημερινή`,
        year: `έτος`
    },
    "@react-aria/combobox": {
        buttonLabel: `Προβολή προτάσεων`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} επιλογή`,
                other: ()=>`${t.number(e.optionCount)} επιλογές `
            })} διαθέσιμες.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Εισαγμένη ομάδα ${e.groupTitle}, με ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} επιλογή`,
                        other: ()=>`${t.number(e.groupCount)} επιλογές`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, επιλεγμένο`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Προτάσεις`,
        selectedAnnouncement: (e)=>`${e.optionText}, επιλέχθηκε`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Επιλογέας χρωμάτων`,
        colorSwatch: `χρωματικό δείγμα`,
        transparent: `διαφανές`,
        twoDimensionalSlider: `Ρυθμιστικό 2D`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} έως ${e.endDate}`,
        dateSelected: (e)=>`Επιλέχθηκε ${e.date}`,
        finishRangeSelectionPrompt: `Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,
        maximumDate: `Τελευταία διαθέσιμη ημερομηνία`,
        minimumDate: `Πρώτη διαθέσιμη ημερομηνία`,
        next: `Επόμενο`,
        previous: `Προηγούμενο`,
        selectedDateDescription: (e)=>`Επιλεγμένη ημερομηνία: ${e.date}`,
        selectedRangeDescription: (e)=>`Επιλεγμένο εύρος: ${e.dateRange}`,
        startRangeSelectionPrompt: `Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,
        todayDate: (e)=>`Σήμερα, ${e.date}`,
        todayDateSelected: (e)=>`Σήμερα, επιλέχτηκε ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Πλοηγήσεις breadcrumb`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Προτάσεις`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,
        rangeReversed: `Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.`,
        rangeUnderflow: (e)=>`Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,
        unavailableDate: `Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.`
    },
    "@react-stately/color": {
        alpha: `Άλφα`,
        black: `μαύρο`,
        blue: `Μπλε`,
        "blue purple": `μπλε μωβ`,
        brightness: `Φωτεινότητα`,
        brown: `καφέ`,
        "brown yellow": `καφέ κίτρινο`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `κυανό`,
        "cyan blue": `κυανό μπλε`,
        dark: `σκούρο`,
        gray: `γκρι`,
        grayish: `γκριζωπό`,
        green: `Πράσινο`,
        "green cyan": `πράσινο κυανό`,
        hue: `Τόνος`,
        light: `ανοιχτό`,
        lightness: `Φωτεινότητα`,
        magenta: `ματζέντα`,
        "magenta pink": `ματζέντα ροζ`,
        orange: `πορτοκαλί`,
        "orange yellow": `πορτοκαλί κίτρινο`,
        pale: `ανοιχτό`,
        pink: `ροζ`,
        "pink red": `ροζ κόκκινο`,
        purple: `μωβ`,
        "purple magenta": `μωβ ματζέντα`,
        red: `Κόκκινο`,
        "red orange": `κόκκινο πορτοκαλί`,
        saturation: `Κορεσμός`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} διαφανές`,
        "very dark": `πολύ σκούρο`,
        "very light": `πολύ ανοιχτό`,
        vibrant: `έντονο`,
        white: `λευκό`,
        yellow: `κίτρινο`,
        "yellow green": `κίτρινο πράσινο`
    },
    "react-aria-components": {
        colorSwatchPicker: `Χρωματικά δείγματα`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Επιλέξτε ένα αντικείμενο`,
        tableResizer: `Αλλαγή μεγέθους`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/de-DE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Reduzieren",
        expand: "Erweitern"
    },
    "@react-aria/toast": {
        close: `Schlie\xdfen`,
        notifications: (e, n)=>`${n.plural(e.count, {
                one: ()=>`${n.number(e.count)} Benachrichtigung`,
                other: ()=>`${n.number(e.count)} Benachrichtigungen`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Entfernen",
        removeDescription: `Auf „L\xf6schen“ dr\xfccken, um das Tag zu entfernen.`
    },
    "@react-aria/table": {
        ascending: "aufsteigend",
        ascendingSort: (e)=>`sortiert nach Spalte ${e.columnName} in aufsteigender Reihenfolge`,
        columnSize: (e)=>`${e.value} Pixel`,
        descending: "absteigend",
        descendingSort: (e)=>`sortiert nach Spalte ${e.columnName} in absteigender Reihenfolge`,
        resizerDescription: `Eingabetaste zum Starten der Gr\xf6\xdfen\xe4nderung dr\xfccken`,
        select: `Ausw\xe4hlen`,
        selectAll: `Alles ausw\xe4hlen`,
        sortable: "sortierbare Spalte",
        collapse: "Reduzieren",
        expand: "Erweitern"
    },
    "@react-aria/steplist": {
        steplist: "Schrittliste"
    },
    "@react-aria/spinbutton": {
        Empty: "Leer"
    },
    "@react-aria/searchfield": {
        "Clear search": `Suche zur\xfccksetzen`
    },
    "@react-aria/overlays": {
        dismiss: `Schlie\xdfen`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`${e.fieldLabel} verringern`,
        increase: (e)=>`${e.fieldLabel} erh\xf6hen`,
        numberField: "Nummernfeld"
    },
    "@react-aria/menu": {
        longPressMessage: `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: "Zeile hat Aktion",
        hasLinkAnnouncement: (e)=>`Zeile hat Link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} nicht ausgew\xe4hlt.`,
        longPressToSelect: `Gedr\xfcckt halten, um Auswahlmodus zu \xf6ffnen.`,
        select: `Ausw\xe4hlen`,
        selectedAll: `Alle Elemente ausgew\xe4hlt.`,
        selectedCount: (e, n)=>`${n.plural(e.count, {
                "=0": `Keine Elemente ausgew\xe4hlt`,
                one: ()=>`${n.number(e.count)} Element ausgew\xe4hlt`,
                other: ()=>`${n.number(e.count)} Elemente ausgew\xe4hlt`
            })}.`,
        selectedItem: (e)=>`${e.item} ausgew\xe4hlt.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Dr\xfccken Sie die Eingabetaste, um den Ziehvorgang zu starten.`,
        dragDescriptionKeyboardAlt: `Alt + Eingabe dr\xfccken, um den Ziehvorgang zu starten.`,
        dragDescriptionLongPress: `Lang dr\xfccken, um mit dem Ziehen zu beginnen.`,
        dragDescriptionTouch: "Tippen Sie doppelt, um den Ziehvorgang zu starten.",
        dragDescriptionVirtual: "Zum Starten des Ziehvorgangs klicken.",
        dragItem: (e)=>`${e.itemText} ziehen`,
        dragSelectedItems: (e, n)=>`${n.plural(e.count, {
                one: ()=>`${n.number(e.count)} ausgew\xe4hltes Objekt`,
                other: ()=>`${n.number(e.count)} ausgew\xe4hlte Objekte`
            })} ziehen`,
        dragSelectedKeyboard: (e, n)=>`Eingabetaste dr\xfccken, um ${n.plural(e.count, {
                one: ()=>`${n.number(e.count)} ausgew\xe4hltes Element`,
                other: ()=>`${n.number(e.count)} ausgew\xe4hlte Elemente`
            })} zu ziehen.`,
        dragSelectedKeyboardAlt: (e, n)=>`Alt + Eingabetaste dr\xfccken, um ${n.plural(e.count, {
                one: ()=>`${n.number(e.count)} ausgew\xe4hltes Element`,
                other: ()=>`${n.number(e.count)} ausgew\xe4hlte Elemente`
            })} zu ziehen.`,
        dragSelectedLongPress: (e, n)=>`Lang dr\xfccken, um ${n.plural(e.count, {
                one: ()=>`${n.number(e.count)} ausgew\xe4hltes Element`,
                other: ()=>`${n.number(e.count)} ausgew\xe4hlte Elemente`
            })} zu ziehen.`,
        dragStartedKeyboard: `Ziehvorgang gestartet. Dr\xfccken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und dr\xfccken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.`,
        dragStartedTouch: "Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.",
        dragStartedVirtual: `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen.`,
        dropCanceled: "Ablegen abgebrochen.",
        dropComplete: "Ablegen abgeschlossen.",
        dropDescriptionKeyboard: `Dr\xfccken Sie die Eingabetaste, um das Objekt abzulegen. Dr\xfccken Sie Escape, um den Vorgang abzubrechen.`,
        dropDescriptionTouch: "Tippen Sie doppelt, um das Objekt abzulegen.",
        dropDescriptionVirtual: "Zum Ablegen klicken.",
        dropIndicator: "Ablegeanzeiger",
        dropOnItem: (e)=>`Auf ${e.itemText} ablegen`,
        dropOnRoot: "Ablegen auf",
        endDragKeyboard: `Ziehvorgang l\xe4uft. Dr\xfccken Sie die Eingabetaste, um den Vorgang abzubrechen.`,
        endDragTouch: `Ziehvorgang l\xe4uft. Tippen Sie doppelt, um den Vorgang abzubrechen.`,
        endDragVirtual: `Ziehvorgang l\xe4uft. Klicken Sie, um den Vorgang abzubrechen.`,
        insertAfter: (e)=>`Nach ${e.itemText} einf\xfcgen`,
        insertBefore: (e)=>`Vor ${e.itemText} einf\xfcgen`,
        insertBetween: (e)=>`Zwischen ${e.beforeItemText} und ${e.afterItemText} einf\xfcgen`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: "Tag",
        dayPeriod: `Tagesh\xe4lfte`,
        endDate: "Enddatum",
        era: "Epoche",
        hour: "Stunde",
        minute: "Minute",
        month: "Monat",
        second: "Sekunde",
        selectedDateDescription: (e)=>`Ausgew\xe4hltes Datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,
        selectedTimeDescription: (e)=>`Ausgew\xe4hlte Zeit: ${e.time}`,
        startDate: "Startdatum",
        timeZoneName: "Zeitzone",
        weekday: "Wochentag",
        year: "Jahr"
    },
    "@react-aria/combobox": {
        buttonLabel: "Empfehlungen anzeigen",
        countAnnouncement: (e, n)=>`${n.plural(e.optionCount, {
                one: ()=>`${n.number(e.optionCount)} Option`,
                other: ()=>`${n.number(e.optionCount)} Optionen`
            })} verf\xfcgbar.`,
        focusAnnouncement: (e, n)=>`${n.select({
                true: ()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${n.plural(e.groupCount, {
                        one: ()=>`${n.number(e.groupCount)} Option`,
                        other: ()=>`${n.number(e.groupCount)} Optionen`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${n.select({
                true: `, ausgew\xe4hlt`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Empfehlungen",
        selectedAnnouncement: (e)=>`${e.optionText}, ausgew\xe4hlt`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Farbw\xe4hler`,
        colorSwatch: "Farbfeld",
        transparent: "transparent",
        twoDimensionalSlider: "2D-Schieberegler"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} bis ${e.endDate}`,
        dateSelected: (e)=>`${e.date} ausgew\xe4hlt`,
        finishRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beenden",
        maximumDate: `Letztes verf\xfcgbares Datum`,
        minimumDate: `Erstes verf\xfcgbares Datum`,
        next: "Weiter",
        previous: `Zur\xfcck`,
        selectedDateDescription: (e)=>`Ausgew\xe4hltes Datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Ausgew\xe4hlter Bereich: ${e.dateRange}`,
        startRangeSelectionPrompt: "Klicken, um die Auswahl des Datumsbereichs zu beginnen",
        todayDate: (e)=>`Heute, ${e.date}`,
        todayDateSelected: (e)=>`Heute, ${e.date} ausgew\xe4hlt`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Breadcrumbs"
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Empfehlungen"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,
        rangeReversed: "Das Startdatum muss vor dem Enddatum liegen.",
        rangeUnderflow: (e)=>`Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,
        unavailableDate: `Das ausgew\xe4hlte Datum ist nicht verf\xfcgbar.`
    },
    "@react-stately/color": {
        alpha: "Alpha",
        black: "Schwarz",
        blue: "Blau",
        "blue purple": "Blaulila",
        brightness: "Helligkeit",
        brown: "Braun",
        "brown yellow": "Braungelb",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "Cyan",
        "cyan blue": "Cyanblau",
        dark: "dunkles",
        gray: "Grau",
        grayish: `gr\xe4uliches`,
        green: `Gr\xfcn`,
        "green cyan": `Gr\xfcncyan`,
        hue: "Farbton",
        light: "helles",
        lightness: "Leuchtkraft",
        magenta: "Magenta",
        "magenta pink": "Magentarosa",
        orange: "Orange",
        "orange yellow": "Orangegelb",
        pale: "blasses",
        pink: "Rosa",
        "pink red": "Rosarot",
        purple: "Lila",
        "purple magenta": "Lilamagenta",
        red: "Rot",
        "red orange": "Rotorange",
        saturation: `S\xe4ttigung`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, zu ${e.percentTransparent} transparent`,
        "very dark": "sehr dunkles",
        "very light": "sehr helles",
        vibrant: "lebhaftes",
        white: `Wei\xdf`,
        yellow: "Gelb",
        "yellow green": `Gelbgr\xfcn`
    },
    "react-aria-components": {
        colorSwatchPicker: "Farbfelder",
        dropzoneLabel: "Ablegebereich",
        selectPlaceholder: `Element w\xe4hlen`,
        tableResizer: `Gr\xf6\xdfenanpassung`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/da-DK.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Skjul",
        expand: "Udvid"
    },
    "@react-aria/toast": {
        close: "Luk",
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} besked`,
                other: ()=>`${t.number(e.count)} beskeder`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Fjern",
        removeDescription: `Tryk p\xe5 Slet for at fjerne tag.`
    },
    "@react-aria/table": {
        ascending: "stigende",
        ascendingSort: (e)=>`sorteret efter kolonne ${e.columnName} i stigende r\xe6kkef\xf8lge`,
        columnSize: (e)=>`${e.value} pixels`,
        descending: "faldende",
        descendingSort: (e)=>`sorteret efter kolonne ${e.columnName} i faldende r\xe6kkef\xf8lge`,
        resizerDescription: `Tryk p\xe5 Enter for at \xe6ndre st\xf8rrelse`,
        select: `V\xe6lg`,
        selectAll: `V\xe6lg alle`,
        sortable: "sorterbar kolonne",
        collapse: "Skjul",
        expand: "Udvid"
    },
    "@react-aria/steplist": {
        steplist: "Trinliste"
    },
    "@react-aria/spinbutton": {
        Empty: "Tom"
    },
    "@react-aria/searchfield": {
        "Clear search": `Ryd s\xf8gning`
    },
    "@react-aria/overlays": {
        dismiss: "Luk"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Reducer ${e.fieldLabel}`,
        increase: (e)=>`\xd8g ${e.fieldLabel}`,
        numberField: "Talfelt"
    },
    "@react-aria/menu": {
        longPressMessage: `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `r\xe6kke har handling`,
        hasLinkAnnouncement: (e)=>`r\xe6kke har link: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} ikke valgt.`,
        longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
        select: `V\xe6lg`,
        selectedAll: "Alle elementer valgt.",
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": "Ingen elementer valgt",
                one: ()=>`${t.number(e.count)} element valgt`,
                other: ()=>`${t.number(e.count)} elementer valgt`
            })}.`,
        selectedItem: (e)=>`${e.item} valgt.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Tryk p\xe5 Enter for at starte med at tr\xe6kke.`,
        dragDescriptionKeyboardAlt: `Tryk p\xe5 Alt + Enter for at starte med at tr\xe6kke.`,
        dragDescriptionLongPress: `Tryk l\xe6nge for at starte med at tr\xe6kke.`,
        dragDescriptionTouch: `Dobbelttryk for at starte med at tr\xe6kke.`,
        dragDescriptionVirtual: `Klik for at starte med at tr\xe6kke.`,
        dragItem: (e)=>`Tr\xe6k ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Tr\xe6k ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} valgt element`,
                other: ()=>`${t.number(e.count)} valgte elementer`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Tryk p\xe5 Enter for at tr\xe6kke ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} valgte element`,
                other: ()=>`${t.number(e.count)} valgte elementer`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Tryk p\xe5 Alt + Enter for at tr\xe6kke ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} valgte element`,
                other: ()=>`${t.number(e.count)} valgte elementer`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Tryk l\xe6nge for at tr\xe6kke ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} valgte element`,
                other: ()=>`${t.number(e.count)} valgte elementer`
            })}.`,
        dragStartedKeyboard: `Startet med at tr\xe6kke. Tryk p\xe5 Tab for at g\xe5 til et slip-m\xe5l, tryk derefter p\xe5 Enter for at slippe, eller tryk p\xe5 Escape for at annullere.`,
        dragStartedTouch: `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og dobbelttryk derefter for at slippe.`,
        dragStartedVirtual: `Startet med at tr\xe6kke. G\xe5 til et slip-m\xe5l, og klik eller tryk derefter p\xe5 enter for at slippe.`,
        dropCanceled: "Slip annulleret.",
        dropComplete: `Slip fuldf\xf8rt.`,
        dropDescriptionKeyboard: `Tryk p\xe5 Enter for at slippe. Tryk p\xe5 Escape for at annullere tr\xe6kning.`,
        dropDescriptionTouch: "Dobbelttryk for at slippe.",
        dropDescriptionVirtual: "Klik for at slippe.",
        dropIndicator: "slip-indikator",
        dropOnItem: (e)=>`Slip p\xe5 ${e.itemText}`,
        dropOnRoot: `Slip p\xe5`,
        endDragKeyboard: `Tr\xe6kning. Tryk p\xe5 enter for at annullere tr\xe6k.`,
        endDragTouch: `Tr\xe6kning. Dobbelttryk for at annullere tr\xe6k.`,
        endDragVirtual: `Tr\xe6kning. Klik for at annullere tr\xe6kning.`,
        insertAfter: (e)=>`Inds\xe6t efter ${e.itemText}`,
        insertBefore: (e)=>`Inds\xe6t f\xf8r ${e.itemText}`,
        insertBetween: (e)=>`Inds\xe6t mellem ${e.beforeItemText} og ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: "Kalender",
        day: "dag",
        dayPeriod: "AM/PM",
        endDate: "Slutdato",
        era: `\xe6ra`,
        hour: "time",
        minute: "minut",
        month: `m\xe5ned`,
        second: "sekund",
        selectedDateDescription: (e)=>`Valgt dato: ${e.date}`,
        selectedRangeDescription: (e)=>`Valgt interval: ${e.startDate} til ${e.endDate}`,
        selectedTimeDescription: (e)=>`Valgt tidspunkt: ${e.time}`,
        startDate: "Startdato",
        timeZoneName: "tidszone",
        weekday: "ugedag",
        year: `\xe5r`
    },
    "@react-aria/combobox": {
        buttonLabel: "Vis forslag",
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,
                other: ()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`
            })}.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} mulighed`,
                        other: ()=>`${t.number(e.groupCount)} muligheder`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: ", valgt",
                other: ""
            }, e.isSelected)}`,
        listboxLabel: "Forslag",
        selectedAnnouncement: (e)=>`${e.optionText}, valgt`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Farvev\xe6lger`,
        colorSwatch: `farvepr\xf8ve`,
        transparent: "gennemsigtig",
        twoDimensionalSlider: "2D-skyder"
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} til ${e.endDate}`,
        dateSelected: (e)=>`${e.date} valgt`,
        finishRangeSelectionPrompt: `Klik for at fuldf\xf8re valg af datoomr\xe5de`,
        maximumDate: "Sidste ledige dato",
        minimumDate: `F\xf8rste ledige dato`,
        next: `N\xe6ste`,
        previous: "Forrige",
        selectedDateDescription: (e)=>`Valgt dato: ${e.date}`,
        selectedRangeDescription: (e)=>`Valgt interval: ${e.dateRange}`,
        startRangeSelectionPrompt: `Klik for at starte valg af datoomr\xe5de`,
        todayDate: (e)=>`I dag, ${e.date}`,
        todayDateSelected: (e)=>`I dag, ${e.date} valgt`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Br\xf8dkrummer`
    },
    "@react-aria/autocomplete": {
        collectionLabel: "Forslag"
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,
        rangeReversed: `Startdatoen skal v\xe6re f\xf8r slutdatoen.`,
        rangeUnderflow: (e)=>`V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,
        unavailableDate: `Den valgte dato er ikke tilg\xe6ngelig.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: "sort",
        blue: `Bl\xe5`,
        "blue purple": `bl\xe5lilla`,
        brightness: "Lysstyrke",
        brown: "brun",
        "brown yellow": "brungul",
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: "cyan",
        "cyan blue": `cyan bl\xe5`,
        dark: `m\xf8rk`,
        gray: `gr\xe5`,
        grayish: `gr\xe5lig`,
        green: `Gr\xf8n`,
        "green cyan": `gr\xf8n cyan`,
        hue: "Tone",
        light: "lys",
        lightness: "Lyshed",
        magenta: "magenta",
        "magenta pink": "magenta pink",
        orange: "orange",
        "orange yellow": "orangegul",
        pale: "bleg",
        pink: `lyser\xf8d`,
        "pink red": `lyser\xf8dlig r\xf8d`,
        purple: "lilla",
        "purple magenta": "lilla magenta",
        red: `R\xf8d`,
        "red orange": `r\xf8dorange`,
        saturation: `Farvem\xe6tning`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} gennemsigtig`,
        "very dark": `meget m\xf8rk`,
        "very light": "meget lys",
        vibrant: "klar",
        white: "hvid",
        yellow: "gul",
        "yellow green": `gulgr\xf8n`
    },
    "react-aria-components": {
        colorSwatchPicker: `Farvepr\xf8ver`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `V\xe6lg et element`,
        tableResizer: `St\xf8rrelses\xe6ndring`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/cs-CZ.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: "Sbalit",
        expand: `Rozt\xe1hnout`
    },
    "@react-aria/toast": {
        close: `Zavř\xedt`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} ozn\xe1men\xed`,
                other: ()=>`${t.number(e.count)} ozn\xe1men\xed`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: "Odebrat",
        removeDescription: `Stisknut\xedm kl\xe1vesy Delete odeberete značku.`
    },
    "@react-aria/table": {
        ascending: `vzestupně`,
        ascendingSort: (e)=>`řazeno vzestupně podle sloupce ${e.columnName}`,
        columnSize: (e)=>`${e.value} pixelů`,
        descending: `sestupně`,
        descendingSort: (e)=>`řazeno sestupně podle sloupce ${e.columnName}`,
        resizerDescription: `Stisknut\xedm kl\xe1vesy Enter začnete měnit velikost`,
        select: "Vybrat",
        selectAll: `Vybrat vše`,
        sortable: `sloupec s možnost\xed řazen\xed`,
        collapse: "Sbalit",
        expand: `Rozt\xe1hnout`
    },
    "@react-aria/steplist": {
        steplist: `Seznam kroků`
    },
    "@react-aria/spinbutton": {
        Empty: `Pr\xe1zdn\xe9`
    },
    "@react-aria/searchfield": {
        "Clear search": `Vymazat hled\xe1n\xed`
    },
    "@react-aria/overlays": {
        dismiss: "Odstranit"
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Sn\xedžit ${e.fieldLabel}`,
        increase: (e)=>`Zv\xfdšit ${e.fieldLabel}`,
        numberField: `Č\xedseln\xe9 pole`
    },
    "@react-aria/menu": {
        longPressMessage: `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + šipka dolů otevřete nab\xeddku`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `ř\xe1dek obsahuje akci`,
        hasLinkAnnouncement: (e)=>`ř\xe1dek obsahuje odkaz: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`Položka ${e.item} nen\xed vybr\xe1na.`,
        longPressToSelect: `Dlouh\xfdm stisknut\xedm přejdete do režimu v\xfdběru.`,
        select: "Vybrat",
        selectedAll: `Vybr\xe1ny všechny položky.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `Nevybr\xe1ny ž\xe1dn\xe9 položky`,
                one: ()=>`Vybr\xe1na ${t.number(e.count)} položka`,
                other: ()=>`Vybr\xe1no ${t.number(e.count)} položek`
            })}.`,
        selectedItem: (e)=>`Vybr\xe1na položka ${e.item}.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Stisknut\xedm kl\xe1vesy Enter začnete s přetahov\xe1n\xedm.`,
        dragDescriptionKeyboardAlt: `Stisknut\xedm Alt + Enter zah\xe1j\xedte přetahov\xe1n\xed.`,
        dragDescriptionLongPress: `Dlouh\xfdm stisknut\xedm zah\xe1j\xedte přetahov\xe1n\xed.`,
        dragDescriptionTouch: `Poklep\xe1n\xedm začnete s přetahov\xe1n\xedm.`,
        dragDescriptionVirtual: `Kliknut\xedm začnete s přetahov\xe1n\xedm.`,
        dragItem: (e)=>`Přet\xe1hnout ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Přet\xe1hnout ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} vybranou položku`,
                few: ()=>`${t.number(e.count)} vybran\xe9 položky`,
                other: ()=>`${t.number(e.count)} vybran\xfdch položek`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Stisknut\xedm kl\xe1vesy Enter přet\xe1hněte ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} vybranou položku`,
                other: ()=>`${t.number(e.count)} vybran\xe9 položky`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Stisknut\xedm Alt + Enter přet\xe1hněte ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} vybranou položku`,
                other: ()=>`${t.number(e.count)} vybran\xe9 položky`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Dlouh\xfdm stisknut\xedm přet\xe1hnete ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} vybranou položku`,
                other: ()=>`${t.number(e.count)} vybran\xe9 položky`
            })}.`,
        dragStartedKeyboard: `Začněte s přetahov\xe1n\xedm. Po stisknut\xed kl\xe1vesy Tab najděte požadovan\xfd c\xedl a stisknut\xedm kl\xe1vesy Enter přetažen\xed dokončete nebo stisknut\xedm kl\xe1vesy Esc akci zrušte.`,
        dragStartedTouch: `Začněte s přetahov\xe1n\xedm. Najděte požadovan\xfd c\xedl a poklep\xe1n\xedm přetažen\xed dokončete.`,
        dragStartedVirtual: `Začněte s přetahov\xe1n\xedm. Najděte požadovan\xfd c\xedl a kliknut\xedm nebo stisknut\xedm kl\xe1vesy Enter přetažen\xed dokončete.`,
        dropCanceled: `Přetažen\xed bylo zrušeno.`,
        dropComplete: `Přetažen\xed bylo dokončeno.`,
        dropDescriptionKeyboard: `Stisknut\xedm kl\xe1vesy Enter přetažen\xed dokončete nebo stisknut\xedm kl\xe1vesy Esc akci zrušte.`,
        dropDescriptionTouch: `Poklep\xe1n\xedm přetažen\xed dokončete.`,
        dropDescriptionVirtual: `Kliknut\xedm objekt přet\xe1hněte.`,
        dropIndicator: `indik\xe1tor přetažen\xed`,
        dropOnItem: (e)=>`Přet\xe1hnout na ${e.itemText}`,
        dropOnRoot: `Přet\xe1hnout na`,
        endDragKeyboard: `Prob\xedh\xe1 přetahov\xe1n\xed. Stisknut\xedm kl\xe1vesy Enter přetažen\xed zruš\xedte.`,
        endDragTouch: `Prob\xedh\xe1 přetahov\xe1n\xed. Poklep\xe1n\xedm přetažen\xed zruš\xedte.`,
        endDragVirtual: `Prob\xedh\xe1 přetahov\xe1n\xed. Kliknut\xedm přetažen\xed zruš\xedte.`,
        insertAfter: (e)=>`Vložit za ${e.itemText}`,
        insertBefore: (e)=>`Vložit před ${e.itemText}`,
        insertBetween: (e)=>`Vložit mezi ${e.beforeItemText} a ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Kalend\xe1ř`,
        day: "den",
        dayPeriod: `č\xe1st dne`,
        endDate: `Konečn\xe9 datum`,
        era: `letopočet`,
        hour: "hodina",
        minute: "minuta",
        month: `měs\xedc`,
        second: "sekunda",
        selectedDateDescription: (e)=>`Vybran\xe9 datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Vybran\xe9 obdob\xed: ${e.startDate} až ${e.endDate}`,
        selectedTimeDescription: (e)=>`Vybran\xfd čas: ${e.time}`,
        startDate: `Poč\xe1tečn\xed datum`,
        timeZoneName: `časov\xe9 p\xe1smo`,
        weekday: `den v t\xfddnu`,
        year: "rok"
    },
    "@react-aria/combobox": {
        buttonLabel: `Zobrazit doporučen\xed`,
        countAnnouncement: (e, t)=>`K dispozici ${t.plural(e.optionCount, {
                one: ()=>`je ${t.number(e.optionCount)} možnost`,
                other: ()=>`jsou/je ${t.number(e.optionCount)} možnosti/-\xed`
            })}.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Zadan\xe1 skupina „${e.groupTitle}“ ${t.plural(e.groupCount, {
                        one: ()=>`s ${t.number(e.groupCount)} možnost\xed`,
                        other: ()=>`se ${t.number(e.groupCount)} možnostmi`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: ` (vybr\xe1no)`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `N\xe1vrhy`,
        selectedAnnouncement: (e)=>`${e.optionText}, vybr\xe1no`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `V\xfdběr barvy`,
        colorSwatch: `barevn\xfd vzorek`,
        transparent: `průhledn\xfd`,
        twoDimensionalSlider: `2D posuvn\xedk`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} až ${e.endDate}`,
        dateSelected: (e)=>`Vybr\xe1no ${e.date}`,
        finishRangeSelectionPrompt: `Kliknut\xedm dokonč\xedte v\xfdběr rozsahu dat`,
        maximumDate: `Posledn\xed dostupn\xe9 datum`,
        minimumDate: `Prvn\xed dostupn\xe9 datum`,
        next: `Dalš\xed`,
        previous: `Předchoz\xed`,
        selectedDateDescription: (e)=>`Vybran\xe9 datum: ${e.date}`,
        selectedRangeDescription: (e)=>`Vybran\xe9 obdob\xed: ${e.dateRange}`,
        startRangeSelectionPrompt: `Kliknut\xedm zah\xe1j\xedte v\xfdběr rozsahu dat`,
        todayDate: (e)=>`Dnes, ${e.date}`,
        todayDateSelected: (e)=>`Dnes, vybr\xe1no ${e.date}`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: "Popis cesty"
    },
    "@react-aria/autocomplete": {
        collectionLabel: `N\xe1vrhy`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Hodnota mus\xed b\xfdt ${e.maxValue} nebo dř\xedvějš\xed.`,
        rangeReversed: `Datum zah\xe1jen\xed mus\xed předch\xe1zet datu ukončen\xed.`,
        rangeUnderflow: (e)=>`Hodnota mus\xed b\xfdt ${e.minValue} nebo pozdějš\xed.`,
        unavailableDate: `Vybran\xe9 datum nen\xed k dispozici.`
    },
    "@react-stately/color": {
        alpha: "Alfa",
        black: `čern\xe1`,
        blue: `Modr\xe1`,
        "blue purple": `modrofialov\xe1`,
        brightness: "Jas",
        brown: `hněd\xe1`,
        "brown yellow": `hnědožlut\xe1`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `tyrkysov\xe1`,
        "cyan blue": `tyrkysovomodr\xe1`,
        dark: `tmav\xe1`,
        gray: `šed\xe1`,
        grayish: `našedl\xe1`,
        green: `Zelen\xe1`,
        "green cyan": `zelenotyrkysov\xe1`,
        hue: `Odst\xedn`,
        light: `světl\xe1`,
        lightness: `Světlost`,
        magenta: `purpurov\xe1`,
        "magenta pink": `purpurově růžov\xe1`,
        orange: `oranžov\xe1`,
        "orange yellow": `oranžovožlut\xe1`,
        pale: `bled\xe1`,
        pink: `růžov\xe1`,
        "pink red": `růžovočerven\xe1`,
        purple: `fialov\xe1`,
        "purple magenta": `fialově purpurov\xe1`,
        red: `Červen\xe1`,
        "red orange": `červenooranžov\xe1`,
        saturation: "Sytost",
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} průhledn\xe9`,
        "very dark": `velmi tmav\xe1`,
        "very light": `velmi světl\xe1`,
        vibrant: `z\xe1řiv\xe1`,
        white: `b\xedl\xe1`,
        yellow: `žlut\xe1`,
        "yellow green": `žlutozelen\xe1`
    },
    "react-aria-components": {
        colorSwatchPicker: "Vzorky barev",
        dropzoneLabel: `M\xedsto pro přetažen\xed`,
        selectPlaceholder: `Vyberte položku`,
        tableResizer: `Změna velikosti`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/bg-BG.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `Свиване`,
        expand: `Разширяване`
    },
    "@react-aria/toast": {
        close: `Затвори`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} известие`,
                other: ()=>`${t.number(e.count)} известия`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `Премахване`,
        removeDescription: `Натиснете Delete, за да премахнете маркера.`
    },
    "@react-aria/table": {
        ascending: `възходящ`,
        ascendingSort: (e)=>`сортирано по колона ${e.columnName} във възходящ ред`,
        columnSize: (e)=>`${e.value} пиксела`,
        descending: `низходящ`,
        descendingSort: (e)=>`сортирано по колона ${e.columnName} в низходящ ред`,
        resizerDescription: `Натиснете „Enter“, за да започнете да преоразмерявате`,
        select: `Изберете`,
        selectAll: `Изберете всичко`,
        sortable: `сортираща колона`,
        collapse: `Свиване`,
        expand: `Разширяване`
    },
    "@react-aria/steplist": {
        steplist: `Списък със стъпки`
    },
    "@react-aria/spinbutton": {
        Empty: `Изпразни`
    },
    "@react-aria/searchfield": {
        "Clear search": `Изчистване на търсене`
    },
    "@react-aria/overlays": {
        dismiss: `Отхвърляне`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`Намаляване ${e.fieldLabel}`,
        increase: (e)=>`Усилване ${e.fieldLabel}`,
        numberField: `Номер на полето`
    },
    "@react-aria/menu": {
        longPressMessage: `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `редът има действие`,
        hasLinkAnnouncement: (e)=>`редът има връзка: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} не е избран.`,
        longPressToSelect: `Натиснете и задръжте за да влезете в избирателен режим.`,
        select: `Изберете`,
        selectedAll: `Всички елементи са избрани.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `Няма избрани елементи`,
                one: ()=>`${t.number(e.count)} избран елемент`,
                other: ()=>`${t.number(e.count)} избрани елементи`
            })}.`,
        selectedItem: (e)=>`${e.item} избран.`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `Натиснете „Enter“, за да започнете да плъзгате.`,
        dragDescriptionKeyboardAlt: `Натиснете Alt + Enter, за да започнете да плъзгате.`,
        dragDescriptionLongPress: `Натиснете продължително, за да започнете да плъзгате.`,
        dragDescriptionTouch: `Натиснете двукратно, за да започнете да плъзгате.`,
        dragDescriptionVirtual: `Щракнете, за да започнете да плъзгате.`,
        dragItem: (e)=>`Плъзни ${e.itemText}`,
        dragSelectedItems: (e, t)=>`Плъзни ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} избран елемент`,
                other: ()=>`${t.number(e.count)} избрани елемента`
            })}`,
        dragSelectedKeyboard: (e, t)=>`Натиснете Enter, за да плъзнете ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} избран елемент`,
                other: ()=>`${t.number(e.count)} избрани елементи`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`Натиснете Alt и Enter, за да плъзнете ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} избран елемент`,
                other: ()=>`${t.number(e.count)} избрани елементи`
            })}.`,
        dragSelectedLongPress: (e, t)=>`Натиснете продължително, за да плъзнете ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} избран елемент`,
                other: ()=>`${t.number(e.count)} избрани елементи`
            })}.`,
        dragStartedKeyboard: `Започна плъзгане. Натиснете „Tab“, за да се придвижите до целта, след което натиснете „Enter“ за пускане или натиснете „Escape“ за отмяна.`,
        dragStartedTouch: `Започна плъзгане. Придвижете се до целта, след което натиснете двукратно, за да пуснете.`,
        dragStartedVirtual: `Започна плъзгане. Придвижете се до целта, след което щракнете или натиснете „Enter“ за пускане.`,
        dropCanceled: `Пускането е отменено.`,
        dropComplete: `Пускането е завършено.`,
        dropDescriptionKeyboard: `Натиснете „Enter“ за пускане. Натиснете „Escape“ за отмяна на плъзгането.`,
        dropDescriptionTouch: `Натиснете двукратно за пускане.`,
        dropDescriptionVirtual: `Щракнете за пускане.`,
        dropIndicator: `индикатор за пускане`,
        dropOnItem: (e)=>`Пусни върху ${e.itemText}`,
        dropOnRoot: `Пусни върху`,
        endDragKeyboard: `Плъзгане. Натиснете „Enter“ за отмяна на плъзгането.`,
        endDragTouch: `Плъзгане. Натиснете двукратно за отмяна на плъзгането.`,
        endDragVirtual: `Плъзгане. Щракнете за отмяна.`,
        insertAfter: (e)=>`Вмъкни след ${e.itemText}`,
        insertBefore: (e)=>`Вмъкни преди ${e.itemText}`,
        insertBetween: (e)=>`Вмъкни между ${e.beforeItemText} и ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `Календар`,
        day: `ден`,
        dayPeriod: `пр.об./сл.об.`,
        endDate: `Крайна дата`,
        era: `ера`,
        hour: `час`,
        minute: `минута`,
        month: `месец`,
        second: `секунда`,
        selectedDateDescription: (e)=>`Избрана дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Избран диапазон: ${e.startDate} до ${e.endDate}`,
        selectedTimeDescription: (e)=>`Избрано време: ${e.time}`,
        startDate: `Начална дата`,
        timeZoneName: `часова зона`,
        weekday: `ден от седмицата`,
        year: `година`
    },
    "@react-aria/combobox": {
        buttonLabel: `Покажи предложения`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} опция`,
                other: ()=>`${t.number(e.optionCount)} опции`
            })} на разположение.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`Въведена група ${e.groupTitle}, с ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} опция`,
                        other: ()=>`${t.number(e.groupCount)} опции`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, избрани`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `Предложения`,
        selectedAnnouncement: (e)=>`${e.optionText}, избрани`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `Средство за избиране на цвят`,
        colorSwatch: `цветна мостра`,
        transparent: `прозрачен`,
        twoDimensionalSlider: `2D плъзгач`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} до ${e.endDate}`,
        dateSelected: (e)=>`Избрано е ${e.date}`,
        finishRangeSelectionPrompt: `Натиснете, за да довършите избора на времеви интервал`,
        maximumDate: `Последна налична дата`,
        minimumDate: `Първа налична дата`,
        next: `Напред`,
        previous: `Назад`,
        selectedDateDescription: (e)=>`Избрана дата: ${e.date}`,
        selectedRangeDescription: (e)=>`Избран диапазон: ${e.dateRange}`,
        startRangeSelectionPrompt: `Натиснете, за да пристъпите към избора на времеви интервал`,
        todayDate: (e)=>`Днес, ${e.date}`,
        todayDateSelected: (e)=>`Днес, ${e.date} са избрани`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `Трохи хляб`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `Предложения`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`Стойността трябва да е ${e.maxValue} или по-ранна.`,
        rangeReversed: `Началната дата трябва да е преди крайната.`,
        rangeUnderflow: (e)=>`Стойността трябва да е ${e.minValue} или по-късно.`,
        unavailableDate: `Избраната дата не е налична.`
    },
    "@react-stately/color": {
        alpha: `Алфа`,
        black: `черно`,
        blue: `Синьо`,
        "blue purple": `синьо лилаво`,
        brightness: `Яркост`,
        brown: `кафяво`,
        "brown yellow": `кафяво жълто`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `циан`,
        "cyan blue": `циан синьо`,
        dark: `тъмно`,
        gray: `сиво`,
        grayish: `сивкав`,
        green: `Зелено`,
        "green cyan": `зелен циан`,
        hue: `Оттенък`,
        light: `светло`,
        lightness: `Лекота`,
        magenta: `магента`,
        "magenta pink": `магента розово`,
        orange: `оранжево`,
        "orange yellow": `оранжево жълто`,
        pale: `бледо`,
        pink: `розово`,
        "pink red": `розово червено`,
        purple: `лилаво`,
        "purple magenta": `лилаво магента`,
        red: `Червено`,
        "red orange": `червен портокал`,
        saturation: `Наситеност`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} прозрачен`,
        "very dark": `много тъмно`,
        "very light": `много светло`,
        vibrant: ` ярко`,
        white: `бяло`,
        yellow: `жълто`,
        "yellow green": `жълто зелен`
    },
    "react-aria-components": {
        colorSwatchPicker: `Цветови мостри`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `Изберете предмет`,
        tableResizer: `Преоразмерител`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ar-AE.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    "@react-aria/tree": {
        collapse: `طي`,
        expand: `تمديد`
    },
    "@react-aria/toast": {
        close: `إغلاق`,
        notifications: (e, t)=>`${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} إشعار`,
                other: ()=>`${t.number(e.count)} إشعارات`
            })}.`
    },
    "@react-aria/tag": {
        removeButtonLabel: `إزالة`,
        removeDescription: `اضغط على مفتاح DELETE لإزالة علامة.`
    },
    "@react-aria/table": {
        ascending: `تصاعدي`,
        ascendingSort: (e)=>`ترتيب حسب العمود ${e.columnName} بترتيب تصاعدي`,
        columnSize: (e)=>`${e.value} بالبكسل`,
        descending: `تنازلي`,
        descendingSort: (e)=>`ترتيب حسب العمود ${e.columnName} بترتيب تنازلي`,
        resizerDescription: `اضغط على مفتاح Enter لبدء تغيير الحجم`,
        select: `تحديد`,
        selectAll: `تحديد الكل`,
        sortable: `عمود قابل للترتيب`,
        collapse: `طي`,
        expand: `تمديد`
    },
    "@react-aria/steplist": {
        steplist: `قائمة الخطوات`
    },
    "@react-aria/spinbutton": {
        Empty: `فارغ`
    },
    "@react-aria/searchfield": {
        "Clear search": `مسح البحث`
    },
    "@react-aria/overlays": {
        dismiss: `تجاهل`
    },
    "@react-aria/numberfield": {
        decrease: (e)=>`خفض ${e.fieldLabel}`,
        increase: (e)=>`زيادة ${e.fieldLabel}`,
        numberField: `حقل رقمي`
    },
    "@react-aria/menu": {
        longPressMessage: `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`
    },
    "@react-aria/gridlist": {
        hasActionAnnouncement: `يحتوي الصف على إجراء`,
        hasLinkAnnouncement: (e)=>`يحتوي الصف على رابط: ${e.link}`
    },
    "@react-aria/grid": {
        deselectedItem: (e)=>`${e.item} غير المحدد`,
        longPressToSelect: `اضغط مطولًا للدخول إلى وضع التحديد.`,
        select: `تحديد`,
        selectedAll: `جميع العناصر المحددة.`,
        selectedCount: (e, t)=>`${t.plural(e.count, {
                "=0": `لم يتم تحديد عناصر`,
                one: ()=>`${t.number(e.count)} عنصر محدد`,
                other: ()=>`${t.number(e.count)} عنصر محدد`
            })}.`,
        selectedItem: (e)=>`${e.item} المحدد`
    },
    "@react-aria/dnd": {
        dragDescriptionKeyboard: `اضغط Enter لبدء السحب.`,
        dragDescriptionKeyboardAlt: `اضغط على Alt + Enter لبدء السحب.`,
        dragDescriptionLongPress: `اضغط باستمرار لبدء السحب.`,
        dragDescriptionTouch: `اضغط مرتين لبدء السحب.`,
        dragDescriptionVirtual: `انقر لبدء السحب.`,
        dragItem: (e)=>`اسحب ${e.itemText}`,
        dragSelectedItems: (e, t)=>`اسحب ${t.plural(e.count, {
                one: ()=>`${t.number(e.count)} عنصر محدد`,
                other: ()=>`${t.number(e.count)} عناصر محددة`
            })}`,
        dragSelectedKeyboard: (e, t)=>`اضغط على Enter للسحب ${t.plural(e.count, {
                one: `عدد العناصر المختارة`,
                other: `عدد العناصر المختارة`
            })}.`,
        dragSelectedKeyboardAlt: (e, t)=>`اضغط على مفتاحي Alt + Enter للسحب ${t.plural(e.count, {
                one: `عدد العناصر المختارة`,
                other: `عدد العناصر المختارة`
            })}.`,
        dragSelectedLongPress: (e, t)=>`اضغط باستمرار للسحب ${t.plural(e.count, {
                one: `عدد العناصر المختارة`,
                other: `عدد العناصر المختارة`
            })}.`,
        dragStartedKeyboard: `بدأ السحب. اضغط Tab للانتقال إلى موضع الإفلات، ثم اضغط Enter للإفلات، أو اضغط Escape للإلغاء.`,
        dragStartedTouch: `بدأ السحب. انتقل إلى موضع الإفلات، ثم اضغط مرتين للإفلات.`,
        dragStartedVirtual: `بدأ السحب. انتقل إلى مكان الإفلات، ثم انقر أو اضغط Enter للإفلات.`,
        dropCanceled: `تم إلغاء الإفلات.`,
        dropComplete: `اكتمل الإفلات.`,
        dropDescriptionKeyboard: `اضغط Enter للإفلات. اضغط Escape لإلغاء السحب.`,
        dropDescriptionTouch: `اضغط مرتين للإفلات.`,
        dropDescriptionVirtual: `انقر للإفلات.`,
        dropIndicator: `مؤشر الإفلات`,
        dropOnItem: (e)=>`إفلات ${e.itemText}`,
        dropOnRoot: `الإفلات`,
        endDragKeyboard: `السحب. اضغط Enter لإلغاء السحب.`,
        endDragTouch: `السحب. اضغط مرتين لإلغاء السحب.`,
        endDragVirtual: `السحب. انقر لإلغاء السحب.`,
        insertAfter: (e)=>`أدخل بعد ${e.itemText}`,
        insertBefore: (e)=>`أدخل قبل ${e.itemText}`,
        insertBetween: (e)=>`أدخل بين ${e.beforeItemText} و ${e.afterItemText}`
    },
    "@react-aria/datepicker": {
        calendar: `التقويم`,
        day: `يوم`,
        dayPeriod: `ص/م`,
        endDate: `تاريخ الانتهاء`,
        era: `العصر`,
        hour: `الساعات`,
        minute: `الدقائق`,
        month: `الشهر`,
        second: `الثواني`,
        selectedDateDescription: (e)=>`تاريخ محدد: ${e.date}`,
        selectedRangeDescription: (e)=>`المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,
        selectedTimeDescription: (e)=>`الوقت المحدد: ${e.time}`,
        startDate: `تاريخ البدء`,
        timeZoneName: `التوقيت`,
        weekday: `اليوم`,
        year: `السنة`
    },
    "@react-aria/combobox": {
        buttonLabel: `عرض المقترحات`,
        countAnnouncement: (e, t)=>`${t.plural(e.optionCount, {
                one: ()=>`${t.number(e.optionCount)} خيار`,
                other: ()=>`${t.number(e.optionCount)} خيارات`
            })} متاحة.`,
        focusAnnouncement: (e, t)=>`${t.select({
                true: ()=>`المجموعة المدخلة ${e.groupTitle}, مع ${t.plural(e.groupCount, {
                        one: ()=>`${t.number(e.groupCount)} خيار`,
                        other: ()=>`${t.number(e.groupCount)} خيارات`
                    })}. `,
                other: ""
            }, e.isGroupChange)}${e.optionText}${t.select({
                true: `, محدد`,
                other: ""
            }, e.isSelected)}`,
        listboxLabel: `مقترحات`,
        selectedAnnouncement: (e)=>`${e.optionText}، محدد`
    },
    "@react-aria/color": {
        colorInputLabel: (e)=>`${e.label}, ${e.channelLabel}`,
        colorNameAndValue: (e)=>`${e.name}: ${e.value}`,
        colorPicker: `أداة انتقاء اللون`,
        colorSwatch: `تغيير الألوان`,
        transparent: `شفاف`,
        twoDimensionalSlider: `مُنزلق 2D`
    },
    "@react-aria/calendar": {
        dateRange: (e)=>`${e.startDate} إلى ${e.endDate}`,
        dateSelected: (e)=>`${e.date} المحدد`,
        finishRangeSelectionPrompt: `انقر لإنهاء عملية تحديد نطاق التاريخ`,
        maximumDate: `آخر تاريخ متاح`,
        minimumDate: `أول تاريخ متاح`,
        next: `التالي`,
        previous: `السابق`,
        selectedDateDescription: (e)=>`تاريخ محدد: ${e.date}`,
        selectedRangeDescription: (e)=>`المدى الزمني المحدد: ${e.dateRange}`,
        startRangeSelectionPrompt: `انقر لبدء عملية تحديد نطاق التاريخ`,
        todayDate: (e)=>`اليوم، ${e.date}`,
        todayDateSelected: (e)=>`اليوم، ${e.date} محدد`
    },
    "@react-aria/breadcrumbs": {
        breadcrumbs: `عناصر الواجهة`
    },
    "@react-aria/autocomplete": {
        collectionLabel: `مقترحات`
    },
    "@react-stately/datepicker": {
        rangeOverflow: (e)=>`يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,
        rangeReversed: `تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.`,
        rangeUnderflow: (e)=>`يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,
        unavailableDate: `البيانات المحددة غير متاحة.`
    },
    "@react-stately/color": {
        alpha: `ألفا`,
        black: `أسود`,
        blue: `أزرق`,
        "blue purple": `أرجواني مزرق`,
        brightness: `السطوع`,
        brown: `بني`,
        "brown yellow": `أصفر بني`,
        colorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}`,
        cyan: `سماوي`,
        "cyan blue": `أزرق سماوي`,
        dark: `داكن`,
        gray: `رمادي`,
        grayish: `مائل للرمادي`,
        green: `أخضر`,
        "green cyan": `سماوي مخضر`,
        hue: `درجة اللون`,
        light: `فاتح`,
        lightness: `الإضاءة`,
        magenta: `أرجواني`,
        "magenta pink": `أرجواني وردي`,
        orange: `برتقالي`,
        "orange yellow": `أصفر برتقالي`,
        pale: `باهت`,
        pink: `وردي`,
        "pink red": `أحمر وردي`,
        purple: `أرجواني`,
        "purple magenta": `بنفسجي`,
        red: `أحمر`,
        "red orange": `برتقالي محمر`,
        saturation: `التشبع`,
        transparentColorName: (e)=>`${e.lightness} ${e.chroma} ${e.hue}, ${e.percentTransparent} شفاف`,
        "very dark": `داكن جدًا`,
        "very light": `فاتح جدًا`,
        vibrant: `ساطع`,
        white: `أبيض`,
        yellow: `أصفر`,
        "yellow green": `أخضر مصفر`
    },
    "react-aria-components": {
        colorSwatchPicker: `تغييرات الألوان`,
        dropzoneLabel: "DropZone",
        selectPlaceholder: `حدد عنصرًا`,
        tableResizer: `أداة تغيير الحجم`
    }
};
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalizedStringProvider",
    ()=>LocalizedStringProvider,
    "createLocalizedStringDictionary",
    ()=>createLocalizedStringDictionary,
    "dictionary",
    ()=>dictionary,
    "getLocalizationScript",
    ()=>getLocalizationScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/i18n/server.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f40$internationalized$2f$string$2f$dist$2f$private$2f$LocalizedStringDictionary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$zh$2d$TW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/zh-TW.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/zh-CN.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$uk$2d$UA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/uk-UA.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$tr$2d$TR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/tr-TR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sv$2d$SE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sv-SE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sr$2d$SP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sr-SP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sl$2d$SI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sl-SI.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sk$2d$SK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/sk-SK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ru$2d$RU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ru-RU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ro$2d$RO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ro-RO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pt$2d$PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pt-PT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pt$2d$BR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pt-BR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pl$2d$PL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/pl-PL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$nl$2d$NL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/nl-NL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$nb$2d$NO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/nb-NO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$lv$2d$LV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/lv-LV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$lt$2d$LT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/lt-LT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ko$2d$KR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ko-KR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ja$2d$JP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ja-JP.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$it$2d$IT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/it-IT.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$hu$2d$HU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/hu-HU.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$hr$2d$HR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/hr-HR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$he$2d$IL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/he-IL.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$fr$2d$FR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/fr-FR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$fi$2d$FI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/fi-FI.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$et$2d$EE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/et-EE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$es$2d$ES$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/es-ES.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$en$2d$US$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/en-US.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$el$2d$GR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/el-GR.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$de$2d$DE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/de-DE.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$da$2d$DK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/da-DK.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$cs$2d$CZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/cs-CZ.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$bg$2d$BG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/bg-BG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ar$2d$AE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria-components/i18n/ar-AE.mjs [app-rsc] (ecmascript)");
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
let dictionary = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f40$internationalized$2f$string$2f$dist$2f$private$2f$LocalizedStringDictionary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalizedStringDictionary"]({
    "zh-TW": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$zh$2d$TW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "zh-CN": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$zh$2d$CN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "uk-UA": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$uk$2d$UA$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "tr-TR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$tr$2d$TR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sv-SE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sv$2d$SE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sr-SP": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sr$2d$SP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sl-SI": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sl$2d$SI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "sk-SK": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$sk$2d$SK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ru-RU": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ru$2d$RU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ro-RO": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ro$2d$RO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pt-PT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pt$2d$PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pt-BR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pt$2d$BR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "pl-PL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$pl$2d$PL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "nl-NL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$nl$2d$NL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "nb-NO": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$nb$2d$NO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "lv-LV": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$lv$2d$LV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "lt-LT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$lt$2d$LT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ko-KR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ko$2d$KR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ja-JP": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ja$2d$JP$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "it-IT": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$it$2d$IT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "hu-HU": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$hu$2d$HU$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "hr-HR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$hr$2d$HR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "he-IL": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$he$2d$IL$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "fr-FR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$fr$2d$FR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "fi-FI": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$fi$2d$FI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "et-EE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$et$2d$EE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "es-ES": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$es$2d$ES$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "en-US": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$en$2d$US$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "el-GR": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$el$2d$GR$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "de-DE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$de$2d$DE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "da-DK": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$da$2d$DK$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "cs-CZ": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$cs$2d$CZ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "bg-BG": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$bg$2d$BG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "ar-AE": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2d$components$2f$i18n$2f$ar$2d$AE$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
function LocalizedStringProvider({ locale, dictionary: dict = dictionary, nonce }) {
    let strings = dict.getStringsForLocale(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PackageLocalizationProvider"], {
        locale,
        strings,
        nonce
    });
}
function getLocalizationScript(locale, dict = dictionary) {
    let strings = dict.getStringsForLocale(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$i18n$2f$server$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPackageLocalizationScript"])(locale, strings);
}
let deps = {};
function createLocalizedStringDictionary(packages) {
    let strings = {};
    let seen = new Set();
    let addPkg = (pkg)=>{
        if (seen.has(pkg)) {
            return;
        }
        seen.add(pkg);
        for(let lang in dictionary.strings){
            strings[lang] ??= {};
            strings[lang][pkg] = dictionary.strings[lang][pkg];
        }
        for (let dep of deps[pkg] || []){
            addPkg(dep);
        }
    };
    addPkg('react-aria-components');
    for (let pkg of packages){
        addPkg(pkg);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f40$internationalized$2f$string$2f$dist$2f$private$2f$LocalizedStringDictionary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LocalizedStringDictionary"](strings);
}
;
}),
];

//# sourceMappingURL=0ahy_react-aria-components_0cggvm6._.js.map