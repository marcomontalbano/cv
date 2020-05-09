
import fs from 'fs';
import path from 'path';
import pdf from 'html-pdf';

const options: pdf.CreateOptions = {
    format: 'A4',
    orientation: 'portrait',
    type: 'pdf',
    base: `file://${path.resolve(__dirname, '..', 'build')}/`,
    border: {
        top: '15mm',
        right: '10mm',
        bottom: '15mm',
        left: '10mm'
    }
};

const createResult = pdf.create(fs.readFileSync('./build/index.html', 'utf8'), options);

createResult.toFile('./dist/curriculum.pdf', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res); // { filename: '/absolute-path/dist/curriculum.pdf' }
});
