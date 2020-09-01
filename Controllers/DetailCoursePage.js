import DanhSachHinhAnh from './DanhSachHinhAnh';
import DanhSachKhoaHoc from './DanhSachkhoaHoc';
import DanhSachHocVien from './DanhSachHocVien';
import {ServiceKhoaHoc} from './ServiceKhoaHoc';
import { getData, createData } from '../const/data';


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



var dsha = new DanhSachHinhAnh();
var dskh = new DanhSachKhoaHoc();
var detailCourse = [];
var dsgd = [];
var thongtinUser = [];
var serviceKhoaHoc = new ServiceKhoaHoc();

createData()

const arr = location.pathname.split("/")
const param = arr[arr.length - 1]

dskh.mangKhoaHoc = getData('dskh');
detailCourse = dskh.mangKhoaHoc.find(x => x.MaKhoaHoc == param)

console.log(arr,param,detailCourse)

setAnh()

loadCourseDetails();
// loadMore();
DanhSachDaGhiDanh();
checkView();



function loadCourseDetails() {
    getAnh();
    
    for(let i=0; i < dsha.mangHinhAnh.length; i++)
    {
        if(detailCourse.MaKhoaHoc == dsha.mangHinhAnh[i].ten)
        {
            $(".imgCourse").attr('src', "/"+dsha.mangHinhAnh[i].src);
            $(".imgCourse").css('width', '100%');
        }
    }


    $(".nameTeacher").html(detailCourse.NguoiTao);
    $(".nameCourse").html(detailCourse.TenKhoaHoc);

    var NoiDung = $("#linkCourse");
    var iframe = $(detailCourse.MoTa);
    NoiDung.append(iframe);
    $("iframe").attr("width","100%");
    
}

function GhiDanhKhoaHoc() {
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser != null)
    {
        var user = JSON.parse(jsonUser);
        serviceKhoaHoc.GhiDanhKhoaHoc(dskh.mangKhoaHoc,detailCourse.MaKhoaHoc,user.TaiKhoan);
    }
   
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


function DanhSachDaGhiDanh()
{
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser != null)
    {
        var list = JSON.parse(jsonUser);
        thongtinUser = list;

        const checkGhiDanh = detailCourse.UserDangKy.find(x => x === thongtinUser.TaiKhoan)
        if(checkGhiDanh != null)
        {
            $(".btnEnroll").css("display","none");
        }
    }

    
    
}


function checkView() {

    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser == null){
        $("#viewCourse").attr("data-target","");
        $("#viewCourse").html("Login để xem")
    }
    else
    {

        for(let i = 0; i < dsgd.length; i++)
        {
            if(detailCourse.MaKhoaHoc == dsgd[i].MaKhoaHoc)
            {
                 $("#viewCourse").attr("data-target","#myModal");
                 break;
            }
            else
            {
                $("#viewCourse").attr("data-target","");
                $("#viewCourse").html("Login để xem")
            }
            
        }
      
    }
   
}


// function loadMore() {
//     size_li = $("#myList li").size();
//     x = 3;
//     if (size_li > 3) {
//         $("#loadMore").show();
//     }
//     $('#myList li:lt(' + x + ')').show();
//     $('#loadMore').click(function () {
//         x = (x + 3 <= size_li) ? x + 3 : size_li;
//         $('#myList li:lt(' + x + ')').show();
//         if (x == size_li) {
//             $("#loadMore").hide();
//         }

//     });
// }


$(".btnEnroll").click(function () {

    
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser == null)
    {
        location.href = "/login";
    }
    else
    {
        swal({
            text: "Bạn chắc chắn muốn ghi danh khóa học này?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    GhiDanhKhoaHoc(); 
                }
            });
    }

});