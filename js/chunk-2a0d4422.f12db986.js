(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0d4422"],{"41a4":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return p}));var r=n("1e35"),o=n("9755"),i=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,o=e.type,i=encodeURI(n);return t&&(i="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:o}):encodeURI(JSON.stringify(t)),i||(i="empty_key")),i.replace(/\s/g,"_")},l=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,l;return a(this,(function(a){switch(a.label){case 0:if(!o["a"]||"function"!==typeof o["a"].get)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o["a"].get(e,{level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug("Storage image get",i),[2,i];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))},s=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n("Failed to read file!"),r.abort()},r.readAsText(e)}))},f=function(e,t,n,c,u){return i(void 0,void 0,void 0,(function(){var i,l,f;return a(this,(function(a){switch(a.label){case 0:if(!o["a"]||"function"!==typeof o["a"].get)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,o["a"].get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return i=a.sent(),u.debug(i),[4,s(i["Body"])];case 3:return l=a.sent(),[2,l];case 4:throw f=a.sent(),new Error(f);case 5:return[2]}}))}))},p=function(e,t,n,c,u,l){return i(void 0,void 0,void 0,(function(){var i,s;return a(this,(function(a){switch(a.label){case 0:if(!o["a"]||"function"!==typeof o["a"].put)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o["a"].put(e,t,{contentType:u,level:n,track:c})];case 2:return i=a.sent(),l.debug("Upload data",i),[3,4];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))}},dce0:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_text",(function(){return d}));var r=n("6260"),o=n("36de"),i=n("2482"),a=n("f036"),c=n("71b8"),u=(n("1e35"),n("9755"),n("41a4")),l=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r["throw"](e))}catch(t){i(t)}}function u(e){e.done?n(e.value):o(e.value).then(a,c)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},f=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}",p=new o["a"]("S3Text"),d=function(){function e(e){Object(r["k"])(this,e),this.contentType="text/*",this.level=a["a"].Public,this.fallbackText=c["a"].TEXT_FALLBACK_CONTENT}return e.prototype.watchHandler=function(){return l(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return l(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI."),[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return l(this,void 0,void 0,(function(){var e,t,n,r,o,i,a,c,l,f,d;return s(this,(function(s){switch(s.label){case 0:return e=this,t=e.path,n=e.textKey,r=e.body,o=e.contentType,i=e.level,a=e.track,c=e.identityId,n||t?(l=n||t,p.debug("loading "+l+"..."),r?[4,Object(u["e"])(n,r,i,a,o,p)]:[3,2]):(p.debug("empty textKey and path"),[2]);case 1:s.sent(),s.label=2;case 2:return s.trys.push([2,4,,5]),f=this,[4,Object(u["a"])(l,i,a,c,p)];case 3:return f.src=s.sent(),[3,5];case 4:throw d=s.sent(),p.debug(d),new Error(d);case 5:return[2]}}))}))},e.prototype.render=function(){return Object(r["i"])("div",null,Object(r["i"])("div",{class:"text-container"},this.src?Object(r["i"])("pre",null,this.src):Object(r["i"])("pre",null,i["a"].get(this.fallbackText))))},Object.defineProperty(e,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();d.style=f}}]);
//# sourceMappingURL=chunk-2a0d4422.f12db986.js.map