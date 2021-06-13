const links = document.querySelectorAll('.scroll-link');
// Generic function to loop through the links
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();    
        // Navigate to specific spot, skip the hashtag with slice method
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navbar = document.querySelector('nav');

        // Calculate the heights
        const navbarHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop;
        // Get position
        position = position - navbarHeight;
        // Scroll to position:
        window.scrollTo({
            left:0,
            top: position,
        });
    });
});