(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{349:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("7b4a87a3",content,!0,{sourceMap:!1})},351:function(e,t,n){"use strict";n(349)},352:function(e,t,n){var r=n(45)(!1);r.push([e.i,".twod_home .el-input__inner::-moz-placeholder{color:#b0b0b0;font-size:14px}.twod_home .el-input__inner:-ms-input-placeholder{color:#b0b0b0;font-size:14px}.twod_home .el-input__inner::placeholder{color:#b0b0b0;font-size:14px}.twod_home .el-input__inner{border:0;border-bottom:1px solid #e3e2df;border-radius:unset;background:unset;color:#000;margin-left:6px;font-size:14px}.twod_home .el-button.is-round{position:relative;max-width:480px;width:100%;background:linear-gradient(180deg,#ffeb3c,#efcd40);color:#000;border:0;border-radius:10px}.twod_home{text-align:center}.twod_home .el-page-header__left{color:#000}.twod_home .hideScrollBar{margin:0;padding:20px 0 220px}.twod_home .logo{height:auto;position:relative;top:-10px}.main_page{margin:0 auto}.el-page-header__left{margin:0}",""]),e.exports=r},356:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(57),n(10),n(44),n(72),{head:function(){var e=this;return{title:"APi SHEET",script:[{src:"https://apis.google.com/js/api.js",defer:!0,callback:function(){e.gapiLoaded(),e.is_gapi_loaded=!0}}]}},components:{},getters:{},mutations:{},actions:{},mounted:function(){},data:function(){return{is_authenticated:!1,CLIENT_ID:"691919167371-m5h5s4m0ml975tv3g8nsetebage0tino.apps.googleusercontent.com",API_KEY:"AIzaSyCLjl6TjyM8LrT3-l0UHBp2bmVO7CCoyjY",is_gapi_loaded:!1,submitted:!1,ruleForm:{sheet_id:"1fdauAQhtjHe10C_4z50BcA5xPO4ck-98NfshiuTQaZw",start_range:"A1",end_range:"B6",api_url:null},running_interval:null,values:[[0,123],[1221,2121],[0x616d0298ee9544000,21121212]]}},destroyed:function(){clearInterval(this.running_interval)},beforeDestroy:function(){clearInterval(this.running_interval)},methods:{stop_interval:function(){clearInterval(this.running_interval),this.submitted=!1},check_form:function(e){var t=this;0!=this.is_gapi_loaded&&0!=this.is_authenticated?this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;null!=t.ruleForm.api_url?t.running_interval=setInterval((function(){t.$axios.get(t.ruleForm.api_url).then((function(e){console.log(e,"api_response"),t.execute(t.ruleForm.sheet_id,t.ruleForm.start_range,t.ruleForm.end_range,[[e.data.data.live,e.data.data.current_time]])})).catch((function(e){console.log(e),t.$message({showClose:!0,message:"api url error",type:"warning",duration:2e3}),t.stop_interval()}))}),3e3):t.running_interval=setInterval((function(){t.values[0][0]=t.values[0][0]+1,t.execute(t.ruleForm.sheet_id,t.ruleForm.start_range,t.ruleForm.end_range,t.values)}),3e3),t.submitted=!0})):this.$message({showClose:!0,message:"Plz authenticate 1st or load gapi 1st",type:"warning",duration:2e3})},gapiLoaded:function(){console.log(gapi,"heleleoeoeoe"),gapi.load("client:auth2",(function(){gapi.auth2.init({client_id:"691919167371-m5h5s4m0ml975tv3g8nsetebage0tino.apps.googleusercontent.com"})}))},authenticate:function(){var e=this;return console.log("leepae"),gapi.auth2.getAuthInstance().signIn({scope:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"}).then((function(){e.is_authenticated=!0,e.$message({showClose:!0,message:"authenticated",type:"normal",duration:2e3}),console.log("Sign-in successful")})).catch((function(t){e.$message({showClose:!0,message:"authentication error",type:"warning",duration:2e3}),e.is_authenticated=!1,console.error("Error signing in",t)}))},loadClient:function(){return gapi.client.setApiKey(this.API_KEY),gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4").then((function(){console.log("GAPI client loaded for API")}),(function(e){console.error("Error loading GAPI client for API",e)}))},execute:function(e,t,n,r){var o=this;return console.log("leepae2"),gapi.client.sheets.spreadsheets.values.update({spreadsheetId:e,range:"".concat(t,":").concat(n),includeValuesInResponse:!0,valueInputOption:"USER_ENTERED",resource:{values:r}}).then((function(e){console.log("Response",e)})).catch((function(e){console.log("Execute error",e),o.$message({showClose:!0,message:e.result.error.message,type:"warning",duration:2e3})}))},signout:function(){var e=gapi.client.getToken();console.log(e,"sadasdsad"),null!==e&&(gapi.auth2.getAuthInstance().signOut(),gapi.client.setToken("")),console.log(e,"22"),this.is_authenticated=!1,this.stop_interval()},getKweeLiveData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios.get("https://luke.2dboss.com/api/luke/twod-result-live").then((function(e){}));case 1:case"end":return t.stop()}}),t)})))()},itvKweeLiveData:function(){this.kweeliveItvId=setInterval(function(){this.getKweeLiveData()}.bind(this),4e3)}},created:function(){}}),l=(n(351),n(55)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",{staticClass:"main_page twod_home"},[n("el-header",{staticStyle:{height:"100px"}},[n("el-row",[n("el-col",{attrs:{span:9}},[n("el-page-header")],1),e._v(" "),n("el-col",{staticStyle:{"text-align":"left"},attrs:{span:11}}),e._v(" "),n("el-col",{staticStyle:{height:"0"},attrs:{span:4}})],1)],1),e._v(" "),n("div",{attrs:{id:"main_bg_img"}},[n("div",{staticClass:"longText",attrs:{id:"hidingScrollBar"}},[n("div",{staticClass:"hideScrollBar"},[0==e.is_authenticated?n("el-button",{staticStyle:{margin:"0 0 20px 0"},attrs:{round:""},on:{click:function(t){e.authenticate().then(e.loadClient)}}},[e._v("authenticate")]):e._e(),e._v(" "),n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-row",[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[n("span",{staticStyle:{position:"relative",top:"8px",color:"#000"}},[e._v("Sheet ID")])]),e._v(" "),n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"sheet_id",rules:[{required:!0,message:"require sheet ID"}]}},[n("el-input",{attrs:{placeholder:"Eg.1fdauAQhtjHe10C_4z50BcA5xPO4ck-98NfshiuTQaZw",disabled:e.submitted},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.check_form("ruleForm")}},model:{value:e.ruleForm.sheet_id,callback:function(t){e.$set(e.ruleForm,"sheet_id",t)},expression:"ruleForm.sheet_id"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[n("span",{staticStyle:{position:"relative",top:"8px",color:"#000"}},[e._v("Start Range")])]),e._v(" "),n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"start_range",rules:[{required:!0,message:"require Start Range"}]}},[n("el-input",{attrs:{placeholder:"Eg.A1",disabled:e.submitted},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.check_form("ruleForm")}},model:{value:e.ruleForm.start_range,callback:function(t){e.$set(e.ruleForm,"start_range",t)},expression:"ruleForm.start_range"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[n("span",{staticStyle:{position:"relative",top:"8px",color:"#000"}},[e._v("End Range")])]),e._v(" "),n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"end_range",rules:[{required:!0,message:"require End Range"}]}},[n("el-input",{attrs:{placeholder:"Eg.B6",disabled:e.submitted},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.check_form("ruleForm")}},model:{value:e.ruleForm.end_range,callback:function(t){e.$set(e.ruleForm,"end_range",t)},expression:"ruleForm.end_range"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:4}},[n("span",{staticStyle:{position:"relative",top:"8px",color:"#000"}},[e._v("API URL")])]),e._v(" "),n("el-col",{attrs:{span:20}},[n("el-form-item",{attrs:{prop:"api_url",rules:[{required:!1,message:"require API URL"}]}},[n("el-input",{attrs:{placeholder:"Eg.https://luke.2dboss.com/api/luke/twod-result-live",disabled:e.submitted},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.check_form("ruleForm")}},model:{value:e.ruleForm.api_url,callback:function(t){e.$set(e.ruleForm,"api_url",t)},expression:"ruleForm.api_url"}})],1)],1)],1),e._v(" "),n("el-button",{attrs:{disabled:e.submitted,round:""},on:{click:function(t){return e.check_form("ruleForm")}}},[e._v("Start Changing Sheet")])],1),e._v(" "),n("el-row",{staticStyle:{"margin-top":"20px"}},[1==e.submitted?n("el-button",{on:{click:function(t){return e.stop_interval()}}},[e._v("stop running")]):e._e(),e._v(" "),1==e.is_authenticated?n("el-button",{on:{click:function(t){return e.signout()}}},[e._v("logout")]):e._e()],1)],1)])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);