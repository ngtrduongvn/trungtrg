(function() {
    'use strict';

    const preventAction = (e) => {
        e.preventDefault();
        return false;
    };

    // Chặn các phím tắt
    document.addEventListener('keydown', (e) => {
        const isControl = e.ctrlKey || e.metaKey; // Hỗ trợ cho Mac
        const isShift = e.shiftKey;
        const key = e.key.toUpperCase();

        if (
            e.key === 'F12' || 
            (isControl && isShift && ['I', 'J', 'C'].includes(key)) || 
            (isControl && key === 'U')
        ) {
            return preventAction(e);
        }
    });

    // Chặn menu chuột phải
    document.addEventListener('contextmenu', preventAction);

    // Chặn kéo thả hình ảnh
    document.addEventListener('dragstart', preventAction);

    // Phát hiện và gây khó khăn cho việc mở DevTools
    const checkDevTools = function() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || 
            window.outerHeight - window.innerHeight > threshold) {
            console.warn("DevTools is active!");
            (function() { return false; ['constructor']('debugger')(); })();
        }
    };

    window.addEventListener('resize', checkDevTools);
    checkDevTools(); // Chạy khi vừa load trang

})();
