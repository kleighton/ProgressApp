webpackJsonp([0],[function(e,n,t){(function(e){"use strict";t(1);var n=t(3);(0,n.getUsers)().then(function(t){var r="";t.forEach(function(e){r+='\n    <div class="user">\n      <div><a href="#" data-id="'+e.id+'" class="deleteuser">Delete</a></div>\n      <div>'+e.id+"</div>\n      <div>"+e.firstName+"</div>\n      <div>"+e.lastName+"</div>\n      <div>"+e.email+"</div>\n    </div>\n    "}),e.document.getElementById("users").innerHTML=r;var u=e.document.getElementsByClassName("deleteuser");Array.from(u,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),(0,n.deleteUser)(t.attributes["data-id"].value);var r=t.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(n,function(){return this}())},function(e,n){},,function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return o("users")}function i(e){return c("users/"+e)}function o(e){return fetch(f+e).then(a,d)}function c(e){var n=new Request(f+e,{method:"DELETE"});return fetch(n).then(a,d)}function a(e){return e.json()}function d(e){console.log(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.getUsers=u,n.deleteUser=i,t(4);var s=t(5),l=r(s),f=(0,l["default"])()},,function(e,n){"use strict";function t(){return r("useMockApi")?"http://localhost:3001/":"/"}function r(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("]?&"+e+"(=([^&#]*) |&|#|$)"),r=t.exec(n);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=t}]);
//# sourceMappingURL=main.85c5ccc5ba755564d204.js.map