
const fs = require('fs');

const thongTin = 'Ho ten: Vo Kim Truc\nMa sinh vien: CDCNTT18A31\n';

fs.writeFile('thongtin.txt', thongTin, (err) => {
    if (err) throw err;

    console.log('Da tao tap tin thongtin.txt');

    fs.readFile('thongtin.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('\nNoi dung tap tin ban dau:');
        console.log(data);

        fs.appendFile('thongtin.txt', 'Lop: CD-CNTT18A\n', (err) => {
            if (err) throw err;

            console.log('Da ghi noi them ten lop vao tap tin');

            fs.readFile('thongtin.txt', 'utf8', (err, data) => {
                if (err) throw err;

                console.log('\nNoi dung tap tin sau khi cap nhat:');
                console.log(data);
            });
        });
    });
});
