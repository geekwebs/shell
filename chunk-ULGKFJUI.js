import{d as a}from"./chunk-E7SP67EP.js";import{a as _}from"./chunk-IQVSBQ3X.js";import{a as S}from"./chunk-7G2FUV74.js";import{a as k,b as y,e as P,g as A}from"./chunk-UMGCYNAL.js";import"./chunk-ZTVWNM4H.js";import{Ma as i,Na as n,Oa as h,Qa as u,Sa as r,Ta as f,Va as g,Wa as v,Xa as C,Ya as I,Z as c,Za as M,wa as p,xa as m}from"./chunk-GEQ6AVHT.js";var N=(()=>{let e=class e{constructor(d){this.ipValidatorService=d,this.ipAddress="",this.validationMessage=""}checkIP(){this.ipValidatorService.isAllowed(this.ipAddress)?this.validationMessage="IP address is allowed.":this.validationMessage="IP address is not allowed."}};e.\u0275fac=function(o){return new(o||e)(m(a))},e.\u0275cmp=c({type:e,selectors:[["app-ip-checker"]],standalone:!0,features:[I([S,a]),M],decls:10,vars:2,consts:[["placeholder","Enter IP address",3,"ngModelChange","ngModel"],[3,"click"]],template:function(o,t){o&1&&(i(0,"div")(1,"h2"),r(2,"IP Address Checker"),n(),i(3,"input",0),C("ngModelChange",function(l){return v(t.ipAddress,l)||(t.ipAddress=l),l}),n(),i(4,"button",1),u("click",function(){return t.checkIP()}),r(5,"Check IP"),n(),i(6,"p"),r(7),n()(),h(8,"hr")(9,"app-my-ip")),o&2&&(p(3),g("ngModel",t.ipAddress),p(4),f(t.validationMessage))},dependencies:[A,k,y,P,_]});let s=e;return s})();export{N as IpCheckerComponent};