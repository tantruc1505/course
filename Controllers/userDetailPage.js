import DanhSachHocVien from './DanhSachHocVien'
import DanhSachHinhAnh from './DanhSachHinhAnh'
import DanhSachKhoaHoc from './DanhSachkhoaHoc'
import {ServiceHocVien} from './ServiceHocVien'
import {ServiceKhoaHoc} from './ServiceKhoaHoc'
import { getData } from '../const/data'

import kh1 from '../Public/images/kh1.jpg';
import kh2 from '../Public/images/kh2.jpg';
import kh3 from '../Public/images/kh3.jpg';
import kh4 from '../Public/images/kh4.jpg';
import kh5 from '../Public/images/kh5.jpg';
import kh6 from '../Public/images/kh6.jpg';
import kh7 from '../Public/images/kh7.jpg';
import kh8 from '../Public/images/kh8.jpg';
import kh9 from '../Public/images/kh9.jpg';
import kh10 from '../Public/images/kh10.jpg';
import kh11 from '../Public/images/kh11.jpg';
import HinhAnh1 from '../Models/HinhAnh';

var dshv = new DanhSachHocVien();
var dsha = new DanhSachHinhAnh();
var dskh = new DanhSachKhoaHoc();
var dsgd = [];

var serviceHocVien = new ServiceHocVien();
var serviceKhoaHoc = new ServiceKhoaHoc();

var thongtin = [];
var pass = [];


dskh.mangKhoaHoc = getData('dskh');


ThongTinCaNhan();
setAnh()
getThongTinhGhiDanh();
SoLuongKHGD();


function SoLuongKHGD()
{
    if(dsgd == "Did not find the course")
    {
        var theP = `
        <p> Bạn chưa ghi danh khóa học nào tại Group One!
        `;
        $("#thongtin").html(theP);
        $("#thongtin").css("color","#ffb606");
    }
    else
    {
        var kq = dsgd.length;
        var theP = `
        <p> Bạn đã ghi danh ${dsgd.length} khóa học tại Group One!
        `;
        $("#thongtin").html(theP);
        $("#thongtin").css("color","#ffb606");
    }
    
}


function getThongTinhGhiDanh(){

    console.log(dskh.mangKhoaHoc)
    dsgd = serviceKhoaHoc.LayThongTinGhiDanhKhoaHoc(dskh.mangKhoaHoc,thongtin.TaiKhoan)
    
    const check = dsgd.length > 0 ? true : false
    if(!check){
        return
    }

    //setAnh();
    getAnh();

    for(let i=0;i<dsgd.length;i++)
    {
        for(let j=0;j<dskh.mangKhoaHoc.length;j++)
        {
            for(let m=0;m<dsha.mangHinhAnh.length;m++)
            {
                if(dsgd[i].MaKhoaHoc == dskh.mangKhoaHoc[j].MaKhoaHoc && dskh.mangKhoaHoc[j].MaKhoaHoc == dsha.mangHinhAnh[m].ten)
                {
                    var ul = document.getElementById("loadList");
        
                    let value = dskh.mangKhoaHoc[j];
                    //col-md-3
                    var divcol = document.createElement('div');
                    divcol.className = "col-md-4 mt-2";
            
                    //Li Course
                    var li = document.createElement('li');
                    li.id = "liCourse";
                    
                    //The A linkCourse
                    var theA = document.createElement('a');
                    theA.setAttribute('href','#');
                    theA.className = "linkCourse";
                    // theA.setAttribute('onclick','getCourseDetails("'+value.MaKhoaHoc+'")')
                    theA.onclick = function(){
                        getCourseDetails(value.MaKhoaHoc);
                    }
                    
            
                    //div .card
                    var divCard = document.createElement('div');
                    divCard.className = "card";
            
                    // div .imge
                    var divImge = document.createElement('div');
                    divImge.className = "imge";
            
                    var overlay = document.createElement('div');
                    overlay.id = "overlay";
                    divImge.appendChild(overlay);
            
                    
                    //img
                    var theImg = document.createElement('img');
                    theImg.className = "card-img-top img-fluid";
                    theImg.setAttribute('src',dsha.mangHinhAnh[m].src);
                    
                    
            
                    //card body
                    var divCardBody = document.createElement('div');
                    divCardBody.className = "card-body";
            
                    //Name Course
                    var theH4 = document.createElement('h4');
                    theH4.className = "card-title";
                    theH4.innerHTML = value.TenKhoaHoc;
            
                    //DanhGia
                    var theSpan = document.createElement('span');
                    theSpan.className = "fa fa-star checked";
                    var theSpan2 = document.createElement('span');
                    theSpan2.className = "fa fa-star checked";
                    var theSpan3 = document.createElement('span');
                    theSpan3.className = "fa fa-star checked";
                    var theSpan4 = document.createElement('span');
                    theSpan4.className = "fa fa-star checked";
                    var theSpan5 = document.createElement('span');
                    theSpan5.className = "fa fa-star checked";
            
                    //Gioi thieu
                    var theGioiThieu = document.createElement('p');
                    theGioiThieu.className = "card-text";
                    theGioiThieu.innerHTML = "Hướng dẫn "+value.TenKhoaHoc+" cơ bản đến nâng cao.";
            
                    //The Info
                    var theInfo = document.createElement('div');
                    theInfo.className = "info";
            
                    //the Info chi tiet
                    var theP1 = document.createElement('p');
                    var theI = document.createElement('i');
                    theI.className = "fa fa-user mr-1";
                    var spanName = document.createElement('span');
                    spanName.innerHTML = value.NguoiTao;
            
                    var theP2 = document.createElement('p');
                    var theI2 = document.createElement('i');
                    theI2.className = "fa fa-group mr-1";
                    var spanName2 = document.createElement('span');
                    spanName2.innerHTML = "30 member";
            
                    var theP3 = document.createElement('p');
                    var theI3 = document.createElement('i');
                    theI3.className = "fa fa-clock-o mr-1";
                    var spanName3 = document.createElement('span');
                    spanName3.innerHTML = "10 tiếng";
            
                    //Append
                    theP1.appendChild(theI);
                    theP1.appendChild(spanName);
            
                    theP2.appendChild(theI2);
                    theP2.appendChild(spanName2);
            
                    theP3.appendChild(theI3);
                    theP3.appendChild(spanName3);
            
                    theInfo.appendChild(theP1);
                    theInfo.appendChild(theP2);
                    theInfo.appendChild(theP3);
            
                    divCardBody.appendChild(theH4);
                    divCardBody.appendChild(theSpan);
                    divCardBody.appendChild(theSpan2);
                    divCardBody.appendChild(theSpan3);
                    divCardBody.appendChild(theSpan4);
                    divCardBody.appendChild(theSpan5);
                    divCardBody.appendChild(theGioiThieu);
                    divCardBody.appendChild(theInfo);
            
                    divImge.appendChild(theImg);
            
                    divCard.appendChild(divImge);
                    divCard.appendChild(divCardBody);
            
                    theA.appendChild(divCard);
                    li.appendChild(theA);
                    divcol.appendChild(li);
            
                    ul.appendChild(divcol);
                }
            } 
        }
    }
}

function getCourseDetails(id)
{
    serviceKhoaHoc.ChiTietKhoaHoc(id);
}

function HinhAnh()
{
    var imgRandom = Math.floor((Math.random() * 11) + 1);
    if(imgRandom == 1)
    {
        return kh1;
    }
    if(imgRandom == 2)
    {
        return kh2;
    }
    if(imgRandom == 3)
    {
        return kh3;
    }
    if(imgRandom == 4)
    {
        return kh4;
    }
    if(imgRandom == 5)
    {
        return kh5;
    }
    if(imgRandom == 6)
    {
        return kh6;
    }
    if(imgRandom == 7)
    {
        return kh7;
    }
    if(imgRandom == 8)
    {
        return kh8;
    }
    if(imgRandom == 9)
    {
        return kh9;
    }
    if(imgRandom == 10)
    {
        return kh10;
    }
    if(imgRandom == 11)
    {
        return kh11;
    }
}

function setAnh()
{
    var json = localStorage.getItem("HinhAnh");
    if(json == null || json == undefined)
    {
        for(let i = 0; i < dskh.mangKhoaHoc.length; i++)
        {       
                var ten = dskh.mangKhoaHoc[i].MaKhoaHoc;
                var src = HinhAnh();
                var img = new HinhAnh1(ten,src);
                dsha.ThemHinhAnh(img);
        }
        var jsonAnh = JSON.stringify(dsha.mangHinhAnh);
        localStorage.setItem("HinhAnh",jsonAnh);
    }
    else
    {
        getAnh();
        var kqdsha = dsha.mangHinhAnh.length;
        var kqdskh = dskh.mangKhoaHoc.length;
        if(kqdsha != kqdskh)
        {
            dsha.mangHinhAnh = [];
            console.log(kqdsha);
            for(let i = 0; i < dskh.mangKhoaHoc.length; i++)
            {       
                    var ten1 = dskh.mangKhoaHoc[i].MaKhoaHoc;
                    var src1 = HinhAnh();
                    var img1 = new HinhAnh1(ten1,src1);
                    dsha.ThemHinhAnh(img1);
            }
            var jsonAnh = JSON.stringify(dsha.mangHinhAnh);
            localStorage.setItem("HinhAnh",jsonAnh);
        }
    }
    
}

function getAnh()
{
    var jsonAnh = localStorage.getItem("HinhAnh");
    var listAnh = JSON.parse(jsonAnh);
    dsha.mangHinhAnh = listAnh;
}




function ThongTinCaNhan()
{
    getStorage();
    $("#nameUser").html(thongtin.TaiKhoan);
    $("#taikhoan").val(thongtin.TaiKhoan);    
    $("#hoten").val(thongtin.HoTen);
    $("#email").val(thongtin.Email);
    $("#sdt").val(thongtin.SoDT);
}



function getStorage()
{
    var sessionLogin = localStorage.getItem("ThongTinDangNhap");
    if(sessionLogin == null)
    {
        location.href = "../User/LoginUser.html";
    }
    else
    {
        thongtin = JSON.parse(sessionLogin)
    }
    
}





// $("#updateInfo").click(function(){
//     UpdateThongTin();
// });

// $("#changePass").click(function(){
//     DoiMatKhau();
// });



//  load more
$("#loadList li").css("display","none");
loadMore();

function loadMore() {

    $(".loader").css("border-top","3px solid #ffff");
    $(".loader").css("border-right","3px solid #ffff");
    $(".loader").css("border-bottom","3px solid #ffff");
    $(".loader").css("border-left","3px solid #ffb606");

    let size_li = $("#loadList li").length;
    let x = 6;
    if (size_li > 6) {
        $("#loadMore").show();
    }
    $('#loadList li:lt(' + x + ')').show();
    $('#loadMore').click(function () {
        showloader();
        setTimeout(function(){
            hideloader();
            x = (x + 6 <= size_li) ? x + 6 : size_li;
            $('#loadList li:lt(' + x + ')').show();
            if (x == size_li) {
                $("#loadMore").hide();
            }
        },500);
        

    });
}
