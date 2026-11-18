*** Các lệnh thực hiện ***

## Bước 1: Mở Terminal
Mở Terminal tại thư mục chứa tập tin bai07.js.

## Bước 2: Chạy chương trình
Nhập lệnh:

    node bai07.js

## Bước 3: Truy cập Web Server
Mở trình duyệt và nhập các địa chỉ sau:

- Kiểm tra lời chào:
  http://localhost:3001/hello?name=Minh

- Kiểm tra tính tổng:
  http://localhost:3001/sum?a=10&b=20

- Kiểm tra thiếu tham số:
  http://localhost:3001/hello

- Kiểm tra dữ liệu không hợp lệ:
  http://localhost:3001/sum?a=abc&b=20

*** Kết quả mong đợi ***

- Xin chào Minh
- Tổng = 30
- Hiển thị thông báo lỗi khi thiếu tham số.
- Hiển thị thông báo lỗi khi giá trị không hợp lệ.

*** Kết luận ***
Đã xây dựng Web Server bằng Node.js, sử dụng module http và đối tượng URL để xử lý yêu cầu HTTP và trả kết quả về trình duyệt.
