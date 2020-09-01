import HocVien from '../Models/HocVien';
import { getData, updateData } from '../const/data';


$.validator.methods.email2 = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}
jQuery.validator.addMethod("username2", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Không được có kí tự đặc biệt!');

jQuery.validator.addMethod("fullname2", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#formUpdateUserAd").validate({
    rules: {
        username2: {
            required: true,
        },
        password2: {
            required: true,
            minlength: 8
        },
        fullname2: {
            required: true,
        },
        email2: {
            required: true,
            email: true,
        },
        phone2:{
            minlength: 10,
            maxlength: 11
        }
    },
    messages: {
        username2: {
            required: "Vui lòng nhập tài khoản!",
            minlength: "Chỉ được nhập 5 - 10 kí tự!",
        },
        password2: {
            required: "Vui lòng nhập mật khẩu!",
            minlength: "Tối thiểu 8 kí tự",
        },
     
        fullname2: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email2: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        phone2: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (e) {
        updateThongTinhocVienAd()
    }
});


// Update HocVien
function updateThongTinhocVienAd()
{   
    var user =  $("#username2").val();
    var mk = $("#password2").val();
    var fullname = $("#fullname2").val();
    var email = $("#email2").val();
    var phone = $("#phone2").val();
    var maLoai = $(".selectLoai").val();
    var tenLoai = $(".tenLoai").val();

    var hocvien = new HocVien(user,mk,fullname,email,phone,maLoai,tenLoai);

    const dataUpdate = JSON.parse(localStorage.getItem("updateNguoiDung"))
     
    let indexUpdate = 0;
    let error = false
    const data = getData('dsnd')
    const dataTem = JSON.parse(JSON.stringify(data))
    
    for(let val of data){
        if(val.TaiKhoan == dataUpdate.TaiKhoan || val.Email == dataUpdate.Email){
            break;
        }
        indexUpdate++
    }

    dataTem.splice(indexUpdate,1)

    for(let val of dataTem){
        if(val.Email == hocvien.Email){
            console.log(val.Email,hocvien.Email,dataUpdate.Email)
            error = true
            break;
        }
    }

    if(error){
        return swal({
            text: "Tài khoản đã đăng ký!",
            icon: "error",
            button: "OK",
        }).then((value) => {
        });
    }


    data[indexUpdate] = hocvien
    updateData('dsnd',data)
    swal({
        text: "Cập nhật thành công!",
        icon: "success",
        button: "OK",
    }).then((value) => {
        window.location.reload()
    });
}