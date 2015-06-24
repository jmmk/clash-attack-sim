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
 * React v0.13.1
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t){"use strict";var n=e(19),r=e(32),o=e(34),i=e(33),a=e(38),u=e(39),s=e(55),l=(e(56),e(40)),c=e(51),p=e(54),d=e(64),f=e(68),h=e(73),m=e(76),v=e(79),g=e(82),y=e(27),C=e(115),E=e(142);p.inject();var b=s.createElement,_=s.createFactory,x=s.cloneElement,D=h.measure("React","render",f.render),M={Children:{map:r.map,forEach:r.forEach,count:r.count,only:E},Component:o,DOM:l,PropTypes:m,initializeTouchEvents:function(e){n.useTouchEvents=e},createClass:i.createClass,createElement:b,cloneElement:x,createFactory:_,createMixin:function(e){return e},constructAndRenderComponent:f.constructAndRenderComponent,constructAndRenderComponentByID:f.constructAndRenderComponentByID,findDOMNode:C,render:D,renderToString:g.renderToString,renderToStaticMarkup:g.renderToStaticMarkup,unmountComponentAtNode:f.unmountComponentAtNode,isValidElement:s.isValidElement,withContext:a.withContext,__spread:y};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:u,InstanceHandles:d,Mount:f,Reconciler:v,TextComponent:c});M.version="0.13.1",t.exports=M},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t){"use strict";var n=e(117),r={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=r},{117:117}],3:[function(e,t){"use strict";function n(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function o(e){switch(e){case I.topCompositionStart:return T.compositionStart;case I.topCompositionEnd:return T.compositionEnd;case I.topCompositionUpdate:return T.compositionUpdate}}function i(e,t){return e===I.topKeyDown&&t.keyCode===E}function a(e,t){switch(e){case I.topKeyUp:return-1!==C.indexOf(t.keyCode);case I.topKeyDown:return t.keyCode!==E;case I.topKeyPress:case I.topMouseDown:case I.topBlur:return!0;default:return!1}}function u(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function s(e,t,n,r){var s,l;if(b?s=o(e):P?a(e,r)&&(s=T.compositionEnd):i(e,r)&&(s=T.compositionStart),!s)return null;D&&(P||s!==T.compositionStart?s===T.compositionEnd&&P&&(l=P.getData()):P=m.getPooled(t));var c=v.getPooled(s,n,r);if(l)c.data=l;else{var p=u(r);null!==p&&(c.data=p)}return f.accumulateTwoPhaseDispatches(c),c}function l(e,t){switch(e){case I.topCompositionEnd:return u(t);case I.topKeyPress:var n=t.which;return n!==M?null:(R=!0,N);case I.topTextInput:var r=t.data;return r===N&&R?null:r;default:return null}}function c(e,t){if(P){if(e===I.topCompositionEnd||a(e,t)){var n=P.getData();return m.release(P),P=null,n}return null}switch(e){case I.topPaste:return null;case I.topKeyPress:return t.which&&!r(t)?String.fromCharCode(t.which):null;case I.topCompositionEnd:return D?null:t.data;default:return null}}function p(e,t,n,r){var o;if(o=x?l(e,r):c(e,r),!o)return null;var i=g.getPooled(T.beforeInput,n,r);return i.data=o,f.accumulateTwoPhaseDispatches(i),i}var d=e(15),f=e(20),h=e(21),m=e(22),v=e(91),g=e(95),y=e(139),C=[9,13,27,32],E=229,b=h.canUseDOM&&"CompositionEvent"in window,_=null;h.canUseDOM&&"documentMode"in document&&(_=document.documentMode);var x=h.canUseDOM&&"TextEvent"in window&&!_&&!n(),D=h.canUseDOM&&(!b||_&&_>8&&11>=_),M=32,N=String.fromCharCode(M),I=d.topLevelTypes,T={beforeInput:{phasedRegistrationNames:{bubbled:y({onBeforeInput:null}),captured:y({onBeforeInputCapture:null})},dependencies:[I.topCompositionEnd,I.topKeyPress,I.topTextInput,I.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:y({onCompositionEnd:null}),captured:y({onCompositionEndCapture:null})},dependencies:[I.topBlur,I.topCompositionEnd,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:y({onCompositionStart:null}),captured:y({onCompositionStartCapture:null})},dependencies:[I.topBlur,I.topCompositionStart,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:y({onCompositionUpdate:null}),captured:y({onCompositionUpdateCapture:null})},dependencies:[I.topBlur,I.topCompositionUpdate,I.topKeyDown,I.topKeyPress,I.topKeyUp,I.topMouseDown]}},R=!1,P=null,w={eventTypes:T,extractEvents:function(e,t,n,r){return[s(e,t,n,r),p(e,t,n,r)]}};t.exports=w},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var r={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeOpacity:!0},o=["Webkit","ms","Moz","O"];Object.keys(r).forEach(function(e){o.forEach(function(t){r[n(t,e)]=r[e]})});var i={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},a={isUnitlessNumber:r,shorthandPropertyExpansions:i};t.exports=a},{}],5:[function(e,t){"use strict";var n=e(4),r=e(21),o=(e(106),e(111)),i=e(131),a=e(141),u=(e(150),a(function(e){return i(e)})),s="cssFloat";r.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(s="styleFloat");var l={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=u(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if("float"===i&&(i=s),a)r[i]=a;else{var u=n.shorthandPropertyExpansions[i];if(u)for(var l in u)r[l]="";else r[i]=""}}}};t.exports=l},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t){"use strict";function n(){this._callbacks=null,this._contexts=null}var r=e(28),o=e(27),i=e(133);o(n.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){i(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{133:133,27:27,28:28}],7:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function r(e){var t=_.getPooled(I.change,R,e);C.accumulateTwoPhaseDispatches(t),b.batchedUpdates(o,t)}function o(e){y.enqueueEvents(e),y.processEventQueue()}function i(e,t){T=e,R=t,T.attachEvent("onchange",r)}function a(){T&&(T.detachEvent("onchange",r),T=null,R=null)}function u(e,t,n){return e===N.topChange?n:void 0}function s(e,t,n){e===N.topFocus?(a(),i(t,n)):e===N.topBlur&&a()}function l(e,t){T=e,R=t,P=e.value,w=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(T,"value",A),T.attachEvent("onpropertychange",p)}function c(){T&&(delete T.value,T.detachEvent("onpropertychange",p),T=null,R=null,P=null,w=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==P&&(P=t,r(e))}}function d(e,t,n){return e===N.topInput?n:void 0}function f(e,t,n){e===N.topFocus?(c(),l(t,n)):e===N.topBlur&&c()}function h(e){return e!==N.topSelectionChange&&e!==N.topKeyUp&&e!==N.topKeyDown||!T||T.value===P?void 0:(P=T.value,R)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===N.topClick?n:void 0}var g=e(15),y=e(17),C=e(20),E=e(21),b=e(85),_=e(93),x=e(134),D=e(136),M=e(139),N=g.topLevelTypes,I={change:{phasedRegistrationNames:{bubbled:M({onChange:null}),captured:M({onChangeCapture:null})},dependencies:[N.topBlur,N.topChange,N.topClick,N.topFocus,N.topInput,N.topKeyDown,N.topKeyUp,N.topSelectionChange]}},T=null,R=null,P=null,w=null,O=!1;E.canUseDOM&&(O=x("change")&&(!("documentMode"in document)||document.documentMode>8));var S=!1;E.canUseDOM&&(S=x("input")&&(!("documentMode"in document)||document.documentMode>9));var A={get:function(){return w.get.call(this)},set:function(e){P=""+e,w.set.call(this,e)}},k={eventTypes:I,extractEvents:function(e,t,r,o){var i,a;if(n(t)?O?i=u:a=s:D(t)?S?i=d:(i=h,a=f):m(t)&&(i=v),i){var l=i(e,t,r);if(l){var c=_.getPooled(I.change,l,o);return C.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,r)}};t.exports=k},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t){"use strict";var n=0,r={createReactRootIndex:function(){return n++}};t.exports=r},{}],9:[function(e,t){"use strict";function n(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var r=e(12),o=e(70),i=e(145),a=e(133),u={dangerouslyReplaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,updateTextContent:i,processUpdates:function(e,t){for(var u,s=null,l=null,c=0;c<e.length;c++)if(u=e[c],u.type===o.MOVE_EXISTING||u.type===o.REMOVE_NODE){var p=u.fromIndex,d=u.parentNode.childNodes[p],f=u.parentID;a(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=r.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(u=e[v],u.type){case o.INSERT_MARKUP:n(u.parentNode,h[u.markupIndex],u.toIndex);break;case o.MOVE_EXISTING:n(u.parentNode,s[u.parentID][u.fromIndex],u.toIndex);break;case o.TEXT_CONTENT:i(u.parentNode,u.textContent);break;case o.REMOVE_NODE:}}};t.exports=u},{12:12,133:133,145:145,70:70}],10:[function(e,t){"use strict";function n(e,t){return(e&t)===t}var r=e(133),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},i=e.DOMAttributeNames||{},u=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&a._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){r(!a.isStandardName.hasOwnProperty(l)),a.isStandardName[l]=!0;var c=l.toLowerCase();if(a.getPossibleStandardName[c]=l,i.hasOwnProperty(l)){var p=i[l];a.getPossibleStandardName[p]=l,a.getAttributeName[l]=p}else a.getAttributeName[l]=c;a.getPropertyName[l]=u.hasOwnProperty(l)?u[l]:l,a.getMutationMethod[l]=s.hasOwnProperty(l)?s[l]:null;var d=t[l];a.mustUseAttribute[l]=n(d,o.MUST_USE_ATTRIBUTE),a.mustUseProperty[l]=n(d,o.MUST_USE_PROPERTY),a.hasSideEffects[l]=n(d,o.HAS_SIDE_EFFECTS),a.hasBooleanValue[l]=n(d,o.HAS_BOOLEAN_VALUE),a.hasNumericValue[l]=n(d,o.HAS_NUMERIC_VALUE),a.hasPositiveNumericValue[l]=n(d,o.HAS_POSITIVE_NUMERIC_VALUE),a.hasOverloadedBooleanValue[l]=n(d,o.HAS_OVERLOADED_BOOLEAN_VALUE),r(!a.mustUseAttribute[l]||!a.mustUseProperty[l]),r(a.mustUseProperty[l]||!a.hasSideEffects[l]),r(!!a.hasBooleanValue[l]+!!a.hasNumericValue[l]+!!a.hasOverloadedBooleanValue[l]<=1)}}},i={},a={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<a._isCustomAttributeFunctions.length;t++){var n=a._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:o};t.exports=a},{133:133}],11:[function(e,t){"use strict";function n(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&1>t||r.hasOverloadedBooleanValue[e]&&t===!1}var r=e(10),o=e(143),i=(e(150),{createMarkupForID:function(e){return r.ID_ATTRIBUTE_NAME+"="+o(e)},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(n(e,t))return"";var i=r.getAttributeName[e];return r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&t===!0?i:i+"="+o(t)}return r.isCustomAttribute(e)?null==t?"":e+"="+o(t):null},setValueForProperty:function(e,t,o){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var i=r.getMutationMethod[t];if(i)i(e,o);else if(n(t,o))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+o);else{var a=r.getPropertyName[t];r.hasSideEffects[t]&&""+e[a]==""+o||(e[a]=o)}}else r.isCustomAttribute(t)&&(null==o?e.removeAttribute(t):e.setAttribute(t,""+o))},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t];if(n)n(e,void 0);else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t]);else{var o=r.getPropertyName[t],i=r.getDefaultValueForProperty(e.nodeName,o);r.hasSideEffects[t]&&""+e[o]===i||(e[o]=i)}}else r.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=i},{10:10,143:143,150:150}],12:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var r=e(21),o=e(110),i=e(112),a=e(125),u=e(133),s=/^(<[^ \/>]+)/,l="data-danger-index",c={dangerouslyRenderMarkup:function(e){u(r.canUseDOM);for(var t,c={},p=0;p<e.length;p++)u(e[p]),t=n(e[p]),t=a(t)?t:"*",c[t]=c[t]||[],c[t][p]=e[p];var d=[],f=0;for(t in c)if(c.hasOwnProperty(t)){var h,m=c[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(s,"$1 "+l+'="'+h+'" ')}for(var g=o(m.join(""),i),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(l)&&(h=+C.getAttribute(l),C.removeAttribute(l),u(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return u(f===d.length),u(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){u(r.canUseDOM),u(t),u("html"!==e.tagName.toLowerCase());var n=o(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=c},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t){"use strict";var n=e(139),r=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=r},{139:139}],14:[function(e,t){"use strict";var n=e(15),r=e(20),o=e(97),i=e(68),a=e(139),u=n.topLevelTypes,s=i.getFirstReactDOM,l={mouseEnter:{registrationName:a({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:a({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},c=[null,null],p={eventTypes:l,extractEvents:function(e,t,n,a){if(e===u.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==u.topMouseOut&&e!==u.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===u.topMouseOut?(f=t,h=s(a.relatedTarget||a.toElement)||p):(f=p,h=t),f===h)return null;var m=f?i.getID(f):"",v=h?i.getID(h):"",g=o.getPooled(l.mouseLeave,m,a);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=o.getPooled(l.mouseEnter,v,a);return y.type="mouseenter",y.target=h,y.relatedTarget=f,r.accumulateEnterLeaveDispatches(g,y,m,v),c[0]=g,c[1]=y,c}};t.exports=p},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t){"use strict";var n=e(138),r=n({bubbled:null,captured:null}),o=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:o,PropagationPhases:r};t.exports=i},{138:138}],16:[function(e,t){var n=e(112),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,r){return e.addEventListener?(e.addEventListener(t,r,!0),{remove:function(){e.removeEventListener(t,r,!0)}}):{remove:n}},registerDefault:function(){}};t.exports=r},{112:112}],17:[function(e,t){"use strict";var n=e(18),r=e(19),o=e(103),i=e(118),a=e(133),u={},s=null,l=function(e){if(e){var t=r.executeDispatch,o=n.getPluginModuleForEvent(e);o&&o.executeDispatch&&(t=o.executeDispatch),r.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},c=null,p={injection:{injectMount:r.injection.injectMount,injectInstanceHandle:function(e){c=e},getInstanceHandle:function(){return c},injectEventPluginOrder:n.injectEventPluginOrder,injectEventPluginsByName:n.injectEventPluginsByName},eventNameDispatchConfigs:n.eventNameDispatchConfigs,registrationNameModules:n.registrationNameModules,putListener:function(e,t,n){a(!n||"function"==typeof n);var r=u[t]||(u[t]={});r[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,r,i){for(var a,u=n.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,r,i);p&&(a=o(a,p))}}return a},enqueueEvents:function(e){e&&(s=o(s,e))},processEventQueue:function(){var e=s;s=null,i(e,l),a(!s)},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=p},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t){"use strict";function n(){if(a)for(var e in u){var t=u[e],n=a.indexOf(e);if(i(n>-1),!s.plugins[n]){i(t.extractEvents),s.plugins[n]=t;var o=t.eventTypes;for(var l in o)i(r(o[l],t,l))}}}function r(e,t,n){i(!s.eventNameDispatchConfigs.hasOwnProperty(n)),s.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var a in r)if(r.hasOwnProperty(a)){var u=r[a];o(u,t,n)}return!0}return e.registrationName?(o(e.registrationName,t,n),!0):!1}function o(e,t,n){i(!s.registrationNameModules[e]),s.registrationNameModules[e]=t,s.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e(133),a=null,u={},s={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];u.hasOwnProperty(r)&&u[r]===o||(i(!u[r]),u[r]=o,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return s.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=s.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){a=null;for(var e in u)u.hasOwnProperty(e)&&delete u[e];s.plugins.length=0;var t=s.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=s.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=s},{133:133}],19:[function(e,t){"use strict";function n(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function r(e){return e===m.topMouseMove||e===m.topTouchMove}function o(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function a(e,t,n){e.currentTarget=h.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function u(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function s(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=s(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;f(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e(15),f=e(133),h={Mount:null,injectMount:function(e){h.Mount=e}},m=d.topLevelTypes,v={isEndish:n,isMoveish:r,isStartish:o,executeDirectDispatch:c,executeDispatch:a,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,injection:h,useTouchEvents:!1};t.exports=v},{133:133,15:15}],20:[function(e,t){"use strict";function n(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return m(e,r)}function r(e,t,r){var o=t?h.bubbled:h.captured,i=n(e,r,o);i&&(r._dispatchListeners=d(r._dispatchListeners,i),r._dispatchIDs=d(r._dispatchIDs,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,r,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=m(e,r);o&&(n._dispatchListeners=d(n._dispatchListeners,o),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function u(e){f(e,o)}function s(e,t,n,r){p.injection.getInstanceHandle().traverseEnterLeave(n,r,i,e,t)}function l(e){f(e,a)}var c=e(15),p=e(17),d=e(103),f=e(118),h=c.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:u,accumulateDirectDispatches:l,accumulateEnterLeaveDispatches:s};t.exports=v},{103:103,118:118,15:15,17:17}],21:[function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=r},{}],22:[function(e,t){"use strict";function n(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var r=e(28),o=e(27),i=e(128);o(n.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),r.addPoolingTo(n),t.exports=n},{128:128,27:27,28:28}],23:[function(e,t){"use strict";var n,r=e(10),o=e(21),i=r.injection.MUST_USE_ATTRIBUTE,a=r.injection.MUST_USE_PROPERTY,u=r.injection.HAS_BOOLEAN_VALUE,s=r.injection.HAS_SIDE_EFFECTS,l=r.injection.HAS_NUMERIC_VALUE,c=r.injection.HAS_POSITIVE_NUMERIC_VALUE,p=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(o.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var f={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|u,allowTransparency:i,alt:null,async:u,autoComplete:null,autoPlay:u,cellPadding:null,cellSpacing:null,charSet:i,checked:a|u,classID:i,className:n?i:a,cols:i|c,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:a|u,coords:null,crossOrigin:null,data:null,dateTime:i,defer:u,dir:null,disabled:i|u,download:p,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:u,formTarget:i,frameBorder:i,headers:null,height:i,hidden:i|u,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:a,label:null,lang:null,list:i,loop:a|u,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,multiple:a|u,muted:a|u,name:null,noValidate:u,open:u,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:a|u,rel:null,required:u,role:i,rows:i|c,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:i|u,selected:a|u,shape:null,size:i|c,sizes:i,span:c,spellCheck:null,src:null,srcDoc:a,srcSet:i,start:l,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:a|s,width:i,wmode:i,autoCapitalize:null,autoCorrect:null,itemProp:i,itemScope:i|u,itemType:i,itemID:i,itemRef:i,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=f},{10:10,21:21}],24:[function(e,t){"use strict";function n(e){s(null==e.props.checkedLink||null==e.props.valueLink)}function r(e){n(e),s(null==e.props.value&&null==e.props.onChange)}function o(e){n(e),s(null==e.props.checked&&null==e.props.onChange)}function i(e){this.props.valueLink.requestChange(e.target.value)}function a(e){this.props.checkedLink.requestChange(e.target.checked)}var u=e(76),s=e(133),l={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(e,t){return!e[t]||l[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(o(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),i):e.props.checkedLink?(o(e),a):e.props.onChange}};t.exports=c},{133:133,76:76}],25:[function(e,t){"use strict";function n(e){e.remove()}var r=e(30),o=e(103),i=e(118),a=e(133),u={trapBubbledEvent:function(e,t){a(this.isMounted());var n=this.getDOMNode();a(n);var i=r.trapBubbledEvent(e,t,n);this._localEventListeners=o(this._localEventListeners,i)},componentWillUnmount:function(){this._localEventListeners&&i(this._localEventListeners,n)}};t.exports=u},{103:103,118:118,133:133,30:30}],26:[function(e,t){"use strict";var n=e(15),r=e(112),o=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===o.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=r)}}};t.exports=i},{112:112,15:15}],27:[function(e,t){"use strict";function n(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o){var i=Object(o);for(var a in i)n.call(i,a)&&(t[a]=i[a])}}return t}t.exports=n},{}],28:[function(e,t){"use strict";var n=e(133),r=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},a=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},u=function(e){var t=this;n(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},s=10,l=r,c=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||l,n.poolSize||(n.poolSize=s),n.release=u,n},p={addPoolingTo:c,oneArgumentPooler:r,twoArgumentPooler:o,threeArgumentPooler:i,fiveArgumentPooler:a};t.exports=p},{133:133}],29:[function(e,t){"use strict";var n=e(115),r={getDOMNode:function(){return n(this)}};t.exports=r},{115:115}],30:[function(e,t){"use strict";function n(e){return Object.prototype.hasOwnProperty.call(e,h)||(e[h]=d++,c[e[h]]={}),c[e[h]]}var r=e(15),o=e(17),i=e(18),a=e(59),u=e(102),s=e(27),l=e(134),c={},p=!1,d=0,f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},h="_reactListenersID"+String(Math.random()).slice(2),m=s({},a,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var o=t,a=n(o),u=i.registrationNameDependencies[e],s=r.topLevelTypes,c=0,p=u.length;p>c;c++){var d=u[c];a.hasOwnProperty(d)&&a[d]||(d===s.topWheel?l("wheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",o):l("mousewheel")?m.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",o):m.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",o):d===s.topScroll?l("scroll",!0)?m.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",o):m.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(l("focus",!0)?(m.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",o),m.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",o)):l("focusin")&&(m.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",o),m.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",o)),a[s.topBlur]=!0,a[s.topFocus]=!0):f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],o),a[d]=!0)}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!p){var e=u.refreshScrollValues;
m.ReactEventListener.monitorScrollValue(e),p=!0}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners});t.exports=m},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t){"use strict";var n=e(79),r=e(116),o=e(132),i=e(147),a={instantiateChildren:function(e){var t=r(e);for(var n in t)if(t.hasOwnProperty(n)){var i=t[n],a=o(i,null);t[n]=a}return t},updateChildren:function(e,t,a,u){var s=r(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(i(p,d))n.receiveComponent(c,d,a,u),s[l]=c;else{c&&n.unmountComponent(c,l);var f=o(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||n.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var r=e[t];n.unmountComponent(r)}}};t.exports=a},{116:116,132:132,147:147,79:79}],32:[function(e,t){"use strict";function n(e,t){this.forEachFunction=e,this.forEachContext=t}function r(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function o(e,t,o){if(null==e)return e;var i=n.getPooled(t,o);d(e,r,i),n.release(i)}function i(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function a(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function u(e,t,n){if(null==e)return e;var r={},o=i.getPooled(r,t,n);return d(e,a,o),i.release(o),p.create(r)}function s(){return null}function l(e){return d(e,s,null)}var c=e(28),p=e(61),d=e(149),f=(e(150),c.twoArgumentPooler),h=c.threeArgumentPooler;c.addPoolingTo(n,f),c.addPoolingTo(i,h);var m={forEach:o,map:u,count:l};t.exports=m},{149:149,150:150,28:28,61:61}],33:[function(e,t){"use strict";function n(e,t){var n=x.hasOwnProperty(t)?x[t]:null;M.hasOwnProperty(t)&&g(n===b.OVERRIDE_BASE),e.hasOwnProperty(t)&&g(n===b.DEFINE_MANY||n===b.DEFINE_MANY_MERGED)}function r(e,t){if(t){g("function"!=typeof t),g(!p.isValidElement(t));var r=e.prototype;t.hasOwnProperty(E)&&D.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==E){var i=t[o];if(n(r,o),D.hasOwnProperty(o))D[o](e,i);else{var s=x.hasOwnProperty(o),l=r.hasOwnProperty(o),c=i&&i.__reactDontBind,d="function"==typeof i,f=d&&!s&&!l&&!c;if(f)r.__reactAutoBindMap||(r.__reactAutoBindMap={}),r.__reactAutoBindMap[o]=i,r[o]=i;else if(l){var h=x[o];g(s&&(h===b.DEFINE_MANY_MERGED||h===b.DEFINE_MANY)),h===b.DEFINE_MANY_MERGED?r[o]=a(r[o],i):h===b.DEFINE_MANY&&(r[o]=u(r[o],i))}else r[o]=i}}}}function o(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in D;g(!o);var i=n in e;g(!i),e[n]=r}}}function i(e,t){g(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(g(void 0===e[n]),e[n]=t[n]);return e}function a(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function s(e,t){var n=t.bind(e);return n}function l(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=s(e,d.guard(n,e.constructor.displayName+"."+t))}}var c=e(34),p=(e(39),e(55)),d=e(58),f=e(65),h=e(66),m=(e(75),e(74),e(84)),v=e(27),g=e(133),y=e(138),C=e(139),E=(e(150),C({mixins:null})),b=y({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],x={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},D={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=v({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=v({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?a(e.getDefaultProps,t):t},propTypes:function(e,t){e.propTypes=v({},e.propTypes,t)},statics:function(e,t){o(e,t)}},M={replaceState:function(e,t){m.enqueueReplaceState(this,e),t&&m.enqueueCallback(this,t)},isMounted:function(){var e=f.get(this);return e&&e!==h.currentlyMountingInstance},setProps:function(e,t){m.enqueueSetProps(this,e),t&&m.enqueueCallback(this,t)},replaceProps:function(e,t){m.enqueueReplaceProps(this,e),t&&m.enqueueCallback(this,t)}},N=function(){};v(N.prototype,c.prototype,M);var I={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&l(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;g("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new N,t.prototype.constructor=t,_.forEach(r.bind(null,t)),r(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),g(t.prototype.render);for(var n in x)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=I},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t){"use strict";function n(e,t){this.props=e,this.context=t}{var r=e(84),o=e(133);e(150)}n.prototype.setState=function(e,t){o("object"==typeof e||"function"==typeof e||null==e),r.enqueueSetState(this,e),t&&r.enqueueCallback(this,t)},n.prototype.forceUpdate=function(e){r.enqueueForceUpdate(this),e&&r.enqueueCallback(this,e)};t.exports=n},{133:133,150:150,84:84}],35:[function(e,t){"use strict";var n=e(44),r=e(68),o={processChildrenUpdates:n.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:n.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){r.purgeID(e)}};t.exports=o},{44:44,68:68}],36:[function(e,t){"use strict";var n=e(133),r=!1,o={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){n(!r),o.unmountIDFromEnvironment=e.unmountIDFromEnvironment,o.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,o.processChildrenUpdates=e.processChildrenUpdates,r=!0}}};t.exports=o},{133:133}],37:[function(e,t){"use strict";function n(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var r=e(36),o=e(38),i=e(39),a=e(55),u=(e(56),e(65)),s=e(66),l=e(71),c=e(73),p=e(75),d=(e(74),e(79)),f=e(85),h=e(27),m=e(113),v=e(133),g=e(147),y=(e(150),1),C={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=y++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=l.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=m,this._instance=a,u.set(a,this);var c=a.state;void 0===c&&(a.state=c=null),v("object"==typeof c&&!Array.isArray(c)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,f=s.currentlyMountingInstance;s.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._renderValidatedComponent()}finally{s.currentlyMountingInstance=f}this._renderedComponent=this._instantiateReactComponent(p,this._currentElement.type);var h=d.mountComponent(this._renderedComponent,e,t,this._processChildContext(n));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),h},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=s.currentlyUnmountingInstance;s.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{s.currentlyUnmountingInstance=t}}d.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,u.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=a.cloneAndReplaceProps(n,h({},n.props,e)),f.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return m;var n=this._currentElement.type.contextTypes;if(!n)return m;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){v("object"==typeof t.constructor.childContextTypes);for(var r in n)v(r in t.constructor.childContextTypes);return h({},e,n)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,r){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{v("function"==typeof e[i]),a=e[i](t,i,o,r)}catch(u){a=u}a instanceof Error&&(n(this),r===p.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&d.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;for(var i=h({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];h(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(g(r,o))d.receiveComponent(n,o,e,this._processChildContext(t));else{var i=this._rootNodeID,a=n._rootNodeID;d.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(o,this._currentElement.type);var u=d.mountComponent(this._renderedComponent,i,e,t);this._replaceNodeWithMarkupByID(a,u)}},_replaceNodeWithMarkupByID:function(e,t){r.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e,t=o.current;o.current=this._processChildContext(this._currentElement._context),i.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{o.current=t,i.current=null}return v(null===e||e===!1||a.isValidElement(e)),e},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===m?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};c.measureMethods(C,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var E={Mixin:C};t.exports=E},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t){"use strict";var n=e(27),r=e(113),o=(e(150),{current:r,withContext:function(e,t){var r,i=o.current;o.current=n({},i,e);try{r=t()}finally{o.current=i}return r}});t.exports=o},{113:113,150:150,27:27}],39:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],40:[function(e,t){"use strict";function n(e){return r.createFactory(e)}var r=e(55),o=(e(56),e(140)),i=o({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);t.exports=i},{140:140,55:55,56:56}],41:[function(e,t){"use strict";var n=e(2),r=e(29),o=e(33),i=e(55),a=e(138),u=i.createFactory("button"),s=a({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),l=o.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[n,r],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&s[t]||(e[t]=this.props[t]);return u(e,this.props.children)}});t.exports=l},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t){"use strict";function n(e){e&&(null!=e.dangerouslySetInnerHTML&&(v(null==e.children),v(null!=e.dangerouslySetInnerHTML.__html)),v(null==e.style||"object"==typeof e.style))}function r(e,t,n,r){var o=p.findReactContainerForID(e);if(o){var i=o.nodeType===x?o.ownerDocument:o;C(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function o(e){T.call(I,e)||(v(N.test(e)),I[e]=!0)}function i(e){o(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var a=e(5),u=e(10),s=e(11),l=e(30),c=e(35),p=e(68),d=e(69),f=e(73),h=e(27),m=e(114),v=e(133),g=(e(134),e(139)),y=(e(150),l.deleteListener),C=l.listenTo,E=l.registrationNameModules,b={string:!0,number:!0},_=g({style:null}),x=1,D=null,M={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},N=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,I={},T={}.hasOwnProperty;i.displayName="ReactDOMComponent",i.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,r){this._rootNodeID=e,n(this._currentElement.props);var o=M[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,r)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];if(null!=i)if(E.hasOwnProperty(o))r(this._rootNodeID,o,i,e);else{o===_&&(i&&(i=this._previousStyleCopy=h({},t.style)),i=a.createMarkupForStyles(i));var u=s.createMarkupForProperty(o,i);u&&(n+=" "+u)}}if(e.renderToStaticMarkup)return n+">";var l=s.createMarkupForID(this._rootNodeID);return n+" "+l+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=b[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+m(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,r,o){n(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,o,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===_){var s=this._previousStyleCopy;for(o in s)s.hasOwnProperty(o)&&(i=i||{},i[o]="");this._previousStyleCopy=null}else E.hasOwnProperty(n)?y(this._rootNodeID,n):(u.isStandardName[n]||u.isCustomAttribute(n))&&D.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===_?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===_)if(l&&(l=this._previousStyleCopy=h({},l)),c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(i=i||{},i[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(i=i||{},i[o]=l[o])}else i=l;else E.hasOwnProperty(n)?r(this._rootNodeID,n,l,t):(u.isStandardName[n]||u.isCustomAttribute(n))&&D.updatePropertyByID(this._rootNodeID,n,l)}i&&D.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=b[typeof e.children]?e.children:null,i=b[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&D.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),l.deleteAllListeners(this._rootNodeID),c.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},f.measureMethods(i,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),h(i.prototype,i.Mixin,d.Mixin),i.injection={injectIDOperations:function(e){i.BackendIDOperations=D=e}},t.exports=i},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("form"),s=i.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t){"use strict";var n=e(5),r=e(9),o=e(11),i=e(68),a=e(73),u=e(133),s=e(144),l={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c={updatePropertyByID:function(e,t,n){var r=i.getNode(e);u(!l.hasOwnProperty(t)),null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=i.getNode(e);u(!l.hasOwnProperty(t)),o.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var r=i.getNode(e);n.setValueForStyles(r,t)},updateInnerHTMLByID:function(e,t){var n=i.getNode(e);s(n,t)},updateTextContentByID:function(e,t){var n=i.getNode(e);r.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=i.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID);r.processUpdates(e,t)}};a.measureMethods(c,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=c},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("iframe"),s=i.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t){"use strict";var n=e(15),r=e(25),o=e(29),i=e(33),a=e(55),u=a.createFactory("img"),s=i.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[o,r],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});t.exports=s},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(11),i=e(24),a=e(29),u=e(33),s=e(55),l=e(68),c=e(85),p=e(27),d=e(133),f=s.createFactory("input"),h={},m=u.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=p({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=i.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=i.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,f(e,this.props.children)},componentDidMount:function(){var e=l.getID(this.getDOMNode());h[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=l.getID(e);delete h[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=i.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,r=i.getOnChange(this);r&&(t=r.call(this,e)),c.asap(n,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var a=this.getDOMNode(),u=a;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),p=0,f=s.length;f>p;p++){var m=s[p];if(m!==a&&m.form===a.form){var v=l.getID(m);d(v);var g=h[v];d(g),c.asap(n,g)}}}return t}});t.exports=m},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t){"use strict";var n=e(29),r=e(33),o=e(55),i=(e(150),o.createFactory("option")),a=r.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[n],componentWillMount:function(){},render:function(){return i(this.props,this.props.children)}});t.exports=a},{150:150,29:29,33:33,55:55}],49:[function(e,t){"use strict";function n(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=a.getValue(this);null!=e&&this.isMounted()&&o(this,e)}}function r(e,t){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var i=e(2),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=l.createFactory("select"),f=s.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[i,a.Mixin,u],propTypes:{defaultValue:r,value:r},render:function(){var e=p({},this.props);return e.onChange=this._handleChange,e.value=null,d(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=a.getValue(this);null!=e?o(this,e):null!=this.props.defaultValue&&o(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=a.getValue(this);null!=t?(this._pendingUpdate=!1,o(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?o(this,this.props.defaultValue):o(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,r=a.getOnChange(this);return r&&(t=r.call(this,e)),this._pendingUpdate=!0,c.asap(n,this),t}});t.exports=f},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t){"use strict";function n(e,t,n,r){return e===n&&t===r}function r(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function o(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var r=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=n(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=n(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(r,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function a(e,t){if(window.getSelection){var n=window.getSelection(),r=e[l()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=s(e,o),c=s(e,i);if(u&&c){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),n.addRange(p))}}}var u=e(21),s=e(126),l=e(128),c=u.canUseDOM&&"selection"in document&&!("getSelection"in window),p={getOffsets:c?r:o,setOffsets:c?i:a};t.exports=p},{126:126,128:128,21:21}],51:[function(e,t){"use strict";var n=e(11),r=e(35),o=e(42),i=e(27),a=e(114),u=function(){};i(u.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t){this._rootNodeID=e;var r=a(this._stringText);return t.renderToStaticMarkup?r:"<span "+n.createMarkupForID(e)+">"+r+"</span>"},receiveComponent:function(e){if(e!==this._currentElement){this._currentElement=e;var t=""+e;t!==this._stringText&&(this._stringText=t,o.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}},unmountComponent:function(){r.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=u},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(11),i=e(24),a=e(29),u=e(33),s=e(55),l=e(85),c=e(27),p=e(133),d=(e(150),s.createFactory("textarea")),f=u.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(p(null==e),Array.isArray(t)&&(p(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=i.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=c({},this.props);return p(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,d(e,this.state.initialValue)},componentDidUpdate:function(){var e=i.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,r=i.getOnChange(this);return r&&(t=r.call(this,e)),l.asap(n,this),t}});t.exports=f},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var r=e(85),o=e(101),i=e(27),a=e(112),u={initialize:a,close:function(){p.isBatchingUpdates=!1}},s={initialize:a,close:r.flushBatchedUpdates.bind(r)},l=[s,u];i(n.prototype,o.Mixin,{getTransactionWrappers:function(){return l}});var c=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=p.isBatchingUpdates;p.isBatchingUpdates=!0,i?e(t,n,r,o):c.perform(e,null,t,n,r,o)}};t.exports=p},{101:101,112:112,27:27,85:85}],54:[function(e,t){"use strict";function n(e){return f.createClass({tagName:e.toUpperCase(),render:function(){return new I(e,null,null,null,null,this.props)}})}function r(){R.EventEmitter.injectReactEventListener(T),R.EventPluginHub.injectEventPluginOrder(u),R.EventPluginHub.injectInstanceHandle(P),R.EventPluginHub.injectMount(w),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:k,EnterLeaveEventPlugin:s,ChangeEventPlugin:i,MobileSafariClickEventPlugin:p,SelectEventPlugin:S,BeforeInputEventPlugin:o}),R.NativeComponent.injectGenericComponentClass(v),R.NativeComponent.injectTextComponentClass(N),R.NativeComponent.injectAutoWrapper(n),R.Class.injectMixin(d),R.NativeComponent.injectComponentClasses({button:g,form:y,iframe:b,img:C,input:_,option:x,select:D,textarea:M,html:U("html"),head:U("head"),body:U("body")}),R.DOMProperty.injectDOMPropertyConfig(c),R.DOMProperty.injectDOMPropertyConfig(L),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(O),R.Updates.injectBatchingStrategy(m),R.RootIndex.injectCreateReactRootIndex(l.canUseDOM?a.createReactRootIndex:A.createReactRootIndex),R.Component.injectEnvironment(h),R.DOMComponent.injectIDOperations(E)}var o=e(3),i=e(7),a=e(8),u=e(13),s=e(14),l=e(21),c=e(23),p=e(26),d=e(29),f=e(33),h=e(35),m=e(53),v=e(42),g=e(41),y=e(43),C=e(46),E=e(44),b=e(45),_=e(47),x=e(48),D=e(49),M=e(52),N=e(51),I=e(55),T=e(60),R=e(62),P=e(64),w=e(68),O=e(78),S=e(87),A=e(88),k=e(89),L=e(86),U=e(109);t.exports={inject:r}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t){"use strict";var n=e(38),r=e(39),o=e(27),i=(e(150),{key:!0,ref:!0}),a=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};a.prototype={_isReactElement:!0},a.createElement=function(e,t,o){var u,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(u in t)t.hasOwnProperty(u)&&!i.hasOwnProperty(u)&&(s[u]=t[u])
}var p=arguments.length-2;if(1===p)s.children=o;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(u in h)"undefined"==typeof s[u]&&(s[u]=h[u])}return new a(e,l,c,r.current,n.current,s)},a.createFactory=function(e){var t=a.createElement.bind(null,e);return t.type=e,t},a.cloneAndReplaceProps=function(e,t){var n=new a(e.type,e.key,e.ref,e._owner,e._context,t);return n},a.cloneElement=function(e,t,n){var u,s=o({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=r.current),void 0!==t.key&&(l=""+t.key);for(u in t)t.hasOwnProperty(u)&&!i.hasOwnProperty(u)&&(s[u]=t[u])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new a(e.type,l,c,p,e._context,s)},a.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=a},{150:150,27:27,38:38,39:39}],56:[function(e,t){"use strict";function n(){if(g.current){var e=g.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function r(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function o(){var e=g.current;return e&&r(e)||void 0}function i(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,u('Each child in an array or iterator should have a unique "key" prop.',e,t))}function a(e,t,n){x.test(e)&&u("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function u(e,t,n){var i=o(),a="string"==typeof n?n:n.displayName||n.name,u=i||a,s=b[e]||(b[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==g.current){var c=r(t._owner);l=" It was passed a child from "+c+"."}}}function s(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];h.isValidElement(r)&&i(r,t)}else if(h.isValidElement(e))e._store.validated=!0;else if(e){var o=C(e);if(o){if(o!==e.entries)for(var u,s=o.call(e);!(u=s.next()).done;)h.isValidElement(u.value)&&i(u.value,t)}else if("object"==typeof e){var l=m.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&a(c,l[c],t)}}}function l(e,t,r,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{E("function"==typeof t[i]),a=t[i](r,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in _)&&(_[a.message]=!0,n(this))}}function c(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!D.hasOwnProperty(i)){D[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function p(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function d(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&p(t[r],n[r])||(c(r,e),t[r]=n[r]))}}function f(e){if(null!=e.type){var t=y.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&l(n,t.propTypes,e.props,v.prop),"function"==typeof t.getDefaultProps}}var h=e(55),m=e(61),v=e(75),g=(e(74),e(39)),y=e(71),C=e(124),E=e(133),b=(e(150),{}),_={},x=/^\d+$/,D={},M={checkAndWarnForMutatedProps:d,createElement:function(e){var t=h.createElement.apply(this,arguments);if(null==t)return t;for(var n=2;n<arguments.length;n++)s(arguments[n],e);return f(t),t},createFactory:function(e){var t=M.createElement.bind(null,e);return t.type=e,t},cloneElement:function(){for(var e=h.cloneElement.apply(this,arguments),t=2;t<arguments.length;t++)s(arguments[t],e.type);return f(e),e}};t.exports=M},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t){"use strict";function n(e){l[e]=!0}function r(e){delete l[e]}function o(e){return!!l[e]}var i,a=e(55),u=e(65),s=e(133),l={},c={injectEmptyComponent:function(e){i=a.createFactory(e)}},p=function(){};p.prototype.componentDidMount=function(){var e=u.get(this);e&&n(e._rootNodeID)},p.prototype.componentWillUnmount=function(){var e=u.get(this);e&&r(e._rootNodeID)},p.prototype.render=function(){return s(i),i()};var d=a.createElement(p),f={emptyElement:d,injection:c,isNullComponentID:o};t.exports=f},{133:133,55:55,65:65}],58:[function(e,t){"use strict";var n={guard:function(e){return e}};t.exports=n},{}],59:[function(e,t){"use strict";function n(e){r.enqueueEvents(e),r.processEventQueue()}var r=e(17),o={handleTopLevel:function(e,t,o,i){var a=r.extractEvents(e,t,o,i);n(a)}};t.exports=o},{17:17}],60:[function(e,t){"use strict";function n(e){var t=c.getID(e),n=l.getReactRootIDFromNodeID(t),r=c.findReactContainerForID(n),o=c.getFirstReactDOM(r);return o}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function o(e){for(var t=c.getFirstReactDOM(f(e.nativeEvent))||window,r=t;r;)e.ancestors.push(r),r=n(r);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=c.getID(t)||"";m._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function i(e){var t=h(window);e(t)}var a=e(16),u=e(21),s=e(28),l=e(64),c=e(68),p=e(85),d=e(27),f=e(123),h=e(129);d(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),s.addPoolingTo(r,s.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:u.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?a.listen(r,t,m.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?a.capture(r,t,m.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=i.bind(null,e);a.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{p.batchedUpdates(o,n)}finally{r.release(n)}}}};t.exports=m},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t){"use strict";var n=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=n},{150:150,55:55}],62:[function(e,t){"use strict";var n=e(10),r=e(17),o=e(36),i=e(33),a=e(57),u=e(30),s=e(71),l=e(42),c=e(73),p=e(81),d=e(85),f={Component:o.injection,Class:i.injection,DOMComponent:l.injection,DOMProperty:n.injection,EmptyComponent:a.injection,EventPluginHub:r.injection,EventEmitter:u.injection,NativeComponent:s.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t){"use strict";function n(e){return o(document.documentElement,e)}var r=e(50),o=e(107),i=e(117),a=e(119),u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=a();return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=a(),r=e.focusedElem,o=e.selectionRange;t!==r&&n(r)&&(u.hasSelectionCapabilities(r)&&u.setSelection(r,o),i(r))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if("undefined"==typeof o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",o-n),i.select()}else r.setOffsets(e,t)}};t.exports=u},{107:107,117:117,119:119,50:50}],64:[function(e,t){"use strict";function n(e){return d+e.toString(36)}function r(e,t){return e.charAt(t)===d||t===e.length}function o(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function i(e,t){return 0===t.indexOf(e)&&r(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(d)):""}function u(e,t){if(p(o(e)&&o(t)),p(i(e,t)),e===t)return e;var n,a=e.length+f;for(n=a;n<t.length&&!r(t,n);n++);return t.substr(0,n)}function s(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(r(e,a)&&r(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,i);return p(o(u)),u}function l(e,t,n,r,o,s){e=e||"",t=t||"",p(e!==t);var l=i(t,e);p(l||i(e,t));for(var c=0,d=l?a:u,f=e;;f=d(f,t)){var m;if(o&&f===e||s&&f===t||(m=n(f,l,r)),m===!1||f===t)break;p(c++<h)}}var c=e(81),p=e(133),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(c.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=s(e,t);i!==e&&l(e,i,n,r,!1,!0),i!==t&&l(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(l("",e,t,n,!0,!1),l(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){l("",e,t,n,!0,!1)},_getFirstCommonAncestorID:s,_getNextDescendantID:u,isAncestorIDOf:i,SEPARATOR:d};t.exports=m},{133:133,81:81}],65:[function(e,t){"use strict";var n={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=n},{}],66:[function(e,t){"use strict";var n={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=n},{}],67:[function(e,t){"use strict";var n=e(104),r={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+r.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var o=t.getAttribute(r.CHECKSUM_ATTR_NAME);o=o&&parseInt(o,10);var i=n(e);return i===o}};t.exports=r},{104:104}],68:[function(e,t){"use strict";function n(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function r(e){var t=T(e);return t&&K.getID(t)}function o(e){var t=i(e);if(t)if(k.hasOwnProperty(t)){var n=k[t];n!==e&&(P(!l(n,t)),k[t]=e)}else k[t]=e;return t}function i(e){return e&&e.getAttribute&&e.getAttribute(A)||""}function a(e,t){var n=i(e);n!==t&&delete k[n],e.setAttribute(A,t),k[t]=e}function u(e){return k.hasOwnProperty(e)&&l(k[e],e)||(k[e]=K.findReactNodeByID(e)),k[e]}function s(e){var t=E.get(e)._rootNodeID;return y.isNullComponentID(t)?null:(k.hasOwnProperty(t)&&l(k[t],t)||(k[t]=K.findReactNodeByID(t)),k[t])}function l(e,t){if(e){P(i(e)===t);var n=K.findReactContainerForID(t);if(n&&I(n,e))return!0}return!1}function c(e){delete k[e]}function p(e){var t=k[e];return t&&l(t,e)?void(j=t):!1}function d(e){j=null,C.traverseAncestors(e,p);var t=j;return j=null,t}function f(e,t,n,r,o){var i=x.mountComponent(e,t,r,N);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function h(e,t,n,r){var o=M.ReactReconcileTransaction.getPooled();o.perform(f,null,e,t,n,o,r),M.ReactReconcileTransaction.release(o)}var m=e(10),v=e(30),g=(e(39),e(55)),y=(e(56),e(57)),C=e(64),E=e(65),b=e(67),_=e(73),x=e(79),D=e(84),M=e(85),N=e(113),I=e(107),T=e(127),R=e(132),P=e(133),w=e(144),O=e(147),S=(e(150),C.SEPARATOR),A=m.ID_ATTRIBUTE_NAME,k={},L=1,U=9,F={},B={},V=[],j=null,K={_instancesByReactRootID:F,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){D.enqueueElementInternal(e,t),r&&D.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){P(t&&(t.nodeType===L||t.nodeType===U)),v.ensureScrollValueMonitoring();var n=K.registerContainer(t);return F[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return M.batchedUpdates(h,r,o,t,n),r},render:function(e,t,n){P(g.isValidElement(e));var o=F[r(t)];if(o){var i=o._currentElement;if(O(i,e))return K._updateRootComponent(o,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=T(t),u=a&&K.isRenderedByReact(a),s=u&&!o,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=g.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return P(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=r(e);return t&&(t=C.getReactRootIDFromNodeID(t)),t||(t=C.createReactRootID()),B[t]=e,t},unmountComponentAtNode:function(e){P(e&&(e.nodeType===L||e.nodeType===U));var t=r(e),n=F[t];return n?(K.unmountComponentFromNode(n,e),delete F[t],delete B[t],!0):!1},unmountComponentFromNode:function(e,t){for(x.unmountComponent(e),t.nodeType===U&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=C.getReactRootIDFromNodeID(e),n=B[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===S:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=V,r=0,o=d(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:C.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,P(!1)},_mountImageIntoNode:function(e,t,r){if(P(t&&(t.nodeType===L||t.nodeType===U)),r){var o=T(t);if(b.canReuseMarkup(e,o))return;var i=o.getAttribute(b.CHECKSUM_ATTR_NAME);o.removeAttribute(b.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(b.CHECKSUM_ATTR_NAME,i);var u=n(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),P(t.nodeType!==U)}P(t.nodeType!==U),w(t,e)},getReactRootID:r,getID:o,setID:a,getNode:u,getNodeFromInstance:s,purgeID:c};_.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t){"use strict";function n(e,t,n){f.push({parentID:e,parentNode:null,type:l.INSERT_MARKUP,markupIndex:h.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){f.push({parentID:e,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function o(e,t){f.push({parentID:e,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function i(e,t){f.push({parentID:e,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function a(){f.length&&(s.processChildrenUpdates(f,h),u())}function u(){f.length=0,h.length=0}var s=e(36),l=e(70),c=e(79),p=e(31),d=0,f=[],h=[],m={Mixin:{mountChildren:function(e,t,n){var r=p.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=c.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){d++;var t=!0;try{var n=this._renderedChildren;p.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{d--,d||(t?u():a())}},updateChildren:function(e,t,n){d++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{d--,d||(r?u():a())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=p.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;p.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){o(this._rootNodeID,e._mountIndex)},setTextContent:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=c.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=m},{31:31,36:36,70:70,79:79}],70:[function(e,t){"use strict";var n=e(138),r=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=r},{138:138}],71:[function(e,t){"use strict";function n(e){if("function"==typeof e.type)return e.type;var t=e.type,n=c[t];return null==n&&(c[t]=n=s(t)),n}function r(e){return u(l),new l(e.type,e.props)}function o(e){return new p(e)}function i(e){return e instanceof p}var a=e(27),u=e(133),s=null,l=null,c={},p=null,d={injectGenericComponentClass:function(e){l=e},injectTextComponentClass:function(e){p=e},injectComponentClasses:function(e){a(c,e)},injectAutoWrapper:function(e){s=e}},f={getComponentClassForElement:n,createInternalComponent:r,createInstanceForText:o,isTextComponent:i,injection:d};t.exports=f},{133:133,27:27}],72:[function(e,t){"use strict";var n=e(133),r={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,o){n(r.isValidOwner(o)),o.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,o){n(r.isValidOwner(o)),o.getPublicInstance().refs[t]===e.getPublicInstance()&&o.detachRef(t)}};t.exports=r},{133:133}],73:[function(e,t){"use strict";function n(e,t,n){return n}var r={enableMeasure:!1,storedMeasure:n,measureMethods:function(){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){r.storedMeasure=e}}};t.exports=r},{}],74:[function(e,t){"use strict";var n={};t.exports=n},{}],75:[function(e,t){"use strict";var n=e(138),r=n({prop:null,context:null,childContext:null});t.exports=r},{138:138}],76:[function(e,t){"use strict";function n(e){function t(t,n,r,o,i){if(o=o||E,null==n[r]){var a=y[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,o){var i=t[n],a=h(i);if(a!==e){var u=y[o],s=m(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return n(t)}function o(){return n(C.thatReturns(null))}function i(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=y[o],u=h(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return n(t)}function a(){function e(e,t,n,r){if(!v.isValidElement(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return n(e)}function u(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=y[o],a=e.name||E;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return n(t)}function s(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=y[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return n(t)}function l(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var u=y[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return n(t)}function c(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=y[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return n(t)}function p(){function e(e,t,n,r){if(!f(e[t])){var o=y[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return n(e)}function d(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var u=y[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return n(t)}function f(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(f);if(null===e||v.isValidElement(e))return!0;e=g.extractIfFragment(e);for(var t in e)if(!f(e[t]))return!1;return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var v=e(55),g=e(61),y=e(74),C=e(112),E="<<anonymous>>",b=a(),_=p(),x={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),any:o(),arrayOf:i,element:b,instanceOf:u,node:_,objectOf:l,oneOf:s,oneOfType:c,shape:d};t.exports=x},{112:112,55:55,61:61,74:74}],77:[function(e,t){"use strict";function n(){this.listenersToPut=[]}var r=e(28),o=e(30),i=e(27);i(n.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{27:27,28:28,30:30}],78:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=r.getPooled(null),this.putListenerQueue=u.getPooled()}var r=e(6),o=e(28),i=e(30),a=e(63),u=e(77),s=e(101),l=e(27),c={initialize:a.getSelectionInformation,close:a.restoreSelection},p={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,c,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,u.release(this.putListenerQueue),this.putListenerQueue=null}};l(n.prototype,s.Mixin,m),o.addPoolingTo(n),t.exports=n},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t){"use strict";function n(){r.attachRefs(this,this._currentElement)}var r=e(80),o=(e(56),{mountComponent:function(e,t,r,o){var i=e.mountComponent(t,r,o);return r.getReactMountReady().enqueue(n,e),i},unmountComponent:function(e){r.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,o,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=r.shouldUpdateRefs(a,t);u&&r.detachRefs(e,a),e.receiveComponent(t,o,i),u&&o.getReactMountReady().enqueue(n,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=o},{56:56,80:80}],80:[function(e,t){"use strict";function n(e,t,n){"function"==typeof e?e(t.getPublicInstance()):o.addComponentAsRefTo(t,e,n)}function r(e,t,n){"function"==typeof e?e(null):o.removeComponentAsRefFrom(t,e,n)}var o=e(72),i={};i.attachRefs=function(e,t){var r=t.ref;null!=r&&n(r,e,t._owner)},i.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},i.detachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},t.exports=i},{72:72}],81:[function(e,t){"use strict";var n={injectCreateReactRootIndex:function(e){r.createReactRootIndex=e}},r={createReactRootIndex:null,injection:n};t.exports=r},{}],82:[function(e,t){"use strict";function n(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=u.getPooled(!1),t.perform(function(){var r=l(e,null),o=r.mountComponent(n,t,s);return a.addChecksumToMarkup(o)},null)}finally{u.release(t)}}function r(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=u.getPooled(!0),t.perform(function(){var r=l(e,null);return r.mountComponent(n,t,s)},null)}finally{u.release(t)}}var o=e(55),i=e(64),a=e(67),u=e(83),s=e(113),l=e(132),c=e(133);t.exports={renderToString:n,renderToStaticMarkup:r}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=o.getPooled(null),this.putListenerQueue=i.getPooled()}var r=e(28),o=e(6),i=e(77),a=e(101),u=e(27),s=e(112),l={initialize:function(){this.reactMountReady.reset()},close:s},c={initialize:function(){this.putListenerQueue.reset()},close:s},p=[c,l],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,i.release(this.putListenerQueue),this.putListenerQueue=null}};u(n.prototype,a.Mixin,d),r.addPoolingTo(n),t.exports=n},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t){"use strict";function n(e){e!==o.currentlyMountingInstance&&s.enqueueUpdate(e)}function r(e){c(null==i.current);var t=u.get(e);return t?t===o.currentlyUnmountingInstance?null:t:null}var o=e(66),i=e(39),a=e(55),u=e(65),s=e(85),l=e(27),c=e(133),p=(e(150),{enqueueCallback:function(e,t){c("function"==typeof t);var i=r(e);return i&&i!==o.currentlyMountingInstance?(i._pendingCallbacks?i._pendingCallbacks.push(t):i._pendingCallbacks=[t],void n(i)):null},enqueueCallbackInternal:function(e,t){c("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],n(e)},enqueueForceUpdate:function(e){var t=r(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,n(t))},enqueueReplaceState:function(e,t){var o=r(e,"replaceState");o&&(o._pendingStateQueue=[t],o._pendingReplaceState=!0,n(o))},enqueueSetState:function(e,t){var o=r(e,"setState");if(o){var i=o._pendingStateQueue||(o._pendingStateQueue=[]);i.push(t),n(o)}},enqueueSetProps:function(e,t){var o=r(e,"setProps");if(o){c(o._isTopLevel);var i=o._pendingElement||o._currentElement,u=l({},i.props,t);o._pendingElement=a.cloneAndReplaceProps(i,u),n(o)}},enqueueReplaceProps:function(e,t){var o=r(e,"replaceProps");if(o){c(o._isTopLevel);var i=o._pendingElement||o._currentElement;o._pendingElement=a.cloneAndReplaceProps(i,t),n(o)}},enqueueElementInternal:function(e,t){e._pendingElement=t,n(e)}});t.exports=p},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t){"use strict";function n(){m(M.ReactReconcileTransaction&&C)}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=l.getPooled(),this.reconcileTransaction=M.ReactReconcileTransaction.getPooled()}function o(e,t,r,o,i){n(),C.batchedUpdates(e,t,r,o,i)}function i(e,t){return e._mountOrder-t._mountOrder}function a(e){var t=e.dirtyComponentsLength;m(t===v.length),v.sort(i);for(var n=0;t>n;n++){var r=v[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,d.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r.getPublicInstance())}}function u(e){return n(),C.isBatchingUpdates?void v.push(e):void C.batchedUpdates(u,e)}function s(e,t){m(C.isBatchingUpdates),g.enqueue(e,t),y=!0}var l=e(6),c=e(28),p=(e(39),e(73)),d=e(79),f=e(101),h=e(27),m=e(133),v=(e(150),[]),g=l.getPooled(),y=!1,C=null,E={initialize:function(){this.dirtyComponentsLength=v.length},close:function(){this.dirtyComponentsLength!==v.length?(v.splice(0,this.dirtyComponentsLength),x()):v.length=0}},b={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},_=[E,b];h(r.prototype,f.Mixin,{getTransactionWrappers:function(){return _},destructor:function(){this.dirtyComponentsLength=null,l.release(this.callbackQueue),this.callbackQueue=null,M.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return f.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),c.addPoolingTo(r);var x=function(){for(;v.length||y;){if(v.length){var e=r.getPooled();e.perform(a,null,e),r.release(e)}if(y){y=!1;var t=g;g=l.getPooled(),t.notifyAll(),l.release(t)}}};x=p.measure("ReactUpdates","flushBatchedUpdates",x);var D={injectReconcileTransaction:function(e){m(e),M.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){m(e),m("function"==typeof e.batchedUpdates),m("boolean"==typeof e.isBatchingUpdates),C=e}},M={ReactReconcileTransaction:null,batchedUpdates:o,enqueueUpdate:u,flushBatchedUpdates:x,injection:D,asap:s};t.exports=M},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t){"use strict";var n=e(10),r=n.injection.MUST_USE_ATTRIBUTE,o={Properties:{cx:r,cy:r,d:r,dx:r,dy:r,fill:r,fillOpacity:r,fontFamily:r,fontSize:r,fx:r,fy:r,gradientTransform:r,gradientUnits:r,markerEnd:r,markerMid:r,markerStart:r,offset:r,opacity:r,patternContentUnits:r,patternUnits:r,points:r,preserveAspectRatio:r,r:r,rx:r,ry:r,spreadMethod:r,stopColor:r,stopOpacity:r,stroke:r,strokeDasharray:r,strokeLinecap:r,strokeOpacity:r,strokeWidth:r,textAnchor:r,transform:r,version:r,viewBox:r,x1:r,x2:r,x:r,y1:r,y2:r,y:r},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=o},{10:10}],87:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e){if(g||null==h||h!==s())return null;var t=n(h);if(!v||!p(v,t)){v=t;var r=u.getPooled(f.select,m,e);return r.type="select",r.target=h,i.accumulateTwoPhaseDispatches(r),r}}var o=e(15),i=e(20),a=e(63),u=e(93),s=e(119),l=e(136),c=e(139),p=e(146),d=o.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,g=!1,y={eventTypes:f,extractEvents:function(e,t,n,o){switch(e){case d.topFocus:(l(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:g=!0;break;case d.topContextMenu:case d.topMouseUp:return g=!1,r(o);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return r(o)}}};t.exports=y},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t){"use strict";var n=Math.pow(2,53),r={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=r},{}],89:[function(e,t){"use strict";var n=e(15),r=e(19),o=e(20),i=e(90),a=e(93),u=e(94),s=e(96),l=e(97),c=e(92),p=e(98),d=e(99),f=e(100),h=e(120),m=e(133),v=e(139),g=(e(150),n.topLevelTypes),y={blur:{phasedRegistrationNames:{bubbled:v({onBlur:!0}),captured:v({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:v({onClick:!0}),captured:v({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:v({onContextMenu:!0}),captured:v({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:v({onCopy:!0}),captured:v({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:v({onCut:!0}),captured:v({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:v({onDoubleClick:!0}),captured:v({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:v({onDrag:!0}),captured:v({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:v({onDragEnd:!0}),captured:v({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:v({onDragEnter:!0}),captured:v({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:v({onDragExit:!0}),captured:v({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:v({onDragLeave:!0}),captured:v({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:v({onDragOver:!0}),captured:v({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:v({onDragStart:!0}),captured:v({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:v({onDrop:!0}),captured:v({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:v({onFocus:!0}),captured:v({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:v({onInput:!0}),captured:v({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:v({onKeyDown:!0}),captured:v({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:v({onKeyPress:!0}),captured:v({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:v({onKeyUp:!0}),captured:v({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:v({onLoad:!0}),captured:v({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:v({onError:!0}),captured:v({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:v({onMouseDown:!0}),captured:v({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:v({onMouseMove:!0}),captured:v({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:v({onMouseOut:!0}),captured:v({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:v({onMouseOver:!0}),captured:v({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:v({onMouseUp:!0}),captured:v({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:v({onPaste:!0}),captured:v({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:v({onReset:!0}),captured:v({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:v({onScroll:!0}),captured:v({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:v({onSubmit:!0}),captured:v({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:v({onTouchCancel:!0}),captured:v({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:v({onTouchEnd:!0}),captured:v({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:v({onTouchMove:!0}),captured:v({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:v({onTouchStart:!0}),captured:v({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:v({onWheel:!0}),captured:v({onWheelCapture:!0})}}},C={topBlur:y.blur,topClick:y.click,topContextMenu:y.contextMenu,topCopy:y.copy,topCut:y.cut,topDoubleClick:y.doubleClick,topDrag:y.drag,topDragEnd:y.dragEnd,topDragEnter:y.dragEnter,topDragExit:y.dragExit,topDragLeave:y.dragLeave,topDragOver:y.dragOver,topDragStart:y.dragStart,topDrop:y.drop,topError:y.error,topFocus:y.focus,topInput:y.input,topKeyDown:y.keyDown,topKeyPress:y.keyPress,topKeyUp:y.keyUp,topLoad:y.load,topMouseDown:y.mouseDown,topMouseMove:y.mouseMove,topMouseOut:y.mouseOut,topMouseOver:y.mouseOver,topMouseUp:y.mouseUp,topPaste:y.paste,topReset:y.reset,topScroll:y.scroll,topSubmit:y.submit,topTouchCancel:y.touchCancel,topTouchEnd:y.touchEnd,topTouchMove:y.touchMove,topTouchStart:y.touchStart,topWheel:y.wheel};
for(var E in C)C[E].dependencies=[E];var b={eventTypes:y,executeDispatch:function(e,t,n){var o=r.executeDispatch(e,t,n);o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var v=C[e];if(!v)return null;var y;switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:y=a;break;case g.topKeyPress:if(0===h(r))return null;case g.topKeyDown:case g.topKeyUp:y=s;break;case g.topBlur:case g.topFocus:y=u;break;case g.topClick:if(2===r.button)return null;case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:y=l;break;case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:y=c;break;case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:y=p;break;case g.topScroll:y=d;break;case g.topWheel:y=f;break;case g.topCopy:case g.topCut:case g.topPaste:y=i}m(y);var E=y.getPooled(v,n,r);return o.accumulateTwoPhaseDispatches(E),E}};t.exports=b},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(n,o),t.exports=n},{93:93}],91:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={data:null};r.augmentClass(n,o),t.exports=n},{93:93}],92:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(97),o={dataTransfer:null};r.augmentClass(n,o),t.exports=n},{97:97}],93:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];this[o]=a?a(n):n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=u?i.thatReturnsTrue:i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var r=e(28),o=e(27),i=e(112),a=e(123),u={type:null,target:a,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=u,n.augmentClass=function(e,t){var n=this,i=Object.create(n.prototype);o(i,e.prototype),e.prototype=i,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,r.addPoolingTo(e,r.threeArgumentPooler)},r.addPoolingTo(n,r.threeArgumentPooler),t.exports=n},{112:112,123:123,27:27,28:28}],94:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o={relatedTarget:null};r.augmentClass(n,o),t.exports=n},{99:99}],95:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o={data:null};r.augmentClass(n,o),t.exports=n},{93:93}],96:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(120),i=e(121),a=e(122),u={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:a,charCode:function(e){return"keypress"===e.type?o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(n,u),t.exports=n},{120:120,121:121,122:122,99:99}],97:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(102),i=e(122),a={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}};r.augmentClass(n,a),t.exports=n},{102:102,122:122,99:99}],98:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(99),o=e(122),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o};r.augmentClass(n,i),t.exports=n},{122:122,99:99}],99:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(93),o=e(123),i={view:function(e){if(e.view)return e.view;var t=o(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(n,i),t.exports=n},{123:123,93:93}],100:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(97),o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(n,o),t.exports=n},{97:97}],101:[function(e,t){"use strict";var n=e(133),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,r,o,i,a,u,s){n(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,r,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=o.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===o.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(i){}}}},closeAll:function(e){n(this.isInTransaction());for(var t=this.transactionWrappers,r=e;r<t.length;r++){var i,a=t[r],u=this.wrapperInitData[r];try{i=!0,u!==o.OBSERVED_ERROR&&a.close&&a.close.call(this,u),i=!1}finally{if(i)try{this.closeAll(r+1)}catch(s){}}}this.wrapperInitData.length=0}},o={Mixin:r,OBSERVED_ERROR:{}};t.exports=o},{133:133}],102:[function(e,t){"use strict";var n={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){n.currentScrollLeft=e.x,n.currentScrollTop=e.y}};t.exports=n},{}],103:[function(e,t){"use strict";function n(e,t){if(r(null!=t),null==e)return t;var n=Array.isArray(e),o=Array.isArray(t);return n&&o?(e.push.apply(e,t),e):n?(e.push(t),e):o?[e].concat(t):[e,t]}var r=e(133);t.exports=n},{133:133}],104:[function(e,t){"use strict";function n(e){for(var t=1,n=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%r,n=(n+t)%r;return t|n<<16}var r=65521;t.exports=n},{}],105:[function(e,t){function n(e){return e.replace(r,function(e,t){return t.toUpperCase()})}var r=/-(.)/g;t.exports=n},{}],106:[function(e,t){"use strict";function n(e){return r(e.replace(o,"ms-"))}var r=e(105),o=/^-ms-/;t.exports=n},{105:105}],107:[function(e,t){function n(e,t){return e&&t?e===t?!0:r(e)?!1:r(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var r=e(137);t.exports=n},{137:137}],108:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function r(e){return n(e)?Array.isArray(e)?e.slice():o(e):[e]}var o=e(148);t.exports=r},{148:148}],109:[function(e,t){"use strict";function n(e){var t=o.createFactory(e),n=r.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){i(!1)},render:function(){return t(this.props)}});return n}var r=e(33),o=e(55),i=e(133);t.exports=n},{133:133,33:33,55:55}],110:[function(e,t){function n(e){var t=e.match(l);return t&&t[1].toLowerCase()}function r(e,t){var r=s;u(!!s);var o=n(e),l=o&&a(o);if(l){r.innerHTML=l[1]+e+l[2];for(var c=l[0];c--;)r=r.lastChild}else r.innerHTML=e;var p=r.getElementsByTagName("script");p.length&&(u(t),i(p).forEach(t));for(var d=i(r.childNodes);r.lastChild;)r.removeChild(r.lastChild);return d}var o=e(21),i=e(108),a=e(125),u=e(133),s=o.canUseDOM?document.createElement("div"):null,l=/^\s*<(\w+)/;t.exports=r},{108:108,125:125,133:133,21:21}],111:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.hasOwnProperty(e)&&o[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var r=e(4),o=r.isUnitlessNumber;t.exports=n},{4:4}],112:[function(e,t){function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},t.exports=r},{}],113:[function(e,t){"use strict";var n={};t.exports=n},{}],114:[function(e,t){"use strict";function n(e){return o[e]}function r(e){return(""+e).replace(i,n)}var o={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=r},{}],115:[function(e,t){"use strict";function n(e){return null==e?null:a(e)?e:r.has(e)?o.getNodeFromInstance(e):(i(null==e.render||"function"!=typeof e.render),void i(!1))}{var r=(e(39),e(65)),o=e(68),i=e(133),a=e(135);e(150)}t.exports=n},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t){"use strict";function n(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function r(e){if(null==e)return e;var t={};return o(e,n,t),t}{var o=e(149);e(150)}t.exports=r},{149:149,150:150}],117:[function(e,t){"use strict";function n(e){try{e.focus()}catch(t){}}t.exports=n},{}],118:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],119:[function(e,t){function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],120:[function(e,t){"use strict";function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=n},{}],121:[function(e,t){"use strict";function n(e){if(e.key){var t=o[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var r=e(120),o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{120:120}],122:[function(e,t){"use strict";function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=o[e];return r?!!n[r]:!1}function r(){return n}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=r},{}],123:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],124:[function(e,t){"use strict";function n(e){var t=e&&(r&&e[r]||e[o]);return"function"==typeof t?t:void 0}var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";t.exports=n},{}],125:[function(e,t){function n(e){return o(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var r=e(21),o=e(133),i=r.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},u=[1,'<select multiple="true">',"</select>"],s=[1,"<table>","</table>"],l=[3,"<table><tbody><tr>","</tr></tbody></table>"],c=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:s,colgroup:s,tbody:s,tfoot:s,thead:s,td:l,th:l,circle:c,defs:c,ellipse:c,g:c,line:c,linearGradient:c,path:c,polygon:c,polyline:c,radialGradient:c,rect:c,stop:c,text:c};t.exports=n},{133:133,21:21}],126:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o(e,t){for(var o=n(e),i=0,a=0;o;){if(3===o.nodeType){if(a=i+o.textContent.length,t>=i&&a>=t)return{node:o,offset:t-i};i=a}o=n(r(o))}}t.exports=o},{}],127:[function(e,t){"use strict";function n(e){return e?e.nodeType===r?e.documentElement:e.firstChild:null}var r=9;t.exports=n},{}],128:[function(e,t){"use strict";function n(){return!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText"),o}var r=e(21),o=null;t.exports=n},{21:21}],129:[function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],130:[function(e,t){function n(e){return e.replace(r,"-$1").toLowerCase()}var r=/([A-Z])/g;t.exports=n},{}],131:[function(e,t){"use strict";function n(e){return r(e).replace(o,"-ms-")}var r=e(130),o=/^ms-/;t.exports=n},{130:130}],132:[function(e,t){"use strict";function n(e){return"function"==typeof e&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function r(e,t){var r;if((null===e||e===!1)&&(e=i.emptyElement),"object"==typeof e){var o=e;r=t===o.type&&"string"==typeof o.type?a.createInternalComponent(o):n(o.type)?new o.type(o):new l}else"string"==typeof e||"number"==typeof e?r=a.createInstanceForText(e):s(!1);return r.construct(e),r._mountIndex=0,r._mountImage=null,r}var o=e(37),i=e(57),a=e(71),u=e(27),s=e(133),l=(e(150),function(){});u(l.prototype,o.Mixin,{_instantiateReactComponent:r}),t.exports=r},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t){"use strict";var n=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=n},{}],134:[function(e,t){"use strict";function n(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"==typeof a[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var r,o=e(21);o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{21:21}],135:[function(e,t){function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],136:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}var r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],137:[function(e,t){function n(e){return r(e)&&3==e.nodeType}var r=e(135);t.exports=n},{135:135}],138:[function(e,t){"use strict";var n=e(133),r=function(e){var t,r={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};t.exports=r},{133:133}],139:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],140:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o={};for(var i in e)r.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}var r=Object.prototype.hasOwnProperty;t.exports=n},{}],141:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=n},{}],142:[function(e,t){"use strict";function n(e){return o(r.isValidElement(e)),e}var r=e(55),o=e(133);t.exports=n},{133:133,55:55}],143:[function(e,t){"use strict";function n(e){return'"'+r(e)+'"'}var r=e(114);t.exports=n},{114:114}],144:[function(e,t){"use strict";var n=e(21),r=/^[ \r\n\t\f]/,o=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(i=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),n.canUseDOM){var a=document.createElement("div");a.innerHTML=" ",""===a.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),r.test(t)||"<"===t[0]&&o.test(t)){e.innerHTML=""+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{21:21}],145:[function(e,t){"use strict";var n=e(21),r=e(114),o=e(144),i=function(e,t){e.textContent=t};n.canUseDOM&&("textContent"in document.documentElement||(i=function(e,t){o(e,r(t))})),t.exports=i},{114:114,144:144,21:21}],146:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],147:[function(e,t){"use strict";function n(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=n},{150:150}],148:[function(e,t){function n(e){var t=e.length;if(r(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),r("number"==typeof t),r(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),i=0;t>i;i++)o[i]=e[i];return o}var r=e(133);t.exports=n},{133:133}],149:[function(e,t){"use strict";function n(e){return m[e]}function r(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function o(e){return(""+e).replace(v,n)}function i(e){return"$"+o(e)}function a(e,t,n,o,u){var c=typeof e;if(("undefined"===c||"boolean"===c)&&(e=null),null===e||"string"===c||"number"===c||s.isValidElement(e))return o(u,e,""===t?f+r(e,0):t,n),1;var m,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)m=e[C],v=(""!==t?t+h:f)+r(m,C),g=n+y,y+=a(m,v,g,o,u);else{var E=p(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)m=b.value,v=(""!==t?t+h:f)+r(m,x++),g=n+y,y+=a(m,v,g,o,u);else for(;!(b=_.next()).done;){var D=b.value;D&&(m=D[1],v=(""!==t?t+h:f)+i(D[0])+h+r(m,0),g=n+y,y+=a(m,v,g,o,u))}}else if("object"===c){d(1!==e.nodeType);var M=l.extract(e);for(var N in M)M.hasOwnProperty(N)&&(m=M[N],v=(""!==t?t+h:f)+i(N)+h+r(m,0),g=n+y,y+=a(m,v,g,o,u))}}return y}function u(e,t,n){return null==e?0:a(e,"",0,t,n)}var s=e(55),l=e(61),c=e(64),p=e(124),d=e(133),f=(e(150),c.SEPARATOR),h=":",m={"=":"=0",".":"=1",":":"=2"},v=/[=.:]/g;t.exports=u},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t){"use strict";var n=e(112),r=n;t.exports=r},{112:112}]},{},[1])(1)});
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
var h, aa = this;
function p(b) {
  var a = typeof b;
  if ("object" == a) {
    if (b) {
      if (b instanceof Array) {
        return "array";
      }
      if (b instanceof Object) {
        return a;
      }
      var c = Object.prototype.toString.call(b);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == a && "undefined" == typeof b.call) {
      return "object";
    }
  }
  return a;
}
function ba(b) {
  return b[ca] || (b[ca] = ++da);
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(b, a, c) {
  return b.call.apply(b.bind, arguments);
}
function fa(b, a, c) {
  if (!b) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return b.apply(a, c);
    };
  }
  return function() {
    return b.apply(a, arguments);
  };
}
function ga(b, a, c) {
  ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
  return ga.apply(null, arguments);
}
;function ha(b) {
  return Array.prototype.join.call(arguments, "");
}
;function ia(b, a) {
  for (var c in b) {
    a.call(void 0, b[c], c, b);
  }
}
;function ja(b, a) {
  null != b && this.append.apply(this, arguments);
}
h = ja.prototype;
h.ab = "";
h.set = function(b) {
  this.ab = "" + b;
};
h.append = function(b, a, c) {
  this.ab += b;
  if (null != a) {
    for (var d = 1;d < arguments.length;d++) {
      this.ab += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.ab = "";
};
h.toString = function() {
  return this.ab;
};
function la(b, a) {
  return b > a ? 1 : b < a ? -1 : 0;
}
;if ("undefined" === typeof ma) {
  var ma = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var na = null;
if ("undefined" === typeof oa) {
  var oa = null
}
function pa() {
  return new q(null, 5, [qa, !0, ra, !0, sa, !1, ta, !1, ua, null], null);
}
function r(b) {
  return null != b && !1 !== b;
}
function wa(b) {
  return null == b;
}
function xa(b) {
  return b instanceof Array;
}
function ya(b) {
  return r(b) ? !1 : !0;
}
function u(b, a) {
  return b[p(null == a ? null : a)] ? !0 : b._ ? !0 : !1;
}
function za(b) {
  return null == b ? null : b.constructor;
}
function w(b, a) {
  var c = za(a), c = r(r(c) ? c.Nb : c) ? c.Mb : p(a);
  return Error(["No protocol method ", b, " defined for type ", c, ": ", a].join(""));
}
function Aa(b) {
  var a = b.Mb;
  return r(a) ? a : "" + x(b);
}
var Ba = "undefined" !== typeof Symbol && "function" === p(Symbol) ? Symbol.iterator : "@@iterator";
function Ca(b) {
  for (var a = b.length, c = Array(a), d = 0;;) {
    if (d < a) {
      c[d] = b[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Fa = function() {
  function b(a, b) {
    function c(a, b) {
      a.push(b);
      return a;
    }
    var g = [];
    return Da.e ? Da.e(c, g, b) : Da.call(null, c, g, b);
  }
  function a(a) {
    return c.c(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}(), Ha = {}, Ja = {}, Ka = {}, La = function La(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var c;
  c = La[p(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw w("ICounted.-count", a);
  }
  return c.call(null, a);
}, Ma = function Ma(a) {
  if (a ? a.Y : a) {
    return a.Y(a);
  }
  var c;
  c = Ma[p(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return c.call(null, a);
}, Na = {}, Oa = function Oa(a, c) {
  if (a ? a.K : a) {
    return a.K(a, c);
  }
  var d;
  d = Oa[p(null == a ? null : a)];
  if (!d && (d = Oa._, !d)) {
    throw w("ICollection.-conj", a);
  }
  return d.call(null, a, c);
}, Qa = {}, z = function() {
  function b(a, b, f) {
    if (a ? a.la : a) {
      return a.la(a, b, f);
    }
    var g;
    g = c[p(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw w("IIndexed.-nth", a);
    }
    return g.call(null, a, b, f);
  }
  function a(a, b) {
    if (a ? a.R : a) {
      return a.R(a, b);
    }
    var f;
    f = c[p(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw w("IIndexed.-nth", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), Ra = {}, Ta = function Ta(a) {
  if (a ? a.ba : a) {
    return a.ba(a);
  }
  var c;
  c = Ta[p(null == a ? null : a)];
  if (!c && (c = Ta._, !c)) {
    throw w("ISeq.-first", a);
  }
  return c.call(null, a);
}, Ua = function Ua(a) {
  if (a ? a.ja : a) {
    return a.ja(a);
  }
  var c;
  c = Ua[p(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw w("ISeq.-rest", a);
  }
  return c.call(null, a);
}, Va = {}, Wa = {}, $a = function() {
  function b(a, b, f) {
    if (a ? a.F : a) {
      return a.F(a, b, f);
    }
    var g;
    g = c[p(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw w("ILookup.-lookup", a);
    }
    return g.call(null, a, b, f);
  }
  function a(a, b) {
    if (a ? a.H : a) {
      return a.H(a, b);
    }
    var f;
    f = c[p(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw w("ILookup.-lookup", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), ab = function ab(a, c) {
  if (a ? a.Vb : a) {
    return a.Vb(a, c);
  }
  var d;
  d = ab[p(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return d.call(null, a, c);
}, bb = function bb(a, c, d) {
  if (a ? a.W : a) {
    return a.W(a, c, d);
  }
  var e;
  e = bb[p(null == a ? null : a)];
  if (!e && (e = bb._, !e)) {
    throw w("IAssociative.-assoc", a);
  }
  return e.call(null, a, c, d);
}, cb = {}, db = function db(a, c) {
  if (a ? a.Z : a) {
    return a.Z(a, c);
  }
  var d;
  d = db[p(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw w("IMap.-dissoc", a);
  }
  return d.call(null, a, c);
}, eb = {}, gb = function gb(a) {
  if (a ? a.Zb : a) {
    return a.Zb();
  }
  var c;
  c = gb[p(null == a ? null : a)];
  if (!c && (c = gb._, !c)) {
    throw w("IMapEntry.-key", a);
  }
  return c.call(null, a);
}, hb = function hb(a) {
  if (a ? a.$b : a) {
    return a.$b();
  }
  var c;
  c = hb[p(null == a ? null : a)];
  if (!c && (c = hb._, !c)) {
    throw w("IMapEntry.-val", a);
  }
  return c.call(null, a);
}, ib = {}, kb = function kb(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var c;
  c = kb[p(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw w("IStack.-peek", a);
  }
  return c.call(null, a);
}, lb = function lb(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var c;
  c = lb[p(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw w("IStack.-pop", a);
  }
  return c.call(null, a);
}, mb = {}, nb = function nb(a, c, d) {
  if (a ? a.fc : a) {
    return a.fc(a, c, d);
  }
  var e;
  e = nb[p(null == a ? null : a)];
  if (!e && (e = nb._, !e)) {
    throw w("IVector.-assoc-n", a);
  }
  return e.call(null, a, c, d);
}, pb = function pb(a) {
  if (a ? a.Va : a) {
    return a.Va(a);
  }
  var c;
  c = pb[p(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw w("IDeref.-deref", a);
  }
  return c.call(null, a);
}, qb = {}, rb = function rb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var c;
  c = rb[p(null == a ? null : a)];
  if (!c && (c = rb._, !c)) {
    throw w("IMeta.-meta", a);
  }
  return c.call(null, a);
}, sb = {}, tb = function tb(a, c) {
  if (a ? a.I : a) {
    return a.I(a, c);
  }
  var d;
  d = tb[p(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return d.call(null, a, c);
}, ub = {}, wb = function() {
  function b(a, b, f) {
    if (a ? a.aa : a) {
      return a.aa(a, b, f);
    }
    var g;
    g = c[p(null == a ? null : a)];
    if (!g && (g = c._, !g)) {
      throw w("IReduce.-reduce", a);
    }
    return g.call(null, a, b, f);
  }
  function a(a, b) {
    if (a ? a.$ : a) {
      return a.$(a, b);
    }
    var f;
    f = c[p(null == a ? null : a)];
    if (!f && (f = c._, !f)) {
      throw w("IReduce.-reduce", a);
    }
    return f.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), xb = function xb(a, c, d) {
  if (a ? a.sb : a) {
    return a.sb(a, c, d);
  }
  var e;
  e = xb[p(null == a ? null : a)];
  if (!e && (e = xb._, !e)) {
    throw w("IKVReduce.-kv-reduce", a);
  }
  return e.call(null, a, c, d);
}, yb = function yb(a, c) {
  if (a ? a.A : a) {
    return a.A(a, c);
  }
  var d;
  d = yb[p(null == a ? null : a)];
  if (!d && (d = yb._, !d)) {
    throw w("IEquiv.-equiv", a);
  }
  return d.call(null, a, c);
}, zb = function zb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var c;
  c = zb[p(null == a ? null : a)];
  if (!c && (c = zb._, !c)) {
    throw w("IHash.-hash", a);
  }
  return c.call(null, a);
}, Ab = {}, Bb = function Bb(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var c;
  c = Bb[p(null == a ? null : a)];
  if (!c && (c = Bb._, !c)) {
    throw w("ISeqable.-seq", a);
  }
  return c.call(null, a);
}, Cb = {}, Db = {}, Eb = function Eb(a) {
  if (a ? a.Hb : a) {
    return a.Hb(a);
  }
  var c;
  c = Eb[p(null == a ? null : a)];
  if (!c && (c = Eb._, !c)) {
    throw w("IReversible.-rseq", a);
  }
  return c.call(null, a);
}, Fb = function Fb(a, c) {
  if (a ? a.tc : a) {
    return a.tc(0, c);
  }
  var d;
  d = Fb[p(null == a ? null : a)];
  if (!d && (d = Fb._, !d)) {
    throw w("IWriter.-write", a);
  }
  return d.call(null, a, c);
}, Gb = {}, Ib = function Ib(a, c, d) {
  if (a ? a.C : a) {
    return a.C(a, c, d);
  }
  var e;
  e = Ib[p(null == a ? null : a)];
  if (!e && (e = Ib._, !e)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return e.call(null, a, c, d);
}, Jb = function Jb(a, c, d) {
  if (a ? a.Jb : a) {
    return a.Jb(a, c, d);
  }
  var e;
  e = Jb[p(null == a ? null : a)];
  if (!e && (e = Jb._, !e)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return e.call(null, a, c, d);
}, Kb = function Kb(a, c, d) {
  if (a ? a.Ib : a) {
    return a.Ib(a, c, d);
  }
  var e;
  e = Kb[p(null == a ? null : a)];
  if (!e && (e = Kb._, !e)) {
    throw w("IWatchable.-add-watch", a);
  }
  return e.call(null, a, c, d);
}, Lb = function Lb(a, c) {
  if (a ? a.Kb : a) {
    return a.Kb(a, c);
  }
  var d;
  d = Lb[p(null == a ? null : a)];
  if (!d && (d = Lb._, !d)) {
    throw w("IWatchable.-remove-watch", a);
  }
  return d.call(null, a, c);
}, Mb = function Mb(a) {
  if (a ? a.jb : a) {
    return a.jb(a);
  }
  var c;
  c = Mb[p(null == a ? null : a)];
  if (!c && (c = Mb._, !c)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return c.call(null, a);
}, Nb = function Nb(a, c) {
  if (a ? a.xb : a) {
    return a.xb(a, c);
  }
  var d;
  d = Nb[p(null == a ? null : a)];
  if (!d && (d = Nb._, !d)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return d.call(null, a, c);
}, Ob = function Ob(a) {
  if (a ? a.yb : a) {
    return a.yb(a);
  }
  var c;
  c = Ob[p(null == a ? null : a)];
  if (!c && (c = Ob._, !c)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return c.call(null, a);
}, Pb = function Pb(a, c, d) {
  if (a ? a.wb : a) {
    return a.wb(a, c, d);
  }
  var e;
  e = Pb[p(null == a ? null : a)];
  if (!e && (e = Pb._, !e)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return e.call(null, a, c, d);
}, Qb = function Qb(a, c, d) {
  if (a ? a.sc : a) {
    return a.sc(0, c, d);
  }
  var e;
  e = Qb[p(null == a ? null : a)];
  if (!e && (e = Qb._, !e)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return e.call(null, a, c, d);
}, Rb = function Rb(a) {
  if (a ? a.oc : a) {
    return a.oc();
  }
  var c;
  c = Rb[p(null == a ? null : a)];
  if (!c && (c = Rb._, !c)) {
    throw w("IChunk.-drop-first", a);
  }
  return c.call(null, a);
}, Sb = function Sb(a) {
  if (a ? a.Xb : a) {
    return a.Xb(a);
  }
  var c;
  c = Sb[p(null == a ? null : a)];
  if (!c && (c = Sb._, !c)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return c.call(null, a);
}, Tb = function Tb(a) {
  if (a ? a.Yb : a) {
    return a.Yb(a);
  }
  var c;
  c = Tb[p(null == a ? null : a)];
  if (!c && (c = Tb._, !c)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return c.call(null, a);
}, Ub = function Ub(a) {
  if (a ? a.Wb : a) {
    return a.Wb(a);
  }
  var c;
  c = Ub[p(null == a ? null : a)];
  if (!c && (c = Ub._, !c)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return c.call(null, a);
}, Vb = function Vb(a, c) {
  if (a ? a.ac : a) {
    return a.ac(a, c);
  }
  var d;
  d = Vb[p(null == a ? null : a)];
  if (!d && (d = Vb._, !d)) {
    throw w("IReset.-reset!", a);
  }
  return d.call(null, a, c);
}, Wb = function() {
  function b(a, b, c, d, m) {
    if (a ? a.ec : a) {
      return a.ec(a, b, c, d, m);
    }
    var n;
    n = e[p(null == a ? null : a)];
    if (!n && (n = e._, !n)) {
      throw w("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, m);
  }
  function a(a, b, c, d) {
    if (a ? a.dc : a) {
      return a.dc(a, b, c, d);
    }
    var m;
    m = e[p(null == a ? null : a)];
    if (!m && (m = e._, !m)) {
      throw w("ISwap.-swap!", a);
    }
    return m.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.cc : a) {
      return a.cc(a, b, c);
    }
    var d;
    d = e[p(null == a ? null : a)];
    if (!d && (d = e._, !d)) {
      throw w("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.bc : a) {
      return a.bc(a, b);
    }
    var c;
    c = e[p(null == a ? null : a)];
    if (!c && (c = e._, !c)) {
      throw w("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, k);
      case 4:
        return a.call(this, e, g, k, l);
      case 5:
        return b.call(this, e, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.e = c;
  e.t = a;
  e.M = b;
  return e;
}(), Xb = function Xb(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var c;
  c = Xb[p(null == a ? null : a)];
  if (!c && (c = Xb._, !c)) {
    throw w("IIterable.-iterator", a);
  }
  return c.call(null, a);
};
function Yb(b) {
  this.Uc = b;
  this.B = 0;
  this.l = 1073741824;
}
Yb.prototype.tc = function(b, a) {
  return this.Uc.append(a);
};
function Zb(b) {
  var a = new ja;
  b.C(null, new Yb(a), pa());
  return "" + x(a);
}
var ac = "undefined" !== typeof Math.imul && 0 !== (Math.imul.c ? Math.imul.c(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(b, a) {
  return Math.imul.c ? Math.imul.c(b, a) : Math.imul.call(null, b, a);
} : function(b, a) {
  var c = b & 65535, d = a & 65535;
  return c * d + ((b >>> 16 & 65535) * d + c * (a >>> 16 & 65535) << 16 >>> 0) | 0;
};
function bc(b) {
  b = ac(b | 0, -862048943);
  return ac(b << 15 | b >>> -15, 461845907);
}
function cc(b, a) {
  var c = (b | 0) ^ (a | 0);
  return ac(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function dc(b, a) {
  var c = (b | 0) ^ a, c = ac(c ^ c >>> 16, -2048144789), c = ac(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function ec(b) {
  var a;
  a: {
    a = 1;
    for (var c = 0;;) {
      if (a < b.length) {
        var d = a + 2, c = cc(c, bc(b.charCodeAt(a - 1) | b.charCodeAt(a) << 16));
        a = d;
      } else {
        a = c;
        break a;
      }
    }
  }
  a = 1 === (b.length & 1) ? a ^ bc(b.charCodeAt(b.length - 1)) : a;
  return dc(a, ac(2, b.length));
}
var fc = {}, gc = 0;
function hc(b) {
  255 < gc && (fc = {}, gc = 0);
  var a = fc[b];
  if ("number" !== typeof a) {
    a: {
      if (null != b) {
        if (a = b.length, 0 < a) {
          for (var c = 0, d = 0;;) {
            if (c < a) {
              var e = c + 1, d = ac(31, d) + b.charCodeAt(c), c = e
            } else {
              a = d;
              break a;
            }
          }
        } else {
          a = 0;
        }
      } else {
        a = 0;
      }
    }
    fc[b] = a;
    gc += 1;
  }
  return b = a;
}
function ic(b) {
  b && (b.l & 4194304 || b.Yc) ? b = b.D(null) : "number" === typeof b ? b = (Math.floor.d ? Math.floor.d(b) : Math.floor.call(null, b)) % 2147483647 : !0 === b ? b = 1 : !1 === b ? b = 0 : "string" === typeof b ? (b = hc(b), 0 !== b && (b = bc(b), b = cc(0, b), b = dc(b, 4))) : b = b instanceof Date ? b.valueOf() : null == b ? 0 : zb(b);
  return b;
}
function jc(b, a) {
  return b ^ a + 2654435769 + (b << 6) + (b >> 2);
}
function kc(b, a) {
  if (b.Aa === a.Aa) {
    return 0;
  }
  var c = ya(b.ga);
  if (r(c ? a.ga : c)) {
    return-1;
  }
  if (r(b.ga)) {
    if (ya(a.ga)) {
      return 1;
    }
    c = la(b.ga, a.ga);
    return 0 === c ? la(b.name, a.name) : c;
  }
  return la(b.name, a.name);
}
function A(b, a, c, d, e) {
  this.ga = b;
  this.name = a;
  this.Aa = c;
  this.hb = d;
  this.ha = e;
  this.l = 2154168321;
  this.B = 4096;
}
h = A.prototype;
h.C = function(b, a) {
  return Fb(a, this.Aa);
};
h.D = function() {
  var b = this.hb;
  return null != b ? b : this.hb = b = jc(ec(this.name), hc(this.ga));
};
h.I = function(b, a) {
  return new A(this.ga, this.name, this.Aa, this.hb, a);
};
h.G = function() {
  return this.ha;
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return $a.e(b, this, null);
      case 3:
        return $a.e(b, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return $a.e(b, this, null);
  };
  b.e = function(a, b, d) {
    return $a.e(b, this, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return $a.e(b, this, null);
};
h.c = function(b, a) {
  return $a.e(b, this, a);
};
h.A = function(b, a) {
  return a instanceof A ? this.Aa === a.Aa : !1;
};
h.toString = function() {
  return this.Aa;
};
h.equiv = function(b) {
  return this.A(null, b);
};
var lc = function() {
  function b(a, b) {
    var c = null != a ? [x(a), x("/"), x(b)].join("") : b;
    return new A(a, b, c, null, null);
  }
  function a(a) {
    return a instanceof A ? a : c.c(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}();
function B(b) {
  if (null == b) {
    return null;
  }
  if (b && (b.l & 8388608 || b.$c)) {
    return b.J(null);
  }
  if (xa(b) || "string" === typeof b) {
    return 0 === b.length ? null : new D(b, 0);
  }
  if (u(Ab, b)) {
    return Bb(b);
  }
  throw Error([x(b), x(" is not ISeqable")].join(""));
}
function E(b) {
  if (null == b) {
    return null;
  }
  if (b && (b.l & 64 || b.tb)) {
    return b.ba(null);
  }
  b = B(b);
  return null == b ? null : Ta(b);
}
function F(b) {
  return null != b ? b && (b.l & 64 || b.tb) ? b.ja(null) : (b = B(b)) ? Ua(b) : mc : mc;
}
function G(b) {
  return null == b ? null : b && (b.l & 128 || b.Gb) ? b.ia(null) : B(F(b));
}
var nc = function() {
  function b(a, b) {
    return null == a ? null == b : a === b || yb(a, b);
  }
  var a = null, c = function() {
    function b(a, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, a, d, l);
    }
    function c(b, d, e) {
      for (;;) {
        if (a.c(b, d)) {
          if (G(e)) {
            b = d, d = E(e), e = G(e);
          } else {
            return a.c(d, E(e));
          }
        } else {
          return!1;
        }
      }
    }
    b.w = 2;
    b.o = function(a) {
      var b = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return b.call(this, a, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new D(k, 0);
        }
        return c.h(a, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.o = c.o;
  a.d = function() {
    return!0;
  };
  a.c = b;
  a.h = c.h;
  return a;
}();
function oc(b) {
  this.s = b;
}
oc.prototype.next = function() {
  if (null != this.s) {
    var b = E(this.s);
    this.s = G(this.s);
    return{done:!1, value:b};
  }
  return{done:!0, value:null};
};
function pc(b) {
  return new oc(B(b));
}
function rc(b, a) {
  var c = bc(b), c = cc(0, c);
  return dc(c, a);
}
function sc(b) {
  var a = 0, c = 1;
  for (b = B(b);;) {
    if (null != b) {
      a += 1, c = ac(31, c) + ic(E(b)) | 0, b = G(b);
    } else {
      return rc(c, a);
    }
  }
}
var tc = rc(1, 0);
function uc(b) {
  var a = 0, c = 0;
  for (b = B(b);;) {
    if (null != b) {
      a += 1, c = c + ic(E(b)) | 0, b = G(b);
    } else {
      return rc(c, a);
    }
  }
}
var vc = rc(0, 0);
Ka["null"] = !0;
La["null"] = function() {
  return 0;
};
Date.prototype.rb = !0;
Date.prototype.ib = function(b, a) {
  return la(this.valueOf(), a.valueOf());
};
Date.prototype.A = function(b, a) {
  return a instanceof Date && this.valueOf() === a.valueOf();
};
yb.number = function(b, a) {
  return b === a;
};
qb["function"] = !0;
rb["function"] = function() {
  return null;
};
Ha["function"] = !0;
zb._ = function(b) {
  return ba(b);
};
function wc(b) {
  return b + 1;
}
function xc(b) {
  this.U = b;
  this.B = 0;
  this.l = 32768;
}
xc.prototype.Va = function() {
  return this.U;
};
function yc(b) {
  return b instanceof xc;
}
function J(b) {
  return pb(b);
}
var zc = function() {
  function b(a, b, c, d) {
    for (var l = La(a);;) {
      if (d < l) {
        var m = z.c(a, d);
        c = b.c ? b.c(c, m) : b.call(null, c, m);
        if (yc(c)) {
          return pb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function a(a, b, c) {
    var d = La(a), l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = z.c(a, c), l = b.c ? b.c(l, m) : b.call(null, l, m);
        if (yc(l)) {
          return pb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = La(a);
    if (0 === c) {
      return b.v ? b.v() : b.call(null);
    }
    for (var d = z.c(a, 0), l = 1;;) {
      if (l < c) {
        var m = z.c(a, l), d = b.c ? b.c(d, m) : b.call(null, d, m);
        if (yc(d)) {
          return pb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.e = a;
  d.t = b;
  return d;
}(), Ac = function() {
  function b(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        var m = a[d];
        c = b.c ? b.c(c, m) : b.call(null, c, m);
        if (yc(c)) {
          return pb(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function a(a, b, c) {
    var d = a.length, l = c;
    for (c = 0;;) {
      if (c < d) {
        var m = a[c], l = b.c ? b.c(l, m) : b.call(null, l, m);
        if (yc(l)) {
          return pb(l);
        }
        c += 1;
      } else {
        return l;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.v ? b.v() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        var m = a[l], d = b.c ? b.c(d, m) : b.call(null, d, m);
        if (yc(d)) {
          return pb(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.e = a;
  d.t = b;
  return d;
}();
function Bc(b) {
  return b ? b.l & 2 || b.Fc ? !0 : b.l ? !1 : u(Ka, b) : u(Ka, b);
}
function Cc(b) {
  return b ? b.l & 16 || b.pc ? !0 : b.l ? !1 : u(Qa, b) : u(Qa, b);
}
function Dc(b, a) {
  this.f = b;
  this.i = a;
}
Dc.prototype.kc = function() {
  return this.i < this.f.length;
};
Dc.prototype.next = function() {
  var b = this.f[this.i];
  this.i += 1;
  return b;
};
function D(b, a) {
  this.f = b;
  this.i = a;
  this.l = 166199550;
  this.B = 8192;
}
h = D.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.R = function(b, a) {
  var c = a + this.i;
  return c < this.f.length ? this.f[c] : null;
};
h.la = function(b, a, c) {
  b = a + this.i;
  return b < this.f.length ? this.f[b] : c;
};
h.Fb = function() {
  return new Dc(this.f, this.i);
};
h.ia = function() {
  return this.i + 1 < this.f.length ? new D(this.f, this.i + 1) : null;
};
h.L = function() {
  return this.f.length - this.i;
};
h.Hb = function() {
  var b = La(this);
  return 0 < b ? new Ec(this, b - 1, null) : null;
};
h.D = function() {
  return sc(this);
};
h.A = function(b, a) {
  return Fc.c ? Fc.c(this, a) : Fc.call(null, this, a);
};
h.Y = function() {
  return mc;
};
h.$ = function(b, a) {
  return Ac.t(this.f, a, this.f[this.i], this.i + 1);
};
h.aa = function(b, a, c) {
  return Ac.t(this.f, a, c, this.i);
};
h.ba = function() {
  return this.f[this.i];
};
h.ja = function() {
  return this.i + 1 < this.f.length ? new D(this.f, this.i + 1) : mc;
};
h.J = function() {
  return this;
};
h.K = function(b, a) {
  return K.c ? K.c(a, this) : K.call(null, a, this);
};
D.prototype[Ba] = function() {
  return pc(this);
};
var Gc = function() {
  function b(a, b) {
    return b < a.length ? new D(a, b) : null;
  }
  function a(a) {
    return c.c(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}(), L = function() {
  function b(a, b) {
    return Gc.c(a, b);
  }
  function a(a) {
    return Gc.c(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}();
function Ec(b, a, c) {
  this.Db = b;
  this.i = a;
  this.meta = c;
  this.l = 32374990;
  this.B = 8192;
}
h = Ec.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  return 0 < this.i ? new Ec(this.Db, this.i - 1, null) : null;
};
h.L = function() {
  return this.i + 1;
};
h.D = function() {
  return sc(this);
};
h.A = function(b, a) {
  return Fc.c ? Fc.c(this, a) : Fc.call(null, this, a);
};
h.Y = function() {
  var b = this.meta;
  return Hc.c ? Hc.c(mc, b) : Hc.call(null, mc, b);
};
h.$ = function(b, a) {
  return Ic.c ? Ic.c(a, this) : Ic.call(null, a, this);
};
h.aa = function(b, a, c) {
  return Ic.e ? Ic.e(a, c, this) : Ic.call(null, a, c, this);
};
h.ba = function() {
  return z.c(this.Db, this.i);
};
h.ja = function() {
  return 0 < this.i ? new Ec(this.Db, this.i - 1, null) : mc;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new Ec(this.Db, this.i, a);
};
h.K = function(b, a) {
  return K.c ? K.c(a, this) : K.call(null, a, this);
};
Ec.prototype[Ba] = function() {
  return pc(this);
};
yb._ = function(b, a) {
  return b === a;
};
var Kc = function() {
  function b(a, b) {
    return null != a ? Oa(a, b) : Oa(mc, b);
  }
  var a = null, c = function() {
    function b(a, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, a, d, l);
    }
    function c(b, d, e) {
      for (;;) {
        if (r(e)) {
          b = a.c(b, d), d = E(e), e = G(e);
        } else {
          return a.c(b, d);
        }
      }
    }
    b.w = 2;
    b.o = function(a) {
      var b = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 0:
        return Jc;
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new D(k, 0);
        }
        return c.h(a, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.o = c.o;
  a.v = function() {
    return Jc;
  };
  a.d = function(a) {
    return a;
  };
  a.c = b;
  a.h = c.h;
  return a;
}();
function N(b) {
  if (null != b) {
    if (b && (b.l & 2 || b.Fc)) {
      b = b.L(null);
    } else {
      if (xa(b)) {
        b = b.length;
      } else {
        if ("string" === typeof b) {
          b = b.length;
        } else {
          if (u(Ka, b)) {
            b = La(b);
          } else {
            a: {
              b = B(b);
              for (var a = 0;;) {
                if (Bc(b)) {
                  b = a + La(b);
                  break a;
                }
                b = G(b);
                a += 1;
              }
            }
          }
        }
      }
    }
  } else {
    b = 0;
  }
  return b;
}
var Lc = function() {
  function b(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return B(a) ? E(a) : c;
      }
      if (Cc(a)) {
        return z.e(a, b, c);
      }
      if (B(a)) {
        a = G(a), --b;
      } else {
        return c;
      }
    }
  }
  function a(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (B(a)) {
          return E(a);
        }
        throw Error("Index out of bounds");
      }
      if (Cc(a)) {
        return z.c(a, b);
      }
      if (B(a)) {
        var c = G(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), O = function() {
  function b(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.l & 16 || a.pc)) {
      return a.la(null, b, c);
    }
    if (xa(a) || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (u(Qa, a)) {
      return z.c(a, b);
    }
    if (a ? a.l & 64 || a.tb || (a.l ? 0 : u(Ra, a)) : u(Ra, a)) {
      return Lc.e(a, b, c);
    }
    throw Error([x("nth not supported on this type "), x(Aa(za(a)))].join(""));
  }
  function a(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.l & 16 || a.pc)) {
      return a.R(null, b);
    }
    if (xa(a) || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (u(Qa, a)) {
      return z.c(a, b);
    }
    if (a ? a.l & 64 || a.tb || (a.l ? 0 : u(Ra, a)) : u(Ra, a)) {
      return Lc.c(a, b);
    }
    throw Error([x("nth not supported on this type "), x(Aa(za(a)))].join(""));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), Mc = function() {
  function b(a, b, c) {
    return null != a ? a && (a.l & 256 || a.qc) ? a.F(null, b, c) : xa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(Wa, a) ? $a.e(a, b, c) : c : c;
  }
  function a(a, b) {
    return null == a ? null : a && (a.l & 256 || a.qc) ? a.H(null, b) : xa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(Wa, a) ? $a.c(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), Q = function() {
  function b(a, b, c) {
    if (null != a) {
      a = bb(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var g = 0, k;
        for (k = Mb(Nc);;) {
          if (g < b) {
            var l = g + 1;
            k = k.wb(null, a[g], c[g]);
            g = l;
          } else {
            a = Ob(k);
            break a;
          }
        }
      }
    }
    return a;
  }
  var a = null, c = function() {
    function b(a, d, k, l) {
      var m = null;
      if (3 < arguments.length) {
        for (var m = 0, n = Array(arguments.length - 3);m < n.length;) {
          n[m] = arguments[m + 3], ++m;
        }
        m = new D(n, 0);
      }
      return c.call(this, a, d, k, m);
    }
    function c(b, d, e, l) {
      for (;;) {
        if (b = a.e(b, d, e), r(l)) {
          d = E(l), e = E(G(l)), l = G(G(l));
        } else {
          return b;
        }
      }
    }
    b.w = 3;
    b.o = function(a) {
      var b = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var l = E(a);
      a = F(a);
      return c(b, d, l, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, a, e, f);
      default:
        var k = null;
        if (3 < arguments.length) {
          for (var k = 0, l = Array(arguments.length - 3);k < l.length;) {
            l[k] = arguments[k + 3], ++k;
          }
          k = new D(l, 0);
        }
        return c.h(a, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 3;
  a.o = c.o;
  a.e = b;
  a.h = c.h;
  return a;
}(), Oc = function() {
  function b(a, b) {
    return null == a ? null : db(a, b);
  }
  var a = null, c = function() {
    function b(a, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return c.call(this, a, d, l);
    }
    function c(b, d, e) {
      for (;;) {
        if (null == b) {
          return null;
        }
        b = a.c(b, d);
        if (r(e)) {
          d = E(e), e = G(e);
        } else {
          return b;
        }
      }
    }
    b.w = 2;
    b.o = function(a) {
      var b = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return c(b, d, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new D(k, 0);
        }
        return c.h(a, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.o = c.o;
  a.d = function(a) {
    return a;
  };
  a.c = b;
  a.h = c.h;
  return a;
}();
function Qc(b) {
  var a = "function" == p(b);
  return r(a) ? a : b ? r(r(null) ? null : b.Ec) ? !0 : b.ic ? !1 : u(Ha, b) : u(Ha, b);
}
function Rc(b, a) {
  this.k = b;
  this.meta = a;
  this.B = 0;
  this.l = 393217;
}
h = Rc.prototype;
h.call = function() {
  function b(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va, P) {
    a = this.k;
    return R.Eb ? R.Eb(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va, P) : R.call(null, a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va, P);
  }
  function a(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va) {
    a = this;
    return a.k.Ma ? a.k.Ma(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka, va);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka) {
    a = this;
    return a.k.La ? a.k.La(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y, ka);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y) {
    a = this;
    return a.k.Ka ? a.k.Ka(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M, Y);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M) {
    a = this;
    return a.k.Ja ? a.k.Ja(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I, M);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I) {
    a = this;
    return a.k.Ia ? a.k.Ia(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H, I);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H) {
    a = this;
    return a.k.Ha ? a.k.Ha(b, c, d, e, f, g, k, l, m, n, t, y, v, C, H) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C, H);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, t, y, v, C) {
    a = this;
    return a.k.Ga ? a.k.Ga(b, c, d, e, f, g, k, l, m, n, t, y, v, C) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v, C);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, t, y, v) {
    a = this;
    return a.k.Fa ? a.k.Fa(b, c, d, e, f, g, k, l, m, n, t, y, v) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y, v);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, t, y) {
    a = this;
    return a.k.Ea ? a.k.Ea(b, c, d, e, f, g, k, l, m, n, t, y) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t, y);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, t) {
    a = this;
    return a.k.Da ? a.k.Da(b, c, d, e, f, g, k, l, m, n, t) : a.k.call(null, b, c, d, e, f, g, k, l, m, n, t);
  }
  function t(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.k.Ca ? a.k.Ca(b, c, d, e, f, g, k, l, m, n) : a.k.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function v(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.k.Oa ? a.k.Oa(b, c, d, e, f, g, k, l, m) : a.k.call(null, b, c, d, e, f, g, k, l, m);
  }
  function y(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.k.Na ? a.k.Na(b, c, d, e, f, g, k, l) : a.k.call(null, b, c, d, e, f, g, k, l);
  }
  function C(a, b, c, d, e, f, g, k) {
    a = this;
    return a.k.oa ? a.k.oa(b, c, d, e, f, g, k) : a.k.call(null, b, c, d, e, f, g, k);
  }
  function H(a, b, c, d, e, f, g) {
    a = this;
    return a.k.ca ? a.k.ca(b, c, d, e, f, g) : a.k.call(null, b, c, d, e, f, g);
  }
  function I(a, b, c, d, e, f) {
    a = this;
    return a.k.M ? a.k.M(b, c, d, e, f) : a.k.call(null, b, c, d, e, f);
  }
  function M(a, b, c, d, e) {
    a = this;
    return a.k.t ? a.k.t(b, c, d, e) : a.k.call(null, b, c, d, e);
  }
  function Y(a, b, c, d) {
    a = this;
    return a.k.e ? a.k.e(b, c, d) : a.k.call(null, b, c, d);
  }
  function ka(a, b, c) {
    a = this;
    return a.k.c ? a.k.c(b, c) : a.k.call(null, b, c);
  }
  function va(a, b) {
    a = this;
    return a.k.d ? a.k.d(b) : a.k.call(null, b);
  }
  function Za(a) {
    a = this;
    return a.k.v ? a.k.v() : a.k.call(null);
  }
  var P = null, P = function(P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue, vf, Hg, hi, ok) {
    switch(arguments.length) {
      case 1:
        return Za.call(this, P);
      case 2:
        return va.call(this, P, Ea);
      case 3:
        return ka.call(this, P, Ea, Ga);
      case 4:
        return Y.call(this, P, Ea, Ga, Ia);
      case 5:
        return M.call(this, P, Ea, Ga, Ia, Pa);
      case 6:
        return I.call(this, P, Ea, Ga, Ia, Pa, Sa);
      case 7:
        return H.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa);
      case 8:
        return C.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya);
      case 9:
        return y.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb);
      case 10:
        return v.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb);
      case 11:
        return t.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob);
      case 12:
        return n.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb);
      case 13:
        return m.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb);
      case 14:
        return l.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b);
      case 15:
        return k.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc);
      case 16:
        return g.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc);
      case 17:
        return f.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd);
      case 18:
        return e.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue);
      case 19:
        return d.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue, vf);
      case 20:
        return c.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue, vf, Hg);
      case 21:
        return a.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue, vf, Hg, hi);
      case 22:
        return b.call(this, P, Ea, Ga, Ia, Pa, Sa, Xa, Ya, fb, jb, ob, vb, Hb, $b, qc, Pc, yd, ue, vf, Hg, hi, ok);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  P.d = Za;
  P.c = va;
  P.e = ka;
  P.t = Y;
  P.M = M;
  P.ca = I;
  P.oa = H;
  P.Na = C;
  P.Oa = y;
  P.Ca = v;
  P.Da = t;
  P.Ea = n;
  P.Fa = m;
  P.Ga = l;
  P.Ha = k;
  P.Ia = g;
  P.Ja = f;
  P.Ka = e;
  P.La = d;
  P.Ma = c;
  P.Jc = a;
  P.Eb = b;
  return P;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.v = function() {
  return this.k.v ? this.k.v() : this.k.call(null);
};
h.d = function(b) {
  return this.k.d ? this.k.d(b) : this.k.call(null, b);
};
h.c = function(b, a) {
  return this.k.c ? this.k.c(b, a) : this.k.call(null, b, a);
};
h.e = function(b, a, c) {
  return this.k.e ? this.k.e(b, a, c) : this.k.call(null, b, a, c);
};
h.t = function(b, a, c, d) {
  return this.k.t ? this.k.t(b, a, c, d) : this.k.call(null, b, a, c, d);
};
h.M = function(b, a, c, d, e) {
  return this.k.M ? this.k.M(b, a, c, d, e) : this.k.call(null, b, a, c, d, e);
};
h.ca = function(b, a, c, d, e, f) {
  return this.k.ca ? this.k.ca(b, a, c, d, e, f) : this.k.call(null, b, a, c, d, e, f);
};
h.oa = function(b, a, c, d, e, f, g) {
  return this.k.oa ? this.k.oa(b, a, c, d, e, f, g) : this.k.call(null, b, a, c, d, e, f, g);
};
h.Na = function(b, a, c, d, e, f, g, k) {
  return this.k.Na ? this.k.Na(b, a, c, d, e, f, g, k) : this.k.call(null, b, a, c, d, e, f, g, k);
};
h.Oa = function(b, a, c, d, e, f, g, k, l) {
  return this.k.Oa ? this.k.Oa(b, a, c, d, e, f, g, k, l) : this.k.call(null, b, a, c, d, e, f, g, k, l);
};
h.Ca = function(b, a, c, d, e, f, g, k, l, m) {
  return this.k.Ca ? this.k.Ca(b, a, c, d, e, f, g, k, l, m) : this.k.call(null, b, a, c, d, e, f, g, k, l, m);
};
h.Da = function(b, a, c, d, e, f, g, k, l, m, n) {
  return this.k.Da ? this.k.Da(b, a, c, d, e, f, g, k, l, m, n) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n);
};
h.Ea = function(b, a, c, d, e, f, g, k, l, m, n, t) {
  return this.k.Ea ? this.k.Ea(b, a, c, d, e, f, g, k, l, m, n, t) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t);
};
h.Fa = function(b, a, c, d, e, f, g, k, l, m, n, t, v) {
  return this.k.Fa ? this.k.Fa(b, a, c, d, e, f, g, k, l, m, n, t, v) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v);
};
h.Ga = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y) {
  return this.k.Ga ? this.k.Ga(b, a, c, d, e, f, g, k, l, m, n, t, v, y) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y);
};
h.Ha = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C) {
  return this.k.Ha ? this.k.Ha(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C);
};
h.Ia = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H) {
  return this.k.Ia ? this.k.Ia(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H);
};
h.Ja = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I) {
  return this.k.Ja ? this.k.Ja(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I);
};
h.Ka = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M) {
  return this.k.Ka ? this.k.Ka(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M);
};
h.La = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y) {
  return this.k.La ? this.k.La(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y);
};
h.Ma = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka) {
  return this.k.Ma ? this.k.Ma(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka) : this.k.call(null, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka);
};
h.Jc = function(b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va) {
  var Za = this.k;
  return R.Eb ? R.Eb(Za, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va) : R.call(null, Za, b, a, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va);
};
h.Ec = !0;
h.I = function(b, a) {
  return new Rc(this.k, a);
};
h.G = function() {
  return this.meta;
};
function Hc(b, a) {
  return Qc(b) && !(b ? b.l & 262144 || b.ed || (b.l ? 0 : u(sb, b)) : u(sb, b)) ? new Rc(b, a) : null == b ? null : tb(b, a);
}
function Sc(b) {
  var a = null != b;
  return(a ? b ? b.l & 131072 || b.Mc || (b.l ? 0 : u(qb, b)) : u(qb, b) : a) ? rb(b) : null;
}
function Tc(b) {
  return null == b || ya(B(b));
}
function Uc(b) {
  return null == b ? !1 : b ? b.l & 8 || b.Wc ? !0 : b.l ? !1 : u(Na, b) : u(Na, b);
}
function Vc(b) {
  return null == b ? !1 : b ? b.l & 4096 || b.bd ? !0 : b.l ? !1 : u(ib, b) : u(ib, b);
}
function Wc(b) {
  return b ? b.l & 16777216 || b.ad ? !0 : b.l ? !1 : u(Cb, b) : u(Cb, b);
}
function Xc(b) {
  return null == b ? !1 : b ? b.l & 1024 || b.Kc ? !0 : b.l ? !1 : u(cb, b) : u(cb, b);
}
function Yc(b) {
  return b ? b.l & 16384 || b.cd ? !0 : b.l ? !1 : u(mb, b) : u(mb, b);
}
function Zc(b) {
  return b ? b.B & 512 || b.Vc ? !0 : !1 : !1;
}
function $c(b) {
  var a = [];
  ia(b, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(b, a));
  return a;
}
function ad(b, a, c, d, e) {
  for (;0 !== e;) {
    c[d] = b[a], d += 1, --e, a += 1;
  }
}
function bd(b, a, c, d, e) {
  a += e - 1;
  for (d += e - 1;0 !== e;) {
    c[d] = b[a], --d, --e, --a;
  }
}
var cd = {};
function dd(b) {
  return null == b ? !1 : b ? b.l & 64 || b.tb ? !0 : b.l ? !1 : u(Ra, b) : u(Ra, b);
}
function ed(b) {
  return r(b) ? !0 : !1;
}
function fd(b) {
  var a = Qc(b);
  return a ? a : b ? b.l & 1 || b.Xc ? !0 : b.l ? !1 : u(Ja, b) : u(Ja, b);
}
function gd(b, a) {
  return Mc.e(b, a, cd) === cd ? !1 : !0;
}
function hd(b, a) {
  if (b === a) {
    return 0;
  }
  if (null == b) {
    return-1;
  }
  if (null == a) {
    return 1;
  }
  if (za(b) === za(a)) {
    return b && (b.B & 2048 || b.rb) ? b.ib(null, a) : la(b, a);
  }
  throw Error("compare on non-nil objects of different types");
}
var id = function() {
  function b(a, b, c, g) {
    for (;;) {
      var k = hd(O.c(a, g), O.c(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function a(a, b) {
    var f = N(a), g = N(b);
    return f < g ? -1 : f > g ? 1 : c.t(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 4:
        return b.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.t = b;
  return c;
}(), Ic = function() {
  function b(a, b, c) {
    for (c = B(c);;) {
      if (c) {
        var g = E(c);
        b = a.c ? a.c(b, g) : a.call(null, b, g);
        if (yc(b)) {
          return pb(b);
        }
        c = G(c);
      } else {
        return b;
      }
    }
  }
  function a(a, b) {
    var c = B(b);
    if (c) {
      var g = E(c), c = G(c);
      return Da.e ? Da.e(a, g, c) : Da.call(null, a, g, c);
    }
    return a.v ? a.v() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), Da = function() {
  function b(a, b, c) {
    return c && (c.l & 524288 || c.Nc) ? c.aa(null, a, b) : xa(c) ? Ac.e(c, a, b) : "string" === typeof c ? Ac.e(c, a, b) : u(ub, c) ? wb.e(c, a, b) : Ic.e(a, b, c);
  }
  function a(a, b) {
    return b && (b.l & 524288 || b.Nc) ? b.$(null, a) : xa(b) ? Ac.c(b, a) : "string" === typeof b ? Ac.c(b, a) : u(ub, b) ? wb.c(b, a) : Ic.c(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function jd(b, a, c) {
  return null != c ? xb(c, b, a) : a;
}
function kd(b) {
  return b;
}
var ld = function() {
  function b(a, b, c, g) {
    a = a.d ? a.d(b) : a.call(null, b);
    c = Da.e(a, c, g);
    return a.d ? a.d(c) : a.call(null, c);
  }
  function a(a, b, f) {
    return c.t(a, b, b.v ? b.v() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, c, e, f);
      case 4:
        return b.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = a;
  c.t = b;
  return c;
}();
function md(b) {
  return b - 1;
}
function nd(b, a) {
  return(b % a + a) % a;
}
function od(b) {
  b = (b - b % 2) / 2;
  return 0 <= b ? Math.floor.d ? Math.floor.d(b) : Math.floor.call(null, b) : Math.ceil.d ? Math.ceil.d(b) : Math.ceil.call(null, b);
}
function pd(b) {
  b -= b >> 1 & 1431655765;
  b = (b & 858993459) + (b >> 2 & 858993459);
  return 16843009 * (b + (b >> 4) & 252645135) >> 24;
}
var x = function() {
  function b(a) {
    return null == a ? "" : ha(a);
  }
  var a = null, c = function() {
    function b(a, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return c.call(this, a, k);
    }
    function c(b, d) {
      for (var e = new ja(a.d(b)), l = d;;) {
        if (r(l)) {
          e = e.append(a.d(E(l))), l = G(l);
        } else {
          return e.toString();
        }
      }
    }
    b.w = 1;
    b.o = function(a) {
      var b = E(a);
      a = F(a);
      return c(b, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return b.call(this, a);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new D(g, 0);
        }
        return c.h(a, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 1;
  a.o = c.o;
  a.v = function() {
    return "";
  };
  a.d = b;
  a.h = c.h;
  return a;
}(), qd = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(b);
      case 3:
        return a.substring(b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return a.substring(b);
  };
  b.e = function(a, b, d) {
    return a.substring(b, d);
  };
  return b;
}();
function Fc(b, a) {
  var c;
  if (Wc(a)) {
    if (Bc(b) && Bc(a) && N(b) !== N(a)) {
      c = !1;
    } else {
      a: {
        c = B(b);
        for (var d = B(a);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && nc.c(E(c), E(d))) {
            c = G(c), d = G(d);
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
  return ed(c);
}
function rd(b) {
  var a = 0;
  for (b = B(b);;) {
    if (b) {
      var c = E(b), a = (a + (ic(function() {
        var a = c;
        return sd.d ? sd.d(a) : sd.call(null, a);
      }()) ^ ic(function() {
        var a = c;
        return td.d ? td.d(a) : td.call(null, a);
      }()))) % 4503599627370496;
      b = G(b);
    } else {
      return a;
    }
  }
}
function ud(b, a, c, d, e) {
  this.meta = b;
  this.first = a;
  this.Ta = c;
  this.count = d;
  this.n = e;
  this.l = 65937646;
  this.B = 8192;
}
h = ud.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  return 1 === this.count ? null : this.Ta;
};
h.L = function() {
  return this.count;
};
h.ub = function() {
  return this.first;
};
h.vb = function() {
  return Ua(this);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return tb(mc, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return this.first;
};
h.ja = function() {
  return 1 === this.count ? mc : this.Ta;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new ud(a, this.first, this.Ta, this.count, this.n);
};
h.K = function(b, a) {
  return new ud(this.meta, a, this, this.count + 1, null);
};
ud.prototype[Ba] = function() {
  return pc(this);
};
function vd(b) {
  this.meta = b;
  this.l = 65937614;
  this.B = 8192;
}
h = vd.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  return null;
};
h.L = function() {
  return 0;
};
h.ub = function() {
  return null;
};
h.vb = function() {
  throw Error("Can't pop empty list");
};
h.D = function() {
  return tc;
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return this;
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return null;
};
h.ja = function() {
  return mc;
};
h.J = function() {
  return null;
};
h.I = function(b, a) {
  return new vd(a);
};
h.K = function(b, a) {
  return new ud(this.meta, a, null, 1, null);
};
var mc = new vd(null);
vd.prototype[Ba] = function() {
  return pc(this);
};
function wd(b) {
  return(b ? b.l & 134217728 || b.Zc || (b.l ? 0 : u(Db, b)) : u(Db, b)) ? Eb(b) : Da.e(Kc, mc, b);
}
var xd = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    var b;
    if (a instanceof D && 0 === a.i) {
      b = a.f;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.ba(null)), a = a.ia(null);
          } else {
            break a;
          }
        }
      }
    }
    a = b.length;
    for (var e = mc;;) {
      if (0 < a) {
        var f = a - 1, e = e.K(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function zd(b, a, c, d) {
  this.meta = b;
  this.first = a;
  this.Ta = c;
  this.n = d;
  this.l = 65929452;
  this.B = 8192;
}
h = zd.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  return null == this.Ta ? null : B(this.Ta);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return this.first;
};
h.ja = function() {
  return null == this.Ta ? mc : this.Ta;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new zd(a, this.first, this.Ta, this.n);
};
h.K = function(b, a) {
  return new zd(null, a, this, this.n);
};
zd.prototype[Ba] = function() {
  return pc(this);
};
function K(b, a) {
  var c = null == a;
  return(c ? c : a && (a.l & 64 || a.tb)) ? new zd(null, b, a, null) : new zd(null, b, B(a), null);
}
function Ad(b, a) {
  if (b.T === a.T) {
    return 0;
  }
  var c = ya(b.ga);
  if (r(c ? a.ga : c)) {
    return-1;
  }
  if (r(b.ga)) {
    if (ya(a.ga)) {
      return 1;
    }
    c = la(b.ga, a.ga);
    return 0 === c ? la(b.name, a.name) : c;
  }
  return la(b.name, a.name);
}
function S(b, a, c, d) {
  this.ga = b;
  this.name = a;
  this.T = c;
  this.hb = d;
  this.l = 2153775105;
  this.B = 4096;
}
h = S.prototype;
h.C = function(b, a) {
  return Fb(a, [x(":"), x(this.T)].join(""));
};
h.D = function() {
  var b = this.hb;
  return null != b ? b : this.hb = b = jc(ec(this.name), hc(this.ga)) + 2654435769 | 0;
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return Mc.c(b, this);
      case 3:
        return Mc.e(b, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return Mc.c(b, this);
  };
  b.e = function(a, b, d) {
    return Mc.e(b, this, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return Mc.c(b, this);
};
h.c = function(b, a) {
  return Mc.e(b, this, a);
};
h.A = function(b, a) {
  return a instanceof S ? this.T === a.T : !1;
};
h.toString = function() {
  return[x(":"), x(this.T)].join("");
};
h.equiv = function(b) {
  return this.A(null, b);
};
function T(b, a) {
  return b === a ? !0 : b instanceof S && a instanceof S ? b.T === a.T : !1;
}
var Cd = function() {
  function b(a, b) {
    return new S(a, b, [x(r(a) ? [x(a), x("/")].join("") : null), x(b)].join(""), null);
  }
  function a(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof A) {
      var b;
      if (a && (a.B & 4096 || a.rc)) {
        b = a.ga;
      } else {
        throw Error([x("Doesn't support namespace: "), x(a)].join(""));
      }
      return new S(b, Bd.d ? Bd.d(a) : Bd.call(null, a), a.Aa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}();
function Dd(b, a, c, d) {
  this.meta = b;
  this.mb = a;
  this.s = c;
  this.n = d;
  this.B = 0;
  this.l = 32374988;
}
h = Dd.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
function Ed(b) {
  null != b.mb && (b.s = b.mb.v ? b.mb.v() : b.mb.call(null), b.mb = null);
  return b.s;
}
h.G = function() {
  return this.meta;
};
h.ia = function() {
  Bb(this);
  return null == this.s ? null : G(this.s);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  Bb(this);
  return null == this.s ? null : E(this.s);
};
h.ja = function() {
  Bb(this);
  return null != this.s ? F(this.s) : mc;
};
h.J = function() {
  Ed(this);
  if (null == this.s) {
    return null;
  }
  for (var b = this.s;;) {
    if (b instanceof Dd) {
      b = Ed(b);
    } else {
      return this.s = b, B(this.s);
    }
  }
};
h.I = function(b, a) {
  return new Dd(a, this.mb, this.s, this.n);
};
h.K = function(b, a) {
  return K(a, this);
};
Dd.prototype[Ba] = function() {
  return pc(this);
};
function Fd(b, a) {
  this.N = b;
  this.end = a;
  this.B = 0;
  this.l = 2;
}
Fd.prototype.L = function() {
  return this.end;
};
Fd.prototype.add = function(b) {
  this.N[this.end] = b;
  return this.end += 1;
};
Fd.prototype.Q = function() {
  var b = new Gd(this.N, 0, this.end);
  this.N = null;
  return b;
};
function Hd(b) {
  return new Fd(Array(b), 0);
}
function Gd(b, a, c) {
  this.f = b;
  this.off = a;
  this.end = c;
  this.B = 0;
  this.l = 524306;
}
h = Gd.prototype;
h.$ = function(b, a) {
  return Ac.t(this.f, a, this.f[this.off], this.off + 1);
};
h.aa = function(b, a, c) {
  return Ac.t(this.f, a, c, this.off);
};
h.oc = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Gd(this.f, this.off + 1, this.end);
};
h.R = function(b, a) {
  return this.f[this.off + a];
};
h.la = function(b, a, c) {
  return 0 <= a && a < this.end - this.off ? this.f[this.off + a] : c;
};
h.L = function() {
  return this.end - this.off;
};
var Id = function() {
  function b(a, b, c) {
    return new Gd(a, b, c);
  }
  function a(a, b) {
    return new Gd(a, b, a.length);
  }
  function c(a) {
    return new Gd(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.c = a;
  d.e = b;
  return d;
}();
function Jd(b, a, c, d) {
  this.Q = b;
  this.za = a;
  this.meta = c;
  this.n = d;
  this.l = 31850732;
  this.B = 1536;
}
h = Jd.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  if (1 < La(this.Q)) {
    return new Jd(Rb(this.Q), this.za, this.meta, null);
  }
  var b = Bb(this.za);
  return null == b ? null : b;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.meta);
};
h.ba = function() {
  return z.c(this.Q, 0);
};
h.ja = function() {
  return 1 < La(this.Q) ? new Jd(Rb(this.Q), this.za, this.meta, null) : null == this.za ? mc : this.za;
};
h.J = function() {
  return this;
};
h.Xb = function() {
  return this.Q;
};
h.Yb = function() {
  return null == this.za ? mc : this.za;
};
h.I = function(b, a) {
  return new Jd(this.Q, this.za, a, this.n);
};
h.K = function(b, a) {
  return K(a, this);
};
h.Wb = function() {
  return null == this.za ? null : this.za;
};
Jd.prototype[Ba] = function() {
  return pc(this);
};
function Kd(b, a) {
  return 0 === La(b) ? a : new Jd(b, a, null, null);
}
function Ld(b, a) {
  b.add(a);
}
function Md(b) {
  for (var a = [];;) {
    if (B(b)) {
      a.push(E(b)), b = G(b);
    } else {
      return a;
    }
  }
}
function Nd(b, a) {
  if (Bc(b)) {
    return N(b);
  }
  for (var c = b, d = a, e = 0;;) {
    if (0 < d && B(c)) {
      c = G(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Od = function Od(a) {
  return null == a ? null : null == G(a) ? B(E(a)) : K(E(a), Od(G(a)));
}, Pd = function() {
  function b(a, b) {
    return new Dd(null, function() {
      var c = B(a);
      return c ? Zc(c) ? Kd(Sb(c), d.c(Tb(c), b)) : K(E(c), d.c(F(c), b)) : b;
    }, null, null);
  }
  function a(a) {
    return new Dd(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Dd(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      if (2 < arguments.length) {
        for (var f = 0, t = Array(arguments.length - 2);f < t.length;) {
          t[f] = arguments[f + 2], ++f;
        }
        f = new D(t, 0);
      }
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new Dd(null, function() {
          var c = B(a);
          return c ? Zc(c) ? Kd(Sb(c), t(Tb(c), b)) : K(E(c), t(F(c), b)) : r(b) ? t(E(b), G(b)) : null;
        }, null, null);
      }(d.c(a, c), e);
    }
    a.w = 2;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, d);
      case 2:
        return b.call(this, d, g);
      default:
        var l = null;
        if (2 < arguments.length) {
          for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
            m[l] = arguments[l + 2], ++l;
          }
          l = new D(m, 0);
        }
        return e.h(d, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 2;
  d.o = e.o;
  d.v = c;
  d.d = a;
  d.c = b;
  d.h = e.h;
  return d;
}(), Qd = function() {
  function b(a, b, c, d) {
    return K(a, K(b, K(c, d)));
  }
  function a(a, b, c) {
    return K(a, K(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var t = null;
      if (4 < arguments.length) {
        for (var t = 0, v = Array(arguments.length - 4);t < v.length;) {
          v[t] = arguments[t + 4], ++t;
        }
        t = new D(v, 0);
      }
      return b.call(this, c, d, e, m, t);
    }
    function b(a, c, d, e, f) {
      return K(a, K(c, K(d, K(e, Od(f)))));
    }
    a.w = 4;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = G(a);
      var n = E(a);
      a = F(a);
      return b(c, d, e, n, a);
    };
    a.h = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return B(c);
      case 2:
        return K(c, f);
      case 3:
        return a.call(this, c, f, g);
      case 4:
        return b.call(this, c, f, g, k);
      default:
        var m = null;
        if (4 < arguments.length) {
          for (var m = 0, n = Array(arguments.length - 4);m < n.length;) {
            n[m] = arguments[m + 4], ++m;
          }
          m = new D(n, 0);
        }
        return d.h(c, f, g, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 4;
  c.o = d.o;
  c.d = function(a) {
    return B(a);
  };
  c.c = function(a, b) {
    return K(a, b);
  };
  c.e = a;
  c.t = b;
  c.h = d.h;
  return c;
}(), Rd = function() {
  function b() {
    return Mb(Jc);
  }
  var a = null, c = function() {
    function a(c, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Nb(a, c), r(d)) {
          c = E(d), d = G(d);
        } else {
          return a;
        }
      }
    }
    a.w = 2;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a;
      case 2:
        return Nb(a, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new D(k, 0);
        }
        return c.h(a, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.o = c.o;
  a.v = b;
  a.d = function(a) {
    return a;
  };
  a.c = function(a, b) {
    return Nb(a, b);
  };
  a.h = c.h;
  return a;
}(), Sd = function() {
  var b = null, a = function() {
    function a(c, f, g, k) {
      var l = null;
      if (3 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
          m[l] = arguments[l + 3], ++l;
        }
        l = new D(m, 0);
      }
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Pb(a, c, d), r(k)) {
          c = E(k), d = E(G(k)), k = G(G(k));
        } else {
          return a;
        }
      }
    }
    a.w = 3;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var g = E(a);
      a = G(a);
      var k = E(a);
      a = F(a);
      return b(c, g, k, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Pb(b, d, e);
      default:
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new D(k, 0);
        }
        return a.h(b, d, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.w = 3;
  b.o = a.o;
  b.e = function(a, b, e) {
    return Pb(a, b, e);
  };
  b.h = a.h;
  return b;
}();
function Td(b, a, c) {
  var d = B(c);
  if (0 === a) {
    return b.v ? b.v() : b.call(null);
  }
  c = Ta(d);
  var e = Ua(d);
  if (1 === a) {
    return b.d ? b.d(c) : b.d ? b.d(c) : b.call(null, c);
  }
  var d = Ta(e), f = Ua(e);
  if (2 === a) {
    return b.c ? b.c(c, d) : b.c ? b.c(c, d) : b.call(null, c, d);
  }
  var e = Ta(f), g = Ua(f);
  if (3 === a) {
    return b.e ? b.e(c, d, e) : b.e ? b.e(c, d, e) : b.call(null, c, d, e);
  }
  var f = Ta(g), k = Ua(g);
  if (4 === a) {
    return b.t ? b.t(c, d, e, f) : b.t ? b.t(c, d, e, f) : b.call(null, c, d, e, f);
  }
  var g = Ta(k), l = Ua(k);
  if (5 === a) {
    return b.M ? b.M(c, d, e, f, g) : b.M ? b.M(c, d, e, f, g) : b.call(null, c, d, e, f, g);
  }
  var k = Ta(l), m = Ua(l);
  if (6 === a) {
    return b.ca ? b.ca(c, d, e, f, g, k) : b.ca ? b.ca(c, d, e, f, g, k) : b.call(null, c, d, e, f, g, k);
  }
  var l = Ta(m), n = Ua(m);
  if (7 === a) {
    return b.oa ? b.oa(c, d, e, f, g, k, l) : b.oa ? b.oa(c, d, e, f, g, k, l) : b.call(null, c, d, e, f, g, k, l);
  }
  var m = Ta(n), t = Ua(n);
  if (8 === a) {
    return b.Na ? b.Na(c, d, e, f, g, k, l, m) : b.Na ? b.Na(c, d, e, f, g, k, l, m) : b.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Ta(t), v = Ua(t);
  if (9 === a) {
    return b.Oa ? b.Oa(c, d, e, f, g, k, l, m, n) : b.Oa ? b.Oa(c, d, e, f, g, k, l, m, n) : b.call(null, c, d, e, f, g, k, l, m, n);
  }
  var t = Ta(v), y = Ua(v);
  if (10 === a) {
    return b.Ca ? b.Ca(c, d, e, f, g, k, l, m, n, t) : b.Ca ? b.Ca(c, d, e, f, g, k, l, m, n, t) : b.call(null, c, d, e, f, g, k, l, m, n, t);
  }
  var v = Ta(y), C = Ua(y);
  if (11 === a) {
    return b.Da ? b.Da(c, d, e, f, g, k, l, m, n, t, v) : b.Da ? b.Da(c, d, e, f, g, k, l, m, n, t, v) : b.call(null, c, d, e, f, g, k, l, m, n, t, v);
  }
  var y = Ta(C), H = Ua(C);
  if (12 === a) {
    return b.Ea ? b.Ea(c, d, e, f, g, k, l, m, n, t, v, y) : b.Ea ? b.Ea(c, d, e, f, g, k, l, m, n, t, v, y) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y);
  }
  var C = Ta(H), I = Ua(H);
  if (13 === a) {
    return b.Fa ? b.Fa(c, d, e, f, g, k, l, m, n, t, v, y, C) : b.Fa ? b.Fa(c, d, e, f, g, k, l, m, n, t, v, y, C) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C);
  }
  var H = Ta(I), M = Ua(I);
  if (14 === a) {
    return b.Ga ? b.Ga(c, d, e, f, g, k, l, m, n, t, v, y, C, H) : b.Ga ? b.Ga(c, d, e, f, g, k, l, m, n, t, v, y, C, H) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H);
  }
  var I = Ta(M), Y = Ua(M);
  if (15 === a) {
    return b.Ha ? b.Ha(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I) : b.Ha ? b.Ha(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I);
  }
  var M = Ta(Y), ka = Ua(Y);
  if (16 === a) {
    return b.Ia ? b.Ia(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M) : b.Ia ? b.Ia(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M);
  }
  var Y = Ta(ka), va = Ua(ka);
  if (17 === a) {
    return b.Ja ? b.Ja(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y) : b.Ja ? b.Ja(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y);
  }
  var ka = Ta(va), Za = Ua(va);
  if (18 === a) {
    return b.Ka ? b.Ka(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka) : b.Ka ? b.Ka(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka);
  }
  va = Ta(Za);
  Za = Ua(Za);
  if (19 === a) {
    return b.La ? b.La(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va) : b.La ? b.La(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va);
  }
  var P = Ta(Za);
  Ua(Za);
  if (20 === a) {
    return b.Ma ? b.Ma(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va, P) : b.Ma ? b.Ma(c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va, P) : b.call(null, c, d, e, f, g, k, l, m, n, t, v, y, C, H, I, M, Y, ka, va, P);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function b(a, b, c, d, e) {
    b = Qd.t(b, c, d, e);
    c = a.w;
    return a.o ? (d = Nd(b, c + 1), d <= c ? Td(a, d, b) : a.o(b)) : a.apply(a, Md(b));
  }
  function a(a, b, c, d) {
    b = Qd.e(b, c, d);
    c = a.w;
    return a.o ? (d = Nd(b, c + 1), d <= c ? Td(a, d, b) : a.o(b)) : a.apply(a, Md(b));
  }
  function c(a, b, c) {
    b = Qd.c(b, c);
    c = a.w;
    if (a.o) {
      var d = Nd(b, c + 1);
      return d <= c ? Td(a, d, b) : a.o(b);
    }
    return a.apply(a, Md(b));
  }
  function d(a, b) {
    var c = a.w;
    if (a.o) {
      var d = Nd(b, c + 1);
      return d <= c ? Td(a, d, b) : a.o(b);
    }
    return a.apply(a, Md(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, y) {
      var C = null;
      if (5 < arguments.length) {
        for (var C = 0, H = Array(arguments.length - 5);C < H.length;) {
          H[C] = arguments[C + 5], ++C;
        }
        C = new D(H, 0);
      }
      return b.call(this, c, d, e, f, g, C);
    }
    function b(a, c, d, e, f, g) {
      c = K(c, K(d, K(e, K(f, Od(g)))));
      d = a.w;
      return a.o ? (e = Nd(c, d + 1), e <= d ? Td(a, e, c) : a.o(c)) : a.apply(a, Md(c));
    }
    a.w = 5;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = G(a);
      var f = E(a);
      a = G(a);
      var g = E(a);
      a = F(a);
      return b(c, d, e, f, g, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, k, l, m, n, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, n);
      default:
        var v = null;
        if (5 < arguments.length) {
          for (var v = 0, y = Array(arguments.length - 5);v < y.length;) {
            y[v] = arguments[v + 5], ++v;
          }
          v = new D(y, 0);
        }
        return f.h(e, k, l, m, n, v);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 5;
  e.o = f.o;
  e.c = d;
  e.e = c;
  e.t = a;
  e.M = b;
  e.h = f.h;
  return e;
}(), Ud = function() {
  function b(a, b) {
    return!nc.c(a, b);
  }
  var a = null, c = function() {
    function a(c, d, k) {
      var l = null;
      if (2 < arguments.length) {
        for (var l = 0, m = Array(arguments.length - 2);l < m.length;) {
          m[l] = arguments[l + 2], ++l;
        }
        l = new D(m, 0);
      }
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ya(R.t(nc, a, c, d));
    }
    a.w = 2;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = F(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return b.call(this, a, e);
      default:
        var g = null;
        if (2 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
            k[g] = arguments[g + 2], ++g;
          }
          g = new D(k, 0);
        }
        return c.h(a, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 2;
  a.o = c.o;
  a.d = function() {
    return!1;
  };
  a.c = b;
  a.h = c.h;
  return a;
}();
function Vd(b) {
  return B(b) ? b : null;
}
function Wd(b, a) {
  for (;;) {
    if (null == B(a)) {
      return!0;
    }
    var c;
    c = E(a);
    c = b.d ? b.d(c) : b.call(null, c);
    if (r(c)) {
      c = b;
      var d = G(a);
      b = c;
      a = d;
    } else {
      return!1;
    }
  }
}
function Xd(b) {
  for (var a = kd;;) {
    if (B(b)) {
      var c;
      c = E(b);
      c = a.d ? a.d(c) : a.call(null, c);
      if (r(c)) {
        return c;
      }
      b = G(b);
    } else {
      return null;
    }
  }
}
function Yd(b) {
  return function() {
    function a(a, c) {
      return ya(b.c ? b.c(a, c) : b.call(null, a, c));
    }
    function c(a) {
      return ya(b.d ? b.d(a) : b.call(null, a));
    }
    function d() {
      return ya(b.v ? b.v() : b.call(null));
    }
    var e = null, f = function() {
      function a(b, d, e) {
        var f = null;
        if (2 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
            g[f] = arguments[f + 2], ++f;
          }
          f = new D(g, 0);
        }
        return c.call(this, b, d, f);
      }
      function c(a, d, e) {
        return ya(R.t(b, a, d, e));
      }
      a.w = 2;
      a.o = function(a) {
        var b = E(a);
        a = G(a);
        var d = E(a);
        a = F(a);
        return c(b, d, a);
      };
      a.h = c;
      return a;
    }(), e = function(b, e, l) {
      switch(arguments.length) {
        case 0:
          return d.call(this);
        case 1:
          return c.call(this, b);
        case 2:
          return a.call(this, b, e);
        default:
          var m = null;
          if (2 < arguments.length) {
            for (var m = 0, n = Array(arguments.length - 2);m < n.length;) {
              n[m] = arguments[m + 2], ++m;
            }
            m = new D(n, 0);
          }
          return f.h(b, e, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.w = 2;
    e.o = f.o;
    e.v = d;
    e.d = c;
    e.c = a;
    e.h = f.h;
    return e;
  }();
}
function Zd() {
  return function() {
    function b(a) {
      if (0 < arguments.length) {
        for (var b = 0, d = Array(arguments.length - 0);b < d.length;) {
          d[b] = arguments[b + 0], ++b;
        }
      }
      return!1;
    }
    b.w = 0;
    b.o = function(a) {
      B(a);
      return!1;
    };
    b.h = function() {
      return!1;
    };
    return b;
  }();
}
var $d = function() {
  function b(a, b, c) {
    return function() {
      function d(k, l, m) {
        k = c.e ? c.e(k, l, m) : c.call(null, k, l, m);
        k = b.d ? b.d(k) : b.call(null, k);
        return a.d ? a.d(k) : a.call(null, k);
      }
      function l(d, k) {
        var l;
        l = c.c ? c.c(d, k) : c.call(null, d, k);
        l = b.d ? b.d(l) : b.call(null, l);
        return a.d ? a.d(l) : a.call(null, l);
      }
      function m(d) {
        d = c.d ? c.d(d) : c.call(null, d);
        d = b.d ? b.d(d) : b.call(null, d);
        return a.d ? a.d(d) : a.call(null, d);
      }
      function n() {
        var d;
        d = c.v ? c.v() : c.call(null);
        d = b.d ? b.d(d) : b.call(null, d);
        return a.d ? a.d(d) : a.call(null, d);
      }
      var t = null, v = function() {
        function d(a, b, c, e) {
          var f = null;
          if (3 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 3);f < g.length;) {
              g[f] = arguments[f + 3], ++f;
            }
            f = new D(g, 0);
          }
          return k.call(this, a, b, c, f);
        }
        function k(d, l, m, n) {
          d = R.M(c, d, l, m, n);
          d = b.d ? b.d(d) : b.call(null, d);
          return a.d ? a.d(d) : a.call(null, d);
        }
        d.w = 3;
        d.o = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = G(a);
          var d = E(a);
          a = F(a);
          return k(b, c, d, a);
        };
        d.h = k;
        return d;
      }(), t = function(a, b, c, e) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return m.call(this, a);
          case 2:
            return l.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            var f = null;
            if (3 < arguments.length) {
              for (var f = 0, g = Array(arguments.length - 3);f < g.length;) {
                g[f] = arguments[f + 3], ++f;
              }
              f = new D(g, 0);
            }
            return v.h(a, b, c, f);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.w = 3;
      t.o = v.o;
      t.v = n;
      t.d = m;
      t.c = l;
      t.e = d;
      t.h = v.h;
      return t;
    }();
  }
  function a(a, b) {
    return function() {
      function c(d, g, k) {
        d = b.e ? b.e(d, g, k) : b.call(null, d, g, k);
        return a.d ? a.d(d) : a.call(null, d);
      }
      function d(c, g) {
        var k = b.c ? b.c(c, g) : b.call(null, c, g);
        return a.d ? a.d(k) : a.call(null, k);
      }
      function l(c) {
        c = b.d ? b.d(c) : b.call(null, c);
        return a.d ? a.d(c) : a.call(null, c);
      }
      function m() {
        var c = b.v ? b.v() : b.call(null);
        return a.d ? a.d(c) : a.call(null, c);
      }
      var n = null, t = function() {
        function c(a, b, e, f) {
          var g = null;
          if (3 < arguments.length) {
            for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
              k[g] = arguments[g + 3], ++g;
            }
            g = new D(k, 0);
          }
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          c = R.M(b, c, g, k, l);
          return a.d ? a.d(c) : a.call(null, c);
        }
        c.w = 3;
        c.o = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = G(a);
          var e = E(a);
          a = F(a);
          return d(b, c, e, a);
        };
        c.h = d;
        return c;
      }(), n = function(a, b, e, f) {
        switch(arguments.length) {
          case 0:
            return m.call(this);
          case 1:
            return l.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, e);
          default:
            var n = null;
            if (3 < arguments.length) {
              for (var n = 0, M = Array(arguments.length - 3);n < M.length;) {
                M[n] = arguments[n + 3], ++n;
              }
              n = new D(M, 0);
            }
            return t.h(a, b, e, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      n.w = 3;
      n.o = t.o;
      n.v = m;
      n.d = l;
      n.c = d;
      n.e = c;
      n.h = t.h;
      return n;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var n = null;
      if (3 < arguments.length) {
        for (var n = 0, t = Array(arguments.length - 3);n < t.length;) {
          t[n] = arguments[n + 3], ++n;
        }
        n = new D(t, 0);
      }
      return b.call(this, c, d, e, n);
    }
    function b(a, c, d, e) {
      return function(a) {
        return function() {
          function b(a) {
            var d = null;
            if (0 < arguments.length) {
              for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
                e[d] = arguments[d + 0], ++d;
              }
              d = new D(e, 0);
            }
            return c.call(this, d);
          }
          function c(b) {
            b = R.c(E(a), b);
            for (var d = G(a);;) {
              if (d) {
                b = E(d).call(null, b), d = G(d);
              } else {
                return b;
              }
            }
          }
          b.w = 0;
          b.o = function(a) {
            a = B(a);
            return c(a);
          };
          b.h = c;
          return b;
        }();
      }(wd(Qd.t(a, c, d, e)));
    }
    a.w = 3;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = F(a);
      return b(c, d, e, a);
    };
    a.h = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return kd;
      case 1:
        return c;
      case 2:
        return a.call(this, c, f);
      case 3:
        return b.call(this, c, f, g);
      default:
        var l = null;
        if (3 < arguments.length) {
          for (var l = 0, m = Array(arguments.length - 3);l < m.length;) {
            m[l] = arguments[l + 3], ++l;
          }
          l = new D(m, 0);
        }
        return d.h(c, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.w = 3;
  c.o = d.o;
  c.v = function() {
    return kd;
  };
  c.d = function(a) {
    return a;
  };
  c.c = a;
  c.e = b;
  c.h = d.h;
  return c;
}(), ae = function() {
  function b(a, b, c, d) {
    return function() {
      function e(m, n, t) {
        return a.ca ? a.ca(b, c, d, m, n, t) : a.call(null, b, c, d, m, n, t);
      }
      function n(e, m) {
        return a.M ? a.M(b, c, d, e, m) : a.call(null, b, c, d, e, m);
      }
      function t(e) {
        return a.t ? a.t(b, c, d, e) : a.call(null, b, c, d, e);
      }
      function v() {
        return a.e ? a.e(b, c, d) : a.call(null, b, c, d);
      }
      var y = null, C = function() {
        function e(a, b, c, d) {
          var f = null;
          if (3 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 3);f < g.length;) {
              g[f] = arguments[f + 3], ++f;
            }
            f = new D(g, 0);
          }
          return m.call(this, a, b, c, f);
        }
        function m(e, n, t, v) {
          return R.h(a, b, c, d, e, L([n, t, v], 0));
        }
        e.w = 3;
        e.o = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = G(a);
          var d = E(a);
          a = F(a);
          return m(b, c, d, a);
        };
        e.h = m;
        return e;
      }(), y = function(a, b, c, d) {
        switch(arguments.length) {
          case 0:
            return v.call(this);
          case 1:
            return t.call(this, a);
          case 2:
            return n.call(this, a, b);
          case 3:
            return e.call(this, a, b, c);
          default:
            var f = null;
            if (3 < arguments.length) {
              for (var f = 0, g = Array(arguments.length - 3);f < g.length;) {
                g[f] = arguments[f + 3], ++f;
              }
              f = new D(g, 0);
            }
            return C.h(a, b, c, f);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      y.w = 3;
      y.o = C.o;
      y.v = v;
      y.d = t;
      y.c = n;
      y.e = e;
      y.h = C.h;
      return y;
    }();
  }
  function a(a, b, c) {
    return function() {
      function d(e, l, m) {
        return a.M ? a.M(b, c, e, l, m) : a.call(null, b, c, e, l, m);
      }
      function e(d, l) {
        return a.t ? a.t(b, c, d, l) : a.call(null, b, c, d, l);
      }
      function n(d) {
        return a.e ? a.e(b, c, d) : a.call(null, b, c, d);
      }
      function t() {
        return a.c ? a.c(b, c) : a.call(null, b, c);
      }
      var v = null, y = function() {
        function d(a, b, c, f) {
          var g = null;
          if (3 < arguments.length) {
            for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
              k[g] = arguments[g + 3], ++g;
            }
            g = new D(k, 0);
          }
          return e.call(this, a, b, c, g);
        }
        function e(d, l, m, n) {
          return R.h(a, b, c, d, l, L([m, n], 0));
        }
        d.w = 3;
        d.o = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = G(a);
          var d = E(a);
          a = F(a);
          return e(b, c, d, a);
        };
        d.h = e;
        return d;
      }(), v = function(a, b, c, f) {
        switch(arguments.length) {
          case 0:
            return t.call(this);
          case 1:
            return n.call(this, a);
          case 2:
            return e.call(this, a, b);
          case 3:
            return d.call(this, a, b, c);
          default:
            var g = null;
            if (3 < arguments.length) {
              for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
                k[g] = arguments[g + 3], ++g;
              }
              g = new D(k, 0);
            }
            return y.h(a, b, c, g);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      v.w = 3;
      v.o = y.o;
      v.v = t;
      v.d = n;
      v.c = e;
      v.e = d;
      v.h = y.h;
      return v;
    }();
  }
  function c(a, b) {
    return function() {
      function c(d, e, k) {
        return a.t ? a.t(b, d, e, k) : a.call(null, b, d, e, k);
      }
      function d(c, e) {
        return a.e ? a.e(b, c, e) : a.call(null, b, c, e);
      }
      function e(c) {
        return a.c ? a.c(b, c) : a.call(null, b, c);
      }
      function n() {
        return a.d ? a.d(b) : a.call(null, b);
      }
      var t = null, v = function() {
        function c(a, b, e, f) {
          var g = null;
          if (3 < arguments.length) {
            for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
              k[g] = arguments[g + 3], ++g;
            }
            g = new D(k, 0);
          }
          return d.call(this, a, b, e, g);
        }
        function d(c, e, k, l) {
          return R.h(a, b, c, e, k, L([l], 0));
        }
        c.w = 3;
        c.o = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = G(a);
          var e = E(a);
          a = F(a);
          return d(b, c, e, a);
        };
        c.h = d;
        return c;
      }(), t = function(a, b, f, g) {
        switch(arguments.length) {
          case 0:
            return n.call(this);
          case 1:
            return e.call(this, a);
          case 2:
            return d.call(this, a, b);
          case 3:
            return c.call(this, a, b, f);
          default:
            var t = null;
            if (3 < arguments.length) {
              for (var t = 0, Y = Array(arguments.length - 3);t < Y.length;) {
                Y[t] = arguments[t + 3], ++t;
              }
              t = new D(Y, 0);
            }
            return v.h(a, b, f, t);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      t.w = 3;
      t.o = v.o;
      t.v = n;
      t.d = e;
      t.c = d;
      t.e = c;
      t.h = v.h;
      return t;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      if (4 < arguments.length) {
        for (var v = 0, y = Array(arguments.length - 4);v < y.length;) {
          y[v] = arguments[v + 4], ++v;
        }
        v = new D(y, 0);
      }
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          if (0 < arguments.length) {
            for (var c = 0, d = Array(arguments.length - 0);c < d.length;) {
              d[c] = arguments[c + 0], ++c;
            }
            c = new D(d, 0);
          }
          return g.call(this, c);
        }
        function g(b) {
          return R.M(a, c, d, e, Pd.c(f, b));
        }
        b.w = 0;
        b.o = function(a) {
          a = B(a);
          return g(a);
        };
        b.h = g;
        return b;
      }();
    }
    a.w = 4;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = G(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return a.call(this, d, g, k);
      case 4:
        return b.call(this, d, g, k, l);
      default:
        var n = null;
        if (4 < arguments.length) {
          for (var n = 0, t = Array(arguments.length - 4);n < t.length;) {
            t[n] = arguments[n + 4], ++n;
          }
          n = new D(t, 0);
        }
        return e.h(d, g, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 4;
  d.o = e.o;
  d.d = function(a) {
    return a;
  };
  d.c = c;
  d.e = a;
  d.t = b;
  d.h = e.h;
  return d;
}();
function be(b, a, c, d) {
  this.state = b;
  this.meta = a;
  this.pb = c;
  this.X = d;
  this.l = 6455296;
  this.B = 16386;
}
h = be.prototype;
h.D = function() {
  return ba(this);
};
h.Jb = function(b, a, c) {
  for (var d = B(this.X), e = null, f = 0, g = 0;;) {
    if (g < f) {
      b = e.R(null, g);
      var k = O.e(b, 0, null);
      b = O.e(b, 1, null);
      var l = a, m = c;
      b.t ? b.t(k, this, l, m) : b.call(null, k, this, l, m);
      g += 1;
    } else {
      if (b = B(d)) {
        d = b, Zc(d) ? (e = Sb(d), d = Tb(d), b = e, f = N(e), e = b) : (b = E(d), k = O.e(b, 0, null), b = O.e(b, 1, null), e = k, f = a, g = c, b.t ? b.t(e, this, f, g) : b.call(null, e, this, f, g), d = G(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.Ib = function(b, a, c) {
  this.X = Q.e(this.X, a, c);
  return this;
};
h.Kb = function(b, a) {
  return this.X = Oc.c(this.X, a);
};
h.G = function() {
  return this.meta;
};
h.Va = function() {
  return this.state;
};
h.A = function(b, a) {
  return this === a;
};
h.equiv = function(b) {
  return this.A(null, b);
};
var ee = function() {
  function b(a) {
    return new be(a, null, null, null);
  }
  var a = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = dd(c) ? R.c(ce, c) : c, e = Mc.c(d, de), d = Mc.c(d, sa);
      return new be(a, d, e, null);
    }
    a.w = 1;
    a.o = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new D(g, 0);
        }
        return c.h(a, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 1;
  a.o = c.o;
  a.d = b;
  a.h = c.h;
  return a;
}();
function fe(b, a) {
  if (b instanceof be) {
    var c = b.pb;
    if (null != c && !r(c.d ? c.d(a) : c.call(null, a))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = xd(new A(null, "validate", "validate", 1439230700, null), new A(null, "new-value", "new-value", -1567397401, null));
        return ge.d ? ge.d(a) : ge.call(null, a);
      }())].join(""));
    }
    c = b.state;
    b.state = a;
    null != b.X && Jb(b, c, a);
    return a;
  }
  return Vb(b, a);
}
var he = function() {
  function b(a, b, c, d) {
    if (a instanceof be) {
      var e = a.state;
      b = b.e ? b.e(e, c, d) : b.call(null, e, c, d);
      a = fe(a, b);
    } else {
      a = Wb.t(a, b, c, d);
    }
    return a;
  }
  function a(a, b, c) {
    if (a instanceof be) {
      var d = a.state;
      b = b.c ? b.c(d, c) : b.call(null, d, c);
      a = fe(a, b);
    } else {
      a = Wb.e(a, b, c);
    }
    return a;
  }
  function c(a, b) {
    var c;
    a instanceof be ? (c = a.state, c = b.d ? b.d(c) : b.call(null, c), c = fe(a, c)) : c = Wb.c(a, b);
    return c;
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var v = null;
      if (4 < arguments.length) {
        for (var v = 0, y = Array(arguments.length - 4);v < y.length;) {
          y[v] = arguments[v + 4], ++v;
        }
        v = new D(y, 0);
      }
      return b.call(this, c, d, e, f, v);
    }
    function b(a, c, d, e, f) {
      return a instanceof be ? fe(a, R.M(c, a.state, d, e, f)) : Wb.M(a, c, d, e, f);
    }
    a.w = 4;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = G(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return a.call(this, d, g, k);
      case 4:
        return b.call(this, d, g, k, l);
      default:
        var n = null;
        if (4 < arguments.length) {
          for (var n = 0, t = Array(arguments.length - 4);n < t.length;) {
            t[n] = arguments[n + 4], ++n;
          }
          n = new D(t, 0);
        }
        return e.h(d, g, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.w = 4;
  d.o = e.o;
  d.c = c;
  d.e = a;
  d.t = b;
  d.h = e.h;
  return d;
}();
function ie(b) {
  this.state = b;
  this.B = 0;
  this.l = 32768;
}
ie.prototype.Va = function() {
  return this.state;
};
ie.prototype.Oc = function(b) {
  return this.state = b;
};
var je = function() {
  function b(a, b, c, d) {
    return new Dd(null, function() {
      var f = B(b), t = B(c), v = B(d);
      if (f && t && v) {
        var y = K, C;
        C = E(f);
        var H = E(t), I = E(v);
        C = a.e ? a.e(C, H, I) : a.call(null, C, H, I);
        f = y(C, e.t(a, F(f), F(t), F(v)));
      } else {
        f = null;
      }
      return f;
    }, null, null);
  }
  function a(a, b, c) {
    return new Dd(null, function() {
      var d = B(b), f = B(c);
      if (d && f) {
        var t = K, v;
        v = E(d);
        var y = E(f);
        v = a.c ? a.c(v, y) : a.call(null, v, y);
        d = t(v, e.e(a, F(d), F(f)));
      } else {
        d = null;
      }
      return d;
    }, null, null);
  }
  function c(a, b) {
    return new Dd(null, function() {
      var c = B(b);
      if (c) {
        if (Zc(c)) {
          for (var d = Sb(c), f = N(d), t = Hd(f), v = 0;;) {
            if (v < f) {
              Ld(t, function() {
                var b = z.c(d, v);
                return a.d ? a.d(b) : a.call(null, b);
              }()), v += 1;
            } else {
              break;
            }
          }
          return Kd(t.Q(), e.c(a, Tb(c)));
        }
        return K(function() {
          var b = E(c);
          return a.d ? a.d(b) : a.call(null, b);
        }(), e.c(a, F(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          var f = a.d ? a.d(e) : a.call(null, e);
          return b.c ? b.c(d, f) : b.call(null, d, f);
        }
        function d(a) {
          return b.d ? b.d(a) : b.call(null, a);
        }
        function e() {
          return b.v ? b.v() : b.call(null);
        }
        var f = null, v = function() {
          function c(a, b, e) {
            var f = null;
            if (2 < arguments.length) {
              for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
                g[f] = arguments[f + 2], ++f;
              }
              f = new D(g, 0);
            }
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            e = R.e(a, e, f);
            return b.c ? b.c(c, e) : b.call(null, c, e);
          }
          c.w = 2;
          c.o = function(a) {
            var b = E(a);
            a = G(a);
            var c = E(a);
            a = F(a);
            return d(b, c, a);
          };
          c.h = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              var g = null;
              if (2 < arguments.length) {
                for (var g = 0, k = Array(arguments.length - 2);g < k.length;) {
                  k[g] = arguments[g + 2], ++g;
                }
                g = new D(k, 0);
              }
              return v.h(a, b, g);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.w = 2;
        f.o = v.o;
        f.v = e;
        f.d = d;
        f.c = c;
        f.h = v.h;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var y = null;
      if (4 < arguments.length) {
        for (var y = 0, C = Array(arguments.length - 4);y < C.length;) {
          C[y] = arguments[y + 4], ++y;
        }
        y = new D(C, 0);
      }
      return b.call(this, c, d, e, f, y);
    }
    function b(a, c, d, f, g) {
      var k = function H(a) {
        return new Dd(null, function() {
          var b = e.c(B, a);
          return Wd(kd, b) ? K(e.c(E, b), H(e.c(F, b))) : null;
        }, null, null);
      };
      return e.c(function() {
        return function(b) {
          return R.c(a, b);
        };
      }(k), k(Kc.h(g, f, L([d, c], 0))));
    }
    a.w = 4;
    a.o = function(a) {
      var c = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var e = E(a);
      a = G(a);
      var f = E(a);
      a = F(a);
      return b(c, d, e, f, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, k, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return a.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      default:
        var t = null;
        if (4 < arguments.length) {
          for (var t = 0, v = Array(arguments.length - 4);t < v.length;) {
            v[t] = arguments[t + 4], ++t;
          }
          t = new D(v, 0);
        }
        return f.h(e, k, l, m, t);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.w = 4;
  e.o = f.o;
  e.d = d;
  e.c = c;
  e.e = a;
  e.t = b;
  e.h = f.h;
  return e;
}(), ke = function() {
  function b(a, b) {
    return new Dd(null, function() {
      if (0 < a) {
        var f = B(b);
        return f ? K(E(f), c.c(a - 1, F(f))) : null;
      }
      return null;
    }, null, null);
  }
  function a(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var k = pb(a), l = a.Oc(a.Va(null) - 1), k = 0 < k ? b.c ? b.c(d, g) : b.call(null, d, g) : d;
            return 0 < l ? k : yc(k) ? k : new xc(k);
          }
          function d(a) {
            return b.d ? b.d(a) : b.call(null, a);
          }
          function l() {
            return b.v ? b.v() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.v = l;
          m.d = d;
          m.c = c;
          return m;
        }();
      }(new ie(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}(), le = function() {
  function b(a, b) {
    return ke.c(a, c.d(b));
  }
  function a(a) {
    return new Dd(null, function() {
      return K(a.v ? a.v() : a.call(null), c.d(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}(), ne = function() {
  function b(a) {
    return $d.c(je.d(a), me);
  }
  var a = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      return R.c(Pd, R.e(je, a, c));
    }
    a.w = 1;
    a.o = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new D(g, 0);
        }
        return c.h(a, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 1;
  a.o = c.o;
  a.d = b;
  a.h = c.h;
  return a;
}(), oe = function() {
  function b(a, b) {
    return new Dd(null, function() {
      var f = B(b);
      if (f) {
        if (Zc(f)) {
          for (var g = Sb(f), k = N(g), l = Hd(k), m = 0;;) {
            if (m < k) {
              var n;
              n = z.c(g, m);
              n = a.d ? a.d(n) : a.call(null, n);
              r(n) && (n = z.c(g, m), l.add(n));
              m += 1;
            } else {
              break;
            }
          }
          return Kd(l.Q(), c.c(a, Tb(f)));
        }
        g = E(f);
        f = F(f);
        return r(a.d ? a.d(g) : a.call(null, g)) ? K(g, c.c(a, f)) : c.c(a, f);
      }
      return null;
    }, null, null);
  }
  function a(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          return r(a.d ? a.d(g) : a.call(null, g)) ? b.c ? b.c(f, g) : b.call(null, f, g) : f;
        }
        function g(a) {
          return b.d ? b.d(a) : b.call(null, a);
        }
        function k() {
          return b.v ? b.v() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return k.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.v = k;
        l.d = g;
        l.c = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}(), pe = function() {
  function b(a, b) {
    return oe.c(Yd(a), b);
  }
  function a(a) {
    return oe.d(Yd(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}();
function qe(b) {
  return function c(b) {
    return new Dd(null, function() {
      return K(b, r(Wc.d ? Wc.d(b) : Wc.call(null, b)) ? ne.h(c, L([B.d ? B.d(b) : B.call(null, b)], 0)) : null);
    }, null, null);
  }(b);
}
function re(b) {
  return oe.c(function(a) {
    return!Wc(a);
  }, F(qe(b)));
}
var se = function() {
  function b(a, b, c) {
    a && (a.B & 4 || a.Gc) ? (b = ld.t(b, Rd, Mb(a), c), b = Ob(b), a = Hc(b, Sc(a))) : a = ld.t(b, Kc, a, c);
    return a;
  }
  function a(a, b) {
    var c;
    null != a ? a && (a.B & 4 || a.Gc) ? (c = Da.e(Nb, Mb(a), b), c = Ob(c), c = Hc(c, Sc(a))) : c = Da.e(Oa, a, b) : c = Da.e(Kc, mc, b);
    return c;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}(), te = function() {
  function b(a, b, c) {
    var g = cd;
    for (b = B(b);;) {
      if (b) {
        var k = a;
        if (k ? k.l & 256 || k.qc || (k.l ? 0 : u(Wa, k)) : u(Wa, k)) {
          a = Mc.e(a, E(b), g);
          if (g === a) {
            return c;
          }
          b = G(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function a(a, b) {
    return c.e(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function ve(b, a) {
  this.P = b;
  this.f = a;
}
function we(b) {
  return new ve(b, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function xe(b) {
  return new ve(b.P, Ca(b.f));
}
function ye(b) {
  b = b.r;
  return 32 > b ? 0 : b - 1 >>> 5 << 5;
}
function ze(b, a, c) {
  for (;;) {
    if (0 === a) {
      return c;
    }
    var d = we(b);
    d.f[0] = c;
    c = d;
    a -= 5;
  }
}
var Ae = function Ae(a, c, d, e) {
  var f = xe(d), g = a.r - 1 >>> c & 31;
  5 === c ? f.f[g] = e : (d = d.f[g], a = null != d ? Ae(a, c - 5, d, e) : ze(null, c - 5, e), f.f[g] = a);
  return f;
};
function Be(b, a) {
  throw Error([x("No item "), x(b), x(" in vector of length "), x(a)].join(""));
}
function Ce(b, a) {
  if (a >= ye(b)) {
    return b.O;
  }
  for (var c = b.root, d = b.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.f[a >>> d & 31], d = e
    } else {
      return c.f;
    }
  }
}
function De(b, a) {
  return 0 <= a && a < b.r ? Ce(b, a) : Be(a, b.r);
}
var Ee = function Ee(a, c, d, e, f) {
  var g = xe(d);
  if (0 === c) {
    g.f[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    a = Ee(a, c - 5, d.f[k], e, f);
    g.f[k] = a;
  }
  return g;
}, Fe = function Fe(a, c, d) {
  var e = a.r - 2 >>> c & 31;
  if (5 < c) {
    a = Fe(a, c - 5, d.f[e]);
    if (null == a && 0 === e) {
      return null;
    }
    d = xe(d);
    d.f[e] = a;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = xe(d);
  d.f[e] = null;
  return d;
};
function Ge(b, a, c, d, e, f) {
  this.i = b;
  this.base = a;
  this.f = c;
  this.qa = d;
  this.start = e;
  this.end = f;
}
Ge.prototype.kc = function() {
  return this.i < this.end;
};
Ge.prototype.next = function() {
  32 === this.i - this.base && (this.f = Ce(this.qa, this.i), this.base += 32);
  var b = this.f[this.i & 31];
  this.i += 1;
  return b;
};
function U(b, a, c, d, e, f) {
  this.meta = b;
  this.r = a;
  this.shift = c;
  this.root = d;
  this.O = e;
  this.n = f;
  this.l = 167668511;
  this.B = 8196;
}
h = U.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return "number" === typeof a ? z.e(this, a, c) : c;
};
h.sb = function(b, a, c) {
  b = 0;
  for (var d = c;;) {
    if (b < this.r) {
      var e = Ce(this, b);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + b, k = e[f], d = a.e ? a.e(d, g, k) : a.call(null, d, g, k);
            if (yc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (yc(e)) {
        return a = e, J.d ? J.d(a) : J.call(null, a);
      }
      b += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.R = function(b, a) {
  return De(this, a)[a & 31];
};
h.la = function(b, a, c) {
  return 0 <= a && a < this.r ? Ce(this, a)[a & 31] : c;
};
h.fc = function(b, a, c) {
  if (0 <= a && a < this.r) {
    return ye(this) <= a ? (b = Ca(this.O), b[a & 31] = c, new U(this.meta, this.r, this.shift, this.root, b, null)) : new U(this.meta, this.r, this.shift, Ee(this, this.shift, this.root, a, c), this.O, null);
  }
  if (a === this.r) {
    return Oa(this, c);
  }
  throw Error([x("Index "), x(a), x(" out of bounds  [0,"), x(this.r), x("]")].join(""));
};
h.Fb = function() {
  var b = this.r;
  return new Ge(0, 0, 0 < N(this) ? Ce(this, 0) : null, this, 0, b);
};
h.G = function() {
  return this.meta;
};
h.L = function() {
  return this.r;
};
h.Zb = function() {
  return z.c(this, 0);
};
h.$b = function() {
  return z.c(this, 1);
};
h.ub = function() {
  return 0 < this.r ? z.c(this, this.r - 1) : null;
};
h.vb = function() {
  if (0 === this.r) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.r) {
    return tb(Jc, this.meta);
  }
  if (1 < this.r - ye(this)) {
    return new U(this.meta, this.r - 1, this.shift, this.root, this.O.slice(0, -1), null);
  }
  var b = Ce(this, this.r - 2), a = Fe(this, this.shift, this.root), a = null == a ? V : a, c = this.r - 1;
  return 5 < this.shift && null == a.f[1] ? new U(this.meta, c, this.shift - 5, a.f[0], b, null) : new U(this.meta, c, this.shift, a, b, null);
};
h.Hb = function() {
  return 0 < this.r ? new Ec(this, this.r - 1, null) : null;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  if (a instanceof U) {
    if (this.r === N(a)) {
      for (var c = Xb(this), d = Xb(a);;) {
        if (r(c.kc())) {
          var e = c.next(), f = d.next();
          if (!nc.c(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Fc(this, a);
  }
};
h.jb = function() {
  var b = this;
  return new He(b.r, b.shift, function() {
    var a = b.root;
    return Ie.d ? Ie.d(a) : Ie.call(null, a);
  }(), function() {
    var a = b.O;
    return Je.d ? Je.d(a) : Je.call(null, a);
  }());
};
h.Y = function() {
  return Hc(Jc, this.meta);
};
h.$ = function(b, a) {
  return zc.c(this, a);
};
h.aa = function(b, a, c) {
  b = 0;
  for (var d = c;;) {
    if (b < this.r) {
      var e = Ce(this, b);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = a.c ? a.c(d, g) : a.call(null, d, g);
            if (yc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        }
      }
      if (yc(e)) {
        return a = e, J.d ? J.d(a) : J.call(null, a);
      }
      b += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.W = function(b, a, c) {
  if ("number" === typeof a) {
    return nb(this, a, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.J = function() {
  if (0 === this.r) {
    return null;
  }
  if (32 >= this.r) {
    return new D(this.O, 0);
  }
  var b;
  a: {
    b = this.root;
    for (var a = this.shift;;) {
      if (0 < a) {
        a -= 5, b = b.f[0];
      } else {
        b = b.f;
        break a;
      }
    }
  }
  return Ke.t ? Ke.t(this, b, 0, 0) : Ke.call(null, this, b, 0, 0);
};
h.I = function(b, a) {
  return new U(a, this.r, this.shift, this.root, this.O, this.n);
};
h.K = function(b, a) {
  if (32 > this.r - ye(this)) {
    for (var c = this.O.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.O[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = a;
    return new U(this.meta, this.r + 1, this.shift, this.root, d, null);
  }
  c = (d = this.r >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = we(null), d.f[0] = this.root, e = ze(null, this.shift, new ve(null, this.O)), d.f[1] = e) : d = Ae(this, this.shift, this.root, new ve(null, this.O));
  return new U(this.meta, this.r + 1, c, d, [a], null);
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, b);
      case 3:
        return this.la(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.R(null, b);
  };
  b.e = function(a, b, d) {
    return this.la(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.R(null, b);
};
h.c = function(b, a) {
  return this.la(null, b, a);
};
var V = new ve(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Jc = new U(null, 0, 5, V, [], tc);
function Le(b) {
  var a = b.length;
  if (32 > a) {
    return new U(null, a, 5, V, b, null);
  }
  for (var c = 32, d = (new U(null, 32, 5, V, b.slice(0, 32), null)).jb(null);;) {
    if (c < a) {
      var e = c + 1, d = Rd.c(d, b[c]), c = e
    } else {
      return Ob(d);
    }
  }
}
U.prototype[Ba] = function() {
  return pc(this);
};
function Me(b) {
  return xa(b) ? Le(b) : Ob(Da.e(Nb, Mb(Jc), b));
}
var Ne = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    return a instanceof D && 0 === a.i ? Le(a.f) : Me(a);
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function Oe(b, a, c, d, e, f) {
  this.ma = b;
  this.node = a;
  this.i = c;
  this.off = d;
  this.meta = e;
  this.n = f;
  this.l = 32375020;
  this.B = 1536;
}
h = Oe.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.ia = function() {
  if (this.off + 1 < this.node.length) {
    var b;
    b = this.ma;
    var a = this.node, c = this.i, d = this.off + 1;
    b = Ke.t ? Ke.t(b, a, c, d) : Ke.call(null, b, a, c, d);
    return null == b ? null : b;
  }
  return Ub(this);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(Jc, this.meta);
};
h.$ = function(b, a) {
  var c = this;
  return zc.c(function() {
    var a = c.ma, b = c.i + c.off, f = N(c.ma);
    return Pe.e ? Pe.e(a, b, f) : Pe.call(null, a, b, f);
  }(), a);
};
h.aa = function(b, a, c) {
  var d = this;
  return zc.e(function() {
    var a = d.ma, b = d.i + d.off, c = N(d.ma);
    return Pe.e ? Pe.e(a, b, c) : Pe.call(null, a, b, c);
  }(), a, c);
};
h.ba = function() {
  return this.node[this.off];
};
h.ja = function() {
  if (this.off + 1 < this.node.length) {
    var b;
    b = this.ma;
    var a = this.node, c = this.i, d = this.off + 1;
    b = Ke.t ? Ke.t(b, a, c, d) : Ke.call(null, b, a, c, d);
    return null == b ? mc : b;
  }
  return Tb(this);
};
h.J = function() {
  return this;
};
h.Xb = function() {
  return Id.c(this.node, this.off);
};
h.Yb = function() {
  var b = this.i + this.node.length;
  if (b < La(this.ma)) {
    var a = this.ma, c = Ce(this.ma, b);
    return Ke.t ? Ke.t(a, c, b, 0) : Ke.call(null, a, c, b, 0);
  }
  return mc;
};
h.I = function(b, a) {
  var c = this.ma, d = this.node, e = this.i, f = this.off;
  return Ke.M ? Ke.M(c, d, e, f, a) : Ke.call(null, c, d, e, f, a);
};
h.K = function(b, a) {
  return K(a, this);
};
h.Wb = function() {
  var b = this.i + this.node.length;
  if (b < La(this.ma)) {
    var a = this.ma, c = Ce(this.ma, b);
    return Ke.t ? Ke.t(a, c, b, 0) : Ke.call(null, a, c, b, 0);
  }
  return null;
};
Oe.prototype[Ba] = function() {
  return pc(this);
};
var Ke = function() {
  function b(a, b, c, d, l) {
    return new Oe(a, b, c, d, l, null);
  }
  function a(a, b, c, d) {
    return new Oe(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Oe(a, De(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
      case 5:
        return b.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.e = c;
  d.t = a;
  d.M = b;
  return d;
}();
function Qe(b, a, c, d, e) {
  this.meta = b;
  this.qa = a;
  this.start = c;
  this.end = d;
  this.n = e;
  this.l = 167666463;
  this.B = 8192;
}
h = Qe.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return "number" === typeof a ? z.e(this, a, c) : c;
};
h.sb = function(b, a, c) {
  b = this.start;
  for (var d = 0;;) {
    if (b < this.end) {
      var e = d, f = z.c(this.qa, b);
      c = a.e ? a.e(c, e, f) : a.call(null, c, e, f);
      if (yc(c)) {
        return a = c, J.d ? J.d(a) : J.call(null, a);
      }
      d += 1;
      b += 1;
    } else {
      return c;
    }
  }
};
h.R = function(b, a) {
  return 0 > a || this.end <= this.start + a ? Be(a, this.end - this.start) : z.c(this.qa, this.start + a);
};
h.la = function(b, a, c) {
  return 0 > a || this.end <= this.start + a ? c : z.e(this.qa, this.start + a, c);
};
h.fc = function(b, a, c) {
  var d = this.start + a;
  b = this.meta;
  c = Q.e(this.qa, d, c);
  a = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Re.M ? Re.M(b, c, a, d, null) : Re.call(null, b, c, a, d, null);
};
h.G = function() {
  return this.meta;
};
h.L = function() {
  return this.end - this.start;
};
h.ub = function() {
  return z.c(this.qa, this.end - 1);
};
h.vb = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var b = this.meta, a = this.qa, c = this.start, d = this.end - 1;
  return Re.M ? Re.M(b, a, c, d, null) : Re.call(null, b, a, c, d, null);
};
h.Hb = function() {
  return this.start !== this.end ? new Ec(this, this.end - this.start - 1, null) : null;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(Jc, this.meta);
};
h.$ = function(b, a) {
  return zc.c(this, a);
};
h.aa = function(b, a, c) {
  return zc.e(this, a, c);
};
h.W = function(b, a, c) {
  if ("number" === typeof a) {
    return nb(this, a, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.J = function() {
  var b = this;
  return function(a) {
    return function d(e) {
      return e === b.end ? null : K(z.c(b.qa, e), new Dd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(a), null, null));
    };
  }(this)(b.start);
};
h.I = function(b, a) {
  var c = this.qa, d = this.start, e = this.end, f = this.n;
  return Re.M ? Re.M(a, c, d, e, f) : Re.call(null, a, c, d, e, f);
};
h.K = function(b, a) {
  var c = this.meta, d = nb(this.qa, this.end, a), e = this.start, f = this.end + 1;
  return Re.M ? Re.M(c, d, e, f, null) : Re.call(null, c, d, e, f, null);
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, b);
      case 3:
        return this.la(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.R(null, b);
  };
  b.e = function(a, b, d) {
    return this.la(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.R(null, b);
};
h.c = function(b, a) {
  return this.la(null, b, a);
};
Qe.prototype[Ba] = function() {
  return pc(this);
};
function Re(b, a, c, d, e) {
  for (;;) {
    if (a instanceof Qe) {
      c = a.start + c, d = a.start + d, a = a.qa;
    } else {
      var f = N(a);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Qe(b, a, c, d, e);
    }
  }
}
var Pe = function() {
  function b(a, b, c) {
    return Re(null, a, b, c, null);
  }
  function a(a, b) {
    return c.e(a, b, N(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function Se(b, a) {
  return b === a.P ? a : new ve(b, Ca(a.f));
}
function Ie(b) {
  return new ve({}, Ca(b.f));
}
function Je(b) {
  var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  ad(b, 0, a, 0, b.length);
  return a;
}
var Te = function Te(a, c, d, e) {
  d = Se(a.root.P, d);
  var f = a.r - 1 >>> c & 31;
  if (5 === c) {
    a = e;
  } else {
    var g = d.f[f];
    a = null != g ? Te(a, c - 5, g, e) : ze(a.root.P, c - 5, e);
  }
  d.f[f] = a;
  return d;
};
function He(b, a, c, d) {
  this.r = b;
  this.shift = a;
  this.root = c;
  this.O = d;
  this.l = 275;
  this.B = 88;
}
h = He.prototype;
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, b);
      case 3:
        return this.F(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.H(null, b);
  };
  b.e = function(a, b, d) {
    return this.F(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.H(null, b);
};
h.c = function(b, a) {
  return this.F(null, b, a);
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return "number" === typeof a ? z.e(this, a, c) : c;
};
h.R = function(b, a) {
  if (this.root.P) {
    return De(this, a)[a & 31];
  }
  throw Error("nth after persistent!");
};
h.la = function(b, a, c) {
  return 0 <= a && a < this.r ? z.c(this, a) : c;
};
h.L = function() {
  if (this.root.P) {
    return this.r;
  }
  throw Error("count after persistent!");
};
h.sc = function(b, a, c) {
  var d = this;
  if (d.root.P) {
    if (0 <= a && a < d.r) {
      return ye(this) <= a ? d.O[a & 31] = c : (b = function() {
        return function f(b, k) {
          var l = Se(d.root.P, k);
          if (0 === b) {
            l.f[a & 31] = c;
          } else {
            var m = a >>> b & 31, n = f(b - 5, l.f[m]);
            l.f[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = b), this;
    }
    if (a === d.r) {
      return Nb(this, c);
    }
    throw Error([x("Index "), x(a), x(" out of bounds for TransientVector of length"), x(d.r)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.wb = function(b, a, c) {
  if ("number" === typeof a) {
    return Qb(this, a, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.xb = function(b, a) {
  if (this.root.P) {
    if (32 > this.r - ye(this)) {
      this.O[this.r & 31] = a;
    } else {
      var c = new ve(this.root.P, this.O), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = a;
      this.O = d;
      if (this.r >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ze(this.root.P, this.shift, c);
        this.root = new ve(this.root.P, d);
        this.shift = e;
      } else {
        this.root = Te(this, this.shift, this.root, c);
      }
    }
    this.r += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.yb = function() {
  if (this.root.P) {
    this.root.P = null;
    var b = this.r - ye(this), a = Array(b);
    ad(this.O, 0, a, 0, b);
    return new U(null, this.r, this.shift, this.root, a, null);
  }
  throw Error("persistent! called twice");
};
function Ue() {
  this.B = 0;
  this.l = 2097152;
}
Ue.prototype.A = function() {
  return!1;
};
Ue.prototype.equiv = function(b) {
  return this.A(null, b);
};
var Ve = new Ue;
function We(b, a) {
  return ed(Xc(a) ? N(b) === N(a) ? Wd(kd, je.c(function(b) {
    return nc.c(Mc.e(a, E(b), Ve), E(G(b)));
  }, b)) : null : null);
}
function Xe(b) {
  this.s = b;
}
Xe.prototype.next = function() {
  if (null != this.s) {
    var b = E(this.s), a = O.e(b, 0, null), b = O.e(b, 1, null);
    this.s = G(this.s);
    return{done:!1, value:[a, b]};
  }
  return{done:!0, value:null};
};
function Ye(b) {
  return new Xe(B(b));
}
function Ze(b) {
  this.s = b;
}
Ze.prototype.next = function() {
  if (null != this.s) {
    var b = E(this.s);
    this.s = G(this.s);
    return{done:!1, value:[b, b]};
  }
  return{done:!0, value:null};
};
function $e(b, a) {
  var c = b.f;
  if (a instanceof S) {
    a: {
      for (var d = c.length, e = a.T, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof S && e === g.T) {
          c = f;
          break a;
        }
        f += 2;
      }
    }
  } else {
    if (d = "string" == typeof a, r(r(d) ? d : "number" === typeof a)) {
      a: {
        for (d = c.length, e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (a === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
      }
    } else {
      if (a instanceof A) {
        a: {
          for (d = c.length, e = a.Aa, f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof A && e === g.Aa) {
              c = f;
              break a;
            }
            f += 2;
          }
        }
      } else {
        if (null == a) {
          a: {
            for (d = c.length, e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              e += 2;
            }
          }
        } else {
          a: {
            for (d = c.length, e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (nc.c(a, c[e])) {
                c = e;
                break a;
              }
              e += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function af(b, a, c) {
  this.f = b;
  this.i = a;
  this.ha = c;
  this.B = 0;
  this.l = 32374990;
}
h = af.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.ha;
};
h.ia = function() {
  return this.i < this.f.length - 2 ? new af(this.f, this.i + 2, this.ha) : null;
};
h.L = function() {
  return(this.f.length - this.i) / 2;
};
h.D = function() {
  return sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.ha);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return new U(null, 2, 5, V, [this.f[this.i], this.f[this.i + 1]], null);
};
h.ja = function() {
  return this.i < this.f.length - 2 ? new af(this.f, this.i + 2, this.ha) : mc;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new af(this.f, this.i, a);
};
h.K = function(b, a) {
  return K(a, this);
};
af.prototype[Ba] = function() {
  return pc(this);
};
function bf(b, a, c) {
  this.f = b;
  this.i = a;
  this.r = c;
}
bf.prototype.kc = function() {
  return this.i < this.r;
};
bf.prototype.next = function() {
  var b = new U(null, 2, 5, V, [this.f[this.i], this.f[this.i + 1]], null);
  this.i += 2;
  return b;
};
function q(b, a, c, d) {
  this.meta = b;
  this.r = a;
  this.f = c;
  this.n = d;
  this.l = 16647951;
  this.B = 8196;
}
h = q.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.keys = function() {
  return pc(cf.d ? cf.d(this) : cf.call(null, this));
};
h.entries = function() {
  return Ye(B(this));
};
h.values = function() {
  return pc(df.d ? df.d(this) : df.call(null, this));
};
h.has = function(b) {
  return gd(this, b);
};
h.get = function(b, a) {
  return this.F(null, b, a);
};
h.forEach = function(b) {
  for (var a = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.R(null, e), g = O.e(f, 0, null), f = O.e(f, 1, null);
      b.c ? b.c(f, g) : b.call(null, f, g);
      e += 1;
    } else {
      if (a = B(a)) {
        Zc(a) ? (c = Sb(a), a = Tb(a), g = c, d = N(c), c = g) : (c = E(a), g = O.e(c, 0, null), c = f = O.e(c, 1, null), b.c ? b.c(c, g) : b.call(null, c, g), a = G(a), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  b = $e(this, a);
  return-1 === b ? c : this.f[b + 1];
};
h.sb = function(b, a, c) {
  b = this.f.length;
  for (var d = 0;;) {
    if (d < b) {
      var e = this.f[d], f = this.f[d + 1];
      c = a.e ? a.e(c, e, f) : a.call(null, c, e, f);
      if (yc(c)) {
        return a = c, J.d ? J.d(a) : J.call(null, a);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
h.Fb = function() {
  return new bf(this.f, 0, 2 * this.r);
};
h.G = function() {
  return this.meta;
};
h.L = function() {
  return this.r;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = uc(this);
};
h.A = function(b, a) {
  if (a && (a.l & 1024 || a.Kc)) {
    var c = this.f.length;
    if (this.r === a.L(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = a.F(null, this.f[d], cd);
          if (e !== cd) {
            if (nc.c(this.f[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return We(this, a);
  }
};
h.jb = function() {
  return new ef({}, this.f.length, Ca(this.f));
};
h.Y = function() {
  return tb(ff, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.Z = function(b, a) {
  if (0 <= $e(this, a)) {
    var c = this.f.length, d = c - 2;
    if (0 === d) {
      return Ma(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new q(this.meta, this.r - 1, d, null);
      }
      nc.c(a, this.f[e]) || (d[f] = this.f[e], d[f + 1] = this.f[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.W = function(b, a, c) {
  b = $e(this, a);
  if (-1 === b) {
    if (this.r < gf) {
      b = this.f;
      for (var d = b.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = b[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = a;
      e[d + 1] = c;
      return new q(this.meta, this.r + 1, e, null);
    }
    return tb(bb(se.c(Nc, this), a, c), this.meta);
  }
  if (c === this.f[b + 1]) {
    return this;
  }
  a = Ca(this.f);
  a[b + 1] = c;
  return new q(this.meta, this.r, a, null);
};
h.Vb = function(b, a) {
  return-1 !== $e(this, a);
};
h.J = function() {
  var b = this.f;
  return 0 <= b.length - 2 ? new af(b, 0, null) : null;
};
h.I = function(b, a) {
  return new q(a, this.r, this.f, this.n);
};
h.K = function(b, a) {
  if (Yc(a)) {
    return bb(this, z.c(a, 0), z.c(a, 1));
  }
  for (var c = this, d = B(a);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (Yc(e)) {
      c = bb(c, z.c(e, 0), z.c(e, 1)), d = G(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, b);
      case 3:
        return this.F(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.H(null, b);
  };
  b.e = function(a, b, d) {
    return this.F(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.H(null, b);
};
h.c = function(b, a) {
  return this.F(null, b, a);
};
var ff = new q(null, 0, [], vc), gf = 8;
q.prototype[Ba] = function() {
  return pc(this);
};
function ef(b, a, c) {
  this.kb = b;
  this.ob = a;
  this.f = c;
  this.B = 56;
  this.l = 258;
}
h = ef.prototype;
h.wb = function(b, a, c) {
  var d = this;
  if (r(d.kb)) {
    b = $e(this, a);
    if (-1 === b) {
      return d.ob + 2 <= 2 * gf ? (d.ob += 2, d.f.push(a), d.f.push(c), this) : Sd.e(function() {
        var a = d.ob, b = d.f;
        return hf.c ? hf.c(a, b) : hf.call(null, a, b);
      }(), a, c);
    }
    c !== d.f[b + 1] && (d.f[b + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.xb = function(b, a) {
  if (r(this.kb)) {
    if (a ? a.l & 2048 || a.Lc || (a.l ? 0 : u(eb, a)) : u(eb, a)) {
      return Pb(this, sd.d ? sd.d(a) : sd.call(null, a), td.d ? td.d(a) : td.call(null, a));
    }
    for (var c = B(a), d = this;;) {
      var e = E(c);
      if (r(e)) {
        var f = e, c = G(c), d = Pb(d, function() {
          var a = f;
          return sd.d ? sd.d(a) : sd.call(null, a);
        }(), function() {
          var a = f;
          return td.d ? td.d(a) : td.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.yb = function() {
  if (r(this.kb)) {
    return this.kb = !1, new q(null, od(this.ob), this.f, null);
  }
  throw Error("persistent! called twice");
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  if (r(this.kb)) {
    return b = $e(this, a), -1 === b ? c : this.f[b + 1];
  }
  throw Error("lookup after persistent!");
};
h.L = function() {
  if (r(this.kb)) {
    return od(this.ob);
  }
  throw Error("count after persistent!");
};
function hf(b, a) {
  for (var c = Mb(Nc), d = 0;;) {
    if (d < b) {
      c = Sd.e(c, a[d], a[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function jf() {
  this.U = !1;
}
function kf(b, a) {
  return b === a ? !0 : T(b, a) ? !0 : nc.c(b, a);
}
var lf = function() {
  function b(a, b, c, g, k) {
    a = Ca(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function a(a, b, c) {
    a = Ca(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return a.call(this, c, e, f);
      case 5:
        return b.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = a;
  c.M = b;
  return c;
}();
function mf(b, a) {
  var c = Array(b.length - 2);
  ad(b, 0, c, 0, 2 * a);
  ad(b, 2 * (a + 1), c, 2 * a, c.length - 2 * a);
  return c;
}
var nf = function() {
  function b(a, b, c, g, k, l) {
    a = a.lb(b);
    a.f[c] = g;
    a.f[k] = l;
    return a;
  }
  function a(a, b, c, g) {
    a = a.lb(b);
    a.f[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return a.call(this, c, e, f, g);
      case 6:
        return b.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.t = a;
  c.ca = b;
  return c;
}();
function of(b, a, c) {
  for (var d = b.length, e = 0, f = c;;) {
    if (e < d) {
      c = b[e];
      if (null != c) {
        var g = b[e + 1];
        c = a.e ? a.e(f, c, g) : a.call(null, f, c, g);
      } else {
        c = b[e + 1], c = null != c ? c.Cb(a, f) : f;
      }
      if (yc(c)) {
        return b = c, J.d ? J.d(b) : J.call(null, b);
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function pf(b, a, c) {
  this.P = b;
  this.S = a;
  this.f = c;
}
h = pf.prototype;
h.lb = function(b) {
  if (b === this.P) {
    return this;
  }
  var a = pd(this.S), c = Array(0 > a ? 4 : 2 * (a + 1));
  ad(this.f, 0, c, 0, 2 * a);
  return new pf(b, this.S, c);
};
h.Ab = function() {
  var b = this.f;
  return qf.d ? qf.d(b) : qf.call(null, b);
};
h.Cb = function(b, a) {
  return of(this.f, b, a);
};
h.Xa = function(b, a, c, d) {
  var e = 1 << (a >>> b & 31);
  if (0 === (this.S & e)) {
    return d;
  }
  var f = pd(this.S & e - 1), e = this.f[2 * f], f = this.f[2 * f + 1];
  return null == e ? f.Xa(b + 5, a, c, d) : kf(c, e) ? f : d;
};
h.va = function(b, a, c, d, e, f) {
  var g = 1 << (c >>> a & 31), k = pd(this.S & g - 1);
  if (0 === (this.S & g)) {
    var l = pd(this.S);
    if (2 * l < this.f.length) {
      var m = this.lb(b), n = m.f;
      f.U = !0;
      bd(n, 2 * k, n, 2 * (k + 1), 2 * (l - k));
      n[2 * k] = d;
      n[2 * k + 1] = e;
      m.S |= g;
      return m;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> a & 31] = rf.va(b, a + 5, c, d, e, f);
      for (m = k = 0;;) {
        if (32 > k) {
          0 !== (this.S >>> k & 1) && (g[k] = null != this.f[m] ? rf.va(b, a + 5, ic(this.f[m]), this.f[m], this.f[m + 1], f) : this.f[m + 1], m += 2), k += 1;
        } else {
          break;
        }
      }
      return new sf(b, l + 1, g);
    }
    n = Array(2 * (l + 4));
    ad(this.f, 0, n, 0, 2 * k);
    n[2 * k] = d;
    n[2 * k + 1] = e;
    ad(this.f, 2 * k, n, 2 * (k + 1), 2 * (l - k));
    f.U = !0;
    m = this.lb(b);
    m.f = n;
    m.S |= g;
    return m;
  }
  var t = this.f[2 * k], v = this.f[2 * k + 1];
  if (null == t) {
    return l = v.va(b, a + 5, c, d, e, f), l === v ? this : nf.t(this, b, 2 * k + 1, l);
  }
  if (kf(d, t)) {
    return e === v ? this : nf.t(this, b, 2 * k + 1, e);
  }
  f.U = !0;
  return nf.ca(this, b, 2 * k, null, 2 * k + 1, function() {
    var f = a + 5;
    return tf.oa ? tf.oa(b, f, t, v, c, d, e) : tf.call(null, b, f, t, v, c, d, e);
  }());
};
h.ua = function(b, a, c, d, e) {
  var f = 1 << (a >>> b & 31), g = pd(this.S & f - 1);
  if (0 === (this.S & f)) {
    var k = pd(this.S);
    if (16 <= k) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[a >>> b & 31] = rf.ua(b + 5, a, c, d, e);
      for (var l = g = 0;;) {
        if (32 > g) {
          0 !== (this.S >>> g & 1) && (f[g] = null != this.f[l] ? rf.ua(b + 5, ic(this.f[l]), this.f[l], this.f[l + 1], e) : this.f[l + 1], l += 2), g += 1;
        } else {
          break;
        }
      }
      return new sf(null, k + 1, f);
    }
    l = Array(2 * (k + 1));
    ad(this.f, 0, l, 0, 2 * g);
    l[2 * g] = c;
    l[2 * g + 1] = d;
    ad(this.f, 2 * g, l, 2 * (g + 1), 2 * (k - g));
    e.U = !0;
    return new pf(null, this.S | f, l);
  }
  var m = this.f[2 * g], n = this.f[2 * g + 1];
  if (null == m) {
    return k = n.ua(b + 5, a, c, d, e), k === n ? this : new pf(null, this.S, lf.e(this.f, 2 * g + 1, k));
  }
  if (kf(c, m)) {
    return d === n ? this : new pf(null, this.S, lf.e(this.f, 2 * g + 1, d));
  }
  e.U = !0;
  return new pf(null, this.S, lf.M(this.f, 2 * g, null, 2 * g + 1, function() {
    var e = b + 5;
    return tf.ca ? tf.ca(e, m, n, a, c, d) : tf.call(null, e, m, n, a, c, d);
  }()));
};
h.Bb = function(b, a, c) {
  var d = 1 << (a >>> b & 31);
  if (0 === (this.S & d)) {
    return this;
  }
  var e = pd(this.S & d - 1), f = this.f[2 * e], g = this.f[2 * e + 1];
  return null == f ? (b = g.Bb(b + 5, a, c), b === g ? this : null != b ? new pf(null, this.S, lf.e(this.f, 2 * e + 1, b)) : this.S === d ? null : new pf(null, this.S ^ d, mf(this.f, e))) : kf(c, f) ? new pf(null, this.S ^ d, mf(this.f, e)) : this;
};
var rf = new pf(null, 0, []);
function sf(b, a, c) {
  this.P = b;
  this.r = a;
  this.f = c;
}
h = sf.prototype;
h.lb = function(b) {
  return b === this.P ? this : new sf(b, this.r, Ca(this.f));
};
h.Ab = function() {
  var b = this.f;
  return wf.d ? wf.d(b) : wf.call(null, b);
};
h.Cb = function(b, a) {
  for (var c = this.f.length, d = 0, e = a;;) {
    if (d < c) {
      var f = this.f[d];
      if (null != f && (e = f.Cb(b, e), yc(e))) {
        return c = e, J.d ? J.d(c) : J.call(null, c);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
h.Xa = function(b, a, c, d) {
  var e = this.f[a >>> b & 31];
  return null != e ? e.Xa(b + 5, a, c, d) : d;
};
h.va = function(b, a, c, d, e, f) {
  var g = c >>> a & 31, k = this.f[g];
  if (null == k) {
    return b = nf.t(this, b, g, rf.va(b, a + 5, c, d, e, f)), b.r += 1, b;
  }
  a = k.va(b, a + 5, c, d, e, f);
  return a === k ? this : nf.t(this, b, g, a);
};
h.ua = function(b, a, c, d, e) {
  var f = a >>> b & 31, g = this.f[f];
  if (null == g) {
    return new sf(null, this.r + 1, lf.e(this.f, f, rf.ua(b + 5, a, c, d, e)));
  }
  b = g.ua(b + 5, a, c, d, e);
  return b === g ? this : new sf(null, this.r, lf.e(this.f, f, b));
};
h.Bb = function(b, a, c) {
  var d = a >>> b & 31, e = this.f[d];
  if (null != e) {
    b = e.Bb(b + 5, a, c);
    if (b === e) {
      d = this;
    } else {
      if (null == b) {
        if (8 >= this.r) {
          a: {
            e = this.f;
            b = e.length;
            a = Array(2 * (this.r - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < b) {
                c !== d && null != e[c] && (a[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new pf(null, g, a);
                break a;
              }
            }
          }
        } else {
          d = new sf(null, this.r - 1, lf.e(this.f, d, b));
        }
      } else {
        d = new sf(null, this.r, lf.e(this.f, d, b));
      }
    }
    return d;
  }
  return this;
};
function xf(b, a, c) {
  a *= 2;
  for (var d = 0;;) {
    if (d < a) {
      if (kf(c, b[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function yf(b, a, c, d) {
  this.P = b;
  this.Pa = a;
  this.r = c;
  this.f = d;
}
h = yf.prototype;
h.lb = function(b) {
  if (b === this.P) {
    return this;
  }
  var a = Array(2 * (this.r + 1));
  ad(this.f, 0, a, 0, 2 * this.r);
  return new yf(b, this.Pa, this.r, a);
};
h.Ab = function() {
  var b = this.f;
  return qf.d ? qf.d(b) : qf.call(null, b);
};
h.Cb = function(b, a) {
  return of(this.f, b, a);
};
h.Xa = function(b, a, c, d) {
  b = xf(this.f, this.r, c);
  return 0 > b ? d : kf(c, this.f[b]) ? this.f[b + 1] : d;
};
h.va = function(b, a, c, d, e, f) {
  if (c === this.Pa) {
    a = xf(this.f, this.r, d);
    if (-1 === a) {
      if (this.f.length > 2 * this.r) {
        return b = nf.ca(this, b, 2 * this.r, d, 2 * this.r + 1, e), f.U = !0, b.r += 1, b;
      }
      c = this.f.length;
      a = Array(c + 2);
      ad(this.f, 0, a, 0, c);
      a[c] = d;
      a[c + 1] = e;
      f.U = !0;
      f = this.r + 1;
      b === this.P ? (this.f = a, this.r = f, b = this) : b = new yf(this.P, this.Pa, f, a);
      return b;
    }
    return this.f[a + 1] === e ? this : nf.t(this, b, a + 1, e);
  }
  return(new pf(b, 1 << (this.Pa >>> a & 31), [null, this, null, null])).va(b, a, c, d, e, f);
};
h.ua = function(b, a, c, d, e) {
  return a === this.Pa ? (b = xf(this.f, this.r, c), -1 === b ? (b = 2 * this.r, a = Array(b + 2), ad(this.f, 0, a, 0, b), a[b] = c, a[b + 1] = d, e.U = !0, new yf(null, this.Pa, this.r + 1, a)) : nc.c(this.f[b], d) ? this : new yf(null, this.Pa, this.r, lf.e(this.f, b + 1, d))) : (new pf(null, 1 << (this.Pa >>> b & 31), [null, this])).ua(b, a, c, d, e);
};
h.Bb = function(b, a, c) {
  b = xf(this.f, this.r, c);
  return-1 === b ? this : 1 === this.r ? null : new yf(null, this.Pa, this.r - 1, mf(this.f, od(b)));
};
var tf = function() {
  function b(a, b, c, g, k, l, m) {
    var n = ic(c);
    if (n === k) {
      return new yf(null, n, 2, [c, g, l, m]);
    }
    var t = new jf;
    return rf.va(a, b, n, c, g, t).va(a, b, k, l, m, t);
  }
  function a(a, b, c, g, k, l) {
    var m = ic(b);
    if (m === g) {
      return new yf(null, m, 2, [b, c, k, l]);
    }
    var n = new jf;
    return rf.ua(a, m, b, c, n).ua(a, g, k, l, n);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return a.call(this, c, e, f, g, k, l);
      case 7:
        return b.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ca = a;
  c.oa = b;
  return c;
}();
function zf(b, a, c, d, e) {
  this.meta = b;
  this.Ya = a;
  this.i = c;
  this.s = d;
  this.n = e;
  this.B = 0;
  this.l = 32374860;
}
h = zf.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return null == this.s ? new U(null, 2, 5, V, [this.Ya[this.i], this.Ya[this.i + 1]], null) : E(this.s);
};
h.ja = function() {
  if (null == this.s) {
    var b = this.Ya, a = this.i + 2;
    return qf.e ? qf.e(b, a, null) : qf.call(null, b, a, null);
  }
  var b = this.Ya, a = this.i, c = G(this.s);
  return qf.e ? qf.e(b, a, c) : qf.call(null, b, a, c);
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new zf(a, this.Ya, this.i, this.s, this.n);
};
h.K = function(b, a) {
  return K(a, this);
};
zf.prototype[Ba] = function() {
  return pc(this);
};
var qf = function() {
  function b(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new zf(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (r(g) && (g = g.Ab(), r(g))) {
            return new zf(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new zf(null, a, b, c, null);
    }
  }
  function a(a) {
    return c.e(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.e = b;
  return c;
}();
function Af(b, a, c, d, e) {
  this.meta = b;
  this.Ya = a;
  this.i = c;
  this.s = d;
  this.n = e;
  this.B = 0;
  this.l = 32374860;
}
h = Af.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.meta;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.meta);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return E(this.s);
};
h.ja = function() {
  var b = this.Ya, a = this.i, c = G(this.s);
  return wf.t ? wf.t(null, b, a, c) : wf.call(null, null, b, a, c);
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new Af(a, this.Ya, this.i, this.s, this.n);
};
h.K = function(b, a) {
  return K(a, this);
};
Af.prototype[Ba] = function() {
  return pc(this);
};
var wf = function() {
  function b(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (r(k) && (k = k.Ab(), r(k))) {
            return new Af(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Af(a, b, c, g, null);
    }
  }
  function a(a) {
    return c.t(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 4:
        return b.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.t = b;
  return c;
}();
function Bf(b, a, c, d, e, f) {
  this.meta = b;
  this.r = a;
  this.root = c;
  this.ea = d;
  this.ka = e;
  this.n = f;
  this.l = 16123663;
  this.B = 8196;
}
h = Bf.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.keys = function() {
  return pc(cf.d ? cf.d(this) : cf.call(null, this));
};
h.entries = function() {
  return Ye(B(this));
};
h.values = function() {
  return pc(df.d ? df.d(this) : df.call(null, this));
};
h.has = function(b) {
  return gd(this, b);
};
h.get = function(b, a) {
  return this.F(null, b, a);
};
h.forEach = function(b) {
  for (var a = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.R(null, e), g = O.e(f, 0, null), f = O.e(f, 1, null);
      b.c ? b.c(f, g) : b.call(null, f, g);
      e += 1;
    } else {
      if (a = B(a)) {
        Zc(a) ? (c = Sb(a), a = Tb(a), g = c, d = N(c), c = g) : (c = E(a), g = O.e(c, 0, null), c = f = O.e(c, 1, null), b.c ? b.c(c, g) : b.call(null, c, g), a = G(a), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return null == a ? this.ea ? this.ka : c : null == this.root ? c : this.root.Xa(0, ic(a), a, c);
};
h.sb = function(b, a, c) {
  this.ea && (b = this.ka, c = a.e ? a.e(c, null, b) : a.call(null, c, null, b));
  return yc(c) ? J.d ? J.d(c) : J.call(null, c) : null != this.root ? this.root.Cb(a, c) : c;
};
h.G = function() {
  return this.meta;
};
h.L = function() {
  return this.r;
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = uc(this);
};
h.A = function(b, a) {
  return We(this, a);
};
h.jb = function() {
  return new Cf({}, this.root, this.r, this.ea, this.ka);
};
h.Y = function() {
  return tb(Nc, this.meta);
};
h.Z = function(b, a) {
  if (null == a) {
    return this.ea ? new Bf(this.meta, this.r - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Bb(0, ic(a), a);
  return c === this.root ? this : new Bf(this.meta, this.r - 1, c, this.ea, this.ka, null);
};
h.W = function(b, a, c) {
  if (null == a) {
    return this.ea && c === this.ka ? this : new Bf(this.meta, this.ea ? this.r : this.r + 1, this.root, !0, c, null);
  }
  b = new jf;
  a = (null == this.root ? rf : this.root).ua(0, ic(a), a, c, b);
  return a === this.root ? this : new Bf(this.meta, b.U ? this.r + 1 : this.r, a, this.ea, this.ka, null);
};
h.Vb = function(b, a) {
  return null == a ? this.ea : null == this.root ? !1 : this.root.Xa(0, ic(a), a, cd) !== cd;
};
h.J = function() {
  if (0 < this.r) {
    var b = null != this.root ? this.root.Ab() : null;
    return this.ea ? K(new U(null, 2, 5, V, [null, this.ka], null), b) : b;
  }
  return null;
};
h.I = function(b, a) {
  return new Bf(a, this.r, this.root, this.ea, this.ka, this.n);
};
h.K = function(b, a) {
  if (Yc(a)) {
    return bb(this, z.c(a, 0), z.c(a, 1));
  }
  for (var c = this, d = B(a);;) {
    if (null == d) {
      return c;
    }
    var e = E(d);
    if (Yc(e)) {
      c = bb(c, z.c(e, 0), z.c(e, 1)), d = G(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, b);
      case 3:
        return this.F(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.H(null, b);
  };
  b.e = function(a, b, d) {
    return this.F(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.H(null, b);
};
h.c = function(b, a) {
  return this.F(null, b, a);
};
var Nc = new Bf(null, 0, null, !1, null, vc);
Bf.prototype[Ba] = function() {
  return pc(this);
};
function Cf(b, a, c, d, e) {
  this.P = b;
  this.root = a;
  this.count = c;
  this.ea = d;
  this.ka = e;
  this.B = 56;
  this.l = 258;
}
h = Cf.prototype;
h.wb = function(b, a, c) {
  return Df(this, a, c);
};
h.xb = function(b, a) {
  return Ef(this, a);
};
h.yb = function() {
  var b;
  if (this.P) {
    this.P = null, b = new Bf(null, this.count, this.root, this.ea, this.ka, null);
  } else {
    throw Error("persistent! called twice");
  }
  return b;
};
h.H = function(b, a) {
  return null == a ? this.ea ? this.ka : null : null == this.root ? null : this.root.Xa(0, ic(a), a);
};
h.F = function(b, a, c) {
  return null == a ? this.ea ? this.ka : c : null == this.root ? c : this.root.Xa(0, ic(a), a, c);
};
h.L = function() {
  if (this.P) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ef(b, a) {
  if (b.P) {
    if (a ? a.l & 2048 || a.Lc || (a.l ? 0 : u(eb, a)) : u(eb, a)) {
      return Df(b, sd.d ? sd.d(a) : sd.call(null, a), td.d ? td.d(a) : td.call(null, a));
    }
    for (var c = B(a), d = b;;) {
      var e = E(c);
      if (r(e)) {
        var f = e, c = G(c), d = Df(d, function() {
          var a = f;
          return sd.d ? sd.d(a) : sd.call(null, a);
        }(), function() {
          var a = f;
          return td.d ? td.d(a) : td.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Df(b, a, c) {
  if (b.P) {
    if (null == a) {
      b.ka !== c && (b.ka = c), b.ea || (b.count += 1, b.ea = !0);
    } else {
      var d = new jf;
      a = (null == b.root ? rf : b.root).va(b.P, 0, ic(a), a, c, d);
      a !== b.root && (b.root = a);
      d.U && (b.count += 1);
    }
    return b;
  }
  throw Error("assoc! after persistent!");
}
var ce = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    a = B(a);
    for (var b = Mb(Nc);;) {
      if (a) {
        var e = G(G(a)), b = Sd.e(b, E(a), E(G(a)));
        a = e;
      } else {
        return Ob(b);
      }
    }
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function Ff(b, a) {
  this.fa = b;
  this.ha = a;
  this.B = 0;
  this.l = 32374988;
}
h = Ff.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.ha;
};
h.ia = function() {
  var b = this.fa, b = (b ? b.l & 128 || b.Gb || (b.l ? 0 : u(Va, b)) : u(Va, b)) ? this.fa.ia(null) : G(this.fa);
  return null == b ? null : new Ff(b, this.ha);
};
h.D = function() {
  return sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.ha);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return this.fa.ba(null).Zb();
};
h.ja = function() {
  var b = this.fa, b = (b ? b.l & 128 || b.Gb || (b.l ? 0 : u(Va, b)) : u(Va, b)) ? this.fa.ia(null) : G(this.fa);
  return null != b ? new Ff(b, this.ha) : mc;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new Ff(this.fa, a);
};
h.K = function(b, a) {
  return K(a, this);
};
Ff.prototype[Ba] = function() {
  return pc(this);
};
function cf(b) {
  return(b = B(b)) ? new Ff(b, null) : null;
}
function sd(b) {
  return gb(b);
}
function Gf(b, a) {
  this.fa = b;
  this.ha = a;
  this.B = 0;
  this.l = 32374988;
}
h = Gf.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.G = function() {
  return this.ha;
};
h.ia = function() {
  var b = this.fa, b = (b ? b.l & 128 || b.Gb || (b.l ? 0 : u(Va, b)) : u(Va, b)) ? this.fa.ia(null) : G(this.fa);
  return null == b ? null : new Gf(b, this.ha);
};
h.D = function() {
  return sc(this);
};
h.A = function(b, a) {
  return Fc(this, a);
};
h.Y = function() {
  return Hc(mc, this.ha);
};
h.$ = function(b, a) {
  return Ic.c(a, this);
};
h.aa = function(b, a, c) {
  return Ic.e(a, c, this);
};
h.ba = function() {
  return this.fa.ba(null).$b();
};
h.ja = function() {
  var b = this.fa, b = (b ? b.l & 128 || b.Gb || (b.l ? 0 : u(Va, b)) : u(Va, b)) ? this.fa.ia(null) : G(this.fa);
  return null != b ? new Gf(b, this.ha) : mc;
};
h.J = function() {
  return this;
};
h.I = function(b, a) {
  return new Gf(this.fa, a);
};
h.K = function(b, a) {
  return K(a, this);
};
Gf.prototype[Ba] = function() {
  return pc(this);
};
function df(b) {
  return(b = B(b)) ? new Gf(b, null) : null;
}
function td(b) {
  return hb(b);
}
var Hf = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    return r(Xd(a)) ? Da.c(function(a, b) {
      return Kc.c(r(a) ? a : ff, b);
    }, a) : null;
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function If(b, a, c) {
  this.meta = b;
  this.nb = a;
  this.n = c;
  this.l = 15077647;
  this.B = 8196;
}
h = If.prototype;
h.toString = function() {
  return Zb(this);
};
h.equiv = function(b) {
  return this.A(null, b);
};
h.keys = function() {
  return pc(B(this));
};
h.entries = function() {
  var b = B(this);
  return new Ze(B(b));
};
h.values = function() {
  return pc(B(this));
};
h.has = function(b) {
  return gd(this, b);
};
h.forEach = function(b) {
  for (var a = B(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.R(null, e), g = O.e(f, 0, null), f = O.e(f, 1, null);
      b.c ? b.c(f, g) : b.call(null, f, g);
      e += 1;
    } else {
      if (a = B(a)) {
        Zc(a) ? (c = Sb(a), a = Tb(a), g = c, d = N(c), c = g) : (c = E(a), g = O.e(c, 0, null), c = f = O.e(c, 1, null), b.c ? b.c(c, g) : b.call(null, c, g), a = G(a), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return ab(this.nb, a) ? a : c;
};
h.G = function() {
  return this.meta;
};
h.L = function() {
  return La(this.nb);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = uc(this);
};
h.A = function(b, a) {
  return Vc(a) && N(this) === N(a) && Wd(function(a) {
    return function(b) {
      return gd(a, b);
    };
  }(this), a);
};
h.jb = function() {
  return new Jf(Mb(this.nb));
};
h.Y = function() {
  return Hc(Kf, this.meta);
};
h.J = function() {
  return cf(this.nb);
};
h.I = function(b, a) {
  return new If(a, this.nb, this.n);
};
h.K = function(b, a) {
  return new If(this.meta, Q.e(this.nb, a, null), null);
};
h.call = function() {
  var b = null, b = function(a, b, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, b);
      case 3:
        return this.F(null, b, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = function(a, b) {
    return this.H(null, b);
  };
  b.e = function(a, b, d) {
    return this.F(null, b, d);
  };
  return b;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return this.H(null, b);
};
h.c = function(b, a) {
  return this.F(null, b, a);
};
var Kf = new If(null, ff, vc);
If.prototype[Ba] = function() {
  return pc(this);
};
function Jf(b) {
  this.Ua = b;
  this.l = 259;
  this.B = 136;
}
h = Jf.prototype;
h.call = function() {
  function b(a, b, c) {
    return $a.e(this.Ua, b, cd) === cd ? c : b;
  }
  function a(a, b) {
    return $a.e(this.Ua, b, cd) === cd ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
h.apply = function(b, a) {
  return this.call.apply(this, [this].concat(Ca(a)));
};
h.d = function(b) {
  return $a.e(this.Ua, b, cd) === cd ? null : b;
};
h.c = function(b, a) {
  return $a.e(this.Ua, b, cd) === cd ? a : b;
};
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  return $a.e(this.Ua, a, cd) === cd ? c : a;
};
h.L = function() {
  return N(this.Ua);
};
h.xb = function(b, a) {
  this.Ua = Sd.e(this.Ua, a, null);
  return this;
};
h.yb = function() {
  return new If(null, Ob(this.Ua), null);
};
function Bd(b) {
  if (b && (b.B & 4096 || b.rc)) {
    return b.name;
  }
  if ("string" === typeof b) {
    return b;
  }
  throw Error([x("Doesn't support name: "), x(b)].join(""));
}
var Lf = function() {
  function b(a, b, c) {
    return(a.d ? a.d(b) : a.call(null, b)) < (a.d ? a.d(c) : a.call(null, c)) ? b : c;
  }
  var a = null, c = function() {
    function b(a, d, k, l) {
      var m = null;
      if (3 < arguments.length) {
        for (var m = 0, n = Array(arguments.length - 3);m < n.length;) {
          n[m] = arguments[m + 3], ++m;
        }
        m = new D(n, 0);
      }
      return c.call(this, a, d, k, m);
    }
    function c(b, d, e, l) {
      return Da.e(function(c, d) {
        return a.e(b, c, d);
      }, a.e(b, d, e), l);
    }
    b.w = 3;
    b.o = function(a) {
      var b = E(a);
      a = G(a);
      var d = E(a);
      a = G(a);
      var l = E(a);
      a = F(a);
      return c(b, d, l, a);
    };
    b.h = c;
    return b;
  }(), a = function(a, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return b.call(this, a, e, f);
      default:
        var k = null;
        if (3 < arguments.length) {
          for (var k = 0, l = Array(arguments.length - 3);k < l.length;) {
            l[k] = arguments[k + 3], ++k;
          }
          k = new D(l, 0);
        }
        return c.h(a, e, f, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 3;
  a.o = c.o;
  a.c = function(a, b) {
    return b;
  };
  a.e = b;
  a.h = c.h;
  return a;
}();
function Mf(b, a) {
  if ("string" === typeof a) {
    var c = b.exec(a);
    return null == c ? null : 1 === N(c) ? E(c) : Me(c);
  }
  throw new TypeError("re-find must match against a string.");
}
function W(b, a, c, d, e, f, g) {
  var k = na;
  na = null == na ? null : na - 1;
  try {
    if (null != na && 0 > na) {
      return Fb(b, "#");
    }
    Fb(b, c);
    if (0 === ua.d(f)) {
      B(g) && Fb(b, function() {
        var a = Nf.d(f);
        return r(a) ? a : "...";
      }());
    } else {
      if (B(g)) {
        var l = E(g);
        a.e ? a.e(l, b, f) : a.call(null, l, b, f);
      }
      for (var m = G(g), n = ua.d(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          B(m) && 0 === n && (Fb(b, d), Fb(b, function() {
            var a = Nf.d(f);
            return r(a) ? a : "...";
          }()));
          break;
        } else {
          Fb(b, d);
          var t = E(m);
          c = b;
          g = f;
          a.e ? a.e(t, c, g) : a.call(null, t, c, g);
          var v = G(m);
          c = n - 1;
          m = v;
          n = c;
        }
      }
    }
    return Fb(b, e);
  } finally {
    na = k;
  }
}
var Of = function() {
  function b(b, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new D(f, 0);
    }
    return a.call(this, b, e);
  }
  function a(a, b) {
    for (var e = B(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.R(null, k);
        Fb(a, l);
        k += 1;
      } else {
        if (e = B(e)) {
          f = e, Zc(f) ? (e = Sb(f), g = Tb(f), f = e, l = N(e), e = g, g = l) : (l = E(f), Fb(a, l), e = G(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  b.w = 1;
  b.o = function(b) {
    var d = E(b);
    b = F(b);
    return a(d, b);
  };
  b.h = a;
  return b;
}(), Pf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Qf(b) {
  return[x('"'), x(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Pf[a];
  })), x('"')].join("");
}
function Rf(b, a, c) {
  if (null == b) {
    return Fb(a, "nil");
  }
  if (void 0 === b) {
    return Fb(a, "#\x3cundefined\x3e");
  }
  if (r(function() {
    var a = Mc.c(c, sa);
    return r(a) ? (a = b ? b.l & 131072 || b.Mc ? !0 : b.l ? !1 : u(qb, b) : u(qb, b)) ? Sc(b) : a : a;
  }())) {
    Fb(a, "^");
    var d = Sc(b);
    X.e ? X.e(d, a, c) : X.call(null, d, a, c);
    Fb(a, " ");
  }
  return null == b ? Fb(a, "nil") : b.Nb ? b.hc(b, a, c) : b && (b.l & 2147483648 || b.V) ? b.C(null, a, c) : za(b) === Boolean || "number" === typeof b ? Fb(a, "" + x(b)) : null != b && b.constructor === Object ? (Fb(a, "#js "), d = je.c(function(a) {
    return new U(null, 2, 5, V, [Cd.d(a), b[a]], null);
  }, $c(b)), Sf.t ? Sf.t(d, X, a, c) : Sf.call(null, d, X, a, c)) : xa(b) ? W(a, X, "#js [", " ", "]", c, b) : r("string" == typeof b) ? r(ra.d(c)) ? Fb(a, Qf(b)) : Fb(a, b) : Qc(b) ? Of.h(a, L(["#\x3c", "" + x(b), "\x3e"], 0)) : b instanceof Date ? (d = function(a, b) {
    for (var c = "" + x(a);;) {
      if (N(c) < b) {
        c = [x("0"), x(c)].join("");
      } else {
        return c;
      }
    }
  }, Of.h(a, L(['#inst "', "" + x(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : b instanceof RegExp ? Of.h(a, L(['#"', b.source, '"'], 0)) : (b ? b.l & 2147483648 || b.V || (b.l ? 0 : u(Gb, b)) : u(Gb, b)) ? Ib(b, a, c) : Of.h(a, L(["#\x3c", "" + x(b), "\x3e"], 0));
}
function X(b, a, c) {
  var d = Tf.d(c);
  return r(d) ? (c = Q.e(c, Uf, Rf), d.e ? d.e(b, a, c) : d.call(null, b, a, c)) : Rf(b, a, c);
}
var ge = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    var b = pa();
    if (Tc(a)) {
      b = "";
    } else {
      var e = x, f = new ja;
      a: {
        var g = new Yb(f);
        X(E(a), g, b);
        a = B(G(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var n = k.R(null, m);
            Fb(g, " ");
            X(n, g, b);
            m += 1;
          } else {
            if (a = B(a)) {
              k = a, Zc(k) ? (a = Sb(k), l = Tb(k), k = a, n = N(a), a = l, l = n) : (n = E(k), Fb(g, " "), X(n, g, b), a = G(k), k = null, l = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + e(f);
    }
    return b;
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function Sf(b, a, c, d) {
  return W(c, function(b, c, d) {
    var k = gb(b);
    a.e ? a.e(k, c, d) : a.call(null, k, c, d);
    Fb(c, " ");
    b = hb(b);
    return a.e ? a.e(b, c, d) : a.call(null, b, c, d);
  }, "{", ", ", "}", d, B(b));
}
ie.prototype.V = !0;
ie.prototype.C = function(b, a, c) {
  Fb(a, "#\x3cVolatile: ");
  X(this.state, a, c);
  return Fb(a, "\x3e");
};
D.prototype.V = !0;
D.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
Dd.prototype.V = !0;
Dd.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
zf.prototype.V = !0;
zf.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
af.prototype.V = !0;
af.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
Oe.prototype.V = !0;
Oe.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
zd.prototype.V = !0;
zd.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
Ec.prototype.V = !0;
Ec.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
Bf.prototype.V = !0;
Bf.prototype.C = function(b, a, c) {
  return Sf(this, X, a, c);
};
Af.prototype.V = !0;
Af.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
Qe.prototype.V = !0;
Qe.prototype.C = function(b, a, c) {
  return W(a, X, "[", " ", "]", c, this);
};
If.prototype.V = !0;
If.prototype.C = function(b, a, c) {
  return W(a, X, "#{", " ", "}", c, this);
};
Jd.prototype.V = !0;
Jd.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
be.prototype.V = !0;
be.prototype.C = function(b, a, c) {
  Fb(a, "#\x3cAtom: ");
  X(this.state, a, c);
  return Fb(a, "\x3e");
};
Gf.prototype.V = !0;
Gf.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
U.prototype.V = !0;
U.prototype.C = function(b, a, c) {
  return W(a, X, "[", " ", "]", c, this);
};
vd.prototype.V = !0;
vd.prototype.C = function(b, a) {
  return Fb(a, "()");
};
q.prototype.V = !0;
q.prototype.C = function(b, a, c) {
  return Sf(this, X, a, c);
};
Ff.prototype.V = !0;
Ff.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
ud.prototype.V = !0;
ud.prototype.C = function(b, a, c) {
  return W(a, X, "(", " ", ")", c, this);
};
U.prototype.rb = !0;
U.prototype.ib = function(b, a) {
  return id.c(this, a);
};
Qe.prototype.rb = !0;
Qe.prototype.ib = function(b, a) {
  return id.c(this, a);
};
S.prototype.rb = !0;
S.prototype.ib = function(b, a) {
  return Ad(this, a);
};
A.prototype.rb = !0;
A.prototype.ib = function(b, a) {
  return kc(this, a);
};
var Vf = null, Wf = function() {
  function b(a) {
    null == Vf && (Vf = ee.d ? ee.d(0) : ee.call(null, 0));
    return lc.d([x(a), x(he.c(Vf, wc))].join(""));
  }
  function a() {
    return c.d("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.v = a;
  c.d = b;
  return c;
}();
function Xf(b) {
  return function(a, c) {
    var d = b.c ? b.c(a, c) : b.call(null, a, c);
    return yc(d) ? new xc(d) : d;
  };
}
function me(b) {
  return function(a) {
    return function() {
      function c(b, c) {
        return Da.e(a, b, c);
      }
      function d(a) {
        return b.d ? b.d(a) : b.call(null, a);
      }
      function e() {
        return b.v ? b.v() : b.call(null);
      }
      var f = null, f = function(a, b) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = e;
      f.d = d;
      f.c = c;
      return f;
    }();
  }(Xf(b));
}
var Yf = {}, Zf = function Zf(a) {
  if (a ? a.Ic : a) {
    return a.Ic(a);
  }
  var c;
  c = Zf[p(null == a ? null : a)];
  if (!c && (c = Zf._, !c)) {
    throw w("IEncodeJS.-clj-\x3ejs", a);
  }
  return c.call(null, a);
};
function $f(b) {
  return(b ? r(r(null) ? null : b.Hc) || (b.ic ? 0 : u(Yf, b)) : u(Yf, b)) ? Zf(b) : "string" === typeof b || "number" === typeof b || b instanceof S || b instanceof A ? ag.d ? ag.d(b) : ag.call(null, b) : ge.h(L([b], 0));
}
var ag = function ag(a) {
  if (null == a) {
    return null;
  }
  if (a ? r(r(null) ? null : a.Hc) || (a.ic ? 0 : u(Yf, a)) : u(Yf, a)) {
    return Zf(a);
  }
  if (a instanceof S) {
    return Bd(a);
  }
  if (a instanceof A) {
    return "" + x(a);
  }
  if (Xc(a)) {
    var c = {};
    a = B(a);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.R(null, f), k = O.e(g, 0, null), g = O.e(g, 1, null);
        c[$f(k)] = ag(g);
        f += 1;
      } else {
        if (a = B(a)) {
          Zc(a) ? (e = Sb(a), a = Tb(a), d = e, e = N(e)) : (e = E(a), d = O.e(e, 0, null), e = O.e(e, 1, null), c[$f(d)] = ag(e), a = G(a), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (Uc(a)) {
    c = [];
    a = B(je.c(ag, a));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.R(null, f), c.push(k), f += 1;
      } else {
        if (a = B(a)) {
          d = a, Zc(d) ? (a = Sb(d), f = Tb(d), d = a, e = N(a), a = f) : (a = E(d), c.push(a), a = G(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return a;
};
function bg(b) {
  b *= Math.random.v ? Math.random.v() : Math.random.call(null);
  return Math.floor.d ? Math.floor.d(b) : Math.floor.call(null, b);
}
function cg(b) {
  this.uuid = b;
  this.B = 2048;
  this.l = 2153775104;
}
h = cg.prototype;
h.ib = function(b, a) {
  return la(this.uuid, a.uuid);
};
h.D = function() {
  for (var b = ge.h(L([this], 0)), a = 0, c = 0;c < b.length;++c) {
    a = 31 * a + b.charCodeAt(c), a %= 4294967296;
  }
  return a;
};
h.C = function(b, a) {
  return Fb(a, [x('#uuid "'), x(this.uuid), x('"')].join(""));
};
h.A = function(b, a) {
  return a instanceof cg && this.uuid === a.uuid;
};
h.toString = function() {
  return this.uuid;
};
h.equiv = function(b) {
  return this.A(null, b);
};
var dg = new S(null, "y", "y", -1757859776), eg = new S(null, "animations", "animations", 140711296), fg = new S(null, "movement", "movement", 1777030977), gg = new S(null, "on-set", "on-set", -140953470), sa = new S(null, "meta", "meta", 1499536964), hg = new S(null, "animation", "animation", -1248293244), ig = new S(null, "stage", "stage", 1843544772), jg = new S(null, "color", "color", 1011675173), kg = new S(null, "movement-speed", "movement-speed", -1779674971), ta = new S(null, "dup", "dup", 
556298533), lg = new S(null, "dead", "dead", -1946604091), mg = new S(null, "key", "key", -1516042587), ng = new S(null, "standing", "standing", -1248340762), og = new S(null, "last-attack-frame", "last-attack-frame", 658442790), pg = new S(null, "derefed", "derefed", 590684583), qg = new S(null, "displayName", "displayName", -809144601), de = new S(null, "validator", "validator", -1966190681), rg = new S(null, "redo", "redo", 501190664), sg = new S(null, "cljsRender", "cljsRender", 247449928), tg = 
new S(null, "finally-block", "finally-block", 832982472), ug = new S(null, "max-hp", "max-hp", -1065196696), Z = new S(null, "name", "name", 1843675177), vg = new S(null, "frames", "frames", 1765687497), wg = new S(null, "neutral", "neutral", -1941956087), xg = new S(null, "margin-left", "margin-left", 2015598377), yg = new S(null, "tile-width", "tile-width", -1131996343), zg = new S(null, "alive", "alive", 1424929930), Ag = new S(null, "renderable", "renderable", -1247325782), Bg = new S(null, "width", 
"width", -384071477), Cg = new S(null, "background", "background", -863952629), Dg = new S(null, "facing", "facing", -854439413), Eg = new S(null, "component-did-update", "component-did-update", -1468549173), Fg = new S(null, "entities", "entities", 1940967403), Gg = new S(null, "recur", "recur", -437573268), Ig = new S(null, "attacker", "attacker", 48869964), Jg = new S(null, "catch-block", "catch-block", 1175212748), Kg = new S(null, "current-frame", "current-frame", 323239981), Uf = new S(null, 
"fallback-impl", "fallback-impl", -1501286995), qa = new S(null, "flush-on-newline", "flush-on-newline", -151457939), Lg = new S(null, "componentWillUnmount", "componentWillUnmount", 1573788814), Mg = new S(null, "angle", "angle", 1622094254), Ng = new S(null, "default-sprite", "default-sprite", 1435097678), Og = new S(null, "renderer", "renderer", 336841071), Pg = new S(null, "size", "size", 1098693007), Qg = new S(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), Rg = new S(null, 
"flush-dom", "flush-dom", -933676816), Sg = new S(null, "style", "style", -496642736), Tg = new S(null, "sprite", "sprite", 172516848), Ug = new S(null, "div", "div", 1057191632), ra = new S(null, "readably", "readably", 1129599760), Vg = new S(null, "new-game", "new-game", 167241648), Nf = new S(null, "more-marker", "more-marker", -14717935), Wg = new S(null, "reagentRender", "reagentRender", -358306383), Xg = new S(null, "render", "render", -1408033454), Yg = new S(null, "damage", "damage", 970520018), 
Zg = new S(null, "undo", "undo", -1818036302), $g = new S(null, "reagent-render", "reagent-render", -985383853), ua = new S(null, "print-length", "print-length", 1931866356), ah = new S(null, "id", "id", -1388402092), bh = new S(null, "hp-color", "hp-color", -2010496268), ch = new S(null, "catch-exception", "catch-exception", -1997306795), dh = new S(null, "auto-run", "auto-run", 1958400437), eh = new S(null, "cljsName", "cljsName", 999824949), fh = new S(null, "graphics", "graphics", -2079995979), 
gh = new S(null, "component-will-unmount", "component-will-unmount", -2058314698), hh = new S(null, "prev", "prev", -1597069226), ih = new S(null, "sequence", "sequence", 926807414), jh = new S(null, "current-sprite", "current-sprite", -778927658), kh = new S(null, "identifier", "identifier", -805503498), lh = new S(null, "continue-block", "continue-block", -1852047850), mh = new S(null, "display-name", "display-name", 694513143), nh = new S(null, "right", "right", -452581833), oh = new S(null, "undos?", 
"undos?", -1094259081), ph = new S(null, "position", "position", -2011731912), qh = new S(null, "on-dispose", "on-dispose", 2105306360), rh = new S(null, "point", "point", 1813198264), sh = new S(null, "moving", "moving", 1760797240), th = new S(null, "componentFunction", "componentFunction", 825866104), uh = new S(null, "attack-range", "attack-range", 519031033), vh = new S(null, "x", "x", 2099068185), wh = new S(null, "anchor", "anchor", 1549638489), xh = new S(null, "hp", "hp", -1541237831), yh = 
new S(null, "target", "target", 253001721), zh = new S(null, "margin-right", "margin-right", 809689658), Ah = new S(null, "frame-count", "frame-count", 1616946810), Bh = new S(null, "undo-explanations", "undo-explanations", 942251259), Ch = new S(null, "redo-explanations", "redo-explanations", -1933832741), Tf = new S(null, "alt-impl", "alt-impl", 670969595), Dh = new S(null, "attack-speed", "attack-speed", -393485413), Eh = new S(null, "current-animation", "current-animation", 90875932), Fh = new S(null, 
"velocity", "velocity", -581524355), Gh = new S(null, "health-bar", "health-bar", -570979971), Hh = new S(null, "componentWillMount", "componentWillMount", -285327619), Ih = new S(null, "attackable", "attackable", 2099301245), Jh = new S(null, "tile-height", "tile-height", -905667651), Kh = new S(null, "next-tick", "next-tick", -2141530914), Lh = new S(null, "redos?", "redos?", 1340247550), Mh = new S(null, "animating", "animating", -109443106), Nh = new S(null, "height", "height", 1025178622), Oh = 
new S(null, "left", "left", -399115937), Ph = new S(null, "attacking", "attacking", 492336639);
function Qh(b, a, c, d, e) {
  this.name = b;
  this.cb = a;
  this.m = c;
  this.j = d;
  this.n = e;
  this.l = 2229667594;
  this.B = 8192;
}
h = Qh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "point":
      return this.cb;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Position{", ", ", "}", c, Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [rh, this.cb], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 2 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 2, [Z, null, rh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Qh(this.name, this.cb, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Qh(c, this.cb, this.m, this.j, null) : r(T.c ? T.c(rh, a) : T.call(null, rh, a)) ? new Qh(this.name, c, this.m, this.j, null) : new Qh(this.name, this.cb, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [rh, this.cb], null)], null), this.j));
};
h.I = function(b, a) {
  return new Qh(this.name, this.cb, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function Rh(b) {
  return new Qh(ph, b, null, null, null);
}
function Sh(b, a, c, d, e, f, g, k) {
  this.name = b;
  this.ya = a;
  this.xa = c;
  this.anchor = d;
  this.size = e;
  this.m = f;
  this.j = g;
  this.n = k;
  this.l = 2229667594;
  this.B = 8192;
}
h = Sh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "size":
      return this.size;
    case "anchor":
      return this.anchor;
    case "current-sprite":
      return this.xa;
    case "default-sprite":
      return this.ya;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Renderable{", ", ", "}", c, Pd.c(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Ng, this.ya], null), new U(null, 2, 5, V, [jh, this.xa], null), new U(null, 2, 5, V, [wh, this.anchor], null), new U(null, 2, 5, V, [Pg, this.size], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 5 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 5, [Z, null, Ng, null, Pg, null, jh, null, wh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Sh(this.name, this.ya, this.xa, this.anchor, this.size, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Sh(c, this.ya, this.xa, this.anchor, this.size, this.m, this.j, null) : r(T.c ? T.c(Ng, a) : T.call(null, Ng, a)) ? new Sh(this.name, c, this.xa, this.anchor, this.size, this.m, this.j, null) : r(T.c ? T.c(jh, a) : T.call(null, jh, a)) ? new Sh(this.name, this.ya, c, this.anchor, this.size, this.m, this.j, null) : r(T.c ? T.c(wh, a) : T.call(null, wh, a)) ? new Sh(this.name, this.ya, this.xa, c, this.size, this.m, this.j, null) : r(T.c ? T.c(Pg, 
  a) : T.call(null, Pg, a)) ? new Sh(this.name, this.ya, this.xa, this.anchor, c, this.m, this.j, null) : new Sh(this.name, this.ya, this.xa, this.anchor, this.size, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 5, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Ng, this.ya], null), new U(null, 2, 5, V, [jh, this.xa], null), new U(null, 2, 5, V, [wh, this.anchor], null), new U(null, 2, 5, V, [Pg, this.size], null)], null), this.j));
};
h.I = function(b, a) {
  return new Sh(this.name, this.ya, this.xa, this.anchor, this.size, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function Th(b, a, c) {
  return new Sh(Ag, b, a, Uh, c, null, null, null);
}
function Vh(b, a, c, d, e) {
  this.name = b;
  this.sprite = a;
  this.m = c;
  this.j = d;
  this.n = e;
  this.l = 2229667594;
  this.B = 8192;
}
h = Vh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "sprite":
      return this.sprite;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Background{", ", ", "}", c, Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Tg, this.sprite], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 2 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 2, [Z, null, Tg, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Vh(this.name, this.sprite, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Vh(c, this.sprite, this.m, this.j, null) : r(T.c ? T.c(Tg, a) : T.call(null, Tg, a)) ? new Vh(this.name, c, this.m, this.j, null) : new Vh(this.name, this.sprite, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Tg, this.sprite], null)], null), this.j));
};
h.I = function(b, a) {
  return new Vh(this.name, this.sprite, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function Wh(b, a, c, d, e, f, g, k, l) {
  this.name = b;
  this.ra = a;
  this.sa = c;
  this.ta = d;
  this.target = e;
  this.wa = f;
  this.m = g;
  this.j = k;
  this.n = l;
  this.l = 2229667594;
  this.B = 8192;
}
h = Wh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "last-attack-frame":
      return this.wa;
    case "target":
      return this.target;
    case "damage":
      return this.ta;
    case "attack-speed":
      return this.sa;
    case "attack-range":
      return this.ra;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Attacker{", ", ", "}", c, Pd.c(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [uh, this.ra], null), new U(null, 2, 5, V, [Dh, this.sa], null), new U(null, 2, 5, V, [Yg, this.ta], null), new U(null, 2, 5, V, [yh, this.target], null), new U(null, 2, 5, V, [og, this.wa], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 6 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 6, [og, null, Z, null, Yg, null, uh, null, yh, null, Dh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Wh(this.name, this.ra, this.sa, this.ta, this.target, this.wa, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Wh(c, this.ra, this.sa, this.ta, this.target, this.wa, this.m, this.j, null) : r(T.c ? T.c(uh, a) : T.call(null, uh, a)) ? new Wh(this.name, c, this.sa, this.ta, this.target, this.wa, this.m, this.j, null) : r(T.c ? T.c(Dh, a) : T.call(null, Dh, a)) ? new Wh(this.name, this.ra, c, this.ta, this.target, this.wa, this.m, this.j, null) : r(T.c ? T.c(Yg, a) : T.call(null, Yg, a)) ? new Wh(this.name, this.ra, this.sa, c, this.target, this.wa, this.m, 
  this.j, null) : r(T.c ? T.c(yh, a) : T.call(null, yh, a)) ? new Wh(this.name, this.ra, this.sa, this.ta, c, this.wa, this.m, this.j, null) : r(T.c ? T.c(og, a) : T.call(null, og, a)) ? new Wh(this.name, this.ra, this.sa, this.ta, this.target, c, this.m, this.j, null) : new Wh(this.name, this.ra, this.sa, this.ta, this.target, this.wa, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 6, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [uh, this.ra], null), new U(null, 2, 5, V, [Dh, this.sa], null), new U(null, 2, 5, V, [Yg, this.ta], null), new U(null, 2, 5, V, [yh, this.target], null), new U(null, 2, 5, V, [og, this.wa], null)], null), this.j));
};
h.I = function(b, a) {
  return new Wh(this.name, this.ra, this.sa, this.ta, this.target, this.wa, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function Xh(b, a, c, d, e) {
  return new Wh(Ig, b, a, c, d, e, null, null, null);
}
function Yh(b, a, c, d, e) {
  this.name = b;
  this.bb = a;
  this.m = c;
  this.j = d;
  this.n = e;
  this.l = 2229667594;
  this.B = 8192;
}
h = Yh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "hp":
      return this.bb;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Attackable{", ", ", "}", c, Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [xh, this.bb], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 2 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 2, [Z, null, xh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Yh(this.name, this.bb, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Yh(c, this.bb, this.m, this.j, null) : r(T.c ? T.c(xh, a) : T.call(null, xh, a)) ? new Yh(this.name, c, this.m, this.j, null) : new Yh(this.name, this.bb, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [xh, this.bb], null)], null), this.j));
};
h.I = function(b, a) {
  return new Yh(this.name, this.bb, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function Zh(b, a, c, d, e) {
  this.name = b;
  this.fb = a;
  this.m = c;
  this.j = d;
  this.n = e;
  this.l = 2229667594;
  this.B = 8192;
}
h = Zh.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "velocity":
      return this.fb;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Movement{", ", ", "}", c, Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Fh, this.fb], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 2 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 2, [Z, null, Fh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new Zh(this.name, this.fb, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new Zh(c, this.fb, this.m, this.j, null) : r(T.c ? T.c(Fh, a) : T.call(null, Fh, a)) ? new Zh(this.name, c, this.m, this.j, null) : new Zh(this.name, this.fb, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Fh, this.fb], null)], null), this.j));
};
h.I = function(b, a) {
  return new Zh(this.name, this.fb, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function $h(b) {
  return new Zh(fg, b, null, null, null);
}
function ai(b, a, c, d, e) {
  this.name = b;
  this.$a = a;
  this.m = c;
  this.j = d;
  this.n = e;
  this.l = 2229667594;
  this.B = 8192;
}
h = ai.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "angle":
      return this.$a;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Facing{", ", ", "}", c, Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Mg, this.$a], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 2 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 2, [Z, null, Mg, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new ai(this.name, this.$a, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new ai(c, this.$a, this.m, this.j, null) : r(T.c ? T.c(Mg, a) : T.call(null, Mg, a)) ? new ai(this.name, c, this.m, this.j, null) : new ai(this.name, this.$a, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 2, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [Mg, this.$a], null)], null), this.j));
};
h.I = function(b, a) {
  return new ai(this.name, this.$a, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function bi(b, a, c, d, e, f, g) {
  this.name = b;
  this.Ba = a;
  this.Qa = c;
  this.Ra = d;
  this.m = e;
  this.j = f;
  this.n = g;
  this.l = 2229667594;
  this.B = 8192;
}
h = bi.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "current-frame":
      return this.Ra;
    case "current-animation":
      return this.Qa;
    case "animations":
      return this.Ba;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Animation{", ", ", "}", c, Pd.c(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [eg, this.Ba], null), new U(null, 2, 5, V, [Eh, this.Qa], null), new U(null, 2, 5, V, [Kg, this.Ra], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 4 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 4, [eg, null, Z, null, Kg, null, Eh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new bi(this.name, this.Ba, this.Qa, this.Ra, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new bi(c, this.Ba, this.Qa, this.Ra, this.m, this.j, null) : r(T.c ? T.c(eg, a) : T.call(null, eg, a)) ? new bi(this.name, c, this.Qa, this.Ra, this.m, this.j, null) : r(T.c ? T.c(Eh, a) : T.call(null, Eh, a)) ? new bi(this.name, this.Ba, c, this.Ra, this.m, this.j, null) : r(T.c ? T.c(Kg, a) : T.call(null, Kg, a)) ? new bi(this.name, this.Ba, this.Qa, c, this.m, this.j, null) : new bi(this.name, this.Ba, this.Qa, this.Ra, this.m, Q.e(this.j, a, 
  c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [eg, this.Ba], null), new U(null, 2, 5, V, [Eh, this.Qa], null), new U(null, 2, 5, V, [Kg, this.Ra], null)], null), this.j));
};
h.I = function(b, a) {
  return new bi(this.name, this.Ba, this.Qa, this.Ra, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function ci(b, a, c, d, e, f, g) {
  this.name = b;
  this.graphics = a;
  this.color = c;
  this.Sa = d;
  this.m = e;
  this.j = f;
  this.n = g;
  this.l = 2229667594;
  this.B = 8192;
}
h = ci.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "max-hp":
      return this.Sa;
    case "color":
      return this.color;
    case "graphics":
      return this.graphics;
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Health-bar{", ", ", "}", c, Pd.c(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [fh, this.graphics], null), new U(null, 2, 5, V, [jg, this.color], null), new U(null, 2, 5, V, [ug, this.Sa], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 4 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 4, [jg, null, ug, null, Z, null, fh, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new ci(this.name, this.graphics, this.color, this.Sa, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new ci(c, this.graphics, this.color, this.Sa, this.m, this.j, null) : r(T.c ? T.c(fh, a) : T.call(null, fh, a)) ? new ci(this.name, c, this.color, this.Sa, this.m, this.j, null) : r(T.c ? T.c(jg, a) : T.call(null, jg, a)) ? new ci(this.name, this.graphics, c, this.Sa, this.m, this.j, null) : r(T.c ? T.c(ug, a) : T.call(null, ug, a)) ? new ci(this.name, this.graphics, this.color, c, this.m, this.j, null) : new ci(this.name, this.graphics, this.color, 
  this.Sa, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 4, 5, V, [new U(null, 2, 5, V, [Z, this.name], null), new U(null, 2, 5, V, [fh, this.graphics], null), new U(null, 2, 5, V, [jg, this.color], null), new U(null, 2, 5, V, [ug, this.Sa], null)], null), this.j));
};
h.I = function(b, a) {
  return new ci(this.name, this.graphics, this.color, this.Sa, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function di(b, a, c) {
  return new ci(Gh, b, a, c, null, null, null);
}
function ei(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = ei.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Attacking{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new ei(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new ei(c, this.m, this.j, null) : new ei(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new ei(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function fi() {
  return new ei(Ph, null, null, null);
}
function gi(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = gi.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Animating{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new gi(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new gi(c, this.m, this.j, null) : new gi(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new gi(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function ii() {
  return new gi(Mh, null, null, null);
}
function ji(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = ji.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Alive{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new ji(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new ji(c, this.m, this.j, null) : new ji(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new ji(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function ki() {
  return new ji(zg, null, null, null);
}
function li(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = li.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Dead{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new li(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new li(c, this.m, this.j, null) : new li(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new li(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function mi(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = mi.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Moving{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new mi(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new mi(c, this.m, this.j, null) : new mi(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new mi(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function ni() {
  return new mi(sh, null, null, null);
}
function oi(b, a, c, d) {
  this.name = b;
  this.m = a;
  this.j = c;
  this.n = d;
  this.l = 2229667594;
  this.B = 8192;
}
h = oi.prototype;
h.H = function(b, a) {
  return $a.e(this, a, null);
};
h.F = function(b, a, c) {
  switch(a instanceof S ? a.T : null) {
    case "name":
      return this.name;
    default:
      return Mc.e(this.j, a, c);
  }
};
h.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "#clash-attack-sim.component.Standing{", ", ", "}", c, Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.G = function() {
  return this.m;
};
h.L = function() {
  return 1 + N(this.j);
};
h.D = function() {
  var b = this.n;
  return null != b ? b : this.n = b = rd(this);
};
h.A = function(b, a) {
  return r(r(a) ? this.constructor === a.constructor && We(this, a) : a) ? !0 : !1;
};
h.Z = function(b, a) {
  return gd(new If(null, new q(null, 1, [Z, null], null), null), a) ? Oc.c(Hc(se.c(ff, this), this.m), a) : new oi(this.name, this.m, Vd(Oc.c(this.j, a)), null);
};
h.W = function(b, a, c) {
  return r(T.c ? T.c(Z, a) : T.call(null, Z, a)) ? new oi(c, this.m, this.j, null) : new oi(this.name, this.m, Q.e(this.j, a, c), null);
};
h.J = function() {
  return B(Pd.c(new U(null, 1, 5, V, [new U(null, 2, 5, V, [Z, this.name], null)], null), this.j));
};
h.I = function(b, a) {
  return new oi(this.name, a, this.j, this.n);
};
h.K = function(b, a) {
  return Yc(a) ? bb(this, z.c(a, 0), z.c(a, 1)) : Da.e(Oa, this, a);
};
function pi() {
  return new oi(ng, null, null, null);
}
;var qi = function() {
  function b(a, b) {
    for (var c = new ja, g = B(b);;) {
      if (g) {
        c.append("" + x(E(g))), g = G(g), null != g && c.append(a);
      } else {
        return c.toString();
      }
    }
  }
  function a(a) {
    var b = new ja;
    for (a = B(a);;) {
      if (a) {
        b = b.append("" + x(E(a))), a = G(a);
      } else {
        return b.toString();
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 2:
        return b.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.c = b;
  return c;
}();
function ri(b) {
  return b.toUpperCase();
}
function si(b, a) {
  if (0 >= a || a >= 2 + N(b)) {
    return Kc.c(Me(K("", je.c(x, B(b)))), "");
  }
  if (r(nc.c ? nc.c(1, a) : nc.call(null, 1, a))) {
    return new U(null, 1, 5, V, [b], null);
  }
  if (r(nc.c ? nc.c(2, a) : nc.call(null, 2, a))) {
    return new U(null, 2, 5, V, ["", b], null);
  }
  var c = a - 2;
  return Kc.c(Me(K("", Pe.e(Me(je.c(x, B(b))), 0, c))), qd.c(b, c));
}
var ti = function() {
  function b(a, b, c) {
    if (nc.c("" + x(b), "/(?:)/")) {
      b = si(a, c);
    } else {
      if (1 > c) {
        b = Me(("" + x(a)).split(b));
      } else {
        a: {
          for (var g = c, k = Jc;;) {
            if (nc.c(g, 1)) {
              b = Kc.c(k, a);
              break a;
            }
            var l = Mf(b, a);
            if (r(l)) {
              var m = l, l = a.indexOf(m), m = a.substring(l + N(m)), g = g - 1, k = Kc.c(k, a.substring(0, l));
              a = m;
            } else {
              b = Kc.c(k, a);
              break a;
            }
          }
        }
      }
    }
    if (nc.c(0, c)) {
      a: {
        for (c = b;;) {
          if (nc.c("", null == c ? null : kb(c))) {
            c = null == c ? null : lb(c);
          } else {
            break a;
          }
        }
      }
    } else {
      c = b;
    }
    return c;
  }
  function a(a, b) {
    return c.e(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function ui() {
  function b() {
    return bg(16).toString(16);
  }
  return new cg(qi.d(Pd.h(le.c(8, b), "-", L([le.c(4, b), "-4", le.c(3, b), "-", (8 | 3 & bg(15)).toString(16), le.c(3, b), "-", le.c(12, b)], 0))));
}
var vi = [x("^"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("-"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), 
x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("[0-9a-fA-F]"), x("$")].join("");
if (!(vi instanceof RegExp)) {
  var wi = Mf(/^\(\?([idmsux]*)\)/, vi), xi = O.e(wi, 0, null);
  O.e(wi, 1, null);
  qd.c(vi, N(xi));
}
;function yi(b, a) {
  return gd(b, a);
}
function zi(b, a) {
  return Q.e(b, Z.d(a), a);
}
function Ai(b, a) {
  return Da.e(function(a, b) {
    return Oc.c(a, Z.d(b));
  }, b, a);
}
function Bi(b, a) {
  return Da.e(function(a, b) {
    return Q.e(a, Z.d(b), b);
  }, b, a);
}
var Ci = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    a = Da.e(function(a, b) {
      return Q.e(a, Z.d(b), b);
    }, ff, a);
    return gd(a, kh) ? a : zi(a, new q(null, 2, [Z, kh, ah, "" + x(ui())], null));
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}(), Di = function() {
  function b(b, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new D(f, 0);
    }
    return a.call(this, b, e);
  }
  function a(a, b) {
    var e = df(Fg.d(a));
    return oe.c(function() {
      return function(a) {
        return Wd(ae.c(yi, a), b);
      };
    }(e), e);
  }
  b.w = 1;
  b.o = function(b) {
    var d = E(b);
    b = F(b);
    return a(d, b);
  };
  b.h = a;
  return b;
}();
function Ei(b, a) {
  var c = function() {
    var a = Fg.d(b);
    return r(a) ? a : ff;
  }();
  return Q.e(b, Fg, Da.e(function() {
    return function(a, b) {
      return Q.e(a, te.c(b, new U(null, 2, 5, V, [kh, ah], null)), b);
    };
  }(c), c, a));
}
function Fi(b) {
  return te.c(b, new U(null, 2, 5, V, [ph, rh], null));
}
function Gi(b) {
  return te.c(b, new U(null, 2, 5, V, [Ig, yh], null));
}
function Hi(b) {
  return te.c(b, new U(null, 2, 5, V, [fg, Fh], null));
}
function Ii(b) {
  return te.c(b, new U(null, 2, 5, V, [Ig, uh], null));
}
function Ji(b) {
  return te.c(b, new U(null, 2, 5, V, [Ig, Dh], null));
}
function Ki(b) {
  return te.c(b, new U(null, 2, 5, V, [Ig, Yg], null));
}
function Li(b) {
  return te.c(b, new U(null, 2, 5, V, [Ih, xh], null));
}
function Mi(b) {
  return te.c(b, new U(null, 2, 5, V, [Ig, og], null));
}
function Ni(b) {
  var a = te.c(b, new U(null, 1, 5, V, [hg], null));
  b = eg.d(a);
  a = Eh.d(a);
  return a.d ? a.d(b) : a.call(null, b);
}
function Oi(b, a) {
  return oe.c(function(a) {
    return nc.c(Gi(a), b);
  }, a);
}
function Pi(b) {
  return te.c(b, new U(null, 2, 5, V, [Ag, jh], null)).getBounds();
}
;function Qi(b, a) {
  return Ei(b, function() {
    return function d(a) {
      return new Dd(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (Zc(b)) {
              var g = Sb(b), k = N(g), l = Hd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.c(g, a), d = l, e = Gi(b), f = Fi(e), e = O.e(f, 0, null), f = O.e(f, 1, null), m = Fi(b), I = O.e(m, 0, null), m = O.e(m, 1, null), b = zi(b, new ai(Dg, Math.atan2(f - m, e - I), null, null, null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Kd(l.Q(), d(Tb(b))) : Kd(l.Q(), null);
            }
            var m = E(b);
            return K(function() {
              var a = Gi(m), b = Fi(a), a = O.e(b, 0, null), b = O.e(b, 1, null), d = Fi(m), e = O.e(d, 0, null), d = O.e(d, 1, null);
              return zi(m, new ai(Dg, Math.atan2(b - d, a - e), null, null, null));
            }(), d(F(b)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
}
;var Ri, Si = function Si(a, c, d) {
  if (a ? a.gc : a) {
    return a.gc(0, c, d);
  }
  var e;
  e = Si[p(null == a ? null : a)];
  if (!e && (e = Si._, !e)) {
    throw w("WritePort.put!", a);
  }
  return e.call(null, a, c, d);
}, Ti = function Ti(a) {
  if (a ? a.Lb : a) {
    return a.Lb();
  }
  var c;
  c = Ti[p(null == a ? null : a)];
  if (!c && (c = Ti._, !c)) {
    throw w("Channel.close!", a);
  }
  return c.call(null, a);
}, Ui = function Ui(a) {
  if (a ? a.wc : a) {
    return!0;
  }
  var c;
  c = Ui[p(null == a ? null : a)];
  if (!c && (c = Ui._, !c)) {
    throw w("Handler.active?", a);
  }
  return c.call(null, a);
}, Vi = function Vi(a) {
  if (a ? a.xc : a) {
    return a.da;
  }
  var c;
  c = Vi[p(null == a ? null : a)];
  if (!c && (c = Vi._, !c)) {
    throw w("Handler.commit", a);
  }
  return c.call(null, a);
}, Wi = function Wi(a, c) {
  if (a ? a.vc : a) {
    return a.vc(0, c);
  }
  var d;
  d = Wi[p(null == a ? null : a)];
  if (!d && (d = Wi._, !d)) {
    throw w("Buffer.add!*", a);
  }
  return d.call(null, a, c);
}, Xi = function() {
  function b(a, b) {
    if (null == b) {
      throw Error([x("Assert failed: "), x(ge.h(L([xd(new A(null, "not", "not", 1044554643, null), xd(new A(null, "nil?", "nil?", 1612038930, null), new A(null, "itm", "itm", -713282527, null)))], 0)))].join(""));
    }
    return Wi(a, b);
  }
  var a = null, a = function(a, d) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return b.call(this, a, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.d = function(a) {
    return a;
  };
  a.c = b;
  return a;
}();
var Yi, Zi = function Zi(a) {
  "undefined" === typeof Yi && (Yi = function(a, d, e) {
    this.da = a;
    this.jc = d;
    this.Rc = e;
    this.B = 0;
    this.l = 393216;
  }, Yi.prototype.wc = function() {
    return!0;
  }, Yi.prototype.xc = function() {
    return this.da;
  }, Yi.prototype.G = function() {
    return this.Rc;
  }, Yi.prototype.I = function(a, d) {
    return new Yi(this.da, this.jc, d);
  }, Yi.Nb = !0, Yi.Mb = "cljs.core.async.impl.ioc-helpers/t20707", Yi.hc = function(a, d) {
    return Fb(d, "cljs.core.async.impl.ioc-helpers/t20707");
  });
  return new Yi(a, Zi, ff);
};
function $i(b) {
  try {
    return b[0].call(null, b);
  } catch (a) {
    throw a instanceof Object && b[6].Lb(), a;
  }
}
function aj(b, a, c) {
  c = c.Pc(Zi(function(c) {
    b[2] = c;
    b[1] = a;
    return $i(b);
  }));
  return r(c) ? (b[2] = J.d ? J.d(c) : J.call(null, c), b[1] = a, Gg) : null;
}
function bj(b, a) {
  var c = b[6];
  null != a && c.gc(0, a, Zi(function() {
    return function() {
      return null;
    };
  }(c)));
  c.Lb();
  return c;
}
function cj(b) {
  for (;;) {
    var a = b[4], c = Jg.d(a), d = ch.d(a), e = b[5];
    if (r(function() {
      var b = e;
      return r(b) ? ya(a) : b;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      b[1] = c;
      b[2] = e;
      b[5] = null;
      b[4] = Q.h(a, Jg, null, L([ch, null], 0));
      break;
    }
    if (r(function() {
      var b = e;
      return r(b) ? ya(c) && ya(tg.d(a)) : b;
    }())) {
      b[4] = hh.d(a);
    } else {
      if (r(function() {
        var b = e;
        return r(b) ? (b = ya(c)) ? tg.d(a) : b : b;
      }())) {
        b[1] = tg.d(a);
        b[4] = Q.e(a, tg, null);
        break;
      }
      if (r(function() {
        var b = ya(e);
        return b ? tg.d(a) : b;
      }())) {
        b[1] = tg.d(a);
        b[4] = Q.e(a, tg, null);
        break;
      }
      if (ya(e) && ya(tg.d(a))) {
        b[1] = lh.d(a);
        b[4] = hh.d(a);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;var dj;
function ej() {
  var b = aa.MessageChannel;
  "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = ga(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof b) {
    var a = new b, c = {}, d = c;
    a.port1.onmessage = function() {
      c = c.next;
      var a = c.nc;
      c.nc = null;
      a();
    };
    return function(b) {
      d.next = {nc:b};
      d = d.next;
      a.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
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
;function fj(b, a, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = b[a + f], f += 1;
    } else {
      break;
    }
  }
}
function gj(b, a, c, d) {
  this.head = b;
  this.O = a;
  this.length = c;
  this.f = d;
}
gj.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var b = this.f[this.O];
  this.f[this.O] = null;
  this.O = (this.O + 1) % this.f.length;
  --this.length;
  return b;
};
gj.prototype.unshift = function(b) {
  this.f[this.head] = b;
  this.head = (this.head + 1) % this.f.length;
  this.length += 1;
  return null;
};
function hj(b, a) {
  b.length + 1 === b.f.length && b.resize();
  b.unshift(a);
}
gj.prototype.resize = function() {
  var b = Array(2 * this.f.length);
  return this.O < this.head ? (fj(this.f, this.O, b, 0, this.length), this.O = 0, this.head = this.length, this.f = b) : this.O > this.head ? (fj(this.f, this.O, b, 0, this.f.length - this.O), fj(this.f, 0, b, this.f.length - this.O, this.head), this.O = 0, this.head = this.length, this.f = b) : this.O === this.head ? (this.head = this.O = 0, this.f = b) : null;
};
function ij(b, a) {
  for (var c = b.length, d = 0;;) {
    if (d < c) {
      var e = b.pop(), f;
      f = e;
      f = a.d ? a.d(f) : a.call(null, f);
      r(f) && b.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function jj(b) {
  if (!(0 < b)) {
    throw Error([x("Assert failed: "), x("Can't create a ring buffer of size 0"), x("\n"), x(ge.h(L([xd(new A(null, "\x3e", "\x3e", 1085014381, null), new A(null, "n", "n", -2092305744, null), 0)], 0)))].join(""));
  }
  return new gj(0, 0, 0, Array(b));
}
function kj(b, a) {
  this.N = b;
  this.Tc = a;
  this.B = 0;
  this.l = 2;
}
kj.prototype.L = function() {
  return this.N.length;
};
function lj(b) {
  return b.N.length === b.Tc;
}
kj.prototype.vc = function(b, a) {
  hj(this.N, a);
  return this;
};
function mj(b) {
  return new kj(jj(b), b);
}
;var nj = "undefined" !== typeof window && null != window.document, oj = new If(null, new q(null, 2, ["aria", null, "data", null], null), null);
function pj(b) {
  return 2 > N(b) ? ri(b) : [x(ri(qd.e(b, 0, 1))), x(qd.c(b, 1))].join("");
}
function qj(b) {
  if ("string" === typeof b) {
    return b;
  }
  b = Bd(b);
  var a = ti.c(b, /-/), c = O.e(a, 0, null), d;
  a: {
    for (d = 1, a = B(a);;) {
      if (a && 0 < d) {
        --d, a = G(a);
      } else {
        d = a;
        break a;
      }
    }
  }
  return r(oj.d ? oj.d(c) : oj.call(null, c)) ? b : R.e(x, c, je.c(pj, d));
}
var rj = !1;
if ("undefined" === typeof sj) {
  var sj = ee.d ? ee.d(ff) : ee.call(null, ff)
}
function tj(b, a, c) {
  try {
    var d = rj;
    rj = !0;
    try {
      return React.render(b.v ? b.v() : b.call(null), a, function() {
        return function() {
          var d = rj;
          rj = !1;
          try {
            return he.t(sj, Q, a, new U(null, 2, 5, V, [b, a], null)), null != c ? c.v ? c.v() : c.call(null) : null;
          } finally {
            rj = d;
          }
        };
      }(d));
    } finally {
      rj = d;
    }
  } catch (e) {
    if (e instanceof Object) {
      try {
        React.unmountComponentAtNode(a);
      } catch (f) {
        if (f instanceof Object) {
          "undefined" !== typeof console && console.warn([x("Warning: "), x("Error unmounting:")].join("")), "undefined" !== typeof console && console.log(f);
        } else {
          throw f;
        }
      }
    }
    throw e;
  }
}
function uj(b, a) {
  return tj(b, a, null);
}
;var vj;
if ("undefined" === typeof wj) {
  var wj = !1
}
if ("undefined" === typeof xj) {
  var xj = ee.d ? ee.d(0) : ee.call(null, 0)
}
function yj(b, a) {
  a.Ob = null;
  var c = vj;
  vj = a;
  try {
    return b.v ? b.v() : b.call(null);
  } finally {
    vj = c;
  }
}
function zj(b) {
  var a = b.Ob;
  b.Ob = null;
  return a;
}
function Aj(b) {
  var a = vj;
  if (null != a) {
    var c = a.Ob;
    a.Ob = Kc.c(null == c ? Kf : c, b);
  }
}
var Bj = {};
function Cj(b, a, c, d) {
  this.state = b;
  this.meta = a;
  this.pb = c;
  this.X = d;
  this.l = 2153938944;
  this.B = 114690;
}
h = Cj.prototype;
h.Bc = !0;
h.C = function(b, a, c) {
  Fb(a, "#\x3cAtom: ");
  X(this.state, a, c);
  return Fb(a, "\x3e");
};
h.G = function() {
  return this.meta;
};
h.D = function() {
  return ba(this);
};
h.A = function(b, a) {
  return this === a;
};
h.ac = function(b, a) {
  if (null != this.pb && !r(this.pb.d ? this.pb.d(a) : this.pb.call(null, a))) {
    throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(ge.h(L([xd(new A(null, "validator", "validator", -325659154, null), new A(null, "new-value", "new-value", -1567397401, null))], 0)))].join(""));
  }
  var c = this.state;
  this.state = a;
  null != this.X && Jb(this, c, a);
  return a;
};
h.bc = function(b, a) {
  var c;
  c = this.state;
  c = a.d ? a.d(c) : a.call(null, c);
  return Vb(this, c);
};
h.cc = function(b, a, c) {
  b = this.state;
  a = a.c ? a.c(b, c) : a.call(null, b, c);
  return Vb(this, a);
};
h.dc = function(b, a, c, d) {
  b = this.state;
  a = a.e ? a.e(b, c, d) : a.call(null, b, c, d);
  return Vb(this, a);
};
h.ec = function(b, a, c, d, e) {
  return Vb(this, R.M(a, this.state, c, d, e));
};
h.Jb = function(b, a, c) {
  return jd(function(b) {
    return function(e, f, g) {
      g.t ? g.t(f, b, a, c) : g.call(null, f, b, a, c);
      return null;
    };
  }(this), null, this.X);
};
h.Ib = function(b, a, c) {
  return this.X = Q.e(this.X, a, c);
};
h.Kb = function(b, a) {
  return this.X = Oc.c(this.X, a);
};
h.Va = function() {
  Aj(this);
  return this.state;
};
var Dj = function() {
  function b(a) {
    return new Cj(a, null, null, null);
  }
  var a = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = dd(c) ? R.c(ce, c) : c, e = Mc.c(d, de), d = Mc.c(d, sa);
      return new Cj(a, d, e, null);
    }
    a.w = 1;
    a.o = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new D(g, 0);
        }
        return c.h(a, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 1;
  a.o = c.o;
  a.d = b;
  a.h = c.h;
  return a;
}(), Ej = function Ej(a) {
  if (a ? a.Ac : a) {
    return a.Ac();
  }
  var c;
  c = Ej[p(null == a ? null : a)];
  if (!c && (c = Ej._, !c)) {
    throw w("IDisposable.dispose!", a);
  }
  return c.call(null, a);
}, Fj = function Fj(a) {
  if (a ? a.Cc : a) {
    return a.Cc();
  }
  var c;
  c = Fj[p(null == a ? null : a)];
  if (!c && (c = Fj._, !c)) {
    throw w("IRunnable.run", a);
  }
  return c.call(null, a);
}, Gj = function Gj(a, c) {
  if (a ? a.lc : a) {
    return a.lc(0, c);
  }
  var d;
  d = Gj[p(null == a ? null : a)];
  if (!d && (d = Gj._, !d)) {
    throw w("IComputedImpl.-update-watching", a);
  }
  return d.call(null, a, c);
}, Hj = function Hj(a, c, d, e) {
  if (a ? a.yc : a) {
    return a.yc(0, 0, d, e);
  }
  var f;
  f = Hj[p(null == a ? null : a)];
  if (!f && (f = Hj._, !f)) {
    throw w("IComputedImpl.-handle-change", a);
  }
  return f.call(null, a, c, d, e);
}, Ij = function Ij(a) {
  if (a ? a.zc : a) {
    return a.zc();
  }
  var c;
  c = Ij[p(null == a ? null : a)];
  if (!c && (c = Ij._, !c)) {
    throw w("IComputedImpl.-peek-at", a);
  }
  return c.call(null, a);
};
function Jj(b, a, c, d, e, f, g, k, l) {
  this.da = b;
  this.state = a;
  this.Wa = c;
  this.qb = d;
  this.gb = e;
  this.X = f;
  this.Ub = g;
  this.Sb = k;
  this.Rb = l;
  this.l = 2153807872;
  this.B = 114690;
}
h = Jj.prototype;
h.yc = function(b, a, c, d) {
  var e = this;
  return r(function() {
    var a = e.qb;
    return r(a) ? ya(e.Wa) && c !== d : a;
  }()) ? (e.Wa = !0, function() {
    var a = e.Ub;
    return r(a) ? a : Fj;
  }().call(null, this)) : null;
};
h.lc = function(b, a) {
  for (var c = B(a), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.R(null, f);
      gd(this.gb, g) || Kb(g, this, Hj);
      f += 1;
    } else {
      if (c = B(c)) {
        d = c, Zc(d) ? (c = Sb(d), f = Tb(d), d = c, e = N(c), c = f) : (c = E(d), gd(this.gb, c) || Kb(c, this, Hj), c = G(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c = B(this.gb);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      g = d.R(null, f), gd(a, g) || Lb(g, this), f += 1;
    } else {
      if (c = B(c)) {
        d = c, Zc(d) ? (c = Sb(d), f = Tb(d), d = c, e = N(c), c = f) : (c = E(d), gd(a, c) || Lb(c, this), c = G(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return this.gb = a;
};
h.zc = function() {
  if (ya(this.Wa)) {
    return this.state;
  }
  var b = vj;
  vj = null;
  try {
    return pb(this);
  } finally {
    vj = b;
  }
};
h.Bc = !0;
h.C = function(b, a, c) {
  Fb(a, [x("#\x3cReaction "), x(ic(this)), x(": ")].join(""));
  X(this.state, a, c);
  return Fb(a, "\x3e");
};
h.D = function() {
  return ba(this);
};
h.A = function(b, a) {
  return this === a;
};
h.Ac = function() {
  for (var b = B(this.gb), a = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = a.R(null, d);
      Lb(e, this);
      d += 1;
    } else {
      if (b = B(b)) {
        a = b, Zc(a) ? (b = Sb(a), d = Tb(a), a = b, c = N(b), b = d) : (b = E(a), Lb(b, this), b = G(a), a = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  this.state = this.gb = null;
  this.Wa = !0;
  r(this.qb) && (r(wj) && he.c(xj, md), this.qb = !1);
  return r(this.Rb) ? this.Rb.v ? this.Rb.v() : this.Rb.call(null) : null;
};
h.ac = function(b, a) {
  var c = this.state;
  this.state = a;
  r(this.Sb) && (this.Wa = !0, this.Sb.c ? this.Sb.c(c, a) : this.Sb.call(null, c, a));
  Jb(this, c, a);
  return a;
};
h.bc = function(b, a) {
  var c;
  c = Ij(this);
  c = a.d ? a.d(c) : a.call(null, c);
  return Vb(this, c);
};
h.cc = function(b, a, c) {
  b = Ij(this);
  a = a.c ? a.c(b, c) : a.call(null, b, c);
  return Vb(this, a);
};
h.dc = function(b, a, c, d) {
  b = Ij(this);
  a = a.e ? a.e(b, c, d) : a.call(null, b, c, d);
  return Vb(this, a);
};
h.ec = function(b, a, c, d, e) {
  return Vb(this, R.M(a, Ij(this), c, d, e));
};
h.Cc = function() {
  var b = this.state, a = yj(this.da, this), c = zj(this);
  Ud.c(c, this.gb) && Gj(this, c);
  r(this.qb) || (r(wj) && he.c(xj, wc), this.qb = !0);
  this.Wa = !1;
  this.state = a;
  Jb(this, b, this.state);
  return a;
};
h.Jb = function(b, a, c) {
  return jd(function(b) {
    return function(e, f, g) {
      g.t ? g.t(f, b, a, c) : g.call(null, f, b, a, c);
      return null;
    };
  }(this), null, this.X);
};
h.Ib = function(b, a, c) {
  return this.X = Q.e(this.X, a, c);
};
h.Kb = function(b, a) {
  this.X = Oc.c(this.X, a);
  return Tc(this.X) && ya(this.Ub) ? Ej(this) : null;
};
h.Va = function() {
  var b = this.Ub;
  if (r(r(b) ? b : null != vj)) {
    return Aj(this), r(this.Wa) ? Fj(this) : this.state;
  }
  r(this.Wa) && (b = this.state, this.state = this.da.v ? this.da.v() : this.da.call(null), b !== this.state && Jb(this, b, this.state));
  return this.state;
};
var Kj = function() {
  function b(b, d) {
    var e = null;
    if (1 < arguments.length) {
      for (var e = 0, f = Array(arguments.length - 1);e < f.length;) {
        f[e] = arguments[e + 1], ++e;
      }
      e = new D(f, 0);
    }
    return a.call(this, b, e);
  }
  function a(a, b) {
    var e = dd(b) ? R.c(ce, b) : b, f = Mc.c(e, pg), g = Mc.c(e, qh), k = Mc.c(e, gg), e = Mc.c(e, dh), e = nc.c(e, !0) ? Fj : e, l = null != f, g = new Jj(a, null, !l, l, null, null, e, k, g);
    null != f && (r(wj) && he.c(xj, wc), g.lc(0, f));
    return g;
  }
  b.w = 1;
  b.o = function(b) {
    var d = E(b);
    b = F(b);
    return a(d, b);
  };
  b.h = a;
  return b;
}();
if ("undefined" === typeof Lj) {
  var Lj = 0
}
function Mj(b) {
  return setTimeout(b, 16);
}
var Nj = ya(nj) ? Mj : function() {
  var b = window, a = b.requestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = b.webkitRequestAnimationFrame;
  if (r(a)) {
    return a;
  }
  a = b.mozRequestAnimationFrame;
  if (r(a)) {
    return a;
  }
  b = b.msRequestAnimationFrame;
  return r(b) ? b : Mj;
}();
function Oj(b, a) {
  return b.cljsMountOrder - a.cljsMountOrder;
}
function Pj() {
  var b = Qj;
  if (r(b.mc)) {
    return null;
  }
  b.mc = !0;
  b = function(a) {
    return function() {
      return Rj(a);
    };
  }(b);
  return Nj.d ? Nj.d(b) : Nj.call(null, b);
}
function Rj(b) {
  var a = b.queue, c = b.Tb;
  b.queue = [];
  b.Tb = [];
  b.mc = !1;
  a: {
    a.sort(Oj);
    b = a.length;
    for (var d = 0;;) {
      if (d < b) {
        var e = a[d];
        r(e.cljsIsDirty) && e.forceUpdate();
        d += 1;
      } else {
        break a;
      }
    }
  }
  a: {
    for (a = c.length, b = 0;;) {
      if (b < a) {
        c[b].call(null), b += 1;
      } else {
        break a;
      }
    }
  }
  return null;
}
var Qj = new function() {
  this.queue = [];
  this.mc = !1;
  this.Tb = [];
};
function Sj(b) {
  Qj.Tb.push(b);
  Pj();
}
function Tj(b) {
  b = null == b ? null : b.props;
  return null == b ? null : b.argv;
}
function Uj(b, a) {
  if (!r(Tj(b))) {
    throw Error([x("Assert failed: "), x(ge.h(L([xd(new A(null, "is-reagent-component", "is-reagent-component", -1856228005, null), new A(null, "c", "c", -122660552, null))], 0)))].join(""));
  }
  b.cljsIsDirty = !1;
  var c = b.cljsRatom;
  if (null == c) {
    var d = yj(a, b), e = zj(b);
    null != e && (b.cljsRatom = Kj.h(a, L([dh, function() {
      return function() {
        b.cljsIsDirty = !0;
        Qj.queue.push(b);
        return Pj();
      };
    }(d, e, c), pg, e], 0)));
    return d;
  }
  return Fj(c);
}
;var Vj, Wj = function Wj(a) {
  var c = Vj;
  Vj = a;
  try {
    var d = a.cljsRender;
    if (!fd(d)) {
      throw Error([x("Assert failed: "), x(ge.h(L([xd(new A(null, "ifn?", "ifn?", -2106461064, null), new A(null, "f", "f", 43394975, null))], 0)))].join(""));
    }
    var e = a.props, f = null == a.reagentRender ? d.d ? d.d(a) : d.call(null, a) : function() {
      var a = e.argv;
      switch(N(a)) {
        case 1:
          return d.v ? d.v() : d.call(null);
        case 2:
          return a = O.c(a, 1), d.d ? d.d(a) : d.call(null, a);
        case 3:
          var c = O.c(a, 1), a = O.c(a, 2);
          return d.c ? d.c(c, a) : d.call(null, c, a);
        case 4:
          var c = O.c(a, 1), f = O.c(a, 2), a = O.c(a, 3);
          return d.e ? d.e(c, f, a) : d.call(null, c, f, a);
        case 5:
          var c = O.c(a, 1), f = O.c(a, 2), m = O.c(a, 3), a = O.c(a, 4);
          return d.t ? d.t(c, f, m, a) : d.call(null, c, f, m, a);
        default:
          return R.c(d, Pe.c(a, 1));
      }
    }();
    return Yc(f) ? Xj(f) : fd(f) ? (a.cljsRender = f, Wj(a)) : f;
  } finally {
    Vj = c;
  }
}, Yj = new q(null, 1, [Xg, function() {
  return ya(void 0) ? Uj(this, function(b) {
    return function() {
      return Wj(b);
    };
  }(this)) : Wj(this);
}], null);
function Zj(b, a) {
  var c = b instanceof S ? b.T : null;
  switch(c) {
    case "componentWillUnmount":
      return function() {
        return function() {
          var b = this.cljsRatom;
          null == b || Ej(b);
          this.cljsIsDirty = !1;
          return null == a ? null : a.d ? a.d(this) : a.call(null, this);
        };
      }(c);
    case "componentWillMount":
      return function() {
        return function() {
          this.cljsMountOrder = Lj += 1;
          return null == a ? null : a.d ? a.d(this) : a.call(null, this);
        };
      }(c);
    case "componentDidUpdate":
      return function() {
        return function(b) {
          b = b.argv;
          return a.c ? a.c(this, b) : a.call(null, this, b);
        };
      }(c);
    case "componentWillUpdate":
      return function() {
        return function(b) {
          b = b.argv;
          return a.c ? a.c(this, b) : a.call(null, this, b);
        };
      }(c);
    case "shouldComponentUpdate":
      return function() {
        return function(b) {
          var c = rj;
          if (r(c)) {
            return c;
          }
          c = this.props.argv;
          b = b.argv;
          return null == a ? null == c || null == b || Ud.c(c, b) : a.e ? a.e(this, c, b) : a.call(null, this, c, b);
        };
      }(c);
    case "componentWillReceiveProps":
      return function() {
        return function(b) {
          b = b.argv;
          return a.c ? a.c(this, b) : a.call(null, this, b);
        };
      }(c);
    case "getInitialState":
      return function() {
        return function() {
          var b;
          b = this.cljsState;
          b = null != b ? b : this.cljsState = Dj.d(null);
          var c = a.d ? a.d(this) : a.call(null, this);
          return fe.c ? fe.c(b, c) : fe.call(null, b, c);
        };
      }(c);
    case "getDefaultProps":
      throw Error([x("Assert failed: "), x("getDefaultProps not supported yet"), x("\n"), x(ge.h(L([!1], 0)))].join(""));;
    default:
      return null;
  }
}
function ak(b) {
  return fd(b) ? function() {
    function a(a) {
      var b = null;
      if (0 < arguments.length) {
        for (var b = 0, f = Array(arguments.length - 0);b < f.length;) {
          f[b] = arguments[b + 0], ++b;
        }
        b = new D(f, 0);
      }
      return c.call(this, b);
    }
    function c(a) {
      return R.e(b, this, a);
    }
    a.w = 0;
    a.o = function(a) {
      a = B(a);
      return c(a);
    };
    a.h = c;
    return a;
  }() : b;
}
var bk = new If(null, new q(null, 4, [sg, null, Wg, null, Xg, null, eh, null], null), null);
function ck(b, a, c) {
  if (r(bk.d ? bk.d(b) : bk.call(null, b))) {
    return Qc(a) && (a.__reactDontBind = !0), a;
  }
  var d = Zj(b, a);
  if (r(r(d) ? a : d) && !fd(a)) {
    throw Error([x("Assert failed: "), x([x("Expected function in "), x(c), x(b), x(" but got "), x(a)].join("")), x("\n"), x(ge.h(L([xd(new A(null, "ifn?", "ifn?", -2106461064, null), new A(null, "f", "f", 43394975, null))], 0)))].join(""));
  }
  return r(d) ? d : ak(a);
}
var dk = new q(null, 3, [Qg, null, Hh, null, Lg, null], null), ek = function(b) {
  return function(a) {
    return function(c) {
      var d = Mc.c(J.d ? J.d(a) : J.call(null, a), c);
      if (null != d) {
        return d;
      }
      d = b.d ? b.d(c) : b.call(null, c);
      he.t(a, Q, c, d);
      return d;
    };
  }(ee.d ? ee.d(ff) : ee.call(null, ff));
}(qj);
function fk(b) {
  return jd(function(a, b, d) {
    return Q.e(a, Cd.d(ek.d ? ek.d(b) : ek.call(null, b)), d);
  }, ff, b);
}
function gk(b) {
  return Hf.h(L([dk, b], 0));
}
function hk(b, a, c) {
  b = Q.h(b, sg, a, L([Xg, Xg.d(Yj)], 0));
  return Q.e(b, eh, function() {
    return function() {
      return c;
    };
  }(b));
}
function ik(b) {
  var a = function() {
    var a = Qc(b);
    return a ? (a = b.displayName, r(a) ? a : b.name) : a;
  }();
  if (r(a)) {
    return a;
  }
  a = function() {
    var a = b ? b.B & 4096 || b.rc ? !0 : !1 : !1;
    return a ? Bd(b) : a;
  }();
  if (r(a)) {
    return a;
  }
  a = Sc(b);
  return Xc(a) ? Z.d(a) : null;
}
function jk(b) {
  var a = function() {
    var a = th.d(b);
    return null == a ? b : Oc.c(Q.e(b, Wg, a), th);
  }(), c = function() {
    var b = Wg.d(a);
    return r(b) ? b : Xg.d(a);
  }();
  if (!fd(c)) {
    throw Error([x("Assert failed: "), x([x("Render must be a function, not "), x(ge.h(L([c], 0)))].join("")), x("\n"), x(ge.h(L([xd(new A(null, "ifn?", "ifn?", -2106461064, null), new A(null, "render-fun", "render-fun", -1209513086, null))], 0)))].join(""));
  }
  var d = null, e = "" + x(function() {
    var b = qg.d(a);
    return r(b) ? b : ik(c);
  }()), f = Tc(e) ? "" + x(Wf.d("reagent")) : e, g = hk(Q.e(a, qg, f), c, f);
  return jd(function(a, b, c, d, e) {
    return function(a, b, c) {
      return Q.e(a, b, ck(b, c, e));
    };
  }(a, c, d, e, f, g), ff, g);
}
function kk(b) {
  return jd(function(a, b, d) {
    a[Bd(b)] = d;
    return a;
  }, {}, b);
}
function lk(b) {
  if (!Xc(b)) {
    throw Error([x("Assert failed: "), x(ge.h(L([xd(new A(null, "map?", "map?", -1780568534, null), new A(null, "body", "body", -408674142, null))], 0)))].join(""));
  }
  var a = kk(jk(gk(fk(b))));
  b = React.createClass(a);
  a = function(a, b) {
    return function() {
      function a(b) {
        var d = null;
        if (0 < arguments.length) {
          for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
            e[d] = arguments[d + 0], ++d;
          }
          d = new D(e, 0);
        }
        return c.call(this, d);
      }
      function c(a) {
        a = R.e(Ne, b, a);
        return Xj(a);
      }
      a.w = 0;
      a.o = function(a) {
        a = B(a);
        return c(a);
      };
      a.h = c;
      return a;
    }();
  }(a, b);
  a.cljsReactClass = b;
  b.cljsReactClass = b;
  return a;
}
function mk() {
  var b;
  b = Vj;
  b = null == b ? null : b.cljsName();
  return Tc(b) ? "" : [x(" (in "), x(b), x(")")].join("");
}
;var nk = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function pk(b) {
  return b instanceof S || b instanceof A;
}
var qk = {charset:"charSet", "for":"htmlFor", "class":"className"};
function rk(b, a) {
  return r(b.hasOwnProperty(a)) ? b[a] : null;
}
var sk = function sk(a) {
  return "string" === typeof a || "number" === typeof a || Qc(a) ? a : pk(a) ? Bd(a) : Xc(a) ? jd(function(a, d, e) {
    if (pk(d)) {
      var f = rk(qk, Bd(d));
      d = null == f ? qk[Bd(d)] = qj(d) : f;
    }
    a[d] = sk(e);
    return a;
  }, {}, a) : Uc(a) ? ag(a) : fd(a) ? function() {
    function c(a) {
      var c = null;
      if (0 < arguments.length) {
        for (var c = 0, g = Array(arguments.length - 0);c < g.length;) {
          g[c] = arguments[c + 0], ++c;
        }
        c = new D(g, 0);
      }
      return d.call(this, c);
    }
    function d(c) {
      return R.c(a, c);
    }
    c.w = 0;
    c.o = function(a) {
      a = B(a);
      return d(a);
    };
    c.h = d;
    return c;
  }() : ag(a);
};
function tk(b) {
  var a = b.cljsInputValue;
  if (null == a) {
    return null;
  }
  b.cljsInputDirty = !1;
  b = b.getDOMNode();
  return Ud.c(a, b.value) ? b.value = a : null;
}
function uk(b, a, c) {
  a = a.d ? a.d(c) : a.call(null, c);
  r(b.cljsInputDirty) || (b.cljsInputDirty = !0, Sj(function() {
    return function() {
      return tk(b);
    };
  }(a)));
  return a;
}
function vk(b) {
  var a = Vj;
  if (r(function() {
    var a = b.hasOwnProperty("onChange");
    return r(a) ? b.hasOwnProperty("value") : a;
  }())) {
    var c = b.value, d = null == c ? "" : c, e = b.onChange;
    a.cljsInputValue = d;
    delete b.value;
    b.defaultValue = d;
    b.onChange = function(b, c, d, e) {
      return function(b) {
        return uk(a, e, b);
      };
    }(b, c, d, e);
  } else {
    a.cljsInputValue = null;
  }
}
var wk = null, yk = new q(null, 4, [mh, "ReagentInput", Eg, tk, gh, function(b) {
  return b.cljsInputValue = null;
}, $g, function(b, a, c, d) {
  vk(c);
  return xk.t ? xk.t(b, a, c, d) : xk.call(null, b, a, c, d);
}], null);
function zk(b, a, c, d) {
  null == wk && (wk = lk(yk));
  return wk.t ? wk.t(b, a, c, d) : wk.call(null, b, a, c, d);
}
function Ak(b) {
  return Xc(b) ? Mc.c(b, mg) : null;
}
function Bk(b) {
  var a;
  a = Sc(b);
  a = null == a ? null : Ak(a);
  return null == a ? Ak(O.e(b, 1, null)) : a;
}
var Ck = {};
function Xj(b) {
  if ("string" !== typeof b) {
    if (Yc(b)) {
      if (!(0 < N(b))) {
        throw Error([x("Assert failed: "), x([x("Hiccup form should not be empty: "), x(ge.h(L([b], 0))), x(mk())].join("")), x("\n"), x(ge.h(L([xd(new A(null, "pos?", "pos?", -244377722, null), xd(new A(null, "count", "count", -514511684, null), new A(null, "v", "v", 1661996586, null)))], 0)))].join(""));
      }
      var a = O.c(b, 0);
      if (!pk(a) && "string" !== typeof a && !fd(a)) {
        throw Error([x("Assert failed: "), x([x("Invalid Hiccup form: "), x(ge.h(L([b], 0))), x(mk())].join("")), x("\n"), x(ge.h(L([xd(new A(null, "valid-tag?", "valid-tag?", 1243064160, null), new A(null, "tag", "tag", 350170304, null))], 0)))].join(""));
      }
      var c;
      var d;
      if (pk(a) || "string" === typeof a) {
        c = rk(Ck, Bd(a));
        if (null == c) {
          c = Bd(a);
          var e;
          e = Bd(a);
          if ("string" === typeof e) {
            var f = nk.exec(e);
            e = nc.c(E(f), e) ? 1 === N(f) ? E(f) : Me(f) : null;
          } else {
            throw new TypeError("re-matches must match against a string.");
          }
          d = G(e);
          e = O.e(d, 0, null);
          f = O.e(d, 1, null);
          d = O.e(d, 2, null);
          if (r(d)) {
            var g = /\./;
            if ("string" === typeof g) {
              d = d.replace(new RegExp(String(g).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ");
            } else {
              if (g instanceof RegExp) {
                d = d.replace(new RegExp(g.source, "g"), " ");
              } else {
                throw[x("Invalid match arg: "), x(g)].join("");
              }
            }
          } else {
            d = null;
          }
          if (!r(e)) {
            throw Error([x("Assert failed: "), x([x("Invalid tag: '"), x(a), x("'"), x(mk())].join("")), x("\n"), x(ge.h(L([new A(null, "tag", "tag", 350170304, null)], 0)))].join(""));
          }
          c = Ck[c] = {className:d, id:f, name:e};
        }
        d = c;
      } else {
        d = null;
      }
      if (r(d)) {
        c = d.name;
        f = O.e(b, 1, null);
        e = null == f || Xc(f);
        g = e ? f : null;
        f = d.id;
        d = d.className;
        var k = null == f && null == d;
        k && Tc(g) ? f = null : (g = sk(g), k || (g = null == g ? {} : g, null != f && null == g.id && (g.id = f), null != d && (f = g.className, g.className = null != f ? [x(d), x(" "), x(f)].join("") : d)), f = g);
        e = e ? 2 : 1;
        "input" === c || "textarea" === c ? (c = Hc(new U(null, 5, 5, V, [zk, b, c, f, e], null), Sc(b)), c = Xj.d ? Xj.d(c) : Xj.call(null, c)) : (d = Sc(b), d = null == d ? null : Ak(d), null != d && (f = null == f ? {} : f, f.key = d), c = xk.t ? xk.t(b, c, f, e) : xk.call(null, b, c, f, e));
      } else {
        c = null;
      }
      if (null == c) {
        c = a.cljsReactClass;
        if (null == c) {
          if (!fd(a)) {
            throw Error([x("Assert failed: "), x([x("Expected a function, not "), x(ge.h(L([a], 0)))].join("")), x("\n"), x(ge.h(L([xd(new A(null, "ifn?", "ifn?", -2106461064, null), new A(null, "f", "f", 43394975, null))], 0)))].join(""));
          }
          Qc(a) && null != a.type && "undefined" !== typeof console && console.warn([x("Warning: "), x("Using native React classes directly in Hiccup forms "), x("is not supported. Use create-element or "), x("adapt-react-class instead: "), x(a.type), x(mk())].join(""));
          c = Sc(a);
          c = Q.e(c, $g, a);
          c = lk(c).cljsReactClass;
          a.cljsReactClass = c;
        }
        a = c;
        c = {argv:b};
        b = null == b ? null : Bk(b);
        null == b || (c.key = b);
        b = React.createElement(a, c);
      } else {
        b = c;
      }
    } else {
      b = dd(b) ? Dk.d ? Dk.d(b) : Dk.call(null, b) : b;
    }
  }
  return b;
}
function Ek(b, a) {
  for (var c = Fa.d(b), d = c.length, e = 0;;) {
    if (e < d) {
      var f = c[e];
      Yc(f) && null == Bk(f) && (a["no-key"] = !0);
      c[e] = Xj(f);
      e += 1;
    } else {
      break;
    }
  }
  return c;
}
function Dk(b) {
  var a = {}, c = null == vj ? Ek(b, a) : yj(function(a) {
    return function() {
      return Ek(b, a);
    };
  }(a), a);
  r(zj(a)) && "undefined" !== typeof console && console.warn([x("Warning: "), x("Reactive deref not supported in lazy seq, "), x("it should be wrapped in doall"), x(mk()), x(". Value:\n"), x(ge.h(L([b], 0)))].join(""));
  r(a["no-key"]) && "undefined" !== typeof console && console.warn([x("Warning: "), x("Every element in a seq should have a unique "), x(":key"), x(mk()), x(". Value: "), x(ge.h(L([b], 0)))].join(""));
  return c;
}
function xk(b, a, c, d) {
  var e = N(b) - d;
  switch(e) {
    case 0:
      return React.createElement(a, c);
    case 1:
      return React.createElement(a, c, Xj(O.c(b, d)));
    default:
      return React.createElement.apply(null, jd(function() {
        return function(a, b, c) {
          b >= d && a.push(Xj(c));
          return a;
        };
      }(e), [a, c], b));
  }
}
;var Fk = function() {
  function b(a, b, c) {
    return tj(function() {
      var b = Qc(a) ? a.v ? a.v() : a.call(null) : a;
      return Xj(b);
    }, b, c);
  }
  function a(a, b) {
    return c.e(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function Gk() {
  for (var b = B(df(J.d ? J.d(sj) : J.call(null, sj))), a = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = a.R(null, d);
      R.c(uj, e);
      d += 1;
    } else {
      if (b = B(b)) {
        a = b, Zc(a) ? (b = Sb(a), d = Tb(a), a = b, c = N(b), b = d) : (b = E(a), R.c(uj, b), b = G(a), a = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  return "Updated";
}
var Hk = ["reagent", "core", "force_update_all"], Ik = aa;
Hk[0] in Ik || !Ik.execScript || Ik.execScript("var " + Hk[0]);
for (var Jk;Hk.length && (Jk = Hk.shift());) {
  var Kk;
  if (Kk = !Hk.length) {
    Kk = void 0 !== Gk;
  }
  Kk ? Ik[Jk] = Gk : Ik = Ik[Jk] ? Ik[Jk] : Ik[Jk] = {};
}
var Lk = function() {
  function b(a) {
    return Dj.d(a);
  }
  var a = null, c = function() {
    function a(c, d) {
      var k = null;
      if (1 < arguments.length) {
        for (var k = 0, l = Array(arguments.length - 1);k < l.length;) {
          l[k] = arguments[k + 1], ++k;
        }
        k = new D(l, 0);
      }
      return b.call(this, c, k);
    }
    function b(a, c) {
      return R.e(Dj, a, c);
    }
    a.w = 1;
    a.o = function(a) {
      var c = E(a);
      a = F(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, a);
      default:
        var f = null;
        if (1 < arguments.length) {
          for (var f = 0, g = Array(arguments.length - 1);f < g.length;) {
            g[f] = arguments[f + 1], ++f;
          }
          f = new D(g, 0);
        }
        return c.h(a, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.w = 1;
  a.o = c.o;
  a.d = b;
  a.h = c.h;
  return a;
}();
function Mk(b) {
  Nj.d ? Nj.d(b) : Nj.call(null, b);
}
;var Nk = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    return console.warn(R.c(x, a));
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
var Ok = Lk.d(ff);
var Pk = ee.d ? ee.d(ff) : ee.call(null, ff), Qk = function() {
  function b(a, b, f) {
    Qc(b) || (Yc(b) ? (b = pe.c(wa, re(b)), b = Tc(b) ? kd : nc.c(1, N(b)) ? E(b) : R.c($d, b)) : b = Nk.h(L(["re-frame: comp-middleware expects a vector, got: ", b], 0)));
    f = b.d ? b.d(f) : b.call(null, f);
    return c.c(a, f);
  }
  function a(a, b) {
    gd(J.d ? J.d(Pk) : J.call(null, Pk), a) && Nk.h(L(["re-frame: overwriting an event-handler for: ", a], 0));
    return he.t(Pk, Q, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function Rk(b) {
  var a;
  a = Yc(b) ? E(b) : Nk.h(L(["re-frame: expected a vector event, but got: ", b], 0));
  var c;
  c = Mc.c(J.d ? J.d(Pk) : J.call(null, Pk), a);
  if (null == c) {
    return Nk.h(L(['re-frame: no event handler registered for: "', a, '". Ignoring.'], 0));
  }
  try {
    return c.c ? c.c(Ok, b) : c.call(null, Ok, b);
  } catch (d) {
    throw console.error(d), d;
  }
}
;var Sk = ee.d ? ee.d(ff) : ee.call(null, ff);
function Tk(b, a) {
  gd(J.d ? J.d(Sk) : J.call(null, Sk), b) && Nk.h(L(["re-frame: overwriting subscription-handler for: ", b], 0));
  he.t(Sk, Q, b, a);
}
;ee.d ? ee.d(50) : ee.call(null, 50);
var Uk = Lk.d(Jc), Vk = Lk.d(Jc), Wk = Lk.d(""), Xk = Lk.d(Jc), Yk = Lk.d(Jc);
function Zk() {
  return 0 < N(J.d ? J.d(Uk) : J.call(null, Uk));
}
function $k() {
  return 0 < N(J.d ? J.d(Vk) : J.call(null, Vk));
}
Tk(oh, function() {
  return Kj(function() {
    return Zk();
  });
});
Tk(Lh, function() {
  return Kj(function() {
    return $k();
  });
});
Tk(Bh, function() {
  return Kj(function() {
    return Kc.c(J.d ? J.d(Xk) : J.call(null, Xk), J.d ? J.d(Wk) : J.call(null, Wk));
  });
});
Tk(Ch, function() {
  return Kj(function() {
    return J.d ? J.d(Yk) : J.call(null, Yk);
  });
});
function al(b, a, c) {
  var d = J.d ? J.d(b) : J.call(null, b), e = K(J.d ? J.d(a) : J.call(null, a), J.d ? J.d(c) : J.call(null, c)), f;
  a: {
    for (f = d;;) {
      var g = G(f);
      if (null != g) {
        f = g;
      } else {
        f = E(f);
        break a;
      }
    }
  }
  fe.c ? fe.c(a, f) : fe.call(null, a, f);
  fe.c ? fe.c(c, e) : fe.call(null, c, e);
  a = null == d ? null : lb(d);
  fe.c ? fe.c(b, a) : fe.call(null, b, a);
}
Qk.c(Zg, function(b, a) {
  O.e(a, 0, null);
  var c = O.e(a, 1, null);
  if (Zk()) {
    a: {
      for (c = r(c) ? c : 1;;) {
        if (0 < c && Zk()) {
          al(Uk, Ok, Vk), al(Xk, Wk, Yk), --c;
        } else {
          c = null;
          break a;
        }
      }
    }
  } else {
    c = Nk.h(L(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
  }
  return c;
});
function bl(b, a, c) {
  var d = Kc.c(J.d ? J.d(b) : J.call(null, b), J.d ? J.d(a) : J.call(null, a)), e = J.d ? J.d(c) : J.call(null, c), f = E(e);
  fe.c ? fe.c(a, f) : fe.call(null, a, f);
  a = F(e);
  fe.c ? fe.c(c, a) : fe.call(null, c, a);
  fe.c ? fe.c(b, d) : fe.call(null, b, d);
}
Qk.c(rg, function(b, a) {
  O.e(a, 0, null);
  var c = O.e(a, 1, null);
  if ($k()) {
    a: {
      for (c = r(c) ? c : 1;;) {
        if (0 < c && $k()) {
          bl(Uk, Ok, Vk), bl(Xk, Wk, Yk), --c;
        } else {
          c = null;
          break a;
        }
      }
    }
  } else {
    c = Nk.h(L(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
  }
  return c;
});
function cl(b) {
  return function(a, c) {
    if (a ? r(r(null) ? null : a.Bc) || (a.ic ? 0 : u(Bj, a)) : u(Bj, a)) {
      var d = J.d ? J.d(a) : J.call(null, a), e = b.c ? b.c(d, c) : b.call(null, d, c);
      return null == e ? Nk.h(L(["re-frame: your pure handler returned nil. It should return the new db state."], 0)) : d !== e ? fe.c ? fe.c(a, e) : fe.call(null, a, e) : null;
    }
    Xc(a) ? Nk.h(L(['re-frame: Looks like "pure" is in the middleware pipeline twice. Ignoring.'], 0)) : Nk.h(L(['re-frame: "pure" middleware not given a Ratom.  Got: ', a], 0));
    return b;
  };
}
;var dl = jj(32), el = !1, fl = !1;
function gl() {
  el = !0;
  fl = !1;
  for (var b = 0;;) {
    var a = dl.pop();
    if (null != a && (a.v ? a.v() : a.call(null), 1024 > b)) {
      b += 1;
      continue;
    }
    break;
  }
  el = !1;
  return 0 < dl.length ? hl.v ? hl.v() : hl.call(null) : null;
}
function hl() {
  var b = fl;
  if (r(r(b) ? el : b)) {
    return null;
  }
  fl = !0;
  "function" == p(aa.setImmediate) ? aa.setImmediate(gl) : (dj || (dj = ej()), dj(gl));
}
function il(b) {
  hj(dl, b);
  hl();
}
function jl(b, a) {
  setTimeout(b, a);
}
;var kl, ll = function ll(a) {
  "undefined" === typeof kl && (kl = function(a, d, e) {
    this.U = a;
    this.Dc = d;
    this.Sc = e;
    this.B = 0;
    this.l = 425984;
  }, kl.prototype.Va = function() {
    return this.U;
  }, kl.prototype.G = function() {
    return this.Sc;
  }, kl.prototype.I = function(a, d) {
    return new kl(this.U, this.Dc, d);
  }, kl.Nb = !0, kl.Mb = "cljs.core.async.impl.channels/t20832", kl.hc = function(a, d) {
    return Fb(d, "cljs.core.async.impl.channels/t20832");
  });
  return new kl(a, ll, ff);
};
function ml(b, a) {
  this.zb = b;
  this.U = a;
}
function nl(b) {
  return Ui(b.zb);
}
var ol = function ol(a) {
  if (a ? a.uc : a) {
    return a.uc();
  }
  var c;
  c = ol[p(null == a ? null : a)];
  if (!c && (c = ol._, !c)) {
    throw w("MMC.abort", a);
  }
  return c.call(null, a);
};
function pl(b, a, c, d, e, f, g) {
  this.eb = b;
  this.Qb = a;
  this.Za = c;
  this.Pb = d;
  this.N = e;
  this.closed = f;
  this.na = g;
}
pl.prototype.Lb = function() {
  var b = this;
  if (!b.closed) {
    b.closed = !0;
    if (r(function() {
      var a = b.N;
      return r(a) ? 0 === b.Za.length : a;
    }())) {
      var a = b.N;
      b.na.d ? b.na.d(a) : b.na.call(null, a);
    }
    for (;a = b.eb.pop(), null != a;) {
      var c = a.da, d = r(function() {
        var a = b.N;
        return r(a) ? 0 < N(b.N) : a;
      }()) ? b.N.N.pop() : null;
      il(function(a, b) {
        return function() {
          return a.d ? a.d(b) : a.call(null, b);
        };
      }(c, d, a, this));
    }
  }
  return null;
};
pl.prototype.Pc = function(b) {
  var a = this;
  if (null != a.N && 0 < N(a.N)) {
    b = b.da;
    for (var c = ll(a.N.N.pop());;) {
      if (!r(lj(a.N))) {
        var d = a.Za.pop();
        if (null != d) {
          var e = d.zb, f = d.U;
          il(function(a) {
            return function() {
              return a.d ? a.d(!0) : a.call(null, !0);
            };
          }(e.da, e, f, d, b, c, this));
          yc(function() {
            var b = a.N, c = f;
            return a.na.c ? a.na.c(b, c) : a.na.call(null, b, c);
          }()) && ol(this);
          continue;
        }
      }
      break;
    }
    return c;
  }
  c = function() {
    for (;;) {
      var b = a.Za.pop();
      if (r(b)) {
        if (Ui(b.zb)) {
          return b;
        }
      } else {
        return null;
      }
    }
  }();
  if (r(c)) {
    return b = Vi(c.zb), il(function(a) {
      return function() {
        return a.d ? a.d(!0) : a.call(null, !0);
      };
    }(b, c, this)), ll(c.U);
  }
  if (r(a.closed)) {
    return r(a.N) && (c = a.N, a.na.d ? a.na.d(c) : a.na.call(null, c)), r(r(!0) ? b.da : !0) ? (b = function() {
      var b = a.N;
      return r(b) ? 0 < N(a.N) : b;
    }(), b = r(b) ? a.N.N.pop() : null, ll(b)) : null;
  }
  64 < a.Qb ? (a.Qb = 0, ij(a.eb, Ui)) : a.Qb += 1;
  if (!(1024 > a.eb.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending takes are allowed on a single channel.")].join("")), x("\n"), x(ge.h(L([xd(new A(null, "\x3c", "\x3c", 993667236, null), xd(new A(null, ".-length", ".-length", -280799999, null), new A(null, "takes", "takes", 298247964, null)), new A("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  hj(a.eb, b);
  return null;
};
pl.prototype.gc = function(b, a, c) {
  var d = this;
  if (null == a) {
    throw Error([x("Assert failed: "), x("Can't put nil in on a channel"), x("\n"), x(ge.h(L([xd(new A(null, "not", "not", 1044554643, null), xd(new A(null, "nil?", "nil?", 1612038930, null), new A(null, "val", "val", 1769233139, null)))], 0)))].join(""));
  }
  if (b = d.closed) {
    return ll(!b);
  }
  if (r(function() {
    var a = d.N;
    return r(a) ? ya(lj(d.N)) : a;
  }())) {
    for (c = yc(function() {
      var b = d.N;
      return d.na.c ? d.na.c(b, a) : d.na.call(null, b, a);
    }());;) {
      if (0 < d.eb.length && 0 < N(d.N)) {
        var e = d.eb.pop(), f = e.da, g = d.N.N.pop();
        il(function(a, b) {
          return function() {
            return a.d ? a.d(b) : a.call(null, b);
          };
        }(f, g, e, c, b, this));
      }
      break;
    }
    c && ol(this);
    return ll(!0);
  }
  e = function() {
    for (;;) {
      var a = d.eb.pop();
      if (r(a)) {
        if (r(!0)) {
          return a;
        }
      } else {
        return null;
      }
    }
  }();
  if (r(e)) {
    return c = Vi(e), il(function(b) {
      return function() {
        return b.d ? b.d(a) : b.call(null, a);
      };
    }(c, e, b, this)), ll(!0);
  }
  64 < d.Pb ? (d.Pb = 0, ij(d.Za, nl)) : d.Pb += 1;
  if (!(1024 > d.Za.length)) {
    throw Error([x("Assert failed: "), x([x("No more than "), x(1024), x(" pending puts are allowed on a single channel."), x(" Consider using a windowed buffer.")].join("")), x("\n"), x(ge.h(L([xd(new A(null, "\x3c", "\x3c", 993667236, null), xd(new A(null, ".-length", ".-length", -280799999, null), new A(null, "puts", "puts", -1883877054, null)), new A("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0)))].join(""));
  }
  hj(d.Za, new ml(c, a));
  return null;
};
pl.prototype.uc = function() {
  for (;;) {
    var b = this.Za.pop();
    if (null != b) {
      var a = b.zb;
      il(function(a) {
        return function() {
          return a.d ? a.d(!0) : a.call(null, !0);
        };
      }(a.da, a, b.U, b, this));
    }
    break;
  }
  ij(this.Za, Zd());
  return Ti(this);
};
function ql(b) {
  console.log(b);
  return null;
}
function rl(b, a, c) {
  a = (r(a) ? a : ql).call(null, c);
  return null == a ? b : Xi.c(b, a);
}
var sl = function() {
  function b(a, b, c) {
    return new pl(jj(32), 0, jj(32), 0, a, !1, function() {
      return function(a) {
        return function() {
          function b(d, e) {
            try {
              return a.c ? a.c(d, e) : a.call(null, d, e);
            } catch (f) {
              return rl(d, c, f);
            }
          }
          function d(b) {
            try {
              return a.d ? a.d(b) : a.call(null, b);
            } catch (e) {
              return rl(b, c, e);
            }
          }
          var e = null, e = function(a, c) {
            switch(arguments.length) {
              case 1:
                return d.call(this, a);
              case 2:
                return b.call(this, a, c);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          e.d = d;
          e.c = b;
          return e;
        }();
      }(r(b) ? b.d ? b.d(Xi) : b.call(null, Xi) : Xi);
    }());
  }
  function a(a, b) {
    return d.e(a, b, null);
  }
  function c(a) {
    return d.c(a, null);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.c = a;
  d.e = b;
  return d;
}();
var tl = function() {
  function b(a) {
    for (;;) {
      if (.5 > Math.random() && 15 > a) {
        a += 1;
      } else {
        return a;
      }
    }
  }
  function a() {
    return c.d(0);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.v = a;
  c.d = b;
  return c;
}();
function ul(b, a, c) {
  this.key = b;
  this.U = a;
  this.forward = c;
  this.B = 0;
  this.l = 2155872256;
}
ul.prototype.C = function(b, a, c) {
  return W(a, X, "[", " ", "]", c, this);
};
ul.prototype.J = function() {
  return Oa(Oa(mc, this.U), this.key);
};
var vl = function() {
  function b(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new ul(a, b, c);
  }
  function a(a) {
    return c.e(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = a;
  c.e = b;
  return c;
}(), wl = function() {
  function b(a, b, c, g) {
    for (;;) {
      if (0 > c) {
        return a;
      }
      a: {
        for (;;) {
          var k = a.forward[c];
          if (r(k)) {
            if (k.key < b) {
              a = k;
            } else {
              break a;
            }
          } else {
            break a;
          }
        }
      }
      null != g && (g[c] = a);
      --c;
    }
  }
  function a(a, b, f) {
    return c.t(a, b, f, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, c, e, f);
      case 4:
        return b.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.e = a;
  c.t = b;
  return c;
}();
function xl(b, a) {
  this.header = b;
  this.pa = a;
  this.B = 0;
  this.l = 2155872256;
}
xl.prototype.C = function(b, a, c) {
  return W(a, function() {
    return function(b) {
      return W(a, X, "", " ", "", c, b);
    };
  }(this), "{", ", ", "}", c, this);
};
xl.prototype.J = function() {
  return function(b) {
    return function c(d) {
      return new Dd(null, function() {
        return function() {
          return null == d ? null : K(new U(null, 2, 5, V, [d.key, d.U], null), c(d.forward[0]));
        };
      }(b), null, null);
    };
  }(this)(this.header.forward[0]);
};
xl.prototype.put = function(b, a) {
  var c = Array(15), d = wl.t(this.header, b, this.pa, c).forward[0];
  if (null != d && d.key === b) {
    return d.U = a;
  }
  d = tl.v();
  if (d > this.pa) {
    for (var e = this.pa + 1;;) {
      if (e <= d + 1) {
        c[e] = this.header, e += 1;
      } else {
        break;
      }
    }
    this.pa = d;
  }
  for (d = vl.e(b, a, Array(d));;) {
    return 0 <= this.pa ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null;
  }
};
xl.prototype.remove = function(b) {
  var a = Array(15), c = wl.t(this.header, b, this.pa, a).forward[0];
  if (null != c && c.key === b) {
    for (b = 0;;) {
      if (b <= this.pa) {
        var d = a[b].forward;
        d[b] === c && (d[b] = c.forward[b]);
        b += 1;
      } else {
        break;
      }
    }
    for (;;) {
      if (0 < this.pa && null == this.header.forward[this.pa]) {
        --this.pa;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
};
function yl(b) {
  for (var a = zl, c = a.header, d = a.pa;;) {
    if (0 > d) {
      return c === a.header ? null : c;
    }
    var e;
    a: {
      for (e = c;;) {
        e = e.forward[d];
        if (null == e) {
          e = null;
          break a;
        }
        if (e.key >= b) {
          break a;
        }
      }
    }
    null != e ? (--d, c = e) : --d;
  }
}
var zl = new xl(vl.d(0), 0);
function Al(b) {
  var a = (new Date).valueOf() + b, c = yl(a), d = r(r(c) ? c.key < a + 10 : c) ? c.U : null;
  if (r(d)) {
    return d;
  }
  var e = sl.d(null);
  zl.put(a, e);
  jl(function(a, b, c) {
    return function() {
      zl.remove(c);
      return Ti(a);
    };
  }(e, d, a, c), b);
  return e;
}
;var Bl = function Bl(a) {
  "undefined" === typeof Ri && (Ri = function(a, d, e) {
    this.da = a;
    this.jc = d;
    this.Qc = e;
    this.B = 0;
    this.l = 393216;
  }, Ri.prototype.wc = function() {
    return!0;
  }, Ri.prototype.xc = function() {
    return this.da;
  }, Ri.prototype.G = function() {
    return this.Qc;
  }, Ri.prototype.I = function(a, d) {
    return new Ri(this.da, this.jc, d);
  }, Ri.Nb = !0, Ri.Mb = "cljs.core.async/t17295", Ri.hc = function(a, d) {
    return Fb(d, "cljs.core.async/t17295");
  });
  return new Ri(a, Bl, ff);
}, Cl = function() {
  function b(a, b, c) {
    a = nc.c(a, 0) ? null : a;
    if (r(b) && !r(a)) {
      throw Error([x("Assert failed: "), x("buffer must be supplied when transducer is"), x("\n"), x(ge.h(L([new A(null, "buf-or-n", "buf-or-n", -1646815050, null)], 0)))].join(""));
    }
    return sl.e("number" === typeof a ? mj(a) : a, b, c);
  }
  function a(a, b) {
    return e.e(a, b, null);
  }
  function c(a) {
    return e.e(a, null, null);
  }
  function d() {
    return e.d(null);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return a.call(this, e, g);
      case 3:
        return b.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.v = d;
  e.d = c;
  e.c = a;
  e.e = b;
  return e;
}(), Dl = Bl(function() {
  return null;
}), El = function() {
  function b(a, b, c, d) {
    a = Si(a, b, Bl(c));
    return r(a) ? (b = J.d ? J.d(a) : J.call(null, a), r(d) ? c.d ? c.d(b) : c.call(null, b) : il(function(a) {
      return function() {
        return c.d ? c.d(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function a(a, b, c) {
    return d.t(a, b, c, !0);
  }
  function c(a, b) {
    var c = Si(a, b, Dl);
    return r(c) ? J.d ? J.d(c) : J.call(null, c) : !0;
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.e = a;
  d.t = b;
  return d;
}();
var Fl = Cl.v(), Gl = Cl.d(1);
il(function(b) {
  return function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e;
              a: {
                try {
                  for (;;) {
                    var f = a(c);
                    if (!T(f, Gg)) {
                      e = f;
                      break a;
                    }
                  }
                } catch (g) {
                  if (g instanceof Object) {
                    c[5] = g, cj(c), e = Gg;
                  } else {
                    throw g;
                  }
                }
              }
              if (!T(e, Gg)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null];
            a[0] = g;
            a[1] = 1;
            return a;
          }
          var g = null, g = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          g.v = c;
          g.d = b;
          return g;
        }();
      }(function() {
        return function(a) {
          var b = a[1];
          if (9 === b) {
            return b = a, b[2] = a[2], b[1] = 7, Gg;
          }
          if (8 === b) {
            return b = a[2], a[2] = b, a[1] = 7, Gg;
          }
          if (7 === b) {
            var b = a[2], c = Rk(a[7]);
            a[8] = c;
            a[9] = b;
            a[2] = null;
            a[1] = 2;
            return Gg;
          }
          return 6 === b ? (b = Al(0), aj(a, 9, b)) : 5 === b ? (b = Rj(Qj), c = Al(20), a[10] = b, aj(a, 8, c)) : 4 === b ? (b = a[2], c = Sc(b), c = Rg.d(c), a[7] = b, a[1] = r(c) ? 5 : 6, Gg) : 3 === b ? (b = a[2], bj(a, b)) : 2 === b ? aj(a, 4, Fl) : 1 === b ? (a[2] = null, a[1] = 2, Gg) : null;
        };
      }(b), b);
    }(), c = function() {
      var c = a.v ? a.v() : a.call(null);
      c[6] = b;
      return c;
    }();
    return $i(c);
  };
}(Gl));
function Hl(b) {
  null == b ? Nk.h(L(['re-frame: "dispatch" is ignoring a nil event.'], 0)) : El.c(Fl, b);
  return null;
}
function Il(b) {
  Rk(b);
  return null;
}
;function Jl(b, a) {
  for (var c = b, d = a;;) {
    if (B(d)) {
      var e = E(d), e = Ki(e), c = c - e, d = F(d)
    } else {
      return c;
    }
  }
}
function Kl(b, a, c) {
  var d = Ah.d(b), e = oe.c(function(a) {
    return function(b) {
      return nc.c(a, Mi(b));
    };
  }(d), a);
  return Ei(b, function() {
    return function(a, b) {
      return function l(c) {
        return new Dd(null, function(a, b) {
          return function() {
            for (;;) {
              var a = B(c);
              if (a) {
                if (Zc(a)) {
                  var d = Sb(a), e = N(d), f = Hd(e);
                  return function() {
                    for (var a = 0;;) {
                      if (a < e) {
                        var c = z.c(d, a), g = f, l = Oi(c, b), m = Li(c), l = Jl(m, l), c = Bi(Oc.c(c, Z.d(ki())), new U(null, 2, 5, V, [new Yh(Ih, l, null, null, null), 0 < l ? ki() : new li(lg, null, null, null)], null));
                        g.add(c);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Kd(f.Q(), l(Tb(a))) : Kd(f.Q(), null);
                }
                var g = E(a);
                return K(function() {
                  var a = Oi(g, b), c = Li(g), a = Jl(c, a);
                  return Bi(Oc.c(g, Z.d(ki())), new U(null, 2, 5, V, [new Yh(Ih, a, null, null, null), 0 < a ? ki() : new li(lg, null, null, null)], null));
                }(), l(F(a)));
              }
              return null;
            }
          };
        }(a, b), null, null);
      };
    }(d, e)(c);
  }());
}
;function Ll(b, a, c) {
  b = Mi(b);
  return c - b >= a ? c : b;
}
function Ml(b) {
  return nc.c(Eh.d(b), Ph) ? b : Q.h(b, Eh, Ph, L([Kg, 0], 0));
}
function Nl(b, a) {
  return Ei(b, function() {
    return function d(a) {
      return new Dd(null, function() {
        for (;;) {
          var f = B(a);
          if (f) {
            if (Zc(f)) {
              var g = Sb(f), k = N(g), l = Hd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var d = z.c(g, a), e = l, f = Gi(d), m = Ah.d(b);
                    Li(f);
                    var H = Ii(d), I = Ji(d), M = Ki(d), m = Ll(d, I, m), Y = hg.d(d), d = Bi(d, new U(null, 3, 5, V, [Xh(H, I, M, f, m), ii(), Ml(Y)], null));
                    e.add(d);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Kd(l.Q(), d(Tb(f))) : Kd(l.Q(), null);
            }
            var m = E(f);
            return K(function() {
              var a = Gi(m), d = Ah.d(b);
              Li(a);
              var e = Ii(m), f = Ji(m), g = Ki(m), d = Ll(m, f, d), k = hg.d(m);
              return Bi(m, new U(null, 3, 5, V, [Xh(e, f, g, a, d), ii(), Ml(k)], null));
            }(), d(F(f)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
}
;function Ol(b, a, c) {
  b[a] = c;
  return b;
}
;function Pl(b) {
  return PIXI.Sprite.fromFrame(b);
}
;var Ql = new q(null, 6, [kg, .3, uh, 30, Yg, 5, Dh, 180, Jh, 1, yg, 1], null), Rl = new q(null, 6, [kg, .25, uh, 1, Yg, 5, Dh, 180, Jh, 1, yg, 1], null), Sl = new q(null, 4, [xh, 2E3, bh, 16711680, Jh, 4, yg, 4], null), Uh = new PIXI.Point(.5, .5);
function Tl(b, a) {
  var c = Pl("barbarian/run-down/neutral"), d = Pl("barbarian/run-down/right"), e = Pl("barbarian/run-down/left"), d = new q(null, 2, [sh, new q(null, 2, [vg, new q(null, 3, [wg, c, nh, d, Oh, e], null), ih, new U(null, 4, 5, V, [wg, Oh, wg, nh], null)], null), Ph, new q(null, 2, [vg, new q(null, 2, [wg, c, Oh, e], null), ih, new U(null, 2, 5, V, [wg, Oh], null)], null)], null), e = kg.d(Rl), f = uh.d(Rl), g = Yg.d(Rl), k = Dh.d(Rl), l = Jh.d(Rl), m = yg.d(Rl);
  return Ci.h(L([Rh(new U(null, 2, 5, V, [b, a], null)), pi(), $h(e), new bi(hg, d, null, 0, null, null, null), Th(c, c, new U(null, 2, 5, V, [l, m], null)), Xh(f, k, g, null, 0)], 0));
}
function Ul(b, a) {
  var c = Pl("archer/run-down/neutral"), d = Pl("archer/run-down/right"), e = Pl("archer/run-down/left"), d = new q(null, 2, [sh, new q(null, 2, [vg, new q(null, 3, [wg, c, nh, d, Oh, e], null), ih, new U(null, 4, 5, V, [wg, Oh, wg, nh], null)], null), Ph, new q(null, 2, [vg, new q(null, 2, [wg, c, Oh, e], null), ih, new U(null, 2, 5, V, [wg, Oh], null)], null)], null), e = kg.d(Ql), f = uh.d(Ql), g = Yg.d(Ql), k = Dh.d(Ql), l = Jh.d(Ql), m = yg.d(Ql);
  return Ci.h(L([Rh(new U(null, 2, 5, V, [b, a], null)), pi(), $h(e), new bi(hg, d, null, 0, null, null, null), Th(c, c, new U(null, 2, 5, V, [l, m], null)), Xh(f, k, g, null, 0)], 0));
}
function Vl(b, a) {
  var c = Pl("town-hall/town-hall"), d = xh.d(Sl), e = bh.d(Sl), f = Jh.d(Sl), g = yg.d(Sl);
  return Ci.h(L([Rh(new U(null, 2, 5, V, [b, a], null)), Th(c, c, new U(null, 2, 5, V, [f, g], null)), ki(), pi(), di(new PIXI.Graphics, e, d), new Yh(Ih, d, null, null, null)], 0));
}
;var Wl = ee.d ? ee.d(Jc) : ee.call(null, Jc);
function Xl(b) {
  b = b.data.getLocalPosition(b.target);
  return he.e(Wl, Kc, new q(null, 2, [vh, b.x, dg, b.y], null));
}
function Yl(b) {
  var a = J.d ? J.d(Wl) : J.call(null, Wl);
  fe.c ? fe.c(Wl, Jc) : fe.call(null, Wl, Jc);
  return B(a) ? Ei(b, function() {
    return function(a) {
      return function e(b) {
        return new Dd(null, function() {
          return function() {
            for (;;) {
              var a = B(b);
              if (a) {
                if (Zc(a)) {
                  var c = Sb(a), l = N(c), m = Hd(l);
                  return function() {
                    for (var a = 0;;) {
                      if (a < l) {
                        var b = z.c(c, a), e = m, f;
                        f = vh.d(b);
                        b = dg.d(b);
                        f = Math.floor(639 * Math.random()) + 1 < f ? Tl(f, b) : Ul(f, b);
                        e.add(f);
                        a += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Kd(m.Q(), e(Tb(a))) : Kd(m.Q(), null);
                }
                var n = E(a);
                return K(function() {
                  var a = vh.d(n), b = dg.d(n);
                  return Math.floor(639 * Math.random()) + 1 < a ? Tl(a, b) : Ul(a, b);
                }(), e(F(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(a)(a);
  }()) : b;
}
;function Zl(b, a, c) {
  var d = Pi(b), e = Pi(a), f = Fi(b);
  b = O.e(f, 0, null);
  var f = O.e(f, 1, null), g = Fi(a);
  a = O.e(g, 0, null);
  var g = O.e(g, 1, null), k = d.height / 2, d = d.width / 2, l = e.height / 2, e = e.width / 2;
  return!(b - d - c > a + e || a - e > b + d + c || f - k - c > g + l || g - l > f + k + c);
}
function $l(b, a) {
  var c = Fi(b), d = O.e(c, 0, null), c = O.e(c, 1, null), e = Fi(a), f = O.e(e, 0, null), e = O.e(e, 1, null);
  return Math.sqrt(Math.pow(Math.abs(d - f), 2) + Math.pow(Math.abs(c - e), 2));
}
function am(b, a) {
  return R.e(Lf, ae.c($l, b), a);
}
function bm(b, a, c) {
  var d = oe.c(function(a) {
    return gd(a, zg);
  }, c);
  return B(d) ? Ei(b, function() {
    return function(a) {
      return function g(b) {
        return new Dd(null, function(a) {
          return function() {
            for (;;) {
              var c = B(b);
              if (c) {
                if (Zc(c)) {
                  var d = Sb(c), e = N(d), v = Hd(e);
                  return function() {
                    for (var b = 0;;) {
                      if (b < e) {
                        var c = z.c(d, b), g = v, k = Hi(c), m = Ii(c), y = Ji(c), va = Ki(c), Za = Mi(c), P = am(c, a), uf = !Zl(c, P, m), c = Bi(Ai(c, new U(null, 3, 5, V, [ni(), fi(), pi()], null)), new U(null, 3, 5, V, [$h(k), r(uf) ? ni() : fi(), Xh(m, y, va, P, Za)], null));
                        g.add(c);
                        b += 1;
                      } else {
                        return!0;
                      }
                    }
                  }() ? Kd(v.Q(), g(Tb(c))) : Kd(v.Q(), null);
                }
                var y = E(c);
                return K(function() {
                  var b = Hi(y), c = Ii(y), d = Ji(y), e = Ki(y), g = Mi(y), k = am(y, a), m = !Zl(y, k, c);
                  return Bi(Ai(y, new U(null, 3, 5, V, [ni(), fi(), pi()], null)), new U(null, 3, 5, V, [$h(b), r(m) ? ni() : fi(), Xh(c, d, e, k, g)], null));
                }(), g(F(c)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(a);
  }()) : Ei(b, function() {
    return function(a) {
      return function g(b) {
        return new Dd(null, function() {
          return function() {
            for (;;) {
              var a = B(b);
              if (a) {
                if (Zc(a)) {
                  var c = Sb(a), d = N(c), e = Hd(d);
                  a: {
                    for (var v = 0;;) {
                      if (v < d) {
                        var y = z.c(c, v), y = zi(Ai(y, new U(null, 2, 5, V, [ni(), fi()], null)), pi());
                        e.add(y);
                        v += 1;
                      } else {
                        c = !0;
                        break a;
                      }
                    }
                  }
                  return c ? Kd(e.Q(), g(Tb(a))) : Kd(e.Q(), null);
                }
                e = E(a);
                return K(zi(Ai(e, new U(null, 2, 5, V, [ni(), fi()], null)), pi()), g(F(a)));
              }
              return null;
            }
          };
        }(a), null, null);
      };
    }(d)(a);
  }());
}
;var cm = function() {
  function b(a, b, c) {
    return Qk.e(a, new U(null, 2, 5, V, [cl, b], null), c);
  }
  function a(a, b) {
    return Qk.e(a, cl, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, e);
      case 3:
        return b.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = a;
  c.e = b;
  return c;
}();
function dm(b) {
  return nc.c(Eh.d(b), sh) ? b : Q.h(b, Eh, sh, L([Kg, 0], 0));
}
function em(b, a) {
  return Ei(b, function() {
    return function d(a) {
      return new Dd(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (Zc(b)) {
              var g = Sb(b), k = N(g), l = Hd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.c(g, a), d = l, e = hg.d(b), f = te.c(b, new U(null, 2, 5, V, [Dg, Mg], null)), m = Hi(b), I = Fi(b), M = O.e(I, 0, null), I = O.e(I, 1, null), m = new U(null, 2, 5, V, [M + m * Math.cos(f), I + m * Math.sin(f)], null), f = O.e(m, 0, null), m = O.e(m, 1, null), b = Bi(b, new U(null, 3, 5, V, [Rh(new U(null, 2, 5, V, [f, m], null)), ii(), dm(e)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Kd(l.Q(), d(Tb(b))) : Kd(l.Q(), null);
            }
            var m = E(b);
            return K(function() {
              var a = hg.d(m), b = te.c(m, new U(null, 2, 5, V, [Dg, Mg], null)), d = Hi(m), e = Fi(m), f = O.e(e, 0, null), e = O.e(e, 1, null), d = new U(null, 2, 5, V, [f + d * Math.cos(b), e + d * Math.sin(b)], null), b = O.e(d, 0, null), d = O.e(d, 1, null);
              return Bi(m, new U(null, 3, 5, V, [Rh(new U(null, 2, 5, V, [b, d], null)), ii(), dm(a)], null));
            }(), d(F(b)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
}
;function fm(b, a) {
  var c = N(b);
  return nc.c(a, c - 1) ? 0 : a + 1;
}
function gm(b, a) {
  return Ei(b, function() {
    return function d(a) {
      return new Dd(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (Zc(b)) {
              var g = Sb(b), k = N(g), l = Hd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.c(g, a), d = l, e = Ag.d(b), f = hg.d(b), m = Ni(b), I = vg.d(m), M = ih.d(m), m = te.c(b, new U(null, 2, 5, V, [hg, Kg], null)), m = fm(M, m), M = Mc.c(M, m), I = Mc.c(I, M), b = Bi(b, new U(null, 2, 5, V, [Q.e(f, Kg, m), Q.e(e, jh, I)], null));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Kd(l.Q(), d(Tb(b))) : Kd(l.Q(), null);
            }
            var m = E(b);
            return K(function() {
              var a = Ag.d(m), b = hg.d(m), d = Ni(m), e = vg.d(d), f = ih.d(d), d = te.c(m, new U(null, 2, 5, V, [hg, Kg], null)), d = fm(f, d), f = Mc.c(f, d), e = Mc.c(e, f);
              return Bi(m, new U(null, 2, 5, V, [Q.e(b, Kg, d), Q.e(a, jh, e)], null));
            }(), d(F(b)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
}
;function hm(b, a) {
  b.addChild(a);
}
function im(b, a, c) {
  Ol(Ol(b.position, "x", a), "y", c);
  return b;
}
function jm(b, a) {
  return Ol(b, "anchor", a);
}
function km(b, a, c) {
  b = Ol(b, "height", 16 * a);
  return Ol(b, "width", 16 * c);
}
function lm(b, a, c) {
  var d = ig.d(b), e = Og.d(b);
  a = B(a);
  for (var f = null, g = 0, k = 0;;) {
    if (k < g) {
      var l = f.R(null, k);
      hm(d, te.c(l, new U(null, 2, 5, V, [Cg, Tg], null)));
      k += 1;
    } else {
      if (a = B(a)) {
        f = a, Zc(f) ? (a = Sb(f), k = Tb(f), f = a, g = N(a), a = k) : (a = E(f), hm(d, te.c(a, new U(null, 2, 5, V, [Cg, Tg], null))), a = G(f), f = null, g = 0), k = 0;
      } else {
        break;
      }
    }
  }
  c = B(c);
  a = null;
  for (g = f = 0;;) {
    if (g < f) {
      var k = a.R(null, g), m = te.c(k, new U(null, 2, 5, V, [Ag, jh], null)), n = te.c(k, new U(null, 2, 5, V, [Ag, wh], null)), t = te.c(k, new U(null, 2, 5, V, [Ag, Pg], null)), l = O.e(t, 0, null), t = O.e(t, 1, null), v = Fi(k), y = O.e(v, 0, null), v = O.e(v, 1, null), y = Math.round(y), C = Math.round(v), v = Gh.d(k);
      hm(d, jm(im(km(m, l, t), y, C), n));
      if (r(v)) {
        var H = fh.d(v), m = ug.d(v), I = jg.d(v), m = Li(k) / m, M = l / 8 * 16, Y = 16 * m * t, k = Pi(k), ka = k.x, va = k.y + M;
        hm(d, function() {
          var a = H;
          a.clear();
          a.beginFill(I);
          a.drawRect(ka, va, Y, M);
          a.endFill();
          return a;
        }());
      }
      g += 1;
    } else {
      if (c = B(c)) {
        if (Zc(c)) {
          f = Sb(c), c = Tb(c), a = f, f = N(f);
        } else {
          a = E(c);
          k = te.c(a, new U(null, 2, 5, V, [Ag, jh], null));
          l = te.c(a, new U(null, 2, 5, V, [Ag, wh], null));
          g = te.c(a, new U(null, 2, 5, V, [Ag, Pg], null));
          f = O.e(g, 0, null);
          g = O.e(g, 1, null);
          m = Fi(a);
          t = O.e(m, 0, null);
          m = O.e(m, 1, null);
          t = Math.round(t);
          n = Math.round(m);
          m = Gh.d(a);
          hm(d, jm(im(km(k, f, g), t, n), l));
          if (r(m)) {
            var Za = fh.d(m), k = ug.d(m), P = jg.d(m), k = Li(a) / k, uf = f / 8 * 16, Ea = 16 * k * g;
            a = Pi(a);
            var Ga = a.x, Ia = a.y + uf;
            hm(d, function() {
              var a = Za;
              a.clear();
              a.beginFill(P);
              a.drawRect(Ga, Ia, Ea, uf);
              a.endFill();
              return a;
            }());
          }
          c = G(c);
          a = null;
          f = 0;
        }
        g = 0;
      } else {
        break;
      }
    }
  }
  e.render(d);
  return b;
}
;function mm(b, a) {
  return Ei(b, function() {
    return function d(a) {
      return new Dd(null, function() {
        for (;;) {
          var b = B(a);
          if (b) {
            if (Zc(b)) {
              var g = Sb(b), k = N(g), l = Hd(k);
              return function() {
                for (var a = 0;;) {
                  if (a < k) {
                    var b = z.c(g, a), d = l, e = Ag.d(b), f = Ng.d(e), b = zi(b, Q.e(e, jh, f));
                    d.add(b);
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? Kd(l.Q(), d(Tb(b))) : Kd(l.Q(), null);
            }
            var m = E(b);
            return K(function() {
              var a = Ag.d(m), b = Ng.d(a);
              return zi(m, Q.e(a, jh, b));
            }(), d(F(b)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }());
}
;ma = function() {
  function b(b) {
    var d = null;
    if (0 < arguments.length) {
      for (var d = 0, e = Array(arguments.length - 0);d < e.length;) {
        e[d] = arguments[d + 0], ++d;
      }
      d = new D(e, 0);
    }
    return a.call(this, d);
  }
  function a(a) {
    return console.log.apply(console, Fa.d ? Fa.d(a) : Fa.call(null, a));
  }
  b.w = 0;
  b.o = function(b) {
    b = B(b);
    return a(b);
  };
  b.h = a;
  return b;
}();
function nm() {
  return new U(null, 2, 5, V, [Ug, new q(null, 2, [ah, "battlefield", Sg, new q(null, 4, [xg, "auto", zh, "auto", Bg, "640px", Nh, "640px"], null)], null)], null);
}
function om() {
  return new U(null, 3, 5, V, [Ug, new q(null, 1, [ah, "clash-attack-sim"], null), new U(null, 1, 5, V, [nm], null)], null);
}
function pm() {
  Mk(function() {
    var b = new U(null, 1, 5, V, [Kh], null);
    return Hl.d ? Hl.d(b) : Hl.call(null, b);
  });
}
cm.c(Kh, function(b) {
  pm();
  var a = Ah.d(b);
  b = Q.e(b, Ah, a + 1);
  b = Yl(b);
  if (nc.c(nd(Ah.d(b), 5), 0)) {
    var a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 1, 5, V, [Ig], null))), c = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 1, 5, V, [Ih], null)));
    b = B(a) && B(c) ? R.c(bm, new U(null, 3, 5, V, [b, a, c], null)) : b;
  }
  nc.c(nd(Ah.d(b), 5), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 2, 5, V, [Ig, fg], null))), b = B(a) ? R.c(Qi, new U(null, 2, 5, V, [b, a], null)) : b);
  nc.c(nd(Ah.d(b), 1), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 3, 5, V, [fg, Dg, sh], null))), b = B(a) ? R.c(em, new U(null, 2, 5, V, [b, a], null)) : b);
  nc.c(nd(Ah.d(b), 5), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 2, 5, V, [Ig, Ph], null))), b = B(a) ? R.c(Nl, new U(null, 2, 5, V, [b, a], null)) : b);
  nc.c(nd(Ah.d(b), 5), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 2, 5, V, [Ig, Ph], null))), c = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 2, 5, V, [Ih, zg], null))), b = B(a) && B(c) ? R.c(Kl, new U(null, 3, 5, V, [b, a, c], null)) : b);
  nc.c(nd(Ah.d(b), 15), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 3, 5, V, [Ag, hg, Mh], null))), b = B(a) ? R.c(gm, new U(null, 2, 5, V, [b, a], null)) : b);
  nc.c(nd(Ah.d(b), 5), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 1, 5, V, [ng], null))), b = B(a) ? R.c(mm, new U(null, 2, 5, V, [b, a], null)) : b);
  nc.c(nd(Ah.d(b), 1), 0) && (a = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 1, 5, V, [Cg], null))), c = R.c(Di, se.c(new U(null, 1, 5, V, [b], null), new U(null, 1, 5, V, [Ag], null))), b = B(a) && B(c) ? R.c(lm, new U(null, 3, 5, V, [b, a, c], null)) : b);
  return b;
});
cm.c(Vg, function() {
  pm();
  var b = new PIXI.autoDetectRenderer(640, 640);
  document.getElementById("battlefield").appendChild(b.view);
  var a = new PIXI.Container(16777215);
  Ol(a, "interactive", !0);
  Ol(a, "click", Xl);
  var b = new q(null, 3, [Og, b, ig, a, Ah, 0], null), a = V, c;
  c = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage("images/grass-tile.png", !1), 640, 640);
  c = Ci.h(L([new Vh(Cg, c, null, null, null)], 0));
  return Ei(b, new U(null, 4, 5, a, [c, Tl(160, 160), Vl(400, 400), Vl(320, 320)], null));
});
var qm = PIXI.loader;
qm.add(["images/spritesheet.json", "images/grass-tile.png"]);
qm.once("complete", function() {
  Fk.c(new U(null, 1, 5, V, [om], null), document.getElementById("game"));
  var b = new U(null, 1, 5, V, [Vg], null);
  return Il.d ? Il.d(b) : Il.call(null, b);
});
qm.load();

})();
