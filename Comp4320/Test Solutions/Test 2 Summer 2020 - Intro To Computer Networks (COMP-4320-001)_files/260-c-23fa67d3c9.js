(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[260],{"EvX+":function(e,n,s){"use strict"
var t=s("HIhM")
const a={}
const o={getCssVariant(){const e=window.ENV.use_responsive_layout?"responsive_layout":"new_styles"
const n=window.ENV.use_high_contrast?"high_contrast":"normal_contrast"
const s=Object(t["c"])()?"_rtl":""
return"".concat(e,"_").concat(n).concat(s)},urlFor(e,n){let s=n.combinedChecksum,t=n.includesNoVariables
const a=t?"no_variables":o.getCssVariant()
return[window.ENV.ASSET_HOST||"","dist","brandable_css",a,"".concat(e,"-").concat(s,".css")].join("/")},loadStylesheet(e,n){if(e in a)return
const s=document.createElement("link")
s.rel="stylesheet"
s.href=o.urlFor(e,n)
s.setAttribute("data-loaded-by-brandableCss",true)
document.head.appendChild(s)}}
n["a"]=o},VS9R:function(e,n,s){"use strict"
var t=s("pQTu")
var a=s("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"message_sent_5e328899":"تم إرسال الرسالة!","message_students_37ba5dd5":"مراسلة الطلاب","message_students_for_context_ee62ff92":"مراسلة الطلاب لـ %{context}"},"cy":{"message_sent_5e328899":"Mae’r neges wedi’i hanfon!","message_students_37ba5dd5":"Anfon neges at fyfyrwyr","message_students_for_context_ee62ff92":"Anfon neges at fyfyrwyr am %{context}"},"da":{"message_sent_5e328899":"Besked sendt!","message_students_37ba5dd5":"Send besked til studerende","message_students_for_context_ee62ff92":"Send besked til studerende for %{context}"},"da-x-k12":{"message_sent_5e328899":"Besked sendt!","message_students_37ba5dd5":"Send besked til elever","message_students_for_context_ee62ff92":"Send besked til elever for %{context}"},"de":{"message_sent_5e328899":"Nachricht wurde gesendet.","message_students_37ba5dd5":"Studenten benachrichtigen","message_students_for_context_ee62ff92":"Studenten benachrichtigen wegen %{context}"},"el":{"message_sent_5e328899":"Μήνυμα Εστάλη!","message_students_37ba5dd5":"Αποστολή μηνύματος στους μαθητές","message_students_for_context_ee62ff92":"Αποστολή μηνύματος στους σπουδαστές για %{context}"},"en-AU":{"message_sent_5e328899":"Message Sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-AU-x-unimelb":{"message_sent_5e328899":"Message Sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-CA":{"message_sent_5e328899":"Message Sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-GB":{"message_sent_5e328899":"Message sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"en-GB-x-ukhe":{"message_sent_5e328899":"Message sent!","message_students_37ba5dd5":"Message students","message_students_for_context_ee62ff92":"Message students for %{context}"},"es":{"message_sent_5e328899":"¡Mensaje enviado!","message_students_37ba5dd5":"Mensaje a estudiantes","message_students_for_context_ee62ff92":"Mensaje a estudiantes para %{context}"},"fa":{"message_sent_5e328899":"پیام ارسال شد!","message_students_37ba5dd5":"ارسال پیام برای دانشجویان","message_students_for_context_ee62ff92":"ارسال پیام برای دانشجویان برای %{context}"},"fi":{"message_sent_5e328899":"Viesti lähetetty!","message_students_37ba5dd5":"Lähetä viesti opiskelijoille","message_students_for_context_ee62ff92":"Lähetä viesti opiskelijoille tehtävästä %{context}"},"fr":{"message_sent_5e328899":"Message envoyé !","message_students_37ba5dd5":"Envoyer un message aux étudiants","message_students_for_context_ee62ff92":"Envoyer un message aux étudiants pour %{context}"},"fr-CA":{"message_sent_5e328899":"Message envoyé!","message_students_37ba5dd5":"Envoyer un message aux étudiants","message_students_for_context_ee62ff92":"Envoyer un message aux étudiants pour %{context}"},"he":{"message_sent_5e328899":"הודעה נשלחה!","message_students_37ba5dd5":"הודעות לתלמידים","message_students_for_context_ee62ff92":"הודע/י לתלמידים על %{context}"},"ht":{"message_sent_5e328899":"Mesaj Ale!","message_students_37ba5dd5":"Voye Mesaj bay Elèv","message_students_for_context_ee62ff92":"Voye Mesaj bay Elèv pou %{context}"},"hu":{"message_sent_5e328899":"Az üzenet elküldve!","message_students_37ba5dd5":"Üzenet a hallgatóknak","message_students_for_context_ee62ff92":"Üzenet a hallgatóknak: %{context}"},"hy":{"message_sent_5e328899":"Հաղորդագրությունն ուղարկված է:","message_students_37ba5dd5":"Հաղորդագրություն ուղարկել ունկնդիրներին","message_students_for_context_ee62ff92":"Հաղորդագրություն ուղարկել ունկնդիրներին  %{context} մասին"},"is":{"message_sent_5e328899":"Skilaboð send!","message_students_37ba5dd5":"Skilaboð til nemenda","message_students_for_context_ee62ff92":"Skilaboð til nemenda fyrir %{context}"},"it":{"message_sent_5e328899":"Messaggio inviato.","message_students_37ba5dd5":"Invia messaggio a studenti","message_students_for_context_ee62ff92":"Invia messaggio agli studenti per %{context}"},"ja":{"message_sent_5e328899":"メッセージが送信されました!","message_students_37ba5dd5":"受講生にメッセージを送る","message_students_for_context_ee62ff92":"%{context}の受講生にメッセージを送る"},"ko":{"message_sent_5e328899":"메시지를 보냈습니다!","message_students_37ba5dd5":"학생에게 메시지 보내기","message_students_for_context_ee62ff92":"학생에게 %{context}에 대한 메시지 보내기"},"mi":{"message_sent_5e328899":"Tukua Karere!","message_students_37ba5dd5":"ngā ākonga Karere","message_students_for_context_ee62ff92":"Ngā ākonga Karere mo %{context}"},"nb":{"message_sent_5e328899":"Melding sendt!","message_students_37ba5dd5":"Gi melding til studentene","message_students_for_context_ee62ff92":"Gi melding til studentene om %{context}"},"nb-x-k12":{"message_sent_5e328899":"Melding sendt!","message_students_37ba5dd5":"Gi melding til elevene","message_students_for_context_ee62ff92":"Gi melding til elevene om %{context}"},"nl":{"message_sent_5e328899":"Bericht verzonden!","message_students_37ba5dd5":"Bericht naar cursisten","message_students_for_context_ee62ff92":"Bericht naar cursisten voor %{context}"},"nn":{"message_sent_5e328899":"Melding er send.","message_students_37ba5dd5":"Send melding til studentane","message_students_for_context_ee62ff92":"Gi melding til studentane om %{context}"},"pl":{"message_sent_5e328899":"Wiadomość wysłana!","message_students_37ba5dd5":"Wiadomość dla uczestników","message_students_for_context_ee62ff92":"Wiadomość dla uczestników dot. %{context}"},"pt":{"message_sent_5e328899":"Mensagem enviada!","message_students_37ba5dd5":"Enviar mensagem a alunos","message_students_for_context_ee62ff92":"Mensagem a alunos para %{context}"},"pt-BR":{"message_sent_5e328899":"Mensagem enviada!","message_students_37ba5dd5":"Enviar mensagem de alunos","message_students_for_context_ee62ff92":"Enviar mensagem aos alunos para %{context}"},"ru":{"message_sent_5e328899":"Сообщение отправлено!","message_students_37ba5dd5":"Отправить сообщения студентам","message_students_for_context_ee62ff92":"Отправить сообщение студентам для %{context}"},"sv":{"message_sent_5e328899":"Meddelandet har skickats!","message_students_37ba5dd5":"Meddela studenter","message_students_for_context_ee62ff92":"Meddela studenter om %{context}"},"sv-x-k12":{"message_sent_5e328899":"Meddelandet har skickats!","message_students_37ba5dd5":"Meddela elever","message_students_for_context_ee62ff92":"Meddela elever som %{context}"},"tr":{"message_sent_5e328899":"Mesaj Gönderildi!","message_students_37ba5dd5":"Öğrencilere Mesaj Gönder","message_students_for_context_ee62ff92":"%{context} için Öğrencilere Mesaj"},"zh-Hans":{"message_sent_5e328899":"消息已发送！","message_students_37ba5dd5":"向学生发送消息","message_students_for_context_ee62ff92":"给学生发送%{context}的消息"},"zh-Hant":{"message_sent_5e328899":"訊息已傳送！","message_students_37ba5dd5":"通知學生","message_students_for_context_ee62ff92":"針對 %{context} 通知學生"}}'))
s("jQeR")
s("0sPK")
var o=t["default"].scoped("viewsMessageStudentsDialog")
var i=s("ouhR")
var _=s.n(i)
var c=s("faZh")
var r=s("3O+N")
var d=s.n(r)
s("DfGn")
var p=d.a.default
var g=p.template,l=p.templates=p.templates||{}
var u="-messageStudentsWhoRecipientList"
l[u]=g((function(e,n,s,t,a){this.compilerInfo=[4,">= 1.0.0"]
s=this.merge(s,e.helpers)
a=a||{}
var o,i="",_="function",c=this.escapeExpression,r=this
function d(e,n){var t,a,o=""
o+='\n  <span class="label">\n    '
if(a=s.short_name)t=a.call(e,{hash:{},data:n})
else{a=e&&e.short_name
t=typeof a===_?a.call(e,{hash:{},data:n}):a}o+=c(t)+"\n  </span>\n"
return o}o=s.each.call(n,n&&n.recipients,{hash:{},inverse:r.noop,fn:r.program(1,d,a),data:a});(o||0===o)&&(i+=o)
i+="\n"
return i}))
p.registerPartial("messageStudentsWhoRecipientList",l["-messageStudentsWhoRecipientList"])
var m=l[u]
Object(a["a"])(JSON.parse('{"ar":{"cancel_caeb1e68":"إلغاء","recipients_a69b5e55":"المستلمون:","send_message_6ccc90e8":"إرسال رسالة","sending_bf324366":"جارٍ الإرسال...","sent_f4ee89ec":"تم الإرسال!"},"cy":{"cancel_caeb1e68":"Canslo","recipients_a69b5e55":"Derbynwyr:","send_message_6ccc90e8":"Anfon Neges","sending_bf324366":"Wrthi’n anfon...","sent_f4ee89ec":"Wedi anfon!"},"da":{"cancel_caeb1e68":"Annuller","recipients_a69b5e55":"Modtagere:","send_message_6ccc90e8":"Send besked","sending_bf324366":"Sender ...","sent_f4ee89ec":"Sendt!"},"da-x-k12":{"cancel_caeb1e68":"Annuller","recipients_a69b5e55":"Modtagere:","send_message_6ccc90e8":"Send besked","sending_bf324366":"Sender ...","sent_f4ee89ec":"Sendt!"},"de":{"cancel_caeb1e68":"Abbrechen","recipients_a69b5e55":"Empfänger:","send_message_6ccc90e8":"Nachricht senden","sending_bf324366":"Wird gesendet ...","sent_f4ee89ec":"Gesendet"},"el":{"cancel_caeb1e68":"Ακύρωση","recipients_a69b5e55":"Παραλήπτες:","sent_f4ee89ec":"Εστάλη!"},"en-AU":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending...","sent_f4ee89ec":"Sent!"},"en-AU-x-unimelb":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending...","sent_f4ee89ec":"Sent!"},"en-CA":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send Message","sending_bf324366":"Sending...","sent_f4ee89ec":"Sent!"},"en-GB":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send message","sending_bf324366":"sending...","sent_f4ee89ec":"Sent!"},"en-GB-x-lbs":{"cancel_caeb1e68":"Cancel","send_message_6ccc90e8":"Send message","sending_bf324366":"sending..."},"en-GB-x-ukhe":{"cancel_caeb1e68":"Cancel","recipients_a69b5e55":"Recipients:","send_message_6ccc90e8":"Send message","sending_bf324366":"sending...","sent_f4ee89ec":"Sent!"},"es":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Destinatarios:","send_message_6ccc90e8":"Enviar mensaje","sending_bf324366":"Enviando...","sent_f4ee89ec":"¡Enviado!"},"fa":{"cancel_caeb1e68":"لغو","recipients_a69b5e55":"گیرنده ها:","send_message_6ccc90e8":"ارسال پیام","sending_bf324366":"در حال ارسال...","sent_f4ee89ec":"ارسال شد!"},"fi":{"cancel_caeb1e68":"Peruuta","recipients_a69b5e55":"Vastaanottajat:","send_message_6ccc90e8":"Lähetä viesti","sending_bf324366":"Lähetetään...","sent_f4ee89ec":"Lähetetty!"},"fr":{"cancel_caeb1e68":"Annuler","recipients_a69b5e55":"Destinataires :","send_message_6ccc90e8":"Envoyer message","sending_bf324366":"Envoi en cours...","sent_f4ee89ec":"Envoyé !"},"fr-CA":{"cancel_caeb1e68":"Annuler","recipients_a69b5e55":"Destinataires :","send_message_6ccc90e8":"Envoyer un message","sending_bf324366":"Envoi en cours...","sent_f4ee89ec":"Envoyé!"},"he":{"cancel_caeb1e68":"ביטול","recipients_a69b5e55":"נמענים:","send_message_6ccc90e8":"שליחת הודעה","sent_f4ee89ec":"נשלח!"},"ht":{"cancel_caeb1e68":"Anile","recipients_a69b5e55":"Destinatè:","send_message_6ccc90e8":"Voye Mesaj","sending_bf324366":"Voye...","sent_f4ee89ec":"Voye!"},"hu":{"cancel_caeb1e68":"Mégse","recipients_a69b5e55":"Címzettek:","send_message_6ccc90e8":"Üzenetküldés","sending_bf324366":"Küldés...","sent_f4ee89ec":"Elküldve!"},"hy":{"cancel_caeb1e68":"Չեղյալ համարել","recipients_a69b5e55":"Ստացողներ՝","sent_f4ee89ec":"Ուղարկվել է"},"is":{"cancel_caeb1e68":"Hætta við","recipients_a69b5e55":"Viðtakendur:","send_message_6ccc90e8":"Senda skilaboð","sending_bf324366":"Sendi...","sent_f4ee89ec":"Sent!"},"it":{"cancel_caeb1e68":"Annulla","recipients_a69b5e55":"Destinatari:","send_message_6ccc90e8":"Invia messaggio","sending_bf324366":"Invio in corso...","sent_f4ee89ec":"Inviato."},"ja":{"cancel_caeb1e68":"キャンセル","recipients_a69b5e55":"受信者:","send_message_6ccc90e8":"メッセージを送信","sending_bf324366":"送信しています...","sent_f4ee89ec":"送信されました!"},"ko":{"cancel_caeb1e68":"취소","recipients_a69b5e55":"수신인:","sent_f4ee89ec":"전송했습니다!"},"mi":{"cancel_caeb1e68":"Whakakore","recipients_a69b5e55":"Kaiwhiwhi:","send_message_6ccc90e8":"Tukua Karere","sending_bf324366":"Tuku ana ...","sent_f4ee89ec":"Tono!"},"nb":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakere:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Sendt!"},"nb-x-k12":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakere:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Sendt!"},"nl":{"cancel_caeb1e68":"Annuleren","recipients_a69b5e55":"Geadresseerden:","send_message_6ccc90e8":"Bericht versturen","sending_bf324366":"Bezig met verzenden...","sent_f4ee89ec":"Verstuurd!"},"nn":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottakarar:","send_message_6ccc90e8":"Send melding","sending_bf324366":"Sender...","sent_f4ee89ec":"Send."},"pl":{"cancel_caeb1e68":"Anuluj","recipients_a69b5e55":"Odbiorcy:","send_message_6ccc90e8":"Wyślij wiadomość","sending_bf324366":"Trwa wysyłanie...","sent_f4ee89ec":"Wysłano!"},"pt":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Destinatários:","send_message_6ccc90e8":"Enviar Mensagem","sending_bf324366":"A enviar...","sent_f4ee89ec":"Enviado!"},"pt-BR":{"cancel_caeb1e68":"Cancelar","recipients_a69b5e55":"Recipientes:","send_message_6ccc90e8":"Enviar mensagem","sending_bf324366":"Enviando...","sent_f4ee89ec":"Enviado!"},"ru":{"cancel_caeb1e68":"Отменить","recipients_a69b5e55":"Получатели:","send_message_6ccc90e8":"Отправить сообщение","sending_bf324366":"Отправка...","sent_f4ee89ec":"Отправлено!"},"sl":{"cancel_caeb1e68":"Prekliči","send_message_6ccc90e8":"Pošlji sporočilo","sending_bf324366":"Pošiljanje ..."},"sv":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottagare:","send_message_6ccc90e8":"Skicka meddelande","sending_bf324366":"Skickar ...","sent_f4ee89ec":"Skickat!"},"sv-x-k12":{"cancel_caeb1e68":"Avbryt","recipients_a69b5e55":"Mottagare:","send_message_6ccc90e8":"Skicka meddelande","sending_bf324366":"Skickar ...","sent_f4ee89ec":"Skickat!"},"tr":{"cancel_caeb1e68":"İptal","recipients_a69b5e55":"Alıcılar:","send_message_6ccc90e8":"Mesaj Gönder","sent_f4ee89ec":"Gönderildi!"},"uk":{"cancel_caeb1e68":"Скасувати","send_message_6ccc90e8":"Відправити повідомлення","sending_bf324366":"Відправка..."},"zh-Hans":{"cancel_caeb1e68":"取消","recipients_a69b5e55":"收件人：","send_message_6ccc90e8":"发送消息","sending_bf324366":"正在发送...","sent_f4ee89ec":"已发送！"},"zh-Hant":{"cancel_caeb1e68":"取消","recipients_a69b5e55":"收件者：","send_message_6ccc90e8":"傳送訊息","sending_bf324366":"正在發送...","sent_f4ee89ec":"已傳送！"}}'))
t["default"].scoped("message_students_dialog")
var f=s("EvX+")
var h=d.a.default
var b=h.template,v=h.templates=h.templates||{}
var y="messageStudentsDialog"
v[y]=b((function(e,n,s,t,a){this.compilerInfo=[4,">= 1.0.0"]
s=this.merge(s,e.helpers)
t=this.merge(t,e.partials)
a=a||{}
var o,i,_,c="",r="function",d=this.escapeExpression,p=this,g=s.helperMissing
function l(e,n){var s,t=""
t+="\n      "+d((s=(s=(s=e&&e.recipientGroups,null==s||false===s?s:s[0]),null==s||false===s?s:s.name),typeof s===r?s.apply(e):s))+'\n      <input type="hidden" name="recipientGroupName" value="'+d((s=(s=(s=e&&e.recipientGroups,null==s||false===s?s:s[0]),null==s||false===s?s:s.name),typeof s===r?s.apply(e):s))+'" />\n    '
return t}function u(e,n){var t,a=""
a+='\n      <select name="recipientGroupName" id="message-recipients-group">\n        '
t=s.each.call(e,e&&e.recipientGroups,{hash:{},inverse:p.noop,fn:p.program(4,m,n),data:n});(t||0===t)&&(a+=t)
a+="\n      </select>\n    "
return a}function m(e,n){var t,a,o=""
o+='\n          <option value="'
if(a=s.name)t=a.call(e,{hash:{},data:n})
else{a=e&&e.name
t=typeof a===r?a.call(e,{hash:{},data:n}):a}o+=d(t)+'">'
if(a=s.name)t=a.call(e,{hash:{},data:n})
else{a=e&&e.name
t=typeof a===r?a.call(e,{hash:{},data:n}):a}o+=d(t)+"</option>\n        "
return o}c+='<div class="message-students-dialog form-dialog-content">\n  <div class="message-recipients-group-container">\n    <label for="message-recipients-group">\n     '+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"recipients_a69b5e55","Recipients:",_):g.call(n,"t","recipients_a69b5e55","Recipients:",_)))+"\n    </label>\n\n    "
o=(i=s.ifEqual||n&&n.ifEqual,_={hash:{},inverse:p.program(3,u,a),fn:p.program(1,l,a),data:a},i?i.call(n,(o=n&&n.recipientGroups,null==o||false===o?o:o.length),1,_):g.call(n,"ifEqual",(o=n&&n.recipientGroups,null==o||false===o?o:o.length),1,_));(o||0===o)&&(c+=o)
c+='\n  </div>\n\n  <div id="message-recipients">\n    '
o=p.invokePartial(t.messageStudentsWhoRecipientList,"messageStudentsWhoRecipientList",n,s,t,a);(o||0===o)&&(c+=o)
c+='\n  </div>\n\n  <textarea name=body></textarea>\n\n</div>\n<div class="form-controls">\n  <button class="btn dialog_closer btn-secondary" type="button"\n    data-text-while-loading=\''+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"sending_bf324366","Sending...",_):g.call(n,"t","sending_bf324366","Sending...",_)))+"'>\n    "+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"cancel_caeb1e68","Cancel",_):g.call(n,"t","cancel_caeb1e68","Cancel",_)))+'\n  </button>\n  <button class="btn btn-primary"\n    data-text-while-loading=\''+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"sending_bf324366","Sending...",_):g.call(n,"t","sending_bf324366","Sending...",_)))+"'\n    data-text-when-loaded='"+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"sent_f4ee89ec","Sent!",_):g.call(n,"t","sent_f4ee89ec","Sent!",_)))+"'>\n    "+d((i=s.t||n&&n.t,_={hash:{i18n_inferred_key:true},data:a},i?i.call(n,"send_message_6ccc90e8","Send Message",_):g.call(n,"t","send_message_6ccc90e8","Send Message",_)))+"\n  </button>\n\n</div>\n"
return c}))
f["a"].loadStylesheet("jst/messageStudentsDialog",{combinedChecksum:"71cf06c9a8",includesNoVariables:true})
var k=v[y]
var x=s("RMh6")
var S=s("LvDl")
var M=s.n(S)
Object(a["a"])(JSON.parse('{"ar":{"models_conversations":{"cannot_be_empty":"لا يمكن أن تكون الرسالة فارغة","no_recipients_choose_another_group":"لا يوجد مستلمون في هذه المجموعة. يرجى اختيار مجموعة أخرى."}},"cy":{"models_conversations":{"cannot_be_empty":"Does dim modd i’r neges fod yn wag","no_recipients_choose_another_group":"Does dim derbynwyr yn y grŵp hwn Dewiswch grŵp arall."}},"da":{"models_conversations":{"cannot_be_empty":"Besked kan ikke være tom","no_recipients_choose_another_group":"Der er ingen modtagere i denne gruppe. Vælg venligst en anden gruppe."}},"da-x-k12":{"models_conversations":{"cannot_be_empty":"Besked kan ikke være tom","no_recipients_choose_another_group":"Der er ingen modtagere i denne gruppe. Vælg venligst en anden gruppe."}},"de":{"models_conversations":{"cannot_be_empty":"Nachricht darf nicht leer sein.","no_recipients_choose_another_group":"In dieser Gruppe gibt es keine Empfänger. Bitte wählen Sie eine andere Gruppe."}},"el":{"models_conversations":{"cannot_be_empty":"Το μήνυμα δεν μπορεί να είναι κενό.","no_recipients_choose_another_group":"Δεν υπάρχουν παραλήπτες σε αυτή την ομάδα. Παρακαλώ διαλέξτε μια άλλη ομάδα."}},"en-AU":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-AU-x-unimelb":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-CA":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-GB":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"en-GB-x-ukhe":{"models_conversations":{"cannot_be_empty":"Message cannot be blank","no_recipients_choose_another_group":"No recipients are in this group. Please choose another group."}},"es":{"models_conversations":{"cannot_be_empty":"El mensaje no puede estar vacío","no_recipients_choose_another_group":"No hay destinatarios en este grupo. Elija otro grupo."}},"fa":{"models_conversations":{"cannot_be_empty":"پیام نمی تواند خالی باشد","no_recipients_choose_another_group":"هیچ گیرنده ای در این گروه یافت نشد. گروه دیگری را انتخاب کنید."}},"fi":{"models_conversations":{"cannot_be_empty":"Viesti ei voi olla tyhjä","no_recipients_choose_another_group":"Tässä ryhmässä ei ole vastaanottajia. Valitse toinen ryhmä."}},"fr":{"models_conversations":{"cannot_be_empty":"Le message ne doit pas être vide","no_recipients_choose_another_group":"Aucun destinataire ne se trouve dans ce groupe. Veuillez sélectionner un autre groupe."}},"fr-CA":{"models_conversations":{"cannot_be_empty":"Le message ne doit pas être vide","no_recipients_choose_another_group":"Aucun destinataire n\'est dans ce groupe. Veuillez choisir un autre groupe."}},"he":{"models_conversations":{"cannot_be_empty":"הודעה אינה יכולה להשאר ריקה","no_recipients_choose_another_group":"אין נמענים בקבוצה זו. בבקשה לבחור קבוצה אחרת."}},"ht":{"models_conversations":{"cannot_be_empty":"Mesaj la pa dwe vid","no_recipients_choose_another_group":"Pa gen resipyan nan gwoup sa a. Tanpri chwazi yon lòt gwoup."}},"hu":{"models_conversations":{"cannot_be_empty":"Az üzenet nem lehet üres","no_recipients_choose_another_group":"Nincsenek címzettek ebben a csoportban. Kérjük, válasszon egy másik csoportot."}},"hy":{"models_conversations":{"cannot_be_empty":"Հաղորդագրությունը չի կարող դատարկ լինել","no_recipients_choose_another_group":"Այս խմբում ստացողներ չկան: Ընտրեք մեկ այլ խումբ:"}},"is":{"models_conversations":{"cannot_be_empty":"Skilaboð geta ekki verið auð","no_recipients_choose_another_group":"Engir móttakendur eru í þessum hóp. Veldu annan hóp."}},"it":{"models_conversations":{"cannot_be_empty":"Il messaggio non può essere lasciato vuoto","no_recipients_choose_another_group":"Non ci sono destinatari in questo gruppo. Scegli un altro gruppo."}},"ja":{"models_conversations":{"cannot_be_empty":"メッセージは空白にできません","no_recipients_choose_another_group":"このグループには受信者がいません。別のグループを選択してください。"}},"ko":{"models_conversations":{"cannot_be_empty":"메시지 내용이 있어야 함","no_recipients_choose_another_group":"이 그룹에 수신인이 없습니다. 다른 그룹을 선택하시기 바랍니다."}},"mi":{"models_conversations":{"cannot_be_empty":"E kore e taea e kore Karere","no_recipients_choose_another_group":"Kaore he kaiwhiwhi kei roto i tēnei rōpū. Tēnā koa kōwhiri he rōpūkē ake"}},"nb":{"models_conversations":{"cannot_be_empty":"Melding kan ikke være tom","no_recipients_choose_another_group":"Det er ingen mottakere i denne gruppen. Velg en annen gruppe."}},"nb-x-k12":{"models_conversations":{"cannot_be_empty":"Melding kan ikke være tom","no_recipients_choose_another_group":"Det er ingen mottakere i denne gruppen. Velg en annen gruppe."}},"nl":{"models_conversations":{"cannot_be_empty":"Bericht kan niet leeg zijn","no_recipients_choose_another_group":"Er zijn geen ontvangers in deze groep. Kies een andere groep."}},"nn":{"models_conversations":{"cannot_be_empty":"Meldinga kan ikkje vere tom","no_recipients_choose_another_group":"Det er ikkje mottakarar i denne gruppa. Vel ei anna gruppe."}},"pl":{"models_conversations":{"cannot_be_empty":"Wiadomość nie może być pusta","no_recipients_choose_another_group":"Brak odbiorców w tej grupie. Należy wybrać następną grupę."}},"pt":{"models_conversations":{"cannot_be_empty":"A mensagem não pode ficar em branco","no_recipients_choose_another_group":"Nenhum destinatário está neste grupo. Por favor, escolha outro grupo."}},"pt-BR":{"models_conversations":{"cannot_be_empty":"Mensagem não pode estar em branco","no_recipients_choose_another_group":"Nenhum destinatário está neste grupo. Escolha outro grupo."}},"ru":{"models_conversations":{"cannot_be_empty":"Сообщение не может быть пустым","no_recipients_choose_another_group":"В этой группе нет получателей. Выберите другую группу."}},"sv":{"models_conversations":{"cannot_be_empty":"Meddelandet kan inte lämnas tomt","no_recipients_choose_another_group":"Det finns inga mottagare i den här gruppen. Välj en annan grupp."}},"sv-x-k12":{"models_conversations":{"cannot_be_empty":"Meddelandet kan inte lämnas tomt","no_recipients_choose_another_group":"Det finns inga mottagare i den här gruppen. Välj en annan grupp."}},"tr":{"models_conversations":{"cannot_be_empty":"Mesaj boş olamaz","no_recipients_choose_another_group":"Bu grupta alıcılar bulunamadı. Lütfen farklı bir grup seçiniz."}},"zh-Hans":{"models_conversations":{"cannot_be_empty":"消息不能为空","no_recipients_choose_another_group":"没有收件人在此小组。请选择其他小组。"}},"zh-Hant":{"models_conversations":{"cannot_be_empty":"訊息不可為空白","no_recipients_choose_another_group":"此群組沒有收件人。請選擇其他群組。"}}}'))
var w=t["default"].scoped("models_conversations")
var E=s("FIFq")
var N=function(e,n){for(var s in n)j.call(n,s)&&(e[s]=n[s])
function t(){this.constructor=e}t.prototype=n.prototype
e.prototype=new t
e.__super__=n.prototype
return e},j={}.hasOwnProperty
var G=function(e){var n,s
N(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.url="/api/v1/conversations"
n=w.t("cannot_be_empty","Message cannot be blank")
s=w.t("no_recipients_choose_another_group","No recipients are in this group. Please choose another group.")
t.prototype.validate=function(e,t){var a
a={}
e.body&&_.a.trim(e.body.toString())||(a.body=[{message:n}])
e.recipients&&e.recipients.length||(a.recipients=[{message:s}])
return Object.keys(a).length?a:void 0}
return t}(E["Model"])
var A=function(){function e(e){this.chunkSize=e.chunkSize||100}e.prototype.save=function(e,n){var s
e.context_code=ENV.context_asset_string
s=M.a.chunk(e.recipients,this.chunkSize).map((function(s){var t
t=Object.assign({},e,{recipients:s})
return(new G).save(t,n)}))
return _.a.when.apply(_.a,s)}
e.prototype.validate=function(e,n){return(new G).validate(e,n)}
return e}()
var z=s("GLiE")
var B=s.n(z)
s("BYL3")
var R=function(e,n){return function(){return e.apply(n,arguments)}},V=function(e,n){for(var s in n)C.call(n,s)&&(e[s]=n[s])
function t(){this.constructor=e}t.prototype=n.prototype
e.prototype=new t
e.__super__=n.prototype
return e},C={}.hasOwnProperty
n["a"]=function(e){V(n,e)
function n(){this.updateListOfRecipients=R(this.updateListOfRecipients,this)
this.getFormData=R(this.getFormData,this)
this._findRecipientGroupByName=R(this._findRecipientGroupByName,this)
this.validateBeforeSave=R(this.validateBeforeSave,this)
this.toJSON=R(this.toJSON,this)
return n.__super__.constructor.apply(this,arguments)}n.optionProperty("recipientGroups")
n.optionProperty("context")
n.prototype.template=k
n.prototype.wrapperTemplate=x["a"]
n.prototype.className="validated-form-view form-dialog"
n.prototype.defaults={height:500,width:500}
n.prototype.els={"[name=recipientGroupName]":"$recipientGroupName","#message-recipients":"$messageRecipients","[name=body]":"$messageBody"}
n.prototype.events=B.a.extend({},c["a"].prototype.events,{"change [name=recipientGroupName]":"updateListOfRecipients","click .dialog_closer":"close",dialogclose:"close"})
n.prototype.initialize=function(e){n.__super__.initialize.apply(this,arguments)
this.options.title=this.context?o.t("Message students for %{context}",{context:this.context}):o.t("Message students")
this.recipients=this.recipientGroups[0].recipients
return this.model||(this.model=new A({chunkSize:ENV.MAX_GROUP_CONVERSATION_SIZE}))}
n.prototype.toJSON=function(){var e,n,s,t,a
n={}
a=["title","recipients","recipientGroups"]
for(e=0,t=a.length;e<t;e++){s=a[e]
n[s]=this[s]}return n}
n.prototype.validateBeforeSave=function(e,n){var s
s=this.model.validate(e)
if(s){s.body&&(n.body=s.body)
s.recipients&&(n.recipientGroupName=s.recipients)}return n}
n.prototype._findRecipientGroupByName=function(e){return B.a.detect(this.recipientGroups,(function(n){return n.name===e}))}
n.prototype.getFormData=function(){var e,n,s,t
t=this.$el.toJSON(),n=t.recipientGroupName,e=t.body
s=this._findRecipientGroupByName(n).recipients
return{body:e,recipients:B.a.pluck(s,"id")}}
n.prototype.updateListOfRecipients=function(){var e,n
e=this.$recipientGroupName.val()
n=this._findRecipientGroupByName(e).recipients
return this.$messageRecipients.html(m({recipients:n}))}
n.prototype.onSaveSuccess=function(){this.close()
return _.a.flashMessage(o.t("Message Sent!"))}
n.prototype.close=function(){n.__super__.close.apply(this,arguments)
this.hideErrors()
return this.remove()}
return n}(c["a"])}}])

//# sourceMappingURL=260-c-23fa67d3c9.js.map