## Các lệnh thực hiện

### Bước 1: Di chuyển đến thư mục bài tập
```
cd "Bài 3\Node JS\Bai 03\Bt 08"
```

### Bước 2: Chạy chương trình
```
node bai08.js
```

### Bước 3: Các thao tác trong chương trình
- Sử dụng require('fs') để khai báo module File System.
- Sử dụng fs.existsSync() để kiểm tra thư mục data.
- Sử dụng fs.mkdirSync() để tạo thư mục data.
- Sử dụng fs.writeFile() để tạo tập tin ghichu.txt và ghi nội dung.
- Sử dụng fs.rename() để đổi tên ghichu.txt thành ghichu_moi.txt.
- Sử dụng fs.readFile() để đọc và hiển thị nội dung tập tin.
- Sử dụng fs.writeFile() để tạo tập tin tam.txt.
- Sử dụng fs.unlink() để xóa tập tin tam.txt.
- Sử dụng console.log() để hiển thị thông báo kết quả từng thao tác.

## 4. Kết quả
Sau khi chạy chương trình:
- Tạo thành công thư mục data.
- Tạo và ghi nội dung vào ghichu.txt.
- Đổi tên thành ghichu_moi.txt thành công.
- Đọc và hiển thị nội dung tập tin mới.
- Tạo tập tin tam.txt thành công.
- Xóa tập tin tam.txt thành công.

## 5. Kết luận
Hoàn thành bài thực hành quản lý tập tin với module File System trong Node.js.

