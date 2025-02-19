document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Load header and footer
    Promise.all([
        fetch('pages/header.html').then(response => response.text()),
        fetch('pages/footer.html').then(response => response.text())
    ])
    .then(([headerData, footerData]) => {
        document.getElementById('header-container').innerHTML = headerData;
        document.getElementById('footer-container').innerHTML = footerData;
        
        // Setup hamburger menu after header is loaded
        const hamburger = document.querySelector('.hamburger');
        const navMobile = document.querySelector('.nav-mobile');
        
        if (hamburger && navMobile) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMobile.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMobile.classList.remove('active');
                }
            });
        }
    })
    .catch(error => console.error('Error loading components:', error));
});