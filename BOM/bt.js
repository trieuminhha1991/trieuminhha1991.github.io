// Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong và cây DOM được tạo thành
// Thực hiện các hành động bên trong khi click vào các nút số
let dapan=["A","B","C","D","A"];
let b=[];
function C1(button){
    let a=document.querySelectorAll(".c1");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#5cb85c"};
    button.style.background = "red";
        b[0]=button.innerHTML;
}
function C2(button){
    let a=document.querySelectorAll(".c2");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#5cb85c"};
    button.style.background = "red";
        b[1]=button.innerHTML;
}
function C3(button){
    let a=document.querySelectorAll(".c3");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#5cb85c"};
    button.style.background = "red";
        b[2]=button.innerHTML;
}
function C4(button){
    let a=document.querySelectorAll(".c4");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#5cb85c"};
    button.style.background = "red";
        b[3]=button.innerHTML;
}
function C5(button){
    let a=document.querySelectorAll(".c5");
    for (var i = 0; i < a.length; i++) {
        a[i].style.backgroundColor="#5cb85c"};
    button.style.background = "red";
        b[4]=button.innerHTML;
}
function kiemtra(){
        let s=0;
        for (var i = 0; i <= 4; i++) {
            if (b[i]==dapan[i]) {s++;}
        }
        if(s==5){location.href="cm.html"}
        else{location.href="lamlai.html"}
}
