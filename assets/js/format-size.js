function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

document.querySelectorAll('.file-size').forEach(el => {
    const bytes = parseInt(el.getAttribute('data-bytes'));
    if (!isNaN(bytes)) {
        el.textContent = formatBytes(bytes);
    }
});