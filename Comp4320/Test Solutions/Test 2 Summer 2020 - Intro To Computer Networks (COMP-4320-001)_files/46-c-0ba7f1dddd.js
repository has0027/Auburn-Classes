(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[46],{"08kA":function(e,n,t){"use strict"
var a=t("s4NR"),r=t("CxY0"),s=t("U6jy")
function o(e){return e&&e.rel}function c(e,n){function t(t){e[t]=s(n,{rel:t})}n.rel.split(/\s+/).forEach(t)
return e}function d(e,n){var t=n.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
t&&(e[t[1]]=t[2])
return e}function _(e){try{var n=e.match(/<?([^>]*)>(.*)/),t=n[1],o=n[2].split(";"),c=r.parse(t),_=a.parse(c.query)
o.shift()
var i=o.reduce(d,{})
i=s(_,i)
i.url=t
return i}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(_).filter(o).reduce(c,{})}},"4Ogu":function(e,n,t){"use strict"
t.d(n,"a",(function(){return l}))
var a=t("VTBJ")
var r=t("ouhR")
var s=t.n(r)
var o=t("zidk")
var c=t("08kA")
var d=t.n(c)
var _=t("etQE")
function i(e){let n=e.path,t=e.params
const a=s.a.param(t)
if(!a.length)return n
return"".concat(n,"?").concat(a)}async function l(e){let n=e.path,t=e.method,r=void 0===t?"GET":t,s=e.headers,c=void 0===s?{}:s,l=e.params,b=void 0===l?{}:l,u=e.body,g=e.fetchOpts,h=void 0===g?{}:g
const f=Object(a["a"])({},_["e"])
f.headers["X-CSRF-Token"]=Object(o["a"])("_csrf_token")
if(u&&"string"!==typeof u){u=JSON.stringify(u)
f.headers["Content-Type"]="application/json"}Object.assign(f.headers,c)
Object.assign(f,h)
const p=i({path:n,params:b})
const v=await fetch(p,Object(a["a"])({body:u,method:r},f))
if(!v.ok){const e=new Error("doFetchApi received a bad response: ".concat(v.status," ").concat(v.statusText))
e.response=v
throw e}const y=d()(v.headers.get("Link"))
const m=await v.text()
const j=m.length>0?JSON.parse(m):null
return{json:j,response:v,link:y}}},"6V2X":function(e,n,t){"use strict"
var a=t("An8g")
var r=t("Ff2n")
var s=t("pQTu")
var o=t("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"copy_to_64f8456b":"نسخ إلى..."},"cy":{"copy_to_64f8456b":"Copïo I..."},"da":{"copy_to_64f8456b":"Kopier til ..."},"da-x-k12":{"copy_to_64f8456b":"Kopier til ..."},"de":{"copy_to_64f8456b":"Kopieren nach ..."},"en-AU":{"copy_to_64f8456b":"Copy To..."},"en-AU-x-unimelb":{"copy_to_64f8456b":"Copy To..."},"en-CA":{"copy_to_64f8456b":"Copy To..."},"en-GB":{"copy_to_64f8456b":"Copy To..."},"en-GB-x-ukhe":{"copy_to_64f8456b":"Copy To..."},"es":{"copy_to_64f8456b":"Copiar a..."},"fi":{"copy_to_64f8456b":"Kopioi kohteeseen..."},"fr":{"copy_to_64f8456b":"Copier dans..."},"fr-CA":{"copy_to_64f8456b":"Copier à…"},"ht":{"copy_to_64f8456b":"Kopye Nan..."},"is":{"copy_to_64f8456b":"Afrita til…"},"it":{"copy_to_64f8456b":"Copia a..."},"ja":{"copy_to_64f8456b":"コピー先..."},"mi":{"copy_to_64f8456b":"Tārua kī ..."},"nb":{"copy_to_64f8456b":"Kopier til..."},"nb-x-k12":{"copy_to_64f8456b":"Kopier til..."},"nl":{"copy_to_64f8456b":"Kopiëren naar..."},"nn":{"copy_to_64f8456b":"Kopier til..."},"pl":{"copy_to_64f8456b":"Kopiuj do..."},"pt":{"copy_to_64f8456b":"Copiar para..."},"pt-BR":{"copy_to_64f8456b":"Cópia para..."},"ru":{"copy_to_64f8456b":"Копировать в..."},"sv":{"copy_to_64f8456b":"Kopiera till..."},"sv-x-k12":{"copy_to_64f8456b":"Kopiera till..."},"zh-Hans":{"copy_to_64f8456b":"复制到..."},"zh-Hant":{"copy_to_64f8456b":"複製到..."}}'))
t("jQeR")
t("0sPK")
var c=s["default"].scoped("direct_share_course_tray")
var d=t("q1tI")
var _=t.n(d)
var i=t("xGaD")
t.d(n,"a",(function(){return b}))
const l=Object(d["lazy"])(()=>Promise.all([t.e(6),t.e(7),t.e(8),t.e(12),t.e(149),t.e(683)]).then(t.bind(null,"mftS")))
function b(e){let n=e.sourceCourseId,t=e.contentSelection,s=e.onDismiss,o=Object(r["a"])(e,["sourceCourseId","contentSelection","onDismiss"])
return _.a.createElement(i["a"],Object.assign({label:c.t("Copy To..."),placement:"end",onDismiss:s,padding:"medium"},o),Object(a["a"])(l,{sourceCourseId:n,contentSelection:t,onCancel:s}))}},BxIY:function(e,n,t){"use strict"
var a=t("An8g")
var r=t("Ff2n")
var s=t("pQTu")
var o=t("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"close_d634289d":"إغلاق"},"cy":{"close_d634289d":"Cau"},"da":{"close_d634289d":"Luk"},"da-x-k12":{"close_d634289d":"Luk"},"de":{"close_d634289d":"Schließen"},"el":{"close_d634289d":"Κλείσιμο"},"en-AU":{"close_d634289d":"Close"},"en-AU-x-unimelb":{"close_d634289d":"Close"},"en-CA":{"close_d634289d":"Close"},"en-GB":{"close_d634289d":"Close"},"en-GB-x-lbs":{"close_d634289d":"Close"},"en-GB-x-ukhe":{"close_d634289d":"Close"},"es":{"close_d634289d":"Cerrar"},"fa":{"close_d634289d":"بستن"},"fi":{"close_d634289d":"Sulje"},"fr":{"close_d634289d":"Fermer"},"fr-CA":{"close_d634289d":"Fermer"},"he":{"close_d634289d":"סגירה"},"ht":{"close_d634289d":"Fèmen"},"hu":{"close_d634289d":"Bezárás"},"hy":{"close_d634289d":"Փակել"},"is":{"close_d634289d":"Loka"},"it":{"close_d634289d":"Chiudi"},"ja":{"close_d634289d":"閉じる"},"ko":{"close_d634289d":"닫기"},"mi":{"close_d634289d":"Katia"},"nb":{"close_d634289d":"Lukk"},"nb-x-k12":{"close_d634289d":"Lukk"},"nl":{"close_d634289d":"Sluiten"},"nn":{"close_d634289d":"Lukk"},"pl":{"close_d634289d":"Zamknij"},"pt":{"close_d634289d":"Fechar"},"pt-BR":{"close_d634289d":"Fechar"},"ru":{"close_d634289d":"Закрыть"},"sl":{"close_d634289d":"Zapri"},"sv":{"close_d634289d":"Stäng"},"sv-x-k12":{"close_d634289d":"Stäng"},"tr":{"close_d634289d":"Kapat"},"uk":{"close_d634289d":"Закрити"},"zh-Hans":{"close_d634289d":"关闭"},"zh-Hant":{"close_d634289d":"關閉"}}'))
t("jQeR")
t("0sPK")
var c=s["default"].scoped("canvas_modal")
var d=t("q1tI")
var _=t.n(d)
t("17x9")
var i=t("Mmr1")
var l=t("S4Kx")
var b=t("TstA")
var u=t("msMH")
var g=t("Dibh")
var h=t("p9+C")
var f=t("z3Sh")
var p=t("RtEy")
var v=t.n(p)
t.d(n,"a",(function(){return y}))
y.defaultProps={padding:"small",errorImageUrl:v.a,footer:null,title:null,closeButtonSize:"small"}
function y(e){let n=e.padding,t=e.errorSubject,s=e.errorCategory,o=e.errorImageUrl,d=e.label,p=e.title,v=e.onDismiss,y=e.children,m=e.footer,j=e.closeButtonSize,k=Object(r["a"])(e,["padding","errorSubject","errorCategory","errorImageUrl","label","title","onDismiss","children","footer","closeButtonSize"])
null==p&&(p=d)
return _.a.createElement(g["a"],Object.assign({label:d,onDismiss:v},k),Object(a["a"])(g["a"].Header,{},void 0,Object(a["a"])(b["a"],{},void 0,Object(a["a"])(b["a"].Item,{grow:true},void 0,Object(a["a"])(u["a"],{},void 0,p)),Object(a["a"])(b["a"].Item,{},void 0,Object(a["a"])(i["a"],{onClick:v,size:j},void 0,c.t("Close"))))),Object(a["a"])(g["a"].Body,{padding:n},void 0,Object(a["a"])(l["a"],{as:"div",height:"100%"},void 0,Object(a["a"])(h["a"],{errorComponent:Object(a["a"])(f["a"],{imageUrl:o,errorSubject:t,errorCategory:s})},void 0,y))),m&&Object(a["a"])(g["a"].Footer,{},void 0,"function"===typeof m?m():m))}},U6jy:function(e,n){e.exports=a
var t=Object.prototype.hasOwnProperty
function a(){var e={}
for(var n=0;n<arguments.length;n++){var a=arguments[n]
for(var r in a)t.call(a,r)&&(e[r]=a[r])}return e}},ppA4:function(e,n,t){"use strict"
var a=t("An8g")
var r=t("VTBJ")
var s=t("ODXe")
var o=t("Ff2n")
var c=t("pQTu")
var d=t("m0r6")
Object(d["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","content_share_started_successfully_2c37fb79":"تم بدء مشاركة المحتوى بنجاح","error_starting_content_share_18fb1532":"حدث خطأ أثناء بدء مشاركة المحتوى","loading_bde52856":"يتم الآن التحميل...","send_e3bd0ed0":"إرسال","send_to_b940900a":"إرسال إلى ...","starting_content_share_2d8c2999":"جارٍ بدء مشاركة المحتوى"},"cy":{"cancel_caeb1e68":"Canslo","content_share_started_successfully_2c37fb79":"Rhannu cynnwys wedi dechrau\'n llwyddiannus","error_starting_content_share_18fb1532":"Gwall wrth ddechrau rhannu cynnwys","loading_bde52856":"Wrthi’n llwytho","send_e3bd0ed0":"Anfon","send_to_b940900a":"Anfon At...","starting_content_share_2d8c2999":"Dechrau rhannu cynnwys"},"da":{"cancel_caeb1e68":"Annuller","content_share_started_successfully_2c37fb79":"Indholdsdelingen blev påbegyndt","error_starting_content_share_18fb1532":"Fejl ved påbegyndelse af indholdsdeling","loading_bde52856":"Indlæser","send_e3bd0ed0":"Send","send_to_b940900a":"Send til ...","starting_content_share_2d8c2999":"Starter indholdsdeling"},"da-x-k12":{"cancel_caeb1e68":"Annuller","content_share_started_successfully_2c37fb79":"Indholdsdelingen blev påbegyndt","error_starting_content_share_18fb1532":"Fejl ved påbegyndelse af indholdsdeling","loading_bde52856":"Indlæser","send_e3bd0ed0":"Send","send_to_b940900a":"Send til ...","starting_content_share_2d8c2999":"Starter indholdsdeling"},"de":{"cancel_caeb1e68":"Abbrechen","content_share_started_successfully_2c37fb79":"Inhaltsfreigabe erfolgreich gestartet","error_starting_content_share_18fb1532":"Fehler beim Starten der Inhaltsfreigabe","loading_bde52856":"Wird geladen","send_e3bd0ed0":"Senden","send_to_b940900a":"Senden an ...","starting_content_share_2d8c2999":"Starten der Inhaltsfreigabe"},"el":{"cancel_caeb1e68":"Ακύρωση","loading_bde52856":"Φόρτωση","send_e3bd0ed0":"Αποστολή"},"en-AU":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-CA":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-GB":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","loading_bde52856":"Loading","send_e3bd0ed0":"Send"},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","content_share_started_successfully_2c37fb79":"Content share started successfully","error_starting_content_share_18fb1532":"Error starting content share","loading_bde52856":"Loading","send_e3bd0ed0":"Send","send_to_b940900a":"Send To...","starting_content_share_2d8c2999":"Starting content share"},"es":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"El contenido comenzó a compartirse correctamente","error_starting_content_share_18fb1532":"Ocurrió un error al comenzar a compartir contenido","loading_bde52856":"Cargando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar a...","starting_content_share_2d8c2999":"Comenzando a compartir contenido"},"fa":{"cancel_caeb1e68":"لغو","content_share_started_successfully_2c37fb79":"اشتراک محتوای با موفقیت شروع شد","error_starting_content_share_18fb1532":"خطا در شروع به اشتراک گذاری محتوا","loading_bde52856":"در حال بارگذاری","send_e3bd0ed0":"ارسال","starting_content_share_2d8c2999":"شروع به اشتراک گذاری محتوای"},"fi":{"cancel_caeb1e68":"Peruuta","content_share_started_successfully_2c37fb79":"Sisällön jako aloitettiin onnistuneesti","error_starting_content_share_18fb1532":"Virhe sisällön jaon aloittamisessa","loading_bde52856":"Ladataan","send_e3bd0ed0":"Lähetä","send_to_b940900a":"Lähetä kohteeseen...","starting_content_share_2d8c2999":"Sisällön jako aloitetaan"},"fr":{"cancel_caeb1e68":"Annuler","content_share_started_successfully_2c37fb79":"Le partage de contenu a été lancé avec succès","error_starting_content_share_18fb1532":"Erreur lors du lancement du partage de contenu","loading_bde52856":"En cours de chargement","send_e3bd0ed0":"Envoyer","send_to_b940900a":"Envoyer à...","starting_content_share_2d8c2999":"Lancement du partage de contenu"},"fr-CA":{"cancel_caeb1e68":"Annuler","content_share_started_successfully_2c37fb79":"Le partage de contenu a démarré avec succès","error_starting_content_share_18fb1532":"Une erreur est survenue lors du démarrage du partage de contenu","loading_bde52856":"Chargement","send_e3bd0ed0":"Envoyer","send_to_b940900a":"Envoyer à…","starting_content_share_2d8c2999":"Démarrage du partage de contenu"},"he":{"cancel_caeb1e68":"ביטול","loading_bde52856":"טוען","send_e3bd0ed0":"שליחה"},"ht":{"cancel_caeb1e68":"Anile","content_share_started_successfully_2c37fb79":"Pataj kontni kòmanse ak siksè","error_starting_content_share_18fb1532":"Erè nan demaraj pataj kontni","loading_bde52856":"Chajman","send_e3bd0ed0":"Voye","send_to_b940900a":"Voye Bay...","starting_content_share_2d8c2999":"Demaraj pataj kontni"},"hu":{"cancel_caeb1e68":"Mégse","content_share_started_successfully_2c37fb79":"Tartalom megosztás sikeresen elindult","error_starting_content_share_18fb1532":"Tartalom megosztás elindítása nem sikerült","loading_bde52856":"Töltődik","send_e3bd0ed0":"Küldés","starting_content_share_2d8c2999":"Tartalom megosztás indítása"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","loading_bde52856":"Բեռնում է","send_e3bd0ed0":"Ուղարկել"},"is":{"cancel_caeb1e68":"Hætta við","content_share_started_successfully_2c37fb79":"Efnisdeiling hófst giftusamlega","error_starting_content_share_18fb1532":"Villa við að byrja efnisdeilingu","loading_bde52856":"Sæki","send_e3bd0ed0":"Senda","send_to_b940900a":"Senda til…","starting_content_share_2d8c2999":"Byrja efnisdeilingu"},"it":{"cancel_caeb1e68":"Annulla","content_share_started_successfully_2c37fb79":"La condivisione dei contenuti è iniziata con successo","error_starting_content_share_18fb1532":"Errore nell’avvio della condivisione dei contenuti","loading_bde52856":"Caricamento in corso","send_e3bd0ed0":"Invia","send_to_b940900a":"Invia a...","starting_content_share_2d8c2999":"Inizio della condivisione dei contenuti"},"ja":{"cancel_caeb1e68":"キャンセル","content_share_started_successfully_2c37fb79":"コンテンツの共有が正常に開始されました","error_starting_content_share_18fb1532":"コンテンツの共有開始時にエラー","loading_bde52856":"読み込み中","send_e3bd0ed0":"送信","send_to_b940900a":"送信先...","starting_content_share_2d8c2999":"コンテンツの共有開始中"},"ko":{"cancel_caeb1e68":"취소","send_e3bd0ed0":"보내기"},"mi":{"cancel_caeb1e68":"Whakakore","content_share_started_successfully_2c37fb79":"Te tuari ihirangi i timata pai","error_starting_content_share_18fb1532":"He hapa i te wā e timata ana te tuari ihirangi","loading_bde52856":"E tukuake ana","send_e3bd0ed0":"Tukua","send_to_b940900a":"Tukua ki ...","starting_content_share_2d8c2999":"E timata tuari ihirangi"},"nb":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innholdsdeling startet vellykket","error_starting_content_share_18fb1532":"Avvik under start av innholdsdeling","loading_bde52856":"Laster","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Starter innholdsdeling"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innholdsdeling startet vellykket","error_starting_content_share_18fb1532":"Avvik under start av innholdsdeling","loading_bde52856":"Laster","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Starter innholdsdeling"},"nl":{"cancel_caeb1e68":"Annuleren","content_share_started_successfully_2c37fb79":"Contentshare is gestart","error_starting_content_share_18fb1532":"Fout bij starten van contentshare","loading_bde52856":"Bezig met laden...","send_e3bd0ed0":"Versturen","send_to_b940900a":"Verzenden naar...","starting_content_share_2d8c2999":"Contentshare starten"},"nn":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innhaldsdeling er starta","error_starting_content_share_18fb1532":"Det oppstod ein feil under oppstart av innhaldsdeling","loading_bde52856":"Lastar","send_e3bd0ed0":"Send","send_to_b940900a":"Send til...","starting_content_share_2d8c2999":"Startar innhaldsdeling"},"pl":{"cancel_caeb1e68":"Anuluj","content_share_started_successfully_2c37fb79":"Pomyślnie rozpoczęto udostępnianie zawartości","error_starting_content_share_18fb1532":"Błąd podczas udostępniania zawartości","loading_bde52856":"Trwa ładowanie","send_e3bd0ed0":"Wyślij","send_to_b940900a":"Wyślij do...","starting_content_share_2d8c2999":"Rozpoczynanie udostępniania zawartości"},"pt":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"O partilhamento de conteúdo foi iniciado com sucesso","error_starting_content_share_18fb1532":"Erro ao iniciar o partilhamento de conteúdo","loading_bde52856":"Carregando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar para...","starting_content_share_2d8c2999":"A iniciar o partilhamento de conteúdo"},"pt-BR":{"cancel_caeb1e68":"Cancelar","content_share_started_successfully_2c37fb79":"Compartilhamento de conteúdo iniciado com sucesso","error_starting_content_share_18fb1532":"Erro ao iniciar compartilhamento de conteúdo","loading_bde52856":"Carregando","send_e3bd0ed0":"Enviar","send_to_b940900a":"Enviar para...","starting_content_share_2d8c2999":"Iniciando compartilhamento de conteúdo"},"ru":{"cancel_caeb1e68":"Отменить","content_share_started_successfully_2c37fb79":"Общий доступ к контенту успешно запущен","error_starting_content_share_18fb1532":"Ошибка запуска общего доступа к контенту","loading_bde52856":"Загрузка","send_e3bd0ed0":"Отправить","send_to_b940900a":"Отправить в...","starting_content_share_2d8c2999":"Запуск общего доступа к контенту"},"sl":{"cancel_caeb1e68":"Prekliči","loading_bde52856":"Nalaganje","send_e3bd0ed0":"Pošlji"},"sv":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innehållsdelning startades","error_starting_content_share_18fb1532":"Fel vid start av innehållsdelning","loading_bde52856":"Laddar","send_e3bd0ed0":"Skicka","send_to_b940900a":"Skicka till...","starting_content_share_2d8c2999":"Startar innehållsdelning"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","content_share_started_successfully_2c37fb79":"Innehållsdelning startades","error_starting_content_share_18fb1532":"Fel vid start av innehållsdelning","loading_bde52856":"Laddar","send_e3bd0ed0":"Skicka","send_to_b940900a":"Skicka till...","starting_content_share_2d8c2999":"Startar innehållsdelning"},"tr":{"cancel_caeb1e68":"İptal","content_share_started_successfully_2c37fb79":"İçerik paylaşımı başarılı bir şekilde başlatıldı","loading_bde52856":"Yükleniyor","send_e3bd0ed0":"Gönder"},"uk":{"cancel_caeb1e68":"Скасувати","loading_bde52856":"Завантаження","send_e3bd0ed0":"Надіслати"},"zh-Hans":{"cancel_caeb1e68":"取消","content_share_started_successfully_2c37fb79":"内容共享已成功启动","error_starting_content_share_18fb1532":"启动内容共享出错","loading_bde52856":"加载","send_e3bd0ed0":"发送","send_to_b940900a":"发送至...","starting_content_share_2d8c2999":"启动内容共享"},"zh-Hant":{"cancel_caeb1e68":"取消","content_share_started_successfully_2c37fb79":"內容共用已成功開始","error_starting_content_share_18fb1532":"開始內容共用發生錯誤","loading_bde52856":"正在載入","send_e3bd0ed0":"發送","send_to_b940900a":"傳送到...","starting_content_share_2d8c2999":"開始內容共用"}}'))
t("jQeR")
t("0sPK")
var _=c["default"].scoped("direct_share_user_modal")
var i=t("q1tI")
var l=t.n(i)
t("17x9")
var b=t("L+/K")
var u=t("Xx/m")
var g=t("uSnb")
var h=t("S4Kx")
var f=t("BxIY")
t("qBwj")
var p=t("dqQ7")
var v=t("4Ogu")
t.d(n,"a",(function(){return j}))
const y=Object(i["lazy"])(()=>Promise.all([t.e(6),t.e(7),t.e(8),t.e(12),t.e(655)]).then(t.bind(null,"FB/m")))
var m=Object(a["a"])(g["a"],{renderTitle:"",size:"x-small"})
function j(e){let n=e.contentShare,t=e.courseId,c=Object(o["a"])(e,["contentShare","courseId"])
const d=Object(i["useState"])([]),j=Object(s["a"])(d,2),k=j[0],S=j[1]
const C=Object(i["useState"])(null),O=Object(s["a"])(C,2),A=O[0],x=O[1]
const z=Object(i["useRef"])(c.open)
function L(){S([])
x(null)}function E(e){k.find(n=>n.id===e.id)||S(k.concat([e]))}function T(e){S(k.filter(n=>n.id!==e.id))}function I(){return Object(v["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:Object(r["a"])({},n,{receiver_ids:k.map(e=>e.id)})})}function B(){x("info")
I().then(w).catch(e=>{console.error(e)
e.response&&console.error(e.response)
x("error")})}function w(){Object(p["c"])(_.t("Content share started successfully"))()
c.onDismiss()}function R(){return l.a.createElement(l.a.Fragment,null,Object(a["a"])(u["a"],{onClick:c.onDismiss},void 0,_.t("Cancel")),Object(a["a"])(u["a"],{disabled:0===k.length||"info"===A,variant:"primary",margin:"0 0 0 x-small",onClick:B},void 0,_.t("Send")))}const K=Object(a["a"])(h["a"],{as:"div",textAlign:"center"},void 0,Object(a["a"])(g["a"],{renderTitle:_.t("Loading")}))
if(c.open!==z.current){z.current=c.open
L()}let F=""
"info"===A?F=_.t("Starting content share"):"error"===A&&(F=_.t("Error starting content share"))
const U=F?Object(a["a"])(b["a"],{variant:A},void 0,Object(a["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,F),"info"===A?m:null):null
return l.a.createElement(f["a"],Object.assign({label:_.t("Send To..."),size:"medium"},c,{footer:Object(a["a"])(R,{})}),Object(a["a"])(i["Suspense"],{fallback:K},void 0,U,Object(a["a"])(y,{courseId:t,selectedUsers:k,onUserSelected:E,onUserRemoved:T})))}},qBwj:function(e,n,t){"use strict"
var a=t("17x9")
var r=t("EUQ6")
const s=Object(a["shape"])({id:a["string"],display_name:a["string"],url:a["string"]})
var o=s
const c=Object(a["shape"])({id:a["string"].isRequired,progress_url:a["string"],user_id:a["string"],workflow_state:Object(a["oneOf"])(["created","exporting","exported","failed"]),attachment:o})
var d=c
const _=["assignment","discussion_topic","page","quiz","module","module_item"]
Object(a["shape"])({id:a["string"].isRequired,name:a["string"].isRequired,content_type:Object(a["oneOf"])(_).isRequired,created_at:a["string"].isRequired,updated_at:a["string"].isRequired,read_state:a["string"].isRequired,sender:r["b"].isRequired,content_export:d})},xGaD:function(e,n,t){"use strict"
var a=t("An8g")
var r=t("Ff2n")
var s=t("pQTu")
var o=t("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"loading_25990131":"جارٍ التحميل..."},"cy":{"loading_25990131":"Wrthi’n llwytho..."},"da":{"loading_25990131":"Indlæser ..."},"da-x-k12":{"loading_25990131":"Indlæser ..."},"de":{"loading_25990131":"Wird geladen ..."},"el":{"loading_25990131":"Φόρτωση..."},"en-AU":{"loading_25990131":"Loading..."},"en-AU-x-unimelb":{"loading_25990131":"Loading..."},"en-CA":{"loading_25990131":"Loading..."},"en-GB":{"loading_25990131":"Loading..."},"en-GB-x-lbs":{"loading_25990131":"Loading..."},"en-GB-x-ukhe":{"loading_25990131":"Loading..."},"es":{"loading_25990131":"Cargando..."},"fa":{"loading_25990131":"در حال بارگذاری..."},"fi":{"loading_25990131":"Ladataan..."},"fr":{"loading_25990131":"Chargement..."},"fr-CA":{"loading_25990131":"En cours de chargement..."},"he":{"loading_25990131":"טוען..."},"ht":{"loading_25990131":"Chajman..."},"hu":{"loading_25990131":"Töltődik..."},"hy":{"loading_25990131":"Բեռնում է..."},"is":{"loading_25990131":"Hleð inn..."},"it":{"loading_25990131":"Caricamento in corso..."},"ja":{"loading_25990131":"読み込み中・・・"},"ko":{"loading_25990131":"로드하는 중..."},"mi":{"loading_25990131":"E uta ana ...."},"nb":{"loading_25990131":"Laster..."},"nb-x-k12":{"loading_25990131":"Laster..."},"nl":{"loading_25990131":"Bezig met laden..."},"nn":{"loading_25990131":"Lastar..."},"pl":{"loading_25990131":"Wczytywanie..."},"pt":{"loading_25990131":"A carregar..."},"pt-BR":{"loading_25990131":"Carregando..."},"ru":{"loading_25990131":"Выполняется загрузка..."},"sl":{"loading_25990131":"Nalaganje ..."},"sv":{"loading_25990131":"Läser in ..."},"sv-x-k12":{"loading_25990131":"Läser in ..."},"tr":{"loading_25990131":"Yükleniyor..."},"uk":{"loading_25990131":"Завантаження..."},"zh-Hans":{"loading_25990131":"加载中……"},"zh-Hant":{"loading_25990131":"正在載入……"}}'))
t("jQeR")
t("0sPK")
var c=s["default"].scoped("canvas_lazy_tray")
var d=t("q1tI")
var _=t.n(d)
var i=t("eCn1")
var l=t("uSnb")
var b=t("S4Kx")
t.d(n,"a",(function(){return u}))
function u(e){let n=e.children,t=Object(r["a"])(e,["children"])
const s=Object(a["a"])(b["a"],{as:"div",textAlign:"center"},void 0,Object(a["a"])(l["a"],{renderTitle:c.t("Loading...")}))
return _.a.createElement(i["a"],t,Object(a["a"])(d["Suspense"],{fallback:s},void 0,n))}}}])

//# sourceMappingURL=46-c-0ba7f1dddd.js.map