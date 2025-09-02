// Smooth scroll for navigation links
document.querySelectorAll('.top-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Resume buttons
const viewBtn = document.querySelector('.resume-btn');
const downloadBtn = document.querySelector('.download-btn');

viewBtn.addEventListener('click', () => {
    window.open('Mahendra_Resume.pdf', '_blank');
});

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Mahendra_Resume.pdf';
    link.download = 'Mahendra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
