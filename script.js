document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        toggleSidebar();
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            closeSidebar();
        }
    });

    function toggleSidebar() {
        if (sidebar.classList.contains('show')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function openSidebar() {
        sidebar.classList.add('show');
        setTimeout(() => {
            sidebar.style.opacity = '1';
        }, 50);
    }

    function closeSidebar() {
        sidebar.style.opacity = '0';
        setTimeout(() => {
            sidebar.classList.remove('show');
        }, 300); // Match this with your transition duration
    }
});