(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[6],{IIOE:function(t,e,n){"use strict"
var o=n("ODXe")
var r=n("1OyB")
var i=n("vuIU")
var a=n("QF4Q")
var s=n("gCYW")
var c=n("DUTp")
var l=n("i/8D")
var h=n("IPIv")
function p(t){var e=[]
if(!l["a"])return e
var n=Object(a["a"])(t)
if(n){var o=Object(h["a"])(n)||{}
var r=o.position
if("fixed"===r)return[n.ownerDocument]
var i=n
while(i&&1===i.nodeType&&(i=i.parentNode)){var s=void 0
try{s=Object(h["a"])(i)}catch(t){}if("undefined"===typeof s||null===s){e.push(i)
return e}var c=s,p=c.overflow,f=c.overflowX,u=c.overflowY;/(auto|scroll|overlay)/.test(p+u+f)&&("absolute"!==r||["relative","absolute","fixed"].indexOf(s.position)>=0)&&e.push(i)}e.push(n.ownerDocument.body)
n.ownerDocument!==document&&e.push(n.ownerDocument.defaultView)}return e}function f(t){var e=[]
if(!l["a"])return e
var n=Object(a["a"])(t)
if(n){var o=n
while((o=o.parentNode)&&o&&1===o.nodeType&&"BODY"!==o.tagName){var r=Object(h["a"])(o)
var i=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("-moz-transform")||r.getPropertyValue("-ms-transform")||r.getPropertyValue("-o-transform")||r.getPropertyValue("transform")||"none"
var s="none"===i||"matrix(1, 0, 0, 1, 0, 0)"===i
"static"===r.position&&s||e.push(o)}e.push(Object(c["a"])(n).body)}return e}var u=n("gpCx")
var m=n("k72m")
n.d(e,"a",(function(){return d}))
n.d(e,"b",(function(){return k}))
function d(t,e,n){if(!t||"offscreen"===n.placement){var o=!n.container&&t
return{placement:n.placement,style:{left:"-9999em",overflow:"hidden",position:"absolute",top:"0",display:o?"none":null}}}var r=new b(t,e,n)
return{placement:r.placement,style:r.style}}var v=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,left:0}
Object(r["a"])(this,t)
this.node=Object(a["a"])(e)
"string"===typeof n?this.placement=k(n):Array.isArray(n)?this.placement=n:this.placement=["bottom","center"]
this.rect=Object(s["a"])(this.node)
this._offset=y(o,this.size)}Object(i["a"])(t,[{key:"calculateOffset",value:function(t){var e={top:0,start:0,center:"50%",bottom:"100%",end:"100%",stretch:0}
var n=Object(o["a"])(t,2),r=n[0],i=n[1]
if(["start","end"].indexOf(r)>=0){var a=[i,r]
r=a[0]
i=a[1]}var s=0
var c=0
"undefined"!==typeof e[r]&&(s=e[r])
"undefined"!==typeof e[i]&&(c=e[i])
return g([y({top:s,left:c},this.size),O(this._offset,this.placement)])}},{key:"normalizeScrollTop",value:function(t){return Object(c["a"])(this.node).body===t?0:t.scrollTop}},{key:"width",get:function(){return this.rect.width}},{key:"height",get:function(){return this.rect.height}},{key:"size",get:function(){return{width:this.width,height:this.height}}},{key:"position",get:function(){return{top:this.rect.top,left:this.rect.left}}},{key:"hasVerticalPlacement",get:function(){return["top","bottom"].indexOf(this.placement[0])>=0}},{key:"hasHorizontalPlacement",get:function(){return["start","end"].indexOf(this.placement[0])>=0}},{key:"shouldStretchVertically",get:function(){return"stretch"===this.placement[1]&&this.hasVerticalPlacement}},{key:"shouldStretchHorizontally",get:function(){return"stretch"===this.placement[1]&&this.hasHorizontalPlacement}},{key:"mirroredPlacement",get:function(){return Object(m["b"])(this.placement)}},{key:"scrollParentsOffset",get:function(){var t=p(this.node)
var e=0
var n=0
for(var o=1;o<t.length;o++){var r=t[o]
var i=t[o-1]
e+=this.normalizeScrollTop(r)-this.normalizeScrollTop(i)
n+=r.scrollLeft-i.scrollLeft}return{top:e,left:n}}},{key:"positionedParentsOffset",get:function(){var t=f(this.node)
var e=Object(c["a"])(this.node)
var n=t.length>1?0:e.documentElement.offsetTop
var o=0
var r=0
for(var i=1;i<t.length;i++){var a=Object(s["a"])(t[i])
var l=Object(s["a"])(t[i-1])
n+=l.top-a.top
o+=l.left-a.left
if(t[i]===e.body){n+=a.top
o+=a.left}r+=this.normalizeScrollTop(t[i])}n+=r
return{top:n,left:o}}}])
return t}()
var b=function(){function t(e,n,o){Object(r["a"])(this,t)
this.options=o||{}
var i=this.options,s=i.container,l=i.constrain,h=i.placement,f=i.over
if(!e||"offscreen"===h)return
this.container=s||Object(c["a"])(e).body
this.element=new v(e,h,{top:this.options.offsetY,left:this.options.offsetX})
this.target=new v(n||this.container,f?this.element.placement:this.element.mirroredPlacement)
"window"===l?this.constrainTo(Object(u["a"])(e)):"scroll-parent"===l?this.constrainTo(p(this.target.node)[0]):"parent"===l?this.constrainTo(this.container):"function"===typeof l?this.constrainTo(Object(a["a"])(l.call(null))):"object"===typeof l&&this.constrainTo(Object(a["a"])(l))}Object(i["a"])(t,[{key:"overflow",value:function(t){var e=Object(u["a"])(t)
var n=Object(s["a"])(t)
var o=Object(s["a"])(e)
var r=g([this.target.position,this.offset])
var i={top:this.element.positionedParentsOffset.top+this.element.scrollParentsOffset.top,left:this.element.positionedParentsOffset.left+this.element.scrollParentsOffset.left}
var a=r.left+i.left
var c=r.left+this.element.width+i.left
var l=r.top+i.top
var h=r.top+this.element.height+i.top
"bottom"===this.element.placement[0]?l-=this.element.height+this.target.height:"top"===this.element.placement[0]&&(h+=this.element.height+this.target.height)
"start"===this.element.placement[1]?a-=this.element.width-this.target.width:"end"===this.element.placement[1]&&(c+=this.element.width-this.target.width)
"top"===this.element.placement[1]?l-=this.element.height-this.target.height:"bottom"===this.element.placement[1]&&(h+=this.element.height-this.target.height)
"end"===this.element.placement[0]?a-=this.element.width+this.target.width:"start"===this.element.placement[0]&&(c+=this.element.width+this.target.width)
var p=t===e?n:{top:o.top+n.top,bottom:n.top+n.height,left:o.left+n.left,right:n.left+n.width}
return{top:l<p.top?p.top-l:0,bottom:h>p.bottom?h-p.bottom:0,left:a<p.left?p.left-a:0,right:c>p.right?c-p.right:0}}},{key:"constrainTo",value:function(t){if(!t)return
var e=this.overflow(t)
var n={top:e.top>0,bottom:e.bottom>0,left:e.left>0,right:e.right>0}
if(this.element.hasVerticalPlacement){if("stretch"!==this.element.placement[1])if(n.left&&n.right){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.left){this.element.placement[1]="start"
this.target.placement[1]="start"}else if(n.right){this.element.placement[1]="end"
this.target.placement[1]="end"}if(n.top&&n.bottom){if(e.bottom<e.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(e.bottom>e.top){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(n.top){this.element.placement[0]="bottom"
this.target.placement[0]="top"}else if(n.bottom){this.element.placement[0]="top"
this.target.placement[0]="bottom"}}else if(this.element.hasHorizontalPlacement){if(n.top&&n.bottom){this.element.placement[1]="center"
this.target.placement[1]="center"}else if(n.top){this.element.placement[1]="top"
this.target.placement[1]="top"}else if(n.bottom){this.element.placement[1]="bottom"
this.target.placement[1]="bottom"}if(n.left&&n.right){if(e.left>e.right){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(e.left<e.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}else if(n.left){this.element.placement[0]="end"
this.target.placement[0]="start"}else if(n.right){this.element.placement[0]="start"
this.target.placement[0]="end"}}}},{key:"offset",get:function(){var t=this.target.calculateOffset(this.element.placement),e=t.top,n=t.left
var o=g([this.element.calculateOffset(this.target.placement),this.element.scrollParentsOffset,this.element.positionedParentsOffset])
return{top:e-o.top,left:n-o.left}}},{key:"placement",get:function(){return P(this.element.placement)}},{key:"minWidth",get:function(){return this.element.shouldStretchVertically?this.target.width:null}},{key:"minHeight",get:function(){return this.element.shouldStretchHorizontally?this.target.height:null}},{key:"position",get:function(){var t=Object(u["a"])(this.target.node)
var e=g([this.target.position,this.offset]),n=e.left,o=e.top
if(l["a"]&&t.matchMedia){var r=t.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||t.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches
if(!r){n=Math.round(n)
o=Math.round(o)}}return{left:n,top:o}}},{key:"style",get:function(){return{top:0,left:0,minWidth:this.minWidth,minHeight:this.minHeight,position:"absolute",transform:"translateX(".concat(this.position.left,"px) translateY(").concat(this.position.top,"px) translateZ(0)")}}}])
return t}()
function g(t){return t.reduce((function(t,e){return{top:t.top+e.top,left:t.left+e.left}}),{top:0,left:0})}function O(t,e){var n=t.top,o=t.left
"bottom"===e[0]&&(n=0-parseFloat(n,10))
"end"===e[0]&&(o=0-parseFloat(o,10))
return{top:n,left:o}}function y(t,e){var n=t.left,o=t.top
n="string"===typeof n&&-1!==n.indexOf("%")?parseFloat(n,10)/100*e.width:parseFloat(n,10)
o="string"===typeof o&&-1!==o.indexOf("%")?parseFloat(o,10)/100*e.height:parseFloat(o,10)
return{top:o,left:n}}function j(t){var e=Object(o["a"])(t,2),n=e[0],r=e[1]
if("center"===n||"stretch"===n){var i=[r,n]
n=i[0]
r=i[1]}return[n,r]}function k(t){var e=t.split(" ")
1===e.length&&(e=[t,"center"])
return j(e)}function P(t){return t.join(" ")}},UCAh:function(t,e,n){"use strict"
n.d(e,"a",(function(){return a}))
var o=n("17x9")
var r=n.n(o)
var i=n("AdN2")
var a={placement:r.a.oneOf(["top","end","bottom","start","top start","start top","start center","start bottom","bottom start","bottom center","bottom end","end bottom","end center","end top","top end","top center","center end","center start","top stretch","bottom stretch","end stretch","start stretch","offscreen"]),mountNode:r.a.oneOfType([i["a"],r.a.func]),constrain:r.a.oneOfType([i["a"],r.a.func,r.a.oneOf(["window","scroll-parent","parent","none"])])}},lzgt:function(t,e,n){"use strict"
n.d(e,"a",(function(){return m}))
var o=n("Ff2n")
var r=n("1OyB")
var i=n("vuIU")
var a=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var h=n("17x9")
var p=n.n(h)
var f=n("4Awi")
var u=n("sQ3t")
var m=function(t){Object(a["a"])(n,t)
var e=Object(s["a"])(n)
function n(){Object(r["a"])(this,n)
return e.apply(this,arguments)}Object(i["a"])(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=Object(o["a"])(t,["children"])
return Object(u["a"])(e,n)}}])
n.displayName="ComponentIdentifier"
return n}(c["Component"])
m.propTypes={children:p.a.node}
m.defaultProps={children:null}
m.pick=function(t,e){var n
l.a.Children.forEach(e,(function(e){Object(f["a"])(e,[t])&&(n=e)}))
return n}},tbLP:function(t,e,n){"use strict"
var o=n("rePB")
var r=n("VTBJ")
var i=n("vuIU")
var a=n("1OyB")
var s=n("Ji7U")
var c=n("LK+K")
var l=n("q1tI")
var h=n.n(l)
var p=n("17x9")
var f=n.n(p)
var u=n("TSYQ")
var m=n.n(u)
var d=n("J2CL")
var v=n("AdN2")
var b=n("nAyT")
var g=n("lzgt")
var O=n("sQ3t")
var y=n("II2N")
var j=n("E+IV")
var k=n("QF4Q")
var P=n("gCYW")
var T=n("ISHz")
function w(t,e){var n=Object(k["a"])(t)
var o=[]
var r=Object(P["a"])(n)||{}
var i=false
function a(){if(false===i){var t=Object(P["a"])(n)||{}
var s=t.top!==r.top||t.left!==r.left||t.right!==r.right||t.bottom!==r.bottom||t.width!==r.width||t.height!==r.height
s&&"function"===typeof e&&e(t)
r=t
o.push(Object(T["a"])(a))}}a()
return{remove:function(){i=true
o.forEach((function(t){return t.cancel()}))}}}var A=n("BTe1")
var _=n("IE60")
var x=n("0mOT")
var I=n("eGSd")
var z=n("oXx0")
var N=n("3Zzb")
var C=n("IIOE")
var L=n("UCAh")
var U=function(t){var e=t.stacking
return{zIndex:e.topmost}}
n.d(e,"a",(function(){return tt}))
var V,S,Y,D,E,B,F,H,X,W,K,Q,G,J,M,q
var Z={componentId:"eGKPI",template:function(t){return"\n\n.eGKPI_bGBk{box-sizing:border-box;z-index:".concat(t.zIndex||"inherit","}")},root:"eGKPI_bGBk"}
var R=(V=Object(b["a"])("8.0.0",null,"Use Position's `renderTarget` prop instead."),S=Object(z["a"])(),V(Y=S(Y=(E=D=function(t){Object(s["a"])(n,t)
var e=Object(c["a"])(n)
function n(){Object(a["a"])(this,n)
return e.apply(this,arguments)}return n}(g["a"]),D.displayName="PositionTarget",D.locatorAttribute="data-position-target",E))||Y)||Y)
var $=(B=Object(b["a"])("8.0.0",null,"Use Posiition's `children` instead."),F=Object(z["a"])(),B(H=F(H=(W=X=function(t){Object(s["a"])(n,t)
var e=Object(c["a"])(n)
function n(){Object(a["a"])(this,n)
return e.apply(this,arguments)}return n}(g["a"]),X.displayName="PositionContent",X.propTypes={children:f.a.node,placement:L["a"].placement},X.locatorAttribute="data-position-content",W))||H)||H)
var tt=(K=Object(b["a"])("8.0.0",{trackPosition:"shouldTrackPosition",over:"shouldPositionOverTarget"}),Q=Object(z["a"])(),G=Object(d["j"])(U,Z),K(J=Q(J=G(J=(q=M=function(t){Object(s["a"])(n,t)
var e=Object(c["a"])(n)
function n(t){var o
Object(a["a"])(this,n)
o=e.call(this,t)
o._timeouts=[]
o.handlePortalOpen=function(){o.position();(o.props.shouldTrackPosition||o.props.trackPosition)&&o.startTracking()
o._timeouts.push(setTimeout((function(){o.state.positioned&&"function"===typeof o.props.onPositioned&&o.props.onPositioned({top:o.state.style.top,left:o.state.style.left,placement:o.state.placement})}),0))}
o.position=function(){o.setState(Object(r["a"])({positioned:true},o.calculatePosition(o.props)))}
o.state=Object(r["a"])({positioned:false},o.calculatePosition(t))
o.position=Object(I["a"])(o.position,0,{leading:false,trailing:true})
o._id=o.props.id||Object(A["a"])("Position")
return o}Object(i["a"])(n,[{key:"shouldComponentUpdate",value:function(t,e,n){return!Object(_["a"])(this.state,e)||!Object(x["a"])(this.props,t)||!Object(x["a"])(this.context,n)}},{key:"componentDidMount",value:function(){this.toggleLocatorAttributes(true)}},{key:"componentDidUpdate",value:function(t,e){this.position()
this.toggleLocatorAttributes(true)
this.props.shouldTrackPosition!==t.shouldTrackPosition?this.props.shouldTrackPosition?this.startTracking():this.stopTracking():this.props.trackPosition!==t.trackPosition&&(this.props.trackPosition?this.startTracking():this.stopTracking())
var n=this.state,o=n.style,r=n.placement
o&&e.style&&(r!==e.placement||o.top!==e.style.top||o.left!==e.style.left)&&this.props.onPositionChanged({top:o.top,left:o.left,placement:r})}},{key:"componentWillUnmount",value:function(){this.position.cancel()
this.stopTracking()
this._timeouts.forEach((function(t){return clearTimeout(t)}))
this.toggleLocatorAttributes(false)}},{key:"toggleLocatorAttributes",value:function(t){this.toggleLocatorAttribute(Object(k["a"])(this._content),n.contentLocatorAttribute,t)
this.toggleLocatorAttribute(Object(k["a"])(this._target),n.targetLocatorAttribute,t)}},{key:"toggleLocatorAttribute",value:function(t,e,n){if(t&&t.hasAttribute){n&&!t.hasAttribute(e)&&t.setAttribute(e,this._id)
!n&&t.hasAttribute(e)&&t.removeAttribute(e)}}},{key:"calculatePosition",value:function(t){return Object(C["a"])(this._content,this._target,{placement:t.placement,offsetX:t.offsetX,offsetY:t.offsetY,constrain:t.constrain,container:t.mountNode,over:t.shouldPositionOverTarget||t.over})}},{key:"startTracking",value:function(){this._listener=this._listener||w(this._target,this.position)}},{key:"stopTracking",value:function(){if(this._listener){this._listener.remove()
this._listener=null}}},{key:"renderContent",value:function(){var t=this
var e=g["a"].pick(n.Content,this.props.children)
e||(e=Object(O["a"])(this.props.children))
if(e){var i
e=Object(y["a"])(e,Object(o["a"])({ref:function(e){t._content=e},style:Object(r["a"])({},e.props.style,{},this.state.style),className:m()((i={},Object(o["a"])(i,Z.root,true),Object(o["a"])(i,e.props.className,e.props.className),i))},n.contentLocatorAttribute,this._id))
e=h.a.createElement(N["a"],{open:true,onOpen:this.handlePortalOpen,mountNode:this.props.mountNode,insertAt:this.props.insertAt},e)}return e}},{key:"renderTarget",value:function(){var t=this
var e=g["a"].pick(n.Target,this.props.children)
e||(e=Object(j["a"])(this.props.renderTarget))
if(e)return Object(y["a"])(e,Object(o["a"])({ref:function(e){t._target=e}},n.targetLocatorAttribute,this._id))
if(!this.props.target)return null
this._target=Object(j["a"])(this.props.target)}},{key:"render",value:function(){var t=Object(o["a"])({},n.locatorAttribute,this._id)
return h.a.createElement("span",t,this.renderTarget(),this.renderContent())}}])
n.displayName="Position"
return n}(l["Component"]),M.Target=R,M.Content=$,M.locatorAttribute="data-position",M.targetLocatorAttribute="data-position-target",M.contentLocatorAttribute="data-position-content",M.propTypes={renderTarget:f.a.oneOfType([f.a.node,f.a.func]),target:f.a.oneOfType([v["a"],f.a.func]),placement:L["a"].placement,mountNode:L["a"].mountNode,insertAt:f.a.oneOf(["bottom","top"]),constrain:L["a"].constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),id:f.a.string,shouldTrackPosition:f.a.bool,shouldPositionOverTarget:f.a.bool,onPositionChanged:f.a.func,onPositioned:f.a.func,children:f.a.node,trackPosition:f.a.bool,over:f.a.bool},M.defaultProps={renderTarget:void 0,target:void 0,placement:"bottom center",mountNode:null,insertAt:"bottom",constrain:"window",offsetX:0,offsetY:0,id:void 0,shouldTrackPosition:true,shouldPositionOverTarget:false,onPositioned:function(t){},onPositionChanged:function(t){},children:null},q))||J)||J)||J)}}])

//# sourceMappingURL=6-c-d090ffc721.js.map