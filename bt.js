var changeFontSize=function(x) {
	let a = document.querySelectorAll(".p");
 	a[0].style.fontSize=x+"px";
 	a[1].style.fontSize=x+"px";
 	a[2].style.fontSize=x+"px"
 }
var increaseFontSize=function(i){
	let a = document.querySelectorAll(".p");
	let font = a[i-1].style.fontSize;
	let b=parseInt(font);
	if (b<30){a[i-1].style.fontSize=(b+1)+"px";}
 }
 function  decreaseFontSize(i){
 	let a = document.querySelectorAll(".p");
	let font = a[i-1].style.fontSize;
	let b=parseInt(font);
	if (b>10){a[i-1].style.fontSize=(b-1)+"px";}
 }
 function changeColor(y){
 	let a = document.querySelectorAll(".p");
 	for (var i = 0; i < a.length; i++) {
 		a[i].style.color= y ;
 	}
 }
 function changeBgColor(color){
 	document.body.style.backgroundColor = color;
 }
 function copyContent(i,j){
 	let a = document.querySelectorAll(".p");
 	a[i-1].innerText=a[j-1].innerText;
 }

