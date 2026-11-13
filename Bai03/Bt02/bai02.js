
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Xin chào!</h1>
            <p>Họ tên: Võ Kim Trúc</p>
            <p>Mã sinh viên: CDCNTT18A31</p>
        `);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ tên: Võ Kim Trúc</p>
            <p>Lớp: CD-CNTT18A</p>
            <p>Mã sinh viên: CDCNTT18A31</p>
            <p>Tôi là sinh viên ngành Công nghệ thông tin.</p>
        `);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Không tìm thấy trang</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000/');
});
