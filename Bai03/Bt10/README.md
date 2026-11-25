## 1. Database và Collection
- Database: qlsinhvien
- Collection 1: departments
- Collection 2: students_join

## 2. Các lệnh thực hiện

### Bước 1: Di chuyển đến thư mục bài tập
```
cd "C:\CD-CNTT18A\Bài 3\Node JS\Bai 03\Bt 10"
```

### Bước 2: Cài đặt thư viện MongoDB
```
npm install mongodb
```
Lưu ý: Nếu đã cài thư viện mongodb ở bài trước thì không cần cài lại.

### Bước 3: Chạy chương trình
```
node bai10.js
```

## 3. Các thao tác trong chương trình

- Sử dụng MongoClient để kết nối MongoDB.
- Sử dụng client.db('qlsinhvien') để chọn database.
- Sử dụng db.collection('departments') để chọn collection khoa.
- Sử dụng db.collection('students_join') để chọn collection sinh viên.
- Sử dụng updateOne() kết hợp upsert: true để thêm hoặc cập nhật dữ liệu khoa.
- Sử dụng updateOne() kết hợp upsert: true để thêm hoặc cập nhật dữ liệu sinh viên.
- Sử dụng aggregate() để thực hiện truy vấn tổng hợp.
- Sử dụng $lookup để liên kết hai collection thông qua trường makhoa.
- Sử dụng $unwind để tách dữ liệu khoa.
- Sử dụng $project để hiển thị các trường masv, hoten, makhoa và tenkhoa.
- Sử dụng toArray() để lấy kết quả truy vấn.
- Sử dụng client.close() để đóng kết nối MongoDB.

## 4. Kết quả
- Kết nối MongoDB thành công.
- Tạo thành công 2 khoa.
- Thêm thành công 4 sinh viên.
- Liên kết dữ liệu giữa sinh viên và khoa bằng $lookup.
- Hiển thị danh sách sinh viên kèm mã khoa và tên khoa tương ứng.

## 5. Kết luận
Hoàn thành bài thực hành liên kết dữ liệu giữa hai collection trong MongoDB bằng aggregate() và $lookup trên Node.js.

