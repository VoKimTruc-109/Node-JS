# WEBSITE CÁ NHÂN - NODE.JS & EXPRESS

## PHẦN 1: CHẠY WEBSITE TRÊN MÁY CÁ NHÂN (LOCALHOST)

### 1.1. Khởi tạo dự án Node.js

Mở Terminal tại thư mục dự án và thực hiện lệnh:

```
npm init -y
```

Lệnh này tạo file `package.json` để quản lý thông tin và các thư viện của dự án.

### 1.2. Cài đặt Express.js

Thực hiện lệnh:

```
npm install express
```

Express.js được sử dụng để xây dựng server và định tuyến cho website.

Sau khi cài đặt, dự án có file `package.json` và `package-lock.json`.

### 1.3. Xây dựng các Route

Trong file `app.js`, sử dụng Express để xây dựng các Route:
 
 / : Trang chủ 
 
 /about : Giới thiệu 
 
 /skills : Kỹ năng 
 
 /hobbies : Sở thích 
 
 /contact : Liên hệ 

Các Route sử dụng `res.sendFile()` để trả về các file HTML tương ứng.

Ngoài ra, website sử dụng middleware để xử lý đường dẫn không tồn tại và trả về trang lỗi HTTP 404.

### 1.4. Chạy ứng dụng trên localhost

Cấu hình lệnh chạy trong `package.json`:

```json
"scripts": {
  "start": "node app.js"
}
```

Khởi chạy ứng dụng bằng lệnh:

```
npm start
```

Khi server chạy thành công, truy cập địa chỉ:

http://localhost:3000

### 1.5. Kết quả chạy trên máy cá nhân

Website hiển thị giao diện cá nhân với menu điều hướng giữa các trang.

#### Trang chủ

http://localhost:3000/ 

#### Trang giới thiệu

http://localhost:3000/about

#### Trang kỹ năng

http://localhost:3000/skills

#### Trang sở thích

http://localhost:3000/hobbies

#### Trang liên hệ

http://localhost:3000/contact

#### Kiểm tra lỗi 404

Truy cập một đường dẫn không tồn tại, ví dụ:

http://localhost:3000/abc 

## PHẦN 2: TRIỂN KHAI WEBSITE TRÊN FREE HOST

### 2.1. Khảo sát dịch vụ hosting

Các dịch vụ hosting miễn phí hỗ trợ Node.js được khảo sát:

 Dịch vụ | Đặc điểm 
 
 Render | Hỗ trợ Web Service Node.js, triển khai từ GitHub 
 
 Railway | Hỗ trợ ứng dụng Node.js, có hạn mức sử dụng miễn phí 
 
 Vercel | Hỗ trợ Node.js Functions và website cá nhân 

Sau khi khảo sát, lựa chọn Render để triển khai website.

### 2.2. Chuẩn bị dự án trên GitHub

Đưa mã nguồn dự án lên GitHub repository.

Repository:

https://github.com/VoKimTruc-109/Node-JS/tree/main

Thư mục chứa ứng dụng:

```
Bai04/Bt01
```

### 2.3. Cấu hình triển khai trên Render

Truy cập:

https://render.com

Thực hiện các bước:

1. Đăng nhập Render bằng GitHub.
2. Chọn New → Web Service.
3. Kết nối repository `Node-JS`.
4. Cấu hình các thông số:

 Thông số | Giá trị 
| Root Directory | `Bai04/Bt01` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Instance Type | Free |

5. Nhấn Deploy Web Service.
6. Chờ Render cài đặt thư viện và khởi chạy ứng dụng.

### 2.4. Kết quả triển khai

Sau khi triển khai thành công, Render hiển thị trạng thái:

```
Build successful
Your service is live
```

Website được triển khai THÀNH CÔNG và có thể truy cập qua đường dẫn:

https://node-js-4e4z.onrender.com

### 2.5. Kết quả website trên hosting

Website sau khi triển khai có các Route:

- Trang chủ: https://node-js-4e4z.onrender.com/
- 
- Giới thiệu: https://node-js-4e4z.onrender.com/about
- 
- Kỹ năng: https://node-js-4e4z.onrender.com/skills
- 
- Sở thích: https://node-js-4e4z.onrender.com/hobbies
- 
- Liên hệ: https://node-js-4e4z.onrender.com/contact

Kiểm tra lỗi 404:

https://node-js-4e4z.onrender.com/abc

## 3. Kết luận
Đã thực hiện:

- Khởi tạo dự án Node.js và cài đặt Express.js.
- Xây dựng các Route cho website cá nhân.
- Thiết kế giao diện HTML/CSS đơn giản.
- Tạo menu điều hướng giữa các trang.
- Xử lý đường dẫn không tồn tại bằng HTTP 404.
- Khảo sát các dịch vụ hosting miễn phí hỗ trợ Node.js.
- Lựa chọn Render và triển khai website thành công.

Website cá nhân đã hoạt động trên localhost và được triển khai trực tuyến trên Render.
