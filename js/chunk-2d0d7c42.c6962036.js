(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c42"],{"77e1":function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_amazon_button",(function(){return p})),n.d(t,"amplify_auth0_button",(function(){return m})),n.d(t,"amplify_facebook_button",(function(){return b})),n.d(t,"amplify_google_button",(function(){return v})),n.d(t,"amplify_oauth_button",(function(){return I}));var i=n("6260"),o=n("36de"),a=n("2482"),r=n("7a37"),u=n("bf82"),c=n("71b8"),s=n("1e35"),f=n("fb2f"),l=function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function r(e){try{c(i.next(e))}catch(t){a(t)}}function u(e){try{c(i["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):o(e.value).then(r,u)}c((i=i.apply(e,t||[])).next())}))},h=function(e,t){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return c([e,t])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=2&a[0]?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(u){a=[6,u],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},d=new o["a"]("amplify-amazon-button"),p=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleAuthStateChange=f["d"],this.federatedSignIn=function(e){var n=e.access_token,i=e.expires_in;if(n){if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);var o=new Date,a=1e3*i+o.getTime();window["amazon"].Login.retrieveProfile((function(e){return l(t,void 0,void 0,(function(){var t,i;return h(this,(function(o){switch(o.label){case 0:return e.success?(t={name:e.profile.Name,email:e.profile.PrimaryEmail},[4,u["a"].federatedSignIn("amazon",{token:n,expires_at:a},t)]):[2,d.debug("Get user Info failed")];case 1:return o.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return i=o.sent(),this.handleAuthStateChange(r["a"].SignedIn,i),[2]}}))}))}))}}}return e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.signInWithAmazon=function(e){var t=this;e.preventDefault(),window["amazon"].Login.setClientId(this.clientId),window["amazon"].Login.authorize({scope:"profile"},(function(e){if(e.error)return d.debug("Failed to login with amazon: "+e.error);try{window.localStorage.setItem(s["o"],JSON.stringify({provider:"amazon"}))}catch(n){d.debug("Failed to cache auth source into localStorage",n)}t.federatedSignIn(e)}))},e.prototype.render=function(){var e=this;return Object(i["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithAmazon(t)},provider:"amazon"},Object(i["i"])("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),a["a"].get(c["a"].SIGN_IN_WITH_AMAZON))},e}(),g=new o["a"]("amplify-auth0-button"),m=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleAuthStateChange=f["d"],this.handleLoad=function(){var e=u["a"].configure().oauth,n=void 0===e?{}:e,i=t.config,o=void 0===i?n.auth0:i;o?(g.debug("auth0 configuration",o),t._auth0||(t._auth0=new window["auth0"].WebAuth(o)),t._auth0.parseHash((function(e,n){if(e)g.debug("Failed to parse the url for Auth0",e);else if(n){var i={provider:"auth0",opts:{returnTo:o.returnTo,clientID:o.clientID,federated:o.federated}};try{localStorage.setItem(s["o"],JSON.stringify(i))}catch(a){g.debug("Failed to cache auth source into localStorage",a)}t._auth0.client.userInfo(n.accessToken,(function(e,i){return l(t,void 0,void 0,(function(){var t,a,c;return h(this,(function(s){switch(s.label){case 0:return t=void 0,a=void 0,e?g.debug("Failed to get the user info",e):(t=i.name,a=i.email),[4,u["a"].federatedSignIn(o.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:t,email:a})];case 1:return s.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return c=s.sent(),this.handleAuthStateChange(r["a"].SignedIn,c),[2]}}))}))}))}else g.debug("Auth0 found no authResult in hash")}))):g.debug("Auth0 is not configured")}}return e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.signInWithAuth0=function(e){if(e.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},e.prototype.render=function(){var e=this;return Object(i["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithAuth0(t)},provider:"auth0"},Object(i["i"])("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),a["a"].get(c["a"].SIGN_IN_WITH_AUTH0))},e}(),w=new o["a"]("amplify-facebook-button"),b=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleAuthStateChange=f["d"],this.federatedSignIn=function(e){var n=e.accessToken,i=e.expiresIn;if(n){if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);var o=new Date,a=1e3*i+o.getTime(),c="name,email";window["FB"].api("/me",{fields:c},(function(e){return l(t,void 0,void 0,(function(){var t,i;return h(this,(function(o){switch(o.label){case 0:return t={name:e.name,email:e.email},[4,u["a"].federatedSignIn("facebook",{token:n,expires_at:a},t)];case 1:return o.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:return i=o.sent(),this.handleAuthStateChange(r["a"].SignedIn,i),[2]}}))}))}))}},this.getLoginStatus=function(){window["FB"].getLoginStatus((function(e){try{window.localStorage.setItem(s["o"],JSON.stringify({provider:"facebook"}))}catch(n){w.debug("Failed to cache auth source into localStorage",n)}if("connected"===e.status)return t.federatedSignIn(e.authResponse);t.login()}))},this.login=function(){var e="public_profile,email";window["FB"].login((function(e){e&&e.authResponse&&t.federatedSignIn(e.authResponse)}),{scope:e})}}return e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.signInWithFacebook=function(e){e.preventDefault(),window["FB"].init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},e.prototype.render=function(){var e=this;return Object(i["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithFacebook(t)},provider:"facebook"},Object(i["i"])("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),a["a"].get(c["a"].SIGN_IN_WITH_FACEBOOK))},e}(),y=new o["a"]("amplify-google-button"),v=function(){function e(e){var t=this;Object(i["k"])(this,e),this.handleAuthStateChange=f["d"],this.handleError=function(e){console.error(e)},this.handleLoad=function(){window["gapi"].load("auth2")},this.handleUser=function(e){return l(t,void 0,void 0,(function(){var t,n,i,o,a;return h(this,(function(c){switch(c.label){case 0:if(!u["a"]||"function"!==typeof u["a"].federatedSignIn||"function"!==typeof u["a"].currentAuthenticatedUser)throw new Error(s["d"]);try{window.localStorage.setItem(s["o"],JSON.stringify({provider:"google"}))}catch(f){y.debug("Failed to cache auth source into localStorage",f)}return t=e.getAuthResponse(),n=t.id_token,i=t.expires_at,o=e.getBasicProfile(),[4,u["a"].federatedSignIn("google",{token:n,expires_at:i},{email:o.getEmail(),name:o.getName(),picture:o.getImageUrl()})];case 1:return c.sent(),[4,u["a"].currentAuthenticatedUser()];case 2:a=c.sent();try{this.handleAuthStateChange(r["a"].SignedIn,a)}catch(l){this.handleError(l)}return[2]}}))}))}}return e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.getAuthInstance=function(){return window["gapi"]&&window["gapi"].auth2?window["gapi"].auth2.getAuthInstance()||window["gapi"].auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},e.prototype.signInWithGoogle=function(e){e.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},e.prototype.render=function(){var e=this;return Object(i["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithGoogle(t)},provider:"google"},Object(i["i"])("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),a["a"].get(c["a"].SIGN_IN_WITH_GOOGLE))},e}(),I=function(){function e(e){Object(i["k"])(this,e),this.config={}}return e.prototype.signInWithOAuth=function(e){e.preventDefault(),u["a"].federatedSignIn()},e.prototype.componentWillLoad=function(){console.warn("Version `1.x` of Amplify UI has been deprecated and will be removed in a future major version of `aws-amplify`. Please visit https://ui.docs.amplify.aws/ for the current version of Amplify UI.")},e.prototype.render=function(){var e=this;return Object(i["i"])("amplify-sign-in-button",{onClick:function(t){return e.signInWithOAuth(t)},provider:"oauth"},this.config.label||a["a"].get(c["a"].SIGN_IN_WITH_AWS))},e}()}}]);
//# sourceMappingURL=chunk-2d0d7c42.c6962036.js.map