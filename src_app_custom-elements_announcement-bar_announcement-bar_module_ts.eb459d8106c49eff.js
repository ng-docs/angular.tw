"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_announcement-bar_announcement-bar_module_ts"],{6042:(A,c,o)=>{o.r(c),o.d(c,{AnnouncementBarModule:()=>s});var i=o(4666),m=o(8987),h=o(4466),u=o(3158),d=o(635),f=o(6403),n=o(2560),g=o(4541);function p(l,e){if(1&l&&(n.TgZ(0,"div",1)(1,"div",2),n._UZ(2,"img",3)(3,"p",4),n.TgZ(4,"a",5),n._uU(5,"Learn More"),n.qZA()()()),2&l){const t=n.oxw();n.xp6(2),n.Q6J("src",t.announcement.imageUrl,n.LSH),n.xp6(1),n.Q6J("innerHTML",t.announcement.message,n.oJD),n.xp6(1),n.Q6J("href",t.announcement.linkUrl,n.LSH)}}const r=f.bL+"announcements.json";class a{constructor(e,t){this.http=e,this.logger=t}ngOnInit(){this.http.get(r).pipe((0,u.K)(e=>(this.logger.error(new Error(`${r} request failed: ${e.message}`)),[])),(0,d.U)(e=>this.findCurrentAnnouncement(e)),(0,u.K)(e=>(this.logger.error(new Error(`${r} contains invalid data: ${e.message}`)),[]))).subscribe(e=>this.announcement=e)}findCurrentAnnouncement(e){return e.filter(t=>new Date(t.startDate).valueOf()<Date.now()).filter(t=>new Date(t.endDate).valueOf()>Date.now())[0]}static#n=this.ɵfac=function(t){return new(t||a)(n.Y36(m.eN),n.Y36(g.Y))};static#t=this.ɵcmp=n.Xpm({type:a,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(t,v){1&t&&n.YNc(0,p,6,3,"div",0),2&t&&n.Q6J("ngIf",v.announcement)},dependencies:[i.O5],encapsulation:2})}class s{constructor(){this.customElementComponent=a}static#n=this.ɵfac=function(t){return new(t||s)};static#t=this.ɵmod=n.oAB({type:s});static#e=this.ɵinj=n.cJS({imports:[i.ez,h.m,m.JF]})}}}]);
//# sourceMappingURL=src_app_custom-elements_announcement-bar_announcement-bar_module_ts.eb459d8106c49eff.js.map
