
const http = require('http');
const { URL } = require('url');

// Tạo Web Server
const server = http.createServer((req, res) => {

    // Tạo đối tượng URL
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Xử lý đường dẫn /hello
    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (!name || name.trim() === '') {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số name!');
        } else {
            res.end(`Xin chào ${name}`);
        }
    }

    // Xử lý đường dẫn /sum
    else if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null || a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('Lỗi: Thiếu tham số a hoặc b!');
        } 
        else if (!Number.isFinite(Number(a)) || !Number.isFinite(Number(b))) {
            res.statusCode = 400;
            res.end('Lỗi: Giá trị a hoặc b không hợp lệ!');
        } 
        else {
            const tong = Number(a) + Number(b);
            res.end(`Tổng = ${tong}`);
        }
    }

    // Đường dẫn không tồn tại
    else {
        res.statusCode = 404;
        res.end('Lỗi: Không tìm thấy đường dẫn!');
    }
});

// Khởi động Server tại cổng 3001
server.listen(3001, () => {
    console.log('Web Server đang chạy tại http://localhost:3001');
});
