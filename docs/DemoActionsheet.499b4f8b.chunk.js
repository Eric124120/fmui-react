webpackJsonp([14],{95:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),i=n(7),s=o(i),f=n(12),h=n(15),p=o(h),b=function(e){function t(e){r(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={show:!1},n}return a(t,e),l(t,[{key:"handle",value:function(){this.setState({show:!0})}},{key:"cancelFun",value:function(e,t){console.log(e),console.log(t),this.setState({show:!1})}},{key:"render",value:function(){var e=this,t=[{text:"选项一",current:!0,onClick:function(t,n){console.log("选项一"),e.cancelFun(t,n)}},{text:"选项二",onClick:function(t,n){console.log("选项二"),e.cancelFun(t,n)}}];return React.createElement("div",null,React.createElement(f.Flex,null,React.createElement(s.default,{size:"large",type:"white-orange",onClick:this.handle.bind(this)},"actionsheet")),React.createElement(p.default,{show:this.state.show,actionMenus:t,cancelText:"取消选项",cancelFun:this.cancelFun.bind(this)}))}}]),t}(u.Component);t.default=b,e.exports=t.default}});