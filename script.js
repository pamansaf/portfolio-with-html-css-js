// header toggle
let menuBtn = document.getElementById('menuBtn')

menuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
}) 

// active link on scroll
// get all links
let navLinks =document.querySelectorAll('nav ul li a');
// get all sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});