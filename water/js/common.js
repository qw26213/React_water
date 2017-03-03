var ip_url = "http://123.57.47.236:9002";
//var ip_url = "";
localStorage.waterCorpId ="1";
localStorage.token = 'KrKKeVRMdK2ODLFlEfOP3Jb-Zrlhq3YkgoKgqwg-VuiAdojdHS8gQccEfC7VEiAYqUEG8IrVdvKPHk4EOiLBTQ';
if(isWeiXin()){
    switchCss();
}else{
    // location.href = 'http://test.iwaterdata.com/page/water/noauthorize.html';// 不是微信跳至noauthorize.html
}
// backLogin();
function backLogin(){
    if(localStorage.token){
        openHref('login.html?flag=index');
    }
}

function getPagename (){
        var strUrl=window.location.href;
        var arrUrl=strUrl.split("/");
        var strPage=arrUrl[arrUrl.length-1];
        return strPage;
}
//判断是否为空
function isNull(value) {
	if(value.replace(/(^s*)|(s*$)/g, "").length ==0
		|| value=="null"){
		return true;
	}else{
		return false;
	}
}
//js模拟post提交
function post(URL, PARAMS) {        
    var temp = document.createElement("form");        
    temp.action = URL;        
    temp.method = "post";        
    temp.style.display = "none";        
    for (var x in PARAMS) {        
        var opt = document.createElement("textarea");        
        opt.name = x;        
        opt.value = PARAMS[x];        
        temp.appendChild(opt);        
    }        
    document.body.appendChild(temp);        
    temp.submit();        
    return temp;        
} 

//判断是否微信浏览器
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
//----------获取url参数值-----------	
function getQueryString(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	 var r = window.location.search.substr(1).match(reg);
	 return  r != null ? unescape(r[2]) : null;
}

//免费获取验证码
var wait = 60;
function time() {
    if (wait <= 0) {
        wait = 60;
        $('#timeCode').addClass('uhide');
        $('#getCode').removeClass('uhide');
    } else {
        $('#timeCode').removeClass('uhide');
        $('#getCode').addClass('uhide');
        $("#waite").html(wait);
        wait--;
        setTimeout(function() {
            time()
        }, 1000);
    }
}
//-----判断手机号--------
function telCheck(mobile){
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
        return false;
    }
        return true;
}
//邮箱验证
function email_check(r){
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!pattern.test(r)) {
        return false;
    }
    else {
        return true;
    }
}
//判断邮编
function Zip_code_check(number){
    var re=  /^[0-9][0-9]{5}$/;
    if(!re.test(number)){
        return false;
    }else{
        return true;
    }
}
// ----------打开连接----------
function openHref(str){
	window.location.href = str;
}
// ----------返回上一页----------
function back(){
	window.history.go(-1);
}
// ----------去除连接符----------
function delLinkMark(str){
	return str.replace(/-/g,""); 
}
// ----------格式化日期----------
function formatDate(num){
	if(parseInt(num)<10){
		return "0"+num;
	}else{
		return num;
	}
}
//----------调试log--------
function log(str){
	console.log(str);
}
//----------取消冒泡--------
function stopProp(e) {
	if (e.stopPropagation)
	e.stopPropagation();
	else
	e.cancelBubble = true;
}
//-----------刷新本页面----------
function refresh(){
	document.location.reload();
}

//-----------数字验证----------
function isNumber(str){
	var retel = /^[\d]+$/;
	if(retel.test(str)||str==""){
		return true;
	}else{
		return false;
	}
}

// 去除数组空元素
 function ClearNullArr(arr){
    var len=arr.length;
    for(var i=0;i<len;i++){
    if(!arr[i]||arr[i]==''||arr[i] == undefined){
	    arr.splice(i,1);
	    len--;
	    i--;
	 }
    }
    return arr;
}

// 去除数组重复元素
function uniqueArr(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

// 原生js获取id对象
function $$(id){
	return document.getElementById(id);
}

//app下载
function downApp(){
	window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.iwater";
}
//-------------创建key（localstorage）----------
function setLocVal(key,value){
    window.localStorage[key] = value;
}

//-------------获取key（localstorage）----------
function getLocVal(key){
    if(window.localStorage[key])
        return window.localStorage[key];
    else
        return "";
}
//-------------获取key（localstorage）----------
function clearLocVal(key){
    if(key)
        window.localStorage.removeItem(key);
    else
        window.localStorage.clear();
}
/*是否含数字*/
function hasNum(str) {
    reg = /[0-9]/g;
    return reg.test(str)
}
//是否含字母
function isEng(str) {
    reg = /^[A-Za-z]+$/;
    return reg.test(str)
}
//是否是字符串
function IsString(str){
           return (typeof str == "string" || str.constructor == String);
}

//是否含市、州或县或区、乡或镇或街或路或道、村或组或号或室，港澳台除外
function checkAddress(str) {
    var result = str.match(/市|州|县|区|乡|镇|街|路|道|村|组|号|室|港|澳|台/);
    if (result == null)
     return true;
    return false;
}
//获取当前日期
function getNowDay(){
    var d = new Date();
    var str1 = d.getFullYear()
    var str2 = d.getMonth() + 1;
    var str3 = d.getDate();
    if(str2<10){
        str2 = '0'+str2;
    }
    return str1+'-'+str2+'-'+str3;
}
//获取当前时间
function getNowTime(){
    var d = new Date();
    var str1 = d.getHours();
    var str2 = d.getMinutes();
    var str3 = d.getSeconds();
    str1 = parseInt(str1);
    str2 = parseInt(str2);
    str3 = parseInt(str3);
    if(str1<10){
        str1 = '0'+str1;
    }
    if(str2<10){
        str2 = '0'+str2;
    }
    if(str3<10){
        str3 = '0'+str3;
    }
    return str1+':'+str2+':'+str3;
}
//****获取当前时间返回20151102格式日期
function getCurDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear()+"" + month+""+ strDate;
    return currentdate;
}
// 根据时间戳格式化日期
function add0(m){return m<10?'0'+m:m }
function formatDate(stortime){
    if(stortime==undefined){
        return "2000-00-00 00:00:00";
    }else{
    var time = new Date(stortime);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d);
    }
}

// 取随机数
function RndNum(MaxNum, MinNum) {
    return parseInt((MaxNum - MinNum + 1) * Math.random() + MinNum)
}
// 进度条函数
function SetProgress(progress) {
    if (progress) {
        $("#" + progress_id + " > div").css("width", String(progress) + "%"); //控制#loading div宽度 
        $("#" + progress_id + " > div").html(String(progress) + "%"); //显示百分比 
    }
}
// 进度函数
function doProgress() {
    linkdata = RndNum(100, 300)
    if (i > 100) {
        alert("恭喜您，歌曲上传成功！谢谢您对九酷的支持！") //加载完毕提示 
        return;
    }
    if (i <= linkdata) {
        setTimeout("doProgress()", linkdata);
        SetProgress(i);
        i++;
    }
}
//-----清空对应输入框--------------
function clearInput(id) {
    document.getElementById(id).value = "";
}
//-----是否是anroid系统--------------
var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0) ? true : false;
//加“1”
function addone(id) {
    document.getElementById(id).value++;
}
//减“1”
function removeone(id) {
    if(document.getElementById(id).value>1)
    document.getElementById(id).value--;
}
// 开启loading页
function Loading(){
    var loadingHtml = '<div class="loadingbox"><div class="loading_icon ub-img7"></div><p>正在加载</p></div>';
    $('.loadinger').show().html(loadingHtml);
}
// 关闭loading页
function closeLoading(){
    $('.loadinger').hide().html("");
}
// -------提示框------
function textTip(text){
    $(".textTips span").text(text);
    $(".textTips").fadeIn(150);
    setTimeout(function(){
        $(".textTips").fadeOut(500);
    },1500);
}

function switcha(obj){
    $(obj).toggleClass('icon-on');
}
// 水表号列表显示与隐藏
function toggle(){
    $('.arr-down').toggleClass('arr-up')
    $('.clocklist').slideToggle();
}
function showSelect(type){
    var placeHtml = '<div class="selects mt10"><li><p class="plr15 h30 lh30">J</p>';
            if(type==0)
            placeHtml +='<div class="h50 lh50 ulev1 plr15 bgb btbc " onclick="selectthis(0)">江西鹰潭水司</div>';
            else
            placeHtml +='<div class="h50 lh50 ulev1 plr15 bgb btbc " onclick="selectthis(1)">江西鹰潭水司</div>';
        placeHtml  +='</li></div><div class="nextFoot tx-c plr15"><div class="w100 h40" onclick="closeBox()">返回</div></div>';
    $('.selectbox').html(placeHtml).show();
}
function selectthis(type){
    closeBox();
    if(type==0){
        localStorage.place = "鹰潭水司";
        $('#waterCor').html('鹰潭水司');
    }else{
        $('#waterCor').html('江西鹰潭水司');
    }
}
function closeBox(){
    $('.selectbox').hide();
}
function placeInit(){
    if(localStorage.place){
        $('#waterCor').html('鹰潭水司');
    }
}




