if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

/**
 * React v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(19),o=e(32),i=e(34),a=e(33),u=e(38),s=e(39),l=e(55),c=(e(56),e(40)),p=e(51),d=e(54),f=e(64),h=e(68),m=e(73),v=e(76),g=e(79),y=e(82),C=e(27),E=e(115),b=e(142);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),N={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:u.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:s,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});N.version="0.13.3",t.exports=N},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t,n){"use strict";var r=e(117),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{117:117}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case T.topCompositionStart:return P.compositionStart;case T.topCompositionEnd:return P.compositionEnd;case T.topCompositionUpdate:return P.compositionUpdate}}function a(e,t){return e===T.topKeyDown&&t.keyCode===b}function u(e,t){switch(e){case T.topKeyUp:return-1!==E.indexOf(t.keyCode);case T.topKeyDown:return t.keyCode!==b;case T.topKeyPress:case T.topMouseDown:case T.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?u(e,r)&&(o=P.compositionEnd):a(e,r)&&(o=P.compositionStart),!o)return null;M&&(w||o!==P.compositionStart?o===P.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case T.topCompositionEnd:return s(t);case T.topKeyPress:var n=t.which;return n!==N?null:(R=!0,I);case T.topTextInput:var r=t.data;return r===I&&R?null:r;default:return null}}function p(e,t){if(w){if(e===T.topCompositionEnd||u(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case T.topPaste:return null;case T.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case T.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(P.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(20),m=e(21),v=e(22),g=e(91),y=e(95),C=e(139),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),N=32,I=String.fromCharCode(N),T=f.topLevelTypes,P={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[T.topCompositionEnd,T.topKeyPress,T.topTextInput,T.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[T.topBlur,T.topCompositionEnd,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[T.topBlur,T.topCompositionStart,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[T.topBlur,T.topCompositionUpdate,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]}},R=!1,w=null,O={eventTypes:P,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(21),i=(e(106),e(111)),a=e(131),u=e(141),s=(e(150),u(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var u=r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};t.exports=c},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(28),i=e(27),a=e(133);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{133:133,27:27,28:28}],7:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(T.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){P=e,R=t,P.attachEvent("onchange",o)}function u(){P&&(P.detachEvent("onchange",o),P=null,R=null)}function s(e,t,n){return e===I.topChange?n:void 0}function l(e,t,n){e===I.topFocus?(u(),a(t,n)):e===I.topBlur&&u()}function c(e,t){P=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(P,"value",k),P.attachEvent("onpropertychange",d)}function p(){P&&(delete P.value,P.detachEvent("onpropertychange",d),P=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===I.topInput?n:void 0}function h(e,t,n){e===I.topFocus?(p(),c(t,n)):e===I.topBlur&&p()}function m(e,t,n){return e!==I.topSelectionChange&&e!==I.topKeyUp&&e!==I.topKeyDown||!P||P.value===w?void 0:(w=P.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===I.topClick?n:void 0}var y=e(15),C=e(17),E=e(20),b=e(21),_=e(85),x=e(93),D=e(134),M=e(136),N=e(139),I=y.topLevelTypes,T={change:{phasedRegistrationNames:{bubbled:N({onChange:null}),captured:N({onChangeCapture:null})},dependencies:[I.topBlur,I.topChange,I.topClick,I.topFocus,I.topInput,I.topKeyDown,I.topKeyUp,I.topSelectionChange]}},P=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:T,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=s:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var u=i(e,t,n);if(u){var c=x.getPooled(T.change,u,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(12),i=e(70),a=e(145),u=e(133),s={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,s=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;u(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,s[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=s},{12:12,133:133,145:145,70:70}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(133),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!u.isStandardName.hasOwnProperty(l)),u.isStandardName[l]=!0;var c=l.toLowerCase();if(u.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];u.getPossibleStandardName[p]=l,u.getAttributeName[l]=p}else u.getAttributeName[l]=c;u.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,s.hasOwnProperty(l)?u.getMutationMethod[l]=s[l]:u.getMutationMethod[l]=null;var d=t[l];u.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),u.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),u.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),u.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),u.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),u.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),u.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!u.mustUseAttribute[l]||!u.mustUseProperty[l]),o(u.mustUseProperty[l]||!u.hasSideEffects[l]),o(!!u.hasBooleanValue[l]+!!u.hasNumericValue[l]+!!u.hasOverloadedBooleanValue[l]<=1)}}},a={},u={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=u},{133:133}],11:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(10),i=e(143),a=(e(150),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{10:10,143:143,150:150}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(21),i=e(110),a=e(112),u=e(125),s=e(133),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)s(e[p]),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),s(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(o.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t,n){"use strict";var r=e(139),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{139:139}],14:[function(e,t,n){"use strict";var r=e(15),o=e(20),i=e(97),a=e(68),u=e(139),s=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var u;if(t.window===t)u=t;else{var d=t.ownerDocument;u=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||u):(f=u,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t,n){"use strict";var r=e(138),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{138:138}],16:[function(e,t,n){var r=e(112),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{112:112}],17:[function(e,t,n){"use strict";var r=e(18),o=e(19),i=e(103),a=e(118),u=e(133),s={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){u(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,n,o){for(var a,u=r.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),u(!l)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=d},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];i(u,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(133),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!u),u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(a(!s[n]),s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{133:133}],19:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function u(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(15),h=e(133),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:u,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{133:133,15:15}],20:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function u(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function s(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,u)}var p=e(15),d=e(17),f=e(103),h=e(118),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{103:103,118:118,15:15,17:17}],21:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],22:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(28),i=e(27),a=e(128);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{128:128,27:27,28:28}],23:[function(e,t,n){"use strict";var r,o=e(10),i=e(21),a=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:u|s,classID:a,className:r?a:u,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:s,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,label:null,lang:null,list:a,loop:u|s,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:u|s,muted:u|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:a|s,selected:u|s,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:u,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,21:21}],24:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function u(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(76),l=e(133),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),u):e.props.onChange}};t.exports=p},{133:133,76:76}],25:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(30),i=e(103),a=e(118),u=e(133),s={trapBubbledEvent:function(e,t){u(this.isMounted());var n=this.getDOMNode();u(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=s},{103:103,118:118,133:133,30:30}],26:[function(e,t,n){"use strict";var r=e(15),o=e(112),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{112:112,15:15}],27:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var u in a)r.call(a,u)&&(n[u]=a[u])}}return n}t.exports=r},{}],28:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=s,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:u};t.exports=d},{133:133}],29:[function(e,t,n){"use strict";var r=e(115),o={getDOMNode:function(){return r(this)}};t.exports=o},{115:115}],30:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(15),i=e(17),a=e(18),u=e(59),s=e(102),l=e(27),c=e(134),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),u=a.registrationNameDependencies[e],s=o.topLevelTypes,l=0,p=u.length;p>l;l++){var d=u[l];i.hasOwnProperty(d)&&i[d]||(d===s.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):d===s.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),i[s.topBlur]=!0,i[s.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){
return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t,n){"use strict";var r=e(79),o=e(116),i=e(132),a=e(147),u={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=i(u,null);r[a]=s}return r},updateChildren:function(e,t,n,u){var s=o(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(a(p,d))r.receiveComponent(c,d,n,u),s[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||r.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=u},{116:116,132:132,147:147,79:79}],32:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function u(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function s(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,u,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(28),d=e(61),f=e(149),h=(e(150),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:s,count:c};t.exports=v},{149:149,150:150,28:28,61:61}],33:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;N.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=u(n[o],i):h===_.DEFINE_MANY&&(n[o]=s(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(34),d=(e(39),e(55)),f=e(58),h=e(65),m=e(66),v=(e(75),e(74),e(84)),g=e(27),y=e(133),C=e(138),E=e(139),b=(e(150),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},N={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},I=function(){};g(I.prototype,p.prototype,N);var T={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new I,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=T},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(84),i=e(133);e(150)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{133:133,150:150,84:84}],35:[function(e,t,n){"use strict";var r=e(44),o=e(68),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{44:44,68:68}],36:[function(e,t,n){"use strict";var r=e(133),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{133:133}],37:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(36),i=e(38),a=e(39),u=e(55),s=(e(56),e(65)),l=e(66),c=e(71),p=e(73),d=e(75),f=(e(74),e(79)),h=e(85),m=e(27),v=e(113),g=e(133),y=e(147),C=(e(150),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,s.set(a,this);var u=a.state;void 0===u&&(a.state=u=null),g("object"==typeof u&&!Array.isArray(u)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,s.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=u.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(u){a=u}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];m(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,u=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var s=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(u,s)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||u.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t,n){"use strict";var r=e(27),o=e(113),i=(e(150),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{113:113,150:150,27:27}],39:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],40:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(55),i=(e(56),e(140)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{140:140,55:55,56:56}],41:[function(e,t,n){"use strict";var r=e(2),o=e(29),i=e(33),a=e(55),u=e(138),s=a.createFactory("button"),l=u({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=c},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){P.call(T,e)||(g(I.test(e)),T[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var u=e(5),s=e(10),l=e(11),c=e(30),p=e(35),d=e(68),f=e(69),h=e(73),m=e(27),v=e(114),g=e(133),y=(e(134),e(139)),C=(e(150),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,N={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},I=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},P={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=N[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=u.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var s=l.createMarkupForID(this._rootNodeID);return n+" "+s+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var u=this._previousStyleCopy;for(r in u)u.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&M.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t,n){"use strict";var r=e(5),o=e(9),i=e(11),a=e(68),u=e(73),s=e(133),l=e(144),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};u.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(68),p=e(85),d=e(27),f=e(133),h=l.createFactory("input"),m={},v=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),u=i;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=s.length;d>l;l++){var h=s[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t,n){"use strict";var r=e(29),o=e(33),i=e(55),a=(e(150),i.createFactory("option")),u=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=u},{150:150,29:29,33:33,55:55}],49:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=u.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),u=e(24),s=e(29),l=e(33),c=e(55),p=e(85),d=e(27),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,u.Mixin,s],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=u.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=u.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=u.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=l(e,o),s=l(e,i);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(21),l=e(126),c=e(128),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:u};t.exports=d},{126:126,128:128,21:21}],51:[function(e,t,n){"use strict";var r=e(11),o=e(35),i=e(42),a=e(27),u=e(114),s=function(e){};a(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=u(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=e(133),f=(e(150),l.createFactory("textarea")),h=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(85),i=e(101),a=e(27),u=e(112),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{101:101,112:112,27:27,85:85}],54:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new T(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(P),R.EventPluginHub.injectEventPluginOrder(s),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(I),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:N,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?u.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(7),u=e(8),s=e(13),l=e(14),c=e(21),p=e(23),d=e(26),f=e(29),h=e(33),m=e(35),v=e(53),g=e(42),y=e(41),C=e(43),E=e(46),b=e(44),_=e(45),x=e(47),D=e(48),M=e(49),N=e(52),I=e(51),T=e(55),P=e(60),R=e(62),w=e(64),O=e(68),S=e(78),A=e(87),k=e(88),L=e(89),U=e(86),F=e(109);

t.exports={inject:o}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t,n){"use strict";var r=e(38),o=e(39),i=e(27),a=(e(150),{key:!0,ref:!0}),u=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};u.prototype={_isReactElement:!0},u.createElement=function(e,t,n){var i,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(s[i]=t[i])}var p=arguments.length-2;if(1===p)s.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof s[i]&&(s[i]=h[i])}return new u(e,l,c,o.current,r.current,s)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceProps=function(e,t){var n=new u(e.type,e.key,e.ref,e._owner,e._context,t);return n},u.cloneElement=function(e,t,n){var r,s=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(s[r]=t[r])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new u(e.type,l,c,p,e._context,s)},u.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=u},{150:150,27:27,38:38,39:39}],56:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,s('Each child in an array or iterator should have a unique "key" prop.',e,t))}function u(e,t,n){D.test(e)&&s("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function s(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,u=r||a,s=_[e]||(_[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,s=o.call(e);!(i=s.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&u(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(55),v=e(61),g=e(75),y=(e(74),e(39)),C=e(71),E=e(124),b=e(133),_=(e(150),{}),x={},D=/^\d+$/,M={},N={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=N.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=N},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,u=e(55),s=e(65),l=e(133),c={},p={injectEmptyComponent:function(e){a=u.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=s.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=s.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=u.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{133:133,55:55,65:65}],58:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],59:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(17),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{17:17}],60:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var u=e(16),s=e(21),l=e(28),c=e(64),p=e(68),d=e(85),f=e(27),h=e(123),m=e(129);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?u.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?u.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);u.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t,n){"use strict";var r=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{150:150,55:55}],62:[function(e,t,n){"use strict";var r=e(10),o=e(17),i=e(36),a=e(33),u=e(57),s=e(30),l=e(71),c=e(42),p=e(73),d=e(81),f=e(85),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(50),i=e(107),a=e(117),u=e(119),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{107:107,117:117,119:119,50:50}],64:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,r);return d(i(u)),u}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(81),d=e(133),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{133:133,81:81}],65:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],66:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],67:[function(e,t,n){"use strict";var r=e(104),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{104:104}],68:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=P(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function u(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function s(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&T(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,I);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=N.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),N.ReactReconcileTransaction.release(o)}var v=e(10),g=e(30),y=(e(39),e(55)),C=(e(56),e(57)),E=e(64),b=e(65),_=e(67),x=e(73),D=e(79),M=e(84),N=e(85),I=e(113),T=e(107),P=e(127),R=e(132),w=e(133),O=e(144),S=e(147),A=(e(150),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},V={},j=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return N.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=P(t),u=a&&K.isRenderedByReact(a),s=u&&!r,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),V[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete V[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=V[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=j,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:E.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=P(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var u=r(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:u,getNode:s,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function u(){h.length&&(l.processChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var l=e(36),c=e(70),p=e(79),d=e(31),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=p.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?s():u())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?s():u())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{31:31,36:36,70:70,79:79}],70:[function(e,t,n){"use strict";var r=e(138),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{138:138}],71:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return s(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var u=e(27),s=e(133),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{133:133,27:27}],72:[function(e,t,n){"use strict";var r=e(133),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{133:133}],73:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],74:[function(e,t,n){"use strict";var r={};t.exports=r},{}],75:[function(e,t,n){"use strict";var r=e(138),o=r({prop:null,context:null,childContext:null});t.exports=o},{138:138}],76:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],u=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function u(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=C[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=C[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(55),y=e(61),C=e(74),E=e(112),b="<<anonymous>>",_=u(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:s,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{112:112,55:55,61:61,74:74}],77:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(28),i=e(30),a=e(27);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{27:27,28:28,30:30}],78:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=s.getPooled()}var o=e(6),i=e(28),a=e(30),u=e(63),s=e(77),l=e(101),c=e(27),p={initialize:u.getSelectionInformation,close:u.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(80),i=(e(56),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=o.shouldUpdateRefs(a,t);u&&o.detachRefs(e,a),e.receiveComponent(t,n,i),u&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{56:56,80:80}],80:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(72),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{72:72}],81:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],82:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return u.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{s.release(t)}}var i=e(55),a=e(64),u=e(67),s=e(83),l=e(113),c=e(132),p=e(133);t.exports={renderToString:r,renderToStaticMarkup:o}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(28),i=e(6),a=e(77),u=e(101),s=e(27),l=e(112),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};s(r.prototype,u.Mixin,f),o.addPoolingTo(r),t.exports=r},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=s.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(66),a=e(39),u=e(55),s=e(65),l=e(85),c=e(27),p=e(133),d=(e(150),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=u.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=u.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t,n){"use strict";function r(){v(N.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=N.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function s(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(s,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(6),p=e(28),d=(e(39),e(73)),f=e(79),h=e(101),m=e(27),v=e(133),g=(e(150),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,N.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),N.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},N={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:l};t.exports=N},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{10:10}],87:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&u.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=s.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(15),a=e(20),u=e(63),s=e(93),l=e(119),c=e(136),p=e(139),d=e(146),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]
}},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],89:[function(e,t,n){"use strict";var r=e(15),o=e(19),i=e(20),a=e(90),u=e(93),s=e(94),l=e(96),c=e(97),p=e(92),d=e(98),f=e(99),h=e(100),m=e(120),v=e(133),g=e(139),y=(e(150),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=u;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=s;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{93:93}],91:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],92:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{97:97}],93:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;u?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(28),i=e(27),a=e(112),u=e(123),s={type:null,target:u,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=s,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{112:112,123:123,27:27,28:28}],94:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{99:99}],95:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],96:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(120),a=e(121),u=e(122),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{120:120,121:121,122:122,99:99}],97:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(102),a=e(122),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{102:102,122:122,99:99}],98:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(122),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{122:122,99:99}],99:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i=e(123),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{123:123,93:93}],100:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{97:97}],101:[function(e,t,n){"use strict";var r=e(133),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,u,s){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],u=this.wrapperInitData[n];try{o=!0,u!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{133:133}],102:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],103:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(133);t.exports=r},{133:133}],104:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],105:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],106:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(105),i=/^-ms-/;t.exports=r},{105:105}],107:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(137);t.exports=r},{137:137}],108:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(148);t.exports=o},{148:148}],109:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(33),i=e(55),a=e(133);t.exports=r},{133:133,33:33,55:55}],110:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;s(!!l);var o=r(e),i=o&&u(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(s(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(21),a=e(108),u=e(125),s=e(133),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{108:108,125:125,133:133,21:21}],111:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),i=o.isUnitlessNumber;t.exports=r},{4:4}],112:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],113:[function(e,t,n){"use strict";var r={};t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],115:[function(e,t,n){"use strict";function r(e){return null==e?null:u(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(39),e(65)),i=e(68),a=e(133),u=e(135);e(150)}t.exports=r},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(149);e(150)}t.exports=o},{149:149,150:150}],117:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],118:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],119:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],120:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],121:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(120),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{120:120}],122:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],123:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],124:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],125:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",u[e]=!a.firstChild),u[e]?d[e]:null}var o=e(21),i=e(133),a=o.canUseDOM?document.createElement("div"):null,u={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{133:133,21:21}],126:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],127:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],128:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(21),i=null;t.exports=r},{21:21}],129:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],130:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],131:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(130),i=/^ms-/;t.exports=r},{130:130}],132:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?u.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=u.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(37),a=e(57),u=e(71),s=e(27),l=e(133),c=(e(150),function(){});s(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(21);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{21:21}],135:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],137:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(135);t.exports=r},{135:135}],138:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{133:133}],139:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],142:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(55),i=e(133);t.exports=r},{133:133,55:55}],143:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(114);t.exports=r},{114:114}],144:[function(e,t,n){"use strict";var r=e(21),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{21:21}],145:[function(e,t,n){"use strict";var r=e(21),o=e(114),i=e(144),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{114:114,144:144,21:21}],146:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=r},{150:150}],148:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(133);t.exports=r},{133:133}],149:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function u(e,t,n,r,i){var s=typeof e;if(("undefined"===s||"boolean"===s)&&(e=null),null===e||"string"===s||"number"===s||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=u(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=u(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}else if("object"===s){f(1!==e.nodeType);var M=c.extract(e);for(var N in M)M.hasOwnProperty(N)&&(p=M[N],v=(""!==t?t+m:h)+a(N)+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}return y}function s(e,t,n){return null==e?0:u(e,"",0,t,n)}var l=e(55),c=e(61),p=e(64),d=e(124),f=e(133),h=(e(150),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=s},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t,n){"use strict";var r=e(112),o=r;t.exports=o},{112:112}]},{},[1])(1)});
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.PIXI=t()}}(function(){var t;return function e(t,r,i){function n(s,a){if(!r[s]){if(!t[s]){var h="function"==typeof require&&require;if(!a&&h)return h(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[s]={exports:{}};t[s][0].call(u.exports,function(e){var r=t[s][1][e];return n(r?r:e)},u,u.exports,e,t,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e,r){(function(r){t("./polyfill");var i=e.exports=t("./core");i.extras=t("./extras"),i.filters=t("./filters"),i.interaction=t("./interaction"),i.loaders=t("./loaders"),i.mesh=t("./mesh"),i.loader=new i.loaders.Loader,Object.assign(i,t("./deprecation")),r.PIXI=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./core":29,"./deprecation":78,"./extras":85,"./filters":102,"./interaction":117,"./loaders":120,"./mesh":126,"./polyfill":130}],2:[function(e,r,i){(function(e){!function(){function i(t){var e=!1;return function(){if(e)throw new Error("Callback was already called.");e=!0,t.apply(n,arguments)}}var n,o,s={};n=this,null!=n&&(o=n.async),s.noConflict=function(){return n.async=o,s};var a=Object.prototype.toString,h=Array.isArray||function(t){return"[object Array]"===a.call(t)},l=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r+=1)e(t[r],r,t)},u=function(t,e){if(t.map)return t.map(e);var r=[];return l(t,function(t,i,n){r.push(e(t,i,n))}),r},c=function(t,e,r){return t.reduce?t.reduce(e,r):(l(t,function(t,i,n){r=e(r,t,i,n)}),r)},p=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e};"undefined"!=typeof e&&e.nextTick?(s.nextTick=e.nextTick,s.setImmediate="undefined"!=typeof setImmediate?function(t){setImmediate(t)}:s.nextTick):"function"==typeof setImmediate?(s.nextTick=function(t){setImmediate(t)},s.setImmediate=s.nextTick):(s.nextTick=function(t){setTimeout(t,0)},s.setImmediate=s.nextTick),s.each=function(t,e,r){function n(e){e?(r(e),r=function(){}):(o+=1,o>=t.length&&r())}if(r=r||function(){},!t.length)return r();var o=0;l(t,function(t){e(t,i(n))})},s.forEach=s.each,s.eachSeries=function(t,e,r){if(r=r||function(){},!t.length)return r();var i=0,n=function(){e(t[i],function(e){e?(r(e),r=function(){}):(i+=1,i>=t.length?r():n())})};n()},s.forEachSeries=s.eachSeries,s.eachLimit=function(t,e,r,i){var n=d(e);n.apply(null,[t,r,i])},s.forEachLimit=s.eachLimit;var d=function(t){return function(e,r,i){if(i=i||function(){},!e.length||0>=t)return i();var n=0,o=0,s=0;!function a(){if(n>=e.length)return i();for(;t>s&&o<e.length;)o+=1,s+=1,r(e[o-1],function(t){t?(i(t),i=function(){}):(n+=1,s-=1,n>=e.length?i():a())})}()}},f=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.each].concat(e))}},v=function(t,e){return function(){var r=Array.prototype.slice.call(arguments);return e.apply(null,[d(t)].concat(r))}},g=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.eachSeries].concat(e))}},m=function(t,e,r,i){if(e=u(e,function(t,e){return{index:e,value:t}}),i){var n=[];t(e,function(t,e){r(t.value,function(r,i){n[t.index]=i,e(r)})},function(t){i(t,n)})}else t(e,function(t,e){r(t.value,function(t){e(t)})})};s.map=f(m),s.mapSeries=g(m),s.mapLimit=function(t,e,r,i){return y(e)(t,r,i)};var y=function(t){return v(t,m)};s.reduce=function(t,e,r,i){s.eachSeries(t,function(t,i){r(e,t,function(t,r){e=r,i(t)})},function(t){i(t,e)})},s.inject=s.reduce,s.foldl=s.reduce,s.reduceRight=function(t,e,r,i){var n=u(t,function(t){return t}).reverse();s.reduce(n,e,r,i)},s.foldr=s.reduceRight;var x=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r&&n.push(t),e()})},function(t){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.filter=f(x),s.filterSeries=g(x),s.select=s.filter,s.selectSeries=s.filterSeries;var b=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r||n.push(t),e()})},function(t){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.reject=f(b),s.rejectSeries=g(b);var _=function(t,e,r,i){t(e,function(t,e){r(t,function(r){r?(i(t),i=function(){}):e()})},function(t){i()})};s.detect=f(_),s.detectSeries=g(_),s.some=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t&&(r(!0),r=function(){}),i()})},function(t){r(!1)})},s.any=s.some,s.every=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t||(r(!1),r=function(){}),i()})},function(t){r(!0)})},s.all=s.every,s.sortBy=function(t,e,r){s.map(t,function(t,r){e(t,function(e,i){e?r(e):r(null,{value:t,criteria:i})})},function(t,e){if(t)return r(t);var i=function(t,e){var r=t.criteria,i=e.criteria;return i>r?-1:r>i?1:0};r(null,u(e.sort(i),function(t){return t.value}))})},s.auto=function(t,e){e=e||function(){};var r=p(t),i=r.length;if(!i)return e();var n={},o=[],a=function(t){o.unshift(t)},u=function(t){for(var e=0;e<o.length;e+=1)if(o[e]===t)return void o.splice(e,1)},d=function(){i--,l(o.slice(0),function(t){t()})};a(function(){if(!i){var t=e;e=function(){},t(null,n)}}),l(r,function(r){var i=h(t[r])?t[r]:[t[r]],o=function(t){var i=Array.prototype.slice.call(arguments,1);if(i.length<=1&&(i=i[0]),t){var o={};l(p(n),function(t){o[t]=n[t]}),o[r]=i,e(t,o),e=function(){}}else n[r]=i,s.setImmediate(d)},f=i.slice(0,Math.abs(i.length-1))||[],v=function(){return c(f,function(t,e){return t&&n.hasOwnProperty(e)},!0)&&!n.hasOwnProperty(r)};if(v())i[i.length-1](o,n);else{var g=function(){v()&&(u(g),i[i.length-1](o,n))};a(g)}})},s.retry=function(t,e,r){var i=5,n=[];"function"==typeof t&&(r=e,e=t,t=i),t=parseInt(t,10)||i;var o=function(i,o){for(var a=function(t,e){return function(r){t(function(t,i){r(!t||e,{err:t,result:i})},o)}};t;)n.push(a(e,!(t-=1)));s.series(n,function(t,e){e=e[e.length-1],(i||r)(e.err,e.result)})};return r?o():o},s.waterfall=function(t,e){if(e=e||function(){},!h(t)){var r=new Error("First argument to waterfall must be an array of functions");return e(r)}if(!t.length)return e();var i=function(t){return function(r){if(r)e.apply(null,arguments),e=function(){};else{var n=Array.prototype.slice.call(arguments,1),o=t.next();n.push(o?i(o):e),s.setImmediate(function(){t.apply(null,n)})}}};i(s.iterator(t))()};var T=function(t,e,r){if(r=r||function(){},h(e))t.map(e,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},r);else{var i={};t.each(p(e),function(t,r){e[t](function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),i[t]=n,r(e)})},function(t){r(t,i)})}};s.parallel=function(t,e){T({map:s.map,each:s.each},t,e)},s.parallelLimit=function(t,e,r){T({map:y(e),each:d(e)},t,r)},s.series=function(t,e){if(e=e||function(){},h(t))s.mapSeries(t,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},e);else{var r={};s.eachSeries(p(t),function(e,i){t[e](function(t){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),r[e]=n,i(t)})},function(t){e(t,r)})}},s.iterator=function(t){var e=function(r){var i=function(){return t.length&&t[r].apply(null,arguments),i.next()};return i.next=function(){return r<t.length-1?e(r+1):null},i};return e(0)},s.apply=function(t){var e=Array.prototype.slice.call(arguments,1);return function(){return t.apply(null,e.concat(Array.prototype.slice.call(arguments)))}};var E=function(t,e,r,i){var n=[];t(e,function(t,e){r(t,function(t,r){n=n.concat(r||[]),e(t)})},function(t){i(t,n)})};s.concat=f(E),s.concatSeries=g(E),s.whilst=function(t,e,r){t()?e(function(i){return i?r(i):void s.whilst(t,e,r)}):r()},s.doWhilst=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?s.doWhilst(t,e,r):r()})},s.until=function(t,e,r){t()?r():e(function(i){return i?r(i):void s.until(t,e,r)})},s.doUntil=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?r():s.doUntil(t,e,r)})},s.queue=function(t,e){function r(t,e,r,i){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var n={data:e,callback:"function"==typeof i?i:null};r?t.tasks.unshift(n):t.tasks.push(n),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}void 0===e&&(e=1);var n=0,o={tasks:[],concurrency:e,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(t,e){r(o,t,!1,e)},kill:function(){o.drain=null,o.tasks=[]},unshift:function(t,e){r(o,t,!0,e)},process:function(){if(!o.paused&&n<o.concurrency&&o.tasks.length){var e=o.tasks.shift();o.empty&&0===o.tasks.length&&o.empty(),n+=1;var r=function(){n-=1,e.callback&&e.callback.apply(e,arguments),o.drain&&o.tasks.length+n===0&&o.drain(),o.process()},s=i(r);t(e.data,s)}},length:function(){return o.tasks.length},running:function(){return n},idle:function(){return o.tasks.length+n===0},pause:function(){o.paused!==!0&&(o.paused=!0,o.process())},resume:function(){o.paused!==!1&&(o.paused=!1,o.process())}};return o},s.priorityQueue=function(t,e){function r(t,e){return t.priority-e.priority}function i(t,e,r){for(var i=-1,n=t.length-1;n>i;){var o=i+(n-i+1>>>1);r(e,t[o])>=0?i=o:n=o-1}return i}function n(t,e,n,o){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var a={data:e,priority:n,callback:"function"==typeof o?o:null};t.tasks.splice(i(t.tasks,a,r)+1,0,a),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}var o=s.queue(t,e);return o.push=function(t,e,r){n(o,t,e,r)},delete o.unshift,o},s.cargo=function(t,e){var r=!1,i=[],n={tasks:i,payload:e,saturated:null,empty:null,drain:null,drained:!0,push:function(t,r){h(t)||(t=[t]),l(t,function(t){i.push({data:t,callback:"function"==typeof r?r:null}),n.drained=!1,n.saturated&&i.length===e&&n.saturated()}),s.setImmediate(n.process)},process:function o(){if(!r){if(0===i.length)return n.drain&&!n.drained&&n.drain(),void(n.drained=!0);var s="number"==typeof e?i.splice(0,e):i.splice(0,i.length),a=u(s,function(t){return t.data});n.empty&&n.empty(),r=!0,t(a,function(){r=!1;var t=arguments;l(s,function(e){e.callback&&e.callback.apply(null,t)}),o()})}},length:function(){return i.length},running:function(){return r}};return n};var S=function(t){return function(e){var r=Array.prototype.slice.call(arguments,1);e.apply(null,r.concat([function(e){var r=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(e?console.error&&console.error(e):console[t]&&l(r,function(e){console[t](e)}))}]))}};s.log=S("log"),s.dir=S("dir"),s.memoize=function(t,e){var r={},i={};e=e||function(t){return t};var n=function(){var n=Array.prototype.slice.call(arguments),o=n.pop(),a=e.apply(null,n);a in r?s.nextTick(function(){o.apply(null,r[a])}):a in i?i[a].push(o):(i[a]=[o],t.apply(null,n.concat([function(){r[a]=arguments;var t=i[a];delete i[a];for(var e=0,n=t.length;n>e;e++)t[e].apply(null,arguments)}])))};return n.memo=r,n.unmemoized=t,n},s.unmemoize=function(t){return function(){return(t.unmemoized||t).apply(null,arguments)}},s.times=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.map(i,e,r)},s.timesSeries=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.mapSeries(i,e,r)},s.seq=function(){var t=arguments;return function(){var e=this,r=Array.prototype.slice.call(arguments),i=r.pop();s.reduce(t,r,function(t,r,i){r.apply(e,t.concat([function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);i(t,e)}]))},function(t,r){i.apply(e,[t].concat(r))})}},s.compose=function(){return s.seq.apply(null,Array.prototype.reverse.call(arguments))};var C=function(t,e){var r=function(){var r=this,i=Array.prototype.slice.call(arguments),n=i.pop();return t(e,function(t,e){t.apply(r,i.concat([e]))},n)};if(arguments.length>2){var i=Array.prototype.slice.call(arguments,2);return r.apply(this,i)}return r};s.applyEach=f(C),s.applyEachSeries=g(C),s.forever=function(t,e){function r(i){if(i){if(e)return e(i);throw i}t(r)}r()},"undefined"!=typeof r&&r.exports?r.exports=s:"undefined"!=typeof t&&t.amd?t([],function(){return s}):n.async=s}()}).call(this,e("_process"))},{_process:4}],3:[function(t,e,r){(function(t){function e(t,e){for(var r=0,i=t.length-1;i>=0;i--){var n=t[i];"."===n?t.splice(i,1):".."===n?(t.splice(i,1),r++):r&&(t.splice(i,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function i(t,e){if(t.filter)return t.filter(e);for(var r=[],i=0;i<t.length;i++)e(t[i],i,t)&&r.push(t[i]);return r}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};r.resolve=function(){for(var r="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,n="/"===s.charAt(0))}return r=e(i(r.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+r||"."},r.normalize=function(t){var n=r.isAbsolute(t),o="/"===s(t,-1);return t=e(i(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(i(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){function i(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var n=i(t.split("/")),o=i(e.split("/")),s=Math.min(n.length,o.length),a=s,h=0;s>h;h++)if(n[h]!==o[h]){a=h;break}for(var l=[],h=a;h<n.length;h++)l.push("..");return l=l.concat(o.slice(a)),l.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var e=o(t),r=e[0],i=e[1];return r||i?(i&&(i=i.substr(0,i.length-1)),r+i):"."},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return 0>e&&(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:4}],4:[function(t,e,r){function i(){if(!a){a=!0;for(var t,e=s.length;e;){t=s,s=[];for(var r=-1;++r<e;)t[r]();e=s.length}a=!1}}function n(){}var o=e.exports={},s=[],a=!1;o.nextTick=function(t){s.push(t),a||setTimeout(i,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=n,o.addListener=n,o.once=n,o.off=n,o.removeListener=n,o.removeAllListeners=n,o.emit=n,o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],5:[function(e,r,i){(function(e){!function(n){function o(t){throw RangeError(B[t])}function s(t,e){for(var r=t.length;r--;)t[r]=e(t[r]);return t}function a(t,e){return s(t.split(O),e).join(".")}function h(t){for(var e,r,i=[],n=0,o=t.length;o>n;)e=t.charCodeAt(n++),e>=55296&&56319>=e&&o>n?(r=t.charCodeAt(n++),56320==(64512&r)?i.push(((1023&e)<<10)+(1023&r)+65536):(i.push(e),n--)):i.push(e);return i}function l(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=N(t>>>10&1023|55296),t=56320|1023&t),e+=N(t)}).join("")}function u(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:E}function c(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function p(t,e,r){var i=0;for(t=r?I(t/A):t>>1,t+=I(t/e);t>L*C>>1;i+=E)t=I(t/L);return I(i+(L+1)*t/(t+w))}function d(t){var e,r,i,n,s,a,h,c,d,f,v=[],g=t.length,m=0,y=R,x=M;for(r=t.lastIndexOf(D),0>r&&(r=0),i=0;r>i;++i)t.charCodeAt(i)>=128&&o("not-basic"),v.push(t.charCodeAt(i));for(n=r>0?r+1:0;g>n;){for(s=m,a=1,h=E;n>=g&&o("invalid-input"),c=u(t.charCodeAt(n++)),(c>=E||c>I((T-m)/a))&&o("overflow"),m+=c*a,d=x>=h?S:h>=x+C?C:h-x,!(d>c);h+=E)f=E-d,a>I(T/f)&&o("overflow"),a*=f;e=v.length+1,x=p(m-s,e,0==s),I(m/e)>T-y&&o("overflow"),y+=I(m/e),m%=e,v.splice(m++,0,y)}return l(v)}function f(t){var e,r,i,n,s,a,l,u,d,f,v,g,m,y,x,b=[];for(t=h(t),g=t.length,e=R,r=0,s=M,a=0;g>a;++a)v=t[a],128>v&&b.push(N(v));for(i=n=b.length,n&&b.push(D);g>i;){for(l=T,a=0;g>a;++a)v=t[a],v>=e&&l>v&&(l=v);for(m=i+1,l-e>I((T-r)/m)&&o("overflow"),r+=(l-e)*m,e=l,a=0;g>a;++a)if(v=t[a],e>v&&++r>T&&o("overflow"),v==e){for(u=r,d=E;f=s>=d?S:d>=s+C?C:d-s,!(f>u);d+=E)x=u-f,y=E-f,b.push(N(c(f+x%y,0))),u=I(x/y);b.push(N(c(u,0))),s=p(r,m,i==n),r=0,++i}++r,++e}return b.join("")}function v(t){return a(t,function(t){return F.test(t)?d(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return P.test(t)?"xn--"+f(t):t})}var m="object"==typeof i&&i,y="object"==typeof r&&r&&r.exports==m&&r,x="object"==typeof e&&e;(x.global===x||x.window===x)&&(n=x);var b,_,T=2147483647,E=36,S=1,C=26,w=38,A=700,M=72,R=128,D="-",F=/^xn--/,P=/[^ -~]/,O=/\x2E|\u3002|\uFF0E|\uFF61/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=E-S,I=Math.floor,N=String.fromCharCode;if(b={version:"1.2.4",ucs2:{decode:h,encode:l},decode:d,encode:f,toASCII:g,toUnicode:v},"function"==typeof t&&"object"==typeof t.amd&&t.amd)t("punycode",function(){return b});else if(m&&!m.nodeType)if(y)y.exports=b;else for(_ in b)b.hasOwnProperty(_)&&(m[_]=b[_]);else n.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(t,e,r){"use strict";function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var l=t.length;h>0&&l>h&&(l=h);for(var u=0;l>u;++u){var c,p,d,f,v=t[u].replace(a,"%20"),g=v.indexOf(r);g>=0?(c=v.substr(0,g),p=v.substr(g+1)):(c=v,p=""),d=decodeURIComponent(c),f=decodeURIComponent(p),i(s,d)?n(s[d])?s[d].push(f):s[d]=[s[d],f]:s[d]=f}return s};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],7:[function(t,e,r){"use strict";function i(t,e){if(t.map)return t.map(e);for(var r=[],i=0;i<t.length;i++)r.push(e(t[i],i));return r}var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?i(s(t),function(s){var a=encodeURIComponent(n(s))+r;return o(t[s])?i(t[s],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[s]))}).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],8:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":6,"./encode":7}],9:[function(t,e,r){function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function n(t,e,r){if(t&&l(t)&&t instanceof i)return t;var n=new i;return n.parse(t,e,r),n}function o(t){return h(t)&&(t=n(t)),t instanceof i?t.format():i.prototype.format.call(t)}function s(t,e){return n(t,!1,!0).resolve(e)}function a(t,e){return t?n(t,!1,!0).resolveObject(e):e}function h(t){return"string"==typeof t}function l(t){return"object"==typeof t&&null!==t}function u(t){return null===t}function c(t){return null==t}var p=t("punycode");r.parse=n,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=i;var d=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,v=["<",">",'"',"`"," ","\r","\n","	"],g=["{","}","|","\\","^","`"].concat(v),m=["'"].concat(g),y=["%","/","?",";","#"].concat(m),x=["/","?","#"],b=255,_=/^[a-z0-9A-Z_-]{0,63}$/,T=/^([a-z0-9A-Z_-]{0,63})(.*)$/,E={javascript:!0,"javascript:":!0},S={javascript:!0,"javascript:":!0},C={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},w=t("querystring");i.prototype.parse=function(t,e,r){if(!h(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t;i=i.trim();var n=d.exec(i);if(n){n=n[0];var o=n.toLowerCase();this.protocol=o,i=i.substr(n.length)}if(r||n||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===i.substr(0,2);!s||n&&S[n]||(i=i.substr(2),this.slashes=!0)}if(!S[n]&&(s||n&&!C[n])){for(var a=-1,l=0;l<x.length;l++){var u=i.indexOf(x[l]);-1!==u&&(-1===a||a>u)&&(a=u)}var c,f;f=-1===a?i.lastIndexOf("@"):i.lastIndexOf("@",a),-1!==f&&(c=i.slice(0,f),i=i.slice(f+1),this.auth=decodeURIComponent(c)),a=-1;for(var l=0;l<y.length;l++){var u=i.indexOf(y[l]);-1!==u&&(-1===a||a>u)&&(a=u)}-1===a&&(a=i.length),this.host=i.slice(0,a),i=i.slice(a),this.parseHost(),this.hostname=this.hostname||"";var v="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!v)for(var g=this.hostname.split(/\./),l=0,A=g.length;A>l;l++){var M=g[l];if(M&&!M.match(_)){for(var R="",D=0,F=M.length;F>D;D++)R+=M.charCodeAt(D)>127?"x":M[D];if(!R.match(_)){var P=g.slice(0,l),O=g.slice(l+1),B=M.match(T);B&&(P.push(B[1]),O.unshift(B[2])),O.length&&(i="/"+O.join(".")+i),this.hostname=P.join(".");break}}}if(this.hostname=this.hostname.length>b?"":this.hostname.toLowerCase(),!v){for(var L=this.hostname.split("."),I=[],l=0;l<L.length;++l){var N=L[l];I.push(N.match(/[^A-Za-z0-9_-]/)?"xn--"+p.encode(N):N)}this.hostname=I.join(".")}var U=this.port?":"+this.port:"",k=this.hostname||"";this.host=k+U,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!E[o])for(var l=0,A=m.length;A>l;l++){var j=m[l],Y=encodeURIComponent(j);Y===j&&(Y=escape(j)),i=i.split(j).join(Y)}var X=i.indexOf("#");-1!==X&&(this.hash=i.substr(X),i=i.slice(0,X));var G=i.indexOf("?");if(-1!==G?(this.search=i.substr(G),this.query=i.substr(G+1),e&&(this.query=w.parse(this.query)),i=i.slice(0,G)):e&&(this.search="",this.query={}),i&&(this.pathname=i),C[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var U=this.pathname||"",N=this.search||"";this.path=U+N}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=t+this.host:this.hostname&&(n=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&l(this.query)&&Object.keys(this.query).length&&(o=w.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||C[e])&&n!==!1?(n="//"+(n||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):n||(n=""),i&&"#"!==i.charAt(0)&&(i="#"+i),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+n+r+s+i},i.prototype.resolve=function(t){return this.resolveObject(n(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(h(t)){var e=new i;e.parse(t,!1,!0),t=e}var r=new i;if(Object.keys(this).forEach(function(t){r[t]=this[t]},this),r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(r[e]=t[e])}),C[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r;if(t.protocol&&t.protocol!==r.protocol){if(!C[t.protocol])return Object.keys(t).forEach(function(e){r[e]=t[e]}),r.href=r.format(),r;if(r.protocol=t.protocol,t.host||S[t.protocol])r.pathname=t.pathname;else{for(var n=(t.pathname||"").split("/");n.length&&!(t.host=n.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==n[0]&&n.unshift(""),n.length<2&&n.unshift(""),r.pathname=n.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var o=r.pathname||"",s=r.search||"";r.path=o+s}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var a=r.pathname&&"/"===r.pathname.charAt(0),l=t.host||t.pathname&&"/"===t.pathname.charAt(0),p=l||a||r.host&&t.pathname,d=p,f=r.pathname&&r.pathname.split("/")||[],n=t.pathname&&t.pathname.split("/")||[],v=r.protocol&&!C[r.protocol];if(v&&(r.hostname="",r.port=null,r.host&&(""===f[0]?f[0]=r.host:f.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===n[0]?n[0]=t.host:n.unshift(t.host)),t.host=null),p=p&&(""===n[0]||""===f[0])),l)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,f=n;else if(n.length)f||(f=[]),f.pop(),f=f.concat(n),r.search=t.search,r.query=t.query;else if(!c(t.search)){if(v){r.hostname=r.host=f.shift();var g=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;g&&(r.auth=g.shift(),r.host=r.hostname=g.shift())}return r.search=t.search,r.query=t.query,u(r.pathname)&&u(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!f.length)return r.pathname=null,r.path=r.search?"/"+r.search:null,r.href=r.format(),r;for(var m=f.slice(-1)[0],y=(r.host||t.host)&&("."===m||".."===m)||""===m,x=0,b=f.length;b>=0;b--)m=f[b],"."==m?f.splice(b,1):".."===m?(f.splice(b,1),x++):x&&(f.splice(b,1),x--);if(!p&&!d)for(;x--;x)f.unshift("..");!p||""===f[0]||f[0]&&"/"===f[0].charAt(0)||f.unshift(""),y&&"/"!==f.join("/").substr(-1)&&f.push("");var _=""===f[0]||f[0]&&"/"===f[0].charAt(0);if(v){r.hostname=r.host=_?"":f.length?f.shift():"";var g=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;g&&(r.auth=g.shift(),r.host=r.hostname=g.shift())}return p=p||r.host&&f.length,p&&!_&&f.unshift(""),f.length?r.pathname=f.join("/"):(r.pathname=null,r.path=null),u(r.pathname)&&u(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},i.prototype.parseHost=function(){var t=this.host,e=f.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{punycode:5,querystring:8}],10:[function(t,e,r){"use strict";function i(t,e,r){r=r||2;var i=e&&e.length,a=i?e[0]*r:t.length,h=o(t,n(t,0,a,r,!0)),l=[];if(!h)return l;var c,p,d,f,v,g,m;if(i&&(h=u(t,e,h,r)),t.length>80*r){c=d=t[0],p=f=t[1];for(var y=r;a>y;y+=r)v=t[y],g=t[y+1],c>v&&(c=v),p>g&&(p=g),v>d&&(d=v),g>f&&(f=g);m=Math.max(d-c,f-p)}return s(t,h,l,r,c,p,m),l}function n(t,e,r,i,n){var o,s,a,h=0;for(o=e,s=r-i;r>o;o+=i)h+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;if(n===h>0)for(o=e;r>o;o+=i)a=C(o,a);else for(o=r-i;o>=e;o-=i)a=C(o,a);return a}function o(t,e,r){r||(r=e);var i,n=e;do if(i=!1,x(t,n.i,n.next.i)||0===y(t,n.prev.i,n.i,n.next.i)){if(n.prev.next=n.next,n.next.prev=n.prev,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),n=r=n.prev,n===n.next)return null;i=!0}else n=n.next;while(i||n!==r);return r}function s(t,e,r,i,n,u,c,p){if(e){p||void 0===n||d(t,e,n,u,c);for(var f,v,g=e;e.prev!==e.next;)if(f=e.prev,v=e.next,a(t,e,n,u,c))r.push(f.i/i),r.push(e.i/i),r.push(v.i/i),v.prev=f,f.next=v,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ),e=v.next,g=v.next;else if(e=v,e===g){p?1===p?(e=h(t,e,r,i),s(t,e,r,i,n,u,c,2)):2===p&&l(t,e,r,i,n,u,c):s(t,o(t,e),r,i,n,u,c,1);break}}}function a(t,e,r,i,n){var o=e.prev.i,s=e.i,a=e.next.i,h=t[o],l=t[o+1],u=t[s],c=t[s+1],p=t[a],d=t[a+1],f=h*c-l*u,g=h*d-l*p,m=p*c-d*u,y=f-g-m;if(0>=y)return!1;var x,b,_,T,E,S,C,w=d-l,A=h-p,M=l-c,R=u-h;if(void 0!==r){var D=u>h?p>h?h:p:p>u?u:p,F=c>l?d>l?l:d:d>c?c:d,P=h>u?h>p?h:p:u>p?u:p,O=l>c?l>d?l:d:c>d?c:d,B=v(D,F,r,i,n),L=v(P,O,r,i,n);for(C=e.nextZ;C&&C.z<=L;)if(x=C.i,C=C.nextZ,x!==o&&x!==a&&(b=t[x],_=t[x+1],T=w*b+A*_-g,T>=0&&(E=M*b+R*_+f,E>=0&&(S=y-T-E,S>=0&&(T&&E||T&&S||E&&S)))))return!1;for(C=e.prevZ;C&&C.z>=B;)if(x=C.i,C=C.prevZ,x!==o&&x!==a&&(b=t[x],_=t[x+1],T=w*b+A*_-g,T>=0&&(E=M*b+R*_+f,E>=0&&(S=y-T-E,S>=0&&(T&&E||T&&S||E&&S)))))return!1}else for(C=e.next.next;C!==e.prev;)if(x=C.i,C=C.next,b=t[x],_=t[x+1],T=w*b+A*_-g,T>=0&&(E=M*b+R*_+f,E>=0&&(S=y-T-E,S>=0&&(T&&E||T&&S||E&&S))))return!1;return!0}function h(t,e,r,i){var n=e;do{var o=n.prev,s=n.next.next;if(o.i!==s.i&&b(t,o.i,n.i,n.next.i,s.i)&&T(t,o,s)&&T(t,s,o)){r.push(o.i/i),r.push(n.i/i),r.push(s.i/i),o.next=s,s.prev=o;var a=n.prevZ,h=n.nextZ&&n.nextZ.nextZ;a&&(a.nextZ=h),h&&(h.prevZ=a),n=e=s}n=n.next}while(n!==e);return n}function l(t,e,r,i,n,a,h){var l=e;do{for(var u=l.next.next;u!==l.prev;){if(l.i!==u.i&&m(t,l,u)){var c=S(l,u);return l=o(t,l,l.next),c=o(t,c,c.next),s(t,l,r,i,n,a,h),void s(t,c,r,i,n,a,h)}u=u.next}l=l.next}while(l!==e)}function u(t,e,r,i){var s,a,h,l,u,p=[];for(s=0,a=e.length;a>s;s++)h=e[s]*i,l=a-1>s?e[s+1]*i:t.length,u=o(t,n(t,h,l,i,!1)),u&&p.push(g(t,u));for(p.sort(function(e,r){return t[e.i]-t[r.i]}),s=0;s<p.length;s++)c(t,p[s],r),r=o(t,r,r.next);return r}function c(t,e,r){if(r=p(t,e,r)){var i=S(r,e);o(t,i,i.next)}}function p(t,e,r){var i,n,o,s=r,a=e.i,h=t[a],l=t[a+1],u=-(1/0);do{if(n=s.i,o=s.next.i,l<=t[n+1]&&l>=t[o+1]){var c=t[n]+(l-t[n+1])*(t[o]-t[n])/(t[o+1]-t[n+1]);h>=c&&c>u&&(u=c,i=t[n]<t[o]?s:s.next)}s=s.next}while(s!==r);if(!i)return null;var p,d,f,v,g,m,y=t[i.i],x=t[i.i+1],b=h*x-l*y,_=h*l-l*u,E=l-l,S=h-u,C=l-x,w=y-h,A=b-_-(u*x-l*y),M=0>=A?-1:1,R=i,D=1/0;for(s=i.next;s!==R;)p=t[s.i],d=t[s.i+1],f=h-p,f>=0&&p>=y&&(v=(E*p+S*d-_)*M,v>=0&&(g=(C*p+w*d+b)*M,g>=0&&A*M-v-g>=0&&(m=Math.abs(l-d)/f,D>m&&T(t,s,e)&&(i=s,D=m)))),s=s.next;return i}function d(t,e,r,i,n){var o=e;do null===o.z&&(o.z=v(t[o.i],t[o.i+1],r,i,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,f(o)}function f(t){var e,r,i,n,o,s,a,h,l=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,i=r,a=0,e=0;l>e&&(a++,i=i.nextZ,i);e++);for(h=l;a>0||h>0&&i;)0===a?(n=i,i=i.nextZ,h--):0!==h&&i?r.z<=i.z?(n=r,r=r.nextZ,a--):(n=i,i=i.nextZ,h--):(n=r,r=r.nextZ,a--),o?o.nextZ=n:t=n,n.prevZ=o,o=n;r=i}o.nextZ=null,l*=2}while(s>1);return t}function v(t,e,r,i,n){return t=1e3*(t-r)/n,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=1e3*(e-i)/n,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function g(t,e){var r=e,i=e;do t[r.i]<t[i.i]&&(i=r),r=r.next;while(r!==e);return i}function m(t,e,r){return!_(t,e,e.i,r.i)&&T(t,e,r)&&T(t,r,e)&&E(t,e,e.i,r.i)}function y(t,e,r,i){var n=(t[r+1]-t[e+1])*(t[i]-t[r])-(t[r]-t[e])*(t[i+1]-t[r+1]);return n>0?1:0>n?-1:0}function x(t,e,r){return t[e]===t[r]&&t[e+1]===t[r+1]}function b(t,e,r,i,n){return y(t,e,r,i)!==y(t,e,r,n)&&y(t,i,n,e)!==y(t,i,n,r)}function _(t,e,r,i){var n=e;do{var o=n.i,s=n.next.i;if(o!==r&&s!==r&&o!==i&&s!==i&&b(t,o,s,r,i))return!0;n=n.next}while(n!==e);return!1}function T(t,e,r){return-1===y(t,e.prev.i,e.i,e.next.i)?-1!==y(t,e.i,r.i,e.next.i)&&-1!==y(t,e.i,e.prev.i,r.i):-1===y(t,e.i,r.i,e.prev.i)||-1===y(t,e.i,e.next.i,r.i)}function E(t,e,r,i){var n=e,o=!1,s=(t[r]+t[i])/2,a=(t[r+1]+t[i+1])/2;do{var h=n.i,l=n.next.i;t[h+1]>a!=t[l+1]>a&&s<(t[l]-t[h])*(a-t[h+1])/(t[l+1]-t[h+1])+t[h]&&(o=!o),n=n.next}while(n!==e);return o}function S(t,e){var r=new w(t.i),i=new w(e.i),n=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,o.next=i,i.prev=o,i}function C(t,e){var r=new w(t);return e?(r.next=e.next,r.prev=e,e.next.prev=r,e.next=r):(r.prev=r,r.next=r),r}function w(t){
this.i=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null}e.exports=i},{}],11:[function(t,e,r){"use strict";function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function n(){}var o="function"!=typeof Object.create?"~":!1;n.prototype._events=void 0,n.prototype.listeners=function(t,e){var r=o?o+t:t,i=this._events&&this._events[r];if(e)return!!i;if(!i)return[];if(this._events[r].fn)return[this._events[r].fn];for(var n=0,s=this._events[r].length,a=new Array(s);s>n;n++)a[n]=this._events[r][n].fn;return a},n.prototype.emit=function(t,e,r,i,n,s){var a=o?o+t:t;if(!this._events||!this._events[a])return!1;var h,l,u=this._events[a],c=arguments.length;if("function"==typeof u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,i),!0;case 5:return u.fn.call(u.context,e,r,i,n),!0;case 6:return u.fn.call(u.context,e,r,i,n,s),!0}for(l=1,h=new Array(c-1);c>l;l++)h[l-1]=arguments[l];u.fn.apply(u.context,h)}else{var p,d=u.length;for(l=0;d>l;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),c){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;default:if(!h)for(p=1,h=new Array(c-1);c>p;p++)h[p-1]=arguments[p];u[l].fn.apply(u[l].context,h)}}return!0},n.prototype.on=function(t,e,r){var n=new i(e,r||this),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],n]:this._events[s].push(n):this._events[s]=n,this},n.prototype.once=function(t,e,r){var n=new i(e,r||this,!0),s=o?o+t:t;return this._events||(this._events=o?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],n]:this._events[s].push(n):this._events[s]=n,this},n.prototype.removeListener=function(t,e,r,i){var n=o?o+t:t;if(!this._events||!this._events[n])return this;var s=this._events[n],a=[];if(e)if(s.fn)(s.fn!==e||i&&!s.once||r&&s.context!==r)&&a.push(s);else for(var h=0,l=s.length;l>h;h++)(s[h].fn!==e||i&&!s[h].once||r&&s[h].context!==r)&&a.push(s[h]);return a.length?this._events[n]=1===a.length?a[0]:a:delete this._events[n],this},n.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[o?o+t:t]:this._events=o?{}:Object.create(null),this):this},n.prototype.off=n.prototype.removeListener,n.prototype.addListener=n.prototype.on,n.prototype.setMaxListeners=function(){return this},n.prefixed=o,e.exports=n},{}],12:[function(t,e,r){"use strict";function i(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}e.exports=Object.assign||function(t,e){for(var r,n,o=i(t),s=1;s<arguments.length;s++){r=arguments[s],n=Object.keys(Object(r));for(var a=0;a<n.length;a++)o[n[a]]=r[n[a]]}return o}},{}],13:[function(e,r,i){(function(e){!function(){function i(t){var e=!1;return function(){if(e)throw new Error("Callback was already called.");e=!0,t.apply(n,arguments)}}var n,o,s={};n=this,null!=n&&(o=n.async),s.noConflict=function(){return n.async=o,s};var a=Object.prototype.toString,h=Array.isArray||function(t){return"[object Array]"===a.call(t)},l=function(t,e){if(t.forEach)return t.forEach(e);for(var r=0;r<t.length;r+=1)e(t[r],r,t)},u=function(t,e){if(t.map)return t.map(e);var r=[];return l(t,function(t,i,n){r.push(e(t,i,n))}),r},c=function(t,e,r){return t.reduce?t.reduce(e,r):(l(t,function(t,i,n){r=e(r,t,i,n)}),r)},p=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e};"undefined"!=typeof e&&e.nextTick?(s.nextTick=e.nextTick,s.setImmediate="undefined"!=typeof setImmediate?function(t){setImmediate(t)}:s.nextTick):"function"==typeof setImmediate?(s.nextTick=function(t){setImmediate(t)},s.setImmediate=s.nextTick):(s.nextTick=function(t){setTimeout(t,0)},s.setImmediate=s.nextTick),s.each=function(t,e,r){function n(e){e?(r(e),r=function(){}):(o+=1,o>=t.length&&r())}if(r=r||function(){},!t.length)return r();var o=0;l(t,function(t){e(t,i(n))})},s.forEach=s.each,s.eachSeries=function(t,e,r){if(r=r||function(){},!t.length)return r();var i=0,n=function(){e(t[i],function(e){e?(r(e),r=function(){}):(i+=1,i>=t.length?r():n())})};n()},s.forEachSeries=s.eachSeries,s.eachLimit=function(t,e,r,i){var n=d(e);n.apply(null,[t,r,i])},s.forEachLimit=s.eachLimit;var d=function(t){return function(e,r,i){if(i=i||function(){},!e.length||0>=t)return i();var n=0,o=0,s=0;!function a(){if(n>=e.length)return i();for(;t>s&&o<e.length;)o+=1,s+=1,r(e[o-1],function(t){t?(i(t),i=function(){}):(n+=1,s-=1,n>=e.length?i():a())})}()}},f=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.each].concat(e))}},v=function(t,e){return function(){var r=Array.prototype.slice.call(arguments);return e.apply(null,[d(t)].concat(r))}},g=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[s.eachSeries].concat(e))}},m=function(t,e,r,i){if(e=u(e,function(t,e){return{index:e,value:t}}),i){var n=[];t(e,function(t,e){r(t.value,function(r,i){n[t.index]=i,e(r)})},function(t){i(t,n)})}else t(e,function(t,e){r(t.value,function(t){e(t)})})};s.map=f(m),s.mapSeries=g(m),s.mapLimit=function(t,e,r,i){return y(e)(t,r,i)};var y=function(t){return v(t,m)};s.reduce=function(t,e,r,i){s.eachSeries(t,function(t,i){r(e,t,function(t,r){e=r,i(t)})},function(t){i(t,e)})},s.inject=s.reduce,s.foldl=s.reduce,s.reduceRight=function(t,e,r,i){var n=u(t,function(t){return t}).reverse();s.reduce(n,e,r,i)},s.foldr=s.reduceRight;var x=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r&&n.push(t),e()})},function(t){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.filter=f(x),s.filterSeries=g(x),s.select=s.filter,s.selectSeries=s.filterSeries;var b=function(t,e,r,i){var n=[];e=u(e,function(t,e){return{index:e,value:t}}),t(e,function(t,e){r(t.value,function(r){r||n.push(t),e()})},function(t){i(u(n.sort(function(t,e){return t.index-e.index}),function(t){return t.value}))})};s.reject=f(b),s.rejectSeries=g(b);var _=function(t,e,r,i){t(e,function(t,e){r(t,function(r){r?(i(t),i=function(){}):e()})},function(t){i()})};s.detect=f(_),s.detectSeries=g(_),s.some=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t&&(r(!0),r=function(){}),i()})},function(t){r(!1)})},s.any=s.some,s.every=function(t,e,r){s.each(t,function(t,i){e(t,function(t){t||(r(!1),r=function(){}),i()})},function(t){r(!0)})},s.all=s.every,s.sortBy=function(t,e,r){s.map(t,function(t,r){e(t,function(e,i){e?r(e):r(null,{value:t,criteria:i})})},function(t,e){if(t)return r(t);var i=function(t,e){var r=t.criteria,i=e.criteria;return i>r?-1:r>i?1:0};r(null,u(e.sort(i),function(t){return t.value}))})},s.auto=function(t,e){e=e||function(){};var r=p(t),i=r.length;if(!i)return e();var n={},o=[],a=function(t){o.unshift(t)},u=function(t){for(var e=0;e<o.length;e+=1)if(o[e]===t)return void o.splice(e,1)},d=function(){i--,l(o.slice(0),function(t){t()})};a(function(){if(!i){var t=e;e=function(){},t(null,n)}}),l(r,function(r){var i=h(t[r])?t[r]:[t[r]],o=function(t){var i=Array.prototype.slice.call(arguments,1);if(i.length<=1&&(i=i[0]),t){var o={};l(p(n),function(t){o[t]=n[t]}),o[r]=i,e(t,o),e=function(){}}else n[r]=i,s.setImmediate(d)},f=i.slice(0,Math.abs(i.length-1))||[],v=function(){return c(f,function(t,e){return t&&n.hasOwnProperty(e)},!0)&&!n.hasOwnProperty(r)};if(v())i[i.length-1](o,n);else{var g=function(){v()&&(u(g),i[i.length-1](o,n))};a(g)}})},s.retry=function(t,e,r){var i=5,n=[];"function"==typeof t&&(r=e,e=t,t=i),t=parseInt(t,10)||i;var o=function(i,o){for(var a=function(t,e){return function(r){t(function(t,i){r(!t||e,{err:t,result:i})},o)}};t;)n.push(a(e,!(t-=1)));s.series(n,function(t,e){e=e[e.length-1],(i||r)(e.err,e.result)})};return r?o():o},s.waterfall=function(t,e){if(e=e||function(){},!h(t)){var r=new Error("First argument to waterfall must be an array of functions");return e(r)}if(!t.length)return e();var i=function(t){return function(r){if(r)e.apply(null,arguments),e=function(){};else{var n=Array.prototype.slice.call(arguments,1),o=t.next();n.push(o?i(o):e),s.setImmediate(function(){t.apply(null,n)})}}};i(s.iterator(t))()};var T=function(t,e,r){if(r=r||function(){},h(e))t.map(e,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},r);else{var i={};t.each(p(e),function(t,r){e[t](function(e){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),i[t]=n,r(e)})},function(t){r(t,i)})}};s.parallel=function(t,e){T({map:s.map,each:s.each},t,e)},s.parallelLimit=function(t,e,r){T({map:y(e),each:d(e)},t,r)},s.series=function(t,e){if(e=e||function(){},h(t))s.mapSeries(t,function(t,e){t&&t(function(t){var r=Array.prototype.slice.call(arguments,1);r.length<=1&&(r=r[0]),e.call(null,t,r)})},e);else{var r={};s.eachSeries(p(t),function(e,i){t[e](function(t){var n=Array.prototype.slice.call(arguments,1);n.length<=1&&(n=n[0]),r[e]=n,i(t)})},function(t){e(t,r)})}},s.iterator=function(t){var e=function(r){var i=function(){return t.length&&t[r].apply(null,arguments),i.next()};return i.next=function(){return r<t.length-1?e(r+1):null},i};return e(0)},s.apply=function(t){var e=Array.prototype.slice.call(arguments,1);return function(){return t.apply(null,e.concat(Array.prototype.slice.call(arguments)))}};var E=function(t,e,r,i){var n=[];t(e,function(t,e){r(t,function(t,r){n=n.concat(r||[]),e(t)})},function(t){i(t,n)})};s.concat=f(E),s.concatSeries=g(E),s.whilst=function(t,e,r){t()?e(function(i){return i?r(i):void s.whilst(t,e,r)}):r()},s.doWhilst=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?s.doWhilst(t,e,r):r()})},s.until=function(t,e,r){t()?r():e(function(i){return i?r(i):void s.until(t,e,r)})},s.doUntil=function(t,e,r){t(function(i){if(i)return r(i);var n=Array.prototype.slice.call(arguments,1);e.apply(null,n)?r():s.doUntil(t,e,r)})},s.queue=function(t,e){function r(t,e,r,i){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var n={data:e,callback:"function"==typeof i?i:null};r?t.tasks.unshift(n):t.tasks.push(n),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}void 0===e&&(e=1);var n=0,o={tasks:[],concurrency:e,saturated:null,empty:null,drain:null,started:!1,paused:!1,push:function(t,e){r(o,t,!1,e)},kill:function(){o.drain=null,o.tasks=[]},unshift:function(t,e){r(o,t,!0,e)},process:function(){if(!o.paused&&n<o.concurrency&&o.tasks.length){var e=o.tasks.shift();o.empty&&0===o.tasks.length&&o.empty(),n+=1;var r=function(){n-=1,e.callback&&e.callback.apply(e,arguments),o.drain&&o.tasks.length+n===0&&o.drain(),o.process()},s=i(r);t(e.data,s)}},length:function(){return o.tasks.length},running:function(){return n},idle:function(){return o.tasks.length+n===0},pause:function(){o.paused!==!0&&(o.paused=!0,o.process())},resume:function(){o.paused!==!1&&(o.paused=!1,o.process())}};return o},s.priorityQueue=function(t,e){function r(t,e){return t.priority-e.priority}function i(t,e,r){for(var i=-1,n=t.length-1;n>i;){var o=i+(n-i+1>>>1);r(e,t[o])>=0?i=o:n=o-1}return i}function n(t,e,n,o){return t.started||(t.started=!0),h(e)||(e=[e]),0==e.length?s.setImmediate(function(){t.drain&&t.drain()}):void l(e,function(e){var a={data:e,priority:n,callback:"function"==typeof o?o:null};t.tasks.splice(i(t.tasks,a,r)+1,0,a),t.saturated&&t.tasks.length===t.concurrency&&t.saturated(),s.setImmediate(t.process)})}var o=s.queue(t,e);return o.push=function(t,e,r){n(o,t,e,r)},delete o.unshift,o},s.cargo=function(t,e){var r=!1,i=[],n={tasks:i,payload:e,saturated:null,empty:null,drain:null,drained:!0,push:function(t,r){h(t)||(t=[t]),l(t,function(t){i.push({data:t,callback:"function"==typeof r?r:null}),n.drained=!1,n.saturated&&i.length===e&&n.saturated()}),s.setImmediate(n.process)},process:function o(){if(!r){if(0===i.length)return n.drain&&!n.drained&&n.drain(),void(n.drained=!0);var s="number"==typeof e?i.splice(0,e):i.splice(0,i.length),a=u(s,function(t){return t.data});n.empty&&n.empty(),r=!0,t(a,function(){r=!1;var t=arguments;l(s,function(e){e.callback&&e.callback.apply(null,t)}),o()})}},length:function(){return i.length},running:function(){return r}};return n};var S=function(t){return function(e){var r=Array.prototype.slice.call(arguments,1);e.apply(null,r.concat([function(e){var r=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(e?console.error&&console.error(e):console[t]&&l(r,function(e){console[t](e)}))}]))}};s.log=S("log"),s.dir=S("dir"),s.memoize=function(t,e){var r={},i={};e=e||function(t){return t};var n=function(){var n=Array.prototype.slice.call(arguments),o=n.pop(),a=e.apply(null,n);a in r?s.nextTick(function(){o.apply(null,r[a])}):a in i?i[a].push(o):(i[a]=[o],t.apply(null,n.concat([function(){r[a]=arguments;var t=i[a];delete i[a];for(var e=0,n=t.length;n>e;e++)t[e].apply(null,arguments)}])))};return n.memo=r,n.unmemoized=t,n},s.unmemoize=function(t){return function(){return(t.unmemoized||t).apply(null,arguments)}},s.times=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.map(i,e,r)},s.timesSeries=function(t,e,r){for(var i=[],n=0;t>n;n++)i.push(n);return s.mapSeries(i,e,r)},s.seq=function(){var t=arguments;return function(){var e=this,r=Array.prototype.slice.call(arguments),i=r.pop();s.reduce(t,r,function(t,r,i){r.apply(e,t.concat([function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);i(t,e)}]))},function(t,r){i.apply(e,[t].concat(r))})}},s.compose=function(){return s.seq.apply(null,Array.prototype.reverse.call(arguments))};var C=function(t,e){var r=function(){var r=this,i=Array.prototype.slice.call(arguments),n=i.pop();return t(e,function(t,e){t.apply(r,i.concat([e]))},n)};if(arguments.length>2){var i=Array.prototype.slice.call(arguments,2);return r.apply(this,i)}return r};s.applyEach=f(C),s.applyEachSeries=g(C),s.forever=function(t,e){function r(i){if(i){if(e)return e(i);throw i}t(r)}r()},"undefined"!=typeof r&&r.exports?r.exports=s:"undefined"!=typeof t&&t.amd?t([],function(){return s}):n.async=s}()}).call(this,e("_process"))},{_process:4}],14:[function(t,e,r){arguments[4][11][0].apply(r,arguments)},{dup:11}],15:[function(t,e,r){function i(t,e){a.call(this),e=e||10,this.baseUrl=t||"",this.progress=0,this.loading=!1,this._progressChunk=0,this._beforeMiddleware=[],this._afterMiddleware=[],this._boundLoadResource=this._loadResource.bind(this),this._boundOnLoad=this._onLoad.bind(this),this._buffer=[],this._numToLoad=0,this._queue=n.queue(this._boundLoadResource,e),this.resources={}}var n=t("async"),o=t("url"),s=t("./Resource"),a=t("eventemitter3");i.prototype=Object.create(a.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.add=i.prototype.enqueue=function(t,e,r,i){if(Array.isArray(t)){for(var n=0;n<t.length;++n)this.add(t[n]);return this}if("object"==typeof t&&(i=e||t.callback||t.onComplete,r=t,e=t.url,t=t.name||t.key||t.url),"string"!=typeof e&&(i=r,r=e,e=t),"string"!=typeof e)throw new Error("No url passed to add resource to loader.");if("function"==typeof r&&(i=r,r=null),this.resources[t])throw new Error('Resource with name "'+t+'" already exists.');return e=this._handleBaseUrl(e),this.resources[t]=new s(t,e,r),"function"==typeof i&&this.resources[t].once("afterMiddleware",i),this._numToLoad++,this._queue.started?(this._queue.push(this.resources[t]),this._progressChunk=(100-this.progress)/(this._queue.length()+this._queue.running())):(this._buffer.push(this.resources[t]),this._progressChunk=100/this._buffer.length),this},i.prototype._handleBaseUrl=function(t){var e=o.parse(t);return e.protocol||0===e.pathname.indexOf("//")?t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&t.lastIndexOf("/")!==t.length-1?this.baseUrl+"/"+t:this.baseUrl+t},i.prototype.before=i.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},i.prototype.after=i.prototype.use=function(t){return this._afterMiddleware.push(t),this},i.prototype.reset=function(){this.progress=0,this.loading=!1,this._progressChunk=0,this._buffer.length=0,this._numToLoad=0,this._queue.kill(),this._queue.started=!1,this.resources={}},i.prototype.load=function(t){if("function"==typeof t&&this.once("complete",t),this._queue.started)return this;this.emit("start",this);for(var e=0;e<this._buffer.length;++e)this._queue.push(this._buffer[e]);return this._buffer.length=0,this},i.prototype._loadResource=function(t,e){var r=this;t._dequeue=e,this._runMiddleware(t,this._beforeMiddleware,function(){t.load(r._boundOnLoad)})},i.prototype._onComplete=function(){this.emit("complete",this,this.resources)},i.prototype._onLoad=function(t){this.progress+=this._progressChunk,this.emit("progress",this,t),t.error?this.emit("error",t.error,this,t):this.emit("load",this,t),this._runMiddleware(t,this._afterMiddleware,function(){t.emit("afterMiddleware",t),this._numToLoad--,0===this._numToLoad&&this._onComplete()}),t._dequeue()},i.prototype._runMiddleware=function(t,e,r){var i=this;n.eachSeries(e,function(e,r){e.call(i,t,r)},r.bind(this,t))},i.LOAD_TYPE=s.LOAD_TYPE,i.XHR_READY_STATE=s.XHR_READY_STATE,i.XHR_RESPONSE_TYPE=s.XHR_RESPONSE_TYPE},{"./Resource":16,async:13,eventemitter3:14,url:9}],16:[function(t,e,r){function i(t,e,r){if(s.call(this),r=r||{},"string"!=typeof t||"string"!=typeof e)throw new Error("Both name and url are required for constructing a resource.");this.name=t,this.url=e,this.isDataUrl=0===this.url.indexOf("data:"),this.data=null,this.crossOrigin=r.crossOrigin===!0?"anonymous":null,this.loadType=r.loadType||this._determineLoadType(),this.xhrType=r.xhrType,this.error=null,this.xhr=null,this.isJson=!1,this.isXml=!1,this.isImage=!1,this.isAudio=!1,this.isVideo=!1,this._dequeue=null,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)}function n(t){return t.toString().replace("object ","")}function o(t,e,r){e&&0===e.indexOf(".")&&(e=e.substring(1)),e&&(t[e]=r)}var s=t("eventemitter3"),a=t("url"),h=!(!window.XDomainRequest||"withCredentials"in new XMLHttpRequest),l=null;i.prototype=Object.create(s.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.complete=function(){this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError),this.data.removeEventListener("load",this._boundComplete),this.data.removeEventListener("progress",this._boundOnProgress),this.data.removeEventListener("canplaythrough",this._boundComplete)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError),this.xhr.removeEventListener("abort",this._boundXhrOnAbort),this.xhr.removeEventListener("progress",this._boundOnProgress),this.xhr.removeEventListener("load",this._boundXhrOnLoad)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null)),this.emit("complete",this)},i.prototype.load=function(t){switch(this.emit("start",this),t&&this.once("complete",t),"string"!=typeof this.crossOrigin&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case i.LOAD_TYPE.IMAGE:this._loadImage();break;case i.LOAD_TYPE.AUDIO:this._loadElement("audio");break;case i.LOAD_TYPE.VIDEO:this._loadElement("video");break;case i.LOAD_TYPE.XHR:default:h&&this.crossOrigin?this._loadXdr():this._loadXhr()}},i.prototype._loadImage=function(){this.data=new Image,this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.data.src=this.url,this.isImage=!0,this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1)},i.prototype._loadElement=function(t){if(this.data=document.createElement(t),Array.isArray(this.url))for(var e=0;e<this.url.length;++e)this.data.appendChild(this._createSource(t,this.url[e]));else this.data.appendChild(this._createSource(t,this.url));this["is"+t[0].toUpperCase()+t.substring(1)]=!0,this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load()},i.prototype._loadXhr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XMLHttpRequest;t.open("GET",this.url,!0),t.responseType=this.xhrType===i.XHR_RESPONSE_TYPE.JSON||this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT?i.XHR_RESPONSE_TYPE.TEXT:this.xhrType,t.addEventListener("error",this._boundXhrOnError,!1),t.addEventListener("abort",this._boundXhrOnAbort,!1),t.addEventListener("progress",this._boundOnProgress,!1),t.addEventListener("load",this._boundXhrOnLoad,!1),t.send()},i.prototype._loadXdr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XDomainRequest;t.timeout=5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXdrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),setTimeout(function(){t.send()},0)},i.prototype._createSource=function(t,e,r){r||(r=t+"/"+e.substr(e.lastIndexOf(".")+1));var i=document.createElement("source");return i.src=e,i.type=r,i},i.prototype._onError=function(t){this.error=new Error("Failed to load element using "+t.target.nodeName),this.complete()},i.prototype._onProgress=function(t){t&&t.lengthComputable&&this.emit("progress",this,t.loaded/t.total)},i.prototype._xhrOnError=function(){this.error=new Error(n(this.xhr)+" Request failed. Status: "+this.xhr.status+', text: "'+this.xhr.statusText+'"'),this.complete()},i.prototype._xhrOnAbort=function(){this.error=new Error(n(this.xhr)+" Request was aborted by the user."),this.complete()},i.prototype._xdrOnTimeout=function(){this.error=new Error(n(this.xhr)+" Request timed out."),this.complete()},i.prototype._xhrOnLoad=function(){var t=this.xhr,e=void 0!==t.status?t.status:200;if(200===e||204===e||0===e&&t.responseText.length>0)if(this.xhrType===i.XHR_RESPONSE_TYPE.TEXT)this.data=t.responseText;else if(this.xhrType===i.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t.responseText),this.isJson=!0}catch(r){this.error=new Error("Error trying to parse loaded json:",r)}else if(this.xhrType===i.XHR_RESPONSE_TYPE.DOCUMENT)try{if(window.DOMParser){var n=new DOMParser;this.data=n.parseFromString(t.responseText,"text/xml")}else{var o=document.createElement("div");o.innerHTML=t.responseText,this.data=o}this.isXml=!0}catch(r){this.error=new Error("Error trying to parse loaded xml:",r)}else this.data=t.response||t.responseText;else this.error=new Error("["+t.status+"]"+t.statusText+":"+t.responseURL);this.complete()},i.prototype._determineCrossOrigin=function(t,e){if(0===t.indexOf("data:"))return"";e=e||window.location,l||(l=document.createElement("a")),l.href=t,t=a.parse(l.href);var r=!t.port&&""===e.port||t.port===e.port;return t.hostname===e.hostname&&r&&t.protocol===e.protocol?"":"anonymous"},i.prototype._determineXhrType=function(){return i._xhrTypeMap[this._getExtension()]||i.XHR_RESPONSE_TYPE.TEXT},i.prototype._determineLoadType=function(){return i._loadTypeMap[this._getExtension()]||i.LOAD_TYPE.XHR},i.prototype._getExtension=function(){var t,e=this.url;if(this.isDataUrl){var r=e.indexOf("/");t=e.substring(r+1,e.indexOf(";",r))}else t=e.substring(e.lastIndexOf(".")+1);return t},i.prototype._getMimeFromXhrType=function(t){switch(t){case i.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case i.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case i.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case i.XHR_RESPONSE_TYPE.JSON:return"application/json";case i.XHR_RESPONSE_TYPE.DEFAULT:case i.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},i.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},i.XHR_READY_STATE={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},i.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"},i._loadTypeMap={gif:i.LOAD_TYPE.IMAGE,png:i.LOAD_TYPE.IMAGE,bmp:i.LOAD_TYPE.IMAGE,jpg:i.LOAD_TYPE.IMAGE,jpeg:i.LOAD_TYPE.IMAGE,tif:i.LOAD_TYPE.IMAGE,tiff:i.LOAD_TYPE.IMAGE,webp:i.LOAD_TYPE.IMAGE,tga:i.LOAD_TYPE.IMAGE},i._xhrTypeMap={xhtml:i.XHR_RESPONSE_TYPE.DOCUMENT,html:i.XHR_RESPONSE_TYPE.DOCUMENT,htm:i.XHR_RESPONSE_TYPE.DOCUMENT,xml:i.XHR_RESPONSE_TYPE.DOCUMENT,tmx:i.XHR_RESPONSE_TYPE.DOCUMENT,tsx:i.XHR_RESPONSE_TYPE.DOCUMENT,svg:i.XHR_RESPONSE_TYPE.DOCUMENT,gif:i.XHR_RESPONSE_TYPE.BLOB,png:i.XHR_RESPONSE_TYPE.BLOB,bmp:i.XHR_RESPONSE_TYPE.BLOB,jpg:i.XHR_RESPONSE_TYPE.BLOB,jpeg:i.XHR_RESPONSE_TYPE.BLOB,tif:i.XHR_RESPONSE_TYPE.BLOB,tiff:i.XHR_RESPONSE_TYPE.BLOB,webp:i.XHR_RESPONSE_TYPE.BLOB,tga:i.XHR_RESPONSE_TYPE.BLOB,json:i.XHR_RESPONSE_TYPE.JSON,text:i.XHR_RESPONSE_TYPE.TEXT,txt:i.XHR_RESPONSE_TYPE.TEXT},i.setExtensionLoadType=function(t,e){o(i._loadTypeMap,t,e)},i.setExtensionXhrType=function(t,e){o(i._xhrTypeMap,t,e)}},{eventemitter3:14,url:9}],17:[function(t,e,r){e.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encodeBinary:function(t){for(var e,r="",i=new Array(4),n=0,o=0,s=0;n<t.length;){for(e=new Array(3),o=0;o<e.length;o++)e[o]=n<t.length?255&t.charCodeAt(n++):0;switch(i[0]=e[0]>>2,i[1]=(3&e[0])<<4|e[1]>>4,i[2]=(15&e[1])<<2|e[2]>>6,i[3]=63&e[2],s=n-(t.length-1)){case 2:i[3]=64,i[2]=64;break;case 1:i[3]=64}for(o=0;o<i.length;o++)r+=this._keyStr.charAt(i[o])}return r}}},{}],18:[function(t,e,r){e.exports=t("./Loader"),e.exports.Resource=t("./Resource"),e.exports.middleware={caching:{memory:t("./middlewares/caching/memory")},parsing:{blob:t("./middlewares/parsing/blob")}}},{"./Loader":15,"./Resource":16,"./middlewares/caching/memory":19,"./middlewares/parsing/blob":20}],19:[function(t,e,r){var i={};e.exports=function(){return function(t,e){i[t.url]?(t.data=i[t.url],t.complete()):(t.once("complete",function(){i[this.url]=this.data}),e())}}},{}],20:[function(t,e,r){var i=t("../../Resource"),n=t("../../b64");window.URL=window.URL||window.webkitURL,e.exports=function(){return function(t,e){if(!t.data)return e();if(t.xhr&&t.xhrType===i.XHR_RESPONSE_TYPE.BLOB)if(window.Blob&&"string"!=typeof t.data){if(0===t.data.type.indexOf("image")){var r=URL.createObjectURL(t.data);t.blob=t.data,t.data=new Image,t.data.src=r,t.isImage=!0,t.data.onload=function(){URL.revokeObjectURL(r),t.data.onload=null,e()}}}else{var o=t.xhr.getResponseHeader("content-type");o&&0===o.indexOf("image")&&(t.data=new Image,t.data.src="data:"+o+";base64,"+n.encodeBinary(t.xhr.responseText),t.isImage=!0,t.data.onload=function(){t.data.onload=null,e()})}else e()}}},{"../../Resource":16,"../../b64":17}],21:[function(t,e,r){e.exports={name:"pixi.js",version:"3.0.6",description:"Pixi.js is a fast lightweight 2D library that works across all devices.",author:"Mat Groves",contributors:["Chad Engler <chad@pantherdev.com>","Richard Davey <rdavey@gmail.com>"],main:"./src/index.js",homepage:"http://goodboydigital.com/",bugs:"https://github.com/GoodBoyDigital/pixi.js/issues",license:"MIT",repository:{type:"git",url:"https://github.com/GoodBoyDigital/pixi.js.git"},scripts:{test:"gulp && testem ci",docs:"jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"},dependencies:{async:"^0.9.0",brfs:"^1.4.0",earcut:"^2.0.0",eventemitter3:"^1.1.0","object-assign":"^2.0.0","resource-loader":"^1.6.0"},devDependencies:{browserify:"^9.0.8",chai:"^2.2.0",del:"^1.1.1",gulp:"^3.8.11","gulp-cached":"^1.0.4","gulp-concat":"^2.5.2","gulp-debug":"^2.0.1","gulp-jshint":"^1.10.0","gulp-mirror":"^0.4.0","gulp-plumber":"^1.0.0","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.5.2","gulp-uglify":"^1.2.0","gulp-util":"^3.0.4","jaguarjs-jsdoc":"git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",jsdoc:"^3.3.0-beta3","jshint-summary":"^0.4.0",minimist:"^1.1.1",mocha:"^2.2.4","require-dir":"^0.3.0","run-sequence":"^1.0.2",testem:"^0.8.2","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0",watchify:"^3.1.2"},browserify:{transform:["brfs"]}}},{}],22:[function(t,e,r){var i={VERSION:t("../../package.json").version,PI_2:2*Math.PI,RAD_TO_DEG:180/Math.PI,DEG_TO_RAD:Math.PI/180,TARGET_FPMS:.06,RENDERER_TYPE:{UNKNOWN:0,WEBGL:1,CANVAS:2},BLEND_MODES:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},SCALE_MODES:{DEFAULT:0,LINEAR:0,NEAREST:1},RETINA_PREFIX:/@(.+)x/,RESOLUTION:1,FILTER_RESOLUTION:1,DEFAULT_RENDER_OPTIONS:{view:null,resolution:1,antialias:!1,forceFXAA:!1,autoResize:!1,transparent:!1,backgroundColor:0,clearBeforeRender:!0,preserveDrawingBuffer:!1},SHAPES:{POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},SPRITE_BATCH_SIZE:2e3};e.exports=i},{"../../package.json":21}],23:[function(t,e,r){function i(){o.call(this),this.children=[]}var n=t("../math"),o=t("./DisplayObject"),s=t("../textures/RenderTexture"),a=new n.Matrix;i.prototype=Object.create(o.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{width:{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t}},height:{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t}}}),i.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},i.prototype.addChildAt=function(t,e){if(t===this)return t;if(e>=0&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),t;throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length)},i.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),i=this.getChildIndex(e);if(0>r||0>i)throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");this.children[r]=e,this.children[i]=t}},i.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(-1===e)throw new Error("The supplied DisplayObject must be a child of the caller");return e},i.prototype.setChildIndex=function(t,e){if(0>e||e>=this.children.length)throw new Error("The supplied index is out of bounds");var r=this.getChildIndex(t);this.children.splice(r,1),this.children.splice(e,0,t)},i.prototype.getChildAt=function(t){if(0>t||t>=this.children.length)throw new Error("getChildAt: Supplied index "+t+" does not exist in the child list, or the supplied DisplayObject is not a child of the caller");return this.children[t]},i.prototype.removeChild=function(t){var e=this.children.indexOf(t);if(-1!==e)return this.removeChildAt(e)},i.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,this.children.splice(t,1),e},i.prototype.removeChildren=function(t,e){var r=t||0,i="number"==typeof e?e:this.children.length,n=i-r;if(n>0&&i>=n){for(var o=this.children.splice(r,n),s=0;s<o.length;++s)o[s].parent=null;return o}if(0===n&&0===this.children.length)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},i.prototype.generateTexture=function(t,e,r){var i=this.getLocalBounds(),n=new s(t,0|i.width,0|i.height,t,r,e);return a.tx=-i.x,a.ty=-i.y,n.render(this,a),n},i.prototype.updateTransform=function(){if(this.visible){this.displayObjectUpdateTransform();for(var t=0,e=this.children.length;e>t;++t)this.children[t].updateTransform()}},i.prototype.containerUpdateTransform=i.prototype.updateTransform,i.prototype.getBounds=function(){
if(!this._currentBounds){if(0===this.children.length)return n.Rectangle.EMPTY;for(var t,e,r,i=1/0,o=1/0,s=-(1/0),a=-(1/0),h=!1,l=0,u=this.children.length;u>l;++l){var c=this.children[l];c.visible&&(h=!0,t=this.children[l].getBounds(),i=i<t.x?i:t.x,o=o<t.y?o:t.y,e=t.width+t.x,r=t.height+t.y,s=s>e?s:e,a=a>r?a:r)}if(!h)return n.Rectangle.EMPTY;var p=this._bounds;p.x=i,p.y=o,p.width=s-i,p.height=a-o,this._currentBounds=p}return this._currentBounds},i.prototype.containerGetBounds=i.prototype.getBounds,i.prototype.getLocalBounds=function(){var t=this.worldTransform;this.worldTransform=n.Matrix.IDENTITY;for(var e=0,r=this.children.length;r>e;++e)this.children[e].updateTransform();return this.worldTransform=t,this._currentBounds=null,this.getBounds(n.Matrix.IDENTITY)},i.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){var e,r;if(this._mask||this._filters){for(t.currentRenderer.flush(),this._filters&&t.filterManager.pushFilter(this,this._filters),this._mask&&t.maskManager.pushMask(this,this._mask),t.currentRenderer.start(),this._renderWebGL(t),e=0,r=this.children.length;r>e;e++)this.children[e].renderWebGL(t);t.currentRenderer.flush(),this._mask&&t.maskManager.popMask(this,this._mask),this._filters&&t.filterManager.popFilter(),t.currentRenderer.start()}else for(this._renderWebGL(t),e=0,r=this.children.length;r>e;++e)this.children[e].renderWebGL(t)}},i.prototype._renderWebGL=function(t){},i.prototype._renderCanvas=function(t){},i.prototype.renderCanvas=function(t){if(this.visible&&!(this.alpha<=0)&&this.renderable){this._mask&&t.maskManager.pushMask(this._mask,t),this._renderCanvas(t);for(var e=0,r=this.children.length;r>e;++e)this.children[e].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},i.prototype.destroy=function(t){if(o.prototype.destroy.call(this),t)for(var e=0,r=this.children.length;r>e;++e)this.children[e].destroy(t);this.removeChildren(),this.children=null}},{"../math":32,"../textures/RenderTexture":70,"./DisplayObject":24}],24:[function(t,e,r){function i(){s.call(this),this.position=new n.Point,this.scale=new n.Point(1,1),this.pivot=new n.Point(0,0),this.rotation=0,this.alpha=1,this.visible=!0,this.renderable=!0,this.parent=null,this.worldAlpha=1,this.worldTransform=new n.Matrix,this.filterArea=null,this._sr=0,this._cr=1,this._bounds=new n.Rectangle(0,0,1,1),this._currentBounds=null,this._mask=null,this._cacheAsBitmap=!1,this._cachedObject=null}var n=t("../math"),o=t("../textures/RenderTexture"),s=t("eventemitter3"),a=t("../const"),h=new n.Matrix;i.prototype=Object.create(s.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{x:{get:function(){return this.position.x},set:function(t){this.position.x=t}},y:{get:function(){return this.position.y},set:function(t){this.position.y=t}},worldVisible:{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},mask:{get:function(){return this._mask},set:function(t){this._mask&&(this._mask.renderable=!0),this._mask=t,this._mask&&(this._mask.renderable=!1)}},filters:{get:function(){return this._filters&&this._filters.slice()},set:function(t){this._filters=t&&t.slice()}}}),i.prototype.updateTransform=function(){var t,e,r,i,n,o,s=this.parent.worldTransform,h=this.worldTransform;this.rotation%a.PI_2?(this.rotation!==this.rotationCache&&(this.rotationCache=this.rotation,this._sr=Math.sin(this.rotation),this._cr=Math.cos(this.rotation)),t=this._cr*this.scale.x,e=this._sr*this.scale.x,r=-this._sr*this.scale.y,i=this._cr*this.scale.y,n=this.position.x,o=this.position.y,(this.pivot.x||this.pivot.y)&&(n-=this.pivot.x*t+this.pivot.y*r,o-=this.pivot.x*e+this.pivot.y*i),h.a=t*s.a+e*s.c,h.b=t*s.b+e*s.d,h.c=r*s.a+i*s.c,h.d=r*s.b+i*s.d,h.tx=n*s.a+o*s.c+s.tx,h.ty=n*s.b+o*s.d+s.ty):(t=this.scale.x,i=this.scale.y,n=this.position.x-this.pivot.x*t,o=this.position.y-this.pivot.y*i,h.a=t*s.a,h.b=t*s.b,h.c=i*s.c,h.d=i*s.d,h.tx=n*s.a+o*s.c+s.tx,h.ty=n*s.b+o*s.d+s.ty),this.worldAlpha=this.alpha*this.parent.worldAlpha,this._currentBounds=null},i.prototype.displayObjectUpdateTransform=i.prototype.updateTransform,i.prototype.getBounds=function(t){return n.Rectangle.EMPTY},i.prototype.getLocalBounds=function(){return this.getBounds(n.Matrix.IDENTITY)},i.prototype.toGlobal=function(t){return this.displayObjectUpdateTransform(),this.worldTransform.apply(t)},i.prototype.toLocal=function(t,e){return e&&(t=e.toGlobal(t)),this.displayObjectUpdateTransform(),this.worldTransform.applyInverse(t)},i.prototype.renderWebGL=function(t){},i.prototype.renderCanvas=function(t){},i.prototype.generateTexture=function(t,e,r){var i=this.getLocalBounds(),n=new o(t,0|i.width,0|i.height,e,r);return h.tx=-i.x,h.ty=-i.y,n.render(this,h),n},i.prototype.destroy=function(){this.position=null,this.scale=null,this.pivot=null,this.parent=null,this._bounds=null,this._currentBounds=null,this._mask=null,this.worldTransform=null,this.filterArea=null}},{"../const":22,"../math":32,"../textures/RenderTexture":70,eventemitter3:11}],25:[function(t,e,r){function i(){n.call(this),this.fillAlpha=1,this.lineWidth=0,this.lineColor=0,this.graphicsData=[],this.tint=16777215,this._prevTint=16777215,this.blendMode=u.BLEND_MODES.NORMAL,this.currentPath=null,this._webGL={},this.isMask=!1,this.boundsPadding=0,this._localBounds=new l.Rectangle(0,0,1,1),this.dirty=!0,this.glDirty=!1,this.boundsDirty=!0,this.cachedSpriteDirty=!1}var n=t("../display/Container"),o=t("../textures/Texture"),s=t("../renderers/canvas/utils/CanvasBuffer"),a=t("../renderers/canvas/utils/CanvasGraphics"),h=t("./GraphicsData"),l=t("../math"),u=t("../const"),c=new l.Point;i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{}),i.prototype.clone=function(){var t=new i;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth,t.lineColor=this.lineColor,t.tint=this.tint,t.blendMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dirty=this.dirty,t.glDirty=this.glDirty,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var e=0;e<this.graphicsData.length;++e)t.graphicsData.push(this.graphicsData[e].clone());return t.currentPath=t.graphicsData[t.graphicsData.length-1],t.updateLocalBounds(),t},i.prototype.lineStyle=function(t,e,r){return this.lineWidth=t||0,this.lineColor=e||0,this.lineAlpha=void 0===r?1:r,this.currentPath&&(this.currentPath.shape.points.length?this.drawShape(new l.Polygon(this.currentPath.shape.points.slice(-2))):(this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha)),this},i.prototype.moveTo=function(t,e){return this.drawShape(new l.Polygon([t,e])),this},i.prototype.lineTo=function(t,e){return this.currentPath.shape.points.push(t,e),this.dirty=!0,this},i.prototype.quadraticCurveTo=function(t,e,r,i){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var n,o,s=20,a=this.currentPath.shape.points;0===a.length&&this.moveTo(0,0);for(var h=a[a.length-2],l=a[a.length-1],u=0,c=1;s>=c;++c)u=c/s,n=h+(t-h)*u,o=l+(e-l)*u,a.push(n+(t+(r-t)*u-n)*u,o+(e+(i-e)*u-o)*u);return this.dirty=this.boundsDirty=!0,this},i.prototype.bezierCurveTo=function(t,e,r,i,n,o){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);for(var s,a,h,l,u,c=20,p=this.currentPath.shape.points,d=p[p.length-2],f=p[p.length-1],v=0,g=1;c>=g;++g)v=g/c,s=1-v,a=s*s,h=a*s,l=v*v,u=l*v,p.push(h*d+3*a*v*t+3*s*l*r+u*n,h*f+3*a*v*e+3*s*l*i+u*o);return this.dirty=this.boundsDirty=!0,this},i.prototype.arcTo=function(t,e,r,i,n){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):this.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length-1],h=a-e,l=s-t,u=i-e,c=r-t,p=Math.abs(h*c-l*u);if(1e-8>p||0===n)(o[o.length-2]!==t||o[o.length-1]!==e)&&o.push(t,e);else{var d=h*h+l*l,f=u*u+c*c,v=h*u+l*c,g=n*Math.sqrt(d)/p,m=n*Math.sqrt(f)/p,y=g*v/d,x=m*v/f,b=g*c+m*l,_=g*u+m*h,T=l*(m+y),E=h*(m+y),S=c*(g+x),C=u*(g+x),w=Math.atan2(E-_,T-b),A=Math.atan2(C-_,S-b);this.arc(b+t,_+e,n,w,A,l*u>c*h)}return this.dirty=this.boundsDirty=!0,this},i.prototype.arc=function(t,e,r,i,n,o){if(o=o||!1,i===n)return this;!o&&i>=n?n+=2*Math.PI:o&&n>=i&&(i+=2*Math.PI);var s=o?-1*(i-n):n-i,a=40*Math.ceil(Math.abs(s)/(2*Math.PI));if(0===s)return this;var h=t+Math.cos(i)*r,l=e+Math.sin(i)*r;this.currentPath?o&&this.filling?this.currentPath.shape.points.push(t,e):this.currentPath.shape.points.push(h,l):o&&this.filling?this.moveTo(t,e):this.moveTo(h,l);for(var u=this.currentPath.shape.points,c=s/(2*a),p=2*c,d=Math.cos(c),f=Math.sin(c),v=a-1,g=v%1/v,m=0;v>=m;m++){var y=m+g*m,x=c+i+p*y,b=Math.cos(x),_=-Math.sin(x);u.push((d*b+f*_)*r+t,(d*-_+f*b)*r+e)}return this.dirty=this.boundsDirty=!0,this},i.prototype.beginFill=function(t,e){return this.filling=!0,this.fillColor=t||0,this.fillAlpha=void 0===e?1:e,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.currentPath.fillAlpha=this.fillAlpha),this},i.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},i.prototype.drawRect=function(t,e,r,i){return this.drawShape(new l.Rectangle(t,e,r,i)),this},i.prototype.drawRoundedRect=function(t,e,r,i,n){return this.drawShape(new l.RoundedRectangle(t,e,r,i,n)),this},i.prototype.drawCircle=function(t,e,r){return this.drawShape(new l.Circle(t,e,r)),this},i.prototype.drawEllipse=function(t,e,r,i){return this.drawShape(new l.Ellipse(t,e,r,i)),this},i.prototype.drawPolygon=function(t){var e=t;if(!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;++r)e[r]=arguments[r]}return this.drawShape(new l.Polygon(e)),this},i.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this.clearDirty=!0,this.graphicsData=[],this},i.prototype.generateTexture=function(t,e,r){e=e||1;var i=this.getLocalBounds(),n=new s(i.width*e,i.height*e),h=o.fromCanvas(n.canvas,r);return h.baseTexture.resolution=e,n.context.scale(e,e),n.context.translate(-i.x,-i.y),a.renderGraphics(this,n.context),h},i.prototype._renderWebGL=function(t){this.glDirty&&(this.dirty=!0,this.glDirty=!1),t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this)},i.prototype._renderCanvas=function(t){if(this.isMask!==!0){this._prevTint!==this.tint&&(this.dirty=!0,this._prevTint=this.tint);var e=t.context,r=this.worldTransform;this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,e.globalCompositeOperation=t.blendModes[t.currentBlendMode]);var i=t.resolution;e.setTransform(r.a*i,r.b*i,r.c*i,r.d*i,r.tx*i,r.ty*i),a.renderGraphics(this,e)}},i.prototype.getBounds=function(t){if(!this._currentBounds){if(!this.renderable)return l.Rectangle.EMPTY;this.boundsDirty&&(this.updateLocalBounds(),this.glDirty=!0,this.cachedSpriteDirty=!0,this.boundsDirty=!1);var e=this._localBounds,r=e.x,i=e.width+e.x,n=e.y,o=e.height+e.y,s=t||this.worldTransform,a=s.a,h=s.b,u=s.c,c=s.d,p=s.tx,d=s.ty,f=a*i+u*o+p,v=c*o+h*i+d,g=a*r+u*o+p,m=c*o+h*r+d,y=a*r+u*n+p,x=c*n+h*r+d,b=a*i+u*n+p,_=c*n+h*i+d,T=f,E=v,S=f,C=v;S=S>g?g:S,S=S>y?y:S,S=S>b?b:S,C=C>m?m:C,C=C>x?x:C,C=C>_?_:C,T=g>T?g:T,T=y>T?y:T,T=b>T?b:T,E=m>E?m:E,E=x>E?x:E,E=_>E?_:E,this._bounds.x=S,this._bounds.width=T-S,this._bounds.y=C,this._bounds.height=E-C,this._currentBounds=this._bounds}return this._currentBounds},i.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,c);for(var e=this.graphicsData,r=0;r<e.length;r++){var i=e[r];if(i.fill&&i.shape&&i.shape.contains(c.x,c.y))return!0}return!1},i.prototype.updateLocalBounds=function(){var t=1/0,e=-(1/0),r=1/0,i=-(1/0);if(this.graphicsData.length)for(var n,o,s,a,h,l,c=0;c<this.graphicsData.length;c++){var p=this.graphicsData[c],d=p.type,f=p.lineWidth;if(n=p.shape,d===u.SHAPES.RECT||d===u.SHAPES.RREC)s=n.x-f/2,a=n.y-f/2,h=n.width+f,l=n.height+f,t=t>s?s:t,e=s+h>e?s+h:e,r=r>a?a:r,i=a+l>i?a+l:i;else if(d===u.SHAPES.CIRC)s=n.x,a=n.y,h=n.radius+f/2,l=n.radius+f/2,t=t>s-h?s-h:t,e=s+h>e?s+h:e,r=r>a-l?a-l:r,i=a+l>i?a+l:i;else if(d===u.SHAPES.ELIP)s=n.x,a=n.y,h=n.width+f/2,l=n.height+f/2,t=t>s-h?s-h:t,e=s+h>e?s+h:e,r=r>a-l?a-l:r,i=a+l>i?a+l:i;else{o=n.points;for(var v=0;v<o.length;v+=2)s=o[v],a=o[v+1],t=t>s-f?s-f:t,e=s+f>e?s+f:e,r=r>a-f?a-f:r,i=a+f>i?a+f:i}}else t=0,e=0,r=0,i=0;var g=this.boundsPadding;this._localBounds.x=t-g,this._localBounds.width=e-t+2*g,this._localBounds.y=r-g,this._localBounds.height=i-r+2*g},i.prototype.drawShape=function(t){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null;var e=new h(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,t);return this.graphicsData.push(e),e.type===u.SHAPES.POLY&&(e.shape.closed=this.filling,this.currentPath=e),this.dirty=this.boundsDirty=!0,e},i.prototype.destroy=function(){n.prototype.destroy.apply(this,arguments);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();for(var e in this._webgl)for(var r=0;r<this._webgl[e].data.length;++r)this._webgl[e].data[r].destroy();this.graphicsData=null,this.currentPath=null,this._webgl=null,this._localBounds=null}},{"../const":22,"../display/Container":23,"../math":32,"../renderers/canvas/utils/CanvasBuffer":44,"../renderers/canvas/utils/CanvasGraphics":45,"../textures/Texture":71,"./GraphicsData":26}],26:[function(t,e,r){function i(t,e,r,i,n,o,s){this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this._lineTint=e,this.fillColor=i,this.fillAlpha=n,this._fillTint=i,this.fill=o,this.shape=s,this.type=s.type}i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},i.prototype.destroy=function(){this.shape=null}},{}],27:[function(t,e,r){function i(t){a.call(this,t),this.graphicsDataPool=[],this.primitiveShader=null,this.complexPrimitiveShader=null}var n=t("../../utils"),o=t("../../math"),s=t("../../const"),a=t("../../renderers/webgl/utils/ObjectRenderer"),h=t("../../renderers/webgl/WebGLRenderer"),l=t("./WebGLGraphicsData"),u=t("earcut");i.prototype=Object.create(a.prototype),i.prototype.constructor=i,e.exports=i,h.registerPlugin("graphics",i),i.prototype.onContextChange=function(){},i.prototype.destroy=function(){a.prototype.destroy.call(this);for(var t=0;t<this.graphicsDataPool.length;++t)this.graphicsDataPool[t].destroy();this.graphicsDataPool=null},i.prototype.render=function(t){var e,r=this.renderer,i=r.gl,o=r.shaderManager.plugins.primitiveShader;t.dirty&&this.updateGraphics(t,i);var s=t._webGL[i.id];r.blendModeManager.setBlendMode(t.blendMode);for(var a=0;a<s.data.length;a++)1===s.data[a].mode?(e=s.data[a],r.stencilManager.pushStencil(t,e,r),i.uniform1f(r.shaderManager.complexPrimitiveShader.uniforms.alpha._location,t.worldAlpha*e.alpha),i.drawElements(i.TRIANGLE_FAN,4,i.UNSIGNED_SHORT,2*(e.indices.length-4)),r.stencilManager.popStencil(t,e,r)):(e=s.data[a],o=r.shaderManager.primitiveShader,r.shaderManager.setShader(o),i.uniformMatrix3fv(o.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),i.uniformMatrix3fv(o.uniforms.projectionMatrix._location,!1,r.currentRenderTarget.projectionMatrix.toArray(!0)),i.uniform3fv(o.uniforms.tint._location,n.hex2rgb(t.tint)),i.uniform1f(o.uniforms.alpha._location,t.worldAlpha),i.bindBuffer(i.ARRAY_BUFFER,e.buffer),i.vertexAttribPointer(o.attributes.aVertexPosition,2,i.FLOAT,!1,24,0),i.vertexAttribPointer(o.attributes.aColor,4,i.FLOAT,!1,24,8),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.indexBuffer),i.drawElements(i.TRIANGLE_STRIP,e.indices.length,i.UNSIGNED_SHORT,0))},i.prototype.updateGraphics=function(t){var e=this.renderer.gl,r=t._webGL[e.id];r||(r=t._webGL[e.id]={lastIndex:0,data:[],gl:e}),t.dirty=!1;var i;if(t.clearDirty){for(t.clearDirty=!1,i=0;i<r.data.length;i++){var n=r.data[i];n.reset(),this.graphicsDataPool.push(n)}r.data=[],r.lastIndex=0}var o;for(i=r.lastIndex;i<t.graphicsData.length;i++){var a=t.graphicsData[i];if(a.type===s.SHAPES.POLY){if(a.points=a.shape.points.slice(),a.shape.closed&&(a.points[0]!==a.points[a.points.length-2]||a.points[1]!==a.points[a.points.length-1])&&a.points.push(a.points[0],a.points[1]),a.fill&&a.points.length>=6)if(a.points.length<12){o=this.switchMode(r,0);var h=this.buildPoly(a,o);h||(o=this.switchMode(r,1),this.buildComplexPoly(a,o))}else o=this.switchMode(r,1),this.buildComplexPoly(a,o);a.lineWidth>0&&(o=this.switchMode(r,0),this.buildLine(a,o))}else o=this.switchMode(r,0),a.type===s.SHAPES.RECT?this.buildRectangle(a,o):a.type===s.SHAPES.CIRC||a.type===s.SHAPES.ELIP?this.buildCircle(a,o):a.type===s.SHAPES.RREC&&this.buildRoundedRectangle(a,o);r.lastIndex++}for(i=0;i<r.data.length;i++)o=r.data[i],o.dirty&&o.upload()},i.prototype.switchMode=function(t,e){var r;return t.data.length?(r=t.data[t.data.length-1],(r.points.length>32e4||r.mode!==e||1===e)&&(r=this.graphicsDataPool.pop()||new l(t.gl),r.mode=e,t.data.push(r))):(r=this.graphicsDataPool.pop()||new l(t.gl),r.mode=e,t.data.push(r)),r.dirty=!0,r},i.prototype.buildRectangle=function(t,e){var r=t.shape,i=r.x,o=r.y,s=r.width,a=r.height;if(t.fill){var h=n.hex2rgb(t.fillColor),l=t.fillAlpha,u=h[0]*l,c=h[1]*l,p=h[2]*l,d=e.points,f=e.indices,v=d.length/6;d.push(i,o),d.push(u,c,p,l),d.push(i+s,o),d.push(u,c,p,l),d.push(i,o+a),d.push(u,c,p,l),d.push(i+s,o+a),d.push(u,c,p,l),f.push(v,v,v+1,v+2,v+3,v+3)}if(t.lineWidth){var g=t.points;t.points=[i,o,i+s,o,i+s,o+a,i,o+a,i,o],this.buildLine(t,e),t.points=g}},i.prototype.buildRoundedRectangle=function(t,e){var r=t.shape,i=r.x,o=r.y,s=r.width,a=r.height,h=r.radius,l=[];if(l.push(i,o+h),this.quadraticBezierCurve(i,o+a-h,i,o+a,i+h,o+a,l),this.quadraticBezierCurve(i+s-h,o+a,i+s,o+a,i+s,o+a-h,l),this.quadraticBezierCurve(i+s,o+h,i+s,o,i+s-h,o,l),this.quadraticBezierCurve(i+h,o,i,o,i,o+h+1e-10,l),t.fill){var c=n.hex2rgb(t.fillColor),p=t.fillAlpha,d=c[0]*p,f=c[1]*p,v=c[2]*p,g=e.points,m=e.indices,y=g.length/6,x=u(l,null,2),b=0;for(b=0;b<x.length;b+=3)m.push(x[b]+y),m.push(x[b]+y),m.push(x[b+1]+y),m.push(x[b+2]+y),m.push(x[b+2]+y);for(b=0;b<l.length;b++)g.push(l[b],l[++b],d,f,v,p)}if(t.lineWidth){var _=t.points;t.points=l,this.buildLine(t,e),t.points=_}},i.prototype.quadraticBezierCurve=function(t,e,r,i,n,o,s){function a(t,e,r){var i=e-t;return t+i*r}for(var h,l,u,c,p,d,f=20,v=s||[],g=0,m=0;f>=m;m++)g=m/f,h=a(t,r,g),l=a(e,i,g),u=a(r,n,g),c=a(i,o,g),p=a(h,u,g),d=a(l,c,g),v.push(p,d);return v},i.prototype.buildCircle=function(t,e){var r,i,o=t.shape,a=o.x,h=o.y;t.type===s.SHAPES.CIRC?(r=o.radius,i=o.radius):(r=o.width,i=o.height);var l=40,u=2*Math.PI/l,c=0;if(t.fill){var p=n.hex2rgb(t.fillColor),d=t.fillAlpha,f=p[0]*d,v=p[1]*d,g=p[2]*d,m=e.points,y=e.indices,x=m.length/6;for(y.push(x),c=0;l+1>c;c++)m.push(a,h,f,v,g,d),m.push(a+Math.sin(u*c)*r,h+Math.cos(u*c)*i,f,v,g,d),y.push(x++,x++);y.push(x-1)}if(t.lineWidth){var b=t.points;for(t.points=[],c=0;l+1>c;c++)t.points.push(a+Math.sin(u*c)*r,h+Math.cos(u*c)*i);this.buildLine(t,e),t.points=b}},i.prototype.buildLine=function(t,e){var r=0,i=t.points;if(0!==i.length){if(t.lineWidth%2)for(r=0;r<i.length;r++)i[r]+=.5;var s=new o.Point(i[0],i[1]),a=new o.Point(i[i.length-2],i[i.length-1]);if(s.x===a.x&&s.y===a.y){i=i.slice(),i.pop(),i.pop(),a=new o.Point(i[i.length-2],i[i.length-1]);var h=a.x+.5*(s.x-a.x),l=a.y+.5*(s.y-a.y);i.unshift(h,l),i.push(h,l)}var u,c,p,d,f,v,g,m,y,x,b,_,T,E,S,C,w,A,M,R,D,F,P,O=e.points,B=e.indices,L=i.length/2,I=i.length,N=O.length/6,U=t.lineWidth/2,k=n.hex2rgb(t.lineColor),j=t.lineAlpha,Y=k[0]*j,X=k[1]*j,G=k[2]*j;for(p=i[0],d=i[1],f=i[2],v=i[3],y=-(d-v),x=p-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=U,x*=U,O.push(p-y,d-x,Y,X,G,j),O.push(p+y,d+x,Y,X,G,j),r=1;L-1>r;r++)p=i[2*(r-1)],d=i[2*(r-1)+1],f=i[2*r],v=i[2*r+1],g=i[2*(r+1)],m=i[2*(r+1)+1],y=-(d-v),x=p-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=U,x*=U,b=-(v-m),_=f-g,P=Math.sqrt(b*b+_*_),b/=P,_/=P,b*=U,_*=U,S=-x+d-(-x+v),C=-y+f-(-y+p),w=(-y+p)*(-x+v)-(-y+f)*(-x+d),A=-_+m-(-_+v),M=-b+f-(-b+g),R=(-b+g)*(-_+v)-(-b+f)*(-_+m),D=S*M-A*C,Math.abs(D)<.1?(D+=10.1,O.push(f-y,v-x,Y,X,G,j),O.push(f+y,v+x,Y,X,G,j)):(u=(C*R-M*w)/D,c=(A*w-S*R)/D,F=(u-f)*(u-f)+(c-v)+(c-v),F>19600?(T=y-b,E=x-_,P=Math.sqrt(T*T+E*E),T/=P,E/=P,T*=U,E*=U,O.push(f-T,v-E),O.push(Y,X,G,j),O.push(f+T,v+E),O.push(Y,X,G,j),O.push(f-T,v-E),O.push(Y,X,G,j),I++):(O.push(u,c),O.push(Y,X,G,j),O.push(f-(u-f),v-(c-v)),O.push(Y,X,G,j)));for(p=i[2*(L-2)],d=i[2*(L-2)+1],f=i[2*(L-1)],v=i[2*(L-1)+1],y=-(d-v),x=p-f,P=Math.sqrt(y*y+x*x),y/=P,x/=P,y*=U,x*=U,O.push(f-y,v-x),O.push(Y,X,G,j),O.push(f+y,v+x),O.push(Y,X,G,j),B.push(N),r=0;I>r;r++)B.push(N++);B.push(N-1)}},i.prototype.buildComplexPoly=function(t,e){var r=t.points.slice();if(!(r.length<6)){var i=e.indices;e.points=r,e.alpha=t.fillAlpha,e.color=n.hex2rgb(t.fillColor);for(var o,s,a=1/0,h=-(1/0),l=1/0,u=-(1/0),c=0;c<r.length;c+=2)o=r[c],s=r[c+1],a=a>o?o:a,h=o>h?o:h,l=l>s?s:l,u=s>u?s:u;r.push(a,l,h,l,h,u,a,u);var p=r.length/2;for(c=0;p>c;c++)i.push(c)}},i.prototype.buildPoly=function(t,e){var r=t.points;if(!(r.length<6)){var i=e.points,o=e.indices,s=r.length/2,a=n.hex2rgb(t.fillColor),h=t.fillAlpha,l=a[0]*h,c=a[1]*h,p=a[2]*h,d=u(r,null,2);if(!d)return!1;var f=i.length/6,v=0;for(v=0;v<d.length;v+=3)o.push(d[v]+f),o.push(d[v]+f),o.push(d[v+1]+f),o.push(d[v+2]+f),o.push(d[v+2]+f);for(v=0;s>v;v++)i.push(r[2*v],r[2*v+1],l,c,p,h);return!0}}},{"../../const":22,"../../math":32,"../../renderers/webgl/WebGLRenderer":48,"../../renderers/webgl/utils/ObjectRenderer":62,"../../utils":76,"./WebGLGraphicsData":28,earcut:10}],28:[function(t,e,r){function i(t){this.gl=t,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0,this.glPoints=null,this.glIndices=null}i.prototype.constructor=i,e.exports=i,i.prototype.reset=function(){this.points.length=0,this.indices.length=0},i.prototype.upload=function(){var t=this.gl;this.glPoints=new Float32Array(this.points),t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.bufferData(t.ARRAY_BUFFER,this.glPoints,t.STATIC_DRAW),this.glIndices=new Uint16Array(this.indices),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.glIndices,t.STATIC_DRAW),this.dirty=!1},i.prototype.destroy=function(){this.gl=null,this.color=null,this.points=null,this.indices=null,this.gl.deleteBuffer(this.buffer),this.gl.deleteBuffer(this.indexBuffer),this.buffer=null,this.indexBuffer=null,this.glPoints=null,this.glIndices=null}},{}],29:[function(t,e,r){var i=e.exports=Object.assign(t("./const"),t("./math"),{utils:t("./utils"),math:t("./math"),ticker:t("./ticker"),DisplayObject:t("./display/DisplayObject"),Container:t("./display/Container"),Sprite:t("./sprites/Sprite"),ParticleContainer:t("./particles/ParticleContainer"),SpriteRenderer:t("./sprites/webgl/SpriteRenderer"),ParticleRenderer:t("./particles/webgl/ParticleRenderer"),Text:t("./text/Text"),Graphics:t("./graphics/Graphics"),GraphicsData:t("./graphics/GraphicsData"),GraphicsRenderer:t("./graphics/webgl/GraphicsRenderer"),Texture:t("./textures/Texture"),BaseTexture:t("./textures/BaseTexture"),RenderTexture:t("./textures/RenderTexture"),VideoBaseTexture:t("./textures/VideoBaseTexture"),TextureUvs:t("./textures/TextureUvs"),CanvasRenderer:t("./renderers/canvas/CanvasRenderer"),CanvasGraphics:t("./renderers/canvas/utils/CanvasGraphics"),CanvasBuffer:t("./renderers/canvas/utils/CanvasBuffer"),WebGLRenderer:t("./renderers/webgl/WebGLRenderer"),ShaderManager:t("./renderers/webgl/managers/ShaderManager"),Shader:t("./renderers/webgl/shaders/Shader"),ObjectRenderer:t("./renderers/webgl/utils/ObjectRenderer"),RenderTarget:t("./renderers/webgl/utils/RenderTarget"),AbstractFilter:t("./renderers/webgl/filters/AbstractFilter"),autoDetectRenderer:function(t,e,r,n){return t=t||800,e=e||600,!n&&i.utils.isWebGLSupported()?new i.WebGLRenderer(t,e,r):new i.CanvasRenderer(t,e,r)}})},{"./const":22,"./display/Container":23,"./display/DisplayObject":24,"./graphics/Graphics":25,"./graphics/GraphicsData":26,"./graphics/webgl/GraphicsRenderer":27,"./math":32,"./particles/ParticleContainer":38,"./particles/webgl/ParticleRenderer":40,"./renderers/canvas/CanvasRenderer":43,"./renderers/canvas/utils/CanvasBuffer":44,"./renderers/canvas/utils/CanvasGraphics":45,"./renderers/webgl/WebGLRenderer":48,"./renderers/webgl/filters/AbstractFilter":49,"./renderers/webgl/managers/ShaderManager":55,"./renderers/webgl/shaders/Shader":60,"./renderers/webgl/utils/ObjectRenderer":62,"./renderers/webgl/utils/RenderTarget":64,"./sprites/Sprite":66,"./sprites/webgl/SpriteRenderer":67,"./text/Text":68,"./textures/BaseTexture":69,"./textures/RenderTexture":70,"./textures/Texture":71,"./textures/TextureUvs":72,"./textures/VideoBaseTexture":73,"./ticker":75,"./utils":76}],30:[function(t,e,r){function i(){this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0}var n=t("./Point");i.prototype.constructor=i,e.exports=i,i.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},i.prototype.toArray=function(t){this.array||(this.array=new Float32Array(9));var e=this.array;return t?(e[0]=this.a,e[1]=this.b,e[2]=0,e[3]=this.c,e[4]=this.d,e[5]=0,e[6]=this.tx,e[7]=this.ty,e[8]=1):(e[0]=this.a,e[1]=this.c,e[2]=this.tx,e[3]=this.b,e[4]=this.d,e[5]=this.ty,e[6]=0,e[7]=0,e[8]=1),e},i.prototype.apply=function(t,e){e=e||new n;var r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e},i.prototype.applyInverse=function(t,e){e=e||new n;var r=1/(this.a*this.d+this.c*-this.b),i=t.x,o=t.y;return e.x=this.d*r*i+-this.c*r*o+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*o+-this.b*r*i+(-this.ty*this.a+this.tx*this.b)*r,e},i.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},i.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},i.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),i=this.a,n=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=n*e-this.d*r,this.d=n*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},i.prototype.append=function(t){var e=this.a,r=this.b,i=this.c,n=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*n,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*n,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*n+this.ty,this},i.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},i.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,i=this.d,n=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*n)/o,this.ty=-(t*this.ty-e*n)/o,this},i.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},i.prototype.clone=function(){var t=new i;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.prototype.copy=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i.IDENTITY=new i,i.TEMP_MATRIX=new i},{"./Point":31}],31:[function(t,e,r){function i(t,e){this.x=t||0,this.y=e||0}i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.copy=function(t){this.set(t.x,t.y)},i.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},i.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)}},{}],32:[function(t,e,r){e.exports={Point:t("./Point"),Matrix:t("./Matrix"),Circle:t("./shapes/Circle"),Ellipse:t("./shapes/Ellipse"),Polygon:t("./shapes/Polygon"),Rectangle:t("./shapes/Rectangle"),RoundedRectangle:t("./shapes/RoundedRectangle")}},{"./Matrix":30,"./Point":31,"./shapes/Circle":33,"./shapes/Ellipse":34,"./shapes/Polygon":35,"./shapes/Rectangle":36,"./shapes/RoundedRectangle":37}],33:[function(t,e,r){function i(t,e,r){this.x=t||0,this.y=e||0,this.radius=r||0,this.type=o.SHAPES.CIRC}var n=t("./Rectangle"),o=t("../../const");i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.x,this.y,this.radius)},i.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.x-t,i=this.y-e,n=this.radius*this.radius;return r*=r,i*=i,n>=r+i},i.prototype.getBounds=function(){return new n(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)}},{"../../const":22,"./Rectangle":36}],34:[function(t,e,r){function i(t,e,r,i){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0,this.type=o.SHAPES.ELIP}var n=t("./Rectangle"),o=t("../../const");i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,i=(e-this.y)/this.height;return r*=r,i*=i,1>=r+i},i.prototype.getBounds=function(){return new n(this.x-this.width,this.y-this.height,this.width,this.height)}},{"../../const":22,"./Rectangle":36}],35:[function(t,e,r){function i(t){var e=t;if(!Array.isArray(e)){e=new Array(arguments.length);for(var r=0;r<e.length;++r)e[r]=arguments[r]}if(e[0]instanceof n){for(var i=[],s=0,a=e.length;a>s;s++)i.push(e[s].x,e[s].y);e=i}this.closed=!0,this.points=e,this.type=o.SHAPES.POLY}var n=t("../Point"),o=t("../../const");i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.points.slice())},i.prototype.contains=function(t,e){for(var r=!1,i=this.points.length/2,n=0,o=i-1;i>n;o=n++){var s=this.points[2*n],a=this.points[2*n+1],h=this.points[2*o],l=this.points[2*o+1],u=a>e!=l>e&&(h-s)*(e-a)/(l-a)+s>t;u&&(r=!r)}return r}},{"../../const":22,"../Point":31}],36:[function(t,e,r){function i(t,e,r,i){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0,this.type=n.SHAPES.RECT}var n=t("../../const");i.prototype.constructor=i,e.exports=i,i.EMPTY=new i(0,0,0,0),i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height)},i.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height?!0:!1}},{"../../const":22}],37:[function(t,e,r){function i(t,e,r,i,o){this.x=t||0,this.y=e||0,this.width=r||0,this.height=i||0,this.radius=o||20,this.type=n.SHAPES.RREC}var n=t("../../const");i.prototype.constructor=i,e.exports=i,i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height,this.radius)},i.prototype.contains=function(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height?!0:!1}},{"../../const":22}],38:[function(t,e,r){function i(t,e){n.call(this),this._properties=[!1,!0,!1,!1,!1],this._size=t||15e3,this._buffers=null,this._updateStatic=!1,this.interactiveChildren=!1,this.blendMode=o.BLEND_MODES.NORMAL,this.roundPixels=!0,this.setProperties(e)}var n=t("../display/Container"),o=t("../const");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.setProperties=function(t){t&&(this._properties[0]="scale"in t?!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="alpha"in t?!!t.alpha:this._properties[4])},i.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},i.prototype.renderWebGL=function(t){this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(t.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},i.prototype.addChildAt=function(t,e){if(t===this)return t;if(e>=0&&e<=this.children.length)return t.parent&&t.parent.removeChild(t),t.parent=this,this.children.splice(e,0,t),this._updateStatic=!0,t;throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length);

},i.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,this.children.splice(t,1),this._updateStatic=!0,e},i.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable){var e=t.context,r=this.worldTransform,i=!0,n=0,o=0,s=0,a=0;e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var h=0;h<this.children.length;++h){var l=this.children[h];if(l.visible){var u=l.texture.frame;if(e.globalAlpha=this.worldAlpha*l.alpha,l.rotation%(2*Math.PI)===0)i&&(e.setTransform(r.a,r.b,r.c,r.d,r.tx,r.ty),i=!1),n=l.anchor.x*-u.width*l.scale.x+l.position.x+.5,o=l.anchor.y*-u.height*l.scale.y+l.position.y+.5,s=u.width*l.scale.x,a=u.height*l.scale.y;else{i||(i=!0),l.displayObjectUpdateTransform();var c=l.worldTransform;t.roundPixels?e.setTransform(c.a,c.b,c.c,c.d,0|c.tx,0|c.ty):e.setTransform(c.a,c.b,c.c,c.d,c.tx,c.ty),n=l.anchor.x*-u.width+.5,o=l.anchor.y*-u.height+.5,s=u.width,a=u.height}e.drawImage(l.texture.baseTexture.source,u.x,u.y,u.width,u.height,n,o,s,a)}}}},i.prototype.destroy=function(){if(n.prototype.destroy.apply(this,arguments),this._buffers)for(var t=0;t<this._buffers.length;++t)this._buffers.destroy();this._properties=null,this._buffers=null}},{"../const":22,"../display/Container":23}],39:[function(t,e,r){function i(t,e,r){this.gl=t,this.vertSize=2,this.vertByteSize=4*this.vertSize,this.size=r,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<e.length;i++){var n=e[i];n.dynamic?this.dynamicProperties.push(n):this.staticProperties.push(n)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.initBuffers()}i.prototype.constructor=i,e.exports=i,i.prototype.initBuffers=function(){var t,e,r=this.gl,i=0;for(this.dynamicStride=0,t=0;t<this.dynamicProperties.length;t++)e=this.dynamicProperties[t],e.offset=i,i+=e.size,this.dynamicStride+=e.size;this.dynamicData=new Float32Array(this.size*this.dynamicStride*4),this.dynamicBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.dynamicBuffer),r.bufferData(r.ARRAY_BUFFER,this.dynamicData,r.DYNAMIC_DRAW);var n=0;for(this.staticStride=0,t=0;t<this.staticProperties.length;t++)e=this.staticProperties[t],e.offset=n,n+=e.size,this.staticStride+=e.size;this.staticData=new Float32Array(this.size*this.staticStride*4),this.staticBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.staticBuffer),r.bufferData(r.ARRAY_BUFFER,this.staticData,r.DYNAMIC_DRAW)},i.prototype.uploadDynamic=function(t,e,r){for(var i=this.gl,n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(t,e,r,this.dynamicData,this.dynamicStride,o.offset)}i.bindBuffer(i.ARRAY_BUFFER,this.dynamicBuffer),i.bufferSubData(i.ARRAY_BUFFER,0,this.dynamicData)},i.prototype.uploadStatic=function(t,e,r){for(var i=this.gl,n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(t,e,r,this.staticData,this.staticStride,o.offset)}i.bindBuffer(i.ARRAY_BUFFER,this.staticBuffer),i.bufferSubData(i.ARRAY_BUFFER,0,this.staticData)},i.prototype.bind=function(){var t,e,r=this.gl;for(r.bindBuffer(r.ARRAY_BUFFER,this.dynamicBuffer),t=0;t<this.dynamicProperties.length;t++)e=this.dynamicProperties[t],r.vertexAttribPointer(e.attribute,e.size,r.FLOAT,!1,4*this.dynamicStride,4*e.offset);for(r.bindBuffer(r.ARRAY_BUFFER,this.staticBuffer),t=0;t<this.staticProperties.length;t++)e=this.staticProperties[t],r.vertexAttribPointer(e.attribute,e.size,r.FLOAT,!1,4*this.staticStride,4*e.offset)},i.prototype.destroy=function(){this.dynamicProperties=null,this.dynamicData=null,this.gl.deleteBuffer(this.dynamicBuffer),this.staticProperties=null,this.staticData=null,this.gl.deleteBuffer(this.staticBuffer)}},{}],40:[function(t,e,r){function i(t){n.call(this,t),this.size=15e3;var e=6*this.size;this.indices=new Uint16Array(e);for(var r=0,i=0;e>r;r+=6,i+=4)this.indices[r+0]=i+0,this.indices[r+1]=i+1,this.indices[r+2]=i+2,this.indices[r+3]=i+0,this.indices[r+4]=i+2,this.indices[r+5]=i+3;this.shader=null,this.indexBuffer=null,this.properties=null,this.tempMatrix=new h.Matrix}var n=t("../../renderers/webgl/utils/ObjectRenderer"),o=t("../../renderers/webgl/WebGLRenderer"),s=t("./ParticleShader"),a=t("./ParticleBuffer"),h=t("../../math");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,o.registerPlugin("particle",i),i.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new s(this.renderer.shaderManager),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),this.properties=[{attribute:this.shader.attributes.aVertexPosition,dynamic:!1,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,dynamic:!0,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,dynamic:!1,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,dynamic:!1,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,dynamic:!1,size:1,uploadFunction:this.uploadAlpha,offset:0}]},i.prototype.start=function(){var t=this.renderer.gl;t.activeTexture(t.TEXTURE0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.shader;this.renderer.shaderManager.setShader(e)},i.prototype.render=function(t){var e=t.children,r=e.length,i=t._size;if(0!==r){r>i&&(r=i),t._buffers||(t._buffers=this.generateBuffers(t)),this.renderer.blendModeManager.setBlendMode(t.blendMode);var n=this.renderer.gl,o=t.worldTransform.copy(this.tempMatrix);o.prepend(this.renderer.currentRenderTarget.projectionMatrix),n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location,!1,o.toArray(!0)),n.uniform1f(this.shader.uniforms.uAlpha._location,t.worldAlpha);var s=t._updateStatic,a=e[0]._texture.baseTexture;if(a._glTextures[n.id])n.bindTexture(n.TEXTURE_2D,a._glTextures[n.id]);else{if(!this.renderer.updateTexture(a))return;this.properties[0].dynamic&&this.properties[3].dynamic||(s=!0)}for(var h=0,l=0;r>l;l+=this.size){var u=r-l;u>this.size&&(u=this.size);var c=t._buffers[h++];c.uploadDynamic(e,l,u),s&&c.uploadStatic(e,l,u),c.bind(this.shader),n.drawElements(n.TRIANGLES,6*u,n.UNSIGNED_SHORT,0),this.renderer.drawCount++}t._updateStatic=!1}},i.prototype.generateBuffers=function(t){var e,r=this.renderer.gl,i=[],n=t._size;for(e=0;e<t._properties.length;e++)this.properties[e].dynamic=t._properties[e];for(e=0;n>e;e+=this.size)i.push(new a(r,this.properties,this.size,this.shader));return i},i.prototype.uploadVertices=function(t,e,r,i,n,o){for(var s,a,h,l,u,c,p,d,f,v=0;r>v;v++)s=t[e+v],a=s._texture,l=s.scale.x,u=s.scale.y,a.trim?(h=a.trim,p=h.x-s.anchor.x*h.width,c=p+a.crop.width,f=h.y-s.anchor.y*h.height,d=f+a.crop.height):(c=a._frame.width*(1-s.anchor.x),p=a._frame.width*-s.anchor.x,d=a._frame.height*(1-s.anchor.y),f=a._frame.height*-s.anchor.y),i[o]=p*l,i[o+1]=f*u,i[o+n]=c*l,i[o+n+1]=f*u,i[o+2*n]=c*l,i[o+2*n+1]=d*u,i[o+3*n]=p*l,i[o+3*n+1]=d*u,o+=4*n},i.prototype.uploadPosition=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].position;i[o]=a.x,i[o+1]=a.y,i[o+n]=a.x,i[o+n+1]=a.y,i[o+2*n]=a.x,i[o+2*n+1]=a.y,i[o+3*n]=a.x,i[o+3*n+1]=a.y,o+=4*n}},i.prototype.uploadRotation=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].rotation;i[o]=a,i[o+n]=a,i[o+2*n]=a,i[o+3*n]=a,o+=4*n}},i.prototype.uploadUvs=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s]._texture._uvs;a?(i[o]=a.x0,i[o+1]=a.y0,i[o+n]=a.x1,i[o+n+1]=a.y1,i[o+2*n]=a.x2,i[o+2*n+1]=a.y2,i[o+3*n]=a.x3,i[o+3*n+1]=a.y3,o+=4*n):(i[o]=0,i[o+1]=0,i[o+n]=0,i[o+n+1]=0,i[o+2*n]=0,i[o+2*n+1]=0,i[o+3*n]=0,i[o+3*n+1]=0,o+=4*n)}},i.prototype.uploadAlpha=function(t,e,r,i,n,o){for(var s=0;r>s;s++){var a=t[e+s].alpha;i[o]=a,i[o+n]=a,i[o+2*n]=a,i[o+3*n]=a,o+=4*n}},i.prototype.destroy=function(){this.renderer.gl&&this.renderer.gl.deleteBuffer(this.indexBuffer),n.prototype.destroy.apply(this,arguments),this.shader.destroy(),this.indices=null,this.tempMatrix=null}},{"../../math":32,"../../renderers/webgl/WebGLRenderer":48,"../../renderers/webgl/utils/ObjectRenderer":62,"./ParticleBuffer":39,"./ParticleShader":41}],41:[function(t,e,r){function i(t){n.call(this,t,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying float vColor;","void main(void){","   vec2 v = aVertexPosition;","   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","uniform float uAlpha;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor * uAlpha ;","}"].join("\n"),{uAlpha:{type:"1f",value:1}},{aPositionCoord:0,aRotation:0})}var n=t("../../renderers/webgl/shaders/TextureShader");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},{"../../renderers/webgl/shaders/TextureShader":61}],42:[function(t,e,r){function i(t,e,r,i){if(a.call(this),n.sayHello(t),i)for(var h in s.DEFAULT_RENDER_OPTIONS)"undefined"==typeof i[h]&&(i[h]=s.DEFAULT_RENDER_OPTIONS[h]);else i=s.DEFAULT_RENDER_OPTIONS;this.type=s.RENDERER_TYPE.UNKNOWN,this.width=e||800,this.height=r||600,this.view=i.view||document.createElement("canvas"),this.resolution=i.resolution,this.transparent=i.transparent,this.autoResize=i.autoResize||!1,this.blendModes=null,this.preserveDrawingBuffer=i.preserveDrawingBuffer,this.clearBeforeRender=i.clearBeforeRender,this._backgroundColor=0,this._backgroundColorRgb=[0,0,0],this._backgroundColorString="#000000",this.backgroundColor=i.backgroundColor||this._backgroundColor,this._tempDisplayObjectParent={worldTransform:new o.Matrix,worldAlpha:1,children:[]},this._lastObjectRendered=this._tempDisplayObjectParent}var n=t("../utils"),o=t("../math"),s=t("../const"),a=t("eventemitter3");i.prototype=Object.create(a.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{backgroundColor:{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=n.hex2string(t),n.hex2rgb(t,this._backgroundColorRgb)}}}),i.prototype.resize=function(t,e){this.width=t*this.resolution,this.height=e*this.resolution,this.view.width=this.width,this.view.height=this.height,this.autoResize&&(this.view.style.width=this.width/this.resolution+"px",this.view.style.height=this.height/this.resolution+"px")},i.prototype.destroy=function(t){t&&this.view.parent&&this.view.parent.removeChild(this.view),this.type=s.RENDERER_TYPE.UNKNOWN,this.width=0,this.height=0,this.view=null,this.resolution=0,this.transparent=!1,this.autoResize=!1,this.blendModes=null,this.preserveDrawingBuffer=!1,this.clearBeforeRender=!1,this._backgroundColor=0,this._backgroundColorRgb=null,this._backgroundColorString=null}},{"../const":22,"../math":32,"../utils":76,eventemitter3:11}],43:[function(t,e,r){function i(t,e,r){n.call(this,"Canvas",t,e,r),this.type=h.RENDERER_TYPE.CANVAS,this.context=this.view.getContext("2d",{alpha:this.transparent}),this.refresh=!0,this.maskManager=new o,this.roundPixels=!1,this.currentScaleMode=h.SCALE_MODES.DEFAULT,this.currentBlendMode=h.BLEND_MODES.NORMAL,this.smoothProperty="imageSmoothingEnabled",this.context.imageSmoothingEnabled||(this.context.webkitImageSmoothingEnabled?this.smoothProperty="webkitImageSmoothingEnabled":this.context.mozImageSmoothingEnabled?this.smoothProperty="mozImageSmoothingEnabled":this.context.oImageSmoothingEnabled?this.smoothProperty="oImageSmoothingEnabled":this.context.msImageSmoothingEnabled&&(this.smoothProperty="msImageSmoothingEnabled")),this.initPlugins(),this._mapBlendModes(),this._tempDisplayObjectParent={worldTransform:new a.Matrix,worldAlpha:1},this.resize(t,e)}var n=t("../SystemRenderer"),o=t("./utils/CanvasMaskManager"),s=t("../../utils"),a=t("../../math"),h=t("../../const");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,s.pluginTarget.mixin(i),i.prototype.render=function(t){var e=t.parent;this._lastObjectRendered=t,t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=e,this.context.setTransform(1,0,0,1,0,0),this.context.globalAlpha=1,this.currentBlendMode=h.BLEND_MODES.NORMAL,this.context.globalCompositeOperation=this.blendModes[h.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.view.screencanvas&&(this.context.fillStyle="black",this.context.clear()),this.clearBeforeRender&&(this.transparent?this.context.clearRect(0,0,this.width,this.height):(this.context.fillStyle=this._backgroundColorString,this.context.fillRect(0,0,this.width,this.height))),this.renderDisplayObject(t,this.context)},i.prototype.destroy=function(t){this.destroyPlugins(),n.prototype.destroy.call(this,t),this.context=null,this.refresh=!0,this.maskManager.destroy(),this.maskManager=null,this.roundPixels=!1,this.currentScaleMode=0,this.currentBlendMode=0,this.smoothProperty=null},i.prototype.renderDisplayObject=function(t,e){var r=this.context;this.context=e,t.renderCanvas(this),this.context=r},i.prototype._mapBlendModes=function(){this.blendModes||(this.blendModes={},s.canUseNewCanvasBlendModes()?(this.blendModes[h.BLEND_MODES.NORMAL]="source-over",this.blendModes[h.BLEND_MODES.ADD]="lighter",this.blendModes[h.BLEND_MODES.MULTIPLY]="multiply",this.blendModes[h.BLEND_MODES.SCREEN]="screen",this.blendModes[h.BLEND_MODES.OVERLAY]="overlay",this.blendModes[h.BLEND_MODES.DARKEN]="darken",this.blendModes[h.BLEND_MODES.LIGHTEN]="lighten",this.blendModes[h.BLEND_MODES.COLOR_DODGE]="color-dodge",this.blendModes[h.BLEND_MODES.COLOR_BURN]="color-burn",this.blendModes[h.BLEND_MODES.HARD_LIGHT]="hard-light",this.blendModes[h.BLEND_MODES.SOFT_LIGHT]="soft-light",this.blendModes[h.BLEND_MODES.DIFFERENCE]="difference",this.blendModes[h.BLEND_MODES.EXCLUSION]="exclusion",this.blendModes[h.BLEND_MODES.HUE]="hue",this.blendModes[h.BLEND_MODES.SATURATION]="saturate",this.blendModes[h.BLEND_MODES.COLOR]="color",this.blendModes[h.BLEND_MODES.LUMINOSITY]="luminosity"):(this.blendModes[h.BLEND_MODES.NORMAL]="source-over",this.blendModes[h.BLEND_MODES.ADD]="lighter",this.blendModes[h.BLEND_MODES.MULTIPLY]="source-over",this.blendModes[h.BLEND_MODES.SCREEN]="source-over",this.blendModes[h.BLEND_MODES.OVERLAY]="source-over",this.blendModes[h.BLEND_MODES.DARKEN]="source-over",this.blendModes[h.BLEND_MODES.LIGHTEN]="source-over",this.blendModes[h.BLEND_MODES.COLOR_DODGE]="source-over",this.blendModes[h.BLEND_MODES.COLOR_BURN]="source-over",this.blendModes[h.BLEND_MODES.HARD_LIGHT]="source-over",this.blendModes[h.BLEND_MODES.SOFT_LIGHT]="source-over",this.blendModes[h.BLEND_MODES.DIFFERENCE]="source-over",this.blendModes[h.BLEND_MODES.EXCLUSION]="source-over",this.blendModes[h.BLEND_MODES.HUE]="source-over",this.blendModes[h.BLEND_MODES.SATURATION]="source-over",this.blendModes[h.BLEND_MODES.COLOR]="source-over",this.blendModes[h.BLEND_MODES.LUMINOSITY]="source-over"))}},{"../../const":22,"../../math":32,"../../utils":76,"../SystemRenderer":42,"./utils/CanvasMaskManager":46}],44:[function(t,e,r){function i(t,e){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=t,this.canvas.height=e}i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{width:{get:function(){return this.canvas.width},set:function(t){this.canvas.width=t}},height:{get:function(){return this.canvas.height},set:function(t){this.canvas.height=t}}}),i.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},i.prototype.resize=function(t,e){this.canvas.width=t,this.canvas.height=e},i.prototype.destroy=function(){this.context=null,this.canvas=null}},{}],45:[function(t,e,r){var i=t("../../../const"),n={};e.exports=n,n.renderGraphics=function(t,e){var r=t.worldAlpha;t.dirty&&(this.updateGraphicsTint(t),t.dirty=!1);for(var n=0;n<t.graphicsData.length;n++){var o=t.graphicsData[n],s=o.shape,a=o._fillTint,h=o._lineTint;if(e.lineWidth=o.lineWidth,o.type===i.SHAPES.POLY){e.beginPath();var l=s.points;e.moveTo(l[0],l[1]);for(var u=1;u<l.length/2;u++)e.lineTo(l[2*u],l[2*u+1]);s.closed&&e.lineTo(l[0],l[1]),l[0]===l[l.length-2]&&l[1]===l[l.length-1]&&e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*r,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*r,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}else if(o.type===i.SHAPES.RECT)(o.fillColor||0===o.fillColor)&&(e.globalAlpha=o.fillAlpha*r,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fillRect(s.x,s.y,s.width,s.height)),o.lineWidth&&(e.globalAlpha=o.lineAlpha*r,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.strokeRect(s.x,s.y,s.width,s.height));else if(o.type===i.SHAPES.CIRC)e.beginPath(),e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*r,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*r,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke());else if(o.type===i.SHAPES.ELIP){var c=2*s.width,p=2*s.height,d=s.x-c/2,f=s.y-p/2;e.beginPath();var v=.5522848,g=c/2*v,m=p/2*v,y=d+c,x=f+p,b=d+c/2,_=f+p/2;e.moveTo(d,_),e.bezierCurveTo(d,_-m,b-g,f,b,f),e.bezierCurveTo(b+g,f,y,_-m,y,_),e.bezierCurveTo(y,_+m,b+g,x,b,x),e.bezierCurveTo(b-g,x,d,_+m,d,_),e.closePath(),o.fill&&(e.globalAlpha=o.fillAlpha*r,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*r,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}else if(o.type===i.SHAPES.RREC){var T=s.x,E=s.y,S=s.width,C=s.height,w=s.radius,A=Math.min(S,C)/2|0;w=w>A?A:w,e.beginPath(),e.moveTo(T,E+w),e.lineTo(T,E+C-w),e.quadraticCurveTo(T,E+C,T+w,E+C),e.lineTo(T+S-w,E+C),e.quadraticCurveTo(T+S,E+C,T+S,E+C-w),e.lineTo(T+S,E+w),e.quadraticCurveTo(T+S,E,T+S-w,E),e.lineTo(T+w,E),e.quadraticCurveTo(T,E,T,E+w),e.closePath(),(o.fillColor||0===o.fillColor)&&(e.globalAlpha=o.fillAlpha*r,e.fillStyle="#"+("00000"+(0|a).toString(16)).substr(-6),e.fill()),o.lineWidth&&(e.globalAlpha=o.lineAlpha*r,e.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),e.stroke())}}},n.renderGraphicsMask=function(t,e){var r=t.graphicsData.length;if(0!==r){e.beginPath();for(var n=0;r>n;n++){var o=t.graphicsData[n],s=o.shape;if(o.type===i.SHAPES.POLY){var a=s.points;e.moveTo(a[0],a[1]);for(var h=1;h<a.length/2;h++)e.lineTo(a[2*h],a[2*h+1]);a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath()}else if(o.type===i.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else if(o.type===i.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else if(o.type===i.SHAPES.ELIP){var l=2*s.width,u=2*s.height,c=s.x-l/2,p=s.y-u/2,d=.5522848,f=l/2*d,v=u/2*d,g=c+l,m=p+u,y=c+l/2,x=p+u/2;e.moveTo(c,x),e.bezierCurveTo(c,x-v,y-f,p,y,p),e.bezierCurveTo(y+f,p,g,x-v,g,x),e.bezierCurveTo(g,x+v,y+f,m,y,m),e.bezierCurveTo(y-f,m,c,x+v,c,x),e.closePath()}else if(o.type===i.SHAPES.RREC){var b=s.x,_=s.y,T=s.width,E=s.height,S=s.radius,C=Math.min(T,E)/2|0;S=S>C?C:S,e.moveTo(b,_+S),e.lineTo(b,_+E-S),e.quadraticCurveTo(b,_+E,b+S,_+E),e.lineTo(b+T-S,_+E),e.quadraticCurveTo(b+T,_+E,b+T,_+E-S),e.lineTo(b+T,_+S),e.quadraticCurveTo(b+T,_,b+T-S,_),e.lineTo(b+S,_),e.quadraticCurveTo(b,_,b,_+S),e.closePath()}}}},n.updateGraphicsTint=function(t){if(16777215!==t.tint)for(var e=(t.tint>>16&255)/255,r=(t.tint>>8&255)/255,i=(255&t.tint)/255,n=0;n<t.graphicsData.length;n++){var o=t.graphicsData[n],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*i*255,o._lineTint=((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+(255&a)/255*i*255}}},{"../../../const":22}],46:[function(t,e,r){function i(){}var n=t("./CanvasGraphics");i.prototype.constructor=i,e.exports=i,i.prototype.pushMask=function(t,e){e.context.save();var r=t.alpha,i=t.worldTransform,o=e.resolution;e.context.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),t.texture||(n.renderGraphicsMask(t,e.context),e.context.clip()),t.worldAlpha=r},i.prototype.popMask=function(t){t.context.restore()},i.prototype.destroy=function(){}},{"./CanvasGraphics":45}],47:[function(t,e,r){var i=t("../../../utils"),n={};e.exports=n,n.getTintedTexture=function(t,e){var r=t.texture;e=n.roundColor(e);var i="#"+("00000"+(0|e).toString(16)).substr(-6);if(r.tintCache=r.tintCache||{},r.tintCache[i])return r.tintCache[i];var o=n.canvas||document.createElement("canvas");if(n.tintMethod(r,e,o),n.convertTintToImage){var s=new Image;s.src=o.toDataURL(),r.tintCache[i]=s}else r.tintCache[i]=o,n.canvas=null;return o},n.tintWithMultiply=function(t,e,r){var i=r.getContext("2d"),n=t.crop;r.width=n.width,r.height=n.height,i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="multiply",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},n.tintWithOverlay=function(t,e,r){var i=r.getContext("2d"),n=t.crop;r.width=n.width,r.height=n.height,i.globalCompositeOperation="copy",i.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),i.fillRect(0,0,n.width,n.height),i.globalCompositeOperation="destination-atop",i.drawImage(t.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)},n.tintWithPerPixel=function(t,e,r){var n=r.getContext("2d"),o=t.crop;r.width=o.width,r.height=o.height,n.globalCompositeOperation="copy",n.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height);for(var s=i.hex2rgb(e),a=s[0],h=s[1],l=s[2],u=n.getImageData(0,0,o.width,o.height),c=u.data,p=0;p<c.length;p+=4)c[p+0]*=a,c[p+1]*=h,c[p+2]*=l;n.putImageData(u,0,0)},n.roundColor=function(t){var e=n.cacheStepsPerColorChannel,r=i.hex2rgb(t);return r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),i.rgb2hex(r)},n.cacheStepsPerColorChannel=8,n.convertTintToImage=!1,n.canUseMultiply=i.canUseNewCanvasBlendModes(),n.tintMethod=n.canUseMultiply?n.tintWithMultiply:n.tintWithPerPixel},{"../../../utils":76}],48:[function(t,e,r){function i(t,e,r){r=r||{},n.call(this,"WebGL",t,e,r),this.type=f.RENDERER_TYPE.WEBGL,this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),this.view.addEventListener("webglcontextlost",this.handleContextLost,!1),this.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1),this._useFXAA=!!r.forceFXAA&&r.antialias,this._FXAAFilter=null,this._contextOptions={alpha:this.transparent,antialias:r.antialias,premultipliedAlpha:this.transparent&&"notMultiplied"!==this.transparent,stencil:!0,preserveDrawingBuffer:r.preserveDrawingBuffer},this.drawCount=0,this.shaderManager=new o(this),this.maskManager=new s(this),this.stencilManager=new a(this),this.filterManager=new h(this),this.blendModeManager=new l(this),this.currentRenderTarget=null,this.currentRenderer=new c(this),this.initPlugins(),this._createContext(),this._initContext(),this._mapBlendModes(),this._renderTargetStack=[]}var n=t("../SystemRenderer"),o=t("./managers/ShaderManager"),s=t("./managers/MaskManager"),a=t("./managers/StencilManager"),h=t("./managers/FilterManager"),l=t("./managers/BlendModeManager"),u=t("./utils/RenderTarget"),c=t("./utils/ObjectRenderer"),p=t("./filters/FXAAFilter"),d=t("../../utils"),f=t("../../const");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,d.pluginTarget.mixin(i),i.glContextId=0,i.prototype._createContext=function(){var t=this.view.getContext("webgl",this._contextOptions)||this.view.getContext("experimental-webgl",this._contextOptions);if(this.gl=t,!t)throw new Error("This browser does not support webGL. Try using the canvas renderer");this.glContextId=i.glContextId++,t.id=this.glContextId,t.renderer=this},i.prototype._initContext=function(){var t=this.gl;t.disable(t.DEPTH_TEST),t.disable(t.CULL_FACE),t.enable(t.BLEND),this.renderTarget=new u(t,this.width,this.height,null,this.resolution,!0),this.setRenderTarget(this.renderTarget),this.emit("context",t),this.resize(this.width,this.height),this._useFXAA||(this._useFXAA=this._contextOptions.antialias&&!t.getContextAttributes().antialias),this._useFXAA&&(window.console.warn("FXAA antialiasing being used instead of native antialiasing"),this._FXAAFilter=[new p])},i.prototype.render=function(t){if(!this.gl.isContextLost()){this.drawCount=0,this._lastObjectRendered=t,this._useFXAA&&(this._FXAAFilter[0].uniforms.resolution.value.x=this.width,this._FXAAFilter[0].uniforms.resolution.value.y=this.height,t.filterArea=this.renderTarget.size,t.filters=this._FXAAFilter);var e=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=e;var r=this.gl;this.setRenderTarget(this.renderTarget),this.clearBeforeRender&&(this.transparent?r.clearColor(0,0,0,0):r.clearColor(this._backgroundColorRgb[0],this._backgroundColorRgb[1],this._backgroundColorRgb[2],1),r.clear(r.COLOR_BUFFER_BIT)),this.renderDisplayObject(t,this.renderTarget)}},i.prototype.renderDisplayObject=function(t,e,r){this.setRenderTarget(e),r&&e.clear(),this.filterManager.setFilterStack(e.filterStack),t.renderWebGL(this),this.currentRenderer.flush()},i.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},i.prototype.setRenderTarget=function(t){this.currentRenderTarget!==t&&(this.currentRenderTarget=t,this.currentRenderTarget.activate(),this.stencilManager.setMaskStack(t.stencilMaskStack))},i.prototype.resize=function(t,e){n.prototype.resize.call(this,t,e),this.filterManager.resize(t,e),this.renderTarget.resize(t,e),this.currentRenderTarget===this.renderTarget&&(this.renderTarget.activate(),this.gl.viewport(0,0,this.width,this.height))},i.prototype.updateTexture=function(t){if(t=t.baseTexture||t,t.hasLoaded){var e=this.gl;return t._glTextures[e.id]||(t._glTextures[e.id]=e.createTexture(),t.on("update",this.updateTexture,this),t.on("dispose",this.destroyTexture,this)),e.bindTexture(e.TEXTURE_2D,t._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultipliedAlpha),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.scaleMode===f.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),t.mipmap&&t.isPowerOfTwo?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===f.SCALE_MODES.LINEAR?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST),e.generateMipmap(e.TEXTURE_2D)):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.scaleMode===f.SCALE_MODES.LINEAR?e.LINEAR:e.NEAREST),t.isPowerOfTwo?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),t._glTextures[e.id]}},i.prototype.destroyTexture=function(t){t=t.baseTexture||t,t.hasLoaded&&t._glTextures[this.gl.id]&&this.gl.deleteTexture(t._glTextures[this.gl.id])},i.prototype.handleContextLost=function(t){t.preventDefault()},i.prototype.handleContextRestored=function(){this._initContext();for(var t in d.BaseTextureCache)d.BaseTextureCache[t]._glTextures.length=0},i.prototype.destroy=function(t){this.destroyPlugins(),this.view.removeEventListener("webglcontextlost",this.handleContextLost),this.view.removeEventListener("webglcontextrestored",this.handleContextRestored),n.prototype.destroy.call(this,t),this.uuid=0,this.shaderManager.destroy(),this.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy(),this.shaderManager=null,this.maskManager=null,this.filterManager=null,this.blendModeManager=null,this.handleContextLost=null,this.handleContextRestored=null,this._contextOptions=null,this.drawCount=0,this.gl=null},i.prototype._mapBlendModes=function(){var t=this.gl;this.blendModes||(this.blendModes={},this.blendModes[f.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.ADD]=[t.SRC_ALPHA,t.DST_ALPHA],this.blendModes[f.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.SCREEN]=[t.SRC_ALPHA,t.ONE],this.blendModes[f.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],this.blendModes[f.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA])}},{"../../const":22,"../../utils":76,"../SystemRenderer":42,"./filters/FXAAFilter":50,"./managers/BlendModeManager":52,"./managers/FilterManager":53,"./managers/MaskManager":54,"./managers/ShaderManager":55,"./managers/StencilManager":56,"./utils/ObjectRenderer":62,"./utils/RenderTarget":64}],49:[function(t,e,r){function i(t,e,r){this.shaders=[],this.padding=0,this.uniforms=r||{},this.vertexSrc=t||n.defaultVertexSrc,this.fragmentSrc=e||n.defaultFragmentSrc}var n=t("../shaders/TextureShader");i.prototype.constructor=i,e.exports=i,i.prototype.getShader=function(t){var e=t.gl,r=this.shaders[e.id];return r||(r=new n(t.shaderManager,this.vertexSrc,this.fragmentSrc,this.uniforms,this.attributes),this.shaders[e.id]=r),r},i.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);t.filterManager.applyFilter(n,e,r,i)},i.prototype.syncUniform=function(t){for(var e=0,r=this.shaders.length;r>e;++e)this.shaders[e].syncUniform(t)}},{"../shaders/TextureShader":61}],50:[function(t,e,r){function i(){n.call(this,"\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',{
resolution:{type:"v2",value:{x:1,y:1}}})}var n=t("./AbstractFilter");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager,n=this.getShader(t);i.applyFilter(n,e,r)}},{"./AbstractFilter":49}],51:[function(t,e,r){function i(t){var e=new o.Matrix;n.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n",{mask:{type:"sampler2D",value:t._texture},alpha:{type:"f",value:1},otherMatrix:{type:"mat3",value:e.toArray(!0)}}),this.maskSprite=t,this.maskMatrix=e}var n=t("./AbstractFilter"),o=t("../../../math");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager;this.uniforms.mask.value=this.maskSprite._texture,i.calculateMappedMatrix(e.frame,this.maskSprite,this.maskMatrix),this.uniforms.otherMatrix.value=this.maskMatrix.toArray(!0),this.uniforms.alpha.value=this.maskSprite.worldAlpha;var n=this.getShader(t);i.applyFilter(n,e,r)},Object.defineProperties(i.prototype,{map:{get:function(){return this.uniforms.mask.value},set:function(t){this.uniforms.mask.value=t}},offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}}})},{"../../../math":32,"./AbstractFilter":49}],52:[function(t,e,r){function i(t){n.call(this,t),this.currentBlendMode=99999}var n=t("./WebGLManager");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.setBlendMode=function(t){if(this.currentBlendMode===t)return!1;this.currentBlendMode=t;var e=this.renderer.blendModes[this.currentBlendMode];return this.renderer.gl.blendFunc(e[0],e[1]),!0}},{"./WebGLManager":57}],53:[function(t,e,r){function i(t){n.call(this,t),this.filterStack=[],this.filterStack.push({renderTarget:t.currentRenderTarget,filter:[],bounds:null}),this.texturePool=[],this.textureSize=new h.Rectangle(0,0,t.width,t.height),this.currentFrame=null}var n=t("./WebGLManager"),o=t("../utils/RenderTarget"),s=t("../../../const"),a=t("../utils/Quad"),h=t("../../../math");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.onContextChange=function(){this.texturePool.length=0;var t=this.renderer.gl;this.quad=new a(t)},i.prototype.setFilterStack=function(t){this.filterStack=t},i.prototype.pushFilter=function(t,e){var r=t.filterArea?t.filterArea.clone():t.getBounds();r.x=0|r.x,r.y=0|r.y,r.width=0|r.width,r.height=0|r.height;var i=0|e[0].padding;if(r.x-=i,r.y-=i,r.width+=2*i,r.height+=2*i,this.renderer.currentRenderTarget.transform){var n=this.renderer.currentRenderTarget.transform;r.x+=n.tx,r.y+=n.ty,this.capFilterArea(r),r.x-=n.tx,r.y-=n.ty}else this.capFilterArea(r);if(r.width>0&&r.height>0){this.currentFrame=r;var o=this.getRenderTarget();this.renderer.setRenderTarget(o),o.clear(),this.filterStack.push({renderTarget:o,filter:e})}else this.filterStack.push({renderTarget:null,filter:e})},i.prototype.popFilter=function(){var t=this.filterStack.pop(),e=this.filterStack[this.filterStack.length-1],r=t.renderTarget;if(t.renderTarget){var i=e.renderTarget,n=this.renderer.gl;this.currentFrame=r.frame,this.quad.map(this.textureSize,r.frame),n.bindBuffer(n.ARRAY_BUFFER,this.quad.vertexBuffer),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this.quad.indexBuffer);var o=t.filter;if(n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition,2,n.FLOAT,!1,0,0),n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord,2,n.FLOAT,!1,0,32),n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor,4,n.FLOAT,!1,0,64),this.renderer.blendModeManager.setBlendMode(s.BLEND_MODES.NORMAL),1===o.length)o[0].uniforms.dimensions&&(o[0].uniforms.dimensions.value[0]=this.renderer.width,o[0].uniforms.dimensions.value[1]=this.renderer.height,o[0].uniforms.dimensions.value[2]=this.quad.vertices[0],o[0].uniforms.dimensions.value[3]=this.quad.vertices[5]),o[0].applyFilter(this.renderer,r,i),this.returnRenderTarget(r);else{for(var a=r,h=this.getRenderTarget(!0),l=0;l<o.length-1;l++){var u=o[l];u.uniforms.dimensions&&(u.uniforms.dimensions.value[0]=this.renderer.width,u.uniforms.dimensions.value[1]=this.renderer.height,u.uniforms.dimensions.value[2]=this.quad.vertices[0],u.uniforms.dimensions.value[3]=this.quad.vertices[5]),u.applyFilter(this.renderer,a,h);var c=a;a=h,h=c}o[o.length-1].applyFilter(this.renderer,a,i),this.returnRenderTarget(a),this.returnRenderTarget(h)}return t.filter}},i.prototype.getRenderTarget=function(t){var e=this.texturePool.pop()||new o(this.renderer.gl,this.textureSize.width,this.textureSize.height,s.SCALE_MODES.LINEAR,this.renderer.resolution*s.FILTER_RESOLUTION);return e.frame=this.currentFrame,t&&e.clear(!0),e},i.prototype.returnRenderTarget=function(t){this.texturePool.push(t)},i.prototype.applyFilter=function(t,e,r,i){var n=this.renderer.gl;this.renderer.setRenderTarget(r),i&&r.clear(),this.renderer.shaderManager.setShader(t),t.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(!0),t.syncUniforms(),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.texture),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)},i.prototype.calculateMappedMatrix=function(t,e,r){var i=e.worldTransform.copy(h.Matrix.TEMP_MATRIX),n=e._texture.baseTexture,o=r.identity(),s=this.textureSize.height/this.textureSize.width;o.translate(t.x/this.textureSize.width,t.y/this.textureSize.height),o.scale(1,s);var a=this.textureSize.width/n.width,l=this.textureSize.height/n.height;return i.tx/=n.width*a,i.ty/=n.width*a,i.invert(),o.prepend(i),o.scale(1,1/s),o.scale(a,l),o.translate(e.anchor.x,e.anchor.y),o},i.prototype.capFilterArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0),t.x+t.width>this.textureSize.width&&(t.width=this.textureSize.width-t.x),t.y+t.height>this.textureSize.height&&(t.height=this.textureSize.height-t.y)},i.prototype.resize=function(t,e){this.textureSize.width=t,this.textureSize.height=e;for(var r=0;r<this.texturePool.length;r++)this.texturePool[r].resize(t,e)},i.prototype.destroy=function(){this.filterStack=null,this.offsetY=0;for(var t=0;t<this.texturePool.length;t++)this.texturePool[t].destroy();this.texturePool=null}},{"../../../const":22,"../../../math":32,"../utils/Quad":63,"../utils/RenderTarget":64,"./WebGLManager":57}],54:[function(t,e,r){function i(t){n.call(this,t),this.stencilStack=[],this.reverse=!0,this.count=0,this.alphaMaskPool=[]}var n=t("./WebGLManager"),o=t("../filters/SpriteMaskFilter");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.pushMask=function(t,e){e.texture?this.pushSpriteMask(t,e):this.pushStencilMask(t,e)},i.prototype.popMask=function(t,e){e.texture?this.popSpriteMask(t,e):this.popStencilMask(t,e)},i.prototype.pushSpriteMask=function(t,e){var r=this.alphaMaskPool.pop();r||(r=[new o(e)]),r[0].maskSprite=e,this.renderer.filterManager.pushFilter(t,r)},i.prototype.popSpriteMask=function(){var t=this.renderer.filterManager.popFilter();this.alphaMaskPool.push(t)},i.prototype.pushStencilMask=function(t,e){this.renderer.stencilManager.pushMask(e)},i.prototype.popStencilMask=function(t,e){this.renderer.stencilManager.popMask(e)}},{"../filters/SpriteMaskFilter":51,"./WebGLManager":57}],55:[function(t,e,r){function i(t){n.call(this,t),this.maxAttibs=10,this.attribState=[],this.tempAttribState=[];for(var e=0;e<this.maxAttibs;e++)this.attribState[e]=!1;this.stack=[],this._currentId=-1,this.currentShader=null}var n=t("./WebGLManager"),o=t("../shaders/TextureShader"),s=t("../shaders/ComplexPrimitiveShader"),a=t("../shaders/PrimitiveShader"),h=t("../../../utils");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,h.pluginTarget.mixin(i),e.exports=i,i.prototype.onContextChange=function(){this.initPlugins();var t=this.renderer.gl;this.maxAttibs=t.getParameter(t.MAX_VERTEX_ATTRIBS),this.attribState=[];for(var e=0;e<this.maxAttibs;e++)this.attribState[e]=!1;this.defaultShader=new o(this),this.primitiveShader=new a(this),this.complexPrimitiveShader=new s(this)},i.prototype.setAttribs=function(t){var e;for(e=0;e<this.tempAttribState.length;e++)this.tempAttribState[e]=!1;for(var r in t)this.tempAttribState[t[r]]=!0;var i=this.renderer.gl;for(e=0;e<this.attribState.length;e++)this.attribState[e]!==this.tempAttribState[e]&&(this.attribState[e]=this.tempAttribState[e],this.attribState[e]?i.enableVertexAttribArray(e):i.disableVertexAttribArray(e))},i.prototype.setShader=function(t){return this._currentId===t.uuid?!1:(this._currentId=t.uuid,this.currentShader=t,this.renderer.gl.useProgram(t.program),this.setAttribs(t.attributes),!0)},i.prototype.destroy=function(){n.prototype.destroy.call(this),this.destroyPlugins(),this.attribState=null,this.tempAttribState=null}},{"../../../utils":76,"../shaders/ComplexPrimitiveShader":58,"../shaders/PrimitiveShader":59,"../shaders/TextureShader":61,"./WebGLManager":57}],56:[function(t,e,r){function i(t){n.call(this,t),this.stencilMaskStack=null}var n=t("./WebGLManager"),o=t("../../../utils");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.setMaskStack=function(t){this.stencilMaskStack=t;var e=this.renderer.gl;0===t.stencilStack.length?e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},i.prototype.pushStencil=function(t,e){this.renderer.currentRenderTarget.attachStencilBuffer();var r=this.renderer.gl,i=this.stencilMaskStack;this.bindGraphics(t,e,this.renderer),0===i.stencilStack.length&&(r.enable(r.STENCIL_TEST),r.clear(r.STENCIL_BUFFER_BIT),i.reverse=!0,i.count=0),i.stencilStack.push(e);var n=i.count;r.colorMask(!1,!1,!1,!1),r.stencilFunc(r.ALWAYS,0,255),r.stencilOp(r.KEEP,r.KEEP,r.INVERT),1===e.mode?(r.drawElements(r.TRIANGLE_FAN,e.indices.length-4,r.UNSIGNED_SHORT,0),i.reverse?(r.stencilFunc(r.EQUAL,255-n,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)):(r.stencilFunc(r.EQUAL,n,255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)),r.drawElements(r.TRIANGLE_FAN,4,r.UNSIGNED_SHORT,2*(e.indices.length-4)),i.reverse?r.stencilFunc(r.EQUAL,255-(n+1),255):r.stencilFunc(r.EQUAL,n+1,255),i.reverse=!i.reverse):(i.reverse?(r.stencilFunc(r.EQUAL,n,255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)):(r.stencilFunc(r.EQUAL,255-n,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)),r.drawElements(r.TRIANGLE_STRIP,e.indices.length,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n+1,255):r.stencilFunc(r.EQUAL,255-(n+1),255)),r.colorMask(!0,!0,!0,!0),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),i.count++},i.prototype.bindGraphics=function(t,e){this._currentGraphics=t;var r,i=this.renderer.gl;1===e.mode?(r=this.renderer.shaderManager.complexPrimitiveShader,this.renderer.shaderManager.setShader(r),i.uniformMatrix3fv(r.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),i.uniformMatrix3fv(r.uniforms.projectionMatrix._location,!1,this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),i.uniform3fv(r.uniforms.tint._location,o.hex2rgb(t.tint)),i.uniform3fv(r.uniforms.color._location,e.color),i.uniform1f(r.uniforms.alpha._location,t.worldAlpha),i.bindBuffer(i.ARRAY_BUFFER,e.buffer),i.vertexAttribPointer(r.attributes.aVertexPosition,2,i.FLOAT,!1,8,0),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.indexBuffer)):(r=this.renderer.shaderManager.primitiveShader,this.renderer.shaderManager.setShader(r),i.uniformMatrix3fv(r.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),i.uniformMatrix3fv(r.uniforms.projectionMatrix._location,!1,this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)),i.uniform3fv(r.uniforms.tint._location,o.hex2rgb(t.tint)),i.uniform1f(r.uniforms.alpha._location,t.worldAlpha),i.bindBuffer(i.ARRAY_BUFFER,e.buffer),i.vertexAttribPointer(r.attributes.aVertexPosition,2,i.FLOAT,!1,24,0),i.vertexAttribPointer(r.attributes.aColor,4,i.FLOAT,!1,24,8),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.indexBuffer))},i.prototype.popStencil=function(t,e){var r=this.renderer.gl,i=this.stencilMaskStack;if(i.stencilStack.pop(),i.count--,0===i.stencilStack.length)r.disable(r.STENCIL_TEST);else{var n=i.count;this.bindGraphics(t,e,this.renderer),r.colorMask(!1,!1,!1,!1),1===e.mode?(i.reverse=!i.reverse,i.reverse?(r.stencilFunc(r.EQUAL,255-(n+1),255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)):(r.stencilFunc(r.EQUAL,n+1,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)),r.drawElements(r.TRIANGLE_FAN,4,r.UNSIGNED_SHORT,2*(e.indices.length-4)),r.stencilFunc(r.ALWAYS,0,255),r.stencilOp(r.KEEP,r.KEEP,r.INVERT),r.drawElements(r.TRIANGLE_FAN,e.indices.length-4,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n,255):r.stencilFunc(r.EQUAL,255-n,255)):(i.reverse?(r.stencilFunc(r.EQUAL,n+1,255),r.stencilOp(r.KEEP,r.KEEP,r.DECR)):(r.stencilFunc(r.EQUAL,255-(n+1),255),r.stencilOp(r.KEEP,r.KEEP,r.INCR)),r.drawElements(r.TRIANGLE_STRIP,e.indices.length,r.UNSIGNED_SHORT,0),i.reverse?r.stencilFunc(r.EQUAL,n,255):r.stencilFunc(r.EQUAL,255-n,255)),r.colorMask(!0,!0,!0,!0),r.stencilOp(r.KEEP,r.KEEP,r.KEEP)}},i.prototype.destroy=function(){n.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},i.prototype.pushMask=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),t.dirty&&this.renderer.plugins.graphics.updateGraphics(t,this.renderer.gl),t._webGL[this.renderer.gl.id].data.length&&this.pushStencil(t,t._webGL[this.renderer.gl.id].data[0],this.renderer)},i.prototype.popMask=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.popStencil(t,t._webGL[this.renderer.gl.id].data[0],this.renderer)}},{"../../../utils":76,"./WebGLManager":57}],57:[function(t,e,r){function i(t){this.renderer=t,this.renderer.on("context",this.onContextChange,this)}i.prototype.constructor=i,e.exports=i,i.prototype.onContextChange=function(){},i.prototype.destroy=function(){this.renderer.off("context",this.onContextChange,this),this.renderer=null}},{}],58:[function(t,e,r){function i(t){n.call(this,t,["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},color:{type:"3f",value:[0,0,0]},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0})}var n=t("./Shader");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},{"./Shader":60}],59:[function(t,e,r){function i(t){n.call(this,t,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform float flipY;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aColor:0})}var n=t("./Shader");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i},{"./Shader":60}],60:[function(t,e,r){function i(t,e,r,i,o){if(!e||!r)throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");this.uuid=n.uuid(),this.gl=t.renderer.gl,this.shaderManager=t,this.program=null,this.uniforms=i||{},this.attributes=o||{},this.textureCount=1,this.vertexSrc=e,this.fragmentSrc=r,this.init()}var n=t("../../../utils");i.prototype.constructor=i,e.exports=i,i.prototype.init=function(){this.compile(),this.gl.useProgram(this.program),this.cacheUniformLocations(Object.keys(this.uniforms)),this.cacheAttributeLocations(Object.keys(this.attributes))},i.prototype.cacheUniformLocations=function(t){for(var e=0;e<t.length;++e)this.uniforms[t[e]]._location=this.gl.getUniformLocation(this.program,t[e])},i.prototype.cacheAttributeLocations=function(t){for(var e=0;e<t.length;++e)this.attributes[t[e]]=this.gl.getAttribLocation(this.program,t[e])},i.prototype.compile=function(){var t=this.gl,e=this._glCompile(t.VERTEX_SHADER,this.vertexSrc),r=this._glCompile(t.FRAGMENT_SHADER,this.fragmentSrc),i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||(console.error("Pixi.js Error: Could not initialize shader."),console.error("gl.VALIDATE_STATUS",t.getProgramParameter(i,t.VALIDATE_STATUS)),console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(i)&&console.warn("Pixi.js Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(i)),t.deleteProgram(i),i=null),t.deleteShader(e),t.deleteShader(r),this.program=i},i.prototype.syncUniform=function(t){var e,r,i=t._location,o=t.value,s=this.gl;switch(t.type){case"i":case"1i":s.uniform1i(i,o);break;case"f":case"1f":s.uniform1f(i,o);break;case"2f":s.uniform2f(i,o[0],o[1]);break;case"3f":s.uniform3f(i,o[0],o[1],o[2]);break;case"4f":s.uniform4f(i,o[0],o[1],o[2],o[3]);break;case"v2":s.uniform2f(i,o.x,o.y);break;case"v3":s.uniform3f(i,o.x,o.y,o.z);break;case"v4":s.uniform4f(i,o.x,o.y,o.z,o.w);break;case"1iv":s.uniform1iv(i,o);break;case"2iv":s.uniform2iv(i,o);break;case"3iv":s.uniform3iv(i,o);break;case"4iv":s.uniform4iv(i,o);break;case"1fv":s.uniform1fv(i,o);break;case"2fv":s.uniform2fv(i,o);break;case"3fv":s.uniform3fv(i,o);break;case"4fv":s.uniform4fv(i,o);break;case"m2":case"mat2":case"Matrix2fv":s.uniformMatrix2fv(i,t.transpose,o);break;case"m3":case"mat3":case"Matrix3fv":s.uniformMatrix3fv(i,t.transpose,o);break;case"m4":case"mat4":case"Matrix4fv":s.uniformMatrix4fv(i,t.transpose,o);break;case"c":"number"==typeof o&&(o=n.hex2rgb(o)),s.uniform3f(i,o[0],o[1],o[2]);break;case"iv1":s.uniform1iv(i,o);break;case"iv":s.uniform3iv(i,o);break;case"fv1":s.uniform1fv(i,o);break;case"fv":s.uniform3fv(i,o);break;case"v2v":for(t._array||(t._array=new Float32Array(2*o.length)),e=0,r=o.length;r>e;++e)t._array[2*e]=o[e].x,t._array[2*e+1]=o[e].y;s.uniform2fv(i,t._array);break;case"v3v":for(t._array||(t._array=new Float32Array(3*o.length)),e=0,r=o.length;r>e;++e)t._array[3*e]=o[e].x,t._array[3*e+1]=o[e].y,t._array[3*e+2]=o[e].z;s.uniform3fv(i,t._array);break;case"v4v":for(t._array||(t._array=new Float32Array(4*o.length)),e=0,r=o.length;r>e;++e)t._array[4*e]=o[e].x,t._array[4*e+1]=o[e].y,t._array[4*e+2]=o[e].z,t._array[4*e+3]=o[e].w;s.uniform4fv(i,t._array);break;case"t":case"sampler2D":if(!t.value||!t.value.baseTexture.hasLoaded)break;s.activeTexture(s["TEXTURE"+this.textureCount]);var a=t.value.baseTexture._glTextures[s.id];a||(this.initSampler2D(t),a=t.value.baseTexture._glTextures[s.id]),s.bindTexture(s.TEXTURE_2D,a),s.uniform1i(t._location,this.textureCount),this.textureCount++;break;default:console.warn("Pixi.js Shader Warning: Unknown uniform type: "+t.type)}},i.prototype.syncUniforms=function(){this.textureCount=1;for(var t in this.uniforms)this.syncUniform(this.uniforms[t])},i.prototype.initSampler2D=function(t){var e=this.gl,r=t.value.baseTexture;if(r.hasLoaded)if(t.textureData){var i=t.textureData;r._glTextures[e.id]=e.createTexture(),e.bindTexture(e.TEXTURE_2D,r._glTextures[e.id]),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultipliedAlpha),e.texImage2D(e.TEXTURE_2D,0,i.luminance?e.LUMINANCE:e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r.source),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i.magFilter?i.magFilter:e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i.wrapS?i.wrapS:e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,i.wrapS?i.wrapS:e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,i.wrapT?i.wrapT:e.CLAMP_TO_EDGE)}else this.shaderManager.renderer.updateTexture(r)},i.prototype.destroy=function(){this.gl.deleteProgram(this.program),this.gl=null,this.uniforms=null,this.attributes=null,this.vertexSrc=null,this.fragmentSrc=null},i.prototype._glCompile=function(t,e){var r=this.gl.createShader(t);return this.gl.shaderSource(r,e),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)?r:(console.log(this.gl.getShaderInfoLog(r)),null)}},{"../../../utils":76}],61:[function(t,e,r){function i(t,e,r,o,s){var a={uSampler:{type:"sampler2D",value:0},projectionMatrix:{type:"mat3",value:new Float32Array([1,0,0,0,1,0,0,0,1])}};if(o)for(var h in o)a[h]=o[h];var l={aVertexPosition:0,aTextureCoord:0,aColor:0};if(s)for(var u in s)l[u]=s[u];e=e||i.defaultVertexSrc,r=r||i.defaultFragmentSrc,n.call(this,t,e,r,a,l)}var n=t("./Shader");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.defaultVertexSrc=["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),i.defaultFragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"].join("\n")},{"./Shader":60}],62:[function(t,e,r){function i(t){n.call(this,t)}var n=t("../managers/WebGLManager");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.start=function(){},i.prototype.stop=function(){this.flush()},i.prototype.flush=function(){},i.prototype.render=function(t){}},{"../managers/WebGLManager":57}],63:[function(t,e,r){function i(t){this.gl=t,this.vertices=new Float32Array([0,0,200,0,200,200,0,200]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.colors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),this.indices=new Uint16Array([0,1,2,0,3,2]),this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,128,t.DYNAMIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),this.upload()}i.prototype.constructor=i,i.prototype.map=function(t,e){var r=0,i=0;this.uvs[0]=r,this.uvs[1]=i,this.uvs[2]=r+e.width/t.width,this.uvs[3]=i,this.uvs[4]=r+e.width/t.width,this.uvs[5]=i+e.height/t.height,this.uvs[6]=r,this.uvs[7]=i+e.height/t.height,r=e.x,i=e.y,this.vertices[0]=r,this.vertices[1]=i,this.vertices[2]=r+e.width,this.vertices[3]=i,this.vertices[4]=r+e.width,this.vertices[5]=i+e.height,this.vertices[6]=r,this.vertices[7]=i+e.height,this.upload()},i.prototype.upload=function(){var t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.vertices),t.bufferSubData(t.ARRAY_BUFFER,32,this.uvs),t.bufferSubData(t.ARRAY_BUFFER,64,this.colors)},e.exports=i},{}],64:[function(t,e,r){var i=t("../../../math"),n=t("../../../utils"),o=t("../../../const"),s=t("./StencilMaskStack"),a=function(t,e,r,a,h,l){if(this.gl=t,this.frameBuffer=null,this.texture=null,this.size=new i.Rectangle(0,0,1,1),this.resolution=h||o.RESOLUTION,this.projectionMatrix=new i.Matrix,this.transform=null,this.frame=null,this.stencilBuffer=null,this.stencilMaskStack=new s,this.filterStack=[{renderTarget:this,filter:[],bounds:this.size}],this.scaleMode=a||o.SCALE_MODES.DEFAULT,this.root=l,!this.root){this.frameBuffer=t.createFramebuffer(),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a===o.SCALE_MODES.LINEAR?t.LINEAR:t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a===o.SCALE_MODES.LINEAR?t.LINEAR:t.NEAREST);var u=n.isPowerOfTwo(e,r);u?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0)}this.resize(e,r)};a.prototype.constructor=a,e.exports=a,a.prototype.clear=function(t){var e=this.gl;t&&e.bindFramebuffer(e.FRAMEBUFFER,this.frameBuffer),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)},a.prototype.attachStencilBuffer=function(){if(!this.stencilBuffer&&!this.root){var t=this.gl;this.stencilBuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencilBuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencilBuffer),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.size.width*this.resolution,this.size.height*this.resolution)}},a.prototype.activate=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer);var e=this.frame||this.size;this.calculateProjection(e),this.transform&&this.projectionMatrix.append(this.transform),t.viewport(0,0,e.width*this.resolution,e.height*this.resolution)},a.prototype.calculateProjection=function(t){var e=this.projectionMatrix;e.identity(),this.root?(e.a=1/t.width*2,e.d=-1/t.height*2,e.tx=-1-t.x*e.a,e.ty=1-t.y*e.d):(e.a=1/t.width*2,e.d=1/t.height*2,e.tx=-1-t.x*e.a,e.ty=-1-t.y*e.d)},a.prototype.resize=function(t,e){if(t=0|t,e=0|e,this.size.width!==t||this.size.height!==e){if(this.size.width=t,this.size.height=e,!this.root){var r=this.gl;r.bindTexture(r.TEXTURE_2D,this.texture),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t*this.resolution,e*this.resolution,0,r.RGBA,r.UNSIGNED_BYTE,null),this.stencilBuffer&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencilBuffer),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t*this.resolution,e*this.resolution))}var i=this.frame||this.size;this.calculateProjection(i)}},a.prototype.destroy=function(){var t=this.gl;t.deleteFramebuffer(this.frameBuffer),t.deleteTexture(this.texture),this.frameBuffer=null,this.texture=null}},{"../../../const":22,"../../../math":32,"../../../utils":76,"./StencilMaskStack":65}],65:[function(t,e,r){function i(){this.stencilStack=[],this.reverse=!0,this.count=0}i.prototype.constructor=i,e.exports=i},{}],66:[function(t,e,r){function i(t){s.call(this),this.anchor=new n.Point,this._texture=null,this._width=0,this._height=0,this.tint=16777215,this.blendMode=l.BLEND_MODES.NORMAL,this.shader=null,this.cachedTint=16777215,this.texture=t||o.EMPTY}var n=t("../math"),o=t("../textures/Texture"),s=t("../display/Container"),a=t("../renderers/canvas/utils/CanvasTinter"),h=t("../utils"),l=t("../const"),u=new n.Point;i.prototype=Object.create(s.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{width:{get:function(){return this.scale.x*this.texture._frame.width},set:function(t){this.scale.x=t/this.texture._frame.width,this._width=t}},height:{get:function(){return this.scale.y*this.texture._frame.height},set:function(t){this.scale.y=t/this.texture._frame.height,this._height=t}},texture:{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,this.cachedTint=16777215,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}}),i.prototype._onTextureUpdate=function(){this._width&&(this.scale.x=this._width/this.texture.frame.width),this._height&&(this.scale.y=this._height/this.texture.frame.height)},i.prototype._renderWebGL=function(t){t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this)},i.prototype.getBounds=function(t){if(!this._currentBounds){var e,r,i,n,o=this._texture._frame.width,s=this._texture._frame.height,a=o*(1-this.anchor.x),h=o*-this.anchor.x,l=s*(1-this.anchor.y),u=s*-this.anchor.y,c=t||this.worldTransform,p=c.a,d=c.b,f=c.c,v=c.d,g=c.tx,m=c.ty;if(0===d&&0===f)0>p&&(p*=-1),0>v&&(v*=-1),e=p*h+g,r=p*a+g,i=v*u+m,n=v*l+m;else{var y=p*h+f*u+g,x=v*u+d*h+m,b=p*a+f*u+g,_=v*u+d*a+m,T=p*a+f*l+g,E=v*l+d*a+m,S=p*h+f*l+g,C=v*l+d*h+m;e=y,e=e>b?b:e,e=e>T?T:e,e=e>S?S:e,i=x,i=i>_?_:i,i=i>E?E:i,i=i>C?C:i,r=y,r=b>r?b:r,r=T>r?T:r,r=S>r?S:r,n=x,n=_>n?_:n,n=E>n?E:n,n=C>n?C:n}if(this.children.length){var w=this.containerGetBounds();a=w.x,h=w.x+w.width,l=w.y,u=w.y+w.height,e=a>e?e:a,i=l>i?i:l,r=r>h?r:h,n=n>u?n:u}var A=this._bounds;A.x=e,A.width=r-e,A.y=i,A.height=n-i,this._currentBounds=A}return this._currentBounds},i.prototype.getLocalBounds=function(){return this._bounds.x=-this._texture._frame.width*this.anchor.x,this._bounds.y=-this._texture._frame.height*this.anchor.y,this._bounds.width=this._texture._frame.width,this._bounds.height=this._texture._frame.height,this._bounds},i.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,u);var e,r=this._texture._frame.width,i=this._texture._frame.height,n=-r*this.anchor.x;return u.x>n&&u.x<n+r&&(e=-i*this.anchor.y,u.y>e&&u.y<e+i)?!0:!1},i.prototype._renderCanvas=function(t){if(!(this.texture.crop.width<=0||this.texture.crop.height<=0)&&(this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,t.context.globalCompositeOperation=t.blendModes[t.currentBlendMode]),this.texture.valid)){var e,r,i,n,o=this._texture,s=this.worldTransform;if(t.context.globalAlpha=this.worldAlpha,t.smoothProperty&&t.currentScaleMode!==o.baseTexture.scaleMode&&(t.currentScaleMode=o.baseTexture.scaleMode,t.context[t.smoothProperty]=t.currentScaleMode===l.SCALE_MODES.LINEAR),o.rotate){var h=s.a,u=s.b;s.a=-s.c,s.b=-s.d,s.c=h,s.d=u,i=o.crop.height,n=o.crop.width,e=o.trim?o.trim.y-this.anchor.y*o.trim.height:this.anchor.y*-o._frame.height,r=o.trim?o.trim.x-this.anchor.x*o.trim.width:this.anchor.x*-o._frame.width}else i=o.crop.width,n=o.crop.height,e=o.trim?o.trim.x-this.anchor.x*o.trim.width:this.anchor.x*-o._frame.width,r=o.trim?o.trim.y-this.anchor.y*o.trim.height:this.anchor.y*-o._frame.height;t.roundPixels?(t.context.setTransform(s.a,s.b,s.c,s.d,s.tx*t.resolution|0,s.ty*t.resolution|0),e=0|e,r=0|r):t.context.setTransform(s.a,s.b,s.c,s.d,s.tx*t.resolution,s.ty*t.resolution);var c=o.baseTexture.resolution;16777215!==this.tint?(this.cachedTint!==this.tint&&(this.cachedTint=this.tint,this.tintedTexture=a.getTintedTexture(this,this.tint)),t.context.drawImage(this.tintedTexture,0,0,i*c,n*c,e*t.resolution,r*t.resolution,i*t.resolution,n*t.resolution)):t.context.drawImage(o.baseTexture.source,o.crop.x*c,o.crop.y*c,i*c,n*c,e*t.resolution,r*t.resolution,i*t.resolution,n*t.resolution)}},i.prototype.destroy=function(t,e){s.prototype.destroy.call(this),this.anchor=null,t&&this._texture.destroy(e),this._texture=null,this.shader=null},i.fromFrame=function(t){var e=h.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return new i(e)},i.fromImage=function(t,e,r){
return new i(o.fromImage(t,e,r))}},{"../const":22,"../display/Container":23,"../math":32,"../renderers/canvas/utils/CanvasTinter":47,"../textures/Texture":71,"../utils":76}],67:[function(t,e,r){function i(t){n.call(this,t),this.vertSize=5,this.vertByteSize=4*this.vertSize,this.size=s.SPRITE_BATCH_SIZE;var e=4*this.size*this.vertByteSize,r=6*this.size;this.vertices=new ArrayBuffer(e),this.positions=new Float32Array(this.vertices),this.colors=new Uint32Array(this.vertices),this.indices=new Uint16Array(r),this.lastIndexCount=0;for(var i=0,o=0;r>i;i+=6,o+=4)this.indices[i+0]=o+0,this.indices[i+1]=o+1,this.indices[i+2]=o+2,this.indices[i+3]=o+0,this.indices[i+4]=o+2,this.indices[i+5]=o+3;this.drawing=!1,this.currentBatchSize=0,this.currentBaseTexture=null,this.textures=[],this.blendModes=[],this.shaders=[],this.sprites=[],this.shader=null}var n=t("../../renderers/webgl/utils/ObjectRenderer"),o=t("../../renderers/webgl/WebGLRenderer"),s=t("../../const");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,o.registerPlugin("sprite",i),i.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=this.renderer.shaderManager.defaultShader,this.vertexBuffer=t.createBuffer(),this.indexBuffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,this.vertices,t.DYNAMIC_DRAW),this.currentBlendMode=99999},i.prototype.render=function(t){var e=t._texture;this.currentBatchSize>=this.size&&(this.flush(),this.currentBaseTexture=e.baseTexture);var r=e._uvs;if(r){var i,n,o,s,a=t.anchor.x,h=t.anchor.y;if(e.trim){var l=e.trim;n=l.x-a*l.width,i=n+e.crop.width,s=l.y-h*l.height,o=s+e.crop.height}else i=e._frame.width*(1-a),n=e._frame.width*-a,o=e._frame.height*(1-h),s=e._frame.height*-h;var u=this.currentBatchSize*this.vertByteSize,c=t.worldTransform,p=c.a,d=c.b,f=c.c,v=c.d,g=c.tx,m=c.ty,y=this.colors,x=this.positions;this.renderer.roundPixels?(x[u]=p*n+f*s+g|0,x[u+1]=v*s+d*n+m|0,x[u+5]=p*i+f*s+g|0,x[u+6]=v*s+d*i+m|0,x[u+10]=p*i+f*o+g|0,x[u+11]=v*o+d*i+m|0,x[u+15]=p*n+f*o+g|0,x[u+16]=v*o+d*n+m|0):(x[u]=p*n+f*s+g,x[u+1]=v*s+d*n+m,x[u+5]=p*i+f*s+g,x[u+6]=v*s+d*i+m,x[u+10]=p*i+f*o+g,x[u+11]=v*o+d*i+m,x[u+15]=p*n+f*o+g,x[u+16]=v*o+d*n+m),x[u+2]=r.x0,x[u+3]=r.y0,x[u+7]=r.x1,x[u+8]=r.y1,x[u+12]=r.x2,x[u+13]=r.y2,x[u+17]=r.x3,x[u+18]=r.y3;var b=t.tint;y[u+4]=y[u+9]=y[u+14]=y[u+19]=(b>>16)+(65280&b)+((255&b)<<16)+(255*t.worldAlpha<<24),this.sprites[this.currentBatchSize++]=t}},i.prototype.flush=function(){if(0!==this.currentBatchSize){var t,e=this.renderer.gl;if(this.currentBatchSize>.5*this.size)e.bufferSubData(e.ARRAY_BUFFER,0,this.vertices);else{var r=this.positions.subarray(0,this.currentBatchSize*this.vertByteSize);e.bufferSubData(e.ARRAY_BUFFER,0,r)}for(var i,n,o,s,a=0,h=0,l=null,u=this.renderer.blendModeManager.currentBlendMode,c=null,p=!1,d=!1,f=0,v=this.currentBatchSize;v>f;f++)s=this.sprites[f],i=s._texture.baseTexture,n=s.blendMode,o=s.shader||this.shader,p=u!==n,d=c!==o,(l!==i||p||d)&&(this.renderBatch(l,a,h),h=f,a=0,l=i,p&&(u=n,this.renderer.blendModeManager.setBlendMode(u)),d&&(c=o,t=c.shaders?c.shaders[e.id]:c,t||(t=c.getShader(this.renderer)),this.renderer.shaderManager.setShader(t),t.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(!0),t.syncUniforms(),e.activeTexture(e.TEXTURE0))),a++;this.renderBatch(l,a,h),this.currentBatchSize=0}},i.prototype.renderBatch=function(t,e,r){if(0!==e){var i=this.renderer.gl;t._glTextures[i.id]?i.bindTexture(i.TEXTURE_2D,t._glTextures[i.id]):this.renderer.updateTexture(t),i.drawElements(i.TRIANGLES,6*e,i.UNSIGNED_SHORT,6*r*2),this.renderer.drawCount++}},i.prototype.start=function(){var t=this.renderer.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer);var e=this.vertByteSize;t.vertexAttribPointer(this.shader.attributes.aVertexPosition,2,t.FLOAT,!1,e,0),t.vertexAttribPointer(this.shader.attributes.aTextureCoord,2,t.FLOAT,!1,e,8),t.vertexAttribPointer(this.shader.attributes.aColor,4,t.UNSIGNED_BYTE,!0,e,16)},i.prototype.destroy=function(){this.renderer.gl.deleteBuffer(this.vertexBuffer),this.renderer.gl.deleteBuffer(this.indexBuffer),this.shader.destroy(),this.renderer=null,this.vertices=null,this.positions=null,this.colors=null,this.indices=null,this.vertexBuffer=null,this.indexBuffer=null,this.currentBaseTexture=null,this.drawing=!1,this.textures=null,this.blendModes=null,this.shaders=null,this.sprites=null,this.shader=null}},{"../../const":22,"../../renderers/webgl/WebGLRenderer":48,"../../renderers/webgl/utils/ObjectRenderer":62}],68:[function(t,e,r){function i(t,e,r){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=r||h.RESOLUTION,this._text=null,this._style=null;var i=o.fromCanvas(this.canvas);i.trim=new s.Rectangle,n.call(this,i),this.text=t,this.style=e}var n=t("../sprites/Sprite"),o=t("../textures/Texture"),s=t("../math"),a=t("../utils"),h=t("../const");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.fontPropertiesCache={},i.fontPropertiesCanvas=document.createElement("canvas"),i.fontPropertiesContext=i.fontPropertiesCanvas.getContext("2d"),Object.defineProperties(i.prototype,{width:{get:function(){return this.dirty&&this.updateText(),this.scale.x*this._texture._frame.width},set:function(t){this.scale.x=t/this._texture._frame.width,this._width=t}},height:{get:function(){return this.dirty&&this.updateText(),this.scale.y*this._texture._frame.height},set:function(t){this.scale.y=t/this._texture._frame.height,this._height=t}},style:{get:function(){return this._style},set:function(t){t=t||{},"number"==typeof t.fill&&(t.fill=a.hex2string(t.fill)),"number"==typeof t.stroke&&(t.stroke=a.hex2string(t.stroke)),"number"==typeof t.dropShadowColor&&(t.dropShadowColor=a.hex2string(t.dropShadowColor)),t.font=t.font||"bold 20pt Arial",t.fill=t.fill||"black",t.align=t.align||"left",t.stroke=t.stroke||"black",t.strokeThickness=t.strokeThickness||0,t.wordWrap=t.wordWrap||!1,t.wordWrapWidth=t.wordWrapWidth||100,t.dropShadow=t.dropShadow||!1,t.dropShadowColor=t.dropShadowColor||"#000000",t.dropShadowAngle=t.dropShadowAngle||Math.PI/6,t.dropShadowDistance=t.dropShadowDistance||5,t.padding=t.padding||0,t.textBaseline=t.textBaseline||"alphabetic",t.lineJoin=t.lineJoin||"miter",t.miterLimit=t.miterLimit||10,this._style=t,this.dirty=!0}},text:{get:function(){return this._text},set:function(t){t=t.toString()||" ",this._text!==t&&(this._text=t,this.dirty=!0)}}}),i.prototype.updateText=function(){var t=this._style;this.context.font=t.font;for(var e=t.wordWrap?this.wordWrap(this._text):this._text,r=e.split(/(?:\r\n|\r|\n)/),i=new Array(r.length),n=0,o=this.determineFontProperties(t.font),s=0;s<r.length;s++){var a=this.context.measureText(r[s]).width;i[s]=a,n=Math.max(n,a)}var h=n+t.strokeThickness;t.dropShadow&&(h+=t.dropShadowDistance),this.canvas.width=(h+this.context.lineWidth)*this.resolution;var l=this.style.lineHeight||o.fontSize+t.strokeThickness,u=l*r.length;t.dropShadow&&(u+=t.dropShadowDistance),this.canvas.height=(u+2*this._style.padding)*this.resolution,this.context.scale(this.resolution,this.resolution),navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=t.font,this.context.strokeStyle=t.stroke,this.context.lineWidth=t.strokeThickness,this.context.textBaseline=t.textBaseline,this.context.lineJoin=t.lineJoin,this.context.miterLimit=t.miterLimit;var c,p;if(t.dropShadow){this.context.fillStyle=t.dropShadowColor;var d=Math.cos(t.dropShadowAngle)*t.dropShadowDistance,f=Math.sin(t.dropShadowAngle)*t.dropShadowDistance;for(s=0;s<r.length;s++)c=t.strokeThickness/2,p=t.strokeThickness/2+s*l+o.ascent,"right"===t.align?c+=n-i[s]:"center"===t.align&&(c+=(n-i[s])/2),t.fill&&this.context.fillText(r[s],c+d,p+f+this._style.padding)}for(this.context.fillStyle=t.fill,s=0;s<r.length;s++)c=t.strokeThickness/2,p=t.strokeThickness/2+s*l+o.ascent,"right"===t.align?c+=n-i[s]:"center"===t.align&&(c+=(n-i[s])/2),t.stroke&&t.strokeThickness&&this.context.strokeText(r[s],c,p+this._style.padding),t.fill&&this.context.fillText(r[s],c,p+this._style.padding);this.updateTexture()},i.prototype.updateTexture=function(){var t=this._texture;t.baseTexture.hasLoaded=!0,t.baseTexture.resolution=this.resolution,t.baseTexture.width=this.canvas.width/this.resolution,t.baseTexture.height=this.canvas.height/this.resolution,t.crop.width=t._frame.width=this.canvas.width/this.resolution,t.crop.height=t._frame.height=this.canvas.height/this.resolution,t.trim.x=0,t.trim.y=-this._style.padding,t.trim.width=t._frame.width,t.trim.height=t._frame.height-2*this._style.padding,this._width=this.canvas.width/this.resolution,this._height=this.canvas.height/this.resolution,t.baseTexture.emit("update",t.baseTexture),this.dirty=!1},i.prototype.renderWebGL=function(t){this.dirty&&this.updateText(),n.prototype.renderWebGL.call(this,t)},i.prototype._renderCanvas=function(t){this.dirty&&this.updateText(),n.prototype._renderCanvas.call(this,t)},i.prototype.determineFontProperties=function(t){var e=i.fontPropertiesCache[t];if(!e){e={};var r=i.fontPropertiesCanvas,n=i.fontPropertiesContext;n.font=t;var o=Math.ceil(n.measureText("|MÉq").width),s=Math.ceil(n.measureText("M").width),a=2*s;s=1.4*s|0,r.width=o,r.height=a,n.fillStyle="#f00",n.fillRect(0,0,o,a),n.font=t,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText("|MÉq",0,s);var h,l,u=n.getImageData(0,0,o,a).data,c=u.length,p=4*o,d=0,f=!1;for(h=0;s>h;h++){for(l=0;p>l;l+=4)if(255!==u[d+l]){f=!0;break}if(f)break;d+=p}for(e.ascent=s-h,d=c-p,f=!1,h=a;h>s;h--){for(l=0;p>l;l+=4)if(255!==u[d+l]){f=!0;break}if(f)break;d-=p}e.descent=h-s,e.fontSize=e.ascent+e.descent,i.fontPropertiesCache[t]=e}return e},i.prototype.wordWrap=function(t){for(var e="",r=t.split("\n"),i=this._style.wordWrapWidth,n=0;n<r.length;n++){for(var o=i,s=r[n].split(" "),a=0;a<s.length;a++){var h=this.context.measureText(s[a]).width,l=h+this.context.measureText(" ").width;0===a||l>o?(a>0&&(e+="\n"),e+=s[a],o=i-h):(o-=l,e+=" "+s[a])}n<r.length-1&&(e+="\n")}return e},i.prototype.getBounds=function(t){return this.dirty&&this.updateText(),n.prototype.getBounds.call(this,t)},i.prototype.destroy=function(t){this.context=null,this.canvas=null,this._style=null,this._texture.destroy(void 0===t?!0:t)}},{"../const":22,"../math":32,"../sprites/Sprite":66,"../textures/Texture":71,"../utils":76}],69:[function(t,e,r){function i(t,e,r){s.call(this),this.uuid=n.uuid(),this.resolution=r||1,this.width=100,this.height=100,this.realWidth=100,this.realHeight=100,this.scaleMode=e||o.SCALE_MODES.DEFAULT,this.hasLoaded=!1,this.isLoading=!1,this.source=null,this.premultipliedAlpha=!0,this.imageUrl=null,this.isPowerOfTwo=!1,this.mipmap=!1,this._glTextures=[],t&&this.loadSource(t)}var n=t("../utils"),o=t("../const"),s=t("eventemitter3");i.prototype=Object.create(s.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.update=function(){this.realWidth=this.source.naturalWidth||this.source.width,this.realHeight=this.source.naturalHeight||this.source.height,this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=n.isPowerOfTwo(this.realWidth,this.realHeight),this.emit("update",this)},i.prototype.loadSource=function(t){var e=this.isLoading;if(this.hasLoaded=!1,this.isLoading=!1,e&&this.source&&(this.source.onload=null,this.source.onerror=null),this.source=t,(this.source.complete||this.source.getContext)&&this.source.width&&this.source.height)this._sourceLoaded();else if(!t.getContext){this.isLoading=!0;var r=this;t.onload=function(){t.onload=null,t.onerror=null,r.isLoading&&(r.isLoading=!1,r._sourceLoaded(),r.emit("loaded",r))},t.onerror=function(){t.onload=null,t.onerror=null,r.isLoading&&(r.isLoading=!1,r.emit("error",r))},t.complete&&t.src&&(this.isLoading=!1,t.onload=null,t.onerror=null,t.width&&t.height?(this._sourceLoaded(),e&&this.emit("loaded",this)):e&&this.emit("error",this))}},i.prototype._sourceLoaded=function(){this.hasLoaded=!0,this.update()},i.prototype.destroy=function(){this.imageUrl?(delete n.BaseTextureCache[this.imageUrl],delete n.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||(this.source.src="")):this.source&&this.source._pixiId&&delete n.BaseTextureCache[this.source._pixiId],this.source=null,this.dispose()},i.prototype.dispose=function(){this.emit("dispose",this),this._glTextures.length=0},i.prototype.updateSourceImage=function(t){this.source.src=t,this.loadSource(this.source)},i.fromImage=function(t,e,r){var o=n.BaseTextureCache[t];if(void 0===e&&0!==t.indexOf("data:")&&(e=!0),!o){var s=new Image;e&&(s.crossOrigin=""),o=new i(s,r),o.imageUrl=t,s.src=t,n.BaseTextureCache[t]=o,o.resolution=n.getResolutionOfUrl(t)}return o},i.fromCanvas=function(t,e){t._pixiId||(t._pixiId="canvas_"+n.uuid());var r=n.BaseTextureCache[t._pixiId];return r||(r=new i(t,e),n.BaseTextureCache[t._pixiId]=r),r}},{"../const":22,"../utils":76,eventemitter3:11}],70:[function(t,e,r){function i(t,e,r,i,c){if(!t)throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");e=e||100,r=r||100,c=c||u.RESOLUTION;var p=new n;if(p.width=e,p.height=r,p.resolution=c,p.scaleMode=i||u.SCALE_MODES.DEFAULT,p.hasLoaded=!0,o.call(this,p,new l.Rectangle(0,0,e,r)),this.width=e,this.height=r,this.resolution=c,this.render=null,this.renderer=t,this.renderer.type===u.RENDERER_TYPE.WEBGL){var d=this.renderer.gl;this.textureBuffer=new s(d,this.width,this.height,p.scaleMode,this.resolution),this.baseTexture._glTextures[d.id]=this.textureBuffer.texture,this.filterManager=new a(this.renderer),this.filterManager.onContextChange(),this.filterManager.resize(e,r),this.render=this.renderWebGL,this.renderer.currentRenderer.start(),this.renderer.currentRenderTarget.activate()}else this.render=this.renderCanvas,this.textureBuffer=new h(this.width*this.resolution,this.height*this.resolution),this.baseTexture.source=this.textureBuffer.canvas;this.valid=!0,this._updateUvs()}var n=t("./BaseTexture"),o=t("./Texture"),s=t("../renderers/webgl/utils/RenderTarget"),a=t("../renderers/webgl/managers/FilterManager"),h=t("../renderers/canvas/utils/CanvasBuffer"),l=t("../math"),u=t("../const"),c=new l.Matrix;i.prototype=Object.create(o.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.resize=function(t,e,r){(t!==this.width||e!==this.height)&&(this.valid=t>0&&e>0,this.width=this._frame.width=this.crop.width=t,this.height=this._frame.height=this.crop.height=e,r&&(this.baseTexture.width=this.width,this.baseTexture.height=this.height),this.valid&&(this.textureBuffer.resize(this.width,this.height),this.filterManager&&this.filterManager.resize(this.width,this.height)))},i.prototype.clear=function(){this.valid&&(this.renderer.type===u.RENDERER_TYPE.WEBGL&&this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer),this.textureBuffer.clear())},i.prototype.renderWebGL=function(t,e,r,i){if(this.valid){if(i=void 0!==i?i:!0,this.textureBuffer.transform=e,this.textureBuffer.activate(),t.worldAlpha=t.alpha,i){t.worldTransform.identity(),t.currentBounds=null;var n,o,s=t.children;for(n=0,o=s.length;o>n;++n)s[n].updateTransform()}var a=this.renderer.filterManager;this.renderer.filterManager=this.filterManager,this.renderer.renderDisplayObject(t,this.textureBuffer,r),this.renderer.filterManager=a}},i.prototype.renderCanvas=function(t,e,r,i){if(this.valid){i=!!i;var n=t.worldTransform,o=c;o.identity(),e&&o.append(e),t.worldTransform=o,t.worldAlpha=1;var s,a,h=t.children;for(s=0,a=h.length;a>s;++s)h[s].updateTransform();r&&this.textureBuffer.clear(),t.worldTransform=n;var l=this.textureBuffer.context,u=this.renderer.resolution;this.renderer.resolution=this.resolution,this.renderer.renderDisplayObject(t,l),this.renderer.resolution=u}},i.prototype.destroy=function(){o.prototype.destroy.call(this,!0),this.textureBuffer.destroy(),this.filterManager&&this.filterManager.destroy(),this.renderer=null},i.prototype.getImage=function(){var t=new Image;return t.src=this.getBase64(),t},i.prototype.getBase64=function(){return this.getCanvas().toDataURL()},i.prototype.getCanvas=function(){if(this.renderer.type===u.RENDERER_TYPE.WEBGL){var t=this.renderer.gl,e=this.textureBuffer.size.width,r=this.textureBuffer.size.height,i=new Uint8Array(4*e*r);t.bindFramebuffer(t.FRAMEBUFFER,this.textureBuffer.frameBuffer),t.readPixels(0,0,e,r,t.RGBA,t.UNSIGNED_BYTE,i),t.bindFramebuffer(t.FRAMEBUFFER,null);var n=new h(e,r),o=n.context.getImageData(0,0,e,r);return o.data.set(i),n.context.putImageData(o,0,0),n.canvas}return this.textureBuffer.canvas},i.prototype.getPixels=function(){var t,e;if(this.renderer.type===u.RENDERER_TYPE.WEBGL){var r=this.renderer.gl;t=this.textureBuffer.size.width,e=this.textureBuffer.size.height;var i=new Uint8Array(4*t*e);return r.bindFramebuffer(r.FRAMEBUFFER,this.textureBuffer.frameBuffer),r.readPixels(0,0,t,e,r.RGBA,r.UNSIGNED_BYTE,i),r.bindFramebuffer(r.FRAMEBUFFER,null),i}return t=this.textureBuffer.canvas.width,e=this.textureBuffer.canvas.height,this.textureBuffer.canvas.getContext("2d").getImageData(0,0,t,e).data},i.prototype.getPixel=function(t,e){if(this.renderer.type===u.RENDERER_TYPE.WEBGL){var r=this.renderer.gl,i=new Uint8Array(4);return r.bindFramebuffer(r.FRAMEBUFFER,this.textureBuffer.frameBuffer),r.readPixels(t,e,1,1,r.RGBA,r.UNSIGNED_BYTE,i),r.bindFramebuffer(r.FRAMEBUFFER,null),i}return this.textureBuffer.canvas.getContext("2d").getImageData(t,e,1,1).data}},{"../const":22,"../math":32,"../renderers/canvas/utils/CanvasBuffer":44,"../renderers/webgl/managers/FilterManager":53,"../renderers/webgl/utils/RenderTarget":64,"./BaseTexture":69,"./Texture":71}],71:[function(t,e,r){function i(t,e,r,n,o){a.call(this),this.noFrame=!1,e||(this.noFrame=!0,e=new h.Rectangle(0,0,1,1)),t instanceof i&&(t=t.baseTexture),this.baseTexture=t,this._frame=e,this.trim=n,this.valid=!1,this.requiresUpdate=!1,this._uvs=null,this.width=0,this.height=0,this.crop=r||e,this.rotate=!!o,t.hasLoaded?(this.noFrame&&(e=new h.Rectangle(0,0,t.width,t.height),t.on("update",this.onBaseTextureUpdated,this)),this.frame=e):t.once("loaded",this.onBaseTextureLoaded,this)}var n=t("./BaseTexture"),o=t("./VideoBaseTexture"),s=t("./TextureUvs"),a=t("eventemitter3"),h=t("../math"),l=t("../utils");i.prototype=Object.create(a.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{frame:{get:function(){return this._frame},set:function(t){if(this._frame=t,this.noFrame=!1,this.width=t.width,this.height=t.height,!this.trim&&!this.rotate&&(t.x+t.width>this.baseTexture.width||t.y+t.height>this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this);this.valid=t&&t.width&&t.height&&this.baseTexture.hasLoaded,this.trim?(this.width=this.trim.width,this.height=this.trim.height,this._frame.width=this.trim.width,this._frame.height=this.trim.height):this.crop=t,this.valid&&this._updateUvs()}}}),i.prototype.update=function(){this.baseTexture.update()},i.prototype.onBaseTextureLoaded=function(t){this.frame=this.noFrame?new h.Rectangle(0,0,t.width,t.height):this._frame,this.emit("update",this)},i.prototype.onBaseTextureUpdated=function(t){this._frame.width=t.width,this._frame.height=t.height,this.emit("update",this)},i.prototype.destroy=function(t){this.baseTexture&&(t&&this.baseTexture.destroy(),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture.off("loaded",this.onBaseTextureLoaded,this),this.baseTexture=null),this._frame=null,this._uvs=null,this.trim=null,this.crop=null,this.valid=!1},i.prototype.clone=function(){return new i(this.baseTexture,this.frame,this.crop,this.trim,this.rotate)},i.prototype._updateUvs=function(){this._uvs||(this._uvs=new s),this._uvs.set(this.crop,this.baseTexture,this.rotate)},i.fromImage=function(t,e,r){var o=l.TextureCache[t];return o||(o=new i(n.fromImage(t,e,r)),l.TextureCache[t]=o),o},i.fromFrame=function(t){var e=l.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return e},i.fromCanvas=function(t,e){return new i(n.fromCanvas(t,e))},i.fromVideo=function(t,e){return"string"==typeof t?i.fromVideoUrl(t,e):new i(o.fromVideo(t,e))},i.fromVideoUrl=function(t,e){return new i(o.fromUrl(t,e))},i.addTextureToCache=function(t,e){l.TextureCache[e]=t},i.removeTextureFromCache=function(t){var e=l.TextureCache[t];return delete l.TextureCache[t],delete l.BaseTextureCache[t],e},i.EMPTY=new i(new n)},{"../math":32,"../utils":76,"./BaseTexture":69,"./TextureUvs":72,"./VideoBaseTexture":73,eventemitter3:11}],72:[function(t,e,r){function i(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1}e.exports=i,i.prototype.set=function(t,e,r){var i=e.width,n=e.height;r?(this.x0=(t.x+t.height)/i,this.y0=t.y/n,this.x1=(t.x+t.height)/i,this.y1=(t.y+t.width)/n,this.x2=t.x/i,this.y2=(t.y+t.width)/n,this.x3=t.x/i,this.y3=t.y/n):(this.x0=t.x/i,this.y0=t.y/n,this.x1=(t.x+t.width)/i,this.y1=t.y/n,this.x2=(t.x+t.width)/i,this.y2=(t.y+t.height)/n,this.x3=t.x/i,this.y3=(t.y+t.height)/n)}},{}],73:[function(t,e,r){function i(t,e){if(!t)throw new Error("No video source element specified.");(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),o.call(this,t,e),this.autoUpdate=!1,this._onUpdate=this._onUpdate.bind(this),this._onCanPlay=this._onCanPlay.bind(this),t.complete||(t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlay),t.addEventListener("play",this._onPlayStart.bind(this)),t.addEventListener("pause",this._onPlayStop.bind(this))),this.__loaded=!1}function n(t,e){e||(e="video/"+t.substr(t.lastIndexOf(".")+1));var r=document.createElement("source");return r.src=t,r.type=e,r}var o=t("./BaseTexture"),s=t("../utils");i.prototype=Object.create(o.prototype),i.prototype.constructor=i,e.exports=i,i.prototype._onUpdate=function(){this.autoUpdate&&(window.requestAnimationFrame(this._onUpdate),this.update())},i.prototype._onPlayStart=function(){this.autoUpdate||(window.requestAnimationFrame(this._onUpdate),this.autoUpdate=!0)},i.prototype._onPlayStop=function(){this.autoUpdate=!1},i.prototype._onCanPlay=function(){this.hasLoaded=!0,this.source&&(this.source.removeEventListener("canplay",this._onCanPlay),this.source.removeEventListener("canplaythrough",this._onCanPlay),this.width=this.source.videoWidth,this.height=this.source.videoHeight,this.source.play(),this.__loaded||(this.__loaded=!0,this.emit("loaded",this)))},i.prototype.destroy=function(){this.source&&this.source._pixiId&&(delete s.BaseTextureCache[this.source._pixiId],delete this.source._pixiId),o.prototype.destroy.call(this)},i.fromVideo=function(t,e){t._pixiId||(t._pixiId="video_"+s.uuid());var r=s.BaseTextureCache[t._pixiId];return r||(r=new i(t,e),s.BaseTextureCache[t._pixiId]=r),r},i.fromUrl=function(t,e){var r=document.createElement("video");if(Array.isArray(t))for(var o=0;o<t.length;++o)r.appendChild(n(t.src||t,t.mime));else r.appendChild(n(t.src||t,t.mime));return r.load(),r.play(),i.fromVideo(r,e)},i.fromUrls=i.fromUrl},{"../utils":76,"./BaseTexture":69}],74:[function(t,e,r){function i(){var t=this;this._tick=function(e){t._requestId=null,t.started&&(t.update(e),t.started&&null===t._requestId&&t._emitter.listeners(s,!0)&&(t._requestId=requestAnimationFrame(t._tick)))},this._emitter=new o,this._requestId=null,this._maxElapsedMS=100,this.autoStart=!1,this.deltaTime=1,this.elapsedMS=1/n.TARGET_FPMS,this.lastTime=0,this.speed=1,this.started=!1}var n=t("../const"),o=t("eventemitter3"),s="tick";Object.defineProperties(i.prototype,{FPS:{get:function(){return 1e3/this.elapsedMS}},minFPS:{get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(Math.max(0,t)/1e3,n.TARGET_FPMS);this._maxElapsedMS=1/e}}}),i.prototype._requestIfNeeded=function(){null===this._requestId&&this._emitter.listeners(s,!0)&&(this.lastTime=performance.now(),this._requestId=requestAnimationFrame(this._tick))},i.prototype._cancelIfNeeded=function(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)},i.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},i.prototype.add=function(t,e){return this._emitter.on(s,t,e),this._startIfPossible(),this},i.prototype.addOnce=function(t,e){return this._emitter.once(s,t,e),this._startIfPossible(),this},i.prototype.remove=function(t,e){return this._emitter.off(s,t,e),this._emitter.listeners(s,!0)||this._cancelIfNeeded(),this},i.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},i.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},i.prototype.update=function(t){var e;t=t||performance.now(),e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),this.deltaTime=e*n.TARGET_FPMS*this.speed,this._emitter.emit(s,this.deltaTime),this.lastTime=t},e.exports=i},{"../const":22,eventemitter3:11}],75:[function(t,e,r){var i=t("./Ticker"),n=new i;n.autoStart=!0,e.exports={shared:n,Ticker:i}},{"./Ticker":74}],76:[function(t,e,r){var i=t("../const"),n=e.exports={_uid:0,_saidHello:!1,pluginTarget:t("./pluginTarget"),async:t("async"),uuid:function(){return++n._uid},hex2rgb:function(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e},hex2string:function(t){return t=t.toString(16),t="000000".substr(0,6-t.length)+t,"#"+t},rgb2hex:function(t){return(255*t[0]<<16)+(255*t[1]<<8)+255*t[2]},canUseNewCanvasBlendModes:function(){if("undefined"==typeof document)return!1;var t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",e="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",r=new Image;r.src=t+"AP804Oa6"+e;var i=new Image;i.src=t+"/wCKxvRF"+e;var n=document.createElement("canvas");n.width=6,n.height=1;var o=n.getContext("2d");o.globalCompositeOperation="multiply",o.drawImage(r,0,0),o.drawImage(i,2,0);var s=o.getImageData(2,0,1,1).data;return 255===s[0]&&0===s[1]&&0===s[2]},getNextPowerOfTwo:function(t){if(t>0&&0===(t&t-1))return t;for(var e=1;t>e;)e<<=1;return e},isPowerOfTwo:function(t,e){return t>0&&0===(t&t-1)&&e>0&&0===(e&e-1)},getResolutionOfUrl:function(t){var e=i.RETINA_PREFIX.exec(t);return e?parseFloat(e[1]):1},sayHello:function(t){if(!n._saidHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["\n %c %c %c Pixi.js "+i.VERSION+" - ✰ "+t+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];window.console.log.apply(console,e)}else window.console&&window.console.log("Pixi.js "+i.VERSION+" - "+t+" - http://www.pixijs.com/");n._saidHello=!0}},isWebGLSupported:function(){var t={stencil:!0};try{if(!window.WebGLRenderingContext)return!1;var e=document.createElement("canvas"),r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t);return!(!r||!r.getContextAttributes().stencil)}catch(i){return!1}},TextureCache:{},BaseTextureCache:{}}},{"../const":22,"./pluginTarget":77,async:2}],77:[function(t,e,r){function i(t){t.__plugins={},t.registerPlugin=function(e,r){t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e](this)},t.prototype.destroyPlugins=function(){for(var t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}e.exports={mixin:function(t){i(t)}}},{}],78:[function(t,e,r){var i=t("./core"),n=t("./mesh"),o=t("./extras"),s=t("./core/utils");i.SpriteBatch=function(){throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")},i.AssetLoader=function(){throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")},Object.defineProperties(i,{Stage:{get:function(){return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."),i.Container}},DisplayObjectContainer:{get:function(){return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."),i.Container}},Strip:{get:function(){return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."),n.Mesh}},Rope:{get:function(){return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."),n.Rope}},MovieClip:{get:function(){return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."),o.MovieClip}},TilingSprite:{get:function(){return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."),o.TilingSprite}},BitmapText:{get:function(){return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."),o.BitmapText}},blendModes:{get:function(){return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."),i.BLEND_MODES}},scaleModes:{get:function(){return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."),i.SCALE_MODES}},BaseTextureCache:{get:function(){return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."),s.BaseTextureCache}},TextureCache:{get:function(){return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."),s.TextureCache}}}),i.Sprite.prototype.setTexture=function(t){this.texture=t,console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")},o.BitmapText.prototype.setText=function(t){this.text=t,console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")},i.Text.prototype.setText=function(t){this.text=t,console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")},i.Text.prototype.setStyle=function(t){this.style=t,console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")},i.Texture.prototype.setFrame=function(t){this.frame=t,console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")}},{"./core":29,"./core/utils":76,"./extras":85,"./mesh":126}],79:[function(t,e,r){function i(t,e){n.Container.call(this),e=e||{},this.textWidth=0,this.textHeight=0,this._glyphs=[],this._font={tint:void 0!==e.tint?e.tint:16777215,align:e.align||"left",name:null,size:0},this.font=e.font,this._text=t,this.maxWidth=0,this.dirty=!1,this.updateText()}var n=t("../core");i.prototype=Object.create(n.Container.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{tint:{get:function(){return this._font.tint},set:function(t){this._font.tint="number"==typeof t&&t>=0?t:16777215,this.dirty=!0}},align:{get:function(){return this._font.align},set:function(t){this._font.align=t||"left",this.dirty=!0}},font:{get:function(){return this._font},set:function(t){t&&("string"==typeof t?(t=t.split(" "),this._font.name=1===t.length?t[0]:t.slice(1).join(" "),this._font.size=t.length>=2?parseInt(t[0],10):i.fonts[this._font.name].size):(this._font.name=t.name,this._font.size="number"==typeof t.size?t.size:parseInt(t.size,10)),this.dirty=!0)}},text:{get:function(){return this._text;

},set:function(t){t=t.toString()||" ",this._text!==t&&(this._text=t,this.dirty=!0)}}}),i.prototype.updateText=function(){for(var t=i.fonts[this._font.name],e=new n.math.Point,r=null,o=[],s=0,a=0,h=[],l=0,u=this._font.size/t.size,c=-1,p=0;p<this.text.length;p++){var d=this.text.charCodeAt(p);if(c=/(\s)/.test(this.text.charAt(p))?p:c,/(?:\r\n|\r|\n)/.test(this.text.charAt(p)))h.push(s),a=Math.max(a,s),l++,e.x=0,e.y+=t.lineHeight,r=null;else if(-1!==c&&this.maxWidth>0&&e.x*u>this.maxWidth)o.splice(c,p-c),p=c,c=-1,h.push(s),a=Math.max(a,s),l++,e.x=0,e.y+=t.lineHeight,r=null;else{var f=t.chars[d];f&&(r&&f.kerning[r]&&(e.x+=f.kerning[r]),o.push({texture:f.texture,line:l,charCode:d,position:new n.math.Point(e.x+f.xOffset,e.y+f.yOffset)}),s=e.x+(f.texture.width+f.xOffset),e.x+=f.xAdvance,r=d)}}h.push(s),a=Math.max(a,s);var v=[];for(p=0;l>=p;p++){var g=0;"right"===this._font.align?g=a-h[p]:"center"===this._font.align&&(g=(a-h[p])/2),v.push(g)}var m=o.length,y=this.tint;for(p=0;m>p;p++){var x=this._glyphs[p];x?x.texture=o[p].texture:(x=new n.Sprite(o[p].texture),this._glyphs.push(x)),x.position.x=(o[p].position.x+v[o[p].line])*u,x.position.y=o[p].position.y*u,x.scale.x=x.scale.y=u,x.tint=y,x.parent||this.addChild(x)}for(p=m;p<this._glyphs.length;++p)this.removeChild(this._glyphs[p]);this.textWidth=a*u,this.textHeight=(e.y+t.lineHeight)*u},i.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},i.prototype.getLocalBounds=function(){return this.validate(),n.Container.prototype.getLocalBounds.call(this)},i.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},i.fonts={}},{"../core":29}],80:[function(t,e,r){function i(t){n.Sprite.call(this,t[0]),this._textures=t,this.animationSpeed=1,this.loop=!0,this.onComplete=null,this._currentTime=0,this.playing=!1}var n=t("../core");i.prototype=Object.create(n.Sprite.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{totalFrames:{get:function(){return this._textures.length}},textures:{get:function(){return this._textures},set:function(t){this._textures=t,this.texture=this._textures[Math.floor(this._currentTime)%this._textures.length]}},currentFrame:{get:function(){return Math.floor(this._currentTime)%this._textures.length}}}),i.prototype.stop=function(){this.playing&&(this.playing=!1,n.ticker.shared.remove(this.update,this))},i.prototype.play=function(){this.playing||(this.playing=!0,n.ticker.shared.add(this.update,this))},i.prototype.gotoAndStop=function(t){this.stop(),this._currentTime=t;var e=Math.floor(this._currentTime);this._texture=this._textures[e%this._textures.length]},i.prototype.gotoAndPlay=function(t){this._currentTime=t,this.play()},i.prototype.update=function(t){this._currentTime+=this.animationSpeed*t;var e=Math.floor(this._currentTime);0>e?this.loop?this._texture=this._textures[this._textures.length-1+e%this._textures.length]:(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this.loop||e<this._textures.length?this._texture=this._textures[e%this._textures.length]:e>=this._textures.length&&(this.gotoAndStop(this.textures.length-1),this.onComplete&&this.onComplete())},i.prototype.destroy=function(){this.stop(),n.Sprite.prototype.destroy.call(this)},i.fromFrames=function(t){for(var e=[],r=0;r<t.length;++r)e.push(new n.Texture.fromFrame(t[r]));return new i(e)},i.fromImages=function(t){for(var e=[],r=0;r<t.length;++r)e.push(new n.Texture.fromImage(t[r]));return new i(e)}},{"../core":29}],81:[function(t,e,r){function i(t,e,r){n.Sprite.call(this,t),this.tileScale=new n.math.Point(1,1),this.tilePosition=new n.math.Point(0,0),this._width=e||100,this._height=r||100,this._uvs=new n.TextureUvs,this._canvasPattern=null,this.shader=new n.AbstractFilter(["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","uniform vec4 uFrame;","uniform vec4 uTransform;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vec2 coord = aTextureCoord;","   coord -= uTransform.xy;","   coord /= uTransform.zw;","   coord /= uFrame.zw;","   vTextureCoord = coord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform vec4 uFrame;","void main(void){","   vec2 coord = fract(vTextureCoord);","   coord *= uFrame.zw;","   coord += uFrame.xy;","   gl_FragColor =  texture2D(uSampler, coord) * vColor ;","}"].join("\n"),{uFrame:{type:"4fv",value:[0,0,1,1]},uTransform:{type:"4fv",value:[0,0,1,1]}})}var n=t("../core"),o=new n.Point;i.prototype=Object.create(n.Sprite.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{width:{get:function(){return this._width},set:function(t){this._width=t}},height:{get:function(){return this._height},set:function(t){this._height=t}}}),i.prototype._onTextureUpdate=function(){},i.prototype._renderWebGL=function(t){var e=this._texture;if(e&&e._uvs){var r=e._uvs,i=e._frame.width,n=e._frame.height,o=e.baseTexture.width,s=e.baseTexture.height;e._uvs=this._uvs,e._frame.width=this.width,e._frame.height=this.height,this.shader.uniforms.uFrame.value[0]=r.x0,this.shader.uniforms.uFrame.value[1]=r.y0,this.shader.uniforms.uFrame.value[2]=r.x1-r.x0,this.shader.uniforms.uFrame.value[3]=r.y2-r.y0,this.shader.uniforms.uTransform.value[0]=this.tilePosition.x%(i*this.tileScale.x)/this._width,this.shader.uniforms.uTransform.value[1]=this.tilePosition.y%(n*this.tileScale.y)/this._height,this.shader.uniforms.uTransform.value[2]=o/this._width*this.tileScale.x,this.shader.uniforms.uTransform.value[3]=s/this._height*this.tileScale.y,t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this),e._uvs=r,e._frame.width=i,e._frame.height=n}},i.prototype._renderCanvas=function(t){var e=this._texture;if(e.baseTexture.hasLoaded){var r=t.context,i=this.worldTransform,o=t.resolution,s=e.baseTexture,a=this.tilePosition.x%(e._frame.width*this.tileScale.x),h=this.tilePosition.y%(e._frame.height*this.tileScale.y);if(!this._canvasPattern){var l=new n.CanvasBuffer(e._frame.width,e._frame.height);l.context.drawImage(s.source,-e._frame.x,-e._frame.y),this._canvasPattern=l.context.createPattern(l.canvas,"repeat")}r.globalAlpha=this.worldAlpha,r.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),r.scale(this.tileScale.x,this.tileScale.y),r.translate(a+this.anchor.x*-this._width,h+this.anchor.y*-this._height),this.blendMode!==t.currentBlendMode&&(t.currentBlendMode=this.blendMode,r.globalCompositeOperation=t.blendModes[t.currentBlendMode]),r.fillStyle=this._canvasPattern,r.fillRect(-a,-h,this._width/this.tileScale.x,this._height/this.tileScale.y)}},i.prototype.getBounds=function(){var t,e,r,i,n=this._width,o=this._height,s=n*(1-this.anchor.x),a=n*-this.anchor.x,h=o*(1-this.anchor.y),l=o*-this.anchor.y,u=this.worldTransform,c=u.a,p=u.b,d=u.c,f=u.d,v=u.tx,g=u.ty,m=c*a+d*l+v,y=f*l+p*a+g,x=c*s+d*l+v,b=f*l+p*s+g,_=c*s+d*h+v,T=f*h+p*s+g,E=c*a+d*h+v,S=f*h+p*a+g;t=m,t=t>x?x:t,t=t>_?_:t,t=t>E?E:t,r=y,r=r>b?b:r,r=r>T?T:r,r=r>S?S:r,e=m,e=x>e?x:e,e=_>e?_:e,e=E>e?E:e,i=y,i=b>i?b:i,i=T>i?T:i,i=S>i?S:i;var C=this._bounds;return C.x=t,C.width=e-t,C.y=r,C.height=i-r,this._currentBounds=C,C},i.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,o);var e,r=this._width,i=this._height,n=-r*this.anchor.x;return o.x>n&&o.x<n+r&&(e=-i*this.anchor.y,o.y>e&&o.y<e+i)?!0:!1},i.prototype.destroy=function(){n.Sprite.prototype.destroy.call(this),this.tileScale=null,this._tileScaleOffset=null,this.tilePosition=null,this._uvs=null},i.fromFrame=function(t,e,r){var o=n.utils.TextureCache[t];if(!o)throw new Error('The frameId "'+t+'" does not exist in the texture cache '+this);return new i(o,e,r)},i.fromImage=function(t,e,r,o,s){return new i(n.Texture.fromImage(t,o,s),e,r)}},{"../core":29}],82:[function(t,e,r){var i=t("../core"),n=i.DisplayObject,o=new i.Matrix;n.prototype._cacheAsBitmap=!1,n.prototype._originalRenderWebGL=null,n.prototype._originalRenderCanvas=null,n.prototype._originalUpdateTransform=null,n.prototype._originalHitTest=null,n.prototype._originalDestroy=null,n.prototype._cachedSprite=null,Object.defineProperties(n.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){this._cacheAsBitmap!==t&&(this._cacheAsBitmap=t,t?(this._originalRenderWebGL=this.renderWebGL,this._originalRenderCanvas=this.renderCanvas,this._originalUpdateTransform=this.updateTransform,this._originalGetBounds=this.getBounds,this._originalDestroy=this.destroy,this._originalContainsPoint=this.containsPoint,this.renderWebGL=this._renderCachedWebGL,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(this._cachedSprite&&this._destroyCachedDisplayObject(),this.renderWebGL=this._originalRenderWebGL,this.renderCanvas=this._originalRenderCanvas,this.getBounds=this._originalGetBounds,this.destroy=this._originalDestroy,this.updateTransform=this._originalUpdateTransform,this.containsPoint=this._originalContainsPoint))}}}),n.prototype._renderCachedWebGL=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),t.setObjectRenderer(t.plugins.sprite),t.plugins.sprite.render(this._cachedSprite))},n.prototype._initCachedDisplayObject=function(t){if(!this._cachedSprite){t.currentRenderer.flush();var e=this.getLocalBounds().clone();if(this._filters){var r=this._filters[0].padding;e.x-=r,e.y-=r,e.width+=2*r,e.height+=2*r}var n=t.currentRenderTarget,s=t.filterManager.filterStack,a=new i.RenderTexture(t,0|e.width,0|e.height),h=o;h.tx=-e.x,h.ty=-e.y,this.renderWebGL=this._originalRenderWebGL,a.render(this,h,!0,!0),t.setRenderTarget(n),t.filterManager.filterStack=s,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObjectUpdateTransform,this.getBounds=this._getCachedBounds,this._cachedSprite=new i.Sprite(a),this._cachedSprite.worldTransform=this.worldTransform,this._cachedSprite.anchor.x=-(e.x/e.width),this._cachedSprite.anchor.y=-(e.y/e.height),this.updateTransform(),this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)}},n.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cachedSprite.worldAlpha=this.worldAlpha,this._cachedSprite.renderCanvas(t))},n.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cachedSprite){var e=this.getLocalBounds(),r=t.context,n=new i.RenderTexture(t,0|e.width,0|e.height),s=o;s.tx=-e.x,s.ty=-e.y,this.renderCanvas=this._originalRenderCanvas,n.render(this,s,!0),t.context=r,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.getBounds=this._getCachedBounds,this._cachedSprite=new i.Sprite(n),this._cachedSprite.worldTransform=this.worldTransform,this._cachedSprite.anchor.x=-(e.x/e.width),this._cachedSprite.anchor.y=-(e.y/e.height),this.updateTransform(),this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)}},n.prototype._getCachedBounds=function(){return this._cachedSprite._currentBounds=null,this._cachedSprite.getBounds()},n.prototype._destroyCachedDisplayObject=function(){this._cachedSprite._texture.destroy(),this._cachedSprite=null},n.prototype._cacheAsBitmapDestroy=function(){this.cacheAsBitmap=!1,this._originalDestroy()}},{"../core":29}],83:[function(t,e,r){var i=t("../core");i.DisplayObject.prototype.name=null,i.Container.prototype.getChildByName=function(t){for(var e=0;e<this.children.length;e++)if(this.children[e].name===t)return this.children[e];return null}},{"../core":29}],84:[function(t,e,r){var i=t("../core");i.DisplayObject.prototype.getGlobalPosition=function(t){return t=t||new i.Point,this.parent?(this.displayObjectUpdateTransform(),t.x=this.worldTransform.tx,t.y=this.worldTransform.ty):(t.x=this.position.x,t.y=this.position.y),t}},{"../core":29}],85:[function(t,e,r){t("./cacheAsBitmap"),t("./getChildByName"),t("./getGlobalPosition"),e.exports={MovieClip:t("./MovieClip"),TilingSprite:t("./TilingSprite"),BitmapText:t("./BitmapText")}},{"./BitmapText":79,"./MovieClip":80,"./TilingSprite":81,"./cacheAsBitmap":82,"./getChildByName":83,"./getGlobalPosition":84}],86:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"1f",value:8}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(t){this.uniforms.pixelSize.value=t}}})},{"../../core":29}],87:[function(t,e,r){function i(){n.AbstractFilter.call(this),this.blurXFilter=new o,this.blurYFilter=new s,this.defaultFilter=new n.AbstractFilter}var n=t("../../core"),o=t("../blur/BlurXFilter"),s=t("../blur/BlurYFilter");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this.defaultFilter.applyFilter(t,e,r),this.blurXFilter.applyFilter(t,e,i),t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN),this.blurYFilter.applyFilter(t,i,r),t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),t.filterManager.returnRenderTarget(i)},Object.defineProperties(i.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t}},blurX:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}},blurY:{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t}}})},{"../../core":29,"../blur/BlurXFilter":90,"../blur/BlurYFilter":91}],88:[function(t,e,r){function i(t,e){n.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n",{strength:{type:"1f",value:1},dirX:{type:"1f",value:t||0},dirY:{type:"1f",value:e||0}}),this.defaultFilter=new n.AbstractFilter,this.passes=1,this.dirX=t||0,this.dirY=e||0,this.strength=4}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);if(this.uniforms.strength.value=this.strength/4/this.passes*(e.frame.width/e.size.width),1===this.passes)t.filterManager.applyFilter(n,e,r,i);else{var o=t.filterManager.getRenderTarget(!0);t.filterManager.applyFilter(n,e,o,i);for(var s=0;s<this.passes-2;s++)t.filterManager.applyFilter(n,o,o,i);t.filterManager.applyFilter(n,o,r,i),t.filterManager.returnRenderTarget(o)}},Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength},set:function(t){this.padding=.5*t,this.strength=t}},dirX:{get:function(){return this.dirX},set:function(t){this.uniforms.dirX.value=t}},dirY:{get:function(){return this.dirY},set:function(t){this.uniforms.dirY.value=t}}})},{"../../core":29}],89:[function(t,e,r){function i(){n.AbstractFilter.call(this),this.blurXFilter=new o,this.blurYFilter=new s}var n=t("../../core"),o=t("./BlurXFilter"),s=t("./BlurYFilter");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this.blurXFilter.applyFilter(t,e,i),this.blurYFilter.applyFilter(t,i,r),t.filterManager.returnRenderTarget(i)},Object.defineProperties(i.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(t){this.padding=.5*Math.abs(t),this.blurXFilter.blur=this.blurYFilter.blur=t}},passes:{get:function(){return this.blurXFilter.passes},set:function(t){this.blurXFilter.passes=this.blurYFilter.passes=t}},blurX:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}},blurY:{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t}}})},{"../../core":29,"./BlurXFilter":90,"./BlurYFilter":91}],90:[function(t,e,r){function i(){n.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}}),this.passes=1,this.strength=4}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);if(this.uniforms.strength.value=this.strength/4/this.passes*(e.frame.width/e.size.width),1===this.passes)t.filterManager.applyFilter(n,e,r,i);else{for(var o=t.filterManager.getRenderTarget(!0),s=e,a=o,h=0;h<this.passes-1;h++){t.filterManager.applyFilter(n,s,a,!0);var l=a;a=s,s=l}t.filterManager.applyFilter(n,s,r,i),t.filterManager.returnRenderTarget(o)}},Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength},set:function(t){this.padding=.5*Math.abs(t),this.strength=t}}})},{"../../core":29}],91:[function(t,e,r){function i(){n.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}}),this.passes=1,this.strength=4}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);if(this.uniforms.strength.value=Math.abs(this.strength)/4/this.passes*(e.frame.height/e.size.height),1===this.passes)t.filterManager.applyFilter(n,e,r,i);else{for(var o=t.filterManager.getRenderTarget(!0),s=e,a=o,h=0;h<this.passes-1;h++){t.filterManager.applyFilter(n,s,a,!0);var l=a;a=s,s=l}t.filterManager.applyFilter(n,s,r,i),t.filterManager.returnRenderTarget(o)}},Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength},set:function(t){this.padding=.5*Math.abs(t),this.strength=t}}})},{"../../core":29}],92:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{delta:{type:"v2",value:{x:.1,y:0}}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i},{"../../core":29}],93:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n",{m:{type:"1fv",value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype._loadMatrix=function(t,e){e=!!e;var r=t;e&&(this._multiply(r,this.uniforms.m.value,t),r=this._colorMatrix(r)),this.uniforms.m.value=r},i.prototype._multiply=function(t,e,r){return t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19],t[5]=e[5]*r[0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19],t[10]=e[10]*r[0]+e[11]*r[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19],t[15]=e[15]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19],t},i.prototype._colorMatrix=function(t){var e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},i.prototype.brightness=function(t,e){var r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},i.prototype.greyscale=function(t,e){var r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},i.prototype.grayscale=i.prototype.greyscale,i.prototype.blackAndWhite=function(t){var e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.hue=function(t,e){t=(t||0)/180*Math.PI;var r=Math.cos(t),i=Math.sin(t),n=.213,o=.715,s=.072,a=[n+r*(1-n)+i*-n,o+r*-o+i*-o,s+r*-s+i*(1-s),0,0,n+r*-n+.143*i,o+r*(1-o)+.14*i,s+r*-s+i*-.283,0,0,n+r*-n+i*-(1-n),o+r*-o+i*o,s+r*(1-s)+i*s,0,0,0,0,0,1,0];this._loadMatrix(a,e)},i.prototype.contrast=function(t,e){var r=(t||0)+1,i=-128*(r-1),n=[r,0,0,0,i,0,r,0,0,i,0,0,r,0,i,0,0,0,1,0];this._loadMatrix(n,e)},i.prototype.saturate=function(t,e){var r=2*(t||0)/3+1,i=(r-1)*-.5,n=[r,i,i,0,0,i,r,i,0,0,i,i,r,0,0,0,0,0,1,0];this._loadMatrix(n,e)},i.prototype.desaturate=function(t){this.saturate(-1)},i.prototype.negative=function(t){var e=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.sepia=function(t){var e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.technicolor=function(t){var e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.polaroid=function(t){var e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.toBGR=function(t){var e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.kodachrome=function(t){var e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.browni=function(t){var e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.vintage=function(t){var e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.colorTone=function(t,e,r,i,n){t=t||.2,e=e||.15,r=r||16770432,i=i||3375104;var o=(r>>16&255)/255,s=(r>>8&255)/255,a=(255&r)/255,h=(i>>16&255)/255,l=(i>>8&255)/255,u=(255&i)/255,c=[.3,.59,.11,0,0,o,s,a,t,0,h,l,u,e,0,o-h,s-l,a-u,0,0];this._loadMatrix(c,n)},i.prototype.night=function(t,e){t=t||.1;var r=[-2*t,-t,0,0,0,-t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},i.prototype.predator=function(t,e){var r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,e)},i.prototype.lsd=function(t){var e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t)},i.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperties(i.prototype,{matrix:{get:function(){return this.uniforms.m.value},set:function(t){this.uniforms.m.value=t}}})},{"../../core":29}],94:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",{step:{type:"1f",value:5}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{step:{get:function(){return this.uniforms.step.value},set:function(t){this.uniforms.step.value=t}}})},{"../../core":29}],95:[function(t,e,r){function i(t,e,r){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",{
matrix:{type:"1fv",value:new Float32Array(t)},texelSize:{type:"v2",value:{x:1/e,y:1/r}}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{matrix:{get:function(){return this.uniforms.matrix.value},set:function(t){this.uniforms.matrix.value=new Float32Array(t)}},width:{get:function(){return 1/this.uniforms.texelSize.value.x},set:function(t){this.uniforms.texelSize.value.x=1/t}},height:{get:function(){return 1/this.uniforms.texelSize.value.y},set:function(t){this.uniforms.texelSize.value.y=1/t}}})},{"../../core":29}],96:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i},{"../../core":29}],97:[function(t,e,r){function i(t){var e=new n.math.Matrix;t.renderable=!1,n.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n",{mapSampler:{type:"sampler2D",value:t.texture},otherMatrix:{type:"mat3",value:e.toArray(!0)},scale:{type:"v2",value:{x:1,y:1}}}),this.maskSprite=t,this.maskMatrix=e,this.scale=new n.math.Point(20,20)}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager;i.calculateMappedMatrix(e.frame,this.maskSprite,this.maskMatrix),this.uniforms.otherMatrix.value=this.maskMatrix.toArray(!0),this.uniforms.scale.value.x=this.scale.x*(1/e.frame.width),this.uniforms.scale.value.y=this.scale.y*(1/e.frame.height);var n=this.getShader(t);i.applyFilter(n,e,r)},Object.defineProperties(i.prototype,{map:{get:function(){return this.uniforms.mapSampler.value},set:function(t){this.uniforms.mapSampler.value=t}}})},{"../../core":29}],98:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",{scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{scale:{get:function(){return this.uniforms.scale.value},set:function(t){this.uniforms.scale.value=t}},angle:{get:function(){return this.uniforms.angle.value},set:function(t){this.uniforms.angle.value=t}}})},{"../../core":29}],99:[function(t,e,r){function i(){n.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n",{blur:{type:"1f",value:1/512},color:{type:"c",value:[0,0,0]},alpha:{type:"1f",value:.7},offset:{type:"2f",value:[5,5]},strength:{type:"1f",value:1}}),this.passes=1,this.strength=4}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r,i){var n=this.getShader(t);if(this.uniforms.strength.value=this.strength/4/this.passes*(e.frame.height/e.size.height),1===this.passes)t.filterManager.applyFilter(n,e,r,i);else{for(var o=t.filterManager.getRenderTarget(!0),s=e,a=o,h=0;h<this.passes-1;h++){t.filterManager.applyFilter(n,s,a,i);var l=a;a=s,s=l}t.filterManager.applyFilter(n,s,r,i),t.filterManager.returnRenderTarget(o)}},Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength},set:function(t){this.padding=.5*t,this.strength=t}}})},{"../../core":29}],100:[function(t,e,r){function i(){n.AbstractFilter.call(this),this.blurXFilter=new o,this.blurYTintFilter=new s,this.defaultFilter=new n.AbstractFilter,this.padding=30,this._dirtyPosition=!0,this._angle=45*Math.PI/180,this._distance=10,this.alpha=.75,this.hideObject=!1,this.blendMode=n.BLEND_MODES.MULTIPLY}var n=t("../../core"),o=t("../blur/BlurXFilter"),s=t("./BlurYTintFilter");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this._dirtyPosition&&(this._dirtyPosition=!1,this.blurYTintFilter.uniforms.offset.value[0]=Math.sin(this._angle)*this._distance,this.blurYTintFilter.uniforms.offset.value[1]=Math.cos(this._angle)*this._distance),this.blurXFilter.applyFilter(t,e,i),t.blendModeManager.setBlendMode(this.blendMode),this.blurYTintFilter.applyFilter(t,i,r),t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL),this.hideObject||this.defaultFilter.applyFilter(t,e,r),t.filterManager.returnRenderTarget(i)},Object.defineProperties(i.prototype,{blur:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYTintFilter.blur=t}},blurX:{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t}},blurY:{get:function(){return this.blurYTintFilter.blur},set:function(t){this.blurYTintFilter.blur=t}},color:{get:function(){return n.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)},set:function(t){this.blurYTintFilter.uniforms.color.value=n.utils.hex2rgb(t)}},alpha:{get:function(){return this.blurYTintFilter.uniforms.alpha.value},set:function(t){this.blurYTintFilter.uniforms.alpha.value=t}},distance:{get:function(){return this._distance},set:function(t){this._dirtyPosition=!0,this._distance=t}},angle:{get:function(){return this._angle},set:function(t){this._dirtyPosition=!0,this._angle=t}}})},{"../../core":29,"../blur/BlurXFilter":90,"./BlurYTintFilter":99}],101:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",{gray:{type:"1f",value:1}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{gray:{get:function(){return this.uniforms.gray.value},set:function(t){this.uniforms.gray.value=t}}})},{"../../core":29}],102:[function(t,e,r){e.exports={AbstractFilter:t("../core/renderers/webgl/filters/AbstractFilter"),FXAAFilter:t("../core/renderers/webgl/filters/FXAAFilter"),SpriteMaskFilter:t("../core/renderers/webgl/filters/SpriteMaskFilter"),AsciiFilter:t("./ascii/AsciiFilter"),BloomFilter:t("./bloom/BloomFilter"),BlurFilter:t("./blur/BlurFilter"),BlurXFilter:t("./blur/BlurXFilter"),BlurYFilter:t("./blur/BlurYFilter"),BlurDirFilter:t("./blur/BlurDirFilter"),ColorMatrixFilter:t("./color/ColorMatrixFilter"),ColorStepFilter:t("./color/ColorStepFilter"),ConvolutionFilter:t("./convolution/ConvolutionFilter"),CrossHatchFilter:t("./crosshatch/CrossHatchFilter"),DisplacementFilter:t("./displacement/DisplacementFilter"),DotScreenFilter:t("./dot/DotScreenFilter"),GrayFilter:t("./gray/GrayFilter"),DropShadowFilter:t("./dropshadow/DropShadowFilter"),InvertFilter:t("./invert/InvertFilter"),NoiseFilter:t("./noise/NoiseFilter"),NormalMapFilter:t("./normal/NormalMapFilter"),PixelateFilter:t("./pixelate/PixelateFilter"),RGBSplitFilter:t("./rgb/RGBSplitFilter"),ShockwaveFilter:t("./shockwave/ShockwaveFilter"),SepiaFilter:t("./sepia/SepiaFilter"),SmartBlurFilter:t("./blur/SmartBlurFilter"),TiltShiftFilter:t("./tiltshift/TiltShiftFilter"),TiltShiftXFilter:t("./tiltshift/TiltShiftXFilter"),TiltShiftYFilter:t("./tiltshift/TiltShiftYFilter"),TwistFilter:t("./twist/TwistFilter")}},{"../core/renderers/webgl/filters/AbstractFilter":49,"../core/renderers/webgl/filters/FXAAFilter":50,"../core/renderers/webgl/filters/SpriteMaskFilter":51,"./ascii/AsciiFilter":86,"./bloom/BloomFilter":87,"./blur/BlurDirFilter":88,"./blur/BlurFilter":89,"./blur/BlurXFilter":90,"./blur/BlurYFilter":91,"./blur/SmartBlurFilter":92,"./color/ColorMatrixFilter":93,"./color/ColorStepFilter":94,"./convolution/ConvolutionFilter":95,"./crosshatch/CrossHatchFilter":96,"./displacement/DisplacementFilter":97,"./dot/DotScreenFilter":98,"./dropshadow/DropShadowFilter":100,"./gray/GrayFilter":101,"./invert/InvertFilter":103,"./noise/NoiseFilter":104,"./normal/NormalMapFilter":105,"./pixelate/PixelateFilter":106,"./rgb/RGBSplitFilter":107,"./sepia/SepiaFilter":108,"./shockwave/ShockwaveFilter":109,"./tiltshift/TiltShiftFilter":111,"./tiltshift/TiltShiftXFilter":112,"./tiltshift/TiltShiftYFilter":113,"./twist/TwistFilter":114}],103:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",{invert:{type:"1f",value:1}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{invert:{get:function(){return this.uniforms.invert.value},set:function(t){this.uniforms.invert.value=t}}})},{"../../core":29}],104:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",{noise:{type:"1f",value:.5}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{noise:{get:function(){return this.uniforms.noise.value},set:function(t){this.uniforms.noise.value=t}}})},{"../../core":29}],105:[function(t,e,r){function i(t){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n",{displacementMap:{type:"sampler2D",value:t},scale:{type:"2f",value:{x:15,y:15}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:1}},dimensions:{type:"4f",value:[0,0,0,0]},LightPos:{type:"3f",value:[0,1,0]}}),t.baseTexture._powerOf2=!0,t.baseTexture.hasLoaded?this.onTextureLoaded():t.baseTexture.once("loaded",this.onTextureLoaded,this)}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width,this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height},Object.defineProperties(i.prototype,{map:{get:function(){return this.uniforms.displacementMap.value},set:function(t){this.uniforms.displacementMap.value=t}},scale:{get:function(){return this.uniforms.scale.value},set:function(t){this.uniforms.scale.value=t}},offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}}})},{"../../core":29}],106:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"v2",value:{x:10,y:10}}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{size:{get:function(){return this.uniforms.pixelSize.value},set:function(t){this.uniforms.pixelSize.value=t}}})},{"../../core":29}],107:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",{red:{type:"v2",value:{x:20,y:20}},green:{type:"v2",value:{x:-20,y:20}},blue:{type:"v2",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{red:{get:function(){return this.uniforms.red.value},set:function(t){this.uniforms.red.value=t}},green:{get:function(){return this.uniforms.green.value},set:function(t){this.uniforms.green.value=t}},blue:{get:function(){return this.uniforms.blue.value},set:function(t){this.uniforms.blue.value=t}}})},{"../../core":29}],108:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",{sepia:{type:"1f",value:1}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{sepia:{get:function(){return this.uniforms.sepia.value},set:function(t){this.uniforms.sepia.value=t}}})},{"../../core":29}],109:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",{center:{type:"v2",value:{x:.5,y:.5}},params:{type:"v3",value:{x:10,y:.8,z:.1}},time:{type:"1f",value:0}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{center:{get:function(){return this.uniforms.center.value},set:function(t){this.uniforms.center.value=t}},params:{get:function(){return this.uniforms.params.value},set:function(t){this.uniforms.params.value=t}},time:{get:function(){return this.uniforms.time.value},set:function(t){this.uniforms.time.value=t}}})},{"../../core":29}],110:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{blur:{type:"1f",value:100},gradientBlur:{type:"1f",value:600},start:{type:"v2",value:{x:0,y:window.innerHeight/2}},end:{type:"v2",value:{x:600,y:window.innerHeight/2}},delta:{type:"v2",value:{x:30,y:30}},texSize:{type:"v2",value:{x:window.innerWidth,y:window.innerHeight}}}),this.updateDelta()}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.updateDelta=function(){this.uniforms.delta.value.x=0,this.uniforms.delta.value.y=0},Object.defineProperties(i.prototype,{blur:{get:function(){return this.uniforms.blur.value},set:function(t){this.uniforms.blur.value=t}},gradientBlur:{get:function(){return this.uniforms.gradientBlur.value},set:function(t){this.uniforms.gradientBlur.value=t}},start:{get:function(){return this.uniforms.start.value},set:function(t){this.uniforms.start.value=t,this.updateDelta()}},end:{get:function(){return this.uniforms.end.value},set:function(t){this.uniforms.end.value=t,this.updateDelta()}}})},{"../../core":29}],111:[function(t,e,r){function i(){n.AbstractFilter.call(this),this.tiltShiftXFilter=new o,this.tiltShiftYFilter=new s}var n=t("../../core"),o=t("./TiltShiftXFilter"),s=t("./TiltShiftYFilter");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.applyFilter=function(t,e,r){var i=t.filterManager.getRenderTarget(!0);this.tiltShiftXFilter.applyFilter(t,e,i),this.tiltShiftYFilter.applyFilter(t,i,r),t.filterManager.returnRenderTarget(i)},Object.defineProperties(i.prototype,{blur:{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t}},gradientBlur:{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t}},start:{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t}},end:{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t}}})},{"../../core":29,"./TiltShiftXFilter":112,"./TiltShiftYFilter":113}],112:[function(t,e,r){function i(){n.call(this)}var n=t("./TiltShiftAxisFilter");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.updateDelta=function(){var t=this.uniforms.end.value.x-this.uniforms.start.value.x,e=this.uniforms.end.value.y-this.uniforms.start.value.y,r=Math.sqrt(t*t+e*e);this.uniforms.delta.value.x=t/r,this.uniforms.delta.value.y=e/r}},{"./TiltShiftAxisFilter":110}],113:[function(t,e,r){function i(){n.call(this)}var n=t("./TiltShiftAxisFilter");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.updateDelta=function(){var t=this.uniforms.end.value.x-this.uniforms.start.value.x,e=this.uniforms.end.value.y-this.uniforms.start.value.y,r=Math.sqrt(t*t+e*e);this.uniforms.delta.value.x=-e/r,this.uniforms.delta.value.y=t/r}},{"./TiltShiftAxisFilter":110}],114:[function(t,e,r){function i(){n.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",{radius:{type:"1f",value:.5},angle:{type:"1f",value:5},offset:{type:"v2",value:{x:.5,y:.5}}})}var n=t("../../core");i.prototype=Object.create(n.AbstractFilter.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{offset:{get:function(){return this.uniforms.offset.value},set:function(t){this.uniforms.offset.value=t}},radius:{get:function(){return this.uniforms.radius.value},set:function(t){this.uniforms.radius.value=t}},angle:{get:function(){return this.uniforms.angle.value},set:function(t){this.uniforms.angle.value=t}}})},{"../../core":29}],115:[function(t,e,r){function i(){this.global=new n.Point,this.target=null,this.originalEvent=null}var n=t("../core");i.prototype.constructor=i,e.exports=i,i.prototype.getLocalPosition=function(t,e,r){var i=t.worldTransform,o=r?r:this.global,s=i.a,a=i.c,h=i.tx,l=i.b,u=i.d,c=i.ty,p=1/(s*u+a*-l);return e=e||new n.math.Point,e.x=u*p*o.x+-a*p*o.x+(c*a-h*u)*p,e.y=s*p*o.y+-l*p*o.y+(-c*s+h*l)*p,e}},{"../core":29}],116:[function(t,e,r){function i(t,e){e=e||{},this.renderer=t,this.autoPreventDefault=void 0!==e.autoPreventDefault?e.autoPreventDefault:!0,this.interactionFrequency=e.interactionFrequency||10,this.mouse=new o,this.eventData={stopped:!1,target:null,type:null,data:this.mouse,stopPropagation:function(){this.stopped=!0}},this.interactiveDataPool=[],this.interactionDOMElement=null,this.eventsAdded=!1,this.onMouseUp=this.onMouseUp.bind(this),this.processMouseUp=this.processMouseUp.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.processMouseDown=this.processMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.processMouseMove=this.processMouseMove.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.processMouseOverOut=this.processMouseOverOut.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.processTouchStart=this.processTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.processTouchEnd=this.processTouchEnd.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.processTouchMove=this.processTouchMove.bind(this),this.last=0,this.currentCursorStyle="inherit",this._tempPoint=new n.Point,this.resolution=1,this.setTargetElement(this.renderer.view,this.renderer.resolution)}var n=t("../core"),o=t("./InteractionData");Object.assign(n.DisplayObject.prototype,t("./interactiveTarget")),i.prototype.constructor=i,e.exports=i,i.prototype.setTargetElement=function(t,e){this.removeEvents(),this.interactionDOMElement=t,this.resolution=e||1,this.addEvents()},i.prototype.addEvents=function(){this.interactionDOMElement&&(n.ticker.shared.add(this.update,this),window.navigator.msPointerEnabled&&(this.interactionDOMElement.style["-ms-content-zooming"]="none",this.interactionDOMElement.style["-ms-touch-action"]="none"),window.document.addEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.addEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.addEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.addEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.addEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mouseup",this.onMouseUp,!0),this.eventsAdded=!0)},i.prototype.removeEvents=function(){this.interactionDOMElement&&(n.ticker.shared.remove(this.update),window.navigator.msPointerEnabled&&(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]=""),window.document.removeEventListener("mousemove",this.onMouseMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,!0),this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,!0),this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,!0),this.interactionDOMElement=null,window.removeEventListener("mouseup",this.onMouseUp,!0),this.eventsAdded=!1)},i.prototype.update=function(t){if(this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.interactionDOMElement)){if(this.didMove)return void(this.didMove=!1);this.cursor="inherit",this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)}},i.prototype.dispatchEvent=function(t,e,r){r.stopped||(r.target=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},i.prototype.mapPositionToPoint=function(t,e,r){var i=this.interactionDOMElement.getBoundingClientRect();t.x=(e-i.left)*(this.interactionDOMElement.width/i.width)/this.resolution,t.y=(r-i.top)*(this.interactionDOMElement.height/i.height)/this.resolution},i.prototype.processInteractive=function(t,e,r,i,n){
if(!e.visible)return!1;var o=e.children,s=!1;if(n=n||e.interactive,e.interactiveChildren)for(var a=o.length-1;a>=0;a--)!s&&i?s=this.processInteractive(t,o[a],r,!0,n):this.processInteractive(t,o[a],r,!1,!1);return n&&(i&&(e.hitArea?(e.worldTransform.applyInverse(t,this._tempPoint),s=e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)):e.containsPoint&&(s=e.containsPoint(t))),e.interactive&&r(e,s)),s},i.prototype.onMouseDown=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.autoPreventDefault&&this.mouse.originalEvent.preventDefault(),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,!0)},i.prototype.processMouseDown=function(t,e){var r=this.mouse.originalEvent,i=2===r.button||3===r.which;e&&(t[i?"_isRightDown":"_isLeftDown"]=!0,this.dispatchEvent(t,i?"rightdown":"mousedown",this.eventData))},i.prototype.onMouseUp=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,!0)},i.prototype.processMouseUp=function(t,e){var r=this.mouse.originalEvent,i=2===r.button||3===r.which,n=i?"_isRightDown":"_isLeftDown";e?(this.dispatchEvent(t,i?"rightup":"mouseup",this.eventData),t[n]&&(t[n]=!1,this.dispatchEvent(t,i?"rightclick":"click",this.eventData))):t[n]&&(t[n]=!1,this.dispatchEvent(t,i?"rightupoutside":"mouseupoutside",this.eventData))},i.prototype.onMouseMove=function(t){this.mouse.originalEvent=t,this.eventData.data=this.mouse,this.eventData.stopped=!1,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.didMove=!0,this.cursor="inherit",this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,!0),this.currentCursorStyle!==this.cursor&&(this.currentCursorStyle=this.cursor,this.interactionDOMElement.style.cursor=this.cursor)},i.prototype.processMouseMove=function(t,e){this.dispatchEvent(t,"mousemove",this.eventData),this.processMouseOverOut(t,e)},i.prototype.onMouseOut=function(t){this.mouse.originalEvent=t,this.eventData.stopped=!1,this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.interactionDOMElement.style.cursor="inherit",this.mapPositionToPoint(this.mouse.global,t.clientX,t.clientY),this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,!1)},i.prototype.processMouseOverOut=function(t,e){e?(t._over||(t._over=!0,this.dispatchEvent(t,"mouseover",this.eventData)),t.buttonMode&&(this.cursor=t.defaultCursor)):t._over&&(t._over=!1,this.dispatchEvent(t,"mouseout",this.eventData))},i.prototype.onTouchStart=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,i=0;r>i;i++){var n=e[i],o=this.getTouchData(n);o.originalEvent=t,this.eventData.data=o,this.eventData.stopped=!1,this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchStart,!0),this.returnTouchData(o)}},i.prototype.processTouchStart=function(t,e){e&&(t._touchDown=!0,this.dispatchEvent(t,"touchstart",this.eventData))},i.prototype.onTouchEnd=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,i=0;r>i;i++){var n=e[i],o=this.getTouchData(n);o.originalEvent=t,this.eventData.data=o,this.eventData.stopped=!1,this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchEnd,!0),this.returnTouchData(o)}},i.prototype.processTouchEnd=function(t,e){e?(this.dispatchEvent(t,"touchend",this.eventData),t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"tap",this.eventData))):t._touchDown&&(t._touchDown=!1,this.dispatchEvent(t,"touchendoutside",this.eventData))},i.prototype.onTouchMove=function(t){this.autoPreventDefault&&t.preventDefault();for(var e=t.changedTouches,r=e.length,i=0;r>i;i++){var n=e[i],o=this.getTouchData(n);o.originalEvent=t,this.eventData.data=o,this.eventData.stopped=!1,this.processInteractive(o.global,this.renderer._lastObjectRendered,this.processTouchMove,!1),this.returnTouchData(o)}},i.prototype.processTouchMove=function(t,e){e=e,this.dispatchEvent(t,"touchmove",this.eventData)},i.prototype.getTouchData=function(t){var e=this.interactiveDataPool.pop();return e||(e=new o),e.identifier=t.identifier,this.mapPositionToPoint(e.global,t.clientX,t.clientY),navigator.isCocoonJS&&(e.global.x=e.global.x/this.resolution,e.global.y=e.global.y/this.resolution),t.globalX=e.global.x,t.globalY=e.global.y,e},i.prototype.returnTouchData=function(t){this.interactiveDataPool.push(t)},i.prototype.destroy=function(){this.removeEvents(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactiveDataPool=null,this.interactionDOMElement=null,this.onMouseUp=null,this.processMouseUp=null,this.onMouseDown=null,this.processMouseDown=null,this.onMouseMove=null,this.processMouseMove=null,this.onMouseOut=null,this.processMouseOverOut=null,this.onTouchStart=null,this.processTouchStart=null,this.onTouchEnd=null,this.processTouchEnd=null,this.onTouchMove=null,this.processTouchMove=null,this._tempPoint=null},n.WebGLRenderer.registerPlugin("interaction",i),n.CanvasRenderer.registerPlugin("interaction",i)},{"../core":29,"./InteractionData":115,"./interactiveTarget":118}],117:[function(t,e,r){e.exports={InteractionData:t("./InteractionData"),InteractionManager:t("./InteractionManager"),interactiveTarget:t("./interactiveTarget")}},{"./InteractionData":115,"./InteractionManager":116,"./interactiveTarget":118}],118:[function(t,e,r){var i={interactive:!1,buttonMode:!1,interactiveChildren:!0,defaultCursor:"pointer",_over:!1,_touchDown:!1};e.exports=i},{}],119:[function(t,e,r){function i(t,e){var r={},i=t.data.getElementsByTagName("info")[0],n=t.data.getElementsByTagName("common")[0];r.font=i.getAttribute("face"),r.size=parseInt(i.getAttribute("size"),10),r.lineHeight=parseInt(n.getAttribute("lineHeight"),10),r.chars={};for(var s=t.data.getElementsByTagName("char"),h=0;h<s.length;h++){var l=parseInt(s[h].getAttribute("id"),10),u=new o.math.Rectangle(parseInt(s[h].getAttribute("x"),10)+e.frame.x,parseInt(s[h].getAttribute("y"),10)+e.frame.y,parseInt(s[h].getAttribute("width"),10),parseInt(s[h].getAttribute("height"),10));r.chars[l]={xOffset:parseInt(s[h].getAttribute("xoffset"),10),yOffset:parseInt(s[h].getAttribute("yoffset"),10),xAdvance:parseInt(s[h].getAttribute("xadvance"),10),kerning:{},texture:new o.Texture(e.baseTexture,u)}}var c=t.data.getElementsByTagName("kerning");for(h=0;h<c.length;h++){var p=parseInt(c[h].getAttribute("first"),10),d=parseInt(c[h].getAttribute("second"),10),f=parseInt(c[h].getAttribute("amount"),10);r.chars[d].kerning[p]=f}t.bitmapFont=r,a.BitmapText.fonts[r.font]=r}var n=t("resource-loader").Resource,o=t("../core"),s=t("../core/utils"),a=t("../extras"),h=t("path");e.exports=function(){return function(t,e){if(!t.data||!t.isXml)return e();if(0===t.data.getElementsByTagName("page").length||0===t.data.getElementsByTagName("info").length||null===t.data.getElementsByTagName("info")[0].getAttribute("face"))return e();var r=h.dirname(t.url);"."===r&&(r=""),this.baseUrl&&r&&("/"===this.baseUrl.charAt(this.baseUrl.length-1)&&(r+="/"),r=r.replace(this.baseUrl,"")),r&&"/"!==r.charAt(r.length-1)&&(r+="/");var o=r+t.data.getElementsByTagName("page")[0].getAttribute("file");if(s.TextureCache[o])i(t,s.TextureCache[o]),e();else{var a={crossOrigin:t.crossOrigin,loadType:n.LOAD_TYPE.IMAGE};this.add(t.name+"_image",o,a,function(r){i(t,r.texture),e()})}}}},{"../core":29,"../core/utils":76,"../extras":85,path:3,"resource-loader":18}],120:[function(t,e,r){e.exports={Loader:t("./loader"),bitmapFontParser:t("./bitmapFontParser"),spritesheetParser:t("./spritesheetParser"),textureParser:t("./textureParser"),Resource:t("resource-loader").Resource}},{"./bitmapFontParser":119,"./loader":121,"./spritesheetParser":122,"./textureParser":123,"resource-loader":18}],121:[function(t,e,r){function i(t,e){n.call(this,t,e);for(var r=0;r<i._pixiMiddleware.length;++r)this.use(i._pixiMiddleware[r]())}var n=t("resource-loader"),o=t("./textureParser"),s=t("./spritesheetParser"),a=t("./bitmapFontParser");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i._pixiMiddleware=[n.middleware.parsing.blob,o,s,a],i.addPixiMiddleware=function(t){i._pixiMiddleware.push(t)};var h=n.Resource;h.setExtensionXhrType("fnt",h.XHR_RESPONSE_TYPE.DOCUMENT)},{"./bitmapFontParser":119,"./spritesheetParser":122,"./textureParser":123,"resource-loader":18}],122:[function(t,e,r){var i=t("resource-loader").Resource,n=t("path"),o=t("../core");e.exports=function(){return function(t,e){if(!t.data||!t.isJson||!t.data.frames)return e();var r={crossOrigin:t.crossOrigin,loadType:i.LOAD_TYPE.IMAGE},s=n.dirname(t.url.replace(this.baseUrl,"")),a=o.utils.getResolutionOfUrl(t.url);this.add(t.name+"_image",s+"/"+t.data.meta.image,r,function(r){t.textures={};var i=t.data.frames;for(var n in i){var s=i[n].frame;if(s){var h=null,l=null;if(h=i[n].rotated?new o.math.Rectangle(s.x,s.y,s.h,s.w):new o.math.Rectangle(s.x,s.y,s.w,s.h),i[n].trimmed&&(l=new o.math.Rectangle(i[n].spriteSourceSize.x/a,i[n].spriteSourceSize.y/a,i[n].sourceSize.w/a,i[n].sourceSize.h/a)),i[n].rotated){var u=h.width;h.width=h.height,h.height=u}h.x/=a,h.y/=a,h.width/=a,h.height/=a,t.textures[n]=new o.Texture(r.texture.baseTexture,h,h.clone(),l,i[n].rotated),o.utils.TextureCache[n]=t.textures[n]}}e()})}}},{"../core":29,path:3,"resource-loader":18}],123:[function(t,e,r){var i=t("../core");e.exports=function(){return function(t,e){t.data&&t.isImage&&(t.texture=new i.Texture(new i.BaseTexture(t.data,null,i.utils.getResolutionOfUrl(t.url))),i.utils.TextureCache[t.url]=t.texture),e()}}},{"../core":29}],124:[function(t,e,r){function i(t,e,r,o,s){n.Container.call(this),this._texture=null,this.uvs=r||new Float32Array([0,1,1,1,1,0,0,1]),this.vertices=e||new Float32Array([0,0,100,0,100,100,0,100]),this.indices=o||new Uint16Array([0,1,2,3]),this.dirty=!0,this.blendMode=n.BLEND_MODES.NORMAL,this.canvasPadding=0,this.drawMode=s||i.DRAW_MODES.TRIANGLE_MESH,this.texture=t}var n=t("../core");i.prototype=Object.create(n.Container.prototype),i.prototype.constructor=i,e.exports=i,Object.defineProperties(i.prototype,{texture:{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}}),i.prototype._renderWebGL=function(t){t.setObjectRenderer(t.plugins.mesh),t.plugins.mesh.render(this)},i.prototype._renderCanvas=function(t){var e=t.context,r=this.worldTransform;t.roundPixels?e.setTransform(r.a,r.b,r.c,r.d,0|r.tx,0|r.ty):e.setTransform(r.a,r.b,r.c,r.d,r.tx,r.ty),this.drawMode===i.DRAW_MODES.TRIANGLE_MESH?this._renderCanvasTriangleMesh(e):this._renderCanvasTriangles(e)},i.prototype._renderCanvasTriangleMesh=function(t){for(var e=this.vertices,r=this.uvs,i=e.length/2,n=0;i-2>n;n++){var o=2*n;this._renderCanvasDrawTriangle(t,e,r,o,o+2,o+4)}},i.prototype._renderCanvasTriangles=function(t){for(var e=this.vertices,r=this.uvs,i=this.indices,n=i.length,o=0;n>o;o+=3){var s=2*i[o],a=2*i[o+1],h=2*i[o+2];this._renderCanvasDrawTriangle(t,e,r,s,a,h)}},i.prototype._renderCanvasDrawTriangle=function(t,e,r,i,n,o){var s=this._texture.baseTexture.source,a=this._texture.baseTexture.width,h=this._texture.baseTexture.height,l=e[i],u=e[n],c=e[o],p=e[i+1],d=e[n+1],f=e[o+1],v=r[i]*a,g=r[n]*a,m=r[o]*a,y=r[i+1]*h,x=r[n+1]*h,b=r[o+1]*h;if(this.canvasPadding>0){var _=this.canvasPadding/this.worldTransform.a,T=this.canvasPadding/this.worldTransform.d,E=(l+u+c)/3,S=(p+d+f)/3,C=l-E,w=p-S,A=Math.sqrt(C*C+w*w);l=E+C/A*(A+_),p=S+w/A*(A+T),C=u-E,w=d-S,A=Math.sqrt(C*C+w*w),u=E+C/A*(A+_),d=S+w/A*(A+T),C=c-E,w=f-S,A=Math.sqrt(C*C+w*w),c=E+C/A*(A+_),f=S+w/A*(A+T)}t.save(),t.beginPath(),t.moveTo(l,p),t.lineTo(u,d),t.lineTo(c,f),t.closePath(),t.clip();var M=v*x+y*m+g*b-x*m-y*g-v*b,R=l*x+y*c+u*b-x*c-y*u-l*b,D=v*u+l*m+g*c-u*m-l*g-v*c,F=v*x*c+y*u*m+l*g*b-l*x*m-y*g*c-v*u*b,P=p*x+y*f+d*b-x*f-y*d-p*b,O=v*d+p*m+g*f-d*m-p*g-v*f,B=v*x*f+y*d*m+p*g*b-p*x*m-y*g*f-v*d*b;t.transform(R/M,P/M,D/M,O/M,F/M,B/M),t.drawImage(s,0,0),t.restore()},i.prototype.renderMeshFlat=function(t){var e=this.context,r=t.vertices,i=r.length/2;e.beginPath();for(var n=1;i-2>n;n++){var o=2*n,s=r[o],a=r[o+2],h=r[o+4],l=r[o+1],u=r[o+3],c=r[o+5];e.moveTo(s,l),e.lineTo(a,u),e.lineTo(h,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},i.prototype._onTextureUpdate=function(){this.updateFrame=!0},i.prototype.getBounds=function(t){for(var e=t||this.worldTransform,r=e.a,i=e.b,o=e.c,s=e.d,a=e.tx,h=e.ty,l=-(1/0),u=-(1/0),c=1/0,p=1/0,d=this.vertices,f=0,v=d.length;v>f;f+=2){var g=d[f],m=d[f+1],y=r*g+o*m+a,x=s*m+i*g+h;c=c>y?y:c,p=p>x?x:p,l=y>l?y:l,u=x>u?x:u}if(c===-(1/0)||u===1/0)return n.math.Rectangle.EMPTY;var b=this._bounds;return b.x=c,b.width=l-c,b.y=p,b.height=u-p,this._currentBounds=b,b},i.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},{"../core":29}],125:[function(t,e,r){function i(t,e){n.call(this,t),this.points=e,this.vertices=new Float32Array(4*e.length),this.uvs=new Float32Array(4*e.length),this.colors=new Float32Array(2*e.length),this.indices=new Uint16Array(2*e.length),this._ready=!0,this.refresh()}var n=t("./Mesh"),o=t("../core");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,i.prototype.refresh=function(){var t=this.points;if(!(t.length<1)&&this._texture._uvs){var e=this.uvs,r=this.indices,i=this.colors,n=this._texture._uvs,s=new o.math.Point(n.x0,n.y0),a=new o.math.Point(n.x2-n.x0,n.y2-n.y0);e[0]=0+s.x,e[1]=0+s.y,e[2]=0+s.x,e[3]=1*a.y+s.y,i[0]=1,i[1]=1,r[0]=0,r[1]=1;for(var h,l,u,c=t.length,p=1;c>p;p++)h=t[p],l=4*p,u=p/(c-1),e[l]=u*a.x+s.x,e[l+1]=0+s.y,e[l+2]=u*a.x+s.x,e[l+3]=1*a.y+s.y,l=2*p,i[l]=1,i[l+1]=1,l=2*p,r[l]=l,r[l+1]=l+1;this.dirty=!0}},i.prototype._onTextureUpdate=function(){n.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},i.prototype.updateTransform=function(){var t=this.points;if(!(t.length<1)){for(var e,r,i,n,o,s,a=t[0],h=0,l=0,u=this.vertices,c=t.length,p=0;c>p;p++)r=t[p],i=4*p,e=p<t.length-1?t[p+1]:r,l=-(e.x-a.x),h=e.y-a.y,n=10*(1-p/(c-1)),n>1&&(n=1),o=Math.sqrt(h*h+l*l),s=this._texture.height/2,h/=o,l/=o,h*=s,l*=s,u[i]=r.x+h,u[i+1]=r.y+l,u[i+2]=r.x-h,u[i+3]=r.y-l,a=r;this.containerUpdateTransform()}}},{"../core":29,"./Mesh":124}],126:[function(t,e,r){e.exports={Mesh:t("./Mesh"),Rope:t("./Rope"),MeshRenderer:t("./webgl/MeshRenderer"),MeshShader:t("./webgl/MeshShader")}},{"./Mesh":124,"./Rope":125,"./webgl/MeshRenderer":127,"./webgl/MeshShader":128}],127:[function(t,e,r){function i(t){n.call(this,t),this.indices=new Uint16Array(15e3);for(var e=0,r=0;15e3>e;e+=6,r+=4)this.indices[e+0]=r+0,this.indices[e+1]=r+1,this.indices[e+2]=r+2,this.indices[e+3]=r+0,this.indices[e+4]=r+2,this.indices[e+5]=r+3}var n=t("../../core/renderers/webgl/utils/ObjectRenderer"),o=t("../../core/renderers/webgl/WebGLRenderer"),s=t("../Mesh");i.prototype=Object.create(n.prototype),i.prototype.constructor=i,e.exports=i,o.registerPlugin("mesh",i),i.prototype.onContextChange=function(){},i.prototype.render=function(t){t._vertexBuffer||this._initWebGL(t);var e=this.renderer,r=e.gl,i=t._texture.baseTexture,n=e.shaderManager.plugins.meshShader,o=t.drawMode===s.DRAW_MODES.TRIANGLE_MESH?r.TRIANGLE_STRIP:r.TRIANGLES;e.blendModeManager.setBlendMode(t.blendMode),r.uniformMatrix3fv(n.uniforms.translationMatrix._location,!1,t.worldTransform.toArray(!0)),r.uniformMatrix3fv(n.uniforms.projectionMatrix._location,!1,e.currentRenderTarget.projectionMatrix.toArray(!0)),r.uniform1f(n.uniforms.alpha._location,t.worldAlpha),t.dirty?(t.dirty=!1,r.bindBuffer(r.ARRAY_BUFFER,t._vertexBuffer),r.bufferData(r.ARRAY_BUFFER,t.vertices,r.STATIC_DRAW),r.vertexAttribPointer(n.attributes.aVertexPosition,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t._uvBuffer),r.bufferData(r.ARRAY_BUFFER,t.uvs,r.STATIC_DRAW),r.vertexAttribPointer(n.attributes.aTextureCoord,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),i._glTextures[r.id]?r.bindTexture(r.TEXTURE_2D,i._glTextures[r.id]):this.renderer.updateTexture(i),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t._indexBuffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,t.indices,r.STATIC_DRAW)):(r.bindBuffer(r.ARRAY_BUFFER,t._vertexBuffer),r.bufferSubData(r.ARRAY_BUFFER,0,t.vertices),r.vertexAttribPointer(n.attributes.aVertexPosition,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,t._uvBuffer),r.vertexAttribPointer(n.attributes.aTextureCoord,2,r.FLOAT,!1,0,0),r.activeTexture(r.TEXTURE0),i._glTextures[r.id]?r.bindTexture(r.TEXTURE_2D,i._glTextures[r.id]):this.renderer.updateTexture(i),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t._indexBuffer),r.bufferSubData(r.ELEMENT_ARRAY_BUFFER,0,t.indices)),r.drawElements(o,t.indices.length,r.UNSIGNED_SHORT,0)},i.prototype._initWebGL=function(t){var e=this.renderer.gl;t._vertexBuffer=e.createBuffer(),t._indexBuffer=e.createBuffer(),t._uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,t._vertexBuffer),e.bufferData(e.ARRAY_BUFFER,t.vertices,e.DYNAMIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,t._uvBuffer),e.bufferData(e.ARRAY_BUFFER,t.uvs,e.STATIC_DRAW),t.colors&&(t._colorBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,t._colorBuffer),e.bufferData(e.ARRAY_BUFFER,t.colors,e.STATIC_DRAW)),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t._indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t.indices,e.STATIC_DRAW)},i.prototype.flush=function(){},i.prototype.start=function(){var t=this.renderer.shaderManager.plugins.meshShader;this.renderer.shaderManager.setShader(t)},i.prototype.destroy=function(){}},{"../../core/renderers/webgl/WebGLRenderer":48,"../../core/renderers/webgl/utils/ObjectRenderer":62,"../Mesh":124}],128:[function(t,e,r){function i(t){n.Shader.call(this,t,["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;","}"].join("\n"),{alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aTextureCoord:0})}var n=t("../../core");i.prototype=Object.create(n.Shader.prototype),i.prototype.constructor=i,e.exports=i,n.ShaderManager.registerPlugin("meshShader",i)},{"../../core":29}],129:[function(t,e,r){Object.assign||(Object.assign=t("object-assign"))},{"object-assign":12}],130:[function(t,e,r){t("./Object.assign"),t("./requestAnimationFrame")},{"./Object.assign":129,"./requestAnimationFrame":131}],131:[function(t,e,r){(function(t){if(Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),!t.performance||!t.performance.now){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}for(var r=Date.now(),i=["ms","moz","webkit","o"],n=0;n<i.length&&!t.requestAnimationFrame;++n)t.requestAnimationFrame=t[i[n]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[i[n]+"CancelAnimationFrame"]||t[i[n]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var e=Date.now(),i=16+r-e;return 0>i&&(i=0),r=e,setTimeout(function(){r=Date.now(),t(performance.now())},i)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});
;(function(){
var f, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ga(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ha(a, b, c) {
  ha = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return ha.apply(null, arguments);
}
;function ia(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
f = ka.prototype;
f.kb = "";
f.set = function(a) {
  this.kb = "" + a;
};
f.append = function(a, b, c) {
  this.kb += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.kb += arguments[d];
    }
  }
  return this;
};
f.clear = function() {
  this.kb = "";
};
f.toString = function() {
  return this.kb;
};
if ("undefined" === typeof la) {
  var la = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ma = null;
if ("undefined" === typeof na) {
  var na = null
}
function pa() {
  return new p(null, 5, [qa, !0, ra, !0, sa, !1, ta, !1, ua, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function va(a, b) {
  return a === b;
}
function wa(a) {
  return null == a;
}
function xa(a) {
  return a instanceof Array;
}
function ya(a) {
  return q(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function u(a, b) {
  var c = null == b ? null : b.constructor, c = q(q(c) ? c.Wb : c) ? c.Vb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function za(a) {
  var b = a.Vb;
  return q(b) ? b : "" + v(a);
}
var Aa = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function Ba(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Da() {
  switch(arguments.length) {
    case 1:
      return Ea(arguments[0]);
    case 2:
      return Ea(arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Fa(a) {
  return Ea(a);
}
function Ea(a) {
  function b(a, b) {
    a.push(b);
    return a;
  }
  var c = [];
  return Ia ? Ia(b, c, a) : Ja.call(null, b, c, a);
}
var La = {}, Ma = {}, Na = {}, Oa = function Oa(b) {
  if (b ? b.S : b) {
    return b.S(b);
  }
  var c;
  c = Oa[m(null == b ? null : b)];
  if (!c && (c = Oa._, !c)) {
    throw u("ICounted.-count", b);
  }
  return c.call(null, b);
}, Pa = function Pa(b) {
  if (b ? b.ea : b) {
    return b.ea(b);
  }
  var c;
  c = Pa[m(null == b ? null : b)];
  if (!c && (c = Pa._, !c)) {
    throw u("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Qa = {}, Ra = function Ra(b, c) {
  if (b ? b.R : b) {
    return b.R(b, c);
  }
  var d;
  d = Ra[m(null == b ? null : b)];
  if (!d && (d = Ra._, !d)) {
    throw u("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Sa = {}, w = function w() {
  switch(arguments.length) {
    case 2:
      return w.c(arguments[0], arguments[1]);
    case 3:
      return w.j(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
w.c = function(a, b) {
  if (a ? a.X : a) {
    return a.X(a, b);
  }
  var c;
  c = w[m(null == a ? null : a)];
  if (!c && (c = w._, !c)) {
    throw u("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
w.j = function(a, b, c) {
  if (a ? a.qa : a) {
    return a.qa(a, b, c);
  }
  var d;
  d = w[m(null == a ? null : a)];
  if (!d && (d = w._, !d)) {
    throw u("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
w.H = 3;
var Ua = {}, Wa = function Wa(b) {
  if (b ? b.ia : b) {
    return b.ia(b);
  }
  var c;
  c = Wa[m(null == b ? null : b)];
  if (!c && (c = Wa._, !c)) {
    throw u("ISeq.-first", b);
  }
  return c.call(null, b);
}, Xa = function Xa(b) {
  if (b ? b.oa : b) {
    return b.oa(b);
  }
  var c;
  c = Xa[m(null == b ? null : b)];
  if (!c && (c = Xa._, !c)) {
    throw u("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ya = {}, $a = {}, z = function z() {
  switch(arguments.length) {
    case 2:
      return z.c(arguments[0], arguments[1]);
    case 3:
      return z.j(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
z.c = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = z[m(null == a ? null : a)];
  if (!c && (c = z._, !c)) {
    throw u("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
z.j = function(a, b, c) {
  if (a ? a.L : a) {
    return a.L(a, b, c);
  }
  var d;
  d = z[m(null == a ? null : a)];
  if (!d && (d = z._, !d)) {
    throw u("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
z.H = 3;
var ab = function ab(b, c) {
  if (b ? b.dc : b) {
    return b.dc(b, c);
  }
  var d;
  d = ab[m(null == b ? null : b)];
  if (!d && (d = ab._, !d)) {
    throw u("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, bb = function bb(b, c, d) {
  if (b ? b.ba : b) {
    return b.ba(b, c, d);
  }
  var e;
  e = bb[m(null == b ? null : b)];
  if (!e && (e = bb._, !e)) {
    throw u("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, cb = {}, fb = function fb(b, c) {
  if (b ? b.fa : b) {
    return b.fa(b, c);
  }
  var d;
  d = fb[m(null == b ? null : b)];
  if (!d && (d = fb._, !d)) {
    throw u("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, gb = {}, hb = function hb(b) {
  if (b ? b.hc : b) {
    return b.hc();
  }
  var c;
  c = hb[m(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw u("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ib = function ib(b) {
  if (b ? b.ic : b) {
    return b.ic();
  }
  var c;
  c = ib[m(null == b ? null : b)];
  if (!c && (c = ib._, !c)) {
    throw u("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, jb = {}, kb = function kb(b) {
  if (b ? b.Cb : b) {
    return b.Cb(b);
  }
  var c;
  c = kb[m(null == b ? null : b)];
  if (!c && (c = kb._, !c)) {
    throw u("IStack.-peek", b);
  }
  return c.call(null, b);
}, lb = function lb(b) {
  if (b ? b.Db : b) {
    return b.Db(b);
  }
  var c;
  c = lb[m(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw u("IStack.-pop", b);
  }
  return c.call(null, b);
}, nb = {}, ob = function ob(b, c, d) {
  if (b ? b.oc : b) {
    return b.oc(b, c, d);
  }
  var e;
  e = ob[m(null == b ? null : b)];
  if (!e && (e = ob._, !e)) {
    throw u("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, pb = function pb(b) {
  if (b ? b.zb : b) {
    return b.zb(b);
  }
  var c;
  c = pb[m(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw u("IDeref.-deref", b);
  }
  return c.call(null, b);
}, rb = {}, sb = function sb(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = sb[m(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw u("IMeta.-meta", b);
  }
  return c.call(null, b);
}, tb = {}, ub = function ub(b, c) {
  if (b ? b.O : b) {
    return b.O(b, c);
  }
  var d;
  d = ub[m(null == b ? null : b)];
  if (!d && (d = ub._, !d)) {
    throw u("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, vb = {}, wb = function wb() {
  switch(arguments.length) {
    case 2:
      return wb.c(arguments[0], arguments[1]);
    case 3:
      return wb.j(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
wb.c = function(a, b) {
  if (a ? a.ga : a) {
    return a.ga(a, b);
  }
  var c;
  c = wb[m(null == a ? null : a)];
  if (!c && (c = wb._, !c)) {
    throw u("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
wb.j = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = wb[m(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw u("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
wb.H = 3;
var xb = function xb(b, c, d) {
  if (b ? b.Ab : b) {
    return b.Ab(b, c, d);
  }
  var e;
  e = xb[m(null == b ? null : b)];
  if (!e && (e = xb._, !e)) {
    throw u("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, yb = function yb(b, c) {
  if (b ? b.C : b) {
    return b.C(b, c);
  }
  var d;
  d = yb[m(null == b ? null : b)];
  if (!d && (d = yb._, !d)) {
    throw u("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, Ab = function Ab(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = Ab[m(null == b ? null : b)];
  if (!c && (c = Ab._, !c)) {
    throw u("IHash.-hash", b);
  }
  return c.call(null, b);
}, Bb = {}, Cb = function Cb(b) {
  if (b ? b.P : b) {
    return b.P(b);
  }
  var c;
  c = Cb[m(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw u("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, Db = {}, Eb = {}, Fb = function Fb(b) {
  if (b ? b.Qb : b) {
    return b.Qb(b);
  }
  var c;
  c = Fb[m(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw u("IReversible.-rseq", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b, c) {
  if (b ? b.Cc : b) {
    return b.Cc(0, c);
  }
  var d;
  d = Gb[m(null == b ? null : b)];
  if (!d && (d = Gb._, !d)) {
    throw u("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, Ib = {}, Jb = function Jb(b, c, d) {
  if (b ? b.J : b) {
    return b.J(b, c, d);
  }
  var e;
  e = Jb[m(null == b ? null : b)];
  if (!e && (e = Jb._, !e)) {
    throw u("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, Kb = function Kb(b, c, d) {
  if (b ? b.Sb : b) {
    return b.Sb(b, c, d);
  }
  var e;
  e = Kb[m(null == b ? null : b)];
  if (!e && (e = Kb._, !e)) {
    throw u("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, Lb = function Lb(b, c, d) {
  if (b ? b.Rb : b) {
    return b.Rb(b, c, d);
  }
  var e;
  e = Lb[m(null == b ? null : b)];
  if (!e && (e = Lb._, !e)) {
    throw u("IWatchable.-add-watch", b);
  }
  return e.call(null, b, c, d);
}, Mb = function Mb(b, c) {
  if (b ? b.Tb : b) {
    return b.Tb(b, c);
  }
  var d;
  d = Mb[m(null == b ? null : b)];
  if (!d && (d = Mb._, !d)) {
    throw u("IWatchable.-remove-watch", b);
  }
  return d.call(null, b, c);
}, Nb = function Nb(b) {
  if (b ? b.sb : b) {
    return b.sb(b);
  }
  var c;
  c = Nb[m(null == b ? null : b)];
  if (!c && (c = Nb._, !c)) {
    throw u("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Ob = function Ob(b, c) {
  if (b ? b.Fb : b) {
    return b.Fb(b, c);
  }
  var d;
  d = Ob[m(null == b ? null : b)];
  if (!d && (d = Ob._, !d)) {
    throw u("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Pb = function Pb(b) {
  if (b ? b.Gb : b) {
    return b.Gb(b);
  }
  var c;
  c = Pb[m(null == b ? null : b)];
  if (!c && (c = Pb._, !c)) {
    throw u("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Qb = function Qb(b, c, d) {
  if (b ? b.Eb : b) {
    return b.Eb(b, c, d);
  }
  var e;
  e = Qb[m(null == b ? null : b)];
  if (!e && (e = Qb._, !e)) {
    throw u("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Rb = function Rb(b, c, d) {
  if (b ? b.Bc : b) {
    return b.Bc(0, c, d);
  }
  var e;
  e = Rb[m(null == b ? null : b)];
  if (!e && (e = Rb._, !e)) {
    throw u("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Sb = function Sb(b) {
  if (b ? b.xc : b) {
    return b.xc();
  }
  var c;
  c = Sb[m(null == b ? null : b)];
  if (!c && (c = Sb._, !c)) {
    throw u("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Tb = function Tb(b) {
  if (b ? b.fc : b) {
    return b.fc(b);
  }
  var c;
  c = Tb[m(null == b ? null : b)];
  if (!c && (c = Tb._, !c)) {
    throw u("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Ub = function Ub(b) {
  if (b ? b.gc : b) {
    return b.gc(b);
  }
  var c;
  c = Ub[m(null == b ? null : b)];
  if (!c && (c = Ub._, !c)) {
    throw u("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Wb = function Wb(b) {
  if (b ? b.ec : b) {
    return b.ec(b);
  }
  var c;
  c = Wb[m(null == b ? null : b)];
  if (!c && (c = Wb._, !c)) {
    throw u("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Xb = function Xb(b, c) {
  if (b ? b.jc : b) {
    return b.jc(b, c);
  }
  var d;
  d = Xb[m(null == b ? null : b)];
  if (!d && (d = Xb._, !d)) {
    throw u("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Yb = function Yb() {
  switch(arguments.length) {
    case 2:
      return Yb.c(arguments[0], arguments[1]);
    case 3:
      return Yb.j(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Yb.I(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Yb.$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Yb.c = function(a, b) {
  if (a ? a.kc : a) {
    return a.kc(a, b);
  }
  var c;
  c = Yb[m(null == a ? null : a)];
  if (!c && (c = Yb._, !c)) {
    throw u("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Yb.j = function(a, b, c) {
  if (a ? a.lc : a) {
    return a.lc(a, b, c);
  }
  var d;
  d = Yb[m(null == a ? null : a)];
  if (!d && (d = Yb._, !d)) {
    throw u("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Yb.I = function(a, b, c, d) {
  if (a ? a.mc : a) {
    return a.mc(a, b, c, d);
  }
  var e;
  e = Yb[m(null == a ? null : a)];
  if (!e && (e = Yb._, !e)) {
    throw u("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Yb.$ = function(a, b, c, d, e) {
  if (a ? a.nc : a) {
    return a.nc(a, b, c, d, e);
  }
  var g;
  g = Yb[m(null == a ? null : a)];
  if (!g && (g = Yb._, !g)) {
    throw u("ISwap.-swap!", a);
  }
  return g.call(null, a, b, c, d, e);
};
Yb.H = 5;
var Zb = function Zb(b) {
  if (b ? b.Ob : b) {
    return b.Ob(b);
  }
  var c;
  c = Zb[m(null == b ? null : b)];
  if (!c && (c = Zb._, !c)) {
    throw u("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function $b(a) {
  this.ad = a;
  this.w = 1073741824;
  this.D = 0;
}
$b.prototype.Cc = function(a, b) {
  return this.ad.append(b);
};
function ac(a) {
  var b = new ka;
  a.J(null, new $b(b), pa());
  return "" + v(b);
}
var bc = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function cc(a) {
  a = bc(a | 0, -862048943);
  return bc(a << 15 | a >>> -15, 461845907);
}
function dc(a, b) {
  var c = (a | 0) ^ (b | 0);
  return bc(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function ec(a, b) {
  var c = (a | 0) ^ b, c = bc(c ^ c >>> 16, -2048144789), c = bc(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function fc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = dc(c, cc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ cc(a.charCodeAt(a.length - 1)) : b;
  return ec(b, bc(2, a.length));
}
var gc = {}, hc = 0;
function ic(a) {
  255 < hc && (gc = {}, hc = 0);
  var b = gc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = bc(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    gc[a] = b;
    hc += 1;
  }
  return a = b;
}
function jc(a) {
  a && (a.w & 4194304 || a.fd) ? a = a.K(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = ic(a), 0 !== a && (a = cc(a), a = dc(0, a), a = ec(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : Ab(a);
  return a;
}
function kc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function B(a, b, c, d, e) {
  this.Lb = a;
  this.name = b;
  this.ib = c;
  this.rb = d;
  this.ma = e;
  this.w = 2154168321;
  this.D = 4096;
}
f = B.prototype;
f.toString = function() {
  return this.ib;
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.C = function(a, b) {
  return b instanceof B ? this.ib === b.ib : !1;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.j(c, this, null);
      case 3:
        return z.j(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return z.j(c, this, null);
  };
  a.j = function(a, c, d) {
    return z.j(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return z.j(a, this, null);
};
f.c = function(a, b) {
  return z.j(a, this, b);
};
f.M = function() {
  return this.ma;
};
f.O = function(a, b) {
  return new B(this.Lb, this.name, this.ib, this.rb, b);
};
f.K = function() {
  var a = this.rb;
  return null != a ? a : this.rb = a = kc(fc(this.name), ic(this.Lb));
};
f.J = function(a, b) {
  return Gb(b, this.ib);
};
function mc() {
  var a = [v("reagent"), v(nc.c(oc, pc))].join("");
  return a instanceof B ? a : new B(null, a, a, null, null);
}
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.w & 8388608 || a.hd)) {
    return a.P(null);
  }
  if (xa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new E(a, 0);
  }
  if (r(Bb, a)) {
    return Cb(a);
  }
  throw Error([v(a), v(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.w & 64 || a.Bb)) {
    return a.ia(null);
  }
  a = D(a);
  return null == a ? null : Wa(a);
}
function qc(a) {
  return null != a ? a && (a.w & 64 || a.Bb) ? a.oa(null) : (a = D(a)) ? Xa(a) : rc : rc;
}
function I(a) {
  return null == a ? null : a && (a.w & 128 || a.Pb) ? a.na(null) : D(qc(a));
}
var sc = function sc() {
  switch(arguments.length) {
    case 1:
      return sc.f(arguments[0]);
    case 2:
      return sc.c(arguments[0], arguments[1]);
    default:
      return sc.B(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
sc.f = function() {
  return !0;
};
sc.c = function(a, b) {
  return null == a ? null == b : a === b || yb(a, b);
};
sc.B = function(a, b, c) {
  for (;;) {
    if (sc.c(a, b)) {
      if (I(c)) {
        a = b, b = F(c), c = I(c);
      } else {
        return sc.c(b, F(c));
      }
    } else {
      return !1;
    }
  }
};
sc.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  c = I(c);
  return sc.B(b, a, c);
};
sc.H = 2;
function tc(a) {
  this.s = a;
}
tc.prototype.next = function() {
  if (null != this.s) {
    var a = F(this.s);
    this.s = I(this.s);
    return {value:a, done:!1};
  }
  return {value:null, done:!0};
};
function uc(a) {
  return new tc(D(a));
}
function vc(a, b) {
  var c = cc(a), c = dc(0, c);
  return ec(c, b);
}
function wc(a) {
  var b = 0, c = 1;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = bc(31, c) + jc(F(a)) | 0, a = I(a);
    } else {
      return vc(c, b);
    }
  }
}
var xc = vc(1, 0);
function yc(a) {
  var b = 0, c = 0;
  for (a = D(a);;) {
    if (null != a) {
      b += 1, c = c + jc(F(a)) | 0, a = I(a);
    } else {
      return vc(c, b);
    }
  }
}
var zc = vc(0, 0);
Na["null"] = !0;
Oa["null"] = function() {
  return 0;
};
Date.prototype.C = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
yb.number = function(a, b) {
  return a === b;
};
La["function"] = !0;
rb["function"] = !0;
sb["function"] = function() {
  return null;
};
Ab._ = function(a) {
  return ba(a);
};
function pc(a) {
  return a + 1;
}
function Ac() {
  return !1;
}
function J(a) {
  return pb(a);
}
function Bc(a, b) {
  var c = Oa(a);
  if (0 === c) {
    return b.F ? b.F() : b.call(null);
  }
  for (var d = w.c(a, 0), e = 1;;) {
    if (e < c) {
      var g = w.c(a, e), d = b.c ? b.c(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Dc(a, b, c) {
  var d = Oa(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = w.c(a, c), e = b.c ? b.c(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Ec(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.F ? b.F() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var g = a[e], d = b.c ? b.c(d, g) : b.call(null, d, g), e = e + 1
    } else {
      return d;
    }
  }
}
function Fc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var g = a[c], e = b.c ? b.c(e, g) : b.call(null, e, g);
      c += 1;
    } else {
      return e;
    }
  }
}
function Gc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var g = a[d];
      c = b.c ? b.c(c, g) : b.call(null, c, g);
      d += 1;
    } else {
      return c;
    }
  }
}
function Hc(a) {
  return a ? a.w & 2 || a.Pc ? !0 : a.w ? !1 : r(Na, a) : r(Na, a);
}
function Ic(a) {
  return a ? a.w & 16 || a.yc ? !0 : a.w ? !1 : r(Sa, a) : r(Sa, a);
}
function Jc(a, b) {
  this.h = a;
  this.i = b;
}
Jc.prototype.tc = function() {
  return this.i < this.h.length;
};
Jc.prototype.next = function() {
  var a = this.h[this.i];
  this.i += 1;
  return a;
};
function E(a, b) {
  this.h = a;
  this.i = b;
  this.w = 166199550;
  this.D = 8192;
}
f = E.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.X = function(a, b) {
  var c = b + this.i;
  return c < this.h.length ? this.h[c] : null;
};
f.qa = function(a, b, c) {
  a = b + this.i;
  return a < this.h.length ? this.h[a] : c;
};
f.Ob = function() {
  return new Jc(this.h, this.i);
};
f.na = function() {
  return this.i + 1 < this.h.length ? new E(this.h, this.i + 1) : null;
};
f.S = function() {
  var a = this.h.length - this.i;
  return 0 > a ? 0 : a;
};
f.Qb = function() {
  var a = Oa(this);
  return 0 < a ? new Kc(this, a - 1, null) : null;
};
f.K = function() {
  return wc(this);
};
f.C = function(a, b) {
  return Lc.c ? Lc.c(this, b) : Lc.call(null, this, b);
};
f.ea = function() {
  return rc;
};
f.ga = function(a, b) {
  return Gc(this.h, b, this.h[this.i], this.i + 1);
};
f.ha = function(a, b, c) {
  return Gc(this.h, b, c, this.i);
};
f.ia = function() {
  return this.h[this.i];
};
f.oa = function() {
  return this.i + 1 < this.h.length ? new E(this.h, this.i + 1) : rc;
};
f.P = function() {
  return this.i < this.h.length ? this : null;
};
f.R = function(a, b) {
  return L.c ? L.c(b, this) : L.call(null, b, this);
};
E.prototype[Aa] = function() {
  return uc(this);
};
function Mc(a, b) {
  return b < a.length ? new E(a, b) : null;
}
function M() {
  switch(arguments.length) {
    case 1:
      return Mc(arguments[0], 0);
    case 2:
      return Mc(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Kc(a, b, c) {
  this.Mb = a;
  this.i = b;
  this.meta = c;
  this.w = 32374990;
  this.D = 8192;
}
f = Kc.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  return 0 < this.i ? new Kc(this.Mb, this.i - 1, null) : null;
};
f.S = function() {
  return this.i + 1;
};
f.K = function() {
  return wc(this);
};
f.C = function(a, b) {
  return Lc.c ? Lc.c(this, b) : Lc.call(null, this, b);
};
f.ea = function() {
  var a = this.meta;
  return Nc.c ? Nc.c(rc, a) : Nc.call(null, rc, a);
};
f.ga = function(a, b) {
  return Oc ? Oc(b, this) : Pc.call(null, b, this);
};
f.ha = function(a, b, c) {
  return Qc ? Qc(b, c, this) : Pc.call(null, b, c, this);
};
f.ia = function() {
  return w.c(this.Mb, this.i);
};
f.oa = function() {
  return 0 < this.i ? new Kc(this.Mb, this.i - 1, null) : rc;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Kc(this.Mb, this.i, b);
};
f.R = function(a, b) {
  return L.c ? L.c(b, this) : L.call(null, b, this);
};
Kc.prototype[Aa] = function() {
  return uc(this);
};
yb._ = function(a, b) {
  return a === b;
};
var Rc = function Rc() {
  switch(arguments.length) {
    case 0:
      return Rc.F();
    case 1:
      return Rc.f(arguments[0]);
    case 2:
      return Rc.c(arguments[0], arguments[1]);
    default:
      return Rc.B(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Rc.F = function() {
  return Sc;
};
Rc.f = function(a) {
  return a;
};
Rc.c = function(a, b) {
  return null != a ? Ra(a, b) : Ra(rc, b);
};
Rc.B = function(a, b, c) {
  for (;;) {
    if (q(c)) {
      a = Rc.c(a, b), b = F(c), c = I(c);
    } else {
      return Rc.c(a, b);
    }
  }
};
Rc.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  c = I(c);
  return Rc.B(b, a, c);
};
Rc.H = 2;
function N(a) {
  if (null != a) {
    if (a && (a.w & 2 || a.Pc)) {
      a = a.S(null);
    } else {
      if (xa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(Na, a)) {
            a = Oa(a);
          } else {
            a: {
              a = D(a);
              for (var b = 0;;) {
                if (Hc(a)) {
                  a = b + Oa(a);
                  break a;
                }
                a = I(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Tc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return D(a) ? F(a) : c;
    }
    if (Ic(a)) {
      return w.j(a, b, c);
    }
    if (D(a)) {
      var d = I(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Uc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.w & 16 || a.yc)) {
    return a.X(null, b);
  }
  if (xa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (r(Sa, a)) {
    return w.c(a, b);
  }
  if (a ? a.w & 64 || a.Bb || (a.w ? 0 : r(Ua, a)) : r(Ua, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (D(c)) {
            c = F(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Ic(c)) {
          c = w.c(c, d);
          break a;
        }
        if (D(c)) {
          c = I(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([v("nth not supported on this type "), v(za(null == a ? null : a.constructor))].join(""));
}
function O(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.w & 16 || a.yc)) {
    return a.qa(null, b, null);
  }
  if (xa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (r(Sa, a)) {
    return w.c(a, b);
  }
  if (a ? a.w & 64 || a.Bb || (a.w ? 0 : r(Ua, a)) : r(Ua, a)) {
    return Tc(a, b);
  }
  throw Error([v("nth not supported on this type "), v(za(null == a ? null : a.constructor))].join(""));
}
function Vc(a, b) {
  return null == a ? null : a && (a.w & 256 || a.zc) ? a.N(null, b) : xa(a) ? b < a.length ? a[b | 0] : null : "string" === typeof a ? b < a.length ? a[b | 0] : null : r($a, a) ? z.c(a, b) : null;
}
function Wc(a, b, c) {
  return null != a ? a && (a.w & 256 || a.zc) ? a.L(null, b, c) : xa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r($a, a) ? z.j(a, b, c) : c : c;
}
var Q = function Q() {
  switch(arguments.length) {
    case 3:
      return Q.j(arguments[0], arguments[1], arguments[2]);
    default:
      return Q.B(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Q.j = function(a, b, c) {
  if (null != a) {
    a = bb(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = Nb(Xc);;) {
        if (d < b) {
          var g = d + 1;
          e = e.Eb(null, a[d], c[d]);
          d = g;
        } else {
          a = Pb(e);
          break a;
        }
      }
    }
  }
  return a;
};
Q.B = function(a, b, c, d) {
  for (;;) {
    if (a = Q.j(a, b, c), q(d)) {
      b = F(d), c = F(I(d)), d = I(I(d));
    } else {
      return a;
    }
  }
};
Q.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), d = I(d);
  return Q.B(b, a, c, d);
};
Q.H = 3;
var R = function R() {
  switch(arguments.length) {
    case 1:
      return R.f(arguments[0]);
    case 2:
      return R.c(arguments[0], arguments[1]);
    default:
      return R.B(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
R.f = function(a) {
  return a;
};
R.c = function(a, b) {
  return null == a ? null : fb(a, b);
};
R.B = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = R.c(a, b);
    if (q(c)) {
      b = F(c), c = I(c);
    } else {
      return a;
    }
  }
};
R.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  c = I(c);
  return R.B(b, a, c);
};
R.H = 2;
function Yc(a) {
  var b = "function" == m(a);
  return q(b) ? b : a ? q(q(null) ? null : a.Oc) ? !0 : a.rc ? !1 : r(La, a) : r(La, a);
}
function Zc(a, b) {
  this.m = a;
  this.meta = b;
  this.w = 393217;
  this.D = 0;
}
f = Zc.prototype;
f.M = function() {
  return this.meta;
};
f.O = function(a, b) {
  return new Zc(this.m, b);
};
f.Oc = !0;
f.call = function() {
  function a(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa, Ha) {
    a = this.m;
    return $c.Nb ? $c.Nb(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa, Ha) : $c.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa, Ha);
  }
  function b(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa) {
    a = this;
    return a.m.Ua ? a.m.Ua(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K, oa);
  }
  function c(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K) {
    a = this;
    return a.m.Ta ? a.m.Ta(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, K);
  }
  function d(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) {
    a = this;
    return a.m.Sa ? a.m.Sa(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca);
  }
  function e(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) {
    a = this;
    return a.m.Ra ? a.m.Ra(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P);
  }
  function g(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) {
    a = this;
    return a.m.Qa ? a.m.Qa(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H);
  }
  function h(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G) {
    a = this;
    return a.m.Pa ? a.m.Pa(b, c, d, e, g, h, k, l, n, t, A, x, y, C, G) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G);
  }
  function k(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C) {
    a = this;
    return a.m.Oa ? a.m.Oa(b, c, d, e, g, h, k, l, n, t, A, x, y, C) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y, C);
  }
  function l(a, b, c, d, e, g, h, k, l, n, t, A, x, y) {
    a = this;
    return a.m.Na ? a.m.Na(b, c, d, e, g, h, k, l, n, t, A, x, y) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x, y);
  }
  function n(a, b, c, d, e, g, h, k, l, n, t, A, x) {
    a = this;
    return a.m.Ma ? a.m.Ma(b, c, d, e, g, h, k, l, n, t, A, x) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A, x);
  }
  function t(a, b, c, d, e, g, h, k, l, n, t, A) {
    a = this;
    return a.m.La ? a.m.La(b, c, d, e, g, h, k, l, n, t, A) : a.m.call(null, b, c, d, e, g, h, k, l, n, t, A);
  }
  function A(a, b, c, d, e, g, h, k, l, n, t) {
    a = this;
    return a.m.Ka ? a.m.Ka(b, c, d, e, g, h, k, l, n, t) : a.m.call(null, b, c, d, e, g, h, k, l, n, t);
  }
  function x(a, b, c, d, e, g, h, k, l, n) {
    a = this;
    return a.m.Xa ? a.m.Xa(b, c, d, e, g, h, k, l, n) : a.m.call(null, b, c, d, e, g, h, k, l, n);
  }
  function y(a, b, c, d, e, g, h, k, l) {
    a = this;
    return a.m.Wa ? a.m.Wa(b, c, d, e, g, h, k, l) : a.m.call(null, b, c, d, e, g, h, k, l);
  }
  function C(a, b, c, d, e, g, h, k) {
    a = this;
    return a.m.Va ? a.m.Va(b, c, d, e, g, h, k) : a.m.call(null, b, c, d, e, g, h, k);
  }
  function G(a, b, c, d, e, g, h) {
    a = this;
    return a.m.wa ? a.m.wa(b, c, d, e, g, h) : a.m.call(null, b, c, d, e, g, h);
  }
  function H(a, b, c, d, e, g) {
    a = this;
    return a.m.$ ? a.m.$(b, c, d, e, g) : a.m.call(null, b, c, d, e, g);
  }
  function P(a, b, c, d, e) {
    a = this;
    return a.m.I ? a.m.I(b, c, d, e) : a.m.call(null, b, c, d, e);
  }
  function ca(a, b, c, d) {
    a = this;
    return a.m.j ? a.m.j(b, c, d) : a.m.call(null, b, c, d);
  }
  function oa(a, b, c) {
    a = this;
    return a.m.c ? a.m.c(b, c) : a.m.call(null, b, c);
  }
  function Ha(a, b) {
    a = this;
    return a.m.f ? a.m.f(b) : a.m.call(null, b);
  }
  function eb(a) {
    a = this;
    return a.m.F ? a.m.F() : a.m.call(null);
  }
  var K = null, K = function(K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re, Qf, dh, Ji, Wk) {
    switch(arguments.length) {
      case 1:
        return eb.call(this, K);
      case 2:
        return Ha.call(this, K, Ca);
      case 3:
        return oa.call(this, K, Ca, Ga);
      case 4:
        return ca.call(this, K, Ca, Ga, Ka);
      case 5:
        return P.call(this, K, Ca, Ga, Ka, Ta);
      case 6:
        return H.call(this, K, Ca, Ga, Ka, Ta, Va);
      case 7:
        return G.call(this, K, Ca, Ga, Ka, Ta, Va, Za);
      case 8:
        return C.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db);
      case 9:
        return y.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb);
      case 10:
        return x.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb);
      case 11:
        return A.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb);
      case 12:
        return t.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb);
      case 13:
        return n.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb);
      case 14:
        return l.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc);
      case 15:
        return k.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc);
      case 16:
        return h.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd);
      case 17:
        return g.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd);
      case 18:
        return e.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re);
      case 19:
        return d.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re, Qf);
      case 20:
        return c.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re, Qf, dh);
      case 21:
        return b.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re, Qf, dh, Ji);
      case 22:
        return a.call(this, K, Ca, Ga, Ka, Ta, Va, Za, db, mb, qb, zb, Hb, Vb, lc, Cc, cd, Qd, Re, Qf, dh, Ji, Wk);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  K.f = eb;
  K.c = Ha;
  K.j = oa;
  K.I = ca;
  K.$ = P;
  K.wa = H;
  K.Va = G;
  K.Wa = C;
  K.Xa = y;
  K.Ka = x;
  K.La = A;
  K.Ma = t;
  K.Na = n;
  K.Oa = l;
  K.Pa = k;
  K.Qa = h;
  K.Ra = g;
  K.Sa = e;
  K.Ta = d;
  K.Ua = c;
  K.Tc = b;
  K.Nb = a;
  return K;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.F = function() {
  return this.m.F ? this.m.F() : this.m.call(null);
};
f.f = function(a) {
  return this.m.f ? this.m.f(a) : this.m.call(null, a);
};
f.c = function(a, b) {
  return this.m.c ? this.m.c(a, b) : this.m.call(null, a, b);
};
f.j = function(a, b, c) {
  return this.m.j ? this.m.j(a, b, c) : this.m.call(null, a, b, c);
};
f.I = function(a, b, c, d) {
  return this.m.I ? this.m.I(a, b, c, d) : this.m.call(null, a, b, c, d);
};
f.$ = function(a, b, c, d, e) {
  return this.m.$ ? this.m.$(a, b, c, d, e) : this.m.call(null, a, b, c, d, e);
};
f.wa = function(a, b, c, d, e, g) {
  return this.m.wa ? this.m.wa(a, b, c, d, e, g) : this.m.call(null, a, b, c, d, e, g);
};
f.Va = function(a, b, c, d, e, g, h) {
  return this.m.Va ? this.m.Va(a, b, c, d, e, g, h) : this.m.call(null, a, b, c, d, e, g, h);
};
f.Wa = function(a, b, c, d, e, g, h, k) {
  return this.m.Wa ? this.m.Wa(a, b, c, d, e, g, h, k) : this.m.call(null, a, b, c, d, e, g, h, k);
};
f.Xa = function(a, b, c, d, e, g, h, k, l) {
  return this.m.Xa ? this.m.Xa(a, b, c, d, e, g, h, k, l) : this.m.call(null, a, b, c, d, e, g, h, k, l);
};
f.Ka = function(a, b, c, d, e, g, h, k, l, n) {
  return this.m.Ka ? this.m.Ka(a, b, c, d, e, g, h, k, l, n) : this.m.call(null, a, b, c, d, e, g, h, k, l, n);
};
f.La = function(a, b, c, d, e, g, h, k, l, n, t) {
  return this.m.La ? this.m.La(a, b, c, d, e, g, h, k, l, n, t) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t);
};
f.Ma = function(a, b, c, d, e, g, h, k, l, n, t, A) {
  return this.m.Ma ? this.m.Ma(a, b, c, d, e, g, h, k, l, n, t, A) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A);
};
f.Na = function(a, b, c, d, e, g, h, k, l, n, t, A, x) {
  return this.m.Na ? this.m.Na(a, b, c, d, e, g, h, k, l, n, t, A, x) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x);
};
f.Oa = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y) {
  return this.m.Oa ? this.m.Oa(a, b, c, d, e, g, h, k, l, n, t, A, x, y) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y);
};
f.Pa = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C) {
  return this.m.Pa ? this.m.Pa(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C);
};
f.Qa = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G) {
  return this.m.Qa ? this.m.Qa(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G);
};
f.Ra = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) {
  return this.m.Ra ? this.m.Ra(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H);
};
f.Sa = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) {
  return this.m.Sa ? this.m.Sa(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P);
};
f.Ta = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) {
  return this.m.Ta ? this.m.Ta(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca);
};
f.Ua = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa) {
  return this.m.Ua ? this.m.Ua(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa) : this.m.call(null, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa);
};
f.Tc = function(a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha) {
  var eb = this.m;
  return $c.Nb ? $c.Nb(eb, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha) : $c.call(null, eb, a, b, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha);
};
function Nc(a, b) {
  return Yc(a) && !(a ? a.w & 262144 || a.md || (a.w ? 0 : r(tb, a)) : r(tb, a)) ? new Zc(a, b) : null == a ? null : ub(a, b);
}
function ad(a) {
  var b = null != a;
  return (b ? a ? a.w & 131072 || a.Wc || (a.w ? 0 : r(rb, a)) : r(rb, a) : b) ? sb(a) : null;
}
function bd(a) {
  return null == a || ya(D(a));
}
function dd(a) {
  return null == a ? !1 : a ? a.w & 8 || a.cd ? !0 : a.w ? !1 : r(Qa, a) : r(Qa, a);
}
function ed(a) {
  return null == a ? !1 : a ? a.w & 4096 || a.kd ? !0 : a.w ? !1 : r(jb, a) : r(jb, a);
}
function fd(a) {
  return a ? a.w & 16777216 || a.jd ? !0 : a.w ? !1 : r(Db, a) : r(Db, a);
}
function gd(a) {
  return null == a ? !1 : a ? a.w & 1024 || a.Uc ? !0 : a.w ? !1 : r(cb, a) : r(cb, a);
}
function hd(a) {
  return a ? a.w & 16384 || a.ld ? !0 : a.w ? !1 : r(nb, a) : r(nb, a);
}
function id(a) {
  return a ? a.D & 512 || a.bd ? !0 : !1 : !1;
}
function jd(a) {
  var b = [];
  ja(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function kd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var ld = {};
function md(a) {
  return !1 === a;
}
function nd(a) {
  return null == a ? !1 : a ? a.w & 64 || a.Bb ? !0 : a.w ? !1 : r(Ua, a) : r(Ua, a);
}
function od(a) {
  return q(a) ? !0 : !1;
}
function pd(a) {
  var b = Yc(a);
  return b ? b : a ? a.w & 1 || a.ed ? !0 : a.w ? !1 : r(Ma, a) : r(Ma, a);
}
function qd(a, b) {
  return Wc(a, b, ld) === ld ? !1 : !0;
}
function Pc() {
  switch(arguments.length) {
    case 2:
      return Oc(arguments[0], arguments[1]);
    case 3:
      return Qc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Oc(a, b) {
  var c = D(b);
  if (c) {
    var d = F(c), c = I(c);
    return Ia ? Ia(a, d, c) : Ja.call(null, a, d, c);
  }
  return a.F ? a.F() : a.call(null);
}
function Qc(a, b, c) {
  for (c = D(c);;) {
    if (c) {
      var d = F(c);
      b = a.c ? a.c(b, d) : a.call(null, b, d);
      c = I(c);
    } else {
      return b;
    }
  }
}
function Ja() {
  switch(arguments.length) {
    case 2:
      return rd(arguments[0], arguments[1]);
    case 3:
      return Ia(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function rd(a, b) {
  return b && (b.w & 524288 || b.Xc) ? b.ga(null, a) : xa(b) ? Ec(b, a) : "string" === typeof b ? Ec(b, a) : r(vb, b) ? wb.c(b, a) : Oc(a, b);
}
function Ia(a, b, c) {
  return c && (c.w & 524288 || c.Xc) ? c.ha(null, a, b) : xa(c) ? Fc(c, a, b) : "string" === typeof c ? Fc(c, a, b) : r(vb, c) ? wb.j(c, a, b) : Qc(a, b, c);
}
function sd(a, b, c) {
  return null != c ? xb(c, a, b) : b;
}
function td(a) {
  return a;
}
function ud(a, b, c, d) {
  a = a.f ? a.f(b) : a.call(null, b);
  c = Ia(a, c, d);
  return a.f ? a.f(c) : a.call(null, c);
}
function vd(a) {
  return a - 1;
}
function wd(a, b) {
  return (a % b + b) % b;
}
function xd(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor(a) : Math.ceil(a);
}
function yd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function zd(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      --b, a = I(a);
    } else {
      return a;
    }
  }
}
var v = function v() {
  switch(arguments.length) {
    case 0:
      return v.F();
    case 1:
      return v.f(arguments[0]);
    default:
      return v.B(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
v.F = function() {
  return "";
};
v.f = function(a) {
  return null == a ? "" : ia(a);
};
v.B = function(a, b) {
  for (var c = new ka("" + v(a)), d = b;;) {
    if (q(d)) {
      c = c.append("" + v(F(d))), d = I(d);
    } else {
      return c.toString();
    }
  }
};
v.G = function(a) {
  var b = F(a);
  a = I(a);
  return v.B(b, a);
};
v.H = 1;
function Lc(a, b) {
  var c;
  if (fd(b)) {
    if (Hc(a) && Hc(b) && N(a) !== N(b)) {
      c = !1;
    } else {
      a: {
        c = D(a);
        for (var d = D(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && sc.c(F(c), F(d))) {
            c = I(c), d = I(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return od(c);
}
function Ad(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = F(a), b = (b + (jc(function() {
        var a = c;
        return Bd.f ? Bd.f(a) : Bd.call(null, a);
      }()) ^ jc(function() {
        var a = c;
        return Cd.f ? Cd.f(a) : Cd.call(null, a);
      }()))) % 4503599627370496;
      a = I(a);
    } else {
      return b;
    }
  }
}
function Dd(a, b, c, d, e) {
  this.meta = a;
  this.first = b;
  this.bb = c;
  this.count = d;
  this.v = e;
  this.w = 65937646;
  this.D = 8192;
}
f = Dd.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  return 1 === this.count ? null : this.bb;
};
f.S = function() {
  return this.count;
};
f.Cb = function() {
  return this.first;
};
f.Db = function() {
  return Xa(this);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return ub(rc, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return this.first;
};
f.oa = function() {
  return 1 === this.count ? rc : this.bb;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Dd(b, this.first, this.bb, this.count, this.v);
};
f.R = function(a, b) {
  return new Dd(this.meta, b, this, this.count + 1, null);
};
Dd.prototype[Aa] = function() {
  return uc(this);
};
function Ed(a) {
  this.meta = a;
  this.w = 65937614;
  this.D = 8192;
}
f = Ed.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  return null;
};
f.S = function() {
  return 0;
};
f.Cb = function() {
  return null;
};
f.Db = function() {
  throw Error("Can't pop empty list");
};
f.K = function() {
  return xc;
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return this;
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return null;
};
f.oa = function() {
  return rc;
};
f.P = function() {
  return null;
};
f.O = function(a, b) {
  return new Ed(b);
};
f.R = function(a, b) {
  return new Dd(this.meta, b, null, 1, null);
};
var rc = new Ed(null);
Ed.prototype[Aa] = function() {
  return uc(this);
};
function Fd(a) {
  return (a ? a.w & 134217728 || a.gd || (a.w ? 0 : r(Eb, a)) : r(Eb, a)) ? Fb(a) : Ia(Rc, rc, a);
}
function Gd() {
  a: {
    var a = 0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null, b;
    if (a instanceof E && 0 === a.i) {
      b = a.h;
    } else {
      b: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ia(null)), a = a.na(null);
          } else {
            break b;
          }
        }
      }
    }
    for (var a = b.length, c = rc;;) {
      if (0 < a) {
        var d = a - 1, c = c.R(null, b[a - 1]), a = d
      } else {
        break a;
      }
    }
  }
  return c;
}
function Hd(a, b, c, d) {
  this.meta = a;
  this.first = b;
  this.bb = c;
  this.v = d;
  this.w = 65929452;
  this.D = 8192;
}
f = Hd.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  return null == this.bb ? null : D(this.bb);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return this.first;
};
f.oa = function() {
  return null == this.bb ? rc : this.bb;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Hd(b, this.first, this.bb, this.v);
};
f.R = function(a, b) {
  return new Hd(null, b, this, this.v);
};
Hd.prototype[Aa] = function() {
  return uc(this);
};
function L(a, b) {
  var c = null == b;
  return (c ? c : b && (b.w & 64 || b.Bb)) ? new Hd(null, a, b, null) : new Hd(null, a, D(b), null);
}
function S(a, b, c, d) {
  this.Lb = a;
  this.name = b;
  this.Z = c;
  this.rb = d;
  this.w = 2153775105;
  this.D = 4096;
}
f = S.prototype;
f.toString = function() {
  return [v(":"), v(this.Z)].join("");
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.C = function(a, b) {
  return b instanceof S ? this.Z === b.Z : !1;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Vc(c, this);
      case 3:
        return Wc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return Vc(c, this);
  };
  a.j = function(a, c, d) {
    return Wc(c, this, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return Vc(a, this);
};
f.c = function(a, b) {
  return Wc(a, this, b);
};
f.K = function() {
  var a = this.rb;
  return null != a ? a : this.rb = a = kc(fc(this.name), ic(this.Lb)) + 2654435769 | 0;
};
f.J = function(a, b) {
  return Gb(b, [v(":"), v(this.Z)].join(""));
};
function T(a, b) {
  return a === b ? !0 : a instanceof S && b instanceof S ? a.Z === b.Z : !1;
}
var Id = function Id() {
  switch(arguments.length) {
    case 1:
      return Id.f(arguments[0]);
    case 2:
      return Id.c(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
Id.f = function(a) {
  if (a instanceof S) {
    return a;
  }
  if (a instanceof B) {
    var b;
    if (a && (a.D & 4096 || a.Ac)) {
      b = a.Lb;
    } else {
      throw Error([v("Doesn't support namespace: "), v(a)].join(""));
    }
    return new S(b, Jd.f ? Jd.f(a) : Jd.call(null, a), a.ib, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
};
Id.c = function(a, b) {
  return new S(a, b, [v(q(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
};
Id.H = 2;
function Kd(a, b, c, d) {
  this.meta = a;
  this.ub = b;
  this.s = c;
  this.v = d;
  this.w = 32374988;
  this.D = 0;
}
f = Kd.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
function Ld(a) {
  null != a.ub && (a.s = a.ub.F ? a.ub.F() : a.ub.call(null), a.ub = null);
  return a.s;
}
f.M = function() {
  return this.meta;
};
f.na = function() {
  Cb(this);
  return null == this.s ? null : I(this.s);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  Cb(this);
  return null == this.s ? null : F(this.s);
};
f.oa = function() {
  Cb(this);
  return null != this.s ? qc(this.s) : rc;
};
f.P = function() {
  Ld(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof Kd) {
      a = Ld(a);
    } else {
      return this.s = a, D(this.s);
    }
  }
};
f.O = function(a, b) {
  return new Kd(b, this.ub, this.s, this.v);
};
f.R = function(a, b) {
  return L(b, this);
};
Kd.prototype[Aa] = function() {
  return uc(this);
};
function Md(a, b) {
  this.T = a;
  this.end = b;
  this.w = 2;
  this.D = 0;
}
Md.prototype.add = function(a) {
  this.T[this.end] = a;
  return this.end += 1;
};
Md.prototype.W = function() {
  var a = new Nd(this.T, 0, this.end);
  this.T = null;
  return a;
};
Md.prototype.S = function() {
  return this.end;
};
function Od(a) {
  return new Md(Array(a), 0);
}
function Nd(a, b, c) {
  this.h = a;
  this.off = b;
  this.end = c;
  this.w = 524306;
  this.D = 0;
}
f = Nd.prototype;
f.S = function() {
  return this.end - this.off;
};
f.X = function(a, b) {
  return this.h[this.off + b];
};
f.qa = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.h[this.off + b] : c;
};
f.xc = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Nd(this.h, this.off + 1, this.end);
};
f.ga = function(a, b) {
  return Gc(this.h, b, this.h[this.off], this.off + 1);
};
f.ha = function(a, b, c) {
  return Gc(this.h, b, c, this.off);
};
function Pd(a, b, c, d) {
  this.W = a;
  this.Ha = b;
  this.meta = c;
  this.v = d;
  this.w = 31850732;
  this.D = 1536;
}
f = Pd.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  if (1 < Oa(this.W)) {
    return new Pd(Sb(this.W), this.Ha, this.meta, null);
  }
  var a = Cb(this.Ha);
  return null == a ? null : a;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.meta);
};
f.ia = function() {
  return w.c(this.W, 0);
};
f.oa = function() {
  return 1 < Oa(this.W) ? new Pd(Sb(this.W), this.Ha, this.meta, null) : null == this.Ha ? rc : this.Ha;
};
f.P = function() {
  return this;
};
f.fc = function() {
  return this.W;
};
f.gc = function() {
  return null == this.Ha ? rc : this.Ha;
};
f.O = function(a, b) {
  return new Pd(this.W, this.Ha, b, this.v);
};
f.R = function(a, b) {
  return L(b, this);
};
f.ec = function() {
  return null == this.Ha ? null : this.Ha;
};
Pd.prototype[Aa] = function() {
  return uc(this);
};
function Rd(a, b) {
  return 0 === Oa(a) ? b : new Pd(a, b, null, null);
}
function Sd(a, b) {
  a.add(b);
}
function Td(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(F(a)), a = I(a);
    } else {
      return b;
    }
  }
}
function Ud(a, b) {
  if (Hc(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = I(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Vd = function Vd(b) {
  return null == b ? null : null == I(b) ? D(F(b)) : L(F(b), Vd(I(b)));
}, U = function U() {
  switch(arguments.length) {
    case 0:
      return U.F();
    case 1:
      return U.f(arguments[0]);
    case 2:
      return U.c(arguments[0], arguments[1]);
    default:
      return U.B(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
U.F = function() {
  return new Kd(null, function() {
    return null;
  }, null, null);
};
U.f = function(a) {
  return new Kd(null, function() {
    return a;
  }, null, null);
};
U.c = function(a, b) {
  return new Kd(null, function() {
    var c = D(a);
    return c ? id(c) ? Rd(Tb(c), U.c(Ub(c), b)) : L(F(c), U.c(qc(c), b)) : b;
  }, null, null);
};
U.B = function(a, b, c) {
  return function e(a, b) {
    return new Kd(null, function() {
      var c = D(a);
      return c ? id(c) ? Rd(Tb(c), e(Ub(c), b)) : L(F(c), e(qc(c), b)) : q(b) ? e(F(b), I(b)) : null;
    }, null, null);
  }(U.c(a, b), c);
};
U.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  c = I(c);
  return U.B(b, a, c);
};
U.H = 2;
var Wd = function Wd() {
  switch(arguments.length) {
    case 0:
      return Wd.F();
    case 1:
      return Wd.f(arguments[0]);
    case 2:
      return Wd.c(arguments[0], arguments[1]);
    default:
      return Wd.B(arguments[0], arguments[1], new E(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Wd.F = function() {
  return Nb(Sc);
};
Wd.f = function(a) {
  return a;
};
Wd.c = function(a, b) {
  return Ob(a, b);
};
Wd.B = function(a, b, c) {
  for (;;) {
    if (a = Ob(a, b), q(c)) {
      b = F(c), c = I(c);
    } else {
      return a;
    }
  }
};
Wd.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  c = I(c);
  return Wd.B(b, a, c);
};
Wd.H = 2;
function Xd(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.F ? a.F() : a.call(null);
  }
  c = Wa(d);
  var e = Xa(d);
  if (1 === b) {
    return a.f ? a.f(c) : a.f ? a.f(c) : a.call(null, c);
  }
  var d = Wa(e), g = Xa(e);
  if (2 === b) {
    return a.c ? a.c(c, d) : a.c ? a.c(c, d) : a.call(null, c, d);
  }
  var e = Wa(g), h = Xa(g);
  if (3 === b) {
    return a.j ? a.j(c, d, e) : a.j ? a.j(c, d, e) : a.call(null, c, d, e);
  }
  var g = Wa(h), k = Xa(h);
  if (4 === b) {
    return a.I ? a.I(c, d, e, g) : a.I ? a.I(c, d, e, g) : a.call(null, c, d, e, g);
  }
  var h = Wa(k), l = Xa(k);
  if (5 === b) {
    return a.$ ? a.$(c, d, e, g, h) : a.$ ? a.$(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  var k = Wa(l), n = Xa(l);
  if (6 === b) {
    return a.wa ? a.wa(c, d, e, g, h, k) : a.wa ? a.wa(c, d, e, g, h, k) : a.call(null, c, d, e, g, h, k);
  }
  var l = Wa(n), t = Xa(n);
  if (7 === b) {
    return a.Va ? a.Va(c, d, e, g, h, k, l) : a.Va ? a.Va(c, d, e, g, h, k, l) : a.call(null, c, d, e, g, h, k, l);
  }
  var n = Wa(t), A = Xa(t);
  if (8 === b) {
    return a.Wa ? a.Wa(c, d, e, g, h, k, l, n) : a.Wa ? a.Wa(c, d, e, g, h, k, l, n) : a.call(null, c, d, e, g, h, k, l, n);
  }
  var t = Wa(A), x = Xa(A);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, g, h, k, l, n, t) : a.Xa ? a.Xa(c, d, e, g, h, k, l, n, t) : a.call(null, c, d, e, g, h, k, l, n, t);
  }
  var A = Wa(x), y = Xa(x);
  if (10 === b) {
    return a.Ka ? a.Ka(c, d, e, g, h, k, l, n, t, A) : a.Ka ? a.Ka(c, d, e, g, h, k, l, n, t, A) : a.call(null, c, d, e, g, h, k, l, n, t, A);
  }
  var x = Wa(y), C = Xa(y);
  if (11 === b) {
    return a.La ? a.La(c, d, e, g, h, k, l, n, t, A, x) : a.La ? a.La(c, d, e, g, h, k, l, n, t, A, x) : a.call(null, c, d, e, g, h, k, l, n, t, A, x);
  }
  var y = Wa(C), G = Xa(C);
  if (12 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, k, l, n, t, A, x, y) : a.Ma ? a.Ma(c, d, e, g, h, k, l, n, t, A, x, y) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y);
  }
  var C = Wa(G), H = Xa(G);
  if (13 === b) {
    return a.Na ? a.Na(c, d, e, g, h, k, l, n, t, A, x, y, C) : a.Na ? a.Na(c, d, e, g, h, k, l, n, t, A, x, y, C) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C);
  }
  var G = Wa(H), P = Xa(H);
  if (14 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, k, l, n, t, A, x, y, C, G) : a.Oa ? a.Oa(c, d, e, g, h, k, l, n, t, A, x, y, C, G) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G);
  }
  var H = Wa(P), ca = Xa(P);
  if (15 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) : a.Pa ? a.Pa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H);
  }
  var P = Wa(ca), oa = Xa(ca);
  if (16 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) : a.Qa ? a.Qa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P);
  }
  var ca = Wa(oa), Ha = Xa(oa);
  if (17 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) : a.Ra ? a.Ra(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca);
  }
  var oa = Wa(Ha), eb = Xa(Ha);
  if (18 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa) : a.Sa ? a.Sa(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa);
  }
  Ha = Wa(eb);
  eb = Xa(eb);
  if (19 === b) {
    return a.Ta ? a.Ta(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha) : a.Ta ? a.Ta(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha);
  }
  var K = Wa(eb);
  Xa(eb);
  if (20 === b) {
    return a.Ua ? a.Ua(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha, K) : a.Ua ? a.Ua(c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha, K) : a.call(null, c, d, e, g, h, k, l, n, t, A, x, y, C, G, H, P, ca, oa, Ha, K);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function $c() {
  switch(arguments.length) {
    case 2:
      return Yd(arguments[0], arguments[1]);
    case 3:
      return Zd(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $d(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ae(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return be(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new E(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Yd(a, b) {
  var c = a.H;
  if (a.G) {
    var d = Ud(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.G(b);
  }
  return a.apply(a, Td(b));
}
function Zd(a, b, c) {
  b = L(b, c);
  c = a.H;
  if (a.G) {
    var d = Ud(b, c + 1);
    return d <= c ? Xd(a, d, b) : a.G(b);
  }
  return a.apply(a, Td(b));
}
function $d(a, b, c, d) {
  b = L(b, L(c, d));
  c = a.H;
  return a.G ? (d = Ud(b, c + 1), d <= c ? Xd(a, d, b) : a.G(b)) : a.apply(a, Td(b));
}
function ae(a, b, c, d, e) {
  b = L(b, L(c, L(d, e)));
  c = a.H;
  return a.G ? (d = Ud(b, c + 1), d <= c ? Xd(a, d, b) : a.G(b)) : a.apply(a, Td(b));
}
function be(a, b, c, d, e, g) {
  b = L(b, L(c, L(d, L(e, Vd(g)))));
  c = a.H;
  return a.G ? (d = Ud(b, c + 1), d <= c ? Xd(a, d, b) : a.G(b)) : a.apply(a, Td(b));
}
function ce(a) {
  return D(a) ? a : null;
}
function de(a, b) {
  for (;;) {
    if (null == D(b)) {
      return !0;
    }
    var c;
    c = F(b);
    c = a.f ? a.f(c) : a.call(null, c);
    if (q(c)) {
      c = a;
      var d = I(b);
      a = c;
      b = d;
    } else {
      return !1;
    }
  }
}
function ee(a, b) {
  for (;;) {
    if (D(b)) {
      var c;
      c = F(b);
      c = a.f ? a.f(c) : a.call(null, c);
      if (q(c)) {
        return c;
      }
      c = a;
      var d = I(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function fe(a) {
  return function() {
    function b(b, c) {
      return ya(a.c ? a.c(b, c) : a.call(null, b, c));
    }
    function c(b) {
      return ya(a.f ? a.f(b) : a.call(null, b));
    }
    function d() {
      return ya(a.F ? a.F() : a.call(null));
    }
    var e = null, g = function() {
      function b(a, d, e) {
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 2);g < h.length;) {
            h[g] = arguments[g + 2], ++g;
          }
          g = new E(h, 0);
        }
        return c.call(this, a, d, g);
      }
      function c(b, d, e) {
        return ya($d(a, b, d, e));
      }
      b.H = 2;
      b.G = function(a) {
        var b = F(a);
        a = I(a);
        var d = F(a);
        a = qc(a);
        return c(b, d, a);
      };
      b.B = c;
      return b;
    }(), e = function(a, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, a);
        case 2:
          return b.call(this, a, e);
        default:
          var n = null;
          if (2 < arguments.length) {
            for (var n = 0, t = Array(arguments.length - 2);n < t.length;) {
              t[n] = arguments[n + 2], ++n;
            }
            n = new E(t, 0);
          }
          return g.B(a, e, n);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.H = 2;
    e.G = g.G;
    e.F = d;
    e.f = c;
    e.c = b;
    e.B = g.B;
    return e;
  }();
}
function ge() {
  return function() {
    function a(a) {
      if (0 < arguments.length) {
        for (var c = 0, d = Array(arguments.length - 0);c < d.length;) {
          d[c] = arguments[c + 0], ++c;
        }
      }
      return !1;
    }
    a.H = 0;
    a.G = function(a) {
      D(a);
      return !1;
    };
    a.B = function() {
      return !1;
    };
    return a;
  }();
}
var he = function he() {
  switch(arguments.length) {
    case 0:
      return he.F();
    case 1:
      return he.f(arguments[0]);
    case 2:
      return he.c(arguments[0], arguments[1]);
    case 3:
      return he.j(arguments[0], arguments[1], arguments[2]);
    default:
      return he.B(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
he.F = function() {
  return td;
};
he.f = function(a) {
  return a;
};
he.c = function(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.j ? b.j(c, d, e) : b.call(null, c, d, e);
      return a.f ? a.f(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.c ? b.c(c, d) : b.call(null, c, d);
      return a.f ? a.f(e) : a.call(null, e);
    }
    function e(c) {
      c = b.f ? b.f(c) : b.call(null, c);
      return a.f ? a.f(c) : a.call(null, c);
    }
    function g() {
      var c = b.F ? b.F() : b.call(null);
      return a.f ? a.f(c) : a.call(null, c);
    }
    var h = null, k = function() {
      function c(a, b, e, g) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, g, h) {
        c = ae(b, c, e, g, h);
        return a.f ? a.f(c) : a.call(null, c);
      }
      c.H = 3;
      c.G = function(a) {
        var b = F(a);
        a = I(a);
        var c = F(a);
        a = I(a);
        var e = F(a);
        a = qc(a);
        return d(b, c, e, a);
      };
      c.B = d;
      return c;
    }(), h = function(a, b, h, A) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var x = null;
          if (3 < arguments.length) {
            for (var x = 0, y = Array(arguments.length - 3);x < y.length;) {
              y[x] = arguments[x + 3], ++x;
            }
            x = new E(y, 0);
          }
          return k.B(a, b, h, x);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.H = 3;
    h.G = k.G;
    h.F = g;
    h.f = e;
    h.c = d;
    h.j = c;
    h.B = k.B;
    return h;
  }();
};
he.j = function(a, b, c) {
  return function() {
    function d(d, e, g) {
      d = c.j ? c.j(d, e, g) : c.call(null, d, e, g);
      d = b.f ? b.f(d) : b.call(null, d);
      return a.f ? a.f(d) : a.call(null, d);
    }
    function e(d, e) {
      var g;
      g = c.c ? c.c(d, e) : c.call(null, d, e);
      g = b.f ? b.f(g) : b.call(null, g);
      return a.f ? a.f(g) : a.call(null, g);
    }
    function g(d) {
      d = c.f ? c.f(d) : c.call(null, d);
      d = b.f ? b.f(d) : b.call(null, d);
      return a.f ? a.f(d) : a.call(null, d);
    }
    function h() {
      var d;
      d = c.F ? c.F() : c.call(null);
      d = b.f ? b.f(d) : b.call(null, d);
      return a.f ? a.f(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, g) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, g, h, k) {
        d = ae(c, d, g, h, k);
        d = b.f ? b.f(d) : b.call(null, d);
        return a.f ? a.f(d) : a.call(null, d);
      }
      d.H = 3;
      d.G = function(a) {
        var b = F(a);
        a = I(a);
        var c = F(a);
        a = I(a);
        var d = F(a);
        a = qc(a);
        return e(b, c, d, a);
      };
      d.B = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return g.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var y = null;
          if (3 < arguments.length) {
            for (var y = 0, C = Array(arguments.length - 3);y < C.length;) {
              C[y] = arguments[y + 3], ++y;
            }
            y = new E(C, 0);
          }
          return l.B(a, b, c, y);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.H = 3;
    k.G = l.G;
    k.F = h;
    k.f = g;
    k.c = e;
    k.j = d;
    k.B = l.B;
    return k;
  }();
};
he.B = function(a, b, c, d) {
  return function(a) {
    return function() {
      function b(a) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new E(e, 0);
        }
        return c.call(this, d);
      }
      function c(b) {
        b = Yd(F(a), b);
        for (var d = I(a);;) {
          if (d) {
            b = F(d).call(null, b), d = I(d);
          } else {
            return b;
          }
        }
      }
      b.H = 0;
      b.G = function(a) {
        a = D(a);
        return c(a);
      };
      b.B = c;
      return b;
    }();
  }(Fd(L(a, L(b, L(c, d)))));
};
he.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), d = I(d);
  return he.B(b, a, c, d);
};
he.H = 3;
var ie = function ie() {
  switch(arguments.length) {
    case 1:
      return ie.f(arguments[0]);
    case 2:
      return ie.c(arguments[0], arguments[1]);
    case 3:
      return ie.j(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ie.I(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ie.B(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
ie.f = function(a) {
  return a;
};
ie.c = function(a, b) {
  return function() {
    function c(c, d, e) {
      return a.I ? a.I(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.j ? a.j(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.c ? a.c(b, c) : a.call(null, b, c);
    }
    function g() {
      return a.f ? a.f(b) : a.call(null, b);
    }
    var h = null, k = function() {
      function c(a, b, e, g) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return d.call(this, a, b, e, h);
      }
      function d(c, e, g, h) {
        return be(a, b, c, e, g, M([h], 0));
      }
      c.H = 3;
      c.G = function(a) {
        var b = F(a);
        a = I(a);
        var c = F(a);
        a = I(a);
        var e = F(a);
        a = qc(a);
        return d(b, c, e, a);
      };
      c.B = d;
      return c;
    }(), h = function(a, b, h, A) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, h);
        default:
          var x = null;
          if (3 < arguments.length) {
            for (var x = 0, y = Array(arguments.length - 3);x < y.length;) {
              y[x] = arguments[x + 3], ++x;
            }
            x = new E(y, 0);
          }
          return k.B(a, b, h, x);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    h.H = 3;
    h.G = k.G;
    h.F = g;
    h.f = e;
    h.c = d;
    h.j = c;
    h.B = k.B;
    return h;
  }();
};
ie.j = function(a, b, c) {
  return function() {
    function d(d, e, g) {
      return a.$ ? a.$(b, c, d, e, g) : a.call(null, b, c, d, e, g);
    }
    function e(d, e) {
      return a.I ? a.I(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function g(d) {
      return a.j ? a.j(b, c, d) : a.call(null, b, c, d);
    }
    function h() {
      return a.c ? a.c(b, c) : a.call(null, b, c);
    }
    var k = null, l = function() {
      function d(a, b, c, g) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return e.call(this, a, b, c, h);
      }
      function e(d, g, h, k) {
        return be(a, b, c, d, g, M([h, k], 0));
      }
      d.H = 3;
      d.G = function(a) {
        var b = F(a);
        a = I(a);
        var c = F(a);
        a = I(a);
        var d = F(a);
        a = qc(a);
        return e(b, c, d, a);
      };
      d.B = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return h.call(this);
        case 1:
          return g.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var y = null;
          if (3 < arguments.length) {
            for (var y = 0, C = Array(arguments.length - 3);y < C.length;) {
              C[y] = arguments[y + 3], ++y;
            }
            y = new E(C, 0);
          }
          return l.B(a, b, c, y);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.H = 3;
    k.G = l.G;
    k.F = h;
    k.f = g;
    k.c = e;
    k.j = d;
    k.B = l.B;
    return k;
  }();
};
ie.I = function(a, b, c, d) {
  return function() {
    function e(e, g, h) {
      return a.wa ? a.wa(b, c, d, e, g, h) : a.call(null, b, c, d, e, g, h);
    }
    function g(e, g) {
      return a.$ ? a.$(b, c, d, e, g) : a.call(null, b, c, d, e, g);
    }
    function h(e) {
      return a.I ? a.I(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function k() {
      return a.j ? a.j(b, c, d) : a.call(null, b, c, d);
    }
    var l = null, n = function() {
      function e(a, b, c, d) {
        var h = null;
        if (3 < arguments.length) {
          for (var h = 0, k = Array(arguments.length - 3);h < k.length;) {
            k[h] = arguments[h + 3], ++h;
          }
          h = new E(k, 0);
        }
        return g.call(this, a, b, c, h);
      }
      function g(e, h, k, l) {
        return be(a, b, c, d, e, M([h, k, l], 0));
      }
      e.H = 3;
      e.G = function(a) {
        var b = F(a);
        a = I(a);
        var c = F(a);
        a = I(a);
        var d = F(a);
        a = qc(a);
        return g(b, c, d, a);
      };
      e.B = g;
      return e;
    }(), l = function(a, b, c, d) {
      switch(arguments.length) {
        case 0:
          return k.call(this);
        case 1:
          return h.call(this, a);
        case 2:
          return g.call(this, a, b);
        case 3:
          return e.call(this, a, b, c);
        default:
          var l = null;
          if (3 < arguments.length) {
            for (var l = 0, G = Array(arguments.length - 3);l < G.length;) {
              G[l] = arguments[l + 3], ++l;
            }
            l = new E(G, 0);
          }
          return n.B(a, b, c, l);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    l.H = 3;
    l.G = n.G;
    l.F = k;
    l.f = h;
    l.c = g;
    l.j = e;
    l.B = n.B;
    return l;
  }();
};
ie.B = function(a, b, c, d, e) {
  return function() {
    function g(a) {
      var b = null;
      if (0 < arguments.length) {
        for (var b = 0, c = Array(arguments.length - 0);b < c.length;) {
          c[b] = arguments[b + 0], ++b;
        }
        b = new E(c, 0);
      }
      return h.call(this, b);
    }
    function h(g) {
      return ae(a, b, c, d, U.c(e, g));
    }
    g.H = 0;
    g.G = function(a) {
      a = D(a);
      return h(a);
    };
    g.B = h;
    return g;
  }();
};
ie.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), e = I(d), d = F(e), e = I(e);
  return ie.B(b, a, c, d, e);
};
ie.H = 4;
function je(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.xb = c;
  this.da = d;
  this.D = 16386;
  this.w = 6455296;
}
f = je.prototype;
f.equiv = function(a) {
  return this.C(null, a);
};
f.C = function(a, b) {
  return this === b;
};
f.zb = function() {
  return this.state;
};
f.M = function() {
  return this.meta;
};
f.Sb = function(a, b, c) {
  for (var d = D(this.da), e = null, g = 0, h = 0;;) {
    if (h < g) {
      a = e.X(null, h);
      var k = O(a, 0);
      a = O(a, 1);
      var l = b, n = c;
      a.I ? a.I(k, this, l, n) : a.call(null, k, this, l, n);
      h += 1;
    } else {
      if (a = D(d)) {
        d = a, id(d) ? (e = Tb(d), d = Ub(d), a = e, g = N(e), e = a) : (a = F(d), k = O(a, 0), a = O(a, 1), e = k, g = b, h = c, a.I ? a.I(e, this, g, h) : a.call(null, e, this, g, h), d = I(d), e = null, g = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
f.Rb = function(a, b, c) {
  this.da = Q.j(this.da, b, c);
  return this;
};
f.Tb = function(a, b) {
  return this.da = R.c(this.da, b);
};
f.K = function() {
  return ba(this);
};
function ke() {
  switch(arguments.length) {
    case 1:
      return le(arguments[0]);
    default:
      var a = arguments[0], b = new E(Array.prototype.slice.call(arguments, 1), 0), c = nd(b) ? Yd(me, b) : b, b = Vc(c, sa), c = Vc(c, ne);
      return new je(a, b, c, null);
  }
}
function le(a) {
  return new je(a, null, null, null);
}
function oe(a, b) {
  if (a instanceof je) {
    var c = a.xb;
    if (null != c && !q(c.f ? c.f(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(function() {
        var a = Gd(new B(null, "validate", "validate", 1439230700, null), new B(null, "new-value", "new-value", -1567397401, null));
        return pe.f ? pe.f(a) : pe.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.da && Kb(a, c, b);
    return b;
  }
  return Xb(a, b);
}
var nc = function nc() {
  switch(arguments.length) {
    case 2:
      return nc.c(arguments[0], arguments[1]);
    case 3:
      return nc.j(arguments[0], arguments[1], arguments[2]);
    case 4:
      return nc.I(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return nc.B(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
nc.c = function(a, b) {
  var c;
  a instanceof je ? (c = a.state, c = b.f ? b.f(c) : b.call(null, c), c = oe(a, c)) : c = Yb.c(a, b);
  return c;
};
nc.j = function(a, b, c) {
  if (a instanceof je) {
    var d = a.state;
    b = b.c ? b.c(d, c) : b.call(null, d, c);
    a = oe(a, b);
  } else {
    a = Yb.j(a, b, c);
  }
  return a;
};
nc.I = function(a, b, c, d) {
  if (a instanceof je) {
    var e = a.state;
    b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
    a = oe(a, b);
  } else {
    a = Yb.I(a, b, c, d);
  }
  return a;
};
nc.B = function(a, b, c, d, e) {
  return a instanceof je ? oe(a, ae(b, a.state, c, d, e)) : Yb.$(a, b, c, d, e);
};
nc.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), e = I(d), d = F(e), e = I(e);
  return nc.B(b, a, c, d, e);
};
nc.H = 4;
var qe = function qe() {
  switch(arguments.length) {
    case 1:
      return qe.f(arguments[0]);
    case 2:
      return qe.c(arguments[0], arguments[1]);
    case 3:
      return qe.j(arguments[0], arguments[1], arguments[2]);
    case 4:
      return qe.I(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return qe.B(arguments[0], arguments[1], arguments[2], arguments[3], new E(Array.prototype.slice.call(arguments, 4), 0));
  }
};
qe.f = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.f ? a.f(d) : a.call(null, d);
        return b.c ? b.c(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.f ? b.f(a) : b.call(null, a);
      }
      function e() {
        return b.F ? b.F() : b.call(null);
      }
      var g = null, h = function() {
        function c(a, b, e) {
          var g = null;
          if (2 < arguments.length) {
            for (var g = 0, h = Array(arguments.length - 2);g < h.length;) {
              h[g] = arguments[g + 2], ++g;
            }
            g = new E(h, 0);
          }
          return d.call(this, a, b, g);
        }
        function d(c, e, g) {
          e = Zd(a, e, g);
          return b.c ? b.c(c, e) : b.call(null, c, e);
        }
        c.H = 2;
        c.G = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = qc(a);
          return d(b, c, a);
        };
        c.B = d;
        return c;
      }(), g = function(a, b, g) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var t = null;
            if (2 < arguments.length) {
              for (var t = 0, A = Array(arguments.length - 2);t < A.length;) {
                A[t] = arguments[t + 2], ++t;
              }
              t = new E(A, 0);
            }
            return h.B(a, b, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.H = 2;
      g.G = h.G;
      g.F = e;
      g.f = d;
      g.c = c;
      g.B = h.B;
      return g;
    }();
  };
};
qe.c = function(a, b) {
  return new Kd(null, function() {
    var c = D(b);
    if (c) {
      if (id(c)) {
        for (var d = Tb(c), e = N(d), g = Od(e), h = 0;;) {
          if (h < e) {
            Sd(g, function() {
              var b = w.c(d, h);
              return a.f ? a.f(b) : a.call(null, b);
            }()), h += 1;
          } else {
            break;
          }
        }
        return Rd(g.W(), qe.c(a, Ub(c)));
      }
      return L(function() {
        var b = F(c);
        return a.f ? a.f(b) : a.call(null, b);
      }(), qe.c(a, qc(c)));
    }
    return null;
  }, null, null);
};
qe.j = function(a, b, c) {
  return new Kd(null, function() {
    var d = D(b), e = D(c);
    if (d && e) {
      var g = L, h;
      h = F(d);
      var k = F(e);
      h = a.c ? a.c(h, k) : a.call(null, h, k);
      d = g(h, qe.j(a, qc(d), qc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
qe.I = function(a, b, c, d) {
  return new Kd(null, function() {
    var e = D(b), g = D(c), h = D(d);
    if (e && g && h) {
      var k = L, l;
      l = F(e);
      var n = F(g), t = F(h);
      l = a.j ? a.j(l, n, t) : a.call(null, l, n, t);
      e = k(l, qe.I(a, qc(e), qc(g), qc(h)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
qe.B = function(a, b, c, d, e) {
  var g = function k(a) {
    return new Kd(null, function() {
      var b = qe.c(D, a);
      return de(td, b) ? L(qe.c(F, b), k(qe.c(qc, b))) : null;
    }, null, null);
  };
  return qe.c(function() {
    return function(b) {
      return Yd(a, b);
    };
  }(g), g(Rc.B(e, d, M([c, b], 0))));
};
qe.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), e = I(d), d = F(e), e = I(e);
  return qe.B(b, a, c, d, e);
};
qe.H = 4;
function re(a, b) {
  return new Kd(null, function() {
    if (0 < a) {
      var c = D(b);
      return c ? L(F(c), re(a - 1, qc(c))) : null;
    }
    return null;
  }, null, null);
}
function se(a, b) {
  return new Kd(null, function() {
    var c = D(b);
    if (c) {
      if (id(c)) {
        for (var d = Tb(c), e = N(d), g = Od(e), h = 0;;) {
          if (h < e) {
            var k;
            k = w.c(d, h);
            k = a.f ? a.f(k) : a.call(null, k);
            q(k) && (k = w.c(d, h), g.add(k));
            h += 1;
          } else {
            break;
          }
        }
        return Rd(g.W(), se(a, Ub(c)));
      }
      d = F(c);
      c = qc(c);
      return q(a.f ? a.f(d) : a.call(null, d)) ? L(d, se(a, c)) : se(a, c);
    }
    return null;
  }, null, null);
}
function te(a, b) {
  return se(fe(a), b);
}
function ue(a) {
  return function c(a) {
    return new Kd(null, function() {
      var e;
      q(fd.f ? fd.f(a) : fd.call(null, a)) ? (e = M([D.f ? D.f(a) : D.call(null, a)], 0), e = Yd(U, Zd(qe, c, e))) : e = null;
      return L(a, e);
    }, null, null);
  }(a);
}
function ve(a) {
  return se(function(a) {
    return !fd(a);
  }, qc(ue(a)));
}
var we = function we() {
  switch(arguments.length) {
    case 2:
      return we.c(arguments[0], arguments[1]);
    case 3:
      return we.j(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
we.c = function(a, b) {
  var c;
  null != a ? a && (a.D & 4 || a.Qc) ? (c = Ia(Ob, Nb(a), b), c = Pb(c), c = Nc(c, ad(a))) : c = Ia(Ra, a, b) : c = Ia(Rc, rc, b);
  return c;
};
we.j = function(a, b, c) {
  a && (a.D & 4 || a.Qc) ? (b = ud(b, Wd, Nb(a), c), b = Pb(b), a = Nc(b, ad(a))) : a = ud(b, Rc, a, c);
  return a;
};
we.H = 3;
function xe(a, b) {
  return ye(a, b);
}
function ye(a, b) {
  for (var c = ld, d = a, e = D(b);;) {
    if (e) {
      var g = d;
      if (g ? g.w & 256 || g.zc || (g.w ? 0 : r($a, g)) : r($a, g)) {
        d = Wc(d, F(e), c);
        if (c === d) {
          return null;
        }
        e = I(e);
      } else {
        return null;
      }
    } else {
      return d;
    }
  }
}
var ze = function ze(b, c, d) {
  var e = O(c, 0);
  c = zd(c);
  return q(c) ? Q.j(b, e, ze(Vc(b, e), c, d)) : Q.j(b, e, d);
};
function Ae(a, b) {
  this.V = a;
  this.h = b;
}
function Be(a) {
  return new Ae(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ce(a) {
  return new Ae(a.V, Ba(a.h));
}
function De(a) {
  a = a.A;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ee(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Be(a);
    d.h[0] = c;
    c = d;
    b -= 5;
  }
}
var Fe = function Fe(b, c, d, e) {
  var g = Ce(d), h = b.A - 1 >>> c & 31;
  5 === c ? g.h[h] = e : (d = d.h[h], b = null != d ? Fe(b, c - 5, d, e) : Ee(null, c - 5, e), g.h[h] = b);
  return g;
};
function Ge(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function He(a, b) {
  if (b >= De(a)) {
    return a.U;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.h[b >>> d & 31], d = e
    } else {
      return c.h;
    }
  }
}
function Ie(a, b) {
  return 0 <= b && b < a.A ? He(a, b) : Ge(b, a.A);
}
var Je = function Je(b, c, d, e, g) {
  var h = Ce(d);
  if (0 === c) {
    h.h[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Je(b, c - 5, d.h[k], e, g);
    h.h[k] = b;
  }
  return h;
}, Ke = function Ke(b, c, d) {
  var e = b.A - 2 >>> c & 31;
  if (5 < c) {
    b = Ke(b, c - 5, d.h[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Ce(d);
    d.h[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Ce(d);
  d.h[e] = null;
  return d;
};
function Le(a, b, c, d, e, g) {
  this.i = a;
  this.base = b;
  this.h = c;
  this.ta = d;
  this.start = e;
  this.end = g;
}
Le.prototype.tc = function() {
  return this.i < this.end;
};
Le.prototype.next = function() {
  32 === this.i - this.base && (this.h = He(this.ta, this.i), this.base += 32);
  var a = this.h[this.i & 31];
  this.i += 1;
  return a;
};
function V(a, b, c, d, e, g) {
  this.meta = a;
  this.A = b;
  this.shift = c;
  this.root = d;
  this.U = e;
  this.v = g;
  this.w = 167668511;
  this.D = 8196;
}
f = V.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
f.Ab = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = He(this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            var h = g + a, k = e[g], d = b.j ? b.j(d, h, k) : b.call(null, d, h, k), g = g + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.X = function(a, b) {
  return Ie(this, b)[b & 31];
};
f.qa = function(a, b, c) {
  return 0 <= b && b < this.A ? He(this, b)[b & 31] : c;
};
f.oc = function(a, b, c) {
  if (0 <= b && b < this.A) {
    return De(this) <= b ? (a = Ba(this.U), a[b & 31] = c, new V(this.meta, this.A, this.shift, this.root, a, null)) : new V(this.meta, this.A, this.shift, Je(this, this.shift, this.root, b, c), this.U, null);
  }
  if (b === this.A) {
    return Ra(this, c);
  }
  throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.A), v("]")].join(""));
};
f.Ob = function() {
  var a = this.A;
  return new Le(0, 0, 0 < N(this) ? He(this, 0) : null, this, 0, a);
};
f.M = function() {
  return this.meta;
};
f.S = function() {
  return this.A;
};
f.hc = function() {
  return w.c(this, 0);
};
f.ic = function() {
  return w.c(this, 1);
};
f.Cb = function() {
  return 0 < this.A ? w.c(this, this.A - 1) : null;
};
f.Db = function() {
  if (0 === this.A) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.A) {
    return ub(Sc, this.meta);
  }
  if (1 < this.A - De(this)) {
    return new V(this.meta, this.A - 1, this.shift, this.root, this.U.slice(0, -1), null);
  }
  var a = He(this, this.A - 2), b = Ke(this, this.shift, this.root), b = null == b ? W : b, c = this.A - 1;
  return 5 < this.shift && null == b.h[1] ? new V(this.meta, c, this.shift - 5, b.h[0], a, null) : new V(this.meta, c, this.shift, b, a, null);
};
f.Qb = function() {
  return 0 < this.A ? new Kc(this, this.A - 1, null) : null;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  if (b instanceof V) {
    if (this.A === N(b)) {
      for (var c = Zb(this), d = Zb(b);;) {
        if (q(c.tc())) {
          var e = c.next(), g = d.next();
          if (!sc.c(e, g)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return Lc(this, b);
  }
};
f.sb = function() {
  var a = this;
  return new Me(a.A, a.shift, function() {
    var b = a.root;
    return Ne.f ? Ne.f(b) : Ne.call(null, b);
  }(), function() {
    var b = a.U;
    return Oe.f ? Oe.f(b) : Oe.call(null, b);
  }());
};
f.ea = function() {
  return Nc(Sc, this.meta);
};
f.ga = function(a, b) {
  return Bc(this, b);
};
f.ha = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.A) {
      var e = He(this, a);
      c = e.length;
      a: {
        for (var g = 0;;) {
          if (g < c) {
            var h = e[g], d = b.c ? b.c(d, h) : b.call(null, d, h), g = g + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
f.ba = function(a, b, c) {
  if ("number" === typeof b) {
    return ob(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.P = function() {
  if (0 === this.A) {
    return null;
  }
  if (32 >= this.A) {
    return new E(this.U, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.h[0];
      } else {
        a = a.h;
        break a;
      }
    }
  }
  return Pe ? Pe(this, a, 0, 0) : Qe.call(null, this, a, 0, 0);
};
f.O = function(a, b) {
  return new V(b, this.A, this.shift, this.root, this.U, this.v);
};
f.R = function(a, b) {
  if (32 > this.A - De(this)) {
    for (var c = this.U.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.U[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.meta, this.A + 1, this.shift, this.root, d, null);
  }
  c = (d = this.A >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Be(null), d.h[0] = this.root, e = Ee(null, this.shift, new Ae(null, this.U)), d.h[1] = e) : d = Fe(this, this.shift, this.root, new Ae(null, this.U));
  return new V(this.meta, this.A + 1, c, d, [b], null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.X(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.X(null, c);
  };
  a.j = function(a, c, d) {
    return this.qa(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.X(null, a);
};
f.c = function(a, b) {
  return this.qa(null, a, b);
};
var W = new Ae(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Sc = new V(null, 0, 5, W, [], xc);
function Se(a) {
  var b = a.length;
  if (32 > b) {
    return new V(null, b, 5, W, a, null);
  }
  for (var c = 32, d = (new V(null, 32, 5, W, a.slice(0, 32), null)).sb(null);;) {
    if (c < b) {
      var e = c + 1, d = Wd.c(d, a[c]), c = e
    } else {
      return Pb(d);
    }
  }
}
V.prototype[Aa] = function() {
  return uc(this);
};
function Te(a) {
  return xa(a) ? Se(a) : Pb(Ia(Ob, Nb(Sc), a));
}
var Ue = function Ue() {
  return Ue.B(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Ue.B = function(a) {
  return a instanceof E && 0 === a.i ? Se(a.h) : Te(a);
};
Ue.H = 0;
Ue.G = function(a) {
  return Ue.B(D(a));
};
function Ve(a, b, c, d, e, g) {
  this.ra = a;
  this.node = b;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.v = g;
  this.w = 32375020;
  this.D = 1536;
}
f = Ve.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.na = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.ra;
    var b = this.node, c = this.i, d = this.off + 1;
    a = Pe ? Pe(a, b, c, d) : Qe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Wb(this);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(Sc, this.meta);
};
f.ga = function(a, b) {
  var c;
  c = this.ra;
  var d = this.i + this.off, e = N(this.ra);
  c = We ? We(c, d, e) : Xe.call(null, c, d, e);
  return Bc(c, b);
};
f.ha = function(a, b, c) {
  a = this.ra;
  var d = this.i + this.off, e = N(this.ra);
  a = We ? We(a, d, e) : Xe.call(null, a, d, e);
  return Dc(a, b, c);
};
f.ia = function() {
  return this.node[this.off];
};
f.oa = function() {
  if (this.off + 1 < this.node.length) {
    var a;
    a = this.ra;
    var b = this.node, c = this.i, d = this.off + 1;
    a = Pe ? Pe(a, b, c, d) : Qe.call(null, a, b, c, d);
    return null == a ? rc : a;
  }
  return Ub(this);
};
f.P = function() {
  return this;
};
f.fc = function() {
  var a = this.node;
  return new Nd(a, this.off, a.length);
};
f.gc = function() {
  var a = this.i + this.node.length;
  if (a < Oa(this.ra)) {
    var b = this.ra, c = He(this.ra, a);
    return Pe ? Pe(b, c, a, 0) : Qe.call(null, b, c, a, 0);
  }
  return rc;
};
f.O = function(a, b) {
  var c = this.ra, d = this.node, e = this.i, g = this.off;
  return Ye ? Ye(c, d, e, g, b) : Qe.call(null, c, d, e, g, b);
};
f.R = function(a, b) {
  return L(b, this);
};
f.ec = function() {
  var a = this.i + this.node.length;
  if (a < Oa(this.ra)) {
    var b = this.ra, c = He(this.ra, a);
    return Pe ? Pe(b, c, a, 0) : Qe.call(null, b, c, a, 0);
  }
  return null;
};
Ve.prototype[Aa] = function() {
  return uc(this);
};
function Qe() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new Ve(a, Ie(a, b), b, c, null, null);
    case 4:
      return Pe(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ye(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Pe(a, b, c, d) {
  return new Ve(a, b, c, d, null, null);
}
function Ye(a, b, c, d, e) {
  return new Ve(a, b, c, d, e, null);
}
function Ze(a, b, c, d, e) {
  this.meta = a;
  this.ta = b;
  this.start = c;
  this.end = d;
  this.v = e;
  this.w = 167666463;
  this.D = 8192;
}
f = Ze.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
f.Ab = function(a, b, c) {
  a = this.start;
  for (var d = 0;;) {
    if (a < this.end) {
      var e = d, g = w.c(this.ta, a);
      c = b.j ? b.j(c, e, g) : b.call(null, c, e, g);
      d += 1;
      a += 1;
    } else {
      return c;
    }
  }
};
f.X = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Ge(b, this.end - this.start) : w.c(this.ta, this.start + b);
};
f.qa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.j(this.ta, this.start + b, c);
};
f.oc = function(a, b, c) {
  var d = this.start + b;
  a = this.meta;
  c = Q.j(this.ta, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return $e.$ ? $e.$(a, c, b, d, null) : $e.call(null, a, c, b, d, null);
};
f.M = function() {
  return this.meta;
};
f.S = function() {
  return this.end - this.start;
};
f.Cb = function() {
  return w.c(this.ta, this.end - 1);
};
f.Db = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.meta, b = this.ta, c = this.start, d = this.end - 1;
  return $e.$ ? $e.$(a, b, c, d, null) : $e.call(null, a, b, c, d, null);
};
f.Qb = function() {
  return this.start !== this.end ? new Kc(this, this.end - this.start - 1, null) : null;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(Sc, this.meta);
};
f.ga = function(a, b) {
  return Bc(this, b);
};
f.ha = function(a, b, c) {
  return Dc(this, b, c);
};
f.ba = function(a, b, c) {
  if ("number" === typeof b) {
    return ob(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.P = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : L(w.c(a.ta, e), new Kd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
f.O = function(a, b) {
  var c = this.ta, d = this.start, e = this.end, g = this.v;
  return $e.$ ? $e.$(b, c, d, e, g) : $e.call(null, b, c, d, e, g);
};
f.R = function(a, b) {
  var c = this.meta, d = ob(this.ta, this.end, b), e = this.start, g = this.end + 1;
  return $e.$ ? $e.$(c, d, e, g, null) : $e.call(null, c, d, e, g, null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.X(null, c);
      case 3:
        return this.qa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.X(null, c);
  };
  a.j = function(a, c, d) {
    return this.qa(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.X(null, a);
};
f.c = function(a, b) {
  return this.qa(null, a, b);
};
Ze.prototype[Aa] = function() {
  return uc(this);
};
function $e(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ze) {
      c = b.start + c, d = b.start + d, b = b.ta;
    } else {
      var g = N(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Ze(a, b, c, d, e);
    }
  }
}
function Xe() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return We(a, arguments[1], N(a));
    case 3:
      return We(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function We(a, b, c) {
  return $e(null, a, b, c, null);
}
function af(a, b) {
  return a === b.V ? b : new Ae(a, Ba(b.h));
}
function Ne(a) {
  return new Ae({}, Ba(a.h));
}
function Oe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  kd(a, 0, b, 0, a.length);
  return b;
}
var bf = function bf(b, c, d, e) {
  d = af(b.root.V, d);
  var g = b.A - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.h[g];
    b = null != h ? bf(b, c - 5, h, e) : Ee(b.root.V, c - 5, e);
  }
  d.h[g] = b;
  return d;
};
function Me(a, b, c, d) {
  this.A = a;
  this.shift = b;
  this.root = c;
  this.U = d;
  this.D = 88;
  this.w = 275;
}
f = Me.prototype;
f.Fb = function(a, b) {
  if (this.root.V) {
    if (32 > this.A - De(this)) {
      this.U[this.A & 31] = b;
    } else {
      var c = new Ae(this.root.V, this.U), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.U = d;
      if (this.A >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ee(this.root.V, this.shift, c);
        this.root = new Ae(this.root.V, d);
        this.shift = e;
      } else {
        this.root = bf(this, this.shift, this.root, c);
      }
    }
    this.A += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Gb = function() {
  if (this.root.V) {
    this.root.V = null;
    var a = this.A - De(this), b = Array(a);
    kd(this.U, 0, b, 0, a);
    return new V(null, this.A, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
f.Eb = function(a, b, c) {
  if ("number" === typeof b) {
    return Rb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
f.Bc = function(a, b, c) {
  var d = this;
  if (d.root.V) {
    if (0 <= b && b < d.A) {
      return De(this) <= b ? d.U[b & 31] = c : (a = function() {
        return function g(a, k) {
          var l = af(d.root.V, k);
          if (0 === a) {
            l.h[b & 31] = c;
          } else {
            var n = b >>> a & 31, t = g(a - 5, l.h[n]);
            l.h[n] = t;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.A) {
      return Ob(this, c);
    }
    throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.A)].join(""));
  }
  throw Error("assoc! after persistent!");
};
f.S = function() {
  if (this.root.V) {
    return this.A;
  }
  throw Error("count after persistent!");
};
f.X = function(a, b) {
  if (this.root.V) {
    return Ie(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.qa = function(a, b, c) {
  return 0 <= b && b < this.A ? w.c(this, b) : c;
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return "number" === typeof b ? w.j(this, b, c) : c;
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.N(null, a);
};
f.c = function(a, b) {
  return this.L(null, a, b);
};
function cf() {
  this.w = 2097152;
  this.D = 0;
}
cf.prototype.equiv = function(a) {
  return this.C(null, a);
};
cf.prototype.C = function() {
  return !1;
};
var df = new cf;
function ef(a, b) {
  return od(gd(b) ? N(a) === N(b) ? de(td, qe.c(function(a) {
    return sc.c(Wc(b, F(a), df), F(I(a)));
  }, a)) : null : null);
}
function ff(a) {
  this.s = a;
}
ff.prototype.next = function() {
  if (null != this.s) {
    var a = F(this.s), b = O(a, 0), a = O(a, 1);
    this.s = I(this.s);
    return {value:[b, a], done:!1};
  }
  return {value:null, done:!0};
};
function gf(a) {
  return new ff(D(a));
}
function hf(a) {
  this.s = a;
}
hf.prototype.next = function() {
  if (null != this.s) {
    var a = F(this.s);
    this.s = I(this.s);
    return {value:[a, a], done:!1};
  }
  return {value:null, done:!0};
};
function jf(a, b) {
  var c;
  if (b instanceof S) {
    a: {
      c = a.length;
      for (var d = b.Z, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var g = a[e];
        if (g instanceof S && d === g.Z) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, q(q(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof B) {
        a: {
          for (c = a.length, d = b.ib, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            g = a[e];
            if (g instanceof B && d === g.ib) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (sc.c(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function kf(a, b, c) {
  this.h = a;
  this.i = b;
  this.ma = c;
  this.w = 32374990;
  this.D = 0;
}
f = kf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.ma;
};
f.na = function() {
  return this.i < this.h.length - 2 ? new kf(this.h, this.i + 2, this.ma) : null;
};
f.S = function() {
  return (this.h.length - this.i) / 2;
};
f.K = function() {
  return wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.ma);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return new V(null, 2, 5, W, [this.h[this.i], this.h[this.i + 1]], null);
};
f.oa = function() {
  return this.i < this.h.length - 2 ? new kf(this.h, this.i + 2, this.ma) : rc;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new kf(this.h, this.i, b);
};
f.R = function(a, b) {
  return L(b, this);
};
kf.prototype[Aa] = function() {
  return uc(this);
};
function lf(a, b, c) {
  this.h = a;
  this.i = b;
  this.A = c;
}
lf.prototype.tc = function() {
  return this.i < this.A;
};
lf.prototype.next = function() {
  var a = new V(null, 2, 5, W, [this.h[this.i], this.h[this.i + 1]], null);
  this.i += 2;
  return a;
};
function p(a, b, c, d) {
  this.meta = a;
  this.A = b;
  this.h = c;
  this.v = d;
  this.w = 16647951;
  this.D = 8196;
}
f = p.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.keys = function() {
  return uc(mf.f ? mf.f(this) : mf.call(null, this));
};
f.entries = function() {
  return gf(D(this));
};
f.values = function() {
  return uc(nf.f ? nf.f(this) : nf.call(null, this));
};
f.has = function(a) {
  return qd(this, a);
};
f.get = function(a, b) {
  return this.L(null, a, b);
};
f.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.X(null, e), h = O(g, 0), g = O(g, 1);
      a.c ? a.c(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = D(b)) {
        id(b) ? (c = Tb(b), b = Ub(b), h = c, d = N(c), c = h) : (c = F(b), h = O(c, 0), c = g = O(c, 1), a.c ? a.c(c, h) : a.call(null, c, h), b = I(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  a = jf(this.h, b);
  return -1 === a ? c : this.h[a + 1];
};
f.Ab = function(a, b, c) {
  a = this.h.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.h[d], g = this.h[d + 1];
      c = b.j ? b.j(c, e, g) : b.call(null, c, e, g);
      d += 2;
    } else {
      return c;
    }
  }
};
f.Ob = function() {
  return new lf(this.h, 0, 2 * this.A);
};
f.M = function() {
  return this.meta;
};
f.S = function() {
  return this.A;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
f.C = function(a, b) {
  if (b && (b.w & 1024 || b.Uc)) {
    var c = this.h.length;
    if (this.A === b.S(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.L(null, this.h[d], ld);
          if (e !== ld) {
            if (sc.c(this.h[d + 1], e)) {
              d += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return ef(this, b);
  }
};
f.sb = function() {
  return new of({}, this.h.length, Ba(this.h));
};
f.ea = function() {
  return ub(pf, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.fa = function(a, b) {
  if (0 <= jf(this.h, b)) {
    var c = this.h.length, d = c - 2;
    if (0 === d) {
      return Pa(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new p(this.meta, this.A - 1, d, null);
      }
      sc.c(b, this.h[e]) || (d[g] = this.h[e], d[g + 1] = this.h[e + 1], g += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
f.ba = function(a, b, c) {
  a = jf(this.h, b);
  if (-1 === a) {
    if (this.A < qf) {
      a = this.h;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.meta, this.A + 1, e, null);
    }
    return ub(bb(we.c(Xc, this), b, c), this.meta);
  }
  if (c === this.h[a + 1]) {
    return this;
  }
  b = Ba(this.h);
  b[a + 1] = c;
  return new p(this.meta, this.A, b, null);
};
f.dc = function(a, b) {
  return -1 !== jf(this.h, b);
};
f.P = function() {
  var a = this.h;
  return 0 <= a.length - 2 ? new kf(a, 0, null) : null;
};
f.O = function(a, b) {
  return new p(b, this.A, this.h, this.v);
};
f.R = function(a, b) {
  if (hd(b)) {
    return bb(this, w.c(b, 0), w.c(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (hd(e)) {
      c = bb(c, w.c(e, 0), w.c(e, 1)), d = I(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.N(null, a);
};
f.c = function(a, b) {
  return this.L(null, a, b);
};
var pf = new p(null, 0, [], zc), qf = 8;
p.prototype[Aa] = function() {
  return uc(this);
};
function of(a, b, c) {
  this.tb = a;
  this.wb = b;
  this.h = c;
  this.w = 258;
  this.D = 56;
}
f = of.prototype;
f.S = function() {
  if (q(this.tb)) {
    return xd(this.wb);
  }
  throw Error("count after persistent!");
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  if (q(this.tb)) {
    return a = jf(this.h, b), -1 === a ? c : this.h[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.Fb = function(a, b) {
  if (q(this.tb)) {
    if (b ? b.w & 2048 || b.Vc || (b.w ? 0 : r(gb, b)) : r(gb, b)) {
      return Qb(this, Bd.f ? Bd.f(b) : Bd.call(null, b), Cd.f ? Cd.f(b) : Cd.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = F(c);
      if (q(e)) {
        var g = e, c = I(c), d = Qb(d, function() {
          var a = g;
          return Bd.f ? Bd.f(a) : Bd.call(null, a);
        }(), function() {
          var a = g;
          return Cd.f ? Cd.f(a) : Cd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Gb = function() {
  if (q(this.tb)) {
    return this.tb = !1, new p(null, xd(this.wb), this.h, null);
  }
  throw Error("persistent! called twice");
};
f.Eb = function(a, b, c) {
  if (q(this.tb)) {
    a = jf(this.h, b);
    if (-1 === a) {
      if (this.wb + 2 <= 2 * qf) {
        return this.wb += 2, this.h.push(b), this.h.push(c), this;
      }
      a = this.wb;
      var d = this.h;
      a = rf.c ? rf.c(a, d) : rf.call(null, a, d);
      return Qb(a, b, c);
    }
    c !== this.h[a + 1] && (this.h[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function rf(a, b) {
  for (var c = Nb(Xc), d = 0;;) {
    if (d < a) {
      c = Qb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function sf() {
  this.aa = !1;
}
function tf(a, b) {
  return a === b ? !0 : T(a, b) ? !0 : sc.c(a, b);
}
function uf(a, b, c) {
  a = Ba(a);
  a[b] = c;
  return a;
}
function vf(a, b) {
  var c = Array(a.length - 2);
  kd(a, 0, c, 0, 2 * b);
  kd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function wf(a, b, c, d) {
  a = a.lb(b);
  a.h[c] = d;
  return a;
}
function xf(a, b, c) {
  for (var d = a.length, e = 0, g = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var h = a[e + 1];
        c = b.j ? b.j(g, c, h) : b.call(null, g, c, h);
      } else {
        c = a[e + 1], c = null != c ? c.Kb(b, g) : g;
      }
      e += 2;
      g = c;
    } else {
      return g;
    }
  }
}
function yf(a, b, c) {
  this.V = a;
  this.Y = b;
  this.h = c;
}
f = yf.prototype;
f.lb = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = yd(this.Y), c = Array(0 > b ? 4 : 2 * (b + 1));
  kd(this.h, 0, c, 0, 2 * b);
  return new yf(a, this.Y, c);
};
f.Ib = function() {
  var a = this.h;
  return zf ? zf(a) : Af.call(null, a);
};
f.Kb = function(a, b) {
  return xf(this.h, a, b);
};
f.fb = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.Y & e)) {
    return d;
  }
  var g = yd(this.Y & e - 1), e = this.h[2 * g], g = this.h[2 * g + 1];
  return null == e ? g.fb(a + 5, b, c, d) : tf(c, e) ? g : d;
};
f.za = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = yd(this.Y & h - 1);
  if (0 === (this.Y & h)) {
    var l = yd(this.Y);
    if (2 * l < this.h.length) {
      a = this.lb(a);
      b = a.h;
      g.aa = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          --l;
          --c;
          --g;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.Y |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Bf.za(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.Y >>> d & 1) && (k[d] = null != this.h[e] ? Bf.za(a, b + 5, jc(this.h[e]), this.h[e], this.h[e + 1], g) : this.h[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Cf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    kd(this.h, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    kd(this.h, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    g.aa = !0;
    a = this.lb(a);
    a.h = b;
    a.Y |= h;
    return a;
  }
  l = this.h[2 * k];
  h = this.h[2 * k + 1];
  if (null == l) {
    return l = h.za(a, b + 5, c, d, e, g), l === h ? this : wf(this, a, 2 * k + 1, l);
  }
  if (tf(d, l)) {
    return e === h ? this : wf(this, a, 2 * k + 1, e);
  }
  g.aa = !0;
  g = b + 5;
  d = Df ? Df(a, g, l, h, c, d, e) : Ef.call(null, a, g, l, h, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.lb(a);
  a.h[e] = null;
  a.h[k] = d;
  return a;
};
f.ya = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = yd(this.Y & g - 1);
  if (0 === (this.Y & g)) {
    var k = yd(this.Y);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Bf.ya(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.Y >>> c & 1) && (h[c] = null != this.h[d] ? Bf.ya(a + 5, jc(this.h[d]), this.h[d], this.h[d + 1], e) : this.h[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Cf(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    kd(this.h, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    kd(this.h, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.aa = !0;
    return new yf(null, this.Y | g, a);
  }
  var l = this.h[2 * h], g = this.h[2 * h + 1];
  if (null == l) {
    return k = g.ya(a + 5, b, c, d, e), k === g ? this : new yf(null, this.Y, uf(this.h, 2 * h + 1, k));
  }
  if (tf(c, l)) {
    return d === g ? this : new yf(null, this.Y, uf(this.h, 2 * h + 1, d));
  }
  e.aa = !0;
  e = this.Y;
  k = this.h;
  a += 5;
  a = Ff ? Ff(a, l, g, b, c, d) : Ef.call(null, a, l, g, b, c, d);
  c = 2 * h;
  h = 2 * h + 1;
  d = Ba(k);
  d[c] = null;
  d[h] = a;
  return new yf(null, e, d);
};
f.Jb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.Y & d)) {
    return this;
  }
  var e = yd(this.Y & d - 1), g = this.h[2 * e], h = this.h[2 * e + 1];
  return null == g ? (a = h.Jb(a + 5, b, c), a === h ? this : null != a ? new yf(null, this.Y, uf(this.h, 2 * e + 1, a)) : this.Y === d ? null : new yf(null, this.Y ^ d, vf(this.h, e))) : tf(c, g) ? new yf(null, this.Y ^ d, vf(this.h, e)) : this;
};
var Bf = new yf(null, 0, []);
function Cf(a, b, c) {
  this.V = a;
  this.A = b;
  this.h = c;
}
f = Cf.prototype;
f.lb = function(a) {
  return a === this.V ? this : new Cf(a, this.A, Ba(this.h));
};
f.Ib = function() {
  var a = this.h;
  return Gf ? Gf(a) : Hf.call(null, a);
};
f.Kb = function(a, b) {
  for (var c = this.h.length, d = 0, e = b;;) {
    if (d < c) {
      var g = this.h[d];
      null != g && (e = g.Kb(a, e));
      d += 1;
    } else {
      return e;
    }
  }
};
f.fb = function(a, b, c, d) {
  var e = this.h[b >>> a & 31];
  return null != e ? e.fb(a + 5, b, c, d) : d;
};
f.za = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.h[h];
  if (null == k) {
    return a = wf(this, a, h, Bf.za(a, b + 5, c, d, e, g)), a.A += 1, a;
  }
  b = k.za(a, b + 5, c, d, e, g);
  return b === k ? this : wf(this, a, h, b);
};
f.ya = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.h[g];
  if (null == h) {
    return new Cf(null, this.A + 1, uf(this.h, g, Bf.ya(a + 5, b, c, d, e)));
  }
  a = h.ya(a + 5, b, c, d, e);
  return a === h ? this : new Cf(null, this.A, uf(this.h, g, a));
};
f.Jb = function(a, b, c) {
  var d = b >>> a & 31, e = this.h[d];
  if (null != e) {
    a = e.Jb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.A) {
          a: {
            e = this.h;
            a = e.length;
            b = Array(2 * (this.A - 1));
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new yf(null, h, b);
                break a;
              }
            }
          }
        } else {
          d = new Cf(null, this.A - 1, uf(this.h, d, a));
        }
      } else {
        d = new Cf(null, this.A, uf(this.h, d, a));
      }
    }
    return d;
  }
  return this;
};
function If(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (tf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return -1;
    }
  }
}
function Jf(a, b, c, d) {
  this.V = a;
  this.Ya = b;
  this.A = c;
  this.h = d;
}
f = Jf.prototype;
f.lb = function(a) {
  if (a === this.V) {
    return this;
  }
  var b = Array(2 * (this.A + 1));
  kd(this.h, 0, b, 0, 2 * this.A);
  return new Jf(a, this.Ya, this.A, b);
};
f.Ib = function() {
  var a = this.h;
  return zf ? zf(a) : Af.call(null, a);
};
f.Kb = function(a, b) {
  return xf(this.h, a, b);
};
f.fb = function(a, b, c, d) {
  a = If(this.h, this.A, c);
  return 0 > a ? d : tf(c, this.h[a]) ? this.h[a + 1] : d;
};
f.za = function(a, b, c, d, e, g) {
  if (c === this.Ya) {
    b = If(this.h, this.A, d);
    if (-1 === b) {
      if (this.h.length > 2 * this.A) {
        return b = 2 * this.A, c = 2 * this.A + 1, a = this.lb(a), a.h[b] = d, a.h[c] = e, g.aa = !0, a.A += 1, a;
      }
      c = this.h.length;
      b = Array(c + 2);
      kd(this.h, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.aa = !0;
      d = this.A + 1;
      a === this.V ? (this.h = b, this.A = d, a = this) : a = new Jf(this.V, this.Ya, d, b);
      return a;
    }
    return this.h[b + 1] === e ? this : wf(this, a, b + 1, e);
  }
  return (new yf(a, 1 << (this.Ya >>> b & 31), [null, this, null, null])).za(a, b, c, d, e, g);
};
f.ya = function(a, b, c, d, e) {
  return b === this.Ya ? (a = If(this.h, this.A, c), -1 === a ? (a = 2 * this.A, b = Array(a + 2), kd(this.h, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.aa = !0, new Jf(null, this.Ya, this.A + 1, b)) : sc.c(this.h[a], d) ? this : new Jf(null, this.Ya, this.A, uf(this.h, a + 1, d))) : (new yf(null, 1 << (this.Ya >>> a & 31), [null, this])).ya(a, b, c, d, e);
};
f.Jb = function(a, b, c) {
  a = If(this.h, this.A, c);
  return -1 === a ? this : 1 === this.A ? null : new Jf(null, this.Ya, this.A - 1, vf(this.h, xd(a)));
};
function Ef() {
  switch(arguments.length) {
    case 6:
      return Ff(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Df(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Ff(a, b, c, d, e, g) {
  var h = jc(b);
  if (h === d) {
    return new Jf(null, h, 2, [b, c, e, g]);
  }
  var k = new sf;
  return Bf.ya(a, h, b, c, k).ya(a, d, e, g, k);
}
function Df(a, b, c, d, e, g, h) {
  var k = jc(c);
  if (k === e) {
    return new Jf(null, k, 2, [c, d, g, h]);
  }
  var l = new sf;
  return Bf.za(a, b, k, c, d, l).za(a, b, e, g, h, l);
}
function Kf(a, b, c, d, e) {
  this.meta = a;
  this.gb = b;
  this.i = c;
  this.s = d;
  this.v = e;
  this.w = 32374860;
  this.D = 0;
}
f = Kf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return null == this.s ? new V(null, 2, 5, W, [this.gb[this.i], this.gb[this.i + 1]], null) : F(this.s);
};
f.oa = function() {
  if (null == this.s) {
    var a = this.gb, b = this.i + 2;
    return Lf ? Lf(a, b, null) : Af.call(null, a, b, null);
  }
  var a = this.gb, b = this.i, c = I(this.s);
  return Lf ? Lf(a, b, c) : Af.call(null, a, b, c);
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Kf(b, this.gb, this.i, this.s, this.v);
};
f.R = function(a, b) {
  return L(b, this);
};
Kf.prototype[Aa] = function() {
  return uc(this);
};
function Af() {
  switch(arguments.length) {
    case 1:
      return zf(arguments[0]);
    case 3:
      return Lf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function zf(a) {
  return Lf(a, 0, null);
}
function Lf(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Kf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (q(d) && (d = d.Ib(), q(d))) {
          return new Kf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Kf(null, a, b, c, null);
  }
}
function Mf(a, b, c, d, e) {
  this.meta = a;
  this.gb = b;
  this.i = c;
  this.s = d;
  this.v = e;
  this.w = 32374860;
  this.D = 0;
}
f = Mf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.meta;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.meta);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return F(this.s);
};
f.oa = function() {
  var a = this.gb, b = this.i, c = I(this.s);
  return Nf ? Nf(null, a, b, c) : Hf.call(null, null, a, b, c);
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Mf(b, this.gb, this.i, this.s, this.v);
};
f.R = function(a, b) {
  return L(b, this);
};
Mf.prototype[Aa] = function() {
  return uc(this);
};
function Hf() {
  switch(arguments.length) {
    case 1:
      return Gf(arguments[0]);
    case 4:
      return Nf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
}
function Gf(a) {
  return Nf(null, a, 0, null);
}
function Nf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (q(e) && (e = e.Ib(), q(e))) {
          return new Mf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Mf(a, b, c, d, null);
  }
}
function Of(a, b, c, d, e, g) {
  this.meta = a;
  this.A = b;
  this.root = c;
  this.ka = d;
  this.pa = e;
  this.v = g;
  this.w = 16123663;
  this.D = 8196;
}
f = Of.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.keys = function() {
  return uc(mf.f ? mf.f(this) : mf.call(null, this));
};
f.entries = function() {
  return gf(D(this));
};
f.values = function() {
  return uc(nf.f ? nf.f(this) : nf.call(null, this));
};
f.has = function(a) {
  return qd(this, a);
};
f.get = function(a, b) {
  return this.L(null, a, b);
};
f.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.X(null, e), h = O(g, 0), g = O(g, 1);
      a.c ? a.c(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = D(b)) {
        id(b) ? (c = Tb(b), b = Ub(b), h = c, d = N(c), c = h) : (c = F(b), h = O(c, 0), c = g = O(c, 1), a.c ? a.c(c, h) : a.call(null, c, h), b = I(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return null == b ? this.ka ? this.pa : c : null == this.root ? c : this.root.fb(0, jc(b), b, c);
};
f.Ab = function(a, b, c) {
  this.ka && (a = this.pa, c = b.j ? b.j(c, null, a) : b.call(null, c, null, a));
  return null != this.root ? this.root.Kb(b, c) : c;
};
f.M = function() {
  return this.meta;
};
f.S = function() {
  return this.A;
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
f.C = function(a, b) {
  return ef(this, b);
};
f.sb = function() {
  return new Rf({}, this.root, this.A, this.ka, this.pa);
};
f.ea = function() {
  return ub(Xc, this.meta);
};
f.fa = function(a, b) {
  if (null == b) {
    return this.ka ? new Of(this.meta, this.A - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Jb(0, jc(b), b);
  return c === this.root ? this : new Of(this.meta, this.A - 1, c, this.ka, this.pa, null);
};
f.ba = function(a, b, c) {
  if (null == b) {
    return this.ka && c === this.pa ? this : new Of(this.meta, this.ka ? this.A : this.A + 1, this.root, !0, c, null);
  }
  a = new sf;
  b = (null == this.root ? Bf : this.root).ya(0, jc(b), b, c, a);
  return b === this.root ? this : new Of(this.meta, a.aa ? this.A + 1 : this.A, b, this.ka, this.pa, null);
};
f.dc = function(a, b) {
  return null == b ? this.ka : null == this.root ? !1 : this.root.fb(0, jc(b), b, ld) !== ld;
};
f.P = function() {
  if (0 < this.A) {
    var a = null != this.root ? this.root.Ib() : null;
    return this.ka ? L(new V(null, 2, 5, W, [null, this.pa], null), a) : a;
  }
  return null;
};
f.O = function(a, b) {
  return new Of(b, this.A, this.root, this.ka, this.pa, this.v);
};
f.R = function(a, b) {
  if (hd(b)) {
    return bb(this, w.c(b, 0), w.c(b, 1));
  }
  for (var c = this, d = D(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (hd(e)) {
      c = bb(c, w.c(e, 0), w.c(e, 1)), d = I(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.N(null, a);
};
f.c = function(a, b) {
  return this.L(null, a, b);
};
var Xc = new Of(null, 0, null, !1, null, zc);
Of.prototype[Aa] = function() {
  return uc(this);
};
function Rf(a, b, c, d, e) {
  this.V = a;
  this.root = b;
  this.count = c;
  this.ka = d;
  this.pa = e;
  this.w = 258;
  this.D = 56;
}
function Sf(a, b) {
  if (a.V) {
    if (b ? b.w & 2048 || b.Vc || (b.w ? 0 : r(gb, b)) : r(gb, b)) {
      return Tf(a, Bd.f ? Bd.f(b) : Bd.call(null, b), Cd.f ? Cd.f(b) : Cd.call(null, b));
    }
    for (var c = D(b), d = a;;) {
      var e = F(c);
      if (q(e)) {
        var g = e, c = I(c), d = Tf(d, function() {
          var a = g;
          return Bd.f ? Bd.f(a) : Bd.call(null, a);
        }(), function() {
          var a = g;
          return Cd.f ? Cd.f(a) : Cd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Tf(a, b, c) {
  if (a.V) {
    if (null == b) {
      a.pa !== c && (a.pa = c), a.ka || (a.count += 1, a.ka = !0);
    } else {
      var d = new sf;
      b = (null == a.root ? Bf : a.root).za(a.V, 0, jc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.aa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
f = Rf.prototype;
f.S = function() {
  if (this.V) {
    return this.count;
  }
  throw Error("count after persistent!");
};
f.N = function(a, b) {
  return null == b ? this.ka ? this.pa : null : null == this.root ? null : this.root.fb(0, jc(b), b);
};
f.L = function(a, b, c) {
  return null == b ? this.ka ? this.pa : c : null == this.root ? c : this.root.fb(0, jc(b), b, c);
};
f.Fb = function(a, b) {
  return Sf(this, b);
};
f.Gb = function() {
  var a;
  if (this.V) {
    this.V = null, a = new Of(null, this.count, this.root, this.ka, this.pa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.Eb = function(a, b, c) {
  return Tf(this, b, c);
};
var me = function me() {
  return me.B(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
me.B = function(a) {
  for (var b = D(a), c = Nb(Xc);;) {
    if (b) {
      a = I(I(b));
      var d = F(b), b = F(I(b)), c = Qb(c, d, b), b = a;
    } else {
      return Pb(c);
    }
  }
};
me.H = 0;
me.G = function(a) {
  return me.B(D(a));
};
function Uf(a, b) {
  this.la = a;
  this.ma = b;
  this.w = 32374988;
  this.D = 0;
}
f = Uf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.ma;
};
f.na = function() {
  var a = this.la, a = (a ? a.w & 128 || a.Pb || (a.w ? 0 : r(Ya, a)) : r(Ya, a)) ? this.la.na(null) : I(this.la);
  return null == a ? null : new Uf(a, this.ma);
};
f.K = function() {
  return wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.ma);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return this.la.ia(null).hc();
};
f.oa = function() {
  var a = this.la, a = (a ? a.w & 128 || a.Pb || (a.w ? 0 : r(Ya, a)) : r(Ya, a)) ? this.la.na(null) : I(this.la);
  return null != a ? new Uf(a, this.ma) : rc;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Uf(this.la, b);
};
f.R = function(a, b) {
  return L(b, this);
};
Uf.prototype[Aa] = function() {
  return uc(this);
};
function mf(a) {
  return (a = D(a)) ? new Uf(a, null) : null;
}
function Bd(a) {
  return hb(a);
}
function Vf(a, b) {
  this.la = a;
  this.ma = b;
  this.w = 32374988;
  this.D = 0;
}
f = Vf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.M = function() {
  return this.ma;
};
f.na = function() {
  var a = this.la, a = (a ? a.w & 128 || a.Pb || (a.w ? 0 : r(Ya, a)) : r(Ya, a)) ? this.la.na(null) : I(this.la);
  return null == a ? null : new Vf(a, this.ma);
};
f.K = function() {
  return wc(this);
};
f.C = function(a, b) {
  return Lc(this, b);
};
f.ea = function() {
  return Nc(rc, this.ma);
};
f.ga = function(a, b) {
  return Oc(b, this);
};
f.ha = function(a, b, c) {
  return Qc(b, c, this);
};
f.ia = function() {
  return this.la.ia(null).ic();
};
f.oa = function() {
  var a = this.la, a = (a ? a.w & 128 || a.Pb || (a.w ? 0 : r(Ya, a)) : r(Ya, a)) ? this.la.na(null) : I(this.la);
  return null != a ? new Vf(a, this.ma) : rc;
};
f.P = function() {
  return this;
};
f.O = function(a, b) {
  return new Vf(this.la, b);
};
f.R = function(a, b) {
  return L(b, this);
};
Vf.prototype[Aa] = function() {
  return uc(this);
};
function nf(a) {
  return (a = D(a)) ? new Vf(a, null) : null;
}
function Cd(a) {
  return ib(a);
}
var Wf = function Wf() {
  return Wf.B(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Wf.B = function(a) {
  return q(ee(td, a)) ? rd(function(a, c) {
    return Rc.c(q(a) ? a : pf, c);
  }, a) : null;
};
Wf.H = 0;
Wf.G = function(a) {
  return Wf.B(D(a));
};
function Xf(a, b, c) {
  this.meta = a;
  this.vb = b;
  this.v = c;
  this.w = 15077647;
  this.D = 8196;
}
f = Xf.prototype;
f.toString = function() {
  return ac(this);
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.keys = function() {
  return uc(D(this));
};
f.entries = function() {
  var a = D(this);
  return new hf(D(a));
};
f.values = function() {
  return uc(D(this));
};
f.has = function(a) {
  return qd(this, a);
};
f.forEach = function(a) {
  for (var b = D(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.X(null, e), h = O(g, 0), g = O(g, 1);
      a.c ? a.c(g, h) : a.call(null, g, h);
      e += 1;
    } else {
      if (b = D(b)) {
        id(b) ? (c = Tb(b), b = Ub(b), h = c, d = N(c), c = h) : (c = F(b), h = O(c, 0), c = g = O(c, 1), a.c ? a.c(c, h) : a.call(null, c, h), b = I(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return ab(this.vb, b) ? b : c;
};
f.M = function() {
  return this.meta;
};
f.S = function() {
  return Oa(this.vb);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = yc(this);
};
f.C = function(a, b) {
  return ed(b) && N(this) === N(b) && de(function(a) {
    return function(b) {
      return qd(a, b);
    };
  }(this), b);
};
f.sb = function() {
  return new Yf(Nb(this.vb));
};
f.ea = function() {
  return Nc(Zf, this.meta);
};
f.P = function() {
  return mf(this.vb);
};
f.O = function(a, b) {
  return new Xf(b, this.vb, this.v);
};
f.R = function(a, b) {
  return new Xf(this.meta, Q.j(this.vb, b, null), null);
};
f.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.N(null, c);
  };
  a.j = function(a, c, d) {
    return this.L(null, c, d);
  };
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return this.N(null, a);
};
f.c = function(a, b) {
  return this.L(null, a, b);
};
var Zf = new Xf(null, pf, zc);
Xf.prototype[Aa] = function() {
  return uc(this);
};
function Yf(a) {
  this.cb = a;
  this.D = 136;
  this.w = 259;
}
f = Yf.prototype;
f.Fb = function(a, b) {
  this.cb = Qb(this.cb, b, null);
  return this;
};
f.Gb = function() {
  return new Xf(null, Pb(this.cb), null);
};
f.S = function() {
  return N(this.cb);
};
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  return z.j(this.cb, b, ld) === ld ? c : b;
};
f.call = function() {
  function a(a, b, c) {
    return z.j(this.cb, b, ld) === ld ? c : b;
  }
  function b(a, b) {
    return z.j(this.cb, b, ld) === ld ? null : b;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.j = a;
  return c;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ba(b)));
};
f.f = function(a) {
  return z.j(this.cb, a, ld) === ld ? null : a;
};
f.c = function(a, b) {
  return z.j(this.cb, a, ld) === ld ? b : a;
};
function Jd(a) {
  if (a && (a.D & 4096 || a.Ac)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var $f = function $f() {
  switch(arguments.length) {
    case 2:
      return $f.c(arguments[0], arguments[1]);
    case 3:
      return $f.j(arguments[0], arguments[1], arguments[2]);
    default:
      return $f.B(arguments[0], arguments[1], arguments[2], new E(Array.prototype.slice.call(arguments, 3), 0));
  }
};
$f.c = function(a, b) {
  return b;
};
$f.j = function(a, b, c) {
  return (a.f ? a.f(b) : a.call(null, b)) < (a.f ? a.f(c) : a.call(null, c)) ? b : c;
};
$f.B = function(a, b, c, d) {
  return Ia(function(b, c) {
    return $f.j(a, b, c);
  }, $f.j(a, b, c), d);
};
$f.G = function(a) {
  var b = F(a), c = I(a);
  a = F(c);
  var d = I(c), c = F(d), d = I(d);
  return $f.B(b, a, c, d);
};
$f.H = 3;
function X(a, b, c, d, e, g, h) {
  var k = ma;
  ma = null == ma ? null : ma - 1;
  try {
    if (null != ma && 0 > ma) {
      return Gb(a, "#");
    }
    Gb(a, c);
    if (0 === ua.f(g)) {
      D(h) && Gb(a, function() {
        var a = ag.f(g);
        return q(a) ? a : "...";
      }());
    } else {
      if (D(h)) {
        var l = F(h);
        b.j ? b.j(l, a, g) : b.call(null, l, a, g);
      }
      for (var n = I(h), t = ua.f(g) - 1;;) {
        if (!n || null != t && 0 === t) {
          D(n) && 0 === t && (Gb(a, d), Gb(a, function() {
            var a = ag.f(g);
            return q(a) ? a : "...";
          }()));
          break;
        } else {
          Gb(a, d);
          var A = F(n);
          c = a;
          h = g;
          b.j ? b.j(A, c, h) : b.call(null, A, c, h);
          var x = I(n);
          c = t - 1;
          n = x;
          t = c;
        }
      }
    }
    return Gb(a, e);
  } finally {
    ma = k;
  }
}
function bg(a, b) {
  for (var c = D(b), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.X(null, g);
      Gb(a, h);
      g += 1;
    } else {
      if (c = D(c)) {
        d = c, id(d) ? (c = Tb(d), e = Ub(d), d = c, h = N(c), c = e, e = h) : (h = F(d), Gb(a, h), c = I(d), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
var cg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function dg(a) {
  return [v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return cg[a];
  })), v('"')].join("");
}
function eg(a, b, c) {
  if (null == a) {
    return Gb(b, "nil");
  }
  if (void 0 === a) {
    return Gb(b, "#\x3cundefined\x3e");
  }
  if (q(function() {
    var b = Vc(c, sa);
    return q(b) ? (b = a ? a.w & 131072 || a.Wc ? !0 : a.w ? !1 : r(rb, a) : r(rb, a)) ? ad(a) : b : b;
  }())) {
    Gb(b, "^");
    var d = ad(a);
    Y.j ? Y.j(d, b, c) : Y.call(null, d, b, c);
    Gb(b, " ");
  }
  return null == a ? Gb(b, "nil") : a.Wb ? a.qc(a, b, c) : a && (a.w & 2147483648 || a.ca) ? a.J(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? Gb(b, "" + v(a)) : null != a && a.constructor === Object ? (Gb(b, "#js "), d = qe.c(function(b) {
    return new V(null, 2, 5, W, [Id.f(b), a[b]], null);
  }, jd(a)), fg.I ? fg.I(d, Y, b, c) : fg.call(null, d, Y, b, c)) : xa(a) ? X(b, Y, "#js [", " ", "]", c, a) : q("string" == typeof a) ? q(ra.f(c)) ? Gb(b, dg(a)) : Gb(b, a) : Yc(a) ? bg(b, M(["#\x3c", "" + v(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + v(a);;) {
      if (N(c) < b) {
        c = [v("0"), v(c)].join("");
      } else {
        return c;
      }
    }
  }, bg(b, M(['#inst "', "" + v(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : q(a instanceof RegExp) ? bg(b, M(['#"', a.source, '"'], 0)) : (a ? a.w & 2147483648 || a.ca || (a.w ? 0 : r(Ib, a)) : r(Ib, a)) ? Jb(a, b, c) : bg(b, M(["#\x3c", "" + v(a), "\x3e"], 0));
}
function Y(a, b, c) {
  var d = gg.f(c);
  return q(d) ? (c = Q.j(c, hg, eg), d.j ? d.j(a, b, c) : d.call(null, a, b, c)) : eg(a, b, c);
}
function pe() {
  return ig(0 < arguments.length ? new E(Array.prototype.slice.call(arguments, 0), 0) : null);
}
function ig(a) {
  var b = pa();
  if (bd(a)) {
    b = "";
  } else {
    var c = v, d = new ka;
    a: {
      var e = new $b(d);
      Y(F(a), e, b);
      a = D(I(a));
      for (var g = null, h = 0, k = 0;;) {
        if (k < h) {
          var l = g.X(null, k);
          Gb(e, " ");
          Y(l, e, b);
          k += 1;
        } else {
          if (a = D(a)) {
            g = a, id(g) ? (a = Tb(g), h = Ub(g), g = a, l = N(a), a = h, h = l) : (l = F(g), Gb(e, " "), Y(l, e, b), a = I(g), g = null, h = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    b = "" + c(d);
  }
  return b;
}
function fg(a, b, c, d) {
  return X(c, function(a, c, d) {
    var k = hb(a);
    b.j ? b.j(k, c, d) : b.call(null, k, c, d);
    Gb(c, " ");
    a = ib(a);
    return b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, D(a));
}
E.prototype.ca = !0;
E.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Kd.prototype.ca = !0;
Kd.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Kf.prototype.ca = !0;
Kf.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
kf.prototype.ca = !0;
kf.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Ve.prototype.ca = !0;
Ve.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Hd.prototype.ca = !0;
Hd.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Kc.prototype.ca = !0;
Kc.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Of.prototype.ca = !0;
Of.prototype.J = function(a, b, c) {
  return fg(this, Y, b, c);
};
Mf.prototype.ca = !0;
Mf.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Ze.prototype.ca = !0;
Ze.prototype.J = function(a, b, c) {
  return X(b, Y, "[", " ", "]", c, this);
};
Xf.prototype.ca = !0;
Xf.prototype.J = function(a, b, c) {
  return X(b, Y, "#{", " ", "}", c, this);
};
Pd.prototype.ca = !0;
Pd.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
je.prototype.ca = !0;
je.prototype.J = function(a, b, c) {
  Gb(b, "#\x3cAtom: ");
  Y(this.state, b, c);
  return Gb(b, "\x3e");
};
Vf.prototype.ca = !0;
Vf.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
V.prototype.ca = !0;
V.prototype.J = function(a, b, c) {
  return X(b, Y, "[", " ", "]", c, this);
};
Ed.prototype.ca = !0;
Ed.prototype.J = function(a, b) {
  return Gb(b, "()");
};
p.prototype.ca = !0;
p.prototype.J = function(a, b, c) {
  return fg(this, Y, b, c);
};
Uf.prototype.ca = !0;
Uf.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
Dd.prototype.ca = !0;
Dd.prototype.J = function(a, b, c) {
  return X(b, Y, "(", " ", ")", c, this);
};
var oc = null, jg = {}, kg = function kg(b) {
  if (b ? b.Sc : b) {
    return b.Sc(b);
  }
  var c;
  c = kg[m(null == b ? null : b)];
  if (!c && (c = kg._, !c)) {
    throw u("IEncodeJS.-clj-\x3ejs", b);
  }
  return c.call(null, b);
};
function lg(a) {
  return (a ? q(q(null) ? null : a.Rc) || (a.rc ? 0 : r(jg, a)) : r(jg, a)) ? kg(a) : "string" === typeof a || "number" === typeof a || a instanceof S || a instanceof B ? mg.f ? mg.f(a) : mg.call(null, a) : ig(M([a], 0));
}
var mg = function mg(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.Rc) || (b.rc ? 0 : r(jg, b)) : r(jg, b)) {
    return kg(b);
  }
  if (b instanceof S) {
    return Jd(b);
  }
  if (b instanceof B) {
    return "" + v(b);
  }
  if (gd(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.X(null, g), k = O(h, 0), h = O(h, 1);
        c[lg(k)] = mg(h);
        g += 1;
      } else {
        if (b = D(b)) {
          id(b) ? (e = Tb(b), b = Ub(b), d = e, e = N(e)) : (e = F(b), d = O(e, 0), e = O(e, 1), c[lg(d)] = mg(e), b = I(b), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (dd(b)) {
    c = [];
    b = D(qe.c(mg, b));
    d = null;
    for (g = e = 0;;) {
      if (g < e) {
        k = d.X(null, g), c.push(k), g += 1;
      } else {
        if (b = D(b)) {
          d = b, id(d) ? (b = Tb(d), g = Ub(d), d = b, e = N(b), b = g) : (b = F(d), c.push(b), b = I(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return b;
};
function ng(a, b) {
  this.uuid = a;
  this.v = b;
  this.w = 2153775104;
  this.D = 2048;
}
f = ng.prototype;
f.toString = function() {
  return this.uuid;
};
f.equiv = function(a) {
  return this.C(null, a);
};
f.C = function(a, b) {
  return b instanceof ng && this.uuid === b.uuid;
};
f.J = function(a, b) {
  return Gb(b, [v('#uuid "'), v(this.uuid), v('"')].join(""));
};
f.K = function() {
  if (null == this.v) {
    for (var a = this.uuid, b = 0, c = 0;c < a.length;++c) {
      b = 31 * b + a.charCodeAt(c), b %= 4294967296;
    }
    this.v = b;
  }
  return this.v;
};
function og(a) {
  return new ng(a, null);
}
function pg() {
  function a() {
    return Math.floor(15 * Math.random()).toString(16);
  }
  var b = (8 | 3 & Math.floor(14 * Math.random())).toString(16);
  return og([v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v("-"), v(a()), v(a()), v(a()), v(a()), v("-"), v("4"), v(a()), v(a()), v(a()), v("-"), v(b), v(a()), v(a()), v(a()), v("-"), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a()), v(a())].join(""));
}
;var qg = new S(null, "y", "y", -1757859776), rg = new S(null, "animations", "animations", 140711296), sg = new S(null, "movement", "movement", 1777030977), tg = new S(null, "on-set", "on-set", -140953470), ug = new S(null, "re-frame-factory-name", "re-frame-factory-name", -1205706462), vg = new S(null, "group", "group", 582596132), sa = new S(null, "meta", "meta", 1499536964), wg = new S(null, "animation", "animation", -1248293244), xg = new S(null, "stage", "stage", 1843544772), yg = new S(null, 
"color", "color", 1011675173), zg = new S(null, "movement-speed", "movement-speed", -1779674971), ta = new S(null, "dup", "dup", 556298533), Ag = new S(null, "dead", "dead", -1946604091), Bg = new S(null, "key", "key", -1516042587), Cg = new S(null, "standing", "standing", -1248340762), Dg = new S(null, "last-attack-frame", "last-attack-frame", 658442790), Eg = new S(null, "derefed", "derefed", 590684583), Fg = new S(null, "displayName", "displayName", -809144601), ne = new S(null, "validator", "validator", 
-1966190681), Gg = new S(null, "redo", "redo", 501190664), Hg = new S(null, "cljsRender", "cljsRender", 247449928), Ig = new S(null, "finally-block", "finally-block", 832982472), Jg = new S(null, "warn", "warn", -436710552), Kg = new S(null, "max-hp", "max-hp", -1065196696), Z = new S(null, "name", "name", 1843675177), Lg = new S(null, "frames", "frames", 1765687497), Mg = new S(null, "neutral", "neutral", -1941956087), Ng = new S(null, "margin-left", "margin-left", 2015598377), Og = new S(null, 
"tile-width", "tile-width", -1131996343), Pg = new S(null, "alive", "alive", 1424929930), Qg = new S(null, "renderable", "renderable", -1247325782), Rg = new S(null, "width", "width", -384071477), Sg = new S(null, "background", "background", -863952629), Tg = new S(null, "facing", "facing", -854439413), Ug = new S(null, "component-did-update", "component-did-update", -1468549173), Vg = new S(null, "entities", "entities", 1940967403), Wg = new S(null, "recur", "recur", -437573268), Xg = new S(null, 
"attacker", "attacker", 48869964), Yg = new S(null, "catch-block", "catch-block", 1175212748), Zg = new S(null, "current-frame", "current-frame", 323239981), hg = new S(null, "fallback-impl", "fallback-impl", -1501286995), qa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), $g = new S(null, "componentWillUnmount", "componentWillUnmount", 1573788814), ah = new S(null, "angle", "angle", 1622094254), bh = new S(null, "default-sprite", "default-sprite", 1435097678), ch = new S(null, 
"renderer", "renderer", 336841071), eh = new S(null, "size", "size", 1098693007), fh = new S(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), gh = new S(null, "flush-dom", "flush-dom", -933676816), hh = new S(null, "style", "style", -496642736), ih = new S(null, "sprite", "sprite", 172516848), jh = new S(null, "div", "div", 1057191632), ra = new S(null, "readably", "readably", 1129599760), kh = new S(null, "new-game", "new-game", 167241648), ag = new S(null, "more-marker", "more-marker", 
-14717935), lh = new S(null, "reagentRender", "reagentRender", -358306383), mh = new S(null, "render", "render", -1408033454), nh = new S(null, "damage", "damage", 970520018), oh = new S(null, "undo", "undo", -1818036302), ph = new S(null, "reagent-render", "reagent-render", -985383853), ua = new S(null, "print-length", "print-length", 1931866356), qh = new S(null, "id", "id", -1388402092), rh = new S(null, "hp-color", "hp-color", -2010496268), sh = new S(null, "catch-exception", "catch-exception", 
-1997306795), th = new S(null, "auto-run", "auto-run", 1958400437), uh = new S(null, "cljsName", "cljsName", 999824949), vh = new S(null, "graphics", "graphics", -2079995979), wh = new S(null, "component-will-unmount", "component-will-unmount", -2058314698), xh = new S(null, "prev", "prev", -1597069226), yh = new S(null, "sequence", "sequence", 926807414), zh = new S(null, "current-sprite", "current-sprite", -778927658), Ah = new S(null, "identifier", "identifier", -805503498), Bh = new S(null, "continue-block", 
"continue-block", -1852047850), Ch = new S(null, "display-name", "display-name", 694513143), Dh = new S(null, "right", "right", -452581833), Eh = new S(null, "undos?", "undos?", -1094259081), Fh = new S(null, "position", "position", -2011731912), Gh = new S(null, "on-dispose", "on-dispose", 2105306360), Hh = new S(null, "point", "point", 1813198264), Ih = new S(null, "error", "error", -978969032), Jh = new S(null, "moving", "moving", 1760797240), Kh = new S(null, "purge-redos", "purge-redos", 1815721624), 
Lh = new S(null, "componentFunction", "componentFunction", 825866104), Mh = new S(null, "attack-range", "attack-range", 519031033), Nh = new S(null, "x", "x", 2099068185), Oh = new S(null, "anchor", "anchor", 1549638489), Ph = new S(null, "hp", "hp", -1541237831), Qh = new S(null, "target", "target", 253001721), Rh = new S(null, "margin-right", "margin-right", 809689658), Sh = new S(null, "frame-count", "frame-count", 1616946810), Th = new S(null, "groupEnd", "groupEnd", -337721382), Uh = new S(null, 
"undo-explanations", "undo-explanations", 942251259), Vh = new S(null, "redo-explanations", "redo-explanations", -1933832741), gg = new S(null, "alt-impl", "alt-impl", 670969595), Wh = new S(null, "attack-speed", "attack-speed", -393485413), Xh = new S(null, "current-animation", "current-animation", 90875932), Yh = new S(null, "log", "log", -1595516004), Zh = new S(null, "velocity", "velocity", -581524355), $h = new S(null, "health-bar", "health-bar", -570979971), ai = new S(null, "componentWillMount", 
"componentWillMount", -285327619), bi = new S(null, "attackable", "attackable", 2099301245), ci = new S(null, "tile-height", "tile-height", -905667651), di = new S(null, "next-tick", "next-tick", -2141530914), ei = new S(null, "redos?", "redos?", 1340247550), fi = new S(null, "animating", "animating", -109443106), gi = new S(null, "height", "height", 1025178622), hi = new S(null, "left", "left", -399115937), ii = new S(null, "attacking", "attacking", 492336639);
function ji(a, b, c, d, e) {
  this.name = a;
  this.nb = b;
  this.o = c;
  this.l = d;
  this.v = e;
  this.w = 2229667594;
  this.D = 8192;
}
f = ji.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "point":
      return this.nb;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Hh, this.nb], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 2 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 2, [Z, null, Hh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new ji(this.name, this.nb, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new ji(c, this.nb, this.o, this.l, null) : q(T.c ? T.c(Hh, b) : T.call(null, Hh, b)) ? new ji(this.name, c, this.o, this.l, null) : new ji(this.name, this.nb, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Hh, this.nb], null)], null), this.l));
};
f.O = function(a, b) {
  return new ji(this.name, this.nb, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function ki(a) {
  return new ji(Fh, a, null, null, null);
}
function li(a, b, c, d, e, g, h, k) {
  this.name = a;
  this.Fa = b;
  this.Ea = c;
  this.anchor = d;
  this.size = e;
  this.o = g;
  this.l = h;
  this.v = k;
  this.w = 2229667594;
  this.D = 8192;
}
f = li.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "default-sprite":
      return this.Fa;
    case "current-sprite":
      return this.Ea;
    case "anchor":
      return this.anchor;
    case "size":
      return this.size;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, U.c(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [bh, this.Fa], null), new V(null, 2, 5, W, [zh, this.Ea], null), new V(null, 2, 5, W, [Oh, this.anchor], null), new V(null, 2, 5, W, [eh, this.size], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 5 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 5, [Z, null, bh, null, eh, null, zh, null, Oh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new li(this.name, this.Fa, this.Ea, this.anchor, this.size, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new li(c, this.Fa, this.Ea, this.anchor, this.size, this.o, this.l, null) : q(T.c ? T.c(bh, b) : T.call(null, bh, b)) ? new li(this.name, c, this.Ea, this.anchor, this.size, this.o, this.l, null) : q(T.c ? T.c(zh, b) : T.call(null, zh, b)) ? new li(this.name, this.Fa, c, this.anchor, this.size, this.o, this.l, null) : q(T.c ? T.c(Oh, b) : T.call(null, Oh, b)) ? new li(this.name, this.Fa, this.Ea, c, this.size, this.o, this.l, null) : q(T.c ? T.c(eh, 
  b) : T.call(null, eh, b)) ? new li(this.name, this.Fa, this.Ea, this.anchor, c, this.o, this.l, null) : new li(this.name, this.Fa, this.Ea, this.anchor, this.size, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [bh, this.Fa], null), new V(null, 2, 5, W, [zh, this.Ea], null), new V(null, 2, 5, W, [Oh, this.anchor], null), new V(null, 2, 5, W, [eh, this.size], null)], null), this.l));
};
f.O = function(a, b) {
  return new li(this.name, this.Fa, this.Ea, this.anchor, this.size, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function mi(a, b, c) {
  return new li(Qg, a, b, ni, c, null, null, null);
}
function oi(a, b, c, d, e) {
  this.name = a;
  this.sprite = b;
  this.o = c;
  this.l = d;
  this.v = e;
  this.w = 2229667594;
  this.D = 8192;
}
f = oi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "sprite":
      return this.sprite;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [ih, this.sprite], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 2 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 2, [Z, null, ih, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new oi(this.name, this.sprite, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new oi(c, this.sprite, this.o, this.l, null) : q(T.c ? T.c(ih, b) : T.call(null, ih, b)) ? new oi(this.name, c, this.o, this.l, null) : new oi(this.name, this.sprite, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [ih, this.sprite], null)], null), this.l));
};
f.O = function(a, b) {
  return new oi(this.name, this.sprite, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function pi(a, b, c, d, e, g, h, k, l) {
  this.name = a;
  this.ua = b;
  this.va = c;
  this.xa = d;
  this.target = e;
  this.Aa = g;
  this.o = h;
  this.l = k;
  this.v = l;
  this.w = 2229667594;
  this.D = 8192;
}
f = pi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "attack-range":
      return this.ua;
    case "attack-speed":
      return this.va;
    case "damage":
      return this.xa;
    case "target":
      return this.target;
    case "last-attack-frame":
      return this.Aa;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, U.c(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Mh, this.ua], null), new V(null, 2, 5, W, [Wh, this.va], null), new V(null, 2, 5, W, [nh, this.xa], null), new V(null, 2, 5, W, [Qh, this.target], null), new V(null, 2, 5, W, [Dg, this.Aa], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 6 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 6, [Dg, null, Z, null, nh, null, Mh, null, Qh, null, Wh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new pi(this.name, this.ua, this.va, this.xa, this.target, this.Aa, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new pi(c, this.ua, this.va, this.xa, this.target, this.Aa, this.o, this.l, null) : q(T.c ? T.c(Mh, b) : T.call(null, Mh, b)) ? new pi(this.name, c, this.va, this.xa, this.target, this.Aa, this.o, this.l, null) : q(T.c ? T.c(Wh, b) : T.call(null, Wh, b)) ? new pi(this.name, this.ua, c, this.xa, this.target, this.Aa, this.o, this.l, null) : q(T.c ? T.c(nh, b) : T.call(null, nh, b)) ? new pi(this.name, this.ua, this.va, c, this.target, this.Aa, this.o, 
  this.l, null) : q(T.c ? T.c(Qh, b) : T.call(null, Qh, b)) ? new pi(this.name, this.ua, this.va, this.xa, c, this.Aa, this.o, this.l, null) : q(T.c ? T.c(Dg, b) : T.call(null, Dg, b)) ? new pi(this.name, this.ua, this.va, this.xa, this.target, c, this.o, this.l, null) : new pi(this.name, this.ua, this.va, this.xa, this.target, this.Aa, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 6, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Mh, this.ua], null), new V(null, 2, 5, W, [Wh, this.va], null), new V(null, 2, 5, W, [nh, this.xa], null), new V(null, 2, 5, W, [Qh, this.target], null), new V(null, 2, 5, W, [Dg, this.Aa], null)], null), this.l));
};
f.O = function(a, b) {
  return new pi(this.name, this.ua, this.va, this.xa, this.target, this.Aa, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function qi(a, b, c, d, e) {
  return new pi(Xg, a, b, c, d, e, null, null, null);
}
function ri(a, b, c, d, e) {
  this.name = a;
  this.mb = b;
  this.o = c;
  this.l = d;
  this.v = e;
  this.w = 2229667594;
  this.D = 8192;
}
f = ri.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "hp":
      return this.mb;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Ph, this.mb], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 2 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 2, [Z, null, Ph, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new ri(this.name, this.mb, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new ri(c, this.mb, this.o, this.l, null) : q(T.c ? T.c(Ph, b) : T.call(null, Ph, b)) ? new ri(this.name, c, this.o, this.l, null) : new ri(this.name, this.mb, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Ph, this.mb], null)], null), this.l));
};
f.O = function(a, b) {
  return new ri(this.name, this.mb, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function si(a, b, c, d, e) {
  this.name = a;
  this.pb = b;
  this.o = c;
  this.l = d;
  this.v = e;
  this.w = 2229667594;
  this.D = 8192;
}
f = si.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "velocity":
      return this.pb;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Zh, this.pb], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 2 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 2, [Z, null, Zh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new si(this.name, this.pb, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new si(c, this.pb, this.o, this.l, null) : q(T.c ? T.c(Zh, b) : T.call(null, Zh, b)) ? new si(this.name, c, this.o, this.l, null) : new si(this.name, this.pb, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [Zh, this.pb], null)], null), this.l));
};
f.O = function(a, b) {
  return new si(this.name, this.pb, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function ti(a) {
  return new si(sg, a, null, null, null);
}
function ui(a, b, c, d, e) {
  this.name = a;
  this.jb = b;
  this.o = c;
  this.l = d;
  this.v = e;
  this.w = 2229667594;
  this.D = 8192;
}
f = ui.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "angle":
      return this.jb;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [ah, this.jb], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 2 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 2, [Z, null, ah, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new ui(this.name, this.jb, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new ui(c, this.jb, this.o, this.l, null) : q(T.c ? T.c(ah, b) : T.call(null, ah, b)) ? new ui(this.name, c, this.o, this.l, null) : new ui(this.name, this.jb, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 2, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [ah, this.jb], null)], null), this.l));
};
f.O = function(a, b) {
  return new ui(this.name, this.jb, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function vi(a, b, c, d, e, g, h) {
  this.name = a;
  this.Ja = b;
  this.Za = c;
  this.$a = d;
  this.o = e;
  this.l = g;
  this.v = h;
  this.w = 2229667594;
  this.D = 8192;
}
f = vi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "animations":
      return this.Ja;
    case "current-animation":
      return this.Za;
    case "current-frame":
      return this.$a;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, U.c(new V(null, 4, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [rg, this.Ja], null), new V(null, 2, 5, W, [Xh, this.Za], null), new V(null, 2, 5, W, [Zg, this.$a], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 4 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 4, [rg, null, Z, null, Zg, null, Xh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new vi(this.name, this.Ja, this.Za, this.$a, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new vi(c, this.Ja, this.Za, this.$a, this.o, this.l, null) : q(T.c ? T.c(rg, b) : T.call(null, rg, b)) ? new vi(this.name, c, this.Za, this.$a, this.o, this.l, null) : q(T.c ? T.c(Xh, b) : T.call(null, Xh, b)) ? new vi(this.name, this.Ja, c, this.$a, this.o, this.l, null) : q(T.c ? T.c(Zg, b) : T.call(null, Zg, b)) ? new vi(this.name, this.Ja, this.Za, c, this.o, this.l, null) : new vi(this.name, this.Ja, this.Za, this.$a, this.o, Q.j(this.l, b, 
  c), null);
};
f.P = function() {
  return D(U.c(new V(null, 4, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [rg, this.Ja], null), new V(null, 2, 5, W, [Xh, this.Za], null), new V(null, 2, 5, W, [Zg, this.$a], null)], null), this.l));
};
f.O = function(a, b) {
  return new vi(this.name, this.Ja, this.Za, this.$a, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function wi(a, b, c, d, e, g, h) {
  this.name = a;
  this.graphics = b;
  this.color = c;
  this.ab = d;
  this.o = e;
  this.l = g;
  this.v = h;
  this.w = 2229667594;
  this.D = 8192;
}
f = wi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    case "graphics":
      return this.graphics;
    case "color":
      return this.color;
    case "max-hp":
      return this.ab;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Health-bar{", ", ", "}", c, U.c(new V(null, 4, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [vh, this.graphics], null), new V(null, 2, 5, W, [yg, this.color], null), new V(null, 2, 5, W, [Kg, this.ab], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 4 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 4, [yg, null, Kg, null, Z, null, vh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new wi(this.name, this.graphics, this.color, this.ab, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new wi(c, this.graphics, this.color, this.ab, this.o, this.l, null) : q(T.c ? T.c(vh, b) : T.call(null, vh, b)) ? new wi(this.name, c, this.color, this.ab, this.o, this.l, null) : q(T.c ? T.c(yg, b) : T.call(null, yg, b)) ? new wi(this.name, this.graphics, c, this.ab, this.o, this.l, null) : q(T.c ? T.c(Kg, b) : T.call(null, Kg, b)) ? new wi(this.name, this.graphics, this.color, c, this.o, this.l, null) : new wi(this.name, this.graphics, this.color, 
  this.ab, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 4, 5, W, [new V(null, 2, 5, W, [Z, this.name], null), new V(null, 2, 5, W, [vh, this.graphics], null), new V(null, 2, 5, W, [yg, this.color], null), new V(null, 2, 5, W, [Kg, this.ab], null)], null), this.l));
};
f.O = function(a, b) {
  return new wi(this.name, this.graphics, this.color, this.ab, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function xi(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = xi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Attacking{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new xi(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new xi(c, this.o, this.l, null) : new xi(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new xi(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function yi() {
  return new xi(ii, null, null, null);
}
function zi(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = zi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Animating{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new zi(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new zi(c, this.o, this.l, null) : new zi(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new zi(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function Ai() {
  return new zi(fi, null, null, null);
}
function Bi(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = Bi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Alive{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new Bi(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new Bi(c, this.o, this.l, null) : new Bi(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new Bi(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function Ci() {
  return new Bi(Pg, null, null, null);
}
function Di(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = Di.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Dead{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new Di(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new Di(c, this.o, this.l, null) : new Di(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new Di(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function Ei(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = Ei.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Moving{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new Ei(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new Ei(c, this.o, this.l, null) : new Ei(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new Ei(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function Fi() {
  return new Ei(Jh, null, null, null);
}
function Gi(a, b, c, d) {
  this.name = a;
  this.o = b;
  this.l = c;
  this.v = d;
  this.w = 2229667594;
  this.D = 8192;
}
f = Gi.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "name":
      return this.name;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#clash-attack-sim.component.Standing{", ", ", "}", c, U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 1 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 1, [Z, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new Gi(this.name, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Z, b) : T.call(null, Z, b)) ? new Gi(c, this.o, this.l, null) : new Gi(this.name, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 1, 5, W, [new V(null, 2, 5, W, [Z, this.name], null)], null), this.l));
};
f.O = function(a, b) {
  return new Gi(this.name, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function Hi() {
  return new Gi(Cg, null, null, null);
}
;function Ii(a, b) {
  return qd(a, b);
}
function Ki(a, b) {
  return Q.j(a, Z.f(b), b);
}
function Li(a, b) {
  return Ia(function(a, b) {
    return R.c(a, Z.f(b));
  }, a, b);
}
function Mi(a, b) {
  return Ia(function(a, b) {
    return Q.j(a, Z.f(b), b);
  }, a, b);
}
function Ni(a) {
  a = Ia(function(a, c) {
    return Q.j(a, Z.f(c), c);
  }, pf, a);
  return qd(a, Ah) ? a : Ki(a, new p(null, 2, [Z, Ah, qh, "" + v(pg())], null));
}
var Oi = function Oi() {
  return Oi.B(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Oi.B = function(a, b) {
  var c = nf(Vg.f(a));
  return se(function() {
    return function(a) {
      return de(ie.c(Ii, a), b);
    };
  }(c), c);
};
Oi.H = 1;
Oi.G = function(a) {
  var b = F(a);
  a = I(a);
  return Oi.B(b, a);
};
function Pi(a, b) {
  var c = function() {
    var b = Vg.f(a);
    return q(b) ? b : pf;
  }();
  return Q.j(a, Vg, Ia(function() {
    return function(a, b) {
      return Q.j(a, xe(b, new V(null, 2, 5, W, [Ah, qh], null)), b);
    };
  }(c), c, b));
}
function Qi(a) {
  return xe(a, new V(null, 2, 5, W, [Fh, Hh], null));
}
function Ri(a) {
  return xe(a, new V(null, 2, 5, W, [Xg, Qh], null));
}
function Si(a) {
  return xe(a, new V(null, 2, 5, W, [sg, Zh], null));
}
function Ti(a) {
  return xe(a, new V(null, 2, 5, W, [Xg, Mh], null));
}
function Ui(a) {
  return xe(a, new V(null, 2, 5, W, [Xg, Wh], null));
}
function Vi(a) {
  return xe(a, new V(null, 2, 5, W, [Xg, nh], null));
}
function Wi(a) {
  return xe(a, new V(null, 2, 5, W, [bi, Ph], null));
}
function Xi(a) {
  return xe(a, new V(null, 2, 5, W, [Xg, Dg], null));
}
function Yi(a) {
  var b = xe(a, new V(null, 1, 5, W, [wg], null));
  a = rg.f(b);
  b = Xh.f(b);
  return b.f ? b.f(a) : b.call(null, a);
}
function Zi(a, b) {
  return se(function(b) {
    return sc.c(Ri(b), a);
  }, b);
}
function $i(a) {
  return xe(a, new V(null, 2, 5, W, [Qg, zh], null)).getBounds();
}
;function aj(a, b) {
  return Pi(a, function() {
    return function d(a) {
      return new Kd(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (id(b)) {
              var h = Tb(b), k = N(h), l = Od(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = w.c(h, a), d = l, e = Ri(b), g = Qi(e), e = O(g, 0), g = O(g, 1), n = Qi(b), H = O(n, 0), n = O(n, 1), b = Ki(b, new ui(Tg, Math.atan2(g - n, e - H), null, null, null));
                    d.add(b);
                    a += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? Rd(l.W(), d(Ub(b))) : Rd(l.W(), null);
            }
            var n = F(b);
            return L(function() {
              var a = Ri(n), b = Qi(a), a = O(b, 0), b = O(b, 1), d = Qi(n), e = O(d, 0), d = O(d, 1);
              return Ki(n, new ui(Tg, Math.atan2(b - d, a - e), null, null, null));
            }(), d(qc(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;var bj;
a: {
  var cj = aa.navigator;
  if (cj) {
    var dj = cj.userAgent;
    if (dj) {
      bj = dj;
      break a;
    }
  }
  bj = "";
}
;var ej, fj = function fj(b, c, d) {
  if (b ? b.pc : b) {
    return b.pc(0, c, d);
  }
  var e;
  e = fj[m(null == b ? null : b)];
  if (!e && (e = fj._, !e)) {
    throw u("WritePort.put!", b);
  }
  return e.call(null, b, c, d);
}, gj = function gj(b) {
  if (b ? b.Ub : b) {
    return b.Ub();
  }
  var c;
  c = gj[m(null == b ? null : b)];
  if (!c && (c = gj._, !c)) {
    throw u("Channel.close!", b);
  }
  return c.call(null, b);
}, hj = function hj(b) {
  if (b ? b.Fc : b) {
    return !0;
  }
  var c;
  c = hj[m(null == b ? null : b)];
  if (!c && (c = hj._, !c)) {
    throw u("Handler.active?", b);
  }
  return c.call(null, b);
}, ij = function ij(b) {
  if (b ? b.Gc : b) {
    return b.ja;
  }
  var c;
  c = ij[m(null == b ? null : b)];
  if (!c && (c = ij._, !c)) {
    throw u("Handler.commit", b);
  }
  return c.call(null, b);
}, jj = function jj(b, c) {
  if (b ? b.Ec : b) {
    return b.Ec(0, c);
  }
  var d;
  d = jj[m(null == b ? null : b)];
  if (!d && (d = jj._, !d)) {
    throw u("Buffer.add!*", b);
  }
  return d.call(null, b, c);
}, kj = function kj() {
  switch(arguments.length) {
    case 1:
      return kj.f(arguments[0]);
    case 2:
      return kj.c(arguments[0], arguments[1]);
    default:
      throw Error([v("Invalid arity: "), v(arguments.length)].join(""));;
  }
};
kj.f = function(a) {
  return a;
};
kj.c = function(a, b) {
  if (null == b) {
    throw Error([v("Assert failed: "), v(ig(M([Gd(new B(null, "not", "not", 1044554643, null), Gd(new B(null, "nil?", "nil?", 1612038930, null), new B(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
  }
  return jj(a, b);
};
kj.H = 2;
var lj, mj = function mj(b) {
  "undefined" === typeof lj && (lj = function(b, d, e) {
    this.sc = b;
    this.ja = d;
    this.Zc = e;
    this.w = 393216;
    this.D = 0;
  }, lj.prototype.O = function(b, d) {
    return new lj(this.sc, this.ja, d);
  }, lj.prototype.M = function() {
    return this.Zc;
  }, lj.prototype.Fc = function() {
    return !0;
  }, lj.prototype.Gc = function() {
    return this.ja;
  }, lj.Hc = function() {
    return new V(null, 3, 5, W, [new B(null, "fn-handler", "fn-handler", 648785851, null), new B(null, "f", "f", 43394975, null), new B(null, "meta18870", "meta18870", -1882133341, null)], null);
  }, lj.Wb = !0, lj.Vb = "cljs.core.async.impl.ioc-helpers/t18869", lj.qc = function(b, d) {
    return Gb(d, "cljs.core.async.impl.ioc-helpers/t18869");
  });
  return new lj(mj, b, pf);
};
function nj(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    throw b instanceof Object && a[6].Ub(), b;
  }
}
function oj(a, b, c) {
  c = pj(c, mj(function(c) {
    a[2] = c;
    a[1] = b;
    return nj(a);
  }));
  return q(c) ? (a[2] = J.f ? J.f(c) : J.call(null, c), a[1] = b, Wg) : null;
}
function qj(a, b) {
  var c = a[6];
  null != b && c.pc(0, b, mj(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Ub();
  return c;
}
function rj(a, b, c, d, e, g, h, k) {
  this.Ba = a;
  this.Ca = b;
  this.Ga = c;
  this.Da = d;
  this.Ia = e;
  this.o = g;
  this.l = h;
  this.v = k;
  this.w = 2229667594;
  this.D = 8192;
}
f = rj.prototype;
f.N = function(a, b) {
  return z.j(this, b, null);
};
f.L = function(a, b, c) {
  switch(b instanceof S ? b.Z : null) {
    case "catch-block":
      return this.Ba;
    case "catch-exception":
      return this.Ca;
    case "finally-block":
      return this.Ga;
    case "continue-block":
      return this.Da;
    case "prev":
      return this.Ia;
    default:
      return Wc(this.l, b, c);
  }
};
f.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "#cljs.core.async.impl.ioc-helpers.ExceptionFrame{", ", ", "}", c, U.c(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Yg, this.Ba], null), new V(null, 2, 5, W, [sh, this.Ca], null), new V(null, 2, 5, W, [Ig, this.Ga], null), new V(null, 2, 5, W, [Bh, this.Da], null), new V(null, 2, 5, W, [xh, this.Ia], null)], null), this.l));
};
f.M = function() {
  return this.o;
};
f.S = function() {
  return 5 + N(this.l);
};
f.K = function() {
  var a = this.v;
  return null != a ? a : this.v = a = Ad(this);
};
f.C = function(a, b) {
  var c;
  c = q(b) ? (c = this.constructor === b.constructor) ? ef(this, b) : c : b;
  return q(c) ? !0 : !1;
};
f.fa = function(a, b) {
  return qd(new Xf(null, new p(null, 5, [Ig, null, Yg, null, sh, null, xh, null, Bh, null], null), null), b) ? R.c(Nc(we.c(pf, this), this.o), b) : new rj(this.Ba, this.Ca, this.Ga, this.Da, this.Ia, this.o, ce(R.c(this.l, b)), null);
};
f.ba = function(a, b, c) {
  return q(T.c ? T.c(Yg, b) : T.call(null, Yg, b)) ? new rj(c, this.Ca, this.Ga, this.Da, this.Ia, this.o, this.l, null) : q(T.c ? T.c(sh, b) : T.call(null, sh, b)) ? new rj(this.Ba, c, this.Ga, this.Da, this.Ia, this.o, this.l, null) : q(T.c ? T.c(Ig, b) : T.call(null, Ig, b)) ? new rj(this.Ba, this.Ca, c, this.Da, this.Ia, this.o, this.l, null) : q(T.c ? T.c(Bh, b) : T.call(null, Bh, b)) ? new rj(this.Ba, this.Ca, this.Ga, c, this.Ia, this.o, this.l, null) : q(T.c ? T.c(xh, b) : T.call(null, xh, 
  b)) ? new rj(this.Ba, this.Ca, this.Ga, this.Da, c, this.o, this.l, null) : new rj(this.Ba, this.Ca, this.Ga, this.Da, this.Ia, this.o, Q.j(this.l, b, c), null);
};
f.P = function() {
  return D(U.c(new V(null, 5, 5, W, [new V(null, 2, 5, W, [Yg, this.Ba], null), new V(null, 2, 5, W, [sh, this.Ca], null), new V(null, 2, 5, W, [Ig, this.Ga], null), new V(null, 2, 5, W, [Bh, this.Da], null), new V(null, 2, 5, W, [xh, this.Ia], null)], null), this.l));
};
f.O = function(a, b) {
  return new rj(this.Ba, this.Ca, this.Ga, this.Da, this.Ia, b, this.l, this.v);
};
f.R = function(a, b) {
  return hd(b) ? bb(this, w.c(b, 0), w.c(b, 1)) : Ia(Ra, this, b);
};
function sj(a) {
  for (;;) {
    var b = a[4], c = Yg.f(b), d = sh.f(b), e = a[5];
    if (q(function() {
      var a = e;
      return q(a) ? ya(b) : a;
    }())) {
      throw e;
    }
    if (q(function() {
      var a = e;
      return q(a) ? (a = c, q(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Q.B(b, Yg, null, M([sh, null], 0));
      break;
    }
    if (q(function() {
      var a = e;
      return q(a) ? ya(c) && ya(Ig.f(b)) : a;
    }())) {
      a[4] = xh.f(b);
    } else {
      if (q(function() {
        var a = e;
        return q(a) ? (a = ya(c)) ? Ig.f(b) : a : a;
      }())) {
        a[1] = Ig.f(b);
        a[4] = Q.j(b, Ig, null);
        break;
      }
      if (q(function() {
        var a = ya(e);
        return a ? Ig.f(b) : a;
      }())) {
        a[1] = Ig.f(b);
        a[4] = Q.j(b, Ig, null);
        break;
      }
      if (ya(e) && ya(Ig.f(b))) {
        a[1] = Bh.f(b);
        a[4] = xh.f(b);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;var tj;
function uj() {
  var a = aa.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == bj.indexOf("Presto") && (a = function() {
    var a = document.createElement("IFRAME");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ha(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && -1 == bj.indexOf("Edge") && -1 == bj.indexOf("Trident") && -1 == bj.indexOf("MSIE")) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (void 0 !== c.next) {
        c = c.next;
        var a = c.wc;
        c.wc = null;
        a();
      }
    };
    return function(a) {
      d.next = {wc:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
    var b = document.createElement("SCRIPT");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    aa.setTimeout(a, 0);
  };
}
;function vj(a, b, c, d, e) {
  for (var g = 0;;) {
    if (g < e) {
      c[d + g] = a[b + g], g += 1;
    } else {
      break;
    }
  }
}
function wj(a, b, c, d) {
  this.head = a;
  this.U = b;
  this.length = c;
  this.h = d;
}
wj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.h[this.U];
  this.h[this.U] = null;
  this.U = (this.U + 1) % this.h.length;
  --this.length;
  return a;
};
wj.prototype.unshift = function(a) {
  this.h[this.head] = a;
  this.head = (this.head + 1) % this.h.length;
  this.length += 1;
  return null;
};
function xj(a, b) {
  a.length + 1 === a.h.length && a.resize();
  a.unshift(b);
}
wj.prototype.resize = function() {
  var a = Array(2 * this.h.length);
  return this.U < this.head ? (vj(this.h, this.U, a, 0, this.length), this.U = 0, this.head = this.length, this.h = a) : this.U > this.head ? (vj(this.h, this.U, a, 0, this.h.length - this.U), vj(this.h, 0, a, this.h.length - this.U, this.head), this.U = 0, this.head = this.length, this.h = a) : this.U === this.head ? (this.head = this.U = 0, this.h = a) : null;
};
function yj(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop(), g;
      g = e;
      g = b.f ? b.f(g) : b.call(null, g);
      q(g) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function zj(a) {
  if (!(0 < a)) {
    throw Error([v("Assert failed: "), v("Can't create a ring buffer of size 0"), v("\n"), v(ig(M([Gd(new B(null, "\x3e", "\x3e", 1085014381, null), new B(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new wj(0, 0, 0, Array(a));
}
function Aj(a, b) {
  this.T = a;
  this.n = b;
  this.w = 2;
  this.D = 0;
}
function Bj(a) {
  return a.T.length === a.n;
}
Aj.prototype.Ec = function(a, b) {
  xj(this.T, b);
  return this;
};
Aj.prototype.S = function() {
  return this.T.length;
};
var Cj = "undefined" !== typeof window && null != window.document, Dj = new Xf(null, new p(null, 2, ["aria", null, "data", null], null), null);
function Ej(a) {
  return 2 > N(a) ? a.toUpperCase() : [v(a.substring(0, 1).toUpperCase()), v(a.substring(1))].join("");
}
function Fj(a) {
  if ("string" === typeof a) {
    return a;
  }
  a = Jd(a);
  var b, c = /-/, c = sc.c("" + v(c), "/(?:)/") ? Rc.c(Te(L("", qe.c(v, D(a)))), "") : Te(("" + v(a)).split(c));
  if (sc.c(0, 0)) {
    a: {
      for (;;) {
        if (sc.c("", null == c ? null : kb(c))) {
          c = null == c ? null : lb(c);
        } else {
          break a;
        }
      }
    }
  }
  b = c;
  c = O(b, 0);
  b = zd(b);
  return q(Dj.f ? Dj.f(c) : Dj.call(null, c)) ? a : Zd(v, c, qe.c(Ej, b));
}
var Gj = !1;
if ("undefined" === typeof Hj) {
  var Hj = le ? le(pf) : ke.call(null, pf)
}
function Ij(a, b) {
  try {
    var c = Gj;
    Gj = !0;
    try {
      return React.render(a.F ? a.F() : a.call(null), b, function() {
        return function() {
          var c = Gj;
          Gj = !1;
          try {
            return nc.I(Hj, Q, b, new V(null, 2, 5, W, [a, b], null)), null;
          } finally {
            Gj = c;
          }
        };
      }(c));
    } finally {
      Gj = c;
    }
  } catch (d) {
    if (d instanceof Object) {
      try {
        React.unmountComponentAtNode(b);
      } catch (e) {
        if (e instanceof Object) {
          "undefined" !== typeof console && console.warn([v("Warning: "), v("Error unmounting:")].join("")), "undefined" !== typeof console && console.log(e);
        } else {
          throw e;
        }
      }
    }
    throw d;
  }
}
function Jj(a, b) {
  return Ij(a, b);
}
;var Kj;
if ("undefined" === typeof Lj) {
  var Lj = !1
}
if ("undefined" === typeof Mj) {
  var Mj = le ? le(0) : ke.call(null, 0)
}
function Nj(a, b) {
  b.Xb = null;
  var c = Kj;
  Kj = b;
  try {
    return a.F ? a.F() : a.call(null);
  } finally {
    Kj = c;
  }
}
function Oj(a) {
  var b = a.Xb;
  a.Xb = null;
  return b;
}
function Pj(a) {
  var b = Kj;
  if (null != b) {
    var c = b.Xb;
    b.Xb = Rc.c(null == c ? Zf : c, a);
  }
}
var Qj = {};
function Rj(a, b, c, d) {
  this.state = a;
  this.meta = b;
  this.xb = c;
  this.da = d;
  this.w = 2153938944;
  this.D = 114690;
}
f = Rj.prototype;
f.Lc = !0;
f.J = function(a, b, c) {
  Gb(b, "#\x3cAtom: ");
  Y(this.state, b, c);
  return Gb(b, "\x3e");
};
f.M = function() {
  return this.meta;
};
f.K = function() {
  return ba(this);
};
f.C = function(a, b) {
  return this === b;
};
f.jc = function(a, b) {
  if (null != this.xb && !q(this.xb.f ? this.xb.f(b) : this.xb.call(null, b))) {
    throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(ig(M([Gd(new B(null, "validator", "validator", -325659154, null), new B(null, "new-value", "new-value", -1567397401, null))], 0)))].join(""));
  }
  var c = this.state;
  this.state = b;
  null != this.da && Kb(this, c, b);
  return b;
};
f.kc = function(a, b) {
  var c;
  c = this.state;
  c = b.f ? b.f(c) : b.call(null, c);
  return Xb(this, c);
};
f.lc = function(a, b, c) {
  a = this.state;
  b = b.c ? b.c(a, c) : b.call(null, a, c);
  return Xb(this, b);
};
f.mc = function(a, b, c, d) {
  a = this.state;
  b = b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  return Xb(this, b);
};
f.nc = function(a, b, c, d, e) {
  return Xb(this, ae(b, this.state, c, d, e));
};
f.Sb = function(a, b, c) {
  return sd(function(a) {
    return function(e, g, h) {
      h.I ? h.I(g, a, b, c) : h.call(null, g, a, b, c);
      return null;
    };
  }(this), null, this.da);
};
f.Rb = function(a, b, c) {
  return this.da = Q.j(this.da, b, c);
};
f.Tb = function(a, b) {
  return this.da = R.c(this.da, b);
};
f.zb = function() {
  Pj(this);
  return this.state;
};
var Sj = function Sj() {
  switch(arguments.length) {
    case 1:
      return Sj.f(arguments[0]);
    default:
      return Sj.B(arguments[0], new E(Array.prototype.slice.call(arguments, 1), 0));
  }
};
Sj.f = function(a) {
  return new Rj(a, null, null, null);
};
Sj.B = function(a, b) {
  var c = nd(b) ? Yd(me, b) : b, d = Vc(c, sa), c = Vc(c, ne);
  return new Rj(a, d, c, null);
};
Sj.G = function(a) {
  var b = F(a);
  a = I(a);
  return Sj.B(b, a);
};
Sj.H = 1;
var Tj = function Tj(b) {
  if (b ? b.Kc : b) {
    return b.Kc();
  }
  var c;
  c = Tj[m(null == b ? null : b)];
  if (!c && (c = Tj._, !c)) {
    throw u("IDisposable.dispose!", b);
  }
  return c.call(null, b);
}, Uj = function Uj(b) {
  if (b ? b.Mc : b) {
    return b.Mc();
  }
  var c;
  c = Uj[m(null == b ? null : b)];
  if (!c && (c = Uj._, !c)) {
    throw u("IRunnable.run", b);
  }
  return c.call(null, b);
}, Vj = function Vj(b, c) {
  if (b ? b.uc : b) {
    return b.uc(0, c);
  }
  var d;
  d = Vj[m(null == b ? null : b)];
  if (!d && (d = Vj._, !d)) {
    throw u("IComputedImpl.-update-watching", b);
  }
  return d.call(null, b, c);
}, Wj = function Wj(b, c, d, e) {
  if (b ? b.Ic : b) {
    return b.Ic(0, 0, d, e);
  }
  var g;
  g = Wj[m(null == b ? null : b)];
  if (!g && (g = Wj._, !g)) {
    throw u("IComputedImpl.-handle-change", b);
  }
  return g.call(null, b, c, d, e);
}, Xj = function Xj(b) {
  if (b ? b.Jc : b) {
    return b.Jc();
  }
  var c;
  c = Xj[m(null == b ? null : b)];
  if (!c && (c = Xj._, !c)) {
    throw u("IComputedImpl.-peek-at", b);
  }
  return c.call(null, b);
};
function Yj(a, b, c, d, e, g, h, k, l) {
  this.ja = a;
  this.state = b;
  this.eb = c;
  this.yb = d;
  this.qb = e;
  this.da = g;
  this.cc = h;
  this.ac = k;
  this.$b = l;
  this.w = 2153807872;
  this.D = 114690;
}
f = Yj.prototype;
f.Ic = function(a, b, c, d) {
  var e = this;
  return q(function() {
    var a = e.yb;
    return q(a) ? ya(e.eb) && c !== d : a;
  }()) ? (e.eb = !0, function() {
    var a = e.cc;
    return q(a) ? a : Uj;
  }().call(null, this)) : null;
};
f.uc = function(a, b) {
  for (var c = D(b), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.X(null, g);
      qd(this.qb, h) || Lb(h, this, Wj);
      g += 1;
    } else {
      if (c = D(c)) {
        d = c, id(d) ? (c = Tb(d), g = Ub(d), d = c, e = N(c), c = g) : (c = F(d), qd(this.qb, c) || Lb(c, this, Wj), c = I(d), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
  c = D(this.qb);
  d = null;
  for (g = e = 0;;) {
    if (g < e) {
      h = d.X(null, g), qd(b, h) || Mb(h, this), g += 1;
    } else {
      if (c = D(c)) {
        d = c, id(d) ? (c = Tb(d), g = Ub(d), d = c, e = N(c), c = g) : (c = F(d), qd(b, c) || Mb(c, this), c = I(d), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
  return this.qb = b;
};
f.Jc = function() {
  if (ya(this.eb)) {
    return this.state;
  }
  var a = Kj;
  Kj = null;
  try {
    return pb(this);
  } finally {
    Kj = a;
  }
};
f.Lc = !0;
f.J = function(a, b, c) {
  Gb(b, [v("#\x3cReaction "), v(jc(this)), v(": ")].join(""));
  Y(this.state, b, c);
  return Gb(b, "\x3e");
};
f.K = function() {
  return ba(this);
};
f.C = function(a, b) {
  return this === b;
};
f.Kc = function() {
  for (var a = D(this.qb), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.X(null, d);
      Mb(e, this);
      d += 1;
    } else {
      if (a = D(a)) {
        b = a, id(b) ? (a = Tb(b), d = Ub(b), b = a, c = N(a), a = d) : (a = F(b), Mb(a, this), a = I(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  this.state = this.qb = null;
  this.eb = !0;
  q(this.yb) && (q(Lj) && nc.c(Mj, vd), this.yb = !1);
  return q(this.$b) ? this.$b.F ? this.$b.F() : this.$b.call(null) : null;
};
f.jc = function(a, b) {
  var c = this.state;
  this.state = b;
  q(this.ac) && (this.eb = !0, this.ac.c ? this.ac.c(c, b) : this.ac.call(null, c, b));
  Kb(this, c, b);
  return b;
};
f.kc = function(a, b) {
  var c;
  c = Xj(this);
  c = b.f ? b.f(c) : b.call(null, c);
  return Xb(this, c);
};
f.lc = function(a, b, c) {
  a = Xj(this);
  b = b.c ? b.c(a, c) : b.call(null, a, c);
  return Xb(this, b);
};
f.mc = function(a, b, c, d) {
  a = Xj(this);
  b = b.j ? b.j(a, c, d) : b.call(null, a, c, d);
  return Xb(this, b);
};
f.nc = function(a, b, c, d, e) {
  return Xb(this, ae(b, Xj(this), c, d, e));
};
f.Mc = function() {
  var a = this.state, b = Nj(this.ja, this), c = Oj(this);
  !sc.c(c, this.qb) && Vj(this, c);
  q(this.yb) || (q(Lj) && nc.c(Mj, pc), this.yb = !0);
  this.eb = !1;
  this.state = b;
  Kb(this, a, this.state);
  return b;
};
f.Sb = function(a, b, c) {
  return sd(function(a) {
    return function(e, g, h) {
      h.I ? h.I(g, a, b, c) : h.call(null, g, a, b, c);
      return null;
    };
  }(this), null, this.da);
};
f.Rb = function(a, b, c) {
  return this.da = Q.j(this.da, b, c);
};
f.Tb = function(a, b) {
  this.da = R.c(this.da, b);
  return bd(this.da) && ya(this.cc) ? Tj(this) : null;
};
f.zb = function() {
  var a = this.cc;
  if (q(q(a) ? a : null != Kj)) {
    return Pj(this), q(this.eb) ? Uj(this) : this.state;
  }
  q(this.eb) && (a = this.state, this.state = this.ja.F ? this.ja.F() : this.ja.call(null), a !== this.state && Kb(this, a, this.state));
  return this.state;
};
function Zj() {
  return ak(arguments[0], 1 < arguments.length ? new E(Array.prototype.slice.call(arguments, 1), 0) : null);
}
function ak(a, b) {
  var c = nd(b) ? Yd(me, b) : b, d = Vc(c, th), e = Vc(c, tg), g = Vc(c, Gh), c = Vc(c, Eg), d = sc.c(d, !0) ? Uj : d, h = null != c, e = new Yj(a, null, !h, h, null, null, d, e, g);
  null != c && (q(Lj) && nc.c(Mj, pc), e.uc(0, c));
  return e;
}
;if ("undefined" === typeof bk) {
  var bk = 0
}
function ck(a) {
  return setTimeout(a, 16);
}
var dk = ya(Cj) ? ck : function() {
  var a = window, b = a.requestAnimationFrame;
  if (q(b)) {
    return b;
  }
  b = a.webkitRequestAnimationFrame;
  if (q(b)) {
    return b;
  }
  b = a.mozRequestAnimationFrame;
  if (q(b)) {
    return b;
  }
  a = a.msRequestAnimationFrame;
  return q(a) ? a : ck;
}();
function ek(a, b) {
  return a.cljsMountOrder - b.cljsMountOrder;
}
function fk() {
  var a = gk;
  if (q(a.vc)) {
    return null;
  }
  a.vc = !0;
  a = function(a) {
    return function() {
      return hk(a);
    };
  }(a);
  return dk.f ? dk.f(a) : dk.call(null, a);
}
function hk(a) {
  var b = a.queue, c = a.bc;
  a.queue = [];
  a.bc = [];
  a.vc = !1;
  a: {
    b.sort(ek);
    a = b.length;
    for (var d = 0;;) {
      if (d < a) {
        var e = b[d];
        q(e.cljsIsDirty) && e.forceUpdate();
        d += 1;
      } else {
        break a;
      }
    }
  }
  a: {
    for (b = c.length, a = 0;;) {
      if (a < b) {
        c[a].call(null), a += 1;
      } else {
        break a;
      }
    }
  }
  return null;
}
var gk = new function() {
  this.queue = [];
  this.vc = !1;
  this.bc = [];
};
function ik(a) {
  gk.bc.push(a);
  fk();
}
function jk(a) {
  a = null == a ? null : a.props;
  return null == a ? null : a.argv;
}
function kk(a, b) {
  if (!q(jk(a))) {
    throw Error([v("Assert failed: "), v(ig(M([Gd(new B(null, "is-reagent-component", "is-reagent-component", -1856228005, null), new B(null, "c", "c", -122660552, null))], 0)))].join(""));
  }
  a.cljsIsDirty = !1;
  var c = a.cljsRatom;
  if (null == c) {
    var d = Nj(b, a), e = Oj(a);
    null != e && (a.cljsRatom = ak(b, M([th, function() {
      return function() {
        a.cljsIsDirty = !0;
        gk.queue.push(a);
        return fk();
      };
    }(d, e, c), Eg, e], 0)));
    return d;
  }
  return Uj(c);
}
;var lk, mk = function mk(b) {
  var c = lk;
  lk = b;
  try {
    var d = b.cljsRender;
    if (!pd(d)) {
      throw Error([v("Assert failed: "), v(ig(M([Gd(new B(null, "ifn?", "ifn?", -2106461064, null), new B(null, "f", "f", 43394975, null))], 0)))].join(""));
    }
    var e = b.props, g = null == b.reagentRender ? d.f ? d.f(b) : d.call(null, b) : function() {
      var b = e.argv;
      switch(N(b)) {
        case 1:
          return d.F ? d.F() : d.call(null);
        case 2:
          return b = Uc(b, 1), d.f ? d.f(b) : d.call(null, b);
        case 3:
          var c = Uc(b, 1), b = Uc(b, 2);
          return d.c ? d.c(c, b) : d.call(null, c, b);
        case 4:
          var c = Uc(b, 1), g = Uc(b, 2), b = Uc(b, 3);
          return d.j ? d.j(c, g, b) : d.call(null, c, g, b);
        case 5:
          var c = Uc(b, 1), g = Uc(b, 2), n = Uc(b, 3), b = Uc(b, 4);
          return d.I ? d.I(c, g, n, b) : d.call(null, c, g, n, b);
        default:
          return Yd(d, We(b, 1, N(b)));
      }
    }();
    return hd(g) ? nk(g) : pd(g) ? (b.cljsRender = g, mk(b)) : g;
  } finally {
    lk = c;
  }
}, ok = new p(null, 1, [mh, function() {
  return ya(void 0) ? kk(this, function(a) {
    return function() {
      return mk(a);
    };
  }(this)) : mk(this);
}], null);
function pk(a, b) {
  var c = a instanceof S ? a.Z : null;
  switch(c) {
    case "getDefaultProps":
      throw Error([v("Assert failed: "), v("getDefaultProps not supported yet"), v("\n"), v(ig(M([!1], 0)))].join(""));;
    case "getInitialState":
      return function() {
        return function() {
          var a;
          a = this.cljsState;
          a = null != a ? a : this.cljsState = Sj.f(null);
          var c = b.f ? b.f(this) : b.call(null, this);
          return oe.c ? oe.c(a, c) : oe.call(null, a, c);
        };
      }(c);
    case "componentWillReceiveProps":
      return function() {
        return function(a) {
          a = a.argv;
          return b.c ? b.c(this, a) : b.call(null, this, a);
        };
      }(c);
    case "shouldComponentUpdate":
      return function() {
        return function(a) {
          var c = Gj;
          if (q(c)) {
            return c;
          }
          c = this.props.argv;
          a = a.argv;
          return null == b ? null == c || null == a || !sc.c(c, a) : b.j ? b.j(this, c, a) : b.call(null, this, c, a);
        };
      }(c);
    case "componentWillUpdate":
      return function() {
        return function(a) {
          a = a.argv;
          return b.c ? b.c(this, a) : b.call(null, this, a);
        };
      }(c);
    case "componentDidUpdate":
      return function() {
        return function(a) {
          a = a.argv;
          return b.c ? b.c(this, a) : b.call(null, this, a);
        };
      }(c);
    case "componentWillMount":
      return function() {
        return function() {
          this.cljsMountOrder = bk += 1;
          return null == b ? null : b.f ? b.f(this) : b.call(null, this);
        };
      }(c);
    case "componentWillUnmount":
      return function() {
        return function() {
          var a = this.cljsRatom;
          null == a || Tj(a);
          this.cljsIsDirty = !1;
          return null == b ? null : b.f ? b.f(this) : b.call(null, this);
        };
      }(c);
    default:
      return null;
  }
}
function qk(a) {
  return pd(a) ? function() {
    function b(b) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, g = Array(arguments.length - 0);c < g.length;) {
          g[c] = arguments[c + 0], ++c;
        }
        c = new E(g, 0);
      }
      return Zd(a, this, c);
    }
    function c(b) {
      return Zd(a, this, b);
    }
    b.H = 0;
    b.G = function(a) {
      a = D(a);
      return c(a);
    };
    b.B = c;
    return b;
  }() : a;
}
var rk = new Xf(null, new p(null, 4, [Hg, null, lh, null, mh, null, uh, null], null), null);
function sk(a, b, c) {
  if (q(rk.f ? rk.f(a) : rk.call(null, a))) {
    return Yc(b) && (b.__reactDontBind = !0), b;
  }
  var d = pk(a, b);
  if (q(q(d) ? b : d) && !pd(b)) {
    throw Error([v("Assert failed: "), v([v("Expected function in "), v(c), v(a), v(" but got "), v(b)].join("")), v("\n"), v(ig(M([Gd(new B(null, "ifn?", "ifn?", -2106461064, null), new B(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  return q(d) ? d : qk(b);
}
var tk = new p(null, 3, [fh, null, ai, null, $g, null], null), uk = function(a) {
  return function(b) {
    return function(c) {
      var d = Vc(J.f ? J.f(b) : J.call(null, b), c);
      if (null != d) {
        return d;
      }
      d = a.f ? a.f(c) : a.call(null, c);
      nc.I(b, Q, c, d);
      return d;
    };
  }(le ? le(pf) : ke.call(null, pf));
}(Fj);
function vk(a) {
  return sd(function(a, c, d) {
    return Q.j(a, Id.f(uk.f ? uk.f(c) : uk.call(null, c)), d);
  }, pf, a);
}
function wk(a) {
  return Wf.B(M([tk, a], 0));
}
function xk(a, b, c) {
  a = Q.B(a, Hg, b, M([mh, mh.f(ok)], 0));
  return Q.j(a, uh, function() {
    return function() {
      return c;
    };
  }(a));
}
function yk(a) {
  var b = function() {
    var b = Yc(a);
    return b ? (b = a.displayName, q(b) ? b : a.name) : b;
  }();
  if (q(b)) {
    return b;
  }
  b = function() {
    var b = a ? a.D & 4096 || a.Ac ? !0 : !1 : !1;
    return b ? Jd(a) : b;
  }();
  if (q(b)) {
    return b;
  }
  b = ad(a);
  return gd(b) ? Z.f(b) : null;
}
function zk(a) {
  var b = function() {
    var b = Lh.f(a);
    return null == b ? a : R.c(Q.j(a, lh, b), Lh);
  }(), c = function() {
    var a = lh.f(b);
    return q(a) ? a : mh.f(b);
  }();
  if (!pd(c)) {
    throw Error([v("Assert failed: "), v([v("Render must be a function, not "), v(ig(M([c], 0)))].join("")), v("\n"), v(ig(M([Gd(new B(null, "ifn?", "ifn?", -2106461064, null), new B(null, "render-fun", "render-fun", -1209513086, null))], 0)))].join(""));
  }
  var d = null, e = "" + v(function() {
    var a = Fg.f(b);
    return q(a) ? a : yk(c);
  }()), g;
  if (bd(e)) {
    g = v;
    var h;
    null == oc && (oc = le ? le(0) : ke.call(null, 0));
    h = mc();
    g = "" + g(h);
  } else {
    g = e;
  }
  h = xk(Q.j(b, Fg, g), c, g);
  return sd(function(a, b, c, d, e) {
    return function(a, b, c) {
      return Q.j(a, b, sk(b, c, e));
    };
  }(b, c, d, e, g, h), pf, h);
}
function Ak(a) {
  return sd(function(a, c, d) {
    a[Jd(c)] = d;
    return a;
  }, {}, a);
}
function Bk(a) {
  if (!gd(a)) {
    throw Error([v("Assert failed: "), v(ig(M([Gd(new B(null, "map?", "map?", -1780568534, null), new B(null, "body", "body", -408674142, null))], 0)))].join(""));
  }
  var b = Ak(zk(wk(vk(a))));
  a = React.createClass(b);
  b = function(a, b) {
    return function() {
      function a(b) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new E(e, 0);
        }
        return c.call(this, d);
      }
      function c(a) {
        a = Zd(Ue, b, a);
        return nk(a);
      }
      a.H = 0;
      a.G = function(a) {
        a = D(a);
        return c(a);
      };
      a.B = c;
      return a;
    }();
  }(b, a);
  b.cljsReactClass = a;
  a.cljsReactClass = a;
  return b;
}
function Ck() {
  var a;
  a = lk;
  a = null == a ? null : a.cljsName();
  return bd(a) ? "" : [v(" (in "), v(a), v(")")].join("");
}
;var Dk = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function Ek(a) {
  return a instanceof S || a instanceof B;
}
function Fk(a) {
  var b = Ek(a);
  return q(b) ? b : "string" === typeof a;
}
var Gk = {"class":"className", "for":"htmlFor", charset:"charSet"};
function Hk(a, b) {
  return q(a.hasOwnProperty(b)) ? a[b] : null;
}
var Ik = function Ik(b) {
  return "string" === typeof b || "number" === typeof b || Yc(b) ? b : q(Ek(b)) ? Jd(b) : gd(b) ? sd(function(b, d, e) {
    if (q(Ek(d))) {
      var g = Hk(Gk, Jd(d));
      d = null == g ? Gk[Jd(d)] = Fj(d) : g;
    }
    b[d] = Ik(e);
    return b;
  }, {}, b) : dd(b) ? mg(b) : pd(b) ? function() {
    function c(b) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, h = Array(arguments.length - 0);c < h.length;) {
          h[c] = arguments[c + 0], ++c;
        }
        c = new E(h, 0);
      }
      return d.call(this, c);
    }
    function d(c) {
      return Yd(b, c);
    }
    c.H = 0;
    c.G = function(b) {
      b = D(b);
      return d(b);
    };
    c.B = d;
    return c;
  }() : mg(b);
};
function Jk(a) {
  var b = a.cljsInputValue;
  if (null == b) {
    return null;
  }
  a.cljsInputDirty = !1;
  a = a.getDOMNode();
  return sc.c(b, a.value) ? null : a.value = b;
}
function Kk(a, b, c) {
  b = b.f ? b.f(c) : b.call(null, c);
  q(a.cljsInputDirty) || (a.cljsInputDirty = !0, ik(function() {
    return function() {
      return Jk(a);
    };
  }(b)));
  return b;
}
function Lk(a) {
  var b = lk;
  if (q(function() {
    var b = a.hasOwnProperty("onChange");
    return q(b) ? a.hasOwnProperty("value") : b;
  }())) {
    var c = a.value, d = null == c ? "" : c, e = a.onChange;
    b.cljsInputValue = d;
    delete a.value;
    a.defaultValue = d;
    a.onChange = function(a, c, d, e) {
      return function(a) {
        return Kk(b, e, a);
      };
    }(a, c, d, e);
  } else {
    b.cljsInputValue = null;
  }
}
var Mk = null, Ok = new p(null, 4, [Ch, "ReagentInput", Ug, Jk, wh, function(a) {
  return a.cljsInputValue = null;
}, ph, function(a, b, c, d) {
  Lk(c);
  return Nk.I ? Nk.I(a, b, c, d) : Nk.call(null, a, b, c, d);
}], null);
function Pk(a, b, c, d) {
  null == Mk && (Mk = Bk(Ok));
  return Mk.I ? Mk.I(a, b, c, d) : Mk.call(null, a, b, c, d);
}
function Qk(a) {
  return gd(a) ? Vc(a, Bg) : null;
}
function Rk(a) {
  var b;
  b = ad(a);
  b = null == b ? null : Qk(b);
  return null == b ? Qk(O(a, 1)) : b;
}
var Sk = {};
function nk(a) {
  if ("string" !== typeof a) {
    if (hd(a)) {
      if (!(0 < N(a))) {
        throw Error([v("Assert failed: "), v([v("Hiccup form should not be empty: "), v(ig(M([a], 0))), v(Ck())].join("")), v("\n"), v(ig(M([Gd(new B(null, "pos?", "pos?", -244377722, null), Gd(new B(null, "count", "count", -514511684, null), new B(null, "v", "v", 1661996586, null)))], 0)))].join(""));
      }
      var b = Uc(a, 0), c;
      c = Fk(b);
      c = q(c) ? c : pd(b) || !1;
      if (!q(c)) {
        throw Error([v("Assert failed: "), v([v("Invalid Hiccup form: "), v(ig(M([a], 0))), v(Ck())].join("")), v("\n"), v(ig(M([Gd(new B(null, "valid-tag?", "valid-tag?", 1243064160, null), new B(null, "tag", "tag", 350170304, null))], 0)))].join(""));
      }
      var d;
      if (q(Fk(b))) {
        c = Hk(Sk, Jd(b));
        if (null == c) {
          c = Jd(b);
          var e;
          e = Jd(b);
          if ("string" === typeof e) {
            var g = Dk.exec(e);
            e = sc.c(F(g), e) ? 1 === N(g) ? F(g) : Te(g) : null;
          } else {
            throw new TypeError("re-matches must match against a string.");
          }
          d = I(e);
          e = O(d, 0);
          g = O(d, 1);
          d = O(d, 2);
          if (q(d)) {
            var h = /\./;
            if ("string" === typeof h) {
              d = d.replace(new RegExp(String(h).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ");
            } else {
              if (h instanceof RegExp) {
                d = d.replace(new RegExp(h.source, "g"), " ");
              } else {
                throw [v("Invalid match arg: "), v(h)].join("");
              }
            }
          } else {
            d = null;
          }
          if (!q(e)) {
            throw Error([v("Assert failed: "), v([v("Invalid tag: '"), v(b), v("'"), v(Ck())].join("")), v("\n"), v(ig(M([new B(null, "tag", "tag", 350170304, null)], 0)))].join(""));
          }
          c = Sk[c] = {name:e, id:g, className:d};
        }
        d = c;
      } else {
        d = null;
      }
      if (q(d)) {
        c = d.name;
        g = O(a, 1);
        e = null == g || gd(g);
        h = e ? g : null;
        g = d.id;
        d = d.className;
        var k = null == g && null == d;
        k && bd(h) ? g = null : (h = Ik(h), k || (h = null == h ? {} : h, null != g && null == h.id && (h.id = g), null != d && (g = h.className, h.className = null != g ? [v(d), v(" "), v(g)].join("") : d)), g = h);
        e = e ? 2 : 1;
        q("input" === c || "textarea" === c) ? (c = Nc(new V(null, 5, 5, W, [Pk, a, c, g, e], null), ad(a)), c = nk.f ? nk.f(c) : nk.call(null, c)) : (d = ad(a), d = null == d ? null : Qk(d), null != d && (g = null == g ? {} : g, g.key = d), c = Nk.I ? Nk.I(a, c, g, e) : Nk.call(null, a, c, g, e));
      } else {
        c = null;
      }
      if (null == c) {
        c = b.cljsReactClass;
        if (null == c) {
          if (!pd(b)) {
            throw Error([v("Assert failed: "), v([v("Expected a function, not "), v(ig(M([b], 0)))].join("")), v("\n"), v(ig(M([Gd(new B(null, "ifn?", "ifn?", -2106461064, null), new B(null, "f", "f", 43394975, null))], 0)))].join(""));
          }
          Yc(b) && null != b.type && "undefined" !== typeof console && console.warn([v("Warning: "), v("Using native React classes directly in Hiccup forms "), v("is not supported. Use create-element or "), v("adapt-react-class instead: "), v(b.type), v(Ck())].join(""));
          c = ad(b);
          c = Q.j(c, ph, b);
          c = Bk(c).cljsReactClass;
          b.cljsReactClass = c;
        }
        b = c;
        c = {argv:a};
        a = null == a ? null : Rk(a);
        null == a || (c.key = a);
        a = React.createElement(b, c);
      } else {
        a = c;
      }
    } else {
      a = nd(a) ? Tk.f ? Tk.f(a) : Tk.call(null, a) : a;
    }
  }
  return a;
}
function Uk(a, b) {
  for (var c = Ea(a), d = c.length, e = 0;;) {
    if (e < d) {
      var g = c[e];
      hd(g) && null == Rk(g) && (b["no-key"] = !0);
      c[e] = nk(g);
      e += 1;
    } else {
      break;
    }
  }
  return c;
}
function Tk(a) {
  var b = {}, c = null == Kj ? Uk(a, b) : Nj(function(b) {
    return function() {
      return Uk(a, b);
    };
  }(b), b);
  q(Oj(b)) && "undefined" !== typeof console && console.warn([v("Warning: "), v("Reactive deref not supported in lazy seq, "), v("it should be wrapped in doall"), v(Ck()), v(". Value:\n"), v(ig(M([a], 0)))].join(""));
  q(b["no-key"]) && "undefined" !== typeof console && console.warn([v("Warning: "), v("Every element in a seq should have a unique "), v(":key"), v(Ck()), v(". Value: "), v(ig(M([a], 0)))].join(""));
  return c;
}
function Nk(a, b, c, d) {
  var e = N(a) - d;
  switch(e) {
    case 0:
      return React.createElement(b, c);
    case 1:
      return React.createElement(b, c, nk(Uc(a, d)));
    default:
      return React.createElement.apply(null, sd(function() {
        return function(a, b, c) {
          b >= d && a.push(nk(c));
          return a;
        };
      }(e), [b, c], a));
  }
}
;function Vk() {
  var a = new V(null, 1, 5, W, [Xk], null);
  Ij(function() {
    var b = Yc(a) ? a.F ? a.F() : a.call(null) : a;
    return nk(b);
  }, document.getElementById("game"));
}
function Yk() {
  for (var a = D(nf(J.f ? J.f(Hj) : J.call(null, Hj))), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.X(null, d);
      Yd(Jj, e);
      d += 1;
    } else {
      if (a = D(a)) {
        b = a, id(b) ? (a = Tb(b), d = Ub(b), b = a, c = N(a), a = d) : (a = F(b), Yd(Jj, a), a = I(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  return "Updated";
}
var Zk = ["reagent", "core", "force_update_all"], $k = aa;
Zk[0] in $k || !$k.execScript || $k.execScript("var " + Zk[0]);
for (var al;Zk.length && (al = Zk.shift());) {
  Zk.length || void 0 === Yk ? $k = $k[al] ? $k[al] : $k[al] = {} : $k[al] = Yk;
}
function bl(a) {
  dk.f ? dk.f(a) : dk.call(null, a);
}
;var cl = new p(null, 5, [Yh, function(a) {
  return console.log(a);
}, Jg, function(a) {
  return console.warn(a);
}, Ih, function(a) {
  return console.error(a);
}, vg, function(a) {
  return q(console.group()) ? console.group(a) : console.log(a);
}, Th, function() {
  return q(console.groupEnd()) ? console.groupEnd() : null;
}], null), dl = le ? le(cl) : ke.call(null, cl);
function el(a) {
  return Jg.f(J.f ? J.f(dl) : J.call(null, dl)).call(null, Yd(v, a));
}
function fl(a) {
  return Ih.f(J.f ? J.f(dl) : J.call(null, dl)).call(null, Yd(v, a));
}
;var gl = Sj.f(pf);
function hl(a) {
  a = D(te(wa, qe.c(function(a) {
    return ug.f(ad(a));
  }, a)));
  for (var b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.X(null, d);
      fl(M(['re-frame: "', e, '" used incorrectly. Must be used like this "(', e, ' ...)", whereas you just used "', e, '".'], 0));
      d += 1;
    } else {
      if (a = D(a)) {
        b = a, id(b) ? (a = Tb(b), c = Ub(b), b = a, e = N(a), a = c, c = e) : (e = F(b), fl(M(['re-frame: "', e, '" used incorrectly. Must be used like this "(', e, ' ...)", whereas you just used "', e, '".'], 0)), a = I(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
}
function il() {
  var a = jl;
  return Yc(a) ? a : hd(a) ? (a = te(wa, ve(a)), hl(a), bd(a) ? td : sc.c(1, N(a)) ? F(a) : Yd(he, a)) : el(M(["re-frame: comp-middleware expects a vector, got: ", a], 0));
}
var kl = le ? le(pf) : ke.call(null, pf);
function ll(a, b) {
  qd(J.f ? J.f(kl) : J.call(null, kl), a) && el(M(["re-frame: overwriting an event-handler for: ", a], 0));
  nc.I(kl, Q, a, b);
}
function ml(a, b) {
  var c = il(), c = c.f ? c.f(b) : c.call(null, b);
  ll(a, c);
}
var nl = null;
function ol(a) {
  var b;
  b = hd(a) ? F(a) : fl(M(["re-frame: expected a vector event, but got: ", a], 0));
  var c;
  c = Vc(J.f ? J.f(kl) : J.call(null, kl), b);
  if (null == c) {
    return fl(M(['re-frame: no event handler registered for: "', b, '". Ignoring.'], 0));
  }
  if (q(nl)) {
    return fl(M(['re-frame: while handling "', nl, '"  dispatch-sync was called for "', a, "\". You can't call dispatch-sync in an event handler."], 0));
  }
  b = nl;
  nl = a;
  try {
    return c.c ? c.c(gl, a) : c.call(null, gl, a);
  } finally {
    nl = b;
  }
}
;var pl = le ? le(pf) : ke.call(null, pf);
function ql(a, b) {
  qd(J.f ? J.f(pl) : J.call(null, pl), a) && el(M(["re-frame: overwriting subscription-handler for: ", a], 0));
  nc.I(pl, Q, a, b);
}
;var rl = le ? le(50) : ke.call(null, 50), sl = Sj.f(Sc), tl = Sj.f(Sc), ul = Sj.f(""), vl = Sj.f(Sc), wl = Sj.f(Sc);
function xl() {
  oe.c ? oe.c(tl, Sc) : oe.call(null, tl, Sc);
  return oe.c ? oe.c(wl, Sc) : oe.call(null, wl, Sc);
}
function yl() {
  return 0 < N(J.f ? J.f(sl) : J.call(null, sl));
}
function zl() {
  return 0 < N(J.f ? J.f(tl) : J.call(null, tl));
}
ql(Eh, function() {
  return Zj(function() {
    return yl();
  });
});
ql(ei, function() {
  return Zj(function() {
    return zl();
  });
});
ql(Uh, function() {
  return Zj(function() {
    return q(yl()) ? Rc.c(J.f ? J.f(vl) : J.call(null, vl), J.f ? J.f(ul) : J.call(null, ul)) : Sc;
  });
});
ql(Vh, function() {
  return Zj(function() {
    return J.f ? J.f(wl) : J.call(null, wl);
  });
});
function Al(a, b, c) {
  var d = J.f ? J.f(a) : J.call(null, a), e = L(J.f ? J.f(b) : J.call(null, b), J.f ? J.f(c) : J.call(null, c)), g;
  a: {
    for (g = d;;) {
      var h = I(g);
      if (null != h) {
        g = h;
      } else {
        g = F(g);
        break a;
      }
    }
  }
  oe.c ? oe.c(b, g) : oe.call(null, b, g);
  oe.c ? oe.c(c, e) : oe.call(null, c, e);
  b = null == d ? null : lb(d);
  oe.c ? oe.c(a, b) : oe.call(null, a, b);
}
ll(oh, function(a, b) {
  O(b, 0);
  var c = O(b, 1);
  if (ya(yl())) {
    c = el(M(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
  } else {
    a: {
      for (c = q(c) ? c : 1;;) {
        var d;
        d = (d = 0 < c) ? yl() : d;
        if (q(d)) {
          Al(sl, gl, tl), Al(vl, ul, wl), --c;
        } else {
          c = null;
          break a;
        }
      }
    }
  }
  return c;
});
function Bl(a, b, c) {
  var d = Rc.c(J.f ? J.f(a) : J.call(null, a), J.f ? J.f(b) : J.call(null, b)), e = J.f ? J.f(c) : J.call(null, c), g = F(e);
  oe.c ? oe.c(b, g) : oe.call(null, b, g);
  b = qc(e);
  oe.c ? oe.c(c, b) : oe.call(null, c, b);
  oe.c ? oe.c(a, d) : oe.call(null, a, d);
}
ll(Gg, function(a, b) {
  O(b, 0);
  var c = O(b, 1);
  if (ya(zl())) {
    c = el(M(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
  } else {
    a: {
      for (c = q(c) ? c : 1;;) {
        var d;
        d = (d = 0 < c) ? zl() : d;
        if (q(d)) {
          Bl(sl, gl, tl), Bl(vl, ul, wl), --c;
        } else {
          c = null;
          break a;
        }
      }
    }
  }
  return c;
});
ll(Kh, function() {
  return ya(zl()) ? el(M(["re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo."], 0)) : xl();
});
function jl(a) {
  return function(b, c) {
    if (b ? q(q(null) ? null : b.Lc) || (b.rc ? 0 : r(Qj, b)) : r(Qj, b)) {
      var d = J.f ? J.f(b) : J.call(null, b), e = a.c ? a.c(d, c) : a.call(null, d, c);
      return null == e ? fl(M(["re-frame: your pure handler returned nil. It should return the new db state."], 0)) : d !== e ? oe.c ? oe.c(b, e) : oe.call(null, b, e) : null;
    }
    gd(b) ? el(M(['re-frame: Looks like "pure" is in the middleware pipeline twice. Ignoring.'], 0)) : el(M(['re-frame: "pure" middleware not given a Ratom.  Got: ', b], 0));
    return a;
  };
}
Nc(function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new E(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    a = ve(a);
    var b = bd(a) ? fl(M(['re-frame: "path" middleware given no params.'], 0)) : null;
    return function(a, b) {
      return function(c) {
        return function(a) {
          return function(b, d) {
            var e;
            e = ye(b, a);
            e = c.c ? c.c(e, d) : c.call(null, e, d);
            return ze(b, a, e);
          };
        }(a, b);
      };
    }(a, b);
  }
  a.H = 0;
  a.G = function(a) {
    a = D(a);
    return b(a);
  };
  a.B = b;
  return a;
}(), new p(null, 1, [ug, "path"], null));
Nc(function(a) {
  return function(b) {
    return function(c, d) {
      var e = Yc(a) ? a.c ? a.c(c, d) : a.call(null, c, d) : "string" === typeof a ? a : null == a ? "" : fl(M(['re-frame: "undoable" middleware given a bad parameter. Got: ', a], 0));
      xl();
      var g = Te(re(J.f ? J.f(rl) : J.call(null, rl), Rc.c(J.f ? J.f(sl) : J.call(null, sl), J.f ? J.f(gl) : J.call(null, gl))));
      oe.c ? oe.c(sl, g) : oe.call(null, sl, g);
      g = Te(re(J.f ? J.f(rl) : J.call(null, rl), Rc.c(J.f ? J.f(vl) : J.call(null, vl), J.f ? J.f(ul) : J.call(null, ul))));
      oe.c ? oe.c(vl, g) : oe.call(null, vl, g);
      oe.c ? oe.c(ul, e) : oe.call(null, ul, e);
      return b.c ? b.c(c, d) : b.call(null, c, d);
    };
  };
}, new p(null, 1, [ug, "undoable"], null));
Nc(function(a) {
  return function(b) {
    return function(c, d) {
      var e = b.c ? b.c(c, d) : b.call(null, c, d);
      return a.c ? a.c(e, d) : a.call(null, e, d);
    };
  };
}, new p(null, 1, [ug, "enrich"], null));
Nc(function(a) {
  return function(b) {
    return function(c, d) {
      var e = b.c ? b.c(c, d) : b.call(null, c, d);
      a.c ? a.c(e, d) : a.call(null, e, d);
      return e;
    };
  };
}, new p(null, 1, [ug, "after"], null));
Nc(function() {
  function a(a, d, e) {
    var g = null;
    if (2 < arguments.length) {
      for (var g = 0, h = Array(arguments.length - 2);g < h.length;) {
        h[g] = arguments[g + 2], ++g;
      }
      g = new E(h, 0);
    }
    return b.call(this, a, d, g);
  }
  function b(a, b, e) {
    return function(g) {
      return function(h, k) {
        var l = g.c ? g.c(h, k) : g.call(null, h, k), n = qe.c(function(a) {
          return function(b) {
            return ye(a, b);
          };
        }(l), e), t = qe.c(function() {
          return function(a) {
            return ye(h, a);
          };
        }(l, n), e), t = ee(md, qe.j(va, n, t));
        return q(t) ? ze(l, b, Yd(a, n)) : l;
      };
    };
  }
  a.H = 2;
  a.G = function(a) {
    var d = F(a);
    a = I(a);
    var e = F(a);
    a = qc(a);
    return b(d, e, a);
  };
  a.B = b;
  return a;
}(), new p(null, 1, [ug, "on-changes"], null));
var Cl = zj(32), Dl = !1, El = !1;
function Fl() {
  Dl = !0;
  El = !1;
  for (var a = 0;;) {
    var b = Cl.pop();
    if (null != b && (b.F ? b.F() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Dl = !1;
  return 0 < Cl.length ? Gl.F ? Gl.F() : Gl.call(null) : null;
}
function Gl() {
  var a = El;
  if (q(q(a) ? Dl : a)) {
    return null;
  }
  El = !0;
  "function" != m(aa.setImmediate) || aa.Window && aa.Window.prototype && aa.Window.prototype.setImmediate == aa.setImmediate ? (tj || (tj = uj()), tj(Fl)) : aa.setImmediate(Fl);
}
function Hl(a) {
  xj(Cl, a);
  Gl();
}
function Il(a, b) {
  setTimeout(a, b);
}
;var Jl, Kl = function Kl(b) {
  "undefined" === typeof Jl && (Jl = function(b, d, e) {
    this.Nc = b;
    this.aa = d;
    this.$c = e;
    this.w = 425984;
    this.D = 0;
  }, Jl.prototype.O = function(b, d) {
    return new Jl(this.Nc, this.aa, d);
  }, Jl.prototype.M = function() {
    return this.$c;
  }, Jl.prototype.zb = function() {
    return this.aa;
  }, Jl.Hc = function() {
    return new V(null, 3, 5, W, [new B(null, "box", "box", -1123515375, null), new B(null, "val", "val", 1769233139, null), new B(null, "meta18998", "meta18998", 2085132481, null)], null);
  }, Jl.Wb = !0, Jl.Vb = "cljs.core.async.impl.channels/t18997", Jl.qc = function(b, d) {
    return Gb(d, "cljs.core.async.impl.channels/t18997");
  });
  return new Jl(Kl, b, pf);
};
function Ll(a, b) {
  this.Hb = a;
  this.aa = b;
}
function Ml(a) {
  return hj(a.Hb);
}
var Nl = function Nl(b) {
  if (b ? b.Dc : b) {
    return b.Dc();
  }
  var c;
  c = Nl[m(null == b ? null : b)];
  if (!c && (c = Nl._, !c)) {
    throw u("MMC.abort", b);
  }
  return c.call(null, b);
};
function Ol(a, b, c, d, e, g, h) {
  this.ob = a;
  this.Zb = b;
  this.hb = c;
  this.Yb = d;
  this.T = e;
  this.closed = g;
  this.sa = h;
}
Ol.prototype.Dc = function() {
  for (;;) {
    var a = this.hb.pop();
    if (null != a) {
      var b = a.Hb;
      Hl(function(a) {
        return function() {
          return a.f ? a.f(!0) : a.call(null, !0);
        };
      }(b.ja, b, a.aa, a, this));
    }
    break;
  }
  yj(this.hb, ge());
  return gj(this);
};
Ol.prototype.pc = function(a, b, c) {
  var d = this;
  if (null == b) {
    throw Error([v("Assert failed: "), v("Can't put nil in on a channel"), v("\n"), v(ig(M([Gd(new B(null, "not", "not", 1044554643, null), Gd(new B(null, "nil?", "nil?", 1612038930, null), new B(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (a = d.closed) {
    return Kl(!a);
  }
  if (q(function() {
    var a = d.T;
    return q(a) ? ya(Bj(d.T)) : a;
  }())) {
    for (c = Ac(function() {
      var a = d.T;
      return d.sa.c ? d.sa.c(a, b) : d.sa.call(null, a, b);
    }());;) {
      if (0 < d.ob.length && 0 < N(d.T)) {
        var e = d.ob.pop(), g = e.ja, h = d.T.T.pop();
        Hl(function(a, b) {
          return function() {
            return a.f ? a.f(b) : a.call(null, b);
          };
        }(g, h, e, c, a, this));
      }
      break;
    }
    c && Nl(this);
    return Kl(!0);
  }
  e = function() {
    for (;;) {
      var a = d.ob.pop();
      if (q(a)) {
        if (q(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (q(e)) {
    return c = ij(e), Hl(function(a) {
      return function() {
        return a.f ? a.f(b) : a.call(null, b);
      };
    }(c, e, a, this)), Kl(!0);
  }
  64 < d.Yb ? (d.Yb = 0, yj(d.hb, Ml)) : d.Yb += 1;
  if (!(1024 > d.hb.length)) {
    throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending puts are allowed on a single channel."), v(" Consider using a windowed buffer.")].join("")), v("\n"), v(ig(M([Gd(new B(null, "\x3c", "\x3c", 993667236, null), Gd(new B(null, ".-length", ".-length", -280799999, null), new B(null, "puts", "puts", -1883877054, null)), new B("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  xj(d.hb, new Ll(c, b));
  return null;
};
function pj(a, b) {
  if (null != a.T && 0 < N(a.T)) {
    for (var c = b.ja, d = Kl(a.T.T.pop());;) {
      if (!q(Bj(a.T))) {
        var e = a.hb.pop();
        if (null != e) {
          var g = e.Hb, h = e.aa;
          Hl(function(a) {
            return function() {
              return a.f ? a.f(!0) : a.call(null, !0);
            };
          }(g.ja, g, h, e, c, d, a));
          Ac(function() {
            var b = a.T, c = h;
            return a.sa.c ? a.sa.c(b, c) : a.sa.call(null, b, c);
          }()) && Nl(a);
          continue;
        }
      }
      break;
    }
    return d;
  }
  c = function() {
    for (;;) {
      var b = a.hb.pop();
      if (q(b)) {
        if (hj(b.Hb)) {
          return b;
        }
      } else {
        return null;
      }
    }
  }();
  if (q(c)) {
    return d = ij(c.Hb), Hl(function(a) {
      return function() {
        return a.f ? a.f(!0) : a.call(null, !0);
      };
    }(d, c, a)), Kl(c.aa);
  }
  if (q(a.closed)) {
    return q(a.T) && (c = a.T, a.sa.f ? a.sa.f(c) : a.sa.call(null, c)), q(q(!0) ? b.ja : !0) ? (c = function() {
      var b = a.T;
      return q(b) ? 0 < N(a.T) : b;
    }(), c = q(c) ? a.T.T.pop() : null, Kl(c)) : null;
  }
  64 < a.Zb ? (a.Zb = 0, yj(a.ob, hj)) : a.Zb += 1;
  if (!(1024 > a.ob.length)) {
    throw Error([v("Assert failed: "), v([v("No more than "), v(1024), v(" pending takes are allowed on a single channel.")].join("")), v("\n"), v(ig(M([Gd(new B(null, "\x3c", "\x3c", 993667236, null), Gd(new B(null, ".-length", ".-length", -280799999, null), new B(null, "takes", "takes", 298247964, null)), new B("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  xj(a.ob, b);
  return null;
}
Ol.prototype.Ub = function() {
  var a = this;
  if (!a.closed) {
    a.closed = !0;
    if (q(function() {
      var b = a.T;
      return q(b) ? 0 === a.hb.length : b;
    }())) {
      var b = a.T;
      a.sa.f ? a.sa.f(b) : a.sa.call(null, b);
    }
    for (;b = a.ob.pop(), null != b;) {
      var c = b.ja, d = q(function() {
        var b = a.T;
        return q(b) ? 0 < N(a.T) : b;
      }()) ? a.T.T.pop() : null;
      Hl(function(a, b) {
        return function() {
          return a.f ? a.f(b) : a.call(null, b);
        };
      }(c, d, b, this));
    }
  }
  return null;
};
function Pl(a) {
  console.log(a);
  return null;
}
function Ql(a, b) {
  var c = (q(null) ? null : Pl).call(null, b);
  return null == c ? a : kj.c(a, c);
}
function Rl(a) {
  return new Ol(zj(32), 0, zj(32), 0, a, !1, function() {
    return function(a) {
      return function() {
        function c(c, d) {
          try {
            return a.c ? a.c(c, d) : a.call(null, c, d);
          } catch (e) {
            return Ql(c, e);
          }
        }
        function d(c) {
          try {
            return a.f ? a.f(c) : a.call(null, c);
          } catch (d) {
            return Ql(c, d);
          }
        }
        var e = null, e = function(a, b) {
          switch(arguments.length) {
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.f = d;
        e.c = c;
        return e;
      }();
    }(q(null) ? null.f ? null.f(kj) : null.call(null, kj) : kj);
  }());
}
;function Sl(a, b, c) {
  this.key = a;
  this.aa = b;
  this.forward = c;
  this.w = 2155872256;
  this.D = 0;
}
Sl.prototype.P = function() {
  return Ra(Ra(rc, this.aa), this.key);
};
Sl.prototype.J = function(a, b, c) {
  return X(b, Y, "[", " ", "]", c, this);
};
function Tl(a, b, c) {
  c = Array(c + 1);
  for (var d = 0;;) {
    if (d < c.length) {
      c[d] = null, d += 1;
    } else {
      break;
    }
  }
  return new Sl(a, b, c);
}
function Ul(a, b, c, d) {
  for (;;) {
    if (0 > c) {
      return a;
    }
    a: {
      for (;;) {
        var e = a.forward[c];
        if (q(e)) {
          if (e.key < b) {
            a = e;
          } else {
            break a;
          }
        } else {
          break a;
        }
      }
    }
    null != d && (d[c] = a);
    --c;
  }
}
function Vl(a, b) {
  this.header = a;
  this.level = b;
  this.w = 2155872256;
  this.D = 0;
}
Vl.prototype.put = function(a, b) {
  var c = Array(15), d = Ul(this.header, a, this.level, c).forward[0];
  if (null != d && d.key === a) {
    return d.aa = b;
  }
  a: {
    for (d = 0;;) {
      if (.5 > Math.random() && 15 > d) {
        d += 1;
      } else {
        break a;
      }
    }
  }
  if (d > this.level) {
    for (var e = this.level + 1;;) {
      if (e <= d + 1) {
        c[e] = this.header, e += 1;
      } else {
        break;
      }
    }
    this.level = d;
  }
  for (d = Tl(a, b, Array(d));;) {
    return 0 <= this.level ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
Vl.prototype.remove = function(a) {
  var b = Array(15), c = Ul(this.header, a, this.level, b).forward[0];
  if (null != c && c.key === a) {
    for (a = 0;;) {
      if (a <= this.level) {
        var d = b[a].forward;
        d[a] === c && (d[a] = c.forward[a]);
        a += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.level && null == this.header.forward[this.level]) {
        --this.level;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function Wl(a) {
  for (var b = Xl, c = b.header, d = b.level;;) {
    if (0 > d) {
      return c === b.header ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= a) {
          break a;
        }
      }
    }
    null != e ? (--d, c = e) : --d;
  }
}
Vl.prototype.P = function() {
  return function(a) {
    return function c(d) {
      return new Kd(null, function() {
        return function() {
          return null == d ? null : L(new V(null, 2, 5, W, [d.key, d.aa], null), c(d.forward[0]));
        };
      }(a), null, null);
    };
  }(this)(this.header.forward[0]);
};
Vl.prototype.J = function(a, b, c) {
  return X(b, function() {
    return function(a) {
      return X(b, Y, "", " ", "", c, a);
    };
  }(this), "{", ", ", "}", c, this);
};
var Xl = new Vl(Tl(null, null, 0), 0);
function Yl(a) {
  var b = (new Date).valueOf() + a, c = Wl(b), d = q(q(c) ? c.key < b + 10 : c) ? c.aa : null;
  if (q(d)) {
    return d;
  }
  var e = Rl(null);
  Xl.put(b, e);
  Il(function(a, b, c) {
    return function() {
      Xl.remove(c);
      return gj(a);
    };
  }(e, d, b, c), a);
  return e;
}
;function Zl(a) {
  a = sc.c(a, 0) ? null : a;
  if (q(null) && !q(a)) {
    throw Error([v("Assert failed: "), v("buffer must be supplied when transducer is"), v("\n"), v(ig(M([new B(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
  }
  a = "number" === typeof a ? new Aj(zj(a), a) : a;
  return Rl(a);
}
var am = function $l(b) {
  "undefined" === typeof ej && (ej = function(b, d, e) {
    this.sc = b;
    this.ja = d;
    this.Yc = e;
    this.w = 393216;
    this.D = 0;
  }, ej.prototype.O = function(b, d) {
    return new ej(this.sc, this.ja, d);
  }, ej.prototype.M = function() {
    return this.Yc;
  }, ej.prototype.Fc = function() {
    return !0;
  }, ej.prototype.Gc = function() {
    return this.ja;
  }, ej.Hc = function() {
    return new V(null, 3, 5, W, [new B(null, "fn-handler", "fn-handler", 648785851, null), new B(null, "f", "f", 43394975, null), new B(null, "meta16163", "meta16163", 2000307159, null)], null);
  }, ej.Wb = !0, ej.Vb = "cljs.core.async/t16162", ej.qc = function(b, d) {
    return Gb(d, "cljs.core.async/t16162");
  });
  return new ej($l, b, pf);
}(function() {
  return null;
});
var bm = Zl(null);
(function cm() {
  var b = Zl(1);
  Hl(function(b) {
    return function() {
      var d = function() {
        return function(b) {
          return function() {
            function c(d) {
              for (;;) {
                var e;
                a: {
                  try {
                    for (;;) {
                      var h = b(d);
                      if (!T(h, Wg)) {
                        e = h;
                        break a;
                      }
                    }
                  } catch (k) {
                    if (k instanceof Object) {
                      d[5] = k, sj(d), e = Wg;
                    } else {
                      throw k;
                    }
                  }
                }
                if (!T(e, Wg)) {
                  return e;
                }
              }
            }
            function d() {
              var b = [null, null, null, null, null, null, null, null, null, null, null, null, null];
              b[0] = e;
              b[1] = 1;
              return b;
            }
            var e = null, e = function(b) {
              switch(arguments.length) {
                case 0:
                  return d.call(this);
                case 1:
                  return c.call(this, b);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            e.F = d;
            e.f = c;
            return e;
          }();
        }(function() {
          return function(b) {
            var c = b[1];
            if (7 === c) {
              return b[7] = b[2], b[2] = null, b[1] = 12, Wg;
            }
            if (1 === c) {
              return b[2] = null, b[1] = 2, Wg;
            }
            if (4 === c) {
              var c = b[8], c = b[2], d = ad(c), d = gh.f(d);
              b[8] = c;
              b[1] = q(d) ? 5 : 6;
              return Wg;
            }
            if (6 === c) {
              return c = Yl(0), oj(b, 9, c);
            }
            if (3 === c) {
              return c = b[2], qj(b, c);
            }
            if (12 === c) {
              return c = b[8], b[4] = new rj(11, Object, null, 10, b[4], null, null, null), c = ol(c), b[2] = c, sj(b), Wg;
            }
            if (2 === c) {
              return oj(b, 4, bm);
            }
            if (11 === c) {
              throw b = b[2], cm(), b;
            }
            return 9 === c ? (c = b[2], b[2] = c, b[1] = 7, Wg) : 5 === c ? (c = hk(gk), d = Yl(20), b[11] = c, oj(b, 8, d)) : 10 === c ? (b[12] = b[2], b[2] = null, b[1] = 2, Wg) : 8 === c ? (c = b[2], b[2] = c, b[1] = 7, Wg) : null;
          };
        }(b), b);
      }(), e = function() {
        var e = d.F ? d.F() : d.call(null);
        e[6] = b;
        return e;
      }();
      return nj(e);
    };
  }(b));
  return b;
})();
function dm(a) {
  null == a ? fl(M(['re-frame: "dispatch" is ignoring a nil event.'], 0)) : (a = fj(bm, a, am), q(a) && (J.f ? J.f(a) : J.call(null, a)));
  return null;
}
function em(a) {
  ol(a);
  return null;
}
;function fm(a, b) {
  for (var c = a, d = b;;) {
    if (D(d)) {
      var e = F(d), e = Vi(e), c = c - e, d = qc(d)
    } else {
      return c;
    }
  }
}
function gm(a, b, c) {
  var d = Sh.f(a), e = se(function(a) {
    return function(b) {
      return sc.c(a, Xi(b));
    };
  }(d), b);
  return Pi(a, function() {
    return function(a, b) {
      return function l(c) {
        return new Kd(null, function(a, b) {
          return function() {
            for (;;) {
              var a = D(c);
              if (a) {
                if (id(a)) {
                  var d = Tb(a), e = N(d), g = Od(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = w.c(d, a), h = g, l = Zi(c, b), n = Wi(c), l = fm(n, l), c = Mi(R.c(c, Z.f(Ci())), new V(null, 2, 5, W, [new ri(bi, l, null, null, null), 0 < l ? Ci() : new Di(Ag, null, null, null)], null));
                        h.add(c);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Rd(g.W(), l(Ub(a))) : Rd(g.W(), null);
                }
                var h = F(a);
                return L(function() {
                  var a = Zi(h, b), c = Wi(h), a = fm(c, a);
                  return Mi(R.c(h, Z.f(Ci())), new V(null, 2, 5, W, [new ri(bi, a, null, null, null), 0 < a ? Ci() : new Di(Ag, null, null, null)], null));
                }(), l(qc(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(c);
  }());
}
;function hm(a, b, c) {
  a = Xi(a);
  return c - a >= b ? c : a;
}
function im(a) {
  return sc.c(Xh.f(a), ii) ? a : Q.B(a, Xh, ii, M([Zg, 0], 0));
}
function jm(a, b) {
  return Pi(a, function() {
    return function d(b) {
      return new Kd(null, function() {
        for (;;) {
          var g = D(b);
          if (g) {
            if (id(g)) {
              var h = Tb(g), k = N(h), l = Od(k);
              return function() {
                for (var b = 0;;) {
                  if (b < k) {
                    var d = w.c(h, b), e = l, g = Ri(d), n = Sh.f(a);
                    Wi(g);
                    var G = Ti(d), H = Ui(d), P = Vi(d), n = hm(d, H, n), ca = wg.f(d), d = Mi(d, new V(null, 3, 5, W, [qi(G, H, P, g, n), Ai(), im(ca)], null));
                    e.add(d);
                    b += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? Rd(l.W(), d(Ub(g))) : Rd(l.W(), null);
            }
            var n = F(g);
            return L(function() {
              var b = Ri(n), d = Sh.f(a);
              Wi(b);
              var e = Ti(n), g = Ui(n), h = Vi(n), d = hm(n, g, d), k = wg.f(n);
              return Mi(n, new V(null, 3, 5, W, [qi(e, g, h, b, d), Ai(), im(k)], null));
            }(), d(qc(g)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function km(a, b, c) {
  a[b] = c;
  return a;
}
;function lm(a) {
  return PIXI.Sprite.fromFrame(a);
}
;var mm = new p(null, 6, [zg, .3, Mh, 30, nh, 5, Wh, 180, ci, 1, Og, 1], null), nm = new p(null, 6, [zg, .25, Mh, 1, nh, 5, Wh, 180, ci, 1, Og, 1], null), om = new p(null, 4, [Ph, 2E3, rh, 16711680, ci, 4, Og, 4], null), ni = new PIXI.Point(.5, .5);
function pm(a, b) {
  var c = lm("barbarian/run-down/neutral"), d = lm("barbarian/run-down/right"), e = lm("barbarian/run-down/left"), d = new p(null, 2, [Jh, new p(null, 2, [Lg, new p(null, 3, [Mg, c, Dh, d, hi, e], null), yh, new V(null, 4, 5, W, [Mg, hi, Mg, Dh], null)], null), ii, new p(null, 2, [Lg, new p(null, 2, [Mg, c, hi, e], null), yh, new V(null, 2, 5, W, [Mg, hi], null)], null)], null), e = zg.f(nm), g = Mh.f(nm), h = nh.f(nm), k = Wh.f(nm), l = ci.f(nm), n = Og.f(nm);
  return Ni(M([ki(new V(null, 2, 5, W, [a, b], null)), Hi(), ti(e), new vi(wg, d, null, 0, null, null, null), mi(c, c, new V(null, 2, 5, W, [l, n], null)), qi(g, k, h, null, 0)], 0));
}
function qm(a, b) {
  var c = lm("archer/run-down/neutral"), d = lm("archer/run-down/right"), e = lm("archer/run-down/left"), d = new p(null, 2, [Jh, new p(null, 2, [Lg, new p(null, 3, [Mg, c, Dh, d, hi, e], null), yh, new V(null, 4, 5, W, [Mg, hi, Mg, Dh], null)], null), ii, new p(null, 2, [Lg, new p(null, 2, [Mg, c, hi, e], null), yh, new V(null, 2, 5, W, [Mg, hi], null)], null)], null), e = zg.f(mm), g = Mh.f(mm), h = nh.f(mm), k = Wh.f(mm), l = ci.f(mm), n = Og.f(mm);
  return Ni(M([ki(new V(null, 2, 5, W, [a, b], null)), Hi(), ti(e), new vi(wg, d, null, 0, null, null, null), mi(c, c, new V(null, 2, 5, W, [l, n], null)), qi(g, k, h, null, 0)], 0));
}
function rm(a, b) {
  var c = lm("town-hall/town-hall"), d = Ph.f(om), e = rh.f(om), g = ci.f(om), h = Og.f(om), k = ki(new V(null, 2, 5, W, [a, b], null)), c = mi(c, c, new V(null, 2, 5, W, [g, h], null)), g = Ci(), h = Hi(), l = new PIXI.Graphics;
  return Ni(M([k, c, g, h, new wi($h, l, e, d, null, null, null), new ri(bi, d, null, null, null)], 0));
}
;var sm = le ? le(Sc) : ke.call(null, Sc);
function tm(a) {
  a = a.data.getLocalPosition(a.target);
  return nc.j(sm, Rc, new p(null, 2, [Nh, a.x, qg, a.y], null));
}
function um(a) {
  var b = J.f ? J.f(sm) : J.call(null, sm);
  oe.c ? oe.c(sm, Sc) : oe.call(null, sm, Sc);
  return D(b) ? Pi(a, function() {
    return function(a) {
      return function e(b) {
        return new Kd(null, function() {
          return function() {
            for (;;) {
              var a = D(b);
              if (a) {
                if (id(a)) {
                  var c = Tb(a), l = N(c), n = Od(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = w.c(c, a), e = n, g;
                        g = Nh.f(b);
                        b = qg.f(b);
                        g = Math.floor(639 * Math.random()) + 1 < g ? pm(g, b) : qm(g, b);
                        e.add(g);
                        a += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Rd(n.W(), e(Ub(a))) : Rd(n.W(), null);
                }
                var t = F(a);
                return L(function() {
                  var a = Nh.f(t), b = qg.f(t);
                  return Math.floor(639 * Math.random()) + 1 < a ? pm(a, b) : qm(a, b);
                }(), e(qc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(b)(b);
  }()) : a;
}
;function vm(a, b, c) {
  var d = $i(a), e = $i(b), g = Qi(a);
  a = O(g, 0);
  var g = O(g, 1), h = Qi(b);
  b = O(h, 0);
  var h = O(h, 1), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return !(a - d - c > b + e || b - e > a + d + c || g - k - c > h + l || h - l > g + k + c);
}
function wm(a, b) {
  var c = Qi(a), d = O(c, 0), c = O(c, 1), e = Qi(b), g = O(e, 0), e = O(e, 1);
  return Math.sqrt(Math.pow(Math.abs(d - g), 2) + Math.pow(Math.abs(c - e), 2));
}
function xm(a, b) {
  return Zd($f, ie.c(wm, a), b);
}
function ym(a, b, c) {
  var d = se(function(a) {
    return qd(a, Pg);
  }, c);
  return D(d) ? Pi(a, function() {
    return function(a) {
      return function h(b) {
        return new Kd(null, function(a) {
          return function() {
            for (;;) {
              var c = D(b);
              if (c) {
                if (id(c)) {
                  var d = Tb(c), e = N(d), x = Od(e);
                  return function() {
                    for (var b = 0;;) {
                      if (b < e) {
                        var c = w.c(d, b), h = x, k = Si(c), n = Ti(c), y = Ui(c), Ha = Vi(c), eb = Xi(c), K = xm(c, a), Pf = ya(vm(c, K, n)), c = Mi(Li(c, new V(null, 3, 5, W, [Fi(), yi(), Hi()], null)), new V(null, 3, 5, W, [ti(k), q(Pf) ? Fi() : yi(), qi(n, y, Ha, K, eb)], null));
                        h.add(c);
                        b += 1;
                      } else {
                        return !0;
                      }
                    }
                  }() ? Rd(x.W(), h(Ub(c))) : Rd(x.W(), null);
                }
                var y = F(c);
                return L(function() {
                  var b = Si(y), c = Ti(y), d = Ui(y), e = Vi(y), h = Xi(y), k = xm(y, a), n = ya(vm(y, k, c));
                  return Mi(Li(y, new V(null, 3, 5, W, [Fi(), yi(), Hi()], null)), new V(null, 3, 5, W, [ti(b), q(n) ? Fi() : yi(), qi(c, d, e, k, h)], null));
                }(), h(qc(c)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(b);
  }()) : Pi(a, function() {
    return function(a) {
      return function h(b) {
        return new Kd(null, function() {
          return function() {
            for (;;) {
              var a = D(b);
              if (a) {
                if (id(a)) {
                  var c = Tb(a), d = N(c), e = Od(d);
                  a: {
                    for (var x = 0;;) {
                      if (x < d) {
                        var y = w.c(c, x), y = Ki(Li(y, new V(null, 2, 5, W, [Fi(), yi()], null)), Hi());
                        e.add(y);
                        x += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                  }
                  return c ? Rd(e.W(), h(Ub(a))) : Rd(e.W(), null);
                }
                e = F(a);
                return L(Ki(Li(e, new V(null, 2, 5, W, [Fi(), yi()], null)), Hi()), h(qc(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(b);
  }());
}
;function zm(a) {
  return sc.c(Xh.f(a), Jh) ? a : Q.B(a, Xh, Jh, M([Zg, 0], 0));
}
function Am(a, b) {
  return Pi(a, function() {
    return function d(a) {
      return new Kd(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (id(b)) {
              var h = Tb(b), k = N(h), l = Od(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = w.c(h, a), d = l, e = wg.f(b), g = xe(b, new V(null, 2, 5, W, [Tg, ah], null)), n = Si(b), H = Qi(b), P = O(H, 0), H = O(H, 1), n = new V(null, 2, 5, W, [P + n * Math.cos(g), H + n * Math.sin(g)], null), g = O(n, 0), n = O(n, 1), b = Mi(b, new V(null, 3, 5, W, [ki(new V(null, 2, 5, W, [g, n], null)), Ai(), zm(e)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? Rd(l.W(), d(Ub(b))) : Rd(l.W(), null);
            }
            var n = F(b);
            return L(function() {
              var a = wg.f(n), b = xe(n, new V(null, 2, 5, W, [Tg, ah], null)), d = Si(n), e = Qi(n), g = O(e, 0), e = O(e, 1), d = new V(null, 2, 5, W, [g + d * Math.cos(b), e + d * Math.sin(b)], null), b = O(d, 0), d = O(d, 1);
              return Mi(n, new V(null, 3, 5, W, [ki(new V(null, 2, 5, W, [b, d], null)), Ai(), zm(a)], null));
            }(), d(qc(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Bm(a, b) {
  var c = N(a);
  return sc.c(b, c - 1) ? 0 : b + 1;
}
function Cm(a, b) {
  return Pi(a, function() {
    return function d(a) {
      return new Kd(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (id(b)) {
              var h = Tb(b), k = N(h), l = Od(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = w.c(h, a), d = l, e = Qg.f(b), g = wg.f(b), n = Yi(b), H = Lg.f(n), P = yh.f(n), n = xe(b, new V(null, 2, 5, W, [wg, Zg], null)), n = Bm(P, n), P = Vc(P, n), H = Vc(H, P), b = Mi(b, new V(null, 2, 5, W, [Q.j(g, Zg, n), Q.j(e, zh, H)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? Rd(l.W(), d(Ub(b))) : Rd(l.W(), null);
            }
            var n = F(b);
            return L(function() {
              var a = Qg.f(n), b = wg.f(n), d = Yi(n), e = Lg.f(d), g = yh.f(d), d = xe(n, new V(null, 2, 5, W, [wg, Zg], null)), d = Bm(g, d), g = Vc(g, d), e = Vc(e, g);
              return Mi(n, new V(null, 2, 5, W, [Q.j(b, Zg, d), Q.j(a, zh, e)], null));
            }(), d(qc(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;function Dm(a, b) {
  a.addChild(b);
}
function Em(a, b, c) {
  km(km(a.position, "x", b), "y", c);
  return a;
}
function Fm(a, b) {
  return km(a, "anchor", b);
}
function Gm(a, b, c) {
  a = km(a, "height", 16 * b);
  return km(a, "width", 16 * c);
}
function Hm(a, b, c) {
  var d = xg.f(a), e = ch.f(a);
  b = D(b);
  for (var g = null, h = 0, k = 0;;) {
    if (k < h) {
      var l = g.X(null, k);
      Dm(d, xe(l, new V(null, 2, 5, W, [Sg, ih], null)));
      k += 1;
    } else {
      if (b = D(b)) {
        g = b, id(g) ? (b = Tb(g), k = Ub(g), g = b, h = N(b), b = k) : (b = F(g), Dm(d, xe(b, new V(null, 2, 5, W, [Sg, ih], null))), b = I(g), g = null, h = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = D(c);
  b = null;
  for (h = g = 0;;) {
    if (h < g) {
      var k = b.X(null, h), n = xe(k, new V(null, 2, 5, W, [Qg, zh], null)), t = xe(k, new V(null, 2, 5, W, [Qg, Oh], null)), A = xe(k, new V(null, 2, 5, W, [Qg, eh], null)), l = O(A, 0), A = O(A, 1), x = Qi(k), y = O(x, 0), x = O(x, 1), y = Math.round(y), C = Math.round(x), x = $h.f(k);
      Dm(d, Fm(Em(Gm(n, l, A), y, C), t));
      if (q(x)) {
        var G = vh.f(x), n = Kg.f(x), H = yg.f(x), n = Wi(k) / n, P = l / 8 * 16, ca = 16 * n * A, k = $i(k), oa = k.x, Ha = k.y + P;
        Dm(d, function() {
          var a = G;
          a.clear();
          a.beginFill(H);
          a.drawRect(oa, Ha, ca, P);
          a.endFill();
          return a;
        }());
      }
      h += 1;
    } else {
      if (c = D(c)) {
        if (id(c)) {
          g = Tb(c), c = Ub(c), b = g, g = N(g);
        } else {
          b = F(c);
          k = xe(b, new V(null, 2, 5, W, [Qg, zh], null));
          l = xe(b, new V(null, 2, 5, W, [Qg, Oh], null));
          h = xe(b, new V(null, 2, 5, W, [Qg, eh], null));
          g = O(h, 0);
          h = O(h, 1);
          n = Qi(b);
          A = O(n, 0);
          n = O(n, 1);
          A = Math.round(A);
          t = Math.round(n);
          n = $h.f(b);
          Dm(d, Fm(Em(Gm(k, g, h), A, t), l));
          if (q(n)) {
            var eb = vh.f(n), k = Kg.f(n), K = yg.f(n), k = Wi(b) / k, Pf = g / 8 * 16, Ca = 16 * k * h;
            b = $i(b);
            var Ga = b.x, Ka = b.y + Pf;
            Dm(d, function() {
              var a = eb;
              a.clear();
              a.beginFill(K);
              a.drawRect(Ga, Ka, Ca, Pf);
              a.endFill();
              return a;
            }());
          }
          c = I(c);
          b = null;
          g = 0;
        }
        h = 0;
      } else {
        break;
      }
    }
  }
  e.render(d);
  return a;
}
;function Im(a, b) {
  return Pi(a, function() {
    return function d(a) {
      return new Kd(null, function() {
        for (;;) {
          var b = D(a);
          if (b) {
            if (id(b)) {
              var h = Tb(b), k = N(h), l = Od(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = w.c(h, a), d = l, e = Qg.f(b), g = bh.f(e), b = Ki(b, Q.j(e, zh, g));
                    d.add(b);
                    a += 1;
                  } else {
                    return !0;
                  }
                }
              }() ? Rd(l.W(), d(Ub(b))) : Rd(l.W(), null);
            }
            var n = F(b);
            return L(function() {
              var a = Qg.f(n), b = bh.f(a);
              return Ki(n, Q.j(a, zh, b));
            }(), d(qc(b)));
          }
          return null;
        }
      }, null, null);
    }(b);
  }());
}
;la = function() {
  function a(a) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new E(e, 0);
    }
    return b.call(this, d);
  }
  function b(a) {
    return console.log.apply(console, Fa ? Ea(a) : Da.call(null, a));
  }
  a.H = 0;
  a.G = function(a) {
    a = D(a);
    return b(a);
  };
  a.B = b;
  return a;
}();
function Jm() {
  return new V(null, 2, 5, W, [jh, new p(null, 2, [qh, "battlefield", hh, new p(null, 4, [Ng, "auto", Rh, "auto", Rg, "640px", gi, "640px"], null)], null)], null);
}
function Xk() {
  return new V(null, 3, 5, W, [jh, new p(null, 1, [qh, "clash-attack-sim"], null), new V(null, 1, 5, W, [Jm], null)], null);
}
function Km() {
  bl(function() {
    var a = new V(null, 1, 5, W, [di], null);
    return dm.f ? dm.f(a) : dm.call(null, a);
  });
}
ml(di, function(a) {
  Km();
  var b = Sh.f(a);
  a = Q.j(a, Sh, b + 1);
  a = um(a);
  if (sc.c(wd(Sh.f(a), 5), 0)) {
    var b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [Xg], null))), c = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [bi], null)));
    a = D(b) && D(c) ? Yd(ym, new V(null, 3, 5, W, [a, b, c], null)) : a;
  }
  sc.c(wd(Sh.f(a), 5), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [Xg, sg], null))), a = D(b) ? Yd(aj, new V(null, 2, 5, W, [a, b], null)) : a);
  sc.c(wd(Sh.f(a), 1), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 3, 5, W, [sg, Tg, Jh], null))), a = D(b) ? Yd(Am, new V(null, 2, 5, W, [a, b], null)) : a);
  sc.c(wd(Sh.f(a), 5), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [Xg, ii], null))), a = D(b) ? Yd(jm, new V(null, 2, 5, W, [a, b], null)) : a);
  sc.c(wd(Sh.f(a), 5), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [Xg, ii], null))), c = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 2, 5, W, [bi, Pg], null))), a = D(b) && D(c) ? Yd(gm, new V(null, 3, 5, W, [a, b, c], null)) : a);
  sc.c(wd(Sh.f(a), 15), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 3, 5, W, [Qg, wg, fi], null))), a = D(b) ? Yd(Cm, new V(null, 2, 5, W, [a, b], null)) : a);
  sc.c(wd(Sh.f(a), 5), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [Cg], null))), a = D(b) ? Yd(Im, new V(null, 2, 5, W, [a, b], null)) : a);
  sc.c(wd(Sh.f(a), 1), 0) && (b = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [Sg], null))), c = Yd(Oi, we.c(new V(null, 1, 5, W, [a], null), new V(null, 1, 5, W, [Qg], null))), a = D(b) && D(c) ? Yd(Hm, new V(null, 3, 5, W, [a, b, c], null)) : a);
  return a;
});
ml(kh, function() {
  Km();
  var a = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(a.view);
  var b = new PIXI.Container(16777215);
  km(b, "interactive", !0);
  km(b, "click", tm);
  var a = new p(null, 3, [ch, a, xg, b, Sh, 0], null), b = W, c;
  c = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage("images/grass-tile.png", !1), 640, 640);
  c = Ni(M([new oi(Sg, c, null, null, null)], 0));
  return Pi(a, new V(null, 4, 5, b, [c, pm(160, 160), rm(400, 400), rm(320, 320)], null));
});
var Lm = PIXI.loader;
Lm.add(["images/spritesheet.json", "images/grass-tile.png"]);
Lm.once("complete", function() {
  Vk();
  var a = new V(null, 1, 5, W, [kh], null);
  return em.f ? em.f(a) : em.call(null, a);
});
Lm.load();

})();
