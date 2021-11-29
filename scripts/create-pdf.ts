import fs from 'fs';
import path from 'path';
import pdf from 'html-pdf';

type MissingCreateOptions = {
    localUrlAccess: boolean;
};

const options: pdf.CreateOptions & MissingCreateOptions = {
    format: 'A4',
    orientation: 'portrait',
    type: 'pdf',
    base: `file://${path.resolve(__dirname, '..', 'build')}/`,
    border: {
        top: '15mm',
        right: '10mm',
        bottom: '15mm',
        left: '10mm',
    },

    localUrlAccess: true,
};

const createResult = pdf.create(fs.readFileSync('./build/index.html', 'utf8'), options);

const filename = 'curriculum-marco-montalbano.pdf';

createResult.toFile(`./src/static/${filename}`, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res);
});