
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cho phép sử dụng file CSS
app.use(express.static(path.join(__dirname, 'public')));

// Route trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Route giới thiệu
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

// Route kỹ năng
app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/skills.html'));
});

// Route sở thích
app.get('/hobbies', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/hobbies.html'));
});

// Route liên hệ
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

// Xử lý đường dẫn không tồn tại
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, 'views/404.html')
    );
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
