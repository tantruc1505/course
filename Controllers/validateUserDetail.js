
import HocVien from '../Models/HocVien'
import DanhSachHocVien from './DanhSachHocVien';
import {ServiceHocVien} from './ServiceHocVien';
import { updateData, getData } from '../const/data';
import swal from 'sweetalert';
var serviceHocVien = new ServiceHocVien();

let pass;
let idUser;

var dsnd = getData('dsnd')


$.validator.methods.email = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

jQuery.validator.addMethod("hoten", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#userform").validate({
    rules: {
        hoten: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        hoten: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        sdt: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (form) {
        UpdateThongTin();
    }
});


$("#changePassForm").validate({
    rules: {
        oldPass: {
            required: true,
        },
        newPass: {
            required: true,
            minlength: 8,
        },
        reNewPass: {
            required: true,
            minlength: 8,
            equalTo: "#newPass",
        },
    },
    messages: {
        oldPass: {
            required: "Vui lòng nhập mật khẩu cũ!",
        },
        newPass: {
            required: "Vui lòng nhập mật khẩu mới!",
            minlength: "Tối thiểu 8 kí tự",
        },
        reNewPass: {
            required: "Vui lòng nhập lại mật khẩu mới",
            minlength: "Tối thiểu 8 kí tự",
            equalTo: "Nhập lại mật khẩu không chính xác!",
        },
      
    },
    submitHandler: function (form) {
        if(checkpassold() != true)
        {
            UpdatePass()
        }
    }
});



function checkpassold()
{
    getStoragePass();
    var error = false;
    var passcu = $("#oldPass").val();
    var inputcu = $("#oldPass");
    if(passcu != pass)
    {
        var theDiv = $("#checkOldPass");
        var theSpan = `
            <label id="errorOldPass">Mật khẩu cũ không chính xác!</label>
        `;
        theDiv.html(theSpan);
        inputcu.addClass("error");
        error = true;
        return error;
    }
    else
    {
        inputcu.removeClass("error");
        error = false;
        return error;
    }
}

function UpdateThongTin()
{  
    getStoragePass();
    var user = idUser.TaiKhoan;
    var name = $("#hoten").val();
    var email = $("#email").val();
    var sdt = $("#sdt").val();
    var maLoai = idUser.MaLoaiNguoiDung;
    var tenLoai = idUser.TenLoaiNguoiDung;

    var hocvien = new HocVien(user,pass,name,email,sdt,maLoai,tenLoai);

    let count = 0
    let ndUpdate = dsnd.find(x => {
        if(x.TaiKhoan == user){
            return true
        }
        count++
    })
    dsnd[count] = hocvien    
    updateData('dsnd',dsnd)
    localStorage.setItem("ThongTinDangNhap",JSON.stringify(hocvien))


    swal({
        text: "Cập nhật thành công!",
        icon: "success",
        button: "OK",
    }).then((value) => {
        // location.reload()
    });
    
    // dshv.CapNhatThongTinHocVien(hocvien);
    // serviceHocVien.CapNhatHocVien(hocvien);

}


function UpdatePass()
{  
    getStoragePass();
    var user = idUser.TaiKhoan;
    var mk = $("#newPass").val();
    var name = $("#hoten").val();
    var email = $("#email").val();
    var sdt = $("#sdt").val();
    var maLoai = idUser.MaLoaiNguoiDung;
    var tenLoai = idUser.TenLoaiNguoiDung;
    var hocvien = new HocVien(user,mk,name,email,sdt,maLoai,tenLoai);
    
    let count = 0
    let ndUpdate = dsnd.find(x => {
        if(x.TaiKhoan == user){
            return true
        }
        count++
    })
    ndUpdate.MatKhau = mk
    dsnd[count] = ndUpdate

    updateData('dsnd',dsnd)    
    localStorage.setItem("Pass",JSON.stringify(mk))
    localStorage.setItem("ThongTinDangNhap",JSON.stringify(hocvien))

    swal({
        text: "Cập nhật thành công!",
        icon: "success",
        button: "OK",
    }).then((value) => {
        location.reload()
    });
    
}


function getStoragePass()
{
    var jsonPass = localStorage.getItem("Pass");
    var list = JSON.parse(jsonPass);
    pass = list;

    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    idUser = JSON.parse(jsonUser);  
}
