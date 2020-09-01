
const dataKhoaHoc = [
    {
        MaKhoaHoc: 'javascript',
        TenKhoaHoc: "Javascript",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'angular',
        TenKhoaHoc: "Angular 4",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'reactjs',
        TenKhoaHoc: "Reactjs",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'nodejs',
        TenKhoaHoc: "Nodejs",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'mongodb',
        TenKhoaHoc: "MongoDB",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'sqlserver',
        TenKhoaHoc: "SQL Server",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'vuejs',
        TenKhoaHoc: "Vue JS",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    },
    {
        MaKhoaHoc: 'reactnative',
        TenKhoaHoc: "React Native",
        MoTa: "Hướng dẫn cơ bản đến nâng cao",
        NguoiTao: "test",
        LuotXem: 0,
        HinhAnh: "",
        UserDangKy: [],
    }
]
const dataUser = [
    {
        Email: "admin@gmail.com",
        HoTen: "admin",
        MaLoaiNguoiDung: "GV",
        SoDT: "0909015594",
        TaiKhoan: "admin",
        TenLoaiNguoiDung: "Admin",
        MatKhau: 'admin'
    },
    {
        Email: "helloworld@gmail.com",
        HoTen: "helloworld",
        MaLoaiNguoiDung: "HV",
        SoDT: "0909015594",
        TaiKhoan: "helloworld",
        TenLoaiNguoiDung: "Học viên",
        MatKhau: '123'
    }
]



const createData = () => {
    localStorage.getItem("DanhSachKhoaHoc") ? null : localStorage.setItem("DanhSachKhoaHoc", JSON.stringify(dataKhoaHoc))
    localStorage.getItem("DanhSachNguoiDung") ? null : localStorage.setItem("DanhSachNguoiDung", JSON.stringify(dataUser))
}
const getData = (type) => {
    switch (type) {
        case 'dskh':
            return  JSON.parse(localStorage.getItem("DanhSachKhoaHoc"))
        case 'dsnd':
            return  JSON.parse(localStorage.getItem("DanhSachNguoiDung"))
        case 'ctkh':
            return JSON.parse(localStorage.getItem("ChiTietKhoaHoc"))
        default:
            break;
    }
}
const updateData = (type, data) => {
    switch (type) {
        case 'dskh':
            localStorage.removeItem("DanhSachKhoaHoc")
            localStorage.setItem("DanhSachKhoaHoc", JSON.stringify(data))
            break;
        case 'dsnd':
            localStorage.removeItem("DanhSachNguoiDung")
            localStorage.setItem("DanhSachNguoiDung", JSON.stringify(data))
            break;
        case 'ctkh':
            localStorage.removeItem("ChiTietKhoaHoc")
            localStorage.setItem("ChiTietKhoaHoc", JSON.stringify(data))
        default:
            break;
    }
}



module.exports = { dataKhoaHoc,createData, updateData, getData };
