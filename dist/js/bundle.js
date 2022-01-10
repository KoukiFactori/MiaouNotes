(()=>{var e={150:function(e,r){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},m=e=>1==e?"argument":"arguments",i=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let o=Function.call.bind(Object.prototype.hasOwnProperty);const g=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,l,A){if(l in n)return n[l];if(!(l in e))return;let c=e[l];if("function"==typeof c)if("function"==typeof r[l])c=i(e,e[l],r[l]);else if(o(t,l)){let r=((e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${m(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${m(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,m)=>{if(r.fallbackToNoCallback)try{t[e](...n,a({resolve:s,reject:m},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,a({resolve:s,reject:m},r))}))})(l,t[l]);c=i(e,e[l],r)}else c=c.bind(e);else if("object"==typeof c&&null!==c&&(o(r,l)||o(t,l)))c=g(c,r[l],t[l]);else{if(!o(t,"*"))return Object.defineProperty(n,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(r){e[l]=r}}),c;c=g(c,r[l],t["*"])}return n[l]=c,c},set:(r,t,s,a)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},l=Object.create(e);return new Proxy(l,s)},l=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}),A=new s((e=>"function"!=typeof e?e:function(r){const t=g(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}));let c=!1;const d=new s((e=>"function"!=typeof e?e:function(r,n,s){let a,m,i=!1,o=new Promise((e=>{a=function(r){c||(console.warn(t,(new Error).stack),c=!0),i=!0,e(r)}}));try{m=e(r,n,a)}catch(e){m=Promise.reject(e)}const g=!0!==m&&((l=m)&&"object"==typeof l&&"function"==typeof l.then);var l;if(!0!==m&&!g&&!i)return!1;return(g?m:o).then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),x=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},u=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${m(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${m(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=x.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},p={devtools:{network:{onRequestFinished:l(A)}},runtime:{onMessage:l(d),onMessageExternal:l(d),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},h={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":h},services:{"*":h},websites:{"*":h}},g(e,p,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser},void 0===(n=t.apply(r,[e]))||(e.exports=n)}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}(()=>{"use strict";function e(e,r){for(var t=0,n=!1,s=0;s<e.length;s++)e[s]>=0&&(t+=e[s]*r[s],n=!0);var a=-1;return n&&-1!=t&&(a=t/r.reduce((function(e,r){return e+r}),0)),a}function r(r,t){var n=[],s=[];return r.forEach((function(e){e.matiere==t&&(n.push(e.note),s.push(e.coefficient))})),e(n,s)}function n(t){var n=[],s=[],a="";return t.forEach((function(e){a!=e.matiere&&r(t,e.matiere)>=0&&(n.push(r(t,e.matiere)),s.push(1),a=e.matiere)})),e(n,s)}function s(e,r,t){void 0===t&&(t=!1);var n=document.createElement("tr");r&&n.classList.add("moyenne"),t&&n.classList.add("new-note");var s=document.createElement("td");s.textContent=e.matiere,n.appendChild(s);var a=document.createElement("td");a.textContent=e.evaluation,n.appendChild(a);var m=document.createElement("td");m.classList.add("hide"),r||(m.textContent=e.date),n.appendChild(m);var i=document.createElement("td");i.classList.add("hide"),r||(i.textContent=e.commentaire),n.appendChild(i);var o=document.createElement("td");if(e.note>=10)o.textContent=e.note.toPrecision(4).toString();else if(-1==e.note)o.textContent="";else{var g=document.createElement("span");g.classList.add("badge","bg-warning"),e.note<0?g.textContent=e.note.toString():g.textContent=e.note.toPrecision(4).toString(),o.appendChild(g)}n.appendChild(o);var l=document.createElement("td");l.classList.add("hide"),r||(l.textContent=e.coefficient.toString()),n.appendChild(l);var A=document.createElement("td");if(!r){var c=document.createElement("button");c.classList.add("btn","btn-info","btn-outline","btn-square","btn-xs"),c.setAttribute("data-controller","modal"),c.setAttribute("data-modal-modal-title-value","Détails d'une note"),c.setAttribute("data-modal-modal-url-value","/fr/application/etudiant/note/details/"+e.id),c.setAttribute("data-action","click->modal#openModal"),c.setAttribute("data-bs-toggle","tooltip"),c.setAttribute("data-bs-placement","bottom"),c.setAttribute("data-bs-original-title","Détails");var d=document.createElement("i");d.classList.add("fas","fa-info"),c.appendChild(d),A.appendChild(c)}return n.appendChild(A),n}var a=t(150);a.storage.sync.get("notesAlreadyKnow").then((function(e){var t=e.notesAlreadyKnow||[],m=document.querySelector("#mainContent > div.row > div:nth-child(5) > div > div > table"),i=function(e){var r=e.querySelector("tbody"),t=[];return r.querySelectorAll("tr").forEach((function(e){var r=e.querySelector("td:nth-child(7) > button").getAttribute("data-modal-modal-url-value").split("/"),n={id:parseInt(r[r.length-1]),matiere:e.querySelector("td:nth-child(1)").textContent,evaluation:e.querySelector("td:nth-child(2)").textContent,date:e.querySelector("td:nth-child(3)").textContent,commentaire:e.querySelector("td:nth-child(4)").textContent,note:parseFloat(e.querySelector("td:nth-child(5)").textContent),coefficient:parseFloat(e.querySelector("td:nth-child(6)").textContent)};t.push(n)})),t.sort((function(e,r){return e.matiere>r.matiere?1:-1})),t}(m);console.log(t);var o,g=function(e,t){var a=document.createElement("table");a.classList.add("table","table-border","table-striped");var m=document.createElement("thead");a.appendChild(m);var i=document.createElement("tr");m.appendChild(i);var o=document.createElement("th");o.textContent="Matière",i.appendChild(o);var g=document.createElement("th");g.textContent="Evaluation",i.appendChild(g);var l=document.createElement("th");l.textContent="date",i.appendChild(l);var A=document.createElement("th");A.textContent="Commentaire de l'évaluation",i.appendChild(A);var c=document.createElement("th");c.textContent="Note",i.appendChild(c);var d=document.createElement("th");d.textContent="coefficient",i.appendChild(d);var x=document.createElement("th");x.textContent="Informations",i.appendChild(x);var u=document.createElement("tbody");a.appendChild(u),e.forEach((function(n,a){var m=s(n,!1,!t.includes(n.id));if(u.appendChild(m),a==e.length-1||e[a+1].matiere!=n.matiere){var i=s({matiere:n.matiere,evaluation:"Moyenne",note:r(e,n.matiere)},!0);u.appendChild(i)}}));var p=s({matiere:"",evaluation:"Moyenne Générale",note:n(e)},!0);return u.appendChild(p),a}(i,t);m.replaceWith(g),((o=document.createElement("button")).innerHTML="Sauvegarder les notes connues",o.classList.add("btn","btn-sm","btn-primary"),o.id="save-notes-btn",document.querySelector("#mainContent > div.row > div:nth-child(5) > div > h4").appendChild(o),o).addEventListener("click",(function(){var e=[];i.forEach((function(r){e.push(r.id)})),a.storage.sync.set({notesAlreadyKnow:e}).then((function(){console.log("rechargement de la page"),location.reload()}))}))}))})()})();