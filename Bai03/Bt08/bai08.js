
const fs = require('fs');
const path = require('path');

// Đường dẫn thư mục
const folder = path.join(__dirname, 'data');

// 1. Tạo thư mục data
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log('Tạo thư mục data thành công!');
} else {
    console.log('Thư mục data đã tồn tại!');
}

// 2. Tạo tập tin ghichu.txt và ghi nội dung
const fileCu = path.join(folder, 'ghichu.txt');

const noiDung = `Ho va ten: Vo Kim Truc
Mon hoc: Phat trien ung dung huong may chu
Bai tap: Quan ly tap tin voi File System
Noi dung: Thuc hanh module fs trong Node.js`;

fs.writeFile(fileCu, noiDung, 'utf8', (err) => {
    if (err) {
        return console.log('Lỗi ghi tập tin:', err);
    }

    console.log('Ghi tập tin ghichu.txt thành công!');

    // 3. Đổi tên tập tin bằng fs.rename()
    const fileMoi = path.join(folder, 'ghichu_moi.txt');

    fs.rename(fileCu, fileMoi, (err) => {
        if (err) {
            return console.log('Lỗi đổi tên:', err);
        }

        console.log('Đổi tên thành ghichu_moi.txt thành công!');

        // 4. Đọc nội dung tập tin sau khi đổi tên
        fs.readFile(fileMoi, 'utf8', (err, duLieu) => {
            if (err) {
                return console.log('Lỗi đọc tập tin:', err);
            }

            console.log('\nNội dung tập tin ghichu_moi.txt:');
            console.log(duLieu);

            // 5. Tạo tập tin tam.txt
            const fileTam = path.join(folder, 'tam.txt');

            fs.writeFile(fileTam, 'Day la tap tin tam.', (err) => {
                if (err) {
                    return console.log('Lỗi tạo tập tin tam:', err);
                }

                console.log('\nTạo tập tin tam.txt thành công!');

                // 6. Xóa tập tin bằng fs.unlink()
                fs.unlink(fileTam, (err) => {
                    if (err) {
                        return console.log('Lỗi xóa tập tin:', err);
                    }

                    console.log('Xóa tập tin tam.txt thành công!');
                    console.log('\nHoàn thành tất cả thao tác!');
                });
            });
        });
    });
});
