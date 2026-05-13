(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/chain.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chain",
    ()=>$a4e76a5424781910$export$e08e3b67e392101e
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $a4e76a5424781910$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLayoutEffect",
    ()=>$c4867b2f328c2698$export$e5c5a5f917a5871c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useLayoutEffect : ()=>{};
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useValueEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useValueEffect",
    ()=>$1a716630a9e3a599$export$14d238f342723f25
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1a716630a9e3a599$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    // Keep an up to date copy of value in a ref so we can access the current value in the generator.
    // This allows us to maintain a stable queue function.
    let currValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (currValue.current === newValue.value) nextRef.current();
        else setValue(newValue.value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        currValue.current = value;
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef.current();
    });
    let queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((fn)=>{
        effect.current = fn(currValue.current);
        nextRef.current();
    }, [
        nextRef
    ]);
    return [
        value,
        queue
    ];
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useId.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "idsUpdaterMap",
    ()=>$390e54f620492c70$export$d41a04c74483c6ef,
    "mergeIds",
    ()=>$390e54f620492c70$export$cd8c9cb68f842629,
    "useId",
    ()=>$390e54f620492c70$export$f680877a34711e37,
    "useSlotId",
    ()=>$390e54f620492c70$export$b4cc09c592e8fdb8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$ssr$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/ssr/SSRProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useValueEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $390e54f620492c70$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $390e54f620492c70$export$d41a04c74483c6ef = new Map();
// This allows us to clean up the idsUpdaterMap when the id is no longer used.
// Map is a strong reference, so unused ids wouldn't be cleaned up otherwise.
// This can happen in suspended components where mount/unmount is not called.
let $390e54f620492c70$var$registry;
if (typeof FinalizationRegistry !== 'undefined') $390e54f620492c70$var$registry = new FinalizationRegistry((heldValue)=>{
    $390e54f620492c70$export$d41a04c74483c6ef.delete(heldValue);
});
function $390e54f620492c70$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultId);
    let nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$ssr$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRSafeId"])(value);
    let cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.register(cleanupRef, res);
    if ($390e54f620492c70$var$canUseDOM) {
        const cacheIdRef = $390e54f620492c70$export$d41a04c74483c6ef.get(res);
        if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
        else $390e54f620492c70$export$d41a04c74483c6ef.set(res, [
            nextId
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let r = res;
        return ()=>{
            // In Suspense, the cleanup function may be not called
            // when it is though, also remove it from the finalization registry.
            if ($390e54f620492c70$var$registry) $390e54f620492c70$var$registry.unregister(cleanupRef);
            $390e54f620492c70$export$d41a04c74483c6ef.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is always cleaned up.
    // eslint-disable-next-line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) setValue(newId);
        return ()=>{
            if (newId) nextId.current = null;
        };
    });
    return res;
}
function $390e54f620492c70$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdsA = $390e54f620492c70$export$d41a04c74483c6ef.get(idA);
    if (setIdsA) {
        setIdsA.forEach((ref)=>ref.current = idB);
        return idB;
    }
    let setIdsB = $390e54f620492c70$export$d41a04c74483c6ef.get(idB);
    if (setIdsB) {
        setIdsB.forEach((ref)=>ref.current = idA);
        return idA;
    }
    return idB;
}
function $390e54f620492c70$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $390e54f620492c70$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueEffect"])(id);
    let updateId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeRefs",
    ()=>$4064df0d6f9620e1$export$c9058316764c140e
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $4064df0d6f9620e1$export$c9058316764c140e(...refs) {
    if (refs.length === 1 && refs[0]) return refs[0];
    return (value)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = $4064df0d6f9620e1$var$setRef(ref, value);
            hasCleanup ||= typeof cleanup == 'function';
            return cleanup;
        });
        if (hasCleanup) return ()=>{
            cleanups.forEach((cleanup, i)=>{
                if (typeof cleanup === 'function') cleanup();
                else $4064df0d6f9620e1$var$setRef(refs[i], null);
            });
        };
    };
}
function $4064df0d6f9620e1$var$setRef(ref, value) {
    if (typeof ref === 'function') return ref(value);
    else if (ref != null) ref.current = value;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeProps",
    ()=>$bbaa08b3cd72f041$export$9d1611c77c2fe928
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/mergeRefs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $bbaa08b3cd72f041$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIds"])(a, b);
            else if (key === 'ref' && a && b) result.ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$mergeRefs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useObjectRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useObjectRef",
    ()=>$03e8ab2d84d7657a$export$4338b53315abf666
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $03e8ab2d84d7657a$export$4338b53315abf666(ref) {
    const objRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const refEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((instance)=>{
        if (typeof ref === 'function') {
            const refCallback = ref;
            const refCleanup = refCallback(instance);
            return ()=>{
                if (typeof refCleanup === 'function') refCleanup();
                else refCallback(null);
            };
        } else if (ref) {
            ref.current = instance;
            return ()=>{
                ref.current = null;
            };
        }
    }, [
        ref
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (cleanupRef.current) {
                    cleanupRef.current();
                    cleanupRef.current = undefined;
                }
                if (value != null) cleanupRef.current = refEffect(value);
            }
        }), [
        refEffect
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/filterDOMProps.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDOMProps",
    ()=>$8e9d2fae0ecb9001$export$457c3d6518dd4c6f
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $8e9d2fae0ecb9001$var$DOMPropNames = new Set([
    'id'
]);
const $8e9d2fae0ecb9001$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $8e9d2fae0ecb9001$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $8e9d2fae0ecb9001$var$globalAttrs = new Set([
    'dir',
    'lang',
    'hidden',
    'inert',
    'translate'
]);
const $8e9d2fae0ecb9001$var$globalEvents = new Set([
    'onClick',
    'onAuxClick',
    'onContextMenu',
    'onDoubleClick',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onPointerDown',
    'onPointerMove',
    'onPointerUp',
    'onPointerCancel',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerOver',
    'onPointerOut',
    'onGotPointerCapture',
    'onLostPointerCapture',
    'onScroll',
    'onWheel',
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    'onTransitionCancel',
    'onTransitionEnd',
    'onTransitionRun',
    'onTransitionStart'
]);
const $8e9d2fae0ecb9001$var$propRe = /^(data-.*)$/;
function $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, global: global, events: events = global, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($8e9d2fae0ecb9001$var$DOMPropNames.has(prop) || labelable && $8e9d2fae0ecb9001$var$labelablePropNames.has(prop) || isLink && $8e9d2fae0ecb9001$var$linkPropNames.has(prop) || global && $8e9d2fae0ecb9001$var$globalAttrs.has(prop) || events && ($8e9d2fae0ecb9001$var$globalEvents.has(prop) || prop.endsWith('Capture') && $8e9d2fae0ecb9001$var$globalEvents.has(prop.slice(0, -7))) || propNames?.has(prop) || $8e9d2fae0ecb9001$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLabels.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLabels",
    ()=>$e8ac3c3f5d4bae7f$export$d6875122194c7b44
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useId.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e8ac3c3f5d4bae7f$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusWithoutScrolling",
    ()=>$1969ac565cfec8d0$export$de79e2c695e052f3
]);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
    if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
        element.focus();
        $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
    }
}
let $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
    if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
        $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch  {
        // Ignore
        }
    }
    return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/domHelpers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOwnerDocument",
    ()=>$d447af545b77c9f1$export$b204af158042fbac,
    "getOwnerWindow",
    ()=>$d447af545b77c9f1$export$f21a1ffae260145a,
    "isShadowRoot",
    ()=>$d447af545b77c9f1$export$af51f0f06c0f328a
]);
const $d447af545b77c9f1$export$b204af158042fbac = (el)=>{
    return el?.ownerDocument ?? document;
};
const $d447af545b77c9f1$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $d447af545b77c9f1$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $d447af545b77c9f1$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
    return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActiveElement",
    ()=>$23f2114a1b82827e$export$cd4e5573fbe2b576,
    "getEventTarget",
    ()=>$23f2114a1b82827e$export$e58f029f0fbfdb29,
    "isFocusWithin",
    ()=>$23f2114a1b82827e$export$b4f377a2b6254582,
    "nodeContains",
    ()=>$23f2114a1b82827e$export$4282f70798064fe0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/domHelpers.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/flags/flags.mjs [app-client] (ecmascript)");
;
;
// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16
/* eslint-disable rsp-rules/no-non-shadow-contains, rsp-rules/safe-event-target */ function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowDOM"])()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) currentNode = currentNode.assignedSlot.parentNode;
        else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(currentNode)) currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowDOM"])()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && activeElement.shadowRoot?.activeElement)activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowDOM"])() && event.target instanceof Element && event.target.shadowRoot) {
        if ('composedPath' in event) return event.composedPath()[0] ?? null;
        else if ('composedPath' in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
    }
    return event.target;
}
function $23f2114a1b82827e$export$b4f377a2b6254582(node) {
    if (!node) return false;
    // Get the active element within the node's parent shadow root (or the document). Can return null.
    let root = node.getRootNode();
    let ownerWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(node);
    if (!(root instanceof ownerWindow.Document || root instanceof ownerWindow.ShadowRoot)) return false;
    let activeElement = root.activeElement;
    // Check if the active element is within this node. These nodes are within the same shadow root.
    return activeElement != null && node.contains(activeElement);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isElementVisible.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementVisible",
    ()=>$ae77152785188400$export$e989c0fffaa6b27a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/domHelpers.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $ae77152785188400$var$supportsCheckVisibility = typeof Element !== 'undefined' && 'checkVisibility' in Element.prototype;
function $ae77152785188400$var$isStyleVisible(element) {
    const windowObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse';
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== 'none' && computedVisibility !== 'hidden' && computedVisibility !== 'collapse';
    }
    return isVisible;
}
function $ae77152785188400$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute('hidden') && // Ignore HiddenSelect when tree walking.
    !element.hasAttribute('data-react-aria-prevent-focus') && (element.nodeName === 'DETAILS' && childElement && childElement.nodeName !== 'SUMMARY' ? element.hasAttribute('open') : true);
}
function $ae77152785188400$export$e989c0fffaa6b27a(element, childElement) {
    if ($ae77152785188400$var$supportsCheckVisibility) return element.checkVisibility({
        visibilityProperty: true
    }) && !element.closest('[data-react-aria-prevent-focus]');
    return element.nodeName !== '#comment' && $ae77152785188400$var$isStyleVisible(element) && $ae77152785188400$var$isAttributeVisible(element, childElement) && (!element.parentElement || $ae77152785188400$export$e989c0fffaa6b27a(element.parentElement, element));
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isFocusable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFocusable",
    ()=>$3b8b240c1bf84ab9$export$4c063cf1350e6fed,
    "isTabbable",
    ()=>$3b8b240c1bf84ab9$export$bebd5a1431fec25d
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isElementVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isElementVisible.mjs [app-client] (ecmascript)");
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
 */ const $3b8b240c1bf84ab9$var$focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable^="false"])',
    'permission'
];
const $3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
$3b8b240c1bf84ab9$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR = $3b8b240c1bf84ab9$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $3b8b240c1bf84ab9$export$4c063cf1350e6fed(element, options) {
    return element.matches($3b8b240c1bf84ab9$var$FOCUSABLE_ELEMENT_SELECTOR) && !$3b8b240c1bf84ab9$var$isInert(element) && (options?.skipVisibilityCheck || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isElementVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(element));
}
function $3b8b240c1bf84ab9$export$bebd5a1431fec25d(element) {
    return element.matches($3b8b240c1bf84ab9$var$TABBABLE_ELEMENT_SELECTOR) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isElementVisible$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementVisible"])(element) && !$3b8b240c1bf84ab9$var$isInert(element);
}
function $3b8b240c1bf84ab9$var$isInert(element) {
    let node = element;
    while(node != null){
        if (node instanceof node.ownerDocument.defaultView.HTMLElement && node.inert) return true;
        node = node.parentElement;
    }
    return false;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAndroid",
    ()=>$2add3ce32c6007eb$export$a11b0059900ceec8,
    "isAppleDevice",
    ()=>$2add3ce32c6007eb$export$e1865c3bedcd822b,
    "isChrome",
    ()=>$2add3ce32c6007eb$export$6446a186d09e379e,
    "isFirefox",
    ()=>$2add3ce32c6007eb$export$b7d78993b74f766d,
    "isIOS",
    ()=>$2add3ce32c6007eb$export$fedb369cb70207f1,
    "isIPad",
    ()=>$2add3ce32c6007eb$export$7bef049ce92e4224,
    "isIPhone",
    ()=>$2add3ce32c6007eb$export$186c6964ca17d99,
    "isMac",
    ()=>$2add3ce32c6007eb$export$9ac100e40613ea10,
    "isWebKit",
    ()=>$2add3ce32c6007eb$export$78551043582a6a98
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2add3ce32c6007eb$var$testUserAgent(re) {
    if (typeof window === 'undefined' || window.navigator == null) return false;
    let brands = window.navigator['userAgentData']?.brands;
    return Array.isArray(brands) && brands.some((brand)=>re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator['userAgentData']?.platform || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
const $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
});
const $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
});
const $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
});
const $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && !$2add3ce32c6007eb$export$6446a186d09e379e();
});
const $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Chrome/i);
});
const $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
const $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
    return $2add3ce32c6007eb$var$testUserAgent(/Firefox/i);
});
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isVirtualClick",
    ()=>$b5c62b033c25b96d$export$60278871457622de,
    "isVirtualPointerEvent",
    ()=>$b5c62b033c25b96d$export$29bf1b5f2c56cf63
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)");
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
 */ function $b5c62b033c25b96d$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.pointerType === '' && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $b5c62b033c25b96d$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/openLink.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterProvider",
    ()=>$caaf0dd3060ed57c$export$323e4fc2fa4753fb,
    "getSyntheticLinkProps",
    ()=>$caaf0dd3060ed57c$export$51437d503373d223,
    "handleLinkClick",
    ()=>$caaf0dd3060ed57c$export$13aea1a3cb5e3f1f,
    "openLink",
    ()=>$caaf0dd3060ed57c$export$95185d699e05d4d7,
    "shouldClientNavigate",
    ()=>$caaf0dd3060ed57c$export$efa8c9099e530235,
    "useLinkProps",
    ()=>$caaf0dd3060ed57c$export$7e924b3091a3bd18,
    "useRouter",
    ()=>$caaf0dd3060ed57c$export$9a302a45f65d0572,
    "useSyntheticLinkProps",
    ()=>$caaf0dd3060ed57c$export$bdc77b0c0a3a85d6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ const $caaf0dd3060ed57c$var$RouterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isNative: true,
    open: $caaf0dd3060ed57c$var$openSyntheticLink,
    useHref: (href)=>href
});
function $caaf0dd3060ed57c$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $caaf0dd3060ed57c$var$getSyntheticLink(target, (link)=>{
                    if ($caaf0dd3060ed57c$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $caaf0dd3060ed57c$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($caaf0dd3060ed57c$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $caaf0dd3060ed57c$export$9a302a45f65d0572() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($caaf0dd3060ed57c$var$RouterContext);
}
function $caaf0dd3060ed57c$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"])() && window.event?.type?.startsWith('key') && target.target === '_blank') {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPad"])() && ("TURBOPACK compile-time value", "development") !== 'test' ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        detail: 1,
        bubbles: true,
        cancelable: true
    });
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(target);
    target.dispatchEvent(event);
    $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
function $caaf0dd3060ed57c$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $caaf0dd3060ed57c$var$openSyntheticLink(target, modifiers) {
    $caaf0dd3060ed57c$var$getSyntheticLink(target, (link)=>$caaf0dd3060ed57c$export$95185d699e05d4d7(link, modifiers));
}
function $caaf0dd3060ed57c$export$bdc77b0c0a3a85d6(props) {
    let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
    const href = router.useHref(props.href ?? '');
    return {
        'data-href': props.href ? href : undefined,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $caaf0dd3060ed57c$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $caaf0dd3060ed57c$export$7e924b3091a3bd18(props) {
    let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
    const href = router.useHref(props?.href ?? '');
    return {
        href: props?.href ? href : undefined,
        target: props?.target,
        rel: props?.rel,
        download: props?.download,
        ping: props?.ping,
        referrerPolicy: props?.referrerPolicy
    };
}
function $caaf0dd3060ed57c$export$13aea1a3cb5e3f1f(e, router, href, routerOptions) {
    // If a custom router is provided, prevent default and forward if this link should client navigate.
    if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
    !e.isDefaultPrevented() && $caaf0dd3060ed57c$export$efa8c9099e530235(e.currentTarget, e) && href) {
        e.preventDefault();
        router.open(e.currentTarget, e, href, routerOptions);
    }
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/runAfterTransition.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runAfterTransition",
    ()=>$081cb5757e08788e$export$24490316f764c430
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $081cb5757e08788e$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $081cb5757e08788e$var$transitionCallbacks = new Set();
function $081cb5757e08788e$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        let eventTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventTarget"])(e);
        if (!isTransitionEvent(e) || !eventTarget) return;
        // Add the transitioning property to the list for this element.
        let transitions = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
        if (!transitions) {
            transitions = new Set();
            $081cb5757e08788e$var$transitionsByElement.set(eventTarget, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            eventTarget.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        let eventTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventTarget"])(e);
        if (!isTransitionEvent(e) || !eventTarget) return;
        // Remove property from list of transitioning properties.
        let properties = $081cb5757e08788e$var$transitionsByElement.get(eventTarget);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            eventTarget.removeEventListener('transitioncancel', onTransitionEnd);
            $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($081cb5757e08788e$var$transitionsByElement.size === 0) {
            for (let cb of $081cb5757e08788e$var$transitionCallbacks)cb();
            $081cb5757e08788e$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $081cb5757e08788e$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $081cb5757e08788e$var$setupGlobalEvents);
}
/**
 * Cleans up any elements that are no longer in the document.
 * This is necessary because we can't rely on transitionend events to fire
 * for elements that are removed from the document while transitioning.
 */ function $081cb5757e08788e$var$cleanupDetachedElements() {
    for (const [eventTarget] of $081cb5757e08788e$var$transitionsByElement)// the explicit instanceof check, since it may be different in different contexts.
    if ('isConnected' in eventTarget && !eventTarget.isConnected) $081cb5757e08788e$var$transitionsByElement.delete(eventTarget);
}
function $081cb5757e08788e$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        $081cb5757e08788e$var$cleanupDetachedElements();
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($081cb5757e08788e$var$transitionsByElement.size === 0) fn();
        else $081cb5757e08788e$var$transitionCallbacks.add(fn);
    });
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useSyncRef.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncRef",
    ()=>$b7115c395c64f7b5$export$4debdb1a3f0fa79e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/getNonce.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>$2b2d34ff061957fb$export$2b85b721e524d74b,
    "resetNonceCache",
    ()=>$2b2d34ff061957fb$export$88b319273f3705b4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/domHelpers.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2026 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2b2d34ff061957fb$var$getWebpackNonce(doc) {
    let ownerWindow = doc?.defaultView;
    return ownerWindow?.__webpack_nonce__ || globalThis['__webpack_nonce__'] || undefined;
}
let $2b2d34ff061957fb$var$nonceCache = new WeakMap();
function $2b2d34ff061957fb$export$88b319273f3705b4() {
    $2b2d34ff061957fb$var$nonceCache = new WeakMap();
}
function $2b2d34ff061957fb$export$2b85b721e524d74b(doc) {
    let d = doc ?? (typeof document !== 'undefined' ? document : undefined);
    if (!d) return $2b2d34ff061957fb$var$getWebpackNonce(d);
    if ($2b2d34ff061957fb$var$nonceCache.has(d)) return $2b2d34ff061957fb$var$nonceCache.get(d);
    let meta = d.querySelector('meta[property="csp-nonce"]');
    let nonce = meta && meta instanceof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$domHelpers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerWindow"])(meta).HTMLMetaElement && (meta.nonce || meta.content) || $2b2d34ff061957fb$var$getWebpackNonce(d) || undefined;
    if (nonce !== undefined) $2b2d34ff061957fb$var$nonceCache.set(d, nonce);
    return nonce;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectEvent",
    ()=>$fe16bffc7a557bf0$export$7f54fc3180508a52
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ // Use the earliest effect type possible. useInsertionEffect runs during the mutation phase,
// before all layout effects, but is available only in React 18 and later.
const $fe16bffc7a557bf0$var$useEarlyEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])['useInsertionEffect'] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]);
function $fe16bffc7a557bf0$export$7f54fc3180508a52(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    $fe16bffc7a557bf0$var$useEarlyEffect(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        const f = ref.current;
        return f?.(...args);
    }, []);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalListeners",
    ()=>$48a7d519b337145d$export$4eaf04e54aa8eed6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    let addGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = options?.once ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        let fn = globalListeners.current.get(listener)?.fn || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEvent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>$600b3cf69ae46262$export$90fc3a17d93f704c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $600b3cf69ae46262$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(handler);
    let isDisabled = handler == null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/shadowdom/ShadowTreeWalker.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowTreeWalker",
    ()=>$654b97e09f2a30c1$export$63eb3ababa9c55c4,
    "createShadowTreeWalker",
    ()=>$654b97e09f2a30c1$export$4d0f8be8b12a7ef6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-stately/dist/private/flags/flags.mjs [app-client] (ecmascript)");
;
;
// https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/ShadowTreeWalker.ts
class $654b97e09f2a30c1$export$63eb3ababa9c55c4 {
    constructor(doc, root, whatToShow, filter){
        this._walkerStack = [];
        this._currentSetFor = new Set();
        this._acceptNode = (node)=>{
            if (node.nodeType === Node.ELEMENT_NODE) {
                const shadowRoot = node.shadowRoot;
                if (shadowRoot) {
                    const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    this._walkerStack.unshift(walker);
                    return NodeFilter.FILTER_ACCEPT;
                } else {
                    if (typeof this.filter === 'function') return this.filter(node);
                    else if (this.filter?.acceptNode) return this.filter.acceptNode(node);
                    else if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
                }
            }
            return NodeFilter.FILTER_SKIP;
        };
        this._doc = doc;
        this.root = root;
        this.filter = filter ?? null;
        this.whatToShow = whatToShow ?? NodeFilter.SHOW_ALL;
        this._currentNode = root;
        this._walkerStack.unshift(doc.createTreeWalker(root, whatToShow, this._acceptNode));
        const shadowRoot = root.shadowRoot;
        if (shadowRoot) {
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(walker);
        }
    }
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(node) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeContains"])(this.root, node)) throw new Error('Cannot set currentNode to a node that is not contained by the root node.');
        const walkers = [];
        let curNode = node;
        let currentWalkerCurrentNode = node;
        this._currentNode = node;
        while(curNode && curNode !== this.root)if (curNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            const shadowRoot = curNode;
            const walker = this._doc.createTreeWalker(shadowRoot, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            walkers.push(walker);
            walker.currentNode = currentWalkerCurrentNode;
            this._currentSetFor.add(walker);
            curNode = currentWalkerCurrentNode = shadowRoot.host;
        } else curNode = curNode.parentNode;
        const walker = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
        });
        walkers.push(walker);
        walker.currentNode = currentWalkerCurrentNode;
        this._currentSetFor.add(walker);
        this._walkerStack = walkers;
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let currentNode = this.currentNode;
        let newNode = this.nextNode();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeContains"])(currentNode, newNode)) {
            this.currentNode = currentNode;
            return null;
        }
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    lastChild() {
        let walker = this._walkerStack[0];
        let newNode = walker.lastChild();
        if (newNode) this.currentNode = newNode;
        return newNode;
    }
    nextNode() {
        const nextNode = this._walkerStack[0].nextNode();
        if (nextNode) {
            const shadowRoot = nextNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(nextNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(nextNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    this.currentNode = nextNode;
                    return nextNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (nextNode) this.currentNode = nextNode;
            return nextNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.nextNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    previousNode() {
        const currentWalker = this._walkerStack[0];
        if (currentWalker.currentNode === currentWalker.root) {
            if (this._currentSetFor.has(currentWalker)) {
                this._currentSetFor.delete(currentWalker);
                if (this._walkerStack.length > 1) {
                    this._walkerStack.shift();
                    let newNode = this.previousNode();
                    if (newNode) this.currentNode = newNode;
                    return newNode;
                } else return null;
            }
            return null;
        }
        const previousNode = currentWalker.previousNode();
        if (previousNode) {
            const shadowRoot = previousNode.shadowRoot;
            if (shadowRoot) {
                let nodeResult;
                if (typeof this.filter === 'function') nodeResult = this.filter(previousNode);
                else if (this.filter?.acceptNode) nodeResult = this.filter.acceptNode(previousNode);
                if (nodeResult === NodeFilter.FILTER_ACCEPT) {
                    if (previousNode) this.currentNode = previousNode;
                    return previousNode;
                }
                // _acceptNode should have added new walker for this shadow,
                // go in recursively.
                let newNode = this.lastChild();
                if (newNode) this.currentNode = newNode;
                return newNode;
            }
            if (previousNode) this.currentNode = previousNode;
            return previousNode;
        } else {
            if (this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let newNode = this.previousNode();
                if (newNode) this.currentNode = newNode;
                return newNode;
            } else return null;
        }
    }
    /**
     * @deprecated
     */ nextSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ previousSibling() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
    /**
     * @deprecated
     */ parentNode() {
        // if (__DEV__) {
        //     throw new Error("Method not implemented.");
        // }
        return null;
    }
}
function $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root, whatToShow, filter) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$stately$2f$dist$2f$private$2f$flags$2f$flags$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowDOM"])()) return new $654b97e09f2a30c1$export$63eb3ababa9c55c4(doc, root, whatToShow, filter);
    return doc.createTreeWalker(root, whatToShow, filter);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useResizeObserver.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResizeObserver",
    ()=>$970072cf4b13fde3$export$683480f191c0e3ea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function $970072cf4b13fde3$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $970072cf4b13fde3$export$683480f191c0e3ea(options) {
    // Only call onResize from inside the effect, otherwise we'll void our assumption that
    // useEffectEvents are safe to pass in.
    const { ref: ref, box: box, onResize: onResize } = options;
    let onResizeEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let element = ref?.current;
        if (!element) return;
        if (!$970072cf4b13fde3$var$hasResizeObserver()) {
            window.addEventListener('resize', onResizeEvent, false);
            return ()=>{
                window.removeEventListener('resize', onResizeEvent, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResizeEvent();
            });
            resizeObserverInstance.observe(element, {
                box: box
            });
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        ref,
        box
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isScrollable.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isScrollable",
    ()=>$901761b40e390936$export$2bb74740c4e19def
]);
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
 */ function $901761b40e390936$export$2bb74740c4e19def(node, checkForOverflow) {
    if (!node) return false;
    let style = window.getComputedStyle(node);
    let root = document.scrollingElement || document.documentElement;
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    // Root element has `visible` overflow by default, but is scrollable nonetheless.
    if (node === root && style.overflow !== 'hidden') isScrollable = true;
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/getScrollParent.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getScrollParent",
    ()=>$3578607fe3d4b096$export$cfa2225e87938781
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isScrollable.mjs [app-client] (ecmascript)");
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3578607fe3d4b096$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/keyboard.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCtrlKeyPressed",
    ()=>$bb39c0fc1c19b34c$export$16792effe837dba3,
    "willOpenKeyboard",
    ()=>$bb39c0fc1c19b34c$export$c57958e35f31ed73
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)");
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
 */ function $bb39c0fc1c19b34c$export$16792effe837dba3(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) return e.metaKey;
    return e.ctrlKey;
}
// HTML input types that do not cause the software keyboard to appear.
const $bb39c0fc1c19b34c$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
function $bb39c0fc1c19b34c$export$c57958e35f31ed73(target) {
    return target instanceof HTMLInputElement && !$bb39c0fc1c19b34c$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnterAnimation",
    ()=>$fcc7165e876206c6$export$6d3443f2c48bfc20,
    "useExitAnimation",
    ()=>$fcc7165e876206c6$export$45fda7c47f93fd48
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $fcc7165e876206c6$export$6d3443f2c48bfc20(ref, isReady = true) {
    let [isEntering, setEntering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let isAnimationReady = isEntering && isReady;
    // There are two cases for entry animations:
    // 1. CSS @keyframes. The `animation` property is set during the isEntering state, and it is removed after the animation finishes.
    // 2. CSS transitions. The initial styles are applied during the isEntering state, and removed immediately, causing the transition to occur.
    //
    // In the second case, cancel any transitions that were triggered prior to the isEntering = false state (when the transition is supposed to start).
    // This can happen when isReady starts as false (e.g. popovers prior to placement calculation).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isAnimationReady && ref.current && 'getAnimations' in ref.current) {
            for (let animation of ref.current.getAnimations())if (animation instanceof CSSTransition) animation.cancel();
        }
    }, [
        ref,
        isAnimationReady
    ]);
    $fcc7165e876206c6$var$useAnimation(ref, isAnimationReady, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>setEntering(false), []));
    return isAnimationReady;
}
function $fcc7165e876206c6$export$45fda7c47f93fd48(ref, isOpen) {
    let [exitState, setExitState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isOpen ? 'open' : 'closed');
    switch(exitState){
        case 'open':
            // If isOpen becomes false, set the state to exiting.
            if (!isOpen) setExitState('exiting');
            break;
        case 'closed':
        case 'exiting':
            // If we are exiting and isOpen becomes true, the animation was interrupted.
            // Reset the state to open.
            if (isOpen) setExitState('open');
            break;
    }
    let isExiting = exitState === 'exiting';
    $fcc7165e876206c6$var$useAnimation(ref, isExiting, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Set the state to closed, which will cause the element to be unmounted.
        setExitState((state)=>state === 'exiting' ? 'closed' : state);
    }, []));
    return isExiting;
}
function $fcc7165e876206c6$var$useAnimation(ref, isActive, onEnd) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isActive && ref.current) {
            if (!('getAnimations' in ref.current)) {
                // JSDOM
                onEnd();
                return;
            }
            let animations = ref.current.getAnimations();
            if (animations.length === 0) {
                onEnd();
                return;
            }
            let canceled = false;
            Promise.allSettled(animations.map((a)=>a.finished)).then(()=>{
                if (!canceled) (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                    onEnd();
                });
            });
            return ()=>{
                canceled = true;
            };
        }
    }, [
        ref,
        isActive,
        onEnd
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/constants.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLEAR_FOCUS_EVENT",
    ()=>$8b2399d051d06d4c$export$447a38995de2c711,
    "FOCUS_EVENT",
    ()=>$8b2399d051d06d4c$export$831c820ad60f9d12
]);
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
 */ // Custom event names for updating the autocomplete's aria-activedecendant.
const $8b2399d051d06d4c$export$447a38995de2c711 = 'react-aria-clear-focus';
const $8b2399d051d06d4c$export$831c820ad60f9d12 = 'react-aria-focus';
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useDescription.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDescription",
    ()=>$121970af65029459$export$f8aeda7b10753fa1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $121970af65029459$var$descriptionId = 0;
const $121970af65029459$var$descriptionNodes = new Map();
function $121970af65029459$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!description) return;
        let desc = $121970af65029459$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$121970af65029459$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $121970af65029459$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $121970af65029459$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/getScrollParents.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getScrollParents",
    ()=>$76d97191f0f90600$export$94ed1c92c7beeb22
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/isScrollable.mjs [app-client] (ecmascript)");
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
 */ function $76d97191f0f90600$export$94ed1c92c7beeb22(node, checkForOverflow) {
    let parentElements = [];
    let root = document.scrollingElement || document.documentElement;
    do {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(node, checkForOverflow)) parentElements.push(node);
        node = node.parentElement;
    }while (node && node !== root)
    return parentElements;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/scrollIntoView.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollIntoView",
    ()=>$51a3e22a5186a962$export$53a0910f038337bd,
    "scrollIntoViewport",
    ()=>$51a3e22a5186a962$export$c826860796309d1b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$getScrollParents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/getScrollParents.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $51a3e22a5186a962$export$53a0910f038337bd(scrollView, element, opts = {}) {
    let { block: block = 'nearest', inline: inline = 'nearest' } = opts;
    if (scrollView === element) return;
    let y = scrollView.scrollTop;
    let x = scrollView.scrollLeft;
    let target = element.getBoundingClientRect();
    let view = scrollView.getBoundingClientRect();
    let itemStyle = window.getComputedStyle(element);
    let viewStyle = window.getComputedStyle(scrollView);
    let root = document.scrollingElement || document.documentElement;
    let viewTop = scrollView === root ? 0 : view.top;
    let viewBottom = scrollView === root ? scrollView.clientHeight : view.bottom;
    let viewLeft = scrollView === root ? 0 : view.left;
    let viewRight = scrollView === root ? scrollView.clientWidth : view.right;
    let scrollMarginTop = parseInt(itemStyle.scrollMarginTop, 10) || 0;
    let scrollMarginBottom = parseInt(itemStyle.scrollMarginBottom, 10) || 0;
    let scrollMarginLeft = parseInt(itemStyle.scrollMarginLeft, 10) || 0;
    let scrollMarginRight = parseInt(itemStyle.scrollMarginRight, 10) || 0;
    let scrollPaddingTop = parseInt(viewStyle.scrollPaddingTop, 10) || 0;
    let scrollPaddingBottom = parseInt(viewStyle.scrollPaddingBottom, 10) || 0;
    let scrollPaddingLeft = parseInt(viewStyle.scrollPaddingLeft, 10) || 0;
    let scrollPaddingRight = parseInt(viewStyle.scrollPaddingRight, 10) || 0;
    let borderTopWidth = parseInt(viewStyle.borderTopWidth, 10) || 0;
    let borderBottomWidth = parseInt(viewStyle.borderBottomWidth, 10) || 0;
    let borderLeftWidth = parseInt(viewStyle.borderLeftWidth, 10) || 0;
    let borderRightWidth = parseInt(viewStyle.borderRightWidth, 10) || 0;
    let scrollAreaTop = target.top - scrollMarginTop;
    let scrollAreaBottom = target.bottom + scrollMarginBottom;
    let scrollAreaLeft = target.left - scrollMarginLeft;
    let scrollAreaRight = target.right + scrollMarginRight;
    let scrollBarOffsetX = scrollView === root ? 0 : borderLeftWidth + borderRightWidth;
    let scrollBarOffsetY = scrollView === root ? 0 : borderTopWidth + borderBottomWidth;
    let scrollBarWidth = scrollView.offsetWidth - scrollView.clientWidth - scrollBarOffsetX;
    let scrollBarHeight = scrollView.offsetHeight - scrollView.clientHeight - scrollBarOffsetY;
    let scrollPortTop = viewTop + borderTopWidth + scrollPaddingTop;
    let scrollPortBottom = viewBottom - borderBottomWidth - scrollPaddingBottom - scrollBarHeight;
    let scrollPortLeft = viewLeft + borderLeftWidth + scrollPaddingLeft;
    let scrollPortRight = viewRight - borderRightWidth - scrollPaddingRight;
    // IOS always positions the scrollbar on the right ¯\_(ツ)_/¯
    if (viewStyle.direction === 'rtl' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) scrollPortLeft += scrollBarWidth;
    else scrollPortRight -= scrollBarWidth;
    let shouldScrollBlock = scrollAreaTop < scrollPortTop || scrollAreaBottom > scrollPortBottom;
    let shouldScrollInline = scrollAreaLeft < scrollPortLeft || scrollAreaRight > scrollPortRight;
    if (shouldScrollBlock && block === 'start') y += scrollAreaTop - scrollPortTop;
    else if (shouldScrollBlock && block === 'center') y += (scrollAreaTop + scrollAreaBottom) / 2 - (scrollPortTop + scrollPortBottom) / 2;
    else if (shouldScrollBlock && block === 'end') y += scrollAreaBottom - scrollPortBottom;
    else if (shouldScrollBlock && block === 'nearest') {
        let start = scrollAreaTop - scrollPortTop;
        let end = scrollAreaBottom - scrollPortBottom;
        y += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if (shouldScrollInline && inline === 'start') x += scrollAreaLeft - scrollPortLeft;
    else if (shouldScrollInline && inline === 'center') x += (scrollAreaLeft + scrollAreaRight) / 2 - (scrollPortLeft + scrollPortRight) / 2;
    else if (shouldScrollInline && inline === 'end') x += scrollAreaRight - scrollPortRight;
    else if (shouldScrollInline && inline === 'nearest') {
        let start = scrollAreaLeft - scrollPortLeft;
        let end = scrollAreaRight - scrollPortRight;
        x += Math.abs(start) <= Math.abs(end) ? start : end;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    scrollView.scrollTo({
        left: x,
        top: y
    });
}
function $51a3e22a5186a962$export$c826860796309d1b(targetElement, opts = {}) {
    let { containingElement: containingElement } = opts;
    if (targetElement && targetElement.isConnected) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        if (!isScrollPrevented) {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            targetElement?.scrollIntoView?.({
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                containingElement?.scrollIntoView?.({
                    block: 'center',
                    inline: 'center'
                });
                targetElement.scrollIntoView?.({
                    block: 'nearest'
                });
            }
        } else {
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            let scrollParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$getScrollParents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParents"])(targetElement, true);
            for (let scrollParent of scrollParents)$51a3e22a5186a962$export$53a0910f038337bd(scrollParent, targetElement);
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                scrollParents = containingElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$getScrollParents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParents"])(containingElement, true) : [];
                for (let scrollParent of scrollParents)$51a3e22a5186a962$export$53a0910f038337bd(scrollParent, containingElement, {
                    block: 'center',
                    inline: 'center'
                });
            }
        }
    }
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useUpdateLayoutEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpdateLayoutEffect",
    ()=>$a475cdc2445827b5$export$72ef708ab07251f1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ function $a475cdc2445827b5$export$72ef708ab07251f1(effect, dependencies) {
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useViewportSize.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportSize",
    ()=>$6066a2c586ade9e1$export$d699905dd57c73ca
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$ssr$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/ssr/SSRProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/keyboard.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $6066a2c586ade9e1$var$visualViewport = typeof document !== 'undefined' && window.visualViewport;
function $6066a2c586ade9e1$export$d699905dd57c73ca() {
    let isSSR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$ssr$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSSR"])();
    let [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>isSSR ? {
            width: 0,
            height: 0
        } : $6066a2c586ade9e1$var$getViewportSize());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let updateSize = (newSize)=>{
            setSize((size)=>{
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            // Ignore updates when zoomed.
            if ($6066a2c586ade9e1$var$visualViewport && $6066a2c586ade9e1$var$visualViewport.scale > 1) return;
            updateSize($6066a2c586ade9e1$var$getViewportSize());
        };
        // When closing the keyboard, iOS does not fire the visual viewport resize event until the animation is complete.
        // We can anticipate this and resize early by handling the blur event and using the layout size.
        let frame;
        let onBlur = (e)=>{
            if ($6066a2c586ade9e1$var$visualViewport && $6066a2c586ade9e1$var$visualViewport.scale > 1) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willOpenKeyboard"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEventTarget"])(e))) frame = requestAnimationFrame(()=>{
                let activeElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$shadowdom$2f$DOMFunctions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveElement"])();
                if (!activeElement || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$keyboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willOpenKeyboard"])(activeElement)) updateSize({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                });
            });
        };
        updateSize($6066a2c586ade9e1$var$getViewportSize());
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) window.addEventListener('blur', onBlur, true);
        if (!$6066a2c586ade9e1$var$visualViewport) window.addEventListener('resize', onResize);
        else $6066a2c586ade9e1$var$visualViewport.addEventListener('resize', onResize);
        return ()=>{
            cancelAnimationFrame(frame);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) window.removeEventListener('blur', onBlur, true);
            if (!$6066a2c586ade9e1$var$visualViewport) window.removeEventListener('resize', onResize);
            else $6066a2c586ade9e1$var$visualViewport.removeEventListener('resize', onResize);
        };
    }, []);
    return size;
}
/**
 * Get the viewport size without the scrollbar.
 */ function $6066a2c586ade9e1$var$getViewportSize() {
    return {
        // Multiply by the visualViewport scale to get the "natural" size, unaffected by pinch zooming.
        width: $6066a2c586ade9e1$var$visualViewport ? Math.min($6066a2c586ade9e1$var$visualViewport.width * $6066a2c586ade9e1$var$visualViewport.scale, document.documentElement.clientWidth) : document.documentElement.clientWidth,
        height: $6066a2c586ade9e1$var$visualViewport ? $6066a2c586ade9e1$var$visualViewport.height * $6066a2c586ade9e1$var$visualViewport.scale : document.documentElement.clientHeight
    };
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/inertValue.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inertValue",
    ()=>$b24d1bc31a0f941d$export$a9d04c5684123369
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function $b24d1bc31a0f941d$export$a9d04c5684123369(value) {
    const pieces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]).split('.');
    const major = parseInt(pieces[0], 10);
    if (major >= 19) return value;
    // compatibility with React < 19
    return value ? 'true' : undefined;
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLoadMoreSentinel.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoadMoreSentinel",
    ()=>$0407362eaf54473e$export$ccaea96c28e8b9e7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$getScrollParent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/getScrollParent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ function $0407362eaf54473e$export$ccaea96c28e8b9e7(props, ref) {
    let { collection: collection, onLoadMore: onLoadMore, scrollOffset: scrollOffset = 1 } = props;
    let sentinelObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let triggerLoadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((entries)=>{
        // Use "isIntersecting" over an equality check of 0 since it seems like there is cases where
        // a intersection ratio of 0 can be reported when isIntersecting is actually true
        for (let entry of entries)// Up to user discretion as to how to handle these multiple onLoadMore calls
        if (entry.isIntersecting && onLoadMore) onLoadMore();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (ref.current) {
            // Tear down and set up a new IntersectionObserver when the collection changes so that we can properly trigger additional loadMores if there is room for more items
            // Need to do this tear down and set up since using a large rootMargin will mean the observer's callback isn't called even when scrolling the item into view beause its visibility hasn't actually changed
            // https://codesandbox.io/p/sandbox/magical-swanson-dhgp89?file=%2Fsrc%2FApp.js%3A21%2C21
            sentinelObserver.current = new IntersectionObserver(triggerLoadMore, {
                root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$getScrollParent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParent"])(ref?.current),
                rootMargin: `0px ${100 * scrollOffset}% ${100 * scrollOffset}% ${100 * scrollOffset}%`
            });
            sentinelObserver.current.observe(ref.current);
        }
        return ()=>{
            if (sentinelObserver.current) sentinelObserver.current.disconnect();
        };
    }, [
        collection,
        ref,
        scrollOffset
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useFormReset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormReset",
    ()=>$3274bf1495747a7b$export$5add1d006293d136
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ function $3274bf1495747a7b$export$5add1d006293d136(ref, initialValue, onReset) {
    let handleReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((e)=>{
        if (onReset && !e.defaultPrevented) onReset(initialValue);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let form = ref?.current?.form;
        form?.addEventListener('reset', handleReset);
        return ()=>{
            form?.removeEventListener('reset', handleReset);
        };
    }, [
        ref
    ]);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useUpdateEffect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUpdateEffect",
    ()=>$3c71b1595a147f24$export$496315a1608d9602
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3c71b1595a147f24$export$496315a1608d9602(cb, dependencies) {
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let cbEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$react$2d$aria$2f$dist$2f$private$2f$utils$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(cb);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let prevDeps = lastDeps.current;
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!prevDeps || dependencies.some((dep, i)=>!Object.is(dep, prevDeps[i]))) cbEvent();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
;
}),
"[project]/Desktop/Portfolio2026/portfolio26/node_modules/react-aria/dist/private/utils/useDeepMemo.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepMemo",
    ()=>$9c268ab73a5d55e5$export$722debc0e56fea39
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Portfolio2026/portfolio26/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
 */ /* eslint-disable rulesdir/pure-render */ function $9c268ab73a5d55e5$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Portfolio2026$2f$portfolio26$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}
;
}),
]);

//# sourceMappingURL=0ahy_react-aria_dist_private_utils_0l-fj4i._.js.map