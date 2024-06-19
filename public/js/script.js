document.getElementById('convertButton').addEventListener('click', () => {
    const fileInput = document.getElementById('jsonFileInput');
    const status = document.getElementById('status');

    if (!fileInput.files.length) {
        status.textContent = 'Por favor, selecione um arquivo JSON.';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('jsonFile', file);

    status.textContent = 'Convertendo...';

    fetch('/api/upload-json', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = file.name.replace('.json', '.xlsx');
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        status.textContent = 'Conversao concluiada!';
    })
    .catch(error => {
        console.error('Erro ao converter o JSON para Excel:', error);
        status.textContent = 'Erro ao converter o JSON';
    });
});
