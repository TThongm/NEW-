// JavaScript Document
function kiemtra()
{
     //Kiem tra ten dang nhap
    
     var tenDN=document.getElementById("tenDN");
     if(tenDN.value =="")
         {
             alert("Tên Đăng Nhập Không Được Để Trống!!!");
             tenDN.focus();
         }

         //Kiem tra dia chi 
         var diachi=document.getElementById("diachi");
         if(diachi.value =="")
         {
            alert("Địa chỉ không được để trống !!");
            diachi.focus();
         }
         //Kiem tra so dien thoai
         var dienthoai=document.getElementById("dienthoai");
         if(dienthoai.value =="")
         {
            alert("Số điện thoại không đc để trống");
            dienthoai. focusElement();
         }
         else if(typeof Number(dienthoai.value)==true)
        {
            alert("Số điện thoại phải là kí tự !!!");
            dienthoai.focus();
        }
        else
            alert(" Đăng ký thành công ");
}
function Xoa()
{
    form1.reset();
}



