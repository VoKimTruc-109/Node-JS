
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Ho Van Tinh", 20, 8.5),
    new SinhVien("SV02", "Lu Van Toan", 19, 4.5),
    new SinhVien("SV03", "Le Van Cuong", 21, 7.0),
    new SinhVien("SV04", "Vo Hoang Duy", 20, 3.5),
    new SinhVien("SV05", "Hoang Van Em", 22, 5.0)
];

const sinhVienDat = danhSachSinhVien.filter(
    sv => sv.diem >= 5
);

console.log("DANH SACH SINH VIEN DAT YEU CAU:");

sinhVienDat.forEach(sv => {
    console.log(
        `Ma: ${sv.ma} | Ho ten: ${sv.hoTen} | Tuoi: ${sv.tuoi} | Diem: ${sv.diem}`
    );
});
