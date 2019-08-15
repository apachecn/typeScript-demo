//申明定义
let age:number=12;
//类型不符
age="abc"

//不申明
let city="shangHai";
//类型推断
city=123;
console.log(city);

//可以是任意值
let value:any="iphone";
value=13;

//为函数设置返回值
function getUserName():string{
    return "xiaoming";
}

//返回的类型不符号
function getUserAge():number{
    return "a"
}

//返回的类型不符号
function getUserId():any{
    return "a"
}

//不需要返回值
function startLogin():void{
    return 10;
}

//为参数设置默认值，说明，默认参数一定要设置在后面，否则不传会报错
function getUrlParams(key:string,url:string=window.location.href):string{
    return "abcd"
}
//类型不符
getUrlParams("uid","/experts/10?uid=10&accessToken=abcd");
getUrlParams("uid");
//不传会报错
// getUrlParams();

function isVersion(currentVersion?:string,oldVersion?:string):boolean{
    return true;
}
isVersion("2.12.11","2.12.00")
isVersion();

//可选参数一定要写在必选参数的后面
//要有可选参数的时候，要在方法体内处理可选参数没传的情况
function getLength(a:string,b?:string,c:number=1){
    return a.length+(b ? b.length : 0)+1;
}
getLength("hello");


//类型
/*
array,
string,
number,
function,
boolean,
any,
object
*/

