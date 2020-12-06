(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[47],{"13m+":function(e,t,o){"use strict"
var c=o("17x9")
var l=o.n(c)
var a=o("v0Tn")
const i=l.a.shape,_=l.a.string,n=l.a.arrayOf,r=l.a.oneOf,s=l.a.bool,k=l.a.instanceOf
const u={}
u.migrationState=r(a["a"].statesList)
u.term=i({id:_.isRequired,name:_.isRequired})
u.termList=n(u.term)
u.account=i({id:_.isRequired,name:_.isRequired})
u.accountList=n(u.account)
u.course=i({id:_.isRequired,name:_.isRequired,course_code:_.isRequired,term:u.term.isRequired,teachers:n(i({display_name:_.isRequired})),teacher_count:_,sis_course_id:_})
u.courseList=n(u.course)
u.courseInfo=i({id:_.isRequired,name:_.isRequired,enrollment_term_id:_.isRequired,sis_course_id:_})
u.lockableAttribute=r(["points","content","due_dates","availability_dates","settings","deleted"])
u.lockableAttributeList=n(u.lockableAttribute)
u.migrationException=i({course_id:_.isRequired,conflicting_changes:u.lockableAttributeList})
u.migrationExceptionList=n(u.migrationException)
u.migrationChange=i({asset_id:_.isRequired,asset_type:r(["assignment","quiz","discussion_topic","wiki_page","attachment","context_module","learning_outcome","learning_outcome_group","announcement","rubric","syllabus"]).isRequired,asset_name:_.isRequired,change_type:r(["created","updated","deleted"]).isRequired,htnl_url:_,exceptions:u.migrationExceptionList})
u.migrationChangeList=n(u.migrationChange)
u.migration=i({id:_.isRequired,workflow_state:u.migrationState.isRequired,comment:_,created_at:_.isRequired,exports_started_at:_,imports_queued_at:_,imports_completed_at:_,changes:u.migrationChangeList})
u.migrationList=n(u.migration)
u.unsyncedChange=i({asset_id:_.isRequired,asset_type:_.isRequired,asset_name:_.isRequired,change_type:_.isRequired,html_url:_.isRequired,locked:s.isRequired})
u.unsyncedChanges=n(u.unsyncedChange)
u.notification=i({id:_.isRequired,message:_.isRequired,err:k(Error)})
u.notificationList=n(u.notification)
u.itemLocks=i({content:s,points:s,due_dates:s,availability_dates:s})
u.itemLocksByObject=i({assignment:u.itemLocks,discussion_topic:u.itemLocks,wiki_page:u.itemLocks,quiz:u.itemLocks,attachment:u.itemLocks})},OAMf:function(e,t,o){"use strict"
var c=o("pQTu")
var l=o("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"no_attributes_locked_611c5cc":"لم يتم تأمين أي سمات"},"cy":{"no_attributes_locked_611c5cc":"dim priodoleddau wedi’u cloi"},"da":{"no_attributes_locked_611c5cc":"ingen attributter låst"},"da-x-k12":{"no_attributes_locked_611c5cc":"ingen attributter låst"},"de":{"no_attributes_locked_611c5cc":"Keine Attribute gesperrt"},"en-AU":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-AU-x-unimelb":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-CA":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB-x-lbs":{"no_attributes_locked_611c5cc":"no attributes locked"},"en-GB-x-ukhe":{"no_attributes_locked_611c5cc":"no attributes locked"},"es":{"no_attributes_locked_611c5cc":"no se han bloqueado atributos"},"fa":{"no_attributes_locked_611c5cc":"هیچ ویژگی قفل نشده"},"fi":{"no_attributes_locked_611c5cc":"ei lukittuja määritteitä"},"fr":{"no_attributes_locked_611c5cc":"aucun attribut verrouillé"},"fr-CA":{"no_attributes_locked_611c5cc":"aucun attribut verrouillé"},"ht":{"no_attributes_locked_611c5cc":"Pa gen okenn atribi ki bloke"},"is":{"no_attributes_locked_611c5cc":"engir læstir eiginleikar"},"it":{"no_attributes_locked_611c5cc":"nessun attributo bloccato"},"ja":{"no_attributes_locked_611c5cc":"属性がロックされていません"},"mi":{"no_attributes_locked_611c5cc":"Kāore ngā huanga i te raka"},"nb":{"no_attributes_locked_611c5cc":"ingen låste attributter"},"nb-x-k12":{"no_attributes_locked_611c5cc":"ingen låste attributter"},"nl":{"no_attributes_locked_611c5cc":"geen vergrendelde eigenschappen"},"nn":{"no_attributes_locked_611c5cc":"ingen attributt er låste"},"pl":{"no_attributes_locked_611c5cc":"brak zablokowanych atrybutów"},"pt":{"no_attributes_locked_611c5cc":"Sem atributos bloqueados"},"pt-BR":{"no_attributes_locked_611c5cc":"nenhum atributo bloqueado"},"ru":{"no_attributes_locked_611c5cc":"нет заблокированных атрибутов"},"sl":{"no_attributes_locked_611c5cc":"ni zaklenjenih atributov"},"sv":{"no_attributes_locked_611c5cc":"inga attribut låsta"},"sv-x-k12":{"no_attributes_locked_611c5cc":"inga attribut låsta"},"uk":{"no_attributes_locked_611c5cc":"немає заблокованих атрибутів"},"zh-Hans":{"no_attributes_locked_611c5cc":"未锁定任何属性"},"zh-Hant":{"no_attributes_locked_611c5cc":"沒有鎖定屬性"}}'))
o("jQeR")
o("0sPK")
var a=c["default"].scoped("blueprint_LockItemFormat")
var i=o("3sT6")
o.d(t,"a",(function(){return n}))
function _(e){const t=e.map(e=>i["e"][e])
switch(t.length){case 0:return a.t("no attributes locked")
case 1:return t[0]
default:return"".concat(t.slice(0,-1).join(", ")," & ").concat(t.slice(-1)[0])}}function n(e){const t=Object.keys(e).filter(t=>e[t])
return _(t)}},kC3k:function(e,t,o){"use strict"
o.d(t,"a",(function(){return u}))
var c=o("VTBJ")
var l=o("1OyB")
var a=o("vuIU")
var i=o("Ji7U")
var _=o("LK+K")
var n=o("q1tI")
var r=o.n(n)
var s=o("hPGw")
var k=r.a.createElement("path",{d:"M564.706 1581.177H338.824V338.824h1242.353v225.882h-112.942V451.765H451.765v1016.47h112.941v112.942zM0 0h1242.353v225.882h-112.941v-112.94H112.941v1016.47h112.941v112.94H0V0zm847.059 1920H677.647v-169.412h112.942v56.471h56.47V1920zm180.662 0v-112.941h180.662V1920h-180.662zm361.433 0v-112.941h180.662V1920h-180.662zm530.846 0h-169.412v-112.941h56.471v-56.471H1920V1920zm-112.941-711.508v-180.661H1920v180.661h-112.941zm0 361.435v-180.662H1920v180.662h-112.941zM1920 847.059h-112.941v-56.47h-56.471V677.647H1920v169.412zm-892.169-56.471V677.647h180.661v112.941h-180.661zm361.434 0V677.647h180.662v112.941h-180.662zm-598.677 56.47h-112.94V677.648h169.41v112.942h-56.47v56.47zm-112.941 361.325v-180.662h112.941v180.662H677.647zm0 361.433v-180.662h112.941v180.662H677.647z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(e){Object(i["a"])(o,e)
var t=Object(_["a"])(o)
function o(){Object(l["a"])(this,o)
return t.apply(this,arguments)}Object(a["a"])(o,[{key:"render",value:function(){return r.a.createElement(s["a"],Object.assign({},this.props,{name:"IconBlueprint",viewBox:"0 0 1920 1920"}),k)}}])
o.displayName="IconBlueprintSolid"
return o}(n["Component"])
u.glyphName="blueprint"
u.variant="Solid"
u.propTypes=Object(c["a"])({},s["a"].propTypes)},lubD:function(e,t,o){"use strict"
var c=o("x1Tw")
var l=o("pREb")
var a=o("v0Tn")
const i={_depaginate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Infinity
let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
return c["a"].get(e).then(e=>{const c=o.concat(e.data)
const a=t-1
if(e.headers.link&&a>0){const t=Object(l["a"])(e)
if(t.next)return this._depaginate(t.next,a,c)}e.data=c
return e})},_queryString:e=>e.map(e=>{const t=Object.keys(e)[0]
const o=e[t]
return o?"".concat(t,"=").concat(o):null}).filter(e=>!!e).join("&"),getCourses(e){let t=e.accountId
let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.search,l=void 0===c?"":c,a=o.term,i=void 0===a?"":a,_=o.subAccount,n=void 0===_?"":_
const r=this._queryString([{per_page:"100"},{blueprint:"false"},{blueprint_associated:"false"},{"include[]":"term"},{"include[]":"teachers"},{teacher_limit:"5"},{search_term:l},{enrollment_term_id:i}])
return this._depaginate("/api/v1/accounts/".concat(n||t,"/courses?").concat(r),1)},getAssociations(e){let t=e.masterCourse
const o=this._queryString([{per_page:"100"},{teacher_limit:"5"}])
return this._depaginate("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/associated_courses?").concat(o))},saveAssociations(e){let t=e.masterCourse,o=e.addedAssociations,l=e.removedAssociations
return c["a"].put("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/update_associations"),{course_ids_to_add:o.map(e=>e.id),course_ids_to_remove:l.map(e=>e.id)})},getMigrations(e){let t=e.masterCourse
return c["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"))},beginMigration(e){let t=e.masterCourse,o=e.willSendNotification,l=e.willIncludeCustomNotificationMessage,a=e.notificationMessage,i=e.willIncludeCourseSettings,_=e.willPublishCourses
const n={send_notification:o}
i&&(n.copy_settings=true)
l&&a&&(n.comment=a)
_&&(n.publish_after_initial_sync=true)
return c["a"].post("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/migrations"),n)},checkMigration(e){return this.getMigrations(e).then(e=>{let t=a["a"].void
e.data[0]&&(t=e.data[0].workflow_state)
e.data=t
return e})},getMigration(e,t){let o=e.course
let l=t.blueprintType,a=void 0===l?"blueprint_templates":l,i=t.templateId,_=void 0===i?"default":i,n=t.changeId
return c["a"].get("/api/v1/courses/".concat(o.id,"/").concat(a,"/").concat(_,"/migrations/").concat(n))},getMigrationDetails(e,t){let o=e.course
let l=t.blueprintType,a=void 0===l?"blueprint_templates":l,i=t.templateId,_=void 0===i?"default":i,n=t.changeId
return c["a"].get("/api/v1/courses/".concat(o.id,"/").concat(a,"/").concat(_,"/migrations/").concat(n,"/details"))},getFullMigration(e,t){let o=e.course
return this.getMigration({course:o},t).then(e=>{let c=e.data
return this.getMigrationDetails({course:o},t).then(e=>Object.assign(c,{changeId:t.changeId,changes:e.data}))})},getSyncHistory(e){let t=e.masterCourse
return this.getMigrations({masterCourse:t}).then(e=>{let o=e.data
return Promise.all(o.slice(0,5).map(e=>this.getMigrationDetails({course:t},{changeId:e.id}).then(t=>Object.assign(e,{changes:t.data}))))})},toggleLocked(e){let t=e.courseId,o=e.itemType,l=e.itemId,a=e.isLocked
return c["a"].put("/api/v1/courses/".concat(t,"/blueprint_templates/default/restrict_item"),{content_type:o,content_id:l,restricted:a})},loadUnsyncedChanges(e){let t=e.masterCourse
return c["a"].get("/api/v1/courses/".concat(t.id,"/blueprint_templates/default/unsynced_changes"))}}
t["a"]=i},pREb:function(e,t,o){"use strict"
const c=/<(http.*?)>; rel="([a-z]*)"/g
const l=e=>{const t={}
const o=e.headers?e.headers.link:null
if(!o)return t
let l=c.exec(o)
while(l){t[l[2]]=l[1]
l=c.exec(o)}return t}
t["a"]=l},v0Tn:function(e,t,o){"use strict"
const c=["queued","exporting","imports_queued"]
const l=["completed","exports_failed","imports_failed"]
const a=["void","unknown",...c,...l]
const i={statesList:a,states:a.reduce((e,t)=>Object.assign(e,{[t]:t}),{})}
i.isEndState=e=>l.includes(e)
i.isLoadingState=e=>c.includes(e)
i.getLoadingValue=e=>c.indexOf(e)+1
i.isSuccessful=e=>"completed"===e
i.maxLoadingValue=c.length+1
t["a"]=i},y8OA:function(e,t,o){"use strict"
o.r(t)
var c=o("An8g")
var l=o("VTBJ")
var a=o("pQTu")
var i=o("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"حدثت مشكلة أثناء تبديل قفل المحتوى."},"cy":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Problem wrth doglo’r clo cynnwys."},"da":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Der opstod et problem, da indholdslåsen blev slået til eller fra."},"da-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Der opstod et problem, da indholdslåsen blev slået til eller fra."},"de":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Es gab ein Problem beim Umschalten der Content-Sperre."},"en-AU":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-AU-x-unimelb":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-CA":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB-x-lbs":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"en-GB-x-ukhe":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"There was a problem toggling the content lock."},"es":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Hubo un problema al cambiar el bloqueo de contenido."},"fa":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"در هنگام تغییر وضعیت قفل محتوا، مشکلی رخ داد."},"fi":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Sisällön lukon kanssa ilmeni ongelma."},"fr":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"L\'activation/désactivation du verrou sur le contenu a rencontré un problème."},"fr-CA":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Un problème est survenu lors du basculement du verrouillage de contenu."},"ht":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Te gen yon pwoblèm pou regle blokaj kontni an."},"is":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Vandamál kom upp við að víxla efnislás."},"it":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Si è verificato un problema durante l\'abilitazione/disabilitazione del blocco dei contenuti."},"ja":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"コンテンツロックをスイッチする際に問題が発生しました。"},"mi":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"He raruraru i te wā e takahuri ana i te raka ihirangi"},"nb":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det oppstod et problem med veksling av innholdslåsen."},"nb-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det oppstod et problem med veksling av innholdslåsen."},"nl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Er is een probleem met het in- en uitschakelen van de inhoudsvergrendeling."},"nn":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Kunne ikkje slå av/på innhaldslås"},"pl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Wystąpił problem podczas przełączania blokowania treści."},"pt":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Houve um problema ao alternar o bloqueio de conteúdo."},"pt-BR":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Houve um problema ao alternar o bloqueio de conteúdo."},"ru":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"При блокировке/разблокировке содержимого возникла проблема."},"sl":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Prišlo je do težave pri preklopu zaklepanja vsebine."},"sv":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det uppstod ett problem med att växla innehållslåset."},"sv-x-k12":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Det uppstod ett problem med att växla innehållslåset."},"uk":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"Виникла проблема з перемиканням блокування зміни контенту"},"zh-Hans":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"切换课程锁定时出现问题。"},"zh-Hant":{"there_was_a_problem_toggling_the_content_lock_2a5d678b":"切換內容鎖定時出現問題。"}}'))
o("jQeR")
o("0sPK")
var _=a["default"].scoped("blueprint_coursesLockManageer")
var n=o("ouhR")
var r=o.n(n)
var s=o("q1tI")
var k=o("i8i4")
var u=o.n(k)
o("p6Wi")
var d=o("mwIZ")
var b=o.n(d)
const p=e=>Object.assign({assignment:{toggleWrapperSelector:{show:".assignment-buttons",edit:".header-bar .header-bar-right .header-group-left"}[e.page],itemIdPath:{show:"ASSIGNMENT_ID",edit:"ASSIGNMENT.id"}[e.page]},quiz:{toggleWrapperSelector:{show:".header-group-left",edit:".header-bar .header-bar-right .header-group-left"}[e.page],toggleWrapperChildIndex:{edit:2}[e.page],itemIdPath:"QUIZ.id"},discussion_topic:{toggleWrapperSelector:{show:".form-inline .pull-right",edit:".discussion-edit-header .text-right"}[e.page],itemIdPath:{show:"DISCUSSION.TOPIC.ID",edit:"DISCUSSION_TOPIC.ATTRIBUTES.id"}[e.page]},wiki_page:{toggleWrapperSelector:{show:".header-bar .header-bar-right"}[e.page],itemIdPath:"WIKI_PAGE.page_id"}}[e.itemType],e)
var g=p
var f=o("lubD")
Object(i["a"])(JSON.parse('{"ar":{"attributes_locked_1a1a0f46":"%{attributes} مؤمّن","locked_796957c7":"مؤمّن:"},"cy":{"attributes_locked_1a1a0f46":"%{attributes} wedi\'u cloi","locked_796957c7":"Wedi Cloi:"},"da":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"da-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"de":{"attributes_locked_1a1a0f46":"%{attributes} gesperrt","locked_796957c7":"Gesperrt:"},"en-AU":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-AU-x-unimelb":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-CA":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB-x-lbs":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"en-GB-x-ukhe":{"attributes_locked_1a1a0f46":"%{attributes} locked","locked_796957c7":"Locked:"},"es":{"attributes_locked_1a1a0f46":"%{attributes} bloqueado","locked_796957c7":"Bloqueado:"},"fa":{"attributes_locked_1a1a0f46":"%{attributes} قفل شده","locked_796957c7":"قفل شده:"},"fi":{"attributes_locked_1a1a0f46":"%{attributes} lukittu","locked_796957c7":"Lukittu:"},"fr":{"attributes_locked_1a1a0f46":"%{attributes} verrouillé","locked_796957c7":"Verrouillé :"},"fr-CA":{"attributes_locked_1a1a0f46":"%{attributes} verrouillé","locked_796957c7":"Verrouillé :"},"he":{"attributes_locked_1a1a0f46":"%{attributes} נעול","locked_796957c7":"נעול:"},"ht":{"attributes_locked_1a1a0f46":"%{attributes} bloke","locked_796957c7":"Bbloke:"},"hu":{"attributes_locked_1a1a0f46":"%{attributes}zárolva"},"is":{"attributes_locked_1a1a0f46":"%{attributes} læst","locked_796957c7":"Læst:"},"it":{"attributes_locked_1a1a0f46":"%{attributes} bloccato","locked_796957c7":"Bloccato:"},"ja":{"attributes_locked_1a1a0f46":"%{attributes} ロックされています","locked_796957c7":"ロックされています"},"mi":{"attributes_locked_1a1a0f46":"%{attributes} Kua rakaina","locked_796957c7":"Kua rakaina:"},"nb":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"nb-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"nl":{"attributes_locked_1a1a0f46":"%{attributes} vergrendeld","locked_796957c7":"Vergrendeld:"},"nn":{"attributes_locked_1a1a0f46":"%{attributes} låste","locked_796957c7":"Låst:"},"pl":{"attributes_locked_1a1a0f46":"%{attributes} zblokowane","locked_796957c7":"Zblokowane:"},"pt":{"attributes_locked_1a1a0f46":"%{attributes} Bloqueado","locked_796957c7":"Bloqueado:"},"pt-BR":{"attributes_locked_1a1a0f46":"%{attributes} bloqueado(a)","locked_796957c7":"Bloqueado(a):"},"ru":{"attributes_locked_1a1a0f46":"%{attributes} заблокировано","locked_796957c7":"Заблокировано:"},"sl":{"attributes_locked_1a1a0f46":"%{attributes} zaklenjeno","locked_796957c7":"Zaklenjeno:"},"sv":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"sv-x-k12":{"attributes_locked_1a1a0f46":"%{attributes} låst","locked_796957c7":"Låst:"},"tr":{"attributes_locked_1a1a0f46":"%{attributes} kilitli"},"uk":{"attributes_locked_1a1a0f46":"%{attributes} заблоковано","locked_796957c7":"Заблоковано:"},"zh-Hans":{"attributes_locked_1a1a0f46":"%{attributes} 已锁定","locked_796957c7":"已锁定："},"zh-Hant":{"attributes_locked_1a1a0f46":"%{attributes} 已鎖定","locked_796957c7":"已鎖定："}}'))
var h=a["default"].scoped("blueprint_coursesLockBanner")
o("17x9")
var m=o("L+/K")
var v=o("5JRF")
o("MWZS")
var L=o("OAMf")
o("13m+")
class C extends s["Component"]{static setupRootNode(){const e=document.createElement("div")
e.id="blueprint-lock-banner"
e.setAttribute("style","margin-bottom: 2em")
const t=document.querySelector("#content")
return t.insertBefore(e,t.firstChild)}componentDidUpdate(e){this.props.isLocked&&!e.isLocked&&r.a.screenReaderFlashMessage(h.t("%{attributes} locked",{attributes:Object(L["a"])(this.props.itemLocks)}))}render(){if(this.props.isLocked)return Object(c["a"])(m["a"],{},void 0,Object(c["a"])(v["a"],{weight:"bold",size:"small"},void 0,h.t("Locked:")," "),Object(c["a"])(v["a"],{size:"small"},void 0,Object(L["a"])(this.props.itemLocks)))
return null}}C.defaultProps={itemLocks:{content:false,points:false,settings:false,due_dates:false,availability_dates:false}}
Object(i["a"])(JSON.parse('{"ar":{"blueprint_5cca2ef":"المخطط","lock_c341af13":"تأمين","locked_762f138b":"تم التأمين","locked_click_to_unlock_50747e11":"مؤمّن. انقر لإلغاء التأمين.","unlock_f6196bf5":"إلغاء التأمين","unlocked_click_to_lock_53262ce7":"غير مؤمّن. انقر للتأمين."},"cy":{"blueprint_5cca2ef":"Glasbrint","lock_c341af13":"Cloi","locked_762f138b":"Wedi Cloi","locked_click_to_unlock_50747e11":"Wedi Cloi. Cliciwch i ddatgloi.","unlock_f6196bf5":"Datgloi","unlocked_click_to_lock_53262ce7":"Wedi Datgloi. Cliciwch i’w gloi."},"da":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klik for at låse op.","unlock_f6196bf5":"Lås op","unlocked_click_to_lock_53262ce7":"Låst op. Klik for at låse."},"da-x-k12":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klik for at låse op.","unlock_f6196bf5":"Lås op","unlocked_click_to_lock_53262ce7":"Låst op. Klik for at låse."},"de":{"blueprint_5cca2ef":"Muster","lock_c341af13":"Sperre","locked_762f138b":"Gesperrt","locked_click_to_unlock_50747e11":"Gesperrt. Zum Entsperren klicken","unlock_f6196bf5":"Entsperren","unlocked_click_to_lock_53262ce7":"Entsperrt Zum Sperren klicken"},"el":{"locked_762f138b":"Κλειδωμένο"},"en-AU":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-AU-x-unimelb":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-CA":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB-x-lbs":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"en-GB-x-ukhe":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lock","locked_762f138b":"Locked","locked_click_to_unlock_50747e11":"Locked. Click to unlock.","unlock_f6196bf5":"Unlock","unlocked_click_to_lock_53262ce7":"Unlocked. Click to lock."},"es":{"blueprint_5cca2ef":"Proyecto","lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado","locked_click_to_unlock_50747e11":"Bloqueado. Hacer clic para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Hacer clic para bloquear."},"fa":{"blueprint_5cca2ef":"طرح","lock_c341af13":"قفل کردن","locked_762f138b":"قفل شده","locked_click_to_unlock_50747e11":"قفل شده. برای قفل گشایی کلیک کنید.","unlock_f6196bf5":"قفل گشایی","unlocked_click_to_lock_53262ce7":"قفل گشایی شده. برای قفل کردن کلیک کنید."},"fi":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lukitse","locked_762f138b":"Lukittu","locked_click_to_unlock_50747e11":"Lukittu. Poista lukitus napsauttamalla.","unlock_f6196bf5":"Poista lukitus.","unlocked_click_to_lock_53262ce7":"Lukitus poistettu. Lukitse napsauttamalla."},"fr":{"blueprint_5cca2ef":"Projet","lock_c341af13":"Verrouiller","locked_762f138b":"Verrouillé(e)","locked_click_to_unlock_50747e11":"Verrouillé. Cliquez pour déverrouiller.","unlock_f6196bf5":"Déverrouiller","unlocked_click_to_lock_53262ce7":"Déverrouillé. Cliquez pour verrouiller."},"fr-CA":{"blueprint_5cca2ef":"Modèle","lock_c341af13":"Verrouiller","locked_762f138b":"Verrouillé","locked_click_to_unlock_50747e11":"Verrouillé. Cliquez pour déverrouiller.","unlock_f6196bf5":"Déverrouiller","unlocked_click_to_lock_53262ce7":"Déverrouillé. Cliquez pour verrouiller."},"he":{"blueprint_5cca2ef":"תבנית דוגמה","lock_c341af13":"נעילה","locked_762f138b":"נעול","locked_click_to_unlock_50747e11":"נעול: הקש/י להסרת נעילה"},"ht":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Bloke","locked_762f138b":"Bloke","locked_click_to_unlock_50747e11":"Bloke. Klike pou debloke.","unlock_f6196bf5":"Debloke","unlocked_click_to_lock_53262ce7":"Debloke. Klike pou bloke."},"hu":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Zárolás","locked_762f138b":"Zárolt","locked_click_to_unlock_50747e11":"Zárolva. Kattintson a zárolás feloldásához.","unlock_f6196bf5":"Zárolás feloldása","unlocked_click_to_lock_53262ce7":"Zárolás feloldva. Kattintson a zároláshoz."},"hy":{"locked_762f138b":"Արգելափակված է"},"is":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Læsa","locked_762f138b":"Læst ","locked_click_to_unlock_50747e11":"Læst. Smellið til að opna.","unlock_f6196bf5":"Aflæsa","unlocked_click_to_lock_53262ce7":"Aflæst. Smelltu til að læsa."},"it":{"blueprint_5cca2ef":"Modello di base","lock_c341af13":"Blocca","locked_762f138b":"Bloccato","locked_click_to_unlock_50747e11":"Bloccato. Fai clic per sbloccare.","unlock_f6196bf5":"Sblocca","unlocked_click_to_lock_53262ce7":"Sbloccato. Fai clic per bloccare."},"ja":{"blueprint_5cca2ef":"青写真","lock_c341af13":"ロック","locked_762f138b":"ロックされています","locked_click_to_unlock_50747e11":"ロックされています。クリックしてロック解除する。","unlock_f6196bf5":"ロック解除する","unlocked_click_to_lock_53262ce7":"ロック解除。クリックしてロックする。"},"mi":{"blueprint_5cca2ef":"Tātauira","lock_c341af13":"raka","locked_762f138b":"Kua rakaina","locked_click_to_unlock_50747e11":"Kua rakaina: Pāwhiri ki te huaki","unlock_f6196bf5":"Huaki","unlocked_click_to_lock_53262ce7":"Kua Huakina Pāwhiri ki te huaki"},"nb":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å låse opp.","unlock_f6196bf5":"Lås opp","unlocked_click_to_lock_53262ce7":"Låst opp. Klikk for å låse."},"nb-x-k12":{"blueprint_5cca2ef":"Fagmal","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å låse opp.","unlock_f6196bf5":"Lås opp","unlocked_click_to_lock_53262ce7":"Låst opp. Klikk for å låse."},"nl":{"blueprint_5cca2ef":"Blauwdruk","lock_c341af13":"Vergrendelen","locked_762f138b":"Vergrendeld","locked_click_to_unlock_50747e11":"Vergrendeld. Klik om te ontgrendelen.","unlock_f6196bf5":"Ontgrendelen","unlocked_click_to_lock_53262ce7":"Ontgrendeld. Klik om te vergrendelen."},"nn":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klikk for å opne.","unlock_f6196bf5":"Lås opp","unlocked_click_to_lock_53262ce7":"Ulåst. Klikk for å opne. "},"pl":{"blueprint_5cca2ef":"Wzorzec","lock_c341af13":"Zablokuj","locked_762f138b":"Zablokowany","locked_click_to_unlock_50747e11":"Zblokowane. Kliknij, aby odblokować.","unlock_f6196bf5":"Odblokuj","unlocked_click_to_lock_53262ce7":"Odblokowane. Kliknij, aby zablokować."},"pt":{"blueprint_5cca2ef":"Blueprint","lock_c341af13":"Bloquear","locked_762f138b":"Travada","locked_click_to_unlock_50747e11":"Bloqueado, Clique para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear."},"pt-BR":{"blueprint_5cca2ef":"Modelo","lock_c341af13":"Bloquear","locked_762f138b":"Bloqueado(a)","locked_click_to_unlock_50747e11":"Bloqueado. Clique para desbloquear.","unlock_f6196bf5":"Desbloquear","unlocked_click_to_lock_53262ce7":"Desbloqueado. Clique para bloquear."},"ru":{"blueprint_5cca2ef":"Шаблон","lock_c341af13":"Заблокировать","locked_762f138b":"Заблокировано","locked_click_to_unlock_50747e11":"Заблокировано. Нажмите, чтобы разблокировать.","unlock_f6196bf5":"Разблокировать","unlocked_click_to_lock_53262ce7":"Разблокировано. Нажмите, чтобы заблокировать."},"sl":{"blueprint_5cca2ef":"Šablona","lock_c341af13":"Zakleni","locked_762f138b":"Zaklenjeno","locked_click_to_unlock_50747e11":"Zaklenjeno. Kliknite, da odklenete.","unlock_f6196bf5":"Odkleni","unlocked_click_to_lock_53262ce7":"Odklenjeno. Kliknite, da zaklenete."},"sv":{"blueprint_5cca2ef":"Modell","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klicka för att låsa upp.","unlock_f6196bf5":"Lås upp","unlocked_click_to_lock_53262ce7":"Olåst. Klicka för att låsa."},"sv-x-k12":{"blueprint_5cca2ef":"Modell","lock_c341af13":"Lås","locked_762f138b":"Låst","locked_click_to_unlock_50747e11":"Låst. Klicka för att låsa upp.","unlock_f6196bf5":"Lås upp","unlocked_click_to_lock_53262ce7":"Olåst. Klicka för att låsa."},"tr":{"blueprint_5cca2ef":"Şablon","locked_762f138b":"Kilitli"},"uk":{"blueprint_5cca2ef":"Проект","lock_c341af13":"Заблокувати","locked_762f138b":"Заблоковано","locked_click_to_unlock_50747e11":"Заблоковано. Клацніть, щоб розблокувати.","unlock_f6196bf5":"Розблокувати","unlocked_click_to_lock_53262ce7":"Розблоковано. Натисніть, щоб заблокувати."},"zh-Hans":{"blueprint_5cca2ef":"模板","lock_c341af13":"锁定","locked_762f138b":"已锁定","locked_click_to_unlock_50747e11":"已锁定。单击以解锁。","unlock_f6196bf5":"解锁","unlocked_click_to_lock_53262ce7":"已解锁。单击以锁定。"},"zh-Hant":{"blueprint_5cca2ef":"計劃","lock_c341af13":"鎖定","locked_762f138b":"已鎖定","locked_click_to_unlock_50747e11":"已鎖定。點擊解鎖。","unlock_f6196bf5":"解除鎖定","unlocked_click_to_lock_53262ce7":"已解除鎖定。點擊鎖定。"}}'))
var w=a["default"].scoped("blueprint_coursesLockToggle")
var O=o("Xx/m")
var q=o("5Shj")
var A=o("4Pkj")
var E=o("WfMV")
var S=o("o/ft")
var I=o("kC3k")
const B={ADMIN_LOCKED:{label:w.t("Locked"),icon:S["a"],tooltip:w.t("Unlock"),variant:"primary"},ADMIN_UNLOCKED:{label:w.t("Blueprint"),icon:I["a"],tooltip:w.t("Lock"),variant:"default"},ADMIN_WILLUNLOCK:{label:w.t("Blueprint"),icon:I["a"],tooltip:w.t("Unlock"),variant:"default"},ADMIN_WILLLOCK:{label:w.t("Locked"),icon:S["a"],tooltip:w.t("Lock"),variant:"primary"},TEACH_LOCKED:{label:w.t("Locked"),icon:S["a"]},TEACH_UNLOCKED:{label:w.t("Blueprint"),icon:I["a"]}}
class T extends s["Component"]{static setupRootNode(e,t,o){const c=document.createElement("span")
const l=setInterval(()=>{const a=document.querySelector(e)
if(a){clearInterval(l)
a.insertBefore(c,a.childNodes[t])
o(c)}},200)}constructor(e){super(e)
this.onEnter=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?B.ADMIN_WILLUNLOCK:B.ADMIN_WILLLOCK})}
this.onExit=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?B.ADMIN_LOCKED:B.ADMIN_UNLOCKED})}
this.state={}
e.isToggleable?this.state.mode=e.isLocked?B.ADMIN_LOCKED:B.ADMIN_UNLOCKED:this.state.mode=e.isLocked?B.TEACH_LOCKED:B.TEACH_UNLOCKED}render(){const e=this.state.mode.icon
const t=Object(c["a"])("span",{className:"bpc-lock-toggle__label"},void 0,this.state.mode.label||"-")
let o=null
if(this.props.isToggleable){const l=this.state.mode.variant
const a=this.state.mode.tooltip
const i=this.props.isLocked?w.t("Locked. Click to unlock."):w.t("Unlocked. Click to lock.")
o=Object(c["a"])(q["a"],{tip:a,placement:"top",variant:"inverse",on:["hover","focus"]},void 0,Object(c["a"])(O["a"],{variant:l,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked},void 0,Object(c["a"])(e,{}),Object(c["a"])(A["a"],{},void 0,t),Object(c["a"])(E["a"],{},void 0,i)))}else o=Object(c["a"])("span",{className:"bpc__lock-no__toggle"},void 0,Object(c["a"])("span",{className:"bpc__lock-no__toggle-icon"},void 0,Object(c["a"])(e,{})),Object(c["a"])(v["a"],{size:"small"},void 0,t))
return Object(c["a"])("span",{className:"bpc-lock-toggle"},void 0,o)}}T.defaultProps={isToggleable:false,onClick:()=>{}}
o.d(t,"default",(function(){return j}))
class j{constructor(){this.toggleLocked=()=>{const e=this.props.itemType
const t=this.state,o=t.courseId,c=t.isLocked,l=t.itemId
f["a"].toggleLocked({courseId:o,itemType:e,itemId:l,isLocked:!c}).then(e=>{e.data.success?this.setState({isLocked:!c}):this.showToggleError()}).catch(()=>{this.showToggleError()})}
this.state={isLocked:false,itemLocks:[],isMasterContent:false,isChildContent:false,itemId:""}}init(e){if(!this.shouldInit())return
this.props=g(e)
this.setupState()
void 0!==this.state.itemId&&this.render()}shouldInit(){return ENV.MASTER_COURSE_DATA&&(ENV.MASTER_COURSE_DATA.is_master_course_master_content||ENV.MASTER_COURSE_DATA.is_master_course_child_content)}setupState(){this.state={isLocked:ENV.MASTER_COURSE_DATA.restricted_by_master_course,itemLocks:ENV.MASTER_COURSE_DATA.master_course_restrictions||ENV.MASTER_COURSE_DATA.default_restrictions,isMasterContent:ENV.MASTER_COURSE_DATA.is_master_course_master_content,isChildContent:ENV.MASTER_COURSE_DATA.is_master_course_child_content,courseId:ENV.COURSE_ID,itemId:b()(ENV,this.props.itemIdPath)}}setState(e){this.state=Object.assign(this.state,e)
this.render()}getItemLocks(){return Object(l["a"])({},this.state.itemLocks)}isMasterContent(){return this.state.isMasterContent}isChildContent(){return this.state.isChildContent}showToggleError(){r.a.flashError(_.t("There was a problem toggling the content lock."))}setupToggle(e){if(!this.props.toggleWrapperSelector)return
this.toggleNode?e():T.setupRootNode(this.props.toggleWrapperSelector,this.props.toggleWrapperChildIndex||0,t=>{this.toggleNode=t
e()})}renderLockToggle(){if(!this.props.toggleWrapperSelector)return
this.setupToggle(()=>{u.a.render(Object(c["a"])(T,{isLocked:this.state.isLocked,isToggleable:"show"===this.props.page&&this.state.isMasterContent,onClick:this.toggleLocked}),this.toggleNode)})}renderBanner(){this.bannerNode||(this.bannerNode=C.setupRootNode())
u.a.render(Object(c["a"])(C,{isLocked:this.state.isLocked,itemLocks:this.state.itemLocks}),this.bannerNode)}render(){this.renderBanner()
this.renderLockToggle()}}}}])

//# sourceMappingURL=47-c-b79eb1aee8.js.map