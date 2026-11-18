import {roles} from './catalog';
export type Project={id:string;name:string;budget:number;spent:number;progress:number;planned:number;manager:string;status:string;contract:string};
export type Unit={id:string;projectId:string;building:string;floor:number;area:number;price:number;status:string;customer?:string};
export type Request={id:string;projectId:string;title:string;amount:number;status:string;author:string;reason?:string;kind:'purchase'|'agent';action?:string};
export type Task={id:string;projectId:string;title:string;employee:string;status:string};
export type RecordItem={id:string;module:string;title:string;projectId:string;value:string;status:string;note:string};
export type Store={version:1;projects:Project[];units:Unit[];requests:Request[];tasks:Task[];records:RecordItem[];activity:{id:string;at:string;actor:string;text:string}[]};
export const money=(n:number)=>new Intl.NumberFormat('ar-LY',{maximumFractionDigits:0}).format(n)+' د.ل';
export const seed:Store={version:1,projects:[
{id:'P-101',name:'مجمع النخيل السكني',budget:12500000,spent:8100000,progress:58,planned:72,manager:'مهندس تجريبي 01',status:'يحتاج متابعة',contract:'C-101'},
{id:'P-102',name:'برج الأفق للأعمال',budget:8200000,spent:3400000,progress:43,planned:45,manager:'مهندس تجريبي 02',status:'قيد التنفيذ',contract:'C-102'},
{id:'P-103',name:'تطوير حي الواحة',budget:6400000,spent:1850000,progress:31,planned:30,manager:'مهندس تجريبي 03',status:'قيد التنفيذ',contract:'C-103'},
{id:'P-104',name:'مركز الروابي التجاري',budget:4700000,spent:4100000,progress:86,planned:90,manager:'مهندس تجريبي 04',status:'قيد التنفيذ',contract:'C-104'}],
units:Array.from({length:12},(_,i)=>({id:`U-${101+i}`,projectId:i<8?'P-101':'P-103',building:i<8?'المبنى A':'المبنى B',floor:Math.floor(i/4)+1,area:125+(i%4)*20,price:385000+(i%4)*45000,status:i===2?'مباعة':i===5?'محجوزة':'متاحة',customer:i===5?'عميل العرض':undefined})),
requests:[{id:'PR-201',projectId:'P-101',title:'توريد حديد تسليح 20 طن',amount:76000,status:'بانتظار الاعتماد',author:'engineer',kind:'purchase'},{id:'PR-202',projectId:'P-102',title:'معدات سلامة للموقع',amount:12500,status:'بانتظار الاعتماد',author:'buyer',kind:'purchase'},{id:'PR-203',projectId:'P-103',title:'مواد عزل للمبنى B',amount:24000,status:'معتمد',author:'buyer',kind:'purchase'}],
tasks:[{id:'T-101',projectId:'P-101',title:'مراجعة برنامج أعمال الهيكل',employee:'موظف تجريبي 01',status:'قيد التنفيذ'},{id:'T-102',projectId:'P-102',title:'اعتماد مخطط الطابق الثاني',employee:'موظف تجريبي 02',status:'مفتوحة'}],
records:[
{id:'INV-01',module:'investment',title:'دراسة تطوير مجمع النخيل',projectId:'P-101',value:'15,800,000',status:'للمراجعة',note:'إيراد متوقع؛ تكلفة 12,500,000 د.ل؛ افتراض توضيحي غير سوقي'},
{id:'CRM-01',module:'sales',title:'عميل تجريبي 01',projectId:'P-101',value:'450,000',status:'متابعة',note:'يبحث عن وحدة 145 م²؛ اتصال متابعة خلال يومين'},
{id:'FIN-01',module:'finance',title:'مستخلص الهيكل رقم 03',projectId:'P-101',value:'640,000',status:'للمراجعة',note:'مراجعة نسبة الإنجاز قبل الاعتماد؛ لا يمثل قيدًا مرحلًا'},
{id:'FIN-02',module:'finance',title:'ذمة مورد تجريبي 01',projectId:'P-102',value:'180,000',status:'مستحق',note:'التزام تجريبي خلال 30 يومًا'},
{id:'EMP-01',module:'hr',title:'موظف تجريبي 01',projectId:'P-101',value:'مهندس موقع',status:'نشط',note:'حضور 20 يومًا؛ عقد تجريبي؛ لا بيانات شخصية حقيقية'},
{id:'EMP-02',module:'hr',title:'موظف تجريبي 02',projectId:'P-102',value:'مهندس مكتب فني',status:'إجازة',note:'إجازة يومين في جدول العرض'},
{id:'STK-01',module:'inventory',title:'حديد تسليح • طن',projectId:'P-101',value:'8',status:'منخفض',note:'حد إعادة الطلب 15 طنًا؛ مورد تجريبي 01'},
{id:'STK-02',module:'inventory',title:'إسمنت • كيس',projectId:'P-103',value:'450',status:'متاح',note:'حد إعادة الطلب 200 كيس'},
{id:'EQ-01',module:'equipment',title:'حفارة تجريبية 01',projectId:'P-101',value:'1,240 ساعة',status:'صيانة قريبة',note:'صيانة دورية عند 1,250 ساعة؛ تكلفة الساعة 180 د.ل'},
{id:'EQ-02',module:'equipment',title:'شاحنة تجريبية 02',projectId:'P-102',value:'340 لتر',status:'جاهزة',note:'وقود هذا الشهر؛ مشغل تجريبي 02'},
{id:'RFI-01',module:'engineering',title:'استفسار حول مناسيب الأساسات',projectId:'P-101',value:'R03',status:'بانتظار الرد',note:'مخطط إنشائي إصدار 03؛ جدول كميات مرتبط C-101'},
{id:'QA-01',module:'quality',title:'استكمال حواجز السلامة',projectId:'P-101',value:'أولوية مرتفعة',status:'مفتوحة',note:'تعيين مسؤول وتصوير الإغلاق قبل السماح بالعمل'},
{id:'C-101',module:'legal',title:'عقد مقاول فرعي تجريبي',projectId:'P-101',value:'900,000',status:'للمراجعة',note:'مراجعة ضمان الدفعة المقدمة ومدة التنفيذ'},
{id:'ADM-01',module:'admin',title:'محضر تنسيق أعمال المواقع',projectId:'P-101',value:'وارد 001',status:'محال',note:'مطلوب رد المكتب الفني على التغييرات'},
{id:'SYS-01',module:'system',title:'مراجعة صلاحيات الإدارات',projectId:'P-101',value:'16 دورًا',status:'تجريبي',note:'اختيار الدور للعرض؛ لا يمثل مصادقة أو عزلًا أمنيًا على الخادم'}],activity:[]};
export const allowed=(role:string,area:string)=>{const r=roles.find(x=>x.id===role);return !!r&&(r.allow.includes('*')||r.allow.includes(area));};
export const canApprove=(role:string,request:Request)=>request.author!==role&&(role==='gm'||(role==='finance'&&request.kind==='purchase')||(role==='pm'&&request.kind==='agent'));
export function scope(s:Store,role:string):Store {
 const projectAccess=allowed(role,'projects')||allowed(role,'executive')||allowed(role,'investment')||allowed(role,'finance')||allowed(role,'procurement')||allowed(role,'inventory')||allowed(role,'equipment')||allowed(role,'engineering')||allowed(role,'quality')||allowed(role,'legal');
 return {...s,projects:projectAccess?s.projects:[],units:(allowed(role,'properties')||allowed(role,'sales')||role==='client')?s.units.filter(u=>role!=='client'||u.status==='متاحة'||u.customer==='عميل العرض'):[],requests:allowed(role,'approvals')||allowed(role,'procurement')?s.requests:[],tasks:(allowed(role,'hr')||allowed(role,'projects'))?s.tasks:[],records:s.records.filter(r=>allowed(role,r.module)),activity:allowed(role,'system')?s.activity:[]};
}
export function decide(s:Store,id:string,role:string,approve:boolean,reason:string):Store {
 const req=s.requests.find(r=>r.id===id); if(!req||req.status!=='بانتظار الاعتماد')throw Error('الطلب غير متاح لاتخاذ قرار');
 if(!canApprove(role,req))throw Error('الدور الحالي غير مخول أو هو منشئ الطلب');
 if(!approve&&!reason.trim())throw Error('سبب الرفض مطلوب');
 const next={...s,requests:s.requests.map(r=>r.id===id?{...r,status:approve?'معتمد':'مرفوض',reason}:r)};
 if(approve&&req.kind==='agent')next.tasks=[...s.tasks,{id:'T-'+id,projectId:req.projectId,title:req.title,employee:'موظف تجريبي 01',status:'مفتوحة'}];
 return next;
}
export function reserve(s:Store,id:string):Store {const u=s.units.find(x=>x.id===id);if(!u||u.status!=='متاحة')throw Error('الوحدة غير متاحة للحجز');return {...s,units:s.units.map(x=>x.id===id?{...x,status:'محجوزة',customer:'عميل العرض'}:x)};}
export const uid=(prefix:string)=>prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,5);
