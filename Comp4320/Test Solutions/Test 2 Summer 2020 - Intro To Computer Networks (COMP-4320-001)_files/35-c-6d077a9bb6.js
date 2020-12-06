(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[35,668,679,680,736],{"0crz":function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
n("jQeR")
n("0sPK")
var o=a["default"].scoped("lib.text_helper")
var l=n("5Ky4")
var u,c,d
u="LINK-PLACEHOLDER"
c=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=d={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+i.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,n,r,i,a,s,o,h
i=[]
a=[]
e=e.replace(c,(function(e,t){var n
a.push(e===u?u:(n=e,"http://"===n.slice(0,7)||"https://"===n.slice(0,8)||(n="http://"+n),i.push(n),"<a href='"+Object(l["a"])(n)+"'>"+Object(l["a"])(e)+"</a>"))
return u}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(u,"g"),(function(e,t){return a.shift()}))
e=e.replace(/\n/g,"<br />\n")
s=[]
o=[]
h=e.split("\n")
for(t=0,n=h.length;t<n;t++){r=h[t]
if(r.match(/^(&gt;|>)/))o.push(r)
else{o.length&&s.push(d.quoteClump(o))
o=[]
s.push(r)}}o.length&&s.push(d.quoteClump(o))
return s.join("\n")},delimit:function(e){var t,n,r,i,a
if(isNaN(e))return String(e)
a=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
n=Math.floor(t)
i=t===n?"":String(t).replace(/^\d+\./,".")
while(n>=1e3){r=String(n).replace(/\d+(\d\d\d)$/,",$1")
n=Math.floor(n/1e3)
i=r+i}return a+String(n)+i},truncateText:function(e,t){var n,r,i,a,s,l
null==t&&(t={})
r=null!=(a=t.max)?a:30
n=o.t("ellipsis","...")
l=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=r)return e
s=0
while(true){i=e.indexOf(l,s+1)
if(i<0||i>r-n.length)break
s=i}s||(s=r-n.length)
return e.substring(0,s)+n},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"2BSC":function(e,t,n){"use strict"
var r=n("FIFq")
var i=n.n(r)
var a=n("fQ4S")
var s=n("ouhR")
var o=n.n(s)
var l=n("GLiE")
var u=n.n(l)
var c=n("pQTu")
var d=n("m0r6")
Object(d["a"])(JSON.parse('{"ar":{"errors":{"blank":"مطلوب","required":"مطلوب","unsaved_changes":"توجد تغييرات لم يتم حفظها."}},"cy":{"errors":{"blank":"Gofynnol","required":"Gofynnol","unsaved_changes":"Mae gennych chi newidiadau heb eu cadw."}},"da":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"da-x-k12":{"errors":{"blank":"Påkrævet","required":"Påkrævet","unsaved_changes":"Du har ændringer, der ikke er gemt."}},"de":{"errors":{"blank":"Erforderlich","required":"Erforderlich","unsaved_changes":"Sie haben nicht gespeicherte Änderungen."}},"el":{"errors":{"blank":"Απαιτούμενο","required":"Απαιτούμενο","unsaved_changes":"Έχετε αλλαγές που δεν έχουν αποθηκευτεί"}},"en-AU":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-AU-x-unimelb":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-CA":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB-x-lbs":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"en-GB-x-ukhe":{"errors":{"blank":"Required","required":"Required","unsaved_changes":"You have unsaved changes."}},"es":{"errors":{"blank":"Obligatorio","required":"Obligatorio","unsaved_changes":"Tiene cambios sin guardar."}},"fa":{"errors":{"blank":"لازم","required":"لازم","unsaved_changes":"ذخیره سازی تغییرات را لغو کرده اید."}},"fi":{"errors":{"blank":"Pakollinen","required":"Pakollinen","unsaved_changes":"Sinulla on tallentamattomia muutoksia."}},"fr":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"fr-CA":{"errors":{"blank":"Requis","required":"Requis","unsaved_changes":"Vous avez des modifications non enregistrées."}},"he":{"errors":{"blank":"נדרש","required":"נדרש","unsaved_changes":"יש עדיין שינויים שטרם נשמרו"}},"ht":{"errors":{"blank":"Obligatwa","required":"Obligatwa","unsaved_changes":"Ou gen chanjman ki pa anrejistre."}},"hu":{"errors":{"blank":"Kötelező","required":"Kötelező","unsaved_changes":"Még el nem mentett módosításai vannak."}},"hy":{"errors":{"blank":"Պահանջվում է","required":"Պահանջվում է","unsaved_changes":"Դուք չպահպանված փոփոխություններ եք արել:"}},"is":{"errors":{"blank":"Krafist","required":"Krafist","unsaved_changes":"Þú átt óvistaðar breytingar."}},"it":{"errors":{"blank":"Obbligatorio","required":"Obbligatorio","unsaved_changes":"Hai delle modifiche non salvate."}},"ja":{"errors":{"blank":"必須","required":"必須","unsaved_changes":"未保存の変更内容があります。"}},"ko":{"errors":{"blank":"필수 사항","required":"필수 사항","unsaved_changes":"저장하지 않은 변경 사항이 있습니다."}},"mi":{"errors":{"blank":"e hiahiatia ana","required":"e hiahiatia ana","unsaved_changes":"Whai huringa tiakina koe."}},"nb":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nb-x-k12":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringer som ikke er lagret."}},"nl":{"errors":{"blank":"Vereist","required":"Vereist","unsaved_changes":"Je hebt veranderingen die nog niet zijn opgeslagen."}},"nn":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har endringar som ikkje er lagra."}},"pl":{"errors":{"blank":"Wymagany","required":"Wymagany","unsaved_changes":"Nie zapisano wszystkich zmian."}},"pt":{"errors":{"blank":"Necessário","required":"Necessário","unsaved_changes":"Tem alterações não guardadas."}},"pt-BR":{"errors":{"blank":"Obrigatório","required":"Obrigatório","unsaved_changes":"Você tem alterações não salvas"}},"ru":{"errors":{"blank":"Требуется","required":"Требуется","unsaved_changes":"Вы сохранили не все изменения."}},"sl":{"errors":{"blank":"Zahtevano","required":"Zahtevano","unsaved_changes":"Obstajajo spremembe, ki jih niste shranili."}},"sv":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har osparade ändringar."}},"sv-x-k12":{"errors":{"blank":"Obligatorisk","required":"Obligatorisk","unsaved_changes":"Du har osparade ändringar."}},"tr":{"errors":{"blank":"Zorunlu","required":"Zorunlu","unsaved_changes":"Kaydedilmemiş değişiklikler var."}},"uk":{"errors":{"blank":"Обов\'язковий","required":"Обов\'язковий","unsaved_changes":"Ви маєте незбережені зміни."}},"zh-Hans":{"errors":{"blank":"必需","required":"必需","unsaved_changes":"您有未保存的更改。"}},"zh-Hant":{"errors":{"blank":"必填","required":"必填","unsaved_changes":"您有未保存的更改。"}}}'))
n("jQeR")
n("0sPK")
var h=c["default"].scoped("errors")
n("tVj+")
n("vpJZ")
n("Z+Ib")
var g=n("xe+K")
var _=n("cbNQ")
var p=function(e,t){return function(){return e.apply(t,arguments)}},f=function(e,t){for(var n in t)m.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},m={}.hasOwnProperty,v=[].slice
t["a"]=function(e){f(t,e)
function t(){this.checkUnload=p(this.checkUnload,this)
this.watchUnload=p(this.watchUnload,this)
this.onSaveFail=p(this.onSaveFail,this)
this.onSaveSuccess=p(this.onSaveSuccess,this)
return t.__super__.constructor.apply(this,arguments)}t.mixin(a["a"])
t.prototype.tagName="form"
t.prototype.className="validated-form-view"
t.prototype.events={submit:"submit"}
t.prototype.saveOpts={wait:true}
t.prototype.disableWhileLoadingOpts={}
t.prototype.submit=function(e,t){var n,r,i,a,s,l,c,d,h
null==t&&(t=g["d"])
null!=e&&e.preventDefault()
this.hideErrors()
d=this.$el.find("textarea[data-rich_text]").toArray()
c=true
d.length>0&&window.ENV.use_rce_enhancements&&(c=d.map((function(e){return t(o()(e),"checkReadyToGetCode",window.confirm)})).every((function(e){return e})))
if(!c)return
r=this.getFormData()
s=this.validateBeforeSave(r,{})
if(0===u.a.keys(s).length){a=new o.a.Deferred
h=this.saveFormData(r)
h.then(this.onSaveSuccess.bind(this),this.onSaveFail.bind(this))
h.fail((_=this,function(){a.reject()
if(_.setFocusAfterError)return _.setFocusAfterError()}))
this.dontRenableAfterSaveSuccess||h.done((function(){return a.resolve()}))
this.$el.disableWhileLoading(a,this.disableWhileLoadingOpts)
this.trigger("submit")
return h}i=u.a.map(o()("[data-error-type]"),(function(e){return o()(e).attr("data-error-type")}))
n=u.a.chain(u.a.keys(s)).reject((function(e){return u.a.includes(i,e)})).value()
l=n[0]||i[0]
this.findField(l).focus()
return window.setTimeout(function(e){return function(){e.showErrors(s)
return null}}(this),50)
var _}
t.prototype.getFormData=function(){return this.$el.toJSON()}
t.prototype.saveFormData=function(e){var t,n
null==e&&(e=null)
t=this.model
e||(e=this.getFormData())
n=this.saveOpts
return t.save(e,n)}
t.prototype.validate=function(e){var t,n
null==e&&(e={})
e||(e={})
t=e["data"]||this.getFormData()
n=this.validateFormData(t,{})
this.hideErrors()
this.showErrors(n)
return 0===n.length}
t.prototype.validateFormData=function(e){return{}}
t.prototype.validateBeforeSave=function(e){return this.validateFormData(e)}
t.prototype.hideErrors=function(){return this.$el.hideErrors()}
t.prototype.onSaveSuccess=function(){return this.trigger.apply(this,["success"].concat(v.call(arguments)))}
t.prototype.onSaveFail=function(e){var t
t=this.parseErrorResponse(e)
t||(t={})
this.showErrors(t)
return this.trigger.apply(this,["fail",t].concat(v.call(arguments)))}
t.prototype.parseErrorResponse=function(e){if(422===e.status)return{authenticity_token:"invalid"}
try{return o.a.parseJSON(e.responseText).errors}catch(e){e
return{}}}
t.prototype.translations=Object(_["b"])({},{required:function(){return h.t("required","Required")},blank:function(){return h.t("blank","Required")},unsaved:function(){return h.t("unsaved_changes","You have unsaved changes.")}})
t.prototype.fieldSelectors=null
t.prototype.findField=function(e){var t,n,r
r=(null!=(n=this.fieldSelectors)?n[e]:void 0)||"[name='"+e+"']"
t=this.$(r)
0===t.length&&(t=this.$("[data-error-type='"+e+"']"))
t.data("rich_text")&&(t=this.findSiblingTinymce(t))
t.length>1&&(t=t.not("[type=hidden]"))
return t}
t.prototype.castJSON=function(e){var t
if(!u.a.isObject(e))return e
if(null!=e.toJSON)return e.toJSON()
t=u.a.clone(e)
u.a.each(t,(n=this,function(e,r){return t[r]=n.castJSON(e)}))
var n
return t}
t.prototype.original=null
t.prototype.watchUnload=function(){this.original=this.castJSON(this.getFormData())
this.unwatchUnload()
return o()(window).on("beforeunload",this.checkUnload)}
t.prototype.unwatchUnload=function(){return o()(window).off("beforeunload",this.checkUnload)}
t.prototype.checkUnload=function(){var e
e=this.castJSON(this.getFormData())
if(!u.a.isEqual(this.original,e))return this.translations.unsaved}
return t}(i.a.View)},B1vq:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
n("s/PJ")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let r=n.offset(),a=n.outerWidth(),s=n.outerHeight(),o=r.top,l=o+s,u=r.left,c=u+a,d="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),g=this.outerHeight(),_=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
o-=e.top
l-=e.top
u-=e.left
c-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){g=i()(window).height()
i()("#wizard_box:visible").length>0&&(g-=i()("#wizard_box:visible").height())
_=i()(window).width()
o-=d
u-=h
l-=d
c-=h}o<0||g<s&&l>g?t.scrollTop=o+d:l>g&&(t.scrollTop=l+d-g+20)
u<0?t.scrollLeft=u+h:c>_&&(t.scrollLeft=c+h-_+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},BYL3:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("xe+K")
const s=/^(?:select|textarea)/i
const o=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function u(){if(this.elements)return i.a.makeArray(this.elements)
{const e=i()(this).find(":input")
return e.length?e:this}}function c(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||l.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(o,"\r\n"))
return{name:e,value:t}}function h(){const e=i()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(a["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return i.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}i.a.fn.serializeForm=function(){return this.map(u).filter(c).map(h).get()}},TBRb:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("GLiE")
var s=n.n(a)
var o=n("Nxtp")
n("YGE8")
i.a.fn.fixDialogButtons=function(){return this.each((function(){const e=i()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=i.a.map(t.toArray(),t=>{const n=i()(t)
let r=n.attr("class")||""
const a=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(o["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(r+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:r,id:a}})
n=s.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},fQ4S:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("GLiE")
var s=n.n(a)
var o=n("5Ky4")
n("tVj+")
n("vpJZ")
n("Z+Ib")
n("JI1W")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".mce-tinymce").find(".mce-edit-area")},findField:function(e,t){var n,r,a
null==t&&(t=false)
a=(null!=(r=this.fieldSelectors)?r[e]:void 0)||"[name='"+e+"']"
n=t?i()(a):this.$(a)
n.data("rich_text")&&(n=this.findSiblingTinymce(n))
return n},showErrors:function(e,t){var n,r,a,s,l,u,c,d
null==t&&(t=false)
d=[]
for(a in e){r=e[a]
n=r.element||this.findField(a,t)
s=r.message||function(){var e,t,n,i
i=[]
for(e=0,t=r.length;e<t;e++){l=r[e].message
i.push(Object(o["a"])((null!=(n=this.translations)?n[l]:void 0)||l))}return i}.call(this).join("</p><p>")
null!=(u=n.errorBox(i.a.raw(""+s)))&&null!=(c=u.css("z-index","1100"))&&c.attr("role","alert")
this.attachErrorDescription(n,s)
r.$input=n
d.push(r.$errorBox=n.data("associated_error_box"))}return d},attachErrorDescription:function(e,t){var n
n=this.findOrCreateDescriptionField(e)
n["description"].text(i.a.raw(""+t))
return e.attr("aria-describedby",n["description"].attr("id")+" "+n["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,n,r
n=e.attr("id")
i()("#"+n+"_sr_description").length>0||i()("<div>").attr({id:n+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=i()("#"+n+"_sr_description")
r=this.getExistingDescriptionIds(e,n)
return{description:t,originalDescriptionIds:r}},getExistingDescriptionIds:function(e,t){var n,r
n=e.attr("aria-describedby")
r=n?n.split(" "):[]
return s.a.without(r,t+"_sr_description")}}},faZh:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("2BSC")
var s=n("Nxtp")
var o=n("3O+N")
var l=n.n(o)
var u=n("pQTu")
var c=n("m0r6")
Object(c["a"])(JSON.parse('{"ar":{"dialog_form_wrapper":{"cancel":"إلغاء","save_settings":"حفظ الإعدادات","saving":"جارٍ الحفظ..."}},"cy":{"dialog_form_wrapper":{"cancel":"Canslo","save_settings":"Cadw Gosodiadau","saving":"Wrthi’n cadw..."}},"da":{"dialog_form_wrapper":{"cancel":"Annuller","save_settings":"Gem indstillinger","saving":"Gemmer ..."}},"da-x-k12":{"dialog_form_wrapper":{"cancel":"Annuller","save_settings":"Gem indstillinger","saving":"Gemmer ..."}},"de":{"dialog_form_wrapper":{"cancel":"Abbrechen","save_settings":"Einstellungen speichern","saving":"Speichervorgang läuft ..."}},"el":{"dialog_form_wrapper":{"cancel":"Ακύρωση","save_settings":"Αποθήκευση Ρυθμίσεων","saving":"Αποθήκευση..."}},"en-AU":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-AU-x-unimelb":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-CA":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save Settings","saving":"Saving..."}},"en-GB":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"en-GB-x-lbs":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"en-GB-x-ukhe":{"dialog_form_wrapper":{"cancel":"Cancel","save_settings":"Save settings","saving":"Saving..."}},"es":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Guardar las configuraciones","saving":"Guardando..."}},"fa":{"dialog_form_wrapper":{"cancel":"لغو","save_settings":"ذخیره سازی تنظیمات","saving":"در حال ذخیره سازی..."}},"fi":{"dialog_form_wrapper":{"cancel":"Peruuta","save_settings":"Tallenna asetukset","saving":"Tallennetaan..."}},"fr":{"dialog_form_wrapper":{"cancel":"Annuler","save_settings":"Enregistrer les paramètres","saving":"Enregistrement..."}},"fr-CA":{"dialog_form_wrapper":{"cancel":"Annuler","save_settings":"Enregistrer les paramètres","saving":"Enregistrement..."}},"he":{"dialog_form_wrapper":{"cancel":"ביטול","save_settings":"שמירת הגדרות","saving":"שומר..."}},"ht":{"dialog_form_wrapper":{"cancel":"Anile","save_settings":"Anrejistre Paramèt","saving":"Anrejistreman..."}},"hu":{"dialog_form_wrapper":{"cancel":"Mégse","save_settings":"Beállítások mentése","saving":"Mentés..."}},"hy":{"dialog_form_wrapper":{"cancel":"Չեղյալ համարել","save_settings":"Պահպանել կարգաբերումները","saving":"Պահպանվում է..."}},"is":{"dialog_form_wrapper":{"cancel":"Hætta við","save_settings":"Vista stillingar","saving":"Vista..."}},"it":{"dialog_form_wrapper":{"cancel":"Annulla","save_settings":"Salva impostazioni","saving":"Salvataggio in corso..."}},"ja":{"dialog_form_wrapper":{"cancel":"キャンセル","save_settings":"設定の保存","saving":"保存しています..."}},"ko":{"dialog_form_wrapper":{"cancel":"취소","save_settings":"설정 저장","saving":"저장 중..."}},"mi":{"dialog_form_wrapper":{"cancel":"Whakakore","save_settings":"Ngā Tautuhinga Tiaki","saving":"Kei te tiakina"}},"nb":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillinger","saving":"Lagrer…"}},"nb-x-k12":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillinger","saving":"Lagrer…"}},"nl":{"dialog_form_wrapper":{"cancel":"Annuleren","save_settings":"Instellingen opslaan","saving":"Bezig met opslaan..."}},"nn":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Lagre innstillingar","saving":"Lagrar..."}},"pl":{"dialog_form_wrapper":{"cancel":"Anuluj","save_settings":"Zapisz ustawienia","saving":"Trwa zapisywanie..."}},"pt":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Guardar definições","saving":"A guardar..."}},"pt-BR":{"dialog_form_wrapper":{"cancel":"Cancelar","save_settings":"Salvar configurações","saving":"Salvando..."}},"ru":{"dialog_form_wrapper":{"cancel":"Отменить","save_settings":"Сохранить настройки","saving":"Сохранение..."}},"sl":{"dialog_form_wrapper":{"cancel":"Prekliči","save_settings":"Shrani nastavitve","saving":"Shranjevanje ..."}},"sv":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Spara inställningarna","saving":"Sparar ..."}},"sv-x-k12":{"dialog_form_wrapper":{"cancel":"Avbryt","save_settings":"Spara inställningarna","saving":"Sparar ..."}},"tr":{"dialog_form_wrapper":{"cancel":"İptal","save_settings":"Ayarları Kaydet","saving":"Kaydediliyor..."}},"uk":{"dialog_form_wrapper":{"cancel":"Скасувати","save_settings":"Зберегти налаштування","saving":"Збереження..."}},"zh-Hans":{"dialog_form_wrapper":{"cancel":"取消","save_settings":"保存设置","saving":"正在保存..."}},"zh-Hant":{"dialog_form_wrapper":{"cancel":"取消","save_settings":"保存設置","saving":"正在保存..."}}}'))
n("jQeR")
n("0sPK")
u["default"].scoped("dialog_form_wrapper")
n("DfGn")
var d=l.a.default
var h=d.template,g=d.templates=d.templates||{}
var _="DialogFormWrapper"
g[_]=h((function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=i||{}
var a,s,o="",l=n.helperMissing,u=this.escapeExpression
o+='<div class="outlet"></div>\n\n<div class="button-container">\n  <button class="btn dialog_closer">'+u((a=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:i},a?a.call(t,"cancel","Cancel",s):l.call(t,"t","cancel","Cancel",s)))+'</button>\n  <button\n    class="btn btn-primary"\n    data-text-while-loading=\''+u((a=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:i},a?a.call(t,"saving","Saving...",s):l.call(t,"t","saving","Saving...",s)))+'\'\n    type="submit"\n  >'+u((a=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:i},a?a.call(t,"save_settings","Save Settings",s):l.call(t,"t","save_settings","Save Settings",s)))+"</button>\n\n"
return o}))
var p=g[_]
n("YGE8")
n("TBRb")
var f=function(e,t){return function(){return e.apply(t,arguments)}},m=function(e,t){for(var n in t)v.call(t,n)&&(e[n]=t[n])
function r(){this.constructor=e}r.prototype=t.prototype
e.prototype=new r
e.__super__=t.prototype
return e},v={}.hasOwnProperty
t["a"]=function(e){m(t,e)
function t(){this.onSaveSuccess=f(this.onSaveSuccess,this)
this.renderElAgain=f(this.renderElAgain,this)
this.firstRenderEl=f(this.firstRenderEl,this)
this.toggle=f(this.toggle,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={trigger:false,title:null,width:null,height:null,minWidth:null,minHeight:null,fixDialogButtons:true}
t.prototype.$dialogAppendTarget=i()("body")
t.prototype.className="dialogFormView"
t.prototype.wrapperTemplate=p
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.setTrigger()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.open=null
t.prototype.close=function(){var e,t;(null!=(e=this.dialog)?e.isOpen():void 0)&&this.dialog.close()
return null!=(t=this.focusReturnsTo())?t.focus():void 0}
t.prototype.toggle=function(){var e
return(null!=(e=this.dialog)?e.isOpen():void 0)?this.close():this.open()}
t.prototype.remove=function(){var e,n
t.__super__.remove.apply(this,arguments)
null!=(e=this.$trigger)&&e.off(".dialogFormView")
null!=(n=this.$dialog)&&n.remove()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.firstOpen=function(){this.insert()
this.render()
this.setupDialog()
this.openAgain()
return this.open=this.openAgain}
t.prototype.openAgain=function(){this.dialog.open()
return this.dialog.focusable.focus()}
t.prototype.insert=function(){return this.$el.appendTo(this.$dialogAppendTarget)}
t.prototype.setTrigger=function(e){e&&(this.options.trigger=e)
if(!this.options.trigger)return
this.$trigger=i()(this.options.trigger)
return this.attachTrigger()}
t.prototype.attachTrigger=function(){var e
return null!=(e=this.$trigger)?e.on("click.dialogFormView",Object(s["a"])(this.toggle)):void 0}
t.prototype.renderEl=null
t.prototype.firstRenderEl=function(){this.$el.html(this.wrapperTemplate(this.toJSON()))
this.renderElAgain()
return this.renderEl=this.renderElAgain}
t.prototype.renderElAgain=function(){var e
e=this.template(this.toJSON())
return this.$el.find(".outlet").html(e)}
t.prototype.getDialogTitle=function(){var e
return this.options.title||(null!=(e=this.$trigger)?e.attr("title"):void 0)||this.getAriaTitle()}
t.prototype.getAriaTitle=function(){var e,t
e=null!=(t=this.$trigger)?t.attr("aria-describedby"):void 0
return i()("#"+e).text()}
t.prototype.setupDialog=function(){var e
e={autoOpen:false,title:this.getDialogTitle(),close:(t=this,function(){t.close()
return t.trigger("close")}),open:function(e){return function(){return e.trigger("open")}}(this)}
var t
e.width=this.options.width
e.height=this.options.height
e.minWidth=this.options.minWidth
e.minHeight=this.options.minHeight
this.$el.dialog(e)
this.options.fixDialogButtons&&this.$el.fixDialogButtons()
this.dialog=this.$el.data("dialog")
return i()(".ui-resizable-handle").attr("aria-hidden",true)}
t.prototype.setDimensions=function(e,t){var n
e=null!=e?e:this.options.width
t=null!=t?t:this.options.height
n={width:e,height:t}
return this.$el.dialog(n)}
t.prototype.onSaveSuccess=function(){t.__super__.onSaveSuccess.apply(this,arguments)
return this.close()}
t.prototype.focusReturnsTo=function(){var e
if(!this.$trigger)return null
return(e=this.$trigger.data("focusReturnsTo"))?i()("#"+e):this.$trigger}
return t}(a["a"])},p6Wi:function(e,t,n){"use strict"
var r=n("pQTu")
var i=n("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var a=r["default"].scoped("instructure_misc_plugins")
var s=n("ouhR")
var o=n.n(s)
var l=n("5Ky4")
var u=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
o.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(n))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const r=t.innerWidth()
e.remove()
return n-r}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let r=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!r){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const r=e.prepareData?e.prepareData.call(t,n):{}
r.authenticity_token=Object(u["a"])()
o.a.ajaxJSON(e.url,"DELETE",r,n=>{e.success.call(t,n)},(n,r,i,a)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,n,r,i,a):o.a.ajaxJSON.unhandledXHRs.push(r)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){r=false
const t="object"===typeof e.dialog?e.dialog:{}
const s=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=o()(e.message).dialog(o.a.extend({},{modal:true,close:i,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:s,click(){r=true
o()(this).dialog("close")}}]},t))
return}r=confirm(e.message)}i()}
o.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let r=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(r="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let a=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(a=true)}a||o.a._checkFragments.fragmentList.push({doc:i,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{r&&r.length>0?i.triggerHandler("document_fragment_change",r):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const r=n.doc
if(r[0].location.hash!=n.fragment){r.triggerHandler("document_fragment_change",r[0].location.hash)
n.fragment=r[0].location.hash
o.a._checkFragments.fragmentList[t]=n}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const r=this.width()
const i=this.height()
const a=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:r+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),n=o()(this),r=o()("#wrapper"),i=o()("#main"),a=o()("#not_right_side"),s=o()(window),l=o()(this).add(t.alsoResize)
function u(){l.height(0)
const e=s.height()-(r.offset().top+r.outerHeight())+(i.height()-a.height()),u=Math.max(400,e)
l.height(u)
o.a.isFunction(t.onResize)&&t.onResize.call(n,u)}u()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),n="",r=o()(this),i=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:r.css("fontSize"),fontFamily:r.css("fontFamily"),fontWeight:r.css("fontWeight"),letterSpacing:r.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(n===(n=r.val()))return
i.text(n)
const a=i.width(),s=a+e.comfortZone>=t?a+e.comfortZone:t,o=r.width(),l=s<o&&s>=t||s>t&&s<e.maxWidth
l&&r.width(s)})}
i.insertAfter(r)
o()(this).bind("keyup keydown blur update change",a)}))
return this}
o.a},ppAs:function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
var a=n("GLiE")
var s=n.n(a)
var o=n("5Ky4")
var l=n("pQTu")
var u=n("m0r6")
Object(u["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var c=l["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){const t=i()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=i()('<span class="hidden-readable"></span>')
n.html(t)
return n},toMediaCommentLink(e){const t=i()("<a\n        id='media_comment_".concat(Object(o["a"])(i()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(o["a"])(i()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(o["a"])(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(o["a"])(i()(e).attr("data-alt")),"'\n      />"))
t.html(i()(e).html())
return t},convert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=i()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=i()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=s.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n="//".concat(ENV.files_domain).concat(n))
const r=i()("<form\n            action='".concat(Object(o["a"])(n),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(o["a"])(t),"'\n            id='form-").concat(Object(o["a"])(t),"'\n          />"))
r.append(i()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
r.append(i()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
i()("body").append(r)
setTimeout(()=>r.submit(),0)
return i()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(o["a"])(t),"'\n            style='width: ").concat(Object(o["a"])(e.data("uc_width")),"; height: ").concat(Object(o["a"])(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(o["a"])(c.t("User Content")),"'\n          />"))}))
n.find("img.equation_image").each((e,t)=>{const n=i()(t)
const r=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(r)})}return n.html()}}
t["a"]=d},"tVj+":function(e,t,n){"use strict"
var r=n("ouhR")
var i=n.n(r)
n("BYL3")
const a={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const s=function(e,t,n){e[t]=n
return e}
i.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
i.a.each(i()(this).serializeForm(),(function(){if(!a.validate.test(this.name))return
let t,r=this.name.match(a.key),o=this.value,l=this.name
while(void 0!==(t=r.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(a.push))o=s([],n(l),o)
else if(t.match(a.fixed)){n(l,t)
o=s([],t,o)}else t.match(a.named)&&(o=s({},t,o))}e=i.a.extend(true,e,o)}))
return e}}}])

//# sourceMappingURL=35-c-6d077a9bb6.js.map