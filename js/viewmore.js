const viewMoreBtn = document.querySelector('.view-more');
const description = document.querySelector('.description');

viewMoreBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    description.classList.toggle('expanded');
    
    // Toggle button text
    if (viewMoreBtn.textContent.includes('View more')) {
        viewMoreBtn.textContent = 'View less ▲';
    } else {
        viewMoreBtn.textContent = 'View more ▼';
    }
});