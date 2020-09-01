
const DanhSachKhoaHoc = function()
{
    this.mangKhoaHoc = [];

    this.ThemKhoaHoc = function(khoahoc)
    {
        this.mangKhoaHoc.push(khoahoc);
    }

    this.TimKiemKhoaHoc = function(name)
    {
        var mangDSKH = new DanhSachKhoaHoc();
        for(let i = 0; i < this.mangKhoaHoc.length; i++)
        {
            var value = this.mangKhoaHoc[i];
            if(value.TenKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1 || value.MaKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1) 
            {
                mangDSKH.ThemKhoaHoc(value);
            }
        }
        return mangDSKH;
    }

    this.TimKiemKhoaHoc2 = function(name)
    {
        var mangDSKH = new DanhSachKhoaHoc();
        for(let i = 0; i < this.mangKhoaHoc.length; i++)
        {
            var value = this.mangKhoaHoc[i];
            if(value.TenKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1 || value.MaKhoaHoc.toLowerCase().indexOf(name.toLowerCase()) > -1) 
            {
                mangDSKH.ThemKhoaHoc(value);
                if(name == "")
                {
                    var mangTrong = [];
                    return mangTrong;
                }
            }
        }
        return mangDSKH;
    }

    this.layThongTinKhoaHoc = function(id)
    {
        for(let i = 0; i < this.mangKhoaHoc.length; i++ )
        {
            var value = this.mangKhoaHoc[i];
            if(value.MaKhoaHoc == id)
            {
                return value;
            }
        }
    }

    this.CapNhatThongTinKhoaHoc = function(mangKhoaHocUpdate)
    {
        for(let i = 0; i < this.mangKhoaHoc.length; i++)
        {
            var value = this.mangKhoaHoc[i];
            if(mangKhoaHocUpdate.MaKhoaHoc == value.MaKhoaHoc)
            {
                value.TenKhoaHoc = mangKhoaHocUpdate.TenKhoaHoc;
                value.MoTa = mangKhoaHocUpdate.MoTa;
                value.HinhAnh = mangKhoaHocUpdate.HinhAnh;
                value.LuotXem = mangKhoaHocUpdate.LuotXem;
            }
        }
    }

    this.XoaKhoaHoc = function(mangXoaKhoaHoc,mangKH)
    {
       
        for(let i = 0; i < mangXoaKhoaHoc.length; i++)
        {
            for(let j = 0; j < mangKH.length; j++)
            {
                var mangXoaKH= mangXoaKhoaHoc[i];
                if(mangXoaKH == mangKH[j].MaKhoaHoc)
                {
                    mangKH.splice(j,1);
                }
            }
        }
        return mangKH
    }
}


export default DanhSachKhoaHoc;