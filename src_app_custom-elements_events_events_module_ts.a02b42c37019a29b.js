"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_events_events_module_ts"],{1122:(q,r,c)=>{c.r(r),c.d(r,{EventsModule:()=>Y});var i=c(6477),t=c(6839),m=c(745),v=c(9989),h=c(7367),f=c(3158),d=c(6403),T=c(3765),E=c(4541);const l=d.bL+"events.json";let u=(()=>{class e{constructor(n,o){this.http=n,this.logger=o,this.events=this.getEvents()}getEvents(){const n=this.http.get(l).pipe((0,f.K)(a=>(this.logger.error(new Error(`${l} request failed: ${a.message}`)),(0,m.of)([])))),o=(0,v.b)(n,{connector:()=>new h.c,resetOnDisconnect:!1});return o.connect(),o}}return e.ɵfac=function(n){return new(n||e)(t.LFG(T.eN),t.LFG(E.Y))},e.ɵprov=t.Yz7({token:e,factory:e.ɵfac}),e})();function Z(e,s){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"We don't have any upcoming speaking engagements at the moment."),t.qZA(),t.TgZ(3,"p"),t._uU(4," Until something comes up, make sure you check our "),t.TgZ(5,"a",5),t._uU(6,"YouTube channel"),t.qZA(),t._uU(7," and follow us on "),t.TgZ(8,"a",6),t._uU(9,"social media"),t.qZA(),t._uU(10,". "),t.qZA(),t.TgZ(11,"p"),t._uU(12," If you want us to be part of your event reach out on "),t.TgZ(13,"a",7),t._uU(14,"devrel@angular.io"),t.qZA(),t._uU(15,"! "),t.qZA()())}function _(e,s){1&e&&t.GkF(0)}const p=function(e){return{$implicit:e}};function x(e,s){if(1&e&&(t.ynx(0),t.YNc(1,_,1,0,"ng-container",3),t.BQk()),2&e){const n=t.oxw(),o=t.MAs(10);t.xp6(1),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,p,n.upcomingEvents))}}function C(e,s){1&e&&t.GkF(0)}function A(e,s){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.name)}}function U(e,s){if(1&e&&(t.TgZ(0,"a",11),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.s9C("href",n.linkUrl,t.LSH),t.xp6(1),t.Oqu(n.name)}}function w(e,s){if(1&e&&(t.TgZ(0,"tr")(1,"th",0),t.YNc(2,A,2,1,"span",1),t.YNc(3,U,2,2,"a",10),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("ngSwitch",!!n.linkUrl),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(3),t.Oqu(n.date.start)}}function S(e,s){if(1&e&&(t.TgZ(0,"table",8)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Event"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Start date"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,w,6,3,"tr",9),t.qZA()()),2&e){const n=s.$implicit;t.xp6(8),t.Q6J("ngForOf",n)}}let O=(()=>{class e{constructor(n){this.eventsService=n,this.pastEvents=[],this.upcomingEvents=[]}ngOnInit(){this.eventsService.events.subscribe(n=>{this.pastEvents=n.filter(o=>g(o)).sort((o,a)=>o.date.start<a.date.start?1:-1),this.upcomingEvents=n.filter(o=>!g(o)).sort((o,a)=>o.date.start<a.date.start?-1:1)})}}return e.ɵfac=function(n){return new(n||e)(t.Y36(u))},e.ɵcmp=t.Xpm({type:e,selectors:[["aio-events"]],decls:11,vars:6,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["eventsTable",""],["href","https://www.youtube.com/angular"],["href","https://twitter.com/angular"],["href","mailto:devrel@angular.io"],[1,"is-full-width"],[4,"ngFor","ngForOf"],[3,"href",4,"ngSwitchDefault"],[3,"href"]],template:function(n,o){if(1&n&&(t.TgZ(0,"h2"),t._uU(1,"Where we'll be presenting:"),t.qZA(),t.ynx(2,0),t.YNc(3,Z,16,0,"div",1),t.YNc(4,x,2,4,"ng-container",2),t.BQk(),t._UZ(5,"br"),t.TgZ(6,"h2"),t._uU(7,"Where we already presented:"),t.qZA(),t.YNc(8,C,1,0,"ng-container",3),t.YNc(9,S,9,1,"ng-template",null,4,t.W1O)),2&n){const a=t.MAs(10);t.xp6(2),t.Q6J("ngSwitch",!!o.upcomingEvents.length),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(5),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.VKq(4,p,o.pastEvents))}},dependencies:[i.sg,i.tP,i.RF,i.n9,i.ED],encapsulation:2}),e})();function g(e){return new Date(e.date.start).getTime()<Date.now()-864e5}let Y=(()=>{class e{constructor(){this.customElementComponent=O}}return e.ɵfac=function(n){return new(n||e)},e.ɵmod=t.oAB({type:e}),e.ɵinj=t.cJS({providers:[u],imports:[i.ez]}),e})()}}]);
//# sourceMappingURL=src_app_custom-elements_events_events_module_ts.a02b42c37019a29b.js.map
