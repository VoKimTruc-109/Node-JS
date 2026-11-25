
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

        const departments = db.collection('departments');
        const students = db.collection('students_join');

        console.log('Database: qlsinhvien');
        console.log('Collection: departments');
        console.log('Collection: students_join');

        // 3. Tạo dữ liệu 2 khoa
        const departmentData = [
            { makhoa: 'CNTT', tenkhoa: 'Công nghệ thông tin' },
            { makhoa: 'QTKD', tenkhoa: 'Quản trị kinh doanh' }
        ];

        for (const khoa of departmentData) {
            await departments.updateOne(
                { makhoa: khoa.makhoa },
                { $set: khoa },
                { upsert: true }
            );
        }

        console.log('\nTạo dữ liệu khoa thành công: 2 khoa');

        // 4. Tạo dữ liệu 4 sinh viên
        const studentData = [
            { masv: 'SV001', hoten: 'Hoàng Lê Bảo Minh', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Lê Quang Hùng', makhoa: 'CNTT' },
            { masv: 'SV003', hoten: 'Hoàng Đức Duy', makhoa: 'QTKD' },
            { masv: 'SV004', hoten: 'Võ Đình Nam', makhoa: 'QTKD' }
        ];

        for (const sv of studentData) {
            await students.updateOne(
                { masv: sv.masv },
                { $set: sv },
                { upsert: true }
            );
        }

        console.log('Thêm dữ liệu sinh viên thành công: 4 sinh viên');

        // 5. Sử dụng aggregate() và $lookup để liên kết 2 collection
        const result = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        // 6. Hiển thị danh sách sinh viên kèm tên khoa
        console.log('\nDANH SÁCH SINH VIÊN KÈM TÊN KHOA:');
        console.log(JSON.stringify(result, null, 2));

        console.log('\nHoàn thành tất cả thao tác!');

    } catch (error) {
        console.log('Lỗi:', error);
    } finally {
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
