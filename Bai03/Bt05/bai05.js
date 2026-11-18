
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // 1. Xóa dữ liệu cũ
        await students.deleteMany({});

        // 2. Thêm lại 3 sinh viên mới
        await students.insertMany([
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
                diem: 9
            },
            {
                masv: 'SV003',
                hoten: 'Hoàng Đức Duy',
                tuoi: 19,
                diem: 7.5
            }
        ]);

        console.log('Đã thêm 3 sinh viên mới!');

        // 3. Tìm sinh viên có điểm >= 7
        // Sắp xếp điểm giảm dần
        console.log('\nDANH SÁCH SINH VIÊN CÓ ĐIỂM >= 7:');

        const result = await students.find(
            { diem: { $gte: 7 } },
            { projection: { _id: 0 } }
        )
        .sort({ diem: -1 })
        .toArray();

        console.log(result);

        // 4. Cập nhật điểm SV001 từ 8.5 lên 10
        const update = await students.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 10 } }
        );

        if (update.modifiedCount > 0) {
            console.log('\nCập nhật điểm cho SV có masv: SV001 từ 8.5 lên 10 thành công!');
        } else {
            console.log('\nKhông có dữ liệu nào được cập nhật!');
        }

        // 5. Hiển thị thông tin sau cập nhật
        console.log('\nTHÔNG TIN SINH VIÊN SAU KHI CẬP NHẬT:');

        const student = await students.findOne(
            { masv: 'SV001' },
            { projection: { _id: 0 } }
        );

        console.log(student);

    } catch (error) {
        console.error('Lỗi:', error);
    } finally {
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
