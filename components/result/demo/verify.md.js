webpackJsonp([71],{3:function(t,n,e){"use strict";e(7),e(6)},6:function(t,n){},7:function(t,n){},12:function(t,n){"use strict";function e(t,n){var e={},a={};return Object.keys(t).forEach(function(o){n.indexOf(o)!==-1?e[o]=t[o]:a[o]=t[o]}),[e,a]}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=e,t.exports=n["default"]},23:function(t,n,e){"use strict";function a(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function o(t){var n=c.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(t){this.setState({touchFeedback:t})},onTouchStart:function(t){this.props.onTouchStart&&this.props.onTouchStart(t),this.setTouchFeedbackState(!0)},onTouchEnd:function(t){this.props.onTouchEnd&&this.props.onTouchEnd(t),this.setTouchFeedbackState(!1)},onTouchCancel:function(t){this.props.onTouchCancel&&this.props.onTouchCancel(t),this.setTouchFeedbackState(!1)},render:function(){return c.createElement(t,s({},this.props,{touchFeedback:this.state.touchFeedback,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}))}});return n}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};n["default"]=o;var r=e(1),c=a(r);t.exports=n["default"]},24:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function s(t,n){for(var e=Object.getOwnPropertyNames(n),a=0;a<e.length;a++){var o=e[a],s=Object.getOwnPropertyDescriptor(n,o);s&&s.configurable&&void 0===t[o]&&Object.defineProperty(t,o,s)}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):s(t,n))}function l(t){return"string"==typeof t}function p(t){return l(t.type)&&E(t.props.children)?b.cloneElement(t,{},t.props.children.split("").join(" ")):l(t)?(E(t)&&(t=t.split("").join(" ")),b.createElement("span",null,t)):t}Object.defineProperty(n,"__esModule",{value:!0});var f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},d=function(){function t(t,n){var e=[],a=!0,o=!1,s=void 0;try{for(var r,c=t[Symbol.iterator]();!(a=(r=c.next()).done)&&(e.push(r.value),!n||e.length!==n);a=!0);}catch(u){o=!0,s=u}finally{try{!a&&c["return"]&&c["return"]()}finally{if(o)throw s}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=e(1),b=o(h),y=e(2),m=a(y),k=e(26),g=a(k),v=e(12),O=a(v),T=e(23),w=a(T),j=/^[\u4e00-\u9fa5]{2}$/,E=j.test.bind(j),C=function(t){function n(){c(this,n);for(var e=arguments.length,a=Array(e),o=0;o<e;o++)a[o]=arguments[o];var s=u(this,t.call.apply(t,[this].concat(a)));return s.onClick=function(){s.props.onClick(s)},s}return i(n,t),n.prototype.render=function(){var t,n=(0,O["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),e=d(n,2),a=e[0],o=a.children,s=a.className,c=a.prefixCls,u=a.type,i=a.size,l=a.inline,h=a.disabled,y=a.htmlType,k=a.icon,v=a.loading,T=a.touchFeedback,w=e[1],j=(0,m["default"])((t={},r(t,s,s),r(t,c,!0),r(t,c+"-primary","primary"===u),r(t,c+"-ghost","ghost"===u),r(t,c+"-warning","warning"===u),r(t,c+"-small","small"===i&&l),r(t,c+"-loading",v),r(t,c+"-inline",l),r(t,c+"-disabled",h),r(t,c+"-touchFeedback",T),t)),E=v?"loading":k,C=b.Children.map(o,p);return b.createElement("button",f({},w,{type:y||"button",className:j,disabled:h,onClick:this.onClick}),E?b.createElement(g["default"],{type:E}):null,C)},n}(b.Component);C.propTypes={prefixCls:h.PropTypes.string,size:h.PropTypes.oneOf(["large","small"]),htmlType:h.PropTypes.oneOf(["submit","button","reset"]),icon:h.PropTypes.bool},C.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},n["default"]=(0,w["default"])(C),t.exports=n["default"]},27:function(t,n){},28:function(t,n,e){"use strict";e(3),e(34),e(27)},128:function(t,n){},161:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function s(t,n){for(var e=Object.getOwnPropertyNames(n),a=0;a<e.length;a++){var o=e[a],s=Object.getOwnPropertyDescriptor(n,o);s&&s.configurable&&void 0===t[o]&&Object.defineProperty(t,o,s)}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):s(t,n))}function l(){}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var p=e(1),f=o(p),d=e(24),h=a(d),b=e(2),y=a(b),m=function(t){function n(){return c(this,n),u(this,t.apply(this,arguments))}return i(n,t),n.prototype.render=function(){var t,n=this.props,e=n.prefixCls,a=n.imgUrl,o=n.title,s=n.message,c=n.buttonText,u=n.buttonClick,i=n.buttonType,l=n.className,p=(0,y["default"])((t={},r(t,""+e,!0),r(t,l,l),t));return f.createElement("div",{className:p},f.createElement("div",{className:e+"-pic",style:{backgroundImage:"url("+a+")"}}),""!==o?f.createElement("div",{className:e+"-title"},o):null,""!==s?f.createElement("div",{className:e+"-message"},s):null,""!==c?f.createElement("div",{className:e+"-button"},f.createElement(h["default"],{type:i,onClick:u},c)):null)},n}(f.Component);n["default"]=m,m.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:l},t.exports=n["default"]},162:function(t,n,e){"use strict";e(3),e(28),e(128)},1291:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var o=(e(162),e(161)),s=a(o),r=e(1),c=a(r),u=e(4);a(u);t.exports={content:[],meta:{order:1,title:"\u9a8c\u8bc1\u6210\u529f",filename:"components/result/demo/verify.md",id:"components-result-demo-verify"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9a8c\u8bc1\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var t=function(){return c["default"].createElement(s["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png",title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"})};return c["default"].createElement(t,null)}}}});