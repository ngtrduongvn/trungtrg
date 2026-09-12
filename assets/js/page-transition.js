document.addEventListener("DOMContentLoaded", () => {
    // Kích hoạt hiệu ứng hiện trang khi vừa load xong
    document.body.classList.add("fade-in");

    // Xử lý sự kiện khi bấm vào các liên kết chuyển trang
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            // Chỉ áp dụng hiệu ứng cho liên kết hợp lệ (không phải link ngoài, hash, hoặc javascript:)
            if (
                targetUrl &&
                !targetUrl.startsWith("#") &&
                !targetUrl.startsWith("javascript:") &&
                !link.hasAttribute("target")
            ) {
                e.preventDefault(); // Chặn chuyển trang ngay lập tức
                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out"); // Kích hoạt hiệu ứng mờ dần

                // Đợi animation chạy xong (250ms) mới chuyển URL
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 250);
            }
        });
    });
});