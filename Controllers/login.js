import DanhSachHinhAnh from './DanhSachHinhAnh'
import {  createData } from '../const/data';

var dsha = new DanhSachHinhAnh();
checkLogin();
$("footer").hide();


createData()

function checkLogin()
{
    var json = localStorage.getItem('ThongTinDangNhap')
    if(json != null)
    {
        location.href = "/course";
    }
}

function getAnh()
{
        var jsonAnh = localStorage.getItem("HinhAnh");
        var listAnh = JSON.parse(jsonAnh);
        dsha.mangHinhAnh = listAnh;
}


// $("#loginUser").click(function(){
//     loginUser();  
// });


