
// Hàm tính điểm trung bình 3 môn
function tinhDiemTB(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// Hàm xếp loại học tập
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return 'Giỏi';
    } else if (diemTB >= 6.5) {
        return 'Khá';
    } else if (diemTB >= 5) {
        return 'Trung bình';
    } else {
        return 'Yếu';
    }
}

// Xuất các hàm
module.exports = {
    tinhDiemTB,
    xepLoai
};
