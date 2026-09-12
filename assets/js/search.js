// const searchInput = document.getElementById('searchInput');

//         const rows = document.querySelectorAll('#fileTableBody tr');

//         searchInput.addEventListener('input', function() {
//             const keyword = searchInput.value.toLowerCase().trim();

//             rows.forEach(function(row) {

//                 const fileNameElement = row.querySelector('td a');

//                 if (fileNameElement) {
//                     const fileName = fileNameElement.textContent.toLowerCase();


//                     if (fileName.includes(keyword)) {
//                         row.style.display = '';
//                     } else {
//                         row.style.display = 'none';
//                     }
//                 }
//             });
//         });

const searchInput = document.getElementById('searchInput');
const rows = document.querySelectorAll('#fileTableBody tr');

searchInput.addEventListener('input', function() {
    const keyword = searchInput.value.toLowerCase().trim();

    rows.forEach(function(row) {
        const fileNameElement = row.querySelector('td a');

        if (fileNameElement) {
            const fileName = fileNameElement.textContent.toLowerCase();

            if (fileName.includes(keyword)) {
                // Hiện dòng
                row.classList.remove('is-removed');
                // Timeout nhỏ để trình duyệt kịp render display trước khi chạy hiệu ứng fade-in
                setTimeout(() => {
                    row.classList.remove('is-hidden');
                }, 10);
            } else {
                // Bắt đầu hiệu ứng fade-out
                row.classList.add('is-hidden');
                
                // Sau khi kết thúc animation 200ms thì ẩn display để không tốn diện tích
                setTimeout(() => {
                    if (row.classList.contains('is-hidden')) {
                        row.classList.add('is-removed');
                    }
                }, 200);
            }
        }
    });
});