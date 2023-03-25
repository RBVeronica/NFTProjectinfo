// 轉換換行符為 \n
function convertText(input) {
    return input.replace(/(?:\r\n|\r|\n)/g, '\\n');
}

// 複製轉換後的文字
function copyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// 匯出CSV檔案
function exportCSV(data, filename) {
    const csv = data.map(row => row.join(',')).join('\n');
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// 為「轉換」按鈕添加事件監聽器
document.getElementById('convertBtn').addEventListener('click', () => {
    const collectionId = document.getElementById('collectionId').value;
    const convertedText = convertText(collectionId);
    // 顯示轉換後的文字和「複製」按鈕
    // ...
});

// 為「匯出CSV」按鈕添加事件監聽器
document.getElementById('exportBtn').addEventListener('click', () => {
    const collectionId = document.getElementById('collectionId').value;
    const convertedText = convertText(collectionId);
    const data = [['Collection ID', 'Converted Text'], [collectionId, convertedText]];
    const filename = 'export_' + new Date().getTime() + '.csv';
    exportCSV(data, filename);
});
