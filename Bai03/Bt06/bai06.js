
// Gọi các hàm từ tập tin xulyDiem.js
const { tinhDiemTB, xepLoai } = require('./xulyDiem');

// Dữ liệu 3 sinh viên
const sinhviens = [
    {
        hoten: 'Võ Đình Nam',
        diem1: 8,
        diem2: 9,
        diem3: 8
    },
    {
        hoten: 'Lê Hồ Phước Thịnh',
        diem1: 7,
        diem2: 8,
        diem3: 9
    },
    {
        hoten: 'Hoàng Đức Duy',
        diem1: 5,
        diem2: 6,
        diem3: 4
    }
];

// Hiển thị kết quả
console.log('DANH SÁCH SINH VIÊN VÀ XẾP LOẠI HỌC TẬP');

sinhviens.forEach((sv, index) => {
    const diemTB = tinhDiemTB(sv.diem1, sv.diem2, sv.diem3);
    const loai = xepLoai(diemTB);

    console.log(`\nSinh viên ${index + 1}: ${sv.hoten}`);
    console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);
    console.log(`Xếp loại: ${loai}`);
});
