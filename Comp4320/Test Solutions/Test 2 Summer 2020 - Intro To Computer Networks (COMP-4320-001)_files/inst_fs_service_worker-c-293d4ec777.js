(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[372],{"+rbw":function(e,r,n){"use strict"
n.r(r)
var o=n("agZB")
var t=n("3lLS")
var i=n.n(t)
i()(()=>{const e=Object(o["getBrowser"])(),r=e.name,n=e.version
"Safari"!==r||parseFloat(n)<13?console.log("Inst-FS ServiceWorker not necessary for this browser."):"serviceWorker"in navigator?navigator.serviceWorker.controller?console.log("Inst-FS ServiceWorker already registered."):navigator.serviceWorker.register("/inst-fs-sw.js").then(()=>{console.log("Registration succeeded. Refresh page to proxy Inst-FS requests through ServiceWorker.")}).catch((function(e){console.log("Inst-FS ServiceWorker registration failed. :(",e)})):console.log("ServiceWorkers not available. :( Inst-FS files may fail to inline.")})},agZB:function(e,r,n){"use strict"
n.r(r)
n.d(r,"getBrowser",(function(){return o}))
function o(){const e=navigator.userAgent
let r
let n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[]
if(/trident/i.test(n[1])){r=/\brv[ :]+(\d+)/g.exec(e)||[]
return{name:"IE",version:r[1]||""}}if("Chrome"===n[1]){r=e.match(/\bOPR|Edge\/(\d+)/)
if(null!=r)return{name:"Opera",version:r[1]}}n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"]
null!=(r=e.match(/version\/(\d+)/i))&&n.splice(1,1,r[1])
return{name:n[0],version:n[1]}}}}])

//# sourceMappingURL=inst_fs_service_worker-c-293d4ec777.js.map