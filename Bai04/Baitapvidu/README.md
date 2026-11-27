1. Tạo thư mục thực hành và di chuyển vào thư mục:
cd MyNodeJS\EXPRESS
3. Tạo ứng dụng Express đầu tiên
Bước 1: Khởi tạo dự án
npm init -y
Lệnh tạo package.json, dùng để quản lý thông tin dự án và các thư viện phụ thuộc.

Ảnh minh họa Terminal sau khi khởi tạo:

Bước 2: Cài đặt Express
npm install express
npm tải Express và các gói phụ thuộc vào thư mục node_modules, đồng thời cập nhật package.json và package-lock.json.
Bước 3: Tạo file app.js
Tạo file app.js trong thư mục EXPRESS:
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
Bước 4: Chạy ứng dụng
node app.js
Mở trình duyệt tại http://localhost:3000.

Kết quả mong đợi: Trang hiển thị dòng chữ Hello, Express!.

4. Thực hành Route
Route xác định cách máy chủ phản hồi theo phương thức HTTP và đường dẫn URL. Ví dụ trong bài sử dụng các đường dẫn /, /about, /users và một route mặc định trả về lỗi 404.

Tạo file express_route.js:
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Trang chủ');
});

app.get('/about', (req, res) => {
    res.send('Trang giới thiệu');
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    res.send(`Xin chào, ${name}`);
});

// Route mặc định – đặt sau các route cụ thể
app.use((req, res) => {
    res.status(404).send('Không tìm thấy trang');
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
Chạy:
node express_route.js
Kiểm tra lần lượt các URL:
URL	Kết quả mong đợi
http://localhost:3000/	Trang chủ
http://localhost:3000/about	Trang giới thiệu
http://localhost:3000/users?name=Minh	Xin chào, Minh
http://localhost:3000/duong-dan-khong-ton-tai	Không tìm thấy trang (HTTP 404)


Ảnh kết quả các route:

5. Thực hành Middleware
Middleware là hàm trung gian được thực thi trong quá trình xử lý request. Middleware có thể đọc hoặc thay đổi req, res, thực hiện ghi log, xác thực… và gọi next() để chuyển sang bước tiếp theo.

Tạo file express_middleware.js:
const express = require('express');
const app = express();

// Middleware ghi lại đường dẫn của request
app.use((req, res, next) => {
    console.log('Yêu cầu đến:', req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng Express!');
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
Chạy:
node express_middleware.js
Truy cập http://localhost:3000. Mỗi lần tải trang, Terminal sẽ ghi đường dẫn request, ví dụ /.

Kết quả trên trình duyệt:

6. Thực hành Template Engine
Template engine giúp tạo HTML động từ dữ liệu máy chủ. Bài học minh họa Pug và Handlebars.
6.1. Pug
Cài đặt:
npm install pug
Tạo file express_pug.js:
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello, John Doe!' });
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
Tạo thư mục views, bên trong tạo file index.pug:
doctype html
html
  head
    title= title
  body
    h1= message
Chạy:
node express_pug.js
Truy cập http://localhost:3000.

Kết quả mong đợi: Trang hiển thị tiêu đề lớn Hello, John Doe!.

6.2. Handlebars
Cài đặt:
npm install express-handlebars
Nếu phiên bản mới không tương thích với phiên bản Node.js đang dùng, có thể cài một phiên bản tương thích theo hướng dẫn của trang npm.

Ví dụ cấu hình và sử dụng:
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

app.engine('handlebars', engine({
    layoutsDir: 'views',
    defaultLayout: false
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        layout: false,
        title: 'My Express App',
        message: 'Hello, John Doe!'
    });
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
Tạo views/index.handlebars:
<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
</head>
<body>
    <h1>{{message}}</h1>
</body>
</html>
Chạy:
node express_handlebars.js
Truy cập http://localhost:3000. Kết quả là trang HTML hiển thị nội dung được truyền từ route vào template.
Ghi chú: Đây là ví dụ cấu hình tối giản để minh họa cách render Handlebars. Tùy phiên bản express-handlebars, cú pháp cấu hình có thể khác; xem tài liệu phiên bản đã cài nếu gặp lỗi.

7. Thực hành Error Handling
Ví dụ xây dựng form nhập số bị chia (dividend) và số chia (divisor). Máy chủ kiểm tra dữ liệu; nếu thiếu dữ liệu hoặc chia cho 0 thì chuyển lỗi tới middleware xử lý lỗi và trả về HTTP 400.

Cài thư viện:
npm install express body-parser
Tạo file express_errorhandling.js. Nội dung cốt lõi cần có:
- Khởi tạo Express và body-parser để đọc dữ liệu form.
- Route GET / hiển thị form gồm hai ô dividend, divisor.
- Route POST /divide kiểm tra dữ liệu; nếu không hợp lệ hoặc divisor bằng 0 thì gọi next(error).
- Middleware xử lý lỗi được khai báo sau các route, nhận tham số (err, req, res, next) và trả về mã 400 cùng thông báo Invalid input.
Chạy:
node express_errorhandling.js
Mở http://localhost:3000.

Bước kiểm tra 1 – Form ban đầu:

Bước kiểm tra 2 – Nhập dữ liệu không hợp lệ: Nhập 1 ở ô Dividend và 0 ở ô Divisor, sau đó nhấn Submit.

Kết quả: Máy chủ trả về Invalid input với trạng thái HTTP 400.

8. Dự án tổng hợp Express theo mô hình MVC
8.1. Mục tiêu
Xây dựng ứng dụng máy tính đơn giản cho phép nhập hai số và thực hiện các phép tính cộng, trừ, nhân, chia. Dự án kết hợp:
- Express để tạo máy chủ và định tuyến.
- Middleware để phân tích dữ liệu POST và phục vụ file tĩnh.
- Controller để tiếp nhận yêu cầu và điều phối xử lý.
- Model để thực hiện phép tính.
- Pug để tạo giao diện HTML động.
- CSS để định dạng giao diện.
- Error handling để xử lý trường hợp dữ liệu không hợp lệ.
8.2. Cấu trúc thư mục
Tạo thư mục my-express-app với cấu trúc:
my-express-app/
├── controllers/
│   └── calculatorController.js
├── models/
│   └── calculatorModel.js
├── views/
│   └── calculator.pug
├── public/
│   └── styles.css
└── app.js

8.3. Cài đặt thư viện
Mở Terminal tại thư mục dự án và chạy:
npm init -y
npm install express pug body-parser express-handlebars
Nếu chỉ triển khai ví dụ MVC dùng Pug, các gói tối thiểu là express, pug và body-parser.
8.4. Vai trò các tập tin
Tập tin/thư mục	Nhiệm vụ
app.js	Khởi tạo Express, cấu hình middleware, template engine, static files và lắng nghe cổng
controllers/calculatorController.js	Khai báo router, nhận dữ liệu form, gọi Model và render View
models/calculatorModel.js	Chứa logic cộng, trừ, nhân, chia
views/calculator.pug	Giao diện nhập hai số và hiển thị kết quả
public/styles.css	Định dạng giao diện trang web


8.5. Luồng hoạt động MVC
1. Người dùng truy cập /calculator từ trình duyệt.
2. Express nhận request và chuyển tới router trong Controller.
3. Controller gọi Model khi cần thực hiện phép tính.
4. Model tính toán và trả kết quả cho Controller.
5. Controller truyền dữ liệu sang template Pug.
6. Pug tạo HTML, Express trả response về trình duyệt.
7. CSS trong public được phục vụ qua middleware express.static.

8.6. Chạy dự án
Từ thư mục my-express-app, thực hiện:
node app.js
Mở trình duyệt:
http://localhost:3000/calculator
Nhập hai số, chọn phép tính và gửi biểu mẫu. Ứng dụng hiển thị kết quả tương ứng. Với phép chia, cần kiểm tra số chia khác 0; dữ liệu không hợp lệ phải được xử lý bằng thông báo lỗi phù hợp.
9. Tổng hợp các lệnh đã sử dụng
Lệnh	Công dụng
node -v	Kiểm tra phiên bản Node.js
npm -v	Kiểm tra phiên bản npm
mkdir EXPRESS	Tạo thư mục
cd EXPRESS	Di chuyển vào thư mục
npm init -y	Khởi tạo package.json mặc định
npm install express	Cài Express
npm install pug	Cài Pug
npm install express-handlebars	Cài Handlebars cho Express
npm install express body-parser	Cài Express và body-parser
node app.js	Chạy ứng dụng từ file app.js
node express_route.js	Chạy ví dụ Route
node express_middleware.js	Chạy ví dụ Middleware
node express_pug.js	Chạy ví dụ Pug
node express_handlebars.js	Chạy ví dụ Handlebars
node express_errorhandling.js	Chạy ví dụ xử lý lỗi


Lưu ý: Mỗi ví dụ đều sử dụng cổng 3000. Hãy dừng tiến trình đang chạy bằng Ctrl + C trước khi chạy ví dụ khác, hoặc đổi cổng để tránh lỗi EADDRINUSE.
10. Kết quả đạt được
Sau khi hoàn thành bài thực hành, người học có thể:
- Khởi tạo và chạy một ứng dụng web bằng Express.js.
- Tạo các route GET và đọc query parameter từ URL.
- Viết middleware và hiểu vai trò của next().
- Cấu hình và render giao diện bằng Pug hoặc Handlebars.
- Nhận biết và xử lý lỗi đầu vào bằng error-handling middleware.
- Tổ chức ứng dụng theo mô hình MVC, tách biệt Controller, Model, View và tài nguyên tĩnh.
Kết quả cuối cùng: Ứng dụng máy tính chạy tại http://localhost:3000/calculator, nhận hai số từ form, thực hiện phép tính và hiển thị kết quả trên giao diện web.
