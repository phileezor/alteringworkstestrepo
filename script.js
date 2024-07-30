document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        
        // If the sidebar is being shown, set opacity to 1 after a short delay
        if (sidebar.classList.contains('show')) {
            setTimeout(() => {
                sidebar.style.opacity = '1';
            }, 50);
        } else {
            // If the sidebar is being hidden, set opacity to 0 immediately
            sidebar.style.opacity = '0';
        }
    });
});