
const { MongoClient } = require('mongodb');

// 1. Kết nối MongoDB
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // 2. Chọn database và collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        console.log('Database: qlsinhvien');
        console.log('Collection: students_test');

        // 3. Xóa dữ liệu cũ trong collection để chạy lại không bị trùng
        await collection.deleteMany({});
        
        // 4. Thêm 5 sinh viên mẫu
        const students = [
            { masv: 'SV001', hoten: 'Hoàng Lê Bảo Minh', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Lê Quang Hùng', tuoi: 21, diem: 4.5 },
            { masv: 'SV003', hoten: 'Lê Hồ Phước Thịnh', tuoi: 19, diem: 7.0 },
            { masv: 'SV004', hoten: 'Hoàng Đức Duy', tuoi: 20, diem: 3.5 },
            { masv: 'SV005', hoten: 'Võ Đình Nam', tuoi: 22, diem: 9.0 }
        ];

        const insertResult = await collection.insertMany(students);
        console.log('\nThêm sinh viên thành công:', insertResult.insertedCount);

        // 5. Dùng deleteOne() xóa sinh viên theo mã SV
        const deleteOneResult = await collection.deleteOne({
            masv: 'SV003'
        });

        console.log('\nXóa sinh viên có mã SV003:');
        console.log('Số bản ghi đã xóa:', deleteOneResult.deletedCount);

        // 6. Dùng deleteMany() xóa sinh viên có điểm dưới 5
        const deleteManyResult = await collection.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('\nXóa các sinh viên có điểm dưới 5:');
        console.log('Số bản ghi đã xóa:', deleteManyResult.deletedCount);

        // 7. Hiển thị danh sách sinh viên còn lại
        console.log('\nDanh sách sinh viên còn lại:');

        const remainingStudents = await collection.find({}).toArray();

        console.log(remainingStudents);

        console.log('\nHoàn thành tất cả thao tác!');

    } catch (error) {
        console.log('Lỗi:', error);
    } finally {
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
