function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(x,t),l?g(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function x(){var e=p();if(S(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?g(e):(r=o=void 0,a)}function T(){var e=p(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(d)return f=setTimeout(x,t),g(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=b(t)||0,y(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const g={},j=localStorage.getItem("feedback-form-state",JSON.parse(g)),S={form:document.querySelector(".feedback-form"),email:document.querySelector('.feedback-form input[type="email"]'),textarea:document.querySelector(".feedback-form textarea")};function x(e){g[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(g))}!function(){if(j){Object.keys(j).map((e=>{document.querySelector(`[name='${e}']`).value=j[e]}))}}(),S.form.addEventListener("click",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(g)})),S.email.addEventListener("input",e(t)(x,500)),S.textarea.addEventListener("input",e(t)(x,500));
//# sourceMappingURL=03-feedback.13904a9b.js.map
