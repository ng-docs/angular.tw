"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_contributor_contributor-list_module_ts"],{7283:(S,a,c)=>{c.r(a),c.d(a,{ContributorListModule:()=>U});var u=c(4666),l=c(1014),t=c(2560),b=c(635),g=c(4),m=c(5733),_=c(8987);const h=m.bL+"contributors.json",f=["Angular","Collaborators","GDE"];let C=(()=>{class o{constructor(n){this.http=n,this.contributors=this.getContributors()}getContributors(){const n=this.http.get(h).pipe((0,b.U)(r=>{const i={};return Object.keys(r).forEach(s=>{const p=r[s];p.groups.forEach(d=>{(i[d]||(i[d]=[])).push(p)})}),i}),(0,b.U)(r=>Object.keys(r).map(i=>{const s=f.indexOf(i);return{name:i,order:-1===s?f.length:s,contributors:r[i].sort(v)}}).sort(T)),(0,g.C)());return n.connect(),n}}return o.ɵfac=function(n){return new(n||o)(t.LFG(_.eN))},o.ɵprov=t.Yz7({token:o,factory:o.ɵfac}),o})();function v(o,e){return o.name.toUpperCase()>e.name.toUpperCase()?1:-1}function T(o,e){return o.order===e.order?o.name>e.name?1:-1:o.order>e.order?1:-1}var Z=c(5370);function k(o,e){1&o&&(t.TgZ(0,"button",7),t._uU(1," View Bio "),t.qZA())}function x(o,e){if(1&o&&(t.TgZ(0,"a",8),t.NdJ("click",function(r){return r.stopPropagation()}),t._UZ(1,"mat-icon",9),t.qZA()),2&o){const n=t.oxw();t.MGl("href","https://twitter.com/",n.person.twitter,"",t.LSH)}}function L(o,e){if(1&o&&(t.TgZ(0,"a",8),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(1,"mat-icon",10),t._uU(2,"link"),t.qZA()()),2&o){const n=t.oxw();t.s9C("href",n.person.website,t.LSH)}}function F(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.flipCard(i.person))}),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p",12),t._uU(4),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(2),t.Oqu(n.person.name),t.xp6(2),t.Oqu(n.person.bio)}}const G=function(o){return{flipped:o}};let N=(()=>{class o{constructor(){this.noPicture="_no-one.png",this.pictureBase=m.bL+"images/bios/"}flipCard(n){n.isFlipped=!n.isFlipped}}return o.ɵfac=function(n){return new(n||o)},o.ɵcmp=t.Xpm({type:o,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click"],[1,"contributor-bio"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return r.flipCard(r.person)}),t.TgZ(2,"h3"),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"div",3),t.YNc(6,k,2,0,"button",4),t.YNc(7,x,2,1,"a",5),t.YNc(8,L,3,1,"a",5),t.qZA()()(),t.YNc(9,F,5,2,"button",6),t.qZA()),2&n&&(t.Q6J("ngClass",t.VKq(8,G,r.person.isFlipped)),t.xp6(3),t.Oqu(r.person.name),t.xp6(1),t.Udp("background-image","url("+r.pictureBase+(r.person.picture||r.noPicture)+")"),t.xp6(2),t.Q6J("ngIf",r.person.bio),t.xp6(1),t.Q6J("ngIf",r.person.twitter),t.xp6(1),t.Q6J("ngIf",r.person.website),t.xp6(1),t.Q6J("ngIf",r.person.isFlipped))},dependencies:[u.mk,u.O5,l.Hw],encapsulation:2}),o})();function w(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){const s=t.CHM(n).$implicit,p=t.oxw();return t.KtG(p.selectGroup(s))}),t._uU(1),t.qZA()}if(2&o){const n=e.$implicit,r=t.oxw();t.ekj("selected",n===r.selectedGroup.name),t.xp6(1),t.Oqu(n)}}function J(o,e){1&o&&t._UZ(0,"aio-contributor",7),2&o&&t.Q6J("person",e.$implicit)}function O(o,e){if(1&o&&(t.TgZ(0,"section",4)(1,"div",5),t.YNc(2,J,1,1,"aio-contributor",6),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.selectedGroup.contributors)}}let A=(()=>{class o{constructor(n,r){this.contributorService=n,this.locationService=r}ngOnInit(){const n=this.locationService.search().group||"";this.contributorService.contributors.subscribe(r=>{this.groups=r,this.groupNames=r.map(i=>i.name),this.selectGroup(n)})}selectGroup(n){n=n.toLowerCase(),this.selectedGroup=this.groups.find(r=>r.name.toLowerCase()===n)||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}return o.ɵfac=function(n){return new(n||o)(t.Y36(C),t.Y36(Z.a))},o.ɵcmp=t.Xpm({type:o,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.YNc(1,w,2,3,"button",1),t.qZA(),t.YNc(2,O,3,1,"section",2)),2&n&&(t.xp6(1),t.Q6J("ngForOf",r.groupNames),t.xp6(1),t.Q6J("ngIf",r.selectedGroup))},dependencies:[u.sg,u.O5,N],encapsulation:2}),o})(),U=(()=>{class o{constructor(){this.customElementComponent=A}}return o.ɵfac=function(n){return new(n||o)},o.ɵmod=t.oAB({type:o}),o.ɵinj=t.cJS({providers:[C],imports:[u.ez,l.Ps]}),o})()}}]);
//# sourceMappingURL=src_app_custom-elements_contributor_contributor-list_module_ts.d806c22ac9711c56.js.map
