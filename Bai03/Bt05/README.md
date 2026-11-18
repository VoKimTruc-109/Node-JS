## Các lệnh thực hiện

### Bước 1: Mở thư mục dự án
Mở Terminal tại thư mục chứa tập tin `bai05.js`.

### Bước 2: Cài đặt thư viện MongoDB
```bash
npm install mongodb
```
Lệnh này cài đặt thư viện MongoDB để Node.js kết nối và thao tác với cơ sở dữ liệu.

**Lưu ý: Nếu đã cài thư viện ở Bài 04 thì không cần cài lại.**

### Bước 3: Khởi động MongoDB
Đảm bảo MongoDB Server đang chạy trên máy tính.

### Bước 4: Chạy chương trình
```bash
node bai05.js
```

## Kết quả thực hiện

Sau khi chạy lệnh `node bai05.js`, chương trình thực hiện:
- Kết nối MongoDB thành công.
- Thêm lại 3 sinh viên vào collection `students`.
- Tìm các sinh viên có điểm >= 7.
- Sắp xếp danh sách theo điểm giảm dần.
- Cập nhật điểm sinh viên SV001 (Võ Đình Nam) từ 8.5 lên 10.
- Hiển thị thông tin sinh viên sau khi cập nhật.
- Đóng kết nối MongoDB.

## Kết luận
Đã thực hiện việc kết nối MongoDB bằng Node.js, tìm kiếm sinh viên bằng `find()` và `$gte`, sắp xếp bằng `sort()`, cập nhật dữ liệu bằng `updateOne()` và `$set`, đồng thời kiểm tra thông tin sau cập nhật.
