(function(t){function e(e){for(var r,s,o=e[0],u=e[1],c=e[2],p=0,f=[];p<o.length;p++)s=o[p],i[s]&&f.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-trivia/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"0b2e":function(t,e,n){},3922:function(t,e,n){"use strict";var r=n("0b2e"),i=n.n(r);i.a},"45ac":function(t,e,n){"use strict";var r=n("8d73"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-container",[n("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Trivia")]),t._t("default"),n("hr"),t._m(0)],2)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("© Brian Lindner, 2019. Trivia questions taken from "),n("a",{attrs:{href:"https://opentdb.com/"}},[t._v("OpenTDB")]),t._v(".")])}],u=(n("af3d"),n("2877")),c={},l=Object(u["a"])(c,s,o,!1,null,"5bd78dbd",null),p=l.exports,f={components:{AppContainer:p}},v=f,d=(n("034f"),Object(u["a"])(v,i,a,!1,null,null,null)),h=d.exports,m=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{id:"configureTrivia"},on:{submit:t.submit}},[n("h3",[t._v("Configure")]),t._m(0),t.disableCategories?n("p",[t._v("Failed to load categories.")]):t._e(),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.categoryID,expression:"categoryID",modifiers:{number:!0}}],attrs:{name:"category",disabled:t.disableCategories||t.loading},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.categoryID=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"0",selected:""}},[t._v("All Categories")]),t._l(t.categories,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._m(1),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.questionsPerRound,expression:"questionsPerRound",modifiers:{number:!0}}],attrs:{type:"number",value:"10"},domProps:{value:t.questionsPerRound},on:{input:function(e){e.target.composing||(t.questionsPerRound=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("input",{staticClass:"submit",attrs:{type:"submit",value:"Start Trivia"}})])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"category"}},[n("p",[t._v("Select a category:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"questionsPerRound"}},[n("p",[t._v("Number of questions per round:")])])}],_=(n("96cf"),n("3b8d")),y=n("75fc"),w=n("cebc"),R=n("bc3a"),q=n.n(R),O=function(t){var e=[];while(t.length>0){var n=Math.round(Math.random()*(t.length-1));e.push(t[n]),t.splice(n,1)}return e},C=function(t){return Object(w["a"])({},t,{answers:O([x(t.correct_answer,!0)].concat(Object(y["a"])(t.incorrect_answers.map(function(t){return x(t,!1)}))))})},x=function(t,e){return{text:t,correct:e}},T=function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){var e,n,r,i,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:10,n=a.length>1&&void 0!==a[1]?a[1]:"",r=a.length>2&&void 0!==a[2]?a[2]:"",t.next=5,q.a.get("https://opentdb.com/api.php",{params:{amount:e,token:n,category:r}});case 5:return i=t.sent,t.abrupt("return",i.data.results.map(C));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("https://opentdb.com/api_category.php");case 2:return t.abrupt("return",t.sent.data.trivia_categories);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("https://opentdb.com/api_token.php?command=request");case 2:return t.abrupt("return",t.sent.data.token);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),N={name:"home-view",data:function(){return{loading:!0,categories:[],disableCategories:!1,questionsPerRound:10,categoryID:0}},methods:{submit:function(t){t.preventDefault(),this.$router.push({path:"trivia",query:{qs:this.questionsPerRound,cat:this.categoryID}})}},mounted:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S();case 3:this.categories=t.sent,this.loading=!1,t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0),this.disableCategories=!0,this.loading=!1;case 12:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()},E=N,I=(n("45ac"),Object(u["a"])(E,g,b,!1,null,"5ab8c6dd",null)),j=I.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["LOADING"==t.status?n("p",[t._v("Loading trivia...")]):t._e(),"FAILED"==t.status?n("p",[t._v("Failed to load trivia!")]):t._e(),"READY"==t.status?n("div",["DONE"!=t.questionState?n("div",[n("p",[t._v("Score: "+t._s(t.score))]),n("h3",[t._v("\n        Question "+t._s(t.questionNumber)+"\n      ")]),n("p",[n("strong",[t._v(t._s(t.currentQuestion.category))]),n("br"),t._v("("+t._s(t.currentQuestion.difficulty)+" difficulty)")]),n("p",{staticClass:"trivia",domProps:{innerHTML:t._s(t.currentQuestion.question)}}),n("trivia-list",{attrs:{"question-state":t.questionState,answers:t.currentQuestion.answers},on:{answer:t.verifyAnswer}}),"CORRECT"==t.questionState?n("p",[t._v("Correct!")]):t._e(),"INCORRECT"==t.questionState?n("p",[t._v("Incorrect...")]):t._e(),t.readyToContinue?n("button",{on:{click:function(e){return t.goToNext()}}},[t._v("Continue")]):t._e()],1):n("div",[n("p",[t._v("Your scored "+t._s(t.score)+" points!")]),n("button",{on:{click:function(e){return t.getTrivia()}}},[t._v("Restart")]),n("p",[n("router-link",{attrs:{to:"/"}},[t._v("Configure Trivia")])],1)])]):t._e()])},D=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"answer-list",attrs:{type:"A"}},t._l(t.answers,function(e,r){return n("li",{key:e.text,on:{click:function(e){return t.$emit("answer",r)}}},[n("div",{staticClass:"answer",class:t.answerClasses(e.correct),domProps:{innerHTML:t._s(e.text)}})])}),0)},L=[],$={name:"trivia-list",props:{questionState:{type:String,required:!0},answers:{type:Array,required:!0}},methods:{answerClasses:function(t){switch(this.questionState){case"CORRECT":case"INCORRECT":var e=!t;return{correct:t,incorrect:e};case"ANSWERING":default:return{unknown:!0}}}}},M=$,Q=(n("3922"),Object(u["a"])(M,A,L,!1,null,"b5562b6a",null)),G=Q.exports,F={name:"trivia-app",props:{questionsPerRound:{type:String,default:"0"},categoryID:{type:String,default:"0"}},components:{TriviaList:G},data:function(){return{status:"LOADING",triviaList:[],currentQuestion:{},questionState:"ANSWERING",questionNumber:0,score:0,sessionToken:""}},computed:{readyToContinue:function(){return"CORRECT"===this.questionState||"INCORRECT"===this.questionState}},methods:{getTrivia:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.score=0,this.questionNumber=0,this.status="LOADING",t.prev=3,0!==this.sessionToken.length){t.next=8;break}return t.next=7,k();case 7:this.sessionToken=t.sent;case 8:return t.next=10,T(this.questionsPerRound,this.sessionToken,this.categoryID);case 10:this.triviaList=t.sent,this.goToNext(),this.status="READY",t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](3),console.error(t.t0),this.status="FAILED";case 19:case"end":return t.stop()}},t,this,[[3,15]])}));function e(){return t.apply(this,arguments)}return e}(),verifyAnswer:function(t){"ANSWERING"===this.questionState&&(this.currentQuestion.answers[t].correct?(this.score+=1,this.questionState="CORRECT"):this.questionState="INCORRECT")},goToNext:function(){this.triviaList.length?(this.currentQuestion=this.triviaList.pop(),this.questionNumber+=1,this.questionState="ANSWERING"):this.questionState="DONE"}},mounted:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getTrivia();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},W=F,Y=Object(u["a"])(W,P,D,!1,null,null,null),B=Y.exports;r["a"].use(m["a"]);var H=new m["a"]({routes:[{path:"/",name:"home",component:j},{path:"/trivia",name:"trivia",component:B,props:function(t){return{questionsPerRound:t.query.qs,categoryID:t.query.cat}}}]});r["a"].config.productionTip=!1,new r["a"]({router:H,render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,n){},"8a22":function(t,e,n){},"8d73":function(t,e,n){},af3d:function(t,e,n){"use strict";var r=n("8a22"),i=n.n(r);i.a}});
//# sourceMappingURL=app.965ffc81.js.map