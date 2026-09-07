const searchInput = document.getElementById('searchInput');
        // Chọn tất cả các hàng (tr) bên trong tbody
        const rows = document.querySelectorAll('#fileTableBody tr');

        searchInput.addEventListener('input', function() {
            const keyword = searchInput.value.toLowerCase().trim();

            rows.forEach(function(row) {
                // Lấy thẻ <a> chứa tên file bên trong dòng hiện tại
                const fileNameElement = row.querySelector('td a');

                if (fileNameElement) {
                    const fileName = fileNameElement.textContent.toLowerCase();

                    // Kiểm tra xem từ khóa có nằm trong tên file hay không
                    if (fileName.includes(keyword)) {
                        row.style.display = ''; // Hiện dòng nếu khớp
                    } else {
                        row.style.display = 'none'; // Ẩn dòng nếu không khớp
                    }
                }
            });
        });