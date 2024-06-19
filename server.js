const express = require('express');
const fileUpload = require('express-fileupload');
const json2xls = require('json2xls');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(fileUpload());
app.use(json2xls.middleware);

app.post('/api/upload-json', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }

    const jsonFile = req.files.jsonFile;
    let jsonData;

    try {
        jsonData = JSON.parse(jsonFile.data.toString('utf8'));
    } catch (error) {
        return res.status(400).send('Erro ao ler o arquivo JSON.');
    }

    const xls = json2xls(jsonData);
    const fileName = path.parse(jsonFile.name).name + '.xlsx';
    const filePath = path.join(__dirname, 'public', 'files', fileName);

    fs.writeFileSync(filePath, xls, 'binary');

    res.download(filePath, fileName, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
        }
        fs.unlinkSync(filePath); // Remove o arquivo após o download
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
