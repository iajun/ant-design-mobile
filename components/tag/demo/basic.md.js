webpackJsonp([92],{3:function(n,a,s){"use strict";s(7),s(6)},6:function(n,a){},7:function(n,a){},774:function(n,a){},1324:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(1377),s(1376)),p=t(e),o=s(1),c=t(o),l=s(4);t(l);n.exports={content:[["p","\u6807\u7b7e\u7c7b\u578b\u5206\u4e3a\u9009\u62e9\u578b\u6807\u7b7e\u548c\u53ea\u8bfb\u578b\u6807\u7b7e\uff0c\u53ea\u8bfb\u578b\u6807\u7b7e\u65e0\u4ea4\u4e92\u8fc7\u7a0b\uff0c\u4ec5\u5c55\u793a\u5185\u5bb9\u3002"]],meta:{order:0,title:"\u6807\u7b7e\u7c7b\u578b",filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>selected<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`tag selected: </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>selected<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tag-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>\u901a\u7528\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >selected</span><span class="token punctuation" >></span></span>\u9ed8\u8ba4\u9009\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\u5931\u6548\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4e8b\u4ef6\u56de\u8c03<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("tag selected: "+n)}return c["default"].createElement("div",{className:"tag-container"},c["default"].createElement(p["default"],null,"\u901a\u7528\u6807\u7b7e"),c["default"].createElement(p["default"],{selected:!0},"\u9ed8\u8ba4\u9009\u4e2d"),c["default"].createElement(p["default"],{disabled:!0},"\u5931\u6548\u6807\u7b7e"),c["default"].createElement(p["default"],{onChange:n},"\u4e8b\u4ef6\u56de\u8c03"))},style:".tag-container{\n  display: flex;\n  padding-top: 0.18rem;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 0.18rem;\n  margin-bottom: 0.18rem;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.tag-container</span></span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> flex<span class="token punctuation" >;</span>\n  <span class="token property" >padding-top</span><span class="token punctuation" >:</span> <span class="token number" >0.18</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >flex-direction</span><span class="token punctuation" >:</span> row<span class="token punctuation" >;</span>\n  <span class="token property" >flex-wrap</span><span class="token punctuation" >:</span> wrap<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.tag-container</span> > div </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >0.18</span>rem<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >0.18</span>rem<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},1376:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),d=t(k),f=function(n){function a(s){c(this,a);var t=l(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.disabled,s=n.onChange;if(!a){var e=t.state.selected;t.setState({selected:!e},function(){s(!e)})}},t.state={selected:s.selected,closed:!1},t}return u(a,n),a.prototype.componentWillReceiveProps=function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})},a.prototype.render=function(){var n,a=this.props,s=a.children,t=a.className,e=a.prefixCls,p=a.disabled,c=a.style,l=(0,d["default"])((n={},o(n,t,!!t),o(n,e,!0),o(n,e+"-normal",!this.state.selected&&!p),o(n,e+"-active",this.state.selected&&!p),o(n,e+"-disabled",p),n));return r.createElement("div",{className:l,onClick:this.onClick,style:c},r.createElement("div",{className:e+"-text"},s))},a}(r.Component);a["default"]=f,f.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,onChange:function(){}},n.exports=a["default"]},1377:function(n,a,s){"use strict";s(3),s(774)}});