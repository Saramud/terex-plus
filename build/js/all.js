"use strict";var f,i,e,t,c,a,b,j;$("#sendMail").on("click",function(){var e=$("#name").val(),t=$("#technics").val(),a=$("#rent").val(),i=$("#phone").val().replace(/[(),_,-]/g,"");return 0==i.length?($("#error").text("Поле обязательно для заполнения!"),$("#phone").css("border","2px solid red"),!1):12!==i.length?($("#error").text("Некорректно введен номер телефона"),$("#phone").css("border","2px solid red"),!1):($("#error").text(""),void $.ajax({url:"telegram.php",type:"POST",cache:!1,data:{name:e,technics:t,rent:a,phone:i},dataType:"html",beforeSend:function(){$("#sendMail").text("Заявка отправлена"),$("#sendMail").css({background:"#28a745","border-color":"#28a745",color:"white"}),$("#sendMail").prop("disabled",!0)},success:function(){$("#requestform").trigger("reset"),$("#sendMail").text("Отправка"),$("#sendMail").css("background","#007bff"),$("#sendMail").prop("disabled",!1)}}))}),$('a[href^="#"], *[data-href^="#"]').on("click",function(e){e.preventDefault();var t=$(this).attr("data-href")?$(this).attr("data-href"):$(this).attr("href");$("#sendMail").css("animation","blink 0.7s ease-in-out 3"),$("html,body").stop().animate({scrollTop:$(t).offset().top-300},1e3)}),f=jQuery,e=document.createElement("input"),t="onpaste",e.setAttribute(t,""),c=("function"==typeof e[t]?"paste":"input")+".mask",a=navigator.userAgent,b=/iphone/i.test(a),j=/android/i.test(a),f.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},f.fn.extend({caret:function(e,t){var a;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((a=this.createTextRange()).collapse(!0),a.moveEnd("character",t),a.moveStart("character",e),a.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1e5),t=e+a.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,p){var a,m,u,k,v;return!t&&0<this.length?f(this[0]).data(f.mask.dataName)():(p=f.extend({placeholder:f.mask.placeholder,completed:null},p),a=f.mask.definitions,m=[],u=v=t.length,k=null,f.each(t.split(""),function(e,t){"?"==t?(v--,u=e):a[t]?(m.push(new RegExp(a[t])),null===k&&(k=m.length-1)):m.push(null)}),this.trigger("unmask").each(function(){var r=f(this),s=f.map(t.split(""),function(e,t){if("?"!=e)return a[e]?p.placeholder:e}),n=r.val();function l(e){for(;++e<v&&!m[e];);return e}function o(e,t){var a,i;if(!(e<0)){for(a=e,i=l(t);a<v;a++)if(m[a]){if(!(i<v&&m[a].test(s[i])))break;s[a]=s[i],s[i]=p.placeholder,i=l(i)}g(),r.caret(Math.max(k,e))}}function d(e,t){var a;for(a=e;a<t&&a<v;a++)m[a]&&(s[a]=p.placeholder)}function g(){r.val(s.join(""))}function h(e){var t,a,i=r.val(),c=-1;for(pos=t=0;t<v;t++)if(m[t]){for(s[t]=p.placeholder;pos++<i.length;)if(a=i.charAt(pos-1),m[t].test(a)){s[t]=a,c=t;break}if(pos>i.length)break}else s[t]===i.charAt(pos)&&t!==u&&(pos++,c=t);return e?g():c+1<u?(r.val(""),d(0,v)):(g(),r.val(r.val().substring(0,c+1))),u?t:k}r.data(f.mask.dataName,function(){return f.map(s,function(e,t){return m[t]&&e!=p.placeholder?e:null}).join("")}),r.attr("readonly")||r.one("unmask",function(){r.unbind(".mask").removeData(f.mask.dataName)}).bind("focus.mask",function(){var e;clearTimeout(i),n=r.val(),e=h(),i=setTimeout(function(){g(),e==t.length?r.caret(0,e):r.caret(e)},10)}).bind("blur.mask",function(){h(),r.val()!=n&&r.change()}).bind("keydown.mask",function(e){var t,a,i,c=e.which;8===c||46===c||b&&127===c?(a=(t=r.caret()).begin,(i=t.end)-a==0&&(a=46!==c?function(e){for(;0<=--e&&!m[e];);return e}(a):i=l(a-1),i=46===c?l(i):i),d(a,i),o(a,i-1),e.preventDefault()):27==c&&(r.val(n),r.caret(0,h()),e.preventDefault())}).bind("keypress.mask",function(e){var t,a,i,c=e.which,n=r.caret();e.ctrlKey||e.altKey||e.metaKey||c<32||c&&(n.end-n.begin!=0&&(d(n.begin,n.end),o(n.begin,n.end-1)),(t=l(n.begin-1))<v&&(a=String.fromCharCode(c),m[t].test(a)&&(function(e){var t,a,i,c;for(t=e,a=p.placeholder;t<v;t++)if(m[t]){if(i=l(t),c=s[t],s[t]=a,!(i<v&&m[i].test(c)))break;a=c}}(t),s[t]=a,g(),i=l(t),j?setTimeout(f.proxy(f.fn.caret,r,i),0):r.caret(i),p.completed&&v<=i&&p.completed.call(r))),e.preventDefault())}).bind(c,function(){setTimeout(function(){var e=h(!0);r.caret(e),p.completed&&e==r.val().length&&p.completed.call(r)},0)}),h()}))}});function n(r){for(var e=function(i){var e=$("<tbody></tbody").append(function(){for(var e="",t=0;t<r.properties.length;t++){var a=r.properties[t];e+="<tr><td class='text-dark text-left'>".concat(s[r.properties[t]],"</td><td class='text-dark text-right'>").concat(r[a][i],"</td><tr>")}return e}),t=$("<table class='table table-sm table-hover'></table>").append(e),a=$("<div class='card-body'></div").append(t).append("<div class='btn btn-secondary'><a href='".concat(r.link[i],"'>Узнать подробнее</a></div>")),c=$("<div class='border-warning text-center'></div>").append("<h3 class='text-dark'>".concat(r.title[i],"</h3>")).append("<div class='card-header bg-warning '>".concat(r.price[i]," руб. за смену</div>")).append("<img class='card-image' src=".concat(r.img[i]," 'alt='экскаватор'>")).append(a),n=$("<a id='tech' class='card border-warning ' href='".concat(r.link[i],"'></a>")).append(c);$(".technics__menu-item").append(n)},t=0;t<r.img.length;t+=1)e(t)}var s={weight:"Вес",boomLength:"Длина стрелы","carryingСapacity":"Грузоподъемность","bucketСapacity":"Объём ковша",liftingHeight:"Высота выгрузки",diggingDepth:"Глубина копания",speed:"Скорость",trackWidth:"Ширина гусениц"},r={atkrnUgra:["Гусеничный кран югра 4671","/build/img/ugra.jpg","./technics/autokran.html"],atkrnMaz:["Автокран МАЗ","/build/img/maz.jpg","./technics/autokran.html"],atkrTadano:["Автокран Tadano GR-550EX","/build/img/tadano.jpg","./technics/autokran.html"],miniSunward:["Миниэкскаватор Sunward swe-017","/build/img/card-1.jpeg","./technics/autokran.html"],miniKubota:["Миниэкскаватор Kubota KX36-3","/build/img/card-1.jpeg","./technics/autokran.html"],miniJCB:["Миниэкскаватор JSB 8018","/build/img/card-1.jpeg","./technics/autokran.html"],smsvlKamaz6520:["Самосвал КАМАЗ 6520","/build/img/card-1.jpeg","./technics/samosval.html"],smsvlUral:["Самосвал Урал 6х6","/build/img/card-1.jpeg","./technics/samosval.html"],smsvlKamaz65802:["Самосвал КАМАЗ 65802-27","/build/img/card-1.jpeg","./technics/samosval.html"],egusHitachi330:["Экскаватор гусеничный HITACHI 330","/build/img/card-1.jpeg","./technics/ekskavator.html"],egusHitachi300:["Экскаватор гусеничный HITACHI 300","/build/img/card-1.jpeg","./technics/ekskavator.html"],egusGCB160:["Экскаватор гусеничный GCB 160","/build/img/card-1.jpeg","./technics/ekskavator.html"],ekolDoosan:["Экскаватор колёсный DOOSAN SOLAR 180","/build/img/card-1.jpeg","./technics/ekskavator.html"],ekolHitachi210:["Экскаватор колёсный HITACHI 210W","/build/img/card-1.jpeg","./technics/ekskavator.html"],ekolHitachi160:["Экскаватор колёсный HITACHI 160","/build/img/card-1.jpeg","./technics/ekskavator.html"],epogJCB1cx:["Экскаватор погрузчик JCB 1cx","/build/img/card-1.jpeg","./technics/ekskavator.html"],epogCase695:["Экскаватор погрузчик CASE695","/build/img/card-1.jpeg","./technics/ekskavator.html"],epogMTZ92:["Экскаватор погрузчик МТЗ 92","/build/img/card-1.jpeg","./technics/ekskavator.html"]},l={autokran:{img:["/build/img/ugra.jpg","/build/img/maz.jpg","/build/img/tadano.jpg"],title:[r.atkrnUgra[0],r.atkrnMaz[0],r.atkrTadano[0]],description:["amet consectetur adipisicing elit.","amet consectetur adipisicing elit.","amet consectetur adipisicing elit."],price:[12e3,13e3,11e3],properties:["weight","boomLength","carryingСapacity"],weight:["32500 кг","32500 кг","32500 кг"],boomLength:["7.6-16.5 м","7.6-16.5 м","7.6-16.5 м"],"carryingСapacity":["20 т","20 т","20 т"],link:["./technics/autokran.html","./technics/autokran.html","./technics/autokran.html"]},mini:{img:["/build/img/card-1.jpeg","/build/img/card-1.jpeg","/build/img/card-1.jpeg"],title:[r.miniSunward[0],r.miniKubota[0],r.miniJCB[0]],description:["amet consectetur adipisicing elit."],price:[12e3,13e3,11e3],properties:["weight","bucketСapacity","liftingHeight","diggingDepth"],weight:["32500 кг","32500 кг","32500 кг"],"bucketСapacity":["0.04 м.куб","0.04 м.куб","0.04 м.куб"],liftingHeight:["2155 см","2155 см","2155 см"],diggingDepth:["2155 см","2155 см","2155 см"],link:["./technics/autokran.html","./technics/autokran.html","./technics/autokran.html"]},samosval:{img:["/build/img/card-1.jpeg","/build/img/card-1.jpeg","/build/img/card-1.jpeg"],title:[r.smsvlKamaz6520[0],r.smsvlUral[0],r.smsvlKamaz65802[0]],description:["amet consectetur adipisicing elit."],properties:["weight","speed","carryingСapacity"],weight:["32500 кг","32500 кг","32500 кг"],"carryingСapacity":["20 т","20 т","20 т"],speed:["75 км/ч","75 км/ч","75 км/ч"],price:[12e3,13e3,11e3],link:["./technics/samosval.html","./technics/samosval.html","./technics/samosval.html"]},ekskGusenich:{img:["/build/img/card-1.jpeg","/build/img/card-1.jpeg","/build/img/card-1.jpeg"],title:[r.egusHitachi330[0],r.egusHitachi300[0],r.egusGCB160[0]],description:["amet consectetur adipisicing elit.","amet consectetur adipisicing elit.","amet consectetur adipisicing elit."],properties:["weight","bucketСapacity","trackWidth","liftingHeight","diggingDepth"],weight:["32500 кг","32500 кг","32500 кг"],"bucketСapacity":["0.04 м.куб","0.04 м.куб","0.04 м.куб"],trackWidth:["800 мм","800 мм","800 мм"],liftingHeight:["2155 см","2155 см","2155 см"],diggingDepth:["2155 см","2155 см","2155 см"],price:[12e3,13e3,11e3],link:["./technics/ekskavator.html","./technics/ekskavator.html","./technics/ekskavator.html"]},ekskKoles:{img:["/build/img/card-1.jpeg","/build/img/card-1.jpeg","/build/img/card-1.jpeg"],title:[r.ekolDoosan[0],r.ekolHitachi210[0],r.ekolHitachi160[0]],description:["amet consectetur adipisicing elit."],price:[12e3,13e3,11e3],properties:["weight","bucketСapacity","liftingHeight","diggingDepth"],weight:["32500 кг","32500 кг","32500 кг"],"bucketСapacity":["0.04 м.куб","0.04 м.куб","0.04 м.куб"],liftingHeight:["2155 см","2155 см","2155 см"],diggingDepth:["2155 см","2155 см","2155 см"],link:["./technics/ekskavator.html","./technics/ekskavator.html","./technics/ekskavator.html"]},ekskPogr:{img:["/build/img/card-1.jpeg","/build/img/card-1.jpeg","/build/img/card-1.jpeg"],title:[r.epogJCB1cx[0],r.epogCase695[0],r.epogMTZ92[0]],description:["amet consectetur adipisicing elit."],price:[12e3,13e3,11e3],properties:["carryingСapacity","liftingHeight","diggingDepth"],"carryingСapacity":["20 т","20 т","20 т"],liftingHeight:["2155 см","2155 см","2155 см"],diggingDepth:["2155 см","2155 см","2155 см"],link:["./technics/ekskavator.html","./technics/ekskavator.html","./technics/ekskavator.html"]}},o=localStorage.getItem("selected");if(0===$("#allTechnics").length){var d=null===o||"allTechnics"===o?l.autokran:l[o];$("#".concat(null===o||"allTechnics"===o?"autokran":o)).addClass("techs-active"),n(d)}else if(0!==$("#allTechnics").length)if(null===o||"allTechnics"===o)for(var g in l){var h=l[g];$("#allTechnics").addClass("techs-active"),n(h)}else $("#".concat(o)).addClass("techs-active"),n(l[o]);if($(".techs").click(function(){var e=$(this),t=e.attr("id");localStorage.setItem("selected",t),$(".techs.techs-active").removeClass("techs-active"),$(e).addClass("techs-active"),$("a.card").remove();var a=l[t];if("allTechnics"===t)for(var i in l){n(l[i])}else n(a)}),$(".tech")){var p=$(".tech").attr("id"),m=p.slice(0,4);Object.keys(r).filter(function(e){return e.startsWith(m)});$(".tech").append("<img src=".concat(r[p][1],">"));var u=$("<ul class='nav'></ul>").append("<li><a href='#'>Главная</a></li>");$(".nav-menu").append(u)}