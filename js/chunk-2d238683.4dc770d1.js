(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238683"],{fef4:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return d}));var i=n("6260"),s=n("36de"),a=n("2482"),o=n("7a37"),r=n("bf82"),l=n("71b8"),u=n("1e35"),h=function(e,t,n,i){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function o(e){try{l(i.next(e))}catch(t){a(t)}}function r(e){try{l(i["throw"](e))}catch(t){a(t)}}function l(e){e.done?n(e.value):s(e.value).then(o,r)}l((i=i.apply(e,t||[])).next())}))},c=function(e,t){var n,i,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(e){return function(t){return l([e,t])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,i&&(s=2&a[0]?i["return"]:a[0]?i["throw"]||((s=i["return"])&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;switch(i=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(s=o.trys,!(s=s.length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(r){a=[6,r],i=0}finally{n=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},f=new s["a"]("SelectMFAType"),d=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1,this.isToastVisible=!1}return e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1,this.isToastVisible=!1;var t=e.target,n=t.value,i=t.type,s=t.checked,a=["radio","checkbox"].includes(i);n===o["c"].SMS&&a&&(this.isSMS=s),n===o["c"].TOTP&&a&&(this.isTOTP=s),n===o["c"].NOMFA&&a&&(this.isNoMFA=s)},e.prototype.verify=function(e){return h(this,void 0,void 0,(function(){var t,n,i,s;return c(this,(function(h){switch(h.label){case 0:if(e&&e.preventDefault(),f.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=o["c"].TOTP:this.isSMS?this.MFAMethod=o["c"].SMS:this.isNoMFA&&(this.MFAMethod=o["c"].NOMFA),t=this.authData,!r["a"]||"function"!==typeof r["a"].setPreferredMFA)throw new Error(u["d"]);this.loading=!0,h.label=1;case 1:return h.trys.push([1,3,4,5]),[4,r["a"].setPreferredMFA(t,this.MFAMethod)];case 2:return n=h.sent(),f.debug("Set Preferred MFA Succeeded",n),this.selectMessage=a["a"].get(l["a"].SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=h.sent(),s=i.message,s===u["l"]||s===u["m"]?(this.TOTPSetup=!0,this.selectMessage=a["a"].get(l["a"].SETUP_TOTP_REQUIRED)):(f.debug("Set Preferred MFA failed",i),this.selectMessage=a["a"].get(l["a"].UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,this.isToastVisible=!0,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return f.debug(a["a"].get(l["a"].LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i["i"])("div",null,Object(i["i"])("a",null,a["a"].get(l["a"].LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,s=t.TOTP,o=t.Optional;return Object(i["i"])("amplify-form-section",{submitButtonText:a["a"].get(l["a"].SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:a["a"].get(l["a"].SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(i["i"])("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,s?Object(i["i"])("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,o?Object(i["i"])("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.renderToast=function(){var e=this;return this.isToastVisible&&this.selectMessage?Object(i["i"])("amplify-toast",{message:this.selectMessage,handleClose:function(){e.selectMessage=null,e.isToastVisible=!1}}):null},e.prototype.render=function(){return Object(i["i"])("div",null,this.contentBuilder(),this.TOTPSetup?Object(i["i"])("amplify-totp-setup",{user:this.authData}):null,this.renderToast())},e}()}}]);
//# sourceMappingURL=chunk-2d238683.4dc770d1.js.map