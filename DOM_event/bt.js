// Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong và cây DOM được tạo thành
// Thực hiện các hành động bên trong khi click vào các nút số
function nhan(button){
    if (button.innerHTML != "Ans") {
        Dong1.value+=button.innerHTML;}
    if (button.innerHTML == "Ans"){
        Dong1.value=Dong2.value;
        Dong2.value="";
    }
}
function bang(){
    Dong2.value+=eval(Dong1.value);
}
function lamlai(){
    Dong1.value="";
    Dong2.value=""
}
function xoa(){
    Dong1.value=Dong1.value.substr(0,Dong1.value.length-1);
    Dong2.value=""
}
function can(){
    var a=eval(Dong1.value)
    if (a>=0){
    Dong2.value+=Math.sqrt(a);}
    else{Dong2.value="Không có căn bậc hai"}
}
function binhphuong(){
    var a=eval(Dong1.value);
    Dong2.value+=a*a;
}
function phantram(){
    var a=eval(Dong1.value);
    Dong2.value+=a/100;
}