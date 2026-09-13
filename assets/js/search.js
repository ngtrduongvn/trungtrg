const searchInput = document.getElementById('searchInput');

        const rows = document.querySelectorAll('#fileTableBody tr');

        searchInput.addEventListener('input', function() {
            const keyword = searchInput.value.toLowerCase().trim();

            rows.forEach(function(row) {

                const fileNameElement = row.querySelector('td a');

                if (fileNameElement) {
                    const fileName = fileNameElement.textContent.toLowerCase();


                    if (fileName.includes(keyword)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        });