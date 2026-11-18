const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB
const url = 'mongodb://127.0.0.1:27017';

// Tạo MongoClient
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // Xóa dữ liệu cũ trước khi thêm
        await students.deleteMany({});

        // Thêm 3 sinh viên
        const result = await students.insertMany([
            {
                masv: 'SV001',
                hoten: 'Võ Đình Nam',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Lê Hồ Phước Thịnh',
                tuoi: 21,
                diem: 9.0
            },
            {
                masv: 'SV003',
                hoten: 'Hoàng Đức Duy',
                tuoi: 19,
                diem: 7.5
            }
        ]);

        console.log('Đã thêm', result.insertedCount, 'sinh viên!');

        // Hiển thị danh sách sinh viên
        console.log('\nDANH SÁCH SINH VIÊN:');

        const data = await students.find().toArray();

        console.log(data);

    } catch (error) {
        console.error('Lỗi:', error);
    } finally {
        // Đóng kết nối
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();