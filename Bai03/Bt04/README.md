Các lệnh thực hiện

Bước 1: Mở thư mục dự án

Mở Terminal tại thư mục chứa tập tin bai04.js.

Bước 2: Cài đặt thư viện MongoDB

npm install mongodb

Lệnh này cài đặt thư viện MongoDB để Node.js có thể kết nối và thao tác với cơ sở dữ liệu.

Bước 3: Khởi động MongoDB

Đảm bảo MongoDB Server đang chạy trên máy tính.

Bước 4: Chạy chương trình

node bai04.js

3. Kết quả

Sau khi chạy lệnh node bai04.js, Terminal hiển thị:

Kết nối MongoDB thành công.

Đã thêm 3 sinh viên.

Danh sách sinh viên gồm mã sinh viên, họ tên, tuổi và điểm.

Thông báo đã đóng kết nối MongoDB.

Dữ liệu được lưu trong MongoDB tại:

Database: qlsinhvien

Collection: students

4. Kết luận

Đã thực hiện kết nối MongoDB bằng Node.js, thêm dữ liệu sinh viên bằng insertMany(), truy vấn dữ liệu bằng find() và đóng kết nối sau khi hoàn thành.
