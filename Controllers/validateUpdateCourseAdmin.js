import {ServiceKhoaHoc} from './ServiceKhoaHoc';
import { getData, updateData } from '../const/data';
let service = new ServiceKhoaHoc();

$("#formUpdateCourse").validate({
    rules: {
        idCourse2: {
            required: true,
        },
        nameCourse2: {
            required: true,
            maxlength: 30
        },
        desCourse2: {
            required: true,
            maxlength: 400
        },
    },
    messages: {
        idCourse2: {
            required: "Vui lòng nhập mã khóa học!",
        },
        nameCourse2: {
            required: "Vui lòng nhập tên khóa học!",
            maxlength: "Tối đa 30 kí tự",
        },
     
        desCourse2: {
            required: "Vui lòng nhập mô tả khóa học",
            minlength: "Tối đa 400 kí tự",
        },
    },
    submitHandler: function (form) {
        CapNhatThongTinKhoaHoc()
    }
});


// Update KhoaHoc
function CapNhatThongTinKhoaHoc()
{   
    var id = $("#idCourse2").val();
    var name = $("#nameCourse2").val();
    var des = $("#desCourse2").val();
    var img = $("#imgCourse2").val();
    var luotxem = $("#viewCourse2").val();
    var creater = $("createrCourse2").val();

    const data = getData('dskh')
    let i = 0
    for(let val of data){
        if(val.MaKhoaHoc == id){
            break;
        }
        i++
    }
    data[i].TenKhoaHoc = name
    data[i].MoTa = des

    updateData('dskh',data);
    swal({
        text: "Cập nhật thành công!",
        icon: "success",
        button: "OK",
    }).then((value) => {
        window.location.reload()
    });
}