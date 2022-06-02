import {dataKhoaHoc, updateData} from "../const/data";

// const load = function () {
//     (function () {
//         if (window.localStorage) {
//             if (!localStorage.getItem('firstLoad')) {
//                 localStorage['firstLoad'] = true;
//                 window.location.reload();
//             }
//             else
//                 localStorage.removeItem('firstLoad');
//         }
//     })();

// }

// const load2 = function () {
//     window.onload = function () {
//         //considering there aren't any hashes in the urls already
//         if (!window.location.hash) {
//             //setting window location
//             window.location = window.location + '#loaded';
//             //using reload() method to reload web page
//             window.location.reload();
//         }
//     }
// }

const ServiceKhoaHoc = function () {
    

    this.XoaKhoaHoc = function (id) {
        var mangKQXoa = [];
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`;
        $.ajax({
            type: "DELETE",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {

                swal({
                    text: "Xóa khóa học thành công!",
                    icon: "success",
                    button: "OK",
                }).then((value) => {
                    window.location.reload();
                });
                console.log(ketqua);

            },
            error: function (ketqua) {
                alertFail("Khóa học đã ghi danh không thể xóa");
            }

        });
    }

    this.ChiTietKhoaHoc = function (id) {
        if(localStorage.getItem("DanhSachKhoaHoc")){
            const data = JSON.parse(localStorage.getItem("DanhSachKhoaHoc"));
            const res = data.find(x => x.MaKhoaHoc === id)
            var jsonCourseDetails = JSON.stringify(res);
            localStorage.setItem('ChiTietKhoaHoc', jsonCourseDetails);
            location.href = `./indexDetailCourse.html/${id}`;
        } else {
            const res = dataKhoaHoc.find(x => x.MaKhoaHoc === id)
            var jsonCourseDetails = JSON.stringify(res);
            localStorage.setItem('ChiTietKhoaHoc', jsonCourseDetails);
            location.href = `./indexDetailCourse.html/${id}`;
        }
    }

    this.ThemKhoaHoc = function (khoahoc) {
        showloader();
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`;
        $.ajax({
            type: "POST",
            url: urlAPI,
            dataType: "json",
            data: khoahoc,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Thêm khóa học thành công!",
                        icon: "success",
                        button: "OK",
                    }).then((value) => {
                        window.location.reload();
                    });
                    console.log(ketqua);
                    return true;
                }, 500);

            },
            error: function (ketqua) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Trùng mã khóa học!",
                        icon: "error",
                        button: "OK",
                    }).then((value) => {

                    });
                }, 500);

            }

        });
    }

    this.LayThongTinGhiDanhKhoaHoc = function(dskh,taikhoan){
        let dskhdk = []
        for(let kh of dskh){
            console.log(kh)
            if(kh.UserDangKy.length > 0){
                const check = kh.UserDangKy.find(x => x == taikhoan)
                if(check){
                    dskhdk.push(kh)
                }
            }
        }
        return dskhdk
    }

    this.GhiDanhKhoaHoc = function (dskh, makh, tk) {
        showloader();
        let count = 0;
        const dataDSKH = dskh.find(x => {
            if(x.MaKhoaHoc == makh){
                return true
            }
            count++
        })

        let check = true
        let data = null
        if(dataDSKH.UserDangKy.length > 0 ){
            data = dataDSKH.UserDangKy.find(x => x == tk)
            check = data ? false : true
        }

        setTimeout(function () {
            hideloader();
            swal({
                text: check ? "Ghi danh khóa học thành công!" : 'Ghi danh thất bại!',
                icon: check ? "success" : 'error',
                button: "OK",
            }).then((value) => {

                if(check){

                    dskh[count].UserDangKy.push(tk)
                    console.log(dskh)
                    updateData('dskh',dskh)

                    // load();
                    window.location.reload();
                } 
            });
        }, 1000);
    }

    this.CapNhatThongTinKhoaHoc = function (id, name, des, luotxem, creater) {
        showloader();
        var ngd = JSON.stringify({ MaKhoaHoc: id, TenKhoaHoc: name, MoTa: des, LuotXem: luotxem, NguoiTao: creater });
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/capnhatkhoahoc`;
        $.ajax({
            type: "PUT",
            url: urlAPI,
            contentType: "application/json",
            dataType: "json",
            data: ngd,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Cập nhật khóa học thành công!",
                        icon: "success",
                        button: "OK",
                    }).then((value) => {
                        window.location.reload();
                    });
                    console.log(ketqua);
                    return true;
                }, 500);

            },
            error: function (ketqua) {
                setTimeout(function () {
                    swal({
                        text: "Cập nhật khóa học thành công!",
                        icon: "success",
                        button: "OK",
                    }).then((value) => {
                        window.location.reload();
                    });
                }, 500);

            }
        });
    }

}

//Loader 
const showloader = function () {
    $(".preloader").css("display", "inline-block");
}
const hideloader = function () {
    $(".preloader").hide();
}

export {
    load, load2, ServiceKhoaHoc
}