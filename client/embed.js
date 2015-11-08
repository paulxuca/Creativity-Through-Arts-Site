(function(){
	var a,b;b=document.getElementById("typeform-full")
	a=function(a){
		var b,c;return c=new RegExp("^(?:f|ht)tp(?:s)?://([^/]+)","im"),
		b=a.origin.match(c)[1].toString(),/typeform/.test(b)?/fancy/.test(a.data)?!1:"ESC"!==a.data&&"form-submit"!==a.data?window.location.href=a.data:void 0:!1},
		window.addEventListener?window.addEventListener("message",a):window.attachEvent&&window.attachEvent("onmessage",a)}).call(this);