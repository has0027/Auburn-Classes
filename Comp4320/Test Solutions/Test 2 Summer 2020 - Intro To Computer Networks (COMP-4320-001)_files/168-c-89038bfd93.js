(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[168],{"1xB4":function(t,e,n){"use strict"
var i={EVT_PAGE_FOCUSED:"page_focused",EVT_PAGE_BLURRED:"page_blurred",EVT_QUESTION_VIEWED:"question_viewed",EVT_QUESTION_FLAGGED:"question_flagged",EVT_SESSION_STARTED:"session_started",EVT_PRIORITY_LOW:0,EVT_PRIORITY_HIGH:100,EVT_STATE_PENDING_DELIVERY:"pending_delivery",EVT_STATE_IN_DELIVERY:"in_delivery",EVT_STATE_DELIVERED:"delivered",EVT_STORAGE_KEY:"qla_events",EVT_STORAGE_MEMORY:"memory",EVT_STORAGE_LOCAL_STORAGE:"localStorage"}
var s=n("GLiE")
function r(){let t=Date.now()
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const n=(t+16*Math.random())%16|0
t=Math.floor(t/16)
const i="x"===e?n:7&n|8
return i.toString(16)})}class o{static fromJSON(t){const e=new o(t.event_type,t.event_data)
e.recordedAt=new Date(t.client_timestamp)
return e}constructor(t,e){if(!t)throw new Error("An event type must be specified.")
this._id=r()
this._state=i.EVT_STATE_PENDING_DELIVERY
this.type=t
this.data=Object(s["clone"])(e)
this.recordedAt=new Date}isPendingDelivery(){return this._state===i.EVT_STATE_PENDING_DELIVERY}isBeingDelivered(){return this._state===i.EVT_STATE_IN_DELIVERY}wasDelivered(){return this._state===i.EVT_STATE_DELIVERED}toJSON(){return{event_type:this.type,event_data:this.data,client_timestamp:this.recordedAt}}toString(){return JSON.stringify(this.toJSON())}}class a{constructor(t){this._events=t}isEmpty(){return 0===this._events.length}markPendingDelivery(){return this._events.forEach(t=>t._state=i.EVT_STATE_PENDING_DELIVERY)}markBeingDelivered(){return this._events.forEach(t=>t._state=i.EVT_STATE_IN_DELIVERY)}toJSON(){return this._events.map(t=>t.toJSON())}}var l=n("zrOs")
var c=n.n(l)
const u=[i.EVT_STORAGE_MEMORY,i.EVT_STORAGE_LOCAL_STORAGE]
class _{static setStorageAdapter(t){if(-1===u.indexOf(t))throw new Error('Unsupported storage adapter "'.concat(t,'". Available adapters are:\n').concat(u.join(", ")))
return _.STORAGE_ADAPTER=t}constructor(){this.useLocalStorage=_.STORAGE_ADAPTER===i.EVT_STORAGE_LOCAL_STORAGE
this._events=this._load()||[]
c.a.debug("EventBuffer: using",this.constructor.STORAGE_ADAPTER,"for storage")}push(t){this._events.push(t)
return this._save()}isEmpty(){return 0===this._events.length}getLength(){return this._events.length}filter(t){return new a(this._events.filter(t))}discard(t){const e=t._events.map(t=>t._id)
this._events=this._events.filter(t=>-1===e.indexOf(t._id))
this._save()
return}toJSON(){return this._events.map(t=>t.toJSON())}_save(){if(this.useLocalStorage)try{localStorage.setItem(i.EVT_STORAGE_KEY,JSON.stringify(this.toJSON()))}catch(t){c.a.warn("Unable to save to localStorage, likely because we're out of space.")}return}_load(){if(this.useLocalStorage){const t=JSON.parse(localStorage.getItem(i.EVT_STORAGE_KEY)||"[]")
return t.map(t=>o.fromJSON(t))}return}}_.STORAGE_ADAPTER=i.EVT_STORAGE_MEMORY
var h=n("ouhR")
var d=n.n(h)
var E=n("w8vW")
const p={Accept:"application/json; charset=UTF-8","Content-Type":"application/json; charset=UTF-8"}
class g{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=Object(s["extend"])({},g.options,t)
this._trackerFactories=[]
this._state={trackers:[],buffer:null,deliveryAgent:null,deliveries:[]}}registerTracker(t){return this._trackerFactories.push(t)}unregisterAllTrackers(){return this._trackerFactories=[]}start(){const t=this._state
t.buffer=new _
const e=this.options
const n=this._enqueue.bind(this)
function i(t,e){const i=new o(t.getEventType(),e)
return n(i,t.getDeliveryPriority())}t.trackers=this._trackerFactories.map(t=>{const e=new t
e.install(i.bind(null,e))
return e})
if(e.autoDeliver)return this._startDeliveryAgent()}isRunning(){return!!this._state.buffer}isDirty(){return this.isRunning()&&!this._state.buffer.isEmpty()}isDelivering(){return this._state.deliveries.length>0}deliver(){const t=this._state.buffer
const e=this._state.deliveries
const n=this.options
const i=t.filter(t=>t.isPendingDelivery())
if(i.isEmpty())return Object(h["when"])()
i.markBeingDelivered()
const s=Object(h["ajax"])({url:n.deliveryUrl,type:"POST",global:false,headers:p,data:JSON.stringify({quiz_submission_events:i.toJSON()})})
s.then(()=>t.discard(i),()=>i.markPendingDelivery())
const r=()=>Object(E["a"])(e,s)
s.then(r,r)
e.push(s)
return s}stop(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const e=this._state
if(this.isDelivering()&&!t){console.warn("You are attempting to stop the QuizLogAuditing module while a delivery is in progress.")
return Object(h["when"])(e.deliveries).done(this.stop.bind(this,true))}e.buffer=null
e.deliveryAgent&&this._stopDeliveryAgent()
e.trackers.forEach(t=>t.uninstall())
e.trackers=[]
return Object(h["when"])()}_startDeliveryAgent(){return this._state.deliveryAgent=setInterval(this.deliver.bind(this),this.options.autoDeliveryFrequency)}_enqueue(t,e){this._state.buffer.push(t)
c.a.log("Enqueuing ".concat(t," for delivery."))
if(e===i.EVT_PRIORITY_HIGH)return this.isDelivering()?Object(h["when"])(this._state.deliveries).done(this.deliver.bind(this)):this.deliver()}_stopDeliveryAgent(){return this._state.deliveryAgent=clearInterval(this._state.deliveryAgent)}}g.options={autoDeliver:true,autoDeliveryFrequency:15e3,deliveryUrl:"/quiz_submission_events"}
class v{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.eventType||(this.eventType=null)
this.priority||(this.priority=i.EVT_PRIORITY_LOW)
this._options=Object(s["extend"])({},this.options,t)
this.uid="".concat(this.eventType,"_").concat(Object(s["uniqueId"])())}install(t){throw new Error("Not implemented!")}getEventType(){return this.eventType}getDeliveryPriority(){return this.priority}getOption(t){return this._options[t]}uninstall(){if(this._bindings){this._bindings.forEach(t=>d()(t.selector).off(t.eventName))
return this._bindings=null}}bind(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._bindings||(this._bindings=[])
this._bindings.push({selector:t,eventName:e})
const r=parseInt(i.throttle||0,10)
r>0&&(n=Object(s["throttle"])(n,r,{leading:true,trailing:false}))
d()(t).on("".concat(e,".").concat(this.eventType),n)}}class T extends v{install(t){return this.bind(window,"focus",()=>t(),{throttle:this.getOption("frequency")})}}T.prototype.eventType=i.EVT_PAGE_FOCUSED
T.prototype.options={frequency:5e3}
class f extends v{install(t){return this.bind(window,"blur",()=>{if("IFRAME"!==document.activeElement.tagName)return t()},{throttle:this.getOption("frequency")})}}f.prototype.eventType=i.EVT_PAGE_BLURRED
f.prototype.options={frequency:5e3}
const y=d()(window)
function O(t){const e=d()(t)
const n=y.scrollTop()
const i=n+y.height()
const s=e.offset().top
const r=s+e.height()
return n<s&&i>r}d.a.extend(d.a.expr[":"],{in_viewport:O})
var S=n("VTHg")
var A=n.n(S)
class b extends v{install(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window
let n=[]
return this.bind(e,"scroll",()=>{const e=this.identifyVisibleQuestions().filter(t=>-1===n.indexOf(t))
if(e.length>0){n=n.concat(e)
c.a.log("Student has just viewed the following questions: ".concat(e,". (Questions viewed up until now are: ").concat(n,")"))
return t(e)}},{throttle:this.getOption("frequency")})}identifyVisibleQuestions(){return d()(".question[id]:visible").filter(":in_viewport").toArray().map(A.a)}}b.prototype.eventType=i.EVT_QUESTION_VIEWED
b.prototype.options={frequency:2500}
class D extends v{install(t){d()(document.body).on("click.".concat(this.uid),this.getOption("buttonSelector"),e=>{const n=d()(e.target).closest(this.getOption("questionSelector"))
const i=n.hasClass(this.getOption("questionMarkedClass"))
const s=A()(n[0])
c.a.log("Question ".concat(s," ").concat(i?"is now flagged":"is no longer flagged","."))
return t({flagged:i,questionId:s})})}}D.prototype.eventType=i.EVT_QUESTION_FLAGGED
D.prototype.options={buttonSelector:".flag_question",questionSelector:".question",questionMarkedClass:"marked"}
class R extends v{install(t){const e=navigator,n=e.userAgent
c.a.log("I've been loaded by ".concat(n,"."))
if(-1===location.href.indexOf("question")&&location.href.indexOf("take")>0)return t({user_agent:n})}}R.prototype.eventType=i.EVT_SESSION_STARTED
R.prototype.options={}
const x=[T,f,b,D,R]
const V=new g
x.forEach(t=>V.registerTracker(t))
c.a.debug("QuizLogAuditing: will be using localStorage.")
_.setStorageAdapter(i.EVT_STORAGE_LOCAL_STORAGE)
V.options.deliveryUrl=ENV.QUIZ_SUBMISSION_EVENTS_URL
e["a"]=V},VTHg:function(t,e){t.exports=t=>t.id.replace(/^question_/,"")},"gl9/":function(t,e,n){"use strict"
var i=n("1xB4")
e["a"]=function(t){t&&i["a"].unregisterAllTrackers()
i["a"].isRunning()||i["a"].start()
if(i["a"].isDirty())return i["a"].deliver()}},w8vW:function(t,e,n){"use strict"
n.d(e,"a",(function(){return i}))
function i(t,e){for(let n=0;n<t.length;n++){const i=t[n]
if(i===e){t.splice(n,1)
break}}return t}},zrOs:function(t,e){if("".concat(location.search).match(/[?&]debug_js=1/))t.exports=console
else{function n(){}t.exports=["debug","info","log","warn","error"].reduce((t,e)=>{t[e]=n
return t},{})}}}])

//# sourceMappingURL=168-c-89038bfd93.js.map