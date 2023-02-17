"use strict";(self.webpackChunkwarehouse_system_app=self.webpackChunkwarehouse_system_app||[]).push([[67],{3067:(S,p,s)=>{s.r(p),s.d(p,{ProductFormComponent:()=>a});var d=s(6895),r=s(433),l=s(4004);class m{static uniqueCodeValidator(e){return t=>e.getProducts().pipe((0,l.U)(i=>i.some(u=>u.code===t.value)?{codeExists:!0}:null))}static checkLocationValidator(e){return t=>e.getProducts().pipe((0,l.U)(i=>i.some(u=>u.floor===t.get("productFloor").value&&u.section===t.get("productSection").value)?{locationTaken:!0}:null))}}var o=s(8256),_=s(3926),f=s(4940);function g(n,e){1&n&&(o.TgZ(0,"span",15),o._uU(1,"Add Product"),o.qZA())}function h(n,e){1&n&&(o.TgZ(0,"span",15),o._uU(1,"Edit Product"),o.qZA())}function q(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Unique product code is required. "),o.qZA())}function Z(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Code format is 2-4 uppercase letters, empty space and 4-6 digits. "),o.qZA())}function F(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Code must be unique."),o.qZA())}function C(n,e){if(1&n&&(o.TgZ(0,"span"),o.YNc(1,q,2,0,"span",16),o.YNc(2,Z,2,0,"span",16),o.YNc(3,F,2,0,"span",16),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.code.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.code.hasError("pattern")),o.xp6(1),o.Q6J("ngIf",t.code.hasError("codeExists"))}}function T(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Product quantity is required. "),o.qZA())}function v(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Maximum quantity is 100. "),o.qZA())}function P(n,e){if(1&n&&(o.TgZ(0,"span"),o.YNc(1,T,2,0,"span",16),o.YNc(2,v,2,0,"span",16),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.quantity.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.quantity.hasError("max"))}}function y(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Floor is required. "),o.qZA())}function b(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Floor range is 1-3. "),o.qZA())}function I(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Floor range is 1-3."),o.qZA())}function x(n,e){if(1&n&&(o.TgZ(0,"span"),o.YNc(1,y,2,0,"span",16),o.YNc(2,b,2,0,"span",16),o.YNc(3,I,2,0,"span",16),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.floor.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.floor.hasError("min")),o.xp6(1),o.Q6J("ngIf",t.floor.hasError("max"))}}function A(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Section is required. "),o.qZA())}function N(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Section range is 1-3. "),o.qZA())}function Q(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," Section range is 1-3."),o.qZA())}function J(n,e){if(1&n&&(o.TgZ(0,"span"),o.YNc(1,A,2,0,"span",16),o.YNc(2,N,2,0,"span",16),o.YNc(3,Q,2,0,"span",16),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.section.hasError("required")),o.xp6(1),o.Q6J("ngIf",t.section.hasError("min")),o.xp6(1),o.Q6J("ngIf",t.section.hasError("max"))}}function U(n,e){1&n&&(o.TgZ(0,"span",17),o._uU(1," This location is already taken. "),o.qZA())}function k(n,e){if(1&n&&(o.TgZ(0,"span"),o.YNc(1,U,2,0,"span",16),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",t.productForm.hasError("locationTaken"))}}function Y(n,e){if(1&n){const t=o.EpF();o.ynx(0),o.TgZ(1,"button",18),o.NdJ("click",function(){o.CHM(t);const u=o.oxw();return o.KtG(u.onDelete())}),o._uU(2," Delete Product "),o.qZA(),o.BQk()}}const c=function(n){return{"is-invalid":n}},E=function(n){return{"is-disabled":n}};class a{get id(){return this.productForm?.get("productId")}get code(){return this.productForm?.get("productCode")}get quantity(){return this.productForm?.get("productQuantity")}get floor(){return this.productForm?.get("productFloor")}get section(){return this.productForm?.get("productSection")}constructor(e,t,i,u){this.productService=e,this.formBuilder=t,this.router=i,this.route=u,this.subscriptions=[]}ngOnInit(){this.buildForm(),this.getRouteData(),this.isNewProduct||this.populateForm()}ngOnDestroy(){this.subscriptions.length>0&&this.subscriptions.forEach(e=>e.unsubscribe)}buildForm(){this.productForm=this.formBuilder.group({productId:[null],productCode:[null,r.kI.compose([r.kI.required,r.kI.pattern(/[A-Z]{2,4}\s[0-9]{4,6}/)]),m.uniqueCodeValidator(this.productService)],productQuantity:[null,r.kI.compose([r.kI.required,r.kI.max(100)])],productFloor:[null,r.kI.compose([r.kI.required,r.kI.min(1),r.kI.max(3)])],productSection:[null,r.kI.compose([r.kI.required,r.kI.min(1),r.kI.max(3)])]},{validators:null,asyncValidators:m.checkLocationValidator(this.productService)})}populateForm(){const e=this.route.snapshot.paramMap.get("id");this.subscriptions.push(this.productService.getProduct(+e).subscribe(t=>{this.id.setValue(t?.id),this.code.setValue(t?.code),this.code.disable(),this.quantity.setValue(t?.quantity),this.floor.setValue(t?.floor),this.section.setValue(t?.section)}))}getRouteData(){this.subscriptions.push(this.route.data.subscribe(e=>this.isNewProduct=e.isNew))}onSave(){const e={id:this.id.value?this.id.value:Math.floor(100*Math.random()),code:this.code.value,quantity:this.quantity.value,floor:this.floor.value,section:this.section.value};this.isNewProduct&&this.subscriptions.push(this.productService.createProduct(e).subscribe(()=>this.router.navigate(["/home"]))),this.isNewProduct||this.subscriptions.push(this.productService.updateProduct(e).subscribe(()=>this.router.navigate(["/home"])))}onDelete(){this.subscriptions.push(this.productService.deleteProduct(this.id.value).subscribe(()=>this.router.navigate(["/home"])))}}a.\u0275fac=function(e){return new(e||a)(o.Y36(_.M),o.Y36(r.qu),o.Y36(f.F0),o.Y36(f.gz))},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-product-form"]],standalone:!0,features:[o.jDz],decls:29,vars:25,consts:[["autocomplete","off",1,"form",3,"formGroup"],["class","form-title",4,"ngIf","ngIfElse"],["editProduct",""],[1,"form-row"],["for","code",1,"form-label"],["type","text","id","code","placeholder","Unique Product Code","formControlName","productCode",1,"form-input",3,"ngClass"],[4,"ngIf"],["for","quantity",1,"form-label"],["type","number","min","1","id","quantity","placeholder","Product Quantity","formControlName","productQuantity",1,"form-input",3,"ngClass"],["for","floor",1,"form-label"],["type","number","min","1","id","floor","placeholder","Floor 1-3","formControlName","productFloor",1,"form-input",3,"ngClass"],["for","section",1,"form-label"],["type","number","id","section","min","1","placeholder","Section 1-3","formControlName","productSection",1,"form-input",3,"ngClass"],[1,"form-footer"],["type","button",1,"form-button",3,"disabled","ngClass","click"],[1,"form-title"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],["type","button",1,"form-button",3,"click"]],template:function(e,t){if(1&e&&(o.TgZ(0,"form",0),o.YNc(1,g,2,0,"span",1),o.YNc(2,h,2,0,"ng-template",null,2,o.W1O),o.TgZ(4,"div",3)(5,"label",4),o._uU(6,"Product Code *"),o.qZA(),o._UZ(7,"input",5),o.YNc(8,C,4,3,"span",6),o.qZA(),o.TgZ(9,"div",3)(10,"label",7),o._uU(11,"Quantity *"),o.qZA(),o._UZ(12,"input",8),o.YNc(13,P,3,2,"span",6),o.qZA(),o.TgZ(14,"div",3)(15,"label",9),o._uU(16,"Floor *"),o.qZA(),o._UZ(17,"input",10),o.YNc(18,x,4,3,"span",6),o.qZA(),o.TgZ(19,"div",3)(20,"label",11),o._uU(21,"Section *"),o.qZA(),o._UZ(22,"input",12),o.YNc(23,J,4,3,"span",6),o.qZA(),o.YNc(24,k,2,1,"span",6),o.TgZ(25,"div",13)(26,"button",14),o.NdJ("click",function(){return t.onSave()}),o._uU(27," Save Product "),o.qZA(),o.YNc(28,Y,3,0,"ng-container",6),o.qZA()()),2&e){const i=o.MAs(3);o.Q6J("formGroup",t.productForm),o.xp6(1),o.Q6J("ngIf",t.isNewProduct)("ngIfElse",i),o.xp6(6),o.Q6J("ngClass",o.VKq(15,c,(t.code.touched||t.code.dirty)&&!t.code.valid)),o.xp6(1),o.Q6J("ngIf",(t.code.touched||t.code.dirty)&&!t.code.valid),o.xp6(4),o.Q6J("ngClass",o.VKq(17,c,(t.quantity.touched||t.quantity.dirty)&&!t.quantity.valid)),o.xp6(1),o.Q6J("ngIf",(t.quantity.touched||t.quantity.dirty)&&!t.quantity.valid),o.xp6(4),o.Q6J("ngClass",o.VKq(19,c,(t.floor.touched||t.floor.dirty)&&!t.floor.valid)),o.xp6(1),o.Q6J("ngIf",(t.floor.touched||t.floor.dirty)&&!t.floor.valid),o.xp6(4),o.Q6J("ngClass",o.VKq(21,c,(t.section.touched||t.section.dirty)&&!t.section.valid)),o.xp6(1),o.Q6J("ngIf",(t.section.touched||t.section.dirty)&&!t.section.valid),o.xp6(1),o.Q6J("ngIf",(t.productForm.touched||t.productForm.dirty)&&!t.productForm.valid),o.xp6(2),o.Q6J("disabled",t.productForm.invalid)("ngClass",o.VKq(23,E,t.productForm.invalid)),o.xp6(2),o.Q6J("ngIf",!t.isNewProduct)}},dependencies:[r.UX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.qQ,r.sg,r.u,d.O5,d.mk]})}}]);