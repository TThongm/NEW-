// JavaScript Document
function kiemtra(x)
{
var user,pass;
user = x.txt_user.value;
pass=x.txt_pass.value;
if(user=="")
{
alert("Bạn chưa nhập USER NAME");
x.txt_user.focus();
}
else if(pass=="")
{
alert("Bạn chưa nhập Password");
x.txt_pass.focus();
}
else if(user=="12TM" && pass=="12345")
window.location="https://www.facebook.com/pthong.1710/";
else
alert("Bạn phải đăng ký thành viên");
}
