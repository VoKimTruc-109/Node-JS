## 1. Database và Collection
- Database: qlsinhvien
- Collection: students_test

## 2. Các lệnh thực hiện

### Bước 1: Di chuyển đến thư mục bài tập
```
cd "C:\CD-CNTT18A\Bài 3\Node JS\Bai 03\Bt 09"
```

### Bước 2: Cài đặt thư viện MongoDB
```
npm install mongodb (nếu chưa cài đặt trước đó)
```

### Bước 3: Chạy chương trình
```
node bai09.js
```

## 3. Các thao tác trong chương trình
- Sử dụng MongoClient để kết nối MongoDB.
- Sử dụng client.db('qlsinhvien') để chọn database.
- Sử dụng db.collection('students_test') để chọn collection.
- Sử dụng insertMany() để thêm 5 sinh viên mẫu.
- Sử dụng deleteOne() để xóa một sinh viên theo mã sinh viên.
- Sử dụng deleteMany() để xóa các sinh viên có điểm dưới 5.
- Sử dụng find({}).toArray() để hiển thị danh sách sinh viên còn lại.
- Sử dụng deletedCount để hiển thị số bản ghi đã xóa.
- Sử dụng client.close() để đóng kết nối MongoDB.

## 4. Kết quả
- Kết nối MongoDB thành công.
- Thêm thành công 5 sinh viên.
- Xóa 1 sinh viên theo mã sinh viên.
- Xóa các sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa.
- Hiển thị danh sách sinh viên còn lại.

## 5. Kết luận
Hoàn thành bài thực hành quản lý dữ liệu MongoDB bằng Node.js, sử dụng các phương thức insertMany(), deleteOne(), deleteMany() và find().

