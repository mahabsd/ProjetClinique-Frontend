(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EdD2:function(t,e,c){"use strict";c.r(e),c.d(e,"routes",function(){return G}),c.d(e,"ChatModule",function(){return K});var n=c("ofXK"),a=c("tyNb"),i=c("3Pt+"),s=c("Kdsb"),o=c("PCNd"),r=c("/RaO"),d=c("gFX4"),h=c("fXoL"),l=c("tk/3");let u=(()=>{class t{constructor(t){this.httpClient=t,this.url="http://localhost:3000",this.socket=d(this.url)}getPrivateMessage(t,e){return this.httpClient.get(this.url+"/chat/getPrivateMessage/"+t+"/"+e)}sendMessage(t,e){return this.httpClient.post(this.url+"/chat/sendMessage/"+e,t)}deleteChat(t){return this.httpClient.get(this.url+"/chat/deleteChat/"+t)}}return t.\u0275fac=function(e){return new(e||t)(h.ic(l.c))},t.\u0275prov=h.Ub({token:t,factory:t.\u0275fac}),t})();var g=c("EjJx"),m=c("EFyh"),p=c("5KN4"),f=c("7JkF"),b=c("C790"),M=c("/t3+"),x=c("XiUz"),C=c("bTqV"),v=c("NFeN"),w=c("kmnG"),O=c("qFsG"),y=c("MutI"),_=c("STbY"),k=c("Wp6s"),P=c("XhcP"),I=c("FKr1"),X=c("znSr"),F=c("RoQY");let S=(()=>{class t{constructor(t,e){this.changeDetectorRef=t,this.ngZone=e}transform(t){this.removeTimer();let e=new Date(t),c=new Date,n=Math.round(Math.abs((c.getTime()-e.getTime())/1e3)),a=Number.isNaN(n)?1e3:1e3*this.getSecondsUntilUpdate(n);this.timer=this.ngZone.runOutsideAngular(()=>"undefined"!=typeof window?window.setTimeout(()=>{this.ngZone.run(()=>this.changeDetectorRef.markForCheck())},a):null);let i=Math.round(Math.abs(n/60)),s=Math.round(Math.abs(i/60)),o=Math.round(Math.abs(s/24)),r=Math.round(Math.abs(o/30.416)),d=Math.round(Math.abs(o/365));return Number.isNaN(n)?"":n<=45?"a few seconds ago":n<=90?"a minute ago":i<=45?i+" minutes ago":i<=90?"an hour ago":s<=22?s+" hours ago":s<=36?"a day ago":o<=25?o+" days ago":o<=45?"a month ago":o<=345?r+" months ago":o<=545?"a year ago":d+" years ago"}ngOnDestroy(){this.removeTimer()}removeTimer(){this.timer&&(window.clearTimeout(this.timer),this.timer=null)}getSecondsUntilUpdate(t){return t<60?2:t<3600?30:t<86400?300:3600}}return t.\u0275fac=function(e){return new(e||t)(h.kc(),h.Yb(h.H))},t.\u0275pipe=h.Xb({name:"timeAgo",type:t,pure:!1}),t})();const L=["sidenav"];function q(t,e){1&t&&(h.ec(0,"mat-icon",44),h.Xc(1,"check_circle"),h.dc())}function A(t,e){1&t&&(h.ec(0,"mat-icon",44),h.Xc(1,"highlight_off "),h.dc())}function U(t,e){1&t&&(h.ec(0,"mat-icon",44),h.Xc(1,"schedule"),h.dc())}function V(t,e){1&t&&(h.ec(0,"mat-icon",44),h.Xc(1,"not_interested "),h.dc())}function T(t,e){if(1&t){const t=h.fc();h.ec(0,"mat-list-item",39),h.mc("click",function(){h.Mc(t);const c=e.$implicit;return h.qc().clickUser(c._id)}),h.Zb(1,"img",40),h.ec(2,"h6",38),h.Xc(3),h.dc(),h.ec(4,"p",41),h.ec(5,"span",42),h.Vc(6,q,2,0,"mat-icon",43),h.Vc(7,A,2,0,"mat-icon",43),h.Vc(8,U,2,0,"mat-icon",43),h.Vc(9,V,2,0,"mat-icon",43),h.dc(),h.dc(),h.dc()}if(2&t){const t=e.$implicit;h.Mb(1),h.xc("src",t.profile.image,h.Oc),h.Mb(2),h.ad(" ",t.profile.name," ",t.profile.surname," "),h.Mb(2),h.xc("ngSwitch",t.authorStatus),h.Mb(1),h.xc("ngSwitchCase","Online"),h.Mb(1),h.xc("ngSwitchCase","Offline"),h.Mb(1),h.xc("ngSwitchCase","Away"),h.Mb(1),h.xc("ngSwitchCase","Do not disturb")}}function D(t,e){if(1&t&&h.Zb(0,"img",40),2&t){const t=h.qc().$implicit;h.xc("src",t.logo,h.Oc)}}function N(t,e){if(1&t&&(h.ec(0,"span",53),h.Xc(1),h.dc()),2&t){const t=h.qc().$implicit,e=h.qc(2);h.xc("ngClass",t.candidat!==e.userId?"bg-primary":"bg-accent"),h.Mb(1),h.Yc(t.content)}}function Y(t,e){if(1&t&&(h.ec(0,"p",48),h.ec(1,"a",54),h.Xc(2),h.rc(3,"slice"),h.dc(),h.dc()),2&t){const t=h.qc().$implicit,e=h.qc(2);h.Mb(1),h.xc("href",t.files,h.Oc)("ngClass",t.candidat!=e.userId?"bg-primary":"bg-accent"),h.Mb(1),h.Yc(h.tc(3,3,t.files[0],-17))}}function z(t,e){if(1&t&&(h.ec(0,"small"),h.Xc(1),h.rc(2,"timeAgo"),h.dc()),2&t){const t=h.qc().$implicit;h.Mb(1),h.Yc(h.sc(2,1,t.createdDate))}}function J(t,e){if(1&t&&(h.ec(0,"mat-list-item",46),h.Vc(1,D,1,1,"img",47),h.ec(2,"p",48),h.Vc(3,N,2,2,"span",49),h.dc(),h.Vc(4,Y,4,6,"p",50),h.ec(5,"p",51),h.Vc(6,z,3,3,"small",52),h.dc(),h.dc()),2&t){const t=e.$implicit;h.Mb(1),h.xc("ngIf",null!=t.content&&""!=t.content||null!=t.files&&""!=t.files),h.Mb(2),h.xc("ngIf",null!=t.content&&""!=t.content),h.Mb(1),h.xc("ngIf",t.files.length>0),h.Mb(2),h.xc("ngIf",null!=t.content&&""!=t.content||t.files.length>0)}}function Z(t,e){if(1&t&&(h.ec(0,"mat-list",9),h.Vc(1,J,7,4,"mat-list-item",45),h.dc()),2&t){const t=h.qc();h.Mb(1),h.xc("ngForOf",t.talks)}}function j(t,e){1&t&&(h.ec(0,"div",55),h.ec(1,"mat-icon"),h.Xc(2,"chat"),h.dc(),h.ec(3,"p"),h.Xc(4,"Select a interlocutor for talk"),h.dc(),h.dc())}function W(t,e){if(1&t){const t=h.fc();h.ec(0,"mat-card",56),h.ec(1,"div",57),h.ec(2,"form",58),h.ec(3,"mat-form-field",59),h.Zb(4,"input",60),h.dc(),h.dc(),h.ec(5,"div",61),h.ec(6,"input",62),h.mc("ngModelChange",function(e){return h.Mc(t),h.qc().myFiles=e})("change",function(e){return h.Mc(t),h.qc().selectFile(e)}),h.dc(),h.ec(7,"button",63),h.mc("click",function(){return h.Mc(t),h.qc().sendMessage()}),h.ec(8,"mat-icon"),h.Xc(9,"send"),h.dc(),h.dc(),h.dc(),h.dc(),h.dc()}if(2&t){const t=h.qc();h.Mb(2),h.xc("formGroup",t.messageForm),h.Mb(4),h.xc("ngModel",t.myFiles)}}function $(t,e){if(1&t&&h.Zb(0,"img",64),2&t){const t=h.qc();h.xc("src",t.currentChat.candidat1._id!=t.userId?t.currentChat.candidat1.profile.image:t.currentChat.candidat2.profile.image,h.Oc)}}function R(t,e){if(1&t&&(h.ec(0,"h2",65),h.Xc(1),h.dc()),2&t){const t=h.qc();h.Mb(1),h.ad("",t.currentChat.candidat1._id!=t.userId?t.currentChat.candidat1.profile.surname:t.currentChat.candidat2.profile.surname," ",t.currentChat.candidat1._id!=t.userId?t.currentChat.candidat1.profile.name:t.currentChat.candidat2.profile.name,"")}}let B=(()=>{class t{constructor(t,e,c,n,a){this.appSettings=t,this.socket=e,this.chatService=c,this.auth=n,this.messagesService=a,this.userImage="assets/img/users/user.jpg",this.sidenavOpen=!0,this.token=localStorage.getItem("token"),this.decoded=JSON.parse(JSON.stringify(Object(g.a)(this.token))),this.userId=this.decoded._id,this.listeMessages=[],this.listeCandidats=[],this.settings=this.appSettings.settings}ngOnInit(){window.innerWidth<=768&&(this.sidenavOpen=!1),this.messageForm=new i.g({content:new i.e(""),candidat:new i.e(this.decoded._id),logo:new i.e(this.decoded.user.profile.image)}),this.socket.on("newUserAdded",()=>{this.auth.getAllUsers().subscribe(t=>{this.chats=this.listeCandidats=t.filter(t=>t._id!==this.userId)})}),this.auth.getAllUsers().subscribe(t=>{this.chats=this.listeCandidats=t.filter(t=>t._id!==this.userId),this.clickUser(this.listeCandidats[0]._id)}),this.socket.on("newMessageSended",()=>{this.clickUser(this.chosenUser)})}clickUser(t){this.chosenUser=t,this.chatService.getPrivateMessage(t,this.userId).subscribe(t=>{this.conversation=t._id,this.currentChat=t,window.innerWidth<=768&&this.sidenav.close(),this.talks=this.listeMessages=t.messages})}sendMessage(){this.formData=new FormData,null!=this.file&&this.formData.append("myFiles",this.file,this.file.name),Object.keys(this.messageForm.value).forEach(t=>{this.formData.append(t,this.messageForm.value[t])}),this.chatService.sendMessage(this.formData,this.conversation).subscribe(t=>{}),this.myFiles="",this.messageForm.patchValue({content:"",files:""}),this.file=null,this.messagesService.sendNotification({reciever:this.chosenUser,text:"sent you a message",userOwner:this.userId,messages:!0,chatUrl:"chat"}).subscribe()}selectFile(t){t.target.value&&(this.file=t.target.files[0])}deleteChat(t){this.chatService.deleteChat(t).subscribe(t=>{})}onWindowResize(){this.sidenavOpen=!(window.innerWidth<=768)}ngOnDestroy(){this.talks&&(this.talks.length=2)}}return t.\u0275fac=function(e){return new(e||t)(h.Yb(r.a),h.Yb(f.a),h.Yb(u),h.Yb(m.a),h.Yb(p.a))},t.\u0275cmp=h.Sb({type:t,selectors:[["app-chat"]],viewQuery:function(t,e){if(1&t&&h.bd(L,!0),2&t){let t;h.Ic(t=h.nc())&&(e.sidenav=t.first)}},hostBindings:function(t,e){1&t&&h.mc("resize",function(){return e.onWindowResize()},!1,h.Lc)},features:[h.Lb([u,p.a])],decls:77,vars:25,consts:[[3,"title","hideBreadcrumb","hasBgImage"],["color","primary","fxLayout","row","fxLayoutAlign","space-between center",1,"px-2","chat-toolbar"],["fxLayout","row"],["mat-icon-button","",3,"click"],["mat-icon-button","",1,"mx-2"],[1,"user-search"],[1,"user-search-input"],["matInput","","placeholder","Search user by name...","name","search",3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutAlign","center center"],[1,"p-0"],["matListAvatar","",1,"author-img",3,"src"],[1,"author-name"],["mat-icon-button","",3,"matMenuTriggerFor"],["personMenuTrigger","matMenuTrigger"],["xPosition","before"],["personMenu","matMenu"],[3,"mouseleave"],["mat-menu-item","",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","chat"],[1,"chat-container"],["autoFocus","false",1,"chat-sidenav","mat-elevation-z1",3,"opened","mode"],["sidenav",""],["perfectScrollbar","",1,"p-0","chat-sidenav-list"],[3,"click",4,"ngFor","ngForOf"],["perfectScrollbar","",1,"chat-content"],["class","p-0",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","h-100 empty",4,"ngIf"],["class","chat-actions",4,"ngIf"],["mode","over","position","end","autoFocus","false",1,"person-info-sidenav","mat-elevation-z1"],["personInfo",""],["perfectScrollbar","",1,"p-0","h-100"],[1,"bg-primary","w-100","text-center"],["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["class","py-2",3,"src",4,"ngIf"],["class","pb-3",4,"ngIf"],["matListIcon","",1,"secondary-text-color"],["matLine",""],[3,"click"],["matListAvatar","",3,"src"],["matLine","","fxLayout","row","fxLayoutAlign","none center",1,"secondary-text-color"],[3,"ngSwitch"],["class","chat-status-icon",4,"ngSwitchCase"],[1,"chat-status-icon"],["class","talk-item",4,"ngFor","ngForOf"],[1,"talk-item"],["matListAvatar","",3,"src",4,"ngIf"],["matLine","",1,"message"],[3,"ngClass",4,"ngIf"],["matLine","","class","message",4,"ngIf"],["matLine","",1,"message-date"],[4,"ngIf"],[3,"ngClass"],[3,"href","ngClass"],["fxLayout","column","fxLayoutAlign","center center",1,"h-100","empty"],[1,"chat-actions"],["fxLayout","row","fxLayoutAlign","space-between center"],[3,"formGroup"],[1,"w-100"],["matInput","","placeholder","Enter your text...","formControlName","content"],["fxLayout","row","fxLayoutAlign","scenter center"],["type","file","name","myFiles","accept","file/*",3,"ngModel","ngModelChange","change"],["mat-mini-fab","","color","primary","type","button",3,"click"],[1,"py-2",3,"src"],[1,"pb-3"]],template:function(t,e){if(1&t){const t=h.fc();h.Zb(0,"app-content-header",0),h.ec(1,"mat-toolbar",1),h.ec(2,"div",2),h.ec(3,"button",3),h.mc("click",function(){return h.Mc(t),h.Jc(40).toggle()}),h.ec(4,"mat-icon"),h.Xc(5,"list"),h.dc(),h.dc(),h.ec(6,"button",4),h.ec(7,"mat-icon"),h.Xc(8,"search"),h.dc(),h.dc(),h.dc(),h.ec(9,"form",5),h.ec(10,"mat-form-field",6),h.ec(11,"input",7),h.mc("ngModelChange",function(t){return e.searchText=t}),h.dc(),h.dc(),h.dc(),h.ec(12,"div",8),h.ec(13,"mat-list",9),h.ec(14,"mat-list-item"),h.Zb(15,"img",10),h.dc(),h.dc(),h.ec(16,"span",11),h.Xc(17),h.dc(),h.ec(18,"button",12,13),h.ec(20,"mat-icon"),h.Xc(21,"more_vert"),h.dc(),h.dc(),h.ec(22,"mat-menu",14,15),h.ec(24,"span",16),h.mc("mouseleave",function(){return h.Mc(t),h.Jc(19).closeMenu()}),h.ec(25,"button",17),h.mc("click",function(){return h.Mc(t),h.Jc(50).toggle()}),h.ec(26,"mat-icon"),h.Xc(27,"account_circle"),h.dc(),h.ec(28,"span"),h.Xc(29,"Contact info"),h.dc(),h.dc(),h.ec(30,"button",17),h.mc("click",function(){return e.deleteChat(e.currentChat._id)}),h.ec(31,"mat-icon"),h.Xc(32,"delete_forever"),h.dc(),h.ec(33,"span"),h.Xc(34,"Clear chat"),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.ec(35,"div",18),h.ec(36,"div",19),h.ec(37,"mat-card",20),h.ec(38,"mat-drawer-container",21),h.ec(39,"mat-drawer",22,23),h.ec(41,"mat-nav-list",24),h.Vc(42,T,10,8,"mat-list-item",25),h.rc(43,"UserSearchPipe"),h.dc(),h.dc(),h.ec(44,"div"),h.ec(45,"div",26),h.Vc(46,Z,2,1,"mat-list",27),h.Vc(47,j,5,0,"div",28),h.dc(),h.Vc(48,W,10,2,"mat-card",29),h.dc(),h.ec(49,"mat-drawer",30,31),h.ec(51,"div",32),h.ec(52,"div",33),h.ec(53,"div",34),h.ec(54,"h2"),h.Xc(55,"Contact Info"),h.dc(),h.ec(56,"button",3),h.mc("click",function(){return h.Mc(t),h.Jc(50).toggle()}),h.ec(57,"mat-icon"),h.Xc(58,"close"),h.dc(),h.dc(),h.dc(),h.Vc(59,$,1,1,"img",35),h.Vc(60,R,2,2,"h2",36),h.dc(),h.ec(61,"mat-list"),h.ec(62,"mat-list-item"),h.ec(63,"mat-icon",37),h.Xc(64,"mail_outline"),h.dc(),h.ec(65,"h3",38),h.Xc(66),h.dc(),h.dc(),h.ec(67,"mat-list-item"),h.ec(68,"mat-icon",37),h.Xc(69,"call"),h.dc(),h.ec(70,"h3",38),h.Xc(71),h.dc(),h.dc(),h.ec(72,"mat-list-item"),h.ec(73,"mat-icon",37),h.Xc(74,"location_on"),h.dc(),h.ec(75,"h3",38),h.Xc(76,"Y"),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.dc(),h.dc()}if(2&t){const t=h.Jc(23);h.Ob("pb-5"),h.xc("title","Chat")("hideBreadcrumb",!1)("hasBgImage",!0),h.Mb(11),h.xc("ngModel",e.searchText),h.Mb(4),h.xc("src",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.image:e.currentChat.candidat2.profile.image,h.Oc),h.Mb(2),h.ad("",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.name:e.currentChat.candidat2.profile.name," ",e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.profile.surname:e.currentChat.candidat2.profile.surname,""),h.Mb(1),h.xc("matMenuTriggerFor",t),h.Mb(21),h.xc("opened",e.sidenavOpen)("mode",e.sidenavOpen?"side":"over"),h.Mb(3),h.xc("ngForOf",h.tc(43,22,e.listeCandidats,e.searchText)),h.Mb(3),h.Qb("actions-visible",e.talks),h.Mb(1),h.xc("ngIf",e.talks),h.Mb(1),h.xc("ngIf",!e.talks),h.Mb(1),h.xc("ngIf",e.talks),h.Mb(11),h.xc("ngIf",e.currentChat),h.Mb(1),h.xc("ngIf",e.currentChat),h.Mb(6),h.Yc(e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.contacts.email:e.currentChat.candidat2.contacts.email),h.Mb(5),h.Yc(e.currentChat.candidat1._id!=e.userId?e.currentChat.candidat1.contacts.phone:e.currentChat.candidat2.contacts.phone)}},directives:[b.a,M.a,x.c,x.b,C.b,v.a,i.u,i.o,i.p,w.c,O.b,i.c,i.n,i.q,y.a,y.d,y.b,_.d,_.a,_.b,x.a,k.a,P.b,P.a,y.g,s.b,n.m,n.n,y.c,I.j,n.p,n.q,n.l,X.a,i.h,i.f],pipes:[F.a,n.v,S],styles:[".chat-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 148px))}.chat-toolbar[_ngcontent-%COMP%]{background:transparent!important;height:40px;margin-top:-40px}.chat-toolbar[_ngcontent-%COMP%]   .author-img[_ngcontent-%COMP%]{width:34px;height:34px}.chat-toolbar[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-size:16px;font-weight:400}.chat[_ngcontent-%COMP%]{border-radius:0}.chat[_ngcontent-%COMP%]   .chat-actions[_ngcontent-%COMP%]{padding:12px}.chat[_ngcontent-%COMP%]   .talk-item[_ngcontent-%COMP%]{padding:6px 0;height:100%}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{white-space:unset;text-overflow:unset}.chat[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:6px 10px;border-radius:4px;display:inline-block;font-size:14px}.chat[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%]{opacity:.8}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:220px;height:220px;width:220px;opacity:.4}.chat[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;opacity:.8}.chat-status-icon[_ngcontent-%COMP%]{font-size:14px;height:14px;width:14px;line-height:22px;margin-right:6px}.author-status[_ngcontent-%COMP%]{font-size:13px}.chat-sidenav[_ngcontent-%COMP%]{border-right:1px solid transparent;overflow:hidden}.chat-content[_ngcontent-%COMP%]{padding:12px;height:calc(100vh - (56px + 56px + 174px))}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 254px))}.chat-sidenav-list[_ngcontent-%COMP%]{height:100%}.person-info-sidenav[_ngcontent-%COMP%]{width:280px}.person-info-sidenav[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400}.person-info-sidenav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%}@media (max-width:960px){.chat-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 130px))}.chat-content[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 154px))}.chat-content.actions-visible[_ngcontent-%COMP%]{height:calc(100vh - (56px + 56px + 236px))}}"]}),t})();var E=c("DXe4");const G=[{path:"",component:B,pathMatch:"full"}];let K=(()=>{class t{}return t.\u0275mod=h.Wb({type:t}),t.\u0275inj=h.Vb({factory:function(e){return new(e||t)},imports:[[n.c,a.h.forChild(G),i.j,s.c,o.a,i.r,E.a]]}),t})()}}]);